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

    // 7e. Netzplan Software-Rollout (8 Vorgänge, Dauer = 19 Werktage)
    getRollout8NetzplanDiagramSvg: function() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="100%">
    <defs>
        <marker id="np8-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
        </marker>
        <marker id="np8-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
        </marker>
    </defs>
    <rect width="860" height="380" fill="#f8fafc" rx="8" />
    <text x="430" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">DIN 69900 Netzplan: Software-Rollout (8 Vorgänge, Dauer = 19 Werktage)</text>

    <!-- Column 1: A (Kick-Off) -->
    <g transform="translate(25, 140)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.67" x2="115" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.33" x2="115" y2="45.33" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.33" y1="0" x2="38.33" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.67" y1="0" x2="76.67" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.33" y1="45.33" x2="38.33" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.67" y1="45.33" x2="76.67" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <text x="19.17" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
        <text x="57.5" y="15.87" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:3</text>
        <text x="95.83" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
        <text x="57.5" y="38.53" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#991b1b">A: Kick-Off</text>
        <text x="19.17" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">0</text>
        <text x="57.5" y="61.2" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
    </g>

    <!-- Column 2: B (Backend, Kritisch) & C (Schulungsunterlagen, Puffer) -->
    <g transform="translate(180, 60)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.67" x2="115" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.33" x2="115" y2="45.33" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.33" y1="0" x2="38.33" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.67" y1="0" x2="76.67" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.33" y1="45.33" x2="38.33" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.67" y1="45.33" x2="76.67" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <text x="19.17" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
        <text x="57.5" y="15.87" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:4</text>
        <text x="95.83" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
        <text x="57.5" y="38.53" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#991b1b">B: Backend</text>
        <text x="19.17" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">3</text>
        <text x="57.5" y="61.2" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
    </g>

    <g transform="translate(180, 220)">
        <rect width="115" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
        <line x1="0" y1="22.67" x2="115" y2="22.67" stroke="#0284c7" stroke-width="1.2" />
        <line x1="0" y1="45.33" x2="115" y2="45.33" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.33" y1="0" x2="38.33" y2="22.67" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.67" y1="0" x2="76.67" y2="22.67" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.33" y1="45.33" x2="38.33" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.67" y1="45.33" x2="76.67" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <text x="19.17" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">3</text>
        <text x="57.5" y="15.87" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D:2</text>
        <text x="95.83" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">5</text>
        <text x="57.5" y="38.53" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#0369a1">C: Unterlagen</text>
        <text x="19.17" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">7</text>
        <text x="57.5" y="61.2" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:4</text>
        <text x="95.83" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">9</text>
    </g>

    <!-- Column 3: D (DB-Migration, Kritisch) & E (Key-User Schulung, Puffer) -->
    <g transform="translate(335, 60)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.67" x2="115" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.33" x2="115" y2="45.33" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.33" y1="0" x2="38.33" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.67" y1="0" x2="76.67" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.33" y1="45.33" x2="38.33" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.67" y1="45.33" x2="76.67" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <text x="19.17" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
        <text x="57.5" y="15.87" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:5</text>
        <text x="95.83" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">12</text>
        <text x="57.5" y="38.53" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#991b1b">D: DB-Migr.</text>
        <text x="19.17" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">7</text>
        <text x="57.5" y="61.2" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">12</text>
    </g>

    <g transform="translate(335, 220)">
        <rect width="115" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
        <line x1="0" y1="22.67" x2="115" y2="22.67" stroke="#0284c7" stroke-width="1.2" />
        <line x1="0" y1="45.33" x2="115" y2="45.33" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.33" y1="0" x2="38.33" y2="22.67" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.67" y1="0" x2="76.67" y2="22.67" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.33" y1="45.33" x2="38.33" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.67" y1="45.33" x2="76.67" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <text x="19.17" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">5</text>
        <text x="57.5" y="15.87" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D:3</text>
        <text x="95.83" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">8</text>
        <text x="57.5" y="38.53" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#0369a1">E: Schulung</text>
        <text x="19.17" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">9</text>
        <text x="57.5" y="61.2" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:4</text>
        <text x="95.83" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">12</text>
    </g>

    <!-- Column 4: F (Integrationstest, Kritisch) & G (Handbuch, Puffer) -->
    <g transform="translate(490, 60)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.67" x2="115" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.33" x2="115" y2="45.33" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.33" y1="0" x2="38.33" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.67" y1="0" x2="76.67" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.33" y1="45.33" x2="38.33" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.67" y1="45.33" x2="76.67" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <text x="19.17" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">12</text>
        <text x="57.5" y="15.87" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:4</text>
        <text x="95.83" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">16</text>
        <text x="57.5" y="38.53" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">F: Integrat.</text>
        <text x="19.17" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">12</text>
        <text x="57.5" y="61.2" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">16</text>
    </g>

    <g transform="translate(490, 220)">
        <rect width="115" height="68" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="4" />
        <line x1="0" y1="22.67" x2="115" y2="22.67" stroke="#0284c7" stroke-width="1.2" />
        <line x1="0" y1="45.33" x2="115" y2="45.33" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.33" y1="0" x2="38.33" y2="22.67" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.67" y1="0" x2="76.67" y2="22.67" stroke="#0284c7" stroke-width="1.2" />
        <line x1="38.33" y1="45.33" x2="38.33" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <line x1="76.67" y1="45.33" x2="76.67" y2="68" stroke="#0284c7" stroke-width="1.2" />
        <text x="19.17" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">8</text>
        <text x="57.5" y="15.87" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0369a1">D:2</text>
        <text x="95.83" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">10</text>
        <text x="57.5" y="38.53" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#0369a1">G: Handbuch</text>
        <text x="19.17" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">14</text>
        <text x="57.5" y="61.2" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1">GP:6</text>
        <text x="95.83" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">16</text>
    </g>

    <!-- Column 5: H (Go-Live, Kritisch) -->
    <g transform="translate(645, 140)">
        <rect width="115" height="68" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" rx="4" />
        <line x1="0" y1="22.67" x2="115" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="0" y1="45.33" x2="115" y2="45.33" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.33" y1="0" x2="38.33" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.67" y1="0" x2="76.67" y2="22.67" stroke="#dc2626" stroke-width="1.2" />
        <line x1="38.33" y1="45.33" x2="38.33" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <line x1="76.67" y1="45.33" x2="76.67" y2="68" stroke="#dc2626" stroke-width="1.2" />
        <text x="19.17" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">16</text>
        <text x="57.5" y="15.87" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b">D:3</text>
        <text x="95.83" y="15.87" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">19</text>
        <text x="57.5" y="38.53" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#991b1b">H: Go-Live</text>
        <text x="19.17" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">16</text>
        <text x="57.5" y="61.2" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">GP:0</text>
        <text x="95.83" y="61.2" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="#991b1b">19</text>
    </g>

    <!-- Arrows -->
    <!-- A -> B (Critical Red) -->
    <line x1="140" y1="160" x2="180" y2="94" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np8-red)" />
    <!-- A -> C (Blue) -->
    <line x1="140" y1="188" x2="180" y2="254" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np8-blue)" />

    <!-- B -> D (Critical Red) -->
    <line x1="295" y1="94" x2="335" y2="94" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np8-red)" />
    <!-- C -> E (Blue) -->
    <line x1="295" y1="254" x2="335" y2="254" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np8-blue)" />

    <!-- D -> F (Critical Red) -->
    <line x1="450" y1="94" x2="490" y2="94" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np8-red)" />
    <!-- E -> F (Blue diagonal up) -->
    <line x1="450" y1="240" x2="490" y2="110" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np8-blue)" />
    <!-- E -> G (Blue horizontal) -->
    <line x1="450" y1="254" x2="490" y2="254" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np8-blue)" />

    <!-- F -> H (Critical Red) -->
    <line x1="605" y1="94" x2="645" y2="160" stroke="#dc2626" stroke-width="2.5" marker-end="url(#np8-red)" />
    <!-- G -> H (Blue diagonal up) -->
    <line x1="605" y1="254" x2="645" y2="188" stroke="#0284c7" stroke-width="1.8" marker-end="url(#np8-blue)" />

    <!-- Legend Footer -->
    <rect x="140" y="335" width="580" height="34" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="4" />
    <circle cx="165" cy="352" r="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
    <text x="180" y="356" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#991b1b">Kritischer Pfad: A ➔ B ➔ D ➔ F ➔ H (Dauer: 19 Tage, GP = 0)</text>
    <circle cx="570" cy="352" r="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
    <text x="585" y="356" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0369a1">Pufferpfad (GP > 0)</text>
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

    // 10b. Amortisationsdiagramm (Projektkosten vs. Ersparnisse / Break-Even-Dauer)
    getAmortisationDiagramSvg: function(projektkosten = 1310, ersparnisMonat = 200, maxMonate = 10, maxBetrag = 2000, title = "A4 Amortisationsdauer: Projektkosten und Ersparnisse") {
        const x0 = 85;
        const y0 = 290;
        const w = 530; // Pixel-Breite für die Monats-Achse
        const h = 230; // Pixel-Höhe für den Betrag

        const pxPerMonth = w / maxMonate;
        const pxPerEuro = h / maxBetrag;

        // Projektkosten Y-Koordinate (konstant 1310 €)
        const yKosten = y0 - (projektkosten * pxPerEuro);

        // Amortisationsmonat: 1310 / 200 = 6.55 Monate
        const amortMonate = projektkosten / ersparnisMonat;
        const xSchnitt = x0 + (amortMonate * pxPerMonth);
        const ySchnitt = yKosten;

        // Endpunkt Ersparnisse bei Monat 10: 10 * 200 = 2000 €
        const yErsparnisEnd = y0 - (maxMonate * ersparnisMonat * pxPerEuro);

        // Grid lines Y (Schritte à 250 €)
        let gridY = "";
        for (let b = 250; b <= maxBetrag; b += 250) {
            const yPos = y0 - (b * pxPerEuro);
            gridY += `
            <text x="${x0 - 10}" y="${yPos + 4}" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="end">${b}</text>
            <line x1="${x0}" y1="${yPos}" x2="${x0 + w}" y2="${yPos}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />`;
        }

        // Grid lines X (Schritte à 2 Monate)
        let gridX = "";
        for (let m = 0; m <= maxMonate; m += 2) {
            const xPos = x0 + (m * pxPerMonth);
            gridX += `
            <text x="${xPos}" y="${y0 + 20}" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">${m}</text>
            <line x1="${xPos}" y1="${y0}" x2="${xPos}" y2="${y0 - h}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />`;
        }

        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="100%" height="100%">
            <defs>
                <marker id="axis-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <polygon points="0,0 10,5 0,10" fill="#334155" />
                </marker>
            </defs>
            <rect width="680" height="360" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1" />
            
            <text x="340" y="26" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">${title}</text>
            
            <!-- Gitternetzlinien -->
            ${gridY}
            ${gridX}
            
            <!-- Zonen: Verlustzone (rot) & Gewinnzone (grün) -->
            <polygon points="${x0},${yKosten} ${x0},${y0} ${xSchnitt},${ySchnitt}" fill="rgba(239, 68, 68, 0.08)" />
            <text x="${x0 + (xSchnitt - x0) * 0.4}" y="${yKosten + 45}" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Verlustzone (Investition)</text>
            
            <polygon points="${xSchnitt},${ySchnitt} ${x0 + w},${yErsparnisEnd} ${x0 + w},${yKosten}" fill="rgba(34, 197, 94, 0.12)" />
            <text x="${xSchnitt + (x0 + w - xSchnitt) * 0.4}" y="${yKosten - 20}" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">Gewinnzone (Ersparnis)</text>

            <!-- Achsen -->
            <!-- Y-Achse -->
            <line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0 - h - 15}" stroke="#334155" stroke-width="2" marker-end="url(#axis-arr)" />
            <text x="25" y="${y0 - h / 2}" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle" transform="rotate(-90 25 ${y0 - h / 2})">Betrag (€)</text>
            
            <!-- X-Achse -->
            <line x1="${x0}" y1="${y0}" x2="${x0 + w + 20}" y2="${y0}" stroke="#334155" stroke-width="2" marker-end="url(#axis-arr)" />
            <text x="${x0 + w / 2}" y="${y0 + 40}" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Monate</text>
            
            <!-- 1. Blaue Linie: Projektkosten (horizontal konstant) -->
            <line x1="${x0}" y1="${yKosten}" x2="${x0 + w}" y2="${yKosten}" stroke="#2563eb" stroke-width="3" />
            
            <!-- 2. Rote Linie: Kumulierte Ersparnisse (linear ansteigend) -->
            <line x1="${x0}" y1="${y0}" x2="${x0 + w}" y2="${yErsparnisEnd}" stroke="#dc2626" stroke-width="3" />
            
            <!-- Schnittpunkt (Amortisationspunkt / Break-Even-Point) -->
            <line x1="${xSchnitt}" y1="${ySchnitt}" x2="${xSchnitt}" y2="${y0}" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,4" />
            <line x1="${xSchnitt}" y1="${ySchnitt}" x2="${x0}" y2="${ySchnitt}" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,4" />
            
            <circle cx="${xSchnitt}" cy="${ySchnitt}" r="6" fill="#16a34a" stroke="#ffffff" stroke-width="2" />
            <circle cx="${xSchnitt}" cy="${ySchnitt}" r="11" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="2,2" />
            
            <!-- Hervorhebung auf X-Achse -->
            <rect x="${xSchnitt - 38}" y="${y0 + 4}" width="76" height="20" fill="#16a34a" rx="4" />
            <text x="${xSchnitt}" y="${y0 + 18}" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">${amortMonate.toFixed(2).replace('.', ',')} Mon.</text>
            
            <!-- Beschriftung des Schnittpunkts -->
            <rect x="${xSchnitt - 130}" y="${ySchnitt - 35}" width="165" height="24" fill="#1e293b" rx="4" opacity="0.9" />
            <text x="${xSchnitt - 48}" y="${ySchnitt - 19}" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f8fafc" text-anchor="middle">🎯 Amortisation: ${amortMonate.toFixed(2).replace('.', ',')} Monate</text>

            <!-- Legende Box oben links -->
            <g transform="translate(${x0 + 15}, 40)">
                <rect width="180" height="52" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" rx="4" />
                <line x1="12" y1="18" x2="35" y2="18" stroke="#2563eb" stroke-width="3" />
                <text x="42" y="22" font-family="sans-serif" font-size="11" font-weight="600" fill="#1e293b">Projektkosten (${projektkosten.toLocaleString('de-DE')} €)</text>
                <line x1="12" y1="36" x2="35" y2="36" stroke="#dc2626" stroke-width="3" />
                <text x="42" y="40" font-family="sans-serif" font-size="11" font-weight="600" fill="#1e293b">Ersparnisse (${ersparnisMonat} € / Mon.)</text>
            </g>
        </svg>
        `;
    },

    // 10c. Klassisches Break-Even-Diagramm (Gewinnschwellendiagramm mit Fixkosten, Gesamtkosten & Erlös)
    getBreakEvenDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="100%" height="100%">
            <defs>
                <marker id="bep-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <polygon points="0,0 10,5 0,10" fill="#334155" />
                </marker>
            </defs>
            <rect width="680" height="360" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1" />
            <text x="340" y="26" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">Break-Even-Analyse (Gewinnschwellendiagramm)</text>
            
            <!-- Gitternetz -->
            <line x1="90" y1="232.5" x2="610" y2="232.5" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3,3" />
            <text x="80" y="236" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="end">12.500 €</text>
            
            <line x1="90" y1="175" x2="610" y2="175" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3,3" />
            <text x="80" y="179" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="end">25.000 €</text>
            
            <line x1="90" y1="117.5" x2="610" y2="117.5" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3,3" />
            <text x="80" y="121" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="end">37.500 €</text>

            <line x1="90" y1="60" x2="610" y2="60" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3,3" />
            <text x="80" y="64" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="end">50.000 €</text>

            <!-- X Ticks: 200, 400, 600, 800, 1000 -->
            <text x="90" y="308" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">0</text>
            <text x="194" y="308" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">200</text>
            <text x="298" y="308" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">400</text>
            <text x="402" y="308" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">600 (BEP)</text>
            <text x="506" y="308" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">800</text>
            <text x="610" y="308" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">1.000</text>

            <!-- Zonen -->
            <rect x="90" y="221" width="520" height="69" fill="rgba(148, 163, 184, 0.12)" />
            <text x="160" y="255" font-family="sans-serif" font-size="11" fill="#475569" font-style="italic">Fixkostenblock (K_fix = 15.000 €)</text>

            <polygon points="90,221 90,290 402,152" fill="rgba(239, 68, 68, 0.12)" />
            <text x="220" y="210" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Verlustzone</text>

            <polygon points="402,152 610,60 610,106" fill="rgba(34, 197, 94, 0.15)" />
            <text x="500" y="90" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">Gewinnzone</text>

            <!-- Achsen -->
            <line x1="90" y1="290" x2="90" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#bep-arr)" />
            <text x="25" y="165" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle" transform="rotate(-90 25 165)">Kosten / Erlöse (€)</text>

            <line x1="90" y1="290" x2="630" y2="290" stroke="#334155" stroke-width="2" marker-end="url(#bep-arr)" />
            <text x="350" y="330" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Menge x (Stück)</text>

            <!-- 1. Fixkosten Kfix = 15.000 € -->
            <line x1="90" y1="221" x2="610" y2="221" stroke="#64748b" stroke-width="2" stroke-dasharray="4,3" />
            <text x="615" y="225" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">K_fix (15.000 €)</text>

            <!-- 2. Gesamtkosten K(x) = 15.000 + 25*x -->
            <line x1="90" y1="221" x2="610" y2="106" stroke="#2563eb" stroke-width="3" />
            <text x="615" y="108" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">K(x) Gesamtkosten</text>

            <!-- 3. Erlöskurve E(x) = 50*x -->
            <line x1="90" y1="290" x2="610" y2="60" stroke="#ea580c" stroke-width="3" />
            <text x="615" y="62" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">E(x) Umsatzerlös</text>

            <!-- BEP Schnittpunkt bei x = 600 Stk., y = 30.000 € -->
            <line x1="402" y1="152" x2="402" y2="290" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,4" />
            <line x1="402" y1="152" x2="90" y2="152" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,4" />
            <circle cx="402" cy="152" r="7" fill="#16a34a" stroke="#ffffff" stroke-width="2" />
            
            <rect x="300" y="125" width="200" height="24" fill="#0f172a" rx="4" opacity="0.9" />
            <text x="400" y="141" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f8fafc" text-anchor="middle">🎯 Break-Even-Point: 600 Stück (30.000 €)</text>
            <text x="80" y="156" font-family="sans-serif" font-size="10" font-weight="bold" fill="#16a34a" text-anchor="end">30.000 €</text>

            <!-- Formel-Hinweis Box unten -->
            <rect x="100" y="338" width="500" height="18" fill="#f8fafc" />
            <text x="350" y="350" font-family="sans-serif" font-size="10.5" fill="#475569" font-style="italic" text-anchor="middle">Gewinnschwelle: x_BEP = K_fix / (p - k_var) = 15.000 € / (50 € - 25 €) = 600 Stück</text>
        </svg>
        `;
    },

    // 10d. Kostenvergleichsrechnung (Kauf vs. Cloud-Miete / Make-or-Buy)
    getKostenvergleichDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="100%" height="100%">
            <defs>
                <marker id="kv-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <polygon points="0,0 10,5 0,10" fill="#334155" />
                </marker>
            </defs>
            <rect width="680" height="360" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1" />
            <text x="340" y="26" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">Kostenvergleich: Option A (Kauf On-Premises) vs. Option B (Cloud SaaS)</text>
            
            <line x1="90" y1="290" x2="90" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#kv-arr)" />
            <text x="25" y="165" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle" transform="rotate(-90 25 165)">Gesamtkosten (€)</text>

            <line x1="90" y1="290" x2="630" y2="290" stroke="#334155" stroke-width="2" marker-end="url(#kv-arr)" />
            <text x="350" y="328" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Laufzeit in Monaten</text>

            <!-- Ticks X: 0, 6, 12, 15 (kritisch), 18, 24 -->
            <text x="90" y="306" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">0</text>
            <text x="220" y="306" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">6</text>
            <text x="350" y="306" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">12</text>
            <text x="415" y="306" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7c3aed" text-anchor="middle">15 (Kritisch)</text>
            <text x="480" y="306" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">18</text>
            <text x="610" y="306" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">24</text>

            <!-- Grid Y: 10.000, 20.000, 30.000 -->
            <line x1="90" y1="226" x2="610" y2="226" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3,3" />
            <text x="80" y="230" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="end">10.000 €</text>

            <line x1="90" y1="162" x2="610" y2="162" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3,3" />
            <text x="80" y="166" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="end">20.000 €</text>

            <line x1="90" y1="98" x2="610" y2="98" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3,3" />
            <text x="80" y="102" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="end">30.000 €</text>

            <!-- Schattierung -->
            <polygon points="90,290 90,175 415,146" fill="rgba(22, 163, 74, 0.08)" />
            <text x="210" y="210" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">Cloud günstiger (Monat 0 bis 15)</text>

            <polygon points="415,146 610,60 610,129" fill="rgba(37, 99, 235, 0.10)" />
            <text x="470" y="115" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">Kauf günstiger (ab Monat 15)</text>

            <!-- Option A: Kauf On-Premises -->
            <line x1="90" y1="175" x2="610" y2="129" stroke="#2563eb" stroke-width="3" />
            <text x="530" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">Option A (Kauf)</text>

            <!-- Option B: Cloud SaaS -->
            <line x1="90" y1="290" x2="610" y2="60" stroke="#ea580c" stroke-width="3" />
            <text x="530" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">Option B (Cloud)</text>

            <!-- Schnittpunkt bei 15 Monate, 22.500 € -->
            <line x1="415" y1="146" x2="415" y2="290" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,4" />
            <line x1="415" y1="146" x2="90" y2="146" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,4" />
            <circle cx="415" cy="146" r="6" fill="#7c3aed" stroke="#ffffff" stroke-width="2" />
            
            <rect x="290" y="118" width="220" height="24" fill="#1e293b" rx="4" opacity="0.95" />
            <text x="400" y="134" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f8fafc" text-anchor="middle">⚖️ Kritische Zeit: 15 Monate (22.500 €)</text>
            <text x="80" y="150" font-family="sans-serif" font-size="10" font-weight="bold" fill="#7c3aed" text-anchor="end">22.500 €</text>

            <!-- Legende Box oben links -->
            <g transform="translate(105, 42)">
                <rect width="210" height="52" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" rx="4" />
                <line x1="12" y1="18" x2="35" y2="18" stroke="#2563eb" stroke-width="3" />
                <text x="42" y="22" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#1e293b">Kauf: 18.000 € + 300 €/Mon.</text>
                <line x1="12" y1="36" x2="35" y2="36" stroke="#ea580c" stroke-width="3" />
                <text x="42" y="40" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#1e293b">Cloud: 0 € + 1.500 €/Mon.</text>
            </g>
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

    
    // 2e. Relationales Schema & ERD: IT-Ticketsystem (Mitarbeiter, Support, Ticket, Statuskommentar)
    getTicketSystemErdRelationalSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 440" width="100%" height="100%">
            <defs>
                <marker id="fk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
                </marker>
                <marker id="fk-arrow-opt" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
                </marker>
            </defs>
            <rect width="780" height="440" fill="#f8fafc" rx="8" />
            <text x="390" y="24" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Relationales Datenbankschema &amp; ERD: IT-Ticketsystem</text>
            
            <!-- Tabelle 1: MITARBEITER (1-Seite oben links) -->
            <g transform="translate(30, 45)">
                <rect width="210" height="135" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="5" />
                <rect width="210" height="30" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="5" />
                <text x="105" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">MITARBEITER</text>
                
                <text x="10" y="52" font-family="monospace" font-size="11.5" font-weight="bold" fill="#b45309">🔑 MitarbeiterNr (PK)</text>
                <line x1="0" y1="62" x2="210" y2="62" stroke="#e2e8f0" stroke-width="1.5" />
                <text x="10" y="82" font-family="monospace" font-size="11" fill="#334155">  Name: VARCHAR(50)</text>
                <text x="10" y="102" font-family="monospace" font-size="11" fill="#334155">  Abteilung: VARCHAR(30)</text>
                <text x="10" y="122" font-family="monospace" font-size="11" fill="#334155">  Email: VARCHAR(80)</text>
            </g>
            
            <!-- Tabelle 2: SUPPORT_MITARBEITER (1-Seite unten links) -->
            <g transform="translate(30, 240)">
                <rect width="210" height="135" fill="#ffffff" stroke="#7c3aed" stroke-width="2" rx="5" />
                <rect width="210" height="30" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" rx="5" />
                <text x="105" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#6d28d9" text-anchor="middle">SUPPORT_MITARBEITER</text>
                
                <text x="10" y="52" font-family="monospace" font-size="11.5" font-weight="bold" fill="#b45309">🔑 SupportMitarbeiterNr (PK)</text>
                <line x1="0" y1="62" x2="210" y2="62" stroke="#e2e8f0" stroke-width="1.5" />
                <text x="10" y="82" font-family="monospace" font-size="11" fill="#334155">  Name: VARCHAR(50)</text>
                <text x="10" y="102" font-family="monospace" font-size="11" fill="#334155">  Qualifikation: VARCHAR(40)</text>
                <text x="10" y="122" font-family="monospace" font-size="11" fill="#334155">  Level: INT (1-3)</text>
            </g>
            
            <!-- Tabelle 3: TICKET (Zentrale n-Tabelle Mitte) -->
            <g transform="translate(290, 80)">
                <rect width="230" height="230" fill="#ffffff" stroke="#2563eb" stroke-width="2.5" rx="5" />
                <rect width="230" height="32" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5" rx="5" />
                <text x="115" y="22" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">TICKET</text>
                
                <text x="10" y="55" font-family="monospace" font-size="12" font-weight="bold" fill="#b45309">🔑 TicketID (PK)</text>
                <line x1="0" y1="66" x2="230" y2="66" stroke="#cbd5e1" stroke-width="1.5" />
                <text x="10" y="88" font-family="monospace" font-size="11.5" fill="#334155">  Betreff: VARCHAR(100)</text>
                <text x="10" y="108" font-family="monospace" font-size="11.5" fill="#334155">  ErstellDatum: DATETIME</text>
                <text x="10" y="128" font-family="monospace" font-size="11.5" fill="#334155">  Status: VARCHAR(20)</text>
                <line x1="0" y1="140" x2="230" y2="140" stroke="#cbd5e1" stroke-width="1.5" />
                
                <rect x="6" y="148" width="218" height="32" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" rx="3" />
                <text x="10" y="169" font-family="monospace" font-size="11" font-weight="bold" fill="#1e40af">🔗 FK_MitarbeiterNr [NOT NULL]</text>
                
                <rect x="6" y="186" width="218" height="32" fill="#faf5ff" stroke="#a855f7" stroke-width="1" rx="3" />
                <text x="10" y="207" font-family="monospace" font-size="11" font-weight="bold" fill="#7e22ce">🔗 FK_SupportNr [NULLable]</text>
            </g>
            
            <!-- Tabelle 4: STATUSKOMMENTAR (n-Tabelle rechts) -->
            <g transform="translate(565, 120)">
                <rect width="190" height="160" fill="#ffffff" stroke="#059669" stroke-width="2" rx="5" />
                <rect width="190" height="30" fill="#d1fae5" stroke="#059669" stroke-width="2" rx="5" />
                <text x="95" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">STATUSKOMMENTAR</text>
                
                <text x="10" y="52" font-family="monospace" font-size="11.5" font-weight="bold" fill="#b45309">🔑 KommentarID (PK)</text>
                <line x1="0" y1="62" x2="190" y2="62" stroke="#e2e8f0" stroke-width="1.5" />
                <text x="10" y="82" font-family="monospace" font-size="11" fill="#334155">  Text: TEXT</text>
                <text x="10" y="102" font-family="monospace" font-size="11" fill="#334155">  Zeitstempel: DATETIME</text>
                <line x1="0" y1="114" x2="190" y2="114" stroke="#e2e8f0" stroke-width="1.5" />
                
                <rect x="6" y="120" width="178" height="30" fill="#ecfdf5" stroke="#10b981" stroke-width="1" rx="3" />
                <text x="10" y="140" font-family="monospace" font-size="11" font-weight="bold" fill="#065f46">🔗 FK_TicketNr [NOT NULL]</text>
            </g>
            
            <!-- Beziehungslinie 1: MITARBEITER (1) ── (0..*) TICKET -->
            <path d="M 240,110 L 265,110 L 265,245 L 290,245" fill="none" stroke="#2563eb" stroke-width="2" />
            <text x="245" y="102" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1">1</text>
            <text x="270" y="240" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">0..*</text>
            
            <!-- Beziehungslinie 2: SUPPORT (1) ── (0..1) TICKET -->
            <path d="M 240,305 L 265,305 L 265,282 L 290,282" fill="none" stroke="#7c3aed" stroke-width="2" />
            <text x="245" y="298" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">1</text>
            <text x="268" y="276" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7e22ce">0..1</text>
            
            <!-- Beziehungslinie 3: TICKET (1) ── (0..*) STATUSKOMMENTAR -->
            <path d="M 520,135 L 542,135 L 542,255 L 565,255" fill="none" stroke="#059669" stroke-width="2" />
            <text x="525" y="128" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">1</text>
            <text x="545" y="250" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">0..*</text>
            
            <!-- Box unten mit Prüfungsregeln -->
            <rect x="25" y="388" width="730" height="42" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" rx="5" />
            <text x="390" y="405" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">✓ Prüfungsregel: 1:n-Fremdschlüssel wandert immer in die Tabelle auf der n-Seite (TICKET &amp; STATUSKOMMENTAR)</text>
            <text x="390" y="422" font-family="sans-serif" font-size="10.5" fill="#166534" text-anchor="middle">Da ein Ticket anfangs unzugewiesen sein kann, ist FK_SupportMitarbeiterNr NULLable (optional 0..1).</text>
        </svg>
        `;
    },

    // 2f. UML Klassendiagramm: Generalisierung / Vererbung (Geraet -> Workstation / Server)
    getGeraetVererbungSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 340" width="100%" height="100%">
            <defs>
                <marker id="uml-generalization" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="9" markerHeight="9" orient="auto">
                    <polygon points="0,0 11,6 0,12" fill="#ffffff" stroke="#1e293b" stroke-width="1.5" />
                </marker>
            </defs>
            <rect width="680" height="340" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">UML-Klassendiagramm: Generalisierung / Vererbung (Geraet)</text>
            
            <!-- Oberklasse: Geraet (Superklasse) -->
            <g transform="translate(230, 45)">
                <rect width="220" height="110" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="4" />
                <rect width="220" height="28" fill="#dbeafe" stroke="#0284c7" stroke-width="2" rx="4" />
                <text x="110" y="19" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">Geraet</text>
                
                <text x="10" y="44" font-family="monospace" font-size="11" fill="#334155">- inventarNr: String</text>
                <text x="10" y="60" font-family="monospace" font-size="11" fill="#334155">- anschaffungsDatum: Date</text>
                <rect x="8" y="64" width="204" height="18" fill="#fef3c7" rx="2" />
                <text x="10" y="77" font-family="monospace" font-size="11" font-weight="bold" fill="#b45309"># standort: String (protected)</text>
                <line x1="0" y1="84" x2="220" y2="84" stroke="#cbd5e1" stroke-width="1.2" />
                
                <text x="10" y="98" font-family="monospace" font-size="11" fill="#0f766e">+ getInventarNr(): String</text>
            </g>
            
            <!-- Unterklasse 1: Workstation -->
            <g transform="translate(70, 200)">
                <rect width="220" height="85" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="4" />
                <rect width="220" height="28" fill="#f1f5f9" stroke="#0284c7" stroke-width="2" rx="4" />
                <text x="110" y="19" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Workstation</text>
                
                <text x="10" y="46" font-family="monospace" font-size="11" fill="#334155">- betriebssystem: String</text>
                <text x="10" y="64" font-family="monospace" font-size="11" fill="#334155">- arbeitsspeicher: int</text>
                <line x1="0" y1="70" x2="220" y2="70" stroke="#cbd5e1" stroke-width="1.2" />
                <text x="10" y="80" font-family="monospace" font-size="10" font-style="italic" fill="#64748b">erbt alle Methoden von Geraet</text>
            </g>
            
            <!-- Unterklasse 2: Server -->
            <g transform="translate(390, 200)">
                <rect width="220" height="85" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="4" />
                <rect width="220" height="28" fill="#f1f5f9" stroke="#0284c7" stroke-width="2" rx="4" />
                <text x="110" y="19" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Server</text>
                
                <text x="10" y="46" font-family="monospace" font-size="11" fill="#334155">- rackEinheit: int</text>
                <text x="10" y="64" font-family="monospace" font-size="11" fill="#334155">- redundantesNetz: boolean</text>
                <line x1="0" y1="70" x2="220" y2="70" stroke="#cbd5e1" stroke-width="1.2" />
                <text x="10" y="80" font-family="monospace" font-size="10" font-style="italic" fill="#64748b">erbt alle Methoden von Geraet</text>
            </g>
            
            <!-- Vererbungslinien mit weißem Dreieck zur Oberklasse -->
            <line x1="180" y1="200" x2="180" y2="175" stroke="#1e293b" stroke-width="2" />
            <line x1="500" y1="200" x2="500" y2="175" stroke="#1e293b" stroke-width="2" />
            <line x1="180" y1="175" x2="500" y2="175" stroke="#1e293b" stroke-width="2" />
            <line x1="340" y1="175" x2="340" y2="155" stroke="#1e293b" stroke-width="2" marker-end="url(#uml-generalization)" />
            
            <!-- Fußzeile -->
            <rect x="50" y="295" width="580" height="35" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" rx="4" />
            <text x="340" y="316" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Symbol: Durchgezogene Linie mit weißer Dreiecksspitze ▷ zeigt immer auf die Oberklasse.</text>
        </svg>
        `;
    },

    // 2g. UML-Sequenzdiagramm (Lebenslinie, synchrone/asynchrone Aufrufe)
    getSequenzdiagrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
            <defs>
                <marker id="seq-sync-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <polygon points="0,0 10,5 0,10" fill="#1e293b" />
                </marker>
                <marker id="seq-reply-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="#2563eb" stroke-width="1.8" />
                </marker>
            </defs>
            <rect width="680" height="320" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">UML-Sequenzdiagramm: Lebenslinien &amp; Nachrichtenarten</text>
            
            <!-- Boxen oben (Objekte / Rollen) -->
            <g transform="translate(60, 45)">
                <rect width="120" height="35" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="4" />
                <text x="60" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">:Client (UI)</text>
                <line x1="60" y1="35" x2="60" y2="240" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
                <rect x="54" y="90" width="12" height="130" fill="#dbeafe" stroke="#0284c7" stroke-width="1.5" />
            </g>
            
            <g transform="translate(280, 45)">
                <rect width="120" height="35" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="4" />
                <text x="60" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">:AuthService</text>
                <line x1="60" y1="35" x2="60" y2="240" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
                <rect x="54" y="100" width="12" height="90" fill="#dbeafe" stroke="#0284c7" stroke-width="1.5" />
            </g>
            
            <g transform="translate(500, 45)">
                <rect width="120" height="35" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="4" />
                <text x="60" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">:Database</text>
                <line x1="60" y1="35" x2="60" y2="240" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
                <rect x="54" y="125" width="12" height="40" fill="#dbeafe" stroke="#0284c7" stroke-width="1.5" />
            </g>
            
            <!-- Synchroner Aufruf: Client -> AuthService -->
            <line x1="126" y1="145" x2="334" y2="145" stroke="#1e293b" stroke-width="2" marker-end="url(#seq-sync-arr)" />
            <text x="230" y="137" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">1: login(user, pw) ▶</text>
            
            <!-- Synchroner Aufruf: AuthService -> Database -->
            <line x1="346" y1="170" x2="554" y2="170" stroke="#1e293b" stroke-width="2" marker-end="url(#seq-sync-arr)" />
            <text x="450" y="162" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">1.1: findUser() ▶</text>
            
            <!-- Antwortnachricht: Database -> AuthService -->
            <line x1="554" y1="205" x2="346" y2="205" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3" marker-end="url(#seq-reply-arr)" />
            <text x="450" y="198" font-family="monospace" font-size="10.5" fill="#2563eb" text-anchor="middle">&lt;-- userData</text>
            
            <!-- Antwortnachricht: AuthService -> Client -->
            <line x1="334" y1="230" x2="126" y2="230" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3" marker-end="url(#seq-reply-arr)" />
            <text x="230" y="223" font-family="monospace" font-size="10.5" fill="#2563eb" text-anchor="middle">&lt;-- jwtToken</text>
            
            <!-- Erklärungskasten -->
            <rect x="40" y="260" width="600" height="48" fill="#f0fdf4" stroke="#86efac" stroke-width="1.2" rx="4" />
            <text x="340" y="280" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">Gefüllte Spitze (▶): Synchron (blockierend) | Gestrichelt mit offener Spitze: Rückgabe (Return)</text>
            <text x="340" y="296" font-family="sans-serif" font-size="10.5" fill="#166534" text-anchor="middle">Offene Spitze (→): Asynchron (nicht-blockierend) | Vertikaler Balken: Ausführungsfokus (Activation Bar)</text>
        </svg>
        `;
    },

    // 2h. UML-Zustandsdiagramm (State Machine)
    getZustandsdiagrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" width="100%" height="100%">
            <defs>
                <marker id="sm-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <polygon points="0,0 10,5 0,10" fill="#1e293b" />
                </marker>
            </defs>
            <rect width="680" height="280" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">UML-Zustandsdiagramm (State Machine): Ticket-Lifecycle</text>
            
            <!-- Startzustand -->
            <circle cx="50" cy="110" r="12" fill="#0f172a" />
            <line x1="62" y1="110" x2="110" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#sm-arr)" />
            <text x="86" y="100" font-family="sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">erfassen()</text>
            
            <!-- Zustand 1: Neu -->
            <g transform="translate(115, 80)">
                <rect width="110" height="60" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="10" />
                <text x="55" y="35" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">Neu</text>
            </g>
            
            <!-- Transition Neu -> In Bearbeitung -->
            <line x1="225" y1="110" x2="315" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#sm-arr)" />
            <text x="270" y="88" font-family="monospace" font-size="9.5" font-weight="bold" fill="#7c3aed" text-anchor="middle">zuweisen [Support verfügbar]</text>
            <text x="270" y="103" font-family="monospace" font-size="9.5" font-weight="bold" fill="#059669" text-anchor="middle">/ sendeBestaetigung()</text>
            
            <!-- Zustand 2: In Bearbeitung -->
            <g transform="translate(320, 80)">
                <rect width="130" height="60" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="10" />
                <text x="65" y="35" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">In Bearbeitung</text>
            </g>
            
            <!-- Transition In Bearbeitung -> Geschlossen -->
            <line x1="450" y1="110" x2="540" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#sm-arr)" />
            <text x="495" y="98" font-family="monospace" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">loesen()</text>
            
            <!-- Zustand 3: Geschlossen -->
            <g transform="translate(545, 80)">
                <rect width="110" height="60" fill="#ffffff" stroke="#059669" stroke-width="2" rx="10" />
                <text x="55" y="35" font-family="sans-serif" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">Geschlossen</text>
            </g>
            
            <!-- Transition Geschlossen -> Endzustand -->
            <line x1="600" y1="140" x2="600" y2="190" stroke="#1e293b" stroke-width="2" marker-end="url(#sm-arr)" />
            <circle cx="600" cy="215" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
            <circle cx="600" cy="215" r="8" fill="#0f172a" />
            
            <!-- Syntax-Erklärung -->
            <rect x="40" y="215" width="480" height="48" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" rx="4" />
            <text x="50" y="235" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Transitions-Syntax: Ereignis [Wächter / Guard] / Aktion (Effekt)</text>
            <text x="50" y="252" font-family="sans-serif" font-size="10.5" fill="#475569">Wächter [ ] ist boolesche Vorbedingung; Aktion / wird beim Zustandswechsel ausgeführt.</text>
        </svg>
        `;
    },

    // 2i. Programmablaufplan (PAP nach DIN 66001)
    getPapDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
            <defs>
                <marker id="pap-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <polygon points="0,0 10,5 0,10" fill="#1e293b" />
                </marker>
            </defs>
            <rect width="680" height="320" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Programmablaufplan (PAP nach DIN 66001)</text>
            
            <!-- Start (Grenzstelle: Oval) -->
            <g transform="translate(50, 60)">
                <rect width="110" height="45" rx="22.5" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
                <text x="55" y="27" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Start</text>
                <text x="55" y="60" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Grenzstelle (Oval)</text>
            </g>
            
            <line x1="160" y1="82" x2="200" y2="82" stroke="#1e293b" stroke-width="2" marker-end="url(#pap-arr)" />
            
            <!-- Operation (Rechteck: Anweisung) -->
            <g transform="translate(205, 60)">
                <rect width="140" height="45" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="3" />
                <text x="70" y="27" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">rabatt = 0</text>
                <text x="70" y="60" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Operation (Rechteck)</text>
            </g>
            
            <line x1="345" y1="82" x2="390" y2="82" stroke="#1e293b" stroke-width="2" marker-end="url(#pap-arr)" />
            
            <!-- Verzweigung (Raute: Bedingung) -->
            <g transform="translate(395, 45)">
                <polygon points="65,0 130,37 65,74 0,37" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
                <text x="65" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">betrag &gt;= 100?</text>
                <text x="65" y="90" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Verzweigung (Raute)</text>
            </g>
            
            <!-- Pfad Ja -->
            <line x1="525" y1="82" x2="570" y2="82" stroke="#1e293b" stroke-width="2" marker-end="url(#pap-arr)" />
            <text x="545" y="74" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">Ja</text>
            
            <rect x="575" y="60" width="80" height="45" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="3" />
            <text x="615" y="27" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">rabatt = 10%</text>
            
            <!-- Pfad Nein (nach unten) -->
            <line x1="460" y1="119" x2="460" y2="180" stroke="#1e293b" stroke-width="2" marker-end="url(#pap-arr)" />
            <text x="472" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Nein</text>
            
            <rect x="400" y="185" width="120" height="45" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="3" />
            <text x="460" y="212" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">rabatt = 0%</text>
            
            <!-- Erklärung DIN 66001 unten -->
            <rect x="40" y="260" width="600" height="42" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" rx="4" />
            <text x="340" y="285" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">DIN 66001 Standard: Oval = Start/Stopp | Rechteck = Anweisung | Raute = Verzweigung</text>
        </svg>
        `;
    },

    
    // 12. Elektrotechnik: Leistungsdreieck (Wirk-, Blind-, Scheinleistung & cos phi)
    getLeistungsdreieckSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 340" width="100%" height="100%">
            <rect width="680" height="340" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Elektrotechnik: Leistungsdreieck (Wirk-, Blind- &amp; Scheinleistung)</text>
            
            <!-- Horizontale Kathete: P (Wirkleistung in W / kW) -->
            <line x1="120" y1="230" x2="480" y2="230" stroke="#16a34a" stroke-width="4" />
            <text x="300" y="255" font-family="sans-serif" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">Wirkleistung P (in W / kW) ➔ verrichtet Nutzarbeit</text>
            
            <!-- Vertikale Kathete: Q (Blindleistung in var / kvar) -->
            <line x1="480" y1="230" x2="480" y2="70" stroke="#dc2626" stroke-width="4" />
            <text x="495" y="155" font-family="sans-serif" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="start">Blindleistung Q (in var / kvar)</text>
            
            <!-- Hypotenuse: S (Scheinleistung in VA / kVA) -->
            <line x1="120" y1="230" x2="480" y2="70" stroke="#2563eb" stroke-width="4" />
            <text x="270" y="135" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle" transform="rotate(-24, 270, 135)">Scheinleistung S (in VA / kVA)</text>
            
            <!-- Winkel phi Bogen -->
            <path d="M 170,230 A 50,50 0 0,0 165,210" fill="none" stroke="#d97706" stroke-width="2.5" />
            <text x="180" y="222" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">φ</text>
            
            <!-- Rechter Winkel Marker -->
            <rect x="460" y="210" width="20" height="20" fill="none" stroke="#64748b" stroke-width="1.5" />
            <circle cx="470" cy="220" r="2" fill="#64748b" />
            
            <!-- Formelkasten unten -->
            <rect x="40" y="270" width="600" height="55" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" rx="6" />
            <text x="340" y="292" font-family="monospace" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Formeln: S² = P² + Q²  |  cos φ = P / S (Leistungsfaktor)  |  P = S · cos φ</text>
            <text x="340" y="312" font-family="sans-serif" font-size="11" fill="#166534" text-anchor="middle">1-phasig: P = U · I · cos φ  |  3-phasig Drehstrom (400V): P = √3 · U · I · cos φ</text>
        </svg>
        `;
    },

    // 13. Rechenzentrum: PUE & DCiE Energiefluss
    getPueDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
            <rect width="680" height="320" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Rechenzentrum: PUE &amp; DCiE Energiefluss</text>
            
            <!-- Gesamtenergie Box links -->
            <g transform="translate(40, 60)">
                <rect width="180" height="180" fill="#ffffff" stroke="#0284c7" stroke-width="2.5" rx="6" />
                <rect width="180" height="35" fill="#dbeafe" stroke="#0284c7" stroke-width="2" rx="6" />
                <text x="90" y="23" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">Gesamtenergie E_Gesamt</text>
                
                <text x="90" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">100 % Stromaufnahme</text>
                <text x="90" y="110" font-family="monospace" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">PUE = E_Ges / E_IT</text>
                <text x="90" y="145" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Idealwert = 1,0</text>
                <text x="90" y="165" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Typisch = 1,2 - 1,7</text>
            </g>
            
            <!-- 1. IT-Infrastruktur (Nutzenergie grün) -->
            <g transform="translate(300, 50)">
                <rect width="330" height="60" fill="#ecfdf5" stroke="#10b981" stroke-width="2" rx="6" />
                <text x="15" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#047857">IT-Nutzenergie (E_IT)</text>
                <text x="15" y="48" font-family="sans-serif" font-size="11" fill="#065f46">Server, Storage, Switches, Router (verrichtet IT-Arbeit)</text>
                <text x="310" y="38" font-family="sans-serif" font-size="15" font-weight="bold" fill="#047857" text-anchor="end">~ 60 %</text>
            </g>
            
            <!-- 2. Klimatisierung & Kälte (rot) -->
            <g transform="translate(300, 120)">
                <rect width="330" height="55" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8" rx="6" />
                <text x="15" y="25" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#b91c1c">Kühlung &amp; Klimatisierung (Kältemaschinen)</text>
                <text x="15" y="44" font-family="sans-serif" font-size="11" fill="#991b1b">Klimageräte, Kaltwassersätze, Pumpen, Lüfter</text>
                <text x="310" y="36" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b91c1c" text-anchor="end">~ 30 %</text>
            </g>
            
            <!-- 3. USV & Gebäude (orange) -->
            <g transform="translate(300, 185)">
                <rect width="330" height="55" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8" rx="6" />
                <text x="15" y="25" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#b45309">USV-Verluste, Beleuchtung &amp; Gebäude</text>
                <text x="15" y="44" font-family="sans-serif" font-size="11" fill="#92400e">Wechselrichter-Verluste, Transformation, Licht</text>
                <text x="310" y="36" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309" text-anchor="end">~ 10 %</text>
            </g>
            
            <!-- Verbindungslinien -->
            <line x1="220" y1="150" x2="260" y2="150" stroke="#64748b" stroke-width="2" />
            <line x1="260" y1="80" x2="300" y2="80" stroke="#10b981" stroke-width="2.5" />
            <line x1="260" y1="147" x2="300" y2="147" stroke="#ef4444" stroke-width="2.5" />
            <line x1="260" y1="212" x2="300" y2="212" stroke="#f59e0b" stroke-width="2.5" />
            <line x1="260" y1="80" x2="260" y2="212" stroke="#64748b" stroke-width="2" />
            
            <!-- Fußzeile Formel -->
            <rect x="40" y="260" width="590" height="45" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="5" />
            <text x="335" y="280" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">DCiE = (1 / PUE) · 100 % = (E_IT / E_Gesamt) · 100 %</text>
            <text x="335" y="296" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">Beispiel: PUE 1,60 ➔ DCiE = 62,5 % Effizienz (37,5 % entfallen auf Infrastruktur/Kühlung)</text>
        </svg>
        `;
    },

    // 14. USV-Dauerwandler & Akkubank
    getUsvAkkuDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
            <defs>
                <marker id="usv-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <polygon points="0,0 10,5 0,10" fill="#1e3a8a" />
                </marker>
            </defs>
            <rect width="680" height="320" fill="#f8fafc" rx="8" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">USV-Dauerwandler (Online-USV VFI) &amp; Akkubank-Dimensionierung</text>
            
            <!-- 230V Netz links -->
            <g transform="translate(30, 80)">
                <rect width="90" height="60" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="4" />
                <text x="45" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">230V Netz</text>
                <text x="45" y="45" font-family="monospace" font-size="11" fill="#475569" text-anchor="middle">AC (50Hz)</text>
            </g>
            
            <line x1="120" y1="110" x2="160" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#usv-arr)" />
            
            <!-- Gleichrichter (AC -> DC) -->
            <g transform="translate(165, 80)">
                <rect width="110" height="60" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="4" />
                <text x="55" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Gleichrichter</text>
                <text x="55" y="45" font-family="sans-serif" font-size="11" fill="#1e40af" text-anchor="middle">AC ➔ DC</text>
            </g>
            
            <line x1="275" y1="110" x2="390" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#usv-arr)" />
            
            <!-- Akkubank unten -->
            <g transform="translate(230, 175)">
                <rect width="200" height="75" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="5" />
                <text x="100" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">🔋 Akkubank (48V / 50Ah)</text>
                <text x="100" y="42" font-family="monospace" font-size="11" fill="#92400e" text-anchor="middle">E = 48V · 50Ah = 2.400 Wh</text>
                <text x="100" y="62" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">Nutzbar (80% DoD) = 1.920 Wh</text>
            </g>
            <line x1="330" y1="110" x2="330" y2="175" stroke="#d97706" stroke-width="2.5" />
            
            <!-- Wechselrichter (DC -> AC) -->
            <g transform="translate(395, 80)">
                <rect width="110" height="60" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" rx="4" />
                <text x="55" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9" text-anchor="middle">Wechselrichter</text>
                <text x="55" y="45" font-family="sans-serif" font-size="11" fill="#5b21b6" text-anchor="middle">DC ➔ AC (η=85%)</text>
            </g>
            
            <line x1="505" y1="110" x2="545" y2="110" stroke="#1e293b" stroke-width="2" marker-end="url(#usv-arr)" />
            
            <!-- IT-Last rechts -->
            <g transform="translate(550, 80)">
                <rect width="100" height="60" fill="#ecfdf5" stroke="#10b981" stroke-width="2" rx="4" />
                <text x="50" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">IT-Last</text>
                <text x="50" y="45" font-family="monospace" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">P = 1.600 W</text>
            </g>
            
            <!-- Formelbox unten -->
            <rect x="30" y="265" width="620" height="45" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" rx="4" />
            <text x="340" y="283" font-family="monospace" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Autonomiezeit = (E_nutzbar / (P_Last / η)) · 60 min = (1.920 Wh / 1.882 W) · 60 min ≈ 61 min</text>
            <text x="340" y="300" font-family="sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">VFI-Prinzip (Voltage and Frequency Independent): Keine Umschaltzeit (0 ms), sauber sinusförmige Spannung.</text>
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
        
        // 1. Relationales Tabellenschema & Fremdschlüssel & ERD Fallstudien
        if (text.includes("ticketsystem") || (text.includes("ticket") && (text.includes("statuskommentar") || (text.includes("mitarbeiter") && text.includes("support"))))) {
            return VisualDiagrams.getTicketSystemErdRelationalSvg();
        }
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
        
        // 4. Klassendiagramm (inkl. spezifischer Vererbung, Aggregation & Komposition)
        if (text.includes("geraet") && (text.includes("workstation") || text.includes("server") || text.includes("generalisierung") || text.includes("vererbung"))) {
            return VisualDiagrams.getGeraetVererbungSvg();
        }
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
        
        // 7. Netzplan (Software-Rollout 8 Vorgänge, ERP 9 Vorgänge, Client 5 Vorgänge, CAD 6 Vorgänge, V1..V4 4 Vorgänge oder Standard)
        if (/\b(netzplan|kritischer pfad|faz|gesamtpuffer|din 69900)\b/i.test(text)) {
            if (text.includes("software-rollout") || text.includes("schulungsunterlagen") || text.includes("datenbank-migration") || text.includes("19 werktage") || (text.includes("8 vorgänge") && text.includes("rollout"))) {
                return VisualDiagrams.getRollout8NetzplanDiagramSvg();
            }
            if (text.includes("erp") || text.includes("9 vorgänge") || text.includes("customizing") || text.includes("prozessanalyse") || text.includes("server-installation")) {
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

        // 10b. Amortisationsdiagramm (Projektkosten vs. Ersparnisse / A4 Amortisationsdauer)
        if (text.includes("amortisation") && (text.includes("diagramm") || text.includes("projektkosten") || text.includes("ersparnis") || text.includes("monate") || text.includes("achse") || text.includes("a4"))) {
            return VisualDiagrams.getAmortisationDiagramSvg();
        }

        // 10c. Break-Even-Point & Gewinnschwellendiagramm
        if (text.includes("break-even") || text.includes("gewinnschwelle")) {
            return VisualDiagrams.getBreakEvenDiagramSvg();
        }

        // 10d. Kostenvergleichsrechnung (Kauf vs. Cloud)
        if (text.includes("kostenvergleich") && (text.includes("diagramm") || text.includes("cloud") || text.includes("kritisch"))) {
            return VisualDiagrams.getKostenvergleichDiagramSvg();
        }

        // 11. Handelskalkulation
        if (text.includes("handelskalkulation") || text.includes("schema-treppe") || text.includes("bezugspreis")) {
            return VisualDiagrams.getKalkulationTreeSvg();
        }

        // 11b. Elektrotechnik, PUE & USV Berechnungs-Diagramme
        if (text.includes("leistungsdreieck") || (text.includes("wirkleistung") && text.includes("blindleistung") && text.includes("scheinleistung"))) {
            return VisualDiagrams.getLeistungsdreieckSvg();
        }
        if (text.includes("pue") || text.includes("dcie") || (text.includes("rechenzentrum") && text.includes("effizienz"))) {
            return VisualDiagrams.getPueDiagramSvg();
        }
        if (text.includes("autonomiezeit") || (text.includes("usv") && (text.includes("akku") || text.includes("batteriebank") || text.includes("überbrückungszeit")))) {
            return VisualDiagrams.getUsvAkkuDiagramSvg();
        }

        // 12. UML Sequenzdiagramm
        if (/\b(sequenzdiagramm|lebenslinie|synchroner aufruf|asynchroner aufruf)\b/i.test(text)) {
            return VisualDiagrams.getSequenzdiagrammSvg();
        }

        // 13. UML Zustandsdiagramm
        if (/\b(zustandsdiagramm|state machine|transition|wächter|guard)\b/i.test(text)) {
            return VisualDiagrams.getZustandsdiagrammSvg();
        }

        // 14. PAP (Programmablaufplan)
        if (/\b(programmablaufplan|din 66001|grenzstelle)\b/i.test(text) || (text.includes("pap") && text.includes("operation"))) {
            return VisualDiagrams.getPapDiagramSvg();
        }

        return null;
    }

};

// Global export
if (typeof window !== "undefined") {
    window.VisualDiagrams = VisualDiagrams;
}
