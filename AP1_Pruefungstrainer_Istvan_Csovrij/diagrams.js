// AP1 Visuelle Diagramm-Bibliothek & SVG-Generatoren
// Erzeugt gestochen scharfe, responsive SVG-Vektorgrafiken für Fragen und Musterlösungen

function escapeDiagHtml(text) {
    if (!text) return "";
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

var VisualDiagrams = {
    // 1. UML Anwendungsfalldiagramm (Use-Case-Diagramm)
    getUseCaseDiagramSvg: function(title = "Online-Shop Bestellsystem") {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 340" width="100%" height="100%">
            <defs>
                <marker id="uc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
                </marker>
                <marker id="uc-dasharrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
                </marker>
            </defs>
            <rect width="680" height="340" fill="#f8fafc" rx="8" />
            
            <!-- Systemgrenze -->
            <rect x="150" y="30" width="380" height="280" fill="#ffffff" stroke="#0284c7" stroke-width="2" stroke-dasharray="6,4" rx="6" />
            <text x="165" y="55" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">${escapeDiagHtml(title)}</text>
            
            <!-- Akteur links: Kunde -->
            <g transform="translate(60, 110)">
                <circle cx="20" cy="20" r="14" fill="#f1f5f9" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="34" x2="20" y2="70" stroke="#1e293b" stroke-width="2.5" />
                <line x1="0" y1="46" x2="40" y2="46" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="70" x2="4" y2="105" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="70" x2="36" y2="105" stroke="#1e293b" stroke-width="2.5" />
                <text x="20" y="125" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Kunde</text>
            </g>
            
            <!-- Akteur rechts: Zahlungsdienstleister -->
            <g transform="translate(570, 150)">
                <circle cx="20" cy="20" r="14" fill="#f1f5f9" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="34" x2="20" y2="70" stroke="#1e293b" stroke-width="2.5" />
                <line x1="0" y1="46" x2="40" y2="46" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="70" x2="4" y2="105" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="70" x2="36" y2="105" stroke="#1e293b" stroke-width="2.5" />
                <text x="20" y="125" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#0f172a">Payment Gateway</text>
            </g>
            
            <!-- Use Cases (Ovale) -->
            <ellipse cx="270" cy="90" rx="85" ry="24" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
            <text x="270" y="95" font-family="sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="#0369a1">Artikel suchen</text>
            
            <ellipse cx="270" cy="170" rx="95" ry="26" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
            <text x="270" y="175" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">Bestellung aufgeben</text>
            
            <ellipse cx="440" cy="170" rx="80" ry="24" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" />
            <text x="440" y="175" font-family="sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="#6d28d9">Bonität prüfen</text>
            
            <ellipse cx="270" cy="260" rx="90" ry="24" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="270" y="265" font-family="sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="#b45309">Gutschein einlösen</text>
            
            <!-- Assoziationslinien -->
            <line x1="100" y1="150" x2="185" y2="95" stroke="#475569" stroke-width="2" />
            <line x1="100" y1="165" x2="175" y2="170" stroke="#475569" stroke-width="2" />
            <line x1="520" y1="170" x2="570" y2="185" stroke="#475569" stroke-width="2" />
            
            <!-- Include-Pfeil (Bestellung -> Bonität prüfen) -->
            <line x1="365" y1="170" x2="430" y2="170" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#uc-dasharrow)" />
            <text x="395" y="155" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9" text-anchor="middle">&lt;&lt;include&gt;&gt;</text>
            
            <!-- Extend-Pfeil (Gutschein -> Bestellung) -->
            <line x1="270" y1="236" x2="270" y2="202" stroke="#d97706" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#uc-dasharrow)" />
            <text x="315" y="225" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="start">&lt;&lt;extend&gt;&gt;</text>
        </svg>
        `;
    },

    // 2. UML Klassendiagramm
    getClassDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
            <defs>
                <marker id="cls-diamond" viewBox="0 0 16 16" refX="0" refY="8" markerWidth="8" markerHeight="8" orient="auto">
                    <polygon points="0 8, 8 0, 16 8, 8 16" fill="#1e293b" />
                </marker>
            </defs>
            <rect width="680" height="320" fill="#f8fafc" rx="8" />
            
            <!-- Klasse: Kunde -->
            <g transform="translate(30, 40)">
                <rect width="180" height="190" fill="#ffffff" stroke="#1e3a8a" stroke-width="2" rx="4" />
                <rect width="180" height="32" fill="#dbeafe" stroke="#1e3a8a" stroke-width="2" rx="4" />
                <text x="90" y="22" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Kunde</text>
                
                <text x="12" y="55" font-family="monospace" font-size="12" fill="#334155">- kundenNr: int</text>
                <text x="12" y="75" font-family="monospace" font-size="12" fill="#334155">- name: String</text>
                <text x="12" y="95" font-family="monospace" font-size="12" fill="#334155">- email: String</text>
                <line x1="0" y1="110" x2="180" y2="110" stroke="#cbd5e1" stroke-width="1.5" />
                
                <text x="12" y="132" font-family="monospace" font-size="12" fill="#0f766e">+ getBestellungen()</text>
                <text x="12" y="152" font-family="monospace" font-size="12" fill="#0f766e">+ addBestellung()</text>
                <text x="12" y="172" font-family="monospace" font-size="12" fill="#0f766e">+ getUmsatz(): double</text>
            </g>
            
            <!-- Klasse: Bestellung -->
            <g transform="translate(260, 40)">
                <rect width="180" height="190" fill="#ffffff" stroke="#1e3a8a" stroke-width="2" rx="4" />
                <rect width="180" height="32" fill="#dbeafe" stroke="#1e3a8a" stroke-width="2" rx="4" />
                <text x="90" y="22" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Bestellung</text>
                
                <text x="12" y="55" font-family="monospace" font-size="12" fill="#334155">- bestellNr: int</text>
                <text x="12" y="75" font-family="monospace" font-size="12" fill="#334155">- datum: Date</text>
                <text x="12" y="95" font-family="monospace" font-size="12" fill="#334155">- status: String</text>
                <line x1="0" y1="110" x2="180" y2="110" stroke="#cbd5e1" stroke-width="1.5" />
                
                <text x="12" y="132" font-family="monospace" font-size="12" fill="#0f766e">+ berechneSumme()</text>
                <text x="12" y="152" font-family="monospace" font-size="12" fill="#0f766e">+ stornieren()</text>
                <text x="12" y="172" font-family="monospace" font-size="12" fill="#0f766e">+ versenden()</text>
            </g>
            
            <!-- Klasse: Position -->
            <g transform="translate(490, 40)">
                <rect width="160" height="150" fill="#ffffff" stroke="#1e3a8a" stroke-width="2" rx="4" />
                <rect width="160" height="32" fill="#dbeafe" stroke="#1e3a8a" stroke-width="2" rx="4" />
                <text x="80" y="22" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Bestellposition</text>
                
                <text x="12" y="55" font-family="monospace" font-size="12" fill="#334155">- posNr: int</text>
                <text x="12" y="75" font-family="monospace" font-size="12" fill="#334155">- menge: int</text>
                <text x="12" y="95" font-family="monospace" font-size="12" fill="#334155">- einzelpreis: double</text>
                <line x1="0" y1="110" x2="160" y2="110" stroke="#cbd5e1" stroke-width="1.5" />
                <text x="12" y="132" font-family="monospace" font-size="12" fill="#0f766e">+ getGesamtpreis()</text>
            </g>
            
            <!-- Assoziation Kunde -> Bestellung -->
            <line x1="210" y1="120" x2="260" y2="120" stroke="#1e293b" stroke-width="2" />
            <text x="218" y="112" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">1</text>
            <text x="238" y="112" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">0..*</text>
            
            <!-- Komposition Bestellung -> Bestellposition -->
            <line x1="440" y1="120" x2="490" y2="120" stroke="#1e293b" stroke-width="2" marker-start="url(#cls-diamond)" />
            <text x="456" y="112" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">1</text>
            <text x="472" y="112" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">1..*</text>
            
            <text x="340" y="285" font-family="sans-serif" font-size="12" font-style="italic" fill="#64748b" text-anchor="middle">UML-Klassendiagramm: 3-geteilte Klassenboxen (Name, Attribute, Methoden) & Multiplizitäten (1 zu 0..*)</text>
        </svg>
        `;
    },

    // 3. ER-Diagramm (Entity-Relationship-Modell)
    getErdDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 300" width="100%" height="100%">
            <rect width="680" height="300" fill="#f8fafc" rx="8" />
            
            <!-- Entität 1: KUNDE -->
            <rect x="50" y="110" width="130" height="60" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5" rx="4" />
            <text x="115" y="145" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="#1e3a8a">KUNDE</text>
            
            <!-- Attribute KUNDE -->
            <ellipse cx="60" cy="45" rx="50" ry="20" fill="#ffffff" stroke="#64748b" stroke-width="1.5" />
            <text x="60" y="49" font-family="sans-serif" font-size="11" text-decoration="underline" font-weight="bold" text-anchor="middle" fill="#0f172a">KundenNr (PK)</text>
            <line x1="80" y1="64" x2="95" y2="110" stroke="#94a3b8" stroke-width="1.5" />
            
            <ellipse cx="170" cy="45" rx="45" ry="20" fill="#ffffff" stroke="#64748b" stroke-width="1.5" />
            <text x="170" y="49" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#0f172a">Name</text>
            <line x1="155" y1="64" x2="135" y2="110" stroke="#94a3b8" stroke-width="1.5" />
            
            <!-- Beziehung: erteilt (Raute) -->
            <polygon points="290,140 340,105 390,140 340,175" fill="#fef3c7" stroke="#d97706" stroke-width="2.5" />
            <text x="340" y="145" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#92400e">erteilt</text>
            
            <!-- Kardinalitäten -->
            <line x1="180" y1="140" x2="290" y2="140" stroke="#1e293b" stroke-width="2" />
            <text x="210" y="132" font-family="sans-serif" font-size="15" font-weight="bold" fill="#dc2626">1</text>
            
            <line x1="390" y1="140" x2="500" y2="140" stroke="#1e293b" stroke-width="2" />
            <text x="460" y="132" font-family="sans-serif" font-size="15" font-weight="bold" fill="#dc2626">n</text>
            
            <!-- Entität 2: BESTELLUNG -->
            <rect x="500" y="110" width="140" height="60" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5" rx="4" />
            <text x="570" y="145" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="#1e3a8a">BESTELLUNG</text>
            
            <!-- Attribute BESTELLUNG -->
            <ellipse cx="510" cy="45" rx="50" ry="20" fill="#ffffff" stroke="#64748b" stroke-width="1.5" />
            <text x="510" y="49" font-family="sans-serif" font-size="11" text-decoration="underline" font-weight="bold" text-anchor="middle" fill="#0f172a">BestellNr (PK)</text>
            <line x1="530" y1="64" x2="545" y2="110" stroke="#94a3b8" stroke-width="1.5" />
            
            <ellipse cx="615" cy="45" rx="45" ry="20" fill="#ffffff" stroke="#64748b" stroke-width="1.5" />
            <text x="615" y="49" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#0f172a">Datum</text>
            <line x1="605" y1="64" x2="585" y2="110" stroke="#94a3b8" stroke-width="1.5" />
            
            <text x="340" y="250" font-family="sans-serif" font-size="13" font-weight="600" fill="#475569" text-anchor="middle">ER-Diagramm (Chen): Entitäten (Rechtecke), Attribute (Ovale) & 1:n Beziehung (Raute)</text>
        </svg>
        `;
    },

    // 4. Ereignisgesteuerte Prozesskette (EPK)
    getEpkDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 340" width="100%" height="100%">
            <defs>
                <marker id="epk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155" />
                </marker>
            </defs>
            <rect width="680" height="340" fill="#f8fafc" rx="8" />
            
            <!-- 1. Ereignis (Sechseck rosa) -->
            <polygon points="260,20 420,20 450,45 420,70 260,70 230,45" fill="#fce7f3" stroke="#db2777" stroke-width="2" />
            <text x="340" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#9d174d" text-anchor="middle">Kundenanfrage eingegangen</text>
            
            <line x1="340" y1="70" x2="340" y2="95" stroke="#334155" stroke-width="2" marker-end="url(#epk-arrow)" />
            
            <!-- 2. Funktion (Grün abgerundetes Rechteck) -->
            <rect x="250" y="100" width="180" height="45" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="10" />
            <text x="340" y="128" font-family="sans-serif" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">Angebot erstellen</text>
            
            <line x1="340" y1="145" x2="340" y2="170" stroke="#334155" stroke-width="2" marker-end="url(#epk-arrow)" />
            
            <!-- 3. Konnektor (XOR Kreis) -->
            <circle cx="340" cy="190" r="18" fill="#ffffff" stroke="#475569" stroke-width="2" />
            <text x="340" y="195" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">XOR</text>
            
            <line x1="322" y1="190" x2="180" y2="190" stroke="#334155" stroke-width="2" />
            <line x1="180" y1="190" x2="180" y2="225" stroke="#334155" stroke-width="2" marker-end="url(#epk-arrow)" />
            
            <line x1="358" y1="190" x2="500" y2="190" stroke="#334155" stroke-width="2" />
            <line x1="500" y1="190" x2="500" y2="225" stroke="#334155" stroke-width="2" marker-end="url(#epk-arrow)" />
            
            <!-- 4a. Ereignis links: Angebot angenommen -->
            <polygon points="110,230 250,230 275,255 250,280 110,280 85,255" fill="#fce7f3" stroke="#db2777" stroke-width="2" />
            <text x="180" y="259" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9d174d" text-anchor="middle">Angebot angenommen</text>
            
            <!-- 4b. Ereignis rechts: Angebot abgelehnt -->
            <polygon points="430,230 570,230 595,255 570,280 430,280 405,255" fill="#fce7f3" stroke="#db2777" stroke-width="2" />
            <text x="500" y="259" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9d174d" text-anchor="middle">Angebot abgelehnt</text>
            
            <text x="340" y="320" font-family="sans-serif" font-size="12" font-style="italic" fill="#64748b" text-anchor="middle">EPK: Ereignisse (rosa Sechsecke), Funktionen (grüne Rechtecke) und Verknüpfungsoperatoren (XOR/AND/OR)</text>
        </svg>
        `;
    },

    // 5. BPMN 2.0 Diagramm
    getBpmnDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 260" width="100%" height="100%">
            <defs>
                <marker id="bpmn-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
                </marker>
            </defs>
            <rect width="680" height="260" fill="#f8fafc" rx="8" />
            
            <!-- Start-Event -->
            <circle cx="60" cy="110" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5" />
            <text x="60" y="150" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">Incident gemeldet</text>
            
            <line x1="80" y1="110" x2="130" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-arr)" />
            
            <!-- Task 1 -->
            <rect x="135" y="80" width="130" height="60" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="8" />
            <text x="200" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Störung analysieren</text>
            
            <line x1="265" y1="110" x2="315" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-arr)" />
            
            <!-- Gateway -->
            <polygon points="340,85 365,110 340,135 315,110" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="340" y="116" font-family="sans-serif" font-size="16" font-weight="bold" fill="#b45309" text-anchor="middle">✕</text>
            <text x="340" y="70" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">Hardwaredefekt?</text>
            
            <!-- Pfad Ja -->
            <line x1="340" y1="85" x2="340" y2="40" stroke="#1e293b" stroke-width="2" />
            <line x1="340" y1="40" x2="400" y2="40" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-arr)" />
            <text x="360" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">[Ja]</text>
            <rect x="405" y="15" width="140" height="50" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="8" />
            <text x="475" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Hardware tauschen</text>
            
            <!-- Pfad Nein -->
            <line x1="365" y1="110" x2="400" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-arr)" />
            <text x="380" y="102" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">[Nein]</text>
            <rect x="405" y="85" width="140" height="50" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="8" />
            <text x="475" y="115" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Software-Patch</text>
            
            <!-- End Event -->
            <line x1="545" y1="40" x2="590" y2="40" stroke="#1e293b" stroke-width="2" />
            <line x1="590" y1="40" x2="590" y2="110" stroke="#1e293b" stroke-width="2" />
            <line x1="545" y1="110" x2="590" y2="110" stroke="#1e293b" stroke-width="2" />
            <line x1="590" y1="110" x2="615" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-arr)" />
            
            <circle cx="635" cy="110" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="4" />
            <text x="635" y="150" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Ticket gelöst</text>
            
            <text x="340" y="240" font-family="sans-serif" font-size="12" font-style="italic" fill="#64748b" text-anchor="middle">BPMN 2.0: Start-Ereignis (dünner Kreis), Tasks (Rechtecke), Gateway (Raute mit ✕) & End-Ereignis (fetter Kreis)</text>
        </svg>
        `;
    },

    // 6. Struktogramm (Nassi-Shneiderman)
    getStruktogrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320" width="100%" height="100%">
            <rect width="600" height="320" fill="#f8fafc" rx="8" />
            
            <rect x="50" y="20" width="500" height="260" fill="#ffffff" stroke="#1e293b" stroke-width="2.5" />
            
            <rect x="50" y="20" width="500" height="40" fill="#f1f5f9" stroke="#1e293b" stroke-width="1.5" />
            <text x="65" y="45" font-family="monospace" font-size="13" font-weight="bold" fill="#0f172a">Eingabe: bestellmenge, lagerbestand, einzelpreis</text>
            
            <polygon points="50,60 550,60 300,110" fill="#e0f2fe" stroke="#1e293b" stroke-width="1.5" />
            <text x="300" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">lagerbestand &gt;= bestellmenge ?</text>
            <text x="80" y="100" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a">JA</text>
            <text x="510" y="100" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">NEIN</text>
            
            <line x1="300" y1="110" x2="300" y2="200" stroke="#1e293b" stroke-width="1.5" />
            <rect x="50" y="110" width="250" height="45" fill="#f0fdf4" stroke="#1e293b" stroke-width="1" />
            <text x="65" y="137" font-family="monospace" font-size="12" fill="#166534">lagerbestand -= bestellmenge</text>
            
            <rect x="50" y="155" width="250" height="45" fill="#f0fdf4" stroke="#1e293b" stroke-width="1" />
            <text x="65" y="182" font-family="monospace" font-size="12" fill="#166534">status = "Lieferung freigegeben"</text>
            
            <rect x="300" y="110" width="250" height="90" fill="#fef2f2" stroke="#1e293b" stroke-width="1" />
            <text x="315" y="145" font-family="monospace" font-size="12" fill="#991b1b">nachbestellung = bestellmenge - lagerbestand</text>
            <text x="315" y="175" font-family="monospace" font-size="12" fill="#991b1b">status = "Ware im Rückstand"</text>
            
            <rect x="50" y="200" width="500" height="40" fill="#f1f5f9" stroke="#1e293b" stroke-width="1.5" />
            <text x="65" y="225" font-family="monospace" font-size="13" font-weight="bold" fill="#0f172a">Ausgabe: status, lagerbestand</text>
            
            <rect x="50" y="240" width="500" height="40" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
            <text x="65" y="265" font-family="monospace" font-size="13" font-weight="bold" fill="#0f172a">Rückgabe: TRUE</text>
            
            <text x="300" y="305" font-family="sans-serif" font-size="12" font-style="italic" fill="#64748b" text-anchor="middle">DIN 66261 Nassi-Shneiderman Struktogramm: Dreiecks-Verzweigung (JA / NEIN)</text>
        </svg>
        `;
    },
    // 6a. Struktogramm Rabattberechnung Onlineshop (DIN 66261)
    getRabattStruktogrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 440" width="100%" height="100%">
            <rect width="680" height="440" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">DIN 66261 Nassi-Shneiderman Struktogramm: Rabattberechnung Onlineshop</text>
            
            <!-- Outer Schleife: SOLANGE noch Artikel im Warenkorb DO -->
            <rect x="30" y="40" width="620" height="30" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
            <text x="45" y="60" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e">SOLANGE noch Artikel im Warenkorb vorhanden DO</text>
            
            <!-- Schleifenkörper links (L-Rahmen) -->
            <rect x="30" y="70" width="25" height="310" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
            
            <!-- Innerer Bereich -->
            <g transform="translate(55, 70)">
                <!-- 1. Eingabe -->
                <rect x="0" y="0" width="595" height="32" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
                <text x="15" y="21" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">Eingabe: status, bestellwert</text>
                
                <!-- 2. Große Verzweigung: status == 'premium' ? -->
                <polygon points="0,32 595,32 297,72" fill="#e0f2fe" stroke="#1e293b" stroke-width="1.5" />
                <text x="297" y="52" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">status == 'premium' ?</text>
                <text x="30" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">JA (Premium-Kunde)</text>
                <text x="565" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="end">NEIN (Standard-Kunde)</text>
                
                <!-- Trennlinie Mitte -->
                <line x1="297" y1="72" x2="297" y2="182" stroke="#1e293b" stroke-width="1.5" />
                
                <!-- LINKE SEITE: Premium (bestellwert >= 100 ?) -->
                <polygon points="0,72 297,72 148,112" fill="#f0fdf4" stroke="#1e293b" stroke-width="1.2" />
                <text x="148" y="92" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">bestellwert &gt;= 100 ?</text>
                <text x="15" y="105" font-family="sans-serif" font-size="10" font-weight="bold" fill="#16a34a">JA</text>
                <text x="282" y="105" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="end">NEIN</text>
                
                <line x1="148" y1="112" x2="148" y2="182" stroke="#1e293b" stroke-width="1.2" />
                <rect x="0" y="112" width="148" height="70" fill="#dcfce7" stroke="#1e293b" stroke-width="1" />
                <text x="10" y="152" font-family="monospace" font-size="11" font-weight="bold" fill="#166534">rabattProzent = 0.10</text>
                <text x="10" y="168" font-family="sans-serif" font-size="10" fill="#166534">(10 % Rabatt)</text>
                
                <rect x="148" y="112" width="149" height="70" fill="#f0fdf4" stroke="#1e293b" stroke-width="1" />
                <text x="158" y="152" font-family="monospace" font-size="11" font-weight="bold" fill="#166534">rabattProzent = 0.05</text>
                <text x="158" y="168" font-family="sans-serif" font-size="10" fill="#166534">(5 % Rabatt)</text>
                
                <!-- RECHTE SEITE: Standard (bestellwert >= 200 ?) -->
                <polygon points="297,72 595,72 446,112" fill="#fef2f2" stroke="#1e293b" stroke-width="1.2" />
                <text x="446" y="92" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">bestellwert &gt;= 200 ?</text>
                <text x="312" y="105" font-family="sans-serif" font-size="10" font-weight="bold" fill="#16a34a">JA</text>
                <text x="580" y="105" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="end">NEIN</text>
                
                <line x1="446" y1="112" x2="446" y2="182" stroke="#1e293b" stroke-width="1.2" />
                <rect x="297" y="112" width="149" height="70" fill="#fee2e2" stroke="#1e293b" stroke-width="1" />
                <text x="307" y="152" font-family="monospace" font-size="11" font-weight="bold" fill="#991b1b">rabattProzent = 0.05</text>
                <text x="307" y="168" font-family="sans-serif" font-size="10" fill="#991b1b">(5 % Rabatt)</text>
                
                <rect x="446" y="112" width="149" height="70" fill="#fef2f2" stroke="#1e293b" stroke-width="1" />
                <text x="456" y="152" font-family="monospace" font-size="11" font-weight="bold" fill="#991b1b">rabattProzent = 0.00</text>
                <text x="456" y="168" font-family="sans-serif" font-size="10" fill="#991b1b">(Kein Rabatt)</text>
                
                <!-- 3. Berechnung Rabatt & Rechnungsbetrag -->
                <rect x="0" y="182" width="595" height="40" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
                <text x="15" y="207" font-family="monospace" font-size="12" fill="#0f172a">rabattBetrag = bestellwert * rabattProzent</text>
                
                <rect x="0" y="222" width="595" height="40" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
                <text x="15" y="247" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">rechnungsbetrag = bestellwert - rabattBetrag</text>
                
                <!-- 4. Ausgabe -->
                <rect x="0" y="262" width="595" height="48" fill="#f1f5f9" stroke="#1e293b" stroke-width="1.5" />
                <text x="15" y="291" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">AUSGABE: "Rechnungsbetrag: ", rechnungsbetrag</text>
            </g>
            
            <!-- Fußzeile -->
            <text x="340" y="418" font-family="sans-serif" font-size="12" font-style="italic" fill="#475569" text-anchor="middle">DIN 66261: Kopfgesteuerte Schleife (Gelb) mit geschachtelter Dreiecks-Verzweigung (Blau/Grün/Rot)</text>
        </svg>
        `;
    },

    // 6b. Struktogramm Tracing / Stammkunde (DIN 66261)
    getStammkundeStruktogrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 430" width="100%" height="100%">
            <rect width="680" height="430" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">DIN 66261 Nassi-Shneiderman Struktogramm: Rabatt-Tracing</text>
            
            <g transform="translate(40, 40)">
                <!-- 1. Eingabe -->
                <rect x="0" y="0" width="600" height="35" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
                <text x="15" y="23" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">Eingabe: einkaufswert, istStammkunde</text>
                
                <!-- 2. rabatt = 0 -->
                <rect x="0" y="35" width="600" height="30" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" />
                <text x="15" y="55" font-family="monospace" font-size="12" fill="#0f172a">rabatt = 0</text>
                
                <!-- 3. Verzweigung 1: einkaufswert >= 500 ? -->
                <polygon points="0,65 600,65 300,105" fill="#e0f2fe" stroke="#1e293b" stroke-width="1.5" />
                <text x="300" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">einkaufswert &gt;= 500 ?</text>
                <text x="30" y="98" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">JA</text>
                <text x="570" y="98" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="end">NEIN</text>
                
                <line x1="300" y1="105" x2="300" y2="185" stroke="#1e293b" stroke-width="1.5" />
                
                <!-- JA: rabatt = 10 -->
                <rect x="0" y="105" width="300" height="80" fill="#dcfce7" stroke="#1e293b" stroke-width="1.2" />
                <text x="150" y="150" font-family="monospace" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">rabatt = 10</text>
                
                <!-- NEIN: einkaufswert >= 200 ? -->
                <polygon points="300,105 600,105 450,140" fill="#fef2f2" stroke="#1e293b" stroke-width="1.2" />
                <text x="450" y="123" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">einkaufswert &gt;= 200 ?</text>
                <text x="320" y="133" font-family="sans-serif" font-size="10" font-weight="bold" fill="#16a34a">JA</text>
                <text x="580" y="133" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="end">NEIN</text>
                
                <line x1="450" y1="140" x2="450" y2="185" stroke="#1e293b" stroke-width="1.2" />
                <rect x="300" y="140" width="150" height="45" fill="#fee2e2" stroke="#1e293b" stroke-width="1" />
                <text x="375" y="167" font-family="monospace" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">rabatt = 5</text>
                
                <rect x="450" y="140" width="150" height="45" fill="#fef2f2" stroke="#1e293b" stroke-width="1" />
                <text x="525" y="167" font-family="monospace" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">rabatt = 0</text>
                
                <!-- 4. Verzweigung 2: istStammkunde == true ? -->
                <polygon points="0,185 600,185 300,225" fill="#f3e8ff" stroke="#1e293b" stroke-width="1.5" />
                <text x="300" y="205" font-family="sans-serif" font-size="12" font-weight="bold" fill="#7e22ce" text-anchor="middle">istStammkunde == true ?</text>
                <text x="30" y="218" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">JA</text>
                <text x="570" y="218" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="end">NEIN</text>
                
                <line x1="300" y1="225" x2="300" y2="275" stroke="#1e293b" stroke-width="1.5" />
                <rect x="0" y="225" width="300" height="50" fill="#ede9fe" stroke="#1e293b" stroke-width="1.2" />
                <text x="150" y="255" font-family="monospace" font-size="12" font-weight="bold" fill="#6b21a8" text-anchor="middle">rabatt = rabatt + 3</text>
                
                <rect x="300" y="225" width="300" height="50" fill="#ffffff" stroke="#1e293b" stroke-width="1.2" />
                <text x="450" y="255" font-family="monospace" font-size="12" fill="#64748b" text-anchor="middle">-- TUE NICHTS --</text>
                
                <!-- 5. Endpreis -->
                <rect x="0" y="275" width="600" height="40" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
                <text x="15" y="300" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">endpreis = einkaufswert * (1 - rabatt / 100)</text>
                
                <!-- 6. Ausgabe -->
                <rect x="0" y="315" width="600" height="40" fill="#f1f5f9" stroke="#1e293b" stroke-width="1.5" />
                <text x="15" y="340" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">Ausgabe: endpreis, rabatt</text>
            </g>
            
            <text x="340" y="415" font-family="sans-serif" font-size="12" font-style="italic" fill="#475569" text-anchor="middle">DIN 66261 Nassi-Shneiderman: Gestaffelte Dreiecksverzweigung &amp; Stammkunden-Bonus</text>
        </svg>
        `;
    },

    // 6c. Struktogramm Schleifentypen Vergleich (DIN 66261)
    getLoopComparisonStruktogrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 340" width="100%" height="100%">
            <rect width="680" height="340" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">DIN 66261: Kopfgesteuerte (WHILE) vs. Fußgesteuerte Schleife (DO-WHILE)</text>
            
            <!-- LINKER TEIL: Kopfgesteuerte Schleife (WHILE) -->
            <g transform="translate(30, 45)">
                <text x="150" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">1. Kopfgesteuerte Schleife (WHILE)</text>
                <text x="150" y="38" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Prüfung VOR dem Rumpf (0 bis n Durchläufe)</text>
                
                <!-- Balken OBEN -->
                <rect x="10" y="55" width="280" height="35" fill="#dbeafe" stroke="#0284c7" stroke-width="2" rx="3" />
                <text x="25" y="77" font-family="monospace" font-size="11" font-weight="bold" fill="#0369a1">SOLANGE bedingung == wahr DO</text>
                
                <!-- L-Körper links -->
                <rect x="10" y="90" width="30" height="110" fill="#dbeafe" stroke="#0284c7" stroke-width="2" />
                
                <!-- Schleifenrumpf -->
                <rect x="40" y="90" width="250" height="55" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
                <text x="55" y="122" font-family="monospace" font-size="12" fill="#0f172a">anweisung_1()</text>
                
                <rect x="40" y="145" width="250" height="55" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
                <text x="55" y="177" font-family="monospace" font-size="12" fill="#0f172a">i = i + 1</text>
                
                <text x="150" y="225" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">✓ Kann 0-mal ausgeführt werden (abweisend)</text>
            </g>
            
            <line x1="340" y1="45" x2="340" y2="300" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4" />
            
            <!-- RECHTER TEIL: Fußgesteuerte Schleife (DO-WHILE) -->
            <g transform="translate(370, 45)">
                <text x="150" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">2. Fußgesteuerte Schleife (DO-WHILE)</text>
                <text x="150" y="38" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Prüfung NACH dem Rumpf (mind. 1 Durchlauf)</text>
                
                <!-- L-Körper links -->
                <rect x="10" y="55" width="30" height="110" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
                
                <!-- Schleifenrumpf -->
                <rect x="40" y="55" width="250" height="55" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
                <text x="55" y="87" font-family="monospace" font-size="12" fill="#0f172a">anweisung_1()</text>
                
                <rect x="40" y="110" width="250" height="55" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
                <text x="55" y="142" font-family="monospace" font-size="12" fill="#0f172a">i = i + 1</text>
                
                <!-- Balken UNTEN -->
                <rect x="10" y="165" width="280" height="35" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="3" />
                <text x="25" y="187" font-family="monospace" font-size="11" font-weight="bold" fill="#92400e">SOLANGE bedingung == wahr (oder BIS)</text>
                
                <text x="150" y="225" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">✓ Wird MINDESTENS 1-mal ausgeführt (annehmend)</text>
            </g>
            
            <text x="340" y="325" font-family="sans-serif" font-size="12" font-style="italic" fill="#475569" text-anchor="middle">DIN 66261: Schleifenbalken oben = WHILE (pre-check), Schleifenbalken unten = DO-WHILE (post-check)</text>
        </svg>
        `;
    },

    // 2b. UML Aggregation vs Komposition (UML Klassendiagramm)
    getAggregationKompositionSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
            <rect width="680" height="320" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">UML Klassendiagramm: Aggregation (◇) vs. Komposition (◆)</text>
            
            <!-- 1. Aggregation (Links) -->
            <g transform="translate(30, 45)">
                <rect width="300" height="230" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" rx="6" />
                <text x="150" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">1. Aggregation (Leere Raute ◇)</text>
                <text x="150" y="42" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Lose Teil-Ganzes-Beziehung ("hat-ein")</text>
                
                <!-- Klasse Ganzes -->
                <rect x="20" y="60" width="110" height="40" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
                <text x="75" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Abteilung</text>
                
                <!-- Raute leer -->
                <polygon points="130,80 142,73 154,80 142,87" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
                <line x1="154" y1="80" x2="180" y2="80" stroke="#0284c7" stroke-width="2" />
                
                <!-- Klasse Teil -->
                <rect x="180" y="60" width="100" height="40" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
                <text x="230" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Mitarbeiter</text>
                
                <rect x="15" y="125" width="270" height="90" fill="#f0fdf4" stroke="#86efac" stroke-width="1" rx="4" />
                <text x="25" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534">✓ Nicht-existenziell gebunden:</text>
                <text x="25" y="165" font-family="sans-serif" font-size="11" fill="#166534">Wird die Abteilung aufgelöst, existiert</text>
                <text x="25" y="183" font-family="sans-serif" font-size="11" fill="#166534">der Mitarbeiter weiterhin eigenständig</text>
                <text x="25" y="201" font-family="sans-serif" font-size="11" fill="#166534">im Unternehmen.</text>
            </g>
            
            <!-- 2. Komposition (Rechts) -->
            <g transform="translate(350, 45)">
                <rect width="300" height="230" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5" rx="6" />
                <text x="150" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#6d28d9" text-anchor="middle">2. Komposition (Gefüllte Raute ◆)</text>
                <text x="150" y="42" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Strikte Teil-Ganzes-Beziehung ("besteht-aus")</text>
                
                <!-- Klasse Ganzes -->
                <rect x="20" y="60" width="110" height="40" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5" rx="4" />
                <text x="75" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9" text-anchor="middle">Gebäude / PC</text>
                
                <!-- Raute gefüllt -->
                <polygon points="130,80 142,73 154,80 142,87" fill="#7c3aed" stroke="#7c3aed" stroke-width="2" />
                <line x1="154" y1="80" x2="180" y2="80" stroke="#7c3aed" stroke-width="2" />
                
                <!-- Klasse Teil -->
                <rect x="180" y="60" width="100" height="40" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5" rx="4" />
                <text x="230" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9" text-anchor="middle">Stockwerk / CPU</text>
                
                <rect x="15" y="125" width="270" height="90" fill="#fef2f2" stroke="#fca5a5" stroke-width="1" rx="4" />
                <text x="25" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b">✓ Existenziell abhängig:</text>
                <text x="25" y="165" font-family="sans-serif" font-size="11" fill="#991b1b">Wird das Gebäude abgerissen, werden</text>
                <text x="25" y="183" font-family="sans-serif" font-size="11" fill="#991b1b">auch die Stockwerke zerstört. Gleiche</text>
                <text x="25" y="201" font-family="sans-serif" font-size="11" fill="#991b1b">Lebensdauer von Ganzem und Teil.</text>
            </g>
            
            <text x="340" y="305" font-family="sans-serif" font-size="12" font-style="italic" fill="#475569" text-anchor="middle">UML-Regel: Die Raute steht immer auf der Seite des GANZEN (Owner / Aggregator / Container)</text>
        </svg>
        `;
    },


    // 7. Netzplan (DIN 69900)
    getNetzplanDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
            <defs>
                <marker id="np-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
                </marker>
                <marker id="np-arrowblue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
                </marker>
            </defs>
            <rect width="680" height="320" fill="#f8fafc" rx="8" />
            
            <!-- Knoten A (Kritisch) -->
            <g transform="translate(40, 90)">
                <rect width="160" height="100" fill="#fee2e2" stroke="#dc2626" stroke-width="3" rx="4" />
                <line x1="0" y1="33" x2="160" y2="33" stroke="#dc2626" stroke-width="1.5" />
                <line x1="0" y1="66" x2="160" y2="66" stroke="#dc2626" stroke-width="1.5" />
                <line x1="53" y1="0" x2="53" y2="100" stroke="#dc2626" stroke-width="1.5" />
                <line x1="106" y1="0" x2="106" y2="100" stroke="#dc2626" stroke-width="1.5" />
                <text x="26" y="22" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
                <text x="80" y="22" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">D: 3</text>
                <text x="133" y="22" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
                <text x="80" y="54" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">A: Ist-Analyse</text>
                <text x="26" y="88" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
                <text x="80" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
                <text x="133" y="88" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
            </g>
            
            <line x1="200" y1="140" x2="270" y2="80" stroke="#dc2626" stroke-width="3" marker-end="url(#np-arrow)" />
            <line x1="200" y1="140" x2="270" y2="200" stroke="#0284c7" stroke-width="2" marker-end="url(#np-arrowblue)" />
            
            <!-- Knoten B (Kritisch) -->
            <g transform="translate(275, 30)">
                <rect width="160" height="100" fill="#fee2e2" stroke="#dc2626" stroke-width="3" rx="4" />
                <line x1="0" y1="33" x2="160" y2="33" stroke="#dc2626" stroke-width="1.5" />
                <line x1="0" y1="66" x2="160" y2="66" stroke="#dc2626" stroke-width="1.5" />
                <line x1="53" y1="0" x2="53" y2="100" stroke="#dc2626" stroke-width="1.5" />
                <line x1="106" y1="0" x2="106" y2="100" stroke="#dc2626" stroke-width="1.5" />
                <text x="26" y="22" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
                <text x="80" y="22" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">D: 5</text>
                <text x="133" y="22" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">8</text>
                <text x="80" y="54" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">B: Konzept</text>
                <text x="26" y="88" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
                <text x="80" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
                <text x="133" y="88" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">8</text>
            </g>
            
            <!-- Knoten C (Puffer) -->
            <g transform="translate(275, 170)">
                <rect width="160" height="100" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="4" />
                <line x1="0" y1="33" x2="160" y2="33" stroke="#0284c7" stroke-width="1.5" />
                <line x1="0" y1="66" x2="160" y2="66" stroke="#0284c7" stroke-width="1.5" />
                <line x1="53" y1="0" x2="53" y2="100" stroke="#0284c7" stroke-width="1.5" />
                <line x1="106" y1="0" x2="106" y2="100" stroke="#0284c7" stroke-width="1.5" />
                <text x="26" y="22" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#0369a1">3</text>
                <text x="80" y="22" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#0369a1">D: 2</text>
                <text x="133" y="22" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#0369a1">5</text>
                <text x="80" y="54" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#0369a1">C: Hardware</text>
                <text x="26" y="88" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#0369a1">6</text>
                <text x="80" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:3</text>
                <text x="133" y="88" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#0369a1">8</text>
            </g>
            
            <line x1="435" y1="80" x2="495" y2="135" stroke="#dc2626" stroke-width="3" marker-end="url(#np-arrow)" />
            <line x1="435" y1="220" x2="495" y2="155" stroke="#0284c7" stroke-width="2" marker-end="url(#np-arrowblue)" />
            
            <!-- Knoten D (Kritisch) -->
            <g transform="translate(500, 90)">
                <rect width="150" height="100" fill="#fee2e2" stroke="#dc2626" stroke-width="3" rx="4" />
                <line x1="0" y1="33" x2="150" y2="33" stroke="#dc2626" stroke-width="1.5" />
                <line x1="0" y1="66" x2="150" y2="66" stroke="#dc2626" stroke-width="1.5" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="#dc2626" stroke-width="1.5" />
                <line x1="100" y1="0" x2="100" y2="100" stroke="#dc2626" stroke-width="1.5" />
                <text x="25" y="22" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">8</text>
                <text x="75" y="22" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">D: 4</text>
                <text x="125" y="22" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">12</text>
                <text x="75" y="54" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">D: Rollout</text>
                <text x="25" y="88" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">8</text>
                <text x="75" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
                <text x="125" y="88" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">12</text>
            </g>
            
            <text x="340" y="305" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">DIN 69900 Netzplan: Rote Knoten bilden den Kritischen Pfad (Dauer = 12 Tage, Puffer GP = 0)</text>
        </svg>
        `;
    },
    // 7a. Netzplan ERP-Einführungsprojekt (9 Vorgänge, Dauer = 23 Tage) - ID 413
    getErp9NetzplanDiagramSvg: function() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 380" width="100%" height="100%">
    <defs>
        <marker id="np9-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
        </marker>
        <marker id="np9-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
        </marker>
    </defs>
    <rect width="940" height="380" fill="#f8fafc" rx="8" />
    <text x="470" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">DIN 69900 Netzplan: ERP-Einführungsprojekt (9 Vorgänge, Dauer = 23 Werktage)</text>

    <!-- Column 1: A (Kick-Off) -->
    
    <g transform="translate(20, 140)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="115" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="115" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="0" x2="38.333333333333336" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="0" x2="76.66666666666667" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="45.333333333333336" x2="38.333333333333336" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="45.333333333333336" x2="76.66666666666667" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="19.166666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
        <text x="57.5" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:2</text>
        <text x="95.83333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">2</text>
        
        <!-- Middle Row: Name -->
        <text x="57.5" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">A: Kick-Off</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="19.166666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
        <text x="57.5" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">2</text>
    </g>

    <!-- Column 2: B (Prozessanalyse), C (Hardware) -->
    
    <g transform="translate(175, 60)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="115" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="115" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="0" x2="38.333333333333336" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="0" x2="76.66666666666667" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="45.333333333333336" x2="38.333333333333336" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="45.333333333333336" x2="76.66666666666667" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="19.166666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">2</text>
        <text x="57.5" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:5</text>
        <text x="95.83333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
        
        <!-- Middle Row: Name -->
        <text x="57.5" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">B: Analyse</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="19.166666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">2</text>
        <text x="57.5" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
    </g>
    
    <g transform="translate(175, 230)">
        <rect width="115" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="115" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="115" y2="45.333333333333336" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="0" x2="38.333333333333336" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="0" x2="76.66666666666667" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="45.333333333333336" x2="38.333333333333336" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="45.333333333333336" x2="76.66666666666667" y2="68" stroke="#0284c7" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="19.166666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">2</text>
        <text x="57.5" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D:8</text>
        <text x="95.83333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">10</text>
        
        <!-- Middle Row: Name -->
        <text x="57.5" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">C: Hardware</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="19.166666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">3</text>
        <text x="57.5" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:1</text>
        <text x="95.83333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">11</text>
    </g>

    <!-- Column 3: D (Customizing), F (Schnittstellen), E (Server) -->
    
    <g transform="translate(330, 40)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="115" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="115" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="0" x2="38.333333333333336" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="0" x2="76.66666666666667" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="45.333333333333336" x2="38.333333333333336" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="45.333333333333336" x2="76.66666666666667" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="19.166666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
        <text x="57.5" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:7</text>
        <text x="95.83333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">14</text>
        
        <!-- Middle Row: Name -->
        <text x="57.5" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D: Customiz.</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="19.166666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
        <text x="57.5" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">14</text>
    </g>
    
    <g transform="translate(330, 140)">
        <rect width="115" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="115" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="115" y2="45.333333333333336" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="0" x2="38.333333333333336" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="0" x2="76.66666666666667" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="45.333333333333336" x2="38.333333333333336" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="45.333333333333336" x2="76.66666666666667" y2="68" stroke="#0284c7" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="19.166666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">7</text>
        <text x="57.5" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D:6</text>
        <text x="95.83333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">13</text>
        
        <!-- Middle Row: Name -->
        <text x="57.5" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">F: Schnittst.</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="19.166666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">8</text>
        <text x="57.5" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:1</text>
        <text x="95.83333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">14</text>
    </g>
    
    <g transform="translate(330, 240)">
        <rect width="115" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="115" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="115" y2="45.333333333333336" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="0" x2="38.333333333333336" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="0" x2="76.66666666666667" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="45.333333333333336" x2="38.333333333333336" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="45.333333333333336" x2="76.66666666666667" y2="68" stroke="#0284c7" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="19.166666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">10</text>
        <text x="57.5" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D:3</text>
        <text x="95.83333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">13</text>
        
        <!-- Middle Row: Name -->
        <text x="57.5" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">E: Server-Inst.</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="19.166666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">11</text>
        <text x="57.5" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:1</text>
        <text x="95.83333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">14</text>
    </g>

    <!-- Column 4: G (Integrationstest) -->
    
    <g transform="translate(490, 140)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="115" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="115" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="0" x2="38.333333333333336" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="0" x2="76.66666666666667" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="45.333333333333336" x2="38.333333333333336" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="45.333333333333336" x2="76.66666666666667" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="19.166666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">14</text>
        <text x="57.5" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:4</text>
        <text x="95.83333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">18</text>
        
        <!-- Middle Row: Name -->
        <text x="57.5" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">G: Integrat.</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="19.166666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">14</text>
        <text x="57.5" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">18</text>
    </g>

    <!-- Column 5: H (Schulung) -->
    
    <g transform="translate(645, 140)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="115" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="115" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="0" x2="38.333333333333336" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="0" x2="76.66666666666667" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="45.333333333333336" x2="38.333333333333336" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="45.333333333333336" x2="76.66666666666667" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="19.166666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">18</text>
        <text x="57.5" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:3</text>
        <text x="95.83333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">21</text>
        
        <!-- Middle Row: Name -->
        <text x="57.5" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">H: Schulung</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="19.166666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">18</text>
        <text x="57.5" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">21</text>
    </g>

    <!-- Column 6: I (Go-Live) -->
    
    <g transform="translate(800, 140)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="115" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="115" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="0" x2="38.333333333333336" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="0" x2="76.66666666666667" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.333333333333336" y1="45.333333333333336" x2="38.333333333333336" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.66666666666667" y1="45.333333333333336" x2="76.66666666666667" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="19.166666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">21</text>
        <text x="57.5" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:2</text>
        <text x="95.83333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">23</text>
        
        <!-- Middle Row: Name -->
        <text x="57.5" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">I: Go-Live</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="19.166666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">21</text>
        <text x="57.5" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">23</text>
    </g>

    <!-- Connecting Lines -->
    <!-- A -> B (Critical Red) -->
    <line x1="135" y1="165" x2="175" y2="100" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np9-red)" />
    <!-- A -> C (Blue) -->
    <line x1="135" y1="180" x2="175" y2="255" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np9-blue)" />

    <!-- B -> D (Critical Red) -->
    <line x1="290" y1="90" x2="330" y2="75" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np9-red)" />
    <!-- B -> F (Blue) -->
    <line x1="290" y1="105" x2="330" y2="165" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np9-blue)" />

    <!-- C -> E (Blue) -->
    <line x1="290" y1="265" x2="330" y2="275" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np9-blue)" />

    <!-- D -> G (Critical Red) -->
    <line x1="445" y1="75" x2="490" y2="160" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np9-red)" />
    <!-- F -> G (Blue) -->
    <line x1="445" y1="174" x2="490" y2="174" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np9-blue)" />
    <!-- E -> G (Blue) -->
    <line x1="445" y1="275" x2="490" y2="190" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np9-blue)" />

    <!-- G -> H (Critical Red) -->
    <line x1="605" y1="174" x2="645" y2="174" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np9-red)" />

    <!-- H -> I (Critical Red) -->
    <line x1="760" y1="174" x2="800" y2="174" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np9-red)" />

    <!-- Legend Footer -->
    <rect x="180" y="335" width="580" height="34" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="4" />
    <circle cx="205" cy="352" r="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
    <text x="220" y="356" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#991b1b">Kritischer Pfad: A ➔ B ➔ D ➔ G ➔ H ➔ I (Dauer: 23 Tage, GP = 0)</text>
    <circle cx="610" cy="352" r="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
    <text x="625" y="356" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0369a1">Pufferpfad (GP = 1)</text>
</svg>`;
    },

    // 7b. Netzplan Client-Rollout (5 Vorgänge, Dauer = 12 Tage) - ID 267
    getRollout5NetzplanDiagramSvg: function() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 740 340" width="100%" height="100%">
    <defs>
        <marker id="np5-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
        </marker>
        <marker id="np5-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
        </marker>
    </defs>
    <rect width="740" height="340" fill="#f8fafc" rx="8" />
    <text x="370" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">DIN 69900 Netzplan: Client-Rollout (5 Vorgänge, Dauer = 12 Tage)</text>

    <!-- Column 1: A (Hardware), B (Images), D (Switch) -->
    
    <g transform="translate(30, 45)">
        <rect width="130" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="130" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="130" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="0" x2="43.333333333333336" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="0" x2="86.66666666666667" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="45.333333333333336" x2="43.333333333333336" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="45.333333333333336" x2="86.66666666666667" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="21.666666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
        <text x="65.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:4</text>
        <text x="108.33333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">4</text>
        
        <!-- Middle Row: Name -->
        <text x="65.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">A: Hardware</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="21.666666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
        <text x="65.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="108.33333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">4</text>
    </g>
    
    <g transform="translate(30, 135)">
        <rect width="130" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="130" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="130" y2="45.333333333333336" stroke="#0284c7" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="0" x2="43.333333333333336" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="0" x2="86.66666666666667" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="45.333333333333336" x2="43.333333333333336" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="45.333333333333336" x2="86.66666666666667" y2="68" stroke="#0284c7" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="21.666666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">0</text>
        <text x="65.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D:2</text>
        <text x="108.33333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">2</text>
        
        <!-- Middle Row: Name -->
        <text x="65.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">B: Images</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="21.666666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">2</text>
        <text x="65.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:2</text>
        <text x="108.33333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">4</text>
    </g>
    
    <g transform="translate(30, 225)">
        <rect width="130" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="130" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="130" y2="45.333333333333336" stroke="#0284c7" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="0" x2="43.333333333333336" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="0" x2="86.66666666666667" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="45.333333333333336" x2="43.333333333333336" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="45.333333333333336" x2="86.66666666666667" y2="68" stroke="#0284c7" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="21.666666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">0</text>
        <text x="65.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D:1</text>
        <text x="108.33333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">1</text>
        
        <!-- Middle Row: Name -->
        <text x="65.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D: Switch</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="21.666666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">6</text>
        <text x="65.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:6</text>
        <text x="108.33333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">7</text>
    </g>

    <!-- Column 2: C (Clients clonen) -->
    
    <g transform="translate(270, 90)">
        <rect width="130" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="130" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="130" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="0" x2="43.333333333333336" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="0" x2="86.66666666666667" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="45.333333333333336" x2="43.333333333333336" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="45.333333333333336" x2="86.66666666666667" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="21.666666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">4</text>
        <text x="65.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:3</text>
        <text x="108.33333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
        
        <!-- Middle Row: Name -->
        <text x="65.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">C: Clonen</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="21.666666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">4</text>
        <text x="65.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="108.33333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
    </g>

    <!-- Column 3: E (Rollout vor Ort) -->
    
    <g transform="translate(510, 135)">
        <rect width="130" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="130" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="130" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="0" x2="43.333333333333336" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="0" x2="86.66666666666667" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="45.333333333333336" x2="43.333333333333336" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="45.333333333333336" x2="86.66666666666667" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="21.666666666666668" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
        <text x="65.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:5</text>
        <text x="108.33333333333333" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">12</text>
        
        <!-- Middle Row: Name -->
        <text x="65.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">E: Rollout</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="21.666666666666668" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
        <text x="65.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="108.33333333333333" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">12</text>
    </g>

    <!-- Connections -->
    <!-- A -> C (Critical Red) -->
    <line x1="160" y1="80" x2="270" y2="115" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np5-red)" />
    <!-- B -> C (Blue) -->
    <line x1="160" y1="165" x2="270" y2="135" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np5-blue)" />

    <!-- C -> E (Critical Red) -->
    <line x1="400" y1="130" x2="510" y2="160" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np5-red)" />
    <!-- D -> E (Blue) -->
    <line x1="160" y1="260" x2="510" y2="185" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np5-blue)" />

    <!-- Legend -->
    <rect x="130" y="302" width="480" height="30" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="4" />
    <circle cx="150" cy="317" r="5" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
    <text x="165" y="321" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b">Kritischer Pfad: A ➔ C ➔ E (Dauer: 12 Tage, GP = 0)</text>
    <circle cx="450" cy="317" r="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
    <text x="465" y="321" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1">Puffer (B: GP=2, D: GP=6)</text>
</svg>`;
    },

    // 7c. Netzplan CAD-Workstations Rollout (6 Vorgänge, Dauer = 22 Tage) - ID 222
    getCadRollout6NetzplanSvg: function() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 340" width="100%" height="100%">
    <defs>
        <marker id="np6-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
        </marker>
        <marker id="np6-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
        </marker>
    </defs>
    <rect width="880" height="340" fill="#f8fafc" rx="8" />
    <text x="440" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">DIN 69900 Netzplan: CAD-Workstations Rollout (6 Vorgänge, Dauer = 22 Werktage)</text>

    <!-- Node A -->
    
    <g transform="translate(20, 110)">
        <rect width="120" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="120" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="120" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="40.0" y1="0" x2="40.0" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="80.0" y1="0" x2="80.0" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="40.0" y1="45.333333333333336" x2="40.0" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="80.0" y1="45.333333333333336" x2="80.0" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="20.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
        <text x="60.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:3</text>
        <text x="100.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
        
        <!-- Middle Row: Name -->
        <text x="60.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">A: Analyse</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="20.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
        <text x="60.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="100.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
    </g>
    <!-- Node B (Top) & Node D (Bottom) -->
    
    <g transform="translate(180, 55)">
        <rect width="120" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="120" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="120" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="40.0" y1="0" x2="40.0" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="80.0" y1="0" x2="80.0" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="40.0" y1="45.333333333333336" x2="40.0" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="80.0" y1="45.333333333333336" x2="80.0" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="20.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
        <text x="60.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:10</text>
        <text x="100.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">13</text>
        
        <!-- Middle Row: Name -->
        <text x="60.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">B: Beschaff.</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="20.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
        <text x="60.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="100.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">13</text>
    </g>
    
    <g transform="translate(180, 185)">
        <rect width="120" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="120" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="120" y2="45.333333333333336" stroke="#0284c7" stroke-width="1.2" />
        <line x1="40.0" y1="0" x2="40.0" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="80.0" y1="0" x2="80.0" y2="22.666666666666668" stroke="#0284c7" stroke-width="1.2" />
        <line x1="40.0" y1="45.333333333333336" x2="40.0" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <line x1="80.0" y1="45.333333333333336" x2="80.0" y2="68" stroke="#0284c7" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="20.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">3</text>
        <text x="60.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D:5</text>
        <text x="100.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">8</text>
        
        <!-- Middle Row: Name -->
        <text x="60.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D: Netzwerk</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="20.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">10</text>
        <text x="60.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:7</text>
        <text x="100.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">15</text>
    </g>
    <!-- Node C -->
    
    <g transform="translate(340, 55)">
        <rect width="120" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="120" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="120" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="40.0" y1="0" x2="40.0" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="80.0" y1="0" x2="80.0" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="40.0" y1="45.333333333333336" x2="40.0" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="80.0" y1="45.333333333333336" x2="80.0" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="20.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">13</text>
        <text x="60.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:4</text>
        <text x="100.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">17</text>
        
        <!-- Middle Row: Name -->
        <text x="60.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">C: Install.</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="20.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">13</text>
        <text x="60.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="100.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">17</text>
    </g>
    <!-- Node E -->
    
    <g transform="translate(500, 110)">
        <rect width="120" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="120" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="120" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="40.0" y1="0" x2="40.0" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="80.0" y1="0" x2="80.0" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="40.0" y1="45.333333333333336" x2="40.0" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="80.0" y1="45.333333333333336" x2="80.0" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="20.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">17</text>
        <text x="60.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:3</text>
        <text x="100.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">20</text>
        
        <!-- Middle Row: Name -->
        <text x="60.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">E: Integrat.</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="20.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">17</text>
        <text x="60.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="100.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">20</text>
    </g>
    <!-- Node F -->
    
    <g transform="translate(660, 110)">
        <rect width="120" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.666666666666668" x2="120" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.333333333333336" x2="120" y2="45.333333333333336" stroke="#dc2626" stroke-width="1.2" />
        <line x1="40.0" y1="0" x2="40.0" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="80.0" y1="0" x2="80.0" y2="22.666666666666668" stroke="#dc2626" stroke-width="1.2" />
        <line x1="40.0" y1="45.333333333333336" x2="40.0" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="80.0" y1="45.333333333333336" x2="80.0" y2="68" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="20.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">20</text>
        <text x="60.0" y="15.866666666666667" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:2</text>
        <text x="100.0" y="15.866666666666667" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">22</text>
        
        <!-- Middle Row: Name -->
        <text x="60.0" y="38.53333333333333" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">F: Schulung</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="20.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">20</text>
        <text x="60.0" y="61.20000000000001" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="100.0" y="61.20000000000001" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">22</text>
    </g>

    <!-- Connections -->
    <line x1="140" y1="135" x2="180" y2="95" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np6-red)" />
    <line x1="140" y1="155" x2="180" y2="210" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np6-blue)" />
    
    <line x1="300" y1="89" x2="340" y2="89" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np6-red)" />
    
    <line x1="460" y1="95" x2="500" y2="135" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np6-red)" />
    <line x1="300" y1="210" x2="500" y2="155" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np6-blue)" />
    
    <line x1="620" y1="144" x2="660" y2="144" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np6-red)" />

    <!-- Legend -->
    <rect x="200" y="302" width="480" height="30" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="4" />
    <circle cx="220" cy="317" r="5" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
    <text x="235" y="321" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b">Kritischer Pfad: A ➔ B ➔ C ➔ E ➔ F (Dauer: 22 Tage, GP = 0)</text>
    <circle cx="530" cy="317" r="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
    <text x="545" y="321" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1">Puffer D (GP = 7)</text>
</svg>`;
    },

    // 7d. Netzplan Vorgänge V1 bis V4 (4 Vorgänge, Dauer = 18 Tage) - ID 368
    getV1V4NetzplanDiagramSvg: function() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
    <defs>
        <marker id="np4-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
        </marker>
        <marker id="np4-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
        </marker>
    </defs>
    <rect width="680" height="320" fill="#f8fafc" rx="8" />
    <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">DIN 69900 Netzplan: Vorgänge V1 bis V4 (Dauer = 18 Tage)</text>

    <!-- Node V1 -->
    
    <g transform="translate(40, 95)">
        <rect width="130" height="75" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="25.0" x2="130" y2="25.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="50.0" x2="130" y2="50.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="0" x2="43.333333333333336" y2="25.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="0" x2="86.66666666666667" y2="25.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="50.0" x2="43.333333333333336" y2="75" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="50.0" x2="86.66666666666667" y2="75" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="21.666666666666668" y="17.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
        <text x="65.0" y="17.5" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:4</text>
        <text x="108.33333333333333" y="17.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">4</text>
        
        <!-- Middle Row: Name -->
        <text x="65.0" y="42.5" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">V1</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="21.666666666666668" y="67.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
        <text x="65.0" y="67.5" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="108.33333333333333" y="67.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">4</text>
    </g>
    <!-- Node V2 (Top) & Node V3 (Bottom) -->
    
    <g transform="translate(250, 40)">
        <rect width="130" height="75" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="25.0" x2="130" y2="25.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="50.0" x2="130" y2="50.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="0" x2="43.333333333333336" y2="25.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="0" x2="86.66666666666667" y2="25.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="50.0" x2="43.333333333333336" y2="75" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="50.0" x2="86.66666666666667" y2="75" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="21.666666666666668" y="17.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">4</text>
        <text x="65.0" y="17.5" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:6</text>
        <text x="108.33333333333333" y="17.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">10</text>
        
        <!-- Middle Row: Name -->
        <text x="65.0" y="42.5" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">V2</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="21.666666666666668" y="67.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">4</text>
        <text x="65.0" y="67.5" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="108.33333333333333" y="67.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">10</text>
    </g>
    
    <g transform="translate(250, 160)">
        <rect width="130" height="75" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
        <line x1="0" y1="25.0" x2="130" y2="25.0" stroke="#0284c7" stroke-width="1.2" />
        <line x1="0" y1="50.0" x2="130" y2="50.0" stroke="#0284c7" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="0" x2="43.333333333333336" y2="25.0" stroke="#0284c7" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="0" x2="86.66666666666667" y2="25.0" stroke="#0284c7" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="50.0" x2="43.333333333333336" y2="75" stroke="#0284c7" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="50.0" x2="86.66666666666667" y2="75" stroke="#0284c7" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="21.666666666666668" y="17.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">4</text>
        <text x="65.0" y="17.5" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D:2</text>
        <text x="108.33333333333333" y="17.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">6</text>
        
        <!-- Middle Row: Name -->
        <text x="65.0" y="42.5" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">V3</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="21.666666666666668" y="67.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">8</text>
        <text x="65.0" y="67.5" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:4</text>
        <text x="108.33333333333333" y="67.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">10</text>
    </g>
    <!-- Node V4 -->
    
    <g transform="translate(460, 95)">
        <rect width="130" height="75" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="25.0" x2="130" y2="25.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="50.0" x2="130" y2="50.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="0" x2="43.333333333333336" y2="25.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="0" x2="86.66666666666667" y2="25.0" stroke="#dc2626" stroke-width="1.2" />
        <line x1="43.333333333333336" y1="50.0" x2="43.333333333333336" y2="75" stroke="#dc2626" stroke-width="1.2" />
        <line x1="86.66666666666667" y1="50.0" x2="86.66666666666667" y2="75" stroke="#dc2626" stroke-width="1.2" />
        
        <!-- Top Row: FAZ, D, FEZ -->
        <text x="21.666666666666668" y="17.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">10</text>
        <text x="65.0" y="17.5" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:8</text>
        <text x="108.33333333333333" y="17.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">18</text>
        
        <!-- Middle Row: Name -->
        <text x="65.0" y="42.5" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">V4</text>
        
        <!-- Bottom Row: SAZ, GP/FP, SEZ -->
        <text x="21.666666666666668" y="67.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">10</text>
        <text x="65.0" y="67.5" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="108.33333333333333" y="67.5" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">18</text>
    </g>

    <!-- Connections -->
    <line x1="170" y1="125" x2="250" y2="80" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np4-red)" />
    <line x1="170" y1="145" x2="250" y2="190" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np4-blue)" />
    
    <line x1="380" y1="80" x2="460" y2="125" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np4-red)" />
    <line x1="380" y1="190" x2="460" y2="145" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np4-blue)" />

    <!-- Legend -->
    <rect x="100" y="280" width="480" height="30" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="4" />
    <circle cx="120" cy="295" r="5" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
    <text x="135" y="299" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b">Kritischer Pfad: V1 ➔ V2 ➔ V4 (Dauer: 18 Tage, GP = 0)</text>
    <circle cx="430" cy="295" r="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
    <text x="445" y="299" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1">Puffer V3 (GP = 4)</text>
</svg>`;
    },


    // 8. Organigramm Stabliniensystem
    getOrganigrammStabSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" width="100%" height="100%">
            <rect width="680" height="280" fill="#f8fafc" rx="8" />
            
            <rect x="250" y="20" width="180" height="50" fill="#1e3a8a" stroke="#172554" stroke-width="2" rx="6" />
            <text x="340" y="50" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Geschäftsführung</text>
            
            <!-- Stabsstelle -->
            <ellipse cx="530" cy="45" rx="95" ry="26" fill="#fef3c7" stroke="#d97706" stroke-width="2.5" stroke-dasharray="4,3" />
            <text x="530" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">Stabsstelle: Datenschutz /</text>
            <text x="530" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">IT-Sicherheitsbeauftragter</text>
            
            <line x1="430" y1="45" x2="435" y2="45" stroke="#d97706" stroke-width="2" stroke-dasharray="4,3" />
            
            <line x1="340" y1="70" x2="340" y2="120" stroke="#1e293b" stroke-width="2.5" />
            <line x1="110" y1="120" x2="570" y2="120" stroke="#1e293b" stroke-width="2.5" />
            
            <line x1="110" y1="120" x2="110" y2="160" stroke="#1e293b" stroke-width="2" />
            <rect x="30" y="160" width="160" height="60" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="4" />
            <text x="110" y="188" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Leitung IT-Betrieb</text>
            <text x="110" y="206" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Netzwerk & Server</text>
            
            <line x1="340" y1="120" x2="340" y2="160" stroke="#1e293b" stroke-width="2" />
            <rect x="260" y="160" width="160" height="60" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="4" />
            <text x="340" y="188" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Leitung Software</text>
            <text x="340" y="206" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Dev & QA</text>
            
            <line x1="570" y1="120" x2="570" y2="160" stroke="#1e293b" stroke-width="2" />
            <rect x="490" y="160" width="160" height="60" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="4" />
            <text x="570" y="188" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Leitung Vertrieb</text>
            <text x="570" y="206" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Key Accounts</text>
            
            <text x="340" y="260" font-family="sans-serif" font-size="12" font-style="italic" fill="#64748b" text-anchor="middle">Stabliniensystem: Stabsstelle berät die Geschäftsleitung (ohne Weisungsbefugnis nach unten)</text>
        </svg>
        `;
    },

    // 9. Marktpreisbildung
    getMarktgleichgewichtSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 340" width="100%" height="100%">
            <rect width="680" height="340" fill="#f8fafc" rx="8" />
            
            <line x1="80" y1="20" x2="80" y2="280" stroke="#334155" stroke-width="2.5" />
            <line x1="80" y1="280" x2="620" y2="280" stroke="#334155" stroke-width="2.5" />
            
            <text x="50" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Preis (€)</text>
            <text x="610" y="305" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Menge (Stück)</text>
            
            <text x="65" y="225" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="end">20 €</text>
            <line x1="75" y1="220" x2="620" y2="220" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
            
            <text x="65" y="165" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="end">40 €</text>
            <line x1="75" y1="160" x2="620" y2="160" stroke="#fca5a5" stroke-width="1.5" stroke-dasharray="4,4" />
            
            <text x="65" y="105" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="end">60 €</text>
            <line x1="75" y1="100" x2="620" y2="100" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
            
            <text x="210" y="298" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">200</text>
            <line x1="210" y1="280" x2="210" y2="30" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
            
            <text x="350" y="298" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">400 (Gleichgewicht)</text>
            <line x1="350" y1="280" x2="350" y2="30" stroke="#fca5a5" stroke-width="1.5" stroke-dasharray="4,4" />
            
            <text x="490" y="298" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">600</text>
            <line x1="490" y1="280" x2="490" y2="30" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
            
            <line x1="100" y1="50" x2="570" y2="260" stroke="#ea580c" stroke-width="3.5" />
            <text x="540" y="280" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ea580c">Nachfrage (N)</text>
            
            <line x1="100" y1="260" x2="570" y2="50" stroke="#2563eb" stroke-width="3.5" />
            <text x="540" y="40" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2563eb">Angebot (A)</text>
            
            <circle cx="350" cy="160" r="7" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
            <text x="365" y="155" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">G (40 €, 400 Stk.)</text>
            
            <line x1="210" y1="220" x2="490" y2="220" stroke="#dc2626" stroke-width="3" />
            <text x="350" y="212" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">◄ Nachfrageüberhang bei 20 €: 400 Stück (600 - 200) ►</text>
            
            <text x="350" y="328" font-family="sans-serif" font-size="12" font-style="italic" fill="#475569" text-anchor="middle">Preisbildung: Gleichgewichtspreis = 40 €, Marktumsatz = 40 € * 400 = 16.000 €</text>
        </svg>
        `;
    },

    // 10. Handelskalkulation Schema-Treppe
    getKalkulationTreeSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="100%" height="100%">
            <defs>
                <marker id="kalk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
                </marker>
            </defs>
            <rect width="680" height="360" fill="#f8fafc" rx="8" />
            
            <text x="340" y="28" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Vollständiges Schema der Handelskalkulation (Vorwärtskalkulation)</text>
            
            <g transform="translate(40, 45)">
                <rect width="180" height="28" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="4" />
                <text x="90" y="19" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Listeneinkaufspreis (LEP)</text>
                <text x="190" y="19" font-family="sans-serif" font-size="11" fill="#dc2626">- Lieferantenrabatt</text>
            </g>
            
            <g transform="translate(40, 80)">
                <rect width="180" height="28" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" rx="4" />
                <text x="90" y="19" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">= Zieleinkaufspreis (ZEP)</text>
                <text x="190" y="19" font-family="sans-serif" font-size="11" fill="#dc2626">- Lieferantenskonto</text>
            </g>
            
            <g transform="translate(40, 115)">
                <rect width="180" height="28" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" rx="4" />
                <text x="90" y="19" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">= Bareinkaufspreis (BEP)</text>
                <text x="190" y="19" font-family="sans-serif" font-size="11" fill="#16a34a">+ Bezugskosten</text>
            </g>
            
            <g transform="translate(40, 150)">
                <rect width="180" height="32" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5" rx="4" />
                <text x="90" y="21" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Bezugspreis (Einstand)</text>
                <text x="190" y="21" font-family="sans-serif" font-size="11" fill="#16a34a">+ Handlungskosten (HKZ %)</text>
            </g>
            
            <g transform="translate(40, 190)">
                <rect width="180" height="28" fill="#f1f5f9" stroke="#475569" stroke-width="1.5" rx="4" />
                <text x="90" y="19" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">= Selbstkosten</text>
                <text x="190" y="19" font-family="sans-serif" font-size="11" fill="#16a34a">+ Gewinnzuschlag %</text>
            </g>
            
            <g transform="translate(370, 190)">
                <rect width="180" height="28" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="4" />
                <text x="90" y="19" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">= Barverkaufspreis (BVP)</text>
                <text x="190" y="19" font-family="sans-serif" font-size="11" fill="#16a34a">+ Skonto & Prov. (im Hundert)</text>
            </g>
            
            <g transform="translate(370, 225)">
                <rect width="180" height="28" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="4" />
                <text x="90" y="19" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">= Zielverkaufspreis (ZVP)</text>
                <text x="190" y="19" font-family="sans-serif" font-size="11" fill="#16a34a">+ Kundenrabatt (im Hundert)</text>
            </g>
            
            <g transform="translate(370, 260)">
                <rect width="180" height="32" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5" rx="4" />
                <text x="90" y="21" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9" text-anchor="middle">Listenverkaufspreis netto</text>
                <text x="190" y="21" font-family="sans-serif" font-size="11" fill="#16a34a">+ 19 % Umsatzsteuer</text>
            </g>
            
            <g transform="translate(370, 300)">
                <rect width="180" height="32" fill="#7c3aed" stroke="#5b21b6" stroke-width="2.5" rx="4" />
                <text x="90" y="21" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">LVP brutto (Endpreis)</text>
            </g>
            
            <path d="M 230 204 L 360 204" stroke="#d97706" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#kalk-arrow)" />
        </svg>
        `;
    },

    // 11. Relationales ERD- & Tabellenschema-Diagramm (Chen + Relationale Tabellen)
    getRelationalErdSvg: function(entA = "Server", entB = "Festplatte", rel = "enthält", card = "1:n", fkTable = "Festplatte", fkField = "FK_ServerID", reason = "Ein Server besitzt mehrere Festplatten, eine Festplatte ist fest in einem Server verbaut.") {
        const safeA = escapeDiagHtml(entA);
        const safeB = escapeDiagHtml(entB);
        const safeRel = escapeDiagHtml(rel);
        const safeCard = escapeDiagHtml(card);
        const safeFkTable = escapeDiagHtml(fkTable);
        const safeFkField = escapeDiagHtml(fkField);
        const safeReason = escapeDiagHtml(reason);

        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 370" width="100%" height="100%">
            <defs>
                <marker id="erd-rel-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a" />
                </marker>
            </defs>
            <rect width="700" height="370" fill="#f8fafc" rx="8" />
            
            <!-- SECTION 1: Chen ER-Diagramm (Oben) -->
            <text x="350" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">1. Konzeptionelles Datenmodell (Chen ER-Notation)</text>
            
            <!-- Entität A -->
            <rect x="50" y="42" width="150" height="42" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" rx="6" />
            <text x="125" y="68" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">${safeA}</text>
            <text x="215" y="60" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">${card === "1:n" ? "1" : (card === "n:m" ? "n" : "1")}</text>

            <!-- Beziehung (Raute) -->
            <polygon points="350,38 425,63 350,88 275,63" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="350" y="67" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">${safeRel}</text>

            <!-- Entität B -->
            <text x="485" y="60" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">${card === "1:n" ? "n" : (card === "n:m" ? "m" : "1")}</text>
            <rect x="500" y="42" width="150" height="42" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" rx="6" />
            <text x="575" y="68" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">${safeB}</text>

            <!-- Verbindungslinien ERD -->
            <line x1="200" y1="63" x2="275" y2="63" stroke="#475569" stroke-width="2" />
            <line x1="425" y1="63" x2="500" y2="63" stroke="#475569" stroke-width="2" />

            <!-- Trennlinie -->
            <line x1="30" y1="105" x2="670" y2="105" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4" />

            <!-- SECTION 2: Relationales Datenbankschema / Tabellen (Unten) -->
            <text x="350" y="126" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f766e" text-anchor="middle">2. Relationales Tabellenschema &amp; Fremdschlüssel-Platzierung</text>
            
            <!-- Tabelle A -->
            <g transform="translate(50, 142)">
                <rect width="220" height="150" fill="#ffffff" stroke="#1e3a8a" stroke-width="1.5" rx="4" />
                <rect width="220" height="28" fill="#1e3a8a" rx="4" />
                <text x="110" y="19" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_${safeA} (1-Seite)</text>
                
                <rect x="6" y="34" width="208" height="22" fill="#fef9c3" rx="3" />
                <text x="12" y="49" font-family="monospace" font-size="11" font-weight="bold" fill="#854d0e">🔑 PK: ${safeA}_ID (int)</text>
                <text x="12" y="74" font-family="monospace" font-size="11" fill="#334155">   Bezeichnung (VARCHAR)</text>
                <text x="12" y="96" font-family="monospace" font-size="11" fill="#334155">   Standort (VARCHAR)</text>
                <text x="12" y="118" font-family="monospace" font-size="11" fill="#334155">   ErstelltAm (DATE)</text>
            </g>

            <!-- Tabelle B -->
            <g transform="translate(430, 142)">
                <rect width="220" height="150" fill="#ffffff" stroke="#047857" stroke-width="1.5" rx="4" />
                <rect width="220" height="28" fill="#047857" rx="4" />
                <text x="110" y="19" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_${safeB} (n-Seite)</text>
                
                <rect x="6" y="34" width="208" height="22" fill="#fef9c3" rx="3" />
                <text x="12" y="49" font-family="monospace" font-size="11" font-weight="bold" fill="#854d0e">🔑 PK: ${safeB}_ID (int)</text>
                <text x="12" y="74" font-family="monospace" font-size="11" fill="#334155">   Modell (VARCHAR)</text>
                <text x="12" y="96" font-family="monospace" font-size="11" fill="#334155">   SerienNr (VARCHAR)</text>
                
                <!-- Highlight FK Row -->
                <rect x="6" y="105" width="208" height="24" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="3" />
                <text x="12" y="122" font-family="monospace" font-size="11" font-weight="bold" fill="#166534">🔗 FK: ${safeFkField} (int)</text>
            </g>

            <!-- Verbindungspfeil vom PK A zum FK B -->
            <path d="M 270 188 C 350 188, 350 258, 425 258" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="5,4" marker-end="url(#erd-rel-arrow)" />

            <!-- Erkärungsbanner unten -->
            <g transform="translate(50, 305)">
                <rect width="600" height="50" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" rx="6" />
                <text x="300" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">🎯 IHK-Regel: Bei ${safeCard}-Beziehung wandert der Primärschlüssel (PK) der 1-Seite ('${safeA}')</text>
                <text x="300" y="38" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">als Fremdschlüssel (FK) in die Tabelle der n-Seite ('${safeFkTable}')!</text>
            </g>
        </svg>
        `;
    },

        // 12. Universeller Auto-Resolver für Diagramme & Tabellen
    
    // 2c. UML Klassendiagramm: Kurs ◇── Teilnehmer (Aggregation)
    getKursTeilnehmerAggregationSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
            <rect width="680" height="320" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">UML-Klassendiagramm: Aggregation (Kurs ◇── Teilnehmer)</text>
            
            <!-- Klasse: Kurs (Ganzes) -->
            <g transform="translate(60, 50)">
                <rect width="200" height="180" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="4" />
                <rect width="200" height="32" fill="#dbeafe" stroke="#0284c7" stroke-width="2" rx="4" />
                <text x="100" y="22" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#0369a1">Kurs</text>
                
                <text x="12" y="55" font-family="monospace" font-size="12" fill="#334155">- kursNr: String</text>
                <text x="12" y="75" font-family="monospace" font-size="12" fill="#334155">- titel: String</text>
                <text x="12" y="95" font-family="monospace" font-size="12" fill="#334155">- maxTeilnehmer: int</text>
                <line x1="0" y1="110" x2="200" y2="110" stroke="#cbd5e1" stroke-width="1.5" />
                
                <text x="12" y="132" font-family="monospace" font-size="12" fill="#0f766e">+ addTeilnehmer(t: Teilnehmer)</text>
                <text x="12" y="152" font-family="monospace" font-size="12" fill="#0f766e">+ removeTeilnehmer(t: Teilnehmer)</text>
                <text x="12" y="172" font-family="monospace" font-size="12" fill="#0f766e">+ beenden()</text>
            </g>
            
            <!-- Aggregations-Linie & Leere Raute am Kurs (Ganzes) -->
            <g transform="translate(260, 130)">
                <polygon points="0,0 14,-8 28,0 14,8" fill="#ffffff" stroke="#0284c7" stroke-width="2.5" />
                <line x1="28" y1="0" x2="160" y2="0" stroke="#0284c7" stroke-width="2.5" />
                <text x="35" y="-12" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1">1</text>
                <text x="135" y="-12" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1">0..*</text>
                <text x="80" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0284c7" text-anchor="middle">belegt</text>
            </g>
            
            <!-- Klasse: Teilnehmer (Teil) -->
            <g transform="translate(420, 50)">
                <rect width="200" height="180" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="4" />
                <rect width="200" height="32" fill="#dbeafe" stroke="#0284c7" stroke-width="2" rx="4" />
                <text x="100" y="22" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#0369a1">Teilnehmer</text>
                
                <text x="12" y="55" font-family="monospace" font-size="12" fill="#334155">- teilnehmerId: int</text>
                <text x="12" y="75" font-family="monospace" font-size="12" fill="#334155">- name: String</text>
                <text x="12" y="95" font-family="monospace" font-size="12" fill="#334155">- email: String</text>
                <line x1="0" y1="110" x2="200" y2="110" stroke="#cbd5e1" stroke-width="1.5" />
                
                <text x="12" y="132" font-family="monospace" font-size="12" fill="#0f766e">+ getKurse()</text>
                <text x="12" y="152" font-family="monospace" font-size="12" fill="#0f766e">+ getBescheinigung()</text>
                <text x="12" y="172" font-family="monospace" font-size="12" fill="#0f766e">+ abmelden()</text>
            </g>
            
            <!-- Erklärungskasten unten -->
            <rect x="50" y="250" width="580" height="55" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" rx="6" />
            <text x="340" y="272" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#166534" text-anchor="middle">✓ Aggregation (Leere Raute ◇ am Container/Kurs): "Hat-ein"-Beziehung</text>
            <text x="340" y="292" font-family="sans-serif" font-size="11" fill="#166534" text-anchor="middle">Wird der Kurs beendet oder gelöscht, existiert der Teilnehmer unabhängig im System weiter.</text>
        </svg>
        `;
    },

    // 2d. UML Klassendiagramm: Ticket ◆── TicketHistorienEintrag (Komposition)
    getTicketKompositionSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
            <rect width="680" height="320" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">UML-Klassendiagramm: Komposition (Ticket ◆── TicketHistorienEintrag)</text>
            
            <!-- Klasse: Ticket (Ganzes) -->
            <g transform="translate(40, 50)">
                <rect width="210" height="180" fill="#ffffff" stroke="#7c3aed" stroke-width="2" rx="4" />
                <rect width="210" height="32" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" rx="4" />
                <text x="105" y="22" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#6d28d9">Ticket</text>
                
                <text x="12" y="55" font-family="monospace" font-size="12" fill="#334155">- ticketNr: int</text>
                <text x="12" y="75" font-family="monospace" font-size="12" fill="#334155">- titel: String</text>
                <text x="12" y="95" font-family="monospace" font-size="12" fill="#334155">- status: String</text>
                <line x1="0" y1="110" x2="210" y2="110" stroke="#cbd5e1" stroke-width="1.5" />
                
                <text x="12" y="132" font-family="monospace" font-size="12" fill="#0f766e">+ addHistorie(eintrag)</text>
                <text x="12" y="152" font-family="monospace" font-size="12" fill="#0f766e">+ getHistorie()</text>
                <text x="12" y="172" font-family="monospace" font-size="12" fill="#0f766e">+ loeschen()</text>
            </g>
            
            <!-- Kompositions-Linie & Ausgefüllte Raute am Ticket (Ganzes) -->
            <g transform="translate(250, 130)">
                <polygon points="0,0 14,-8 28,0 14,8" fill="#7c3aed" stroke="#7c3aed" stroke-width="2.5" />
                <line x1="28" y1="0" x2="160" y2="0" stroke="#7c3aed" stroke-width="2.5" />
                <text x="35" y="-12" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9">1</text>
                <text x="135" y="-12" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9">0..*</text>
                <text x="90" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7c3aed" text-anchor="middle">besitzt fest</text>
            </g>
            
            <!-- Klasse: TicketHistorienEintrag (Teil) -->
            <g transform="translate(410, 50)">
                <rect width="230" height="180" fill="#ffffff" stroke="#7c3aed" stroke-width="2" rx="4" />
                <rect width="230" height="32" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" rx="4" />
                <text x="115" y="22" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#6d28d9">TicketHistorienEintrag</text>
                
                <text x="12" y="55" font-family="monospace" font-size="12" fill="#334155">- eintragsNr: int</text>
                <text x="12" y="75" font-family="monospace" font-size="12" fill="#334155">- zeitstempel: DateTime</text>
                <text x="12" y="95" font-family="monospace" font-size="12" fill="#334155">- kommentar: String</text>
                <line x1="0" y1="110" x2="230" y2="110" stroke="#cbd5e1" stroke-width="1.5" />
                
                <text x="12" y="132" font-family="monospace" font-size="12" fill="#0f766e">+ getDetails()</text>
                <text x="12" y="152" font-family="monospace" font-size="12" fill="#0f766e">+ getBearbeiter()</text>
                <text x="12" y="172" font-family="monospace" font-size="12" fill="#0f766e">+ printEntry()</text>
            </g>
            
            <!-- Erklärungskasten unten -->
            <rect x="50" y="250" width="580" height="55" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" rx="6" />
            <text x="340" y="272" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#991b1b" text-anchor="middle">✓ Komposition (Schwarze Raute ◆ am Ganzen/Ticket): "Besteht-aus"-Beziehung</text>
            <text x="340" y="292" font-family="sans-serif" font-size="11" fill="#991b1b" text-anchor="middle">Existenzielle Abhängigkeit: Wird das Ticket gelöscht, werden alle Historieneinträge mitgelöscht.</text>
        </svg>
        `;
    },

    // 1b. UML Use-Case: Geldautomat (Geld abheben <<include>> PIN prüfen)
    getGeldautomatUseCaseSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 340" width="100%" height="100%">
            <defs>
                <marker id="uc-ga-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
                </marker>
                <marker id="uc-ga-dasharrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
                </marker>
            </defs>
            <rect width="680" height="340" fill="#f8fafc" rx="8" />
            
            <!-- Systemgrenze -->
            <rect x="150" y="30" width="380" height="280" fill="#ffffff" stroke="#0284c7" stroke-width="2" stroke-dasharray="6,4" rx="6" />
            <text x="165" y="55" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">Geldautomat (ATM-System)</text>
            
            <!-- Akteur links: Bankkunde -->
            <g transform="translate(60, 110)">
                <circle cx="20" cy="20" r="14" fill="#f1f5f9" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="34" x2="20" y2="70" stroke="#1e293b" stroke-width="2.5" />
                <line x1="0" y1="46" x2="40" y2="46" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="70" x2="4" y2="105" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="70" x2="36" y2="105" stroke="#1e293b" stroke-width="2.5" />
                <text x="20" y="125" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Bankkunde</text>
            </g>
            
            <!-- Akteur rechts: Bank-Host -->
            <g transform="translate(570, 150)">
                <circle cx="20" cy="20" r="14" fill="#f1f5f9" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="34" x2="20" y2="70" stroke="#1e293b" stroke-width="2.5" />
                <line x1="0" y1="46" x2="40" y2="46" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="70" x2="4" y2="105" stroke="#1e293b" stroke-width="2.5" />
                <line x1="20" y1="70" x2="36" y2="105" stroke="#1e293b" stroke-width="2.5" />
                <text x="20" y="125" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#0f172a">Bank-Host (ZKA)</text>
            </g>
            
            <!-- Use Cases (Ovale) -->
            <ellipse cx="270" cy="170" rx="90" ry="26" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
            <text x="270" y="175" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1d4ed8">Geld abheben</text>
            
            <ellipse cx="440" cy="170" rx="80" ry="24" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" />
            <text x="440" y="175" font-family="sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="#6d28d9">PIN prüfen</text>
            
            <ellipse cx="270" cy="260" rx="90" ry="24" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="270" y="265" font-family="sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="#b45309">Beleg drucken</text>
            
            <!-- Assoziationen -->
            <line x1="100" y1="165" x2="180" y2="170" stroke="#475569" stroke-width="2" />
            <line x1="520" y1="170" x2="570" y2="185" stroke="#475569" stroke-width="2" />
            
            <!-- Include-Pfeil (Geld abheben -> PIN prüfen) -->
            <line x1="360" y1="170" x2="430" y2="170" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#uc-ga-dasharrow)" />
            <text x="395" y="155" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9" text-anchor="middle">&lt;&lt;include&gt;&gt;</text>
            
            <!-- Extend-Pfeil (Beleg drucken -> Geld abheben) -->
            <line x1="270" y1="236" x2="270" y2="202" stroke="#d97706" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#uc-ga-dasharrow)" />
            <text x="315" y="225" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="start">&lt;&lt;extend&gt;&gt;</text>
        </svg>
        `;
    },

    // 5b. BPMN 2.0: Zahlungsmethode wählen (XOR Gateway)
    getZahlungsmethodeBpmnSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 260" width="100%" height="100%">
            <defs>
                <marker id="bpmn-zm-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
                </marker>
            </defs>
            <rect width="680" height="260" fill="#f8fafc" rx="8" />
            
            <!-- Start-Event -->
            <circle cx="60" cy="110" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5" />
            <text x="60" y="150" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">Checkout gestartet</text>
            
            <line x1="80" y1="110" x2="130" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-zm-arr)" />
            
            <!-- Task 1: Zahlungsmethode wählen -->
            <rect x="135" y="80" width="140" height="60" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="8" />
            <text x="205" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Zahlungsart wählen</text>
            
            <line x1="275" y1="110" x2="315" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-zm-arr)" />
            
            <!-- Gateway: XOR -->
            <polygon points="340,85 365,110 340,135 315,110" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="340" y="116" font-family="sans-serif" font-size="16" font-weight="bold" fill="#b45309" text-anchor="middle">✕</text>
            <text x="340" y="70" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">Zahlungsmethode?</text>
            
            <!-- Pfad 1: Kreditkarte -->
            <line x1="340" y1="85" x2="340" y2="40" stroke="#1e293b" stroke-width="2" />
            <line x1="340" y1="40" x2="400" y2="40" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-zm-arr)" />
            <text x="360" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1">[Kreditkarte]</text>
            <rect x="405" y="15" width="140" height="50" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="8" />
            <text x="475" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Kreditkarte belasten</text>
            
            <!-- Pfad 2: Rechnungskauf -->
            <line x1="365" y1="110" x2="400" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-zm-arr)" />
            <text x="380" y="102" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309">[Rechnungskauf]</text>
            <rect x="405" y="85" width="140" height="50" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="8" />
            <text x="475" y="115" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Rechnung erstellen</text>
            
            <!-- End Event -->
            <line x1="545" y1="40" x2="590" y2="40" stroke="#1e293b" stroke-width="2" />
            <line x1="590" y1="40" x2="590" y2="110" stroke="#1e293b" stroke-width="2" />
            <line x1="545" y1="110" x2="590" y2="110" stroke="#1e293b" stroke-width="2" />
            <line x1="590" y1="110" x2="615" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-zm-arr)" />
            
            <circle cx="635" cy="110" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="4" />
            <text x="635" y="150" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Zahlung erfolgt</text>
            
            <text x="340" y="240" font-family="sans-serif" font-size="12" font-style="italic" fill="#64748b" text-anchor="middle">BPMN 2.0: Exklusives Gateway (XOR mit ✕) wählt exakt einen alternativen Zweig aus</text>
        </svg>
        `;
    },

    // 7e. Dynamischer 4-Knoten-Netzplan (mit exakten berechneten Werten)
    getDynamic4NodeNetzplanSvg: function(dA, dB, dC, dD, fezD, criticalBranch) {
        const fezA = dA;
        const fazB = fezA;
        const fezB = fazB + dB;
        const fazC = fezA;
        const fezC = fazC + dC;
        const fazD = Math.max(fezB, fezC);
        const calcFezD = fazD + dD;
        
        const sezD = calcFezD;
        const sazD = sezD - dD;
        
        const sezB = sazD;
        const sazB = sezB - dB;
        const sezC = sazD;
        const sazC = sezC - dC;
        
        const sezA = Math.min(sazB, sazC);
        const sazA = sezA - dA;
        
        const gpA = sazA - 0;
        const gpB = sazB - fazB;
        const gpC = sazC - fazC;
        const gpD = sazD - fazD;
        
        const isBCrit = (gpB === 0);
        const isCCrit = (gpC === 0);
        
        function renderNode(x, y, faz, d, fez, name, saz, gp, sez, isCrit) {
            const bg = isCrit ? "#fee2e2" : "#e0f2fe";
            const st = isCrit ? "#dc2626" : "#0284c7";
            const tc = isCrit ? "#991b1b" : "#0369a1";
            return `
            <g transform="translate(${x}, ${y})">
                <rect width="130" height="75" fill="${bg}" stroke="${st}" stroke-width="2" rx="4" />
                <line x1="0" y1="25" x2="130" y2="25" stroke="${st}" stroke-width="1.2" />
                <line x1="0" y1="50" x2="130" y2="50" stroke="${st}" stroke-width="1.2" />
                <line x1="43" y1="0" x2="43" y2="25" stroke="${st}" stroke-width="1.2" />
                <line x1="86" y1="0" x2="86" y2="25" stroke="${st}" stroke-width="1.2" />
                <line x1="43" y1="50" x2="43" y2="75" stroke="${st}" stroke-width="1.2" />
                <line x1="86" y1="50" x2="86" y2="75" stroke="${st}" stroke-width="1.2" />
                <text x="21" y="17" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="${tc}">${faz}</text>
                <text x="65" y="17" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="${tc}">D:${d}</text>
                <text x="108" y="17" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="${tc}">${fez}</text>
                <text x="65" y="42" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="${tc}">${name}</text>
                <text x="21" y="67" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="${tc}">${saz}</text>
                <text x="65" y="67" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="${tc}">GP:${gp}</text>
                <text x="108" y="67" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="${tc}">${sez}</text>
            </g>`;
        }
        
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
            <defs>
                <marker id="dyn-np-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
                </marker>
                <marker id="dyn-np-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
                </marker>
            </defs>
            <rect width="680" height="320" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">DIN 69900 Netzplan: Berechnete Projektdauer = ${calcFezD} Tage</text>
            
            ${renderNode(40, 95, 0, dA, fezA, "A: Start", sazA, gpA, sezA, true)}
            ${renderNode(250, 40, fazB, dB, fezB, "B: Zweig 1", sazB, gpB, sezB, isBCrit)}
            ${renderNode(250, 160, fazC, dC, fezC, "C: Zweig 2", sazC, gpC, sezC, isCCrit)}
            ${renderNode(460, 95, fazD, dD, calcFezD, "D: Ende", sazD, gpD, sezD, true)}
            
            <line x1="170" y1="125" x2="250" y2="80" stroke="${isBCrit ? '#dc2626' : '#0284c7'}" stroke-width="${isBCrit ? '2.5' : '1.8'}" marker-end="${isBCrit ? 'url(#dyn-np-red)' : 'url(#dyn-np-blue)'}" />
            <line x1="170" y1="145" x2="250" y2="190" stroke="${isCCrit ? '#dc2626' : '#0284c7'}" stroke-width="${isCCrit ? '2.5' : '1.8'}" marker-end="${isCCrit ? 'url(#dyn-np-red)' : 'url(#dyn-np-blue)'}" />
            
            <line x1="380" y1="80" x2="460" y2="125" stroke="${isBCrit ? '#dc2626' : '#0284c7'}" stroke-width="${isBCrit ? '2.5' : '1.8'}" marker-end="${isBCrit ? 'url(#dyn-np-red)' : 'url(#dyn-np-blue)'}" />
            <line x1="380" y1="190" x2="460" y2="145" stroke="${isCCrit ? '#dc2626' : '#0284c7'}" stroke-width="${isCCrit ? '2.5' : '1.8'}" marker-end="${isCCrit ? 'url(#dyn-np-red)' : 'url(#dyn-np-blue)'}" />
            
            <rect x="100" y="280" width="480" height="30" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="4" />
            <circle cx="120" cy="295" r="5" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
            <text x="135" y="299" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b">Kritischer Pfad: ${criticalBranch || (isBCrit ? 'A ➔ B ➔ D' : 'A ➔ C ➔ D')} (Dauer: ${calcFezD} Tage)</text>
        </svg>
        `;
    },

    getAutoDiagramSvg: function(q) {
        if (!q) return null;
        // 1. Wenn die Frage bereits eine explizite grafische Musterlösung besitzt
        if (q.solutionDiagramSvg && typeof q.solutionDiagramSvg === "string" && q.solutionDiagramSvg.trim().length > 10) {
            return q.solutionDiagramSvg;
        }
        // 2. Wenn die Frage ein Ausgangsdiagramm besitzt und als Diagramm-Aufgabe markiert ist
        if (q.isDiagram && q.diagramSvg && typeof q.diagramSvg === "string" && q.diagramSvg.trim().length > 10) {
            return q.diagramSvg;
        }
        
        // 3. Strikte Prüfung: Reine Theorie-/Textaufgaben (z. B. ID 214, 222, 224, 378, 409) erhalten KEIN generisches Auto-Diagramm
        if (q.id === 214 || q.id === 222 || q.id === 224 || q.id === 378 || q.id === 409) {
            return null;
        }

        const isExplicitDiagramTask = q.isDiagram === true || 
                                      q.theme === "diagrams" || 
                                      (q.diagramType && typeof q.diagramType === "string" && q.diagramType.trim().length > 0) ||
                                      (q.topic && (
                                          q.topic.toLowerCase().includes("diagramm") || 
                                          q.topic.toLowerCase().includes("uml") || 
                                          q.topic.toLowerCase().includes("erd") || 
                                          q.topic.toLowerCase().includes("epk") || 
                                          q.topic.toLowerCase().includes("bpmn") || 
                                          q.topic.toLowerCase().includes("netzplan") || 
                                          q.topic.toLowerCase().includes("struktogramm") || 
                                          q.topic.toLowerCase().includes("organigramm") ||
                                          q.topic.toLowerCase().includes("modellierung") ||
                                          q.topic.toLowerCase().includes("relationales schema")
                                      ));

        if (!isExplicitDiagramTask) {
            return null; // Reine Rechnen-, WiSo- oder Hardware-Aufgaben erhalten niemals ein falsches Diagramm
        }
        
        const topic = (q.topic || "").toLowerCase();
        const question = (q.question || "").toLowerCase();
        const text = topic + " " + question;
        
        // 1. Relationales Tabellenschema & Fremdschlüssel
        if (text.includes("tabellenschema") || text.includes("relationenmodell") || text.includes("relationales schema") || text.includes("fremdschlüssel")) {
            let entA = "Kunde";
            let entB = "Bestellung";
            let rel = "erteilt";
            let card = "1:n";
            let reason = "Ein Kunde erteilt mehrere Bestellungen.";
            
            if (text.includes("abteilung") && text.includes("mitarbeiter")) { entA = "Abteilung"; entB = "Mitarbeiter"; rel = "beschäftigt"; card = "1:n"; reason = "Eine Abteilung beschäftigt viele Mitarbeiter."; }
            else if (text.includes("projekt") && text.includes("entwickler")) { entA = "Projekt"; entB = "Entwickler"; rel = "arbeitet an"; card = "n:m"; reason = "Entwickler arbeiten an Projekten (n:m)."; }
            else if (text.includes("rechnung") && text.includes("position")) { entA = "Rechnung"; entB = "Rechnungsposition"; rel = "besteht aus"; card = "1:n"; reason = "Eine Rechnung enthält mehrere Positionen."; }
            else if (text.includes("student") && text.includes("vorlesung")) { entA = "Student"; entB = "Vorlesung"; rel = "besucht"; card = "n:m"; reason = "Studenten besuchen Vorlesungen (n:m)."; }
            else if (text.includes("mitarbeiter") && text.includes("dienstwagen")) { entA = "Mitarbeiter"; entB = "Dienstwagen"; rel = "besitzt fest"; card = "1:1"; reason = "Ein Mitarbeiter besitzt maximal 1 Dienstwagen."; }
            else if (text.includes("server") && text.includes("festplatte")) { entA = "Server"; entB = "Festplatte"; rel = "enthält"; card = "1:n"; reason = "Ein Server besitzt mehrere Festplatten (1:n)."; }
            
            return VisualDiagrams.getRelationalErdSvg(entA, entB, rel, card, entB, "FK_" + entA + "ID", reason);
        }
        
        // 2. Chen ER-Diagramm (Konzeptionelles Datenmodell)
        if (/\b(erd|chen-diagramm|chen-notation|entity-relationship|kardinalitäten)\b/i.test(text)) {
            return VisualDiagrams.getErdDiagramSvg();
        }
        
        // 3. Use Case Diagramm
        if (text.includes("geldautomat") || text.includes("pin prüfen") || (text.includes("geld abheben") && text.includes("pin"))) {
            return VisualDiagrams.getGeldautomatUseCaseSvg();
        }
        if (/\b(use-case|use case|anwendungsfalldiagramm|anwendungsfall-diagramm|<<include>>|<<extend>>)\b/i.test(text)) {
            let title = "Online-Shop Bestellsystem";
            if (text.includes("ticket") || text.includes("helpdesk")) title = "IT-Helpdesk Ticketverwaltung";
            if (text.includes("smart-home") || text.includes("smart home")) title = "Smart-Home Steuerung";
            if (text.includes("patient") || text.includes("krankenhaus")) title = "Krankenhaus-Patientenverwaltung";
            if (text.includes("flugbuchung") || text.includes("flug")) title = "Flugbuchungs-Portal";
            if (text.includes("lagerlogistik") || text.includes("lager")) title = "Lagerlogistik-Verwaltung";
            return VisualDiagrams.getUseCaseDiagramSvg(title);
        }
        
        // 4. Klassendiagramm (inkl. spezifischer Aggregation & Komposition)
        if (text.includes("kurs") && text.includes("teilnehmer")) {
            return VisualDiagrams.getKursTeilnehmerAggregationSvg();
        }
        if (text.includes("ticket") && (text.includes("historie") || text.includes("tickethistorieneintrag"))) {
            return VisualDiagrams.getTicketKompositionSvg();
        }
        if (text.includes("aggregation") && text.includes("komposition")) {
            return VisualDiagrams.getAggregationKompositionSvg();
        }
        if (text.includes("aggregation") && !text.includes("komposition")) {
            return VisualDiagrams.getKursTeilnehmerAggregationSvg();
        }
        if (text.includes("komposition") && !text.includes("aggregation")) {
            return VisualDiagrams.getTicketKompositionSvg();
        }
        if (/\b(klassendiagramm|uml-klasse|komposition|aggregation)\b/i.test(text)) {
            return VisualDiagrams.getClassDiagramSvg();
        }
        
        // 5. EPK (Ereignisgesteuerte Prozesskette)
        if (/\b(epk|ereignisgesteuerte prozesskette)\b/i.test(text)) {
            return VisualDiagrams.getEpkDiagramSvg();
        }
        
        // 6. BPMN 2.0
        if (text.includes("zahlungsmethode") || text.includes("zahlungsart")) {
            return VisualDiagrams.getZahlungsmethodeBpmnSvg();
        }
        if (/\b(bpmn|swimlane|gateway|start-event|end-event)\b/i.test(text)) {
            return VisualDiagrams.getBpmnDiagramSvg();
        }
        
        // 7. Netzplan (ERP 9 Vorgänge, Client 5 Vorgänge, CAD 6 Vorgänge, V1..V4 4 Vorgänge oder Standard)
        if (/\b(netzplan|kritischer pfad|faz|gesamtpuffer|din 69900)\b/i.test(text)) {
            if (text.includes("erp") || text.includes("9 vorgänge") || text.includes("vorgang a: kick-off") || text.includes("customizing") || text.includes("go-live")) {
                return VisualDiagrams.getErp9NetzplanDiagramSvg();
            }
            if (text.includes("client-rollout") || text.includes("images erstellen") || text.includes("clients clonen") || text.includes("5 vorgänge")) {
                return VisualDiagrams.getRollout5NetzplanDiagramSvg();
            }
            if (text.includes("cad-workstation") || text.includes("6 vorgänge") || text.includes("netzwerk-upgrade")) {
                return VisualDiagrams.getCadRollout6NetzplanSvg();
            }
            if (text.includes("v1") && text.includes("v4")) {
                return VisualDiagrams.getV1V4NetzplanDiagramSvg();
            }
            return VisualDiagrams.getNetzplanDiagramSvg();
        }
        
        // 8. Struktogramm (Rabatt / Stammkunde / Schleifentypen / Standard)
        if (/\b(struktogramm|nassi-shneiderman|din 66261)\b/i.test(text)) {
            if (text.includes("rabatt") && (text.includes("onlineshop") || text.includes("bestellwert") || text.includes("premium"))) {
                return VisualDiagrams.getRabattStruktogrammSvg();
            }
            if (text.includes("stammkunde") || text.includes("rabatt = rabatt + 3")) {
                return VisualDiagrams.getStammkundeStruktogrammSvg();
            }
            if (text.includes("kopfgesteuert") || text.includes("fußgesteuert") || text.includes("schleifentyp") || text.includes("do-while")) {
                return VisualDiagrams.getLoopComparisonStruktogrammSvg();
            }
            return VisualDiagrams.getStruktogrammSvg();
        }
        
        // 9. Organigramm
        if (/\b(organigramm|stabsstelle|einliniensystem|mehrliniensystem)\b/i.test(text)) {
            return VisualDiagrams.getOrganigrammStabSvg();
        }
        
        // 10. Marktgleichgewicht
        if (text.includes("marktgleichgewicht") || text.includes("preisbildung") || text.includes("nachfrageüberhang")) {
            return VisualDiagrams.getMarktgleichgewichtSvg();
        }

        // 11. Handelskalkulation
        if (text.includes("handelskalkulation") || text.includes("schema-treppe") || text.includes("bezugspreis")) {
            return VisualDiagrams.getKalkulationTreeSvg();
        }

        return null;
    }

};

// Global export
if (typeof window !== "undefined") {
    window.VisualDiagrams = VisualDiagrams;
}
