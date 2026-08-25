// AP1 Quiz-App Logic

let questions = [];
let filteredQuestions = [];
let currentQuestionIndex = 0;

// Starred (bookmarked) questions persistence
let starredStaticIds = JSON.parse(localStorage.getItem("ap1_starred_static_ids")) || [];
let starredDynamicObjects = JSON.parse(localStorage.getItem("ap1_starred_dynamic_objects")) || [];

// Stats object
let stats = {
    correct: 0,
    wrong: 0,
    total: 0
};

// DOM Elements
const questionThemeEl = document.getElementById("question-theme");
const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const codeBlockContainer = document.getElementById("code-block-container");
const questionCodeEl = document.getElementById("question-code");
const answersContainer = document.getElementById("answers-container");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const feedbackCard = document.getElementById("feedback-card");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const explanationText = document.getElementById("explanation-text");
const themeFiltersContainer = document.getElementById("theme-filters");
const starBtn = document.getElementById("star-btn");

// Stat Elements
const statCorrectEl = document.getElementById("stat-correct");
const statWrongEl = document.getElementById("stat-wrong");
const statTotalEl = document.getElementById("stat-total");
const statPercentEl = document.getElementById("stat-percent");
const progressBar = document.getElementById("progress-bar");
const resetStatsBtn = document.getElementById("reset-stats-btn");

// Task Options Elements
let typeSelect;
let regenerateBtn;

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    typeSelect = document.getElementById("question-type-select");
    regenerateBtn = document.getElementById("regenerate-btn");

    const savedMode = localStorage.getItem("ap1_type_mode") || "mix";
    if (typeSelect) typeSelect.value = savedMode;

    initQuestions(savedMode);
    loadStats();
    setupThemeFilters();
    filterQuestions("all");
    
    resetStatsBtn.addEventListener("click", resetStats);
    nextBtn.addEventListener("click", loadNextQuestion);
    
    if (starBtn) {
        starBtn.addEventListener("click", toggleStarCurrentQuestion);
    }
    
    if (regenerateBtn) {
        regenerateBtn.addEventListener("click", () => {
            const selectedMode = typeSelect.value;
            localStorage.setItem("ap1_type_mode", selectedMode);
            initQuestions(selectedMode);
            
            // Re-apply the current theme filter
            const activeFilterBtn = themeFiltersContainer.querySelector(".filter-btn.active");
            const currentTheme = activeFilterBtn ? activeFilterBtn.getAttribute("data-theme") : "all";
            filterQuestions(currentTheme);
            
            alert("Die Übungsaufgaben wurden entsprechend deinen Optionen erfolgreich neu generiert!");
        });
    }
});

// Initialize active questions from static list and dynamic generator
function initQuestions(typeMode) {
    const dynamicQs = generateDynamicQuestions(typeMode);
    
    // Filter the static list based on chosen mode
    let filteredStatic = [];
    if (typeMode === "open") {
        filteredStatic = staticQuestions.filter(q => q.type === "open-text");
    } else if (typeMode === "standard") {
        filteredStatic = staticQuestions.filter(q => q.type !== "open-text");
    } else {
        filteredStatic = [...staticQuestions];
    }
    
    questions = [...filteredStatic, ...dynamicQs];
    console.log(`Initialized ${questions.length} questions (Static: ${filteredStatic.length}, Dynamic: ${dynamicQs.length}) for mode: ${typeMode}`);
}

// Setup click handlers for filters
function setupThemeFilters() {
    const filterButtons = themeFiltersContainer.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const theme = btn.getAttribute("data-theme");
            filterQuestions(theme);
        });
    });
}

// Filter questions based on category (including Favorites)
function filterQuestions(theme) {
    if (theme === "favorites") {
        const starredStatics = staticQuestions.filter(q => starredStaticIds.includes(q.id));
        const starredDynamics = [...starredDynamicObjects];
        filteredQuestions = [...starredStatics, ...starredDynamics];
        
        if (filteredQuestions.length === 0) {
            questionThemeEl.textContent = "Merkliste";
            questionNumberEl.textContent = "0 von 0";
            questionTextEl.textContent = "Deine Merkliste ist aktuell leer. Du kannst Fragen während des Quizzes markieren, indem du oben rechts auf das Stern-Symbol (⭐) klickst!";
            codeBlockContainer.style.display = "none";
            answersContainer.innerHTML = "";
            if (starBtn) starBtn.style.display = "none";
            return;
        } else {
            if (starBtn) starBtn.style.display = "inline-flex";
        }
    } else {
        if (starBtn) starBtn.style.display = "inline-flex";
        if (theme === "all") {
            filteredQuestions = [...questions];
        } else {
            filteredQuestions = questions.filter(q => q.theme === theme);
        }
    }
    
    // Shuffle the filtered questions to make it dynamic
    shuffleArray(filteredQuestions);
    
    // Limit to exactly 30 questions per round (only if not in favorites mode to let them practice all favorites)
    if (theme !== "favorites" && filteredQuestions.length > 30) {
        filteredQuestions = filteredQuestions.slice(0, 30);
    }
    
    currentQuestionIndex = 0;
    loadQuestion();
}

// Shuffle helper
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Check if a question is currently starred
function isQuestionStarred(q) {
    if (!q) return false;
    if (q.id < 1000) {
        return starredStaticIds.includes(q.id);
    } else {
        return starredDynamicObjects.some(obj => obj.question === q.question);
    }
}

// Toggle star state for the current question
function toggleStarCurrentQuestion() {
    if (filteredQuestions.length === 0) return;
    const q = filteredQuestions[currentQuestionIndex];
    const isStarred = isQuestionStarred(q);
    
    if (isStarred) {
        // Remove from starred
        if (q.id < 1000) {
            starredStaticIds = starredStaticIds.filter(id => id !== q.id);
        } else {
            starredDynamicObjects = starredDynamicObjects.filter(obj => obj.question !== q.question);
        }
    } else {
        // Add to starred
        if (q.id < 1000) {
            if (!starredStaticIds.includes(q.id)) {
                starredStaticIds.push(q.id);
            }
        } else {
            if (!starredDynamicObjects.some(obj => obj.question === q.question)) {
                starredDynamicObjects.push(q);
            }
        }
    }
    
    localStorage.setItem("ap1_starred_static_ids", JSON.stringify(starredStaticIds));
    localStorage.setItem("ap1_starred_dynamic_objects", JSON.stringify(starredDynamicObjects));
    
    updateStarBtnUI();
}

// Update star button appearance
function updateStarBtnUI() {
    if (!starBtn || filteredQuestions.length === 0) return;
    const q = filteredQuestions[currentQuestionIndex];
    const isStarred = isQuestionStarred(q);
    const starIcon = starBtn.querySelector("i");
    
    if (isStarred) {
        starIcon.className = "fa-solid fa-star";
        starBtn.style.color = "#ffc107";
    } else {
        starIcon.className = "fa-regular fa-star";
        starBtn.style.color = "#a0aec0";
    }
}

// Load current question to UI
function loadQuestion() {
    // Hide feedback
    feedbackCard.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
    
    if (filteredQuestions.length === 0) {
        questionThemeEl.textContent = "Keine Fragen";
        questionNumberEl.textContent = "0 von 0";
        questionTextEl.textContent = "Für diesen Themenbereich wurden noch keine Fragen erstellt.";
        codeBlockContainer.style.display = "none";
        answersContainer.innerHTML = "";
        if (starBtn) starBtn.style.display = "none";
        return;
    } else {
        if (starBtn) starBtn.style.display = "inline-flex";
    }
    
    const q = filteredQuestions[currentQuestionIndex];
    
    // Update star button icon state
    updateStarBtnUI();
    
    // Update headers
    questionThemeEl.textContent = getThemeLabel(q.theme);
    questionNumberEl.textContent = `Frage ${currentQuestionIndex + 1} von ${filteredQuestions.length}`;
    questionTextEl.textContent = q.question;
    
    // Handle code snippet
    if (q.code) {
        questionCodeEl.textContent = q.code;
        codeBlockContainer.style.display = "block";
    } else {
        codeBlockContainer.style.display = "none";
    }
    
    answersContainer.innerHTML = "";
    
    // Render answer input based on type
    if (q.type === "multiple-choice" || q.type === "true-false") {
        q.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "answer-option";
            btn.innerHTML = `<span class="opt-marker"><i class="fa-regular fa-circle"></i></span> ${escapeHtml(opt)}`;
            btn.addEventListener("click", () => handleSelectOption(btn, idx));
            answersContainer.appendChild(btn);
        });
    } else if (q.type === "text-input") {
        const inputContainer = document.createElement("div");
        inputContainer.className = "text-answer-container";
        
        const input = document.createElement("input");
        input.type = "text";
        input.className = "text-input";
        input.placeholder = "Gib deine Antwort ein...";
        input.id = "text-answer-input";
        
        // Listen to Enter key
        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                checkTextInputAnswer(input.value.trim());
            }
        });
        
        inputContainer.appendChild(input);
        answersContainer.appendChild(inputContainer);
        
        submitBtn.style.display = "inline-flex";
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Antwort prüfen';
        submitBtn.onclick = () => checkTextInputAnswer(input.value.trim());
    } else if (q.type === "open-text") {
        const inputContainer = document.createElement("div");
        inputContainer.className = "text-answer-container";
        
        const textarea = document.createElement("textarea");
        textarea.className = "text-input open-textarea";
        textarea.placeholder = "Schreibe deine Antwort hier...";
        textarea.id = "open-text-input";
        
        inputContainer.appendChild(textarea);
        answersContainer.appendChild(inputContainer);
        
        submitBtn.style.display = "inline-flex";
        submitBtn.innerHTML = '<i class="fa-solid fa-eye"></i> Musterlösung anzeigen';
        submitBtn.onclick = () => showOpenTextSolution();
    }
}

// Handle option selection for Multiple Choice
function handleSelectOption(selectedBtn, selectedIndex) {
    const q = filteredQuestions[currentQuestionIndex];
    const allOptions = answersContainer.querySelectorAll(".answer-option");
    
    // Disable clicking other options
    allOptions.forEach(opt => opt.classList.add("disabled"));
    
    const isCorrect = selectedIndex === q.correctAnswer;
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        selectedBtn.querySelector(".opt-marker").innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        updateScore(true);
        showFeedback(true, q.explanation);
    } else {
        selectedBtn.classList.add("wrong");
        selectedBtn.querySelector(".opt-marker").innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        
        // Show the correct answer in green
        const correctBtn = allOptions[q.correctAnswer];
        correctBtn.classList.add("correct");
        correctBtn.querySelector(".opt-marker").innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        
        updateScore(false);
        showFeedback(false, q.explanation);
    }
    
    nextBtn.style.display = "inline-flex";
}

// Check text input answer
function checkTextInputAnswer(userAnswer) {
    if (!userAnswer) return;
    
    const q = filteredQuestions[currentQuestionIndex];
    const input = document.getElementById("text-answer-input");
    input.disabled = true;
    submitBtn.style.display = "none";
    
    // Compare answers case-insensitively and ignore extra whitespace
    const normalizedUser = userAnswer.toLowerCase().replace(/\s+/g, "");
    
    const isCorrect = q.correctAnswers.some(ans => 
        ans.toLowerCase().replace(/\s+/g, "") === normalizedUser
    );
    
    if (isCorrect) {
        input.classList.add("correct");
        updateScore(true);
        showFeedback(true, q.explanation);
    } else {
        input.classList.add("wrong");
        updateScore(false);
        
        // Display the correct answer
        const correctText = `Richtige Antwort(en): ${q.correctAnswers.join(" oder ")}`;
        showFeedback(false, q.explanation, correctText);
    }
    
    nextBtn.style.display = "inline-flex";
}

// Show the model solution for open text questions and render rating buttons
function showOpenTextSolution() {
    const q = filteredQuestions[currentQuestionIndex];
    const textarea = document.getElementById("open-text-input");
    const userAnswer = textarea.value.trim() || "(Keine Antwort eingegeben)";
    
    // Clear the inputs to show model answer and rating buttons
    answersContainer.innerHTML = "";
    submitBtn.style.display = "none";
    
    const modelAnswerTitle = document.createElement("div");
    modelAnswerTitle.className = "model-answer-title";
    modelAnswerTitle.innerHTML = "<strong>Vergleiche deine Antwort mit der Musterlösung:</strong>";
    
    const modelAnswerBody = document.createElement("div");
    modelAnswerBody.className = "model-answer-body";
    modelAnswerBody.innerHTML = `
        <div class="user-typed-preview">
            <strong>Deine Antwort:</strong><br>
            ${escapeHtml(userAnswer).replace(/\n/g, "<br>")}
        </div>
        <div class="musterloesung-text">
            <strong>Musterlösung:</strong><br>
            ${escapeHtml(q.musterloesung).replace(/\n/g, "<br>")}
        </div>
    `;
    
    const ratingContainer = document.createElement("div");
    ratingContainer.className = "rating-container";
    
    const correctBtn = document.createElement("button");
    correctBtn.className = "btn btn-correct";
    correctBtn.innerHTML = '<i class="fa-solid fa-check"></i> Hatte ich gewusst (Richtig)';
    correctBtn.onclick = () => handleOpenTextResult(true, q.explanation);
    
    const wrongBtn = document.createElement("button");
    wrongBtn.className = "btn btn-wrong";
    wrongBtn.innerHTML = '<i class="fa-solid fa-xmark"></i> Nicht gewusst (Falsch)';
    wrongBtn.onclick = () => handleOpenTextResult(false, q.explanation);
    
    ratingContainer.appendChild(correctBtn);
    ratingContainer.appendChild(wrongBtn);
    
    answersContainer.appendChild(modelAnswerTitle);
    answersContainer.appendChild(modelAnswerBody);
    answersContainer.appendChild(ratingContainer);
}

// Handle self-graded open-text result
function handleOpenTextResult(isCorrect, explanation) {
    answersContainer.innerHTML = "";
    updateScore(isCorrect);
    showFeedback(isCorrect, explanation, isCorrect ? "Sehr gut! Du hast deine Antwort als richtig bewertet." : "Kein Problem! Verinnerliche die Musterlösung für das nächste Mal.");
    nextBtn.style.display = "inline-flex";
}


// Show feedback details
function showFeedback(isCorrect, explanation, extraText = "") {
    feedbackCard.style.display = "block";
    feedbackCard.className = `card feedback-card ${isCorrect ? 'correct' : 'wrong'}`;
    
    if (isCorrect) {
        feedbackTitle.innerHTML = '<i class="fa-solid fa-face-smile"></i> Richtig!';
        feedbackText.textContent = "Sehr gut! Du hast die Frage richtig beantwortet.";
    } else {
        feedbackTitle.innerHTML = '<i class="fa-solid fa-face-frown"></i> Leider falsch...';
        feedbackText.textContent = extraText || "Das war leider nicht die korrekte Antwort.";
    }
    
    explanationText.innerHTML = (explanation || "Keine Erklärung verfügbar.").replace(/\n/g, "<br>");
}

// Load next question
function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= filteredQuestions.length) {
        // Reshuffle and start over
        alert(`Glückwunsch! Du hast alle ${filteredQuestions.length} Fragen dieser Runde durchgearbeitet. Die Fragen werden neu gemischt!`);
        shuffleArray(filteredQuestions);
        currentQuestionIndex = 0;
    }
    loadQuestion();
}

// Update Score statistics
function updateScore(isCorrect) {
    stats.total++;
    if (isCorrect) {
        stats.correct++;
    } else {
        stats.wrong++;
    }
    
    saveStats();
    updateStatsUI();
}

// Update UI stats
function updateStatsUI() {
    statCorrectEl.textContent = stats.correct;
    statWrongEl.textContent = stats.wrong;
    statTotalEl.textContent = stats.total;
    
    const percent = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    statPercentEl.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
}

// Save stats to LocalStorage
function saveStats() {
    localStorage.setItem("ap1_quiz_stats", JSON.stringify(stats));
}

// Load stats from LocalStorage
function loadStats() {
    const saved = localStorage.getItem("ap1_quiz_stats");
    if (saved) {
        stats = JSON.parse(saved);
    }
    updateStatsUI();
}

// Reset Stats
function resetStats() {
    if (confirm("Möchtest du deine Lernstatistik wirklich zurücksetzen?")) {
        stats = { correct: 0, wrong: 0, total: 0 };
        saveStats();
        updateStatsUI();
    }
}

// Translate theme keys to Labels
function getThemeLabel(key) {
    const labels = {
        lf1: "LF 1: Unternehmen & Markt",
        lf2: "LF 2: Arbeitsplatz & Hardware",
        lf3: "LF 3: Netzwerke & Protokolle",
        lf4: "LF 4: Schutz & Sicherheit",
        lf5: "LF 5: Software & SQL",
        lf6: "LF 6: Services & WiSo"
    };
    return labels[key] || key;
}

// Helper to escape HTML characters
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
