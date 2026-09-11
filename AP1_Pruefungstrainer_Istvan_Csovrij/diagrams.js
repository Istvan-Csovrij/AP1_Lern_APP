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
    }

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
    getAutoDiagramSvg: function(q) {
        if (!q) return null;
        if (q.solutionDiagramSvg && typeof q.solutionDiagramSvg === "string" && q.solutionDiagramSvg.trim().length > 10) {
            return q.solutionDiagramSvg;
        }
        if (q.diagramSvg && typeof q.diagramSvg === "string" && q.diagramSvg.trim().length > 10) {
            return q.diagramSvg;
        }
        
        const topic = (q.topic || "").toLowerCase();
        const question = (q.question || "").toLowerCase();
        const text = topic + " " + question;
        
        // 1. Relationales Tabellenschema & Fremdschlüssel
        if (text.includes("fremdschlüssel") || text.includes("foreign key") || text.includes("tabellenschema") || text.includes("relationenmodell") || text.includes("relationales schema") || text.includes("primärschlüssel / fremdschlüssel")) {
            let entA = "Server";
            let entB = "Festplatte";
            let rel = "enthält";
            let card = "1:n";
            let reason = "Ein Server besitzt mehrere Festplatten, eine Festplatte ist in einem Server verbaut.";
            
            if (text.includes("kunde") && text.includes("bestellung")) { entA = "Kunde"; entB = "Bestellung"; rel = "erteilt"; card = "1:n"; reason = "Ein Kunde erteilt mehrere Bestellungen."; }
            else if (text.includes("abteilung") && text.includes("mitarbeiter")) { entA = "Abteilung"; entB = "Mitarbeiter"; rel = "beschäftigt"; card = "1:n"; reason = "Eine Abteilung beschäftigt viele Mitarbeiter."; }
            else if (text.includes("projekt") && text.includes("entwickler")) { entA = "Projekt"; entB = "Entwickler"; rel = "arbeitet an"; card = "n:m"; reason = "Entwickler arbeiten an Projekten (n:m)."; }
            else if (text.includes("rechnung") && text.includes("position")) { entA = "Rechnung"; entB = "Rechnungsposition"; rel = "besteht aus"; card = "1:n"; reason = "Eine Rechnung enthält mehrere Positionen."; }
            else if (text.includes("student") && text.includes("vorlesung")) { entA = "Student"; entB = "Vorlesung"; rel = "besucht"; card = "n:m"; reason = "Studenten besuchen Vorlesungen (n:m)."; }
            else if (text.includes("mitarbeiter") && text.includes("dienstwagen")) { entA = "Mitarbeiter"; entB = "Dienstwagen"; rel = "besitzt fest"; card = "1:1"; reason = "Ein Mitarbeiter besitzt maximal 1 Dienstwagen."; }
            else if (text.includes("software") || text.includes("lizenz")) { entA = "SoftwareLizenz"; entB = "ArbeitsplatzPC"; rel = "installiert auf"; card = "n:m"; reason = "Lizenzen auf PCs (n:m)."; }
            else if (text.includes("server") && text.includes("festplatte")) { entA = "Server"; entB = "Festplatte"; rel = "enthält"; card = "1:n"; reason = "Ein Server besitzt mehrere Festplatten (1:n)."; }
            
            return VisualDiagrams.getRelationalErdSvg(entA, entB, rel, card, entB, "FK_" + entA + "ID", reason);
        }
        
        // 2. Chen ER-Diagramm (Konzeptionelles Datenmodell)
        if (text.includes("erd") || text.includes("chen") || text.includes("entity-relationship") || text.includes("kardinalität") || text.includes("datenmodell")) {
            return VisualDiagrams.getErdDiagramSvg();
        }
        
        // 3. Use Case
        if (text.includes("use-case") || text.includes("use case") || text.includes("anwendungsfall") || text.includes("include") || text.includes("extend")) {
            let title = "Online-Shop Bestellsystem";
            if (text.includes("ticket") || text.includes("helpdesk")) title = "IT-Helpdesk Ticketverwaltung";
            if (text.includes("smart-home") || text.includes("smart home")) title = "Smart-Home Steuerung";
            if (text.includes("patient") || text.includes("krankenhaus")) title = "Krankenhaus-Patientenverwaltung";
            return VisualDiagrams.getUseCaseDiagramSvg(title);
        }
        
        // 4. Klassendiagramm
        if (text.includes("klassendiagramm") || text.includes("komposition") || text.includes("aggregation") || text.includes("sichtbarkeit") || text.includes("vererbung") || text.includes("multiplizität") || text.includes("uml-klasse")) {
            return VisualDiagrams.getClassDiagramSvg();
        }
        
        // 5. EPK (Ereignisgesteuerte Prozesskette)
        if (text.includes("epk") || text.includes("ereignisgesteuert") || text.includes("prozesskette")) {
            return VisualDiagrams.getEpkDiagramSvg();
        }
        
        // 6. BPMN 2.0
        if (text.includes("bpmn") || text.includes("gateway") || text.includes("swimlane") || text.includes("start-event") || text.includes("end-event")) {
            return VisualDiagrams.getBpmnDiagramSvg();
        }
        
        // 7. Netzplan
        if (text.includes("netzplan") || text.includes("kritischer pfad") || text.includes("faz") || text.includes("gesamtpuffer") || text.includes("din 69900") || text.includes("vorwärtsrechnung") || text.includes("rückwärtsrechnung")) {
            return VisualDiagrams.getNetzplanDiagramSvg();
        }
        
        // 8. Struktogramm
        if (text.includes("struktogramm") || text.includes("nassi") || text.includes("din 66261") || text.includes("kontrollstruktur")) {
            return VisualDiagrams.getStruktogrammSvg();
        }
        
        // 9. Organigramm
        if (text.includes("organigramm") || text.includes("stabsstelle") || text.includes("einliniensystem") || text.includes("mehrliniensystem")) {
            return VisualDiagrams.getOrganigrammStabSvg();
        }
        
        // 10. Marktpreisbildung
        if (text.includes("marktgleichgewicht") || text.includes("gleichgewichtspreis") || text.includes("nachfrageüberhang") || text.includes("angebotsüberhang")) {
            return VisualDiagrams.getMarktgleichgewichtSvg();
        }
        
        // 11. Handelskalkulation
        if (text.includes("kalkulation") || text.includes("lep") || text.includes("zep") || text.includes("bep") || text.includes("bezugspreis") || text.includes("einstandspreis") || text.includes("selbstkosten") || text.includes("bvp") || text.includes("zvp") || text.includes("lvp") || text.includes("kalkulationszuschlag") || text.includes("handelsspanne") || text.includes("einkaufskalkulation")) {
            return VisualDiagrams.getKalkulationTreeSvg();
        }
        
        return null;
    }

};

// Global export
if (typeof window !== "undefined") {
    window.VisualDiagrams = VisualDiagrams;
}
