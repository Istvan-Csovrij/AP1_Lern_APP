/**
 * IHK PROBEKLAUSUR SIMULATOR 2026/27 – HOTEL CITY HOF (FA 230)
 * Standalone Application Engine
 */

const AppState = {
    timeRemaining: 60 * 60, // 60 Minuten in Sekunden
    timerInterval: null,
    isTimerRunning: true,
    activeTab: 'it1',
    activeAttTab: 'att_it1_ang1',
    scores: {
        it1: 0,
        it2_1: 0,
        it2_2: 0,
        it2_3: 0,
        it3_1: 0,
        it3_2: 0
    },
    // Mock Datenbank für IT 3.1
    sportkurseDB: [
        { KursID: 1, Kurstitel: "Morgen-Yoga", Kategorie: "Sport", Tag: "Montag", Startzeit: "08:00", Dauer: 60, Kosten: 14.0, maxTeilnehmerzahl: 15, aktuelleTeilnehmerzahl: 12 },
        { KursID: 2, Kurstitel: "Aqua-Fitness", Kategorie: "Sport", Tag: "Dienstag", Startzeit: "10:00", Dauer: 45, Kosten: 12.0, maxTeilnehmerzahl: 20, aktuelleTeilnehmerzahl: 20 },
        { KursID: 3, Kurstitel: "Pilates", Kategorie: "Sport", Tag: "Mittwoch", Startzeit: "17:00", Dauer: 55, Kosten: 15.0, maxTeilnehmerzahl: 12, aktuelleTeilnehmerzahl: 8 },
        { KursID: 4, Kurstitel: "Rückenfit", Kategorie: "Sport", Tag: "Donnerstag", Startzeit: "09:00", Dauer: 45, Kosten: 12.0, maxTeilnehmerzahl: 15, aktuelleTeilnehmerzahl: 15 },
        { KursID: 5, Kurstitel: "Nordic Walking", Kategorie: "Sport", Tag: "Freitag", Startzeit: "08:30", Dauer: 90, Kosten: 10.0, maxTeilnehmerzahl: 10, aktuelleTeilnehmerzahl: 4 },
        { KursID: 6, Kurstitel: "Personal Training", Kategorie: "Sport", Tag: "Samstag", Startzeit: "11:00", Dauer: 60, Kosten: 55.0, maxTeilnehmerzahl: 1, aktuelleTeilnehmerzahl: 0 },
        { KursID: 7, Kurstitel: "Saunalandschaft (Tageskarte)", Kategorie: "Wellness", Tag: "Täglich", Startzeit: "10:00", Dauer: 480, Kosten: 18.0, maxTeilnehmerzahl: 30, aktuelleTeilnehmerzahl: 18 },
        { KursID: 8, Kurstitel: "Klassische Massage (30 Min)", Kategorie: "Wellness", Tag: "Täglich", Startzeit: "14:00", Dauer: 30, Kosten: 39.0, maxTeilnehmerzahl: 2, aktuelleTeilnehmerzahl: 1 },
        { KursID: 9, Kurstitel: "Klassische Massage (60 Min)", Kategorie: "Wellness", Tag: "Täglich", Startzeit: "15:00", Dauer: 60, Kosten: 69.0, maxTeilnehmerzahl: 2, aktuelleTeilnehmerzahl: 2 },
        { KursID: 10, Kurstitel: "Hot-Stone-Massage (75 Min)", Kategorie: "Wellness", Tag: "Dienstag", Startzeit: "16:00", Dauer: 75, Kosten: 85.0, maxTeilnehmerzahl: 2, aktuelleTeilnehmerzahl: 0 },
        { KursID: 11, Kurstitel: "Gesichtsbehandlung (60 Min)", Kategorie: "Wellness", Tag: "Donnerstag", Startzeit: "11:00", Dauer: 60, Kosten: 65.0, maxTeilnehmerzahl: 3, aktuelleTeilnehmerzahl: 1 },
        { KursID: 12, Kurstitel: "Private Spa für Zwei (120 Min)", Kategorie: "Wellness", Tag: "Sonntag", Startzeit: "18:00", Dauer: 120, Kosten: 120.0, maxTeilnehmerzahl: 1, aktuelleTeilnehmerzahl: 0 }
    ]
};

// ==========================================
// 1. TIMER & STATUS FUNCTIONS
// ==========================================
function initTimer() {
    updateTimerDisplay();
    AppState.timerInterval = setInterval(() => {
        if (!AppState.isTimerRunning) return;
        if (AppState.timeRemaining > 0) {
            AppState.timeRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(AppState.timerInterval);
            alert("⏰ Die Bearbeitungszeit von 60 Minuten ist abgelaufen!");
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(AppState.timeRemaining / 60);
    const seconds = AppState.timeRemaining % 60;
    const str = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const el = document.getElementById("timer-display");
    if (el) el.textContent = str;

    const timerBox = document.getElementById("timer-box");
    if (timerBox) {
        if (AppState.timeRemaining <= 300) { // < 5 Minuten
            timerBox.classList.add("warning");
        } else {
            timerBox.classList.remove("warning");
        }
    }
}

function toggleTimer() {
    AppState.isTimerRunning = !AppState.isTimerRunning;
    const btn = document.getElementById("timer-toggle-btn");
    if (btn) {
        btn.innerHTML = AppState.isTimerRunning ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
    }
}

function resetTimer() {
    AppState.timeRemaining = 60 * 60;
    AppState.isTimerRunning = true;
    updateTimerDisplay();
    const btn = document.getElementById("timer-toggle-btn");
    if (btn) btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function updateTotalPoints() {
    const total = Object.values(AppState.scores).reduce((a, b) => a + b, 0);
    const el = document.getElementById("total-points-display");
    if (el) el.textContent = `${total} / 90 Pkt`;

    const pct = Math.round((total / 90) * 100);
    const pctEl = document.getElementById("score-percentage");
    if (pctEl) pctEl.textContent = `${pct} %`;

    // IHK Notenschlüssel (100-Punkte-Skala bezogen auf 90 max)
    let note = "6 (Ungenügend)";
    if (pct >= 92) note = "1 (Sehr gut)";
    else if (pct >= 81) note = "2 (Gut)";
    else if (pct >= 67) note = "3 (Befriedigend)";
    else if (pct >= 50) note = "4 (Ausreichend - Bestanden)";
    else if (pct >= 30) note = "5 (Mangelhaft)";

    const noteEl = document.getElementById("grade-display");
    if (noteEl) noteEl.textContent = note;
}

// ==========================================
// 2. NAVIGATION & ATTACHMENT SWITCHING
// ==========================================
function switchTaskTab(tabId) {
    AppState.activeTab = tabId;
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === tabId);
    });

    document.querySelectorAll(".task-content-section").forEach(sec => {
        sec.style.display = (sec.id === `section-${tabId}`) ? "block" : "none";
    });

    // Auto-switch right attachment tab to match task
    if (tabId === 'it1') switchAttTab('att_it1_ang1');
    else if (tabId === 'it2') switchAttTab('att_it2_infra');
    else if (tabId === 'it3') switchAttTab('att_it3_preis');
}

function switchAttTab(attId) {
    AppState.activeAttTab = attId;
    document.querySelectorAll(".att-tab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.att === attId);
    });

    document.querySelectorAll(".att-content-sheet").forEach(sheet => {
        sheet.style.display = (sheet.id === `sheet-${attId}`) ? "block" : "none";
    });
}

function toggleMusterloesung(sectionId) {
    const el = document.getElementById(`solution-${sectionId}`);
    if (el) {
        el.classList.toggle("open");
    }
}

// ==========================================
// 3. IT 1: KALKULATIONS-VALIDATOR (30 Pkt)
// ==========================================
const IT1_SOLUTIONS = {
    m_lep: 48235.29,     // 140 * 410 / 1.19
    m_rabatt: 964.71,    // 2 % von 48235.29
    m_zep: 47270.58,     // 48235.29 - 964.71
    m_skonto: 945.41,    // 2 % von 47270.58
    m_bep: 46325.17,     // 47270.58 - 945.41
    m_bezug: 70.00,      // 14 * 5.95 / 1.19
    m_gesamt: 46395.17,  // 46325.17 + 70.00

    d_lep: 49700.00,     // 140 * 355
    d_rabatt: 0.00,      // 0 % da unter 200 Stück
    d_zep: 49700.00,
    d_skonto: 1491.00,   // 3 % von 49700
    d_bep: 48209.00,
    d_bezug: 75.00,
    d_gesamt: 48284.00,
    winner: 'maier'      // Systemhaus Maier ist günstiger
};

function checkIT1() {
    let earned = 0;
    const tol = 1.0; // Toleranz wegen Runden

    function checkField(id, expected, pts) {
        const input = document.getElementById(id);
        if (!input) return;
        const val = parseFloat(input.value.replace(',', '.'));
        if (!isNaN(val) && Math.abs(val - expected) <= tol) {
            input.classList.add("valid");
            input.classList.remove("invalid");
            earned += pts;
        } else {
            input.classList.add("invalid");
            input.classList.remove("valid");
        }
    }

    // Maier (14 Pkt)
    checkField("m_lep", IT1_SOLUTIONS.m_lep, 2);
    checkField("m_rabatt", IT1_SOLUTIONS.m_rabatt, 2);
    checkField("m_zep", IT1_SOLUTIONS.m_zep, 2);
    checkField("m_skonto", IT1_SOLUTIONS.m_skonto, 2);
    checkField("m_bep", IT1_SOLUTIONS.m_bep, 2);
    checkField("m_bezug", IT1_SOLUTIONS.m_bezug, 2);
    checkField("m_gesamt", IT1_SOLUTIONS.m_gesamt, 2);

    // Digital Pro (12 Pkt)
    checkField("d_lep", IT1_SOLUTIONS.d_lep, 2);
    checkField("d_rabatt", IT1_SOLUTIONS.d_rabatt, 2);
    checkField("d_zep", IT1_SOLUTIONS.d_zep, 1);
    checkField("d_skonto", IT1_SOLUTIONS.d_skonto, 2);
    checkField("d_bep", IT1_SOLUTIONS.d_bep, 2);
    checkField("d_bezug", IT1_SOLUTIONS.d_bezug, 1);
    checkField("d_gesamt", IT1_SOLUTIONS.d_gesamt, 2);

    // Günstigeres Angebot (4 Pkt)
    const selWinner = document.querySelector('input[name="it1_winner"]:checked')?.value;
    const winnerFeedback = document.getElementById("it1-winner-feedback");
    if (selWinner === IT1_SOLUTIONS.winner) {
        earned += 4;
        if (winnerFeedback) {
            winnerFeedback.innerHTML = '<span style="color: #10b981; font-weight: bold;"><i class="fa-solid fa-check"></i> Richtig! Systemhaus Maier ist mit 46.395,17 € netto um 1.888,83 € günstiger.</span>';
        }
    } else if (winnerFeedback) {
        winnerFeedback.innerHTML = '<span style="color: #ef4444;"><i class="fa-solid fa-xmark"></i> Leider nicht korrekt. Bitte prüfen Sie den Gesamtbezugspreis beider Angebote.</span>';
    }

    AppState.scores.it1 = earned;
    document.getElementById("it1-score-display").textContent = `${earned} / 30 Pkt`;
    updateTotalPoints();
}

// ==========================================
// 4. IT 2: INFRASTRUKTUR & DHCP (40 Pkt)
// ==========================================
function checkIT2_1() {
    // 2.1 WLAN Ursachen (12 Pkt)
    let pts = 0;
    const txt1 = (document.getElementById("wlan_u1")?.value || "").toLowerCase();
    const txt2 = (document.getElementById("wlan_u2")?.value || "").toLowerCase();
    const txt3 = (document.getElementById("wlan_u3")?.value || "").toLowerCase();
    const allTxt = `${txt1} ${txt2} ${txt3}`;

    // Kriterium 1: 2.4 GHz Band / Co-Channel / Überlappung
    if (allTxt.includes("2,4") || allTxt.includes("2.4") || allTxt.includes("kanal") || allTxt.includes("frequenz") || allTxt.includes("interferenz")) {
        pts += 4;
    }
    // Kriterium 2: Hohe Clientdichte / CSMA/CA / Shared Medium / Kollision
    if (allTxt.includes("client") || allTxt.includes("csma") || allTxt.includes("shared") || allTxt.includes("kollision") || allTxt.includes("dichte") || allTxt.includes("viele geräte")) {
        pts += 4;
    }
    // Kriterium 3: Veralteter Standard (802.11b/g/n) oder Fast-Ethernet (100 Mbit) Uplink
    if (allTxt.includes("100 mbit") || allTxt.includes("fast ethernet") || allTxt.includes("uplink") || allTxt.includes("switch") || allTxt.includes("802.11") || allTxt.includes("veraltet")) {
        pts += 4;
    }

    AppState.scores.it2_1 = pts;
    document.getElementById("it2_1-score-display").textContent = `${pts} / 12 Pkt`;
    updateTotalPoints();
}

function checkIT2_2() {
    // 2.2 Ausleuchtung (8 Pkt)
    const ap1 = document.getElementById("ap_choice_og2")?.checked;
    const ap2 = document.getElementById("ap_choice_og9")?.checked;
    const ap3 = document.getElementById("ap_choice_og10")?.checked;
    const dualBand = document.getElementById("ap_dualband")?.checked;

    let pts = 0;
    if (ap1 && ap2 && ap3) pts += 5;
    if (dualBand) pts += 3;

    AppState.scores.it2_2 = pts;
    document.getElementById("it2_2-score-display").textContent = `${pts} / 8 Pkt`;
    updateTotalPoints();
}

function checkIT2_3() {
    // 2.3 DHCP Server / subnets.txt (20 Pkt)
    let pts = 0;
    const subnet = (document.getElementById("dhcp_subnet")?.value || "").trim();
    const netmask = (document.getElementById("dhcp_netmask")?.value || "").trim();
    const broadcast = (document.getElementById("dhcp_broadcast")?.value || "").trim();
    const rangeStart = (document.getElementById("dhcp_range_start")?.value || "").trim();
    const rangeEnd = (document.getElementById("dhcp_range_end")?.value || "").trim();
    const router = (document.getElementById("dhcp_router")?.value || "").trim();

    // 1. Subnetz: 172.16.0.0 (4 Pkt)
    if (subnet === "172.16.0.0") pts += 4;

    // 2. Netmask: 255.255.252.0 (/22 für 1000 Clients) (6 Pkt)
    if (netmask === "255.255.252.0") pts += 6;

    // 3. Broadcast: 172.16.3.255 (4 Pkt)
    if (broadcast === "172.16.3.255") pts += 4;

    // 4. Router/Gateway: 172.16.0.254 oder 172.16.0.1 (2 Pkt)
    if (router === "172.16.0.254" || router === "172.16.0.1") pts += 2;

    // 5. IP-Range für mindestens 1.000 Clients (4 Pkt)
    if (rangeStart.startsWith("172.16.0.") && rangeEnd.startsWith("172.16.3.")) {
        pts += 4;
    }

    AppState.scores.it2_3 = pts;
    document.getElementById("it2_3-score-display").textContent = `${pts} / 20 Pkt`;
    updateTotalPoints();
}

// ==========================================
// 5. IT 3.1: SQL-ENGINE & ABFRAGEN (10 Pkt)
// ==========================================
function executeSQL(queryNum) {
    const input = document.getElementById(`sql_query_${queryNum}`);
    const outTable = document.getElementById(`sql_result_${queryNum}`);
    const feedback = document.getElementById(`sql_feedback_${queryNum}`);
    if (!input || !outTable) return;

    const sql = input.value.trim();
    const sqlUpper = sql.toUpperCase();

    if (queryNum === 1) {
        // SELECT Kurstitel FROM Sportkurse WHERE Kategorie = 'Wellness'
        if (sqlUpper.includes("SELECT") && sqlUpper.includes("KURSTITEL") && sqlUpper.includes("WHERE") && sqlUpper.includes("WELLNESS")) {
            const results = AppState.sportkurseDB.filter(k => k.Kategorie.toLowerCase() === "wellness");
            renderSQLTable(outTable, ["Kurstitel"], results.map(r => [r.Kurstitel]));
            feedback.innerHTML = '<span style="color: #10b981; font-weight: bold;"><i class="fa-solid fa-check"></i> Korrekt (3/3 Punkte)</span>';
            input.dataset.pts = "3";
        } else {
            feedback.innerHTML = '<span style="color: #ef4444;"><i class="fa-solid fa-xmark"></i> Syntax oder Bedingung fehlerhaft. Erwartet: SELECT Kurstitel FROM Sportkurse WHERE Kategorie = \'Wellness\';</span>';
            input.dataset.pts = "0";
        }
    } else if (queryNum === 2) {
        // SELECT Kurstitel, Tag, Startzeit, Dauer, Kosten, (maxTeilnehmerzahl - aktuelleTeilnehmerzahl) AS freiePlaetze ... WHERE aktuelleTeilnehmerzahl < maxTeilnehmerzahl ORDER BY Kosten DESC
        if (sqlUpper.includes("SELECT") && sqlUpper.includes("WHERE") && (sqlUpper.includes("MAXTEILNEHMERZAHL") || sqlUpper.includes("FREI")) && sqlUpper.includes("ORDER BY") && sqlUpper.includes("DESC")) {
            const results = AppState.sportkurseDB
                .filter(k => k.aktuelleTeilnehmerzahl < k.maxTeilnehmerzahl)
                .sort((a, b) => b.Kosten - a.Kosten);
            
            const rows = results.map(r => [r.Kurstitel, r.Tag, r.Startzeit, r.Dauer, r.Kosten.toFixed(2) + " €", (r.maxTeilnehmerzahl - r.aktuelleTeilnehmerzahl)]);
            renderSQLTable(outTable, ["Kurstitel", "Tag", "Startzeit", "Dauer", "Kosten", "freiePlaetze"], rows);
            feedback.innerHTML = '<span style="color: #10b981; font-weight: bold;"><i class="fa-solid fa-check"></i> Korrekt (4/4 Punkte)</span>';
            input.dataset.pts = "4";
        } else {
            feedback.innerHTML = '<span style="color: #ef4444;"><i class="fa-solid fa-xmark"></i> Nicht vollständig. Erwartet: SELECT mit berechneter Spalte für freie Plätze, WHERE aktuelleTeilnehmerzahl < maxTeilnehmerzahl und ORDER BY Kosten DESC;</span>';
            input.dataset.pts = "0";
        }
    } else if (queryNum === 3) {
        // UPDATE Sportkurse SET aktuelleTeilnehmerzahl = aktuelleTeilnehmerzahl + 1 WHERE KursID = 1
        if (sqlUpper.includes("UPDATE") && sqlUpper.includes("SET") && sqlUpper.includes("AKTUELLETEILNEHMERZAHL") && sqlUpper.includes("+ 1") && sqlUpper.includes("WHERE") && sqlUpper.includes("1")) {
            const course1 = AppState.sportkurseDB.find(k => k.KursID === 1);
            if (course1) course1.aktuelleTeilnehmerzahl = 13;
            renderSQLTable(outTable, ["KursID", "Kurstitel", "aktuelleTeilnehmerzahl", "maxTeilnehmerzahl"], [[1, "Morgen-Yoga", 13, 15]]);
            feedback.innerHTML = '<span style="color: #10b981; font-weight: bold;"><i class="fa-solid fa-check"></i> Korrekt (3/3 Punkte) – Teilnehmerzahl wurde auf 13 erhöht!</span>';
            input.dataset.pts = "3";
        } else {
            feedback.innerHTML = '<span style="color: #ef4444;"><i class="fa-solid fa-xmark"></i> Erwartet: UPDATE Sportkurse SET aktuelleTeilnehmerzahl = aktuelleTeilnehmerzahl + 1 WHERE KursID = 1;</span>';
            input.dataset.pts = "0";
        }
    }

    const p1 = parseInt(document.getElementById("sql_query_1")?.dataset.pts || "0");
    const p2 = parseInt(document.getElementById("sql_query_2")?.dataset.pts || "0");
    const p3 = parseInt(document.getElementById("sql_query_3")?.dataset.pts || "0");
    AppState.scores.it3_1 = p1 + p2 + p3;
    document.getElementById("it3_1-score-display").textContent = `${AppState.scores.it3_1} / 10 Pkt`;
    updateTotalPoints();
}

function renderSQLTable(container, headers, rows) {
    let html = `<table class="kalk-table"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    rows.forEach(r => {
        html += `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`;
    });
    html += `</tbody></table>`;
    container.innerHTML = html;
}

// ==========================================
// 6. IT 3.2: CODE-RUNNER & UNIT-TESTS FÜR ermittle_Preis (10 Pkt)
// ==========================================
const PREISLISTE_MAP = {
    "Morgen-Yoga": 14.0,
    "Aqua-Fitness": 12.0,
    "Pilates": 15.0,
    "Rückenfit": 12.0,
    "Nordic Walking": 10.0,
    "Personal Training": 55.0,
    "Saunalandschaft": 18.0,
    "Klassische Massage 30m": 39.0,
    "Klassische Massage 60m": 69.0,
    "Hot-Stone-Massage": 85.0,
    "Gesichtsbehandlung": 65.0,
    "Private Spa": 120.0
};

function get_Betrag(kurs) {
    return PREISLISTE_MAP[kurs] || 0.0;
}

function runCodeTests() {
    const code = document.getElementById("code_editor").value;
    const logBox = document.getElementById("test-log-output");
    logBox.innerHTML = "";

    let userFn = null;
    try {
        // Wrapper um den Code auszuführen und Funktion zu extrahieren
        const fnFactory = new Function("get_Betrag", `
            ${code}
            if (typeof ermittle_Preis === 'function') return ermittle_Preis;
            throw new Error("Funktion ermittle_Preis nicht gefunden!");
        `);
        userFn = fnFactory(get_Betrag);
    } catch (e) {
        logBox.innerHTML = `<div style="color: #ef4444; padding: 0.5rem;"><i class="fa-solid fa-triangle-exclamation"></i> Syntaxfehler / Kompilierfehler:<br>${e.message}</div>`;
        AppState.scores.it3_2 = 0;
        document.getElementById("it3_2-score-display").textContent = "0 / 10 Pkt";
        updateTotalPoints();
        return;
    }

    const testCases = [
        {
            name: "Test 1: 2 Kurse (Yoga + Aqua) ohne Status",
            kurse: ["Morgen-Yoga", "Aqua-Fitness"],
            status: "",
            expected: 26.00,
            desc: "Kein Mengenrabatt (<= 3 Kurse)"
        },
        {
            name: "Test 2: 4 Kurse (Yoga + Aqua + Pilates + Rückenfit) ohne Status",
            kurse: ["Morgen-Yoga", "Aqua-Fitness", "Pilates", "Rückenfit"],
            status: "",
            expected: 42.40,
            desc: "20 % Mengenrabatt (> 3 Kurse): 53,00 € * 0.80 = 42,40 €"
        },
        {
            name: "Test 3: 6 Kurse ohne Status",
            kurse: ["Morgen-Yoga", "Aqua-Fitness", "Pilates", "Rückenfit", "Nordic Walking", "Personal Training"],
            status: "",
            expected: 82.60,
            desc: "30 % Mengenrabatt (> 5 Kurse): 118,00 € * 0.70 = 82,60 €"
        },
        {
            name: "Test 4: 4 Kurse mit Status 'Gold'",
            kurse: ["Morgen-Yoga", "Aqua-Fitness", "Pilates", "Rückenfit"],
            status: "Gold",
            expected: 21.20,
            desc: "20 % Mengenrabatt + 50 % Gold-Rabatt: 42,40 € * 0.50 = 21,20 €"
        },
        {
            name: "Test 5: 6 Kurse mit Status 'Gold'",
            kurse: ["Morgen-Yoga", "Aqua-Fitness", "Pilates", "Rückenfit", "Nordic Walking", "Personal Training"],
            status: "Gold",
            expected: 41.30,
            desc: "30 % Mengenrabatt + 50 % Gold-Rabatt: 82,60 € * 0.50 = 41,30 €"
        }
    ];

    let passedCount = 0;
    let logHtml = "";

    testCases.forEach((tc, idx) => {
        try {
            const res = userFn(tc.kurse, tc.status);
            const numRes = typeof res === 'number' ? res : parseFloat(res);
            const isMatch = !isNaN(numRes) && Math.abs(numRes - tc.expected) <= 0.05;

            if (isMatch) {
                passedCount++;
                logHtml += `
                    <div class="test-item pass">
                        <span><i class="fa-solid fa-check"></i> ${tc.name}</span>
                        <span>Ergebnis: ${numRes.toFixed(2)} € (Erwartet: ${tc.expected.toFixed(2)} €)</span>
                    </div>
                `;
            } else {
                logHtml += `
                    <div class="test-item fail">
                        <span><i class="fa-solid fa-xmark"></i> ${tc.name}</span>
                        <span>Ergebnis: ${isNaN(numRes) ? res : numRes.toFixed(2)} € (Erwartet: ${tc.expected.toFixed(2)} €)</span>
                    </div>
                `;
            }
        } catch (err) {
            logHtml += `
                <div class="test-item fail">
                    <span><i class="fa-solid fa-xmark"></i> ${tc.name}</span>
                    <span>Laufzeitfehler: ${err.message}</span>
                </div>
            `;
        }
    });

    const points = passedCount * 2; // 5 Tests à 2 Punkte = 10 Punkte
    AppState.scores.it3_2 = points;
    document.getElementById("it3_2-score-display").textContent = `${points} / 10 Pkt`;
    updateTotalPoints();

    logBox.innerHTML = `
        <div style="margin-bottom: 0.5rem; font-weight: bold; color: ${passedCount === 5 ? '#4ade80' : '#f87171'};">
            ${passedCount} von 5 Tests bestanden (${points} / 10 Punkte)
        </div>
        ${logHtml}
    `;
}

// ==========================================
// 6.2 PYTHON FUNKTIONS-STUDIO & GENERATOR
// ==========================================
let currentPyExIndex = 0;

const PYTHON_STUDIO_EXERCISES = [
    {
        id: "city_hof",
        title: "🏨 Hotel City Hof: Sport- und Wellnesskurse (Original BaWü Probeklausur)",
        desc: "Bucht ein Gast Sport- und Wellnesskurse, wird im Anschluss der Preis ermittelt und der Hotelrechnung hinzugefügt. Es gibt verschiedene Rabatte bei der Buchung von mehreren Kursen. Stammgäste mit Goldstatus können die Kurse zu einem extra reduzierten Preis buchen.",
        fnName: "ermittle_Preis",
        signature: "def ermittle_Preis(gebuchteKurse: list, Status: str) -> float:",
        helperName: "get_Betrag",
        helperDoc: "get_Betrag(kurs: str) -> float (Gibt den Einzelpreis des übergebenen Kurses zurück)",
        rules: [
            "Mehr als 3 Kurse gebucht (> 3): 20 % Mengenrabatt auf die Gesamtsumme",
            "Mehr als 5 Kurse gebucht (> 5): 30 % Mengenrabatt auf die Gesamtsumme",
            "Status 'Gold': Zusätzlich 50 % Rabatt auf den rabattierten Betrag"
        ],
        masterData: {
            "Morgen-Yoga": 14.0, "Aqua-Fitness": 12.0, "Pilates": 15.0,
            "Rückenfit": 12.0, "Nordic Walking": 10.0, "Personal Training": 55.0
        },
        templateCode: `def ermittle_Preis(gebuchteKurse, Status):
    # 1. Grundpreise mit der Hilfsfunktion aufsummieren
    summe = 0.0
    for kurs in gebuchteKurse:
        summe += get_Betrag(kurs)
    
    # 2. Mengenrabatt anwenden (Höhere Schwelle > 5 zuerst prüfen!)
    anzahl = len(gebuchteKurse)
    if anzahl > 5:
        summe = summe * 0.70    # 30 % Rabatt
    elif anzahl > 3:
        summe = summe * 0.80    # 20 % Rabatt
    
    # 3. Statusrabatt für 'Gold'
    if Status == "Gold":
        summe = summe * 0.50    # 50 % Zusatzrabatt
        
    return round(summe, 2)
`,
        solutionCode: `def ermittle_Preis(gebuchteKurse, Status):
    # 1. Grundsumme berechnen
    summe = sum(get_Betrag(k) for k in gebuchteKurse)
    
    # 2. Mengenrabatt (Zuerst höchste Schwelle prüfen!)
    if len(gebuchteKurse) > 5:
        summe *= 0.70  # 30 % Rabatt
    elif len(gebuchteKurse) > 3:
        summe *= 0.80  # 20 % Rabatt
        
    # 3. Statusrabatt
    if Status == "Gold":
        summe *= 0.50  # 50 % Zusatzrabatt
        
    return round(summe, 2)`,
        tests: [
            { name: "2 Kurse, kein Status", args: [["Morgen-Yoga", "Aqua-Fitness"], ""], expected: 26.0 },
            { name: "4 Kurse (> 3), kein Status", args: [["Morgen-Yoga", "Aqua-Fitness", "Pilates", "Rückenfit"], ""], expected: 42.4 },
            { name: "6 Kurse (> 5), kein Status", args: [["Morgen-Yoga", "Aqua-Fitness", "Pilates", "Rückenfit", "Nordic Walking", "Personal Training"], ""], expected: 82.6 },
            { name: "4 Kurse (> 3), Status 'Gold'", args: [["Morgen-Yoga", "Aqua-Fitness", "Pilates", "Rückenfit"], "Gold"], expected: 21.2 },
            { name: "6 Kurse (> 5), Status 'Gold'", args: [["Morgen-Yoga", "Aqua-Fitness", "Pilates", "Rückenfit", "Nordic Walking", "Personal Training"], "Gold"], expected: 41.3 }
        ]
    },
    {
        id: "it_hardware",
        title: "🛒 IT-Systemhaus: Hardware- und Zubehörbestellung",
        desc: "Ein IT-Systemhaus ermittelt den Gesamtbestellwert für Kunden. Bei größeren Bestellungen wird ein Mengenrabatt gewährt. Kunden mit Kundentyp 'Premium' erhalten einen zusätzlichen Partnerrabatt.",
        fnName: "berechne_Bestellwert",
        signature: "def berechne_Bestellwert(artikelListe: list, kundenTyp: str) -> float:",
        helperName: "get_Artikelpreis",
        helperDoc: "get_Artikelpreis(artikel: str) -> float (Gibt den Einzelpreis des Artikels zurück)",
        rules: [
            "Mehr als 4 Artikel bestellt (> 4): 15 % Mengenrabatt auf die Gesamtsumme",
            "Mehr als 8 Artikel bestellt (> 8): 25 % Mengenrabatt auf die Gesamtsumme",
            "kundenTyp 'Premium': Zusätzlich 20 % Partnerrabatt auf den rabattierten Betrag"
        ],
        masterData: {
            "USB-C-Dock": 80.0, "Patchkabel Cat6a": 8.0, "4K-Webcam": 90.0,
            "Wireless Tastatur": 45.0, "Monitorarm Dual": 70.0, "Headset Pro": 60.0
        },
        templateCode: `def berechne_Bestellwert(artikelListe, kundenTyp):
    summe = 0.0
    for art in artikelListe:
        summe += get_Artikelpreis(art)
        
    anzahl = len(artikelListe)
    if anzahl > 8:
        summe = summe * 0.75  # 25 % Rabatt
    elif anzahl > 4:
        summe = summe * 0.85  # 15 % Rabatt
        
    if kundenTyp == "Premium":
        summe = summe * 0.80  # 20 % Zusatzrabatt
        
    return round(summe, 2)
`,
        solutionCode: `def berechne_Bestellwert(artikelListe, kundenTyp):
    summe = sum(get_Artikelpreis(a) for a in artikelListe)
    if len(artikelListe) > 8:
        summe *= 0.75
    elif len(artikelListe) > 4:
        summe *= 0.85
    if kundenTyp == "Premium":
        summe *= 0.80
    return round(summe, 2)`,
        tests: [
            { name: "3 Artikel (Standard)", args: [["USB-C-Dock", "4K-Webcam", "Headset Pro"], "Standard"], expected: 230.0 },
            { name: "5 Artikel (> 4), Standard", args: [["USB-C-Dock", "Patchkabel Cat6a", "4K-Webcam", "Wireless Tastatur", "Monitorarm Dual"], "Standard"], expected: 249.05 },
            { name: "5 Artikel (> 4), Premium", args: [["USB-C-Dock", "Patchkabel Cat6a", "4K-Webcam", "Wireless Tastatur", "Monitorarm Dual"], "Premium"], expected: 199.24 },
            { name: "9 Artikel (> 8), Standard", args: [["USB-C-Dock", "USB-C-Dock", "4K-Webcam", "Wireless Tastatur", "Monitorarm Dual", "Headset Pro", "Patchkabel Cat6a", "Patchkabel Cat6a", "Patchkabel Cat6a"], "Standard"], expected: 336.75 },
            { name: "9 Artikel (> 8), Premium", args: [["USB-C-Dock", "USB-C-Dock", "4K-Webcam", "Wireless Tastatur", "Monitorarm Dual", "Headset Pro", "Patchkabel Cat6a", "Patchkabel Cat6a", "Patchkabel Cat6a"], "Premium"], expected: 269.4 }
        ]
    },
    {
        id: "cinema",
        title: "🎟️ Kinoticket-Rechner: Altersstaffel & Wochenendzuschlag",
        desc: "Ein Kino berechnet den Ticketpreis für Besuchergruppen. Kinder (< 12 Jahre) zahlen 6 €, Jugendliche (< 18 Jahre) zahlen 8 €, Erwachsene zahlen 12 €. Am Wochenende (istWochenende == True) kommt pro Ticket ein Zuschlag von 2.00 € hinzu. Ab 4 Personen (>= 4) gibt es 15 % Familienrabatt auf die Gesamtsumme.",
        fnName: "kalkuliere_Ticketpreis",
        signature: "def kalkuliere_Ticketpreis(altersListe: list, istWochenende: bool) -> float:",
        helperName: "get_Basistarif",
        helperDoc: "get_Basistarif(alter: int) -> float (Gibt Basispreis zurück: < 12: 6.0€, < 18: 8.0€, sonst: 12.0€)",
        rules: [
            "Basispreise: Alter < 12 = 6.00 €, Alter < 18 = 8.00 €, Erwachsene = 12.00 €",
            "istWochenende == True: +2.00 € Wochenendzuschlag pro Ticket",
            "Ab 4 Personen (len >= 4): 15 % Gruppenrabatt auf die Gesamtsumme"
        ],
        masterData: {
            "Kind (< 12)": 6.0, "Jugendlicher (< 18)": 8.0, "Erwachsener": 12.0, "Wochenendzuschlag": 2.0
        },
        templateCode: `def kalkuliere_Ticketpreis(altersListe, istWochenende):
    summe = 0.0
    for alter in altersListe:
        preis = get_Basistarif(alter)
        if istWochenende:
            preis += 2.0
        summe += preis
            
    if len(altersListe) >= 4:
        summe = summe * 0.85  # 15 % Gruppenrabatt
        
    return round(summe, 2)
`,
        solutionCode: `def kalkuliere_Ticketpreis(altersListe, istWochenende):
    summe = 0.0
    for a in altersListe:
        p = get_Basistarif(a)
        if istWochenende:
            p += 2.0
        summe += p
    if len(altersListe) >= 4:
        summe *= 0.85
    return round(summe, 2)`,
        tests: [
            { name: "2 Erwachsene, Wochentag", args: [[35, 40], false], expected: 24.0 },
            { name: "2 Erwachsene, Wochenende", args: [[35, 40], true], expected: 28.0 },
            { name: "Familie (2 Erw, 2 Kinder), Wochentag", args: [[40, 38, 8, 10], false], expected: 30.6 },
            { name: "Familie (2 Erw, 2 Kinder), Wochenende", args: [[40, 38, 8, 10], true], expected: 37.4 },
            { name: "Einzelfahrt Jugendlicher (< 18), Wochentag", args: [[15], false], expected: 8.0 }
        ]
    },
    {
        id: "fitness",
        title: "🏋️ Fitness- & Health Club: Modulpakete & VIP-Treue",
        desc: "Ein Fitnessstudio kalkuliert den Monatsbeitrag abhängig von den gewählten Modulen. Bei Buchung mehrerer Module gibt es einen Paketrabatt. Mitglieder mit VIP-Status erhalten einen zusätzlichen Treuerabatt.",
        fnName: "berechne_Mitgliedsbeitrag",
        signature: "def berechne_Mitgliedsbeitrag(moduleListe: list, istVIP: bool) -> float:",
        helperName: "get_Modulbeitrag",
        helperDoc: "get_Modulbeitrag(modul: str) -> float (Gibt monatlichen Modulpreis zurück)",
        rules: [
            "Mehr als 2 Module gebucht (> 2): 10 % Mehrkursrabatt",
            "Mehr als 4 Module gebucht (> 4): 25 % Mehrkursrabatt",
            "istVIP == True: Zusätzlich 40 % Treuerabatt auf den rabattierten Betrag"
        ],
        masterData: {
            "Gym-Cardio": 30.0, "Sauna-Flat": 20.0, "Yoga & Pilates": 25.0,
            "Crossfit-Box": 35.0, "Ernährungsberatung": 40.0, "Personal Coach": 70.0
        },
        templateCode: `def berechne_Mitgliedsbeitrag(moduleListe, istVIP):
    summe = 0.0
    for m in moduleListe:
        summe += get_Modulbeitrag(m)
        
    anzahl = len(moduleListe)
    if anzahl > 4:
        summe = summe * 0.75  # 25 % Rabatt
    elif anzahl > 2:
        summe = summe * 0.90  # 10 % Rabatt
        
    if istVIP:
        summe = summe * 0.60  # 40 % Treuerabatt
        
    return round(summe, 2)
`,
        solutionCode: `def berechne_Mitgliedsbeitrag(moduleListe, istVIP):
    summe = sum(get_Modulbeitrag(m) for m in moduleListe)
    if len(moduleListe) > 4:
        summe *= 0.75
    elif len(moduleListe) > 2:
        summe *= 0.90
    if istVIP:
        summe *= 0.60
    return round(summe, 2)`,
        tests: [
            { name: "2 Module, kein VIP", args: [["Gym-Cardio", "Sauna-Flat"], false], expected: 50.0 },
            { name: "3 Module (> 2), kein VIP", args: [["Gym-Cardio", "Sauna-Flat", "Yoga & Pilates"], false], expected: 67.5 },
            { name: "3 Module (> 2), VIP", args: [["Gym-Cardio", "Sauna-Flat", "Yoga & Pilates"], true], expected: 40.5 },
            { name: "5 Module (> 4), kein VIP", args: [["Gym-Cardio", "Sauna-Flat", "Yoga & Pilates", "Crossfit-Box", "Ernährungsberatung"], false], expected: 112.5 },
            { name: "5 Module (> 4), VIP", args: [["Gym-Cardio", "Sauna-Flat", "Yoga & Pilates", "Crossfit-Box", "Ernährungsberatung"], true], expected: 67.5 }
        ]
    }
];

function onSelectPythonExercise(idx) {
    currentPyExIndex = parseInt(idx);
    loadPythonExercise(currentPyExIndex);
}

function loadPythonExercise(idx) {
    const ex = PYTHON_STUDIO_EXERCISES[idx];
    if (!ex) return;

    document.getElementById("py-exercise-title").textContent = ex.title;
    document.getElementById("py-exercise-desc").textContent = ex.desc;
    document.getElementById("py-signature-display").textContent = ex.signature;
    document.getElementById("py-helper-display").innerHTML = `Vorgegebene Hilfsfunktion: <code>${ex.helperDoc}</code>`;

    // Rules
    const rulesList = document.getElementById("py-rules-list");
    rulesList.innerHTML = ex.rules.map(r => `<li>${r}</li>`).join('');

    // Master Data
    const mdBox = document.getElementById("py-masterdata-display");
    mdBox.innerHTML = Object.entries(ex.masterData).map(([k, v]) => `• ${k}: ${v.toFixed(2)} €`).join('<br>');

    // Code Editor
    document.getElementById("python_code_editor").value = ex.templateCode;

    // Solution
    document.getElementById("py-solution-code-block").textContent = ex.solutionCode;
    document.getElementById("solution-python-studio").classList.remove("open");

    // Clear test log
    document.getElementById("py-test-log-console").innerHTML = `<div style="color: #94a3b8;"><i class="fa-solid fa-terminal"></i> Übung geladen. Klicken Sie auf "Python-Code ausführen", um die Tests zu starten.</div>`;
}

function resetPythonCode() {
    const ex = PYTHON_STUDIO_EXERCISES[currentPyExIndex];
    if (ex) {
        document.getElementById("python_code_editor").value = ex.templateCode;
        document.getElementById("py-test-log-console").innerHTML = `<div style="color: #94a3b8;"><i class="fa-solid fa-terminal"></i> Code zurückgesetzt.</div>`;
    }
}

function togglePythonSolution() {
    const box = document.getElementById("solution-python-studio");
    if (box) box.classList.toggle("open");
}

function generateRandomPythonExercise() {
    const scenarios = [
        {
            context: "🚗 CarSharing & E-Mobility Flotte",
            fnName: "kalkuliere_Mietpreis",
            param1: "fahrtenListe", param2: "hatKundenkarte",
            items: { "Eco-Kleinwagen": 25.0, "Kombi-Familie": 45.0, "E-SUV": 65.0, "Transporter": 80.0 },
            t1: 3, t1Pct: 0.15,
            t2: 5, t2Pct: 0.25,
            bonusPct: 0.30
        },
        {
            context: "💻 Cloud-Hosting & Serverpakete",
            fnName: "berechne_Monatskosten",
            param1: "serverListe", param2: "jahresZahler",
            items: { "vServer Basic": 15.0, "Cloud DB Pro": 35.0, "Storage 1TB": 20.0, "Dedicated GPU": 95.0 },
            t1: 2, t1Pct: 0.10,
            t2: 4, t2Pct: 0.20,
            bonusPct: 0.25
        },
        {
            context: "🍕 Event-Catering & Speisen",
            fnName: "berechne_CateringRechnung",
            param1: "speisenListe", param2: "istGrosskunde",
            items: { "Fingerfood-Platte": 30.0, "Warmes Buffet": 45.0, "Getränke-Flat": 18.0, "Dessert-Station": 22.0 },
            t1: 3, t1Pct: 0.10,
            t2: 6, t2Pct: 0.20,
            bonusPct: 0.35
        }
    ];

    const sc = scenarios[Math.floor(Math.random() * scenarios.length)];
    const helperName = "get_Einzelpreis";
    const itemEntries = Object.entries(sc.items);

    const newEx = {
        id: "dynamic_" + Date.now(),
        title: `🎲 Dynamisch generiert: ${sc.context}`,
        desc: `Für ein System im Bereich ${sc.context} soll die Abrechnung implementiert werden. Es greift eine Mengenrabatt-Staffel sowie ein Partnerrabatt bei entsprechendem Status.`,
        fnName: sc.fnName,
        signature: `def ${sc.fnName}(${sc.param1}: list, ${sc.param2}: bool) -> float:`,
        helperName: helperName,
        helperDoc: `${helperName}(element: str) -> float (Gibt Einzelpreis zurück)`,
        rules: [
            `Mehr als ${sc.t1} Einheiten gebucht (> ${sc.t1}): ${(sc.t1Pct * 100).toFixed(0)} % Mengenrabatt`,
            `Mehr als ${sc.t2} Einheiten gebucht (> ${sc.t2}): ${(sc.t2Pct * 100).toFixed(0)} % Mengenrabatt`,
            `${sc.param2} == True: Zusätzlich ${(sc.bonusPct * 100).toFixed(0)} % Partnerrabatt auf den rabattierten Betrag`
        ],
        masterData: sc.items,
        templateCode: `def ${sc.fnName}(${sc.param1}, ${sc.param2}):
    summe = 0.0
    for element in ${sc.param1}:
        summe += ${helperName}(element)
        
    anzahl = len(${sc.param1})
    if anzahl > ${sc.t2}:
        summe = summe * ${1 - sc.t2Pct}
    elif anzahl > ${sc.t1}:
        summe = summe * ${1 - sc.t1Pct}
        
    if ${sc.param2}:
        summe = summe * ${1 - sc.bonusPct}
        
    return round(summe, 2)
`,
        solutionCode: `def ${sc.fnName}(${sc.param1}, ${sc.param2}):
    summe = sum(${helperName}(e) for e in ${sc.param1})
    if len(${sc.param1}) > ${sc.t2}:
        summe *= ${1 - sc.t2Pct}
    elif len(${sc.param1}) > ${sc.t1}:
        summe *= ${1 - sc.t1Pct}
    if ${sc.param2}:
        summe *= ${1 - sc.bonusPct}
    return round(summe, 2)`,
        tests: []
    };

    // Generate 5 tests
    const itemNames = Object.keys(sc.items);
    for (let t = 0; t < 5; t++) {
        const count = t === 0 ? 1 : (t === 1 ? (sc.t1 + 1) : (t === 2 ? (sc.t2 + 1) : (sc.t1 + 1)));
        const isBonus = (t >= 3);
        const testList = [];
        for (let i = 0; i < count; i++) {
            testList.push(itemNames[i % itemNames.length]);
        }
        let expected = testList.reduce((acc, it) => acc + sc.items[it], 0);
        if (count > sc.t2) expected *= (1 - sc.t2Pct);
        else if (count > sc.t1) expected *= (1 - sc.t1Pct);
        if (isBonus) expected *= (1 - sc.bonusPct);
        expected = Math.round(expected * 100) / 100;

        newEx.tests.push({
            name: `Test ${t+1}: ${count} Element(e)${isBonus ? ` [mit Bonus]` : ''}`,
            args: [testList, isBonus],
            expected: expected
        });
    }

    PYTHON_STUDIO_EXERCISES.push(newEx);
    const select = document.getElementById("py-exercise-select");
    const opt = document.createElement("option");
    opt.value = PYTHON_STUDIO_EXERCISES.length - 1;
    opt.textContent = `🎲 Neu: ${sc.context}`;
    select.appendChild(opt);
    select.value = opt.value;

    onSelectPythonExercise(opt.value);
}

// ==========================================
// PYTHON RUNNER & TRANSPILER IN JAVASCRIPT
// ==========================================
function runPythonStudioTests() {
    const ex = PYTHON_STUDIO_EXERCISES[currentPyExIndex];
    if (!ex) return;

    const code = document.getElementById("python_code_editor").value;
    const logConsole = document.getElementById("py-test-log-console");

    // Dynamic helper function based on exercise masterData
    const helperFn = function(arg) {
        if (ex.id === "cinema") {
            const age = parseInt(arg);
            if (age < 12) return 6.0;
            if (age < 18) return 8.0;
            return 12.0;
        }
        return ex.masterData[arg] || 0.0;
    };

    let userFn = null;
    try {
        // Transpile common Python constructs to safe JS for instant in-browser execution
        let jsCode = transpilePythonToJS(code, ex.fnName);
        const fnFactory = new Function(ex.helperName, "get_Betrag", "get_Artikelpreis", "get_Basistarif", "get_Modulbeitrag", "get_Einzelpreis", `
            ${jsCode}
            if (typeof ${ex.fnName} === 'function') return ${ex.fnName};
            throw new Error("Funktion '${ex.fnName}' konnte nicht gefunden werden.");
        `);
        userFn = fnFactory(helperFn, helperFn, helperFn, helperFn, helperFn, helperFn);
    } catch (err) {
        logConsole.innerHTML = `
            <div style="color: #f87171; padding: 0.5rem;">
                <strong><i class="fa-solid fa-triangle-exclamation"></i> Python Syntax- oder Übersetzungsfehler:</strong><br>
                ${err.message}
            </div>
        `;
        return;
    }

    let passed = 0;
    let logHtml = "";

    ex.tests.forEach((tc, idx) => {
        try {
            const res = userFn(...tc.args);
            const num = typeof res === 'number' ? res : parseFloat(res);
            const isMatch = !isNaN(num) && Math.abs(num - tc.expected) <= 0.05;

            if (isMatch) {
                passed++;
                logHtml += `
                    <div class="test-item pass">
                        <span><i class="fa-solid fa-check"></i> ${tc.name}</span>
                        <span>Ergebnis: ${num.toFixed(2)} € (Erwartet: ${tc.expected.toFixed(2)} €)</span>
                    </div>
                `;
            } else {
                logHtml += `
                    <div class="test-item fail">
                        <span><i class="fa-solid fa-xmark"></i> ${tc.name}</span>
                        <span>Ergebnis: ${isNaN(num) ? res : num.toFixed(2)} € (Erwartet: ${tc.expected.toFixed(2)} €)</span>
                    </div>
                `;
            }
        } catch (e) {
            logHtml += `
                <div class="test-item fail">
                    <span><i class="fa-solid fa-xmark"></i> ${tc.name}</span>
                    <span>Laufzeitfehler: ${e.message}</span>
                </div>
            `;
        }
    });

    logConsole.innerHTML = `
        <div style="margin-bottom: 0.6rem; font-weight: bold; font-size: 0.95rem; color: ${passed === ex.tests.length ? '#4ade80' : '#f87171'};">
            ${passed === ex.tests.length ? '<i class="fa-solid fa-trophy"></i> Alle ' : ''}${passed} von ${ex.tests.length} Tests bestanden!
        </div>
        ${logHtml}
    `;
}

function transpilePythonToJS(pyCode, fnName) {
    let lines = pyCode.split('\n');
    let jsLines = [];
    let indentStack = [0];

    for (let rawLine of lines) {
        let trimmed = rawLine.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;

        let indent = rawLine.search(/\S/);
        if (indent === -1) indent = 0;

        while (indentStack.length > 1 && indent < indentStack[indentStack.length - 1]) {
            indentStack.pop();
            jsLines.push('}'.padStart(indentStack[indentStack.length - 1] + 1, ' '));
        }

        let l = trimmed;

        // Python -> JS conversions
        if (l.startsWith('def ')) {
            l = l.replace(/^def\s+([a-zA-Z0-9_]+)\s*\((.*?)\)\s*(?:->.*?)?:/, 'function $1($2) {');
            indentStack.push(indent + 4);
        } else if (l.startsWith('elif ')) {
            l = l.replace(/^elif\s+(.*?):$/, '} else if ($1) {');
            l = fixPyExpr(l);
            indentStack.push(indent + 4);
        } else if (l.startsWith('if ')) {
            l = l.replace(/^if\s+(.*?):$/, 'if ($1) {');
            l = fixPyExpr(l);
            indentStack.push(indent + 4);
        } else if (l.startsWith('else:')) {
            l = '} else {';
            indentStack.push(indent + 4);
        } else if (l.startsWith('for ') && l.includes(' in ')) {
            l = l.replace(/^for\s+([a-zA-Z0-9_]+)\s+in\s+(.*?):$/, 'for (let $1 of $2) {');
            indentStack.push(indent + 4);
        } else {
            l = fixPyExpr(l);
            if (!l.endsWith(';') && !l.endsWith('{') && !l.endsWith('}')) {
                l += ';';
            }
        }

        jsLines.push(' '.repeat(indent) + l);
    }

    while (indentStack.length > 1) {
        indentStack.pop();
        jsLines.push('}');
    }

    return jsLines.join('\n');
}

function fixPyExpr(expr) {
    return expr
        .replace(/\blen\((.*?)\)/g, '($1).length')
        .replace(/\bround\((.*?),\s*2\)/g, 'Math.round(($1) * 100) / 100')
        .replace(/\bTrue\b/g, 'true')
        .replace(/\bFalse\b/g, 'false')
        .replace(/\band\b/g, '&&')
        .replace(/\bor\b/g, '||')
        .replace(/\bnot\b/g, '!')
        .replace(/\bpass\b/g, '// pass');
}

// ==========================================
// 7. INITIALISIERUNG
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
    initTimer();
    updateTotalPoints();
    if (typeof loadPythonExercise === 'function') {
        loadPythonExercise(0);
    }
});
