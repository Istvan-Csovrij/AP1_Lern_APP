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

// Exam & Simulation State (DIN-A4 Booklet & 100-Punkte Prüfungen)
let isExamActive = false;
let isSimulationMode = false;
let activeExamSet = null;
let examCurrentPage = 0; // 0: Deckblatt, 1: 1. Aufgabe, 2: 2. Aufgabe, 3: 3. Aufgabe, 4: 4. Aufgabe
let examCandidateInfo = {
    name: "Mustermann, Max",
    prueflingsnummer: "1202-74910",
    beruf: "Fachinformatiker/-in",
    ihk: "Kammerbezirk Südwest",
    termin: "Prüfungssimulation AP1"
};
let examAnswersData = {}; // Store text for lines, math grids, and table cells
let examScores = {}; // Store points for subtasks
let isExamSubmitted = false;
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
        initRechentrainer();
        initExamOverview();
        
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

        // Exam Mode Buttons & Selectors
        const examModeBtn = document.getElementById("exam-mode-btn");
        const simulationModeBtn = document.getElementById("simulation-mode-btn");
        const sidebarExamSetSelect = document.getElementById("sidebar-exam-set-select");
        const bookletExamSelect = document.getElementById("booklet-exam-select");
        const examPrevPageBtn = document.getElementById("exam-prev-page-btn");
        const examNextPageBtn = document.getElementById("exam-next-page-btn");
        const examExitBtn = document.getElementById("exam-exit-btn");
        const examSubmitBtn = document.getElementById("exam-submit-btn");
        const examWhiteboardBtn = document.getElementById("exam-whiteboard-btn");
        const resultsBackBtn = document.getElementById("results-back-btn");

        if (examModeBtn) examModeBtn.addEventListener("click", () => startExamMode(false));
        if (simulationModeBtn) simulationModeBtn.addEventListener("click", () => startExamMode(true));
        if (sidebarExamSetSelect) {
            sidebarExamSetSelect.addEventListener("change", (e) => {
                if (bookletExamSelect) bookletExamSelect.value = e.target.value;
            });
        }
        if (bookletExamSelect) {
            bookletExamSelect.addEventListener("change", (e) => {
                if (sidebarExamSetSelect) sidebarExamSetSelect.value = e.target.value;
                switchActiveExamSet(e.target.value);
            });
        }
        if (examPrevPageBtn) examPrevPageBtn.addEventListener("click", () => changeExamPage(examCurrentPage - 1));
        if (examNextPageBtn) examNextPageBtn.addEventListener("click", () => changeExamPage(examCurrentPage + 1));
        if (examExitBtn) examExitBtn.addEventListener("click", exitExamMode);
        if (examSubmitBtn) examSubmitBtn.addEventListener("click", submitExam);
        if (examWhiteboardBtn) examWhiteboardBtn.addEventListener("click", openWhiteboard);
        if (resultsBackBtn) resultsBackBtn.addEventListener("click", showMainQuizMode);

        // Tab pills click listeners
        const tabPills = document.querySelectorAll("#booklet-tab-pills .exam-tab-btn");
        tabPills.forEach(btn => {
            btn.addEventListener("click", () => {
                const targetPage = parseInt(btn.getAttribute("data-page"), 10);
                changeExamPage(targetPage);
            });
        });
        
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
                    q.topic.toLowerCase().includes("aktivität") || 
                    q.topic.toLowerCase().includes("aktivitaet") || 
                    q.topic.toLowerCase().includes("activity") || 
                    q.topic.toLowerCase().includes("netzplan") || 
                    q.topic.toLowerCase().includes("struktogramm") || q.topic.toLowerCase().includes("aktivität") || q.topic.toLowerCase().includes("activity") || 
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
        } else if (theme === "zahlensysteme" || theme === "binary" || theme === "hex") {
            filteredQuestions = questions.filter(q => 
                q.theme === "zahlensysteme" || 
                q.isZahlensysteme === true || 
                (q.topic && (
                    q.topic.toLowerCase().includes("zahlensystem") || 
                    q.topic.toLowerCase().includes("hexadezimal") || 
                    q.topic.toLowerCase().includes("hex") || 
                    q.topic.toLowerCase().includes("binär") || 
                    q.topic.toLowerCase().includes("dual") || 
                    q.topic.toLowerCase().includes("zweierkomplement") || 
                    q.topic.toLowerCase().includes("2er-komplement") || 
                    q.topic.toLowerCase().includes("nibble") || 
                    q.topic.toLowerCase().includes("kibibyte") || 
                    q.topic.toLowerCase().includes("mebibyte") || 
                    q.topic.toLowerCase().includes("gibibyte") || 
                    q.topic.toLowerCase().includes("speicherberechnung") || 
                    q.topic.toLowerCase().includes("speichereinheit") || 
                    q.topic.toLowerCase().includes("dateneinheit") || 
                    q.topic.toLowerCase().includes("übertragungsdauer") || 
                    q.topic.toLowerCase().includes("datenvolumen") || 
                    q.topic.toLowerCase().includes("bitweise")
                )) ||
                (q.question && (
                    q.question.toLowerCase().includes("zahlensystem") || 
                    q.question.toLowerCase().includes("hexadezimal") || 
                    q.question.toLowerCase().includes("0x") || 
                    q.question.toLowerCase().includes("binär") || 
                    q.question.toLowerCase().includes("dualzahl") || 
                    q.question.toLowerCase().includes("zweierkomplement") || 
                    q.question.toLowerCase().includes("2er-komplement") || 
                    q.question.toLowerCase().includes("nibble") || 
                    q.question.toLowerCase().includes("kibibyte") || 
                    q.question.toLowerCase().includes("mebibyte") || 
                    q.question.toLowerCase().includes("gibibyte") || 
                    q.question.toLowerCase().includes("tebibyte") || 
                    q.question.toLowerCase().includes("mbit/s") || 
                    q.question.toLowerCase().includes("gbit/s") || 
                    q.question.toLowerCase().includes("bitweise")
                ))
            );
        } else if (theme === "pseudocode" || theme === "code" || theme === "algorithmen") {
            filteredQuestions = questions.filter(q => 
                q.theme === "pseudocode" || 
                q.isPseudocode === true || 
                (q.topic && (
                    q.topic.toLowerCase().includes("pseudocode") || 
                    q.topic.toLowerCase().includes("schreibtischtest") || 
                    q.topic.toLowerCase().includes("trace-tabelle") || 
                    q.topic.toLowerCase().includes("trace tabelle") || 
                    q.topic.toLowerCase().includes("suchverfahren") || 
                    q.topic.toLowerCase().includes("binaere suche") || 
                    q.topic.toLowerCase().includes("binäre suche") || 
                    q.topic.toLowerCase().includes("bubble sort") || 
                    q.topic.toLowerCase().includes("sortier")
                )) ||
                (q.question && (
                    q.question.toLowerCase().includes("pseudocode") || 
                    q.question.toLowerCase().includes("schreibtischtest") || 
                    q.question.toLowerCase().includes("trace-tabelle") || 
                    q.question.toLowerCase().includes("trace tabelle")
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

    // Handle Diagram sketch helper banner or Pseudocode helper banner
    const diagBanner = document.getElementById("diagram-banner-container");
    if (diagBanner) {
        const isDiag = q.isDiagram === true || q.diagramType || q.theme === "diagrams" || (q.topic && (q.topic.toLowerCase().includes("diagramm") || q.topic.toLowerCase().includes("uml") || q.topic.toLowerCase().includes("erd") || q.topic.toLowerCase().includes("epk") || q.topic.toLowerCase().includes("bpmn") || q.topic.toLowerCase().includes("netzplan") || q.topic.toLowerCase().includes("struktogramm")));
        const isPseudocode = q.isPseudocode === true || q.theme === "pseudocode" || (q.topic && (q.topic.toLowerCase().includes("pseudocode") || q.topic.toLowerCase().includes("schreibtischtest") || q.topic.toLowerCase().includes("trace-tabelle")));
        
        if (isDiag) {
            const diagName = q.diagramType || (q.topic ? q.topic : "Diagramm / Modell");
            diagBanner.style.display = "block";
            diagBanner.innerHTML = `
                <div style="background: linear-gradient(135deg, #f0fdf4, #ecfeff); border: 1px solid #06b6d4; border-radius: 8px; padding: 0.65rem 0.9rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; color: #0e7490;">
                        <i class="fa-solid fa-pen-ruler" style="color: #0891b2; font-size: 1.15rem;"></i>
                        <span><strong>Diagramm-Aufgabe (${escapeHtml(diagName)}):</strong> Skizziere oder prüfe dein Modell im Zeichenboard!</span>
                    </div>
                    <div style="display: flex; gap: 0.4rem; align-items: center;">
                        <a href="whiteboard.html?v=101" target="_blank" class="btn" style="background: white; color: #0891b2; border: 1px solid #0891b2; padding: 0.35rem 0.7rem; font-size: 0.85rem; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
                            <i class="fa-solid fa-up-right-from-square"></i> Im neuen Tab ↗
                        </a>
                        <button id="inline-quiz-wb-btn" class="btn" style="background: linear-gradient(135deg, #0891b2, #0284c7); color: white; padding: 0.35rem 0.75rem; font-size: 0.85rem; border-radius: 6px; border: none; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
                            <i class="fa-solid fa-palette"></i> Als Fenster
                        </button>
                    </div>
                </div>
            `;
            const inlineBtn = document.getElementById("inline-quiz-wb-btn");
            if (inlineBtn) {
                inlineBtn.onclick = openWhiteboard;
            }
        } else if (isPseudocode) {
            diagBanner.style.display = "block";
            diagBanner.innerHTML = `
                <div style="background: linear-gradient(135deg, #ecfdf5, #f0fdf4); border: 1px solid #10b981; border-radius: 8px; padding: 0.65rem 0.9rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; color: #065f46;">
                        <i class="fa-solid fa-code" style="color: #059669; font-size: 1.15rem;"></i>
                        <span><strong>Pseudocode-Training:</strong> Nutze Trace-Tabellen für Variablenwerte &amp; saubere Kontrollstrukturen nach Prüfungsstandard (SOLANGE, FÜR, WENN-DANN)!</span>
                    </div>
                    <div style="display: flex; gap: 0.4rem; align-items: center;">
                        <button id="inline-quiz-wb-btn" class="btn" style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 0.35rem 0.75rem; font-size: 0.85rem; border-radius: 6px; border: none; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
                            <i class="fa-solid fa-pen-ruler"></i> Zeichenboard / Notizen
                        </button>
                    </div>
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
        "bawue-focus": "🔮 Prüfungsfokus BaWü",
        diagrams: "📐 Diagramme & Modellierung",
        "diagram-training": "📐 Diagramme & Modellierung",
        calculations: "🧮 Rechnen & Handelskalkulation",
        rechnen: "🧮 Rechnen & Handelskalkulation",
        "power-calc": "⚡ Strom, Leistung & Einheiten (LF 2/6)",
        power: "⚡ Strom, Leistung & Einheiten (LF 2/6)",
        strom: "⚡ Strom, Leistung & Einheiten (LF 2/6)",
        zahlensysteme: "🔢 Zahlensysteme & Dateneinheiten (LF 2/3)",
        binary: "🔢 Zahlensysteme & Dateneinheiten (LF 2/3)",
        hex: "🔢 Zahlensysteme & Dateneinheiten (LF 2/3)",
        "hard-mode": "🔥 Prüfungsschwerpunkte (Schwer)",
        hard: "🔥 Prüfungsschwerpunkte (Schwer)"
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

// ==================== EXAM MODE LOGIC (1:1 DIN-A4 PRÜFUNGSBOGEN) ====================

// Starts the authentic 100-point exam or 90-min simulation
function startExamMode(simulation, forcedSetId) {
    if (isExamActive && !isExamSubmitted && !forcedSetId) {
        if (!confirm("Du befindest dich bereits in einer Prüfung. Möchtest du diese abbrechen und neu starten?")) {
            return;
        }
        clearInterval(examTimerInterval);
    }

    isExamActive = true;
    isSimulationMode = simulation;
    isExamSubmitted = false;
    examCurrentPage = 0; // Start on Deckblatt

    // Determine chosen exam set from parameter or sidebar dropdown
    const sidebarSelect = document.getElementById("sidebar-exam-set-select");
    const chosenSetId = forcedSetId || (sidebarSelect ? sidebarSelect.value : "exam_1");

    loadExamSetById(chosenSetId);

    // Reset user answers and scores for this attempt
    examAnswersData = {};
    examScores = {};

    // Synchronize booklet selector dropdown and sidebar dropdown
    if (sidebarSelect) sidebarSelect.value = chosenSetId;
    const bookletSelect = document.getElementById("booklet-exam-select");
    if (bookletSelect) {
        bookletSelect.value = chosenSetId;
    }

    // Setup view containers
    document.querySelector(".container").classList.add("exam-mode-active");
    document.querySelectorAll(".sidebar").forEach(s => s.style.display = "none");
    document.querySelector(".quiz-area").style.display = "none";
    document.getElementById("exam-area").style.display = "flex";
    const resArea = document.getElementById("exam-results-area");
    if (resArea) resArea.style.display = "none";

    // Setup Timer
    const timerContainer = document.getElementById("exam-timer-container");
    const timerEl = document.getElementById("exam-timer");

    if (simulation) {
        if (timerContainer) timerContainer.style.display = "flex";
        examSecondsRemaining = 90 * 60;
        examSecondsElapsed = 0;
        if (timerEl) timerEl.textContent = formatExamTime(examSecondsRemaining);

        examTimerInterval = setInterval(() => {
            examSecondsRemaining--;
            examSecondsElapsed++;
            if (timerEl) timerEl.textContent = formatExamTime(examSecondsRemaining);

            if (examSecondsRemaining <= 0) {
                clearInterval(examTimerInterval);
                alert("Die Prüfungszeit von 90 Minuten ist abgelaufen! Deine Prüfung wird nun automatisch abgegeben.");
                submitExam();
            }
        }, 1000);
    } else {
        if (timerContainer) timerContainer.style.display = "none";
        examSecondsElapsed = 0;
        examTimerInterval = setInterval(() => {
            examSecondsElapsed++;
        }, 1000);
    }

    // Render page 0 (Deckblatt)
    renderCurrentExamPage();
}

// Loads an exam set by ID
function loadExamSetById(setId) {
    if (typeof EXAM_SETS === "undefined" || !EXAM_SETS.length) {
        console.error("EXAM_SETS not loaded!");
        return;
    }

    if (setId === "exam_random" && typeof generateDynamicFullExam === "function") {
        activeExamSet = generateDynamicFullExam();
    } else {
        const found = EXAM_SETS.find(e => e.id === setId);
        activeExamSet = found ? JSON.parse(JSON.stringify(found)) : JSON.parse(JSON.stringify(EXAM_SETS[0]));
    }
}

// Switches exam set from the booklet dropdown
function switchActiveExamSet(setId) {
    if (!confirm("Möchtest du zu diesem Prüfungssatz wechseln? Deine aktuellen Eingaben in dieser Prüfung werden zurückgesetzt.")) {
        const bookletSelect = document.getElementById("booklet-exam-select");
        if (bookletSelect && activeExamSet) bookletSelect.value = activeExamSet.id;
        return;
    }

    loadExamSetById(setId);
    examAnswersData = {};
    examScores = {};
    isExamSubmitted = false;
    examCurrentPage = 0;
    renderCurrentExamPage();
}

// Changes page (0 = Deckblatt, 1..4 = Aufgaben)
function changeExamPage(targetPage) {
    if (targetPage < 0 || targetPage > 4) return;
    examCurrentPage = targetPage;
    renderCurrentExamPage();
}

// Renders either Deckblatt (0) or one of the 4 Tasks (1..4)
function renderCurrentExamPage() {
    if (!activeExamSet) return;

    // Update tab button active states
    const tabs = document.querySelectorAll("#booklet-tab-pills .exam-tab-btn");
    tabs.forEach(btn => {
        const p = parseInt(btn.getAttribute("data-page"), 10);
        if (p === examCurrentPage) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update page indicator text
    const indicator = document.getElementById("exam-page-indicator");
    const prevBtn = document.getElementById("exam-prev-page-btn");
    const nextBtn = document.getElementById("exam-next-page-btn");

    if (prevBtn) {
        prevBtn.disabled = examCurrentPage === 0;
        prevBtn.style.opacity = examCurrentPage === 0 ? "0.5" : "1";
    }

    if (nextBtn) {
        nextBtn.disabled = examCurrentPage === 4;
        nextBtn.style.opacity = examCurrentPage === 4 ? "0.5" : "1";
    }

    if (indicator) {
        const pageLabels = [
            "Seite 1 von 5 (Deckblatt)",
            "Seite 2 von 5 (1. Aufgabe - 25 Punkte)",
            "Seite 3 von 5 (2. Aufgabe - 25 Punkte)",
            "Seite 4 von 5 (3. Aufgabe - 25 Punkte)",
            "Seite 5 von 5 (4. Aufgabe - 25 Punkte)"
        ];
        indicator.textContent = pageLabels[examCurrentPage];
    }

    const container = document.getElementById("exam-paper-container");
    if (!container) return;

    if (examCurrentPage === 0) {
        renderDeckblatt(container);
    } else {
        renderTaskPage(container, examCurrentPage);
    }

    // Scroll to top of exam paper sheet smoothly
    container.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Renders the official Deckblatt (Page 0)
function renderDeckblatt(container) {
    const scores = calculateExamScoresSummary();

    let stampHtml = "";
    if (isExamSubmitted) {
        const stampClass = scores.isPassed ? "ihk-stamp-pass" : "ihk-stamp-fail";
        const stampText = scores.isPassed ? "✓ BESTANDEN (Simuliert)" : "✗ NICHT BESTANDEN";
        stampHtml = `
            <div style="text-align: center; margin: 15px 0;">
                <div class="ihk-stamp ${stampClass}">${stampText}</div>
                <div style="font-size: 1.1rem; font-weight: bold; color: ${scores.isPassed ? '#15803d' : '#b91c1c'}; margin-top: 4px;">
                    Gesamtergebnis: ${scores.totalPoints} von 100 Punkten (Note ${scores.gradeNum} • ${scores.gradeText})
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="exam-paper-sheet">
            <!-- Header bar -->
            <div class="exam-paper-header">
                <span>Abschlussprüfung Teil 1 • IT-Berufe (Simulation)</span>
                <span>Termin: ${escapeHtml(examCandidateInfo.termin)}</span>
                <span>Prüfungszeit: 90 Minuten</span>
            </div>

            <!-- Main Sheet Body -->
            <div class="exam-sheet-content" style="padding-right: 0;">
                <!-- Kopfleiste (Candidate details) -->
                <div class="deckblatt-header-box">
                    <div class="deckblatt-grid">
                        <div class="deckblatt-field">
                            <label>Name, Vorname des Prüflings</label>
                            <input type="text" id="cand-name" value="${escapeHtml(examCandidateInfo.name)}" oninput="examCandidateInfo.name = this.value">
                        </div>
                        <div class="deckblatt-field">
                            <label>Prüflingsnummer</label>
                            <input type="text" id="cand-id" value="${escapeHtml(examCandidateInfo.prueflingsnummer)}" oninput="examCandidateInfo.prueflingsnummer = this.value">
                        </div>
                        <div class="deckblatt-field">
                            <label>Berufs-Nr. / Bereich</label>
                            <input type="text" value="1202 / 64" readonly style="background:#f1f5f9;">
                        </div>
                        <div class="deckblatt-field">
                            <label>Ausbildungsberuf</label>
                            <input type="text" id="cand-beruf" value="${escapeHtml(examCandidateInfo.beruf)}" oninput="examCandidateInfo.beruf = this.value">
                        </div>
                        <div class="deckblatt-field" style="grid-column: span 2;">
                            <label>Zuständige Kammer / Prüfungsbezirk</label>
                            <input type="text" id="cand-ihk" value="${escapeHtml(examCandidateInfo.ihk)}" oninput="examCandidateInfo.ihk = this.value">
                        </div>
                    </div>
                </div>

                <!-- Exam Title Area -->
                <div class="deckblatt-title-area">
                    <div style="font-size: 0.88rem; font-weight: bold; text-transform: uppercase; color: #475569; letter-spacing: 0.04em; margin-bottom: 4px;">
                        Übungsaufgaben nach bundesweitem AP1-Prüfungsstandard (IHK-orientiert)
                    </div>
                    <div class="deckblatt-exam-title">Abschlussprüfung Teil 1 (AP1) • Simulation</div>
                    <div class="deckblatt-exam-subtitle">Einrichten eines IT-gestützten Arbeitsplatzes</div>
                    <div style="font-size: 1.05rem; font-weight: 700; color: #0284c7; margin-top: 6px;">
                        ${escapeHtml(activeExamSet.title)}
                    </div>
                    <div style="margin-top: 10px; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
                        <button type="button" onclick="openExamOverviewModal()" style="background: #f0fdf4; border: 1.5px solid #10b981; color: #047857; font-weight: 700; font-size: 0.84rem; padding: 5px 14px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; box-shadow: 0 1px 3px rgba(16, 185, 129, 0.15);">
                            <i class="fa-solid fa-layer-group"></i> 📚 Alle 16 Prüfungen ansehen &amp; wechseln
                        </button>
                        <button type="button" onclick="exitExamMode()" style="background: #fef2f2; border: 1.5px solid #ef4444; color: #b91c1c; font-weight: 700; font-size: 0.84rem; padding: 5px 14px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; box-shadow: 0 1px 3px rgba(239, 68, 68, 0.15);">
                            <i class="fa-solid fa-house"></i> 🏠 Zurück zur Hauptseite
                        </button>
                    </div>
                </div>

                ${stampHtml}

                <!-- Two-column info boxes -->
                <div class="deckblatt-columns">
                    <!-- Scope box (Left) -->
                    <div class="deckblatt-scope-box">
                        <h4><i class="fa-solid fa-list-check"></i> Prüfungsumfang</h4>
                        <ul>
                            <li><strong>4 gebundene / ungebundene Aufgaben</strong></li>
                            <li><strong>Bearbeitungszeit: 90 Minuten</strong></li>
                            <li><strong>Gesamtpunktzahl: 100 Punkte</strong></li>
                            <li>Jede der 4 Aufgaben wird mit maximal 25 Punkten bewertet.</li>
                            <li><strong>Erlaubte Hilfsmittel:</strong> IT-Handbuch / Tabellenbuch, netzunabhängiger, nicht programmierbarer Taschenrechner.</li>
                        </ul>

                        <div style="margin-top: 15px; padding: 10px; background: #e0f2fe; border: 1px solid #7dd3fc; border-radius: 4px; font-size: 0.85rem;">
                            <strong>100-Punkte-Notenschlüssel (Kammer-Standard):</strong><br>
                            100 – 92 Pkt: Note 1 (sehr gut)<br>
                            &lt; 92 – 81 Pkt: Note 2 (gut)<br>
                            &lt; 81 – 67 Pkt: Note 3 (befriedigend)<br>
                            &lt; 67 – 50 Pkt: Note 4 (ausreichend)<br>
                            &lt; 50 – 30 Pkt: Note 5 (mangelhaft)<br>
                            &lt; 30 – 0 Pkt: Note 6 (ungenügend)
                        </div>
                    </div>

                    <!-- Instructions box (Right) -->
                    <div class="deckblatt-instructions-box">
                        <h4><i class="fa-solid fa-triangle-exclamation"></i> Amtliche Bearbeitungshinweise</h4>
                        <ol>
                            <li>Prüfen Sie diesen Prüfungssatz vor Beginn auf Vollständigkeit (Deckblatt und Aufgaben 1 bis 4).</li>
                            <li>Tragen Sie Ihren Namen und Ihre Prüflingsnummer oben in die Kopfleiste ein.</li>
                            <li>Lösungen sind handschriftlich auf den vorgegebenen Linien oder in den Tabellen einzutragen.</li>
                            <li>Für Berechnungen ist das dafür vorgesehene 5-mm-Rechengitter (Kästchen) zu nutzen. Rechenwege müssen nachvollziehbar sein.</li>
                            <li>Werden mehr Angaben gemacht als ausdrücklich verlangt (z. B. 4 statt 2 Gründe), werden ausschließlich die ersten verlangten Angaben bewertet.</li>
                            <li>Nicht zutreffende Tabellenfelder sind mit einem Schrägstrich (/) zu sperren.</li>
                            <li>Bei Diagrammen sind standardisierte Notationen (UML, EPK, BPMN 2.0, DIN 69900) zu verwenden.</li>
                            <li>Der rechte Rand (Korrekturrand) ist für die Korrektur bestimmt und darf nicht beschrieben werden.</li>
                        </ol>
                    </div>
                </div>

                <!-- Official Evaluation Table (Bewertungsfeld) -->
                <div style="margin-top: 14px;">
                    <div style="font-weight: bold; font-size: 0.95rem; margin-bottom: 4px; text-transform: uppercase;">
                        Bewertung durch den Prüfungsausschuss (Ergebnisübersicht):
                    </div>
                    <table class="deckblatt-eval-table">
                        <thead>
                            <tr>
                                <th style="text-align: left;">Prüfungsaufgabe</th>
                                <th>Höchstpunktzahl</th>
                                <th>Erreichte Punkte</th>
                                <th>Korrektor-Paraphe</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="label-col">1. Aufgabe: ${escapeHtml(activeExamSet.tasks[0].title.split(':')[1] || activeExamSet.tasks[0].title)}</td>
                                <td>25</td>
                                <td style="font-weight: bold; font-size: 1.05rem; color: #dc2626;">${scores.taskPoints[0]}</td>
                                <td style="color: #64748b; font-style: italic;">${isExamSubmitted ? 'gez. Prüfer' : ''}</td>
                            </tr>
                            <tr>
                                <td class="label-col">2. Aufgabe: ${escapeHtml(activeExamSet.tasks[1].title.split(':')[1] || activeExamSet.tasks[1].title)}</td>
                                <td>25</td>
                                <td style="font-weight: bold; font-size: 1.05rem; color: #dc2626;">${scores.taskPoints[1]}</td>
                                <td style="color: #64748b; font-style: italic;">${isExamSubmitted ? 'gez. Prüfer' : ''}</td>
                            </tr>
                            <tr>
                                <td class="label-col">3. Aufgabe: ${escapeHtml(activeExamSet.tasks[2].title.split(':')[1] || activeExamSet.tasks[2].title)}</td>
                                <td>25</td>
                                <td style="font-weight: bold; font-size: 1.05rem; color: #dc2626;">${scores.taskPoints[2]}</td>
                                <td style="color: #64748b; font-style: italic;">${isExamSubmitted ? 'gez. Prüfer' : ''}</td>
                            </tr>
                            <tr>
                                <td class="label-col">4. Aufgabe: ${escapeHtml(activeExamSet.tasks[3].title.split(':')[1] || activeExamSet.tasks[3].title)}</td>
                                <td>25</td>
                                <td style="font-weight: bold; font-size: 1.05rem; color: #dc2626;">${scores.taskPoints[3]}</td>
                                <td style="color: #64748b; font-style: italic;">${isExamSubmitted ? 'gez. Prüfer' : ''}</td>
                            </tr>
                            <tr class="total-row">
                                <td class="label-col">Gesamtpunktzahl / Endnote:</td>
                                <td>100</td>
                                <td style="color: #dc2626; font-size: 1.15rem;">${scores.totalPoints} Punkte</td>
                                <td><strong>Note: ${isExamSubmitted ? scores.gradeNum + ' (' + scores.gradeText + ')' : '—'}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Start Action Button -->
                <div style="text-align: center; margin-top: 24px;">
                    <button class="btn btn-primary" onclick="changeExamPage(1)" style="font-size: 1.05rem; padding: 0.75rem 1.6rem; font-weight: bold; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);">
                        <i class="fa-solid fa-play"></i> Mit 1. Aufgabe (25 Punkte) beginnen →
                    </button>
                    <div style="text-align: center; margin-top: 10px; font-size: 0.72rem; color: #64748b; font-style: italic;">
                        Unabhängige Prüfungssimulation zur Prüfungsvorbereitung • Fiktive Modellunternehmen nach bundesweitem IHK-Prüfungsschema
                    </div>
                </div>
            </div>

            <!-- Page Footer -->
            <div class="exam-paper-footer">
                <span>AP1-Prüfungssimulation • IT-Berufe (Kammer-Standard)</span>
                <span>Deckblatt (Seite 1 von 5)</span>
                <span>Weiterblättern zur 1. Aufgabe →</span>
            </div>
        </div>
    `;
}

// Renders an authentic Task Page (1..4)
function renderTaskPage(container, pageIndex) {
    const task = activeExamSet.tasks[pageIndex - 1];
    if (!task) return;

    // Check if Ausgangssituation should be displayed (on page 1 or always if applicable)
    let ausgangssituationHtml = "";
    if (pageIndex === 1 && activeExamSet.ausgangssituation) {
        ausgangssituationHtml = `
            <div class="exam-ausgangssituation-frame">
                <div class="exam-ausgangssituation-title">
                    Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:
                </div>
                <div class="exam-ausgangssituation-body">
                    ${escapeHtml(activeExamSet.ausgangssituation)}
                </div>
            </div>
        `;
    }

    // Build Subtasks HTML & Korrekturrand HTML
    let subtasksHtml = "";
    let korrekturrandHtml = "";

    task.subtasks.forEach(sub => {
        // Saved response
        const userVal = examAnswersData[sub.id] || "";
        const earnedPts = examScores[sub.id] !== undefined ? examScores[sub.id] : (isExamSubmitted ? 0 : "");

        // Korrekturrand Item
        const shortLabel = sub.label.split(')')[0] + ')';
        korrekturrandHtml += `
            <div class="exam-korrekturrand-item">
                <span class="exam-korrekturrand-pts">${shortLabel} [ / ${sub.points} P ]</span>
                <div class="exam-korrekturrand-box">
                    <input type="number" min="0" max="${sub.points}" class="exam-korrekturrand-input" 
                           value="${earnedPts}" 
                           placeholder="${sub.points}"
                           onchange="updateSubtaskScore('${sub.id}', this.value, ${sub.points})">
                </div>
            </div>
        `;

        // Stencil banner
        let stencilHtml = "";
        if (sub.stencil) {
            stencilHtml = `<div class="exam-stencil-banner">[ ${escapeHtml(sub.stencil)} ]</div>`;
        }

        // SVG Illustration
        let svgHtml = "";
        if (sub.svgIllustration) {
            svgHtml = `<div style="margin: 10px 0;">${sub.svgIllustration}</div>`;
        }

        // Input element according to type
        let inputHtml = "";
        if (sub.type === "lines") {
            const lines = sub.linesCount || 4;
            const heightPx = lines * 28;
            inputHtml = `
                <div class="exam-ruled-lines-wrapper" style="height: ${heightPx}px;">
                    <textarea class="exam-ruled-textarea" 
                              style="height: ${heightPx}px;" 
                              placeholder="Antwort hier formulieren..." 
                              oninput="saveSubtaskAnswer('${sub.id}', this.value)">${escapeHtml(userVal)}</textarea>
                </div>
            `;
        } else if (sub.type === "math-grid") {
            const rows = (sub.gridConfig && sub.gridConfig.rows) ? sub.gridConfig.rows : 6;
            const heightPx = rows * 20 + 20;
            inputHtml = `
                <div class="exam-math-grid-wrapper" style="height: ${heightPx}px;">
                    <textarea class="exam-math-textarea" 
                              style="height: ${heightPx}px;"
                              placeholder="Rechenweg und Ergebnis hier eintragen (1 Kästchen = 1 Zeichen)..." 
                              oninput="saveSubtaskAnswer('${sub.id}', this.value)">${escapeHtml(userVal)}</textarea>
                </div>
            `;
        } else if (sub.type === "table" && sub.tableConfig) {
            const cfg = sub.tableConfig;
            const isMatching = cfg.type === "matching";
            const targetCols = cfg.targetCols || (cfg.targetCol !== undefined ? [cfg.targetCol] : (isMatching ? [0] : []));
            const options = cfg.options || [];

            // Headers
            let thead = "<tr>";
            cfg.headers.forEach(h => {
                thead += `<th>${escapeHtml(h)}</th>`;
            });
            thead += "</tr>";

            let tbody = "";
            cfg.rows.forEach((row, rIdx) => {
                tbody += "<tr>";
                row.forEach((cell, cIdx) => {
                    const cellKey = `${sub.id}_tbl_${rIdx}_${cIdx}`;
                    const solKey = `${rIdx}_${cIdx}`;
                    const expectedVal = (cfg.solutions && cfg.solutions[solKey] !== undefined)
                                        ? cfg.solutions[solKey].trim()
                                        : (cell || "").trim();
                    const isSlash = cell === "/" || expectedVal === "/";
                    const isMatchingTarget = isMatching && targetCols.includes(cIdx);
                    const isBlankInput = !isMatching && cell === "";

                    if (isSlash) {
                        tbody += `<td class="diagonal-slash" style="text-align: center; font-weight: bold;">/</td>`;
                    } else if (isMatchingTarget) {
                        // Dropdown selection cell (starts empty on -- Bitte zuordnen --)
                        const userVal = examAnswersData[cellKey] !== undefined ? examAnswersData[cellKey] : "";
                        const colOptions = (cfg.colOptions && cfg.colOptions[cIdx]) ? cfg.colOptions[cIdx] : options;
                        
                        let selectHtml = `<select class="exam-table-select" data-sub-id="${sub.id}" data-row-idx="${rIdx}" data-col-idx="${cIdx}" id="${cellKey}" onchange="saveSubtaskAnswer('${cellKey}', this.value)" ${isExamSubmitted ? "disabled" : ""}>`;
                        selectHtml += `<option value="">-- Bitte zuordnen --</option>`;
                        colOptions.forEach(opt => {
                            const sel = userVal === opt ? "selected" : "";
                            selectHtml += `<option value="${escapeHtml(opt)}" ${sel}>${escapeHtml(opt)}</option>`;
                        });
                        selectHtml += `</select>`;

                        // Submission feedback
                        let evalHtml = "";
                        let tdClass = "";
                        if (isExamSubmitted) {
                            tdClass = "cell-evaluated ";
                            if (userVal === expectedVal) {
                                tdClass += "cell-correct";
                                evalHtml = `<span class="cell-correct-check"><i class="fa-solid fa-check"></i> Richtig</span>`;
                            } else {
                                tdClass += "cell-incorrect";
                                evalHtml = `<span class="cell-solution-hint">Lösung: ${escapeHtml(expectedVal)}</span>`;
                            }
                        }

                        tbody += `<td class="${tdClass}" style="min-width: 170px;">${selectHtml}${evalHtml}</td>`;

                    } else if (isBlankInput) {
                        // Editable text input cell for blanks to be calculated by student
                        // Starts completely empty before submission
                        const userVal = examAnswersData[cellKey] !== undefined ? examAnswersData[cellKey] : "";
                        
                        let evalHtml = "";
                        let tdClass = "";
                        if (isExamSubmitted) {
                            tdClass = "cell-evaluated ";
                            const userNorm = userVal.trim().toLowerCase().replace(/[\s\.,€\/]/g, '');
                            const expectedNorm = expectedVal.toLowerCase().replace(/[\s\.,€\/]/g, '');
                            if (userNorm && (userNorm === expectedNorm || expectedNorm.includes(userNorm))) {
                                tdClass += "cell-correct";
                                evalHtml = `<span class="cell-correct-check"><i class="fa-solid fa-check"></i> Korrekt</span>`;
                            } else {
                                tdClass += "cell-incorrect";
                                evalHtml = `<span class="cell-solution-hint">Musterlösung: ${escapeHtml(expectedVal)}</span>`;
                            }
                        }

                        tbody += `
                            <td class="${tdClass}">
                                <input type="text" class="exam-table-input" 
                                       id="${cellKey}"
                                       value="${escapeHtml(userVal)}" 
                                       placeholder="Eintragen..." 
                                       oninput="saveSubtaskAnswer('${cellKey}', this.value)"
                                       ${isExamSubmitted ? "readonly" : ""}>
                                ${evalHtml}
                            </td>
                        `;
                    } else {
                        // Given value / readable static prompt text
                        const isHeaderCol = cIdx === 0;
                        const cellStyle = isHeaderCol ? "font-weight: 600; background: #f8fafc; color: #1e293b;" : "background: #fafafa; color: #1e293b;";
                        tbody += `
                            <td style="${cellStyle}">
                                <div class="exam-table-cell-text">${escapeHtml(cell)}</div>
                            </td>
                        `;
                    }
                });
                tbody += "</tr>";
            });

            // Options Pool Box for matching tasks
            let optionsPoolHtml = "";
            if (isMatching && options.length > 0) {
                let badgesHtml = "";
                options.forEach((opt, oIdx) => {
                    const parts = opt.split(/[-–:]/);
                    const keyBadge = parts.length > 1 ? parts[0].trim() : `${oIdx + 1}`;
                    const labelText = parts.length > 1 ? parts.slice(1).join('-').trim() : opt;
                    badgesHtml += `
                        <button type="button" class="option-badge" onclick="fillNextMatchingDropdown('${sub.id}', '${escapeHtml(opt).replace(/'/g, "\\'")}')" title="Klicken, um '${escapeHtml(opt)}' in das nächste freie Tabellenfeld einzutragen">
                            <span class="badge-key">${escapeHtml(keyBadge)}</span>
                            <span>${escapeHtml(labelText)}</span>
                        </button>
                    `;
                });

                optionsPoolHtml = `
                    <div class="exam-table-options-pool">
                        <div class="options-pool-header">
                            <i class="fa-solid fa-list-check"></i>
                            <span>Verfügbare Optionen zur Zuordnung:</span>
                            <span class="options-pool-hint">(Klicken Sie auf eine Option oder wählen Sie im Dropdown)</span>
                        </div>
                        <div class="options-pool-badges">
                            ${badgesHtml}
                        </div>
                    </div>
                `;
            }

            inputHtml = `
                <table class="exam-din-table">
                    <thead>${thead}</thead>
                    <tbody>${tbody}</tbody>
                </table>
                ${optionsPoolHtml}
            `;
        }

        // Model Solution Box if submitted
        let solutionHtml = "";
        if (isExamSubmitted && sub.solution) {
            solutionHtml = `
                <div class="exam-solution-box">
                    <h5><i class="fa-solid fa-circle-check"></i> Musterlösung &amp; Bewertungshinweise (${sub.points} Punkte):</h5>
                    ${sub.solutionSvgIllustration ? `<div style="margin: 12px 0;">${sub.solutionSvgIllustration}</div>` : ""}
                    <div class="exam-solution-body" style="white-space: pre-line;">${escapeHtml(sub.solution)}</div>
                    <div style="margin-top: 8px; display: flex; align-items: center; justify-content: space-between; border-top: 1px dashed #86efac; padding-top: 6px;">
                        <span style="font-size: 0.82rem; font-weight: 700; color: #15803d;">Punkte für Teilaufgabe im Korrekturrand vergeben:</span>
                        <div style="display: flex; gap: 4px;">
                            <button class="btn btn-secondary" style="padding: 2px 8px; font-size: 0.8rem;" onclick="updateSubtaskScore('${sub.id}', 0, ${sub.points})">0 Pkt</button>
                            <button class="btn btn-secondary" style="padding: 2px 8px; font-size: 0.8rem;" onclick="updateSubtaskScore('${sub.id}', Math.round(${sub.points}/2), ${sub.points})">Halbe Pkt</button>
                            <button class="btn btn-primary" style="padding: 2px 8px; font-size: 0.8rem;" onclick="updateSubtaskScore('${sub.id}', ${sub.points}, ${sub.points})">Volle ${sub.points} Pkt</button>
                        </div>
                    </div>
                </div>
            `;
        }

        subtasksHtml += `
            <div class="exam-subtask-container">
                <div class="exam-subtask-title-row">
                    <div class="exam-subtask-text">
                        <strong>${escapeHtml(sub.label)}</strong>
                    </div>
                    <div class="exam-subtask-points">${sub.points} Punkte</div>
                </div>
                <div style="font-size: 0.93rem; line-height: 1.5; color: #000; margin-bottom: 6px; white-space: pre-line;">
                    ${escapeHtml(sub.text)}
                </div>
                ${stencilHtml}
                ${svgHtml}
                ${inputHtml}
                ${solutionHtml}
            </div>
        `;
    });

    container.innerHTML = `
        <div class="exam-paper-sheet">
            <!-- Header bar -->
            <div class="exam-paper-header">
                <span>Prüfungssimulation AP1 • Fachinformatiker/-in</span>
                <span>${task.title.split(':')[0]}</span>
                <span>Seite ${pageIndex + 1} von 5</span>
            </div>

            <!-- Sheet Main (Two Columns) -->
            <div class="exam-sheet-main">
                <!-- Left Content Column -->
                <div class="exam-sheet-content">
                    ${ausgangssituationHtml}
                    <h3 class="exam-task-header">${escapeHtml(task.title)}</h3>
                    ${subtasksHtml}
                </div>

                <!-- Right Korrekturrand Column -->
                <div class="exam-korrekturrand">
                    <div class="exam-korrekturrand-title">Korrekturrand</div>
                    ${korrekturrandHtml}
                </div>
            </div>

            <!-- Page Footer -->
            <div class="exam-paper-footer">
                <span>AP1-Prüfungssimulation • ${escapeHtml(activeExamSet.title.split(':')[0])}</span>
                <span>${pageIndex < 4 ? 'Fortsetzung ' + (pageIndex + 1) + '. Aufgabe →' : 'Ende der Prüfungsaufgaben'}</span>
            </div>
        </div>
    `;
}

// Saves a subtask's user answer in memory
function saveSubtaskAnswer(key, value) {
    examAnswersData[key] = value;
}

// Helper for matching tables: assigns selected option to active or next empty dropdown
function fillNextMatchingDropdown(subId, val) {
    if (isExamSubmitted) return;
    const selects = document.querySelectorAll(`select[data-sub-id="${subId}"]`);
    if (!selects || selects.length === 0) return;
    
    let target = null;
    if (document.activeElement && document.activeElement.matches && document.activeElement.matches(`select[data-sub-id="${subId}"]`)) {
        target = document.activeElement;
    } else {
        for (const sel of selects) {
            if (!sel.value) {
                target = sel;
                break;
            }
        }
    }
    if (!target) {
        target = selects[0];
    }
    if (target) {
        target.value = val;
        // Trigger save
        const cellKey = target.id;
        if (cellKey) {
            saveSubtaskAnswer(cellKey, val);
        }
        target.dispatchEvent(new Event('change'));
        target.style.backgroundColor = '#dcfce7';
        setTimeout(() => { target.style.backgroundColor = ''; }, 350);
    }
}
window.fillNextMatchingDropdown = fillNextMatchingDropdown;
window.saveSubtaskAnswer = saveSubtaskAnswer;

// Updates a subtask score in memory and re-evaluates
function updateSubtaskScore(subId, pointsStr, maxPoints) {
    let p = parseFloat(pointsStr);
    if (isNaN(p) || p < 0) p = 0;
    if (p > maxPoints) p = maxPoints;

    examScores[subId] = p;

    // Update input field if present on current page
    const inp = document.querySelector(`input[data-subid="${subId}"]`);
    if (inp) inp.value = p;
}

// Calculates scores across all 4 tasks
function calculateExamScoresSummary() {
    if (!activeExamSet) return { taskPoints: [0,0,0,0], totalPoints: 0, gradeNum: 6, gradeText: "ungenügend", isPassed: false };

    let taskPoints = [0, 0, 0, 0];

    activeExamSet.tasks.forEach((task, tIdx) => {
        let taskSum = 0;
        task.subtasks.forEach(sub => {
            if (examScores[sub.id] !== undefined) {
                taskSum += examScores[sub.id];
            }
        });
        taskPoints[tIdx] = Math.round(taskSum * 10) / 10;
    });

    const total = Math.round(taskPoints.reduce((a, b) => a + b, 0) * 10) / 10;

    let gradeNum = 6;
    let gradeText = "ungenügend";

    if (total >= 92) {
        gradeNum = 1; gradeText = "sehr gut";
    } else if (total >= 81) {
        gradeNum = 2; gradeText = "gut";
    } else if (total >= 67) {
        gradeNum = 3; gradeText = "befriedigend";
    } else if (total >= 50) {
        gradeNum = 4; gradeText = "ausreichend";
    } else if (total >= 30) {
        gradeNum = 5; gradeText = "mangelhaft";
    } else {
        gradeNum = 6; gradeText = "ungenügend";
    }

    return {
        taskPoints: taskPoints,
        totalPoints: total,
        gradeNum: gradeNum,
        gradeText: gradeText,
        isPassed: total >= 50
    };
}

// Submits the exam, stamps the Deckblatt and displays evaluation
function submitExam() {
    clearInterval(examTimerInterval);
    isExamSubmitted = true;

    // Calculate score
    const res = calculateExamScoresSummary();

    // Switch to Deckblatt to display stamp and scores
    examCurrentPage = 0;
    renderCurrentExamPage();

    // Alert user
    const msg = res.isPassed
        ? `🎉 Herzlichen Glückwunsch! Du hast die Prüfung BESTANDEN!\n\nGesamtergebnis: ${res.totalPoints} von 100 Punkten\nPrüfungsnote: Note ${res.gradeNum} (${res.gradeText})\n\nDein Deckblatt wurde ausgewertet. Du kannst nun durch die Aufgaben 1 bis 4 blättern, um die detaillierten Musterlösungen einzusehen und die Punkte im Korrekturrand anzupassen.`
        : `Die Prüfung wurde ausgewertet.\n\nGesamtergebnis: ${res.totalPoints} von 100 Punkten\nPrüfungsnote: Note ${res.gradeNum} (${res.gradeText})\n\nDu benötigst mindestens 50 Punkte zum Bestehen. Blättere durch die Aufgaben 1 bis 4, vergleiche deine Antworten mit den Musterlösungen und passe deine Punkte im Korrekturrand an.`;

    alert(msg);
}

// Exits exam mode
function exitExamMode() {
    if (confirm("Möchtest du den Prüfungsmodus wirklich beenden? Dein Fortschritt in diesem Durchgang geht dabei verloren.")) {
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
    const resArea = document.getElementById("exam-results-area");
    if (resArea) resArea.style.display = "none";

    // Reload normal quiz state
    if (typeof filterQuestions === "function" && typeof currentTheme !== "undefined") {
        filterQuestions(currentTheme);
    }
}


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
        wbCtx.save();
        wbCtx.setTransform(1, 0, 0, 1, 0, 0);
        wbCtx.drawImage(tempCanvas, 0, 0);
        wbCtx.restore();
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
    link.download = `AP1_Diagramm_Skizze_${new Date().toISOString().slice(0, 10)}.png`;
    link.href = exportCanvas.toDataURL("image/png");
    link.click();
}

// ==========================================================================
// Rechen- & Einheiten-Trainer Modal & Sidebar Quick-Tools
// ==========================================================================
function initRechentrainer() {
    const modal = document.getElementById("rechentrainer-modal");
    const openBtn = document.getElementById("open-rechentrainer-sidebar-btn");
    const closeBtn = document.getElementById("close-rechentrainer-btn");
    const backdrop = document.getElementById("rechentrainer-backdrop");

    function openModal() {
        if (modal) modal.style.display = "flex";
    }

    function closeModal() {
        if (modal) modal.style.display = "none";
    }

    if (openBtn) openBtn.addEventListener("click", openModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && modal.style.display !== "none") {
            closeModal();
        }
    });

    // Quick Sidebar Calculator: Decimal Hours to Minutes
    const sideHourInput = document.getElementById("side-calc-dechours");
    const sideResult = document.getElementById("side-calc-timeresult");
    const sideDetail = document.getElementById("side-calc-timedetail");

    if (sideHourInput && sideResult) {
        function updateSideTime() {
            const val = parseFloat(sideHourInput.value);
            if (isNaN(val) || val < 0) {
                sideResult.innerText = "—";
                if (sideDetail) sideDetail.innerText = "Ungültige Eingabe";
                return;
            }
            const wholeH = Math.floor(val);
            const remH = val - wholeH;
            const min = Math.floor(remH * 60);
            sideResult.innerText = `${wholeH} Std ${min} Min`;
            if (sideDetail) {
                sideDetail.innerHTML = `Rechenweg: ${remH.toFixed(2).replace('.', ',')} × 60 = <strong>${min} Min</strong>`;
            }
        }
        sideHourInput.addEventListener("input", updateSideTime);
        updateSideTime();
    }
}

// ==========================================================================
// Prüfungsübersicht & Klausuren-Katalog Modal Logic
// ==========================================================================
function initExamOverview() {
    const modal = document.getElementById("exam-overview-modal");
    const openHeaderBtn = document.getElementById("header-exam-overview-btn");
    const openSidebarBtn = document.getElementById("open-exam-overview-sidebar-btn");
    const openBookletBtn = document.getElementById("booklet-overview-btn");
    const closeBtn = document.getElementById("close-exam-overview-btn");
    const backdrop = document.getElementById("exam-overview-backdrop");
    const searchInput = document.getElementById("exam-catalog-search-input");

    if (openHeaderBtn) openHeaderBtn.addEventListener("click", openExamOverviewModal);
    if (openSidebarBtn) openSidebarBtn.addEventListener("click", openExamOverviewModal);
    if (openBookletBtn) openBookletBtn.addEventListener("click", openExamOverviewModal);
    if (closeBtn) closeBtn.addEventListener("click", closeExamOverviewModal);
    if (backdrop) backdrop.addEventListener("click", closeExamOverviewModal);

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderExamCatalog(e.target.value);
        });
    }

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && modal.style.display !== "none") {
            closeExamOverviewModal();
        }
    });
}

function openExamOverviewModal() {
    const modal = document.getElementById("exam-overview-modal");
    if (!modal) return;
    modal.style.display = "flex";
    const searchInput = document.getElementById("exam-catalog-search-input");
    if (searchInput) searchInput.value = "";
    renderExamCatalog("");
}

function closeExamOverviewModal() {
    const modal = document.getElementById("exam-overview-modal");
    if (modal) modal.style.display = "none";
}

function renderExamCatalog(filterText = "") {
    const grid = document.getElementById("exam-catalog-grid");
    const counterBadge = document.getElementById("exam-catalog-counter-badge");
    if (!grid) return;

    if (typeof EXAM_SETS === "undefined" || !EXAM_SETS.length) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #ef4444;">Keine Prüfungssätze geladen.</div>`;
        return;
    }

    if (counterBadge) {
        counterBadge.textContent = `${EXAM_SETS.length} Prüfungen verfügbar`;
    }

    const q = (filterText || "").toLowerCase().trim();
    let html = "";

    // Render cards for each exam set in EXAM_SETS
    EXAM_SETS.forEach((exam, index) => {
        const titleMatch = (exam.title || "").toLowerCase().includes(q);
        const scenarioMatch = (exam.ausgangssituation || "").toLowerCase().includes(q);
        const subtitleMatch = (exam.subtitle || "").toLowerCase().includes(q);
        const taskMatch = (exam.tasks || []).some(t => 
            (t.title || "").toLowerCase().includes(q) ||
            (t.subtasks || []).some(st => (st.text || "").toLowerCase().includes(q) || (st.stencil || "").toLowerCase().includes(q))
        );

        if (q && !titleMatch && !scenarioMatch && !subtitleMatch && !taskMatch) {
            return; // Filter out if no match
        }

        const isActive = activeExamSet && activeExamSet.id === exam.id && isExamActive;
        const examNum = index + 1;

        // Truncate scenario for preview
        const scenarioSnippet = exam.ausgangssituation 
            ? (exam.ausgangssituation.length > 130 ? exam.ausgangssituation.substring(0, 127) + "..." : exam.ausgangssituation)
            : "";

        // Extract company from subtitle
        const companyParts = (exam.subtitle || "").split("•");
        const companyName = companyParts.length > 2 ? companyParts[2].trim() : "Modellunternehmen";

        html += `
            <div class="exam-catalog-card ${isActive ? 'active' : ''}">
                <div class="exam-catalog-card-header">
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                        <span class="exam-catalog-badge exam-badge-standard">PRÜFUNG ${examNum}</span>
                        ${isActive ? '<span style="background: #10b981; color: white; padding: 2px 7px; border-radius: 4px; font-size: 0.72rem; font-weight: 700;"><i class="fa-solid fa-check"></i> Aktuell geladen</span>' : ''}
                    </div>
                    <span class="exam-badge-pts"><i class="fa-solid fa-stopwatch"></i> 100 P • 90 Min.</span>
                </div>

                <div class="exam-card-title">${escapeHtml(exam.title)}</div>
                <div class="exam-card-company"><i class="fa-solid fa-building"></i> ${escapeHtml(companyName)}</div>
                ${scenarioSnippet ? `<div class="exam-card-scenario">${escapeHtml(scenarioSnippet)}</div>` : ''}

                <div class="exam-catalog-tasks">
                    ${(exam.tasks || []).map(t => `
                        <div class="exam-catalog-task-item">
                            <span class="exam-task-num">${t.number}.</span>
                            <span class="exam-task-title">${escapeHtml(t.title.replace(/^\\d+\\.\\s*Aufgabe:\\s*/i, ''))}</span>
                            <span class="exam-task-pts">${t.totalPoints || 25} P</span>
                        </div>
                    `).join('')}
                </div>

                <div class="exam-catalog-actions">
                    <button class="btn btn-catalog-practice" onclick="selectExamFromOverview('${exam.id}', false)">
                        <i class="fa-solid fa-book-open"></i> Übungsprüfung
                    </button>
                    <button class="btn btn-catalog-simulation" onclick="selectExamFromOverview('${exam.id}', true)">
                        <i class="fa-solid fa-stopwatch"></i> 90-Min.-Simulation
                    </button>
                </div>
            </div>
        `;
    });

    // Special card: Dynamische Zufallsprüfung
    const randomMatches = !q || "dynamische zufallsprüfung random simulation 100 punkte mix".includes(q);
    if (randomMatches) {
        const isRandomActive = activeExamSet && activeExamSet.id.startsWith("exam_random") && isExamActive;
        html += `
            <div class="exam-catalog-card ${isRandomActive ? 'active' : ''}" style="border: 2px dashed #8b5cf6; background: linear-gradient(180deg, #faf5ff 0%, #ffffff 40%);">
                <div class="exam-catalog-card-header">
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                        <span class="exam-catalog-badge exam-badge-random">🎲 ZUFALLSPRÜFUNG</span>
                        ${isRandomActive ? '<span style="background: #8b5cf6; color: white; padding: 2px 7px; border-radius: 4px; font-size: 0.72rem; font-weight: 700;"><i class="fa-solid fa-check"></i> Aktuell geladen</span>' : ''}
                    </div>
                    <span class="exam-badge-pts" style="background: #f5f3ff; color: #6d28d9; border-color: #ddd6fe;"><i class="fa-solid fa-bolt"></i> 100 P • Unendlich</span>
                </div>

                <div class="exam-card-title" style="color: #6d28d9;">🎲 Dynamische 100-Punkte Zufalls-Vollprüfung</div>
                <div class="exam-card-company" style="color: #7c3aed;"><i class="fa-solid fa-shuffle"></i> Dynamischer Aufgabenpool (${EXAM_SETS.length} Prüfungssätze)</div>
                <div class="exam-card-scenario" style="border-left-color: #a855f7; background: #faf5ff;">
                    Kombiniert bei jedem Start 4 vollwertige Aufgaben à 25 Punkte zufällig aus dem Aufgabenpool aller ${EXAM_SETS.length} Prüfungssätze. Keine Prüfung gleicht der anderen!
                </div>

                <div class="exam-catalog-tasks">
                    <div class="exam-catalog-task-item">
                        <span class="exam-task-num" style="color: #7c3aed;">1.</span>
                        <span class="exam-task-title">Zufällige 1. Aufgabe (z. B. Subnetting, PUE, BGB oder Netzplan)</span>
                        <span class="exam-task-pts">25 P</span>
                    </div>
                    <div class="exam-catalog-task-item">
                        <span class="exam-task-num" style="color: #7c3aed;">2.</span>
                        <span class="exam-task-title">Zufällige 2. Aufgabe (z. B. RAID, Hypervisor, PoE oder MQTT)</span>
                        <span class="exam-task-pts">25 P</span>
                    </div>
                    <div class="exam-catalog-task-item">
                        <span class="exam-task-num" style="color: #7c3aed;">3.</span>
                        <span class="exam-task-title">Zufällige 3. Aufgabe (z. B. VPN, OWASP, ITIL, DSGVO oder TOMs)</span>
                        <span class="exam-task-pts">25 P</span>
                    </div>
                    <div class="exam-catalog-task-item">
                        <span class="exam-task-num" style="color: #7c3aed;">4.</span>
                        <span class="exam-task-title">Zufällige 4. Aufgabe (3NF-Datenbank, SQL & Programmier-Algorithmus)</span>
                        <span class="exam-task-pts">25 P</span>
                    </div>
                </div>

                <div class="exam-catalog-actions">
                    <button class="btn" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white;" onclick="selectExamFromOverview('exam_random', false)">
                        <i class="fa-solid fa-dice"></i> Zufallsprüfung öffnen
                    </button>
                    <button class="btn" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white;" onclick="selectExamFromOverview('exam_random', true)">
                        <i class="fa-solid fa-stopwatch"></i> 90-Min.-Simulation
                    </button>
                </div>
            </div>
        `;
    }

    if (!html) {
        html = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #64748b;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 0.75rem; color: #cbd5e1;"></i>
                <div style="font-size: 1.1rem; font-weight: 700; color: #334155;">Keine Prüfung zum Suchbegriff "${escapeHtml(q)}" gefunden</div>
                <div style="font-size: 0.88rem; margin-top: 0.35rem;">Probiere es mit Begriffen wie <em>Netzplan, Subnetting, Cloud, DSGVO, SQL, Kalkulation, RAID</em>.</div>
            </div>
        `;
    }

    grid.innerHTML = html;
}

function selectExamFromOverview(examId, isSimulation) {
    closeExamOverviewModal();
    if (isExamActive && !isExamSubmitted) {
        if (!confirm("Möchtest du zur gewählten Prüfung wechseln? Deine aktuellen Eingaben in der laufenden Prüfung werden zurückgesetzt.")) {
            return;
        }
        clearInterval(examTimerInterval);
    }

    startExamMode(isSimulation, examId);
}

// Global exposure for onclick handlers
window.openExamOverviewModal = openExamOverviewModal;
window.closeExamOverviewModal = closeExamOverviewModal;
window.selectExamFromOverview = selectExamFromOverview;
window.renderExamCatalog = renderExamCatalog;

