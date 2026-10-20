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
// 7. INITIALISIERUNG
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
    initTimer();
    updateTotalPoints();
});
