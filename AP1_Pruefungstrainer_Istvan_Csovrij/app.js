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
let difficultySelect;
let regenerateBtn;

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    try {
        typeSelect = document.getElementById("question-type-select");
        difficultySelect = document.getElementById("question-difficulty-select");
        regenerateBtn = document.getElementById("regenerate-btn");
        prevBtn = document.getElementById("prev-btn");
        starBtn = document.getElementById("star-btn");
        resumeQuizBtn = document.getElementById("resume-quiz-btn");

        const savedMode = localStorage.getItem("ap1_type_mode") || "mix";
        if (typeSelect) typeSelect.value = savedMode;

        const savedDiff = localStorage.getItem("ap1_difficulty_mode") || "all";
        if (difficultySelect) difficultySelect.value = savedDiff;

        initQuestions(savedMode);
        loadStats();
        setupThemeFilters();
        filterQuestions("all");
        initWhiteboard();
        
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
        
        if (typeSelect) {
            typeSelect.addEventListener("change", () => {
                const selectedMode = typeSelect.value;
                localStorage.setItem("ap1_type_mode", selectedMode);
                initQuestions(selectedMode);
                
                // Re-apply the current theme filter
                const activeFilterBtn = themeFiltersContainer ? themeFiltersContainer.querySelector(".filter-btn.active") : null;
                const currentTheme = activeFilterBtn ? activeFilterBtn.getAttribute("data-theme") : "all";
                filterQuestions(currentTheme);
            });
        }

        if (difficultySelect) {
            difficultySelect.addEventListener("change", () => {
                const selectedDiff = difficultySelect.value;
                localStorage.setItem("ap1_difficulty_mode", selectedDiff);
                const activeFilterBtn = themeFiltersContainer ? themeFiltersContainer.querySelector(".filter-btn.active") : null;
                const currentTheme = activeFilterBtn ? activeFilterBtn.getAttribute("data-theme") : "all";
                filterQuestions(currentTheme);
            });
        }
        
        if (regenerateBtn) {
            regenerateBtn.addEventListener("click", () => {
                const selectedMode = typeSelect ? typeSelect.value : "mix";
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
    if (typeMode === "open") {
        questions = questions.filter(q => q.type === "open-text");
    }
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
        } else if (theme === "bawue-focus") {
            // When selecting BaWü focus, automatically set mode to open-text and reload questions
            if (typeSelect && typeSelect.value !== "open") {
                typeSelect.value = "open";
                localStorage.setItem("ap1_type_mode", "open");
                initQuestions("open");
            }
            filteredQuestions = questions.filter(q => 
                q.type === "open-text" && (
                    q.isBawueFocus === true || 
                    q.theme === "bawue-special" || 
                    (q.topic && q.topic.toLowerCase().includes("bawü"))
                )
            );
            if (filteredQuestions.length === 0) {
                filteredQuestions = questions.filter(q => q.type === "open-text");
            }
        } else if (theme === "diagrams" || theme === "diagram-training") {
            filteredQuestions = questions.filter(q => 
                q.theme === "diagrams" || 
                q.isDiagram === true || 
                (q.diagramType && q.diagramType.length > 0) ||
                (q.topic && (
                    q.topic.toLowerCase().includes("diagramm") || 
                    q.topic.toLowerCase().includes("uml") || 
                    q.topic.toLowerCase().includes("erd") || 
                    q.topic.toLowerCase().includes("epk") || 
                    q.topic.toLowerCase().includes("bpmn") || 
                    q.topic.toLowerCase().includes("netzplan") || 
                    q.topic.toLowerCase().includes("struktogramm") || 
                    q.topic.toLowerCase().includes("pap") ||
                    q.topic.toLowerCase().includes("use-case") ||
                    q.topic.toLowerCase().includes("use case") ||
                    q.topic.toLowerCase().includes("klassendiagramm") ||
                    q.topic.toLowerCase().includes("entscheidungstabelle")
                )) ||
                (q.question && (
                    q.question.toLowerCase().includes("use-case") ||
                    q.question.toLowerCase().includes("klassendiagramm") ||
                    q.question.toLowerCase().includes("erd") ||
                    q.question.toLowerCase().includes("entity-relationship") ||
                    q.question.toLowerCase().includes("kardinalität") ||
                    q.question.toLowerCase().includes("epk") ||
                    q.question.toLowerCase().includes("bpmn") ||
                    q.question.toLowerCase().includes("netzplan") ||
                    q.question.toLowerCase().includes("kritischer pfad") ||
                    q.question.toLowerCase().includes("struktogramm") ||
                    q.question.toLowerCase().includes("entscheidungstabelle")
                ))
            );
        } else if (theme === "calculations" || theme === "rechnen") {
            filteredQuestions = questions.filter(q => 
                q.theme === "calculations" || 
                q.isCalculation === true || 
                (q.topic && (
                    q.topic.toLowerCase().includes("rechn") || 
                    q.topic.toLowerCase().includes("kalkulation") || 
                    q.topic.toLowerCase().includes("strom") || 
                    q.topic.toLowerCase().includes("leistung") || 
                    q.topic.toLowerCase().includes("übertragung") || 
                    q.topic.toLowerCase().includes("download") || 
                    q.topic.toLowerCase().includes("umrechnung") || 
                    q.topic.toLowerCase().includes("kredit") || 
                    q.topic.toLowerCase().includes("leasing") || 
                    q.topic.toLowerCase().includes("amortisation") || 
                    q.topic.toLowerCase().includes("skonto") || 
                    q.topic.toLowerCase().includes("zins") || 
                    q.topic.toLowerCase().includes("binär") || 
                    q.topic.toLowerCase().includes("hexadezimal") || 
                    q.topic.toLowerCase().includes("oktal") || 
                    q.topic.toLowerCase().includes("zahlensystem") || 
                    q.topic.toLowerCase().includes("subnetting") || 
                    q.topic.toLowerCase().includes("raid") || 
                    q.topic.toLowerCase().includes("pue") || 
                    q.topic.toLowerCase().includes("usv") || 
                    q.topic.toLowerCase().includes("speichereinheit")
                )) ||
                (q.question && (
                    q.question.toLowerCase().includes("berechne") || 
                    q.question.toLowerCase().includes("kalkulation") || 
                    q.question.toLowerCase().includes("bezugspreis") || 
                    q.question.toLowerCase().includes("einstandspreis") || 
                    q.question.toLowerCase().includes("selbstkosten") || 
                    q.question.toLowerCase().includes("barverkaufspreis") || 
                    q.question.toLowerCase().includes("listenverkaufspreis") || 
                    q.question.toLowerCase().includes("stromkosten") || 
                    q.question.toLowerCase().includes("kwh") || 
                    q.question.toLowerCase().includes("wirkleistung") || 
                    q.question.toLowerCase().includes("scheinleistung") || 
                    q.question.toLowerCase().includes("mbit/s") || 
                    q.question.toLowerCase().includes("übertragungszeit") || 
                    q.question.toLowerCase().includes("downloadzeit") || 
                    q.question.toLowerCase().includes("amortisation") || 
                    q.question.toLowerCase().includes("zinssatz") || 
                    q.question.toLowerCase().includes("skonto") || 
                    q.question.toLowerCase().includes("dezimal") || 
                    q.question.toLowerCase().includes("hexadezimal") || 
                    q.question.toLowerCase().includes("dualzahl") || 
                    q.question.toLowerCase().includes("oktal") || 
                    q.question.toLowerCase().includes("gibibyte") || 
                    q.question.toLowerCase().includes("tebibyte")
                ))
            );
        } else if (theme === "power-calc" || theme === "strom" || theme === "power") {
            filteredQuestions = questions.filter(q => 
                q.theme === "power-calc" || 
                q.isPowerCalc === true || 
                (q.topic && (
                    q.topic.toLowerCase().includes("strom") || 
                    q.topic.toLowerCase().includes("leistung") || 
                    q.topic.toLowerCase().includes("usv") || 
                    q.topic.toLowerCase().includes("pue") || 
                    q.topic.toLowerCase().includes("dcie") || 
                    q.topic.toLowerCase().includes("btu") || 
                    q.topic.toLowerCase().includes("eer") || 
                    q.topic.toLowerCase().includes("wirkleistung") || 
                    q.topic.toLowerCase().includes("scheinleistung") || 
                    q.topic.toLowerCase().includes("blindleistung") || 
                    q.topic.toLowerCase().includes("drehstrom") || 
                    q.topic.toLowerCase().includes("spannungsabfall") || 
                    q.topic.toLowerCase().includes("ohm") || 
                    q.topic.toLowerCase().includes("elektrotechnik")
                )) ||
                (q.question && (
                    q.question.toLowerCase().includes("wirkleistung") || 
                    q.question.toLowerCase().includes("scheinleistung") || 
                    q.question.toLowerCase().includes("blindleistung") || 
                    q.question.toLowerCase().includes("kvar") || 
                    q.question.toLowerCase().includes("kva") || 
                    q.question.toLowerCase().includes("stromkosten") || 
                    q.question.toLowerCase().includes("pue") || 
                    q.question.toLowerCase().includes("dcie") || 
                    q.question.toLowerCase().includes("klimatisierung") || 
                    q.question.toLowerCase().includes("autonomiezeit") || 
                    q.question.toLowerCase().includes("überbrückungszeit") || 
                    q.question.toLowerCase().includes("spannungsabfall") || 
                    q.question.toLowerCase().includes("leitungsverlust")
                ))
            );
        } else if (theme === "hard-mode" || theme === "hard") {
            filteredQuestions = questions.filter(q => 
                q.isHard === true || 
                q.difficulty === "hard" || 
                q.isMasterclass === true ||
                (q.topic && q.topic.includes("Meisterklasse")) ||
                (q.question && q.question.includes("Meisterklasse"))
            );
        } else {
            filteredQuestions = questions.filter(q => q.theme === theme);
        }
        
        // Apply Schwierigkeitsgrad filter if selected and not already in dedicated hard-mode
        if (difficultySelect && difficultySelect.value === "hard" && theme !== "hard-mode") {
            const hardSubset = filteredQuestions.filter(q => 
                q.isHard === true || 
                q.difficulty === "hard" || 
                q.isMasterclass === true ||
                (q.topic && q.topic.includes("Meisterklasse")) ||
                (q.question && q.question.includes("Meisterklasse"))
            );
            if (hardSubset.length > 0) {
                filteredQuestions = hardSubset;
            }
        } else if (difficultySelect && difficultySelect.value === "standard" && theme !== "hard-mode") {
            const stdSubset = filteredQuestions.filter(q => 
                !q.isHard && q.difficulty !== "hard" && !q.isMasterclass &&
                !(q.topic && q.topic.includes("Meisterklasse")) &&
                !(q.question && q.question.includes("Meisterklasse"))
            );
            if (stdSubset.length > 0) {
                filteredQuestions = stdSubset;
            }
        }

        // Safety: If open-text mode is active, ensure 100% of filtered questions are open-text
        if (typeSelect && typeSelect.value === "open") {
            filteredQuestions = filteredQuestions.filter(q => q.type === "open-text");
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
    questionTextEl.innerHTML = formatQuestionText(q.question);
    
    // Handle Visual Diagram Graphic (SVG)
    const diagContainer = document.getElementById("diagram-visual-container");
    if (diagContainer) {
        if (q.diagramSvg) {
            diagContainer.innerHTML = `
                <div class="svg-diagram-wrapper">
                    <span class="diagram-header-badge"><i class="fa-solid fa-image"></i> ${escapeHtml(q.diagramTitle || "Referenzdiagramm / Modell")}</span>
                    ${q.diagramSvg}
                    ${q.diagramCaption ? `<div class="diagram-caption">${escapeHtml(q.diagramCaption)}</div>` : ''}
                </div>
            `;
            diagContainer.style.display = "flex";
        } else {
            diagContainer.innerHTML = "";
            diagContainer.style.display = "none";
        }
    }
    
    // Handle code snippet
    if (q.code) {
        questionCodeEl.textContent = q.code;
        codeBlockContainer.style.display = "block";
    } else {
        codeBlockContainer.style.display = "none";
    }

    // Handle Diagram sketch helper banner
    const diagBanner = document.getElementById("diagram-banner-container");
    if (diagBanner) {
        const isDiag = q.isDiagram === true || q.diagramType || q.theme === "diagrams" || (q.topic && (q.topic.toLowerCase().includes("diagramm") || q.topic.toLowerCase().includes("uml") || q.topic.toLowerCase().includes("erd") || q.topic.toLowerCase().includes("epk") || q.topic.toLowerCase().includes("bpmn") || q.topic.toLowerCase().includes("netzplan") || q.topic.toLowerCase().includes("struktogramm")));
        if (isDiag) {
            const diagName = q.diagramType || (q.topic ? q.topic : "Diagramm / Modell");
            diagBanner.style.display = "block";
            diagBanner.innerHTML = `
                <div style="background: linear-gradient(135deg, #f0fdf4, #ecfeff); border: 1px solid #06b6d4; border-radius: 8px; padding: 0.65rem 0.9rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; color: #0e7490;">
                        <i class="fa-solid fa-pen-ruler" style="color: #0891b2; font-size: 1.15rem;"></i>
                        <span><strong>Diagramm-Aufgabe (${escapeHtml(diagName)}):</strong> Skizziere oder prüfe dein Modell im Zeichenboard!</span>
                    </div>
                    <button id="inline-quiz-wb-btn" class="btn" style="background: linear-gradient(135deg, #0891b2, #0284c7); color: white; padding: 0.35rem 0.75rem; font-size: 0.85rem; border-radius: 6px; border: none; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
                        <i class="fa-solid fa-palette"></i> Whiteboard öffnen
                    </button>
                </div>
            `;
            const inlineBtn = document.getElementById("inline-quiz-wb-btn");
            if (inlineBtn) {
                inlineBtn.onclick = openWhiteboard;
            }
        } else {
            diagBanner.style.display = "none";
            diagBanner.innerHTML = "";
        }
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
            
            const solSvg = (typeof VisualDiagrams !== "undefined" && VisualDiagrams.getAutoDiagramSvg) 
                ? VisualDiagrams.getAutoDiagramSvg(q) 
                : (q.solutionDiagramSvg || (q.isDiagram ? q.diagramSvg : null));
            const diagSvgHTML = solSvg ? `
                <div class="svg-diagram-wrapper" style="margin-top: 1rem; border-color: #86efac; background: #f0fdf4;">
                    <span class="solution-diagram-badge"><i class="fa-solid fa-circle-check"></i> Grafische Musterlösung / Tabellenschema:</span>
                    ${solSvg}
                    ${q.solutionDiagramCaption ? `<div class="diagram-caption">${escapeHtml(q.solutionDiagramCaption)}</div>` : ''}
                </div>
            ` : '';
            
            const modelAnswerBody = document.createElement("div");
            modelAnswerBody.className = "model-answer-body";
            modelAnswerBody.innerHTML = `
                <div class="user-typed-preview">
                    <strong>Deine Antwort:</strong><br>
                    ${escapeHtml(ans.typed).replace(/\n/g, "<br>")}
                </div>
                <div class="musterloesung-text">
                    <strong>Musterlösung:</strong><br>
                    ${escapeHtml(q.musterloesung || q.correctAnswer || "").replace(/\n/g, "<br>")}
                </div>
                ${diagSvgHTML}
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
    
    const solSvg = (typeof VisualDiagrams !== "undefined" && VisualDiagrams.getAutoDiagramSvg) 
        ? VisualDiagrams.getAutoDiagramSvg(q) 
        : (q.solutionDiagramSvg || (q.isDiagram ? q.diagramSvg : null));
    const diagSvgHTML = solSvg ? `
        <div class="svg-diagram-wrapper" style="margin-top: 1rem; border-color: #86efac; background: #f0fdf4;">
            <span class="solution-diagram-badge"><i class="fa-solid fa-circle-check"></i> Grafische Musterlösung / Tabellenschema:</span>
            ${solSvg}
            ${q.solutionDiagramCaption ? `<div class="diagram-caption">${escapeHtml(q.solutionDiagramCaption)}</div>` : ''}
        </div>
    ` : '';
    
    const modelAnswerBody = document.createElement("div");
    modelAnswerBody.className = "model-answer-body";
    modelAnswerBody.innerHTML = `
        <div class="user-typed-preview">
            <strong>Deine Antwort:</strong><br>
            ${escapeHtml(userAnswer).replace(/\n/g, "<br>")}
        </div>
        <div class="musterloesung-text">
            <strong>Musterlösung:</strong><br>
            ${escapeHtml(q.musterloesung || q.correctAnswer || "").replace(/\n/g, "<br>")}
        </div>
        ${diagSvgHTML}
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
    
    const q = filteredQuestions && filteredQuestions[currentQuestionIndex] ? filteredQuestions[currentQuestionIndex] : null;
    const solDiagContainer = document.getElementById("solution-diagram-container");
    if (solDiagContainer) {
        const solSvg = q ? ((typeof VisualDiagrams !== "undefined" && VisualDiagrams.getAutoDiagramSvg) ? VisualDiagrams.getAutoDiagramSvg(q) : (q.solutionDiagramSvg || (q.isDiagram ? q.diagramSvg : null))) : null;
        if (solSvg) {
            solDiagContainer.innerHTML = `
                <div class="svg-diagram-wrapper" style="border-color: #86efac; background: #f0fdf4;">
                    <span class="solution-diagram-badge"><i class="fa-solid fa-circle-check"></i> Musterlösung (Grafisches Diagramm / Tabellenschema):</span>
                    ${solSvg}
                    ${q.solutionDiagramCaption ? `<div class="diagram-caption">${escapeHtml(q.solutionDiagramCaption)}</div>` : ''}
                </div>
            `;
            solDiagContainer.style.display = "flex";
        } else {
            solDiagContainer.innerHTML = "";
            solDiagContainer.style.display = "none";
        }
    }
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
        lf6: "LF 6: Services & WiSo",
        wiso: "WiSo: Wirtschafts- & Sozialkunde",
        "bawue-special": "BW Spezial: IT-Systeme & Prozesse",
        "bawue-focus": "🔮 IHK Stuttgart Fokus",
        diagrams: "📐 Diagramme & Modellierung",
        "diagram-training": "📐 Diagramme & Modellierung",
        calculations: "🧮 Rechnen & Handelskalkulation",
        rechnen: "🧮 Rechnen & Handelskalkulation",
        "power-calc": "⚡ Strom, Leistung & Einheiten (LF 2/6)",
        power: "⚡ Strom, Leistung & Einheiten (LF 2/6)",
        strom: "⚡ Strom, Leistung & Einheiten (LF 2/6)",
        "hard-mode": "🔥 IHK Meisterklasse (Schwer)",
        hard: "🔥 IHK Meisterklasse (Schwer)"
    };
    return labels[key] || key;
}

// Helper to escape HTML characters
function escapeHtml(text) {
    if (text === null || text === undefined) return "";
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Helper to format question text with markdown bolding, code and line breaks
function formatQuestionText(text) {
    if (!text) return "";
    let formatted = escapeHtml(text);
    
    // Bold markdown: **text** -> <strong>text</strong>
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Inline code markdown: `code` -> <code>code</code>
    formatted = formatted.replace(/\x60([^\x60]+)\x60/g, '<code style="background: #f1f5f9; padding: 0.15rem 0.35rem; border-radius: 4px; font-size: 0.9em; border: 1px solid #e2e8f0; font-family: monospace;">$1</code>');
    
    // Convert newlines to <br>
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
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
    const isHardExam = difficultySelect && difficultySelect.value === "hard";
    
    // Core pool: Real exam questions (id >= 157)
    let coreExamPool = staticQuestions.filter(q => q.id >= 157 && (chosenMode !== "open" || q.type === "open-text"));
    if (isHardExam) {
        coreExamPool = coreExamPool.filter(q => q.isHard || q.difficulty === "hard" || (q.topic && q.topic.includes("Meisterklasse")) || (q.question && q.question.includes("Meisterklasse")));
    }
    
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

    if (isHardExam) {
        otherStaticPool = otherStaticPool.filter(q => q.isHard || q.difficulty === "hard" || (q.topic && q.topic.includes("Meisterklasse")) || (q.question && q.question.includes("Meisterklasse")));
        dynamicPool = dynamicPool.filter(q => q.isHard || q.difficulty === "hard" || (q.topic && q.topic.includes("Meisterklasse")) || (q.question && q.question.includes("Meisterklasse")));
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
    if (chosenMode === "open") {
        selected = selected.filter(q => q.type === "open-text");
    }
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
    document.querySelectorAll(".sidebar").forEach(s => s.style.display = "none");
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
    document.getElementById("exam-question-text").innerHTML = formatQuestionText(q.question);

    // Handle Visual Diagram Graphic (SVG) in Exam Mode
    const examDiagContainer = document.getElementById("exam-diagram-visual-container");
    if (examDiagContainer) {
        if (q.diagramSvg) {
            examDiagContainer.innerHTML = `
                <div class="svg-diagram-wrapper">
                    <span class="diagram-header-badge"><i class="fa-solid fa-image"></i> ${escapeHtml(q.diagramTitle || "Referenzdiagramm / Modell")}</span>
                    ${q.diagramSvg}
                    ${q.diagramCaption ? `<div class="diagram-caption">${escapeHtml(q.diagramCaption)}</div>` : ''}
                </div>
            `;
            examDiagContainer.style.display = "flex";
        } else {
            examDiagContainer.innerHTML = "";
            examDiagContainer.style.display = "none";
        }
    }

    // Handle code block
    const codeBlock = document.getElementById("exam-code-block-container");
    const codeEl = document.getElementById("exam-question-code");
    if (q.code) {
        codeEl.textContent = q.code;
        codeBlock.style.display = "block";
    } else {
        codeBlock.style.display = "none";
    }

    // Handle Exam Diagram helper banner
    const examDiagBanner = document.getElementById("exam-diagram-banner-container");
    if (examDiagBanner) {
        const isDiag = q.isDiagram === true || q.diagramType || q.theme === "diagrams" || (q.topic && (q.topic.toLowerCase().includes("diagramm") || q.topic.toLowerCase().includes("uml") || q.topic.toLowerCase().includes("erd") || q.topic.toLowerCase().includes("epk") || q.topic.toLowerCase().includes("bpmn") || q.topic.toLowerCase().includes("netzplan") || q.topic.toLowerCase().includes("struktogramm")));
        if (isDiag) {
            const diagName = q.diagramType || (q.topic ? q.topic : "Diagramm / Modell");
            examDiagBanner.style.display = "block";
            examDiagBanner.innerHTML = `
                <div style="background: linear-gradient(135deg, #f0fdf4, #ecfeff); border: 1px solid #06b6d4; border-radius: 8px; padding: 0.65rem 0.9rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; color: #0e7490;">
                        <i class="fa-solid fa-pen-ruler" style="color: #0891b2; font-size: 1.15rem;"></i>
                        <span><strong>Diagramm-Aufgabe (${escapeHtml(diagName)}):</strong> Skizziere deine Lösung auf dem Zeichenboard!</span>
                    </div>
                    <button id="inline-exam-wb-btn" class="btn" style="background: linear-gradient(135deg, #0891b2, #0284c7); color: white; padding: 0.35rem 0.75rem; font-size: 0.85rem; border-radius: 6px; border: none; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
                        <i class="fa-solid fa-palette"></i> Whiteboard öffnen
                    </button>
                </div>
            `;
            const inlineExamBtn = document.getElementById("inline-exam-wb-btn");
            if (inlineExamBtn) {
                inlineExamBtn.onclick = openWhiteboard;
            }
        } else {
            examDiagBanner.style.display = "none";
            examDiagBanner.innerHTML = "";
        }
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
    document.querySelectorAll(".sidebar").forEach(s => s.style.display = "");
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
            correctAnsText = q.musterloesung || q.correctAnswer || "";
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

        const solSvg = (typeof VisualDiagrams !== "undefined" && VisualDiagrams.getAutoDiagramSvg) 
            ? VisualDiagrams.getAutoDiagramSvg(q) 
            : (q.solutionDiagramSvg || (q.isDiagram ? q.diagramSvg : null));
        const diagSvgHTML = solSvg ? `
            <div class="svg-diagram-wrapper" style="margin-top: 0.75rem; border-color: #86efac; background: #f0fdf4;">
                <span class="solution-diagram-badge"><i class="fa-solid fa-circle-check"></i> Musterlösung (Grafisches Diagramm / Tabellenschema):</span>
                ${solSvg}
                ${q.solutionDiagramCaption ? `<div class="diagram-caption">${escapeHtml(q.solutionDiagramCaption)}</div>` : ''}
            </div>
        ` : '';

        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                <span class="badge" style="background-color: #4a5568; margin-bottom: 0;">Aufgabe ${idx + 1} (${getThemeLabel(q.theme)})</span>
                <span style="font-weight: bold; color: ${ans.isCorrect ? '#38a169' : '#e53e3e'};">
                    ${ans.isCorrect ? '<i class="fa-solid fa-check-double"></i> 1 Punkt' : '<i class="fa-solid fa-xmark"></i> 0 Punkte'}
                </span>
            </div>
            <h4 style="margin: 0.5rem 0; font-size: 1.05rem; line-height: 1.5;">${formatQuestionText(q.question)}</h4>
            ${q.code ? `<pre style="background: #f7fafc; padding: 0.50rem; border-radius: 6px; font-size: 0.85rem; border: 1px solid #e2e8f0; margin: 0.5rem 0;"><code style="font-family: monospace;">${escapeHtml(q.code)}</code></pre>` : ''}
            <div style="margin-top: 0.75rem; font-size: 0.95rem; line-height: 1.45;">
                <div style="margin-bottom: 0.5rem;">
                    <strong>Deine Antwort:</strong> <span style="font-style: italic; color: #2d3748;">${escapeHtml(userAnsText).replace(/\n/g, "<br>")}</span>
                </div>
                <div>
                    <strong>Musterlösung:</strong> <span style="color: #2b6cb0;">${escapeHtml(correctAnsText).replace(/\n/g, "<br>")}</span>
                </div>
                ${diagSvgHTML}
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


// ============================================================================
// Interactive Diagram Whiteboard Canvas Engine
// ============================================================================
let wbCanvas = null;
let wbCtx = null;
let wbWrapper = null;
let wbCurrentTool = "pen";
let wbCurrentColor = "#1e293b";
let wbCurrentSize = 4;
let wbIsDrawing = false;
let wbStartX = 0;
let wbStartY = 0;
let wbHistory = [];
const WB_MAX_HISTORY = 25;
let wbSnapshot = null;

function initWhiteboard() {
    const modal = document.getElementById("whiteboard-modal");
    wbCanvas = document.getElementById("whiteboard-canvas");
    wbWrapper = document.getElementById("wb-canvas-wrapper");
    if (!modal || !wbCanvas || !wbWrapper) return;
    
    wbCtx = wbCanvas.getContext("2d", { willReadFrequently: true });

    // Open Whiteboard Buttons
    const openSidebarBtn = document.getElementById("open-whiteboard-sidebar-btn");
    const openQuizBtn = document.getElementById("quiz-whiteboard-btn");
    const openExamBtn = document.getElementById("exam-whiteboard-btn");
    const closeBtn = document.getElementById("close-whiteboard-btn");
    const backdrop = document.getElementById("whiteboard-backdrop");

    if (openSidebarBtn) openSidebarBtn.addEventListener("click", openWhiteboard);
    if (openQuizBtn) openQuizBtn.addEventListener("click", openWhiteboard);
    if (openExamBtn) openExamBtn.addEventListener("click", openWhiteboard);
    if (closeBtn) closeBtn.addEventListener("click", closeWhiteboard);
    if (backdrop) backdrop.addEventListener("click", closeWhiteboard);

    // Escape key to close & Ctrl+Z to undo
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display !== "none") {
            closeWhiteboard();
        }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && modal.style.display !== "none") {
            e.preventDefault();
            wbUndo();
        }
    });

    // Tool selection
    const toolBtns = modal.querySelectorAll(".wb-tool-btn");
    toolBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            toolBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            wbCurrentTool = btn.getAttribute("data-tool");
        });
    });

    // Color selection
    const colorBtns = modal.querySelectorAll(".wb-color-btn");
    colorBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            colorBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            wbCurrentColor = btn.getAttribute("data-color");
        });
    });

    // Size selection
    const sizeBtns = modal.querySelectorAll(".wb-size-btn");
    sizeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            sizeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            wbCurrentSize = parseInt(btn.getAttribute("data-size"), 10) || 4;
        });
    });

    // Grid toggle
    const gridToggleBtn = document.getElementById("wb-grid-toggle");
    if (gridToggleBtn) {
        gridToggleBtn.addEventListener("click", () => {
            wbWrapper.classList.toggle("grid-active");
            gridToggleBtn.classList.toggle("active", wbWrapper.classList.contains("grid-active"));
        });
    }

    // Undo button
    const undoBtn = document.getElementById("wb-undo-btn");
    if (undoBtn) undoBtn.addEventListener("click", wbUndo);

    // Clear button
    const clearBtn = document.getElementById("wb-clear-btn");
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (confirm("Möchtest du die gesamte Zeichnung wirklich löschen?")) {
                wbClearCanvas();
                wbSaveHistory();
            }
        });
    }

    // Download PNG button
    const downloadBtn = document.getElementById("wb-download-btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", wbExportPNG);
    }

    // Canvas Events (Mouse & Touch)
    wbCanvas.addEventListener("mousedown", wbStartDraw);
    window.addEventListener("mousemove", wbMoveDraw);
    window.addEventListener("mouseup", wbEndDraw);

    wbCanvas.addEventListener("touchstart", wbTouchStart, { passive: false });
    window.addEventListener("touchmove", wbTouchMove, { passive: false });
    window.addEventListener("touchend", wbTouchEnd, { passive: false });

    // Handle Window Resize
    window.addEventListener("resize", () => {
        if (modal.style.display !== "none") {
            resizeWhiteboardCanvas(true);
        }
    });
}

function openWhiteboard() {
    const modal = document.getElementById("whiteboard-modal");
    if (!modal) return;
    modal.style.display = "flex";
    setTimeout(() => {
        resizeWhiteboardCanvas(false);
    }, 60);
}

function closeWhiteboard() {
    const modal = document.getElementById("whiteboard-modal");
    if (!modal) return;
    modal.style.display = "none";
}

function resizeWhiteboardCanvas(preserveContent) {
    if (!wbCanvas || !wbWrapper || !wbCtx) return;
    const rect = wbWrapper.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    let tempCanvas = null;
    if (preserveContent && wbCanvas.width > 0 && wbCanvas.height > 0) {
        tempCanvas = document.createElement("canvas");
        tempCanvas.width = wbCanvas.width;
        tempCanvas.height = wbCanvas.height;
        const tempCtx = tempCanvas.getContext("2d");
        tempCtx.drawImage(wbCanvas, 0, 0);
    }

    const dpr = window.devicePixelRatio || 1;
    wbCanvas.width = rect.width * dpr;
    wbCanvas.height = rect.height * dpr;
    wbCtx.scale(dpr, dpr);

    if (tempCanvas) {
        wbCtx.drawImage(tempCanvas, 0, 0, rect.width, rect.height);
    } else if (wbHistory.length === 0) {
        wbSaveHistory();
    }
}

function getCanvasCoords(e) {
    const rect = wbCanvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function wbSaveHistory() {
    if (!wbCtx || !wbCanvas) return;
    try {
        const img = wbCtx.getImageData(0, 0, wbCanvas.width, wbCanvas.height);
        wbHistory.push(img);
        if (wbHistory.length > WB_MAX_HISTORY) {
            wbHistory.shift();
        }
    } catch (e) {}
}

function wbUndo() {
    if (wbHistory.length > 1) {
        wbHistory.pop(); // Remove current state
        const prev = wbHistory[wbHistory.length - 1];
        if (prev && wbCtx) {
            wbCtx.putImageData(prev, 0, 0);
        }
    } else if (wbHistory.length === 1) {
        wbClearCanvas();
    }
}

function wbClearCanvas() {
    if (!wbCtx || !wbCanvas) return;
    wbCtx.clearRect(0, 0, wbCanvas.width, wbCanvas.height);
}

function wbStartDraw(e) {
    const modal = document.getElementById("whiteboard-modal");
    if (!modal || modal.style.display === "none") return;
    if (e.target !== wbCanvas) return;

    const coords = getCanvasCoords(e);
    wbStartX = coords.x;
    wbStartY = coords.y;
    wbIsDrawing = true;

    if (wbCurrentTool === "text") {
        wbIsDrawing = false;
        const text = prompt("Gib den gewünschten Beschriftungstext ein:", "");
        if (text && text.trim()) {
            wbCtx.save();
            wbCtx.fillStyle = wbCurrentColor;
            wbCtx.font = `bold ${wbCurrentSize * 3 + 12}px sans-serif`;
            wbCtx.textBaseline = "top";
            wbCtx.fillText(text.trim(), wbStartX, wbStartY);
            wbCtx.restore();
            wbSaveHistory();
        }
        return;
    }

    try {
        wbSnapshot = wbCtx.getImageData(0, 0, wbCanvas.width, wbCanvas.height);
    } catch (err) {}

    if (wbCurrentTool === "pen" || wbCurrentTool === "eraser") {
        wbCtx.beginPath();
        wbCtx.moveTo(wbStartX, wbStartY);
    }
}

function wbMoveDraw(e) {
    if (!wbIsDrawing) return;
    const coords = getCanvasCoords(e);
    const currX = coords.x;
    const currY = coords.y;

    if (wbCurrentTool === "pen") {
        wbCtx.save();
        wbCtx.strokeStyle = wbCurrentColor;
        wbCtx.lineWidth = wbCurrentSize;
        wbCtx.lineCap = "round";
        wbCtx.lineJoin = "round";
        wbCtx.lineTo(currX, currY);
        wbCtx.stroke();
        wbCtx.restore();
    } else if (wbCurrentTool === "eraser") {
        wbCtx.save();
        wbCtx.globalCompositeOperation = "destination-out";
        wbCtx.lineWidth = wbCurrentSize * 4 + 10;
        wbCtx.lineCap = "round";
        wbCtx.lineJoin = "round";
        wbCtx.lineTo(currX, currY);
        wbCtx.stroke();
        wbCtx.restore();
    } else {
        // Shapes preview with snapshot restore
        if (wbSnapshot) {
            wbCtx.putImageData(wbSnapshot, 0, 0);
        }
        drawShape(wbStartX, wbStartY, currX, currY, wbCurrentTool, wbCurrentColor, wbCurrentSize);
    }
}

function wbEndDraw(e) {
    if (!wbIsDrawing) return;
    wbIsDrawing = false;
    wbSnapshot = null;
    wbSaveHistory();
}

function wbTouchStart(e) {
    if (e.touches.length === 1) {
        e.preventDefault();
        const touch = e.touches[0];
        wbStartDraw(touch);
    }
}

function wbTouchMove(e) {
    if (wbIsDrawing && e.touches.length === 1) {
        e.preventDefault();
        const touch = e.touches[0];
        wbMoveDraw(touch);
    }
}

function wbTouchEnd(e) {
    if (wbIsDrawing) {
        e.preventDefault();
        wbEndDraw(e);
    }
}

function drawShape(x0, y0, x1, y1, tool, color, size) {
    wbCtx.save();
    wbCtx.strokeStyle = color;
    wbCtx.fillStyle = color;
    wbCtx.lineWidth = size;
    wbCtx.lineCap = "round";
    wbCtx.lineJoin = "round";

    if (tool === "line") {
        wbCtx.beginPath();
        wbCtx.moveTo(x0, y0);
        wbCtx.lineTo(x1, y1);
        wbCtx.stroke();
    } else if (tool === "arrow" || tool === "dasharrow") {
        if (tool === "dasharrow") {
            wbCtx.setLineDash([6, 6]);
        }
        // Draw line
        wbCtx.beginPath();
        wbCtx.moveTo(x0, y0);
        wbCtx.lineTo(x1, y1);
        wbCtx.stroke();

        // Draw arrowhead
        wbCtx.setLineDash([]);
        const angle = Math.atan2(y1 - y0, x1 - x0);
        const headlen = Math.max(12, size * 3.5);
        wbCtx.beginPath();
        wbCtx.moveTo(x1, y1);
        wbCtx.lineTo(x1 - headlen * Math.cos(angle - Math.PI / 6), y1 - headlen * Math.sin(angle - Math.PI / 6));
        wbCtx.lineTo(x1 - headlen * Math.cos(angle + Math.PI / 6), y1 - headlen * Math.sin(angle + Math.PI / 6));
        wbCtx.closePath();
        wbCtx.fill();
    } else if (tool === "rect") {
        const w = x1 - x0;
        const h = y1 - y0;
        wbCtx.strokeRect(x0, y0, w, h);
    } else if (tool === "ellipse") {
        const rx = Math.abs(x1 - x0) / 2;
        const ry = Math.abs(y1 - y0) / 2;
        const cx = Math.min(x0, x1) + rx;
        const cy = Math.min(y0, y1) + ry;
        wbCtx.beginPath();
        wbCtx.ellipse(cx, cy, Math.max(1, rx), Math.max(1, ry), 0, 0, 2 * Math.PI);
        wbCtx.stroke();
    } else if (tool === "diamond") {
        const cx = (x0 + x1) / 2;
        const cy = (y0 + y1) / 2;
        wbCtx.beginPath();
        wbCtx.moveTo(cx, y0);
        wbCtx.lineTo(x1, cy);
        wbCtx.lineTo(cx, y1);
        wbCtx.lineTo(x0, cy);
        wbCtx.closePath();
        wbCtx.stroke();
    } else if (tool === "actor") {
        // UML Use-Case Stickman Actor
        const w = x1 - x0;
        const h = y1 - y0;
        const topY = Math.min(y0, y1);
        const botY = Math.max(y0, y1);
        const totalH = Math.max(25, botY - topY);
        const midX = (x0 + x1) / 2;

        const headR = totalH * 0.15;
        const headCY = topY + headR;
        const neckY = headCY + headR;
        const waistY = neckY + totalH * 0.35;
        const armsY = neckY + totalH * 0.12;
        const armSpan = Math.max(totalH * 0.25, Math.abs(w) / 2);

        // Head
        wbCtx.beginPath();
        wbCtx.arc(midX, headCY, headR, 0, 2 * Math.PI);
        wbCtx.stroke();

        // Torso
        wbCtx.beginPath();
        wbCtx.moveTo(midX, neckY);
        wbCtx.lineTo(midX, waistY);

        // Arms
        wbCtx.moveTo(midX - armSpan, armsY);
        wbCtx.lineTo(midX + armSpan, armsY);

        // Left Leg
        wbCtx.moveTo(midX, waistY);
        wbCtx.lineTo(midX - armSpan * 0.8, botY);

        // Right Leg
        wbCtx.moveTo(midX, waistY);
        wbCtx.lineTo(midX + armSpan * 0.8, botY);

        wbCtx.stroke();
    }

    wbCtx.restore();
}

function wbExportPNG() {
    if (!wbCanvas) return;
    
    // Create temporary export canvas with white background
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = wbCanvas.width;
    exportCanvas.height = wbCanvas.height;
    const expCtx = exportCanvas.getContext("2d");

    // Fill with solid white background
    expCtx.fillStyle = "#ffffff";
    expCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // If grid is active, draw grid on export
    if (wbWrapper && wbWrapper.classList.contains("grid-active")) {
        expCtx.strokeStyle = "#e2e8f0";
        expCtx.lineWidth = 1;
        const step = 24 * (window.devicePixelRatio || 1);
        for (let x = 0; x < exportCanvas.width; x += step) {
            expCtx.beginPath();
            expCtx.moveTo(x, 0);
            expCtx.lineTo(x, exportCanvas.height);
            expCtx.stroke();
        }
        for (let y = 0; y < exportCanvas.height; y += step) {
            expCtx.beginPath();
            expCtx.moveTo(0, y);
            expCtx.lineTo(exportCanvas.width, y);
            expCtx.stroke();
        }
    }

    // Draw drawings on top
    expCtx.drawImage(wbCanvas, 0, 0);

    const link = document.createElement("a");
    link.download = `IHK_AP1_Diagramm_Skizze_${new Date().toISOString().slice(0, 10)}.png`;
    link.href = exportCanvas.toDataURL("image/png");
    link.click();
}
