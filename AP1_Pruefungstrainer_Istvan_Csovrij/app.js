// AP1 Quiz-App Logic

let questions = [];
let filteredQuestions = [];
let currentQuestionIndex = 0;

// Starred (bookmarked) questions persistence
let starredStaticIds = JSON.parse(localStorage.getItem("ap1_starred_static_ids")) || [];
let starredDynamicObjects = JSON.parse(localStorage.getItem("ap1_starred_dynamic_objects")) || [];

// Active session persistence to resume quiz after checking bookmarks
let savedNormalRound = null;
let currentTheme = "all";

// Answer state for the current round
let answeredQuestions = [];
let userAnswers = [];

// Stats object
let stats = {
    correct: 0,
    wrong: 0,
    total: 0
};

// Exam & Simulation State
let isExamActive = false;
let isSimulationMode = false;
let examQuestions = [];
let examAnswers = [];
let examCurrentIndex = 0;
let examTimerInterval = null;
let examSecondsRemaining = 90 * 60;
let examSecondsElapsed = 0;

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

// Dynamic DOM elements (initialized in DOMContentLoaded to prevent null caching)
let prevBtn;
let starBtn;
let resumeQuizBtn;

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
    try {
        typeSelect = document.getElementById("question-type-select");
        regenerateBtn = document.getElementById("regenerate-btn");
        prevBtn = document.getElementById("prev-btn");
        starBtn = document.getElementById("star-btn");
        resumeQuizBtn = document.getElementById("resume-quiz-btn");

        const savedMode = localStorage.getItem("ap1_type_mode") || "mix";
        if (typeSelect) typeSelect.value = savedMode;

        initQuestions(savedMode);
        loadStats();
        setupThemeFilters();
        filterQuestions("all");
        
        resetStatsBtn.addEventListener("click", resetStats);
        nextBtn.addEventListener("click", loadNextQuestion);
        
        if (prevBtn) {
            prevBtn.addEventListener("click", loadPrevQuestion);
        }
        
        if (starBtn) {
            starBtn.addEventListener("click", toggleStarCurrentQuestion);
        }
        
        if (resumeQuizBtn) {
            resumeQuizBtn.addEventListener("click", resumeNormalQuizRound);
        }

        // Exam Mode Buttons
        const examModeBtn = document.getElementById("exam-mode-btn");
        const simulationModeBtn = document.getElementById("simulation-mode-btn");
        const examPrevBtn = document.getElementById("exam-prev-btn");
        const examSkipBtn = document.getElementById("exam-skip-btn");
        const examNextBtn = document.getElementById("exam-next-btn");
        const examExitBtn = document.getElementById("exam-exit-btn");
        const examSubmitBtn = document.getElementById("exam-submit-btn");
        const resultsBackBtn = document.getElementById("results-back-btn");

        if (examModeBtn) examModeBtn.addEventListener("click", () => startExamMode(false));
        if (simulationModeBtn) simulationModeBtn.addEventListener("click", () => startExamMode(true));
        if (examPrevBtn) examPrevBtn.addEventListener("click", loadPrevExamQuestion);
        if (examSkipBtn) examSkipBtn.addEventListener("click", skipExamQuestion);
        if (examNextBtn) examNextBtn.addEventListener("click", saveAndNextExamQuestion);
        if (examExitBtn) examExitBtn.addEventListener("click", exitExamMode);
        if (examSubmitBtn) examSubmitBtn.addEventListener("click", submitExam);
        if (resultsBackBtn) resultsBackBtn.addEventListener("click", showMainQuizMode);
        
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
    } catch (error) {
        console.error("Initialization error:", error);
        alert("Fehler bei der Initialisierung der Quiz-App:\n" + error.message + "\n\nStacktrace:\n" + error.stack);
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
        // Save current round if we are coming from a normal theme and have active questions
        if (currentTheme !== "favorites" && filteredQuestions.length > 0) {
            savedNormalRound = {
                filteredQuestions: [...filteredQuestions],
                currentQuestionIndex: currentQuestionIndex,
                answeredQuestions: [...answeredQuestions],
                userAnswers: [...userAnswers],
                theme: currentTheme
            };
            if (resumeQuizBtn) {
                resumeQuizBtn.style.display = "inline-flex";
                resumeQuizBtn.innerHTML = `<i class="fa-solid fa-arrow-left"></i> Haupt-Quiz fortsetzen (Fr. ${currentQuestionIndex + 1})`;
            }
        }
        
        const starredStatics = staticQuestions.filter(q => starredStaticIds.includes(q.id));
        const starredDynamics = [...starredDynamicObjects];
        filteredQuestions = [...starredStatics, ...starredDynamics];
        
        if (filteredQuestions.length === 0) {
            questionThemeEl.textContent = "Merkliste";
            questionNumberEl.textContent = "0 von 0";
            questionTextEl.textContent = "Deine Merkliste ist aktuell leer. Du kannst Fragen während des Quizzes markieren, indem du oben rechts auf das Stern-Symbol (⭐) klickst!";
            codeBlockContainer.style.display = "none";
            
            // Mobile Optimization: Show inline resume button inside the question card
            answersContainer.innerHTML = "";
            if (savedNormalRound) {
                const inlineResumeBtn = document.createElement("button");
                inlineResumeBtn.className = "btn btn-primary btn-full";
                inlineResumeBtn.style.marginTop = "1rem";
                inlineResumeBtn.innerHTML = `<i class="fa-solid fa-arrow-left"></i> Haupt-Quiz fortsetzen (Frage ${savedNormalRound.currentQuestionIndex + 1})`;
                inlineResumeBtn.onclick = resumeNormalQuizRound;
                answersContainer.appendChild(inlineResumeBtn);
            }
            
            if (starBtn) starBtn.style.display = "none";
            const gridContainer = document.getElementById("question-grid");
            if (gridContainer) gridContainer.innerHTML = "";
            return;
        } else {
            if (starBtn) starBtn.style.display = "inline-flex";
        }
    } else {
        // If they click on another theme filter, we discard the saved round
        savedNormalRound = null;
        if (resumeQuizBtn) resumeQuizBtn.style.display = "none";
        
        if (starBtn) starBtn.style.display = "inline-flex";
        if (theme === "all") {
            filteredQuestions = [...questions];
        } else {
            filteredQuestions = questions.filter(q => q.theme === theme);
        }
    }
    
    currentTheme = theme;
    
    // Shuffle the filtered questions to make it dynamic
    shuffleArray(filteredQuestions);
    
    // Limit to exactly 30 questions per round (only if not in favorites mode to let them practice all favorites)
    if (theme !== "favorites" && filteredQuestions.length > 30) {
        filteredQuestions = filteredQuestions.slice(0, 30);
    }
    
    // Reset answers state for the current round
    answeredQuestions = new Array(filteredQuestions.length).fill(false);
    userAnswers = new Array(filteredQuestions.length).fill(null);
    
    currentQuestionIndex = 0;
    loadQuestion();
}

// Resume the saved normal round
function resumeNormalQuizRound() {
    if (!savedNormalRound) return;
    
    // Restore the saved round variables
    filteredQuestions = [...savedNormalRound.filteredQuestions];
    currentQuestionIndex = savedNormalRound.currentQuestionIndex;
    answeredQuestions = [...savedNormalRound.answeredQuestions];
    userAnswers = [...savedNormalRound.userAnswers];
    currentTheme = savedNormalRound.theme;
    
    // Update sidebar filters active state
    const filterButtons = themeFiltersContainer.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-theme") === currentTheme) {
            btn.classList.add("active");
        }
    });
    
    // Clear saved round state
    savedNormalRound = null;
    if (resumeQuizBtn) resumeQuizBtn.style.display = "none";
    
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
    renderQuestionGrid();
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

// Render the navigation grid showing status of all 30 questions
function renderQuestionGrid() {
    const gridContainer = document.getElementById("question-grid");
    if (!gridContainer || filteredQuestions.length === 0) return;
    gridContainer.innerHTML = "";
    
    filteredQuestions.forEach((q, idx) => {
        const item = document.createElement("button");
        item.className = "grid-item";
        item.textContent = idx + 1;
        item.style.width = "2.2rem";
        item.style.height = "2.2rem";
        item.style.borderRadius = "6px";
        item.style.border = "none";
        item.style.fontSize = "0.95rem";
        item.style.fontWeight = "bold";
        item.style.cursor = "pointer";
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center";
        item.style.transition = "all 0.2s";
        
        const isAnswered = answeredQuestions[idx];
        const isStarred = isQuestionStarred(q);
        const isActive = idx === currentQuestionIndex;
        
        if (isActive) {
            item.style.boxShadow = "0 0 0 3px #3182ce"; // Blue active ring
        }
        
        if (isStarred) {
            item.style.backgroundColor = "#feb2b2"; // Red background for marked/starred questions
            item.style.color = "#9b2c2c";
            item.style.border = "2px solid #e53e3e";
        } else if (isAnswered) {
            item.style.backgroundColor = "#4a5568"; // Dark grey for answered
            item.style.color = "white";
        } else {
            item.style.backgroundColor = "#edf2f7"; // Light grey for unanswered (hell)
            item.style.color = "#4a5568";
        }
        
        item.onclick = () => {
            currentQuestionIndex = idx;
            loadQuestion();
        };
        
        gridContainer.appendChild(item);
    });
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
    
    // Update navigation buttons status
    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
        prevBtn.style.opacity = currentQuestionIndex === 0 ? "0.5" : "1";
        prevBtn.style.cursor = currentQuestionIndex === 0 ? "not-allowed" : "pointer";
    }
    
    const q = filteredQuestions[currentQuestionIndex];
    const isAnswered = answeredQuestions[currentQuestionIndex];
    
    // Update star button icon state
    updateStarBtnUI();
    
    // Render question grid dashboard
    renderQuestionGrid();
    
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
    
    if (isAnswered) {
        // Restore answered state
        const ans = userAnswers[currentQuestionIndex];
        
        if (q.type === "multiple-choice" || q.type === "true-false") {
            q.options.forEach((opt, idx) => {
                const btn = document.createElement("button");
                btn.className = "answer-option disabled";
                
                const isSelected = idx === ans.selectedIndex;
                const isCorrect = idx === q.correctAnswer;
                
                if (isCorrect) {
                    btn.classList.add("correct");
                    btn.innerHTML = `<span class="opt-marker"><i class="fa-solid fa-circle-check"></i></span> ${escapeHtml(opt)}`;
                } else if (isSelected) {
                    btn.classList.add("wrong");
                    btn.innerHTML = `<span class="opt-marker"><i class="fa-solid fa-circle-xmark"></i></span> ${escapeHtml(opt)}`;
                } else {
                    btn.innerHTML = `<span class="opt-marker"><i class="fa-regular fa-circle"></i></span> ${escapeHtml(opt)}`;
                }
                answersContainer.appendChild(btn);
            });
            showFeedback(ans.isCorrect, q.explanation);
        } else if (q.type === "text-input") {
            const inputContainer = document.createElement("div");
            inputContainer.className = "text-answer-container";
            
            const input = document.createElement("input");
            input.type = "text";
            input.className = `text-input ${ans.isCorrect ? 'correct' : 'wrong'}`;
            input.value = ans.userAnswer;
            input.disabled = true;
            
            inputContainer.appendChild(input);
            answersContainer.appendChild(inputContainer);
            
            const correctText = ans.isCorrect ? "" : `Richtige Antwort(en): ${q.correctAnswers.join(" oder ")}`;
            showFeedback(ans.isCorrect, q.explanation, correctText);
        } else if (q.type === "open-text") {
            const modelAnswerTitle = document.createElement("div");
            modelAnswerTitle.className = "model-answer-title";
            modelAnswerTitle.innerHTML = "<strong>Vergleich mit der Musterlösung:</strong>";
            
            const modelAnswerBody = document.createElement("div");
            modelAnswerBody.className = "model-answer-body";
            modelAnswerBody.innerHTML = `
                <div class="user-typed-preview">
                    <strong>Deine Antwort:</strong><br>
                    ${escapeHtml(ans.typed).replace(/\n/g, "<br>")}
                </div>
                <div class="musterloesung-text">
                    <strong>Musterlösung:</strong><br>
                    ${escapeHtml(q.musterloesung).replace(/\n/g, "<br>")}
                </div>
            `;
            
            const statusText = document.createElement("div");
            statusText.style.fontWeight = "bold";
            statusText.style.marginTop = "1rem";
            statusText.style.textAlign = "center";
            statusText.style.color = ans.isCorrect ? "#2f855a" : "#c53030";
            statusText.innerHTML = ans.isCorrect 
                ? '<i class="fa-solid fa-circle-check"></i> Du hast diese Antwort als RICHTIG bewertet.' 
                : '<i class="fa-solid fa-circle-xmark"></i> Du hast diese Antwort als FALSCH bewertet.';
            
            answersContainer.appendChild(modelAnswerTitle);
            answersContainer.appendChild(modelAnswerBody);
            answersContainer.appendChild(statusText);
            
            showFeedback(ans.isCorrect, q.explanation, ans.isCorrect ? "Du hattest diese Frage gewusst." : "Du hattest diese Frage nicht gewusst.");
        }
        
        // Show Next button
        nextBtn.style.display = "inline-flex";
        nextBtn.innerHTML = 'Nächste <i class="fa-solid fa-arrow-right"></i>';
    } else {
        // Render empty state to be answered
        if (q.type === "multiple-choice" || q.type === "true-false") {
            q.options.forEach((opt, idx) => {
                const btn = document.createElement("button");
                btn.className = "answer-option";
                btn.innerHTML = `<span class="opt-marker"><i class="fa-regular fa-circle"></i></span> ${escapeHtml(opt)}`;
                btn.addEventListener("click", () => handleSelectOption(btn, idx));
                answersContainer.appendChild(btn);
            });
            // For MC, skip serves as next
            nextBtn.style.display = "inline-flex";
            nextBtn.innerHTML = 'Überspringen <i class="fa-solid fa-angles-right"></i>';
        } else if (q.type === "text-input") {
            const inputContainer = document.createElement("div");
            inputContainer.className = "text-answer-container";
            
            const input = document.createElement("input");
            input.type = "text";
            input.className = "text-input";
            input.placeholder = "Gib deine Antwort ein...";
            input.id = "text-answer-input";
            
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
            
            nextBtn.style.display = "inline-flex";
            nextBtn.innerHTML = 'Überspringen <i class="fa-solid fa-angles-right"></i>';
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
            
            nextBtn.style.display = "inline-flex";
            nextBtn.innerHTML = 'Überspringen <i class="fa-solid fa-angles-right"></i>';
        }
    }
}

// Handle option selection for Multiple Choice
function handleSelectOption(selectedBtn, selectedIndex) {
    const q = filteredQuestions[currentQuestionIndex];
    const allOptions = answersContainer.querySelectorAll(".answer-option");
    
    allOptions.forEach(opt => opt.classList.add("disabled"));
    
    const isCorrect = selectedIndex === q.correctAnswer;
    
    answeredQuestions[currentQuestionIndex] = true;
    userAnswers[currentQuestionIndex] = {
        selectedIndex: selectedIndex,
        isCorrect: isCorrect
    };
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        selectedBtn.querySelector(".opt-marker").innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        updateScore(true);
        showFeedback(true, q.explanation);
    } else {
        selectedBtn.classList.add("wrong");
        selectedBtn.querySelector(".opt-marker").innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        
        const correctBtn = allOptions[q.correctAnswer];
        correctBtn.classList.add("correct");
        correctBtn.querySelector(".opt-marker").innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        
        updateScore(false);
        showFeedback(false, q.explanation);
    }
    
    nextBtn.innerHTML = 'Nächste <i class="fa-solid fa-arrow-right"></i>';
    renderQuestionGrid();
}

// Check text input answer
function checkTextInputAnswer(userAnswer) {
    if (!userAnswer) return;
    
    const q = filteredQuestions[currentQuestionIndex];
    const input = document.getElementById("text-answer-input");
    input.disabled = true;
    submitBtn.style.display = "none";
    
    const normalizedUser = userAnswer.toLowerCase().replace(/\s+/g, "");
    const isCorrect = q.correctAnswers.some(ans => 
        ans.toLowerCase().replace(/\s+/g, "") === normalizedUser
    );
    
    answeredQuestions[currentQuestionIndex] = true;
    userAnswers[currentQuestionIndex] = {
        userAnswer: userAnswer,
        isCorrect: isCorrect
    };
    
    if (isCorrect) {
        input.classList.add("correct");
        updateScore(true);
        showFeedback(true, q.explanation);
    } else {
        input.classList.add("wrong");
        updateScore(false);
        
        const correctText = `Richtige Antwort(en): ${q.correctAnswers.join(" oder ")}`;
        showFeedback(false, q.explanation, correctText);
    }
    
    nextBtn.innerHTML = 'Nächste <i class="fa-solid fa-arrow-right"></i>';
    renderQuestionGrid();
}

// Show the model solution for open text questions and render rating buttons
function showOpenTextSolution() {
    const q = filteredQuestions[currentQuestionIndex];
    const textarea = document.getElementById("open-text-input");
    const userAnswer = textarea.value.trim() || "(Keine Antwort eingegeben)";
    
    answersContainer.innerHTML = "";
    submitBtn.style.display = "none";
    nextBtn.style.display = "none"; // Hide Skip while self-grading
    
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
    ratingContainer.style.display = "flex";
    ratingContainer.style.gap = "0.5rem";
    ratingContainer.style.marginTop = "1rem";
    
    const correctBtn = document.createElement("button");
    correctBtn.className = "btn btn-correct";
    correctBtn.style.backgroundColor = "#48bb78";
    correctBtn.style.color = "white";
    correctBtn.innerHTML = '<i class="fa-solid fa-check"></i> Hatte ich gewusst (Richtig)';
    correctBtn.onclick = () => handleOpenTextResult(true, userAnswer);
    
    const wrongBtn = document.createElement("button");
    wrongBtn.className = "btn btn-wrong";
    wrongBtn.style.backgroundColor = "#f56565";
    wrongBtn.style.color = "white";
    wrongBtn.innerHTML = '<i class="fa-solid fa-xmark"></i> Nicht gewusst (Falsch)';
    wrongBtn.onclick = () => handleOpenTextResult(false, userAnswer);
    
    ratingContainer.appendChild(correctBtn);
    ratingContainer.appendChild(wrongBtn);
    
    answersContainer.appendChild(modelAnswerTitle);
    answersContainer.appendChild(modelAnswerBody);
    answersContainer.appendChild(ratingContainer);
}

// Handle self-graded open-text result
function handleOpenTextResult(isCorrect, userAnswer) {
    const q = filteredQuestions[currentQuestionIndex];
    answersContainer.innerHTML = "";
    
    answeredQuestions[currentQuestionIndex] = true;
    userAnswers[currentQuestionIndex] = {
        typed: userAnswer,
        isCorrect: isCorrect
    };
    
    updateScore(isCorrect);
    showFeedback(isCorrect, q.explanation, isCorrect ? "Sehr gut! Du hast deine Antwort als richtig bewertet." : "Kein Problem! Verinnerliche die Musterlösung für das nächste Mal.");
    
    nextBtn.style.display = "inline-flex";
    nextBtn.innerHTML = 'Nächste <i class="fa-solid fa-arrow-right"></i>';
    renderQuestionGrid();
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
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert(`Glückwunsch! Du hast das Ende der Runde erreicht. Du kannst auf der Übersichtstafel unten deine Antworten noch einmal überprüfen, die markierten Fragen lernen oder auf "Neu generieren" klicken für eine neue Runde!`);
    }
}

// Load previous question
function loadPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
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

// ==================== EXAM MODE LOGIC ====================

// Starts the exam or simulation
function startExamMode(simulation) {
    if (isExamActive) {
        if (!confirm("Du befindest dich bereits in einer Prüfung. Möchtest du diese abbrechen und eine neue starten?")) {
            return;
        }
        clearInterval(examTimerInterval);
    }

    isExamActive = true;
    isSimulationMode = simulation;
    examCurrentIndex = 0;
    
    // Select questions based on selected typeMode (e.g. for Baden-Württemberg open-text exams)
    const chosenMode = typeSelect ? typeSelect.value : "mix";
    
    // Core pool: Real exam questions (id >= 157)
    let coreExamPool = staticQuestions.filter(q => q.id >= 157 && (chosenMode !== "open" || q.type === "open-text"));
    
    // Other pools: static questions and dynamic generators
    let otherStaticPool = [];
    let dynamicPool = [];
    
    if (chosenMode === "open") {
        otherStaticPool = staticQuestions.filter(q => q.id < 157 && q.type === "open-text");
        dynamicPool = generateDynamicQuestions("open");
    } else if (chosenMode === "standard") {
        otherStaticPool = staticQuestions.filter(q => q.id < 157 && q.type !== "open-text");
        dynamicPool = generateDynamicQuestions("standard");
    } else {
        otherStaticPool = staticQuestions.filter(q => q.id < 157);
        dynamicPool = generateDynamicQuestions("mix");
    }
    
    // Mix and shuffle
    shuffleArray(coreExamPool);
    shuffleArray(otherStaticPool);
    shuffleArray(dynamicPool);

    // Target: 25 questions total
    // Select 15 questions from core exam questions (real ones) and 10 from others to ensure a solid and varied test!
    let selected = [];
    
    // Grab up to 15 real exam questions
    selected.push(...coreExamPool.slice(0, 15));
    
    // Grab remaining 10 from static and dynamic pools
    let countNeeded = 25 - selected.length;
    let mixedOthers = [...otherStaticPool, ...dynamicPool];
    shuffleArray(mixedOthers);
    selected.push(...mixedOthers.slice(0, countNeeded));
    
    shuffleArray(selected); // shuffle the final selection so they are distributed randomly
    examQuestions = selected;

    // Initialize answer sheet
    examAnswers = new Array(examQuestions.length).fill(null).map(() => ({
        userAnswer: "",
        selectedIndex: null,
        isSkipped: false,
        isCorrect: false,
        isSelfGraded: false
    }));

    // Setup UI view
    document.querySelector(".container").classList.add("exam-mode-active");
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".quiz-area").style.display = "none";
    document.getElementById("exam-area").style.display = "flex";
    document.getElementById("exam-results-area").style.display = "none";

    // Setup Mode Info & Title
    const titleEl = document.getElementById("exam-mode-title");
    const timerContainer = document.getElementById("exam-timer-container");
    
    if (simulation) {
        titleEl.textContent = "IHK-Prüfungssimulation";
        timerContainer.style.display = "flex";
        
        // Reset timer to 90 minutes
        examSecondsRemaining = 90 * 60;
        examSecondsElapsed = 0;
        document.getElementById("exam-timer").textContent = formatExamTime(examSecondsRemaining);
        
        examTimerInterval = setInterval(() => {
            examSecondsRemaining--;
            examSecondsElapsed++;
            document.getElementById("exam-timer").textContent = formatExamTime(examSecondsRemaining);
            
            if (examSecondsRemaining <= 0) {
                clearInterval(examTimerInterval);
                alert("Die Zeit ist abgelaufen! Deine Prüfung wird automatisch abgegeben.");
                submitExam();
            }
        }, 1000);
    } else {
        titleEl.textContent = "IHK-Übungsmodus";
        timerContainer.style.display = "none";
        examSecondsElapsed = 0;
        examTimerInterval = setInterval(() => {
            examSecondsElapsed++;
        }, 1000);
    }

    loadExamQuestion();
}

// Formats seconds into MM:SS
function formatExamTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Loads current exam question
function loadExamQuestion() {
    const q = examQuestions[examCurrentIndex];
    const ans = examAnswers[examCurrentIndex];

    // Header updates
    document.getElementById("exam-question-theme").textContent = getThemeLabel(q.theme);
    document.getElementById("exam-question-number").textContent = `Aufgabe ${examCurrentIndex + 1} von ${examQuestions.length}`;
    document.getElementById("exam-question-text").textContent = q.question;

    // Handle code block
    const codeBlock = document.getElementById("exam-code-block-container");
    const codeEl = document.getElementById("exam-question-code");
    if (q.code) {
        codeEl.textContent = q.code;
        codeBlock.style.display = "block";
    } else {
        codeBlock.style.display = "none";
    }

    // Prev Button
    const prevBtn = document.getElementById("exam-prev-btn");
    prevBtn.disabled = examCurrentIndex === 0;
    prevBtn.style.opacity = examCurrentIndex === 0 ? "0.5" : "1";
    prevBtn.style.cursor = examCurrentIndex === 0 ? "not-allowed" : "pointer";

    // Skip Button styling
    const skipBtn = document.getElementById("exam-skip-btn");
    if (ans.isSkipped) {
        skipBtn.style.backgroundColor = "#e53e3e";
        skipBtn.style.color = "white";
    } else {
        skipBtn.style.backgroundColor = "#a0aec0";
        skipBtn.style.color = "white";
    }

    // Render Answers
    const answersContainer = document.getElementById("exam-answers-container");
    answersContainer.innerHTML = "";

    if (q.type === "multiple-choice" || q.type === "true-false") {
        q.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "answer-option";
            if (ans.selectedIndex === idx) {
                btn.classList.add("selected");
                btn.style.borderColor = "#3182ce";
                btn.style.backgroundColor = "#ebf8ff";
                btn.innerHTML = `<span class="opt-marker"><i class="fa-solid fa-circle-dot" style="color: #3182ce;"></i></span> ${escapeHtml(opt)}`;
            } else {
                btn.innerHTML = `<span class="opt-marker"><i class="fa-regular fa-circle"></i></span> ${escapeHtml(opt)}`;
            }
            
            btn.onclick = () => {
                const allOpts = answersContainer.querySelectorAll(".answer-option");
                allOpts.forEach(o => {
                    o.classList.remove("selected");
                    o.style.borderColor = "";
                    o.style.backgroundColor = "";
                    o.querySelector(".opt-marker").innerHTML = '<i class="fa-regular fa-circle"></i>';
                });
                btn.classList.add("selected");
                btn.style.borderColor = "#3182ce";
                btn.style.backgroundColor = "#ebf8ff";
                btn.querySelector(".opt-marker").innerHTML = '<i class="fa-solid fa-circle-dot" style="color: #3182ce;"></i>';
                ans.selectedIndex = idx;
                ans.isSkipped = false;
                renderExamQuestionGrid();
            };
            
            answersContainer.appendChild(btn);
        });
    } else if (q.type === "text-input") {
        const inputContainer = document.createElement("div");
        inputContainer.className = "text-answer-container";
        
        const input = document.createElement("input");
        input.type = "text";
        input.className = "text-input";
        input.placeholder = "Gib deine Antwort hier ein...";
        input.value = ans.userAnswer;
        
        input.oninput = () => {
            ans.userAnswer = input.value.trim();
            ans.isSkipped = false;
            renderExamQuestionGrid();
        };
        
        inputContainer.appendChild(input);
        answersContainer.appendChild(inputContainer);
    } else if (q.type === "open-text") {
        const inputContainer = document.createElement("div");
        inputContainer.className = "text-answer-container";
        
        const textarea = document.createElement("textarea");
        textarea.className = "text-input open-textarea";
        textarea.placeholder = "Schreibe deine handschriftliche Antwort bzw. Lösungsansatz hier...";
        textarea.value = ans.userAnswer;
        
        textarea.oninput = () => {
            ans.userAnswer = textarea.value.trim();
            ans.isSkipped = false;
            renderExamQuestionGrid();
        };
        
        inputContainer.appendChild(textarea);
        answersContainer.appendChild(inputContainer);
    }

    renderExamQuestionGrid();
}

// Navigates to previous question
function loadPrevExamQuestion() {
    if (examCurrentIndex > 0) {
        examCurrentIndex--;
        loadExamQuestion();
    }
}

// Skips the current question
function skipExamQuestion() {
    const ans = examAnswers[examCurrentIndex];
    ans.isSkipped = true;
    ans.selectedIndex = null;
    ans.userAnswer = "";
    
    goToNextExamOrWrap();
}

// Saves answer and proceeds
function saveAndNextExamQuestion() {
    const q = examQuestions[examCurrentIndex];
    const ans = examAnswers[examCurrentIndex];

    // Check if answered
    let hasAnswered = false;
    if (q.type === "multiple-choice" || q.type === "true-false") {
        hasAnswered = ans.selectedIndex !== null;
    } else {
        hasAnswered = ans.userAnswer.length > 0;
    }

    if (!hasAnswered) {
        ans.isSkipped = true;
    } else {
        ans.isSkipped = false;
    }

    goToNextExamOrWrap();
}

// Helper to progress index
function goToNextExamOrWrap() {
    if (examCurrentIndex < examQuestions.length - 1) {
        examCurrentIndex++;
        loadExamQuestion();
    } else {
        alert("Du hast das Ende der Fragen erreicht! Klicke unten auf 'Prüfung abgeben & auswerten', um das Testergebnis zu sehen.");
    }
}

// Renders the Grid at the bottom of Exam Card
function renderExamQuestionGrid() {
    const gridContainer = document.getElementById("exam-question-grid");
    if (!gridContainer || examQuestions.length === 0) return;
    gridContainer.innerHTML = "";

    examQuestions.forEach((q, idx) => {
        const item = document.createElement("button");
        item.className = "grid-item";
        item.textContent = idx + 1;
        item.style.width = "2.2rem";
        item.style.height = "2.2rem";
        item.style.borderRadius = "6px";
        item.style.border = "none";
        item.style.fontSize = "0.95rem";
        item.style.fontWeight = "bold";
        item.style.cursor = "pointer";
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center";
        item.style.transition = "all 0.2s";

        const ans = examAnswers[idx];
        const isActive = idx === examCurrentIndex;
        
        let hasAnswer = false;
        if (q.type === "multiple-choice" || q.type === "true-false") {
            hasAnswer = ans.selectedIndex !== null;
        } else {
            hasAnswer = ans.userAnswer.length > 0;
        }

        if (isActive) {
            item.style.boxShadow = "0 0 0 3px #0f766e"; // Green active ring
        }

        if (ans.isSkipped) {
            item.style.backgroundColor = "#feb2b2"; // Red for skipped
            item.style.color = "#9b2c2c";
            item.style.border = "2px solid #e53e3e";
        } else if (hasAnswer) {
            item.style.backgroundColor = "#319795"; // Dark green for answered
            item.style.color = "white";
        } else {
            item.style.backgroundColor = "#edf2f7"; // Light grey for untouched
            item.style.color = "#4a5568";
        }

        item.onclick = () => {
            examCurrentIndex = idx;
            loadExamQuestion();
        };

        gridContainer.appendChild(item);
    });
}

// Exit and abort the exam
function exitExamMode() {
    if (confirm("Möchtest du die aktuelle Prüfung wirklich abbrechen? Deine Antworten gehen dabei verloren.")) {
        clearInterval(examTimerInterval);
        showMainQuizMode();
    }
}

// Restores default mode views
function showMainQuizMode() {
    isExamActive = false;
    isSimulationMode = false;
    clearInterval(examTimerInterval);

    document.querySelector(".container").classList.remove("exam-mode-active");
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector(".quiz-area").style.display = "block";
    document.getElementById("exam-area").style.display = "none";
    document.getElementById("exam-results-area").style.display = "none";
    
    // Reload normal quiz state
    filterQuestions(currentTheme);
}

// Submits the exam and calculates the score
function submitExam() {
    clearInterval(examTimerInterval);

    // Auto-calculate objective questions
    examQuestions.forEach((q, idx) => {
        const ans = examAnswers[idx];
        
        if (q.type === "multiple-choice" || q.type === "true-false") {
            ans.isCorrect = ans.selectedIndex === q.correctAnswer;
            ans.isSelfGraded = true;
        } else if (q.type === "text-input") {
            const normalizedUser = ans.userAnswer.toLowerCase().replace(/\s+/g, "");
            ans.isCorrect = q.correctAnswers.some(correct => 
                correct.toLowerCase().replace(/\s+/g, "") === normalizedUser
            );
            ans.isSelfGraded = true;
        } else if (q.type === "open-text") {
            // Open text starts as incorrect/unmarked, requires self-grading
            ans.isCorrect = false;
            ans.isSelfGraded = false;
        }
    });

    renderExamResults();
}

// Renders the Results view
function renderExamResults() {
    document.getElementById("exam-area").style.display = "none";
    const resultsArea = document.getElementById("exam-results-area");
    resultsArea.style.display = "flex";

    // Calculate score
    calculateExamScores();

    // Time spent
    const minutesElapsed = Math.floor(examSecondsElapsed / 60);
    const secondsElapsed = examSecondsElapsed % 60;
    const timeSpentStr = `Bearbeitungszeit: ${minutesElapsed} Minute(n) und ${secondsElapsed} Sekunde(n).`;
    document.getElementById("results-time-spent").textContent = timeSpentStr;
}

// Recalculates points and displays them in results
function calculateExamScores() {
    let totalQuestions = examQuestions.length;
    let correctCount = examAnswers.filter(ans => ans.isCorrect).length;
    let percent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    const badge = document.getElementById("results-badge");
    if (percent >= 51) {
        badge.textContent = "BESTANDEN 🎉";
        badge.style.backgroundColor = "#48bb78";
    } else {
        badge.textContent = "NICHT BESTANDEN ❌";
        badge.style.backgroundColor = "#e53e3e";
    }

    document.getElementById("results-score-title").textContent = `Du hast ${percent}% erreicht`;
    document.getElementById("results-points-label").textContent = `${correctCount} von ${totalQuestions} Aufgaben richtig bewertet (51% benötigt)`;
    document.getElementById("results-progress").style.width = `${percent}%`;

    // Render detailed list
    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = "";

    examQuestions.forEach((q, idx) => {
        const ans = examAnswers[idx];
        const item = document.createElement("div");
        item.className = "card";
        item.style.borderLeft = ans.isCorrect ? "6px solid #48bb78" : "6px solid #e53e3e";
        item.style.marginBottom = "1rem";
        item.style.padding = "1rem";

        let userAnsText = "";
        let correctAnsText = "";
        
        if (q.type === "multiple-choice" || q.type === "true-false") {
            userAnsText = ans.selectedIndex !== null ? q.options[ans.selectedIndex] : "(Keine Antwort)";
            correctAnsText = q.options[q.correctAnswer];
        } else if (q.type === "text-input") {
            userAnsText = ans.userAnswer || "(Keine Antwort)";
            correctAnsText = q.correctAnswers.join(" oder ");
        } else {
            userAnsText = ans.userAnswer || "(Keine Antwort)";
            correctAnsText = q.musterloesung;
        }

        let selfGradingHTML = "";
        if (q.type === "open-text") {
            selfGradingHTML = `
                <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed #e2e8f0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="font-weight: 600; font-size: 0.9rem; color: #718096;">Bewerte deine Antwort:</span>
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="btn" style="background-color: ${ans.isCorrect ? '#38a169' : '#e2e8f0'}; color: ${ans.isCorrect ? 'white' : '#4a5568'}; font-weight: bold; font-size: 0.85rem; padding: 0.4rem 0.8rem; border: none; cursor: pointer;" onclick="gradeExamOpenQuestion(${idx}, true)">
                            <i class="fa-solid fa-check"></i> Richtig
                        </button>
                        <button class="btn" style="background-color: ${(!ans.isCorrect && ans.isSelfGraded) ? '#e53e3e' : '#e2e8f0'}; color: ${(!ans.isCorrect && ans.isSelfGraded) ? 'white' : '#4a5568'}; font-weight: bold; font-size: 0.85rem; padding: 0.4rem 0.8rem; border: none; cursor: pointer;" onclick="gradeExamOpenQuestion(${idx}, false)">
                            <i class="fa-solid fa-xmark"></i> Falsch
                        </button>
                    </div>
                </div>
            `;
        }

        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                <span class="badge" style="background-color: #4a5568; margin-bottom: 0;">Aufgabe ${idx + 1} (${getThemeLabel(q.theme)})</span>
                <span style="font-weight: bold; color: ${ans.isCorrect ? '#38a169' : '#e53e3e'};">
                    ${ans.isCorrect ? '<i class="fa-solid fa-check-double"></i> 1 Punkt' : '<i class="fa-solid fa-xmark"></i> 0 Punkte'}
                </span>
            </div>
            <h4 style="margin: 0.5rem 0; font-size: 1.05rem;">${escapeHtml(q.question)}</h4>
            ${q.code ? `<pre style="background: #f7fafc; padding: 0.50rem; border-radius: 6px; font-size: 0.85rem; border: 1px solid #e2e8f0; margin: 0.5rem 0;"><code style="font-family: monospace;">${escapeHtml(q.code)}</code></pre>` : ''}
            <div style="margin-top: 0.75rem; font-size: 0.95rem; line-height: 1.45;">
                <div style="margin-bottom: 0.5rem;">
                    <strong>Deine Antwort:</strong> <span style="font-style: italic; color: #2d3748;">${escapeHtml(userAnsText).replace(/\n/g, "<br>")}</span>
                </div>
                <div>
                    <strong>Musterlösung:</strong> <span style="color: #2b6cb0;">${escapeHtml(correctAnsText).replace(/\n/g, "<br>")}</span>
                </div>
                ${q.explanation ? `<div style="margin-top: 0.5rem; font-size: 0.85rem; color: #718096; background-color: #f7fafc; padding: 0.5rem; border-radius: 4px; border-left: 2px solid #3182ce;">
                    <strong>Erklärung:</strong> ${escapeHtml(q.explanation).replace(/\n/g, "<br>")}
                </div>` : ''}
            </div>
            ${selfGradingHTML}
        `;

        resultsList.appendChild(item);
    });
}

// User-triggered self-grading helper
function gradeExamOpenQuestion(idx, isCorrect) {
    const ans = examAnswers[idx];
    ans.isCorrect = isCorrect;
    ans.isSelfGraded = true; // Mark as self graded to style the button
    calculateExamScores(); // Refresh scores dynamically
}
