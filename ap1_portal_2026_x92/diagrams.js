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

    // 3. ER-Diagramm (Entity-Relationship-Modell nach Chen: KUNDE, BESTELLUNG, ARTIKEL & Relationales 4-Tabellen-Schema)
    getErdDiagramSvg: function(showRelationalTables = true) {
        const height = showRelationalTables ? 520 : 220;
        const viewBox = showRelationalTables ? "0 0 960 520" : "0 0 960 220";

        const relationalSection = showRelationalTables ? `
            <!-- SECTION 2: RELATIONALE TABELLEN MIT 4 TABELLEN INKL. ZWISCHENTABELLE -->
            <rect x="20" y="248" width="920" height="262" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6" />
            <rect x="20" y="248" width="920" height="26" fill="#f0fdf4" rx="6" />
            <text x="35" y="266" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">2. LOGISCHES TABELLENSCHEMA: 4 TABELLEN (AUFLÖSUNG DER n:m-BEZIEHUNG DURCH ZWISCHENTABELLE 'tbl_Bestellposition')</text>

            <!-- TABELLE 1: tbl_Kunde (1-Seite) -->
            <g transform="translate(40, 285)">
                <rect width="185" height="155" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="4" />
                <rect width="185" height="26" fill="#2563eb" rx="4" />
                <text x="92" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_Kunde</text>
                
                <rect x="6" y="32" width="173" height="22" fill="#fef9c3" stroke="#f59e0b" stroke-width="1" rx="3" />
                <text x="12" y="47" font-family="monospace" font-size="10.5" font-weight="bold" fill="#854d0e">PK: KundenNr (INT)</text>
                
                <text x="12" y="75" font-family="monospace" font-size="10.5" fill="#334155">   Name (VARCHAR)</text>
                <text x="12" y="98" font-family="monospace" font-size="10.5" fill="#334155">   Ort (VARCHAR)</text>
                <text x="12" y="121" font-family="monospace" font-size="10.5" fill="#334155">   Strasse (VARCHAR)</text>
                <rect x="6" y="132" width="173" height="18" fill="#f8fafc" rx="2" />
                <text x="92" y="145" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">1-Seite (zu Bestellung)</text>
            </g>

            <!-- RELATIONSPFEIL 1: tbl_Kunde (1) -> tbl_Bestellung (n) -->
            <path d="M 225 330 C 245 330 245 330 260 330" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#erd-fk-arrow)" />
            <rect x="230" y="318" width="24" height="16" fill="#eff6ff" stroke="#2563eb" stroke-width="1" rx="2" />
            <text x="242" y="330" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e40af" text-anchor="middle">1:n</text>

            <!-- TABELLE 2: tbl_Bestellung (n-Seite zu Kunde, 1-Seite zu Position) -->
            <g transform="translate(265, 285)">
                <rect width="195" height="155" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="4" />
                <rect width="195" height="26" fill="#2563eb" rx="4" />
                <text x="97" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_Bestellung</text>
                
                <rect x="6" y="32" width="183" height="22" fill="#fef9c3" stroke="#f59e0b" stroke-width="1" rx="3" />
                <text x="12" y="47" font-family="monospace" font-size="10.5" font-weight="bold" fill="#854d0e">PK: BestellNr (INT)</text>
                
                <rect x="6" y="58" width="183" height="22" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" rx="3" />
                <text x="12" y="73" font-family="monospace" font-size="10.5" font-weight="bold" fill="#1d4ed8">FK: FK_KundenNr (INT)</text>
                
                <text x="12" y="102" font-family="monospace" font-size="10.5" fill="#334155">   BestellDatum (DATE)</text>
                <text x="12" y="123" font-family="monospace" font-size="10.5" fill="#334155">   Status (VARCHAR)</text>
                <rect x="6" y="132" width="183" height="18" fill="#f8fafc" rx="2" />
                <text x="97" y="145" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">n-Seite (Kunde) | 1-Seite (Pos)</text>
            </g>

            <!-- RELATIONSPFEIL 2: tbl_Bestellung (1) -> tbl_Bestellposition (n) -->
            <path d="M 460 330 C 480 330 480 330 495 330" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#erd-fk-arrow)" />
            <rect x="465" y="318" width="24" height="16" fill="#eff6ff" stroke="#2563eb" stroke-width="1" rx="2" />
            <text x="477" y="330" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e40af" text-anchor="middle">1:n</text>

            <!-- TABELLE 3: tbl_Bestellposition (ZWISCHENTABELLE FUER n:m AUFLOESUNG) -->
            <g transform="translate(500, 280)">
                <rect width="215" height="165" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5" rx="5" />
                <rect width="215" height="28" fill="#15803d" rx="4" />
                <text x="107" y="19" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_Bestellposition (Zwischentab.)</text>
                
                <!-- Zusammengesetzter Primärschlüssel (Composite Key) -->
                <rect x="6" y="34" width="203" height="22" fill="#fef08a" stroke="#ca8a04" stroke-width="1.2" rx="3" />
                <text x="10" y="49" font-family="monospace" font-size="10" font-weight="bold" fill="#713f12">PK+FK: FK_BestellNr (INT)</text>
                
                <rect x="6" y="60" width="203" height="22" fill="#fef08a" stroke="#ca8a04" stroke-width="1.2" rx="3" />
                <text x="10" y="75" font-family="monospace" font-size="10" font-weight="bold" fill="#713f12">PK+FK: FK_ArtikelNr (INT)</text>
                
                <!-- Beziehungsattribut Menge -->
                <rect x="6" y="86" width="203" height="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="3" />
                <text x="10" y="101" font-family="monospace" font-size="10" font-weight="bold" fill="#14532d">Attr:  Menge (INT)</text>
                
                <text x="10" y="125" font-family="monospace" font-size="10" fill="#334155">       Einzelpreis (DECIMAL)</text>
                <rect x="6" y="137" width="203" height="22" fill="#dcfce7" rx="2" />
                <text x="107" y="152" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#15803d" text-anchor="middle">★ Löst n:m auf (Composite PK)</text>
            </g>

            <!-- RELATIONSPFEIL 3: tbl_Artikel (1) -> tbl_Bestellposition (n) -->
            <path d="M 740 330 C 725 330 725 330 720 330" fill="none" stroke="#7c3aed" stroke-width="2" marker-end="url(#erd-fk-purple)" />
            <rect x="720" y="318" width="24" height="16" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1" rx="2" />
            <text x="732" y="330" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#5b21b6" text-anchor="middle">n:1</text>

            <!-- TABELLE 4: tbl_Artikel (1-Seite zu Position) -->
            <g transform="translate(745, 285)">
                <rect width="185" height="155" fill="#ffffff" stroke="#7c3aed" stroke-width="2" rx="4" />
                <rect width="185" height="26" fill="#7c3aed" rx="4" />
                <text x="92" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_Artikel</text>
                
                <rect x="6" y="32" width="173" height="22" fill="#fef9c3" stroke="#f59e0b" stroke-width="1" rx="3" />
                <text x="12" y="47" font-family="monospace" font-size="10.5" font-weight="bold" fill="#854d0e">PK: ArtikelNr (INT)</text>
                
                <text x="12" y="75" font-family="monospace" font-size="10.5" fill="#334155">   Bezeichnung (VARCHAR)</text>
                <text x="12" y="98" font-family="monospace" font-size="10.5" fill="#334155">   Preis (DECIMAL)</text>
                <text x="12" y="121" font-family="monospace" font-size="10.5" fill="#334155">   Lagerbestand (INT)</text>
                <rect x="6" y="132" width="173" height="18" fill="#f8fafc" rx="2" />
                <text x="92" y="145" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">1-Seite (zu Position)</text>
            </g>

            <!-- Unterer Merkkasten -->
            <rect x="35" y="450" width="890" height="48" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" rx="4" />
            <text x="480" y="468" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">IHK-Transformationsregeln vom ER-Modell ins relationale Schema:</text>
            <text x="480" y="486" font-family="sans-serif" font-size="10" fill="#475569" text-anchor="middle">1:n Beziehung: PK der 1-Seite (KundenNr) wandert als FK (FK_KundenNr) in die n-Seite (tbl_Bestellung). | n:m Beziehung: Erfordert IMMER eine Zwischentabelle (tbl_Bestellposition) mit zusammengesetztem PK aus beiden FKs + Beziehungsattribut (Menge).</text>
        ` : ``;

        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="${height}">
            <defs>
                <marker id="erd-fk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
                </marker>
                <marker id="erd-fk-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
                </marker>
            </defs>
            <rect width="960" height="${height}" fill="#f8fafc" rx="8" />
            
            <!-- SECTION 1: KONZEPTIONELLES MODELL CHEN-NOTATION (3 ENTITAETEN, 2 RAUTEN) -->
            <rect x="20" y="10" width="920" height="195" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6" />
            <rect x="20" y="10" width="920" height="26" fill="#eff6ff" rx="6" />
            <text x="35" y="28" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af">KONZEPTIONELLES DATENMODELL (CHEN-NOTATION): KUNDE (1) -[erteilt]- (n) BESTELLUNG (n) -[umfasst]- (m) ARTIKEL</text>

            <!-- ENTITAET 1: KUNDE -->
            <line x1="55" y1="52" x2="80" y2="80" stroke="#94a3b8" stroke-width="1.5" />
            <ellipse cx="50" cy="46" rx="42" ry="16" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
            <text x="50" y="50" font-family="sans-serif" font-size="10.5" font-weight="bold" text-decoration="underline" text-anchor="middle" fill="#0f172a">KundenNr</text>

            <line x1="120" y1="56" x2="110" y2="80" stroke="#94a3b8" stroke-width="1.5" />
            <ellipse cx="125" cy="46" rx="30" ry="16" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
            <text x="125" y="50" font-family="sans-serif" font-size="10.5" text-anchor="middle" fill="#0f172a">Name</text>

            <line x1="165" y1="60" x2="140" y2="80" stroke="#94a3b8" stroke-width="1.5" />
            <ellipse cx="178" cy="46" rx="26" ry="16" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
            <text x="178" y="50" font-family="sans-serif" font-size="10.5" text-anchor="middle" fill="#0f172a">Ort</text>

            <!-- KUNDE Box -->
            <rect x="50" y="80" width="115" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5" rx="5" />
            <text x="107" y="110" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e3a8a">KUNDE</text>

            <!-- BEZIEHUNG 1: erteilt (1:n) -->
            <line x1="165" y1="105" x2="230" y2="105" stroke="#1e293b" stroke-width="2" />
            <text x="185" y="98" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">1</text>

            <polygon points="275,80 320,105 275,130 230,105" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="275" y="110" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#92400e">erteilt</text>

            <line x1="320" y1="105" x2="385" y2="105" stroke="#1e293b" stroke-width="2" />
            <text x="365" y="98" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">n</text>

            <!-- ENTITAET 2: BESTELLUNG -->
            <line x1="390" y1="56" x2="410" y2="80" stroke="#94a3b8" stroke-width="1.5" />
            <ellipse cx="385" cy="46" rx="42" ry="16" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
            <text x="385" y="50" font-family="sans-serif" font-size="10.5" font-weight="bold" text-decoration="underline" text-anchor="middle" fill="#0f172a">BestellNr</text>

            <line x1="455" y1="58" x2="455" y2="80" stroke="#94a3b8" stroke-width="1.5" />
            <ellipse cx="455" cy="46" rx="34" ry="16" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
            <text x="455" y="50" font-family="sans-serif" font-size="10.5" text-anchor="middle" fill="#0f172a">Datum</text>

            <line x1="515" y1="58" x2="495" y2="80" stroke="#94a3b8" stroke-width="1.5" />
            <ellipse cx="522" cy="46" rx="32" ry="16" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
            <text x="522" y="50" font-family="sans-serif" font-size="10.5" text-anchor="middle" fill="#0f172a">Status</text>

            <!-- BESTELLUNG Box -->
            <rect x="385" y="80" width="130" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5" rx="5" />
            <text x="450" y="110" font-family="sans-serif" font-size="13.5" font-weight="bold" text-anchor="middle" fill="#1e3a8a">BESTELLUNG</text>

            <!-- BEZIEHUNG 2: umfasst (n:m) mit Beziehungsattribut MENGE -->
            <line x1="515" y1="105" x2="585" y2="105" stroke="#1e293b" stroke-width="2" />
            <text x="535" y="98" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">n</text>

            <!-- Beziehungsattribut Menge an Raute umfasst -->
            <line x1="630" y1="80" x2="630" y2="58" stroke="#059669" stroke-width="1.5" />
            <ellipse cx="630" cy="46" rx="35" ry="16" fill="#ecfdf5" stroke="#059669" stroke-width="2" />
            <text x="630" y="50" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#065f46" text-anchor="middle">Menge</text>

            <polygon points="630,80 675,105 630,130 585,105" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="630" y="110" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#92400e">umfasst</text>

            <line x1="675" y1="105" x2="745" y2="105" stroke="#1e293b" stroke-width="2" />
            <text x="725" y="98" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">m</text>

            <!-- ENTITAET 3: ARTIKEL -->
            <line x1="755" y1="58" x2="775" y2="80" stroke="#94a3b8" stroke-width="1.5" />
            <ellipse cx="750" cy="46" rx="42" ry="16" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
            <text x="750" y="50" font-family="sans-serif" font-size="10.5" font-weight="bold" text-decoration="underline" text-anchor="middle" fill="#0f172a">ArtikelNr</text>

            <line x1="820" y1="58" x2="815" y2="80" stroke="#94a3b8" stroke-width="1.5" />
            <ellipse cx="825" cy="46" rx="38" ry="16" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
            <text x="825" y="50" font-family="sans-serif" font-size="10.5" text-anchor="middle" fill="#0f172a">Bezeichnung</text>

            <line x1="885" y1="58" x2="860" y2="80" stroke="#94a3b8" stroke-width="1.5" />
            <ellipse cx="895" cy="46" rx="30" ry="16" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
            <text x="895" y="50" font-family="sans-serif" font-size="10.5" text-anchor="middle" fill="#0f172a">Preis</text>

            <!-- ARTIKEL Box -->
            <rect x="745" y="80" width="125" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5" rx="5" />
            <text x="807" y="110" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e3a8a">ARTIKEL</text>

            <!-- Erklaerung Chen -->
            <rect x="50" y="148" width="860" height="26" fill="#f8fafc" stroke="#e2e8f0" rx="4" />
            <text x="480" y="165" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Chen-Syntax: Rechtecke = Entitaeten | Rauten = Beziehungen (1:n, n:m) | Ovale = Attribute (unterstrichen = Primärschlüssel)</text>

            ${relationalSection}
        </svg>
        `;
    },

    // 3a. Krähenfuß-Notation (Martin-Notation) im ERD
    getCrowFootDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="100%">
            <rect width="860" height="380" fill="#f8fafc" rx="8" />
            
            <!-- Titel -->
            <rect x="20" y="12" width="820" height="32" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="430" y="33" font-family="sans-serif" font-size="13.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Krähenfuß-Notation (Martin-Notation / IE-Notation) im ER-Diagramm</text>

            <!-- Haupt-Beispiel: KUNDE || - - - - - - - o< BESTELLUNG -->
            <rect x="40" y="65" width="200" height="120" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="6" />
            <rect x="40" y="65" width="200" height="28" fill="#2563eb" rx="6" />
            <text x="140" y="84" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">KUNDE</text>
            <text x="55" y="112" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">PK: KundenNr (int)</text>
            <text x="55" y="132" font-family="monospace" font-size="11" fill="#475569">   Name (varchar)</text>
            <text x="55" y="152" font-family="monospace" font-size="11" fill="#475569">   Ort (varchar)</text>

            <rect x="620" y="65" width="200" height="120" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="6" />
            <rect x="620" y="65" width="200" height="28" fill="#2563eb" rx="6" />
            <text x="720" y="84" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">BESTELLUNG</text>
            <text x="635" y="112" font-family="monospace" font-size="11" font-weight="bold" fill="#0f172a">PK: BestellNr (int)</text>
            <text x="635" y="132" font-family="monospace" font-size="11" font-weight="bold" fill="#2563eb">FK: FK_KundenNr</text>
            <text x="635" y="152" font-family="monospace" font-size="11" fill="#475569">   Datum (date)</text>

            <!-- Verbindungslinie -->
            <line x1="240" y1="125" x2="620" y2="125" stroke="#1e293b" stroke-width="2.5" />
            
            <!-- Symbol links: || (Genau eins / 1..1) -->
            <line x1="270" y1="110" x2="270" y2="140" stroke="#dc2626" stroke-width="3" />
            <line x1="282" y1="110" x2="282" y2="140" stroke="#dc2626" stroke-width="3" />
            <rect x="250" y="148" width="80" height="22" fill="#fee2e2" stroke="#ef4444" rx="3" />
            <text x="290" y="163" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">|| = Genau 1 (1..1)</text>

            <!-- Beziehungsname -->
            <rect x="395" y="113" width="70" height="24" fill="#fef3c7" stroke="#d97706" rx="4" />
            <text x="430" y="129" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">erteilt</text>

            <!-- Symbol rechts: o< (Null bis viele / 0..*) -->
            <circle cx="580" cy="125" r="8" fill="#ffffff" stroke="#16a34a" stroke-width="2.5" />
            <line x1="595" y1="125" x2="620" y2="110" stroke="#16a34a" stroke-width="2.5" />
            <line x1="595" y1="125" x2="620" y2="125" stroke="#16a34a" stroke-width="2.5" />
            <line x1="595" y1="125" x2="620" y2="140" stroke="#16a34a" stroke-width="2.5" />
            <rect x="540" y="148" width="90" height="22" fill="#dcfce7" stroke="#22c55e" rx="3" />
            <text x="585" y="163" font-family="sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">o&lt; = 0 bis viele (0..*)</text>

            <!-- Legende der 4 Krähenfuß-Kardinalitäten -->
            <rect x="30" y="200" width="800" height="165" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6" />
            <rect x="30" y="200" width="800" height="26" fill="#f1f5f9" rx="6" />
            <text x="45" y="218" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a">ÜBERSICHT: DIE 4 KARDINALITÄTEN IN DER KRÄHENFUSS-NOTATION</text>

            <!-- Symbol 1: Genau eins || -->
            <g transform="translate(50, 238)">
                <rect width="170" height="115" fill="#f8fafc" stroke="#e2e8f0" rx="4" />
                <line x1="20" y1="35" x2="80" y2="35" stroke="#1e293b" stroke-width="2" />
                <line x1="55" y1="20" x2="55" y2="50" stroke="#dc2626" stroke-width="3" />
                <line x1="68" y1="20" x2="68" y2="50" stroke="#dc2626" stroke-width="3" />
                <text x="85" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">|| (Genau eins)</text>
                <text x="85" y="93" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Kardinalität: (1, 1)</text>
                <text x="85" y="107" font-family="sans-serif" font-size="9.5" fill="#16a34a" text-anchor="middle">Pflicht, exakt ein Partner</text>
            </g>

            <!-- Symbol 2: Null oder eins o| -->
            <g transform="translate(245, 238)">
                <rect width="170" height="115" fill="#f8fafc" stroke="#e2e8f0" rx="4" />
                <line x1="20" y1="35" x2="80" y2="35" stroke="#1e293b" stroke-width="2" />
                <circle cx="52" cy="35" r="7" fill="#ffffff" stroke="#2563eb" stroke-width="2.5" />
                <line x1="68" y1="20" x2="68" y2="50" stroke="#2563eb" stroke-width="3" />
                <text x="85" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">o| (Null oder eins)</text>
                <text x="85" y="93" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Kardinalität: (0, 1)</text>
                <text x="85" y="107" font-family="sans-serif" font-size="9.5" fill="#0284c7" text-anchor="middle">Optional, maximal eins</text>
            </g>

            <!-- Symbol 3: Eins bis viele |< -->
            <g transform="translate(440, 238)">
                <rect width="170" height="115" fill="#f8fafc" stroke="#e2e8f0" rx="4" />
                <line x1="20" y1="35" x2="80" y2="35" stroke="#1e293b" stroke-width="2" />
                <line x1="48" y1="20" x2="48" y2="50" stroke="#9333ea" stroke-width="3" />
                <line x1="60" y1="35" x2="80" y2="20" stroke="#9333ea" stroke-width="2.5" />
                <line x1="60" y1="35" x2="80" y2="35" stroke="#9333ea" stroke-width="2.5" />
                <line x1="60" y1="35" x2="80" y2="50" stroke="#9333ea" stroke-width="2.5" />
                <text x="85" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">|&lt; (Eins bis viele)</text>
                <text x="85" y="93" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Kardinalität: (1, n) / (1, *)</text>
                <text x="85" y="107" font-family="sans-serif" font-size="9.5" fill="#7c3aed" text-anchor="middle">Pflicht, mindestens eins</text>
            </g>

            <!-- Symbol 4: Null bis viele o< -->
            <g transform="translate(635, 238)">
                <rect width="170" height="115" fill="#f8fafc" stroke="#e2e8f0" rx="4" />
                <line x1="20" y1="35" x2="80" y2="35" stroke="#1e293b" stroke-width="2" />
                <circle cx="48" cy="35" r="7" fill="#ffffff" stroke="#16a34a" stroke-width="2.5" />
                <line x1="60" y1="35" x2="80" y2="20" stroke="#16a34a" stroke-width="2.5" />
                <line x1="60" y1="35" x2="80" y2="35" stroke="#16a34a" stroke-width="2.5" />
                <line x1="60" y1="35" x2="80" y2="50" stroke="#16a34a" stroke-width="2.5" />
                <text x="85" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">o&lt; (Null bis viele)</text>
                <text x="85" y="93" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Kardinalität: (0, n) / (0, *)</text>
                <text x="85" y="107" font-family="sans-serif" font-size="9.5" fill="#16a34a" text-anchor="middle">Optional, beliebig viele</text>
            </g>
        </svg>
        `;
    },

    // 3b. Entscheidungstabelle (DIN 66241) mit 3 Bedingungen und 8 Regeln (2^3)
    getEntscheidungstabelleSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 740 330" width="100%" height="100%">
            <rect width="740" height="330" fill="#f8fafc" rx="8" />
            
            <rect x="20" y="12" width="700" height="30" fill="#eff6ff" stroke="#bfdbfe" rx="5" />
            <text x="370" y="32" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Entscheidungstabelle (DIN 66241): 3 Bedingungen = 2^3 = 8 Regeln</text>

            <g transform="translate(20, 52)">
                <!-- Tabellenrahmen -->
                <rect width="700" height="230" fill="#ffffff" stroke="#1e293b" stroke-width="2" rx="4" />
                
                <!-- Spalten: Beschreibung (220px) + 8 Regeln (je 60px) -->
                <!-- Kopfzeile -->
                <rect width="700" height="30" fill="#1e3a8a" rx="4" />
                <text x="110" y="20" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Bedingungen / Aktionen</text>
                <text x="250" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R1</text>
                <text x="310" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R2</text>
                <text x="370" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R3</text>
                <text x="430" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R4</text>
                <text x="490" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R5</text>
                <text x="550" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R6</text>
                <text x="610" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R7</text>
                <text x="670" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R8</text>

                <!-- Zeile B1: Port bekannt? -->
                <rect y="30" width="700" height="28" fill="#f8fafc" />
                <text x="12" y="49" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#0f172a">B1: Port autorisiert?</text>
                <text x="250" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="310" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="370" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="430" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="490" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>
                <text x="550" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>
                <text x="610" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>
                <text x="670" y="49" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>

                <!-- Zeile B2: IP auf Whitelist? -->
                <rect y="58" width="700" height="28" fill="#ffffff" />
                <text x="12" y="77" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#0f172a">B2: IP auf Whitelist?</text>
                <text x="250" y="77" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="310" y="77" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="370" y="77" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>
                <text x="430" y="77" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>
                <text x="490" y="77" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="550" y="77" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="610" y="77" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>
                <text x="670" y="77" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>

                <!-- Zeile B3: Zertifikat gültig? -->
                <rect y="86" width="700" height="28" fill="#f8fafc" />
                <text x="12" y="105" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#0f172a">B3: TLS-Zertifikat gültig?</text>
                <text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="310" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>
                <text x="370" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="430" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>
                <text x="490" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="550" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>
                <text x="610" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">J</text>
                <text x="670" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">N</text>

                <!-- Trennbalken Aktionen -->
                <line x1="0" y1="114" x2="700" y2="114" stroke="#0f172a" stroke-width="2.5" />
                <rect y="115" width="700" height="24" fill="#e2e8f0" />
                <text x="12" y="131" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155">AKTIONEN</text>

                <!-- Aktion A1: Paket durchlassen -->
                <rect y="139" width="700" height="28" fill="#f0fdf4" />
                <text x="12" y="158" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#166534">A1: Paket erlauben (ALLOW)</text>
                <text x="250" y="158" font-family="sans-serif" font-size="14" font-weight="bold" fill="#166534" text-anchor="middle">X</text>
                <text x="310" y="158" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="370" y="158" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="430" y="158" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="490" y="158" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="550" y="158" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="610" y="158" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="670" y="158" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>

                <!-- Aktion A2: Paket blockieren -->
                <rect y="167" width="700" height="28" fill="#fef2f2" />
                <text x="12" y="186" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#991b1b">A2: Paket blockieren (DENY)</text>
                <text x="250" y="186" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="310" y="186" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">X</text>
                <text x="370" y="186" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">X</text>
                <text x="430" y="186" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">X</text>
                <text x="490" y="186" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">X</text>
                <text x="550" y="186" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">X</text>
                <text x="610" y="186" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">X</text>
                <text x="670" y="186" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">X</text>

                <!-- Aktion A3: Alarm im SIEM loggen -->
                <rect y="195" width="700" height="28" fill="#ffffff" />
                <text x="12" y="214" font-family="sans-serif" font-size="11" fill="#475569">A3: Security-Alarm loggen</text>
                <text x="250" y="214" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="310" y="214" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="370" y="214" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d97706" text-anchor="middle">X</text>
                <text x="430" y="214" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d97706" text-anchor="middle">X</text>
                <text x="490" y="214" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="550" y="214" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">-</text>
                <text x="610" y="214" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d97706" text-anchor="middle">X</text>
                <text x="670" y="214" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d97706" text-anchor="middle">X</text>

                <!-- Vertikale Trennstriche -->
                <line x1="220" y1="0" x2="220" y2="230" stroke="#1e293b" stroke-width="2" />
                <line x1="280" y1="0" x2="280" y2="230" stroke="#cbd5e1" stroke-width="1" />
                <line x1="340" y1="0" x2="340" y2="230" stroke="#cbd5e1" stroke-width="1" />
                <line x1="400" y1="0" x2="400" y2="230" stroke="#cbd5e1" stroke-width="1" />
                <line x1="460" y1="0" x2="460" y2="230" stroke="#cbd5e1" stroke-width="1" />
                <line x1="520" y1="0" x2="520" y2="230" stroke="#cbd5e1" stroke-width="1" />
                <line x1="580" y1="0" x2="580" y2="230" stroke="#cbd5e1" stroke-width="1" />
                <line x1="640" y1="0" x2="640" y2="230" stroke="#cbd5e1" stroke-width="1" />
            </g>

            <text x="370" y="315" font-family="sans-serif" font-size="11" font-weight="600" fill="#475569" text-anchor="middle">Formel für Vollständigkeit: Anzahl Regeln = 2^(Anzahl Bedingungen) = 2^3 = 8 Spalten</text>
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
    getMarktgleichgewichtSvg: function(isSolution = false) {
        const areaLabel = isSolution 
            ? "◄ Nachfrageüberhang bei 20 €: 400 Stück (600 - 200) ►"
            : "◄ Bereich bei 20 € (Angebot 200 vs. Nachfrage 600) ►";
        const footerLabel = isSolution
            ? "Preisbildung: Gleichgewichtspreis = 40 €, Marktumsatz = 40 € * 400 = 16.000 €"
            : "Volkswirtschaftliches Marktmodell: Preisbildung durch Angebot und Nachfrage";

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
            <text x="350" y="212" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">${areaLabel}</text>
            
            <text x="350" y="328" font-family="sans-serif" font-size="12" font-style="italic" fill="#475569" text-anchor="middle">${footerLabel}</text>
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
    getAmortisationDiagramSvg: function(projektkosten = 1310, ersparnisMonat = 200, maxMonate = 10, maxBetrag = 2000, title = "A4 Amortisationsdauer: Projektkosten und Ersparnisse", isSolution = false) {
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

        const pointText = isSolution 
            ? `🎯 Amortisation: ${amortMonate.toFixed(2).replace('.', ',')} Monate`
            : `🎯 Schnittpunkt S`;
        const xBadge = isSolution
            ? `<rect x="${xSchnitt - 38}" y="${y0 + 4}" width="76" height="20" fill="#16a34a" rx="4" />
               <text x="${xSchnitt}" y="${y0 + 18}" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">${amortMonate.toFixed(2).replace('.', ',')} Mon.</text>`
            : `<text x="${xSchnitt}" y="${y0 + 18}" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">S</text>`;

        const legendErsparnis = isSolution
            ? `Ersparnisse (${ersparnisMonat} € / Mon.)`
            : `Ersparnisse (kumuliert)`;

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
            ${xBadge}
            
            <!-- Beschriftung des Schnittpunkts -->
            <rect x="${xSchnitt - 130}" y="${ySchnitt - 35}" width="165" height="24" fill="#1e293b" rx="4" opacity="0.9" />
            <text x="${xSchnitt - 48}" y="${ySchnitt - 19}" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f8fafc" text-anchor="middle">${pointText}</text>

            <!-- Legende Box oben links -->
            <g transform="translate(${x0 + 15}, 40)">
                <rect width="180" height="52" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" rx="4" />
                <line x1="12" y1="18" x2="35" y2="18" stroke="#2563eb" stroke-width="3" />
                <text x="42" y="22" font-family="sans-serif" font-size="11" font-weight="600" fill="#1e293b">Projektkosten (${projektkosten.toLocaleString('de-DE')} €)</text>
                <line x1="12" y1="36" x2="35" y2="36" stroke="#dc2626" stroke-width="3" />
                <text x="42" y="40" font-family="sans-serif" font-size="11" font-weight="600" fill="#1e293b">${legendErsparnis}</text>
            </g>
        </svg>
        `;
    },

    // 10c. Klassisches Break-Even-Diagramm (Gewinnschwellendiagramm mit Fixkosten, Gesamtkosten & Erlös)
    // 10c. Klassisches Break-Even-Diagramm (Gewinnschwellendiagramm mit Fixkosten, Gesamtkosten & Erlös)
    getBreakEvenDiagramSvg: function(isSolution = false) {
        const xTick600 = isSolution
            ? `<text x="402" y="308" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">600 (BEP)</text>`
            : `<text x="402" y="308" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">600</text>`;

        const bepPointLabel = isSolution
            ? `🎯 Break-Even-Point: 600 Stück (30.000 €)`
            : `🎯 Schnittpunkt S`;

        const labelGraphA = isSolution ? "K_fix (15.000 €)" : "Graph A";
        const labelGraphB = isSolution ? "K(x) Gesamtkosten" : "Graph B";
        const labelGraphC = isSolution ? "E(x) Umsatzerlös" : "Graph C";
        const fixBlockText = isSolution ? "Fixkostenblock (K_fix = 15.000 €)" : "Kostenblock (15.000 €)";

        const bottomFormula = isSolution
            ? "Gewinnschwelle: x_BEP = K_fix / (p - k_var) = 15.000 € / (50 € - 25 €) = 600 Stück"
            : "Gewinnschwellenanalyse: Bestimmen Sie die Funktionsgraphen und berechnen Sie die Gewinnschwelle.";

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
            ${xTick600}
            <text x="506" y="308" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">800</text>
            <text x="610" y="308" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">1.000</text>

            <!-- Zonen -->
            <rect x="90" y="221" width="520" height="69" fill="rgba(148, 163, 184, 0.12)" />
            <text x="160" y="255" font-family="sans-serif" font-size="11" fill="#475569" font-style="italic">${fixBlockText}</text>

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
            <text x="615" y="225" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">${labelGraphA}</text>

            <!-- 2. Gesamtkosten K(x) = 15.000 + 25*x -->
            <line x1="90" y1="221" x2="610" y2="106" stroke="#2563eb" stroke-width="3" />
            <text x="615" y="108" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">${labelGraphB}</text>

            <!-- 3. Erlöskurve E(x) = 50*x -->
            <line x1="90" y1="290" x2="610" y2="60" stroke="#ea580c" stroke-width="3" />
            <text x="615" y="62" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">${labelGraphC}</text>

            <!-- BEP Schnittpunkt bei x = 600 Stk., y = 30.000 € -->
            <line x1="402" y1="152" x2="402" y2="290" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,4" />
            <line x1="402" y1="152" x2="90" y2="152" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,4" />
            <circle cx="402" cy="152" r="7" fill="#16a34a" stroke="#ffffff" stroke-width="2" />
            
            <rect x="300" y="125" width="200" height="24" fill="#0f172a" rx="4" opacity="0.9" />
            <text x="400" y="141" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f8fafc" text-anchor="middle">${bepPointLabel}</text>
            <text x="80" y="156" font-family="sans-serif" font-size="10" font-weight="bold" fill="#16a34a" text-anchor="end">30.000 €</text>

            <!-- Formel-Hinweis Box unten -->
            <rect x="50" y="338" width="580" height="18" fill="#f8fafc" />
            <text x="340" y="350" font-family="sans-serif" font-size="10.5" fill="#475569" font-style="italic" text-anchor="middle">${bottomFormula}</text>
        </svg>
        `;
    },

    // 10d. Kostenvergleichsrechnung (Kauf vs. Cloud-Miete / Make-or-Buy)
    getKostenvergleichDiagramSvg: function(isSolution = false) {
        const xTick15 = isSolution
            ? `<text x="415" y="306" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7c3aed" text-anchor="middle">15 (Kritisch)</text>`
            : `<text x="415" y="306" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">15</text>`;

        const kvPointLabel = isSolution
            ? `⚖️ Kritische Zeit: 15 Monate (22.500 €)`
            : `⚖️ Schnittpunkt S`;

        const shadedArea1 = isSolution
            ? "Cloud günstiger (Monat 0 bis 15)"
            : "Bereich 1 (Monat 0 bis 15)";
        const shadedArea2 = isSolution
            ? "Kauf günstiger (ab Monat 15)"
            : "Bereich 2 (ab Monat 15)";

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

            <!-- Ticks X: 0, 6, 12, 15, 18, 24 -->
            <text x="90" y="306" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">0</text>
            <text x="220" y="306" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">6</text>
            <text x="350" y="306" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">12</text>
            ${xTick15}
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
            <text x="210" y="210" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">${shadedArea1}</text>

            <polygon points="415,146 610,60 610,129" fill="rgba(37, 99, 235, 0.10)" />
            <text x="470" y="115" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">${shadedArea2}</text>

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
            <text x="400" y="134" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f8fafc" text-anchor="middle">${kvPointLabel}</text>
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

    // 10e. ERP-System: Ganzheitlicher Geschäftsprozess & Modul-Architektur
    getErpProcessDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="100%" height="100%">
            <defs>
                <marker id="erp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <polygon points="0,0 10,5 0,10" fill="#2563eb" />
                </marker>
                <marker id="erp-data-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <polygon points="0,0 10,5 0,10" fill="#64748b" />
                </marker>
            </defs>
            <rect width="680" height="360" fill="#f8fafc" rx="8" stroke="#cbd5e1" stroke-width="1" />
            <text x="340" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">ERP-System: Integrierte Modul-Architektur &amp; Order-to-Cash Prozess</text>
            
            <!-- Zentrale ERP-Datenbank in der Mitte -->
            <g transform="translate(265, 115)">
                <!-- Zylinder / Datenbank -->
                <path d="M 0 25 C 0 10, 150 10, 150 25 L 150 85 C 150 100, 0 100, 0 85 Z" fill="#e2e8f0" stroke="#475569" stroke-width="2" />
                <ellipse cx="75" cy="25" rx="75" ry="15" fill="#f1f5f9" stroke="#475569" stroke-width="2" />
                <text x="75" y="52" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">Zentrale ERP-Datenbank</text>
                <text x="75" y="68" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">(Single Source of Truth)</text>
                <text x="75" y="82" font-family="sans-serif" font-size="9" fill="#2563eb" font-weight="600" text-anchor="middle">Gemeinsame Datenbasis</text>
            </g>

            <!-- Modul 1: Vertrieb (Sales & Distribution / SD) - Oben Links -->
            <g transform="translate(30, 45)">
                <rect width="180" height="75" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="6" />
                <text x="90" y="20" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">1. Vertrieb (SD / Sales)</text>
                <text x="90" y="38" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">• Kundenanfrage &amp; Angebot</text>
                <text x="90" y="52" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">• Auftragserfassung</text>
                <text x="90" y="66" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#2563eb" text-anchor="middle">➔ Löst Prüfprozess aus</text>
            </g>

            <!-- Modul 2: Lager / Materialwirtschaft (MM) - Oben Rechts -->
            <g transform="translate(470, 45)">
                <rect width="180" height="75" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="6" />
                <text x="90" y="20" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">2. Materialwirtschaft (MM)</text>
                <text x="90" y="38" font-family="sans-serif" font-size="10" fill="#b45309" text-anchor="middle">• Verfügbarkeitsprüfung</text>
                <text x="90" y="52" font-family="sans-serif" font-size="10" fill="#b45309" text-anchor="middle">• Kommissionierung / Packen</text>
                <text x="90" y="66" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#d97706" text-anchor="middle">• Warenausgang buchen</text>
            </g>

            <!-- Modul 3: Finanzwesen (FI / Accounting) - Unten Rechts -->
            <g transform="translate(470, 205)">
                <rect width="180" height="75" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="6" />
                <text x="90" y="20" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">3. Finanzwesen (FI / CO)</text>
                <text x="90" y="38" font-family="sans-serif" font-size="10" fill="#15803d" text-anchor="middle">• Fakturierung (Rechnung)</text>
                <text x="90" y="52" font-family="sans-serif" font-size="10" fill="#15803d" text-anchor="middle">• Debitorenbuchhaltung</text>
                <text x="90" y="66" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#16a34a" text-anchor="middle">• Zahlungseingang buchen</text>
            </g>

            <!-- Modul 4: Produktion / Beschaffung (PP / Eink.) - Unten Links -->
            <g transform="translate(30, 205)">
                <rect width="180" height="75" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" rx="6" />
                <text x="90" y="20" font-family="sans-serif" font-size="12" font-weight="bold" fill="#5b21b6" text-anchor="middle">4. Produktion &amp; Einkauf (PP)</text>
                <text x="90" y="38" font-family="sans-serif" font-size="10" fill="#6d28d9" text-anchor="middle">• Fertigungsauftrag (Make)</text>
                <text x="90" y="52" font-family="sans-serif" font-size="10" fill="#6d28d9" text-anchor="middle">• Bestellvorschlag an Lieferant</text>
                <text x="90" y="66" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#7c3aed" text-anchor="middle">• Deckt Fehlbestände</text>
            </g>

            <!-- Prozesspfeile (Order-to-Cash Workflow im Uhrzeigersinn) -->
            <!-- 1 -> 2 (Vertrieb zu Lager) -->
            <line x1="210" y1="82" x2="460" y2="82" stroke="#2563eb" stroke-width="2.5" marker-end="url(#erp-arr)" />
            <text x="335" y="74" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">1. Kundenauftrag übermitteln ➔</text>

            <!-- 2 -> 3 (Lager zu Finanzen) -->
            <line x1="560" y1="120" x2="560" y2="195" stroke="#2563eb" stroke-width="2.5" marker-end="url(#erp-arr)" />
            <text x="615" y="160" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">2. Warenausgang ➔</text>

            <!-- 3 -> 4 (Finanzen zu Abschluss) -->
            <line x1="470" y1="245" x2="220" y2="245" stroke="#2563eb" stroke-width="2.5" marker-end="url(#erp-arr)" />
            <text x="345" y="240" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">◄ 3. Rechnungsstellung &amp; Zahlungsabgleich</text>

            <!-- Datenverbindungslinien zur Datenbank (gestrichelt) -->
            <line x1="180" y1="120" x2="270" y2="140" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
            <line x1="490" y1="120" x2="410" y2="140" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
            <line x1="490" y1="205" x2="410" y2="185" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
            <line x1="180" y1="205" x2="270" y2="185" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />

            <!-- Fußzeile / Nutzen -->
            <rect x="30" y="300" width="620" height="42" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" rx="4" />
            <text x="340" y="318" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">IHK Kernnutzen ERP: Vermeidung von Datenredundanzen, abteilungsübergreifende Echtzeit-Transparenz,</text>
            <text x="340" y="333" font-family="sans-serif" font-size="10" fill="#475569" text-anchor="middle">automatisierte Workflows und Beschleunigung der Durchlaufzeiten (Order-to-Cash Zyklus).</text>
        </svg>
        `;
    },

    // 11. Relationales ERD- & Tabellenschema-Diagramm (Chen + Relationale Tabellen)
    // 11. Relationales ERD- & Tabellenschema-Diagramm (Chen + Relationale Tabellen)
    getRelationalErdSvg: function(entA = "Server", entB = "Festplatte", rel = "enthält", card = "1:n", fkTable = "Festplatte", fkField = "FK_ServerID", reason = "Ein Server besitzt mehrere Festplatten, eine Festplatte ist fest in einem Server verbaut.") {
        const safeA = escapeDiagHtml(entA);
        const safeB = escapeDiagHtml(entB);
        const safeRel = escapeDiagHtml(rel);
        const safeCard = escapeDiagHtml(card);
        const safeReason = escapeDiagHtml(reason);

        // Attribut-Helper für praxisnahe Feldnamen
        const getEntityAttributes = (entityName) => {
            const e = entityName.toLowerCase();
            if (e.includes("kunde")) return { pk: "KundenNr (int)", f1: "Name (VARCHAR)", f2: "Ort / PLZ (VARCHAR)", f3: "Email (VARCHAR)" };
            if (e.includes("auftrag") && !e.includes("pos")) return { pk: "AuftragsNr (int)", f1: "AuftragsDatum (DATE)", f2: "Gesamtbetrag (DECIMAL)", f3: "Status (VARCHAR)" };
            if (e.includes("artikel")) return { pk: "ArtikelNr (int)", f1: "ArtikelName (VARCHAR)", f2: "Katalogpreis (DECIMAL)", f3: "Lagerbestand (INT)" };
            if (e.includes("bestellung")) return { pk: "BestellNr (int)", f1: "BestellDatum (DATE)", f2: "Gesamtbetrag (DECIMAL)", f3: "Status (VARCHAR)" };
            if (e.includes("abteilung")) return { pk: "AbteilungsID (int)", f1: "AbteilungsName (VARCHAR)", f2: "Leiter (VARCHAR)", f3: "Kostenstelle (VARCHAR)" };
            if (e.includes("mitarbeiter")) return { pk: "MitarbeiterID (int)", f1: "Nachname (VARCHAR)", f2: "Vorname (VARCHAR)", f3: "Gehalt (DECIMAL)" };
            if (e.includes("projekt")) return { pk: "ProjektID (int)", f1: "ProjektTitel (VARCHAR)", f2: "Budget (DECIMAL)", f3: "StartDatum (DATE)" };
            if (e.includes("entwickler")) return { pk: "EntwicklerID (int)", f1: "Name (VARCHAR)", f2: "Fachgebiet (VARCHAR)", f3: "Stundensatz (DECIMAL)" };
            if (e.includes("rechnung") && !e.includes("pos")) return { pk: "RechnungsNr (int)", f1: "RechnungsDatum (DATE)", f2: "Zahlungsziel (INT)", f3: "BetragNetto (DECIMAL)" };
            if (e.includes("position")) return { pk: "PositionsNr (int)", f1: "ArtikelMenge (INT)", f2: "Einzelpreis (DECIMAL)", f3: "Rabatt (DECIMAL)" };
            if (e.includes("student")) return { pk: "MatrikelNr (int)", f1: "Name (VARCHAR)", f2: "Studiengang (VARCHAR)", f3: "Fachsemester (INT)" };
            if (e.includes("vorlesung")) return { pk: "VorlesungsID (int)", f1: "Titel (VARCHAR)", f2: "Dozent (VARCHAR)", f3: "ECTS_Punkte (INT)" };
            if (e.includes("server")) return { pk: "ServerID (int)", f1: "Hostname (VARCHAR)", f2: "IP_Adresse (VARCHAR)", f3: "Standort_Rack (VARCHAR)" };
            if (e.includes("festplatte")) return { pk: "FestplattenID (int)", f1: "KapazitaetTiB (INT)", f2: "SerienNr (VARCHAR)", f3: "Typ_SSD_HDD (VARCHAR)" };
            if (e.includes("lizenz") || e.includes("software")) return { pk: "LizenzKey (VARCHAR)", f1: "SoftwareName (VARCHAR)", f2: "LizenzTyp (VARCHAR)", f3: "GueltigBis (DATE)" };
            if (e.includes("pc") || e.includes("arbeitsplatz")) return { pk: "PC_InventarNr (VARCHAR)", f1: "Modell (VARCHAR)", f2: "Betriebssystem (VARCHAR)", f3: "Raum (VARCHAR)" };
            if (e.includes("dienstwagen")) return { pk: "DienstwagenID (int)", f1: "Kennzeichen (VARCHAR)", f2: "Modell (VARCHAR)", f3: "Kilometerstand (INT)" };
            return { pk: `${entityName}_ID (int)`, f1: "Bezeichnung (VARCHAR)", f2: "Status (VARCHAR)", f3: "ErstelltAm (DATE)" };
        };

        const attrA = getEntityAttributes(entA);
        const attrB = getEntityAttributes(entB);

        // Fall 1: n:m BEZIEHUNG -> MUSS DREI TABELLEN DARSTELLEN!
        if (card === "n:m") {
            let cleanJunction = fkTable ? fkTable.replace(/\s*\(Zwischentabelle\)/i, "").trim() : `${safeA}_${safeB}`;
            if (!cleanJunction || cleanJunction === safeA || cleanJunction === safeB) {
                cleanJunction = `${safeA}_${safeB}`;
            }

            let fk1 = "FK_" + attrA.pk.split(" ")[0];
            let fk2 = "FK_" + attrB.pk.split(" ")[0];

            if (fkField && fkField.includes(" und ")) {
                const parts = fkField.split(/\s+und\s+/i);
                if (parts[0]) fk1 = parts[0].trim();
                if (parts[1]) fk2 = parts[1].trim();
            }

            return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 395" width="100%" height="100%">
            <defs>
                <marker id="erd-nm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
                </marker>
            </defs>
            <rect width="760" height="395" fill="#f8fafc" rx="8" />
            
            <!-- SECTION 1: Chen ER-Diagramm (Oben) -->
            <text x="380" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">1. Konzeptionelles Datenmodell (Chen ER-Notation: n:m)</text>
            
            <!-- Entität A -->
            <rect x="50" y="40" width="160" height="42" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" rx="6" />
            <text x="130" y="66" font-family="sans-serif" font-size="13.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">${safeA}</text>
            <text x="225" y="58" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">n</text>

            <!-- Beziehung (Raute) -->
            <polygon points="380,38 460,61 380,84 300,61" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="380" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">${safeRel}</text>

            <!-- Entität B -->
            <text x="535" y="58" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">m</text>
            <rect x="550" y="40" width="160" height="42" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" rx="6" />
            <text x="630" y="66" font-family="sans-serif" font-size="13.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">${safeB}</text>

            <!-- Verbindungslinien ERD -->
            <line x1="210" y1="61" x2="300" y2="61" stroke="#475569" stroke-width="2" />
            <line x1="460" y1="61" x2="550" y2="61" stroke="#475569" stroke-width="2" />

            <!-- Trennlinie -->
            <line x1="25" y1="98" x2="735" y2="98" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4" />

            <!-- SECTION 2: Relationales Datenbankschema mit 3 Tabellen (Unten) -->
            <text x="380" y="118" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f766e" text-anchor="middle">2. Relationales Tabellenschema: Auflösung der n:m-Beziehung via Zwischentabelle</text>
            
            <!-- Tabelle 1: Entität A (Links) -->
            <g transform="translate(25, 134)">
                <rect width="215" height="175" fill="#ffffff" stroke="#1e3a8a" stroke-width="1.5" rx="4" />
                <rect width="215" height="28" fill="#1e3a8a" rx="4" />
                <text x="107" y="19" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_${safeA}</text>
                
                <rect x="6" y="34" width="203" height="22" fill="#fef9c3" stroke="#f59e0b" stroke-width="1" rx="3" />
                <text x="12" y="49" font-family="monospace" font-size="10.5" font-weight="bold" fill="#854d0e">🔑 PK: ${attrA.pk}</text>
                
                <text x="12" y="76" font-family="monospace" font-size="10.5" fill="#334155">   ${attrA.f1}</text>
                <text x="12" y="98" font-family="monospace" font-size="10.5" fill="#334155">   ${attrA.f2}</text>
                <text x="12" y="120" font-family="monospace" font-size="10.5" fill="#334155">   ${attrA.f3}</text>
                
                <text x="107" y="160" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Elterntabelle (1-Seite)</text>
            </g>

            <!-- Tabelle 2: ZWISCHENTABELLE (Mitte) -->
            <g transform="translate(272, 134)">
                <rect width="216" height="175" fill="#ffffff" stroke="#6d28d9" stroke-width="2" rx="4" />
                <rect width="216" height="28" fill="#6d28d9" rx="4" />
                <text x="108" y="19" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_${cleanJunction}</text>
                
                <!-- Subtitle Badge -->
                <rect x="6" y="32" width="204" height="16" fill="#f3e8ff" rx="2" />
                <text x="108" y="44" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#6d28d9" text-anchor="middle">⭐ Zwischentabelle (n:m-Auflösung)</text>
                
                <!-- FK 1 -->
                <rect x="6" y="52" width="204" height="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1.2" rx="3" />
                <text x="10" y="67" font-family="monospace" font-size="10" font-weight="bold" fill="#166534">🔑🔗 PK,FK1: ${fk1}</text>
                
                <!-- FK 2 -->
                <rect x="6" y="78" width="204" height="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1.2" rx="3" />
                <text x="10" y="93" font-family="monospace" font-size="10" font-weight="bold" fill="#166534">🔑🔗 PK,FK2: ${fk2}</text>
                
                <text x="10" y="118" font-family="monospace" font-size="10" fill="#334155">   ZuordnungsDatum (DATE)</text>
                <text x="10" y="136" font-family="monospace" font-size="10" fill="#334155">   Status / Anmerkung</text>
                
                <text x="108" y="160" font-family="sans-serif" font-size="9" font-weight="bold" fill="#7c3aed" text-anchor="middle">✦ Verbund-PK (Composite Key)</text>
            </g>

            <!-- Tabelle 3: Entität B (Rechts) -->
            <g transform="translate(520, 134)">
                <rect width="215" height="175" fill="#ffffff" stroke="#047857" stroke-width="1.5" rx="4" />
                <rect width="215" height="28" fill="#047857" rx="4" />
                <text x="107" y="19" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_${safeB}</text>
                
                <rect x="6" y="34" width="203" height="22" fill="#fef9c3" stroke="#f59e0b" stroke-width="1" rx="3" />
                <text x="12" y="49" font-family="monospace" font-size="10.5" font-weight="bold" fill="#854d0e">🔑 PK: ${attrB.pk}</text>
                
                <text x="12" y="76" font-family="monospace" font-size="10.5" fill="#334155">   ${attrB.f1}</text>
                <text x="12" y="98" font-family="monospace" font-size="10.5" fill="#334155">   ${attrB.f2}</text>
                <text x="12" y="120" font-family="monospace" font-size="10.5" fill="#334155">   ${attrB.f3}</text>
                
                <text x="107" y="160" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">Elterntabelle (1-Seite)</text>
            </g>

            <!-- Verbindungspfeile von A und B in die Zwischentabelle -->
            <!-- Pfeil A -> Zwischentabelle FK1 -->
            <path d="M 240 178 C 255 178, 258 196, 269 196" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#erd-nm-arrow)" />
            <text x="254" y="172" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e3a8a">1:n</text>

            <!-- Pfeil B -> Zwischentabelle FK2 -->
            <path d="M 520 178 C 505 178, 502 222, 491 222" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#erd-nm-arrow)" />
            <text x="503" y="172" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857">1:m</text>

            <!-- Erkärungsbanner unten -->
            <g transform="translate(25, 320)">
                <rect width="710" height="58" fill="#faf5ff" stroke="#c084fc" stroke-width="1.5" rx="6" />
                <text x="355" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6b21a8" text-anchor="middle">🎯 IHK-Regel: Eine n:m-Beziehung kann relational NICHT direkt abgebildet werden!</text>
                <text x="355" y="42" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#7e22ce" text-anchor="middle">Sie MUSS über eine 3. Tabelle ('tbl_${cleanJunction}') in zwei 1:n-Beziehungen aufgelöst werden (FK1 + FK2 bilden den Verbundschlüssel)!</text>
            </g>
        </svg>
            `;
        }

        // Fall 2: 1:n und 1:1 BEZIEHUNGEN (2 Tabellen)
        const isOneToOne = card === "1:1";
        const cleanFkTable = fkTable ? fkTable.replace(/\s*\(Zwischentabelle\)/i, "").trim() : safeB;
        const fkTag = isOneToOne ? " [UNIQUE]" : "";
        const safeFkField = escapeDiagHtml(fkField || ("FK_" + attrA.pk.split(" ")[0]));

        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 395" width="100%" height="100%">
            <defs>
                <marker id="erd-rel-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a" />
                </marker>
            </defs>
            <rect width="760" height="395" fill="#f8fafc" rx="8" />
            
            <!-- SECTION 1: Chen ER-Diagramm (Oben) -->
            <text x="380" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">1. Konzeptionelles Datenmodell (Chen ER-Notation: ${safeCard})</text>
            
            <!-- Entität A -->
            <rect x="60" y="40" width="170" height="42" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" rx="6" />
            <text x="145" y="66" font-family="sans-serif" font-size="13.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">${safeA}</text>
            <text x="245" y="58" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">1</text>

            <!-- Beziehung (Raute) -->
            <polygon points="380,38 460,61 380,84 300,61" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="380" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">${safeRel}</text>

            <!-- Entität B -->
            <text x="515" y="58" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">${isOneToOne ? "1" : "n"}</text>
            <rect x="530" y="40" width="170" height="42" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" rx="6" />
            <text x="615" y="66" font-family="sans-serif" font-size="13.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">${safeB}</text>

            <!-- Verbindungslinien ERD -->
            <line x1="230" y1="61" x2="300" y2="61" stroke="#475569" stroke-width="2" />
            <line x1="460" y1="61" x2="530" y2="61" stroke="#475569" stroke-width="2" />

            <!-- Trennlinie -->
            <line x1="25" y1="98" x2="735" y2="98" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4" />

            <!-- SECTION 2: Relationales Datenbankschema (Unten) -->
            <text x="380" y="118" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f766e" text-anchor="middle">2. Relationales Tabellenschema &amp; Fremdschlüssel-Platzierung</text>
            
            <!-- Tabelle A (1-Seite) -->
            <g transform="translate(60, 134)">
                <rect width="270" height="175" fill="#ffffff" stroke="#1e3a8a" stroke-width="1.5" rx="4" />
                <rect width="270" height="28" fill="#1e3a8a" rx="4" />
                <text x="135" y="19" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_${safeA} (1-Seite / Elterntabelle)</text>
                
                <rect x="8" y="36" width="254" height="24" fill="#fef9c3" stroke="#f59e0b" stroke-width="1" rx="3" />
                <text x="16" y="52" font-family="monospace" font-size="11" font-weight="bold" fill="#854d0e">🔑 PK: ${attrA.pk}</text>
                
                <text x="16" y="82" font-family="monospace" font-size="11" fill="#334155">   ${attrA.f1}</text>
                <text x="16" y="106" font-family="monospace" font-size="11" fill="#334155">   ${attrA.f2}</text>
                <text x="16" y="130" font-family="monospace" font-size="11" fill="#334155">   ${attrA.f3}</text>
                
                <text x="135" y="160" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Primärschlüssel liefert Referenzwert</text>
            </g>

            <!-- Tabelle B (n-Seite oder 1-Seite bei 1:1) -->
            <g transform="translate(430, 134)">
                <rect width="270" height="175" fill="#ffffff" stroke="#047857" stroke-width="1.5" rx="4" />
                <rect width="270" height="28" fill="#047857" rx="4" />
                <text x="135" y="19" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">tbl_${safeB} (${isOneToOne ? "1-Seite" : "n-Seite / Kindtabelle"})</text>
                
                <rect x="8" y="36" width="254" height="24" fill="#fef9c3" stroke="#f59e0b" stroke-width="1" rx="3" />
                <text x="16" y="52" font-family="monospace" font-size="11" font-weight="bold" fill="#854d0e">🔑 PK: ${attrB.pk}</text>
                
                <text x="16" y="80" font-family="monospace" font-size="11" fill="#334155">   ${attrB.f1}</text>
                <text x="16" y="102" font-family="monospace" font-size="11" fill="#334155">   ${attrB.f2}</text>
                
                <!-- Highlight FK Row -->
                <rect x="8" y="115" width="254" height="26" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="3" />
                <text x="14" y="132" font-family="monospace" font-size="11" font-weight="bold" fill="#166534">🔗 FK: ${safeFkField}${fkTag}</text>
                
                <text x="135" y="160" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857" text-anchor="middle">Fremdschlüssel referenziert tbl_${safeA}</text>
            </g>

            <!-- Verbindungspfeil vom PK A zum FK B -->
            <path d="M 330 182 C 385 182, 375 262, 427 262" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="5,4" marker-end="url(#erd-rel-arrow)" />

            <!-- Erkärungsbanner unten -->
            <g transform="translate(40, 320)">
                <rect width="680" height="58" fill="${isOneToOne ? "#eff6ff" : "#f0fdf4"}" stroke="${isOneToOne ? "#93c5fd" : "#86efac"}" stroke-width="1.5" rx="6" />
                ${isOneToOne ? `
                <text x="340" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">🎯 IHK-Regel: Bei 1:1-Beziehung kann der Fremdschlüssel (FK) in einer der beiden Tabellen angelegt werden</text>
                <text x="340" y="42" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">(mit UNIQUE-Constraint, um 1:1 zu erzwingen). In der Praxis meist in der abhängigen Tabelle ('${cleanFkTable}').</text>
                ` : `
                <text x="340" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">🎯 IHK-Regel: Bei 1:n-Beziehung wandert der Primärschlüssel (PK) der 1-Seite ('${safeA}')</text>
                <text x="340" y="42" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857" text-anchor="middle">stets als Fremdschlüssel (FK) in die Tabelle der n-Seite ('${cleanFkTable}')!</text>
                `}
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

    
    // 5c. BPMN 2.0: Kollaborationsdiagramm mit Pools, Lanes & Nachrichtenflüssen
    getBpmnPoolLaneDiagramSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="100%">
            <defs>
                <marker id="bpmn-seq-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
                </marker>
                <marker id="bpmn-msg-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" />
                </marker>
                <marker id="bpmn-msg-start" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <circle cx="5" cy="5" r="3" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" />
                </marker>
            </defs>
            <rect width="900" height="480" fill="#f8fafc" rx="8" />

            <!-- POOL 1: KUNDE -->
            <rect x="30" y="25" width="840" height="110" fill="#ffffff" stroke="#334155" stroke-width="2" rx="4" />
            <rect x="30" y="25" width="40" height="110" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
            <text x="50" y="80" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle" transform="rotate(-90, 50, 80)">Pool: Anwender / Kunde</text>

            <!-- Pool 1 Start Event -->
            <circle cx="110" cy="80" r="18" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5" />
            <text x="110" y="115" font-family="sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Störung festgestellt</text>

            <line x1="128" y1="80" x2="165" y2="80" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />

            <!-- Pool 1 Task -->
            <rect x="165" y="55" width="135" height="50" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" rx="6" />
            <text x="232" y="84" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Support-Ticket senden</text>

            <!-- Pool 1 Task: Lösung bestätigen -->
            <rect x="660" y="55" width="125" height="50" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" rx="6" />
            <text x="722" y="84" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Lösung prüfen</text>

            <!-- Pool 1 End Event -->
            <line x1="785" y1="80" x2="815" y2="80" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />
            <circle cx="835" cy="80" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="3.5" />
            <text x="835" y="115" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Problem behoben</text>

            <!-- NACHRICHTENFLÜSSE (POOL 1 <-> POOL 2) -->
            <line x1="232" y1="105" x2="232" y2="200" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="5,4" marker-start="url(#bpmn-msg-start)" marker-end="url(#bpmn-msg-arr)" />
            <rect x="180" y="145" width="105" height="20" fill="#ffffff" stroke="#bae6fd" rx="3" />
            <text x="232" y="159" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Ticket-Meldung</text>

            <line x1="722" y1="200" x2="722" y2="105" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="5,4" marker-start="url(#bpmn-msg-start)" marker-end="url(#bpmn-msg-arr)" />
            <rect x="670" y="145" width="105" height="20" fill="#ffffff" stroke="#bae6fd" rx="3" />
            <text x="722" y="159" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Status: Behoben</text>

            <!-- POOL 2: IT-SYSTEMHAUS MIT 2 LANES -->
            <rect x="30" y="195" width="840" height="255" fill="#ffffff" stroke="#334155" stroke-width="2" rx="4" />
            <rect x="30" y="195" width="35" height="255" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
            <text x="48" y="322" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle" transform="rotate(-90, 48, 322)">Pool: IT-Service-Management</text>

            <!-- Lane 1: 1st-Level -->
            <rect x="65" y="195" width="28" height="125" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
            <text x="79" y="258" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle" transform="rotate(-90, 79, 258)">Lane: 1st-Level</text>

            <!-- Lane 2: 2nd-Level -->
            <line x1="65" y1="320" x2="870" y2="320" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6,4" />
            <rect x="65" y="320" width="28" height="130" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
            <text x="79" y="385" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle" transform="rotate(-90, 79, 385)">Lane: 2nd-Level</text>

            <!-- Lane 1 Inbound Message Start Event -->
            <circle cx="130" cy="255" r="16" fill="#ffffff" stroke="#16a34a" stroke-width="2" />
            <circle cx="130" cy="255" r="12" fill="#dcfce7" stroke="#16a34a" stroke-width="1" />
            <path d="M 124 250 L 136 250 L 130 255 Z M 124 250 L 124 259 L 136 259 L 136 250" fill="none" stroke="#166534" stroke-width="1.2" />
            <text x="130" y="285" font-family="sans-serif" font-size="9" font-weight="bold" fill="#166534" text-anchor="middle">Ticket empfangen</text>

            <line x1="146" y1="255" x2="180" y2="255" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />

            <!-- Task: Qualifizieren -->
            <rect x="180" y="230" width="125" height="50" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="6" />
            <text x="242" y="254" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Störung prüfen &amp;</text>
            <text x="242" y="268" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">klassifizieren</text>

            <line x1="305" y1="255" x2="340" y2="255" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />

            <!-- XOR Gateway 1 -->
            <polygon points="360,235 380,255 360,275 340,255" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="360" y="261" font-family="sans-serif" font-size="17" font-weight="bold" fill="#b45309" text-anchor="middle">✕</text>
            <text x="360" y="222" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">1st-Level lösbar?</text>

            <!-- XOR Pfad Ja -->
            <line x1="380" y1="255" x2="430" y2="255" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />
            <text x="400" y="247" font-family="sans-serif" font-size="10" font-weight="bold" fill="#16a34a">[Ja]</text>
            <rect x="430" y="230" width="115" height="50" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="6" />
            <text x="487" y="254" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Remote-Lösung</text>
            <text x="487" y="268" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">anwenden</text>

            <!-- XOR Pfad Nein: Eskalation an 2nd-Level -->
            <line x1="360" y1="275" x2="360" y2="385" stroke="#1e293b" stroke-width="2" />
            <line x1="360" y1="385" x2="395" y2="385" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />
            <text x="368" y="305" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">[Nein]</text>

            <!-- AND Gateway Split in 2nd-Level -->
            <polygon points="415,365 435,385 415,405 395,385" fill="#ecfeff" stroke="#0891b2" stroke-width="2" />
            <text x="415" y="392" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0e7490" text-anchor="middle">+</text>
            <text x="415" y="355" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0e7490" text-anchor="middle">Parallele Aktionen</text>

            <!-- AND Zweig 1 -->
            <line x1="415" y1="365" x2="415" y2="350" stroke="#1e293b" stroke-width="2" />
            <line x1="415" y1="350" x2="465" y2="350" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />
            <rect x="465" y="330" width="130" height="42" fill="#ffffff" stroke="#0891b2" stroke-width="1.8" rx="6" />
            <text x="530" y="355" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0e7490" text-anchor="middle">Ersatzteil disponieren</text>

            <!-- AND Zweig 2 -->
            <line x1="415" y1="405" x2="415" y2="420" stroke="#1e293b" stroke-width="2" />
            <line x1="415" y1="420" x2="465" y2="420" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />
            <rect x="465" y="400" width="130" height="42" fill="#ffffff" stroke="#0891b2" stroke-width="1.8" rx="6" />
            <text x="530" y="425" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0e7490" text-anchor="middle">Vor-Ort-Einsatz planen</text>

            <!-- AND Gateway Join -->
            <line x1="595" y1="350" x2="635" y2="350" stroke="#1e293b" stroke-width="2" />
            <line x1="635" y1="350" x2="635" y2="365" stroke="#1e293b" stroke-width="2" />
            <line x1="595" y1="420" x2="635" y2="420" stroke="#1e293b" stroke-width="2" />
            <line x1="635" y1="420" x2="635" y2="405" stroke="#1e293b" stroke-width="2" />
            <line x1="635" y1="385" x2="655" y2="385" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />

            <polygon points="675,365 695,385 675,405 655,385" fill="#ecfeff" stroke="#0891b2" stroke-width="2" />
            <text x="675" y="392" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0e7490" text-anchor="middle">+</text>

            <!-- Task: Vor Ort entstören -->
            <line x1="695" y1="385" x2="720" y2="385" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />
            <rect x="720" y="360" width="125" height="50" fill="#ffffff" stroke="#0891b2" stroke-width="2" rx="6" />
            <text x="782" y="384" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0e7490" text-anchor="middle">Hardware vor Ort</text>
            <text x="782" y="398" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0e7490" text-anchor="middle">austauschen</text>

            <!-- Zusammenführung zur Lösung -->
            <line x1="545" y1="255" x2="706" y2="255" stroke="#1e293b" stroke-width="2" />
            <line x1="782" y1="360" x2="782" y2="255" stroke="#1e293b" stroke-width="2" />
            <line x1="782" y1="255" x2="738" y2="255" stroke="#1e293b" stroke-width="2" />
            <circle cx="722" cy="255" r="14" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
            <path d="M 716 250 L 728 250 L 722 255 Z M 716 250 L 716 259 L 728 259 L 728 250" fill="#0284c7" stroke="#0284c7" stroke-width="1.2" />

            <circle cx="830" cy="255" r="16" fill="#fee2e2" stroke="#dc2626" stroke-width="3" />
            <line x1="736" y1="255" x2="814" y2="255" stroke="#1e293b" stroke-width="2" marker-end="url(#bpmn-seq-arr)" />
            <text x="830" y="285" font-family="sans-serif" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">Ticket gelöst</text>

            <text x="450" y="470" font-family="sans-serif" font-size="12" font-style="italic" fill="#64748b" text-anchor="middle">BPMN 2.0: 2 Pools, Lanes (1st/2nd Level), gestrichelte Nachrichtenflüsse (Message Flow) &amp; Gateways (XOR ✕ / AND +)</text>
        </svg>
        `;
    },

    // 5d. UML 2.5: Aktivitätsdiagramm (Activity Diagram)
    getUmlAktivitaetsdiagrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 520" width="100%" height="100%">
            <defs>
                <marker id="act-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
                </marker>
            </defs>
            <rect width="860" height="520" fill="#f8fafc" rx="8" />

            <!-- Title -->
            <text x="430" y="28" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">UML 2.5 Aktivitätsdiagramm: Bestellprüfung &amp; Parallele Auftragsabwicklung</text>
            <text x="430" y="46" font-family="sans-serif" font-size="11" font-style="italic" fill="#64748b" text-anchor="middle">Mit Swimlanes, Verzweigung (Decision [Guards]), Parallelisierung (Fork) &amp; Synchronisation (Join)</text>

            <!-- Partition 1: Kunde / Frontend (x: 40 to 320) -->
            <rect x="40" y="60" width="280" height="430" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" />
            <rect x="40" y="60" width="280" height="30" fill="#e0f2fe" stroke="#94a3b8" stroke-width="1.5" />
            <text x="180" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Partition: Kunde / Onlineshop</text>

            <!-- Partition 2: ERP / Backend (x: 320 to 820) -->
            <rect x="320" y="60" width="500" height="430" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" />
            <rect x="320" y="60" width="500" height="30" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
            <text x="570" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Partition: ERP- &amp; Logistiksystem</text>

            <!-- 1. Initial Node -->
            <circle cx="180" cy="115" r="13" fill="#0f172a" stroke="#0f172a" stroke-width="1" />
            <text x="180" y="142" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Startknoten</text>

            <line x1="180" y1="128" x2="180" y2="160" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />

            <!-- 2. Action: Bestellung aufgeben -->
            <rect x="105" y="160" width="150" height="46" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" rx="16" />
            <text x="180" y="188" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Bestellung aufgeben</text>

            <!-- Flow to ERP -->
            <line x1="255" y1="183" x2="380" y2="183" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />

            <!-- 3. Action: Bonitätsprüfung -->
            <rect x="380" y="160" width="150" height="46" fill="#f8fafc" stroke="#475569" stroke-width="2" rx="16" />
            <text x="455" y="183" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">Bonität &amp; Bestand</text>
            <text x="455" y="196" font-family="sans-serif" font-size="10" fill="#475569" text-anchor="middle">automatisiert prüfen</text>

            <line x1="455" y1="206" x2="455" y2="235" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />

            <!-- 4. Decision Node -->
            <polygon points="455,235 480,255 455,275 430,255" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="495" y="250" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309">Decision Node</text>

            <!-- Branch 1: [Prüfung fehlgeschlagen] -->
            <line x1="430" y1="255" x2="270" y2="255" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />
            <text x="350" y="247" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">[Prüfung fehlgeschlagen]</text>

            <rect x="115" y="235" width="155" height="42" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8" rx="14" />
            <text x="192" y="260" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Ablehnung mitteilen</text>

            <line x1="192" y1="277" x2="192" y2="310" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />
            <circle cx="192" cy="325" r="14" fill="#ffffff" stroke="#dc2626" stroke-width="2" />
            <circle cx="192" cy="325" r="8" fill="#dc2626" />
            <text x="192" y="352" font-family="sans-serif" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">Ablauf beendet</text>

            <!-- Branch 2: [Prüfung positiv] -->
            <line x1="455" y1="275" x2="455" y2="305" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />
            <text x="465" y="293" font-family="sans-serif" font-size="10" font-weight="bold" fill="#16a34a">[Prüfung positiv]</text>

            <!-- 5. FORK NODE -->
            <rect x="360" y="305" width="380" height="8" fill="#0f172a" rx="3" />
            <text x="748" y="313" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Fork (Gabelung)</text>

            <!-- Parallel Branch A -->
            <line x1="430" y1="313" x2="430" y2="340" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />
            <rect x="360" y="340" width="145" height="42" fill="#ecfdf5" stroke="#059669" stroke-width="1.8" rx="14" />
            <text x="432" y="365" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">Artikel kommissionieren</text>

            <!-- Parallel Branch B -->
            <line x1="670" y1="313" x2="670" y2="340" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />
            <rect x="600" y="340" width="145" height="42" fill="#ecfeff" stroke="#0891b2" stroke-width="1.8" rx="14" />
            <text x="672" y="365" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0e7490" text-anchor="middle">Rechnung generieren</text>

            <!-- 6. JOIN NODE -->
            <line x1="430" y1="382" x2="430" y2="408" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />
            <line x1="670" y1="382" x2="670" y2="408" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />

            <rect x="360" y="408" width="380" height="8" fill="#0f172a" rx="3" />
            <text x="748" y="416" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Join (Zusammenführung)</text>

            <!-- After Join -> Versand -->
            <line x1="550" y1="416" x2="550" y2="440" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />
            <rect x="475" y="440" width="150" height="42" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" rx="14" />
            <text x="550" y="465" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Ware versenden</text>

            <!-- Final Node -->
            <line x1="625" y1="461" x2="675" y2="461" stroke="#1e293b" stroke-width="2" marker-end="url(#act-arr)" />
            <circle cx="695" cy="461" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
            <circle cx="695" cy="461" r="8" fill="#0f172a" />
            <text x="695" y="490" font-family="sans-serif" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle">Activity Final</text>
        </svg>
        `;
    },

    getErenMichiTerminvergabeAktivitaetSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 880" width="100%" height="100%">
            <defs>
                <marker id="eren-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
                </marker>
                <marker id="eren-arr-err" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
                </marker>
            </defs>
            <rect width="920" height="880" fill="#f8fafc" rx="8" />

            <!-- Header -->
            <text x="460" y="28" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">UML-Aktivitätsdiagramm: Prozess zur Terminvergabe (KFZ-Meisterbetrieb Eren-Michi)</text>
            <text x="460" y="48" font-family="sans-serif" font-size="11" font-style="italic" fill="#64748b" text-anchor="middle">IHK-Originalaufgabe: Vollständige Beschriftung der 11 Elemente mit Partitionen (Swimlanes), Verzweigung &amp; Parallelisierung</text>

            <!-- Swimlane 1: Anwender (x: 40 to 320) -->
            <rect x="40" y="65" width="280" height="790" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" />
            <rect x="40" y="65" width="280" height="32" fill="#eff6ff" stroke="#94a3b8" stroke-width="1.5" />
            <text x="180" y="87" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Anwender</text>

            <!-- Swimlane 2: Terminvergabesystem (x: 320 to 880) -->
            <rect x="320" y="65" width="560" height="790" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" />
            <rect x="320" y="65" width="560" height="32" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
            <text x="600" y="87" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">Terminvergabesystem</text>

            <!-- Initial Node (Startknoten) in Anwender -->
            <circle cx="180" cy="120" r="13" fill="#0f172a" stroke="#0f172a" stroke-width="1" />
            <text x="180" y="145" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Startknoten</text>
            <line x1="180" y1="133" x2="180" y2="165" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Initial Action: Aufruf Terminreservierung (Anwender) -->
            <rect x="95" y="165" width="170" height="42" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8" rx="16" />
            <text x="180" y="191" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">Aufruf Terminreservierung</text>

            <!-- Transition to Element 1 (System) -->
            <line x1="265" y1="186" x2="420" y2="186" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Element 1: Anzeige aller verfügbaren Terminarten (System) -->
            <rect x="420" y="162" width="340" height="48" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" rx="18" />
            <rect x="426" y="172" width="28" height="20" fill="#0284c7" rx="4" />
            <text x="440" y="186" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
            <text x="590" y="191" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Anzeige aller verfügbaren Terminarten</text>

            <!-- Transition from 1 to 2 (Anwender) -->
            <path d="M 420 195 L 300 195 L 300 245 L 265 245" fill="none" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Element 2: Gewünschte Terminart auswählen (Anwender) -->
            <rect x="75" y="225" width="190" height="48" fill="#eff6ff" stroke="#2563eb" stroke-width="2" rx="18" />
            <rect x="81" y="235" width="28" height="20" fill="#2563eb" rx="4" />
            <text x="95" y="249" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
            <text x="180" y="248" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Gewünschte Terminart</text>
            <text x="180" y="262" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">auswählen</text>

            <!-- Transition from 2 to Merge Node -->
            <path d="M 265 255 L 535 255 L 535 285" fill="none" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Merge Node (Zusammenführung Raute) -->
            <polygon points="535,285 555,302 535,320 515,302" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="570" y="306" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b45309">Merge-Knoten (Zusammenführung)</text>

            <!-- Transition from Merge to 3 -->
            <line x1="535" y1="320" x2="535" y2="340" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Element 3: Ersten freien Termin suchen (System) -->
            <rect x="385" y="340" width="300" height="48" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" rx="18" />
            <rect x="391" y="350" width="28" height="20" fill="#0284c7" rx="4" />
            <text x="405" y="364" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
            <text x="545" y="369" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Ersten freien Termin suchen</text>

            <!-- Transition from 3 to 5 -->
            <line x1="535" y1="388" x2="535" y2="415" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Element 5: Freie Termine (und Monat) anzeigen (System) -->
            <rect x="385" y="415" width="300" height="48" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" rx="18" />
            <rect x="391" y="425" width="28" height="20" fill="#0284c7" rx="4" />
            <text x="405" y="439" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">5</text>
            <text x="545" y="444" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Freie Termine &amp; Monat anzeigen</text>

            <!-- Transition from 5 to 4 (Anwender) -->
            <path d="M 385 439 L 265 439" fill="none" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Element 4: Freien Termin auswählen (Anwender) -->
            <rect x="75" y="415" width="190" height="48" fill="#eff6ff" stroke="#2563eb" stroke-width="2" rx="18" />
            <rect x="81" y="425" width="28" height="20" fill="#2563eb" rx="4" />
            <text x="95" y="439" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">4</text>
            <text x="180" y="444" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Freien Termin auswählen</text>

            <!-- Transition from 4 to 6 (System) -->
            <path d="M 180 463 L 180 500 L 385 500" fill="none" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Element 6: Termin buchen bzw. blockieren (System) -->
            <rect x="385" y="480" width="300" height="48" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" rx="18" />
            <rect x="391" y="490" width="28" height="20" fill="#0284c7" rx="4" />
            <text x="405" y="504" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">6</text>
            <text x="545" y="509" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Termin buchen bzw. blockieren</text>

            <!-- Transition from 6 to Decision Node -->
            <line x1="535" y1="528" x2="535" y2="550" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Decision Node (Verzweigung Raute) -->
            <polygon points="535,550 555,568 535,586 515,568" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="445" y="562" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b45309">Decision (Verzweigung)</text>

            <!-- Branch to Element 8 with Guard 7 [Termin nicht mehr verfügbar] -->
            <line x1="555" y1="568" x2="710" y2="568" stroke="#dc2626" stroke-width="2" marker-end="url(#eren-arr-err)" />
            <!-- Element 7 (Guard) -->
            <rect x="560" y="546" width="145" height="18" fill="#fee2e2" stroke="#dc2626" rx="4" />
            <text x="632" y="559" font-family="sans-serif" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">7: [Termin nicht mehr verfügbar]</text>

            <!-- Element 8: Fehlermeldung anzeigen (System) -->
            <rect x="710" y="545" width="160" height="46" fill="#fef2f2" stroke="#dc2626" stroke-width="2" rx="16" />
            <rect x="715" y="555" width="24" height="18" fill="#dc2626" rx="4" />
            <text x="727" y="568" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">8</text>
            <text x="795" y="566" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Fehlermeldung</text>
            <text x="795" y="580" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">anzeigen</text>

            <!-- Loop back from 8 to Merge Node (above 3) -->
            <path d="M 830 545 L 830 302 L 555 302" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#eren-arr-err)" />
            <text x="835" y="420" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#dc2626" transform="rotate(90, 835, 420)">Rücksprung: erneute Suche nach freiem Termin</text>

            <!-- Branch down to Fork Bar with Guard 9 [Termin verfügbar] -->
            <line x1="535" y1="586" x2="535" y2="640" stroke="#16a34a" stroke-width="2" marker-end="url(#eren-arr)" />
            <!-- Element 9 (Guard) -->
            <rect x="460" y="600" width="150" height="20" fill="#dcfce7" stroke="#16a34a" rx="4" />
            <text x="535" y="614" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">9: [Termin noch verfügbar]</text>

            <!-- Fork Bar (Synchronisationsbalken / Parallelität) -->
            <rect x="380" y="640" width="310" height="8" fill="#0f172a" rx="3" />
            <text x="700" y="647" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Fork (Parallelität / Splitting)</text>

            <!-- Parallel branches from Fork -->
            <line x1="440" y1="648" x2="440" y2="675" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />
            <line x1="620" y1="648" x2="620" y2="675" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Element 10: Buchungsinformation an Kunden senden (System) -->
            <rect x="350" y="675" width="180" height="52" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" rx="16" />
            <rect x="355" y="685" width="24" height="18" fill="#16a34a" rx="4" />
            <text x="367" y="698" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">10</text>
            <text x="445" y="696" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#14532d" text-anchor="middle">Buchungsinformation</text>
            <text x="445" y="711" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#14532d" text-anchor="middle">an Kunden senden</text>

            <!-- Element 11: Buchungsprozess abschließen / Termin fest buchen (System) -->
            <rect x="545" y="675" width="180" height="52" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" rx="16" />
            <rect x="550" y="685" width="24" height="18" fill="#16a34a" rx="4" />
            <text x="562" y="698" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">11</text>
            <text x="640" y="696" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#14532d" text-anchor="middle">Buchungsprozess</text>
            <text x="640" y="711" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#14532d" text-anchor="middle">abschließen (gebucht)</text>

            <!-- Branches to Join Bar -->
            <line x1="440" y1="727" x2="440" y2="755" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />
            <line x1="620" y1="727" x2="620" y2="755" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Join Bar (Synchronisationsbalken / Zusammenführung) -->
            <rect x="380" y="755" width="310" height="8" fill="#0f172a" rx="3" />
            <text x="700" y="762" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Join (Synchronisation)</text>

            <!-- From Join to Activity Final Node -->
            <line x1="535" y1="763" x2="535" y2="800" stroke="#1e293b" stroke-width="2" marker-end="url(#eren-arr)" />

            <!-- Activity Final Node (⦿) -->
            <circle cx="535" cy="815" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
            <circle cx="535" cy="815" r="8" fill="#0f172a" />
            <text x="535" y="845" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Ablauf beendet (Activity Final)</text>
        </svg>
        `;
    },

    getFaqStatistikabfragenUseCaseSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 620" width="100%" height="100%">
            <defs>
                <marker id="uc-gen-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                    <polygon points="0,1 10,5 0,9" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
                </marker>
                <marker id="uc-inc-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0369a1" />
                </marker>
                <marker id="uc-ext-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#b45309" />
                </marker>
            </defs>
            <rect width="920" height="620" fill="#f8fafc" rx="8" />

            <!-- Title -->
            <text x="460" y="28" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">UML-Anwendungsfalldiagramm: Software „Statistikabfragen“ (Soft GmbH für FAQ GmbH)</text>
            <text x="460" y="48" font-family="sans-serif" font-size="11" font-style="italic" fill="#64748b" text-anchor="middle">IHK-Originalaufgabe: Akteure, Systemgrenze, Standard-/Premiumabfragen, &lt;&lt;include&gt;&gt; &amp; &lt;&lt;extend&gt;&gt;</text>

            <!-- System Boundary -->
            <rect x="230" y="65" width="480" height="535" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="6" />
            <rect x="230" y="65" width="480" height="30" fill="#e0f2fe" rx="6" />
            <text x="470" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Systemgrenze: „Statistikabfragen“ (FAQ GmbH)</text>

            <!-- Actor 1: Nutzer (Standardnutzer, links oben) -->
            <circle cx="100" cy="130" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
            <line x1="100" y1="144" x2="100" y2="185" stroke="#0f172a" stroke-width="2" />
            <line x1="75" y1="158" x2="125" y2="158" stroke="#0f172a" stroke-width="2" />
            <line x1="100" y1="185" x2="80" y2="220" stroke="#0f172a" stroke-width="2" />
            <line x1="100" y1="185" x2="120" y2="220" stroke="#0f172a" stroke-width="2" />
            <text x="100" y="240" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Nutzer</text>
            <text x="100" y="254" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">(Standardkunde)</text>

            <!-- Actor 2: Premiumnutzer (links unten) -->
            <circle cx="100" cy="380" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
            <line x1="100" y1="394" x2="100" y2="435" stroke="#0f172a" stroke-width="2" />
            <line x1="75" y1="408" x2="125" y2="408" stroke="#0f172a" stroke-width="2" />
            <line x1="100" y1="435" x2="80" y2="470" stroke="#0f172a" stroke-width="2" />
            <line x1="100" y1="435" x2="120" y2="470" stroke="#0f172a" stroke-width="2" />
            <text x="100" y="490" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Premiumnutzer</text>
            <text x="100" y="504" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">(erweiterter Zugang)</text>

            <!-- Generalization Actor: Premiumnutzer -> Nutzer -->
            <line x1="100" y1="360" x2="100" y2="265" stroke="#0f172a" stroke-width="1.8" marker-end="url(#uc-gen-arr)" />
            <text x="140" y="315" font-family="sans-serif" font-size="9.5" font-style="italic" fill="#475569">Generalisierung</text>

            <!-- Actor 3: Admin (rechts Mitte) -->
            <circle cx="820" cy="220" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
            <line x1="820" y1="234" x2="820" y2="275" stroke="#0f172a" stroke-width="2" />
            <line x1="795" y1="248" x2="845" y2="248" stroke="#0f172a" stroke-width="2" />
            <line x1="820" y1="275" x2="800" y2="310" stroke="#0f172a" stroke-width="2" />
            <line x1="820" y1="275" x2="840" y2="310" stroke="#0f172a" stroke-width="2" />
            <text x="820" y="330" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Admin</text>
            <text x="820" y="344" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">(Systemverwalter)</text>

            <!-- UC 1: Standardstatistiken abrufen -->
            <ellipse cx="470" cy="130" rx="140" ry="26" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" />
            <text x="470" y="134" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Standardstatistiken abrufen</text>

            <!-- Associations to UC 1 -->
            <line x1="125" y1="160" x2="330" y2="135" stroke="#1e293b" stroke-width="1.5" />
            <line x1="795" y1="245" x2="610" y2="140" stroke="#1e293b" stroke-width="1.5" />

            <!-- UC 2: Premiumstatistiken abrufen -->
            <ellipse cx="470" cy="235" rx="140" ry="26" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" />
            <text x="470" y="239" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#15803d" text-anchor="middle">Premiumstatistiken abrufen</text>

            <!-- Association Premiumnutzer -> UC 2 -->
            <line x1="125" y1="410" x2="340" y2="245" stroke="#1e293b" stroke-width="1.5" />

            <!-- UC 3: Admin-Tools abrufen -->
            <ellipse cx="470" cy="340" rx="140" ry="26" fill="#faf5ff" stroke="#9333ea" stroke-width="2" />
            <text x="470" y="344" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#7e22ce" text-anchor="middle">Admin-Tools abrufen</text>

            <!-- Association Admin -> UC 3 -->
            <line x1="795" y1="260" x2="610" y2="340" stroke="#1e293b" stroke-width="1.5" />

            <!-- UC 4: Login durchführen -->
            <ellipse cx="470" cy="445" rx="130" ry="26" fill="#fefce8" stroke="#ca8a04" stroke-width="2" />
            <text x="470" y="449" font-family="sans-serif" font-size="12" font-weight="bold" fill="#a16207" text-anchor="middle">Login durchführen</text>

            <!-- UC 2 --<<include>>--> UC 4 -->
            <line x1="420" y1="261" x2="420" y2="419" stroke="#0369a1" stroke-width="1.8" stroke-dasharray="5,3" marker-end="url(#uc-inc-arr)" />
            <rect x="360" y="330" width="85" height="18" fill="#ffffff" stroke="#0369a1" rx="3" />
            <text x="402" y="343" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">&lt;&lt;include&gt;&gt;</text>

            <!-- UC 3 --<<include>>--> UC 4 -->
            <line x1="520" y1="366" x2="520" y2="419" stroke="#0369a1" stroke-width="1.8" stroke-dasharray="5,3" marker-end="url(#uc-inc-arr)" />
            <rect x="525" y="385" width="85" height="18" fill="#ffffff" stroke="#0369a1" rx="3" />
            <text x="567" y="398" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">&lt;&lt;include&gt;&gt;</text>

            <!-- UC 5: Erstanmeldung durchführen / Zugangsdaten eingeben -->
            <ellipse cx="470" cy="545" rx="160" ry="26" fill="#fff7ed" stroke="#ea580c" stroke-width="2" />
            <text x="470" y="549" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c2410c" text-anchor="middle">Erstanmeldung durchführen (Daten eingeben)</text>

            <!-- UC 5 --<<extend>>--> UC 4 (Pfeil zeigt ZUM Basis-Use-Case UC 4!) -->
            <line x1="470" y1="519" x2="470" y2="471" stroke="#b45309" stroke-width="1.8" stroke-dasharray="5,3" marker-end="url(#uc-ext-arr)" />
            <rect x="420" y="488" width="100" height="18" fill="#ffffff" stroke="#b45309" rx="3" />
            <text x="470" y="501" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#b45309" text-anchor="middle">&lt;&lt;extend&gt;&gt;</text>
            <text x="590" y="501" font-family="sans-serif" font-size="9" font-style="italic" fill="#78350f">[Bedingung: Login-Daten fehlen]</text>
        </svg>
        `;
    },

    getActivityDecisionVsForkComparisonSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 640" width="100%" height="100%">
            <defs>
                <marker id="comp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
                </marker>
            </defs>
            <rect width="920" height="640" fill="#f8fafc" rx="8" />

            <!-- Title -->
            <text x="460" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">UML 2.5 Aktivitätsdiagramm: Verzweigung (Raute) vs. Parallelität (Balken)</text>
            <text x="460" y="50" font-family="sans-serif" font-size="11.5" font-style="italic" fill="#64748b" text-anchor="middle">IHK-Kernwissen: Decision / Merge (Entweder-Oder) gegenüber Fork / Join (Gleichzeitigkeit) &amp; Swimlanes</text>

            <!-- Left Box: Decision / Merge -->
            <rect x="30" y="70" width="415" height="400" fill="#ffffff" stroke="#3b82f6" stroke-width="2" rx="8" />
            <rect x="30" y="70" width="415" height="34" fill="#eff6ff" rx="8" />
            <text x="237" y="93" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1. Verzweigung &amp; Zusammenführung (Raute)</text>

            <!-- Activity top -->
            <circle cx="237" cy="130" r="11" fill="#0f172a" />
            <line x1="237" y1="141" x2="237" y2="160" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />
            <rect x="172" y="160" width="130" height="38" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8" rx="14" />
            <text x="237" y="184" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">Aktivität A</text>

            <line x1="237" y1="198" x2="237" y2="225" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />

            <!-- Decision Diamond -->
            <polygon points="237,225 257,242 237,260 217,242" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="268" y="246" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b45309">Verzweigung (Decision)</text>

            <!-- Branch Left: [Daten sind nicht ok] -->
            <line x1="217" y1="242" x2="115" y2="242" stroke="#dc2626" stroke-width="2" />
            <line x1="115" y1="242" x2="115" y2="280" stroke="#dc2626" stroke-width="2" marker-end="url(#comp-arr)" />
            <text x="145" y="235" font-family="sans-serif" font-size="9" font-weight="bold" fill="#dc2626">[Daten nicht ok]</text>
            <rect x="55" y="280" width="120" height="36" fill="#fef2f2" stroke="#dc2626" stroke-width="1.8" rx="12" />
            <text x="115" y="302" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Korrekturpfad</text>

            <!-- Branch Right: [Daten sind ok] -->
            <line x1="257" y1="242" x2="355" y2="242" stroke="#16a34a" stroke-width="2" />
            <line x1="355" y1="242" x2="355" y2="280" stroke="#16a34a" stroke-width="2" marker-end="url(#comp-arr)" />
            <text x="325" y="235" font-family="sans-serif" font-size="9" font-weight="bold" fill="#16a34a">[Daten ok]</text>
            <rect x="295" y="280" width="120" height="36" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8" rx="12" />
            <text x="355" y="302" font-family="sans-serif" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">Regelpfad</text>

            <!-- Merge Diamond -->
            <line x1="115" y1="316" x2="115" y2="355" stroke="#1e293b" stroke-width="2" />
            <line x1="115" y1="355" x2="217" y2="355" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />
            <line x1="355" y1="316" x2="355" y2="355" stroke="#1e293b" stroke-width="2" />
            <line x1="355" y1="355" x2="257" y2="355" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />

            <polygon points="237,338 257,355 237,372 217,355" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="268" y="360" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b45309">Zusammenführung (Merge)</text>

            <line x1="237" y1="372" x2="237" y2="400" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />
            <rect x="172" y="400" width="130" height="38" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8" rx="14" />
            <text x="237" y="424" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">Folgeaktivität</text>
            <text x="237" y="456" font-family="sans-serif" font-size="10" font-style="italic" fill="#2563eb" text-anchor="middle">Nur GENAU EIN Pfad wird ausgeführt!</text>

            <!-- Right Box: Fork / Join -->
            <rect x="475" y="70" width="415" height="400" fill="#ffffff" stroke="#10b981" stroke-width="2" rx="8" />
            <rect x="475" y="70" width="415" height="34" fill="#ecfdf5" rx="8" />
            <text x="682" y="93" font-family="sans-serif" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">2. Parallelität &amp; Synchronisation (Balken)</text>

            <circle cx="682" cy="130" r="11" fill="#0f172a" />
            <line x1="682" y1="141" x2="682" y2="160" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />
            <rect x="617" y="160" width="130" height="38" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8" rx="14" />
            <text x="682" y="184" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">Aktivität B</text>

            <line x1="682" y1="198" x2="682" y2="230" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />

            <!-- Fork Bar -->
            <rect x="545" y="230" width="275" height="8" fill="#0f172a" rx="3" />
            <text x="828" y="237" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a">Fork (Splitting)</text>

            <!-- Parallel Paths -->
            <line x1="590" y1="238" x2="590" y2="280" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />
            <line x1="775" y1="238" x2="775" y2="280" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />

            <rect x="525" y="280" width="130" height="38" fill="#f0fdf4" stroke="#10b981" stroke-width="1.8" rx="14" />
            <text x="590" y="303" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857" text-anchor="middle">Parallel-Aktion 1</text>

            <rect x="710" y="280" width="130" height="38" fill="#f0fdf4" stroke="#10b981" stroke-width="1.8" rx="14" />
            <text x="775" y="303" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857" text-anchor="middle">Parallel-Aktion 2</text>

            <!-- Join Bar -->
            <line x1="590" y1="318" x2="590" y2="355" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />
            <line x1="775" y1="318" x2="775" y2="355" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />

            <rect x="545" y="355" width="275" height="8" fill="#0f172a" rx="3" />
            <text x="828" y="362" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a">Join (Synchronisation)</text>

            <line x1="682" y1="363" x2="682" y2="400" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />
            <rect x="617" y="400" width="130" height="38" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8" rx="14" />
            <text x="682" y="424" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">Folgeaktivität</text>
            <text x="682" y="456" font-family="sans-serif" font-size="10" font-style="italic" fill="#047857" text-anchor="middle">BEIDE Pfade laufen GLEICHZEITIG ab!</text>

            <!-- Bottom: Swimlanes Summary -->
            <rect x="30" y="485" width="860" height="140" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" rx="8" />
            <rect x="30" y="485" width="860" height="28" fill="#f1f5f9" rx="8" />
            <text x="460" y="504" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">3. Swimlanes (Schwimmbahnen / Partitionen) – Wer macht was?</text>

            <!-- Swimlanes illustration -->
            <rect x="50" y="520" width="370" height="90" fill="#eff6ff" stroke="#93c5fd" rx="4" />
            <text x="235" y="538" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Bahn 1: Anwender / Kunde</text>
            <rect x="155" y="552" width="160" height="32" fill="#ffffff" stroke="#2563eb" rx="10" />
            <text x="235" y="572" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Terminart auswählen</text>

            <path d="M 315 568 L 565 568" stroke="#1e293b" stroke-width="2" marker-end="url(#comp-arr)" />

            <rect x="490" y="520" width="380" height="90" fill="#f8fafc" stroke="#cbd5e1" rx="4" />
            <text x="680" y="538" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Bahn 2: System / Backend</text>
            <rect x="575" y="552" width="210" height="32" fill="#ffffff" stroke="#475569" rx="10" />
            <text x="680" y="572" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">Freie Termine ermitteln</text>
        </svg>
        `;
    },

    getUmlBeziehungenTabellenSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 760" width="100%" height="100%">
            <defs>
                <marker id="tab-gen-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                    <polygon points="0,1 10,5 0,9" fill="#ffffff" stroke="#0f172a" stroke-width="1.6" />
                </marker>
            </defs>
            <rect width="960" height="760" fill="#f8fafc" rx="8" />

            <!-- Title -->
            <text x="480" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">IHK-Prüfungsaufgabe: UML-Klassendiagramm Beziehungstypen &amp; Begründungen</text>
            <text x="480" y="52" font-family="sans-serif" font-size="11.5" font-style="italic" fill="#64748b" text-anchor="middle">Musterlösung für die Prüfungs-Tabelle: Komposition (◆), Generalisierung (▷), Aggregation (◇) &amp; Assoziation (—)</text>

            <!-- Table Outer Frame -->
            <rect x="30" y="70" width="900" height="660" fill="#ffffff" stroke="#0f172a" stroke-width="2" rx="4" />

            <!-- Table Header -->
            <rect x="30" y="70" width="900" height="42" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.5" />
            <line x1="250" y1="70" x2="250" y2="730" stroke="#0f172a" stroke-width="1.5" />
            <line x1="410" y1="70" x2="410" y2="730" stroke="#0f172a" stroke-width="1.5" />
            <line x1="640" y1="70" x2="640" y2="730" stroke="#0f172a" stroke-width="1.5" />

            <text x="140" y="96" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Beschreibung</text>
            <text x="330" y="96" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Beziehungstyp</text>
            <text x="525" y="96" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Klassendiagramm</text>
            <text x="785" y="96" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Begründung</text>

            <!-- Row 1: Immobilie / Wohnungen (Komposition) -->
            <line x1="30" y1="260" x2="930" y2="260" stroke="#0f172a" stroke-width="1.5" />

            <!-- Col 1 -->
            <text x="45" y="160" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">Eine Immobilie be-</text>
            <text x="45" y="180" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">steht aus mehreren</text>
            <text x="45" y="200" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">Wohnungen.</text>

            <!-- Col 2 -->
            <rect x="265" y="150" width="130" height="34" fill="#fee2e2" stroke="#dc2626" rx="6" />
            <text x="330" y="172" font-family="sans-serif" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">Komposition</text>
            <text x="330" y="202" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">(starke Teil-Ganzes)</text>

            <!-- Col 3: Visual UML Class -->
            <rect x="425" y="145" width="80" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="3" />
            <text x="465" y="166" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Immobilie</text>

            <!-- Composition Diamond & Line -->
            <polygon points="505,162 515,155 525,162 515,169" fill="#0f172a" stroke="#0f172a" stroke-width="1.5" />
            <line x1="525" y1="162" x2="560" y2="162" stroke="#0f172a" stroke-width="2" />

            <rect x="560" y="145" width="70" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="3" />
            <text x="595" y="166" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Wohnung</text>

            <rect x="435" y="195" width="180" height="20" fill="#fef2f2" stroke="#f87171" rx="4" />
            <text x="525" y="209" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">◆ Schwarze Raute am Ganzen</text>

            <!-- Col 4: Reason -->
            <text x="655" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Existenzabhängigkeit:</text>
            <text x="655" y="165" font-family="sans-serif" font-size="11" fill="#334155">• Eine Wohnung kann ohne die</text>
            <text x="655" y="183" font-family="sans-serif" font-size="11" fill="#334155">  Immobilie physisch &amp; logisch</text>
            <text x="655" y="201" font-family="sans-serif" font-size="11" fill="#334155">  nicht existieren.</text>
            <text x="655" y="221" font-family="sans-serif" font-size="11" fill="#334155">• Wird die Immobilie abgerissen/</text>
            <text x="655" y="239" font-family="sans-serif" font-size="11" fill="#334155">  gelöscht, erlöschen alle Wohnungen.</text>

            <!-- Row 2: Bewohner / Mieter / Eigentümer (Generalisierung) -->
            <line x1="30" y1="440" x2="930" y2="440" stroke="#0f172a" stroke-width="1.5" />

            <!-- Col 1 -->
            <text x="45" y="325" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">Bewohner können</text>
            <text x="45" y="345" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">entweder Mieter oder</text>
            <text x="45" y="365" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">Eigentümer sein.</text>

            <!-- Col 2 -->
            <rect x="260" y="320" width="140" height="34" fill="#eff6ff" stroke="#2563eb" rx="6" />
            <text x="330" y="342" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Generalisierung</text>
            <text x="330" y="372" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">(Vererbung / IS-A)</text>

            <!-- Col 3: Visual UML Class -->
            <rect x="480" y="280" width="80" height="30" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="3" />
            <text x="520" y="300" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Bewohner</text>

            <!-- Generalization Arrow pointing up to Bewohner -->
            <line x1="455" y1="365" x2="520" y2="310" stroke="#0f172a" stroke-width="1.8" marker-end="url(#tab-gen-arr)" />
            <line x1="585" y1="365" x2="520" y2="310" stroke="#0f172a" stroke-width="1.8" />

            <rect x="420" y="365" width="70" height="30" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="3" />
            <text x="455" y="384" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Mieter</text>

            <rect x="550" y="365" width="80" height="30" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="3" />
            <text x="590" y="384" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Eigentümer</text>

            <rect x="435" y="408" width="180" height="20" fill="#eff6ff" stroke="#60a5fa" rx="4" />
            <text x="525" y="422" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">▷ Weißes Dreieck zur Oberklasse</text>

            <!-- Col 4: Reason -->
            <text x="655" y="310" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">„Ist-ein“-Beziehung (IS-A):</text>
            <text x="655" y="330" font-family="sans-serif" font-size="11" fill="#334155">• Bewohner ist die gemeinsame</text>
            <text x="655" y="348" font-family="sans-serif" font-size="11" fill="#334155">  Basisklasse (Generalisierung).</text>
            <text x="655" y="368" font-family="sans-serif" font-size="11" fill="#334155">• Mieter und Eigentümer sind</text>
            <text x="655" y="386" font-family="sans-serif" font-size="11" fill="#334155">  Spezialisierungen und erben alle</text>
            <text x="655" y="404" font-family="sans-serif" font-size="11" fill="#334155">  Eigenschaften des Bewohners.</text>

            <!-- Row 3: Mietervereinigung / Mieter (Aggregation) -->
            <line x1="30" y1="590" x2="930" y2="590" stroke="#0f172a" stroke-width="1.5" />

            <!-- Col 1 -->
            <text x="45" y="490" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">In einer Mietervereini-</text>
            <text x="45" y="510" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">gung gibt es mehrere</text>
            <text x="45" y="530" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">Mieter.</text>

            <!-- Col 2 -->
            <rect x="265" y="485" width="130" height="34" fill="#fefce8" stroke="#ca8a04" rx="6" />
            <text x="330" y="507" font-family="sans-serif" font-size="13" font-weight="bold" fill="#a16207" text-anchor="middle">Aggregation</text>
            <text x="330" y="537" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">(schwache Teil-Ganzes)</text>

            <!-- Col 3: Visual UML Class -->
            <rect x="420" y="480" width="95" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="3" />
            <text x="467" y="501" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Mietervereinigung</text>

            <!-- Aggregation Diamond & Line -->
            <polygon points="515,497 525,490 535,497 525,504" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
            <line x1="535" y1="497" x2="570" y2="497" stroke="#0f172a" stroke-width="2" />

            <rect x="570" y="480" width="60" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="3" />
            <text x="600" y="501" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Mieter</text>

            <rect x="435" y="535" width="180" height="20" fill="#fefce8" stroke="#facc15" rx="4" />
            <text x="525" y="549" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ca8a04" text-anchor="middle">◇ Weiße Raute am Ganzen</text>

            <!-- Col 4: Reason -->
            <text x="655" y="475" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">KEINE Existenzabhängigkeit:</text>
            <text x="655" y="495" font-family="sans-serif" font-size="11" fill="#334155">• Ein Mieter ist zwar Mitglied der</text>
            <text x="655" y="513" font-family="sans-serif" font-size="11" fill="#334155">  Vereinigung („hat-ein“), existiert</text>
            <text x="655" y="531" font-family="sans-serif" font-size="11" fill="#334155">  aber eigenständig weiter.</text>
            <text x="655" y="551" font-family="sans-serif" font-size="11" fill="#334155">• Löst sich der Verein auf, existiert</text>
            <text x="655" y="569" font-family="sans-serif" font-size="11" fill="#334155">  die Person des Mieters fort.</text>

            <!-- Row 4: Bonus Row (Assoziation) -->
            <!-- Col 1 -->
            <text x="45" y="635" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">Ein Arzt behandelt</text>
            <text x="45" y="655" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">Patienten / Kunde bucht</text>
            <text x="45" y="675" font-family="sans-serif" font-size="12" font-weight="600" fill="#0f172a">Dienstleistung.</text>

            <!-- Col 2 -->
            <rect x="265" y="630" width="130" height="34" fill="#f1f5f9" stroke="#64748b" rx="6" />
            <text x="330" y="652" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">Assoziation</text>
            <text x="330" y="682" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">(Beziehung / Kennt-ein)</text>

            <!-- Col 3: Visual UML Class -->
            <rect x="430" y="625" width="70" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="3" />
            <text x="465" y="646" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Arzt</text>

            <line x1="500" y1="642" x2="560" y2="642" stroke="#0f172a" stroke-width="2" />

            <rect x="560" y="625" width="70" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="3" />
            <text x="595" y="646" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Patient</text>

            <rect x="435" y="680" width="180" height="20" fill="#f1f5f9" stroke="#cbd5e1" rx="4" />
            <text x="525" y="694" font-family="sans-serif" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">— Einfache Linie (keine Raute)</text>

            <!-- Col 4: Reason -->
            <text x="655" y="625" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Allgemeine Verknüpfung:</text>
            <text x="655" y="645" font-family="sans-serif" font-size="11" fill="#334155">• Zwei autonome Objekte stehen</text>
            <text x="655" y="663" font-family="sans-serif" font-size="11" fill="#334155">  in einer Nutzungsbeziehung.</text>
            <text x="655" y="683" font-family="sans-serif" font-size="11" fill="#334155">• Keine Teil-Ganzes-Struktur und</text>
            <text x="655" y="701" font-family="sans-serif" font-size="11" fill="#334155">  keine Vererbung vorhanden.</text>
        </svg>
        `;
    },

    getUmlKardinalitaetenCheatSheetSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 700" width="100%" height="100%">
            <rect width="960" height="700" fill="#f8fafc" rx="8" />

            <!-- Title -->
            <text x="480" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">UML-Klassendiagramm: Multiplizitäten / Kardinalitäten im IHK-Standard</text>
            <text x="480" y="52" font-family="sans-serif" font-size="11.5" font-style="italic" fill="#64748b" text-anchor="middle">Wie liest man Kardinalitäten (1, 0..1, 1..*, 0..*) und typische IHK-Prüfungsbeispiele</text>

            <!-- Top Section: Definitionen & Leseregel -->
            <rect x="30" y="70" width="900" height="150" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="8" />
            <rect x="30" y="70" width="900" height="32" fill="#e0f2fe" rx="8" />
            <text x="480" y="92" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">1. Die goldene IHK-Leseregel für Kardinalitäten</text>

            <text x="50" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Leserichtung von links nach rechts (A ──── B):</text>
            <text x="50" y="150" font-family="sans-serif" font-size="11.5" fill="#334155">„Betrachte genau EIN Exemplar der Klasse A: Wie viele Exemplare der Klasse B gehören mindestens und höchstens dazu?“</text>
            <text x="50" y="168" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0284c7">➔ Die Antwort (z. B. 0..*) steht IMMER an der gegenüberliegenden Klasse B!</text>

            <text x="50" y="195" font-family="sans-serif" font-size="11.5" fill="#334155"><tspan font-weight="bold" fill="#0f172a">Rückrichtung (B ──── A):</tspan> „Betrachte genau EIN Exemplar der Klasse B: Zu wie vielen Exemplaren der Klasse A gehört es?“ ➔ Antwort steht an Klasse A!</text>

            <!-- Middle Section: Notationen Tabelle -->
            <rect x="30" y="235" width="900" height="155" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" rx="8" />
            <rect x="30" y="235" width="900" height="28" fill="#f1f5f9" rx="8" />
            <text x="480" y="254" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">2. Die standardisierten UML-Multiplizitäten im Vergleich</text>

            <!-- 5 Badges -->
            <rect x="45" y="275" width="165" height="100" fill="#f0fdf4" stroke="#16a34a" rx="6" />
            <text x="127" y="300" font-family="sans-serif" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">1</text>
            <text x="127" y="320" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Genau eins</text>
            <text x="127" y="340" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Zwingend vorhanden.</text>
            <text x="127" y="355" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Bsp.: Jedes Auto hat 1 FIN.</text>

            <rect x="220" y="275" width="165" height="100" fill="#eff6ff" stroke="#2563eb" rx="6" />
            <text x="302" y="300" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1d4ed8" text-anchor="middle">0..1</text>
            <text x="302" y="320" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Null oder eins</text>
            <text x="302" y="340" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Optional / Maximal 1.</text>
            <text x="302" y="355" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Bsp.: Dienstwagen für Chef.</text>

            <rect x="395" y="275" width="165" height="100" fill="#faf5ff" stroke="#9333ea" rx="6" />
            <text x="477" y="300" font-family="sans-serif" font-size="16" font-weight="bold" fill="#7e22ce" text-anchor="middle">0..*  bzw.  *</text>
            <text x="477" y="320" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Beliebig viele</text>
            <text x="477" y="340" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Null bis unendlich.</text>
            <text x="477" y="355" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Bsp.: Kunde hat 0..* Käufe.</text>

            <rect x="570" y="275" width="165" height="100" fill="#fef2f2" stroke="#dc2626" rx="6" />
            <text x="652" y="300" font-family="sans-serif" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">1..*</text>
            <text x="652" y="320" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Mindestens eins</text>
            <text x="652" y="340" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Eins bis unendlich.</text>
            <text x="652" y="355" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Bsp.: Auftrag hat 1..* Posten.</text>

            <rect x="745" y="275" width="170" height="100" fill="#fff7ed" stroke="#ea580c" rx="6" />
            <text x="830" y="300" font-family="sans-serif" font-size="16" font-weight="bold" fill="#c2410c" text-anchor="middle">2..4  /  4..5</text>
            <text x="830" y="320" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Fester Bereich</text>
            <text x="830" y="340" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Min..Max Grenzen.</text>
            <text x="830" y="355" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Bsp.: PKW hat 4..5 Räder.</text>

            <!-- Bottom Section: 4 IHK Praxis-Beispiele -->
            <rect x="30" y="405" width="900" height="280" fill="#ffffff" stroke="#10b981" stroke-width="2" rx="8" />
            <rect x="30" y="405" width="900" height="28" fill="#ecfdf5" rx="8" />
            <text x="480" y="424" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">3. Vier typische IHK-Prüfungsmuster visualisiert</text>

            <!-- Ex 1: Kunde - Bestellung (1 : 0..*) -->
            <rect x="50" y="445" width="80" height="32" fill="#f8fafc" stroke="#334155" rx="3" />
            <text x="90" y="465" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Kunde</text>

            <text x="140" y="456" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0284c7">1</text>
            <line x1="130" y1="461" x2="310" y2="461" stroke="#0f172a" stroke-width="2" />
            <text x="300" y="456" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0284c7">0..*</text>

            <rect x="310" y="445" width="90" height="32" fill="#f8fafc" stroke="#334155" rx="3" />
            <text x="355" y="465" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Bestellung</text>

            <text x="420" y="465" font-family="sans-serif" font-size="10.5" fill="#334155">1 Kunde hat 0 bis n Bestellungen; jede Bestellung gehört zu genau 1 Kunden.</text>

            <!-- Ex 2: Bestellung - Bestellposition (1 ◆: 1..*) -->
            <rect x="50" y="505" width="90" height="32" fill="#f8fafc" stroke="#334155" rx="3" />
            <text x="95" y="525" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Bestellung</text>

            <polygon points="140,521 148,515 156,521 148,527" fill="#0f172a" stroke="#0f172a" />
            <text x="165" y="516" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">1</text>
            <line x1="156" y1="521" x2="310" y2="521" stroke="#0f172a" stroke-width="2" />
            <text x="300" y="516" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">1..*</text>

            <rect x="310" y="505" width="100" height="32" fill="#f8fafc" stroke="#334155" rx="3" />
            <text x="360" y="525" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Bestellposition</text>

            <text x="420" y="525" font-family="sans-serif" font-size="10.5" fill="#334155">Komposition: Bestellung hat mind. 1 Position; ohne Bestellung existiert keine Position.</text>

            <!-- Ex 3: PKW - Rad (1 ◆: 4..5) -->
            <rect x="50" y="565" width="80" height="32" fill="#f8fafc" stroke="#334155" rx="3" />
            <text x="90" y="585" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">PKW</text>

            <polygon points="130,581 138,575 146,581 138,587" fill="#0f172a" stroke="#0f172a" />
            <text x="155" y="576" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">1</text>
            <line x1="146" y1="581" x2="310" y2="581" stroke="#0f172a" stroke-width="2" />
            <text x="290" y="576" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">4..5</text>

            <rect x="310" y="565" width="80" height="32" fill="#f8fafc" stroke="#334155" rx="3" />
            <text x="350" y="585" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Reifen</text>

            <text x="420" y="585" font-family="sans-serif" font-size="10.5" fill="#334155">Komposition mit Bereich: Genau 4 Räder (oder 5 mit Reserverad).</text>

            <!-- Ex 4: Student - Vorlesung (0..* : 1..*) -->
            <rect x="50" y="625" width="80" height="32" fill="#f8fafc" stroke="#334155" rx="3" />
            <text x="90" y="645" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Student</text>

            <text x="140" y="636" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9333ea">0..*</text>
            <line x1="130" y1="641" x2="310" y2="641" stroke="#0f172a" stroke-width="2" />
            <text x="295" y="636" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9333ea">1..*</text>

            <rect x="310" y="625" width="90" height="32" fill="#f8fafc" stroke="#334155" rx="3" />
            <text x="355" y="645" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Vorlesung</text>

            <text x="420" y="645" font-family="sans-serif" font-size="10.5" fill="#334155">n:m Assoziation: Vorlesung braucht mind. 1 Student (1..*); Student belegt 0..* Vorlesungen.</text>
        </svg>
        `;
    },

    getUmlIncludeExtendCheatSheetSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 700" width="100%" height="100%">
            <defs>
                <marker id="inc-che-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
                </marker>
                <marker id="ext-che-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#ea580c" />
                </marker>
                <marker id="gen-che-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                    <polygon points="0,1 10,5 0,9" fill="#ffffff" stroke="#0f172a" stroke-width="1.6" />
                </marker>
            </defs>
            <rect width="960" height="700" fill="#f8fafc" rx="8" />

            <!-- Title -->
            <text x="480" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">UML Use-Case-Diagramm: &lt;&lt;include&gt;&gt; vs. &lt;&lt;extend&gt;&gt; Leitfaden</text>
            <text x="480" y="52" font-family="sans-serif" font-size="11.5" font-style="italic" fill="#64748b" text-anchor="middle">Pfeilrichtungen, Signalwörter und typische IHK-Prüfungsfallen im direkten Vergleich</text>

            <!-- Box 1: <<include>> (Left, width: 435) -->
            <rect x="30" y="70" width="435" height="420" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="8" />
            <rect x="30" y="70" width="435" height="34" fill="#e0f2fe" rx="8" />
            <text x="247" y="93" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">&lt;&lt;include&gt;&gt; (Zwingende Einbindung)</text>

            <!-- Visual diagram -->
            <ellipse cx="140" cy="150" rx="90" ry="24" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" />
            <text x="140" y="154" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Geld abheben</text>
            <text x="140" y="185" font-family="sans-serif" font-size="9.5" fill="#64748b" text-anchor="middle">(Basis-Use-Case)</text>

            <!-- Include Arrow: from Basis to Sub -->
            <line x1="230" y1="150" x2="330" y2="150" stroke="#0284c7" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#inc-che-arr)" />
            <rect x="235" y="130" width="85" height="18" fill="#ffffff" stroke="#0284c7" rx="3" />
            <text x="277" y="143" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">&lt;&lt;include&gt;&gt;</text>

            <ellipse cx="380" cy="150" rx="75" ry="24" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" />
            <text x="380" y="154" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#15803d" text-anchor="middle">PIN prüfen</text>
            <text x="380" y="185" font-family="sans-serif" font-size="9.5" fill="#64748b" text-anchor="middle">(Unter-Use-Case)</text>

            <!-- Key Facts include -->
            <rect x="45" y="210" width="405" height="260" fill="#f8fafc" stroke="#e2e8f0" rx="6" />
            <text x="60" y="235" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1">Bedeutung (MUSS-Beziehung):</text>
            <text x="60" y="255" font-family="sans-serif" font-size="11" fill="#334155">• Der Unter-Use-Case wird IMMER zwingend mit ausgeführt.</text>
            <text x="60" y="273" font-family="sans-serif" font-size="11" fill="#334155">• Der Basisfall kann ohne ihn nicht erfolgreich enden.</text>

            <text x="60" y="305" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1">Pfeilrichtung (Exakte IHK-Regel):</text>
            <text x="60" y="325" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">VOM Aufrufer ZUM Unter-Use-Case! (A ──▶ B)</text>
            <text x="60" y="343" font-family="sans-serif" font-size="10.5" fill="#64748b">(Gleich wie ein Methodenaufruf im Code: basis.callSub())</text>

            <text x="60" y="375" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1">Typische Signalwörter in IHK-Texten:</text>
            <text x="60" y="395" font-family="sans-serif" font-size="11" font-weight="600" fill="#dc2626">• „immer“, „zwingend erforderlich“, „setzt voraus“,</text>
            <text x="60" y="413" font-family="sans-serif" font-size="11" font-weight="600" fill="#dc2626">• „muss vor jedem Schritt autorisiert werden“,</text>
            <text x="60" y="431" font-family="sans-serif" font-size="11" font-weight="600" fill="#dc2626">• „bindet den Login-Prozess fest ein“.</text>

            <!-- Box 2: <<extend>> (Right, width: 435) -->
            <rect x="495" y="70" width="435" height="420" fill="#ffffff" stroke="#ea580c" stroke-width="2" rx="8" />
            <rect x="495" y="70" width="435" height="34" fill="#fff7ed" rx="8" />
            <text x="712" y="93" font-family="sans-serif" font-size="14" font-weight="bold" fill="#c2410c" text-anchor="middle">&lt;&lt;extend&gt;&gt; (Optionale Erweiterung)</text>

            <!-- Visual diagram -->
            <ellipse cx="820" cy="150" rx="95" ry="24" fill="#fff7ed" stroke="#ea580c" stroke-width="2" />
            <text x="820" y="154" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#c2410c" text-anchor="middle">Quittung drucken</text>
            <text x="820" y="185" font-family="sans-serif" font-size="9.5" fill="#64748b" text-anchor="middle">(Erweiterungs-UC)</text>

            <!-- Extend Arrow: from Extension TO Basis -->
            <line x1="725" y1="150" x2="625" y2="150" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#ext-che-arr)" />
            <rect x="635" y="130" width="85" height="18" fill="#ffffff" stroke="#ea580c" rx="3" />
            <text x="677" y="143" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ea580c" text-anchor="middle">&lt;&lt;extend&gt;&gt;</text>

            <ellipse cx="560" cy="150" rx="60" ry="24" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" />
            <text x="560" y="154" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Geld abheben</text>
            <text x="560" y="185" font-family="sans-serif" font-size="9.5" fill="#64748b" text-anchor="middle">(Basis-Use-Case)</text>

            <!-- Key Facts extend -->
            <rect x="510" y="210" width="405" height="260" fill="#f8fafc" stroke="#e2e8f0" rx="6" />
            <text x="525" y="235" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c2410c">Bedeutung (KANN-Beziehung):</text>
            <text x="525" y="255" font-family="sans-serif" font-size="11" fill="#334155">• Der Erweiterungs-Fall läuft NUR UNTER BEDINGUNG ab.</text>
            <text x="525" y="273" font-family="sans-serif" font-size="11" fill="#334155">• Der Basisfall ist autark und kennt die Erweiterung oft gar nicht.</text>

            <text x="525" y="305" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c2410c">Pfeilrichtung (Häufigster IHK-Fehler!):</text>
            <text x="525" y="325" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">VOM erweiternden Case ZUM Basis-Use-Case! (B ──▶ A)</text>
            <text x="525" y="343" font-family="sans-serif" font-size="10.5" fill="#64748b">(Der Pfeil zeigt auf den Use-Case, der erweitert wird!)</text>

            <text x="525" y="375" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c2410c">Typische Signalwörter in IHK-Texten:</text>
            <text x="525" y="395" font-family="sans-serif" font-size="11" font-weight="600" fill="#b45309">• „optional“, „auf Wunsch“, „bei Bedarf“,</text>
            <text x="525" y="413" font-family="sans-serif" font-size="11" font-weight="600" fill="#b45309">• „im Fehlerfall / falls Guthaben nicht ausreicht“,</text>
            <text x="525" y="431" font-family="sans-serif" font-size="11" font-weight="600" fill="#b45309">• „Erstanmeldung (falls noch kein Zugang existiert)“.</text>

            <!-- Bottom Section: Generalisierung von Akteuren -->
            <rect x="30" y="510" width="900" height="165" fill="#ffffff" stroke="#9333ea" stroke-width="2" rx="8" />
            <rect x="30" y="510" width="900" height="28" fill="#faf5ff" rx="8" />
            <text x="480" y="529" font-family="sans-serif" font-size="12" font-weight="bold" fill="#7e22ce" text-anchor="middle">Akteurs-Generalisierung im Use-Case-Diagramm (z. B. Premiumnutzer ──▷ Nutzer)</text>

            <circle cx="120" cy="580" r="12" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
            <line x1="120" y1="592" x2="120" y2="625" stroke="#0f172a" stroke-width="1.8" />
            <line x1="100" y1="604" x2="140" y2="604" stroke="#0f172a" stroke-width="1.8" />
            <line x1="120" y1="625" x2="105" y2="650" stroke="#0f172a" stroke-width="1.8" />
            <line x1="120" y1="625" x2="135" y2="650" stroke="#0f172a" stroke-width="1.8" />
            <text x="120" y="668" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Nutzer (Standard)</text>

            <!-- Generalization Arrow -->
            <line x1="260" y1="615" x2="160" y2="615" stroke="#0f172a" stroke-width="2" marker-end="url(#gen-che-arr)" />
            <text x="210" y="605" font-family="sans-serif" font-size="10" font-style="italic" fill="#64748b" text-anchor="middle">Generalisierung</text>

            <circle cx="310" cy="580" r="12" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
            <line x1="310" y1="592" x2="310" y2="625" stroke="#0f172a" stroke-width="1.8" />
            <line x1="290" y1="604" x2="330" y2="604" stroke="#0f172a" stroke-width="1.8" />
            <line x1="310" y1="625" x2="295" y2="650" stroke="#0f172a" stroke-width="1.8" />
            <line x1="310" y1="625" x2="325" y2="650" stroke="#0f172a" stroke-width="1.8" />
            <text x="310" y="668" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7e22ce" text-anchor="middle">Premiumnutzer</text>

            <text x="390" y="580" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a">Vererbung von Berechtigungen:</text>
            <text x="390" y="602" font-family="sans-serif" font-size="11" fill="#334155">• Der spezialisierte Akteur 'Premiumnutzer' erbt automatisch alle Use-Case-Assoziationen des 'Nutzers'.</text>
            <text x="390" y="622" font-family="sans-serif" font-size="11" fill="#334155">• Er benötigt im Diagramm KEINE doppelten Linien zu den Standardfunktionen.</text>
            <text x="390" y="642" font-family="sans-serif" font-size="11" font-weight="600" fill="#7e22ce">➔ Symbol: Durchgezogene Linie mit geschlossener, weißer Dreiecksspitze (▷) zum Basis-Akteur!</text>
        </svg>
        `;
    },


    getEvaEventKlassendiagrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 640" width="100%" height="100%">
            <defs>
                <marker id="eva-gen-arr" markerWidth="14" markerHeight="14" refX="13" refY="7" orient="auto">
                    <polygon points="1,1 13,7 1,13" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
                </marker>
                <marker id="eva-comp-arr" markerWidth="16" markerHeight="12" refX="1" refY="6" orient="auto">
                    <polygon points="1,6 8,1 15,6 8,11" fill="#0f172a" stroke="#0f172a" stroke-width="1.5" />
                </marker>
            </defs>

            <!-- Background & Title Banner -->
            <rect width="960" height="640" fill="#f8fafc" rx="10" />
            <rect x="0" y="0" width="960" height="46" fill="#0f172a" rx="10" />
            <text x="480" y="28" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">
                UML-Klassendiagramm: Tourneen &amp; Veranstaltungen (EVA-Event GmbH / Jukebox-Soft GbR)
            </text>

            <!-- 1. Superclass Sub-Types: Veranstaltungen (Top Row) -->
            <!-- Subclass 1: Hallenveranstaltung -->
            <rect x="50" y="65" width="220" height="65" fill="#ffffff" stroke="#0284c7" stroke-width="1.8" rx="4" />
            <rect x="50" y="65" width="220" height="24" fill="#f0f9ff" rx="4" />
            <text x="160" y="81" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Hallenveranstaltung</text>
            <line x1="50" y1="89" x2="270" y2="89" stroke="#0284c7" stroke-width="1.2" />
            <text x="60" y="105" font-family="monospace" font-size="9.5" fill="#334155">- sitzplaetze: int</text>
            <text x="60" y="119" font-family="monospace" font-size="9.5" fill="#334155">- buehnenFlaecheM2: double</text>

            <!-- Subclass 2: Open-Air Veranstaltung -->
            <rect x="370" y="65" width="220" height="65" fill="#ffffff" stroke="#0284c7" stroke-width="1.8" rx="4" />
            <rect x="370" y="65" width="220" height="24" fill="#f0f9ff" rx="4" />
            <text x="480" y="81" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Open-Air Veranstaltung</text>
            <line x1="370" y1="89" x2="590" y2="89" stroke="#0284c7" stroke-width="1.2" />
            <text x="380" y="105" font-family="monospace" font-size="9.5" fill="#334155">- witterungsschutz: boolean</text>
            <text x="380" y="119" font-family="monospace" font-size="9.5" fill="#334155">- ausweichTermin: Date</text>

            <!-- Subclass 3: Club Veranstaltung -->
            <rect x="690" y="65" width="220" height="65" fill="#ffffff" stroke="#0284c7" stroke-width="1.8" rx="4" />
            <rect x="690" y="65" width="220" height="24" fill="#f0f9ff" rx="4" />
            <text x="800" y="81" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Club Veranstaltung</text>
            <line x1="690" y1="89" x2="910" y2="89" stroke="#0284c7" stroke-width="1.2" />
            <text x="700" y="105" font-family="monospace" font-size="9.5" fill="#334155">- minAlter: int</text>
            <text x="700" y="119" font-family="monospace" font-size="9.5" fill="#334155">- djs: String</text>

            <!-- Vererbungslinien von Subklassen zur Oberklasse Veranstaltung -->
            <line x1="160" y1="130" x2="160" y2="155" stroke="#0f172a" stroke-width="1.5" />
            <line x1="480" y1="130" x2="480" y2="155" stroke="#0f172a" stroke-width="1.5" />
            <line x1="800" y1="130" x2="800" y2="155" stroke="#0f172a" stroke-width="1.5" />
            <line x1="160" y1="155" x2="800" y2="155" stroke="#0f172a" stroke-width="1.5" />
            <line x1="480" y1="155" x2="480" y2="195" stroke="#0f172a" stroke-width="1.8" marker-end="url(#eva-gen-arr)" />

            <!-- 2. Kern-Klassen (Center Row) -->
            <!-- Klasse Tournee (Ganzes der Komposition) -->
            <rect x="30" y="210" width="190" height="85" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" rx="4" />
            <rect x="30" y="210" width="190" height="24" fill="#f1f5f9" rx="4" />
            <text x="125" y="226" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Tournee</text>
            <line x1="30" y1="234" x2="220" y2="234" stroke="#0f172a" stroke-width="1.2" />
            <text x="40" y="250" font-family="monospace" font-size="10" fill="#334155">- tourneeId: int</text>
            <text x="40" y="266" font-family="monospace" font-size="10" fill="#334155">- titel: String</text>
            <text x="40" y="282" font-family="monospace" font-size="10" fill="#334155">- jahr: int</text>

            <!-- Klasse Veranstaltung (Zentrales Element) -->
            <rect x="320" y="210" width="320" height="90" fill="#ffffff" stroke="#2563eb" stroke-width="2.2" rx="6" />
            <rect x="320" y="210" width="320" height="26" fill="#eff6ff" rx="6" />
            <text x="480" y="227" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Veranstaltung</text>
            <line x1="320" y1="236" x2="640" y2="236" stroke="#2563eb" stroke-width="1.2" />
            <text x="330" y="253" font-family="monospace" font-size="10" fill="#1e293b">- veranstaltungsId: int</text>
            <text x="330" y="269" font-family="monospace" font-size="10" fill="#1e293b">- datum: Date</text>
            <text x="330" y="285" font-family="monospace" font-size="10" fill="#1e293b">- bezeichnung: String</text>

            <!-- Klasse Location -->
            <rect x="750" y="210" width="180" height="85" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" rx="4" />
            <rect x="750" y="210" width="180" height="24" fill="#f1f5f9" rx="4" />
            <text x="840" y="226" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Location</text>
            <line x1="750" y1="234" x2="930" y2="234" stroke="#0f172a" stroke-width="1.2" />
            <text x="760" y="250" font-family="monospace" font-size="10" fill="#334155">- name: String</text>
            <text x="760" y="266" font-family="monospace" font-size="10" fill="#334155">- adresse: String</text>
            <text x="760" y="282" font-family="monospace" font-size="10" fill="#334155">- maxKapazitaet: int</text>

            <!-- Beziehungen Mitte: Komposition Tournee ◆── * Veranstaltung -->
            <line x1="220" y1="250" x2="320" y2="250" stroke="#0f172a" stroke-width="2" marker-start="url(#eva-comp-arr)" />
            <text x="240" y="243" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">1</text>
            <text x="305" y="243" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">*</text>

            <!-- Beziehung Veranstaltung 1..* ── 1 Location -->
            <line x1="640" y1="250" x2="750" y2="250" stroke="#0f172a" stroke-width="1.8" />
            <text x="650" y="243" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">1..*</text>
            <text x="735" y="243" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">1</text>

            <!-- Beziehung Veranstaltung 1..* ── 1..* Mitarbeiter (Vertical n:m) -->
            <line x1="480" y1="300" x2="480" y2="355" stroke="#0f172a" stroke-width="1.8" />
            <text x="490" y="318" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">1..*</text>
            <text x="490" y="348" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">1..*</text>

            <!-- Klasse Mitarbeiter (Oberklasse der Rollen) -->
            <rect x="320" y="355" width="320" height="75" fill="#ffffff" stroke="#7c3aed" stroke-width="2" rx="6" />
            <rect x="320" y="355" width="320" height="24" fill="#faf5ff" rx="6" />
            <text x="480" y="371" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#6d28d9" text-anchor="middle">Mitarbeiter</text>
            <line x1="320" y1="379" x2="640" y2="379" stroke="#7c3aed" stroke-width="1.2" />
            <text x="330" y="396" font-family="monospace" font-size="10" fill="#334155">- mitarbeiterId: int</text>
            <text x="330" y="412" font-family="monospace" font-size="10" fill="#334155">- name: String, vorname: String</text>

            <!-- Vererbung Mitarbeiter zu Spezialisierungen (Bottom Row) -->
            <line x1="480" y1="430" x2="480" y2="455" stroke="#0f172a" stroke-width="1.8" marker-start="url(#eva-gen-arr)" />
            <line x1="125" y1="455" x2="835" y2="455" stroke="#0f172a" stroke-width="1.5" />
            <line x1="125" y1="455" x2="125" y2="480" stroke="#0f172a" stroke-width="1.5" />
            <line x1="360" y1="455" x2="360" y2="480" stroke="#0f172a" stroke-width="1.5" />
            <line x1="600" y1="455" x2="600" y2="480" stroke="#0f172a" stroke-width="1.5" />
            <line x1="835" y1="455" x2="835" y2="480" stroke="#0f172a" stroke-width="1.5" />

            <!-- Subklasse 1: Catering -->
            <rect x="30" y="480" width="190" height="60" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5" rx="4" />
            <rect x="30" y="480" width="190" height="22" fill="#faf5ff" rx="4" />
            <text x="125" y="495" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9" text-anchor="middle">Catering</text>
            <line x1="30" y1="502" x2="220" y2="502" stroke="#7c3aed" stroke-width="1" />
            <text x="38" y="520" font-family="monospace" font-size="9" fill="#334155">- hygienePass: boolean</text>

            <!-- Subklasse 2: Sanitäter -->
            <rect x="265" y="480" width="190" height="60" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5" rx="4" />
            <rect x="265" y="480" width="190" height="22" fill="#faf5ff" rx="4" />
            <text x="360" y="495" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9" text-anchor="middle">Sanitäter</text>
            <line x1="265" y1="502" x2="455" y2="502" stroke="#7c3aed" stroke-width="1" />
            <text x="273" y="520" font-family="monospace" font-size="9" fill="#334155">- ersthelferStufe: String</text>

            <!-- Subklasse 3: Mitarbeiter Technik -->
            <rect x="500" y="480" width="200" height="60" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5" rx="4" />
            <rect x="500" y="480" width="200" height="22" fill="#faf5ff" rx="4" />
            <text x="600" y="495" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9" text-anchor="middle">Mitarbeiter Technik</text>
            <line x1="500" y1="502" x2="700" y2="502" stroke="#7c3aed" stroke-width="1" />
            <text x="508" y="520" font-family="monospace" font-size="9" fill="#334155">- fachbereich: String</text>

            <!-- Subklasse 4: Security -->
            <rect x="740" y="480" width="190" height="60" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5" rx="4" />
            <rect x="740" y="480" width="190" height="22" fill="#faf5ff" rx="4" />
            <text x="835" y="495" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9" text-anchor="middle">Security</text>
            <line x1="740" y1="502" x2="930" y2="502" stroke="#7c3aed" stroke-width="1" />
            <text x="748" y="520" font-family="monospace" font-size="9" fill="#334155">- sachkunde34a: boolean</text>

            <!-- Bottom IHK Legend -->
            <rect x="30" y="565" width="900" height="60" fill="#f1f5f9" stroke="#cbd5e1" rx="6" />
            <text x="45" y="585" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">IHK Prüfungsmerkmale der Modellierung:</text>
            <text x="45" y="603" font-family="sans-serif" font-size="10.5" fill="#334155">1. Komposition (◆): Eine Tournee besteht aus Veranstaltungen (Lebenszykluskopplung). Multiplizität 1 am Ganzen, * am Teil.</text>
            <text x="45" y="618" font-family="sans-serif" font-size="10.5" fill="#334155">2. Zweifache Generalisierung (▷): Veranstaltungsarten erben von Veranstaltung; Einsatzrollen erben von Mitarbeiter.</text>
        </svg>
        `;
    },

    getRadlBlitzAktivitaetsdiagrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 760" width="100%" height="100%">
            <defs>
                <marker id="rb-flow-arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="1,1 7,4 1,7" fill="#0f172a" />
                </marker>
            </defs>

            <!-- Header Banner -->
            <rect width="960" height="760" fill="#f8fafc" rx="10" />
            <rect x="0" y="0" width="960" height="42" fill="#0f172a" rx="10" />
            <text x="480" y="26" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">
                UML-Aktivitätsdiagramm mit 4 Swimlanes: Kurierfahrt (RADL-BLITZ GmbH &amp; Öko-Soft GmbH)
            </text>

            <!-- 4 Swimlanes Headers -->
            <!-- Lane 1: Auftraggeber (w: 220) -->
            <rect x="25" y="50" width="220" height="32" fill="#e2e8f0" stroke="#94a3b8" />
            <text x="135" y="71" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Auftraggeber</text>
            <line x1="245" y1="50" x2="245" y2="745" stroke="#94a3b8" stroke-dasharray="4,4" />

            <!-- Lane 2: Zentrale (w: 235) -->
            <rect x="245" y="50" width="235" height="32" fill="#e0f2fe" stroke="#38bdf8" />
            <text x="362" y="71" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Zentrale</text>
            <line x1="480" y1="50" x2="480" y2="745" stroke="#94a3b8" stroke-dasharray="4,4" />

            <!-- Lane 3: Kurier (w: 235) -->
            <rect x="480" y="50" width="235" height="32" fill="#fef3c7" stroke="#fbbf24" />
            <text x="597" y="71" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">Kurier</text>
            <line x1="715" y1="50" x2="715" y2="745" stroke="#94a3b8" stroke-dasharray="4,4" />

            <!-- Lane 4: Empfänger (w: 220) -->
            <rect x="715" y="50" width="220" height="32" fill="#dcfce7" stroke="#4ade80" />
            <text x="825" y="71" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Empfänger</text>

            <!-- Outer Bounds -->
            <rect x="25" y="50" width="910" height="695" fill="none" stroke="#94a3b8" stroke-width="1.5" />

            <!-- Flow Elements -->
            <!-- Startknoten in Auftraggeber -->
            <circle cx="135" cy="105" r="10" fill="#0f172a" />
            <line x1="135" y1="115" x2="135" y2="135" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />

            <!-- Action 1: Auftragserteilung -->
            <rect x="45" y="135" width="180" height="42" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" rx="10" />
            <text x="135" y="153" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#0f172a" text-anchor="middle">Auftragserteilung an</text>
            <text x="135" y="167" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#0f172a" text-anchor="middle">Kurierdienst</text>

            <!-- Transition to Zentrale: Erfassung der Daten -->
            <path d="M 225 156 L 362 156 L 362 195" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <rect x="272" y="195" width="180" height="42" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" rx="10" />
            <text x="362" y="213" font-family="sans-serif" font-size="10" font-weight="600" fill="#0369a1" text-anchor="middle">Erfassung der Daten</text>
            <text x="362" y="227" font-family="sans-serif" font-size="10" font-weight="600" fill="#0369a1" text-anchor="middle">des Kundenauftrags</text>

            <!-- Action: Weitergabe an Kurier -->
            <line x1="362" y1="237" x2="362" y2="257" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <rect x="272" y="257" width="180" height="42" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" rx="10" />
            <text x="362" y="275" font-family="sans-serif" font-size="10" font-weight="600" fill="#0369a1" text-anchor="middle">Weitergabe des Auftrags</text>
            <text x="362" y="289" font-family="sans-serif" font-size="10" font-weight="600" fill="#0369a1" text-anchor="middle">an einen Kurier</text>

            <!-- Transition to Kurier: Übernahme der Sendung -->
            <path d="M 452 278 L 597 278 L 597 310" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <rect x="507" y="310" width="180" height="38" fill="#ffffff" stroke="#d97706" stroke-width="1.5" rx="10" />
            <text x="597" y="333" font-family="sans-serif" font-size="10" font-weight="600" fill="#b45309" text-anchor="middle">Übernahme der Sendung</text>

            <!-- Action: Erfassung & Übermittlung Sendungsdaten -->
            <line x1="597" y1="348" x2="597" y2="368" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <rect x="507" y="368" width="180" height="42" fill="#ffffff" stroke="#d97706" stroke-width="1.5" rx="10" />
            <text x="597" y="386" font-family="sans-serif" font-size="9.5" font-weight="600" fill="#b45309" text-anchor="middle">Erfassung &amp; Übermittlung</text>
            <text x="597" y="400" font-family="sans-serif" font-size="9.5" font-weight="600" fill="#b45309" text-anchor="middle">tatsächlicher Daten</text>

            <!-- FORK Node (Parallelität / Balken) -->
            <line x1="597" y1="410" x2="597" y2="425" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <rect x="330" y="425" width="300" height="7" fill="#0f172a" rx="2" />
            <text x="640" y="432" font-family="sans-serif" font-size="9" font-style="italic" fill="#64748b">FORK (Nebenläufigkeit)</text>

            <!-- Branch 1 (Zentrale): Abgleich Auftragsdaten -->
            <path d="M 362 432 L 362 470" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <rect x="272" y="470" width="180" height="42" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" rx="10" />
            <text x="362" y="488" font-family="sans-serif" font-size="10" font-weight="600" fill="#0369a1" text-anchor="middle">Abgleich der Auftrags-</text>
            <text x="362" y="502" font-family="sans-serif" font-size="10" font-weight="600" fill="#0369a1" text-anchor="middle">und Sendungsdaten</text>

            <!-- Branch 2 (Kurier): Kurierfahrt -->
            <path d="M 597 432 L 597 455" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <rect x="522" y="455" width="150" height="34" fill="#ffffff" stroke="#d97706" stroke-width="1.5" rx="10" />
            <text x="597" y="476" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#b45309" text-anchor="middle">Kurierfahrt</text>

            <!-- Kurier Auslieferung -->
            <line x1="597" y1="489" x2="597" y2="505" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <rect x="522" y="505" width="150" height="34" fill="#ffffff" stroke="#d97706" stroke-width="1.5" rx="10" />
            <text x="597" y="526" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#b45309" text-anchor="middle">Auslieferung</text>

            <!-- Decision Node (Raute) in Kurier -->
            <line x1="597" y1="539" x2="597" y2="555" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <polygon points="597,555 617,570 597,585 577,570" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />

            <!-- Decision Path A: [Pers. Übergabe] -> Empfänger -->
            <path d="M 617 570 L 735 570 L 735 585" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <text x="660" y="563" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#0f172a">[Pers. Übergabe]</text>
            <rect x="735" y="585" width="180" height="42" fill="#ffffff" stroke="#16a34a" stroke-width="1.5" rx="10" />
            <text x="825" y="603" font-family="sans-serif" font-size="9.5" font-weight="600" fill="#15803d" text-anchor="middle">Entgegennahme und</text>
            <text x="825" y="617" font-family="sans-serif" font-size="9.5" font-weight="600" fill="#15803d" text-anchor="middle">Quittierung Empfang</text>

            <!-- From Empfänger to Kurier Abschlussmeldung -->
            <path d="M 825 627 L 825 645 L 687 645" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />

            <!-- Decision Path B: [Ohne pers. Übergabe] -->
            <path d="M 577 570 L 545 570 L 545 628 L 597 628" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <text x="495" y="583" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#0f172a">[Ohne pers. Üb.]</text>

            <!-- Meldung des Abschlusses in Kurier -->
            <rect x="507" y="628" width="180" height="34" fill="#ffffff" stroke="#d97706" stroke-width="1.5" rx="10" />
            <text x="597" y="649" font-family="sans-serif" font-size="10" font-weight="600" fill="#b45309" text-anchor="middle">Meldung des Abschlusses</text>

            <!-- JOIN Node (Balken) across Zentrale & Kurier -->
            <path d="M 362 512 L 362 678" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <path d="M 597 662 L 597 678" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <rect x="330" y="678" width="300" height="7" fill="#0f172a" rx="2" />
            <text x="640" y="685" font-family="sans-serif" font-size="9" font-style="italic" fill="#64748b">JOIN (Synchronisation)</text>

            <!-- Rechnungserstellung in Zentrale -->
            <path d="M 362 685 L 362 705" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#rb-flow-arr)" />
            <rect x="282" y="705" width="160" height="32" fill="#ffffff" stroke="#0284c7" stroke-width="1.5" rx="8" />
            <text x="362" y="725" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Rechnungserstellung</text>

            <!-- Endknoten -->
            <path d="M 362 737 L 362 748" fill="none" stroke="#0f172a" stroke-width="1.8" />
            <circle cx="362" cy="748" r="7" fill="#0f172a" stroke="#0f172a" stroke-width="2" />
            <circle cx="362" cy="748" r="4" fill="#ffffff" />
            <circle cx="362" cy="748" r="3" fill="#0f172a" />
        </svg>
        `;
    },

    getImmobilienVerkaufZustandsdiagrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 560" width="100%" height="100%">
            <defs>
                <marker id="imm-st-arr" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
                    <polygon points="1,1 8,4.5 1,8" fill="#0f172a" />
                </marker>
            </defs>

            <!-- Outer Canvas & Title -->
            <rect width="960" height="560" fill="#f8fafc" rx="10" />
            <rect x="0" y="0" width="960" height="42" fill="#0f172a" rx="10" />
            <text x="480" y="26" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">
                UML-Zustandsdiagramm: Verkaufsimmobilie Lebenszyklus (B&amp;G GmbH)
            </text>

            <!-- Frame Label: Immobilie -->
            <rect x="25" y="55" width="120" height="26" fill="#f1f5f9" stroke="#94a3b8" />
            <text x="85" y="72" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Immobilie</text>
            <rect x="25" y="55" width="910" height="485" fill="none" stroke="#94a3b8" stroke-width="1.5" />

            <!-- Startknoten (Initial State) -->
            <circle cx="150" cy="110" r="10" fill="#0f172a" />
            <text x="170" y="114" font-family="monospace" font-size="10.5" fill="#475569">/ zum Verkauf freigegeben</text>
            <line x1="150" y1="120" x2="150" y2="160" stroke="#0f172a" stroke-width="1.8" marker-end="url(#imm-st-arr)" />

            <!-- State 1: Zur Verfügung stehend -->
            <rect x="50" y="160" width="200" height="65" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="12" />
            <text x="150" y="188" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Zur Verfügung</text>
            <text x="150" y="206" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">stehend</text>

            <!-- Transition: Anfrage / Infomaterial verschicken -->
            <line x1="250" y1="185" x2="420" y2="185" stroke="#0f172a" stroke-width="1.8" marker-end="url(#imm-st-arr)" />
            <text x="335" y="170" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">Anfrage /</text>
            <text x="335" y="183" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Infomaterial verschicken</text>

            <!-- State 2: angefragt -->
            <rect x="420" y="160" width="180" height="65" fill="#ffffff" stroke="#7c3aed" stroke-width="2" rx="12" />
            <text x="510" y="198" font-family="sans-serif" font-size="13" font-weight="bold" fill="#6d28d9" text-anchor="middle">angefragt</text>

            <!-- Self-transition on angefragt: weitere Anfrage -->
            <path d="M 540 160 C 540 110, 640 110, 600 160" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#imm-st-arr)" />
            <text x="640" y="125" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Anfrage /</text>
            <text x="640" y="139" font-family="sans-serif" font-size="9.5" fill="#475569">Infomaterial verschicken</text>

            <!-- Transition from angefragt down to reserviert -->
            <line x1="530" y1="225" x2="530" y2="300" stroke="#0f172a" stroke-width="1.8" marker-end="url(#imm-st-arr)" />
            <text x="540" y="255" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Reservieren /</text>
            <text x="540" y="270" font-family="sans-serif" font-size="9" fill="#475569">Reservierungsbestätigung schicken</text>

            <!-- Direct Transition from Zur Verfügung stehend down to reserviert -->
            <path d="M 150 225 L 150 325 L 420 325" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#imm-st-arr)" />
            <text x="260" y="315" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Reservieren / Reservierungsbestätigung schicken</text>

            <!-- State 3: reserviert -->
            <rect x="420" y="300" width="180" height="65" fill="#ffffff" stroke="#ea580c" stroke-width="2" rx="12" />
            <text x="510" y="338" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">reserviert</text>

            <!-- Reverse Transition: Reservierung zurücknehmen [Anfragen > 0] back to angefragt -->
            <path d="M 450 300 L 450 225" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#imm-st-arr)" />
            <text x="365" y="258" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#dc2626">Reservierung zurücknehmen</text>
            <text x="365" y="272" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#b91c1c">[Anfragen &gt; 0]</text>

            <!-- Reverse Transition: Reservierung zurücknehmen [Anfragen == 0] back to Zur Verfügung stehend -->
            <path d="M 420 345 L 75 345 L 75 225" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#imm-st-arr)" />
            <text x="180" y="360" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#dc2626">Reservierung zurücknehmen [Anfragen == 0]</text>

            <!-- Transition: Verkaufen [Vertrag unterzeichnen] -->
            <line x1="510" y1="365" x2="510" y2="430" stroke="#0f172a" stroke-width="1.8" marker-end="url(#imm-st-arr)" />
            <text x="520" y="395" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Verkaufen</text>
            <text x="520" y="409" font-family="sans-serif" font-size="9.5" fill="#15803d">[Vertrag unterzeichnen]</text>

            <!-- State 4: verkauft -->
            <rect x="420" y="430" width="180" height="55" fill="#ffffff" stroke="#16a34a" stroke-width="2.2" rx="12" />
            <text x="510" y="463" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">verkauft</text>

            <!-- Final State (Bullauge) -->
            <line x1="600" y1="457" x2="720" y2="457" stroke="#0f172a" stroke-width="1.8" marker-end="url(#imm-st-arr)" />
            <circle cx="735" cy="457" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
            <circle cx="735" cy="457" r="6" fill="#0f172a" />
            <text x="760" y="461" font-family="sans-serif" font-size="11" fill="#475569">Endzustand</text>
        </svg>
        `;
    },

    // 10. Code-Review: Trouble-Ticket Durchschnittswert (IHK Original)
    getCodeReviewTroubleTicketSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 620" width="100%" height="100%">
            <rect width="960" height="620" fill="#f8fafc" rx="10" />
            <text x="480" y="32" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">IHK Code-Review: Fehleranalyse &amp; Korrektur (Trouble-Ticket Durchschnittswert)</text>

            <!-- LEFT: Fehlerhafter Code -->
            <g transform="translate(30, 50)">
                <rect width="435" height="420" fill="#fef2f2" stroke="#ef4444" stroke-width="2" rx="8" />
                <rect width="435" height="38" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" rx="8" />
                <text x="217" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">❌ FEHLERHAFTER CODE (Eingabe: 4, 2, 8, 1)</text>

                <!-- Code Block -->
                <rect x="15" y="55" width="405" height="230" fill="#ffffff" stroke="#fca5a5" stroke-width="1" rx="6" />
                
                <!-- Line 1: int durchschnittswert -->
                <rect x="20" y="65" width="395" height="26" fill="#fee2e2" rx="4" />
                <text x="30" y="83" font-family="Consolas, monospace" font-size="12" font-weight="bold" fill="#dc2626">int durchschnittswert = 0;</text>
                <text x="250" y="83" font-family="sans-serif" font-size="11" fill="#b91c1c">◀ 1. Falscher Typ (int)</text>

                <!-- Line 2: int summe -->
                <rect x="20" y="95" width="395" height="26" fill="#fee2e2" rx="4" />
                <text x="30" y="113" font-family="Consolas, monospace" font-size="12" font-weight="bold" fill="#dc2626">int summe = 0;</text>
                <text x="250" y="113" font-family="sans-serif" font-size="11" fill="#b91c1c">◀ 2. Falscher Typ (int)</text>

                <!-- Line 3: for loop starting at 1 -->
                <rect x="20" y="125" width="395" height="26" fill="#fecaca" stroke="#dc2626" stroke-width="1.2" rx="4" />
                <text x="30" y="143" font-family="Consolas, monospace" font-size="12" font-weight="bold" fill="#991b1b">for(int i = 1; i &lt; daten.Length; i++)</text>
                <text x="30" y="162" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b91c1c">   ▲ Startet bei i = 1 ➔ daten[0] (=4) wird IGNORIERT!</text>

                <!-- Loop body -->
                <text x="30" y="185" font-family="Consolas, monospace" font-size="12" fill="#334155">{</text>
                <text x="50" y="205" font-family="Consolas, monospace" font-size="12" fill="#334155">summe = summe + daten[i];</text>
                <text x="30" y="225" font-family="Consolas, monospace" font-size="12" fill="#334155">}</text>

                <!-- Division line -->
                <rect x="20" y="235" width="395" height="42" fill="#fecaca" stroke="#dc2626" stroke-width="1.2" rx="4" />
                <text x="30" y="253" font-family="Consolas, monospace" font-size="12" font-weight="bold" fill="#991b1b">durchschnittswert = summe / daten.Length;</text>
                <text x="30" y="270" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">   ▲ Integer-Division: 11 / 4 = 2 (Nachkommastellen abgeschnitten!)</text>

                <!-- Auswertung box -->
                <rect x="15" y="300" width="405" height="105" fill="#ffffff" stroke="#ef4444" stroke-width="1.5" rx="6" />
                <text x="25" y="322" font-family="sans-serif" font-size="12" font-weight="bold" fill="#991b1b">Laufzeitanalyse mit Array [4, 2, 8, 1]:</text>
                <text x="25" y="342" font-family="sans-serif" font-size="11.5" fill="#475569">• daten[0] = 4 wird übersprungen (Schleife beginnt bei i=1)</text>
                <text x="25" y="360" font-family="sans-serif" font-size="11.5" fill="#475569">• summe = 2 + 8 + 1 = <tspan font-weight="bold" fill="#dc2626">11</tspan> (statt 15)</text>
                <text x="25" y="378" font-family="sans-serif" font-size="11.5" fill="#475569">• Ganzzahldivision: 11 / 4 = <tspan font-weight="bold" fill="#dc2626">2</tspan> (Rest 3 verworfen!)</text>
                <text x="25" y="396" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#b91c1c">➔ Ergebnis: 2 (FALSCH! Erwartet war 3.75)</text>
            </g>

            <!-- RIGHT: Korrigierter Code -->
            <g transform="translate(495, 50)">
                <rect width="435" height="420" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" rx="8" />
                <rect width="435" height="38" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="8" />
                <text x="217" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">✅ KORRIGIERTER CODE (IHK-Musterlösung)</text>

                <!-- Code Block -->
                <rect x="15" y="55" width="405" height="230" fill="#ffffff" stroke="#86efac" stroke-width="1" rx="6" />
                
                <!-- Line 1: double durchschnittswert -->
                <rect x="20" y="65" width="395" height="26" fill="#dcfce7" rx="4" />
                <text x="30" y="83" font-family="Consolas, monospace" font-size="12" font-weight="bold" fill="#15803d">double durchschnittswert = 0.0;</text>
                <text x="265" y="83" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d">✔ double für Kommazahl</text>

                <!-- Line 2: double summe -->
                <rect x="20" y="95" width="395" height="26" fill="#dcfce7" rx="4" />
                <text x="30" y="113" font-family="Consolas, monospace" font-size="12" font-weight="bold" fill="#15803d">double summe = 0.0;</text>
                <text x="265" y="113" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d">✔ Gleitkomma-Summe</text>

                <!-- Line 3: for loop starting at 0 -->
                <rect x="20" y="125" width="395" height="26" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.2" rx="4" />
                <text x="30" y="143" font-family="Consolas, monospace" font-size="12" font-weight="bold" fill="#14532d">for(int i = 0; i &lt; daten.Length; i++)</text>
                <text x="30" y="162" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#15803d">   ✔ Startet bei i = 0 (alle 4 Elemente einbezogen!)</text>

                <!-- Loop body -->
                <text x="30" y="185" font-family="Consolas, monospace" font-size="12" fill="#334155">{</text>
                <text x="50" y="205" font-family="Consolas, monospace" font-size="12" fill="#334155">summe = summe + daten[i];</text>
                <text x="30" y="225" font-family="Consolas, monospace" font-size="12" fill="#334155">}</text>

                <!-- Division line -->
                <rect x="20" y="235" width="395" height="42" fill="#dcfce7" stroke="#16a34a" stroke-width="1.2" rx="4" />
                <text x="30" y="253" font-family="Consolas, monospace" font-size="12" font-weight="bold" fill="#15803d">durchschnittswert = summe / daten.Length;</text>
                <text x="30" y="270" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d">   ✔ Fließkommadivision: 15.0 / 4 = 3.75</text>

                <!-- Auswertung box -->
                <rect x="15" y="300" width="405" height="105" fill="#ffffff" stroke="#16a34a" stroke-width="1.5" rx="6" />
                <text x="25" y="322" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534">Korrektes Rechenergebnis:</text>
                <text x="25" y="342" font-family="sans-serif" font-size="11.5" fill="#475569">• Alle Indizes: 0, 1, 2, 3 werden erfasst</text>
                <text x="25" y="360" font-family="sans-serif" font-size="11.5" fill="#475569">• summe = 4 + 2 + 8 + 1 = <tspan font-weight="bold" fill="#15803d">15.0</tspan></text>
                <text x="25" y="378" font-family="sans-serif" font-size="11.5" fill="#475569">• Fließkommadivision: 15.0 / 4 = <tspan font-weight="bold" fill="#15803d">3.75</tspan></text>
                <text x="25" y="396" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#15803d">➔ Ergebnis: 3.75 (EXAKT WIE GEFORDERT!)</text>
            </g>

            <!-- BOTTOM: IHK Prüfungs-Schlüsselkriterien -->
            <g transform="translate(30, 485)">
                <rect width="900" height="115" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8" rx="8" />
                <text x="20" y="24" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#1e40af">🎯 Die 3 goldenen IHK-Prüfungsregeln bei Code-Reviews (AP1):</text>
                <text x="20" y="48" font-family="sans-serif" font-size="11.5" fill="#1e3a8a">1. <tspan font-weight="bold">Zero-Based Indexing:</tspan> Arrays beginnen in C#, Java, JavaScript und Python bei Index 0. Schleife bis &lt; Length oder &lt;= Length - 1.</text>
                <text x="20" y="70" font-family="sans-serif" font-size="11.5" fill="#1e3a8a">2. <tspan font-weight="bold">Integer Truncation vermeiden:</tspan> Ganzzahl / Ganzzahl schneidet Kommastellen strikt ab. Mindestens ein Operand muss double sein (oder expliziter Typecast (double)summe).</text>
                <text x="20" y="92" font-family="sans-serif" font-size="11.5" fill="#1e3a8a">3. <tspan font-weight="bold">Ziel-Datentyp:</tspan> Die Ergebnisvariable für einen mathematischen Durchschnitt muss stets einen Gleitkommatyp (double oder float) besitzen.</text>
            </g>
        </svg>
        `;
    },

    // 11. DIN 66261 Nassi-Shneiderman Struktogramm: SucheMAC Lineare Suche (IHK Original)
    getMacSucheStruktogrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 620" width="100%" height="100%">
            <rect width="860" height="620" fill="#f8fafc" rx="10" />
            <text x="430" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">DIN 66261 Nassi-Shneiderman Struktogramm: SucheMAC (Lineare Suche)</text>
            <text x="430" y="50" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">IHK Originalaufgabe IT 3 Software-Entwicklung (Systemhaus KG, 16 Punkte)</text>

            <!-- Main Struktogramm Outer Box -->
            <g transform="translate(60, 70)">
                <rect width="740" height="430" fill="#ffffff" stroke="#0f172a" stroke-width="2.5" />

                <!-- 1. Funktionssignatur / Kopfblock -->
                <rect x="0" y="0" width="740" height="45" fill="#f1f5f9" stroke="#0f172a" stroke-width="1.8" />
                <text x="20" y="27" font-family="Consolas, monospace" font-size="13.5" font-weight="bold" fill="#0f172a">Methode SucheMAC (Eingabe: string[] macAdressen, string gesucht) ➔ Rückgabe: bool</text>

                <!-- 2. Zählschleife: L-förmiger Rahmen -->
                <!-- Schleifenkopf horizontal -->
                <rect x="0" y="45" width="740" height="40" fill="#fef3c7" stroke="#0f172a" stroke-width="1.8" />
                <text x="20" y="70" font-family="sans-serif" font-size="13" font-weight="bold" fill="#92400e">FÜR i = 0 BIS (Länge von macAdressen - 1) SCHRITT 1</text>
                <text x="490" y="70" font-family="sans-serif" font-size="11.5" font-style="italic" fill="#b45309">(Alternativ: FÜR JEDES mac IN macAdressen)</text>

                <!-- Linker L-Steg (Schleifenkörper) -->
                <rect x="0" y="85" width="40" height="240" fill="#fef3c7" stroke="#0f172a" stroke-width="1.8" />
                
                <!-- Schleifen-Innenbereich (x von 40 bis 740, Breite 700) -->
                <g transform="translate(40, 85)">
                    <!-- Verzweigung: Dreieck -->
                    <polygon points="0,0 700,0 350,70" fill="#e0f2fe" stroke="#0f172a" stroke-width="1.8" />
                    <text x="350" y="32" font-family="Consolas, monospace" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">macAdressen[i] == gesucht ?</text>
                    <text x="45" y="55" font-family="sans-serif" font-size="13" font-weight="bold" fill="#16a34a">JA</text>
                    <text x="655" y="55" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">NEIN</text>

                    <!-- Vertikale Trennlinie unter der Dreiecksspitze -->
                    <line x1="350" y1="70" x2="350" y2="240" stroke="#0f172a" stroke-width="1.8" />

                    <!-- JA-Pfad (links, Breite 350): Treffer gefunden! -->
                    <rect x="0" y="70" width="350" height="85" fill="#dcfce7" stroke="#0f172a" stroke-width="1" />
                    <text x="25" y="105" font-family="Consolas, monospace" font-size="13" font-weight="bold" fill="#15803d">RÜCKGABE true</text>
                    <text x="25" y="128" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#166534">(Methode sofort beenden / Early Exit)</text>

                    <rect x="0" y="155" width="350" height="85" fill="#f0fdf4" stroke="#0f172a" stroke-width="1" />
                    <text x="25" y="195" font-family="sans-serif" font-size="11.5" fill="#166534">• Treffer garantiert vorhanden</text>
                    <text x="25" y="215" font-family="sans-serif" font-size="11.5" fill="#166534">• Keine weiteren Prüfungen nötig</text>

                    <!-- NEIN-Pfad (rechts, Breite 350): Kein Treffer bei diesem Element -->
                    <rect x="350" y="70" width="350" height="170" fill="#f8fafc" stroke="#0f172a" stroke-width="1" />
                    <line x1="350" y1="240" x2="700" y2="70" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
                    <text x="430" y="145" font-family="sans-serif" font-size="12" font-style="italic" fill="#64748b">Keine Aktion</text>
                    <text x="430" y="168" font-family="sans-serif" font-size="11.5" fill="#475569">(Nächster Schleifendurchlauf i++)</text>
                </g>

                <!-- 3. Nach der Schleife (vollständige Breite 740): Wenn gesamte Schleife ohne Treffer durchlief -->
                <rect x="0" y="325" width="740" height="105" fill="#fee2e2" stroke="#0f172a" stroke-width="1.8" />
                <text x="30" y="360" font-family="Consolas, monospace" font-size="14" font-weight="bold" fill="#991b1b">RÜCKGABE false</text>
                <text x="30" y="385" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c">(Gesamtes Array wurde vollständig durchsucht, Adresse nicht gefunden!)</text>
                <text x="30" y="408" font-family="sans-serif" font-size="11" fill="#475569">Methode beenden.</text>
            </g>

            <!-- Warning / IHK Trap Box -->
            <g transform="translate(60, 515)">
                <rect width="740" height="85" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8" rx="8" />
                <text x="20" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309">⚠️ Häufigste IHK-Prüfungsfalle bei Suchalgorithmen:</text>
                <text x="20" y="46" font-family="sans-serif" font-size="11.5" fill="#92400e">Viele Prüflinge tragen im NEIN-Ast der Schleife fälschlicherweise ein: <tspan font-weight="bold" fill="#dc2626">"RÜCKGABE false"</tspan>.</text>
                <text x="20" y="66" font-family="sans-serif" font-size="11.5" fill="#78350f">➔ Folge: Stimmt das ERSTE Element nicht überein, bricht das Programm sofort mit false ab und prüft die restlichen Computer nie! 'false' gehört immer erst <tspan font-weight="bold">NACH</tspan> das Schleifenende!</text>
            </g>
        </svg>
        `;
    },

    // 2i. UML-Sequenzdiagramm: Stornierungsvorgang Buchungsverwaltung (alt-Fragment, IHK Original)
    getBuchungsverwaltungSequenzdiagrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 640" width="100%" height="100%">
            <defs>
                <marker id="bv-sync-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
                </marker>
                <marker id="bv-ret-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="#0f172a" stroke-width="1.8" />
                </marker>
            </defs>
            <rect width="880" height="640" fill="#f8fafc" rx="10" />
            <text x="440" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">UML 2.5 Sequenzdiagramm: Stornierungsvorgang Buchungsverwaltung</text>
            <text x="440" y="50" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">IHK Original-Prüfungsaufgabe (mit kombiniertem alt-Fragment)</text>

            <!-- Caller Actor Line (Left) -->
            <line x1="120" y1="80" x2="120" y2="570" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6,6" />
            <rect x="50" y="70" width="140" height="36" fill="#f1f5f9" stroke="#475569" stroke-width="1.8" rx="6" />
            <text x="120" y="93" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#0f172a" text-anchor="middle">:Anwender / UI</text>

            <!-- :Buchungsverwaltung Lifeline -->
            <rect x="420" y="70" width="220" height="36" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="6" />
            <text x="530" y="93" font-family="Consolas, monospace" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">:Buchungsverwaltung</text>
            <line x1="530" y1="106" x2="530" y2="570" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="6,6" />

            <!-- Activation Bar on :Buchungsverwaltung -->
            <rect x="522" y="130" width="16" height="410" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />

            <!-- 1. stornieren(Buchungsnummer) -->
            <line x1="120" y1="135" x2="520" y2="135" stroke="#0f172a" stroke-width="1.8" marker-end="url(#bv-sync-arr)" />
            <text x="320" y="127" font-family="Consolas, monospace" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">stornieren(buchungsNr)</text>

            <!-- 2. Self-call: getBuchung(buchungsNr) -->
            <path d="M 538 155 L 610 155 L 610 185 L 538 185" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#bv-sync-arr)" />
            <text x="620" y="174" font-family="Consolas, monospace" font-size="11.5" fill="#0f172a">getBuchung(buchungsNr)</text>

            <!-- 3. alt Fragment Box -->
            <g transform="translate(160, 205)">
                <rect width="660" height="315" fill="#ffffff" fill-opacity="0.85" stroke="#0f172a" stroke-width="2" />
                
                <!-- alt Tag Header -->
                <polygon points="0,0 70,0 70,22 56,28 0,28" fill="#f1f5f9" stroke="#0f172a" stroke-width="1.5" />
                <text x="18" y="19" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">alt</text>

                <!-- Condition 1: [Buchung vorhanden] -->
                <text x="85" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">[Buchung vorhanden]</text>

                <!-- Inside alt: ermittleStornogebühr -->
                <path d="M 378 40 L 450 40 L 450 65 L 378 65" fill="none" stroke="#0f172a" stroke-width="1.6" marker-end="url(#bv-sync-arr)" />
                <text x="460" y="57" font-family="Consolas, monospace" font-size="11" fill="#0f172a">ermittleStornogebühr(buchung)</text>

                <!-- Inside alt: erstelleRechnung -->
                <path d="M 378 85 L 450 85 L 450 110 L 378 110" fill="none" stroke="#0f172a" stroke-width="1.6" marker-end="url(#bv-sync-arr)" />
                <text x="460" y="102" font-family="Consolas, monospace" font-size="11" fill="#0f172a">erstelleRechnung(buchung, stornogebühr)</text>

                <!-- Inside alt: löscheBuchung -->
                <path d="M 378 130 L 450 130 L 450 155 L 378 155" fill="none" stroke="#0f172a" stroke-width="1.6" marker-end="url(#bv-sync-arr)" />
                <text x="460" y="147" font-family="Consolas, monospace" font-size="11" fill="#0f172a">löscheBuchung(buchungsNr)</text>

                <!-- Return: Meldung Buchung gelöscht -->
                <line x1="362" y1="180" x2="-40" y2="180" stroke="#0f172a" stroke-width="1.6" stroke-dasharray="5,5" marker-end="url(#bv-ret-arr)" />
                <text x="160" y="173" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#15803d" text-anchor="middle">Meldung: "Buchung gelöscht"</text>

                <!-- Dashed Divider Line for [else] -->
                <line x1="0" y1="210" x2="660" y2="210" stroke="#64748b" stroke-width="1.8" stroke-dasharray="6,4" />

                <!-- Condition 2: [else] / [keine Buchung vorhanden] -->
                <text x="85" y="235" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">[else] (Buchung nicht vorhanden)</text>

                <!-- Return in else branch: Meldung keine Buchung vorhanden -->
                <line x1="362" y1="270" x2="-40" y2="270" stroke="#0f172a" stroke-width="1.6" stroke-dasharray="5,5" marker-end="url(#bv-ret-arr)" />
                <text x="160" y="263" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#dc2626" text-anchor="middle">Meldung: "keine Buchung vorhanden"</text>
            </g>

            <!-- Bottom Explanation Box -->
            <g transform="translate(60, 555)">
                <rect width="760" height="65" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6" />
                <text x="15" y="22" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e40af">💡 IHK-Prüfungskriterien für Sequenzdiagramme mit Bedingungen:</text>
                <text x="15" y="42" font-family="sans-serif" font-size="11" fill="#1e3a8a">• Fragment alt (Alternative) trennt sich gegenseitig ausschließende Pfade mit gestrichelter Trennlinie.</text>
                <text x="15" y="57" font-family="sans-serif" font-size="11" fill="#1e3a8a">• Methodenaufrufe auf derselben Klasse sind Selbstaufrufe. Antwortnachrichten sind gestrichelt.</text>
            </g>
        </svg>
        `;
    },

    // 2j. UML-Sequenzdiagramm: PixelPic AG Onlineshop (create, bild, pruefung, IHK Original)
    getPixelPicOnlineshopSequenzdiagrammSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 720" width="100%" height="100%">
            <defs>
                <marker id="px-sync-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
                </marker>
                <marker id="px-ret-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="#0f172a" stroke-width="1.8" />
                </marker>
            </defs>
            <rect width="960" height="720" fill="#f8fafc" rx="10" />
            <text x="480" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">UML Sequenzdiagramm: PixelPic AG Onlineshop (Bestellprozess &amp; create)</text>
            <text x="480" y="50" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">IHK Original-Prüfungsaufgabe (Dynamische Objekterzeugung &amp; Selbstaufruf)</text>

            <!-- Lifelines -->
            <!-- 1. :Kunde -->
            <rect x="60" y="70" width="120" height="36" fill="#f1f5f9" stroke="#0f172a" stroke-width="1.8" rx="6" />
            <text x="120" y="93" font-family="Consolas, monospace" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">:Kunde</text>
            <line x1="120" y1="106" x2="120" y2="640" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,6" />

            <!-- 2. :Shop -->
            <rect x="300" y="70" width="120" height="36" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="6" />
            <text x="360" y="93" font-family="Consolas, monospace" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">:Shop</text>
            <line x1="360" y1="106" x2="360" y2="640" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="6,6" />

            <!-- 3. :Produktvorlage (dynamisch erzeugt) -->
            <line x1="600" y1="210" x2="600" y2="640" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,6" />
            <rect x="530" y="195" width="140" height="36" fill="#fef3c7" stroke="#b45309" stroke-width="1.8" rx="6" />
            <text x="600" y="218" font-family="Consolas, monospace" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">:Produktvorlage</text>

            <!-- 4. :Auftragsbestaetigung (dynamisch erzeugt) -->
            <line x1="820" y1="520" x2="820" y2="640" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,6" />
            <rect x="730" y="505" width="180" height="36" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8" rx="6" />
            <text x="820" y="528" font-family="Consolas, monospace" font-size="11.5" font-weight="bold" fill="#15803d" text-anchor="middle">:Auftragsbestaetigung</text>

            <!-- Activation Bars -->
            <rect x="113" y="115" width="14" height="40" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
            <rect x="353" y="125" width="14" height="40" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />

            <!-- 1. Zeige Startseite -->
            <line x1="120" y1="125" x2="353" y2="125" stroke="#0f172a" stroke-width="1.8" marker-end="url(#px-sync-arr)" />
            <text x="236" y="118" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Zeige Startseite</text>

            <!-- Response: Startseite -->
            <line x1="353" y1="150" x2="127" y2="150" stroke="#0f172a" stroke-width="1.6" stroke-dasharray="5,5" marker-end="url(#px-ret-arr)" />
            <text x="236" y="144" font-family="sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">Startseite (Foto, Poster)</text>

            <!-- 2. "meine Wahl" -->
            <rect x="113" y="170" width="14" height="40" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
            <rect x="353" y="175" width="14" height="385" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />

            <line x1="120" y1="175" x2="353" y2="175" stroke="#0f172a" stroke-width="1.8" marker-end="url(#px-sync-arr)" />
            <text x="236" y="168" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">"meine Wahl" (Produktart)</text>

            <!-- Erzeugungsnachricht: create() to :Produktvorlage header -->
            <line x1="367" y1="212" x2="528" y2="212" stroke="#0f172a" stroke-width="1.8" stroke-dasharray="6,4" marker-end="url(#px-sync-arr)" />
            <text x="445" y="204" font-family="Consolas, monospace" font-size="11.5" font-weight="bold" fill="#b45309" text-anchor="middle">&lt;&lt;create&gt;&gt; create()</text>

            <!-- Response to Kunde: Leere Produktvorlage -->
            <line x1="353" y1="230" x2="120" y2="230" stroke="#0f172a" stroke-width="1.6" stroke-dasharray="5,5" marker-end="url(#px-ret-arr)" />
            <text x="236" y="224" font-family="sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">Leere Produktvorlage (Upload-Aufforderung)</text>

            <!-- 3. Kunde lädt Bild hoch -->
            <line x1="120" y1="260" x2="353" y2="260" stroke="#0f172a" stroke-width="1.8" marker-end="url(#px-sync-arr)" />
            <text x="236" y="253" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Bild (Upload)</text>

            <!-- Shop übergibt Bild an Produktvorlage: bild() -->
            <rect x="593" y="270" width="14" height="45" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
            <line x1="367" y1="270" x2="593" y2="270" stroke="#0f172a" stroke-width="1.8" marker-end="url(#px-sync-arr)" />
            <text x="480" y="263" font-family="Consolas, monospace" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">bild(bildDaten)</text>

            <!-- Return from Produktvorlage: "Bild eingefügt" -->
            <line x1="593" y1="300" x2="367" y2="300" stroke="#0f172a" stroke-width="1.6" stroke-dasharray="5,5" marker-end="url(#px-ret-arr)" />
            <text x="480" y="294" font-family="sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">"Bild ist eingefügt"</text>

            <!-- Response to Kunde: Fertige Produktvorlage + Adressaufforderung -->
            <line x1="353" y1="320" x2="120" y2="320" stroke="#0f172a" stroke-width="1.6" stroke-dasharray="5,5" marker-end="url(#px-ret-arr)" />
            <text x="236" y="314" font-family="sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">Fertige Produktvorlage (Eingabeaufforderung)</text>

            <!-- 4. Kunde übermittelt Kundendaten -->
            <line x1="120" y1="350" x2="353" y2="350" stroke="#0f172a" stroke-width="1.8" marker-end="url(#px-sync-arr)" />
            <text x="236" y="343" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Kundendaten (Adress- &amp; Zahlungsdaten)</text>

            <!-- Self-call: pruefung() on Shop -->
            <path d="M 367 365 L 435 365 L 435 395 L 367 395" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#px-sync-arr)" />
            <text x="445" y="384" font-family="Consolas, monospace" font-size="11.5" font-weight="bold" fill="#0f172a">pruefung()</text>

            <!-- Return from self-call: "Daten o.k." -->
            <line x1="367" y1="410" x2="353" y2="410" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4" marker-end="url(#px-ret-arr)" />
            <text x="445" y="412" font-family="sans-serif" font-size="10.5" fill="#15803d">"Daten o. k."</text>

            <!-- Shop informiert Kunden: "Zur Annahme bereit" -->
            <line x1="353" y1="430" x2="120" y2="430" stroke="#0f172a" stroke-width="1.6" stroke-dasharray="5,5" marker-end="url(#px-ret-arr)" />
            <text x="236" y="424" font-family="sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">"Zur Annahme bereit"</text>

            <!-- 5. Kunde erteilt Auftrag -->
            <line x1="120" y1="460" x2="353" y2="460" stroke="#0f172a" stroke-width="1.8" marker-end="url(#px-sync-arr)" />
            <text x="236" y="453" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">"Auftrag" (Bestätigung)</text>

            <!-- Erzeugungsnachricht: create() to :Auftragsbestaetigung -->
            <line x1="367" y1="522" x2="728" y2="522" stroke="#0f172a" stroke-width="1.8" stroke-dasharray="6,4" marker-end="url(#px-sync-arr)" />
            <text x="545" y="515" font-family="Consolas, monospace" font-size="11.5" font-weight="bold" fill="#15803d" text-anchor="middle">&lt;&lt;create&gt;&gt; create()</text>

            <!-- Shop verschickt E-Mail an Kunden -->
            <line x1="353" y1="550" x2="120" y2="550" stroke="#0f172a" stroke-width="1.8" stroke-dasharray="5,5" marker-end="url(#px-ret-arr)" />
            <text x="236" y="543" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">E-Mail (Auftragsbestätigung)</text>

            <!-- Footer Rules -->
            <g transform="translate(60, 650)">
                <rect width="840" height="55" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5" rx="6" />
                <text x="15" y="22" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#15803d">🎯 IHK-Kernregeln bei PixelPic AG (AP1):</text>
                <text x="15" y="40" font-family="sans-serif" font-size="11" fill="#166534">1. Objekterzeugung: Der Pfeil für create() zielt direkt auf das Rechteck des neuen Objekts. 2. Antwortnachrichten: Gestrichelt mit offener Pfeilspitze.</text>
            </g>
        </svg>
        `;
    },

    // 2k. EPK zu UML-Aktivitätsdiagramm Transformation (dLine AG Auftragsbearbeitung)
    getEpkToAktivitaetTransformationSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 620" width="100%" height="100%">
            <rect width="960" height="620" fill="#f8fafc" rx="10" />
            <text x="480" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">IHK Transformation: EPK (Ereignisgesteuert) ➔ UML-Aktivitätsdiagramm (dLine AG)</text>
            <text x="480" y="50" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Gegenüberstellung der Notationselemente (Ereignisse, Funktionen, Gateways &amp; Swimlanes)</text>

            <!-- LEFT BOX: EPK Notationsprinzip -->
            <g transform="translate(40, 70)">
                <rect width="420" height="450" fill="#ffffff" stroke="#94a3b8" stroke-width="2" rx="8" />
                <rect width="420" height="36" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" rx="8" />
                <text x="210" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">EPK (Ereignisgesteuerte Prozesskette)</text>

                <!-- 1. Ereignis (Sechseck) -->
                <polygon points="40,65 140,65 155,85 140,105 40,105 25,85" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
                <text x="90" y="89" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Ereignis</text>
                <text x="175" y="82" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a">Ereignis (Sechseck/Hexagon):</text>
                <text x="175" y="98" font-family="sans-serif" font-size="10.5" fill="#475569">Zustand ("Auftrag ist erfasst")</text>

                <!-- 2. Funktion (Abgerundetes Rechteck) -->
                <rect x="30" y="130" width="120" height="40" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5" rx="8" />
                <text x="90" y="155" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">Funktion</text>
                <text x="175" y="147" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a">Funktion (abgerundetes Rechteck):</text>
                <text x="175" y="163" font-family="sans-serif" font-size="10.5" fill="#475569">Aktivität / Verb ("Auftrag erfassen")</text>

                <!-- 3. Organisationseinheit (Ellipse) -->
                <ellipse cx="90" cy="220" rx="60" ry="20" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5" />
                <text x="90" y="224" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9a3412" text-anchor="middle">Verkauf</text>
                <text x="175" y="215" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a">Organisationseinheit (Ellipse):</text>
                <text x="175" y="231" font-family="sans-serif" font-size="10.5" fill="#475569">Wer führt aus? (Verkauf, Versand)</text>

                <!-- 4. Konnektoren XOR & AND -->
                <circle cx="90" cy="290" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
                <text x="90" y="295" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">XOR</text>
                <text x="175" y="285" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a">Konnektoren (Kreise):</text>
                <text x="175" y="301" font-family="sans-serif" font-size="10.5" fill="#475569">XOR (Exklusiv-Oder), AND (Und)</text>

                <!-- Flow Rule Box -->
                <rect x="20" y="340" width="380" height="90" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" rx="6" />
                <text x="30" y="362" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">EPK-Regeln in der IHK:</text>
                <text x="30" y="380" font-family="sans-serif" font-size="10.5" fill="#475569">• Strikter Wechsel: Ereignis ➔ Funktion ➔ Ereignis</text>
                <text x="30" y="398" font-family="sans-serif" font-size="10.5" fill="#475569">• Nach Konnektoren folgen immer Ereignisse</text>
                <text x="30" y="416" font-family="sans-serif" font-size="10.5" fill="#475569">• Start und Ende sind zwingend Ereignisse</text>
            </g>

            <!-- RIGHT BOX: UML-Aktivitätsdiagramm Äquivalent -->
            <g transform="translate(500, 70)">
                <rect width="420" height="450" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="8" />
                <rect width="420" height="36" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="8" />
                <text x="210" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">UML 2.5 Aktivitätsdiagramm (Zielnotation)</text>

                <!-- 1. Ereignis entfällt / wird zu Kontrollfluss -->
                <circle cx="90" cy="85" r="12" fill="#0f172a" />
                <text x="175" y="82" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a">Startknoten / Kanten (Kantenfluss):</text>
                <text x="175" y="98" font-family="sans-serif" font-size="10.5" fill="#475569">Ereignisse entfallen als eigene Kästen!</text>

                <!-- 2. Aktion / Aktivität -->
                <rect x="30" y="130" width="120" height="40" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8" rx="10" />
                <text x="90" y="155" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Aktion</text>
                <text x="175" y="147" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a">Aktion (abgerundetes Rechteck):</text>
                <text x="175" y="163" font-family="sans-serif" font-size="10.5" fill="#475569">Entspricht 1:1 der EPK-Funktion</text>

                <!-- 3. Partition / Swimlane -->
                <rect x="35" y="200" width="110" height="38" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3" />
                <text x="90" y="224" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">Swimlane: Verkauf</text>
                <text x="175" y="215" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a">Swimlane / Partition (Spalten):</text>
                <text x="175" y="231" font-family="sans-serif" font-size="10.5" fill="#475569">Ersetzt die Ellipsen der EPK</text>

                <!-- 4. Decision-Raute & Fork-Balken -->
                <polygon points="90,265 115,290 90,315 65,290" fill="#fef3c7" stroke="#b45309" stroke-width="1.5" />
                <text x="175" y="278" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a">Decision / Merge (Raute ♢):</text>
                <text x="175" y="294" font-family="sans-serif" font-size="10.5" fill="#475569">Ersetzt das EPK-XOR</text>
                <text x="175" y="310" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0369a1">Fork / Join (dicker schwarzer Balken):</text>
                <text x="175" y="324" font-family="sans-serif" font-size="10.5" fill="#475569">Ersetzt das EPK-AND (Parallelität)</text>

                <!-- Flow Rule Box -->
                <rect x="20" y="340" width="380" height="90" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.2" rx="6" />
                <text x="30" y="362" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1">Transformations-Leitfaden:</text>
                <text x="30" y="380" font-family="sans-serif" font-size="10.5" fill="#475569">1. Spalten / Swimlanes für Verkauf, Versand, Buchhaltung</text>
                <text x="30" y="398" font-family="sans-serif" font-size="10.5" fill="#475569">2. EPK-Funktionen werden Aktionen in den Swimlanes</text>
                <text x="30" y="416" font-family="sans-serif" font-size="10.5" fill="#475569">3. XOR-Konnektor wird Decision-Raute mit [Guards]</text>
            </g>

            <!-- Bottom summary -->
            <g transform="translate(40, 535)">
                <rect width="880" height="65" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" rx="6" />
                <text x="20" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">📌 IHK-Zusammenfassung der Transformation dLine AG:</text>
                <text x="20" y="44" font-family="sans-serif" font-size="11" fill="#334155">• In UML werden die Zwischenzustände (Sechsecke wie "Auftrag ist erfasst") NICHT gezeichnet, sondern durch gerichtete Pfeile dargestellt.</text>
                <text x="20" y="58" font-family="sans-serif" font-size="11" fill="#334155">• Parallele Zweige (AND in EPK) erfordern in UML Synchronisationsbalken (FORK zum Starten, JOIN zum Zusammenführen).</text>
            </g>
        </svg>
        `;
    },

    // 2l. UML Use-Case-Diagramm: Ferienhausvermietung (B&G GmbH & Immo-IT)
    getFerienhausUseCaseSvg: function() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 460" width="100%" height="100%">
            <defs>
                <marker id="uc-fh-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
                </marker>
                <marker id="uc-fh-dash" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
                </marker>
            </defs>
            <rect width="880" height="460" fill="#f8fafc" rx="10" />
            <text x="440" y="30" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">UML 2.5 Use-Case-Diagramm: Ferienhausvermietung (B&amp;G GmbH / Immo-IT)</text>
            <text x="440" y="50" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">IHK Original-Prüfungsaufgabe (Akteure Vermieter &amp; Kunde, Systemgrenze &amp; Anwendungsfälle)</text>

            <!-- System Border -->
            <rect x="220" y="70" width="440" height="360" fill="#ffffff" stroke="#0284c7" stroke-width="2" stroke-dasharray="6,4" rx="8" />
            <text x="240" y="95" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1">System: Immo-IT Ferienhaus-Portal</text>

            <!-- Actor Left: Kunde -->
            <g transform="translate(80, 160)">
                <circle cx="30" cy="20" r="14" fill="#f1f5f9" stroke="#1e293b" stroke-width="2.2" />
                <line x1="30" y1="34" x2="30" y2="75" stroke="#1e293b" stroke-width="2.2" />
                <line x1="10" y1="48" x2="50" y2="48" stroke="#1e293b" stroke-width="2.2" />
                <line x1="30" y1="75" x2="12" y2="115" stroke="#1e293b" stroke-width="2.2" />
                <line x1="30" y1="75" x2="48" y2="115" stroke="#1e293b" stroke-width="2.2" />
                <text x="30" y="135" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Kunde</text>
            </g>

            <!-- Actor Right: Vermieter -->
            <g transform="translate(740, 160)">
                <circle cx="30" cy="20" r="14" fill="#f1f5f9" stroke="#1e293b" stroke-width="2.2" />
                <line x1="30" y1="34" x2="30" y2="75" stroke="#1e293b" stroke-width="2.2" />
                <line x1="10" y1="48" x2="50" y2="48" stroke="#1e293b" stroke-width="2.2" />
                <line x1="30" y1="75" x2="12" y2="115" stroke="#1e293b" stroke-width="2.2" />
                <line x1="30" y1="75" x2="48" y2="115" stroke="#1e293b" stroke-width="2.2" />
                <text x="30" y="135" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Vermieter</text>
            </g>

            <!-- Use Cases Inside System -->
            <!-- UC 1: Ferienhaus einstellen (Vermieter) -->
            <ellipse cx="440" cy="125" rx="115" ry="24" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="440" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">Ferienhaus einstellen</text>
            <line x1="740" y1="200" x2="555" y2="130" stroke="#475569" stroke-width="1.8" />

            <!-- UC 2: Ferienhaus suchen (Kunde) -->
            <ellipse cx="440" cy="195" rx="110" ry="24" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
            <text x="440" y="200" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Ferienhaus suchen</text>
            <line x1="140" y1="200" x2="330" y2="195" stroke="#475569" stroke-width="1.8" />

            <!-- UC 3: Verfügbarkeit prüfen (Kunde) -->
            <ellipse cx="440" cy="265" rx="120" ry="24" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
            <text x="440" y="270" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Verfügbarkeit prüfen</text>
            <line x1="140" y1="215" x2="320" y2="265" stroke="#475569" stroke-width="1.8" />

            <!-- UC 4: Reservierungsauftrag stellen (Kunde) -->
            <ellipse cx="440" cy="335" rx="130" ry="25" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" />
            <text x="440" y="339" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9" text-anchor="middle">Reservierungsauftrag stellen</text>
            <line x1="140" y1="230" x2="310" y2="335" stroke="#475569" stroke-width="1.8" />

            <!-- UC 5: Reservieren & Bestätigung verschicken (Vermieter) -->
            <ellipse cx="440" cy="400" rx="145" ry="24" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
            <text x="440" y="404" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#15803d" text-anchor="middle">Reservieren &amp; Bestätigung senden</text>
            <line x1="740" y1="220" x2="585" y2="400" stroke="#475569" stroke-width="1.8" />
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
        
        // 3. Strikte Prüfung: Reine Theorie-/Textaufgaben erhalten KEIN generisches Auto-Diagramm
        if (q.id === 214 || q.id === 222 || q.id === 224 || q.id === 378 || q.id === 409) {
            return null;
        }

        // Subnetz-Berechnungen (z. B. VLSM Multi-Subnetzplanung) oder reine Rechnen-/WiSo-Aufgaben ausschließen!
        const isSubnet = (q.topic && q.topic.toLowerCase().includes("subnetz")) || 
                         (q.question && (q.question.toLowerCase().includes("subnetz") || q.question.toLowerCase().includes("vlsm")));
        if (isSubnet && !q.isDiagram) return null;
        if ((q.isCalculation || q.isPowerCalc || q.isZahlensysteme) && !q.isDiagram) return null;

        const isExplicitDiagramTask = q.isDiagram === true || 
                                      q.theme === "diagrams" || 
                                      (q.diagramType && typeof q.diagramType === "string" && q.diagramType.trim().length > 0) ||
                                      (q.topic && (
                                          q.topic.toLowerCase().includes("diagramm") || 
                                          q.topic.toLowerCase().includes("uml") || 
                                          q.topic.toLowerCase().includes("erd") || 
                                          q.topic.toLowerCase().includes("epk") || 
                                          q.topic.toLowerCase().includes("bpmn") || 
                                          (/\bnetzplan\b/i.test(q.topic) || /\bnetzplantechnik\b/i.test(q.topic)) || 
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

        // Sequenzdiagramm Buchungsverwaltung (IHK Original)
        if (text.includes("buchungsverwaltung") || text.includes("stornierungsvorgang") || (text.includes("stornieren") && text.includes("getbuchung"))) {
            return VisualDiagrams.getBuchungsverwaltungSequenzdiagrammSvg();
        }

        // Sequenzdiagramm PixelPic AG Onlineshop (IHK Original)
        if (text.includes("pixelpic") || text.includes("auftragsbestaetigung") || (text.includes("produktvorlage") && text.includes("onlineshop"))) {
            return VisualDiagrams.getPixelPicOnlineshopSequenzdiagrammSvg();
        }

        // Transformation EPK zu UML-Aktivitätsdiagramm (dLine AG)
        if (text.includes("dline") || (text.includes("epk") && text.includes("transformation") && (text.includes("aktivit") || text.includes("swimlane")))) {
            return VisualDiagrams.getEpkToAktivitaetTransformationSvg();
        }

        // Use-Case Ferienhausvermietung (B&G GmbH & Immo-IT)
        if (text.includes("ferienhaus") || (text.includes("immo-it") && text.includes("b&g")) || (text.includes("ferienhäuser") && text.includes("vermieter"))) {
            return VisualDiagrams.getFerienhausUseCaseSvg();
        }

        // Trouble-Ticket Code-Review & Bugfixing (IHK Original)
        if (text.includes("trouble-ticket") || (text.includes("code-review") && text.includes("durchschnitt"))) {
            return VisualDiagrams.getCodeReviewTroubleTicketSvg();
        }

        // SucheMAC Lineare Suche Struktogramm (IHK Original)
        if (text.includes("suchemac") || (text.includes("mac-adresse") && (text.includes("such") || text.includes("struktogramm")))) {
            return VisualDiagrams.getMacSucheStruktogrammSvg();
        }

        // EVA-Event GmbH / Jukebox-Soft Klassendiagramm (IHK Original)
        if (text.includes("eva-event") || text.includes("jukebox-soft") || (text.includes("tournee") && text.includes("veranstaltung"))) {
            return VisualDiagrams.getEvaEventKlassendiagrammSvg();
        }

        // RADL-BLITZ GmbH Kurierfahrt Aktivitätsdiagramm (IHK Original)
        if (text.includes("radl-blitz") || (text.includes("kurier") && text.includes("zentrale") && text.includes("abgleich"))) {
            return VisualDiagrams.getRadlBlitzAktivitaetsdiagrammSvg();
        }

        // B&G GmbH Immobilienverkauf Zustandsdiagramm (IHK Original)
        if ((text.includes("b&g gmbh") && !text.includes("ferienhaus")) || (text.includes("verkaufsimmobilie") && text.includes("reserviert") && text.includes("angefragt"))) {
            return VisualDiagrams.getImmobilienVerkaufZustandsdiagrammSvg();
        }

                // IHK Original Tabellenaufgabe: Beziehungstypen & Begründungen (Immobilie/Wohnung, Bewohner/Mieter, Mietervereinigung)
        if (text.includes("immobilie") || text.includes("mietervereinigung") || text.includes("wohnungen") || (text.includes("beziehungstyp") && text.includes("begründung") && text.includes("tabelle"))) {
            return VisualDiagrams.getUmlBeziehungenTabellenSvg();
        }

        // UML Kardinalitäten & Multiplizitäten Leitfaden
        if ((text.includes("kardinalit") || text.includes("multiplizit") || text.includes("1..*") || text.includes("0..*")) && (text.includes("klasse") || text.includes("klassendiagramm"))) {
            return VisualDiagrams.getUmlKardinalitaetenCheatSheetSvg();
        }

        // UML Use-Case: <<include>> vs. <<extend>> Cheat-Sheet
        if (text.includes("include") && text.includes("extend") && (text.includes("use-case") || text.includes("anwendungsfall") || text.includes("pfeilrichtung"))) {
            return VisualDiagrams.getUmlIncludeExtendCheatSheetSvg();
        }

        // Eren-Michi Terminvergabe Aktivitätsdiagramm (IHK Original)
        if (text.includes("eren-michi") || text.includes("terminvergabe") || (text.includes("termin") && text.includes("meisterbetrieb"))) {
            return VisualDiagrams.getErenMichiTerminvergabeAktivitaetSvg();
        }

        // FAQ GmbH / Soft GmbH Statistikabfragen Use-Case (IHK Original)
        if (text.includes("faq gmbh") || text.includes("soft gmbh") || (text.includes("statistikabfragen") && text.includes("premiumnutzer"))) {
            return VisualDiagrams.getFaqStatistikabfragenUseCaseSvg();
        }

        // Decision vs. Fork / Join Vergleich
        if ((text.includes("decision") && text.includes("fork")) || (text.includes("verzweigung") && text.includes("parallelität") && text.includes("raute"))) {
            return VisualDiagrams.getActivityDecisionVsForkComparisonSvg();
        }
        
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
            
            if ((text.includes("lizenz") || text.includes("software")) && (text.includes("pc") || text.includes("arbeitsplatz"))) { entA = "SoftwareLizenz"; entB = "ArbeitsplatzPC"; rel = "ist installiert auf"; card = "n:m"; reason = "Volumenlizenzen können auf mehreren PCs installiert sein, ein PC hat mehrere Lizenzen (n:m)."; }
            else if ((text.includes("auftrag") || text.includes("bestellung")) && text.includes("artikel")) { entA = "Auftrag"; entB = "Artikel"; rel = "umfasst"; card = "n:m"; reason = "Ein Auftrag umfasst mehrere Artikel, ein Artikel kommt in vielen Aufträgen vor (Zwischentabelle Auftragsposition)."; }
            else if (text.includes("abteilung") && text.includes("mitarbeiter")) { entA = "Abteilung"; entB = "Mitarbeiter"; rel = "beschäftigt"; card = "1:n"; reason = "Eine Abteilung beschäftigt viele Mitarbeiter."; }
            else if (text.includes("projekt") && text.includes("entwickler")) { entA = "Projekt"; entB = "Entwickler"; rel = "arbeitet an"; card = "n:m"; reason = "Entwickler arbeiten an Projekten (n:m)."; }
            else if (text.includes("rechnung") && text.includes("position")) { entA = "Rechnung"; entB = "Rechnungsposition"; rel = "besteht aus"; card = "1:n"; reason = "Eine Rechnung enthält mehrere Positionen."; }
            else if (text.includes("student") && text.includes("vorlesung")) { entA = "Student"; entB = "Vorlesung"; rel = "besucht"; card = "n:m"; reason = "Studenten besuchen Vorlesungen (n:m)."; }
            else if (text.includes("mitarbeiter") && text.includes("dienstwagen")) { entA = "Mitarbeiter"; entB = "Dienstwagen"; rel = "besitzt fest"; card = "1:1"; reason = "Ein Mitarbeiter besitzt maximal 1 Dienstwagen."; }
            else if (text.includes("server") && text.includes("festplatte")) { entA = "Server"; entB = "Festplatte"; rel = "enthält"; card = "1:n"; reason = "Ein Server besitzt mehrere Festplatten (1:n)."; }
            
            let fkTable = entB;
            let fkField = "FK_" + entA + "ID";
            if (card === "n:m") {
                if (entA === "SoftwareLizenz" || entB === "ArbeitsplatzPC") {
                    fkTable = "Lizenz_PC (Zwischentabelle)";
                    fkField = "FK_LizenzKey und FK_PC_InventarNr";
                } else if (entA === "Auftrag" || entB === "Artikel") {
                    fkTable = "Auftragsposition (Zwischentabelle)";
                    fkField = "FK_AuftragsNr und FK_ArtikelNr";
                } else if (entA === "Projekt" || entB === "Entwickler") {
                    fkTable = "Projekt_Entwickler (Zwischentabelle)";
                    fkField = "FK_ProjektID und FK_EntwicklerID";
                } else if (entA === "Student" || entB === "Vorlesung") {
                    fkTable = "Student_Vorlesung (Zwischentabelle)";
                    fkField = "FK_MatrikelNr und FK_VorlesungsID";
                } else {
                    fkTable = `${entA}_${entB} (Zwischentabelle)`;
                    fkField = `FK_${entA}ID und FK_${entB}ID`;
                }
            }
            return VisualDiagrams.getRelationalErdSvg(entA, entB, rel, card, fkTable, fkField, reason);
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
        if (text.includes("pool") || text.includes("nachrichtenfluss") || text.includes("message flow") || text.includes("itsm") || text.includes("1st-level") || text.includes("2nd-level")) {
            return VisualDiagrams.getBpmnPoolLaneDiagramSvg();
        }
        if (/\b(bpmn|swimlane|gateway|start-event|end-event)\b/i.test(text)) {
            return VisualDiagrams.getBpmnPoolLaneDiagramSvg ? VisualDiagrams.getBpmnPoolLaneDiagramSvg() : VisualDiagrams.getBpmnDiagramSvg();
        }
        
        // 6b. UML-Aktivitätsdiagramm
        if (/\b(aktivitätsdiagramm|aktivitaetsdiagramm|activity diagram|action node|fork|join|decision node|merge node|initial node|final node)\b/i.test(text)) {
            return VisualDiagrams.getUmlAktivitaetsdiagrammSvg();
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

        // 10e. ERP-System Prozessdiagramm & Order-to-Cash
        if (text.includes("erp") || text.includes("order-to-cash")) {
            return VisualDiagrams.getErpProcessDiagramSvg();
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
