// ==========================================================================
// AP1 VOLLPRÜFUNGEN - 4 VOLLSTÄNDIGE 100-PUNKTE-PRÜFUNGSSÄTZE (AUFGABE 1-4)
// Pädagogisch aufbereitete, 100% urheberrechtskonforme Prüfungsbögen
// Entspricht dem 1:1 Prüfungsbogen-Design nach bundesweitem AP1-Standard (IHK-orientiert)
// ==========================================================================

var ExamSvgs = {
    // RJ45 Connector comparison (Intact latch vs broken latch)
    getRJ45ComparisonSvg: function() {
        return `
        <svg viewBox="0 0 700 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; font-family:sans-serif;">
            <!-- Background & Title -->
            <rect x="0" y="0" width="700" height="240" fill="#f8fafc"/>
            <text x="20" y="24" font-size="13" font-weight="bold" fill="#1e293b">Abbildung: Sichtprüfung der verwendeten RJ45-Patchkabel</text>
            
            <!-- Stecker 1: Intakter Stecker mit Verriegelungsnase -->
            <g transform="translate(40, 45)">
                <text x="0" y="16" font-size="12" font-weight="bold" fill="#047857">Stecker 1: Intaktes Patchkabel (Einwandfrei)</text>
                <!-- Boot / Knickschutztülle -->
                <path d="M 80 40 Q 110 35 150 48 L 150 72 Q 110 85 80 80 Z" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
                <!-- Kabelstrang -->
                <rect x="10" y="52" width="75" height="16" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
                <line x1="25" y1="52" x2="25" y2="68" stroke="#94a3b8"/>
                <line x1="45" y1="52" x2="45" y2="68" stroke="#94a3b8"/>
                <line x1="65" y1="52" x2="65" y2="68" stroke="#94a3b8"/>
                
                <!-- RJ45 Steckergehäuse (transparent / metallschirm) -->
                <rect x="150" y="44" width="75" height="32" rx="2" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
                <!-- Kontakte (Goldkontakte) -->
                <rect x="210" y="47" width="12" height="26" fill="#eab308" stroke="#ca8a04" stroke-width="1"/>
                <line x1="213" y1="47" x2="213" y2="73" stroke="#a16207"/>
                <line x1="216" y1="47" x2="216" y2="73" stroke="#a16207"/>
                <line x1="219" y1="47" x2="219" y2="73" stroke="#a16207"/>
                
                <!-- INTAKTE RASTNASE (Latch) im 30°-Winkel -->
                <path d="M 170 44 L 215 22 L 210 20 L 165 42 Z" fill="#64748b" stroke="#1e293b" stroke-width="1.5"/>
                <polygon points="215,22 220,24 216,28 211,26" fill="#334155"/>
                
                <!-- Knickschutz-Überwölbung -->
                <path d="M 125 43 Q 145 28 165 43" fill="none" stroke="#64748b" stroke-width="3"/>
                
                <!-- Hinweispfeil -->
                <line x1="240" y1="22" x2="290" y2="22" stroke="#059669" stroke-width="1.5"/>
                <text x="298" y="26" font-size="11" font-weight="bold" fill="#047857">✓ Intakte Rastnase (Federmechanismus arretiert fest in Datendose)</text>
            </g>

            <!-- Stecker 2: Beschädigter Stecker mit abgebrochener Rastnase -->
            <g transform="translate(40, 135)">
                <text x="0" y="16" font-size="12" font-weight="bold" fill="#b91c1c">Stecker 2: Beschädigtes Patchkabel (Fehlerursache)</text>
                <!-- Boot / Knickschutztülle -->
                <path d="M 80 40 Q 110 35 150 48 L 150 72 Q 110 85 80 80 Z" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
                <!-- Kabelstrang -->
                <rect x="10" y="52" width="75" height="16" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
                <line x1="25" y1="52" x2="25" y2="68" stroke="#94a3b8"/>
                <line x1="45" y1="52" x2="45" y2="68" stroke="#94a3b8"/>
                <line x1="65" y1="52" x2="65" y2="68" stroke="#94a3b8"/>
                
                <!-- RJ45 Steckergehäuse -->
                <rect x="150" y="44" width="75" height="32" rx="2" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
                <!-- Kontakte -->
                <rect x="210" y="47" width="12" height="26" fill="#eab308" stroke="#ca8a04" stroke-width="1"/>
                
                <!-- ABGEBROCHENE RASTNASE (Nur Stummel vorhanden) -->
                <path d="M 170 44 L 178 40 L 176 38 L 168 42 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
                <!-- Bruchstelle gezackt -->
                <path d="M 178 40 L 180 38 L 182 41 L 184 39" fill="none" stroke="#dc2626" stroke-width="2"/>
                
                <!-- Hinweispfeil -->
                <line x1="200" y1="36" x2="290" y2="36" stroke="#dc2626" stroke-width="1.5"/>
                <circle cx="180" cy="40" r="10" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="2 2"/>
                <text x="298" y="40" font-size="11" font-weight="bold" fill="#b91c1c">✗ Rastnase komplett abgebrochen! (Kein mechanischer Halt, Rutscht heraus)</text>
            </g>
        </svg>
        `;
    },

    // Windows Disk Management diagram (Datenträgerverwaltung)
    getDiskManagementSvg: function() {
        return `
        <svg viewBox="0 0 700 130" width="100%" height="130" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1.5px solid #000000; font-family:'Segoe UI', sans-serif;">
            <!-- Header bar -->
            <rect x="0" y="0" width="700" height="26" fill="#e2e8f0" stroke="#000000" stroke-width="1"/>
            <text x="12" y="18" font-size="12" font-weight="bold" fill="#000000">Datenträgerverwaltung (Windows Computer Management - Disk 0)</text>
            
            <!-- Left Info Panel: Datenträger 0 -->
            <rect x="0" y="26" width="140" height="104" fill="#f8fafc" stroke="#000000" stroke-width="1"/>
            <text x="14" y="50" font-size="13" font-weight="bold" fill="#000000">Datenträger 0</text>
            <text x="14" y="70" font-size="12" fill="#334155">Basis</text>
            <text x="14" y="90" font-size="12" font-weight="bold" fill="#000000">931 GiB</text>
            <text x="14" y="110" font-size="12" fill="#15803d">Online</text>
            
            <!-- Right Partition Panel: (D:) RAW -->
            <rect x="140" y="26" width="560" height="104" fill="#ffffff" stroke="#000000" stroke-width="1"/>
            <!-- Dark blue top bar representing Primary Partition -->
            <rect x="144" y="30" width="552" height="10" fill="#0284c7"/>
            <text x="156" y="62" font-size="13" font-weight="bold" fill="#000000">(D:)</text>
            <text x="156" y="82" font-size="12" fill="#1e293b">931 GiB RAW</text>
            <text x="156" y="102" font-size="12" fill="#334155">Fehlerfrei (Primäre Partition)</text>
        </svg>
        `;
    },

    // Authentic Rechnungsbeleg (Invoice) HTML
    getInvoiceHtml: function() {
        return `
        <div style="background:#ffffff; border:1.5px solid #000000; padding:20px; font-family:'Segoe UI', Arial, sans-serif; color:#000000; margin-bottom:18px; line-height:1.4;">
            <!-- Header Row: Absender & Empfänger / Logo -->
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px;">
                <div>
                    <div style="font-size:0.75rem; text-decoration:underline; margin-bottom:10px; color:#475569;">
                        RofoFix AG • Industriestr. 10 • 89173 Thumendorf
                    </div>
                    <div style="font-size:1.05rem; font-weight:bold; line-height:1.35;">
                        Apothekengruppe Curatia<br>
                        Markt 3<br>
                        08799 Grunkan
                    </div>
                </div>
                <div style="text-align:right; font-size:0.85rem;">
                    <!-- Stylized Logo -->
                    <div style="display:inline-flex; align-items:center; gap:0.4rem; font-weight:bold; font-size:1.1rem; border:2px solid #000; padding:4px 8px; margin-bottom:8px;">
                        <span>🔄 ROFOFIX AG</span>
                    </div>
                    <div>Industriestr. 10</div>
                    <div>89173 Thumendorf</div>
                    <div>Telefon (07983) 123-23</div>
                    <div>E-Mail: info@rofofix.de</div>
                    <div>Internet: www.rofofix.de</div>
                </div>
            </div>

            <!-- Meta Data Row -->
            <div style="display:flex; justify-content:space-between; border-top:1px solid #000; border-bottom:1px solid #000; padding:8px 0; font-size:0.85rem; margin-bottom:18px;">
                <div>
                    <div><strong>Bestelldatum:</strong> 05. Sept. 2025</div>
                    <div><strong>Lieferdatum:</strong> 10. Sept. 2025</div>
                </div>
                <div>
                    <div><strong>Kundennummer:</strong> D92307</div>
                    <div><strong>Verwendungszweck:</strong> D92307R20250815</div>
                </div>
                <div>
                    <div><strong>USt-IdNr.:</strong> DE987654321</div>
                    <div><strong>Steuernummer:</strong> 271/369/45321</div>
                </div>
            </div>

            <!-- Invoice Heading -->
            <div style="font-size:1.35rem; font-weight:900; margin-bottom:14px;">
                Rechnung R20250815 vom 11. Sept. 2025
            </div>

            <!-- Position Table -->
            <table style="width:100%; border-collapse:collapse; font-size:0.88rem; margin-bottom:16px;">
                <thead>
                    <tr style="border-top:1.5px solid #000; border-bottom:1.5px solid #000;">
                        <th style="padding:6px; text-align:left;">Pos.</th>
                        <th style="padding:6px; text-align:left;">Artikelnummer / Bezeichnung</th>
                        <th style="padding:6px; text-align:right;">Menge / Einheit</th>
                        <th style="padding:6px; text-align:right;">Einzelpreis (EUR)</th>
                        <th style="padding:6px; text-align:right;">Gesamtpreis (EUR)</th>
                        <th style="padding:6px; text-align:center;">USt-S.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #e2e8f0;">
                        <td style="padding:6px; font-weight:bold;">01</td>
                        <td style="padding:6px;"><strong>S4813</strong><br>Scan-Stift M193 (Kassensystem)</td>
                        <td style="padding:6px; text-align:right;">3 Stück</td>
                        <td style="padding:6px; text-align:right;">60,00 EUR</td>
                        <td style="padding:6px; text-align:right; font-weight:bold;">180,00 EUR</td>
                        <td style="padding:6px; text-align:center;">1</td>
                    </tr>
                    <tr style="border-bottom:1px solid #e2e8f0;">
                        <td style="padding:6px; font-weight:bold;">02</td>
                        <td style="padding:6px;"><strong>R3635</strong><br>Papierrollen Thermokasse (5er-Pack)</td>
                        <td style="padding:6px; text-align:right;">10 5er-Pack</td>
                        <td style="padding:6px; text-align:right;">50,00 EUR</td>
                        <td style="padding:6px; text-align:right; font-weight:bold;">500,00 EUR</td>
                        <td style="padding:6px; text-align:center;">1</td>
                    </tr>
                    <tr style="border-bottom:1.5px solid #000;">
                        <td style="padding:6px; font-weight:bold;">03</td>
                        <td style="padding:6px;"><strong>G18</strong><br>Dragees Pfefferminz (Zuckerfrei)</td>
                        <td style="padding:6px; text-align:right;">2.000 Dosen</td>
                        <td style="padding:6px; text-align:right;">0,15 EUR</td>
                        <td style="padding:6px; text-align:right; font-weight:bold;">300,00 EUR</td>
                        <td style="padding:6px; text-align:center;">2</td>
                    </tr>
                </tbody>
            </table>

            <!-- Summary Totals -->
            <div style="display:flex; justify-content:flex-end; margin-bottom:16px;">
                <div style="width:280px; font-size:0.9rem;">
                    <div style="display:flex; justify-content:space-between; padding:3px 0;">
                        <span>Nettobetrag:</span>
                        <strong>980,00 EUR</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:3px 0; color:#334155;">
                        <span>USt-Satz 1 (19% von 680,00 EUR):</span>
                        <span>129,20 EUR</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:3px 0; color:#334155;">
                        <span>USt-Satz 2 (7% von 300,00 EUR):</span>
                        <span>21,00 EUR</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:6px 0; border-top:1.5px solid #000; font-size:1.05rem; font-weight:bold;">
                        <span>Bruttobetrag:</span>
                        <span>1.130,20 EUR</span>
                    </div>
                </div>
            </div>

            <!-- Payment terms & QR Code -->
            <div style="display:flex; justify-content:space-between; align-items:center; border:1px solid #cbd5e1; padding:10px 14px; background:#f8fafc; font-size:0.88rem;">
                <div>
                    <div style="font-weight:bold; margin-bottom:4px;">Zahlungsbedingungen:</div>
                    <div>Zahlbar bis <strong>30. Sept. 2025 mit 2 % Skonto</strong> oder bis <strong>31. Okt. 2025 rein netto ohne Abzug</strong>.</div>
                </div>
                <!-- Stylized QR Code -->
                <div style="display:flex; flex-direction:column; align-items:center;">
                    <div style="width:54px; height:54px; border:2px solid #000; display:grid; grid-template-columns:repeat(5, 1fr); gap:1px; padding:2px; background:#fff;">
                        <div style="background:#000;"></div><div style="background:#000;"></div><div style="background:#fff;"></div><div style="background:#000;"></div><div style="background:#000;"></div>
                        <div style="background:#000;"></div><div style="background:#fff;"></div><div style="background:#000;"></div><div style="background:#fff;"></div><div style="background:#000;"></div>
                        <div style="background:#fff;"></div><div style="background:#000;"></div><div style="background:#000;"></div><div style="background:#000;"></div><div style="background:#fff;"></div>
                        <div style="background:#000;"></div><div style="background:#fff;"></div><div style="background:#000;"></div><div style="background:#fff;"></div><div style="background:#000;"></div>
                        <div style="background:#000;"></div><div style="background:#000;"></div><div style="background:#fff;"></div><div style="background:#000;"></div><div style="background:#000;"></div>
                    </div>
                    <span style="font-size:0.7rem; font-weight:bold; margin-top:2px;">EPC-QR</span>
                </div>
            </div>
        </div>
        `;
    },

    // DIN 69900 Netzplanknoten (9-field node diagram)
    getNetzplanNodeSvg: function() {
        return `
        <svg viewBox="0 0 650 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #000; font-family:'Segoe UI', sans-serif;">
            <text x="20" y="24" font-size="12" font-weight="bold" fill="#000000">Knotenaufbau nach DIN 69900 (Vorgangsknoten-Netzplan):</text>
            
            <!-- Standard 9-field Box -->
            <g transform="translate(180, 45)">
                <!-- Outer Box -->
                <rect x="0" y="0" width="280" height="120" fill="#f8fafc" stroke="#000000" stroke-width="2"/>
                <!-- Horizontal divider 1 -->
                <line x1="0" y1="40" x2="280" y2="40" stroke="#000000" stroke-width="1.5"/>
                <!-- Horizontal divider 2 -->
                <line x1="0" y1="80" x2="280" y2="80" stroke="#000000" stroke-width="1.5"/>
                <!-- Vertical divider top left -->
                <line x1="90" y1="0" x2="90" y2="40" stroke="#000000" stroke-width="1.5"/>
                <!-- Vertical divider top right -->
                <line x1="190" y1="0" x2="190" y2="40" stroke="#000000" stroke-width="1.5"/>
                <!-- Vertical divider bottom left -->
                <line x1="90" y1="80" x2="90" y2="120" stroke="#000000" stroke-width="1.5"/>
                <!-- Vertical divider bottom right -->
                <line x1="190" y1="80" x2="190" y2="120" stroke="#000000" stroke-width="1.5"/>

                <!-- Top Row Labels -->
                <text x="45" y="25" font-size="12" font-weight="bold" text-anchor="middle" fill="#000">FAZ</text>
                <text x="140" y="25" font-size="12" font-weight="bold" text-anchor="middle" fill="#000">D (Dauer)</text>
                <text x="235" y="25" font-size="12" font-weight="bold" text-anchor="middle" fill="#000">FEZ</text>

                <!-- Middle Row Labels -->
                <text x="140" y="64" font-size="13" font-weight="900" text-anchor="middle" fill="#1e293b">Vorgangs-Nr. &amp; Bezeichnung</text>

                <!-- Bottom Row Labels -->
                <text x="45" y="105" font-size="12" font-weight="bold" text-anchor="middle" fill="#000">SAZ</text>
                <text x="140" y="105" font-size="12" font-weight="bold" text-anchor="middle" fill="#000">GP / FP</text>
                <text x="235" y="105" font-size="12" font-weight="bold" text-anchor="middle" fill="#000">SEZ</text>
            </g>

            <!-- Legend Left & Right -->
            <text x="20" y="70" font-size="10" fill="#475569">FAZ = Frühester Anfangszeitpunkt</text>
            <text x="20" y="90" font-size="10" fill="#475569">FEZ = Frühester Endzeitpunkt</text>
            <text x="20" y="110" font-size="10" fill="#475569">SAZ = Spätester Anfangszeitpunkt</text>
            <text x="20" y="130" font-size="10" fill="#475569">SEZ = Spätester Endzeitpunkt</text>

            <text x="480" y="75" font-size="10" fill="#475569">GP = Gesamtpuffer (SAZ - FAZ)</text>
            <text x="480" y="95" font-size="10" fill="#475569">FP = Freier Puffer (FAZ_Nachf - FEZ)</text>
            <text x="480" y="115" font-size="10" font-weight="bold" fill="#b91c1c">Kritischer Pfad: GP = 0 und FP = 0</text>
        </svg>
        `;
    },

    // Asymmetric Encryption diagram (Public/Private Key)
    getAsymmetricEncryptionSvg: function() {
        return `
        <svg viewBox="0 0 680 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #000; font-family:'Segoe UI', sans-serif;">
            <text x="16" y="22" font-size="12" font-weight="bold" fill="#000000">Asymmetrisches Kryptoverfahren: Vertrauliche Übertragung (Anwalt ➔ Mandant)</text>
            
            <!-- Sender: Anwalt -->
            <rect x="20" y="45" width="130" height="100" fill="#f1f5f9" stroke="#000" stroke-width="1.5" rx="4"/>
            <text x="85" y="75" font-size="12" font-weight="bold" text-anchor="middle" fill="#000">Sender (Anwalt)</text>
            <text x="85" y="95" font-size="11" text-anchor="middle" fill="#334155">Klartext-Dokument</text>
            <text x="85" y="115" font-size="10" font-style="italic" text-anchor="middle" fill="#64748b">"Vertrag.pdf"</text>
            
            <!-- Arrow 1: Encryption with Receiver's Public Key -->
            <line x1="150" y1="95" x2="230" y2="95" stroke="#000" stroke-width="2"/>
            
            <!-- Encryption Box -->
            <rect x="230" y="55" width="140" height="80" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="4"/>
            <text x="300" y="78" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e">Verschlüsselung</text>
            <text x="300" y="96" font-size="10" text-anchor="middle" fill="#b45309">mit ÖFFENTLICHEM</text>
            <text x="300" y="112" font-size="10" font-weight="bold" text-anchor="middle" fill="#b45309">Schlüssel des Mandanten 🔑</text>

            <!-- Arrow 2: Ciphertext transmission -->
            <line x1="370" y1="95" x2="450" y2="95" stroke="#000" stroke-width="2"/>
            <text x="410" y="85" font-size="10" font-weight="bold" text-anchor="middle" fill="#dc2626">🔒 Chiffrat</text>

            <!-- Decryption Box & Receiver -->
            <rect x="450" y="45" width="200" height="100" fill="#ecfdf5" stroke="#059669" stroke-width="1.5" rx="4"/>
            <text x="550" y="70" font-size="12" font-weight="bold" text-anchor="middle" fill="#065f46">Empfänger (Mandant)</text>
            <text x="550" y="92" font-size="10" text-anchor="middle" fill="#047857">Entschlüsselung nur mit</text>
            <text x="550" y="108" font-size="11" font-weight="bold" text-anchor="middle" fill="#047857">PRIVATEM Schlüssel 🗝️</text>
            <text x="550" y="128" font-size="10" text-anchor="middle" fill="#15803d">➔ Klartext hergestellt</text>
        </svg>
        `;
    }
};

// ==========================================================================
// 4 VOLLSTÄNDIGE 100-PUNKTE PRÜFUNGSSÄTZE
// ==========================================================================
var EXAM_SETS = [
    // ----------------------------------------------------------------------
    // PRÜFUNG 1: Smart-Home, Web-Plattform & Mobiles Arbeiten
    
    // ----------------------------------------------------------------------
    {
        id: "exam_1",
        title: "Prüfung 1: Smart-Home, Web-Plattform & Mobiles Arbeiten",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • Novo-Tech Solutions OHG",
        ausgangssituation: "Sie absolvieren Ihre Ausbildung in der IT-Abteilung der Novo-Tech Solutions OHG. Das Unternehmen entwickelt und vertreibt vernetzte Smart-Home-Lösungen für gewerbliche und private Kunden. Für die Verwaltung von Sensoren und Steuergeräten wird eine modulare Webplattform entwickelt. Gleichzeitig werden mobile Techniker-Arbeitsplätze neu mit Hard- und Software ausgestattet sowie Netzwerkverbindungen eingerichtet und getestet.",
        tasks: [
            // Aufgabe 1 (25 Pkt)
            {
                number: 1,
                title: "1. Aufgabe: Softwarekonzeption, Vorgehensmodell & Wirtschaftlichkeit",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "1_1_a",
                        label: "a) Anwendungsfalldiagramm (Use-Case)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "ANWENDUNGSFALLDIAGRAMM (USE-CASE)",
                        text: "Für das Kundenportal der Smart-Home-Lösung soll ein UML-Anwendungsfalldiagramm erstellt werden. Ein 'Kunde' kann den 'Gerätestatus abrufen' und 'Regeln konfigurieren'. Bei der Regelkonfiguration muss zwingend immer eine 'Authentifizierung durchführen' einbezogen werden (<<include>>). Ein 'Techniker' erbt alle Rechte des Kunden (Generalisierung) und kann zusätzlich 'Firmware-Update einspielen' durchführen, was bei Fehlern optional 'Fehlerprotokoll versenden' erweitert (<<extend>>).\nBeschreiben Sie die Komponenten dieses Diagramms (Akteure, Systemgrenze, Anwendungsfälle und deren Beziehungen) präzise oder skizzieren Sie diese auf dem Skizzenboard.",
                        solution: "• Akteure: 'Kunde' (Basis-Akteur) und 'Techniker' (spezialisierter Akteur, Pfeil mit geschlossener Spitze = Generalisierung auf Kunde).\n• Systemgrenze: Rechteck 'Smart-Home Kundenportal'.\n• Anwendungsfälle: 'Gerätestatus abrufen', 'Regeln konfigurieren', 'Authentifizierung durchführen', 'Firmware-Update einspielen', 'Fehlerprotokoll versenden'.\n• Beziehungen: 'Regeln konfigurieren' ➔ <<include>> ➔ 'Authentifizierung durchführen'. 'Fehlerprotokoll versenden' ➔ <<extend>> ➔ 'Firmware-Update einspielen'."
                    },
                    {
                        id: "1_1_b",
                        label: "b) Projektzielformulierung nach SMART",
                        points: 4,
                        type: "table",
                        stencil: "PROJEKTMANAGEMENT / SMART-TABELLE",
                        text: "Für das Projekt 'Kundenportal' wurden Ziele formuliert. Ordnen Sie die Kriterien der SMART-Methode den folgenden Beschreibungen zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["S - Spezifisch", "M - Messbar", "A - Akzeptiert", "R - Realistisch", "T - Terminiert"],
                            headers: ["SMART-Kriterium", "Bedeutung / Anforderung", "Projektbeispiel"],
                            rows: [
                                ["A - Akzeptiert", "Ziel muss von den Stakeholdern und Teammitgliedern getragen werden", "Freigabe der Anforderungen durch Vertrieb und Entwicklerteam"],
                                ["S - Spezifisch", "Ziel muss eindeutig, konkret und präzise formuliert sein", "Kundenportal mit REST-API für Heizungs- und Lichtsteuerung"],
                                ["T - Terminiert", "Feste zeitliche Zielvorgabe mit Deadline", "Abschluss des Rollouts bis zum 30. November 2026"],
                                ["M - Messbar", "Zielerreichung muss quantitativ oder qualitativ prüfbar sein", "Antwortzeit der API liegt bei 99 % der Anfragen unter 200 ms"],
                                ["R - Realistisch", "Ziel muss mit verfügbaren Ressourcen machbar sein", "Umsetzung mit bestehendem Team von 3 Entwicklern in 4 Monaten"]
                            ]
                        },
                        solution: "S = Spezifisch (eindeutig/präzise), M = Messbar (metrische Kenngrößen wie Reaktionszeit/Zahlen), A = Akzeptiert/Attraktiv (Zustimmung aller Beteiligten), R = Realistisch (machbar), T = Terminiert (konkreter Stichtag)."
                    },
                    {
                        id: "1_1_c",
                        label: "c) Vorgehensmodell: Wasserfall vs. Agil",
                        points: 4,
                        type: "lines",
                        linesCount: 4,
                        text: "Begründen Sie anhand von zwei konkreten Nachteilen, warum das klassische sequenzielle Wasserfallmodell für die Entwicklung der Webplattform ungeeignet ist und welches agile Modell (z. B. Scrum) stattdessen bevorzugt werden sollte.",
                        solution: "1. Mangelnde Flexibilität bei Anforderungsänderungen: Beim Wasserfallmodell werden Anforderungen zu Beginn starr fixiert; spätere Anpassungen an neue Smart-Home-Geräte sind extrem teuer.\n2. Spätes Feedback / Später Nutzwert: Funktionierende Software steht erst am Projektende zur Verfügung; Fehlentwicklungen werden erst bei der Endabnahme erkannt.\nAgile Alternative: Scrum ermöglicht mit 2-wöchigen Sprints frühe Zwischenversionen (MVPs) und schnelles Nutzer-Feedback."
                    },
                    {
                        id: "1_1_d",
                        label: "d) Make-or-Buy-Entscheidung (Kostenvergleich)",
                        points: 6,
                        type: "table",
                        stencil: "WIRTSCHAFTLICHKEIT / KOSTENVERGLEICH",
                        text: "Für das Authentifizierungsmodul soll entschieden werden, ob eine Eigenentwicklung (Make) oder der Zukauf eines Cloud-Services (Buy) wirtschaftlicher ist. Ergänzen Sie die folgende Vergleichstabelle. In nicht zutreffenden Feldern ist ein Schrägstrich (/) einzutragen.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["Kostenart", "Eigenentwicklung (Make)", "Cloud-Dienst (Buy)"],
                            rows: [
                                ["Einmalige Entwicklungskosten", "12.000,00 EUR", "/"],
                                ["Einrichtung & Schulung", "1.500,00 EUR", "2.000,00 EUR"],
                                ["Monatliche Lizenz-/Servicekosten", "/", "350,00 EUR / Monat"],
                                ["Jährliche Wartung & Updates (intern)", "2.400,00 EUR / Jahr", "/"],
                                ["Gesamtkosten nach 3 Jahren (36 Monate)", "20.700,00 EUR", "14.600,00 EUR"]
                            ]
                        },
                        solution: "Kosten Make: 12.000 + 1.500 + (3 * 2.400) = 20.700 EUR.\nKosten Buy: 0 + 2.000 + (36 * 350) = 14.600 EUR.\nErgebnis: Der Cloud-Dienst ist nach 3 Jahren um 6.100 EUR günstiger. Felder ohne Kosten mit '/' markieren!"
                    },
                    {
                        id: "1_1_e",
                        label: "e) Projektcontrolling: Meilensteinverzug",
                        points: 4,
                        type: "lines",
                        linesCount: 4,
                        text: "Zwei Wochen vor dem Meilenstein 'Beta-Freigabe' droht ein Verzug von 10 Arbeitstagen. Beschreiben Sie zwei Gegenmaßnahmen des Projektleiters zur Terminsicherung und nennen Sie je ein damit verbundenes Risiko.",
                        solution: "1. Scope Creep / Funktionsreduktion (Descoping): Nicht-kritische Features (Nice-to-have) in spätere Releases verschieben. Risiko: Unzufriedenheit des Kunden bei reduzierter Funktionalität.\n2. Personalaufstockung / Überstunden (Crashing): Temporäre Hinzuziehung erfahrener Entwickler. Risiko: Brooks'sches Gesetz (Einarbeitungsaufwand verzögert Projekt anfangs noch weiter) und höhere Projektkosten."
                    }
                ]
            },

            // Aufgabe 2 (25 Pkt)
            {
                number: 2,
                title: "2. Aufgabe: Hardware-Berechnung, Fehlersuche & Netzwerktechnik",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "1_2_a",
                        label: "a) Datenträgerverwaltung: Umrechnung 1.000 GB in 931 GiB",
                        points: 5,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        svgIllustration: ExamSvgs.getDiskManagementSvg(),
                        stencil: "DATENTRÄGERVERWALTUNG / SPEICHERKAPAZITÄT",
                        text: "Für einen neuen Arbeitsplatz-PC mit einer 1.000 GB M.2 SSD zeigt die Windows Datenträgerverwaltung eine Kapazität von nur 931 GiB an (siehe Abbildung).\nBegründen Sie diese Abweichung und führen Sie im nachfolgenden Rechengitter die exakte mathematische Umrechnung von 1.000 GB in GiB durch (Zehnerpotenzen vs. Zweierpotenzen). Runden Sie das Ergebnis kaufmännisch auf zwei Stellen nach dem Komma.",
                        solution: "Begründung: Hersteller von Festplatten/SSDs rechnen im Dezimalsystem (SI-Präfixe, Basis 10: 1 GB = 10^9 Byte = 1.000.000.000 Byte). Betriebssysteme wie Windows berechnen die Kapazität jedoch binär (IEC-Präfixe, Basis 2: 1 GiB = 2^30 Byte = 1.073.741.824 Byte).\nRechnung:\n1.000 GB = 1.000 * 10^9 Byte = 1.000.000.000.000 Byte.\nKapazität in GiB = 1.000.000.000.000 / (1024^3) = 1.000.000.000.000 / 1.073.741.824 = 931,32 GiB."
                    },
                    {
                        id: "1_2_b",
                        label: "b) RAM-Fehlerdiagnose & Ausschlussverfahren",
                        points: 4,
                        type: "lines",
                        linesCount: 4,
                        text: "ba) Beim Funktionstest werden statt der spezifizierten 32 GB RAM nur 16 GB erkannt. Nennen Sie zwei Möglichkeiten (Software/Firmware), um die installierten Speichermodule zu überprüfen (2 Punkte).\nbb) Beschreiben Sie ein systematisches Tauschverfahren, um festzustellen, ob ein Speichermodul oder der Mainboard-RAM-Slot defekt ist (2 Punkte).",
                        solution: "ba) 1. Aufruf des BIOS/UEFI (Hardware-Erkennung und XMP/EXPO-Profil prüfen). 2. Windows Task-Manager (Reiter Leistung ➔ Arbeitsspeicher: Steckplätze 1 von 2 verwendet) oder Diagnose-Tools wie MemTest86.\nbb) Riegel A in Slot 1 testen. Wenn funktionsfähig, Riegel A in Slot 2 testen. Anschließend Riegel B einzeln in Slot 1 und 2 testen. Wird ein Riegel in keinem Slot erkannt, ist der Riegel defekt; funktioniert kein Riegel in einem bestimmten Slot, ist der Mainboard-Slot defekt."
                    },
                    {
                        id: "1_2_c",
                        label: "c) Sichtprüfung Patchkabel & Beschädigung",
                        points: 4,
                        type: "lines",
                        linesCount: 4,
                        svgIllustration: ExamSvgs.getRJ45ComparisonSvg(),
                        stencil: "HARDWARE-DIAGNOSE / RJ45-VERBINDUNG",
                        text: "Sie führen eine Sichtprüfung des RJ45-Patchkabels durch (siehe Abbildung).\nBenennen Sie die an Stecker 2 sichtbare mechanische Beschädigung und erläutern Sie, welche Auswirkungen dieser Defekt im laufenden Bürobetrieb auf die Netzwerkverbindung hat.",
                        solution: "Beschädigung: Die Rastnase (Halteclip / Verriegelungslasche) des RJ45-Steckers ist abgebrochen.\nAuswirkungen: Der Stecker arretiert nicht mehr fest in der Datendose/Patchpanel. Bereits minimale Erschütterungen oder Kabelzug führen zum Herausrutschen des Steckers, was sporadische Verbindungsabbrüche, Paketverluste oder vollständigen Netzwerkausfall verursacht."
                    },
                    {
                        id: "1_2_d",
                        label: "d) Schirmungsklassen S/FTP vs. UTP & Kabelauswahl",
                        points: 4,
                        type: "lines",
                        linesCount: 4,
                        text: "Das defekte 2 m Patchkabel soll ersetzt werden. Zur Auswahl stehen:\n• Produkt 1: Cat 7, 40 Gbps, S/FTP, 5,99 EUR\n• Produkt 2: Cat 6a, 10 Gbps, S/FTP, 3,99 EUR\n• Produkt 3: Cat 5e, 1 Gbps, UTP, 1,99 EUR\nda) Erläutern Sie die Bedeutung der Kennzeichnung 'S/FTP' und 'UTP' (2 Punkte).\ndb) Wählen Sie das kostengünstigste geeignete Produkt für eine störungsfreie 1-Gigabit-Anbindung im gewerblichen Umfeld unter Einhaltung des Schirmungsstandards aus und begründen Sie Ihre Wahl (2 Punkte).",
                        solution: "da) S/FTP = Screened Foiled Twisted Pair (Gesamtschirmung aus Kupfergeflecht 'S', Adernpaare einzeln in Folie geschirmt 'FTP'). UTP = Unshielded Twisted Pair (völlig ungeschirmt, hohe Störanfälligkeit durch Nachbarkabel).\ndb) Produkt 2 (Cat 6a, S/FTP für 3,99 EUR). Begründung: Produkt 3 (UTP) ist ungeschirmt und erfüllt im industriellen/gewerblichen Umfeld nicht die EMV-Schirmungsvorgabe. Produkt 1 (Cat 7) ist überdimensioniert und teurer. Cat 6a bietet volle Schirmung (S/FTP) bis 10 Gbps zum günstigsten Preis."
                    },
                    {
                        id: "1_2_e",
                        label: "e) OSI-Modell: Systematische Fehlersuchtabelle",
                        points: 8,
                        type: "table",
                        stencil: "OSI-REFERENZMODELL / FEHLERSUCHE",
                        text: "Vervollständigen Sie die folgende Tabelle zur strukturierten Netzwerkdiagnose von Schicht 7 bis Schicht 1.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["OSI-Schicht", "Protokoll / Dienst", "Diagnosebefehl / Test", "Erwartetes Normalergebnis"],
                            rows: [
                                ["7 - Anwendung (Application)", "HTTPS / HTTP", "Aufruf von https://portal.novotech.de im Browser", "Webseite lädt fehlerfrei mit gültigem TLS-Zertifikat"],
                                ["7 - Anwendung (Application)", "DNS", "nslookup portal.novotech.de", "IP-Adresse des Webservers wird korrekt aufgelöst"],
                                ["3 - Vermittlung (Network)", "ICMP / IPv6", "ping -6 2001:db8::10", "4 Antworten erhalten, Paketverlust = 0 %"],
                                ["2 - Sicherung (Data Link)", "Ethernet", "Sichtprüfung Link-LED an Netzwerkkarte/Switch", "Grüne LED leuchtet dauerhaft, gelbe LED blinkt bei Datenverkehr"],
                                ["1 - Bitübertragung (Physical)", "Kupferkabel", "Kabeltester (Durchgangsprüfer)", "Alle 8 Adernpaare 1:1 durchgängig ohne Unterbrechung"]
                            ]
                        },
                        solution: "Schichten von oben nach unten: Layer 7 (HTTPS/DNS), Layer 3 (IP/ICMP ping), Layer 2 (Ethernet Link-LED/MAC), Layer 1 (Kabel/RJ45)."
                    }
                ]
            },

            // Aufgabe 3 (25 Pkt)
            {
                number: 3,
                title: "3. Aufgabe: IT-Sicherheit, USV-Berechnung & Software-Test",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "1_3_a",
                        label: "a) BSI-Schutzbedarfsanalyse für die Webplattform",
                        points: 6,
                        type: "table",
                        stencil: "BSI IT-GRUNDSCHUTZ / SCHUTZBEDARF",
                        text: "Bestimmen Sie für die folgenden drei Informations- und Systembereiche der Novo-Tech Solutions OHG den Schutzbedarf (normal, hoch, sehr hoch) bezüglich der Grundwerte Vertraulichkeit (V), Integrität (I) und Verfügbarkeit (A) und begründen Sie jeweils kurz.",
                        tableConfig: {
                            type: "matching",
                            targetCols: [1, 2, 3],
                            staticCols: [0, 4],
                            options: ["normal", "hoch", "sehr hoch"],
                            headers: ["Anwendungsbereich", "V", "I", "A", "Begründung"],
                            rows: [
                                ["Kundenstammdaten & Zahlungsdaten", "sehr hoch", "hoch", "normal", "Verstoß gegen DSGVO führt zu hohen Bußgeldern und erheblichem Reputationsverlust bei Datenleck"],
                                ["Smart-Home Firmware-Repository", "hoch", "sehr hoch", "hoch", "Manipulierte Firmware (fehlende Integrität) kann Geräte beim Kunden kompromittieren oder zerstören"],
                                ["Öffentliche Marketing-Website", "normal", "normal", "normal", "Keine vertraulichen Daten; kurzer Ausfall verursacht nur geringfügigen wirtschaftlichen Schaden"]
                            ]
                        },
                        solution: "Kundendaten: Vertraulichkeit sehr hoch (DSGVO Art. 83 Bußgelder). Firmware: Integrität sehr hoch (Schutz vor Malware/Backdoors). Marketing: alle Werte normal."
                    },
                    {
                        id: "1_3_b",
                        label: "b) DSGVO: Auftragsverarbeitung nach Art. 28 DSGVO",
                        points: 4,
                        type: "lines",
                        linesCount: 4,
                        text: "Die Kundendaten der Webplattform werden auf gemieteten Servern eines externen Rechenzentrums in Frankfurt gespeichert. Nennen Sie zwei verpflichtende Klauseln, die in einem Vertrag zur Auftragsverarbeitung (AVV) nach Art. 28 DSGVO geregelt sein müssen.",
                        solution: "1. Weisungsgebundenheit: Der Auftragsverarbeiter verarbeitet die personenbezogenen Daten ausschließlich nach dokumentierter Weisung des Verantwortlichen.\n2. Technische und organisatorische Maßnahmen (TOMs): Verpflichtung zur Umsetzung geeigneter Sicherheitsmaßnahmen (Art. 32 DSGVO) wie Verschlüsselung, Zugriffskontrollen und Notfallwiederherstellung.\n(Weitere: Vertraulichkeitsverpflichtung der Mitarbeiter, Unterstützung bei Betroffenenrechten, Regelung zu Unterauftragsverarbeitern)."
                    },
                    {
                        id: "1_3_c",
                        label: "c) USV-Dimensionierung: Scheinleistung (VA) & Energie (Wh)",
                        points: 6,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "ELEKTROTECHNIK / USV-DIMENSIONIERUNG",
                        text: "Ein Serverrack hat eine Wirkleistung von P = 800 W bei einem Leistungsfaktor von cos φ = 0,8. Die geplante USV soll bei einem Stromausfall eine Überbrückungszeit von mindestens 15 Minuten bei einem Wirkungsgrad von η = 85 % gewährleisten.\nca) Berechnen Sie die mindestens erforderliche Scheinleistung S (in VA) der USV (3 Punkte).\ncb) Berechnen Sie die benötigte Energie der USV-Batterie in Wattstunden (Wh) (3 Punkte).",
                        solution: "ca) Formel: P = S * cos φ ➔ S = P / cos φ\nS = 800 W / 0,8 = 1.000 VA.\ncb) Formel Überbrückungszeit t = 15 min = 0,25 h.\nNutzenergie am Server E_nutz = P * t = 800 W * 0,25 h = 200 Wh.\nUnter Berücksichtigung des Wirkungsgrades η = 0,85:\nE_batterie = E_nutz / η = 200 Wh / 0,85 = 235,29 Wh."
                    },
                    {
                        id: "1_3_d",
                        label: "d) Quellcode-Schreibtischtest (Trace-Tabelle)",
                        points: 6,
                        type: "table",
                        stencil: "SOFTWARETEST / SCHREIBTISCHTEST",
                        text: "Gegeben ist folgender Python-Code zur Filterung unzulässiger Sensorwerte:\n\nwerte = [18, -4, 25, 32, -1]\ngueltig = []\nfor w in werte:\n    if w >= 0 and w <= 30:\n        gueltig.append(w)\n\nFühren Sie den Schreibtischtest durch und tragen Sie die Werte in jeder Iteration in die Trace-Tabelle ein.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0, 1],
                            headers: ["Iteration", "Variable w", "Bedingung (w >= 0 and w <= 30)", "Inhalt der Liste gueltig"],
                            rows: [
                                ["1", "18", "True (18 >= 0 und 18 <= 30)", "[18]"],
                                ["2", "-4", "False (-4 < 0)", "[18]"],
                                ["3", "25", "True (25 >= 0 und 25 <= 30)", "[18, 25]"],
                                ["4", "32", "False (32 > 30)", "[18, 25]"],
                                ["5", "-1", "False (-1 < 0)", "[18, 25]"]
                            ]
                        },
                        solution: "Nach 5 Schleifendurchläufen enthält die Liste 'gueltig' exakt die zwei Werte [18, 25]. Negative Zahlen und Werte über 30 werden herausgefiltert."
                    },
                    {
                        id: "1_3_e",
                        label: "e) Open-Source-Lizenzen: GPLv3 vs. MIT",
                        points: 3,
                        type: "lines",
                        linesCount: 3,
                        text: "In der Webplattform soll eine Open-Source-Bibliothek eingesetzt werden. Erläutern Sie den Unterschied zwischen dem Copyleft-Effekt der GNU General Public License (GPLv3) und einer permissiven Lizenz (z. B. MIT-Lizenz).",
                        solution: "GPLv3 besitzt einen starken Copyleft-Effekt: Wird abgeleiteter Code veröffentlicht oder verlinkt, muss der gesamte Quellcode des eigenen Projekts ebenfalls unter der GPLv3 offengelegt werden.\nDie MIT-Lizenz ist permissiv: Sie erlaubt die uneingeschränkte Nutzung, Modifikation und Einbindung in proprietäre, geschlossene Software, solange der originale Urheberrechtshinweis erhalten bleibt."
                    }
                ]
            },

            // Aufgabe 4 (25 Pkt)
            {
                number: 4,
                title: "4. Aufgabe: Relationale Datenbanken, SQL & Datenschutzkonzept",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "1_4_a",
                        label: "a) Relationales Datenbankmodell (3. Normalform)",
                        points: 10,
                        type: "lines",
                        linesCount: 8,
                        stencil: "DATENBANKMODELLIERUNG / 3. NORMALFORM",
                        text: "Für das Gerätemanagement der Smart-Home-Plattform liegen folgende unstrukturierte Daten vor:\nEin Kunde besitzt mehrere Smart-Home-Geräte. Jedes Gerät gehört zu genau einem Gerätetyp (z. B. Raumthermostat, Fensterkontakt). Ein Techniker führt an verschiedenen Geräten Wartungen durch.\naa) Erstellen Sie das relationale Schema in der 3. Normalform (3NF). Geben Sie für jede Entität Tabellennamen, Primärschlüssel (PK) und Fremdschlüssel (FK) an (6 Punkte).\nab) Nennen Sie die Kardinalitäten zwischen den Entitäten (4 Punkte).",
                        solution: "Tabellenschema in 3NF:\n• tbl_kunde (Kunde_ID [PK], Vorname, Nachname, Strasse, PLZ, Ort, E-Mail)\n• tbl_geraetetyp (Typ_ID [PK], Bezeichnung, Protokoll, Firmware_Version)\n• tbl_geraet (Geraet_ID [PK], Seriennummer, Installationsdatum, Kunde_ID [FK], Typ_ID [FK])\n• tbl_techniker (Techniker_ID [PK], Name, Telefon, Qualifikation)\n• tbl_wartung (Wartung_ID [PK], Geraet_ID [FK], Techniker_ID [FK], Wartungsdatum, Status, Bemerkung)\n\nKardinalitäten:\n• Kunde zu Gerät: 1 : n (Ein Kunde besitzt n Geräte, jedes Gerät gehört zu 1 Kunden)\n• Gerätetyp zu Gerät: 1 : n\n• Gerät zu Techniker: n : m (Aufgelöst über Zwischentabelle tbl_wartung mit 1 : n und n : 1)"
                    },
                    {
                        id: "1_4_b",
                        label: "b) SQL-Abfragen: Aggregat & JOIN",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKABFRAGEN / SQL",
                        text: "Formulieren Sie die passenden SQL-Befehle für folgende Aufgaben:\nba) Geben Sie für jeden Kunden Vorname, Nachname sowie die Gesamtanzahl seiner registrierten Geräte aus. Sortieren Sie das Ergebnis absteigend nach der Anzahl der Geräte (4 Punkte).\nbb) Selektieren Sie alle Geräte (Geräte-ID und Seriennummer), deren letztes Wartungsdatum vor dem 01.01.2025 lag oder für die noch nie eine Wartung durchgeführt wurde (4 Punkte).",
                        solution: "ba)\nSELECT k.Vorname, k.Nachname, COUNT(g.Geraet_ID) AS Anzahl_Geraete\nFROM tbl_kunde k\nLEFT JOIN tbl_geraet g ON k.Kunde_ID = g.Kunde_ID\nGROUP BY k.Kunde_ID, k.Vorname, k.Nachname\nORDER BY Anzahl_Geraete DESC;\n\nbb)\nSELECT g.Geraet_ID, g.Seriennummer\nFROM tbl_geraet g\nLEFT JOIN tbl_wartung w ON g.Geraet_ID = w.Geraet_ID\nWHERE w.Wartungsdatum < '2025-01-01' OR w.Wartungsdatum IS NULL;"
                    },
                    {
                        id: "1_4_c",
                        label: "c) DSGVO: Löschkonzept nach Art. 17 DSGVO",
                        points: 4,
                        type: "lines",
                        linesCount: 4,
                        text: "Ein Kunde kündigt seinen Vertrag und fordert die unverzügliche Löschung aller seiner personenbezogenen Daten ('Recht auf Vergessenwerden'). Erläutern Sie, welche Daten sofort gelöscht werden müssen und welche Daten auf Grund gesetzlicher Aufbewahrungsfristen (z. B. nach HGB/AO) zunächst gesperrt, aber noch nicht gelöscht werden dürfen.",
                        solution: "Sofort zu löschen: Marketing-Einwilligungen, Nutzerprofile, Zugangsdaten (Passwörter, Session-Tokens) sowie Sensormessdaten/Nutzungshistorie, da der Verarbeitungszweck entfallen ist.\nAufzubewahren (Gesperrt): Rechnungsbelege, Zahlungsdaten und steuerlich relevante Vertragsunterlagen müssen nach § 257 HGB / § 147 AO für 10 Jahre archiviert werden. Diese Daten werden für den operativen Zugriff gesperrt."
                    },
                    {
                        id: "1_4_d",
                        label: "d) Technical English / Security Advisory Comprehension",
                        points: 3,
                        type: "lines",
                        linesCount: 3,
                        text: "Lesen Sie den folgenden Auszug einer Sicherheitswarnung:\n'Critical Vulnerability Advisory: Firmware versions prior to v3.2.0 contain an unauthenticated remote buffer overflow vulnerability in the SSDP service. Attackers within the local network can execute arbitrary code with root privileges. Recommendation: Immediately update gateways to v3.2.0 or disable UPnP/SSDP on untrusted network interfaces.'\n\nFassen Sie auf Deutsch zusammen: Welche Schwachstelle liegt vor, welches Risiko droht und welche beiden Sofortmaßnahmen werden empfohlen?",
                        solution: "Schwachstelle: Pufferüberlauf (Buffer Overflow) im SSDP-Dienst ohne Authentifizierung (in Firmware vor v3.2.0).\nRisiko: Angreifer im lokalen Netzwerk können beliebigen Programmcode mit Root-Rechten ausführen.\nEmpfohlene Sofortmaßnahmen: 1. Sofortiges Firmware-Update auf v3.2.0 installieren oder 2. UPnP/SSDP auf nicht vertrauenswürdigen Netzwerkschnittstellen deaktivieren."
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 2: Logistikzentrum, 4K-Videoüberwachung & Netzwerktechnik
    
    // ----------------------------------------------------------------------
    {
        id: "exam_2",
        title: "Prüfung 2: Logistikzentrum, 4K-Videoüberwachung & Netzwerktechnik",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • LogiPharma Logistik GmbH",
        ausgangssituation: "Sie arbeiten bei der LogiPharma Logistik GmbH, einem spezialisierten Pharmalogistiker mit vollautomatisierten Hochregallagern. Zur Einhaltung strenger GDP-Richtlinien (Good Distribution Practice) und zur lückenlosen Sicherung gegen Diebstahl soll ein modernes 4K-IP-Videoüberwachungssystem installiert werden. Zudem wird die Netzwerkinfrastruktur mit Subnetting, VLANs und Hochverfügbarkeit neu strukturiert.",
        tasks: [
            // Aufgabe 1 (25 Pkt)
            {
                number: 1,
                title: "1. Aufgabe: Kamera-Spezifikation, Speicherbedarfsberechnung & PoE",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "2_1_a",
                        label: "a) Speicherbedarfsberechnung im 5-mm-Rechengitter",
                        points: 7,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "SPEICHERBEDARFSBERECHNUNG (H.265 / RAID)",
                        text: "Für das Lager werden 16 4K-Überwachungskameras installiert. Jede Kamera erzeugt bei H.265-Kompression einen konstanten Datenstrom von 8 Mbit/s. Die Aufnahmen müssen gesetzlich vorgeschrieben 30 Tage lang rund um die Uhr (24 Stunden/Tag) gespeichert werden.\nBerechnen Sie den benötigten Netto-Speicherplatz in Terabyte (TB, Dezimalsystem: 1 TB = 10^12 Byte) und in Tebibyte (TiB, Binärsystem: 1 TiB = 1024^4 Byte). Runden Sie sinnvoll.",
                        solution: "Berechnung:\n1. Bitrate aller Kameras = 16 * 8 Mbit/s = 128 Mbit/s.\n2. Daten pro Sekunde = 128 / 8 = 16 MByte/s.\n3. Sekunden in 30 Tagen = 30 Tage * 24 h * 3600 s = 2.592.000 Sekunden.\n4. Gesamtdaten = 16 MByte/s * 2.592.000 s = 41.472.000 MByte.\nIn Dezimal-TB: 41.472.000 * 10^6 Byte / 10^12 = 41,472 TB (ca. 41,47 TB Netto).\nIn Binär-TiB: (41.472.000 * 10^6 Byte) / (1024^4) = 41.472.000.000.000 / 1.099.511.627.776 ≈ 37,72 TiB."
                    },
                    {
                        id: "2_1_b",
                        label: "b) PoE-Leistungsbudget (Power over Ethernet)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "POE-LEISTUNGSBUDGET / IEEE 802.3AT",
                        text: "Die 16 Kameras unterstützen PoE+ nach IEEE 802.3at (Typ 2, maximale Leistungsaufnahme je Kamera am Port: 25,5 W). Ein 24-Port-PoE-Switch mit einem Gesamt-PoE-Budget von 370 W steht zur Verfügung.\nba) Prüfen Sie rechnerisch, ob das Leistungsbudget des Switches für alle 16 Kameras ausreicht (3 Punkte).\nbb) Welche technische Maßnahme muss ergriffen werden, wenn zusätzlich 4 motorisierte PTZ-Heizkameras mit je 60 W (PoE++ / 802.3bt) angeschlossen werden sollen? (3 Punkte).",
                        solution: "ba) Rechnerische Prüfung: 16 Kameras * 25,5 W = 408 W Maximalleistung. Da 408 W > 370 W ist, reicht das Budget des Switches bei Maximallast NICHT aus! Es drohen Port-Abschaltungen.\nbb) Maßnahme: Einsatz eines zusätzlichen PoE++ Switches oder separater PoE-Injektoren (Midspans) nach IEEE 802.3bt, die bis zu 60 W bzw. 90 W pro Port liefern können."
                    },
                    {
                        id: "2_1_c",
                        label: "c) RAID-Konfiguration für Videoaufzeichnung",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Für das Storage-System wird zwischen RAID 5 und RAID 6 mit je 6 Festplatten à 10 TB diskutiert.\nVergleichen Sie beide RAID-Level hinsichtlich Ausfallsicherheit und nutzbarer Netto-Kapazität und begründen Sie, warum RAID 6 für 10-TB-Festplatten dringend empfohlen wird.",
                        solution: "RAID 5: Verkraftet den gleichzeitigen Ausfall von 1 Platte. Nutzbare Kapazität: (n - 1) * 10 TB = 5 * 10 = 50 TB.\nRAID 6: Verkraftet den gleichzeitigen Ausfall von 2 Platten (doppelte Parität). Nutzbare Kapazität: (n - 2) * 10 TB = 4 * 10 = 40 TB.\nEmpfehlung für 10 TB: Bei großen Festplatten dauert der Rebuild viele Stunden bis Tage. Die Wahrscheinlichkeit eines URE (Unrecoverable Read Error) oder eines zweiten Festplattenausfalls während des Rebuilds ist extrem hoch, was bei RAID 5 zum totalen Datenverlust führt."
                    },
                    {
                        id: "2_1_d",
                        label: "d) IT-Sicherheit: 'No default passwords' Richtlinie",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Die IT-Sicherheitsrichtlinie verlangt, dass IP-Kameras keine werkseitigen Standardpasswörter (wie 'admin/admin') verwenden dürfen. Erläutern Sie zwei Sicherheitsrisiken durch Standardpasswörter und zwei Maßnahmen für ein sicheres Passwort- und Gerätemanagement.",
                        solution: "Risiken: 1. Automatisierte Angriffe durch IoT-Botnetze (wie Mirai), die Standard-Zugangsdaten im Netz scannen. 2. Unbefugte Einsicht in Sicherheitsaufnahmen oder Missbrauch der Kameras als Spionage-Werkzeug.\nMaßnahmen: 1. Erzwungene Passwortänderung bei der Ersteinrichtung (Mindestlänge 12 Zeichen, Komplexität). 2. Zentrales Credential-Management (z. B. Passwort-Tresor) und Isolierung der Kameras in einem separaten Management-VLAN ohne direkten Internetzugriff."
                    }
                ]
            },

            // Aufgabe 2 (25 Pkt)
            {
                number: 2,
                title: "2. Aufgabe: IPv4-Subnetting, VLAN-Segmentierung & Netzwerkfehler",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "2_1_sub",
                        label: "a) IPv4-Subnetting (/25) im 5-mm-Rechengitter",
                        points: 6,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "IPV4-SUBNETTING / BERECHNUNG",
                        text: "Dem Überwachungsbereich wird das Netz 192.168.100.0/25 zugewiesen.\nBerechnen Sie im Rechengitter:\n1. Die Subnetzmaske in Dezimalschreibweise\n2. Die Netzwerkadresse\n3. Die erste nutzbare Host-IP-Adresse\n4. Die letzte nutzbare Host-IP-Adresse\n5. Die Broadcast-Adresse\n6. Die maximale Anzahl nutzbarer Host-Adressen.",
                        solution: "Berechnung für 192.168.100.0/25:\n1. Subnetzmaske: 255.255.255.128 (25 gesetzte Bits: 11111111.11111111.11111111.10000000)\n2. Netzwerkadresse: 192.168.100.0\n3. Erste nutzbare Host-IP: 192.168.100.1\n4. Letzte nutzbare Host-IP: 192.168.100.126\n5. Broadcast-Adresse: 192.168.100.127\n6. Nutzbare Hosts: 2^(32-25) - 2 = 2^7 - 2 = 128 - 2 = 126 Hosts."
                    },
                    {
                        id: "2_2_b",
                        label: "b) VLAN-Konfiguration: Access- vs. Trunk-Port",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Zur Trennung des Datenverkehrs werden drei VLANs eingerichtet: VLAN 10 (Kameras), VLAN 20 (Verwaltung), VLAN 30 (Lagerroboter).\nErläutern Sie den Unterschied zwischen einem Access-Port und einem Trunk-Port (nach IEEE 802.1Q) und an welchen Switch-Anschlüssen diese jeweils konfiguriert werden müssen.",
                        solution: "Access-Port: Gehört zu genau einem ungetaggten VLAN. Endgeräte (wie Kameras, PCs) empfangen und senden normale Ethernet-Frames ohne 802.1Q-VLAN-Tag.\nTrunk-Port (Tagged Port): Überträgt Frames mehrerer VLANs gleichzeitig über eine physische Leitung. Jedem Frame wird ein 4-Byte-VLAN-Tag (802.1Q) mit der VLAN-ID hinzugefügt. Konfiguriert auf Uplinks zwischen Switches und Routern/Firewalls."
                    },
                    {
                        id: "2_2_c",
                        label: "c) Netzwerk-Fehlertabelle zur Kameraanbindung",
                        points: 8,
                        type: "table",
                        stencil: "NETZWERKDIAGNOSE / FEHLERTABELLE",
                        text: "Vervollständigen Sie die Diagnosetabelle für vier gemeldete Verbindungsprobleme.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["Fehlerbild", "Wahrscheinliche Ursache", "Diagnosetest", "Korrekturmaßnahme"],
                            rows: [
                                ["Kamera 04 erhält keine IP-Adresse", "DHCP-Pool im VLAN 10 erschöpft oder falsches VLAN am Port", "Prüfung Switchport-VLAN und DHCP-Server-Leases", "Switchport fest auf VLAN 10 konfigurieren bzw. DHCP-Scope vergrößern"],
                                ["Kamera 09 ist pingbar, Videostream bricht aber alle 30 s ab", "Duplex-Mismatch (Halbduplex/Vollduplex) oder MTU-Problem", "Prüfung Interface-Counters auf CRC-Fehler und Collisions", "Port und Kamera fest auf 1000BASE-T Full-Duplex einstellen"],
                                ["Videomanagement kann Kamera 12 per IP erreichen, aber nicht per Hostnamen", "DNS-Eintrag fehlt oder fehlerhafter DNS-Suffix", "nslookup kamera12.logipharma.local", "Statischen A-Record im internen DNS-Server nachtragen"],
                                ["Switch meldet 'Port disabled due to err-disable'", "Loop / Schleife im Netzwerk oder BPDU-Guard ausgelöst", "Show log / Spanning-Tree Prüfung am Switch", "Schleife entfernen und Port mit 'shutdown / no shutdown' reaktivieren"]
                            ]
                        },
                        solution: "Klassische Netzwerkfehler: VLAN-Fehlkonfiguration, Duplex-Mismatch mit Paketverlust, DNS-Auflösungsfehler, Spanning-Tree Loop Protection."
                    },
                    {
                        id: "2_2_d",
                        label: "d) Dual-Stack: IPv4 und IPv6 im Parallelbetrieb",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Beschreiben Sie das Konzept des Dual-Stack-Betriebs und nennen Sie zwei Vorteile gegenüber reinen IPv4-Netzen im Kontext moderner IoT-Infrastrukturen.",
                        solution: "Dual-Stack bedeutet, dass alle Netzwerkgeräte und Router gleichzeitig sowohl einen vollständigen IPv4- als auch einen IPv6-Protokollstapel ausführen und über beide Protokolle parallel kommunizieren können.\nVorteile: 1. Riesiger Adressraum (kein NAT mehr für IoT-Sensoren nötig, direkte End-to-End-Erreichbarkeit). 2. Zukunftssicherheit und nahtlose Migration ohne harten Umstellungsstichtag."
                    }
                ]
            },

            // Aufgabe 3 (25 Pkt)
            {
                number: 3,
                title: "3. Aufgabe: Rechtliche Rahmenbedingungen, DSGVO & Lieferverzug",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "2_3_a",
                        label: "a) DSGVO: Videoüberwachung am Arbeitsplatz",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "DATENSCHUTZRECHT / ART. 6 & 13 DSGVO",
                        text: "Im Logistikzentrum sollen die Laderampen und der Packbereich videoüberwacht werden.\nNennen Sie die rechtlichen Voraussetzungen nach Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse), die Informationspflichten nach Art. 13 DSGVO (Hinweisschilder) sowie die Rolle des Betriebsrats bei der Einführung.",
                        solution: "1. Rechtmäßige Grundlage: Berechtigtes Interesse (Diebstahlschutz von hochwertigen Arzneimitteln), sofern nicht die Interessen der Mitarbeiter überwiegen. Ständige Verhaltens- und Leistungskontrolle ist unzulässig!\n2. Informationspflichten: Deutlich sichtbares Hinweisschild (Kamera-Piktogramm) mit Kontaktdaten des Verantwortlichen, Zweck der Überwachung, Speicherdauer und Betroffenenrechten.\n3. Betriebsrat: Zwingende Mitbestimmung nach § 87 Abs. 1 Nr. 6 BetrVG (Einführung technischer Einrichtungen zur Überwachung von Arbeitnehmern) ➔ Betriebsvereinbarung erforderlich."
                    },
                    {
                        id: "2_3_b",
                        label: "b) Kaufvertragsstörungen: Lieferverzug nach BGB",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "WIRTSCHAFTSRECHT / BGB LIEFERVERZUG",
                        text: "Die bestellten Switches sollten verbindlich am 15. März geliefert werden (Fixkauf). Am 18. März ist die Ware noch nicht eingetroffen.\nba) Befindet sich der Lieferant im Verzug und ist eine Mahnung erforderlich? Begründen Sie nach BGB (3 Punkte).\nbb) Nennen Sie drei rechtliche Möglichkeiten (Rechte des Käufers) bei Vorliegen des Lieferverzugs (5 Punkte).",
                        solution: "ba) Ja, der Lieferant befindet sich im Lieferverzug. Eine Mahnung ist gem. § 286 Abs. 2 Nr. 1 BGB NICHT erforderlich, da für die Leistung eine Zeit nach dem Kalender bestimmt war (15. März).\nbb) Rechte des Käufers:\n1. Auf Erfüllung des Vertrags bestehen (Lieferung verlangen) und ggf. Schadensersatz wegen Verzögerung fordern.\n2. Nach angemessener Nachfristsetzung: Rücktritt vom Vertrag (§ 323 BGB).\n3. Schadensersatz statt der Leistung verlangen (z. B. Mehrkosten für einen Deckungskauf bei einem anderen Händler nach § 280, 281 BGB)."
                    },
                    {
                        id: "2_3_c",
                        label: "c) Wareneingangskontrolle & Rügepflicht (§ 377 HGB)",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Die gelieferten Serverkomponenten treffen ein. Erläutern Sie die Pflichten der LogiPharma Logistik GmbH bei der Wareneingangskontrolle nach § 377 HGB (Handelskauf) und die Rechtsfolgen einer verspäteten Mängelrüge.",
                        solution: "Pflichten: Als beiderseitiger Handelskauf muss die Ware unverzüglich nach Ablieferung untersucht werden (Sichtprüfung auf Transportschäden, Vollständigkeit, offensichtliche Mängel).\nRechtsfolge bei Unterlassung: Rügt der Käufer den Mangel nicht unverzüglich, gilt die Ware als genehmigt (§ 377 Abs. 2 HGB), es sei denn, es handelt sich um einen versteckten Mangel."
                    },
                    {
                        id: "2_3_d",
                        label: "d) IT-Notfallmanagement: Ausfall des Storage-Clusters",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Definieren Sie die beiden Kennzahlen RTO (Recovery Time Objective) und RPO (Recovery Point Objective) anhand des Ausfallszenarios des Videoüberwachungs- und Frachtverwaltungssystems.",
                        solution: "RTO (Recovery Time Objective): Die maximal tolerierbare Zeitspanne, die zwischen dem Ausfall eines Systems und seiner vollständigen Wiederinbetriebnahme vergehen darf (z. B. maximal 2 Stunden).\nRPO (Recovery Point Objective): Der maximal zulässige Datenverlust, gemessen als Zeitraum zwischen dem letzten Backup/Snapshot und dem Zeitpunkt des Ausfalls (z. B. maximal 15 Minuten Datenverlust)."
                    }
                ]
            },

            // Aufgabe 4 (25 Pkt)
            {
                number: 4,
                title: "4. Aufgabe: Frachtdatenbank, SQL-Reporting & Algorithmen",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "2_4_a",
                        label: "a) Relationale Datenbank für Frachtaufträge (3NF)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKENTWURF / FRACHTVERWALTUNG",
                        text: "Für das Frachtmanagement sollen LKWs, Touren und Frachtstücke verwaltet werden. Ein LKW fährt mehrere Touren. Auf einer Tour werden mehrere Frachtstücke transportiert.\nDefinieren Sie ein relationales Schema in 3. Normalform mit Primärschlüsseln, Fremdschlüsseln und Datentypen für:\n• tbl_lkw\n• tbl_tour\n• tbl_frachtstueck.",
                        solution: "• tbl_lkw (LKW_ID [PK, INT], Kennzeichen [VARCHAR(15)], Max_Nutzlast_kg [DECIMAL(8,2)], Erstzulassung [DATE])\n• tbl_tour (Tour_ID [PK, INT], LKW_ID [FK, INT], Startort [VARCHAR(50)], Zielort [VARCHAR(50)], Abfahrt_Zeit [DATETIME], Ankunft_Zeit [DATETIME])\n• tbl_frachtstueck (Fracht_ID [PK, INT], Tour_ID [FK, INT], Empfaenger [VARCHAR(100)], Gewicht_kg [DECIMAL(6,2)], Kuehlpflichtig [BOOLEAN])"
                    },
                    {
                        id: "2_4_b",
                        label: "b) SQL: Aggregation mit GROUP BY und HAVING",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / AGGREGATION",
                        text: "Formulieren Sie die SQL-Abfragen für folgende Auswertungen:\nba) Ermitteln Sie für jede Tour (Tour-ID, Kennzeichen des LKW) das Gesamtgewicht aller geladenen Frachtstücke sowie die Anzahl der Frachtstücke. Berücksichtigen Sie nur Touren, bei denen das Gesamtgewicht mehr als 5.000 kg beträgt (5 Punkte).\nbb) Ermitteln Sie alle LKWs, die im laufenden Monat März 2026 noch keiner Tour zugeordnet wurden (3 Punkte).",
                        solution: "ba)\nSELECT t.Tour_ID, l.Kennzeichen, SUM(f.Gewicht_kg) AS Gesamtgewicht, COUNT(f.Fracht_ID) AS Anzahl_Fracht\nFROM tbl_tour t\nJOIN tbl_lkw l ON t.LKW_ID = l.LKW_ID\nJOIN tbl_frachtstueck f ON t.Tour_ID = f.Tour_ID\nGROUP BY t.Tour_ID, l.Kennzeichen\nHAVING SUM(f.Gewicht_kg) > 5000;\n\nbb)\nSELECT l.LKW_ID, l.Kennzeichen\nFROM tbl_lkw l\nLEFT JOIN tbl_tour t ON l.LKW_ID = t.LKW_ID AND t.Abfahrt_Zeit BETWEEN '2026-03-01' AND '2026-03-31 23:59:59'\nWHERE t.Tour_ID IS NULL;"
                    },
                    {
                        id: "2_4_c",
                        label: "c) Algorithmus / Struktogramm: Frachtgewichtsprüfung",
                        points: 9,
                        type: "lines",
                        linesCount: 6,
                        stencil: "ALGORITHMUS / STRUKTOGRAMM (DIN 66261)",
                        text: "Entwerfen Sie einen Algorithmus (als Pseudocode oder strukturierte Ablaufbeschreibung nach DIN 66261), der das Beladen eines LKWs steuert:\n• Eingabe: Maximale Nutzlast max_kg, Liste der Frachtstück-Gewichte gewichte_liste.\n• Der Algorithmus addiert sukzessive Frachtstücke, solange die Nutzlast nicht überschritten wird.\n• Wird ein Frachtstück zu schwer, wird es übersprungen und eine Warnung ausgegeben.\n• Ausgabe: Beladene Gesamtmasse, Anzahl verladener Stücke und Anzahl abgewiesener Stücke.",
                        solution: "Pseudocode:\nSET gesamt_gewicht = 0\nSET anzahl_verladen = 0\nSET anzahl_abgewiesen = 0\nFOR EACH gewicht IN gewichte_liste DO\n    IF (gesamt_gewicht + gewicht) <= max_kg THEN\n        gesamt_gewicht = gesamt_gewicht + gewicht\n        anzahl_verladen = anzahl_verladen + 1\n    ELSE\n        OUTPUT 'Warnung: Frachtstück überschreitet Restkapazität!'\n        anzahl_abgewiesen = anzahl_abgewiesen + 1\n    END IF\nEND FOR\nOUTPUT 'Gesamtladung:', gesamt_gewicht, 'kg. Verladen:', anzahl_verladen, 'Abgewiesen:', anzahl_abgewiesen"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 3: Apothekengruppe Curatia, Rechnungsbeleg & Kassen-Wirtschaft
    
    // ----------------------------------------------------------------------
    {
        id: "exam_3",
        title: "Prüfung 3: Apothekengruppe Curatia, Rechnungsbeleg & Kassen-Wirtschaft",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • Apothekengruppe Curatia",
        ausgangssituation: "Sie absolvieren Ihre Ausbildung in der IT-Abteilung der Apothekengruppe Curatia, die Filialapotheken in ganz Deutschland unterhält und zusätzlich einen Onlineshop für rezeptfreie Arzneimittel betreibt. Die Curatia beabsichtigt, eine neue Filiale zu eröffnen. Sie sind bei der Beschaffung, der kaufmännischen Belegprüfung, der Absicherung der Kassenarbeitsplätze und dem Datenbankaufbau eingebunden.",
        tasks: [
            // Aufgabe 1 (25 Pkt)
            {
                number: 1,
                title: "1. Aufgabe: Kaufmännische Belegprüfung, Skontoberechnung & Handelskalkulation",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "3_1_a",
                        label: "a) Relevante kaufmännische Zeitpunkte auf dem Beleg",
                        points: 3,
                        type: "lines",
                        linesCount: 3,
                        svgIllustration: ExamSvgs.getInvoiceHtml(),
                        stencil: "BELEGPRÜFUNG / KAUFMÄNNISCHE ZEITPUNKTE",
                        text: "Ihnen wird die abgebildete Eingangsrechnung R20250815 der RofoFix AG vorgelegt (siehe Belegabbildung oben).\nAuf dem Beleg sind mehrere kaufmännisch relevante Zeitpunkte vermerkt. Nennen Sie unter Angabe des konkreten Datums die drei Vorgänge, die laut Beleg bereits stattgefunden haben.",
                        solution: "1. 05. Sept. 2025: Bestelldatum (Abschluss des Kaufvertrags / Erteilung der Bestellung durch die Apothekengruppe Curatia).\n2. 10. Sept. 2025: Lieferdatum (Gefahrübergang / Erfüllung der Lieferverpflichtung durch die RofoFix AG).\n3. 11. Sept. 2025: Rechnungsdatum (Rechnungsstellung / Entstehung der Zahlungsverbindlichkeit)."
                    },
                    {
                        id: "3_1_b",
                        label: "b) Kontrollvorgänge beim Belegabgleich",
                        points: 6,
                        type: "lines",
                        linesCount: 6,
                        text: "Sie gleichen die Rechnungspositionen der Eingangsrechnung intern ab. Beschreiben Sie dazu drei konkrete Kontrollvorgänge, die vor der Zahlungsfreigabe durchgeführt werden müssen.",
                        solution: "1. Kaufmännischer Abgleich mit der Bestellung (Bestellschein): Prüfung, ob die in Rechnung gestellten Artikel, Mengen und vereinbarten Einkaufspreise mit der ursprünglichen Bestellung übereinstimmen.\n2. Mengen- und Qualitätsabgleich mit dem Lieferschein (Wareneingang): Prüfung, ob die berechneten Artikel (3 Stück M193, 10 Pack Kassenrollen, 2.000 Dosen Dragees) tatsächlich vollständig und unbeschädigt angeliefert wurden.\n3. Rechnerische Prüfung (Mathematische Richtigkeit): Nachrechnen der Positions-Gesamtpreise (Menge * Einzelpreis), der Zwischensummen, der korrekten Steuersätze (19 % bzw. 7 %) sowie des Rechnungs-Bruttobetrags (1.130,20 EUR)."
                    },
                    {
                        id: "3_1_c",
                        label: "c) Skontoberechnung im 5-mm-Rechengitter & Rabattgründe",
                        points: 6,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "SKONTOBERECHNUNG / KÄSTCHENPAPIER",
                        text: "ca) Auf der Rechnung ist angegeben: 'Zahlbar bis 30. Sept. 2025 mit 2 % Skonto'. Berechnen Sie im nachfolgenden Rechengitter den Skontobetrag, der bei fristgerechter Zahlung abgezogen werden kann, sowie den tatsächlichen Überweisungsbetrag. Runden Sie kaufmännisch auf zwei Stellen nach dem Komma (2 Punkte).\ncb) Neben Skonto gibt es als Preisnachlass auch den Rabatt. Beschreiben Sie zwei mögliche betriebswirtschaftliche Gründe, warum ein Lieferant Rabatt gewährt (4 Punkte).",
                        solution: "ca) Skontoberechnung:\nBruttobetrag = 1.130,20 EUR.\nSkontobetrag = 1.130,20 EUR * 0,02 = 22,604 EUR ≈ 22,60 EUR.\nÜberweisungsbetrag = 1.130,20 EUR - 22,60 EUR = 1.107,60 EUR.\n\ncb) Rabattgründe:\n1. Mengenrabatt: Anreiz zur Abnahme größerer Stückzahlen (z. B. bei 2.000 Dosen Dragees), wodurch der Lieferant Skaleneffekte und geringere Verpackungskosten erzielt.\n2. Treuerabatt / Kundenbindungsrabatt: Belohnung für langjährige, regelmäßige Geschäftsbeziehungen zur Sicherung von Folgeaufträgen.\n(Weitere: Einführungsrabatt bei neuen Produkten, Personalrabatt)."
                    },
                    {
                        id: "3_1_d",
                        label: "d) Vorwärtskalkulation (Handelskalkulation)",
                        points: 10,
                        type: "table",
                        stencil: "HANDELSKALKULATION (VORWÄRTSKALKULATION)",
                        text: "Für den Verkauf der Kassen-Scan-Stifte (Pos. 01) soll der Bruttoverkaufspreis (BVP) ermittelt werden. Berechnen Sie das Kalkulationsschema mit folgenden Werten:\nListeneinkaufspreis: 60,00 EUR, Lieferantenrabatt: 10 %, Lieferantenskonto: 2 %, Bezugskosten: 2,00 EUR/Stück, Handlungskostenzuschlag: 40 %, Gewinnzuschlag: 25 %, Kundenskonto: 2 %, Kundenrabatt: 5 %, Umsatzsteuer: 19 %.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["Kalkulationsstufe", "Rechenweg / Prozentsatz", "Betrag je Stück"],
                            rows: [
                                ["Listeneinkaufspreis (LEP)", "Vorgabe", "60,00 EUR"],
                                ["- Lieferantenrabatt", "- 10 % von 60,00 EUR", "- 6,00 EUR"],
                                ["= Zieleinkaufspreis (ZEP)", "= 60,00 - 6,00", "= 54,00 EUR"],
                                ["- Lieferantenskonto", "- 2 % von 54,00 EUR", "- 1,08 EUR"],
                                ["= Bareinkaufspreis (BEP)", "= 54,00 - 1,08", "= 52,92 EUR"],
                                ["+ Bezugskosten", "+ Fracht / Verpackung", "+ 2,00 EUR"],
                                ["= Bezugspreis (Einstandspreis)", "= 52,92 + 2,00", "= 54,92 EUR"],
                                ["+ Handlungskosten", "+ 40 % von 54,92 EUR", "+ 21,97 EUR"],
                                ["= Selbstkostenpreis (SKP)", "= 54,92 + 21,97", "= 76,89 EUR"],
                                ["+ Gewinnzuschlag", "+ 25 % von 76,89 EUR", "+ 19,22 EUR"],
                                ["= Barverkaufspreis (BVP_netto)", "= 76,89 + 19,22", "= 96,11 EUR"],
                                ["+ Kundenskonto & Kundenrabatt (im Hundert)", "Kalkulatorischer Aufschlag", "+ 7,52 EUR"],
                                ["= Nettoverkaufspreis / Listenverkaufspreis", "Netto", "= 103,63 EUR"],
                                ["+ Umsatzsteuer (19 %)", "+ 19 % von 103,63 EUR", "+ 19,69 EUR"],
                                ["= Bruttoverkaufspreis (BVP)", "Endkundenpreis inkl. USt", "= 123,32 EUR"]
                            ]
                        },
                        solution: "Klassisches Kalkulationsschema nach Prüfungsstandard: LEP ➔ ZEP ➔ BEP ➔ Einstandspreis ➔ SKP ➔ BVP (Netto) ➔ ZVP ➔ LVP (Netto) ➔ BVP (Brutto inkl. USt)."
                    }
                ]
            },

            // Aufgabe 2 (25 Pkt)
            {
                number: 2,
                title: "2. Aufgabe: Kassenhardware, Barcodescanner & USV-Absicherung",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "3_2_a",
                        label: "a) Schnittstellen: USB vs. Bluetooth für Barcodescanner",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Für die Kassenarbeitsplätze werden kabelgebundene USB-Handscanner mit kabellosen Bluetooth-Scannern verglichen.\nNennen Sie je zwei Vor- und Nachteile von kabellosen Bluetooth-Scannern im täglichen Apothekenbetrieb.",
                        solution: "Vorteile Bluetooth-Scanner:\n1. Hohe Bewegungsfreiheit: Der Mitarbeiter kann schwere oder sperrige Packungen direkt im Warenkorb oder im Regal einscannen, ohne das Kabel spannen zu müssen.\n2. Geringerer Verschleiß: Keine Kabelbrüche an der Kasse durch ständiges Ziehen und Verdrehen.\nNachteile Bluetooth-Scanner:\n1. Akku-Abhängigkeit: Regelmäßiges Aufladen in der Ladeschale nötig; leerer Akku während des Kundengesprächs blockiert den Kassiervorgang.\n2. Höhere Störanfälligkeit / Latenz: Mögliche Funkstörungen im 2,4-GHz-Band oder Verzögerungen beim Wiederverbinden nach dem Standby."
                    },
                    {
                        id: "3_2_b",
                        label: "b) USV-Notstromversorgung für Kassenplatz",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "USV-KLASSIFIZIERUNG (VFD, VI, VFI)",
                        text: "Die Kassen müssen gegen Stromschwankungen und Netzausfälle geschützt werden.\nba) Unterscheiden Sie die drei USV-Topologien VFD (Offline), VI (Line-Interactive) und VFI (Online / Doppelwandler) hinsichtlich Umschaltzeit und Spannungsregelung (5 Punkte).\nbb) Welche USV-Klasse empfehlen Sie für das zentrale Apothekenserver-System und warum? (3 Punkte).",
                        solution: "ba) Topologien:\n• VFD (Voltage and Frequency Dependent / Offline): Normalbetrieb direkt am Netz; bei Stromausfall Umschaltung auf Batterie nach 4-10 ms. Keine kontinuierliche Spannungsregelung.\n• VI (Voltage Independent / Line-Interactive): Besitzt einen automatischen Spannungsregler (AVR / Autotransformator) zum Ausgleich von Unter-/Überspannungen ohne Batteriebetrieb. Umschaltzeit 2-4 ms.\n• VFI (Voltage and Frequency Independent / Online-Doppelwandler): Wandelt Wechselstrom kontinuierlich in Gleichstrom und wieder in sauberen Wechselstrom um (Null Umschaltzeit: 0 ms). Absoluter Schutz gegen alle Netzstörungen.\nbb) Empfehlung Server: VFI (Online-USV), da unterbrechungsfreie 0 ms Umschaltung und saubere Sinusspannung Schäden an den sensiblen Server-Netzteilen und Datenbankkorruption bei Stromausfall verhindern."
                    },
                    {
                        id: "3_2_c",
                        label: "c) Datensicherheit am Kassenserver: RAID 1 vs. RAID 5",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Auf dem lokalen Kassenserver werden Belege zwischengespeichert. Es stehen zwei 1-TB-SSDs zur Verfügung.\nErläutern Sie, warum hier ein RAID 1 (Spiegelung) sinnvoll ist, wie sich die Schreib-/Lesegeschwindigkeit verändert und ob das RAID ein Backup ersetzt.",
                        solution: "RAID 1 (Mirroring) spiegelt alle Daten redundant auf beide SSDs (1 TB nutzbar). Fällt eine SSD aus, läuft das System unterbrechungsfrei weiter.\nGeschwindigkeit: Lesegeschwindigkeit steigt (da Daten parallel von beiden SSDs gelesen werden können); Schreibgeschwindigkeit entspricht der langsameren SSD.\nDatensicherung: Ein RAID ist KEIN Backup! Versehentlich gelöschte Dateien, Ransomware-Befall oder logische Datenbankfehler werden sofort auf beide Platten gespiegelt. Ein externes, getrennt gelagertes Backup ist zwingend erforderlich."
                    },
                    {
                        id: "3_2_d",
                        label: "d) Netzwerktrennung: Kassen-LAN vs. Kunden-WLAN",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "In der Filiale soll ein kostenloses Kunden-WLAN ('Curatia-Free-WiFi') eingerichtet werden. Beschreiben Sie, wie die Kassenarbeitsplätze netzwerktechnisch gegen unbefugte Zugriffe aus dem Kunden-WLAN abgesichert werden müssen.",
                        solution: "1. Trennung über VLANs: Kassen und Server werden in einem geschützten VLAN (z. B. VLAN 100) platziert, das Gäste-WLAN in einem isolierten VLAN (z. B. VLAN 200).\n2. Firewall-Regeln: Auf der zentralen Firewall wird jeder Datenverkehr von VLAN 200 ins VLAN 100 strikt blockiert (Drop/Deny all). Das Gäste-VLAN erhält nur direkten Zugriff ins Internet (HTTP/HTTPS/DNS).\n3. Client-Isolation: Im WLAN-Controller wird 'Client Isolation' aktiviert, damit Gäste-Geräte nicht untereinander kommunizieren können."
                    }
                ]
            },

            // Aufgabe 3 (25 Pkt)
            {
                number: 3,
                title: "3. Aufgabe: Datenschutz im Gesundheitswesen, DSGVO Art. 9 & 3-2-1-Backup",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "3_3_a",
                        label: "a) Besondere Kategorien personenbezogener Daten (Art. 9 DSGVO)",
                        points: 8,
                        type: "lines",
                        linesCount: 5,
                        stencil: "DATENSCHUTZRECHT / ART. 9 DSGVO GESUNDHEITSDATEN",
                        text: "In der Apotheke werden elektronische Rezepte (E-Rezepte) und Medikationspläne verarbeitet.\nErläutern Sie, warum Gesundheitsdaten nach Art. 9 DSGVO unter den besonderen Schutz fallen, welche Ausnahme nach Art. 9 Abs. 2 lit. h DSGVO die Verarbeitung in der Apotheke erlaubt und welche besonderen technischen Schutzmaßnahmen erforderlich sind.",
                        solution: "Besonderer Schutz: Gesundheitsdaten offenbaren intime Informationen über Krankheiten, Therapien und körperliche Verfassungen. Ein Missbrauch kann zur Diskriminierung (z. B. bei Arbeitgebern oder Versicherungen) führen.\nAusnahmetatbestand: Art. 9 Abs. 2 lit. h DSGVO erlaubt die Verarbeitung für Zwecke der Gesundheitsvorsorge, der medizinischen Diagnostik, der Versorgung oder Behandlung im Gesundheits- oder Sozialbereich unter Aufsicht von Berufsgeheimnisträgern (Apothekern).\nSchutzmaßnahmen: Ende-zu-Ende-Verschlüsselung, Zugriff nur mit Heilberufsausweis (HBA) / SMC-B Karte über die Telematikinfrastruktur (TI) sowie strikte Rollen- und Rechtekonzepte."
                    },
                    {
                        id: "3_3_b",
                        label: "b) Meldepflicht bei Datenschutzverletzungen (Art. 33 DSGVO)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Ein Mitarbeiter klickt auf einen Phishing-Link, wodurch Schadsoftware Zugriff auf Rezeptdaten erhält. Beschreiben Sie die gesetzliche Meldepflicht nach Art. 33 DSGVO (Frist, Adressat) und wann eine Benachrichtigung der betroffenen Patienten nach Art. 34 DSGVO erforderlich ist.",
                        solution: "Meldepflicht nach Art. 33 DSGVO: Die Verletzung muss unverzüglich und möglichst binnen 72 Stunden nach Bekanntwerden an die zuständige Landesdatenschutzbehörde gemeldet werden (Inhalt: Art der Verletzung, betroffene Kategorien, ergriffene Maßnahmen).\nBenachrichtigung der Patienten (Art. 34 DSGVO): Ist unverzüglich erforderlich, wenn die Datenpanne voraussichtlich ein hohes Risiko für die persönlichen Rechte und Freiheiten der betroffenen Personen zur Folge hat (bei Gesundheitsdaten regelmäßig der Fall)."
                    },
                    {
                        id: "3_3_c",
                        label: "c) 3-2-1-Backup-Strategie für Apothekendaten",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "BACKUP-KONZEPT / 3-2-1-REGEL",
                        text: "Für die Apotheken-Warenwirtschaft soll ein ausfallsicheres Backup-Konzept nach der 3-2-1-Regel implementiert werden. Erläutern Sie die drei Ziffern 3, 2 und 1 und begründen Sie die Notwendigkeit von 'Immutability' (Unveränderlichkeit) gegen Ransomware.",
                        solution: "3-2-1-Regel:\n• 3: Mindestens 3 Kopien der Daten vorhalten (1 Produktionsdaten + 2 Backups).\n• 2: Die Backups auf mindestens 2 verschiedenen Medientypen speichern (z. B. lokales NAS und Magnetband/LTO oder Cloud-Storage).\n• 1: Mindestens 1 Backup-Kopie an einem externen, räumlich getrennten Ort aufbewahren (Offsite / Brandabschnitt / Cloud).\nImmutability (WORM-Prinzip): Unveränderbare Backups können für einen definierten Zeitraum weder überschrieben noch gelöscht werden, selbst wenn Angreifer Administrator-Rechte erlangen. Dies schützt vor Verschlüsselung durch Ransomware."
                    },
                    {
                        id: "3_3_d",
                        label: "d) Revisionssichere Archivierung nach GoBD",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Elektronische Kassenbelege und digitale Rechnungen müssen nach den GoBD archiviert werden. Nennen Sie drei Grundsätze ordnungsmäßiger DV-gestützter Buchführungssysteme (z. B. Nachvollziehbarkeit, Unveränderbarkeit).",
                        solution: "Grundsätze nach GoBD:\n1. Unveränderbarkeit: Ein Beleg darf nachträglich nicht spurenlos manipuliert oder überschrieben werden; Änderungen müssen protokolliert werden (Audit-Trail).\n2. Vollständigkeit und Richtigkeit: Alle Geschäftsvorfälle müssen lückenlos und wahrheitsgetreu erfasst werden.\n3. Zeitgerechte Erfassung und Ordnung: Zeitnahe Buchung von Vorgängen und geordnete Ablage mit Zugriffsmöglichkeit für Betriebsprüfer."
                    }
                ]
            },

            // Aufgabe 4 (25 Pkt)
            {
                number: 4,
                title: "4. Aufgabe: Warenwirtschafts-Datenbank, SQL & Verfallsdatum-Algorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "3_4_a",
                        label: "a) Datenbank-ERD für Chargen und Verfallsdaten",
                        points: 10,
                        type: "lines",
                        linesCount: 8,
                        stencil: "DATENBANKMODELLIERUNG / CHARGENVERWALTUNG",
                        text: "In einer Apotheke müssen Medikamente chargengenau mit Verfallsdatum erfasst werden. Ein Medikament (PZN, Handelsname) kann in mehreren Lieferungen mit unterschiedlichen Chargennummern und Verfallsdaten eintreffen. Eine Kassenquittung enthält mehrere Verkaufspositionen.\nErstellen Sie das Tabellenschema in 3NF für:\n• tbl_medikament\n• tbl_charge\n• tbl_kassenbeleg\n• tbl_belegposition\nKennzeichnen Sie Primärschlüssel (PK) und Fremdschlüssel (FK).",
                        solution: "Tabellenschema in 3NF:\n• tbl_medikament (PZN [PK, INT], Handelsname [VARCHAR(100)], Darreichungsform [VARCHAR(30)], Verschreibungspflichtig [BOOLEAN], UVP_EUR [DECIMAL(6,2)])\n• tbl_charge (Charge_ID [PK, INT], PZN [FK, INT], Chargennummer [VARCHAR(30)], Verfallsdatum [DATE], Lagerbestand [INT])\n• tbl_kassenbeleg (Beleg_Nr [PK, INT], Belegdatum [DATETIME], Kassen_ID [INT], Zahlart [VARCHAR(20)], Gesamtbetrag_EUR [DECIMAL(8,2)])\n• tbl_belegposition (Pos_ID [PK, INT], Beleg_Nr [FK, INT], Charge_ID [FK, INT], Verkaufsmenge [INT], Einzelpreis_EUR [DECIMAL(6,2)])"
                    },
                    {
                        id: "3_4_b",
                        label: "b) SQL: Abfrage ablaufender Medikamente (Mindesthaltbarkeit)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / DATUMSFUNKTIONEN",
                        text: "Formulieren Sie die SQL-Abfragen:\nba) Ermitteln Sie PZN, Handelsname, Chargennummer, Verfallsdatum und den aktuellen Lagerbestand für alle Chargen, deren Verfallsdatum in den nächsten 90 Tagen (ab Tagesdatum) liegt und deren Bestand größer als 0 ist. Sortieren Sie aufsteigend nach dem Verfallsdatum (5 Punkte).\nbb) Berechnen Sie den Gesamtwert des aktuellen Lagerbestands (Menge * UVP) aller vorrätigen Medikamente (3 Punkte).",
                        solution: "ba)\nSELECT m.PZN, m.Handelsname, c.Chargennummer, c.Verfallsdatum, c.Lagerbestand\nFROM tbl_charge c\nJOIN tbl_medikament m ON c.PZN = m.PZN\nWHERE c.Lagerbestand > 0 \n  AND c.Verfallsdatum BETWEEN CURRENT_DATE AND (CURRENT_DATE + INTERVAL 90 DAY)\nORDER BY c.Verfallsdatum ASC;\n\nbb)\nSELECT SUM(c.Lagerbestand * m.UVP_EUR) AS Gesamtwert_Lagerbestand\nFROM tbl_charge c\nJOIN tbl_medikament m ON c.PZN = m.PZN\nWHERE c.Lagerbestand > 0;"
                    },
                    {
                        id: "3_4_c",
                        label: "c) Algorithmus: FEFO-Prinzip (First Expired - First Out)",
                        points: 7,
                        type: "lines",
                        linesCount: 6,
                        stencil: "ALGORITHMUS / WARENWIRTSCHAFT (FEFO)",
                        text: "Im Arzneimittelhandel gilt das FEFO-Prinzip: Chargen, die als erste ablaufen, müssen vorrangig verkauft werden.\nEntwerfen Sie einen Pseudocode-Algorithmus für die Funktion `buche_verkauf(pzn, benoetigte_menge)`, der die Chargen eines Medikaments nach aufsteigendem Verfallsdatum durchsucht, den Lagerbestand abbucht und bei unzureichendem Gesamtbestand eine Fehlermeldung ausgibt.",
                        solution: "Pseudocode:\nFUNCTION buche_verkauf(pzn, benoetigte_menge):\n    chargen = LADE_CHARGEN_SORTIERT_NACH_VERFALLSDATUM(pzn)\n    verfuegbar = SUMME_BESTAND(chargen)\n    IF verfuegbar < benoetigte_menge THEN\n        RETURN 'FEHLER: Bestand nicht ausreichend!'\n    END IF\n    \n    rest_menge = benoetigte_menge\n    FOR EACH c IN chargen DO\n        IF rest_menge == 0 THEN BREAK\n        IF c.Lagerbestand >= rest_menge THEN\n            c.Lagerbestand = c.Lagerbestand - rest_menge\n            rest_menge = 0\n        ELSE\n            rest_menge = rest_menge - c.Lagerbestand\n            c.Lagerbestand = 0\n        END IF\n        SPEICHERE_CHARGE(c)\n    END FOR\n    RETURN 'ERFOLG: Verkauf gebucht.'"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 4: Anwaltskanzlei, Security & DIN 69900 Netzplantechnik
    
    // ----------------------------------------------------------------------
    {
        id: "exam_4",
        title: "Prüfung 4: Anwaltskanzlei, Security & DIN 69900 Netzplantechnik",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • LexConsult Kanzlei GmbH",
        ausgangssituation: "Sie unterstützen die IT-Abteilung der überregional tätigen Wirtschaftskanzlei LexConsult Kanzlei GmbH. Für ein Kanzlei-Digitalisierungsprojekt soll die Projektplanung mittels DIN 69900 Netzplantechnik strukturiert werden. Zudem müssen die vertrauliche Kommunikation mit Mandanten durch asymmetrische Kryptografie abgesichert, ein objektorientiertes Aktenverwaltungssystem modelliert und strenge Vorgaben des Berufsgeheimnisses umgesetzt werden.",
        tasks: [
            // Aufgabe 1 (25 Pkt)
            {
                number: 1,
                title: "1. Aufgabe: DIN 69900 Netzplantechnik, Pufferzeiten & Kritischer Pfad",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "4_1_a",
                        label: "a) DIN 69900 Vorgangs-Knotenberechnung",
                        points: 15,
                        type: "table",
                        svgIllustration: ExamSvgs.getNetzplanNodeSvg(),
                        stencil: "DIN 69900 NETZPLANTECHNIK / KNOTENBERECHNUNG",
                        text: "Für das Digitalisierungsprojekt liegt folgende Vorgangsliste vor:\n• Vorgang A: Ist-Analyse Kanzlei (Dauer: 4 Tage, Vorgänger: keine)\n• Vorgang B: Server-Beschaffung (Dauer: 6 Tage, Vorgänger: A)\n• Vorgang C: Software-Customizing (Dauer: 8 Tage, Vorgänger: A)\n• Vorgang D: Verkabelung & Netzwerk (Dauer: 3 Tage, Vorgänger: B)\n• Vorgang E: Datenmigration Altdaten (Dauer: 5 Tage, Vorgänger: B, C)\n• Vorgang F: Schulung Anwälte & Rollout (Dauer: 4 Tage, Vorgänger: D, E)\n\nFühren Sie die Vorwärtsrechnung (FAZ, FEZ) und Rückwärtsrechnung (SAZ, SEZ) durch, berechnen Sie den Gesamtpuffer (GP) und freien Puffer (FP) und ermitteln Sie den Kritischen Pfad.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0, 1, 2],
                            headers: ["Vorgang", "Dauer", "Vorgänger", "FAZ", "FEZ", "SAZ", "SEZ", "GP", "FP", "Kritisch?"],
                            rows: [
                                ["A (Ist-Analyse)", "4", "-", "0", "4", "0", "4", "0", "0", "JA (Kritisch)"],
                                ["B (Server-Beschaffung)", "6", "A", "4", "10", "6", "12", "2", "0", "Nein"],
                                ["C (Software-Customizing)", "8", "A", "4", "12", "4", "12", "0", "0", "JA (Kritisch)"],
                                ["D (Verkabelung)", "3", "B", "10", "13", "14", "17", "4", "4", "Nein"],
                                ["E (Datenmigration)", "5", "B, C", "12", "17", "12", "17", "0", "0", "JA (Kritisch)"],
                                ["F (Schulung & Rollout)", "4", "D, E", "17", "21", "17", "21", "0", "0", "JA (Kritisch)"]
                            ]
                        },
                        solution: "Gesamtdauer des Projekts = 21 Tage.\nKritischer Pfad (alle Vorgänge mit GP = 0 und FP = 0): A ➔ C ➔ E ➔ F.\nVorwärtsrechnung: FEZ = FAZ + D; FAZ = max(FEZ aller Vorgänger).\nRückwärtsrechnung: SAZ = SEZ - D; SEZ = min(SAZ aller Nachfolger).\nGesamtpuffer GP = SAZ - FAZ (oder SEZ - FEZ).\nFreier Puffer FP = min(FAZ aller direkten Nachfolger) - FEZ."
                    },
                    {
                        id: "4_1_b",
                        label: "b) Prozessmodellierung: EPK oder BPMN 2.0 für Mandantenaufnahme",
                        points: 10,
                        type: "lines",
                        linesCount: 6,
                        stencil: "GESCHÄFTSPROZESSMODELLIERUNG (BPMN / EPK)",
                        text: "Beschreiben Sie den Ablauf der Mandantenaufnahme als strukturiertes Ereignis-Ablauf-Modell (oder skizzieren Sie ein BPMN 2.0 Diagramm auf dem Whiteboard):\n1. Ein neuer Mandant reicht eine Klageanfrage ein (Startereignis).\n2. Es erfolgt eine Interessenkollisionsprüfung (Funktion).\n3. Verzweigung (XOR): Liegt eine Kollision vor, wird das Mandat abgelehnt (Ende). Liegt keine vor, wird die Akte angelegt, der Vorschuss berechnet und die Auftragsbestätigung versendet.",
                        solution: "Elemente der EPK:\n• Startereignis: 'Mandatsanfrage eingegangen'\n• Funktion: 'Interessenkollision prüfen'\n• XOR-Verknüpfung:\n  - Pfad 1: Ereignis 'Kollision festgestellt' ➔ Funktion 'Ablehnungsschreiben erstellen' ➔ Endereignis 'Mandat abgelehnt'.\n  - Pfad 2: Ereignis 'Keine Kollision' ➔ Funktion 'Elektronische Akte anlegen' ➔ AND-Konnektor (Parallel) ➔ Funktionen 'Vorschussnote erstellen' und 'Auftragsbestätigung versenden' ➔ Endereignis 'Mandatsaufnahme abgeschlossen'."
                    }
                ]
            },

            // Aufgabe 2 (25 Pkt)
            {
                number: 2,
                title: "2. Aufgabe: Asymmetrische Kryptografie, Digitale Signaturen & TLS",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "4_2_a",
                        label: "a) Asymmetrische Verschlüsselung (Public / Private Key)",
                        points: 12,
                        type: "lines",
                        linesCount: 6,
                        svgIllustration: ExamSvgs.getAsymmetricEncryptionSvg(),
                        stencil: "KRYPTOGRAFIE / ASYMMETRISCHE VERSCHLÜSSELUNG",
                        text: "Ein Anwalt möchte einem Mandanten vertrauliche Vertragsentwürfe per E-Mail senden (siehe Abbildung).\naa) Erläutern Sie Schritt für Schritt, welcher Schlüssel zur Verschlüsselung und welcher zur Entschlüsselung verwendet werden muss, damit nur der Mandant die Nachricht lesen kann (6 Punkte).\nab) Unterscheiden Sie das asymmetrische Verfahren von der symmetrischen Verschlüsselung (z. B. AES) hinsichtlich Geschwindigkeit und Schlüsselverteilung (6 Punkte).",
                        solution: "aa) Ablauf der Vertraulichkeitsverschlüsselung:\n1. Der Anwalt verschlüsselt das Dokument mit dem ÖFFENTLICHEN Schlüssel (Public Key) des Mandanten.\n2. Die verschlüsselte Datei (Chiffrat) wird über das unsichere Internet übertragen.\n3. Nur der Mandant kann die Datei mit seinem streng geheimen PRIVATEN Schlüssel (Private Key) entschlüsseln. Selbst der Anwalt kann das Chiffrat nach dem Verschlüsseln nicht mehr öffnen.\n\nab) Vergleich:\n• Symmetrisch (z. B. AES-256): Ein einziger geheimer Schlüssel für Verschlüsselung und Entschlüsselung. Extrem schnell, aber schwieriges Problem der sicheren Schlüsselübergabe (Key Exchange).\n• Asymmetrisch (z. B. RSA, ECC): Schlüsselpaar (Public/Private). Löst das Schlüsselverteilungsproblem elegant, ist rechnerisch jedoch ca. 1.000-mal langsamer als symmetrische Chiffren.\nPraxis (Hybride Verschlüsselung): Der symmetrische Sitzungsschlüssel wird asymmetrisch ausgetauscht, die Nutzdaten dann symmetrisch verschlüsselt."
                    },
                    {
                        id: "4_2_b",
                        label: "b) Digitale Signatur: Integrität und Authentizität",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        text: "Um die Echtheit eines Schriftsatzes zu garantieren, signiert der Anwalt das Dokument digital.\nErläutern Sie das technische Verfahren der digitalen Signatur (Hashwert-Bildung, Signaturschlüssel, Verifikationsschlüssel) und welche beiden Schutzziele dadurch garantiert werden.",
                        solution: "Verfahren:\n1. Aus dem Dokument wird mittels kryptografischer Hashfunktion (z. B. SHA-256) ein eindeutiger Hashwert (digitaler Fingerabdruck) berechnet.\n2. Dieser Hashwert wird mit dem PRIVATEN Schlüssel des Senders (Anwalts) verschlüsselt = Digitale Signatur.\n3. Der Empfänger entschlüsselt die Signatur mit dem ÖFFENTLICHEN Schlüssel des Anwalts und vergleicht das Ergebnis mit dem selbst neu berechneten Hashwert des Dokuments.\nSchutzziele:\n1. Authentizität: Der Empfänger kann zweifelsfrei nachweisen, wer das Dokument erstellt hat (Urheberschaft).\n2. Integrität: Jede nachträgliche Manipulation am Dokument führt zu einem völlig anderen Hashwert und wird sofort bemerkt."
                    },
                    {
                        id: "4_2_c",
                        label: "c) TLS-Handshake und Zertifikatsprüfung",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Beim Aufruf des Kanzleiportals über HTTPS meldet der Browser: 'Zertifikat ungültig - Sperrliste kann nicht abgefragt werden'.\nErläutern Sie die Aufgaben einer Zertifizierungsstelle (CA) sowie die beiden Verfahren CRL (Certificate Revocation List) und OCSP (Online Certificate Status Protocol).",
                        solution: "Aufgabe der CA: Bestätigt als vertrauenswürdige dritte Instanz (Trust Center) die Identität des Inhabers und signiert dessen Public Key digital.\nSperrprüfungsverfahren:\n• CRL (Certificate Revocation List): Eine von der CA regelmäßig veröffentlichte Liste aller vorzeitig gesperrten/widerrufenen Zertifikate. Nachteil: Kann sehr groß und veraltet sein.\n• OCSP (Online Certificate Status Protocol): Eine Echtzeit-Online-Abfrage beim Server der CA zur sekundenschnellen Prüfung des Status eines einzelnen Zertifikats (Good, Revoked, Unknown)."
                    }
                ]
            },

            // Aufgabe 3 (25 Pkt)
            {
                number: 3,
                title: "3. Aufgabe: Kanzlei-IT, Software-Lizenzmodelle & Ergonomie",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "4_3_a",
                        label: "a) Software-Lizenzmodelle im Vergleich",
                        points: 8,
                        type: "table",
                        stencil: "LIZENZMANAGEMENT / IT-RECHT",
                        text: "Für 40 Kanzleiarbeitsplätze werden Office-Lizenzen benötigt. Vergleichen Sie die drei Lizenzierungsmodelle OEM/SB, Volumenlizenzvertrag und SaaS (Cloud-Abonnement).",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["Kriterium", "OEM / System Builder", "Klassische Volumenlizenz", "SaaS (z. B. M365 Cloud)"],
                            rows: [
                                ["Zahlungsmodell", "Einmalkauf (Capex)", "Einmalkauf mit Software Assurance", "Laufende monatliche/jährliche Miete (Opex)"],
                                ["Hardware-Bindung", "An das Erstgerät gebunden (in DE übertragbar)", "Frei auf beliebigen Geräten installierbar", "Benutzerbezogen (z. B. bis zu 5 Geräte pro User)"],
                                ["Zentrale Verwaltung", "Sehr aufwendig (einzelne Lizenzkeys)", "Einfach über KMS / MAK-Server", "Zentral über Cloud-Admin-Portal"],
                                ["Recht auf Vorversionen (Downgrade)", "In der Regel nicht enthalten", "Vollständiges Downgrade-Recht", "Immer Zugriff auf aktuellste Version"]
                            ]
                        },
                        solution: "Volumenlizenzen bieten zentrale Aktivierung via KMS/MAK. SaaS ist flexibel skalierbar bei laufenden Betriebskosten (Opex). OEM ist günstig, aber unübersichtlich im Lizenzmanagement."
                    },
                    {
                        id: "4_3_b",
                        label: "b) Ergonomie am Bildschirmarbeitsplatz (ArbStättV)",
                        points: 9,
                        type: "lines",
                        linesCount: 6,
                        stencil: "ARBEITSPLATZGESTALTUNG / ERGONOMIE",
                        text: "Für die Kanzleimitarbeiter werden neue Bildschirmarbeitsplätze eingerichtet. Nennen Sie drei konkrete ergonomische Anforderungen nach der Arbeitsstättenverordnung (ArbStättV) und DGUV Information 215-410 bezüglich:\n• Monitor (Aufstellung, Abstand, Blickwinkel)\n• Schreibtisch & Bürostuhl (Höhe, Verstellbarkeit)\n• Beleuchtung & Lärm.",
                        solution: "1. Monitor: Sehabstand 50 bis 80 cm (je nach Displaygröße). Aufstellung parallel zum Fenster (Vermeidung von Blendung und Spiegelungen). Oberste Bildschirmzeile sollte unterhalb der horizontalen Augenhöhe liegen (leicht gesenkter Blickwinkel schont die Nackenmuskulatur).\n2. Schreibtisch & Stuhl: Höhenverstellbarer Bürostuhl mit dynamischer Rückenlehne; Oberschenkel und Unterschenkel sowie Ober- und Unterarme bilden mindestens einen 90°-Winkel. Tischhöhe idealerweise elektromotorisch verstellbar für Wechsel zwischen Sitzen und Stehen.\n3. Beleuchtung & Lärm: Blendfreie Beleuchtung mit mindestens 500 Lux am Arbeitsplatz. Schallpegel bei geistig anspruchsvoller Tätigkeit maximal 55 dB(A)."
                    },
                    {
                        id: "4_3_c",
                        label: "c) Berufsgeheimnis (§ 203 StGB) in der Kanzlei-IT",
                        points: 8,
                        type: "lines",
                        linesCount: 5,
                        text: "Rechtsanwälte unterliegen dem Berufsgeheimnis nach § 203 StGB. Durch die Reform des § 203 StGB dürfen auch externe IT-Dienstleister hinzugezogen werden.\nErläutern Sie die rechtlichen Voraussetzungen (strikte Verschwiegenheitsverpflichtung) und zwei technische Schutzmaßnahmen, um den Zugriff von IT-Dienstleistern auf vertrauliche Mandantenakten auf das zwingend erforderliche Minimum zu beschränken.",
                        solution: "Rechtliche Voraussetzungen: Nach § 203 Abs. 3 StGB müssen alle mitwirkenden Personen des IT-Dienstleisters vor Tätigkeitsbeginn ausdrücklich in Textform zur Verschwiegenheit verpflichtet und über die strafrechtlichen Folgen eines Geheimnisverrats belehrt werden.\nTechnische Maßnahmen:\n1. Prinzip der minimalen Rechtevergabe (Least Privilege): IT-Administratoren erhalten nur Systemadministrationsrechte, aber keinen direkten Lesezugriff auf das Dateisystem der Aktenverwaltung (Zero-Knowledge-Architektur).\n2. Mandantentrennung & Verschlüsselung: Speicherung der Mandantenakten in verschlüsselten Containern; Entschlüsselung nur mit den individuellen Smartcards/Zertifikaten der jeweiligen Sachbearbeiter."
                    }
                ]
            },

            // Aufgabe 4 (25 Pkt)
            {
                number: 4,
                title: "4. Aufgabe: Objektorientierte Programmierung & UML-Klassendiagramm",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "4_4_a",
                        label: "a) UML-Klassendiagramm: Aktenverwaltung",
                        points: 13,
                        type: "lines",
                        linesCount: 8,
                        stencil: "UML-KLASSENDIAGRAMM / OBJEKTORIENTIERUNG",
                        text: "Für das Kanzleisystem soll das Datenmodell objektorientiert entworfen werden:\n• Eine abstrakte Basisklasse `Dokument` mit Attributen `id: int`, `titel: string`, `erstellDatum: Date` und einer abstrakten Methode `drucken(): void`.\n• Die abgeleiteten Klassen `Schriftsatz` (Zusatzattribut: `gericht: string`) und `Rechnung` (Zusatzattribute: `nettoBetrag: double`, `istBezahlt: boolean`, Methode `berechneBrutto(ustSatz: double): double`).\n• Eine Klasse `Akte` mit Attribut `aktenZeichen: string` und einer Komposition zu mehreren `Dokument`-Objekten (1 : *).\n\nBeschreiben Sie das UML-Diagramm (Sichtbarkeitsmodifikatoren +, -, #, Klassen, Beziehungen, Vererbungspfeile) präzise oder skizzieren Sie es auf dem Whiteboard.",
                        solution: "UML-Spezifikation:\n• Abstrakte Klasse `<<abstract>> Dokument`:\n  - # id: int\n  - # titel: string\n  - # erstellDatum: Date\n  - + {abstract} drucken(): void\n\n• Vererbung (geschlossener Pfeil von Unterklassen auf Dokument):\n  - Klasse `Schriftsatz`:\n    - - gericht: string\n    - + drucken(): void\n  - Klasse `Rechnung`:\n    - - nettoBetrag: double\n    - - istBezahlt: boolean\n    - + berechneBrutto(ustSatz: double): double\n    - + drucken(): void\n\n• Klasse `Akte`:\n  - - aktenZeichen: string\n  - Beziehung zu `Dokument`: Komposition (ausgefüllte schwarze Raute auf Seite der Akte, Multiplizität: 1 an Akte, 1..* bzw. 0..* an Dokument)."
                    },
                    {
                        id: "4_4_b",
                        label: "b) OOP-Konzepte: Vererbung, Kapselung & Polymorphie",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Erläutern Sie anhand der Klassen `Dokument`, `Schriftsatz` und `Rechnung` die drei zentralen OOP-Konzepte:\n1. Datenkapselung (Information Hiding)\n2. Vererbung (Inheritance)\n3. Polymorphie (Vielgestaltigkeit).",
                        solution: "1. Datenkapselung: Attribute werden als private (-) deklariert, um sie vor direktem Zugriff von außen zu schützen; der Zugriff erfolgt kontrolliert über Getter-/Setter-Methoden.\n2. Vererbung: `Schriftsatz` und `Rechnung` erben gemeinsame Eigenschaften (id, titel, erstellDatum) von der Basisklasse `Dokument`, wodurch redundanter Code vermieden wird.\n3. Polymorphie: Die Methode `drucken()` wird in den Unterklassen unterschiedlich implementiert (Überschreiben / Overriding). Ein Aufruf `dok.drucken()` druckt automatisch das passende Format, egal ob Schriftsatz oder Rechnung."
                    },
                    {
                        id: "4_4_c",
                        label: "c) Code-Implementierung: Gebührenberechnung (RVG)",
                        points: 6,
                        type: "lines",
                        linesCount: 5,
                        stencil: "PROGRAMMIERUNG / METHODENIMPLEMENTIERUNG",
                        text: "Implementieren Sie die Methode `berechneBrutto(ustSatz)` in Pseudocode, Java oder C#:\nDie Methode soll prüfen, ob `ustSatz` positiv ist. Wenn ja, wird der Bruttobetrag (Netto + Netto * ustSatz / 100) berechnet und kaufmännisch gerundet zurückgegeben. Bei ungültigem Steuersatz soll eine Exception geworfen werden.",
                        solution: "Implementierung in Java / C#:\npublic double berechneBrutto(double ustSatz) {\n    if (ustSatz < 0) {\n        throw new IllegalArgumentException('Umsatzsteuersatz darf nicht negativ sein.');\n    }\n    double brutto = this.nettoBetrag * (1.0 + (ustSatz / 100.0));\n    return Math.round(brutto * 100.0) / 100.0; // kaufmännische Rundung auf 2 Dezimalstellen\n}"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 5: E-Commerce Plattform, Bezahlsysteme & Cyber-Security
    // ----------------------------------------------------------------------
    {
        id: "exam_5",
        title: "Prüfung 5: E-Commerce Plattform, Bezahlsysteme & Cyber-Security",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • ApexShop Handels-GmbH",
        ausgangssituation: "Sie sind Fachinformatiker in der IT-Abteilung der ApexShop Handels-GmbH. Das Unternehmen betreibt einen hochfrequentierten B2C-Onlineshop für Unterhaltungselektronik und erweitert seine Plattform um neue internationale Bezahldienste, höchste IT-Sicherheitsstandards und automatisierte Lager- und Rechnungsabläufe.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: Payment Service Provider, Zahlungsstörungen & Handelskalkulation",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "5_1_a",
                        label: "a) Payment Service Provider (PSP) & PCI-DSS",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "E-COMMERCE / BEZAHLDIENSTE (PCI-DSS)",
                        text: "Für den Onlineshop soll die Kreditkartenzahlung angebunden werden.\naa) Nennen Sie zwei Vorteile der Einbindung eines Payment Service Providers (PSP) im Vergleich zur direkten Abwicklung über ein eigenes Händlerkonto (3 Punkte).\nab) Erläutern Sie, warum Onlineshops nach dem PCI-DSS Sicherheitsstandard keine sensiblen Authentifizierungsdaten (wie den 3-stelligen CVV/CVC-Code) nach der Autorisierung auf eigenen Servern speichern dürfen (4 Punkte).",
                        solution: "aa) Vorteile PSP:\n1. Geringerer eigener PCI-DSS-Zertifizierungsaufwand (SAQ A statt SAQ D), da sensible Kartendaten direkt über gesicherte iFrames/Hosted Payment Pages des Providers laufen.\n2. Mehrere Zahlungsarten (Kreditkarte, Apple Pay, PayPal, Klarna) über eine einzige standardisierte Schnittstelle (API).\nab) PCI-DSS Vorgabe:\nDer CVC/CVV-Sicherheitscode dient ausschließlich der Verifikation beim Zahlungsvorgang ('Besitz der Karte'). Bei einer Speicherung auf Servern würde ein Cyberangriff oder Datenleck ausreichen, um vollständige, missbrauchsfähige Kartensätze zu stehlen. Daher ist die dauerhafte Speicherung der Prüfziffer strikt verboten."
                    },
                    {
                        id: "5_1_b",
                        label: "b) Kaufvertragsstörungen: Zahlungsverzug nach BGB",
                        points: 6,
                        type: "lines",
                        linesCount: 5,
                        stencil: "WIRTSCHAFTSRECHT / BGB ZAHLUNGSVERZUG",
                        text: "Ein gewerblicher Kunde zahlt eine fällige Rechnung nicht.\nba) Erläutern Sie, wann ein Kunde ohne vorherige Mahnung nach § 286 BGB automatisch in Verzug gerät (3 Punkte).\nbb) Berechnen Sie die Höhe des gesetzlichen Verzugszinssatzes bei einem Rechtsgeschäft zwischen zwei Unternehmen (B2B) und nennen Sie die zusätzliche gesetzliche Pauschale nach § 288 Abs. 5 BGB (3 Punkte).",
                        solution: "ba) Automatischer Verzug ohne Mahnung:\n1. Wenn für die Leistung eine Zeit nach dem Kalender bestimmt ist (§ 286 Abs. 2 Nr. 1 BGB).\n2. Spätestens 30 Tage nach Fälligkeit und Zugang einer Rechnung (bei Verbrauchern nur mit ausdrücklichem Hinweis auf der Rechnung).\nbb) B2B-Verzugszinsen:\n• Verzugszinssatz = Basiszinssatz der EZB + 9 Prozentpunkte (bei Verbrauchern B2C: Basiszinssatz + 5 Prozentpunkte).\n• Gesetzliche Verzugspauschale für Entschädigung von Beitreibungskosten = 40,00 EUR (§ 288 Abs. 5 BGB)."
                    },
                    {
                        id: "5_1_c",
                        label: "c) Handelskalkulation: Rückwärtskalkulation im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "HANDELSKALKULATION (RÜCKWÄRTSRECHNUNG)",
                        text: "Ein Premium-Kopfhörer soll im Onlineshop zu einem maximalen Bruttoverkaufspreis von 238,00 EUR (inkl. 19 % USt) angeboten werden. Berechnen Sie im Rechengitter den maximal zulässigen Listeneinkaufspreis (LEP):\n• Umsatzsteuer: 19 %\n• Kundenrabatt: 10 %\n• Kundenskonto: 2 %\n• Gewinnzuschlag: 25 %\n• Handlungskostenzuschlag: 30 %\n• Bezugskosten: 4,00 EUR\n• Lieferantenskonto: 2 %\n• Lieferantenrabatt: 15 %",
                        solution: "Rückwärtskalkulation:\n1. BVP (Brutto) = 238,00 EUR.\n2. Nettoverkaufspreis (ZVP) = 238,00 / 1,19 = 200,00 EUR.\n3. Barverkaufspreis = 200,00 * (1 - 0,10) * (1 - 0,02) -> Im Hundert: ZVP = 200 € / (1 + 0,10 + 0,02...)\n   Barverkaufspreis = 200 * 0,90 * 0,98 = 176,40 EUR.\n4. Selbstkostenpreis = 176,40 / 1,25 = 141,12 EUR.\n5. Bezugspreis (Einstand) = 141,12 / 1,30 = 108,55 EUR.\n6. Bareinkaufspreis = 108,55 - 4,00 = 104,55 EUR.\n7. Zieleinkaufspreis = 104,55 / 0,98 = 106,68 EUR.\n8. Max. Listeneinkaufspreis (LEP) = 106,68 / 0,85 = 125,51 EUR."
                    },
                    {
                        id: "5_1_d",
                        label: "d) Vergleich von E-Commerce Zahlungsverfahren",
                        points: 4,
                        type: "table",
                        stencil: "ZAHLUNGSVERFAHREN / RISIKOANALYSE",
                        text: "Vergleichen Sie die vier Online-Zahlungsmethoden hinsichtlich Ausfallrisiko für den Händler und Käuferakzeptanz.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["Zahlungsart", "Ausfallrisiko (Händler)", "Transaktionsgebühr", "Käuferakzeptanz in DE"],
                            rows: [
                                ["Kauf auf Rechnung", "Sehr hoch (Zahlungsverzug/Betrug)", "Gering bis mittel", "Sehr hoch (beliebteste Zahlart)"],
                                ["SEPA-Lastschrift", "Mittel (Rücklastschrift 8 Wochen möglich)", "Sehr gering (< 0,5 %)", "Hoch"],
                                ["Kreditkarte (3D-Secure)", "Gering (Haftungsumkehr bei 3DS)", "Mittel (1,5 - 2,5 %)", "Hoch / International unverzichtbar"],
                                ["PayPal / Wallet", "Sehr gering (Verkäuferschutz)", "Hoch (2 - 3 %)", "Sehr hoch"]
                            ]
                        },
                        solution: "Rechnungskauf hat höchstes Risiko, ist aber kundenfreundlichst. SEPA birgt Rücklastschriftrisiko. Wallets/3DS bieten hohe Sicherheit bei höheren Transaktionsgebühren."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: Webserver-Dimensionierung, Load Balancing & Hochverfügbarkeit",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "5_2_a",
                        label: "a) Server-Kapazitätsberechnung im 5-mm-Rechengitter",
                        points: 7,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "BANDBREITEN- UND KAPAZITÄTSBERECHNUNG",
                        text: "Für eine Verkaufsaktion wird mit 15.000 gleichzeitigen Nutzern (Concurrent Users) gerechnet. Jeder Nutzer ruft im Schnitt alle 6 Sekunden eine Seite auf (durchschnittliche Seitengröße komprimiert: 250 kByte). Zur Vermeidung von Engpässen ist ein Sicherheitszuschlag von 25 % einzukalkulieren.\nBerechnen Sie im Rechengitter:\n1. Die Anzahl der Seitenaufrufe (Requests) pro Sekunde\n2. Die benötigte Bandbreite in Megabit pro Sekunde (Mbit/s).",
                        solution: "Berechnung:\n1. Requests pro Sekunde = 15.000 Nutzer / 6 Sekunden = 2.500 Requests/s.\n2. Datenvolumen pro Sekunde = 2.500 * 250 kByte = 625.000 kByte/s = 625 MByte/s.\n3. In Bit umrechnen: 625 MByte/s * 8 = 5.000 Mbit/s (5 Gbit/s).\n4. Mit 25 % Sicherheitszuschlag: 5.000 * 1,25 = 6.250 Mbit/s (ca. 6,25 Gbit/s)."
                    },
                    {
                        id: "5_2_b",
                        label: "b) Load-Balancing: Algorithmen & Session-Persistence",
                        points: 6,
                        type: "lines",
                        linesCount: 5,
                        text: "Vor die Webserver wird ein HAProxy-Load-Balancer geschaltet.\nba) Unterscheiden Sie die Verteilungsalgorithmen 'Round Robin' und 'Least Connections' (3 Punkte).\nbb) Erläutern Sie, warum für den Warenkorb im Onlineshop 'Sticky Sessions' (Session-Affinity via Cookie) oder ein zentraler Session-Cache (z. B. Redis) erforderlich sind (3 Punkte).",
                        solution: "ba) Algorithmen:\n• Round Robin: Anfragen werden zyklisch der Reihe nach auf alle Backend-Server verteilt (1, 2, 3, 1, 2...). Ignoriert unterschiedliche Serverauslastungen.\n• Least Connections: Leitet neue Anfragen dynamisch an den Server mit den aktuell wenigsten aktiven TCP-/HTTP-Verbindungen weiter (optimal bei unterschiedlich rechenintensiven Anfragen).\nbb) Sticky Sessions / Redis:\nWenn der Nutzer auf Server A Artikel in den Warenkorb legt, und der nächste Request auf Server B landet, wäre der Warenkorb ohne zentrale Session leer. Sticky Sessions binden den Client per Cookie an Server A. Ein zentraler Cache (Redis) speichert Sessions serverunabhängig."
                    },
                    {
                        id: "5_2_c",
                        label: "c) RAID 10 vs. RAID 5 für transaktionale SQL-Datenbanken",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Für das Datenbanksystem stehen 4 Enterprise-SSDs à 2 TB zur Verfügung.\nVergleichen Sie RAID 5 und RAID 10 hinsichtlich Schreibperformance ('Write Penalty') und nutzbarer Kapazität und begründen Sie, warum für relationale Datenbanken RAID 10 gewählt wird.",
                        solution: "RAID 5: Nutzbar = (n-1)*2 TB = 6 TB. Write Penalty von 4 (2 Lese- und 2 Schreibzugriffe pro Paritäts-Update). Bei hoher Schreiblast bricht die I/O-Performance ein.\nRAID 10 (1+0): Nutzbar = (n/2)*2 TB = 4 TB. Write Penalty von nur 2 (parallele Spiegelung). Höchste IOPS-Performance und schnellster Rebuild ohne Rechenaufwand für Paritätsdaten. Ideal für transaktionale OLTP-Datenbanken."
                    },
                    {
                        id: "5_2_d",
                        label: "d) TLS 1.3 & Perfect Forward Secrecy (PFS)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Der Webserver wird auf TLS 1.3 konfiguriert. Erläutern Sie das Sicherheitsprinzip 'Perfect Forward Secrecy' (PFS) und welchen Schutz es bietet, falls der private Schlüssel des Webservers zu einem späteren Zeitpunkt kompromittiert wird.",
                        solution: "Prinzip: Bei PFS wird für jede Sitzung ein temporärer, ephemerer Sitzungsschlüssel ausgehandelt (z. B. via ECDHE - Elliptic Curve Diffie-Hellman Ephemeral). Dieser Schlüssel wird nach Sitzungsende verworfen.\nSchutzwirkung: Sollte ein Angreifer Jahre später den privaten Langzeit-Schlüssel des Servers stehlen, kann er damit dennoch keine in der Vergangenheit mitgeschnittenen verschlüsselten Datenströme entschlüsseln."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: Cyber-Security, OWASP Top 10 & Datenschutz",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "5_3_a",
                        label: "a) OWASP Top 10: Schwachstellenanalyse",
                        points: 8,
                        type: "table",
                        stencil: "WEB-SECURITY / OWASP TOP 10",
                        text: "Ordnen Sie die drei folgenden Sicherheitslücken ihren Ursachen und konkreten Gegenmaßnahmen zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["SQL-Injection (SQLi)", "Cross-Site Scripting (XSS)", "Cross-Site Request Forgery (CSRF)"],
                            headers: ["Schwachstelle", "Funktionsweise des Angriffs", "Konkrete Schutzmaßnahme"],
                            rows: [
                                ["Cross-Site Scripting (XSS)", "Einschleusen von bösartigem JavaScript in Webseiten, das im Browser anderer Nutzer ausgeführt wird", "Kontextsensitives HTML-Output-Encoding & Content Security Policy (CSP)"],
                                ["Cross-Site Request Forgery (CSRF)", "Opfer wird verleitet, ungewollt eine authentifizierte Aktion auf einer fremden Website auszuführen", "Einsatz von kryptografischen Anti-CSRF-Tokens & SameSite-Cookie-Attribut"],
                                ["SQL-Injection (SQLi)", "Einschleusen von SQL-Befehlen über ungeprüfte Eingabefelder zur Manipulation der Datenbank", "Verwendung von Prepared Statements (parametrisierten Queries) und ORM"]
                            ]
                        },
                        solution: "SQLi wird durch strikte Trennung von Code und Daten (Prepared Statements) gelöst. XSS durch Escaping/Encoding aller Nutzereingaben. CSRF durch Einmal-Tokens pro Formularübertragung."
                    },
                    {
                        id: "5_3_b",
                        label: "b) DSGVO & Cookie-Consent (TDDDG)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Auf der Shop-Website soll ein Consent-Management-Banner (Cookie-Banner) implementiert werden.\nUnterscheiden Sie technisch notwendige Cookies von zustimmungspflichtigen Tracking-Cookies und nennen Sie zwei zwingende rechtliche Vorgaben für ein wirksames Einwilligungsbanner nach DSGVO und TDDDG.",
                        solution: "Technisch notwendig: Cookies, die für den Betrieb des Dienstes zwingend erforderlich sind (z. B. Warenkorb-Cookie, Session-ID, CSRF-Token). Erfordern kein Opt-in.\nTracking-Cookies: Werbe- und Analyse-Cookies (z. B. Google Analytics, Facebook Pixel) erfordern vorherige informierte und freiwillige Einwilligung (Opt-in).\nVorgaben Banner: 1. Keine vorangekreuzten Kästchen (Opt-in Pflicht). 2. Schaltfläche 'Ablehnen' muss genauso leicht erreichbar und auffällig sein wie 'Alle Akzeptieren'."
                    },
                    {
                        id: "5_3_c",
                        label: "c) Zwei-Faktor-Authentifizierung (2FA) mit TOTP",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Für das Administratorportal des Shops wird 2FA vorgeschrieben.\nNennen Sie die drei klassischen Authentifizierungsfaktoren und erklären Sie die technische Funktionsweise von TOTP (Time-based One-Time Password nach RFC 6238) unter Verwendung von Shared Secret und Unix-Timestamp.",
                        solution: "Faktoren:\n1. Wissen (Passwort, PIN)\n2. Besitz (Smartphone, Authenticator-App, Hardware-Token)\n3. Inhärenz (Biometrie: Fingerabdruck, Face-ID)\nTOTP Funktionsweise: Server und App teilen sich ein geheimes Shared Secret (z. B. per QR-Code ausgetauscht). Aus dem aktuellen Unix-Zeitstempel (geteilt durch 30 Sekunden) und dem Secret wird mittels HMAC-SHA1 ein 6-stelliger Code errechnet, der für 30 Sekunden gültig ist."
                    },
                    {
                        id: "5_3_d",
                        label: "d) DDoS-Schutzmechanismen (Distributed Denial of Service)",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Ein Konkurrent droht mit einer DDoS-Attacke auf den Onlineshop. Beschreiben Sie den Unterschied zwischen einem volumetrischen Angriff (z. B. SYN-Flood auf Layer 4) und einem Applikationsangriff (z. B. HTTP-Flood auf Layer 7) sowie je eine Gegenmaßnahme.",
                        solution: "Layer 4 (SYN-Flood): Überflutet Server mit TCP-SYN-Paketen, ohne den 3-Way-Handshake zu vollenden; Server-Verbindungstabellen laufen voll. Gegenmaßnahme: SYN-Cookies, Stateful Firewall.\nLayer 7 (HTTP-Flood): Generiert tausende legitime, aber rechenintensive GET/POST-Anfragen (z. B. Suchanfragen in der Produktdatenbank), die CPU und DB überlasten. Gegenmaßnahme: Web Application Firewall (WAF), Rate-Limiting, Bot-Challenge (CAPTCHA)."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: E-Commerce Datenbank, SQL & Rabatt-Algorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "5_4_a",
                        label: "a) Relationales Datenbankmodell für E-Commerce (3NF)",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "DATENBANKMODELLIERUNG / 3NF",
                        text: "Modellieren Sie die Tabellen für den Shop in 3. Normalform:\nEin Kunde kann mehrere Bestellungen aufgeben. Eine Bestellung umfasst mehrere Artikel mit individueller Bestellmenge und historischem Kaufpreis. Eine Bestellung kann optional genau einen Rabattgutschein einlösen.\nGeben Sie Tabellennamen, Primär- (PK) und Fremdschlüssel (FK) an.",
                        solution: "• tbl_kunde (Kunde_ID [PK], Email, Vorname, Nachname, Strasse, PLZ, Ort)\n• tbl_gutschein (Gutschein_Code [PK], Rabatt_Prozent, Gueltig_Bis, Mindestbestellwert_EUR)\n• tbl_bestellung (Bestell_ID [PK], Kunde_ID [FK], Gutschein_Code [FK], Bestelldatum, Status, Gesamt_Netto_EUR)\n• tbl_artikel (Artikel_ID [PK], Bezeichnung, Aktueller_UVP_EUR, Lagerbestand, USt_Satz)\n• tbl_bestellposition (Pos_ID [PK], Bestell_ID [FK], Artikel_ID [FK], Menge, Einzelpreis_EUR)"
                    },
                    {
                        id: "5_4_b",
                        label: "b) SQL: Umsatzreporting & Ladenhüter-Analyse",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / REPORTING",
                        text: "Formulieren Sie syntaktisch korrekte SQL-Befehle:\nba) Ermitteln Sie die Top 5 Kunden (Kunde_ID, Nachname, Gesamtumsatz) mit dem höchsten kumulierten Umsatz aus bezahlten Bestellungen (`Status = 'bezahlt'`). Sortieren Sie absteigend (5 Punkte).\nbb) Selektieren Sie alle Artikel (Artikel_ID, Bezeichnung), die im gesamten Jahr 2025 noch kein einziges Mal bestellt wurden (3 Punkte).",
                        solution: "ba)\nSELECT k.Kunde_ID, k.Nachname, SUM(b.Gesamt_Netto_EUR) AS Gesamtumsatz\nFROM tbl_kunde k\nJOIN tbl_bestellung b ON k.Kunde_ID = b.Kunde_ID\nWHERE b.Status = 'bezahlt'\nGROUP BY k.Kunde_ID, k.Nachname\nORDER BY Gesamtumsatz DESC\nLIMIT 5;\n\nbb)\nSELECT a.Artikel_ID, a.Bezeichnung\nFROM tbl_artikel a\nLEFT JOIN tbl_bestellposition bp ON a.Artikel_ID = bp.Artikel_ID\nLEFT JOIN tbl_bestellung b ON bp.Bestell_ID = b.Bestell_ID AND YEAR(b.Bestelldatum) = 2025\nWHERE bp.Pos_ID IS NULL;"
                    },
                    {
                        id: "5_4_c",
                        label: "c) Algorithmus: Warenkorb-Rabattberechnung",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "ALGORITHMUS / WARENKORB-LOGIK",
                        text: "Schreiben Sie einen Pseudocode für die Funktion `berechne_endbetrag(warenkorb_wert, gutschein_code)`:\n• Bei einem Warenkorbwert ab 100 EUR wird automatisch ein Versandkostenrabatt von 5,00 EUR gewährt (unter 100 EUR fallen 5,00 EUR Versand an).\n• Ist ein Gutschein 'RABATT10' übergeben und liegt der Warenkorbwert über 50 EUR, werden 10 % vom Warenkorbwert abgezogen.\n• Der Endbetrag darf nie unter 0 EUR fallen.",
                        solution: "FUNCTION berechne_endbetrag(warenkorb_wert, gutschein_code):\n    IF warenkorb_wert >= 100 THEN\n        versand = 0.0\n    ELSE\n        versand = 5.0\n    END IF\n    \n    rabatt = 0.0\n    IF gutschein_code == 'RABATT10' AND warenkorb_wert >= 50 THEN\n        rabatt = warenkorb_wert * 0.10\n    END IF\n    \n    endbetrag = (warenkorb_wert - rabatt) + versand\n    IF endbetrag < 0 THEN\n        endbetrag = 0.0\n    END IF\n    \n    RETURN endbetrag\nEND FUNCTION"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 6: Cloud-Migration, RZ-Effizienz & Containerisierung
    // ----------------------------------------------------------------------
    {
        id: "exam_6",
        title: "Prüfung 6: Cloud-Migration, RZ-Effizienz & Containerisierung",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • AeroCloud Systems GmbH",
        ausgangssituation: "Sie arbeiten bei der AeroCloud Systems GmbH, einem Managed Service Provider für Unternehmenskunden. Für einen mittelständischen Automobilzulieferer soll die veraltete On-Premise-Infrastruktur in eine moderne Hybrid-Cloud überführt werden. Sie analysieren die RZ-Energieeffizienz, planen die Container-Infrastruktur und richten sichere Standortverbindungen ein.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: Rechenzentrumseffizienz (PUE/DCiE), USV & Klimatisierung",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "6_1_a",
                        label: "a) PUE & DCiE Berechnung im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "RECHENZENTRUM / ENERGIEEFFIZIENZ (PUE & DCIE)",
                        text: "Ein Firmenrechenzentrum hat eine Gesamtleistungsaufnahme von 400 kW. Davon entfallen 250 kW direkt auf die IT-Infrastruktur (Server, Storage, Netzwerk). Der Rest wird für Kühlung, USV-Verluste und Beleuchtung verbraucht.\nBerechnen Sie im Rechengitter:\n1. Den PUE-Wert (Power Usage Effectiveness)\n2. Den DCiE-Wert (Data Center Infrastructure Efficiency) in Prozent\n3. Die jährlichen Gesamtstromkosten bei einem Strompreis von 0,30 EUR/kWh (8.760 Jahresstunden).",
                        solution: "Berechnung:\n1. PUE = Gesamtleistung / IT-Leistung = 400 kW / 250 kW = 1,60.\n2. DCiE = (IT-Leistung / Gesamtleistung) * 100 % = (250 / 400) * 100 % = 62,5 %.\n   (Hinweis: DCiE = 1 / PUE = 1 / 1,6 = 0,625 = 62,5 %)\n3. Jährlicher Energieverbrauch = 400 kW * 8.760 h = 3.504.000 kWh.\n   Stromkosten = 3.504.000 kWh * 0,30 EUR/kWh = 1.051.200,00 EUR pro Jahr."
                    },
                    {
                        id: "6_1_b",
                        label: "b) Server-Abwärme & Klimatisierungsleistung (BTU/h)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Die 250 kW IT-Leistung werden nahezu vollständig in thermische Energie (Abwärme) umgewandelt. Berechnen Sie die abzuführende Wärmeleistung in BTU/h (1 kW ≈ 3.412 BTU/h) und erläutern Sie das Prinzip der Kaltgang-/Warmgang-Einhausung zur Effizienzsteigerung.",
                        solution: "Kühlleistung = 250 kW * 3.412 BTU/(h*kW) = 853.000 BTU/h.\nKaltgang-/Warmgang-Einhausung:\nServerracks werden 'Face-to-Face' aufgestellt. Der Gang vor den Servern (Kaltgang) wird baulich eingehaust (mit Türen und Deckenpaneelen). Die kalte Zuluft aus dem Doppelboden strömt gezielt durch die Server ins hintere warme Areal (Warmgang). Dies verhindert Luftkurzschlüsse und erlaubt höhere Vorlauftemperaturen der Klimaanlage."
                    },
                    {
                        id: "6_1_c",
                        label: "c) Notstromaggregat (NEA) & Tankberechnung",
                        points: 6,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "NOTSTROMVERSORGUNG / DIESELTANK",
                        text: "Ein Notstromdiesel verbraucht bei 75 % Teillast 55 Liter Diesel pro Stunde. Das Rechenzentrum muss eine Mindestüberbrückungszeit von 36 Stunden netzunabhängig sicherstellen. Zur Sicherheit ist eine Reserve von 15 % auf das Tankvolumen aufzuschlagen.\nBerechnen Sie im Rechengitter das erforderliche Mindest-Tankvolumen in Litern.",
                        solution: "Rechnung:\nGrundbedarf = 55 Liter/h * 36 h = 1.980 Liter.\nMit 15 % Reserve = 1.980 Liter * 1,15 = 2.277 Liter.\nErforderliches Mindest-Tankvolumen: 2.277 Liter."
                    },
                    {
                        id: "6_1_d",
                        label: "d) Brandschutz im Rechenzentrum: Gaslöschung",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "In modernen Serverräumen werden Gaslöschanlagen (z. B. mit Stickstoff, Argon oder chemischen Löschgasen wie Novec 1230) anstelle von Wasser-Sprinklern eingesetzt. Erläutern Sie die Wirkungsweise der Sauerstoffverdrängung bzw. Wärmeabsorption und zwei Personenschutzmaßnahmen vor dem Auslösen.",
                        solution: "Wirkungsweise: Inertgase (Stickstoff/Argon) verdrängen den Sauerstoffanteil in der Raumluft von ca. 21 % auf unter 13-14 %, sodass Flammen ersticken, ohne Hardware durch Löschmittelrückstände oder Kurzschlüsse zu zerstören.\nPersonenschutzmaßnahmen: 1. Akustische und optische Vorwarnung (Hupe und Blitzleuchte mit Verzögerung von 30-60 Sekunden zur Evakuierung). 2. Automatische Abschaltung der Lüftungsanlage und Druckentlastungsklappen."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: Virtualisierung, Docker-Container & Kubernetes",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "6_2_a",
                        label: "a) Hypervisor Typ 1 vs. Typ 2 vs. Container",
                        points: 8,
                        type: "table",
                        stencil: "VIRTUALISIERUNG / ARCHITEKTURVERGLEICH",
                        text: "Vergleichen Sie die drei Virtualisierungsansätze hinsichtlich Architektur, Overhead und Bootzeit.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["Kriterium", "Typ-1 Hypervisor (Bare-Metal)", "Typ-2 Hypervisor (Hosted)", "Container (z. B. Docker)"],
                            rows: [
                                ["Architektur-Ebene", "Läuft direkt auf der physischen Server-Hardware", "Läuft als Anwendung auf einem Host-Betriebssystem", "Teilt sich den Host-OS-Kernel via Namespaces/cgroups"],
                                ["Betriebssystem-Overhead", "Vollständiges Gast-Betriebssystem je VM", "Sehr hoch (Host-OS + Gast-OS)", "Minimal (nur Applikation + Abhängigkeiten)"],
                                ["Startzeit", "Minuten (voller OS-Boot)", "Minuten", "Sekundenbruchteile bis wenige Sekunden"],
                                ["Beispielsoftware", "VMware ESXi, Proxmox VE, Hyper-V", "Oracle VirtualBox, VMware Workstation", "Docker, Podman, containerd"]
                            ]
                        },
                        solution: "Typ-1 läuft bare-metal mit minimalem Overhead für Serverbetrieb. Typ-2 läuft auf Desktop-Betriebssystemen. Container teilen den Kernel und starten in Millisekunden."
                    },
                    {
                        id: "6_2_b",
                        label: "b) Kubernetes Kernkomponenten (Pods & Services)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "In der Cloud werden Microservices mit Kubernetes (K8s) orchestriert. Erläutern Sie die Begriffe 'Pod', 'Deployment' und 'Service' (ClusterIP vs. LoadBalancer).",
                        solution: "• Pod: Kleinste deploybare Einheit in Kubernetes, kapselt einen oder mehrere eng zusammenarbeitende Container (Shared Storage & Network).\n• Deployment: Deklariert den gewünschten Soll-Zustand (Replica-Count, Updates via Rolling Update, Self-Healing bei Pod-Absturz).\n• Service: Stellt eine persistente IP-Adresse und DNS-Namen für ephemere Pods bereit. ClusterIP = nur intern im Cluster erreichbar; LoadBalancer = provisioniert eine externe Cloud-IP."
                    },
                    {
                        id: "6_2_c",
                        label: "c) Cloud-Servicemodelle: IaaS vs. PaaS vs. SaaS",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Erläutern Sie anhand des 'Shared Responsibility Models' die Aufgabenteilung zwischen Cloud-Provider und Kunde bei den drei Servicemodellen IaaS, PaaS und SaaS.",
                        solution: "• IaaS (z. B. AWS EC2, Azure VMs): Provider stellt Hardware, Virtualisierung und Rechenzentrum bereit. Kunde verwaltet OS, Patches, Middleware und Applikation.\n• PaaS (z. B. Heroku, Azure App Service): Provider verwaltet zusätzlich Betriebssystem, Runtime und Datenbank. Kunde liefert nur den Applikationscode und Daten.\n• SaaS (z. B. M365, Salesforce): Provider betreibt das schlüsselfertige Gesamtsystem inkl. Software. Kunde verwaltet lediglich Benutzerkonten und Konfiguration."
                    },
                    {
                        id: "6_2_d",
                        label: "d) Cloud-Kostenoptimierung: CAPEX vs. OPEX",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Vergleichen Sie CAPEX (Capital Expenditures) und OPEX (Operational Expenditures) im Kontext der Cloud-Migration und nennen Sie zwei typische Kostenfallen in der Public Cloud.",
                        solution: "CAPEX: Einmalige hohe Investitionen in physische Hardware (Server, Switches, Lizenzen) mit mehrjähriger Abschreibung.\nOPEX: Laufende variable Betriebskosten ('Pay-as-you-go'), die flexibel an den tatsächlichen Verbrauch angepasst und direkt steuerlich geltend gemacht werden können.\nKostenfallen: 1. Unkontrollierte 'Egress Traffic'-Kosten (Kosten für Datenexport aus der Cloud ins Internet). 2. Ungenutzte 'Zombie-Ressourcen' (laufende Testinstanzen, unattached EBS-Volumes)."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: Standortvernetzung via VPN, BSI IT-Grundschutz & SLA",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "6_3_a",
                        label: "a) IPsec VPN: Tunnel-Modus vs. Transport-Modus",
                        points: 8,
                        type: "lines",
                        linesCount: 5,
                        stencil: "NETZWERKTECHNIK / IPSEC-VPN",
                        text: "Zur Anbindung zweier Firmenstandorte wird ein IPsec-Site-to-Site-VPN eingerichtet.\naa) Erläutern Sie den Unterschied zwischen dem IPsec-Tunnel-Modus und dem Transport-Modus bezüglich des IP-Headers (4 Punkte).\nab) Nennen Sie die Aufgaben der beiden IPsec-Protokolle ESP (Encapsulating Security Payload) und AH (Authentication Header) (4 Punkte).",
                        solution: "aa) Tunnel- vs. Transport-Modus:\n• Tunnel-Modus: Das gesamte originale IP-Paket (inkl. Original-Header) wird verschlüsselt und in einen komplett neuen äußeren IP-Header gepackt. Standard für Gateway-to-Gateway (Router-Kopplung).\n• Transport-Modus: Nur die Payload (Nutzlast) wird verschlüsselt; der originale IP-Header bleibt sichtbar. Eingesetzt für Host-to-Host Verbindungen.\nab) Protokolle:\n• ESP (IP-Protokoll 50): Bietet Vertraulichkeit (Verschlüsselung) sowie Datenintegrität und Authentizität.\n• AH (IP-Protokoll 51): Bietet nur Datenintegrität und Ursprungsauthentizität, aber KEINE Verschlüsselung."
                    },
                    {
                        id: "6_3_b",
                        label: "b) Service Level Agreement (SLA): Verfügbarkeitsberechnung",
                        points: 6,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "SERVICE LEVEL MANAGEMENT / VERFÜGBARKEIT",
                        text: "Ein Cloud-Service garantiert eine Verfügbarkeit von 99,9 % pro Jahr (8.760 Stunden).\nBerechnen Sie im Rechengitter die maximal zulässige Ausfallzeit (Downtime) in Stunden, Minuten und Sekunden pro Jahr.",
                        solution: "Berechnung:\nVerfügbarkeit = 99,9 % ➔ Ausfallquote = 0,1 % = 0,001.\nMaximale Ausfallzeit = 8.760 h * 0,001 = 8,76 Stunden.\nIn Minuten: 0,76 h * 60 min/h = 45,6 Minuten.\nIn Sekunden: 0,6 min * 60 s/min = 36 Sekunden.\nZulässige Downtime: 8 Stunden, 45 Minuten und 36 Sekunden pro Jahr."
                    },
                    {
                        id: "6_3_c",
                        label: "c) WireGuard vs. OpenVPN / IPsec",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Für mobile Clients wird WireGuard als moderne VPN-Alternative diskutiert. Nennen Sie zwei Vorteile von WireGuard im Vergleich zu traditionellen OpenVPN- oder IPsec-Lösungen.",
                        solution: "1. Schlanker Code & hohe Sicherheit: WireGuard hat nur ca. 4.000 Zeilen Quellcode (OpenVPN/IPsec: über 100.000 Zeilen), was Sicherheitsaudits und Fehlerbehebungen massiv vereinfacht.\n2. Bessere Performance & Akkulaufzeit: Läuft direkt als Linux-Kernelmodul mit modernen Krypto-Primitiven (ChaCha20, Curve25519), bietet höheren Datendurchsatz, geringere Latenz und nahtloses Roaming bei Netzwechsel (z. B. WLAN zu LTE)."
                    },
                    {
                        id: "6_3_d",
                        label: "d) IT-Notfallhandbuch nach BSI Standard 200-4",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Beschreiben Sie den Inhalt eines betrieblichen IT-Notfallhandbuchs (Kriterien für Krisenstab-Einberufung, Notfall-Kommunikationskanäle, Wiederanlaufpläne).",
                        solution: "Inhalte:\n1. Kriterien zur Einstufung eines Sicherheitsvorfalls als Notfall (Schadensausmaß, Ausfallzeit).\n2. Alarmierungspläne mit Kontaktdaten des Krisenstabs und externer Partner (Out-of-Band Kommunikation bei Totalausfall).\n3. Detaillierte Wiederanlauf- und Wiederherstellungspläne (Runbooks) mit Schritt-für-Schritt-Anweisungen zur Systemwiederherstellung in definierter Reihenfolge."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Cloud-Ressourcen-Datenbank, SQL & REST-API",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "6_4_a",
                        label: "a) Relationales Schema für Cloud-Instanzen (3NF)",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "DATENBANKMODELLIERUNG / HYBRID-CLOUD",
                        text: "Entwerfen Sie ein relationales Schema in 3NF für ein Cloud-Verwaltungsportal:\nEin Kunde kann mehrere Projekte verwalten. Zu einem Projekt gehören mehrere virtuelle Maschinen (Instanzen). Jede Instanz basiert auf genau einem Betriebssystem-Image und besitzt genau einen Instanztyp (vCPUs, RAM-Größe, Stundensatz).\nGeben Sie die Tabellen mit Primär- und Fremdschlüsseln an.",
                        solution: "• tbl_kunde (Kunde_ID [PK], Firmenname, Ansprechpartner, Rechnungs_Email)\n• tbl_projekt (Projekt_ID [PK], Kunde_ID [FK], Projektname, Kostenstelle)\n• tbl_instanztyp (Typ_ID [PK], Typ_Bezeichnung, vCPUs, RAM_GB, Preis_pro_Stunde_EUR)\n• tbl_image (Image_ID [PK], Image_Name, OS_Familie, Version)\n• tbl_instanz (Instanz_ID [PK], Projekt_ID [FK], Typ_ID [FK], Image_ID [FK], Hostname, Status, Startzeitpunkt)"
                    },
                    {
                        id: "6_4_b",
                        label: "b) SQL: Monatliche Kostenabrechnung der Cloud-Instanzen",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / COST-MANAGEMENT",
                        text: "Formulieren Sie die SQL-Abfragen:\nba) Berechnen Sie für jede Instanz (Hostname, Firmenname des Kunden) die gelaufenen Stunden im Monat März 2026 sowie die aufgelaufenen Gesamtkosten (Laufzeit in h * Stundensatz) (5 Punkte).\nbb) Ermitteln Sie alle Projekte, die im laufenden Monat Kosten von über 5.000,00 EUR verursacht haben (3 Punkte).",
                        solution: "ba)\nSELECT i.Hostname, k.Firmenname, \n       TIMESTAMPDIFF(HOUR, i.Startzeitpunkt, CURRENT_TIMESTAMP) AS Laufzeit_h,\n       TIMESTAMPDIFF(HOUR, i.Startzeitpunkt, CURRENT_TIMESTAMP) * t.Preis_pro_Stunde_EUR AS Kosten_EUR\nFROM tbl_instanz i\nJOIN tbl_instanztyp t ON i.Typ_ID = t.Typ_ID\nJOIN tbl_projekt p ON i.Projekt_ID = p.Projekt_ID\nJOIN tbl_kunde k ON p.Kunde_ID = k.Kunde_ID;\n\nbb)\nSELECT p.Projekt_ID, p.Projektname, SUM(TIMESTAMPDIFF(HOUR, i.Startzeitpunkt, CURRENT_TIMESTAMP) * t.Preis_pro_Stunde_EUR) AS Gesamtprojekt_Kosten\nFROM tbl_projekt p\nJOIN tbl_instanz i ON p.Projekt_ID = i.Projekt_ID\nJOIN tbl_instanztyp t ON i.Typ_ID = t.Typ_ID\nGROUP BY p.Projekt_ID, p.Projektname\nHAVING Gesamtprojekt_Kosten > 5000;"
                    },
                    {
                        id: "6_4_c",
                        label: "c) RESTful API: Konzeption von Cloud-Endpunkten",
                        points: 8,
                        type: "table",
                        stencil: "API-DESIGN / REST-ARCHITEKTUR",
                        text: "Für das Cloud-Management soll eine REST-API bereitgestellt werden. Ergänzen Sie die folgende Tabelle mit HTTP-Methode, Pfad und passendem HTTP-Statuscode.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["Aktion", "HTTP-Methode", "Ressourcen-URI", "Erfolgs-Statuscode", "Fehler-Statuscode"],
                            rows: [
                                ["Alle Instanzen eines Projekts abrufen", "GET", "/api/v1/projekte/42/instanzen", "200 OK", "404 Not Found"],
                                ["Neue VM-Instanz provisionieren", "POST", "/api/v1/instanzen", "201 Created", "400 Bad Request"],
                                ["Spezifische Instanz löschen (Terminieren)", "DELETE", "/api/v1/instanzen/89", "204 No Content", "404 Not Found"],
                                ["Instanztyp verändern (Resize)", "PATCH / PUT", "/api/v1/instanzen/89", "200 OK", "409 Conflict"]
                            ]
                        },
                        solution: "GET für idempotentes Lesen (200), POST für Erstellen (201), DELETE für Löschen (204/200), PUT/PATCH für Updates (200)."
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 7: Smart Factory, IoT-Sensorik & Industrie 4.0
    // ----------------------------------------------------------------------
    {
        id: "exam_7",
        title: "Prüfung 7: Smart Factory, IoT-Sensorik & Industrie 4.0",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • InnoTech Fertigungstechnik AG",
        ausgangssituation: "Sie sind in der IT-Abteilung der InnoTech Fertigungstechnik AG tätig, einem modernen Automobilzulieferer mit robotergestützter Fließfertigung. Für ein Industrie-4.0-Projekt werden Sensoren vernetzt, speicherprogrammierbare Steuerungen (SPS) über MQTT angebunden und Fertigungsprozesse nach BPMN modelliert.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: BPMN 2.0 Geschäftsprozessmodellierung & ITIL Service Management",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "7_1_a",
                        label: "a) BPMN 2.0 Kollaborationsdiagramm für Fertigungsprozess",
                        points: 10,
                        type: "lines",
                        linesCount: 6,
                        stencil: "PROZESSMODELLIERUNG / BPMN 2.0",
                        text: "Modellieren Sie den Ablauf eines automatisierten Materialnachschubprozesses als BPMN 2.0 Kollaborationsdiagramm:\n• Pool 1: 'Produktionslinie' mit Lane 'Montage-Roboter'.\n• Pool 2: 'Zentrales Logistiksystem'.\n• Ablauf: Roboter stellt Materialmangel fest (Startereignis) und sendet Materialanforderung per Message Flow an das Logistiksystem. Das Logistiksystem prüft die Verfügbarkeit (XOR-Gateway). Ist Material da, wird ein fahrerloses Transportsystem (AGV) disponiert. Ist kein Material da, wird eine Eilbestellung beim Lieferanten ausgelöst.",
                        solution: "BPMN 2.0 Struktur:\n• Zwei getrennte Pools: 'Produktionslinie' und 'Zentrales Logistiksystem'.\n• Kommunikation zwischen den Pools ausschließlich über gestrichelte Nachrichtenflüsse (Message Flows) mit offenen Pfeilspitzen.\n• Im Pool Logistiksystem: Empfangendes Nachrichten-Startereignis ➔ Task 'Lagerbestand prüfen' ➔ Exklusives Gateway (XOR):\n  - Pfad 1: [Bestand >= Anforderung] ➔ Task 'FTS/AGV Fahrauftrag erstellen' ➔ Endereignis.\n  - Pfad 2: [Bestand < Anforderung] ➔ Task 'Eilbestellung generieren' ➔ Task 'Lieferant benachrichtigen' ➔ Endereignis."
                    },
                    {
                        id: "7_1_b",
                        label: "b) ITIL 4: Incident Management vs. Problem Management",
                        points: 8,
                        type: "lines",
                        linesCount: 5,
                        text: "An einer Fertigungslinie bricht die Netzwerkverbindung zur speicherprogrammierbaren Steuerung (SPS) alle 2 Stunden ab. Der Schichtleiter startet den Switch jedes Mal neu (Dauer: 2 Minuten).\nUnterscheiden Sie das Vorgehen des Incident Managements vom Problem Management und erklären Sie die Begriffe 'Workaround' und 'Known Error Database' (KEDB).",
                        solution: "• Incident Management: Ziel ist die schnellstmögliche Wiederherstellung des normalen Betriebs. Der Switch-Neustart durch den Schichtleiter ist ein klassischer temporärer 'Workaround' (Symptombekämpfung).\n• Problem Management: Ziel ist die Identifikation der zugrundeliegenden Ursache (Root Cause Analysis, z. B. Speicherleck in der Switch-Firmware oder IP-Adresskonflikt), um wiederkehrende Störungen dauerhaft zu verhindern.\n• KEDB (Known Error Database): Zentrale Wissensdatenbank, in der bekannte Fehler, ihre Ursachen und dokumentierte Workarounds hinterlegt sind."
                    },
                    {
                        id: "7_1_c",
                        label: "c) Nutzwertanalyse zur Roboterauswahl",
                        points: 7,
                        type: "table",
                        stencil: "ENTSCHEIDUNGSTECHNIK / NUTZWERTANALYSE",
                        text: "Für eine neue Schweißzelle stehen zwei Industrieroboter zur Auswahl. Berechnen Sie die Gesamtpunktwerte und ermitteln Sie den wirtschaftlichsten Roboter nach Nutzwertanalyse (Punkte von 1 bis 10).",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0, 1, 2, 4],
                            headers: ["Kriterium", "Gewichtung", "Roboter A (Punkte)", "Roboter A (Teilnutzwert)", "Roboter B (Punkte)", "Roboter B (Teilnutzwert)"],
                            rows: [
                                ["Wiederholgenauigkeit / Präzision", "30 %", "9", "2,7", "8", "2,4"],
                                ["Zykluszeit / Taktzeit", "25 %", "7", "1,75", "9", "2,25"],
                                ["Schnittstellen (PROFINET, OPC UA)", "25 %", "9", "2,25", "6", "1,5"],
                                ["Energieeffizienz", "20 %", "6", "1,2", "8", "1,6"],
                                ["Gesamtnutzwert", "100 %", "-", "7,90", "-", "7,75"]
                            ]
                        },
                        solution: "Roboter A erreicht 7,90 Nutzwertpunkte, Roboter B 7,75 Punkte. Roboter A ist aufgrund überlegener Präzision und offener Industriestandards (OPC UA) die wirtschaftlichere Wahl."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: IoT-Netzwerke, MQTT & IPv6-Autokonfiguration",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "7_2_a",
                        label: "a) MQTT-Protokoll: Publish / Subscribe & QoS-Level",
                        points: 8,
                        type: "lines",
                        linesCount: 5,
                        stencil: "IOT-PROTOKOLLE / MQTT ARCHITEKTUR",
                        text: "Zur Überwachung von 500 Schwingungssensoren wird das MQTT-Protokoll eingesetzt.\naa) Erläutern Sie die Rollen von Publisher, Broker und Subscriber sowie das Topic-Konzept (4 Punkte).\nab) Unterscheiden Sie die drei Quality of Service Stufen: QoS 0, QoS 1 und QoS 2 (4 Punkte).",
                        solution: "aa) MQTT-Architektur:\n• Publisher: Sendet Telemetriedaten (Payload) zu einem bestimmten Thema ('Topic', z. B. 'halle1/maschine3/vibration') an den Broker.\n• Broker: Zentrale Serverinstanz; empfängt Nachrichten und leitet sie an alle Clients weiter, die das jeweilige Topic abonniert haben.\n• Subscriber: Abonniert Topics (auch mit Wildcards like '+' oder '#') und empfängt die Daten.\nab) QoS-Level:\n• QoS 0 (At most once / Fire and Forget): Nachricht wird maximal einmal ohne Empfangsbestätigung gesendet; Paketverlust möglich.\n• QoS 1 (At least once): Nachricht wird mindestens einmal zugestellt; Empfang wird mit PUBACK bestätigt (Duplikate möglich).\n• QoS 2 (Exactly once): Aufwendiger 4-Wege-Handshake (PUBREC, PUBREL, PUBCOMP); garantiert, dass jede Nachricht exakt einmal ankommt."
                    },
                    {
                        id: "7_2_b",
                        label: "b) IPv6 Autokonfiguration: SLAAC vs. DHCPv6",
                        points: 8,
                        type: "lines",
                        linesCount: 5,
                        text: "In der Fabrikhalle erhalten Sensoren IPv6-Adressen.\nba) Erläutern Sie den Ablauf von SLAAC (Stateless Address Autoconfiguration) unter Verwendung von Router Solicitations (RS) und Router Advertisements (RA) (4 Punkte).\nbb) Erläutern Sie das EUI-64-Verfahren zur Generierung der Interface-ID aus der 48-Bit-MAC-Adresse des Sensors (4 Punkte).",
                        solution: "ba) SLAAC Ablauf:\n1. Sensor sendet eine ICMPv6 Router Solicitation (RS) per Multicast an alle Router (ff02::2).\n2. Der Router antwortet mit einem Router Advertisement (RA, ff02::1), das das globale 64-Bit-Netzwerkpräfix enthält.\n3. Der Sensor kombiniert das Präfix mit seiner 64-Bit Interface-ID und prüft die Eindeutigkeit mittels DAD (Duplicate Address Detection).\nbb) EUI-64 Verfahren:\n1. Die 48-Bit-MAC-Adresse wird in der Mitte geteilt.\n2. In der Mitte wird die 16-Bit-Konstante 0xFFFE eingefügt.\n3. Das Universal/Local-Bit (7. Bit des ersten Bytes) wird invertiert."
                    },
                    {
                        id: "7_2_c",
                        label: "c) OT- vs. IT-Sicherheit & Purdue-Referenzmodell",
                        points: 9,
                        type: "lines",
                        linesCount: 5,
                        stencil: "INDUSTRIESICHERHEIT / PURDUE-MODELL",
                        text: "Zur Absicherung der Fertigung wird das Netzwerk nach dem Purdue-Modell (IEC 62443) segmentiert.\nErläutern Sie, warum Steuerungsnetzwerke (OT) niemals direkt mit der Unternehmens-IT verbunden werden dürfen, und welche Aufgaben eine industrielle DMZ (IDMZ) übernimmt.",
                        solution: "OT vs. IT Unterschiede:\n• IT priorisiert Vertraulichkeit (CIA). OT priorisiert strikt Verfügbarkeit, Safety (Leib und Leben) und Echtzeitfähigkeit (Latenz im Millisekundenbereich).\n• Ein Ransomware-Befall der Büro-IT darf niemals physische Maschinenbewegungen manipulieren oder Notabschaltungen lahmlegen.\nAufgaben IDMZ (Industrial DMZ):\n• Vollständige logische und physische Trennung von Level 3 (Operations/MES) und Level 4 (Enterprise/ERP).\n• Es existieren keine direkten gerouteten Verbindungen. Datenaustausch erfolgt ausschließlich über Proxy-Dienste, Bastion Hosts oder Datendioden in der IDMZ."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: Investitions- & Amortisationsrechnung im Rechengitter",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "7_3_a",
                        label: "a) Statische Amortisationsrechnung im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "INVESTITIONSRECHNUNG / AMORTISATIONSZEIT",
                        text: "Für eine optische KI-Qualitätskontrolle soll eine Inspektionsanlage für 140.000,00 EUR angeschafft werden. Die jährlichen Wartungs- und Softwarekosten betragen 12.000,00 EUR. Durch die Vermeidung von Ausschuss und Reklamationen werden jährlich 52.000,00 EUR eingespart.\nBerechnen Sie im Rechengitter:\n1. Den jährlichen Netto-Rückfluss (Einsparung - Kosten)\n2. Die statische Amortisationszeit in Jahren und Monaten.",
                        solution: "Rechnung:\n1. Jährlicher Netto-Rückfluss = 52.000 EUR - 12.000 EUR = 40.000 EUR / Jahr.\n2. Amortisationszeit = Anschaffungskosten / jährlicher Rückfluss\n   Amortisationszeit = 140.000 EUR / 40.000 EUR/Jahr = 3,5 Jahre.\n   0,5 Jahre = 6 Monate.\nErgebnis: Die Investition amortisiert sich nach genau 3 Jahren und 6 Monaten."
                    },
                    {
                        id: "7_3_b",
                        label: "b) Kapitalwertmethode / Dynamische Investitionsrechnung",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Erläutern Sie den Unterschied zwischen der statischen Amortisationsrechnung und der dynamischen Kapitalwertmethode (Net Present Value - NPV) und warum zukünftige Zahlungsströme abgezinst (diskontiert) werden müssen.",
                        solution: "Unterschied:\nDie statische Methode vernachlässigt den Zeitwert des Geldes und Zinseszinseffekte; alle Einnahmen werden gleich gewichtet.\nDie dynamische Kapitalwertmethode zinst künftige Einzahlungen mit einem Kalkulationszinssatz auf den Zeitpunkt t=0 ab (Barwert). Grund: Ein Euro heute ist mehr wert als ein Euro in 5 Jahren, da er heute angelegt werden und Zinsen erwirtschaften könnte (Opportunitätskosten und Inflation)."
                    },
                    {
                        id: "7_3_c",
                        label: "c) Industrial Ethernet: Redundante Ringtopologie (MRP)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "In der Fabrikation werden Switches im Ring nach dem Media Redundancy Protocol (MRP, IEC 62439-2) verbunden. Erläutern Sie die Aufgaben des Media Redundancy Managers (MRM) und warum Spanning Tree (STP/RSTP) in zeitkritischen Fertigungsumgebungen ungeeignet ist.",
                        solution: "MRP-Funktionsweise: Der Ring-Manager (MRM) blockiert im Normalbetrieb einen Port, um Loops zu verhindern. Bei Leitungsunterbrechung öffnet der MRM den blockierten Port in unter 10-20 ms (garantierte Umschaltzeit).\nRSTP ungeeignet: Spanning Tree benötigt im Fehlerfall 1 bis 3 Sekunden zur Rekonfiguration. Bei Fertigungslinien mit 10 ms Zykluszeit führt dies zum Not-Stopp der gesamten Anlage."
                    },
                    {
                        id: "7_3_d",
                        label: "d) Maschinensicherheit & Not-Aus (Safety vs. Security)",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Unterscheiden Sie im industriellen Umfeld die Begriffe 'Safety' (funktionale Sicherheit) und 'Security' (Informationssicherheit) und erläutern Sie, warum Safety-Funktionen (wie ein NOT-AUS-Taster) über festverdrahtete Sicherheitsrelais oder sichere Feldbusse (z. B. PROFIsafe) geführt werden.",
                        solution: "Safety: Schutz von Mensch, Gesundheit und Umwelt VOR Fehlfunktionen der Maschine (z. B. Quetschgefahr, Not-Aus).\nSecurity: Schutz der Maschine und Daten VOR Angriffen von außen (z. B. Malware, Spionage).\nSicherheitsrelais/PROFIsafe: Werden redundant (zweikanalig) ausgelegt. Bei Drahtbruch, Kurzschluss oder CPU-Ausfall fällt das System zwingend in den stromlosen, sicheren Zustand zurück (Fail-Safe-Prinzip)."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Zeitreihendatenbank, SQL & Grenzüberwachungs-Algorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "7_4_a",
                        label: "a) Relationales Datenbankmodell für Telemetrie (3NF)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKMODELLIERUNG / ZEITREIHEN",
                        text: "Modellieren Sie die Tabellen für die Schwingungs- und Temperaturüberwachung in 3NF:\nJede Maschine besitzt mehrere Sensoren unterschiedlicher Messgrößen. Jeder Sensor liefert sekündlich Messwerte mit Zeitstempel. Bei Schwellenwertüberschreitung wird ein Alarm protokolliert.\nGeben Sie die Tabellen an.",
                        solution: "• tbl_maschine (Maschine_ID [PK], Bezeichnung, Standort_Halle, Baujahr)\n• tbl_sensortyp (Typ_ID [PK], Messgroesse, Einheit, Max_Grenzwert, Min_Grenzwert)\n• tbl_sensor (Sensor_ID [PK], Maschine_ID [FK], Typ_ID [FK], Einbauposition, Kalibrierdatum)\n• tbl_messwert (Messwert_ID [PK], Sensor_ID [FK], Zeitstempel, Messwert_Numerisch)\n• tbl_alarm (Alarm_ID [PK], Sensor_ID [FK], Ausloese_Zeitpunkt, Alarm_Stufe, Quittiert_Von)"
                    },
                    {
                        id: "7_4_b",
                        label: "b) SQL: Durchschnittswerte & Schwellenwert-Alarme",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / AGGREGATION",
                        text: "Formulieren Sie SQL-Abfragen:\nba) Ermitteln Sie für Maschine 'M-104' die Durchschnittstemperatur sowie den Höchstwert aller Temperatursensoren im Zeitfenster der letzten 12 Stunden (5 Punkte).\nbb) Selektieren Sie alle Sensoren (Sensor_ID, Maschine_ID), die in den letzten 7 Tagen mehr als 10 unquittierte Alarme erzeugt haben (3 Punkte).",
                        solution: "ba)\nSELECT s.Sensor_ID, AVG(m.Messwert_Numerisch) AS Durchschnitt_Temp, MAX(m.Messwert_Numerisch) AS Max_Temp\nFROM tbl_sensor s\nJOIN tbl_sensortyp t ON s.Typ_ID = t.Typ_ID\nJOIN tbl_messwert m ON s.Sensor_ID = m.Sensor_ID\nWHERE s.Maschine_ID = 'M-104' \n  AND t.Messgroesse = 'Temperatur'\n  AND m.Zeitstempel >= NOW() - INTERVAL 12 HOUR\nGROUP BY s.Sensor_ID;\n\nbb)\nSELECT s.Sensor_ID, s.Maschine_ID, COUNT(a.Alarm_ID) AS Anzahl_Alarme\nFROM tbl_sensor s\nJOIN tbl_alarm a ON s.Sensor_ID = a.Sensor_ID\nWHERE a.Quittiert_Von IS NULL \n  AND a.Ausloese_Zeitpunkt >= NOW() - INTERVAL 7 DAY\nGROUP BY s.Sensor_ID, s.Maschine_ID\nHAVING Anzahl_Alarme > 10;"
                    },
                    {
                        id: "7_4_c",
                        label: "c) Struktogramm nach DIN 66261: Überlastungsabschaltung",
                        points: 9,
                        type: "lines",
                        linesCount: 6,
                        stencil: "STRUKTOGRAMM (DIN 66261) / STEUERUNGSLOGIK",
                        text: "Entwerfen Sie ein Struktogramm (oder strukturierten Pseudocode) für die Funktion `pruefe_temperatur(aktuelle_temp, grenzwert_warnung, grenzwert_notstopp)`:\n• Liegt die Temperatur unter dem Warnwert, läuft die Maschine im Normalbetrieb (Lüfterstufe 1).\n• Liegt die Temperatur zwischen Warnwert und Notstopp-Wert, wird eine Warnmeldung im Dashboard angezeigt und die Lüfterstufe auf Stufe 2 geschaltet.\n• Erreicht oder überschreitet die Temperatur den Notstopp-Wert, wird die Maschine sofort stromlos geschaltet (Not-Aus), ein optisches Warnsignal aktiviert und ein Eintrag ins Notfallprotokoll geschrieben.",
                        solution: "Pseudocode:\nIF aktuelle_temp < grenzwert_warnung THEN\n    SET luefter_stufe = 1\n    SET status = 'NORMAL'\nELSE\n    IF aktuelle_temp < grenzwert_notstopp THEN\n        SET luefter_stufe = 2\n        OUTPUT 'WARNUNG: Erhöhte Temperatur an Maschine!'\n        SENDE_DASHBOARD_ALARM('WARNUNG')\n    ELSE\n        SCHALTE_MASCHINE_STROMLOS() // Not-Aus\n        AKTIVIERE_WARNKORONALEUCHTE('ROT')\n        SCHREIBE_NOTFALLPROTOKOLL('NOT-AUS durch Übertemperatur: ' + aktuelle_temp)\n        ALARM_SCHICHTLEITER_SMS()\n    END IF\nEND IF"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 8: Medizintechnik & Telematikinfrastruktur
    // ----------------------------------------------------------------------
    {
        id: "exam_8",
        title: "Prüfung 8: Medizintechnik & Telematikinfrastruktur",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • MediCare Kliniken Verbund GmbH",
        ausgangssituation: "Sie unterstützen die IT-Abteilung der MediCare Kliniken Verbund GmbH. Für die Anbindung medizinischer Versorgungszentren (MVZ) an die bundesweite Telematikinfrastruktur (TI) werden Konnektoren eingerichtet, der Schutz von Patientendaten nach Art. 9 DSGVO sichergestellt und bildgebende Diagnosesysteme über VLANs angebunden.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: Telematikinfrastruktur (TI), eGK & Elektronische Patientenakte",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "8_1_a",
                        label: "a) Kernkomponenten der Telematikinfrastruktur",
                        points: 8,
                        type: "table",
                        stencil: "GESUNDHEITS-IT / TELEMATIKINFRASTRUKTUR",
                        text: "Ordnen Sie den Kernkomponenten der Telematikinfrastruktur ihre jeweilige Funktion zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["eHealth-Konnektor", "eGK (elektr. Gesundheitskarte)", "SMC-B (Praxisausweis)", "HBA (Heilberufsausweis)"],
                            headers: ["Komponente", "Bedeutung / Typ", "Aufgabe im System"],
                            rows: [
                                ["SMC-B (Praxisausweis)", "Institutionskarte (Smartcard im Lesegerät)", "Authentifiziert die Klinik/Praxis zweifelsfrei gegenüber der Telematikinfrastruktur"],
                                ["eHealth-Konnektor", "Sicherheits-Gateway (Hardware/Software)", "Baut ein gesichertes VPN zur Telematikinfrastruktur auf und wickelt Krypto-Operationen ab"],
                                ["HBA (Heilberufsausweis)", "Personengebundene Smartcard des Arztes", "Ermöglicht die qualifizierte elektronische Signatur (QES) für e-Rezepte und eAU"],
                                ["eGK (elektr. Gesundheitskarte)", "Patientenkarte (Smartcard)", "Speichert Stammdaten, Notfalldaten (NFD) und den elektronischen Medikationsplan (eMP)"]
                            ]
                        },
                        solution: "Konnektor als VPN-Router; SMC-B als Betriebsstättenausweis; HBA als digitaler Arztausweis mit Signaturfunktion (QES); eGK als Patientenkarte."
                    },
                    {
                        id: "8_1_b",
                        label: "b) KIM (Kommunikation im Medizinwesen) vs. Standard-E-Mail",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Arztbriefe und Befunde dürfen nicht über unverschlüsselte Standard-E-Mails übertragen werden. Erläutern Sie die Funktionsweise des KIM-Dienstes (Ende-zu-Ende-Verschlüsselung, Adressbuch, QES) und dessen Sicherheitsvorteile.",
                        solution: "Funktionsweise KIM:\n• Basiert auf Standard-E-Mail-Technologien (SMTP/POP3/IMAP), erzwingt jedoch zwingende Ende-zu-Ende-Verschlüsselung nach S/MIME.\n• Schlüssel stammen direkt aus dem zentralen TI-Verzeichnisdienst (VZD), wodurch Man-in-the-Middle-Angriffe ausgeschlossen sind.\n• Ermöglicht die qualifizierte elektronische Signatur (QES) mit dem HBA, die juristisch der handschriftlichen Unterschrift eines Arztes gleichgestellt ist (§ 126a BGB)."
                    },
                    {
                        id: "8_1_c",
                        label: "c) Elektronische Patientenakte (ePA) & Patientensouveränität",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Seit 2025 gilt das 'Opt-out'-Modell für die elektronische Patientenakte (ePA für alle). Erläutern Sie das Prinzip der Patientensouveränität und wie Patienten festlegen können, welche Ärzte auf welche Befunde zugreifen dürfen.",
                        solution: "Patientensouveränität bedeutet, dass der Patient die vollständige Kontrolle über seine Gesundheitsdaten behält:\n• Kann der ePA jederzeit widersprechen (Opt-out).\n• Kann über eine Smartphone-App oder Ombudsstelle feingranular festlegen, welche Praxis oder welches Krankenhaus welche Dokumente (z. B. Psychotherapiebefunde verbergen) einsehen darf.\n• Jeder Zugriff wird protokolliert und ist für den Patienten transparent nachvollziehbar."
                    },
                    {
                        id: "8_1_d",
                        label: "d) Störungsbehebung im Praxis-LAN",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Das eHealth-Kartenterminal kann keine Verbindung zum Konnektor aufbauen. Beschreiben Sie eine strukturierte Fehlersuche (IP-Konfiguration, TLS-Zertifikate, Pairing zwischen Terminal und Konnektor).",
                        solution: "Fehlersuche:\n1. Physisch & Link: Sichtprüfung Netzwerkkabel und Link-LED am Switch.\n2. IP & Routing: Ping vom Konnektor auf die IP des Kartenterminals zur Prüfung der Netzwerkerreichbarkeit.\n3. Pairing & Zertifikate: Prüfung, ob das Terminal im Konnektor autorisiert ist (Pairing-Schlüssel übereinstimmend) und ob das Zertifikat des Terminals noch gültig ist.\n4. Port-Prüfung: Sicherstellen, dass Port 9812 (SICCT) bzw. 443 in der internen Firewall nicht blockiert wird."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: Medizintechnik-Hardware, USV & DICOM/PACS",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "8_2_a",
                        label: "a) USV-Notstromdimensionierung im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "ELEKTROTECHNIK / OP-NOTSTROMVERSORGUNG",
                        text: "Die Monitore und Überwachungsgeräte im Aufwachraum verbrauchen eine Wirkleistung von P = 1.200 W bei einem Leistungsfaktor von cos φ = 0,8. Die geplante USV soll bei einem Stromausfall eine Überbrückungszeit von mindestens 20 Minuten bei einem Wirkungsgrad von η = 85 % sicherstellen.\nBerechnen Sie im Rechengitter:\n1. Die erforderliche Mindest-Scheinleistung S (in VA)\n2. Den Energiebedarf der USV-Batterie in Wattstunden (Wh).",
                        solution: "Berechnung:\n1. Scheinleistung S = P / cos φ = 1.200 W / 0,8 = 1.500 VA (1,5 kVA).\n2. Überbrückungszeit t = 20 min = 20/60 h = 1/3 h ≈ 0,333 h.\n   Nutzenergie am Gerät = 1.200 W * (1/3) h = 400 Wh.\n   Batterieenergie = Nutzenergie / Wirkungsgrad = 400 Wh / 0,85 = 470,59 Wh."
                    },
                    {
                        id: "8_2_b",
                        label: "b) DICOM-Standard und PACS-Archivierung",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Röntgen- und MRT-Aufnahmen werden im DICOM-Format in einem PACS-System gespeichert.\naa) Erläutern Sie, welche zwei wesentlichen Bestandteile eine DICOM-Datei enthält (3 Punkte).\nab) Nennen Sie die gesetzliche Aufbewahrungsfrist für Röntgenbilder nach dem Strahlenschutzgesetz (StrlSchG) (3 Punkte).",
                        solution: "aa) DICOM-Bestandteile:\nEine DICOM-Datei enthält in einer gemeinsamen Datei sowohl die Rohbilddaten (Pixeldaten unkomprimiert oder verlustfrei komprimiert) als auch umfangreiche Metadaten im Header (Patienten-ID, Name, Geburtsdatum, Aufnahmezeitpunkt, Geräteeinstellungen, kV, mA, Schichtdicke).\nab) Aufbewahrungsfrist:\nNach § 85 StrlSchG müssen Röntgenbilder von Erwachsenen mindestens 10 Jahre nach der letzten Untersuchung aufbewahrt werden. Bei Minderjährigen bis zur Vollendung des 28. Lebensjahres (maximal 30 Jahre)."
                    },
                    {
                        id: "8_2_c",
                        label: "c) Netzwerktrennung im Kliniknetz (VLAN-Segmentierung)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Beschreiben Sie, wie medizintechnische Großgeräte (MRT, CT), Verwaltungs-PCs und das öffentliche Patienten-WLAN netzwerktechnisch voneinander isoliert werden müssen, um Ausfälle durch Schadsoftware (z. B. Ransomware) zu verhindern.",
                        solution: "1. Strikte VLAN-Trennung:\n• VLAN 10: Medizintechnik (MRT/CT/Labor) – isoliert ohne Internetzugriff.\n• VLAN 20: KIS (Krankenhausinformationssystem) & Verwaltungs-PCs.\n• VLAN 30: TI & Konnektor.\n• VLAN 40: Patienten-/Gäste-WLAN.\n2. Firewall-Routing (Micro-Segmentation):\nKein direkter Datenverkehr von VLAN 40 oder 20 ins Medizintechnik-Netz. Zugriffe auf PACS nur über definierte DICOM-Ports (Port 104) mit Source-MAC-Filterung."
                    },
                    {
                        id: "8_2_d",
                        label: "d) Elektromagnetische Verträglichkeit (EMV) & Galvanische Trennung",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Im OP-Bereich werden Netzwerkkabel in der Nähe starker Hochfrequenz-Chirurgiegeräte (HF-Skalpelle) verlegt. Erläutern Sie, warum Lichtwellenleiter (LWL) oder Netzwerk-Isolatoren (Galvanische Trennung nach EN 60601-1) eingesetzt werden müssen.",
                        solution: "Lichtwellenleiter übertragen Daten optisch (Photonen) und sind physikalisch absolut unempfindlich gegenüber elektromagnetischen Störfeldern (keine Induktion von Störströmen).\nNetzwerk-Isolatoren (nach EN 60601-1): Unterbrechen die galvanische Kupferverbindung (Potenzialtrennung bis zu 4 kV) und schützen Patienten und medizinische Geräte vor lebensgefährlichen Berührungsspannungen und Kriechströmen über das Ethernet-Kabel."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: DSGVO Art. 9, IT-Sicherheitsgesetz & NIS-2",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "8_3_a",
                        label: "a) DSGVO Art. 9: Besondere Kategorien von Daten & § 203 StGB",
                        points: 8,
                        type: "lines",
                        linesCount: 5,
                        stencil: "DATENSCHUTZRECHT / ART. 9 DSGVO & KRITIS",
                        text: "Gesundheitsdaten unterliegen dem strengsten Datenschutzregime.\naa) Erläutern Sie, warum für die Verarbeitung von Patientendaten im Krankenhaus keine formelle schriftliche Einwilligung erforderlich ist, wenn ein Behandlungsvertrag vorliegt (Art. 9 Abs. 2 lit. h DSGVO) (4 Punkte).\nab) Welche strafrechtlichen Konsequenzen drohen IT-Mitarbeitern bei unbefugter Weitergabe von Patientendaten nach § 203 StGB (Verletzung von Privatgeheimnissen)? (4 Punkte).",
                        solution: "aa) Ausnahme Art. 9 Abs. 2 lit. h DSGVO:\nDie Verarbeitung ist für Zwecke der medizinischen Diagnostik, der Versorgung oder Behandlung im Gesundheitsbereich oder für die Verwaltung von Systemen des Gesundheitswesens zulässig, sofern sie durch medizinisches Fachpersonal erfolgt, das dem Berufsgeheimnis unterliegt. Eine explizite Einwilligung für jeden Behandlungsschritt würde den Krankenhausnotfallbetrieb blockieren.\nab) § 203 StGB:\nFreiheitsstrafe bis zu einem Jahr oder Geldstrafe. Auch IT-Dienstleister und IT-Mitarbeiter im Krankenhaus sind seit der Gesetzesreform vollwertig als 'Berufsgeheimnisträger / mitwirkende Personen' strafrechtlich verpflichtet."
                    },
                    {
                        id: "8_3_b",
                        label: "b) NIS-2-Richtlinie & KRITIS für Krankenhäuser",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        text: "Krankenhäuser mit mehr als 30.000 vollstationären Fällen pro Jahr gelten in Deutschland als 'Kritische Infrastruktur' (KRITIS) nach dem BSI-KAG.\nNennen Sie zwei gesetzliche Pflichten nach § 8a BSIG (z. B. Meldepflichten, Nachweispflichten).",
                        solution: "Gesetzliche Pflichten:\n1. Meldepflicht an das BSI: Erhebliche Störungen der IT-Systeme und Sicherheitsvorfälle müssen unverzüglich (Erstmeldung binnen 24 Stunden) an das Bundesamt für Sicherheit in der Informationstechnik gemeldet werden.\n2. Audit- und Nachweispflicht: Alle 2 Jahre muss dem BSI die Einhaltung des 'Stands der Technik' durch Sicherheitsaudits (z. B. nach branchenspezifischem Sicherheitsstandard B3S Medizinische Versorgung) nachgewiesen werden."
                    },
                    {
                        id: "8_3_c",
                        label: "c) Technische und organisatorische Maßnahmen (TOMs) im Klinikalltag",
                        points: 6,
                        type: "table",
                        stencil: "IT-SICHERHEITSMANAGEMENT / TOMS",
                        text: "Ordnen Sie die folgenden vier Schutzmaßnahmen der passenden Kontrollart nach Art. 32 DSGVO zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 1,
                            staticCols: [0, 2],
                            options: ["Zutrittskontrolle", "Zugriffskontrolle", "Benutzer-/Zugangskontrolle", "Verfügbarkeitskontrolle"],
                            headers: ["Maßnahme im Krankenhaus", "Kontrollart nach Art. 32 DSGVO", "Sicherheitsziel"],
                            rows: [
                                ["Mitarbeiter können in der Patientenakte nur Patienten der eigenen Station einsehen", "Zugriffskontrolle", "Verhindert unbefugtes Lesen, Verändern oder Löschen von Daten"],
                                ["Tägliche verschlüsselte Datensicherung auf WORM-Speicher (Immutability)", "Verfügbarkeitskontrolle", "Schützt vor Datenverlust und Ransomware"],
                                ["Zugang zu Serverräumen nur mit elektronischem Transponder und Protokollierung", "Zutrittskontrolle", "Verhindert physischen Zugang unbefugter Personen"],
                                ["Automatische Bildschirmsperre nach 2 Minuten Inaktivität auf Stations-PCs", "Benutzer-/Zugangskontrolle", "Verhindert unbefugte Nutzung unbeaufsichtigter Terminals"]
                            ]
                        },
                        solution: "Zutrittskontrolle (physisch); Zugriffskontrolle (logische Berechtigung); Zugangskontrolle (Login/Screensaver); Verfügbarkeitskontrolle (Backup)."
                    },
                    {
                        id: "8_3_d",
                        label: "d) Notfallbetrieb bei Ransomware-Angriff",
                        points: 5,
                        type: "lines",
                        linesCount: 4,
                        text: "Nach einem Ransomware-Befall fällt das Krankenhausinformationssystem (KIS) komplett aus. Erläutern Sie das Konzept des 'analogen Notfallbetriebs' (Rückfall auf Papierkurven) und wie IT-Systeme nach der Bereinigung schrittweise wieder hochgefahren werden.",
                        solution: "Analoger Notfallbetrieb:\nAusgabe vorbereiteter Papier-Notfallmappen (Papier-Patientenkurven, manuelle Rezeptblöcke, Labor-Anforderungsscheine), um den Patientenbetrieb ohne Strom-/Netzwerkabhängigkeit aufrechtzuerhalten.\nWiederanlauf:\n1. Forensische Sicherung und Isolation des Netzes.\n2. Wiederherstellung aus sauberen, geprüften Offline-Backups (zuerst Active Directory, dann DNS/Netzwerk, dann KIS-Datenbank).\n3. Schrittweises Wiederhochfahren Station für Station nach erfolgreichem Integritätstest."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Patienten- und Fallakten-Datenbank, SQL & Triage-Algorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "8_4_a",
                        label: "a) Relationales Klinik-Datenbankschema (3NF)",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "DATENBANKMODELLIERUNG / KLINIK-KIS",
                        text: "Modellieren Sie die Kerntabellen eines Krankenhausinformationssystems (KIS) in 3NF:\nEin Patient hat Stammdaten. Ein Patient kann mehrere stationäre Aufenthalte (Fälle) haben. Jeder Fall ist einer Station zugeordnet. Während eines Falls werden mehrere medizinische Diagnosen (ICD-10-Codes) und Leistungen durch Ärzte erfasst.\nGeben Sie das Schema mit PK und FK an.",
                        solution: "• tbl_patient (Patienten_ID [PK], Nachname, Vorname, Geburtsdatum, Versichertennummer, Krankenkasse)\n• tbl_station (Station_ID [PK], Stationsname, Fachbereich, Bettenanzahl_Max)\n• tbl_fall (Fall_ID [PK], Patienten_ID [FK], Station_ID [FK], Aufnahme_Datum, Entlass_Datum, Fall_Typ)\n• tbl_diagnose (Diagnose_ID [PK], Fall_ID [FK], ICD10_Code, Diagnose_Text, Diagnose_Datum)\n• tbl_leistung (Leistung_ID [PK], Fall_ID [FK], OPS_Code, Leistungs_Text, Durchfuehrender_Arzt, Kosten_EUR)"
                    },
                    {
                        id: "8_4_b",
                        label: "b) SQL: Bettenbelegung & Liegedauer-Auswertung",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / BETTENMANAGEMENT",
                        text: "Formulieren Sie die SQL-Befehle:\nba) Ermitteln Sie für jede Station (Stationsname, Fachbereich) die aktuelle Anzahl belegter Betten (`Entlass_Datum IS NULL`) sowie die freie Bettenkapazität (`Bettenanzahl_Max - belegte Betten`) (5 Punkte).\nbb) Berechnen Sie die durchschnittliche Verweildauer (in Tagen) aller im ersten Quartal 2026 entlassenen Patienten (3 Punkte).",
                        solution: "ba)\nSELECT s.Stationsname, s.Fachbereich, s.Bettenanzahl_Max,\n       COUNT(f.Fall_ID) AS Belegte_Betten,\n       s.Bettenanzahl_Max - COUNT(f.Fall_ID) AS Freie_Betten\nFROM tbl_station s\nLEFT JOIN tbl_fall f ON s.Station_ID = f.Station_ID AND f.Entlass_Datum IS NULL\nGROUP BY s.Station_ID, s.Stationsname, s.Fachbereich, s.Bettenanzahl_Max;\n\nbb)\nSELECT AVG(DATEDIFF(f.Entlass_Datum, f.Aufnahme_Datum)) AS Durchschnittliche_Liegedauer_Tage\nFROM tbl_fall f\nWHERE f.Entlass_Datum BETWEEN '2026-01-01' AND '2026-03-31';"
                    },
                    {
                        id: "8_4_c",
                        label: "c) Algorithmus: Manchester-Triage-System (MTS)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "ALGORITHMUS / TRIAGE-EINSTUFUNG",
                        text: "Entwerfen Sie einen Pseudocode zur Dringlichkeitseinstufung in der Notaufnahme:\n• Parameter: `vital_bedroht` (bool), `schmerz_skala` (1-10), `atemnot` (bool).\n• Stufe 1 (ROT / Sofort): Wenn `vital_bedroht == true`.\n• Stufe 2 (ORANGE / Sehr dringend, max. 10 Min.): Wenn `atemnot == true` oder `schmerz_skala >= 8`.\n• Stufe 3 (GELB / Dringend, max. 30 Min.): Wenn `schmerz_skala >= 5`.\n• Stufe 4 (GRÜN / Normal, max. 90 Min.): In allen übrigen Fällen.\nDie Funktion `ermittle_triage(vital_bedroht, schmerz_skala, atemnot)` gibt die Stufe ('ROT', 'ORANGE', 'GELB', 'GRÜN') zurück.",
                        solution: "FUNCTION ermittle_triage(vital_bedroht, schmerz_skala, atemnot):\n    IF vital_bedroht == TRUE THEN\n        RETURN 'ROT (Sofortige ärztliche Behandlung)'\n    ELSE IF atemnot == TRUE OR schmerz_skala >= 8 THEN\n        RETURN 'ORANGE (Sehr dringend - max. 10 Minuten)'\n    ELSE IF schmerz_skala >= 5 THEN\n        RETURN 'GELB (Dringend - max. 30 Minuten)'\n    ELSE\n        RETURN 'GRÜN (Normal - max. 90 Minuten)'\n    END IF\nEND FUNCTION"
                    }
                ]
            }
        ]
    }
,

    // ----------------------------------------------------------------------
    // PRÜFUNG 9: FinTech-Banking & Mobile Payment (FinNova Bank AG)
    // ----------------------------------------------------------------------
    {
        id: "exam_9",
        title: "Prüfung 9: FinTech-Banking, PSD2 & Mobile Payment",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • FinNova Bank AG",
        ausgangssituation: "Sie sind IT-Fachinformatiker bei der FinNova Bank AG, einer innovativen Direktbank mit Fokus auf Mobile Banking und Echtzeit-Zahlungsverkehr. Die Bank modernisiert ihre Kernbankenschnittstellen nach PSD2, implementiert biometrische 2-Faktor-Authentifizierungen und rüstet ihre Rechenzentren auf Hochverfügbarkeit um.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: PSD2-Schnittstellen, 2-Faktor-Authentifizierung & Zinskalkulation",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "9_1_a",
                        label: "a) PSD2 (Payment Services Directive 2) & Open Banking",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "BANKENREGULIERUNG / PSD2 & APIS",
                        text: "Die PSD2 verpflichtet Banken zur Bereitstellung offener Schnittstellen (Open Banking APIs).\naa) Unterscheiden Sie die Rollen eines Kontoinformationsdienstes (KID / AISP) und eines Zahlungsauslösedienstes (ZAD / PISP) (4 Punkte).\nab) Nennen Sie den Grund, warum 'Screen Scraping' unter PSD2 durch gesicherte REST-APIs abgelöst wurde (3 Punkte).",
                        solution: "aa) Rollen nach PSD2:\n• Kontoinformationsdienst (KID / AISP): Liest Kontodaten (Kontostand, Umsatzhistorie) verschiedener Banken aus und bereitet diese für den Nutzer auf (z. B. Multibanking-Apps). Löst selbst keine Zahlungen aus.\n• Zahlungsauslösedienst (ZAD / PISP): Initiiert im Auftrag des Zahlers Überweisungen direkt vom Bankkonto des Kunden an den Händler (z. B. Sofortüberweisung, giropay), ohne dass eine Kreditkarte erforderlich ist.\nab) Ablösung von Screen Scraping:\nBeim Screen Scraping musste der Kunde seine sensiblen Online-Banking-Zugangsdaten (PIN/Passwort) an Drittanbieter weitergeben. Offizielle REST-APIs nutzen moderne OAuth2/Token-Verfahren, bei denen Passwörter niemals offengelegt werden und Zugriffsrechte granular autorisiert werden."
                    },
                    {
                        id: "9_1_b",
                        label: "b) Starke Kundenauthentifizierung (SCA / 2FA)",
                        points: 6,
                        type: "table",
                        stencil: "IT-SICHERHEIT / 2-FAKTOR-AUTHENTIFIZIERUNG",
                        text: "Ordnen Sie die folgenden vier Authentifizierungsmerkmale den drei zulässigen Faktoren (Wissen, Besitz, Inhärenz) nach PSD2 zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 1,
                            staticCols: [0, 2],
                            options: ["Wissen (Wissen)", "Besitz (Haben)", "Inhärenz (Sein)"],
                            headers: ["Authentifizierungsmerkmal", "Faktorkategorie (Wissen / Besitz / Inhärenz)", "Begründung"],
                            rows: [
                                ["Persönliche Online-Banking PIN", "Wissen (Wissen)", "Geheime Information, die nur dem Prüfling bekannt ist"],
                                ["Fingerabdruck-Scan über Smartphone-Sensor", "Inhärenz (Sein)", "Biometrisches Körpereigenmerkmal des Nutzers"],
                                ["FIDO2 Hardware-Sicherheitsschlüssel (USB)", "Besitz (Haben)", "Physischer kryptografischer Token im Besitz des Nutzers"],
                                ["Push-TAN Empfang auf registrierter Banking-App", "Besitz (Haben)", "Bindung an ein physisches, kryptografisch registriertes Endgerät"]
                            ]
                        },
                        solution: "Fingerabdruck = Inhärenz; Push-TAN-App = Besitz; Online-Banking PIN = Wissen; FIDO2-USB = Besitz."
                    },
                    {
                        id: "9_1_c",
                        label: "c) Zins- und Tilgungsrechnung im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "FINANZMATHEMATIK / EFFEKTIVZINS & KREDIT",
                        text: "Ein Firmenkunde nimmt zur Anschaffung von Serverhardware einen Ratenkredit über 60.000,00 EUR auf:\n• Zinssatz: 4,5 % p. a. (dekursiv)\n• Laufzeit: 3 Jahre\n• Vereinbarte jährliche Tilgung: Gleichbleibend 20.000,00 EUR zum Jahresende\nBerechnen Sie im Rechengitter für jedes der 3 Jahre den Zinsbetrag, die Gesamtrate (Zins + Tilgung) und den gesamten Zinsaufwand über die Gesamtlaufzeit.",
                        solution: "Zinsberechnung:\nJahr 1: Restschuld zu Beginn = 60.000 €\n• Zinsen Jahr 1: 60.000 € * 0,045 = 2.700,00 €\n• Annuität / Rate 1: 20.000 € + 2.700 € = 22.700,00 €\n• Restschuld Ende Jahr 1 = 40.000 €\n\nJahr 2: Restschuld = 40.000 €\n• Zinsen Jahr 2: 40.000 € * 0,045 = 1.800,00 €\n• Annuität / Rate 2: 20.000 € + 1.800 € = 21.800,00 €\n• Restschuld Ende Jahr 2 = 20.000 €\n\nJahr 3: Restschuld = 20.000 €\n• Zinsen Jahr 3: 20.000 € * 0,045 = 900,00 €\n• Annuität / Rate 3: 20.000 € + 900 € = 20.900,00 €\n• Restschuld Ende Jahr 3 = 0,00 €\n\nGesamter Zinsaufwand: 2.700 + 1.800 + 900 = 5.400,00 EUR."
                    },
                    {
                        id: "9_1_d",
                        label: "d) Verbraucherwiderrufsrecht bei Online-Krediten",
                        points: 4,
                        type: "lines",
                        linesCount: 3,
                        stencil: "WIRTSCHAFTSRECHT / BGB WIDERRUF",
                        text: "Ein Verbraucher schließt den Kreditvertrag online über das Smartphone ab. Nennen Sie die gesetzliche Widerrufsfrist nach § 495 i. V. m. § 355 BGB und die Voraussetzung für deren Beginn.",
                        solution: "Gesetzliche Widerrufsfrist: 14 Tage.\nVoraussetzung für Fristbeginn: Erhalt einer ordnungsgemäßen, deutlichen Widerrufsbelehrung sowie sämtlicher gesetzlicher Pflichtangaben nach § 492 Abs. 2 BGB auf einem dauerhaften Datenträger."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: Hochverfügbarkeit, SAN-Storage & Ausfallmetriken",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "9_2_a",
                        label: "a) SAN-Technologien: Fibre Channel vs. iSCSI",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "STORAGE-SYSTEME / SAN & PROTOKOLLE",
                        text: "Für das Kernbankensystem wird ein dediziertes Storage Area Network (SAN) aufgebaut.\naa) Erläutern Sie zwei technische Vorzüge von Fibre Channel (FC) gegenüber herkömmlichem iSCSI über Gigabit-Ethernet (4 Punkte).\nab) Nennen Sie die Funktion von 'Multipathing' bei SAN-Hostbusadaptern (HBA) (3 Punkte).",
                        solution: "aa) Vorteile Fibre Channel:\n1. Deterministische Übertragung mit extrem geringer Latenz und verlustfreiem Protokollfluss (Lossless Flow Control per Buffer Credits).\n2. Keine TCP/IP-Protokoll-Overheads, Entlastung der Server-CPUs durch hardwarebeschleunigte HBAs.\nab) Multipathing:\nMultipathing etabliert mehrere physische redundante Pfade zwischen Host (Server) und Storage-Controller. Bei Ausfall eines Kabels, Switches oder HBA-Ports schaltet der I/O-Treiber verzögerungsfrei auf den Alternativpfad um (Failover) und verteilt die Last im Normalbetrieb (Load Balancing)."
                    },
                    {
                        id: "9_2_b",
                        label: "b) Hochverfügbarkeits-Berechnung ('Five Nines')",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SLA / HOCHVERFÜGBARKEIT & DOWNTIME",
                        text: "Die Bank vereinbart für das Online-Banking eine garantierte Verfügbarkeit von 99,99 % (Vier Neunen), für den Zahlungsverkehrstransit 99,999 % (Fünf Neunen).\nBerechnen Sie jeweils die maximal zulässige Ausfallzeit pro Nicht-Schaltjahr (365 Tage = 8.760 Stunden) in Minuten und Sekunden.",
                        solution: "Jahresstunden = 365 * 24 = 8.760 Stunden = 525.600 Minuten.\n\n1. Bei 99,99 % Verfügbarkeit:\n• Zulässige Ausfallquote = 0,01 %\n• Maximale Downtime = 525.600 Min * 0,0001 = 52,56 Minuten (= 52 Min 33,6 Sek).\n\n2. Bei 99,999 % Verfügbarkeit:\n• Zulässige Ausfallquote = 0,001 %\n• Maximale Downtime = 525.600 Min * 0,00001 = 5,256 Minuten (= 5 Min 15,4 Sek)."
                    },
                    {
                        id: "9_2_c",
                        label: "c) Ausfallmetriken: MTBF, MTTR & Availability",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "QUALITÄTSMANAGEMENT / MTBF & MTTR",
                        text: "Definieren Sie die Kennzahlen MTBF (Mean Time Between Failures) und MTTR (Mean Time to Repair) und geben Sie die mathematische Formel zur Berechnung der Verfügbarkeit (A) an.",
                        solution: "• MTBF: Mittlere Betriebsdauer zwischen zwei aufeinanderfolgenden Systemausfällen (Zuverlässigkeit).\n• MTTR: Mittlere Dauer zur Fehlerbehebung und Wiederherstellung des Normalbetriebs (Reparierbarkeit).\n• Formel Verfügbarkeit: A = MTBF / (MTBF + MTTR)."
                    },
                    {
                        id: "9_2_d",
                        label: "d) Active/Active- vs. Active/Passive-Cluster",
                        points: 4,
                        type: "lines",
                        linesCount: 3,
                        stencil: "SERVERCLUSTER / FAILOVER-STRATEGIEN",
                        text: "Vergleichen Sie Active/Active- und Active/Passive-Cluster hinsichtlich Ressourcenauslastung und Ausfallverhalten.",
                        solution: "• Active/Active: Beide Nodes verarbeiten zeitgleich produktive Anfragen (optimale Auslastung). Fällt ein Node aus, übernimmt der verbleibende die Last (Performance sinkt ggf. auf 50 %).\n• Active/Passive: Nur der primäre Node arbeitet, der Standby-Node läuft leer mit. Beim Ausfall muss erst umgeschaltet werden (Failover-Verzögerung), aber volle Kapazität bleibt erhalten."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: IT-Sicherheit nach BAIT, Zero-Trust & Man-in-the-Middle",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "9_3_a",
                        label: "a) BAIT (Bankaufsichtliche Anforderungen an die IT)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "COMPLIANCE / BAFIN & BAIT",
                        text: "Die Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) regelt die IT-Sicherheit von Banken über die BAIT.\naa) Erläutern Sie das geforderte 'Need-to-know'- und 'Least-Privilege'-Prinzip bei der Benutzerberechtigungsvergabe (4 Punkte).\nab) Nennen Sie zwei Pflichten bei Auslagerungen (IT-Outsourcing an Cloud-Provider) nach § 25b KWG (3 Punkte).",
                        solution: "aa) Berechtigungsprinzipien:\n• Least Privilege: Benutzer erhalten ausschließlich die minimal notwendigen Rechte, die zwingend zur Erfüllung ihrer Arbeitsaufgaben erforderlich sind.\n• Need-to-know: Zugriff auf sensible Kundendaten erhält nur, wer ein sachlich begründetes dienstliches Erfordernis hat (kein anlassloser Datenzugriff).\nab) Pflichten bei IT-Outsourcing (§ 25b KWG):\n1. Umfassende Risikoanalyse und Eignungsprüfung des Dienstleisters vor Vertragsschluss.\n2. Uneingeschränkte Informations-, Audit- und Prüfungsrechte der Bank und der BaFin beim Dienstleister."
                    },
                    {
                        id: "9_3_b",
                        label: "b) Zero-Trust-Architektur im Bankennetz",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "NETZWERKSICHERHEIT / ZERO TRUST",
                        text: "Die Bank wechselt vom klassischen Perimeter-Sicherheitsmodell ('harte Schale, weicher Kern') zu einer Zero-Trust-Architektur.\nErläutern Sie das Kernprinzip 'Never trust, always verify' anhand von zwei konkreten Schutzmaßnahmen.",
                        solution: "Kernprinzip 'Never trust, always verify':\nEs wird keinem Gerät, Nutzer oder Dienst automatisch vertraut – auch nicht innerhalb des internen Firmennetzes. Jede einzelne Anfrage muss authentifiziert, autorisiert und verschlüsselt sein.\nKonkrete Maßnahmen:\n1. Mikrosegmentierung des Netzes (jeder Service/jede Datenbank befindet sich in einer isolierten Zone mit individueller Firewall-Regelung).\n2. Kontinuierliche Verifikation: Dynamische Zugriffskontrolle unter Einbeziehung von Gerätestatus (Health-Check, Patch-Stand) und Verhaltensanalyse (Anomalieerkennung)."
                    },
                    {
                        id: "9_3_c",
                        label: "c) Man-in-the-Middle (MitM) & SSL-Pinning",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "KRYPTOGRAFIE / CERTIFICATE PINNING",
                        text: "Angreifer versuchen, den Datenverkehr zwischen der Mobile-Banking-App und den Bankservern abzufangen.\naa) Beschreiben Sie das Angriffsszenario eines Man-in-the-Middle-Angriffs über ein bösartiges öffentliches WLAN (3 Punkte).\nab) Erläutern Sie, wie 'Certificate Pinning' (SSL-Pinning) in der Banking-App diesen Angriff verhindert (3 Punkte).",
                        solution: "aa) MitM-Angriff im WLAN:\nDer Angreifer manipuliert den Datenstrom (z. B. durch ARP-Spoofing oder DNS-Spoofing) und schaltet sich als Vermittler zwischen Smartphone und Server. Mit einem gefälschten Zertifikat versucht er, die TLS-Verschlüsselung aufzubrechen und Zugangsdaten im Klartext mitzulesen.\nab) Schutz durch Certificate Pinning:\nIn der App wird der kryptografische Fingerabdruck (Public Key oder Hash) des echten Bankzertifikats fest einprogrammiert ('gepinnt'). Präsentiert ein gefälschtes TLS-Zertifikat im WLAN eine andere Signatur, bricht die App die Verbindung sofort ab – selbst wenn das bösartige Zertifikat im Betriebssystem als vertrauenswürdig hinterlegt wurde."
                    },
                    {
                        id: "9_3_d",
                        label: "d) Schutz vor Phishing & Social Engineering",
                        points: 6,
                        type: "table",
                        stencil: "AWARENESS / ANGRIFFSMETHODEN & ABWEHR",
                        text: "Ordnen Sie die Angriffsarten der passenden Definition und Schutzmaßnahme zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["CEO Fraud (Chef-Masche)", "Spear-Phishing", "Vishing (Voice Phishing)"],
                            headers: ["Angriffsmethode", "Definition", "Effektive Abwehrmaßnahme"],
                            rows: [
                                ["Spear-Phishing", "Gezielte, personalisierte E-Mails an Administratoren mit schadhaftem Anhang", "E-Mail-Sandbox, Signaturprüfung und regelmäßige Awareness-Schulungen"],
                                ["Vishing (Voice Phishing)", "Telefonanrufe angeblicher IT-Techniker zur Abfrage von Passwörtern oder TANs", "Grundsätzliches Verbot der telefonischen Herausgabe von Zugangsdaten"],
                                ["CEO Fraud (Chef-Masche)", "Kriminelle geben sich als Vorstand aus und fordern Mitarbeiter zu eiligen Eilüberweisungen auf", "Strikte Einhaltung des Vier-Augen-Prinzips und telefonische Rückversicherung"]
                            ]
                        },
                        solution: "CEO Fraud: Vorstandsvortäuschung -> Vier-Augen-Prinzip; Spear-Phishing: zielgerichtete Mail -> Sandbox & Schulung; Vishing: Telefonbetrug -> Weitergabeverbot."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Kernbanken-Datenbank (3NF), SQL & IBAN-Prüfziffern-Algorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "9_4_a",
                        label: "a) Relationales Banken-Datenbankschema (3NF)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKMODELLIERUNG / KERNBANKENSYSTEM",
                        text: "Modellieren Sie die Kerntabellen eines Bankensystems in 3NF:\nEin Kunde besitzt Stammdaten. Ein Kunde kann mehrere Konten führen. Jedes Konto hat eine eindeutige IBAN, einen Kontotyp und einen Saldo. Zu jedem Konto werden Transaktionen (Buchungen) erfasst mit Buchungs-ID, Absender-IBAN, Empfänger-IBAN, Betrag, Zeitstempel und Verwendungszweck.\nGeben Sie das Schema mit PK und FK an.",
                        solution: "• tbl_kunde (Kunden_ID [PK], Nachname, Vorname, Geburtsdatum, Strasse, PLZ, Ort, Identifikationsstatus)\n• tbl_konto (IBAN [PK], Kunden_ID [FK], Kontotyp, Waehrung, Saldo_EUR, Dispolimit, Eroeffnungsdatum)\n• tbl_transaktion (Transaktions_ID [PK], Quell_IBAN [FK], Ziel_IBAN, Betrag_EUR, Buchungsdatum, Wertstellung, Verwendungszweck, Status)"
                    },
                    {
                        id: "9_4_b",
                        label: "b) SQL-Analysen: Geldwäsche-Prüfung nach GwG",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / COMPLIANCE & GWG",
                        text: "Formulieren Sie die SQL-Statements:\nba) Ermitteln Sie alle Kunden (Kunden_ID, Nachname, Vorname) und deren Transaktionen, bei denen eine Einzelüberweisung 10.000,00 EUR überschreitet (`Betrag_EUR >= 10000`), sortiert nach Betrag absteigend (5 Punkte).\nbb) Berechnen Sie die Summe aller Einzahlungen und Auszahlungen je Konto für den Monat Februar 2026 (3 Punkte).",
                        solution: "ba)\nSELECT k.Kunden_ID, k.Nachname, k.Vorname, t.Transaktions_ID, t.Quell_IBAN, t.Ziel_IBAN, t.Betrag_EUR, t.Buchungsdatum\nFROM tbl_kunde k\nJOIN tbl_konto ko ON k.Kunden_ID = ko.Kunden_ID\nJOIN tbl_transaktion t ON ko.IBAN = t.Quell_IBAN\nWHERE t.Betrag_EUR >= 10000.00\nORDER BY t.Betrag_EUR DESC;\n\nbb)\nSELECT ko.IBAN, SUM(t.Betrag_EUR) AS Gesamtvolumen_EUR, COUNT(t.Transaktions_ID) AS Anzahl_Transaktionen\nFROM tbl_konto ko\nJOIN tbl_transaktion t ON ko.IBAN = t.Quell_IBAN\nWHERE t.Buchungsdatum BETWEEN '2026-02-01 00:00:00' AND '2026-02-28 23:59:59'\nGROUP BY ko.IBAN;"
                    },
                    {
                        id: "9_4_c",
                        label: "c) Algorithmus: IBAN-Prüfziffernvalidierung nach ISO 7064 (MOD 97-10)",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "ALGORITHMEN / ISO 7064 MODULO-97",
                        text: "Beschreiben Sie den mathematischen Prüfalgorithmus nach ISO 7064 zur Validierung einer 22-stelligen deutschen IBAN (DE pp bbbb bbbb kkkk kkkk kk) und erstellen Sie den Pseudocode für die Funktion `pruefe_iban(iban)`:\n1. Verschiebung der ersten 4 Zeichen ans Ende.\n2. Ersetzung von Buchstaben durch Ziffern (A=10 .. Z=35).\n3. Berechnung des Rests bei Division durch 97 (muss genau 1 ergeben).",
                        solution: "Ablauf:\n1. Verschiebe Länderkennung und Prüfziffer ans Ende (z. B. 'DE21' -> '...DE21').\n2. Ersetze 'D' durch '13' und 'E' durch '14'.\n3. Berechne BigInteger(iban_ziffern) MOD 97. Ist das Ergebnis 1, ist die IBAN formal gültig.\n\nPseudocode:\nFUNCTION pruefe_iban(iban_str):\n    iban_clean = REMOVE_SPACES(UPPERCASE(iban_str))\n    IF LENGTH(iban_clean) != 22 THEN RETURN FALSE\n    \n    // 1. Erste 4 Zeichen ans Ende stellen\n    umgestellt = SUBSTRING(iban_clean, 4) + SUBSTRING(iban_clean, 0, 4)\n    \n    // 2. Buchstaben in Ziffern umwandeln\n    ziffern_str = ''\n    FOR EACH zeichen IN umgestellt:\n        IF IS_DIGIT(zeichen) THEN\n            ziffern_str = ziffern_str + zeichen\n        ELSE\n            ziffern_str = ziffern_str + STRING(ASCII(zeichen) - 55) // A -> 65-55 = 10\n        END IF\n    END FOR\n    \n    // 3. Modulo 97 berechnen\n    rest = BIG_INT_MOD(ziffern_str, 97)\n    RETURN (rest == 1)\nEND FUNCTION"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 10: Automobil-Zulieferer & Automotive Ethernet (VeloDrive SE)
    // ----------------------------------------------------------------------
    {
        id: "exam_10",
        title: "Prüfung 10: Automotive Ethernet, Sensorik & Industrielle Fertigung",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • VeloDrive Automotive SE",
        ausgangssituation: "Sie arbeiten in der Entwicklungs-IT der VeloDrive Automotive SE. Das Unternehmen fertigt LiDAR-, Radar- und Kamerasysteme für autonomes Fahren. Für die neue Fahrzeuggeneration wird das Bordnetz von klassischen Feldbussen auf hochperformantes Automotive Ethernet umgestellt und strenge funktionale Sicherheitsanforderungen nach ISO 26262 und TISAX umgesetzt.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: Automotive Ethernet, CAN-Bus & Break-Even-Kalkulation",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "10_1_a",
                        label: "a) Automotive Ethernet (100BASE-T1) vs. CAN-FD",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "AUTOMOTIVE NETWORKS / BROADR-REACH",
                        text: "Für Fahrerassistenzsysteme reicht die Bandbreite des CAN-Bus nicht mehr aus.\naa) Erläutern Sie zwei physikalische Besonderheiten von 100BASE-T1 (Single Twisted Pair Ethernet) im Kfz (4 Punkte).\nab) Nennen Sie die maximale Nutzdatenrate von CAN-FD im Vergleich zu 100BASE-T1 (3 Punkte).",
                        solution: "aa) Besonderheiten 100BASE-T1:\n1. Unshielded Single Twisted Pair (UTP): Verwendet nur ein einziges verdrilltes Kupferaderpaar für Vollduplex (spart Gewicht und Kosten im Kabelbaum).\n2. Spezielle PAM-3 Signalmodulation zur Einhaltung strenger automobiler EMV-Grenzwerte (Elektromagnetische Verträglichkeit) gegen Funkstörungen.\nab) Bandbreitenvergleich:\n• CAN-FD: Bis zu 5 bis maximal 8 Mbit/s (Nutzdatenfeld bis 64 Byte).\n• 100BASE-T1: 100 Mbit/s Vollduplex (faktor > 12 höher, ideal für unkomprimierte Sensordaten)."
                    },
                    {
                        id: "10_1_b",
                        label: "b) Funktionale Sicherheit nach ISO 26262 (ASIL)",
                        points: 6,
                        type: "table",
                        stencil: "SICHERHEITSNORMEN / ISO 26262 ASIL",
                        text: "Ordnen Sie die drei Risikoparameter zur Bestimmung des ASIL-Levels (Automotive Safety Integrity Level A bis D) ihrer Bedeutung zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["Schadensausmaß (Severity)", "Expositionswahrscheinlichkeit", "Beherrschbarkeit (Controllability)"],
                            headers: ["Parameter", "Kürzel", "Bedeutung im automobilen Umfeld"],
                            rows: [
                                ["Expositionswahrscheinlichkeit", "E (E0 bis E4)", "Häufigkeit der Fahrsituation, in der die Gefahr auftritt"],
                                ["Beherrschbarkeit (Controllability)", "C (C0 bis C3)", "Fähigkeit des Fahrers, die Gefahrensituation rechtzeitig abzuwenden"],
                                ["Schadensausmaß (Severity)", "S (S0 bis S3)", "Schwere möglicher Verletzungen für Insassen oder Passanten"]
                            ]
                        },
                        solution: "Severity (S) = Verletzungsschwere; Exposure (E) = Häufigkeit; Controllability (C) = Beherrschbarkeit durch Fahrer."
                    },
                    {
                        id: "10_1_c",
                        label: "c) Break-Even-Analyse (Gewinnschwelle) im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "KOSTENRECHNUNG / BREAK-EVEN-ANALYSE",
                        text: "Für eine neue SMD-Bestückungslinie für Radarsensoren fallen an:\n• Fixkosten pro Jahr: 480.000,00 EUR\n• Variable Kosten pro Sensor: 35,00 EUR\n• Geplanter Nettoverkaufspreis pro Sensor: 75,00 EUR\nBerechnen Sie im Rechengitter:\n1. Den Deckungsbeitrag pro Stück (db).\n2. Die Gewinnschwellenmenge (Break-Even-Point x_BEP in Stück).\n3. Den Mindest-Jahresumsatz an der Gewinnschwelle.",
                        solution: "Rechenweg:\n1. Deckungsbeitrag pro Stück:\n   db = p - kv = 75,00 € - 35,00 € = 40,00 EUR/Stück\n\n2. Break-Even-Menge (Gewinnschwelle):\n   x_BEP = K_fix / db = 480.000 € / 40,00 € = 12.000 Stück\n\n3. Break-Even-Umsatz:\n   U_BEP = x_BEP * p = 12.000 * 75,00 € = 900.000,00 EUR."
                    },
                    {
                        id: "10_1_d",
                        label: "d) Just-in-Time (JIT) vs. Just-in-Sequence (JIS)",
                        points: 4,
                        type: "lines",
                        linesCount: 3,
                        stencil: "FERTIGUNGSLOGISTIK / JIT & JIS",
                        text: "Erklären Sie den Unterschied zwischen Just-in-Time (JIT) und Just-in-Sequence (JIS) bei der Anlieferung von Baugruppen ans Montageband.",
                        solution: "• JIT: Bauteile werden genau zu dem Zeitpunkt ans Band geliefert, an dem sie montiert werden (reduziert Lagerkosten).\n• JIS: Bauteile werden nicht nur pünktlich geliefert, sondern zusätzlich exakt in der Reihenfolge (Sequenz) vorsortiert auf Trägern angeliefert, in der die Fahrzeuge das Band durchlaufen (z. B. fahrzeugspezifische Kabelsätze nach Wagenfarbe/Ausstattung)."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: Switch-Redundanz (RSTP), Latenz & TSN (Time-Sensitive Networking)",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "10_2_a",
                        label: "a) Time-Sensitive Networking (TSN / IEEE 802.1Qbv)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "TSN / ECHTZEIT-ETHERNET",
                        text: "Klassisches Ethernet ist nicht deterministisch.\naa) Erläutern Sie, warum 'Best-Effort'-Ethernet für sicherheitskritische Steuerungssignale (Drive-by-Wire) ungeeignet ist (3 Punkte).\nab) Beschreiben Sie das Funktionsprinzip des Time-Aware Shapers (TAS / IEEE 802.1Qbv) bei TSN (4 Punkte).",
                        solution: "aa) Unzulänglichkeit von Best-Effort:\nKlassisches Ethernet garantiert keine festen Zustellzeiten (Latenzen) und keinen jitterfreien Durchsatz. Bei hohem Netzwerktraffic können Frames in Switch-Puffern verworfen oder unvorhersehbar verzögert werden, was bei Lenk- oder Bremsbefehlen zu Unfällen führen würde.\nab) Funktionsprinzip Time-Aware Shaper (IEEE 802.1Qbv):\nDer Datenverkehr wird in zyklische Zeitschlitze (Time Slots) unterteilt. Sicherheitskritische Steuerframes erhalten exklusive Zeitschlitze, in denen alle anderen Puffer-Warteschlangen blockiert werden. Dadurch wird eine garantierte, deterministische Zustellung mit Latenzen im Mikrosekundenbereich gewährleistet."
                    },
                    {
                        id: "10_2_b",
                        label: "b) Rapid Spanning Tree Protocol (RSTP / IEEE 802.1w)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "NETZWERKTOPOLOGIE / RSTP REDUNDANZ",
                        text: "In der Fabrikhalle sind Switches in einer redundanten Ringtopologie verbunden.\naa) Welche Gefahr droht bei redundanten Verbindungen ohne STP/RSTP? (3 Punkte)\nab) Nennen Sie drei Port-Rollen von RSTP (4 Punkte).",
                        solution: "aa) Gefahr: Broadcast-Storm (Netzwerkschleife / Loop). Broadcast-Frames kreisen endlos im Ring, verstopfen die Bandbreite und führen zur Blockade aller Switches und zum Zusammenbruch des Netzes.\nab) RSTP Port-Rollen:\n1. Root Port (bester Pfad zur Root Bridge)\n2. Designated Port (weiterleitender Port für das jeweilige LAN-Segment)\n3. Alternate / Backup Port (blockierter Ersatzpfad, der bei Link-Ausfall sofort aktiv wird)."
                    },
                    {
                        id: "10_2_c",
                        label: "c) Bandbreitenberechnung für 4 LiDAR-Sensoren",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "DATENRATE / SENSORFUSION",
                        text: "Ein Fahrzeug besitzt 4 hochauflösende LiDAR-Sensoren. Jeder Sensor erzeugt 1,5 Millionen 3D-Messpunkte pro Sekunde. Jeder Punkt besteht aus X, Y, Z (je 32-Bit Float) und Reflexionswert (8-Bit Integer).\nBerechnen Sie den erforderlichen Netto-Datenstrom aller 4 Sensoren in Mbit/s (Megabit pro Sekunde).",
                        solution: "Berechnung:\n• Bytes pro Messpunkt: (3 * 4 Byte) + 1 Byte = 13 Byte = 104 Bit.\n• Datenrate 1 Sensor: 1.500.000 Punkte/s * 104 Bit = 156.000.000 Bit/s = 156 Mbit/s.\n• Gesamtdatenrate für 4 Sensoren: 4 * 156 Mbit/s = 624 Mbit/s."
                    },
                    {
                        id: "10_2_d",
                        label: "d) Glasfaser-Optik (POF - Polymer Optical Fiber) im Kfz",
                        points: 5,
                        type: "lines",
                        linesCount: 3,
                        stencil: "PHYSIKALISCHE MEDIEN / POF",
                        text: "Nennen Sie zwei entscheidende Vorteile von optischen Polymerfasern (POF) gegenüber Kupferleitungen im Automobilbau.",
                        solution: "1. Vollständige Unempfindlichkeit gegenüber elektromagnetischen Störfeldern (EMV-Festigkeit z. B. neben Hochvoltkabeln von Elektroantrieben).\n2. Deutliche Gewichtseinsparung und Vermeidung von Erdschleifen (Potentialtrennung)."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: TISAX-Zertifizierung, OTA-Updates & Cyber Security nach ISO 21434",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "10_3_a",
                        label: "a) TISAX (Trusted Information Security Assessment Exchange)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "AUTOMOTIVE COMPLIANCE / TISAX",
                        text: "Als Zulieferer muss VeloDrive ein TISAX-Label auf Assessment Level 3 (Sehr hoher Schutzbedarf) vorweisen.\naa) Auf welchem internationalen Sicherheitsstandard basiert der VDA-ISA-Fragenkatalog? (2 Punkte)\nab) Nennen Sie zwei typische Prüfbereiche bei TISAX (z. B. Prototypenschutz) (4 Punkte).",
                        solution: "aa) Basisnorm: ISO/IEC 27001 (Informationssicherheits-Managementsystem ISMS).\nab) Typische TISAX-Prüfbereiche:\n1. Prototypenschutz (physischer und organisatorischer Schutz vor Wirtschaftsspionage bei ungetarnten Erprobungsträgern und CAD-Modellen).\n2. Anbindung Dritter / Lieferantenmanagement und Datenschutz im Entwicklungsnetz."
                    },
                    {
                        id: "10_3_b",
                        label: "b) Over-the-Air (OTA) Firmware-Updates nach UNECE R156",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "SOFTWARE-MANAGEMENT / UNECE R156",
                        text: "Steuergeräte im Fahrzeug erhalten Sicherheitsupdates 'Over-the-Air'.\naa) Nennen Sie zwei kryptografische Mechanismen, mit denen die Integrität und Authentizität eines Firmware-Pakets vor dem Flashen geprüft wird (4 Punkte).\nab) Erläutern Sie das 'A/B-Partitionierungs'-Konzept (Dual-Boot) bei Steuergeräten (3 Punkte).",
                        solution: "aa) Schutzmechanismen:\n1. Asymmetrische digitale Signatur (z. B. ECDSA mit sicher im Hardware Security Module / HSM abgelegtem Public Key).\n2. Kryptografischer Hashwert (z. B. SHA-256 / SHA-512) zur Integritätsprüfung.\nab) A/B-Partitionierung:\nDas Steuergerät besitzt zwei getrennte Speicherbereiche. Während Partition A das laufende System ausführt, wird das Update im Hintergrund auf Partition B installiert und verifiziert. Schlägt das Update fehl, bleibt Partition A unverändert aktiv (automatischer Rollback, verhindert 'bricking')."
                    },
                    {
                        id: "10_3_c",
                        label: "c) Bedrohungsanalyse (TARA) nach ISO/SAE 21434",
                        points: 6,
                        type: "table",
                        stencil: "CYBERSECURITY / ISO 21434 TARA",
                        text: "Ordnen Sie die Bedrohungsszenarien der passenden Schutzmaßnahme im Fahrzeug zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["Unberechtigter Zugriff über OBD-II Diagnosebuchse", "Replay-Attacke auf Funkschlüssel (Keyless Go)", "Einschleusen gefälschter Sensordaten ins Bordnetz"],
                            headers: ["Angriffsvektor", "Mögliche Auswirkung", "Gegenmaßnahme"],
                            rows: [
                                ["Replay-Attacke auf Funkschlüssel (Keyless Go)", "Unbefugtes Entriegeln und Starten des Fahrzeugs", "Rolling Codes und Ultra-Wideband (UWB) Time-of-Flight Distanzmessung"],
                                ["Einschleusen gefälschter Sensordaten ins Bordnetz", "Fehlauslösung von Notbrems- oder Lenkassistenten", "SecOC (Secure Onboard Communication / CMAC Authentifizierung)"],
                                ["Unberechtigter Zugriff über OBD-II Diagnosebuchse", "Einspielen modifizierter Steuergerätesoftware", "Secure Gateway (SGW) mit Challenge-Response-Authentifizierung"]
                            ]
                        },
                        solution: "OBD-II -> Secure Gateway; Keyless Go Replay -> UWB ToF / Rolling Code; Gefälschte Sensordaten -> SecOC mit CMAC."
                    },
                    {
                        id: "10_3_d",
                        label: "d) Hardware Security Module (HSM) im Kfz-Mikrocontroller",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "HARDWARE-SICHERHEIT / HSM & SECURE BOOT",
                        text: "Moderne Automotive-Mikrocontroller verfügen über ein isoliertes Hardware Security Module (HSM). Beschreiben Sie die Rolle des HSM beim 'Secure Boot' des Motorsteuergeräts.",
                        solution: "Das HSM besitzt einen eigenen geschützten Prozessorkern und manipulationssicheren Schlüsselspeicher. Beim Einschalten des Steuergeräts startet zuerst das HSM und überprüft die digitale Signatur des Bootloaders und der Firmware, bevor der Hauptprozessor freigegeben wird. Wurde der Code manipuliert, verweigert das Steuergerät den Start."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Telemetrie-Datenbank (3NF), SQL & Notbrems-Algorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "10_4_a",
                        label: "a) Relationales Telemetrie-Datenbankschema (3NF)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKMODELLIERUNG / VEHICLE TELEMETRY",
                        text: "Modellieren Sie die Kerntabellen für ein Entwicklungs-Telemetriesystem in 3NF:\nEin Erprobungsfahrzeug hat eine FIN (Fahrzeug-Identifizierungsnummer), Modellbezeichnung und Softwarestand. In jedem Fahrzeug sind mehrere Steuergeräte (ECU) verbaut. Während Testfahrten werden Diagnosefehlercodes (DTC nach ISO 15031) mit Zeitstempel, Umgebungsdaten (Geschwindigkeit, Außentemperatur) und Schweregrad protokolliert.\nGeben Sie das Schema mit PK und FK an.",
                        solution: "• tbl_fahrzeug (FIN [PK], Modell, Baujahr, Software_Gesamtstand, Testteam)\n• tbl_ecu (ECU_ID [PK], FIN [FK], Bezeichner, Hardware_Version, Firmware_Version, Bus_Adresse)\n• tbl_dtc_katalog (DTC_Code [PK], Beschreibung, ISO_Schweregrad, Standard_Massnahme)\n• tbl_fehlerprotokoll (Protokoll_ID [PK], ECU_ID [FK], DTC_Code [FK], Zeitstempel, Geschwindigkeit_kmh, Aussentemperatur_C, Kilometerstand)"
                    },
                    {
                        id: "10_4_b",
                        label: "b) SQL-Auswertungen für Erprobungsfahrten",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / TESTDATEN-ANALYSE",
                        text: "Formulieren Sie die SQL-Statements:\nba) Ermitteln Sie für jedes Fahrzeug (FIN, Modell) die Gesamtzahl aufgetretener Fehler (DTCs), gruppiert nach FIN und absteigend sortiert (5 Punkte).\nbb) Finden Sie alle Fehlerprotokolle mit kritischem Schweregrad ('CRITICAL'), die bei einer Außentemperatur von unter 0 °C (`Aussentemperatur_C < 0`) registriert wurden (3 Punkte).",
                        solution: "ba)\nSELECT f.FIN, f.Modell, COUNT(p.Protokoll_ID) AS Anzahl_Fehler\nFROM tbl_fahrzeug f\nJOIN tbl_ecu e ON f.FIN = e.FIN\nJOIN tbl_fehlerprotokoll p ON e.ECU_ID = p.ECU_ID\nGROUP BY f.FIN, f.Modell\nORDER BY Anzahl_Fehler DESC;\n\nbb)\nSELECT p.Protokoll_ID, p.Zeitstempel, p.DTC_Code, d.Beschreibung, p.Aussentemperatur_C, p.Geschwindigkeit_kmh\nFROM tbl_fehlerprotokoll p\nJOIN tbl_dtc_katalog d ON p.DTC_Code = d.DTC_Code\nWHERE d.ISO_Schweregrad = 'CRITICAL' AND p.Aussentemperatur_C < 0\nORDER BY p.Zeitstempel DESC;"
                    },
                    {
                        id: "10_4_c",
                        label: "c) Algorithmus: Notbremsassistent (Autonomous Emergency Braking - AEB)",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "ALGORITHMEN / NOTBREMSASSISTENT (AEB)",
                        text: "Entwickeln Sie einen Algorithmus zur Ansteuerung des Notbremssystems:\n• Parameter: `distanz_m` (float, Abstand zum Hindernis in Metern), `v_rel_kmh` (float, relative Annäherungsgeschwindigkeit in km/h), `fahrer_bremst` (bool).\n• Time-to-Collision (TTC in Sekunden): Formel TTC = distanz_m / (v_rel_kmh / 3.6).\n• Wenn TTC > 2.5 Sekunden: Status 'FREIE_FAHRT' (keine Aktion).\n• Wenn TTC <= 2.5 und TTC > 1.2: Status 'WARNUNG' (akustisches und optisches Warnsignal im Head-Up Display).\n• Wenn TTC <= 1.2: Wenn `fahrer_bremst == true`, Bremskraftverstärkung 'MAX_BOOST', andernfalls autonome Vollbremsung 'NOTBREMSUNG_AKTIV'.\nGeben Sie den Pseudocode an.",
                        solution: "FUNCTION berechne_notbremsung(distanz_m, v_rel_kmh, fahrer_bremst):\n    IF v_rel_kmh <= 0 THEN\n        RETURN 'FREIE_FAHRT' // Keine Annäherung\n    END IF\n    \n    v_rel_ms = v_rel_kmh / 3.6\n    ttc = distanz_m / v_rel_ms\n    \n    IF ttc > 2.5 THEN\n        RETURN 'FREIE_FAHRT'\n    ELSE IF ttc > 1.2 THEN\n        RETURN 'WARNUNG_AKUSTISCH_OPTISCH'\n    ELSE\n        IF fahrer_bremst == TRUE THEN\n            RETURN 'BREMSKRAFT_MAX_BOOST'\n        ELSE\n            RETURN 'NOTBREMSUNG_AUTONOM_AKTIV'\n        END IF\n    END IF\nEND FUNCTION"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 11: Bildungsträger & E-Learning Plattform (EduCampus gGmbH)
    // ----------------------------------------------------------------------
    {
        id: "exam_11",
        title: "Prüfung 11: E-Learning, Großraum-WLAN & Bildungsrecht",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • EduCampus Akademie gGmbH",
        ausgangssituation: "Sie unterstützen die IT der EduCampus Akademie gGmbH. Der Bildungsträger betreibt Lernplattformen (LMS), Campus-Netzwerke mit Großraum-WLAN und digitale Prüfungssysteme für über 5.000 Auszubildende und Studierende. Aktuell steht der Ausbau auf Wi-Fi 6, barrierefreie Plattformen und datenschutzkonforme Prüfungssoftware an.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: LMS-Systeme, Urheberrecht im Unterricht & Deckungsbeitragsrechnung",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "11_1_a",
                        label: "a) LMS-Standards: SCORM vs. xAPI (Tin Can)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "E-LEARNING / SCORM & XAPI STANDARDS",
                        text: "Für das LMS sollen interaktive Lernmodule angebunden werden.\naa) Erläutern Sie die Kernaufgabe des SCORM-Standards (3 Punkte).\nab) Nennen Sie zwei Vorteile des moderneren xAPI-Standards gegenüber klassischem SCORM (4 Punkte).",
                        solution: "aa) SCORM-Standard:\nSCORM definiert standardisierte Schnittstellen für die Kommunikation zwischen Web-Lerninhalten und dem LMS, sodass Kursbausteine herstellerunabhängig importiert, gestartet und Bearbeitungsstatus/Testergebnisse rückgemeldet werden können.\nab) Vorteile xAPI:\n1. Mobiles und Offline-Lernen: Lernaktivitäten können außerhalb des LMS (z. B. native Apps, Simulationen, Virtual Reality) erfasst und nachträglich über ein Learning Record Store (LRS) synchronisiert werden.\n2. Granulare Datenverfolgung über einfache Activity-Statements ('Actor - Verb - Object', z. B. 'Max hat Video an Minute 04:12 pausiert')."
                    },
                    {
                        id: "11_1_b",
                        label: "b) Urheberrecht in Bildung & Lehre (§ 60a UrhG)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "RECHT / URHEBERRECHTLICHE SCHRANKEN",
                        text: "Ein Dozent möchte ein urheberrechtlich geschütztes Fachbuch digital im LMS für seine Kursteilnehmer bereitstellen.\nErläutern Sie die Schrankenregelung des § 60a UrhG (Zulässiger Umfang in Prozent, Empfängerkreis).",
                        solution: "Bestimmungen nach § 60a UrhG:\n1. Zulässiger Umfang: Bis zu 15 % eines veröffentlichten Werkes dürfen digital zur Veranschaulichung im Unterricht zur Verfügung gestellt werden (vollständige Werke sind nur bei vergriffenen Werken oder kleinen Werken wie Abbildungen/Gedichten zulässig).\n2. Empfängerkreis: Der Zugriff muss passwortgeschützt und strikt auf die Teilnehmer der jeweiligen Lehrveranstaltung beschränkt sein."
                    },
                    {
                        id: "11_1_c",
                        label: "c) Deckungsbeitragsrechnung für IT-Zertifikatskurse im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "KOSTENRECHNUNG / KURS-KALKULATION",
                        text: "Für einen 5-tägigen Vorbereitungskurs zur IT-Zertifizierung kalkuliert die Akademie:\n• Fixe Raum- und Dozentenhonorarkosten pro Kurs: 3.600,00 EUR\n• Variable Kosten pro Teilnehmer (Prüfungsvoucher, Lehrmaterial): 300,00 EUR\n• Teilnahmegebühr pro Person: 750,00 EUR\nBerechnen Sie im Rechengitter:\n1. Den Stückdeckungsbeitrag pro Teilnehmer.\n2. Die Mindestteilnehmerzahl zur Kostendeckung (Break-Even).\n3. Den Gewinn bei einer vollen Gruppe von 16 Teilnehmern.",
                        solution: "Berechnung im Rechengitter:\n1. Deckungsbeitrag pro Teilnehmer:\n   db = 750,00 € - 300,00 € = 450,00 EUR\n\n2. Mindestteilnehmerzahl (Break-Even):\n   x_BEP = K_fix / db = 3.600,00 € / 450,00 € = 8 Teilnehmer\n\n3. Gewinn bei 16 Teilnehmern:\n   Gesamterlöse = 16 * 750,00 € = 12.000,00 €\n   Gesamtkosten = 3.600,00 € + (16 * 300,00 €) = 3.600 € + 4.800 € = 8.400,00 €\n   Gewinn = 12.000,00 € - 8.400,00 € = 3.600,00 EUR\n   (Alternativ: (16 - 8) * 450 € = 3.600,00 EUR)."
                    },
                    {
                        id: "11_1_d",
                        label: "d) Gemeinnützigkeit & Umsatzsteuerfreiheit (§ 4 Nr. 21 UStG)",
                        points: 4,
                        type: "lines",
                        linesCount: 3,
                        stencil: "STEUERRECHT / UMSATZSTEUER BEI BILDUNG",
                        text: "Erläutern Sie, unter welcher Voraussetzung Bildungsleistungen einer Akademie von der 19 % Umsatzsteuer nach § 4 Nr. 21 UStG befreit sind.",
                        solution: "Voraussetzung: Vorliegen einer behördlichen Bescheinigung der zuständigen Landesbehörde, dass die Bildungsmaßnahme ordnungsgemäß auf einen Beruf oder eine vor einer juristischen Person des öffentlichen Rechts (z. B. zuständige Kammer) abzulegende Prüfung vorbereitet."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: Großraum-WLAN (Wi-Fi 6), DHCP-Lease & Barrierefreiheit (BITV)",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "11_2_a",
                        label: "a) Wi-Fi 6 (IEEE 802.11ax) im Hörsaal-Einsatz",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "WLAN-TECHNIK / 802.11AX HIGH DENSITY",
                        text: "In einem Hörsaal mit 400 Studierenden bricht das bisherige WLAN regelmäßig ein.\naa) Erläutern Sie, wie OFDMA (Orthogonal Frequency-Division Multiple Access) bei Wi-Fi 6 die Latenz bei vielen gleichzeitigen Geräten verringert (4 Punkte).\nab) Nennen Sie den Vorteil von BSS Coloring in dichten WLAN-Umgebungen (3 Punkte).",
                        solution: "aa) OFDMA-Prinzip:\nOFDMA teilt einen Funkkanal in viele kleine Unterträger (Resource Units / RUs) auf. Dadurch kann ein Access Point in einem einzigen Übertragungszyklus zeitgleich mit dutzenden Endgeräten Daten austauschen, anstatt jedes Gerät nacheinander abzuarbeiten. Das reduziert Latenz und Kollisionen bei hoher Client-Dichte drastisch.\nab) BSS Coloring:\nJedem WLAN-Netzwerk (BSS) wird eine Ziffer (Farbe) zugewiesen. Empfängt ein Client ein Signal auf demselben Kanal mit anderer Farbe, erkennt er es als fremdes Nachbarnetz und kann zeitgleich senden (Spatial Reuse), was die Gesamtkapazität vervielfacht."
                    },
                    {
                        id: "11_2_b",
                        label: "b) DHCP-Scope Dimensionierung & Lease Time Optimierung",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "NETZWERKDIENSTE / DHCP-LEASES",
                        text: "Für das Campus-WLAN steht das Subnetz 172.20.0.0/21 zur Verfügung.\naa) Wie viele nutzbare Host-IP-Adressen bietet ein /21 Subnetz? (3 Punkte)\nab) Warum sollte die DHCP Lease Time in einem Campus-Gastnetzwerk auf z. B. 2 Stunden statt 7 Tage eingestellt werden? (3 Punkte).",
                        solution: "aa) Adressanzahl /21:\nHostbits = 32 - 21 = 11 Bits. Gesamte Adressen = 2^11 = 2.048 Adressen.\nNutzbare Host-IPs = 2.048 - 2 (Netz-ID und Broadcast) = 2.046 nutzbare IP-Adressen.\nab) Lease-Time Optimierung:\nBei hoher Fluktuation (Studierende kommen, bleiben 90 Minuten und gehen) blockieren verlassene Geräte bei langer Lease Time tagelang IP-Adressen im DHCP-Pool. Eine kurze Lease Time (z. B. 2 Stunden) gibt verwaiste IPs schnell wieder für neue Besucher frei und verhindert Adress-Erschöpfung (DHCP Pool Depletion)."
                    },
                    {
                        id: "11_2_c",
                        label: "c) Barrierefreiheit digitaler Lerninhalte (BITV 2.0 / WCAG 2.1)",
                        points: 6,
                        type: "table",
                        stencil: "ACCESSIBILITY / WCAG & BITV KRITERIEN",
                        text: "Ordnen Sie die Barrierefreiheitsanforderungen dem passenden WCAG-Prinzip (Wahrnehmbar, Bedienbar, Verständlich, Robust) zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 1,
                            staticCols: [0, 2],
                            options: ["Wahrnehmbar", "Bedienbar", "Verständlich", "Robust"],
                            headers: ["Anforderung an das E-Learning Portal", "WCAG-Prinzip", "Konkrete technische Umsetzung"],
                            rows: [
                                ["Komplette Navigation ohne Maus nur per Tabulatortaste", "Bedienbar", "Sichtbare Tastatur-Fokusindikatoren (`:focus`)"],
                                ["Sauberes semantisches HTML für Screenreader & Braillezeilen", "Robust", "WAI-ARIA Rollen und standardkonforme HTML5-Tags"],
                                ["Grafiken und Diagramme mit Textalternativen versehen", "Wahrnehmbar", "HTML `alt`-Attribute für Screenreader"],
                                ["Gleichbleibende Menüstruktur und verständliche Fehlermeldungen", "Verständlich", "Konsistente Bezeichner und klare Fehlertexte"]
                            ]
                        },
                        solution: "Grafiken/Alt -> Wahrnehmbar; Tastatursteuerung -> Bedienbar; Menüstruktur -> Verständlich; Semantisches HTML -> Robust."
                    },
                    {
                        id: "11_2_d",
                        label: "d) 2,4 GHz vs. 5 GHz Frequenzband-Verteilung",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "FUNKTECHNIK / SPEKTRUMSANALYSE",
                        text: "Vergleichen Sie das 2,4 GHz und das 5 GHz Frequenzband hinsichtlich Dämpfung durch Wände, Kanalanzahl und Anfälligkeit für Fremdstörer (z. B. Mikrowellen, Bluetooth).",
                        solution: "• 2,4 GHz: Höhere Reichweite und bessere Wanddurchdringung, aber nur 3 überlappungsfreie Kanäle (1, 6, 11) und starke Störungen durch Bluetooth/Mikrowellen.\n• 5 GHz: Geringere Reichweite durch höhere Dämpfung, dafür bis zu 19 überlappungsfreie Kanäle, höhere Kanalbandbreiten (40/80/160 MHz) und kaum Störungen durch Haushaltsgeräte."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: DSGVO bei Online-Klausuren & Auftragsverarbeitung",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "11_3_a",
                        label: "a) Online-Proctoring (Videoüberwachung bei Klausuren) & DSGVO",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "DATENSCHUTZ / E-PRÜFUNGEN & ART. 6 DSGVO",
                        text: "Die Akademie plant automatisiertes 'Online-Proctoring' (KI-gestützte Webcam-Überwachung der Blickrichtung und Raumscans der Wohnung während einer Online-Prüfung).\naa) Erläutern Sie, warum eine solche Maßnahme datenschutzrechtlich hochgradig bedenklich ist (Verhältnismäßigkeit / Art. 5 DSGVO) (4 Punkte).\nab) Welche mildere, datenschutzfreundlichere Prüfungsform (Privacy by Design) könnte alternativ gewählt werden? (3 Punkte).",
                        solution: "aa) Datenschutzrechtliche Bedenken:\nEingriff in das Grundrecht auf informationelle Selbstbestimmung und die Unverletzlichkeit der Wohnung (Art. 13 GG). Die dauerhafte biometrische Verhaltensüberwachung und Aufzeichnung des Privatraums verstößt gegen das Prinzip der Datenminimierung und Verhältnismäßigkeit, insbesondere wenn der Prüfling mangels zumutbarer Alternativen keine echte Freiwilligkeit bei der Einwilligung hat.\nab) Mildere Alternativen:\n• Open-Book-Klausuren (Transferaufgaben statt reiner Wissensabfrage, bei denen Hilfsmittel erlaubt sind).\n• Präsenzprüfungen in autorisierten Testzentren oder mündliche Fachgespräche per Video."
                    },
                    {
                        id: "11_3_b",
                        label: "b) Auftragsverarbeitungsvertrag (AVV nach Art. 28 DSGVO)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "COMPLIANCE / ART. 28 DSGVO AVV",
                        text: "Für das LMS wird ein Cloud-Hosting-Dienstleister in Frankfurt beauftragt. Nennen Sie drei zwingende Mindestinhalte, die nach Art. 28 Abs. 3 DSGVO im Auftragsverarbeitungsvertrag geregelt sein müssen.",
                        solution: "Zwingende Mindestinhalte nach Art. 28 Abs. 3 DSGVO:\n1. Gegenstand, Dauer, Art und Zweck der Datenverarbeitung sowie Kategorien betroffener Personen.\n2. Strenge Weisungsgebundenheit des Auftragsverarbeiters (Verarbeitung nur auf dokumentierte Weisung des Verantwortlichen).\n3. Verpflichtung zur Gewährleistung technischer und organisatorischer Maßnahmen (TOMs) nach Art. 32 DSGVO.\n(Weitere: Unterstützung bei Betroffenenrechten, Rückgabe/Löschung nach Vertragsende, Duldung von Audits)."
                    },
                    {
                        id: "11_3_c",
                        label: "c) Datenübermittlung in Drittstaaten (Schrems II / EU-US Data Privacy Framework)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "INTERNATIONALER DATENTRANSFER / DRITTSTAATEN",
                        text: "Ein Videokonferenzdienst hat Server in den USA. Erläutern Sie, unter welchen Bedingungen personenbezogene Daten von Dozenten und Schülern gemäß Art. 45 ff. DSGVO legal in die USA übermittelt werden dürfen.",
                        solution: "Bedingungen für legalen US-Datentransfer:\n1. Angemessenheitsbeschluss der EU-Kommission: Das US-Unternehmen muss nach dem 'EU-U.S. Data Privacy Framework' (DPF) zertifiziert sein.\n2. Fehlt die DPF-Zertifizierung: Abschluss von EU-Standardvertragsklauseln (SCCs) inklusive eines 'Transfer Impact Assessments' (TIA) und zusätzlicher technischer Garantien (z. B. Ende-zu-Ende-Verschlüsselung mit Schlüsseln nur in der EU)."
                    },
                    {
                        id: "11_3_d",
                        label: "d) Löschkonzept nach Art. 17 DSGVO",
                        points: 6,
                        type: "table",
                        stencil: "DATENMANAGEMENT / AUFBEWAHRUNGSFRISTEN",
                        text: "Ordnen Sie den Datenkategorien die passende rechtliche Aufbewahrungs- bzw. Löschfrist zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 1,
                            staticCols: [0, 2],
                            options: ["Bis zu 50 Jahre", "2 Jahre nach Abschluss", "Max. 6 Monate nach Absage"],
                            headers: ["Datenkategorie", "Gesetzliche Frist", "Rechtsgrundlage / Begründung"],
                            rows: [
                                ["Bewerbungsunterlagen abgelehnter Dozenten", "Max. 6 Monate nach Absage", "Schutz vor Klagen nach dem Allgemeinen Gleichbehandlungsgesetz (AGG)"],
                                ["Abschlusszeugnisse und Prüfungsbescheide", "Bis zu 50 Jahre", "Nachweisbarkeit beruflicher Qualifikationen im Renten-/Berufsleben"],
                                ["Bewertete Klausurarbeiten von Absolventen", "2 Jahre nach Abschluss", "Anfechtungs- und Klagefristen im Prüfungsrecht"]
                            ]
                        },
                        solution: "Zeugnisse -> bis 50 Jahre; Klausuren -> 2 Jahre (Klagefrist); Bewerberdaten -> max. 6 Monate (AGG)."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Kurs- und Notendatenbank (3NF), SQL & Notenberechnungs-Algorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "11_4_a",
                        label: "a) Relationales Campus-Datenbankschema (3NF)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKMODELLIERUNG / CAMPUS-LMS",
                        text: "Modellieren Sie die Datenbank eines Prüfungssystems in 3NF:\nEin Teilnehmer hat Stammdaten. Ein Kurs wird von einem Dozenten geleitet und hat ein Start-/Enddatum. Ein Teilnehmer kann in mehreren Kursen eingeschrieben sein. In jedem Kurs werden mehrere Prüfungsleistungen (Klausur, Projektarbeit) abgelegt, für die jeweils Punkte (0-100) vergeben werden.\nGeben Sie das Schema mit PK und FK an.",
                        solution: "• tbl_dozent (Dozenten_ID [PK], Nachname, Vorname, Mail, Fachgebiet)\n• tbl_kurs (Kurs_ID [PK], Dozenten_ID [FK], Kursname, Startdatum, Enddatum, Max_Plaetze)\n• tbl_teilnehmer (Teilnehmer_ID [PK], Nachname, Vorname, Geburtsdatum, Matrikelnummer, Mail)\n• tbl_einschreibung (Einschreib_ID [PK], Kurs_ID [FK], Teilnehmer_ID [FK], Status, Anmeldedatum)\n• tbl_pruefungsleistung (Leistungs_ID [PK], Einschreib_ID [FK], Leistungs_Typ, Erreichte_Punkte, Bewertungsdatum)"
                    },
                    {
                        id: "11_4_b",
                        label: "b) SQL: Kursstatistiken & Notenspiegel",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / NOTENSTATISTIK",
                        text: "Formulieren Sie die SQL-Statements:\nba) Berechnen Sie für jeden Kurs (Kurs_ID, Kursname) den Notendurchschnitt (durchschnittlich erreichte Punkte) und die Anzahl abgelegter Prüfungen (`COUNT`), sortiert nach Durchschnitt absteigend (5 Punkte).\nbb) Ermitteln Sie alle Teilnehmer, die in einer Abschlussklausur weniger als 50 Punkte erreicht haben ('Nicht bestanden') (3 Punkte).",
                        solution: "ba)\nSELECT k.Kurs_ID, k.Kursname, \n       ROUND(AVG(p.Erreichte_Punkte), 1) AS Durchschnitt_Punkte,\n       COUNT(p.Leistungs_ID) AS Anzahl_Pruefungen\nFROM tbl_kurs k\nJOIN tbl_einschreibung e ON k.Kurs_ID = e.Kurs_ID\nJOIN tbl_pruefungsleistung p ON e.Einschreib_ID = p.Einschreib_ID\nGROUP BY k.Kurs_ID, k.Kursname\nORDER BY Durchschnitt_Punkte DESC;\n\nbb)\nSELECT t.Matrikelnummer, t.Nachname, t.Vorname, k.Kursname, p.Erreichte_Punkte\nFROM tbl_teilnehmer t\nJOIN tbl_einschreibung e ON t.Teilnehmer_ID = e.Teilnehmer_ID\nJOIN tbl_kurs k ON e.Kurs_ID = k.Kurs_ID\nJOIN tbl_pruefungsleistung p ON e.Einschreib_ID = p.Einschreib_ID\nWHERE p.Erreichte_Punkte < 50\nORDER BY p.Erreichte_Punkte ASC;"
                    },
                    {
                        id: "11_4_c",
                        label: "c) Algorithmus: Notenberechnung nach 100-Punkte-Schlüssel (Kammer-Standard)",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "ALGORITHMEN / 100-PUNKTE-NOTENSCHLÜSSEL",
                        text: "Entwerfen Sie eine Funktion `berechne_note(punkte)` in Pseudocode, die aus einer erreichten Punktzahl (0,0 bis 100,0) die Note (1 bis 6) und den Text nach dem bundesweiten 100-Punkte-Schlüssel ermittelt:\n• Punkte >= 92: Note 1 ('sehr gut')\n• Punkte >= 81 und < 92: Note 2 ('gut')\n• Punkte >= 67 und < 81: Note 3 ('befriedigend')\n• Punkte >= 50 und < 67: Note 4 ('ausreichend' - bestanden)\n• Punkte >= 30 und < 50: Note 5 ('mangelhaft' - nicht bestanden)\n• Punkte < 30: Note 6 ('ungenügend' - nicht bestanden)\nPrüfen Sie Eingaben auf Gültigkeit (< 0 oder > 100 -> Fehler).",
                        solution: "FUNCTION berechne_note(punkte):\n    IF punkte < 0 OR punkte > 100 THEN\n        RETURN 'FEHLER: Ungültige Punktzahl'\n    END IF\n    \n    // Kaufmännische Rundung auf ganze Punkte\n    gerundete_punkte = ROUND(punkte)\n    \n    IF gerundete_punkte >= 92 THEN\n        RETURN 'Note 1 (sehr gut) - Bestanden'\n    ELSE IF gerundete_punkte >= 81 THEN\n        RETURN 'Note 2 (gut) - Bestanden'\n    ELSE IF gerundete_punkte >= 67 THEN\n        RETURN 'Note 3 (befriedigend) - Bestanden'\n    ELSE IF gerundete_punkte >= 50 THEN\n        RETURN 'Note 4 (ausreichend) - Bestanden'\n    ELSE IF gerundete_punkte >= 30 THEN\n        RETURN 'Note 5 (mangelhaft) - Nicht bestanden'\n    ELSE\n        RETURN 'Note 6 (ungenügend) - Nicht bestanden'\n    END IF\nEND FUNCTION"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 12: Energieversorger & Smart Grid (GreenEnergy Stadtwerke AG)
    // ----------------------------------------------------------------------
    {
        id: "exam_12",
        title: "Prüfung 12: Smart Grid, LoRaWAN & Kritische Energie-Infrastruktur",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • GreenEnergy Stadtwerke AG",
        ausgangssituation: "Sie arbeiten in der Leittechnik-IT der GreenEnergy Stadtwerke AG. Das Versorgungsunternehmen modernisiert seine Strom- und Wassernetze zu einem intelligenten Smart Grid. Über Smart Meter Gateways (BSI TR-03109) und LoRaWAN-Sensornetze werden Erzeuger- und Verbrauchsdaten in Echtzeit erfasst, Netze gesteuert und höchste KRITIS-Schutzstandards erfüllt.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: Smart Meter Gateway (BSI TR-03109) & Wirtschaftlichkeitsrechnung",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "12_1_a",
                        label: "a) Smart Meter Gateway (SMGW) Netzarchitektur",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "KRITIS / SMART METER DREI-NETZE-MODELL",
                        text: "Das SMGW trennt nach BSI TR-03109 strikt drei Netzwerkbereiche.\naa) Erläutern Sie die Aufgaben des LMN (Local Metrological Network) und des WAN (Wide Area Network) (4 Punkte).\nab) Nennen Sie die Funktion der CLS-Schnittstelle (Controllable Local System) im HAN (3 Punkte).",
                        solution: "aa) Netzwerktrennung:\n• LMN (Local Metrological Network): Sichere Verbindung zu den physikalischen Strom-, Gas- oder Wasserzählern im Haus (drahtgebunden via M-Bus oder Funk-M-Bus mit AES-128).\n• WAN (Wide Area Network): Verschlüsselter TLS-Tunnel über LTE oder Breitband-Powerline (BPL) zum Smart-Meter-Gateway-Administrator (GWA) im Rechenzentrum des Versorgers.\nab) CLS-Schnittstelle im HAN:\nErmöglicht das sichere Schalten und Steuern von steuerbaren Verbrauchseinrichtungen (z. B. Drosselung von Wärmepumpen oder Wallboxen nach § 14a EnWG) sowie Erzeugern (Solarwechselrichter) bei drohender Netzüberlastung."
                    },
                    {
                        id: "12_1_b",
                        label: "b) Messstellenbetriebsgesetz (MsbG) Pflichteinbau",
                        points: 6,
                        type: "table",
                        stencil: "ENERGIEWIRTSCHAFTSRECHT / MSBG PFLICHTROLLOUT",
                        text: "Entscheiden Sie für die drei Kundenprofile, ob ein gesetzlicher Pflichteinbau eines intelligenten Messsystems (iMSys) nach dem MsbG vorliegt.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 1,
                            staticCols: [0, 2],
                            options: ["Ja (Pflicht)", "Nein (Optional)"],
                            headers: ["Kundenprofil", "Pflichteinbau iMSys? (Ja/Nein)", "Begründung nach MsbG"],
                            rows: [
                                ["Einfamilienhaus mit PV-Anlage mit 12 kWp Nennleistung", "Ja (Pflicht)", "Erzeugungsanlage hat mehr als 7 kW installierte Leistung"],
                                ["Single-Wohnung mit Jahresverbrauch von 1.800 kWh", "Nein (Optional)", "Verbrauch unter 6.000 kWh (nur moderne Messeinrichtung mME vorgeschrieben)"],
                                ["Privathaushalt mit Jahresverbrauch von 8.500 kWh", "Ja (Pflicht)", "Jahresstromverbrauch liegt über dem Schwellenwert von 6.000 kWh"]
                            ]
                        },
                        solution: "8.500 kWh -> Ja (>6.000 kWh); 12 kWp PV -> Ja (>7 kW); 1.800 kWh -> Nein (unter Schwellenwert)."
                    },
                    {
                        id: "12_1_c",
                        label: "c) Stromgestehungskosten & ROI-Kalkulation im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "INVESTITIONSRECHNUNG / PV-PARK AMORTISATION",
                        text: "Für eine Freiflächen-Photovoltaikanlage der Stadtwerke:\n• Anschaffungskosten: 240.000,00 EUR\n• Jährliche Stromerzeugung: 300.000 kWh\n• Einspeisevergütung / Markterlös: 0,08 EUR pro kWh\n• Jährliche Betriebskosten (Wartung, Pacht): 4.000,00 EUR\nBerechnen Sie im Rechengitter:\n1. Den jährlichen Bruttoerlös.\n2. Den jährlichen Netto-Rückfluss (Cashflow).\n3. Die statische Amortisationsdauer in Jahren.",
                        solution: "Berechnung im Rechengitter:\n1. Jährlicher Erlös:\n   300.000 kWh * 0,08 €/kWh = 24.000,00 EUR pro Jahr\n\n2. Jährlicher Netto-Rückfluss (Cashflow):\n   Cashflow = 24.000,00 € - 4.000,00 € = 20.000,00 EUR pro Jahr\n\n3. Statische Amortisationszeit:\n   Amortisationsdauer = Investitionskosten / Cashflow\n   Amortisationsdauer = 240.000,00 € / 20.000,00 € = 12,0 Jahre."
                    },
                    {
                        id: "12_1_d",
                        label: "d) § 14a EnWG Steuerung steuerbarer Verbraucher",
                        points: 4,
                        type: "lines",
                        linesCount: 3,
                        stencil: "ENERGIEWIRTSCHAFT / NETZENGPASS-MANAGEMENT",
                        text: "Erläutern Sie das Ziel der Neuregelung des § 14a EnWG für Betreiber von privaten Wallboxen und Wärmepumpen bei drohender Netzüberlastung.",
                        solution: "Der Netzbetreiber darf bei akuter lokaler Überlastung des Stromnetzes die Leistungsaufnahme von steuerbaren Großverbrauchern (Wallbox, Wärmepumpe) vorübergehend auf einen Mindestwert (in der Regel 4,2 kW) dimmen ('Spitzenglättung'), anstatt den Anschluss komplett abzuschalten. Als Gegenleistung erhält der Verbraucher reduzierte Netzentgelte."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: LoRaWAN-Sensorik, Duty Cycle & SCADA-Netzwerke",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "12_2_a",
                        label: "a) LoRaWAN vs. Narrowband-IoT (NB-IoT)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "LPWAN / FUNKNETZE IM ENERGIESEKTOR",
                        text: "Zur Überwachung von Grundwasserpegeln und Fernwärmeleitungen wird ein LPWAN (Low Power Wide Area Network) aufgebaut.\naa) Erläutern Sie zwei Vorteile des lizenzfreien LoRaWAN gegenüber dem zellularen NB-IoT (4 Punkte).\nab) Nennen Sie die Bedeutung des Spreading Factors (SF7 bis SF12) bei LoRaWAN (3 Punkte).",
                        solution: "aa) Vorteile LoRaWAN gegenüber NB-IoT:\n1. Unabhängigkeit von Mobilfunkprovidern: Stadtwerke können eigene Gateways errichten und betreiben (keine laufenden SIM-Karten-/Vertragskosten).\n2. Extrem geringer Energieverbrauch: Sensoren können bis zu 10 Jahre mit einer internen Batterie autark ohne Netzanschluss arbeiten.\nab) Spreading Factor (SF):\nDer SF bestimmt das Verhältnis zwischen Symbolrate und Chiprate. Ein höherer SF (z. B. SF12) erhöht die Signalreichweite und Gebäudedurchdringung bei schlechtem Empfang, verringert jedoch die Übertragungsdatenrate und erhöht die Sendezeit (Time-on-Air)."
                    },
                    {
                        id: "12_2_b",
                        label: "b) Gesetzliche Duty-Cycle-Beschränkung im 868-MHz-Band",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "REGULIERUNG / BNETZA DUTY CYCLE",
                        text: "Im europäischen 868-MHz-Band gilt für LoRaWAN ein gesetzlicher Duty Cycle von 1 %.\naa) Berechnen Sie die maximal zulässige Sendezeit eines Sensors pro Stunde in Sekunden (3 Punkte).\nab) Welche Konsequenz hat es für das Übertragungsprotokoll, wenn ein Sensor diese Grenze überschreitet? (3 Punkte).",
                        solution: "aa) Maximale Sendezeit:\n1 Stunde = 3.600 Sekunden.\n1 % von 3.600 s = 36 Sekunden maximale Sendezeit (Time-on-Air) pro Stunde.\nab) Konsequenz:\nDer LoRaWAN-Stack des Sensors schaltet in eine Zwangssendepause (Back-off). Er darf erst wieder senden, wenn das rollierende 1-Stunden-Budget unterschritten ist. Häufige Bestätigungsnachrichten (ACKs) und Downlink-Kommandos müssen daher minimiert werden."
                    },
                    {
                        id: "12_2_c",
                        label: "c) SCADA-Netzwerke & Daten-Dioden (Hardware-Einbahnstraße)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "KRITIS-LEITTECHNIK / DATA DIODES",
                        text: "Messdaten aus der Leitwarte (SCADA) sollen zur Analyse an ein Enterprise-Netzwerk übertragen werden. Erläutern Sie, wie eine optische 'Datendiode' (Data Diode) die Leittechnik physikalisch vor Cyberangriffen schützt.",
                        solution: "Eine Datendiode erzwingt durch physikalische Hardware (eine LED/Sender auf der einen Seite und ein Fotodetektor/Empfänger auf der anderen Seite ohne Rückkanal-Faser) eine strikte Einbahnstraßen-Kommunikation. Daten können aus dem hochsicheren SCADA-Netz nach außen fließen, aber kein einziges Bit (weder Angriffe noch Steuerbefehle) kann physikalisch in umgekehrter Richtung eindringen."
                    },
                    {
                        id: "12_2_d",
                        label: "d) IEC 60870-5-104 vs. Modbus TCP",
                        points: 6,
                        type: "table",
                        stencil: "PROTOKOLLE / FERNWIRKTECHNIK",
                        text: "Vergleichen Sie die beiden Industrieprotokolle hinsichtlich ihrer typischen Eigenschaften.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["Eigenschaft", "Modbus TCP", "IEC 60870-5-104"],
                            rows: [
                                ["Typisches Einsatzgebiet", "Lokale Gebäude- und Fabrikautomation", "Weitverkehrs-Fernwirktechnik für Strom- und Gasnetze"],
                                ["Zeitstempel-Übertragung", "Standardmäßig nicht im Protokoll enthalten", "Hochpräzise Zeitstempelung (Millisekunden) an der Messstelle"],
                                ["Ereignisorientierte Meldung", "Nein (zyklisches Polling durch Master)", "Ja (Spontane Ereignisübertragung bei Statusänderung)"]
                            ]
                        },
                        solution: "Modbus TCP: lokal, kein Zeitstempel, zyklisches Polling. IEC 104: Fernwirknetz, präziser Zeitstempel, spontane Ereignisübertragung."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: KRITIS-Sicherheit nach BSI IT-Grundschutz & Notstromkonzept",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "12_3_a",
                        label: "a) IT-Sicherheitskatalog der Bundesnetzagentur (§ 11 Abs. 1a EnWG)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "COMPLIANCE / ENWG IT-SICHERHEITSKATALOG",
                        text: "Als Energieversorger unterliegen die Stadtwerke dem IT-Sicherheitskatalog der BNetzA.\naa) Welche Zertifizierung nach ISO/IEC ist für den Betrieb von Stromnetzen gesetzlich zwingend vorgeschrieben? (3 Punkte)\nab) Nennen Sie zwei Aufgaben des vorgeschriebenen IT-Sicherheitsbeauftragten (ISB) (4 Punkte).",
                        solution: "aa) Pflichtzertifizierung: Zertifizierung eines Informationssicherheits-Managementsystems (ISMS) nach ISO/IEC 27001.\nab) Aufgaben des ISB:\n1. Erstellung, Pflege und Durchsetzung der organisationsweiten Informationssicherheits-Leitlinie und Sicherheitskonzepte.\n2. Unabhängige Berichterstattung direkt an die Geschäftsführung sowie Koordination von Sicherheitsvorfällen und BSI-Audits."
                    },
                    {
                        id: "12_3_b",
                        label: "b) Notstrom- und Schwarzstartkonzept",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "BUSINESS CONTINUITY / SCHWARZSTARTFÄHIGKEIT",
                        text: "Nach einem überregionalen Blackout muss die Leitstelle autark hochfahren können.\naa) Was versteht man unter 'Schwarzstartfähigkeit' eines Netzes? (3 Punkte)\nab) Welche zwei technischen Systeme stellen die Stromversorgung der Leitstellen-IT bei Netzausfall sicher? (3 Punkte).",
                        solution: "aa) Schwarzstartfähigkeit:\nDie Fähigkeit einer Erzeugungsanlage (z. B. Gasturbine oder Wasserkraftwerk), ohne fremde elektrische Energie aus dem Verbundnetz eigenständig aus dem Stillstand hochzufahren und ein Inselnetz aufzubauen.\nab) Notstromsysteme der Leitstelle:\n1. Unterbrechungsfreie Stromversorgung (USV mit Akkus): Fängt Netzwischer und Spannungseinbrüche ohne Millisekunde Unterbrechung ab.\n2. Diesel-Notstromaggregat (NEA): Startet nach 10-15 Sekunden und übernimmt die dauerhafte Energieversorgung über mehrere Tage."
                    },
                    {
                        id: "12_3_c",
                        label: "c) Physische Sicherung von Umspannwerken (Zutrittskontrolle)",
                        points: 6,
                        type: "table",
                        stencil: "INFRASTRUKTURSCHUTZ / ZUTRITTSKONTROLLE",
                        text: "Ordnen Sie die Schutzmaßnahmen den drei Sicherheitszonen eines Umspannwerks zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["Zone 1: Freigelände", "Zone 2: Betriebsgebäude", "Zone 3: Serverrack-Schränke"],
                            headers: ["Zone", "Bereich", "Erforderliche Schutzmaßnahme"],
                            rows: [
                                ["Zone 2: Betriebsgebäude", "Relais- und Steuerungsräume", "Einbruchmeldeanlage (VdS Klasse C) und elektronische Transponder-Schließung"],
                                ["Zone 3: Serverrack-Schränke", "Fernwirk- und SCADA-Switches", "Zwei-Faktor-Zugang (PIN + Transponder) und Vereinzelungsschleuse"],
                                ["Zone 1: Freigelände", "Außenareal des Umspannwerks", "2 Meter Übersteigschutz-Zaun, Videoüberwachung mit KI-Zaunüberwachung und Flutlicht"]
                            ]
                        },
                        solution: "Zone 1: Zaun & Kamera; Zone 2: Einbruchmelder & Transponder; Zone 3: 2FA-Schranktürschloss & Vereinzelung."
                    },
                    {
                        id: "12_3_d",
                        label: "d) IT-Forensik bei Sabotage-Angriffen",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "INCIDENT RESPONSE / FORENSIK",
                        text: "Ein Fernwirk-Gateway sendet unautorisierte Steuerbefehle. Nennen Sie zwei Sofortmaßnahmen zur Schadenseindämmung und forensischen Beweissicherung nach BSI IT-Grundschutz.",
                        solution: "Sofortmaßnahmen:\n1. Isolation des betroffenen Geräts vom Netz (Netzwerkkabel ziehen oder Port blockieren, aber Gerät keinesfalls ausschalten/neustarten, um RAM-Daten zu erhalten).\n2. Erstellung eines forensischen Speicherabbilds (RAM-Dump) und einer bitgenauen Kopie (Forensic Image) der Speichermedien vor Beginn der Untersuchung."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Zählerstands-Datenbank (3NF), SQL & Dynamischer Stromtarif-Algorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "12_4_a",
                        label: "a) Relationales Smart-Meter-Datenbankschema (3NF)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKMODELLIERUNG / METER DATA MANAGEMENT",
                        text: "Modellieren Sie die Datenbank für ein Meter-Data-Management-System (MDM) in 3NF:\nEin Kunde hat Stammdaten. An einer Verbrauchsstelle (Marktlokation / MaLo) ist genau ein Zähler verbaut. Jeder Zähler hat eine Zählernummer und einen Zählertyp. Zähler erfassen Zählerstände (15-Minuten-Lastgang) mit Zeitstempel, Wirkleistung_kW, Zählerstand_kWh und Qualitätsstatus.\nGeben Sie das Schema mit PK und FK an.",
                        solution: "• tbl_kunde (Kunden_ID [PK], Nachname, Vorname, Mail, Strasse, PLZ, Ort)\n• tbl_marktlokation (MaLo_ID [PK], Kunden_ID [FK], Anschlussadresse, Netzebene, Zuleitung_Max_A)\n• tbl_zaehler (Zaehler_ID [PK], MaLo_ID [FK], Zaehlernummer, Zaehlertyp, Einbaudatum, Letichte_Eichung)\n• tbl_messwert (Messwert_ID [PK], Zaehler_ID [FK], Zeitstempel, Wirkleistung_kW, Zaehlerstand_kWh, Status_Flag)"
                    },
                    {
                        id: "12_4_b",
                        label: "b) SQL: Spitzenlast-Analyse zur Netzentlastung",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / LASTGANG-AUSWERTUNG",
                        text: "Formulieren Sie die SQL-Statements:\nba) Ermitteln Sie für einen Zähler (`Zaehler_ID = 'Z-10492'`) die maximale Wirkleistung (`MAX(Wirkleistung_kW)`) und den durchschnittlichen Verbrauch pro Tag im Januar 2026 (5 Punkte).\nbb) Finden Sie alle Zähler, deren aktuelle Wirkleistung über 22 kW liegt (potenzieller Betrieb ungedrosselter Schnellladestationen) (3 Punkte).",
                        solution: "ba)\nSELECT DATE(Zeitstempel) AS Messtag,\n       MAX(Wirkleistung_kW) AS Spitzenlast_kW,\n       ROUND(AVG(Wirkleistung_kW), 2) AS Durchschnitt_kW,\n       MAX(Zaehlerstand_kWh) - MIN(Zaehlerstand_kWh) AS Tagesverbrauch_kWh\nFROM tbl_messwert\nWHERE Zaehler_ID = 'Z-10492'\n  AND Zeitstempel BETWEEN '2026-01-01 00:00:00' AND '2026-01-31 23:59:59'\nGROUP BY DATE(Zeitstempel)\nORDER BY Messtag ASC;\n\nbb)\nSELECT z.Zaehler_ID, z.Zaehlernummer, m.Zeitstempel, m.Wirkleistung_kW, ml.Anschlussadresse\nFROM tbl_zaehler z\nJOIN tbl_marktlokation ml ON z.MaLo_ID = ml.MaLo_ID\nJOIN tbl_messwert m ON z.Zaehler_ID = m.Zaehler_ID\nWHERE m.Wirkleistung_kW > 22.0\n  AND m.Zeitstempel >= NOW() - INTERVAL 15 MINUTE;"
                    },
                    {
                        id: "12_4_c",
                        label: "c) Algorithmus: Dynamische Tarifabrechnung nach Börsenstrompreis (EPEX Spot)",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "ALGORITHMEN / DYNAMISCHE TARIFE",
                        text: "Ein dynamischer Stromtarif berechnet die Kosten eines 15-Minuten-Verbrauchsintervalls nach dem Börsenstrompreis der Strombörse EPEX Spot:\n• Formel Arbeitspreis: `preis_cent_kwh = boersenpreis_eur_mwh / 10 + netzentgelte_cent + steuern_cent`\n• Wenn der Börsenpreis negativ ist (`boersenpreis_eur_mwh < 0`), wird der Börsenpreis zu 0 gesetzt (keine Negativvergütung).\n• Verbrauchte kWh im Intervall = `(wirkleistung_kw * 15) / 60`.\n• Kosten im Intervall = `verbrauchte_kwh * (preis_cent_kwh / 100)`.\nErstellen Sie den Pseudocode für die Funktion `berechne_intervall_kosten(...)`.",
                        solution: "FUNCTION berechne_intervall_kosten(wirkleistung_kw, boersenpreis_eur_mwh, netzentgelte_cent, steuern_cent):\n    // 1. Negativpreisschutz\n    effektiver_boersenpreis = boersenpreis_eur_mwh\n    IF effektiver_boersenpreis < 0 THEN\n        effektiver_boersenpreis = 0.0\n    END IF\n    \n    // 2. Preis pro kWh berechnen (1 EUR/MWh = 0,1 Cent/kWh)\n    arbeitspreis_cent_kwh = (effektiver_boersenpreis / 10.0) + netzentgelte_cent + steuern_cent\n    \n    // 3. Verbrauchte Energie im 15-Minuten-Slot in kWh\n    // 15 Minuten = 0,25 Stunden\n    intervall_kwh = wirkleistung_kw * 0.25\n    \n    // 4. Kosten in Euro berechnen (Cent / 100)\n    kosten_eur = intervall_kwh * (arbeitspreis_cent_kwh / 100.0)\n    \n    RETURN ROUND(kosten_eur, 4) // Auf 4 Nachkommastellen runden\nEND FUNCTION"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 13: Luft- und Raumfahrt / Flugsicherung (AeroNav Systems GmbH)
    // ----------------------------------------------------------------------
    {
        id: "exam_13",
        title: "Prüfung 13: Flugsicherung, Radar-Netzwerke & Georedundanz",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • AeroNav Systems GmbH",
        ausgangssituation: "Sie arbeiten als IT-Systemintegrator bei der AeroNav Systems GmbH, einem Dienstleister für zivile Flugsicherungstechnik und Flughafen-Infrastruktur. Sie betreuen hochverfügbare Radar-Datennetzwerke, georedundante Kontrollzentren, ADS-B Transponderdaten und unterliegen strengsten Zulassungskriterien nach DO-178C und ICAO-Richtlinien.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: Radar-Sensorik, ADS-B & Leitungsdimensionierung",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "13_1_a",
                        label: "a) Primärradar (PSR) vs. Sekundärradar (SSR / ADS-B)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "AVIONIK / RADAR-TECHNOLOGIEN",
                        text: "In der Flugsicherung werden Primär- und Sekundärradare kombiniert.\naa) Erläutern Sie den Unterschied zwischen Primär- und Sekundärradar (4 Punkte).\nab) Nennen Sie zwei Vorteile von ADS-B (Automatic Dependent Surveillance-Broadcast) (3 Punkte).",
                        solution: "aa) Unterschied:\n• Primärradar (PSR): Sendet elektromagnetische Impulse aus und misst das passive Echo, das vom Rumpf des Luftfahrzeugs reflektiert wird (Positionsbestimmung auch ohne Mitarbeit des Ziels).\n• Sekundärradar (SSR): Sendet Abfragesignale (Interrogation). Der Transponder im Flugzeug antwortet aktiv mit Identifikationscode (Squawk), Flughöhe und Telemetriedaten.\nab) Vorteile ADS-B:\n1. Höhere Positionsgenauigkeit durch Übertragung präziser GPS-Satellitennavigationsdaten direkt aus dem Flugzeug.\n2. Geringere Infrastrukturkosten, da bodenseitig einfache omnidirektionale Empfänger statt rotierender Schwerlastantennen ausreichen."
                    },
                    {
                        id: "13_1_b",
                        label: "b) Software-Zulassung nach RTCA DO-178C (DAL A bis E)",
                        points: 6,
                        type: "table",
                        stencil: "SOFTWARE-QUALITÄT / DO-178C DESIGN ASSURANCE",
                        text: "Ordnen Sie die fünf DAL-Stufen (Design Assurance Levels) der Auswirkung eines Softwarefehlers zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["DAL A", "DAL B", "DAL C", "DAL D/E"],
                            headers: ["DAL-Level", "Kategorie", "Mögliche Auswirkung eines Softwareausfalls"],
                            rows: [
                                ["DAL C", "Erheblich (Major)", "Erhöhte Arbeitsbelastung der Piloten, Reduzierung der Sicherheitsmargen"],
                                ["DAL A", "Katastrophal (Catastrophic)", "Totalverlust des Flugzeugs und/oder tödliche Verletzungen aller Insassen"],
                                ["DAL D/E", "Geringfügig / Keine Auswirkung", "Unbequemlichkeit für Passagiere (z. B. Ausfall des In-Flight-Entertainments)"],
                                ["DAL B", "Gefährlich (Hazardous)", "Schwere Beeinträchtigung der Flugsicherheit, schwere Verletzungen"]
                            ]
                        },
                        solution: "DAL A -> Katastrophal (Absturz); DAL B -> Gefährlich; DAL C -> Erheblich; DAL D/E -> Geringfügig/Entertainment."
                    },
                    {
                        id: "13_1_c",
                        label: "c) Leitungs- und Bandbreitenkalkulation im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "TELEKOMMUNIKATION / LEITUNGSMIETKOSTEN",
                        text: "Ein Flugsicherungszentrum bindet drei abgesetzte Radaranlagen an:\n• Datenrate pro Radar: 128 kbit/s (Vollduplex)\n• Redundanz: Jede Station benötigt zwei getrennte Glasfaser-Mietleitungen über unterschiedliche Carrier (Trassen-Redundanz).\n• Monatliche Mietkosten Carrier A: 450,00 EUR pro Leitung\n• Monatliche Mietkosten Carrier B: 520,00 EUR pro Leitung\n• Einmalige Bereitstellung pro Leitung: 1.200,00 EUR (einmalig für alle 6 Leitungen)\nBerechnen Sie im Rechengitter die gesamten Leitungskosten für die ersten 3 Betriebsjahre (36 Monate).",
                        solution: "Berechnung im Rechengitter:\n1. Anzahl Leitungen:\n   3 Radare * 2 Carrier = 6 Leitungen insgesamt (3 von Carrier A, 3 von Carrier B).\n\n2. Einmalige Bereitstellungskosten:\n   6 Leitungen * 1.200,00 € = 7.200,00 EUR\n\n3. Monatliche laufende Kosten:\n   Carrier A: 3 Leitungen * 450,00 € = 1.350,00 €/Monat\n   Carrier B: 3 Leitungen * 520,00 € = 1.560,00 €/Monat\n   Summe pro Monat = 1.350,00 € + 1.560,00 € = 2.910,00 EUR/Monat\n\n4. Laufende Kosten über 36 Monate:\n   36 Monate * 2.910,00 € = 104.760,00 EUR\n\n5. Gesamtkosten über 3 Jahre:\n   7.200,00 € + 104.760,00 € = 111.960,00 EUR."
                    },
                    {
                        id: "13_1_d",
                        label: "d) Gewährleistung vs. Garantie bei Luftfahrtkomponenten",
                        points: 4,
                        type: "lines",
                        linesCount: 3,
                        stencil: "WIRTSCHAFTSRECHT / BGB MÄNGELRECHTE",
                        text: "Unterscheiden Sie gesetzliche Gewährleistung (Mängelhaftung nach BGB) und vertragliche Herstellergarantie bei Server-Baugruppen.",
                        solution: "• Gewährleistung: Gesetzliche Pflicht des Verkäufers (24 Monate ab Übergabe), dass die Ware zum Zeitpunkt des Gefahrenübergangs frei von Sachmängeln war.\n• Garantie: Freiwillige vertragliche Zusicherung des Herstellers über die Haltbarkeit oder Funktionsfähigkeit über einen festgelegten Zeitraum, unabhängig vom Zustand bei Übergabe."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: Georedundanz, PTP-Zeitsynchronisation (IEEE 1588) & BGP",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "13_2_a",
                        label: "a) Precision Time Protocol (PTP / IEEE 1588) vs. NTP",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "ZEITSYNCHRONISATION / IEEE 1588 PTP",
                        text: "Für Multilaterations-Systeme (Berechnung der Flugzeugposition aus Signal-Laufzeitunterschieden) ist Mikrosekunden-Präzision erforderlich.\naa) Erläutern Sie, warum herkömmliches NTP (Network Time Protocol) dafür nicht ausreicht (3 Punkte).\nab) Wie erreicht PTP (IEEE 1588) Genauigkeiten im Sub-Mikrosekundenbereich? (4 Punkte).",
                        solution: "aa) Unzulänglichkeit von NTP:\nNTP arbeitet auf Software- und Anwendungsebene über UDP/IP. Variable Verarbeitungszeiten im Betriebssystem-Stack, Queuing-Jitter in Standard-Switches und asymmetrische Leitungslaufzeiten führen zu Abweichungen von 1 bis 10 Millisekunden – viel zu ungenau für Laufzeitortung (Lichtgeschwindigkeit = 300 m pro Mikrosekunde).\nab) Funktionsweise PTP (IEEE 1588):\nPTP nutzt Hardware-Timestamping direkt auf der PHY-Ebene der Netzwerkkarte beim Ein- und Austritt des Ethernet-Frames. Spezialisierte 'Transparent Clocks' (PTP-Switches) messen und kompensieren zudem die exakte Verweildauer des Pakets im Switch (Residence Time), wodurch Sub-Mikrosekunden-Genauigkeit garantiert wird."
                    },
                    {
                        id: "13_2_b",
                        label: "b) Georedundante RZ-Kopplung (DWDM)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "OPTISCHE NETZE / DWDM & RZ-KOPPLUNG",
                        text: "Zwei Kontrollzentren in 80 km Entfernung werden über Dark-Fiber und DWDM (Dense Wavelength Division Multiplexing) gekoppelt.\nErläutern Sie das Funktionsprinzip von DWDM und nennen Sie den Grund für den Einsatz gegenüber Standard-Ethernet-LWL.",
                        solution: "Funktionsprinzip DWDM:\nÜber ein einziges Glasfaserpaar werden viele unterschiedliche optische Lichtwellenlängen (Farben) zeitgleich moduliert und übertragen (Multiplexing). Dadurch können über eine einzige Faser Dutzende getrennte 100G- oder 400G-Kanäle ohne gegenseitige Beeinflussung betrieben werden, was enorme Mietkosten für zusätzliche Fasern spart."
                    },
                    {
                        id: "13_2_c",
                        label: "c) Border Gateway Protocol (BGP / Autonomous Systems)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "ROUTING / BGP & EXTERNAL GATEWAYS",
                        text: "Die Kontrollzentren betreiben ein eigenes Autonomes System (AS). Erläutern Sie den Unterschied zwischen iBGP (Interior BGP) und eBGP (Exterior BGP) sowie den Begriff 'AS-Path'.",
                        solution: "• iBGP: Routing-Informationsaustausch zwischen BGP-Routern innerhalb desselben Autonomen Systems.\n• eBGP: Routing zwischen unterschiedlichen Autonomen Systemen (z. B. Verbindung zum Flugsicherungsnachbarland).\n• AS-Path: Liste aller Autonomen Systeme, die ein IP-Paket durchqueren muss, um das Zielnetz zu erreichen; dient als Metrik und Schleifenverhinderung (Loop Prevention)."
                    },
                    {
                        id: "13_2_d",
                        label: "d) Netzwerklatenz & RTT (Round Trip Time)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "PHYSIK DER LEITUNG / LICHTGESCHWINDIGKEIT IN GLAS",
                        text: "Die Signalausbreitungsgeschwindigkeit in Quarzglas beträgt ca. 200.000 km/s. Berechnen Sie die theoretische minimale Round-Trip-Time (RTT) für eine Glasfaser-Direktverbindung über 100 km Trassenlänge.",
                        solution: "Berechnung RTT:\n• Einfache Strecke = 100 km.\n• Gesamtweg hin und zurück = 2 * 100 km = 200 km.\n• Laufzeit RTT = Weg / Geschwindigkeit = 200 km / 200.000 km/s = 0,001 Sekunden = 1,0 Millisekunde (ms)."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: IT-Sicherheit nach ICAO Annex 17, Air-Gaps & Notfallwiederanlauf",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "13_3_a",
                        label: "a) Physische Netztrennung (Air-Gap) & Übergabepunkte",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "CYBER DEFENSE / AIR-GAP & TRANSFERKNOTEN",
                        text: "Flugsicherungsnetze sind komplett vom öffentlichen Internet isoliert (Air-Gap).\naa) Erläutern Sie die Schutzwirkung eines Air-Gaps (3 Punkte).\nab) Wie können Software-Patches und Wetterdaten dennoch kontrolliert und sicher in das isolierte Netz eingespielt werden? (4 Punkte).",
                        solution: "aa) Schutzwirkung Air-Gap:\nKeine physische oder logische Netzwerkverbindung zur Außenwelt. Direkte Cyberangriffe, Port-Scans, DDoS oder automatisierte Ransomware-Verbreitung über das Internet sind technisch unmöglich.\nab) Kontrollierter Datentransfer:\nÜber dedizierte Transfer-Schleusen ('Data Kiosks' / Schleusen-Stationen). Externe Datenmedien (speziell freigegebene USB-Sticks) werden vor der Einspielung auf isolierten Schleusen-PCs mit mehreren Virenscannern geprüft, signiert und nur über strikt reglementierte Schnittstellen manuell eingespielt."
                    },
                    {
                        id: "13_3_b",
                        label: "b) Notfall-Parameter: RTO (Recovery Time Objective) vs. RPO",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "DISASTER RECOVERY / RTO & RPO",
                        text: "Für das Flugplandaten-System gilt: RTO = 0 Sekunden, RPO = 0 Sekunden.\nDefinieren Sie RTO und RPO und erläutern Sie, welche Architektur erforderlich ist, um beides auf 0 zu halten.",
                        solution: "• RTO (Recovery Time Objective): Maximal tolerierbare Zeitspanne, bis ein ausgefallenes System wieder voll betriebsbereit ist.\n• RPO (Recovery Point Objective): Maximal tolerierbarer Zeitraum, für den Daten bei einem Vorfall verloren gehen dürfen.\n• Architektur für RTO=0 / RPO=0: Synchron gespiegelte Aktiv/Aktiv-Cluster an zwei getrennten Standorten mit 'Zero-Data-Loss'-Datenbanken und unterbrechungsfreiem automatischem Failover."
                    },
                    {
                        id: "13_3_c",
                        label: "c) Schutz vor Insider-Bedrohungen (Vier-Augen-Prinzip)",
                        points: 6,
                        type: "table",
                        stencil: "ORGANISATION / PRIVILEGED ACCESS MANAGEMENT",
                        text: "Ordnen Sie die Sicherheitsmaßnahmen gegen Innentäter den Zielen zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["Vier-Augen-Prinzip (Dual Control)", "Session Recording / Audit Logging", "Sicherheitsüberprüfung nach LuftSiG"],
                            headers: ["Maßnahme", "Schutzwirkung gegen Innentäter", "Konkretes Beispiel"],
                            rows: [
                                ["Session Recording / Audit Logging", "Vollständige Beweissicherung und Abschreckung", "Aufzeichnung aller SSH- und RDP-Sitzungen auf Bastion-Hosts"],
                                ["Sicherheitsüberprüfung nach LuftSiG", "Präventive Zuverlässigkeitsprüfung vor Einstellung", "Überprüfung durch Verfassungsschutz und Bundeskriminalamt nach § 7 LuftSiG"],
                                ["Vier-Augen-Prinzip (Dual Control)", "Verhindert eigenmächtige Manipulationen durch Einzelpersonen", "Kritische Konfigurationsänderungen erfordern Bestätigung eines zweiten Admins"]
                            ]
                        },
                        solution: "Vier-Augen -> Verhinderung Alleingang; Session Recording -> Beweisbarkeit; Zuverlässigkeitsüberprüfung -> präventive Eignungsprüfung."
                    },
                    {
                        id: "13_3_d",
                        label: "d) Notstromversorgung für Radaranlagen (USV + Diesel)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "NOTFALLKONZEPT / ANLAGENSICHERHEIT",
                        text: "Eine Radarstation auf einem Berggipfel verbraucht durchschnittlich 18 kW elektrische Leistung. Die Akkus der USV haben eine Nutzkapazität von 36 kWh. Berechnen Sie die reine USV-Überbrückungszeit in Stunden und Minuten.",
                        solution: "Berechnung Autonomiezeit:\nt = Kapazität / Leistung = 36 kWh / 18 kW = 2,0 Stunden (= 2 Stunden 0 Minuten / 120 Minuten)."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Flugplan-Datenbank (3NF), SQL & Kollisionswarnungs-Algorithmus (TCAS)",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "13_4_a",
                        label: "a) Relationales Flugsicherungs-Datenbankschema (3NF)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKMODELLIERUNG / FLIGHT MANAGEMENT",
                        text: "Modellieren Sie die Datenbank für ein Flugüberwachungssystem in 3NF:\nEin Flugzeug besitzt eine ICAO24-Adresse (Hex-Code), Kennzeichen und Flugzeugtyp. Ein Flug hat eine Flugnummer, Startflughafen, Zielflughafen und geplanten Abflug. Während des Flugs erfassen Radare Tracking-Plots mit Zeitstempel, Position (Breitengrad, Längengrad), Flughöhe (Flight Level in 100 ft) und Groundspeed (Knoten).\nGeben Sie das Schema mit PK und FK an.",
                        solution: "• tbl_flugzeug (ICAO24 [PK], Kennzeichen, Flugzeugtyp, Betreibergesellschaft, MTOW_Tonnen)\n• tbl_flug (Flug_ID [PK], ICAO24 [FK], Rufzeichen, Start_ICAO, Ziel_ICAO, Plan_Abflug, Status)\n• tbl_radar (Radar_ID [PK], Stationsname, Breitengrad_Radar, Laengengrad_Radar, Reichweite_NM)\n• tbl_track_plot (Plot_ID [PK], Flug_ID [FK], Radar_ID [FK], Zeitstempel, Latitude, Longitude, Altitude_FL, Speed_Kts)"
                    },
                    {
                        id: "13_4_b",
                        label: "b) SQL: Verspätungsanalyse & Luftraumüberwachung",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / LUFTRAUMANALYSE",
                        text: "Formulieren Sie die SQL-Statements:\nba) Ermitteln Sie alle Flüge (Rufzeichen, Start, Ziel), die sich aktuell in einer Flughöhe von unter 10.000 Fuß (`Altitude_FL < 100`) mit einer Geschwindigkeit von über 250 Knoten bewegen (Verletzung der Standard-Geschwindigkeitsbegrenzung) (5 Punkte).\nbb) Berechnen Sie die Anzahl registrierter Radarplots je Radarstation für den gestrigen Tag (3 Punkte).",
                        solution: "ba)\nSELECT f.Rufzeichen, f.Start_ICAO, f.Ziel_ICAO, p.Altitude_FL, p.Speed_Kts, p.Zeitstempel\nFROM tbl_flug f\nJOIN tbl_track_plot p ON f.Flug_ID = p.Flug_ID\nWHERE p.Altitude_FL < 100 \n  AND p.Speed_Kts > 250\n  AND p.Zeitstempel >= NOW() - INTERVAL 10 MINUTE\nORDER BY p.Speed_Kts DESC;\n\nbb)\nSELECT r.Radar_ID, r.Stationsname, COUNT(p.Plot_ID) AS Anzahl_Plots\nFROM tbl_radar r\nLEFT JOIN tbl_track_plot p ON r.Radar_ID = p.Radar_ID AND DATE(p.Zeitstempel) = CURDATE() - INTERVAL 1 DAY\nGROUP BY r.Radar_ID, r.Stationsname\nORDER BY Anzahl_Plots DESC;"
                    },
                    {
                        id: "13_4_c",
                        label: "c) Algorithmus: Kollisionserkennung (TCAS II Resolution Advisory)",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "ALGORITHMEN / KOLLISIONSWARNUNG TCAS",
                        text: "Entwerfen Sie einen Algorithmus für ein Antikollisionssystem (TCAS):\n• Parameter: `vertikale_distanz_ft` (Differenz der Flughöhen in Fuß), `horizontale_distanz_nm` (Abstand in Nautischen Meilen), `tau_sekunden` (Berechnete Zeit bis zum nächsten Annäherungspunkt CPA).\n• Stufe 1 (Entwarnung): Wenn `horizontale_distanz_nm > 5.0` oder `vertikale_distanz_ft > 1000`: Rückgabe 'CLEAR_OF_CONFLICT'.\n• Stufe 2 (Traffic Advisory - TA): Wenn `tau_sekunden <= 45` und `tau_sekunden > 25`: Rückgabe 'TRAFFIC_ALERT' (Suchhinweis an Piloten).\n• Stufe 3 (Resolution Advisory - RA): Wenn `tau_sekunden <= 25` und `vertikale_distanz_ft <= 600`: Rückgabe 'AVOIDANCE_CLIMB_DESCEND' (Automatisches Ausweichkommando).\nErstellen Sie den Pseudocode.",
                        solution: "FUNCTION berechne_tcas_status(vertikale_distanz_ft, horizontale_distanz_nm, tau_sekunden):\n    // Sicherheitsabstand gewahrt?\n    IF horizontale_distanz_nm > 5.0 OR vertikale_distanz_ft > 1000 THEN\n        RETURN 'CLEAR_OF_CONFLICT'\n    END IF\n    \n    // Akute Kollisionsgefahr prüfen\n    IF tau_sekunden <= 25 AND vertikale_distanz_ft <= 600 THEN\n        RETURN 'RESOLUTION_ADVISORY (SOFORTIGE AUSWEICHEMPFEHLUNG: STEIGEN / SINKEN)'\n    ELSE IF tau_sekunden <= 45 THEN\n        RETURN 'TRAFFIC_ADVISORY (ACHTUNG: VERKEHR BEOBACHTEN)'\n    ELSE\n        RETURN 'PROXIMITY_ALERT'\n    END IF\nEND FUNCTION"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 14: Hotelkette & Hospitality IoT (GrandPalace Hotel Group SE)
    // ----------------------------------------------------------------------
    {
        id: "exam_14",
        title: "Prüfung 14: Hospitality IoT, Gäste-WLAN & Zahlungsverkehr",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • GrandPalace Hotel Group SE",
        ausgangssituation: "Sie sind Fachinformatiker in der IT-Abteilung der europaweit tätigen GrandPalace Hotel Group SE. Die Hotelkette rüstet 40 Hotels auf digitale Schließsysteme per Smartphone (BLE/NFC), isolierte Gäste-WLAN-Architekturen mit Captive Portals und PCI-DSS-konforme Zahlungsterminals an Rezeption und Gastronomie um.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: Digitaler Zimmerschlüssel (BLE/NFC), Hotelvertrag & RevPAR",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "14_1_a",
                        label: "a) Smart-Key Schließsysteme: BLE vs. RFID/NFC",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "SMART HOTEL / BLE & NFC SCHLIESSSYSTEME",
                        text: "Hoteltüren sollen per Smartphone oder Zimmerkarte geöffnet werden können.\naa) Vergleichen Sie Bluetooth Low Energy (BLE) und NFC hinsichtlich Reichweite und Nutzerinteraktion (4 Punkte).\nab) Nennen Sie zwei Sicherheitsanforderungen an den kryptografischen Key-Exchange bei mobilen Zimmerschlüsseln (3 Punkte).",
                        solution: "aa) Vergleich BLE vs. NFC:\n• BLE: Reichweite bis zu 10 Meter. Ermöglicht kontaktloses Entriegeln bereits beim Annähern an die Zimmertür ('Hands-free / Walk-in').\n• NFC: Nahbereichskommunikation mit maximal 4 cm Reichweite. Erfordert aktives Vorhalten des Smartphones oder der RFID-Karte direkt an den Türknaufleser.\nab) Sicherheitsanforderungen Key-Exchange:\n1. Zeitlich begrenzte Gültigkeit (Time-based Token / Ephemeral Keys, der Schlüssel verfällt automatisch zur Check-out-Uhrzeit).\n2. Ende-zu-Ende-Verschlüsselung mit gegenseitiger Authentifizierung (Mutual Authentication zwischen Hotelschloss und App), um Replay-Angriffe auszuschließen."
                    },
                    {
                        id: "14_1_b",
                        label: "b) Beherbergungsvertrag & Gastwirtshaftung nach § 701 BGB",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "WIRTSCHAFTSRECHT / BGB BEHERBERGUNGSVERTRAG",
                        text: "Ein Gast bucht verbindlich für 4 Nächte ein Zimmer und reist ohne Stornierung nicht an ('No-Show').\naa) Um welchen Vertragstyp nach BGB handelt es sich beim Hotelaufnahmevertrag? (2 Punkte)\nab) Welchen Anteil des Zimmerpreises darf das Hotel nach ständiger Rechtsprechung bei Nichtanreise als Schadensersatz in Rechnung stellen? (4 Punkte).",
                        solution: "aa) Vertragstyp: Gemischter Vertrag mit schwerpunktmäßig mietvertraglichen Elementen (§ 535 BGB), ergänzt um Dienst- und Werkvertragsanteile.\nab) Vergütungsanspruch bei No-Show:\nDer Gast schuldet den vereinbarten Zimmerpreis abzüglich ersparter Aufwendungen des Hotels (z. B. nicht verbrauchtes Frühstück, Wäsche, Strom). Nach ständiger Rechtsprechung sind üblich:\n• Bei Übernachtung mit Frühstück: 80 % des Zimmerpreises (20 % ersparte Aufwendungen).\n• Bei reiner Übernachtung: 90 % des Zimmerpreises (10 % ersparte Aufwendungen)."
                    },
                    {
                        id: "14_1_c",
                        label: "c) Kennzahlenrechnung: RevPAR & Auslastung im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "HOTEL-CONTROLLING / REVPAR & BELEGUNG",
                        text: "Ein Hotel verfügt über 120 Zimmer:\n• Im Monat Juni (30 Tage) wurden 2.700 Zimmernächte gebucht.\n• Der durchschnittliche Zimmerpreis (ADR - Average Daily Rate) der verkauften Zimmer lag bei 110,00 EUR netto.\nBerechnen Sie im Rechengitter:\n1. Die Gesamtkapazität verfügbarer Zimmernächte im Juni.\n2. Den Auslastungsgrad (Belegungsquote) in Prozent.\n3. Den RevPAR (Revenue per Available Room = Netto-Logisumsatz geteilt durch Gesamtzimmerkapazität).",
                        solution: "Berechnung im Rechengitter:\n1. Gesamtkapazität verfügbarer Zimmer:\n   120 Zimmer * 30 Tage = 3.600 verfügbare Zimmernächte\n\n2. Belegungsquote (Auslastungsgrad):\n   Auslastung = (2.700 / 3.600) * 100 = 75,0 %\n\n3. Logisumsatz gesamt:\n   2.700 Zimmer * 110,00 € = 297.000,00 EUR\n\n4. RevPAR (Revenue per Available Room):\n   RevPAR = Gesamtumsatz / Gesamtkapazität = 297.000,00 € / 3.600 = 82,50 EUR\n   (Alternativ: Auslastung * ADR = 0,75 * 110,00 € = 82,50 EUR)."
                    },
                    {
                        id: "14_1_d",
                        label: "d) Digitale Meldepflicht nach Bundesmeldegesetz (BMG)",
                        points: 4,
                        type: "lines",
                        linesCount: 3,
                        stencil: "MELDERECHT / § 29 BMG MELDESCHEIN",
                        text: "Erläutern Sie die Voraussetzungen für das 'papierlose digitale Meldescheinverfahren' nach § 29, 30 BMG bei ausländischen Hotelgästen.",
                        solution: "Voraussetzungen:\nElektronische Erfassung der Meldedaten vor oder bei Anreise und Verifikation der Identität des Gastes durch sichere elektronische Verfahren (z. B. eID-Funktion des Personalausweises, qualifizierte elektronische Signatur oder bankbestätigte 2FA-Zahlungsauthentifizierung)."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: Gäste-WLAN, Captive Portal & Bandbreiten-Management (QoS)",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "14_2_a",
                        label: "a) Captive Portal & Client-Isolation im Gäste-WLAN",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "GÄSTE-NETZWERKE / CLIENT ISOLATION",
                        text: "Hotelgäste erhalten kostenlosen WLAN-Zugang.\naa) Erläutern Sie das Funktionsprinzip eines Captive Portals (HTTP Redirect & MAC-Freischaltung) (4 Punkte).\nab) Warum ist die Aktivierung von 'Client Isolation' im Gäste-WLAN zwingend erforderlich? (3 Punkte).",
                        solution: "aa) Funktionsprinzip Captive Portal:\nUnangemeldete Clients werden bei ihrem ersten Webseitenaufruf per HTTP-Redirect (Port 80/443) auf eine interne Login-Seite des Controllers umgeleitet. Nach Akzeptieren der AGBs schaltet die Firewall die MAC-Adresse des Geräts für den Internetzugang frei.\nab) Client Isolation:\nVerhindert die direkte Kommunikation zwischen WLAN-Geräten untereinander (Layer-2-Isolation). Gäste können sich nicht gegenseitig ausspionieren, fremde Laptops scannen oder Schadsoftware über Windows-Freigaben verbreiten."
                    },
                    {
                        id: "14_2_b",
                        label: "b) Bandbreitenbegrenzung & Quality of Service (QoS / Traffic Shaping)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "BANDBREITEN-MANAGEMENT / TRAFFIC SHAPING",
                        text: "Das Hotel verfügt über einen 1 Gbit/s Glasfaseranschluss.\nBeschreiben Sie, wie mittels 'Per-User Bandwidth Limiting' und Priorisierung (QoS) verhindert wird, dass einzelne Gäste durch Videostreams die Hotel-Geschäftsprozesse (Kassensysteme, Telefonie) lahmen.",
                        solution: "1. Traffic Shaping / Per-User Rate Limiting: Jedem Gastgerät wird dynamisch eine Maximalbandbreite zugewiesen (z. B. 25 Mbit/s Down / 5 Mbit/s Up).\n2. DSCP-Priorisierung (QoS): Geschäftskritische Systeme (VoIP-Telefonie, Rezeptions-PMS, Kartenzahlungsterminals) erhalten in separaten VLANs höchste Prioritätswarteschlangen (Strict Priority Queueing), sodass Gäste-Downloads nachrangig gedrosselt werden."
                    },
                    {
                        id: "14_2_c",
                        label: "c) Haftungsprivileg für WLAN-Betreiber (§ 8 TMG / TKG)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "RECHT / STÖRERHAFTUNG & TMG",
                        text: "Ein Hotelgast begeht über das Hotel-WLAN eine Urheberrechtsverletzung (Filesharing). Erläutern Sie die rechtliche Lage des Hotelbetreibers bezüglich Abmahnkosten und Schadenersatz nach Abschaffung der Störerhaftung (§ 8 Abs. 3 TMG).",
                        solution: "Rechtslage:\nDer Hotelbetreiber als Anbieter von öffentlichem Internetzugang haftet nicht auf Schadensersatz oder Abmahnkosten für Rechtsverletzungen seiner Gäste (Abschaffung der Störerhaftung). Rechteinhaber können lediglich verlangen, dass der Betreiber zumutbare Sperrmaßnahmen ergreift (z. B. Port-Sperre für Filesharing-Dienste oder DNS-Sperren), um künftige Wiederholungen zu unterbinden."
                    },
                    {
                        id: "14_2_d",
                        label: "d) DNS-Filterung & Jugendschutz",
                        points: 6,
                        type: "table",
                        stencil: "CONTENT FILTERING / DNS-SCHUTZ",
                        text: "Ordnen Sie die Schutzziele der passenden Netzwerkmaßnahme im Gäste-WLAN zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["Jugendschutz (Blockieren jugendgefährdender Seiten)", "Schutz vor Botnetzen und Phishing", "Verhinderung von Filesharing-Abmahnungen"],
                            headers: ["Schutzziel", "Netzwerk-Technologie", "Wirkungsweise"],
                            rows: [
                                ["Schutz vor Botnetzen und Phishing", "DNSBL (DNS Blacklists) & Threat Intelligence", "Bekannte Malware-Command&Control-Server werden verworfen"],
                                ["Verhinderung von Filesharing-Abmahnungen", "Port- und Protokollsperren auf der Firewall", "Blockieren typischer BitTorrent/P2P-Ports und Layer-7-Traffic"],
                                ["Jugendschutz (Blockieren jugendgefährdender Seiten)", "DNS-Filterung (z. B. CleanBrowsing / AdGuard Family)", "Domains auf BPjM-Index werden auf eine Stoppseite umgeleitet"]
                            ]
                        },
                        solution: "Jugendschutz -> DNS-Filterung; Botnetze -> DNSBL; Filesharing -> Port-/L7-Sperren."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: PCI-DSS an Hotel-Terminals & DSGVO bei Videoüberwachung",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "14_3_a",
                        label: "a) PCI-DSS Vorgaben am Point of Sale (POS)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "BEZAHLVERKEHR / PCI-DSS AM POS",
                        text: "Kreditkartenzahlungen erfolgen an mobilen WLAN-Terminals im Restaurant und stationär an der Rezeption.\naa) Erläutern Sie die Anforderung 'Point-to-Point Encryption' (P2PE) bei Bezahlterminals (4 Punkte).\nab) Welche physische Prüfpflicht gilt nach PCI-DSS Anforderung 9.9 für Kassenpersonal bezüglich Skimming? (3 Punkte).",
                        solution: "aa) P2PE (Point-to-Point Encryption):\nKartendaten werden unmittelbar beim Einstecken oder Auflegen im gesicherten Chip des Terminals verschlüsselt und erst beim Acquirer/Zahlungsdienstleister wieder entschlüsselt. Das Hotelnetzwerk und die Kassensoftware übertragen nur unlesbare Chiffrierdaten, wodurch der Scope für PCI-DSS-Audits drastisch sinkt.\nab) Physische Skimming-Prüfung (PCI-DSS 9.9):\nDas Personal muss eine Inventarliste aller Terminals (Seriennummern) führen und die Geräte täglich visuell auf Manipulationen (z. B. aufgesteckte Skimmer, gefälschte Tastaturen, unautorisierte Siegelbrüche) prüfen und dokumentieren."
                    },
                    {
                        id: "14_3_b",
                        label: "b) DSGVO Videoüberwachung in öffentlich zugänglichen Hotelbereichen",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "DATENSCHUTZ / ART. 6 DSGVO VIDEOÜBERWACHUNG",
                        text: "Das Hotel überwacht Eingangsbereich, Rezeption und Tiefgarage mit Videokameras.\naa) Welche Rechtsgrundlage nach DSGVO kommt für diese Videoüberwachung in Betracht? (2 Punkte)\nab) Nennen Sie zwei gesetzliche Voraussetzungen (Hinweisschild, Speicherfrist) nach Art. 13 DSGVO (4 Punkte).",
                        solution: "aa) Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse des Hotels zur Wahrung des Hausrechts und zum Schutz vor Diebstahl/Vandalismus).\nab) Gesetzliche Voraussetzungen:\n1. Transparenzpflicht: Gut sichtbare Hinweisschilder vor Betreten des überwachten Bereichs (mit Piktogramm, Verantwortlichem, Zweck und Kontaktdaten des Datenschutzbeauftragten).\n2. Speicherbegrenzung: Aufnahmen müssen unverzüglich gelöscht werden, sobald sie nicht mehr benötigt werden (Regelfrist: 48 bis maximal 72 Stunden, es sei denn, ein konkreter Vorfall wird polizeilich verfolgt)."
                    },
                    {
                        id: "14_3_c",
                        label: "c) Tabuzonen für Videoüberwachung",
                        points: 6,
                        type: "table",
                        stencil: "DATENSCHUTZ / VERBOTENE VIDEOZONEN",
                        text: "Beurteilen Sie die Zulässigkeit der Kameraüberwachung in den folgenden Hotelbereichen.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 1,
                            staticCols: [0, 2],
                            options: ["Absolut unzulässig", "Unzulässig", "Zulässig"],
                            headers: ["Hotelbereich", "Zulässigkeit (Zulässig / Unzulässig)", "Rechtliche Begründung"],
                            rows: [
                                ["Arbeitsplätze der Rezeptionsmitarbeiter", "Unzulässig", "Dauerhafte Verhaltens- und Leistungsüberwachung der Beschäftigten"],
                                ["Tiefgarageneinfahrt und Parkdecks", "Zulässig", "Berechtigtes Interesse zur Verhinderung von Kfz-Diebstählen und Parkremplern"],
                                ["Wellness- und Saunabereich / Umkleiden", "Absolut unzulässig", "Schwerer Eingriff in die Intimsphäre (§ 201a StGB / Art. 8 EMRK)"]
                            ]
                        },
                        solution: "Sauna -> Absolut unzulässig; Rezeption dauerhaft -> Unzulässig; Tiefgarage -> Zulässig."
                    },
                    {
                        id: "14_3_d",
                        label: "d) IT-Sicherheit bei Smart-TVs auf Hotelzimmern",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "IOT-SICHERHEIT / HOTEL-INFOTAINMENT",
                        text: "Gäste können sich auf Smart-TVs im Zimmer mit ihren privaten Streaming-Accounts (Netflix, Prime) anmelden. Welche automatische IT-Sicherheitsfunktion muss beim Check-out des Gastes zwingend ausgeführt werden?",
                        solution: "Automatisierter Account-Reset (Wipe): Bei Auslösen des Check-outs im PMS muss das Managementsystem per API einen vollständigen Werksreset der Nutzerdaten auf dem jeweiligen TV-Gerät durchführen (Löschen aller Login-Tokens, Cookies, Verläufe und Streaming-Apps), um Missbrauch durch den Nachfolgegast zu verhindern."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Property Management System (3NF), SQL & Zimmerzuteilungs-Algorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "14_4_a",
                        label: "a) Relationales Hotel-Datenbankschema (3NF)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKMODELLIERUNG / HOTEL-PMS",
                        text: "Modellieren Sie die Datenbank für ein Hotel-Property-Management-System (PMS) in 3NF:\nEin Gast hat Stammdaten. Ein Zimmer hat eine Zimmernummer, Etage, Zimmerkategorie (Standard, Deluxe, Suite) und einen Reinigungsstatus. Ein Gast kann Reservierungen für einen bestimmten Zeitraum (Anreise, Abreise) vornehmen. Zu jeder Buchung wird das zugewiesene Zimmer und der Gesamtpreis erfasst.\nGeben Sie das Schema mit PK und FK an.",
                        solution: "• tbl_gast (Gast_ID [PK], Nachname, Vorname, Mail, Telefon, Land, VIP_Status)\n• tbl_zimmer_kategorie (Kategorie_ID [PK], Bezeichner, Basispreis_EUR, Bettenanzahl)\n• tbl_zimmer (Zimmer_Nr [PK], Kategorie_ID [FK], Etage, Reinigungsstatus, Ist_Gesperrt)\n• tbl_reservierung (Reservierungs_ID [PK], Gast_ID [FK], Buchungsdatum, Anreise_Datum, Abreise_Datum, Status)\n• tbl_buchungs_position (Positions_ID [PK], Reservierungs_ID [FK], Zimmer_Nr [FK], Preis_EUR)"
                    },
                    {
                        id: "14_4_b",
                        label: "b) SQL: Belegungsstatistik & Housekeeping-Status",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / HOUSEKEEPING & UMSATZ",
                        text: "Formulieren Sie die SQL-Statements:\nba) Ermitteln Sie alle Zimmer (Zimmer_Nr, Etage), die heute belegt sind (`CURDATE() BETWEEN r.Anreise_Datum AND r.Abreise_Datum`), aber deren Reinigungsstatus noch auf 'DIRTY' steht (5 Punkte).\nbb) Berechnen Sie den Gesamtumsatz je Zimmerkategorie für das erste Quartal 2026 (3 Punkte).",
                        solution: "ba)\nSELECT z.Zimmer_Nr, z.Etage, z.Reinigungsstatus, g.Nachname, r.Anreise_Datum, r.Abreise_Datum\nFROM tbl_zimmer z\nJOIN tbl_buchungs_position bp ON z.Zimmer_Nr = bp.Zimmer_Nr\nJOIN tbl_reservierung r ON bp.Reservierungs_ID = r.Reservierungs_ID\nJOIN tbl_gast g ON r.Gast_ID = g.Gast_ID\nWHERE CURDATE() >= r.Anreise_Datum AND CURDATE() < r.Abreise_Datum\n  AND z.Reinigungsstatus = 'DIRTY'\nORDER BY z.Etage, z.Zimmer_Nr;\n\nbb)\nSELECT zk.Bezeichner AS Kategorie, SUM(bp.Preis_EUR) AS Gesamtumsatz_EUR\nFROM tbl_zimmer_kategorie zk\nJOIN tbl_zimmer z ON zk.Kategorie_ID = z.Kategorie_ID\nJOIN tbl_buchungs_position bp ON z.Zimmer_Nr = bp.Zimmer_Nr\nJOIN tbl_reservierung r ON bp.Reservierungs_ID = r.Reservierungs_ID\nWHERE r.Anreise_Datum BETWEEN '2026-01-01' AND '2026-03-31'\nGROUP BY zk.Kategorie_ID, zk.Bezeichner\nORDER BY Gesamtumsatz_EUR DESC;"
                    },
                    {
                        id: "14_4_c",
                        label: "c) Algorithmus: Automatische Zimmerzuteilung beim Check-in",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "ALGORITHMEN / ZIMMERZUTEILUNG & UPGRADE",
                        text: "Entwerfen Sie einen Algorithmus für die automatisierte Zimmerzuteilung beim Check-in:\n• Parameter: `gast_vip` (bool), `gebuchte_kategorie_id` (int), `freie_zimmer_liste` (Array von Zimmer-Objekten mit `nr`, `kategorie_id`, `status`).\n• Ein Zimmer kann nur zugewiesen werden, wenn `status == 'CLEAN_INSPECTED'`.\n• Suche zuerst ein freies, sauberes Zimmer in der gebuchten Kategorie.\n• Wenn keines frei ist und `gast_vip == true`: Suche nach einem kostenlosen Upgrade in der nächsthöheren Kategorie (`gebuchte_kategorie_id + 1`).\n• Gibt die `Zimmer_Nr` zurück oder den Fehlercode 'KEIN_ZIMMER_VERFUEGBAR'.\nErstellen Sie den Pseudocode.",
                        solution: "FUNCTION weise_zimmer_zu(gast_vip, gebuchte_kategorie_id, freie_zimmer_liste):\n    // 1. Suche in gebuchter Kategorie\n    FOR EACH zimmer IN freie_zimmer_liste:\n        IF zimmer.kategorie_id == gebuchte_kategorie_id AND zimmer.status == 'CLEAN_INSPECTED' THEN\n            zimmer.status = 'OCCUPIED'\n            RETURN zimmer.nr\n        END IF\n    END FOR\n    \n    // 2. VIP-Upgrade prüfen\n    IF gast_vip == TRUE THEN\n        upgrade_kategorie = gebuchte_kategorie_id + 1\n        FOR EACH zimmer IN freie_zimmer_liste:\n            IF zimmer.kategorie_id == upgrade_kategorie AND zimmer.status == 'CLEAN_INSPECTED' THEN\n                zimmer.status = 'OCCUPIED_VIP_UPGRADE'\n                RETURN zimmer.nr\n            END IF\n        END FOR\n    END IF\n    \n    RETURN 'KEIN_ZIMMER_VERFUEGBAR'\nEND FUNCTION"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 15: Entsorgungswirtschaft & Kreislaufwirtschaft (EcoRecycle GmbH)
    // ----------------------------------------------------------------------
    {
        id: "exam_15",
        title: "Prüfung 15: Fuhrpark-Telematik, RFID & Kreislaufwirtschaft",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • EcoRecycle Umwelttechnik GmbH",
        ausgangssituation: "Sie sind IT-Fachinformatiker bei der EcoRecycle Umwelttechnik GmbH, einem zertifizierten Entsorgungsfachbetrieb. Das Unternehmen digitalisiert seine Entsorgungslogistik mit 80 Müllfahrzeugen über CAN-Bus-Telematik, RFID-Behälteridentifikation und automatisierte Wiegestationen nach dem Kreislaufwirtschaftsgesetz (KrWG).",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: Telematik, RFID-Schüttung & Fuhrpark-TCO-Kalkulation",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "15_1_a",
                        label: "a) RFID-Mülltonnenerkennung (LF-Transponder / 134,2 kHz)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "AUTOMATISIERUNG / RFID-SCHÜTTUNG",
                        text: "An den Entsorgungsfahrzeugen erfassen RFID-Antennen an der Schüttung die Mülltonnen beim Einhängen.\naa) Warum werden für Mülltonnen bevorzugt LF-Transponder (Low Frequency 134,2 kHz) anstelle von UHF-Transpondern (868 MHz) eingesetzt? (4 Punkte).\nab) Nennen Sie zwei Daten, die auf dem Chip der Mülltonne gespeichert sind (3 Punkte).",
                        solution: "aa) Vorteile LF (134,2 kHz) an der Schüttung:\n1. Unempfindlichkeit gegenüber Feuchtigkeit und Schmutz (UHF wird durch nasse Abfälle und Wasser stark gedämpft).\n2. Präzise, kurze Lesereichweite von ca. 10-30 cm: Verhindert, dass benachbarte, noch auf dem Bürgersteig stehende Mülltonnen fälschlicherweise miterfasst werden (kein 'Stray Reading').\nab) Gespeicherte Daten:\n1. Eindeutige Transponder-ID (UID) verknüpft mit dem Kunden-/Objektkonto.\n2. Behältertyp/-volumen (z. B. 120-Liter-Restmüll) und Fraktionscode."
                    },
                    {
                        id: "15_1_b",
                        label: "b) FMS-Schnittstelle (Fleet Management System) & CAN-Bus",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "FUHRPARK-IT / FMS STANDARD & CAN",
                        text: "Der Telematik-Bordcomputer greift auf Fahrzeugdaten über die genormte FMS-Schnittstelle zu.\naa) Welcher Schutzfunktion dient die FMS-Schnittstelle gegenüber einem direkten Anschluss an den fahrzeugeigenen Antriebs-CAN-Bus? (3 Punkte)\nab) Nennen Sie zwei Messwerte, die über FMS ausgelesen werden (3 Punkte).",
                        solution: "aa) Schutzfunktion FMS-Gateway:\nEntkoppelt das fahrzeugkritische Bordnetz (Motor, Bremsen) galvanisch und datentechnisch vom Telematiksystem. Das Gateway lässt Daten nur in eine Richtung (Read-Only) durch, sodass Fehler im Telematikgerät niemals das Fahrverhalten stören können.\nab) Messwerte:\nKraftstoffverbrauch, Kilometerstand, Motordrehzahl, Achslast/Gesamtgewicht, Betriebsstunden der Nebenabtriebe (Schüttung/Presse)."
                    },
                    {
                        id: "15_1_c",
                        label: "c) Fuhrpark-TCO-Vergleich (Diesel vs. E-LKW) im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "INVESTITIONSRECHNUNG / TOTAL COST OF OWNERSHIP",
                        text: "Vergleich zweier Entsorgungsfahrzeuge über eine Laufzeit von 5 Jahren (150.000 km Gesamtlaufleistung):\n• Diesel-LKW: Anschaffung 220.000 EUR; Verbrauch 40 Liter/100 km zu 1,60 EUR/Liter; Wartung: 30.000 EUR.\n• E-LKW: Anschaffung 340.000 EUR abzgl. 80.000 EUR staatlicher Zuschuss; Verbrauch 110 kWh/100 km zu 0,30 EUR/kWh; Wartung: 15.000 EUR.\nBerechnen Sie im Rechengitter die Gesamtbetriebskosten (TCO) beider Fahrzeuge und ermitteln Sie den Kostenvorteil.",
                        solution: "Berechnung im Rechengitter (150.000 km = 1.500 Einheiten à 100 km):\n\n1. Diesel-LKW:\n• Anschaffung = 220.000,00 €\n• Kraftstoffkosten: 1.500 * 40 l * 1,60 €/l = 96.000,00 €\n• Wartungskosten = 30.000,00 €\n• TCO Diesel = 220.000 + 96.000 + 30.000 = 346.000,00 EUR\n\n2. Elektro-LKW:\n• Netto-Anschaffung = 340.000,00 € - 80.000,00 € = 260.000,00 €\n• Stromkosten: 1.500 * 110 kWh * 0,30 €/kWh = 49.500,00 €\n• Wartungskosten = 15.000,00 €\n• TCO Elektro = 260.000 + 49.500 + 15.000 = 324.500,00 EUR\n\n3. Kostenvorteil:\n   346.000,00 € - 324.500,00 € = 21.500,00 EUR Ersparnis zugunsten des E-LKW."
                    },
                    {
                        id: "15_1_d",
                        label: "d) Gesetzliche Nachweispflicht nach KrWG & eANV",
                        points: 4,
                        type: "lines",
                        linesCount: 3,
                        stencil: "UMWELTRECHT / ELEKTRONISCHES NACHWEISVERFAHREN",
                        text: "Erläutern Sie den Zweck des elektronischen Abfallnachweisverfahrens (eANV) mit qualifizierter elektronischer Signatur (QES) bei gefährlichen Abfällen.",
                        solution: "Zweck des eANV:\nLückenlose, manipulationssichere und behördlich nachvollziehbare Dokumentation des Entsorgungswegs von Sonderabfällen (gefährliche Abfälle) vom Abfallerzeuger über den Beförderer bis zur Entsorgungsanlage mittels digital signierter Entsorgungs- und Begleitscheine."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: Industrielle Wiegetechnik (RS-485/Modbus), IP-Schutzarten & Ethernet",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "15_2_a",
                        label: "a) Serielle Busanbindung (RS-485 / Modbus RTU)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "FELDBUSSE / RS-485 DIFFERENZSIGNAL",
                        text: "Fahrzeugwaagen werden über RS-485 an die Erfassungs-PCs angebunden.\naa) Erläutern Sie, warum RS-485 mit symmetrischer Signalübertragung (Differenzspannung) weitaus störsicherer ist als RS-232 (4 Punkte).\nab) Nennen Sie die maximale Leitungslänge von RS-485 und den Zweck von Abschlusswiderständen (Terminatoren) (3 Punkte).",
                        solution: "aa) Symmetrische Signalübertragung bei RS-485:\nRS-485 überträgt das Signal über zwei Adern (A und B) als Spannungsdifferenz (U_A - U_B). Elektromagnetische Störungen wirken auf beide Adern gleichermaßen ein (Gleichtaktstörung). Da der Empfänger nur die Differenz auswertet, heben sich Störspannungen vollständig auf.\nab) Leitungslänge & Terminatoren:\n• Maximale Leitungslänge: Bis zu 1.200 Meter.\n• Abschlusswiderstand (120 Ohm an beiden Bus-Enden): Verhindert Signalreflexionen an den offenen Leitungsenden, die zu Bitfehlern führen würden."
                    },
                    {
                        id: "15_2_b",
                        label: "b) Schutzarten nach DIN EN 60529 (IP-Codes)",
                        points: 6,
                        type: "table",
                        stencil: "HARDWARE-SPEZIFIKATION / IP-SCHUTZARTEN",
                        text: "Schlüsseln Sie die beiden Kennziffern der Schutzarten IP65 und IP67 auf.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["Schutzart", "1. Ziffer (Berührungs- & Fremdkörperschutz)", "2. Ziffer (Wasserschutz)"],
                            rows: [
                                ["IP65 (z. B. Terminal-Gehäuse)", "6: Vollständig staubdicht, vollständiger Berührungsschutz", "5: Schutz gegen Strahlwasser (Düse) aus beliebigem Winkel"],
                                ["IP67 (z. B. Wägezellen in Grube)", "6: Vollständig staubdicht, vollständiger Berührungsschutz", "7: Schutz gegen zeitweiliges Untertauchen in Wasser (1 Meter / 30 Min.)"],
                                ["IP69K (z. B. Schüttungssensoren)", "6: Vollständig staubdicht, vollständiger Berührungsschutz", "9K: Schutz gegen Wasser bei Hochdruck- und Dampfstrahlreinigung"]
                            ]
                        },
                        solution: "1. Ziffer 6 = staubdicht; 2. Ziffer 5 = Strahlwasser; 7 = zeitweiliges Untertauchen; 9K = Hochdruck-/Dampfstrahl."
                    },
                    {
                        id: "15_2_c",
                        label: "c) M12-Industrie-Steckverbinder vs. RJ45",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "INDUSTRIE-VERKABELUNG / M12 INDUSTRIAL ETHERNET",
                        text: "An den Entsorgungs-LKW und Sortieranlagen wird Industrial Ethernet über schraubbare M12-D-Code- und X-Code-Stecker statt RJ45 eingesetzt. Nennen Sie zwei Gründe für diese Entscheidung.",
                        solution: "Gründe für M12:\n1. Hohe mechanische Rüttel- und Vibrationsfestigkeit durch Schraubarretierung (RJ45-Plastikrastnasen brechen bei Erschütterungen im LKW schnell ab).\n2. Schutzart IP67 im gesteckten Zustand (wasser- und staubdicht, korrosionsfest gegen Schmutz und Reinigungsmittel)."
                    },
                    {
                        id: "15_2_d",
                        label: "d) Gigabit Ethernet über Kupfer (1000BASE-T)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "ETHERNET / 1000BASE-T STANDARDS",
                        text: "Wie viele Adernpaare nutzt 1000BASE-T (Gigabit Ethernet) im Vergleich zu 100BASE-TX (Fast Ethernet) und welches Modulationsverfahren kommt zum Einsatz?",
                        solution: "• Adernpaare: 1000BASE-T nutzt alle 4 verdrillten Adernpaare (8 Adern) zeitgleich im Vollduplexbetrieb (Fast Ethernet 100BASE-TX nutzt nur 2 Paare).\n• Modulation: PAM-5 (Pulsamplitudenmodulation mit 5 Spannungspegeln) mit hybrider Echokompensation."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: IT-Sicherheit an Waageterminals & Incident Response bei Ransomware",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "15_3_a",
                        label: "a) Absicherung von Selbstbedienungs-Waageterminals (Kiosk-Modus)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "ENDPOINT SECURITY / KIOSK-MODE & HARDENING",
                        text: "LKW-Fahrer wiegen ihre Fahrzeuge an Outdoor-Touch-Terminals selbständig ein.\naa) Erläutern Sie das Sicherheitskonzept des 'Kiosk-Modus' unter Windows/Linux (4 Punkte).\nab) Nennen Sie zwei Maßnahmen zur USB-Port-Sicherheit an öffentlich zugänglichen Terminals (3 Punkte).",
                        solution: "aa) Kiosk-Modus:\nDas Betriebssystem startet ausschließlich eine einzige dedizierte Anwendung (die Waagen-App). Desktop-Oberfläche, Startmenü, Tastenkombinationen (Strg+Alt+Entf, Alt+Tab, Windows-Taste) und Dateimanager sind gesperrt, sodass Nutzer das System nicht verlassen oder manipulieren können.\nab) USB-Port-Sicherheit:\n1. Physische Blockade ungenutzter Buchsen mit mechanischen USB-Port-Schlössern.\n2. Deaktivierung von USB-Speichermedien per Gruppenrichtlinie (GPO) oder Endpoint-Protection-Software."
                    },
                    {
                        id: "15_3_b",
                        label: "b) Ransomware-Befall & Incident-Response-Phasen nach BSI",
                        points: 6,
                        type: "table",
                        stencil: "NOTFALLMANAGEMENT / BSI INCIDENT RESPONSE PHASEN",
                        text: "Bringen Sie die sechs Phasen des Incident-Response-Prozesses nach BSI in die korrekte chronologische Reihenfolge.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 1,
                            staticCols: [0, 2],
                            options: ["Vorbereitung (Preparation)", "Erkennung & Analyse (Identification)", "Eindämmung (Containment)", "Beseitigung (Eradication)", "Wiederherstellung (Recovery)", "Nachbereitung (Lessons Learned)"],
                            headers: ["Schritt", "Phase nach BSI", "Kernaktivität im Unternehmen"],
                            rows: [
                                ["4. Phase", "Beseitigung (Eradication)", "Malware, bösartige Konten und Backdoors vollständig entfernen"],
                                ["1. Phase", "Vorbereitung (Preparation)", "Notfallpläne erstellen, Rollen definieren, Offline-Backups pflegen"],
                                ["5. Phase", "Wiederherstellung (Recovery)", "Systeme aus sauberen Backups schrittweise hochfahren und testen"],
                                ["2. Phase", "Erkennung & Analyse (Identification)", "Sicherheitsvorfall identifizieren, Schadsoftware analysieren, Scope bestimmen"],
                                ["6. Phase", "Nachbereitung (Lessons Learned)", "Vorfall dokumentieren, Schwachstellen schließen, Maßnahmen optimieren"],
                                ["3. Phase", "Eindämmung (Containment)", "Infizierte Systeme vom Netz trennen, Ausbreitung stoppen"]
                            ]
                        },
                        solution: "1. Vorbereitung -> 2. Identifikation -> 3. Eindämmung -> 4. Beseitigung -> 5. Wiederherstellung -> 6. Lessons Learned."
                    },
                    {
                        id: "15_3_c",
                        label: "c) 3-2-1-1-0 Backup-Regel gegen Ransomware",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "DATENSICHERUNG / IMMUTABLE BACKUPS",
                        text: "Erläutern Sie die moderne '3-2-1-1-0'-Datensicherungsregel (insbesondere die Ziffern 1, 1 und 0).",
                        solution: "• 3: Mindestens 3 Kopien der Daten anfertigen.\n• 2: Auf mindestens 2 verschiedenen Medientypen speichern (z. B. NAS und Tape/Cloud).\n• 1: Mindestens 1 Kopie an einem externen, räumlich getrennten Standort lagern (Offsite).\n• 1: Mindestens 1 Kopie unveränderlich (Immutable / WORM) oder offline (Air-Gapped) vorhalten (Schutz vor Ransomware-Verschlüsselung).\n• 0: 0 Fehler bei regelmäßigen automatisierten Wiederherstellungstests (Recovery Verification)."
                    },
                    {
                        id: "15_3_d",
                        label: "d) IT-Sicherheitsunterweisung der Mitarbeiter",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "AWARENESS / SCHULUNG NACH DSGVO ART. 32",
                        text: "Nennen Sie zwei verpflichtende Themen einer jährlichen IT-Sicherheitsunterweisung für Disponenten und Verwaltungspersonal.",
                        solution: "1. Erkennung von Phishing-Mails, bösartigen Links und gefährlichen E-Mail-Anhängen (Rechnungsbetrug).\n2. Passwort-Hygiene (Nutzung starker Passwörter, Verbot der Weitergabe, Einsatz von 2FA) und sicherer Umgang mit Wechseldatenträgern."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Wägeschein-Datenbank (3NF), SQL & Tourenoptimierungs-Algorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "15_4_a",
                        label: "a) Relationales Entsorgungs-Datenbankschema (3NF)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKMODELLIERUNG / ABFALLWIRTSCHAFT & AVV",
                        text: "Modellieren Sie die Datenbank eines Entsorgungsfachbetriebs in 3NF:\nEin Erzeuger (Kunde) hat Stammdaten. Abfälle werden durch einen 6-stelligen AVV-Schlüssel (Abfallverzeichnis-Verordnung) mit Bezeichnung und Gefährlichkeitsstatus klassifiziert. Ein Wiegeschein dokumentiert eine Wägung mit LKW-Kennzeichen, Erstwägung (brutto), Zweitwägung (tara), Netto-Gewicht, Datum und Entsorgungspreis pro Tonne.\nGeben Sie das Schema mit PK und FK an.",
                        solution: "• tbl_kunde (Kunden_ID [PK], Firmenname, Strasse, PLZ, Ort, Erzeugernummer)\n• tbl_avv_katalog (AVV_Code [PK], Abfallbezeichnung, Ist_Gefaehrlich, Standardpreis_Tonne_EUR)\n• tbl_fahrzeug (Kennzeichen [PK], Leergewicht_kg, Nutzlast_kg, Fahrzeugtyp)\n• tbl_wiegeschein (Wiegeschein_ID [PK], Kunden_ID [FK], AVV_Code [FK], Kennzeichen [FK], Wiegedatum, Bruttogewicht_kg, Taragewicht_kg, Nettogewicht_kg, Gesamtbetrag_EUR)"
                    },
                    {
                        id: "15_4_b",
                        label: "b) SQL: Mengenbilanz & Tonnage-Auswertung",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / ENTSORGUNGSBILANZ",
                        text: "Formulieren Sie die SQL-Statements:\nba) Ermitteln Sie für jede Abfallart (AVV_Code, Abfallbezeichnung) die Gesamttonnage (Summe Nettogewicht in Tonnen: `SUM(Nettogewicht_kg) / 1000`) im Jahr 2026, sortiert nach Tonnage absteigend (5 Punkte).\nbb) Finden Sie alle Wiegescheine von gefährlichen Abfällen (`Ist_Gefaehrlich = true`), bei denen das Nettogewicht 10 Tonnen (10.000 kg) überschreitet (3 Punkte).",
                        solution: "ba)\nSELECT a.AVV_Code, a.Abfallbezeichnung,\n       ROUND(SUM(w.Nettogewicht_kg) / 1000.0, 2) AS Gesamtmenge_Tonnen,\n       COUNT(w.Wiegeschein_ID) AS Anzahl_Wiegungen\nFROM tbl_avv_katalog a\nJOIN tbl_wiegeschein w ON a.AVV_Code = w.AVV_Code\nWHERE w.Wiegedatum BETWEEN '2026-01-01' AND '2026-12-31'\nGROUP BY a.AVV_Code, a.Abfallbezeichnung\nORDER BY Gesamtmenge_Tonnen DESC;\n\nbb)\nSELECT w.Wiegeschein_ID, w.Wiegedatum, k.Firmenname, a.Abfallbezeichnung, w.Nettogewicht_kg\nFROM tbl_wiegeschein w\nJOIN tbl_avv_katalog a ON w.AVV_Code = a.AVV_Code\nJOIN tbl_kunde k ON w.Kunden_ID = k.Kunden_ID\nWHERE a.Ist_Gefaehrlich = TRUE AND w.Nettogewicht_kg >= 10000\nORDER BY w.Nettogewicht_kg DESC;"
                    },
                    {
                        id: "15_4_c",
                        label: "c) Algorithmus: Tourenoptimierung nach der Nearest-Neighbor-Heuristik",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "ALGORITHMEN / TOURENPLANUNG (TSP)",
                        text: "Ein Entsorgungs-LKW soll mehrere Container-Standorte anfahren. Entwerfen Sie eine vereinfachte Nearest-Neighbor-Heuristik zur Ermittlung der Sammelroute:\n• Parameter: `start_depot` (Koordinaten), `abhol_liste` (Array unbesuchter Standorte).\n• Beginne beim `start_depot`.\n• Suche in jedem Schritt den Standort aus `abhol_liste`, der die geringste euklidische Distanz zum aktuellen Standort hat.\n• Füge den Standort zur `route` hinzu, entferne ihn aus `abhol_liste` und setze ihn als neuen aktuellen Standort.\n• Wiederhole, bis `abhol_liste` leer ist, und füge am Ende die Rückfahrt zum `start_depot` an.\nGeben Sie den Pseudocode an.",
                        solution: "FUNCTION optimiere_tour(start_depot, abhol_liste):\n    route = EMPTY_LIST()\n    aktueller_punkt = start_depot\n    route.APPEND(aktueller_punkt)\n    \n    WHILE LENGTH(abhol_liste) > 0:\n        min_distanz = 999999.0\n        naechster_kandidat = NULL\n        kandidat_index = -1\n        \n        FOR i = 0 TO LENGTH(abhol_liste) - 1:\n            standort = abhol_liste[i]\n            distanz = BERECHNE_DISTANZ(aktueller_punkt, standort)\n            IF distanz < min_distanz THEN\n                min_distanz = distanz\n                naechster_kandidat = standort\n                kandidat_index = i\n            END IF\n        END FOR\n        \n        route.APPEND(naechster_kandidat)\n        aktueller_punkt = naechster_kandidat\n        abhol_liste.REMOVE_AT(kandidat_index)\n    END WHILE\n    \n    // Rückfahrt zum Betriebshof\n    route.APPEND(start_depot)\n    RETURN route\nEND FUNCTION"
                    }
                ]
            }
        ]
    },

    // ----------------------------------------------------------------------
    // PRÜFUNG 16: Öffentliche Verwaltung & E-Government (Landesamt IT)
    // ----------------------------------------------------------------------
    {
        id: "exam_16",
        title: "Prüfung 16: E-Government (OZG), BundID & IT-Grundschutz",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Abschlussprüfung Teil 1 • IT-Berufe • Landesamt für Digitalisierung & IT",
        ausgangssituation: "Sie sind Fachinformatiker im Landesamt für Digitalisierung, Breitband und IT. Die Behörde setzt das Onlinezugangsgesetz (OZG 2.0) um und migriert Verwaltungsleistungen auf die BundID / DeutschlandID, implementiert das Behördennetzwerk nach BSI-Standards und bindet Fachverfahren über den XZuFi-Standard an.",
        tasks: [
            {
                number: 1,
                title: "1. Aufgabe: Onlinezugangsgesetz (OZG), EVB-IT & WiBe-Kalkulation",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "16_1_a",
                        label: "a) OZG 2.0 & 'Once-Only'-Prinzip",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "E-GOVERNMENT / OZG 2.0 & ONCE-ONLY",
                        text: "Das OZG verpflichtet Verwaltungen, Verwaltungsleistungen digital bereitzustellen.\naa) Erläutern Sie das 'Once-Only'-Prinzip bei digitalen Bürgeranträgen (4 Punkte).\nab) Nennen Sie zwei Authentifizierungsstufen der BundID (z. B. Substanziell, Hoch) und die zugehörigen Identifikationsmittel (3 Punkte).",
                        solution: "aa) Once-Only-Prinzip:\nBürger und Unternehmen müssen Nachweise und Daten (z. B. Geburtsurkunde, Meldebescheinigung, Handelsregisterauszug), die dem Staat bereits bei einer anderen Behörde vorliegen, nicht erneut einreichen. Mit Zustimmung des Bürgers ruft das Fachverfahren die Daten digital direkt aus den Registern ab (Registermodernisierung).\nab) BundID Vertrauensniveaus:\n• Substanziell: ELSTER-Zertifikat (für Steuer- und Unternehmensdienste).\n• Hoch: Online-Ausweisfunktion (eID) des Personalausweises oder elektronischen Aufenthaltstitels mit PIN über die AusweisApp."
                    },
                    {
                        id: "16_1_b",
                        label: "b) Öffentliches IT-Vergaberecht: EVB-IT Verträge",
                        points: 6,
                        type: "table",
                        stencil: "VERGABERECHT / EVB-IT VERTRAGSTYPEN",
                        text: "Ordnen Sie die behördlichen IT-Beschaffungen dem passenden EVB-IT Vertragstyp zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 1,
                            staticCols: [0, 2],
                            options: ["EVB-IT Kauf", "EVB-IT Erstellung", "EVB-IT Dienstleistung"],
                            headers: ["Beschaffungsmaßnahme", "Zutreffender EVB-IT Vertragstyp", "Rechtlicher Schwerpunkt"],
                            rows: [
                                ["Entwicklung eines individuellen Online-Bauantrags-Fachverfahrens", "EVB-IT Erstellung", "Werkvertragsrecht (§ 631 BGB) mit Abnahme nach Pflichtenheft"],
                                ["Beratung und Unterstützung bei der BSI-Grundschutz-Zertifizierung", "EVB-IT Dienstleistung", "Dienstvertragsrecht (§ 611 BGB) auf Stundenbasis ohne Erfolgsgarantie"],
                                ["Kauf von 300 Standard-Büro-PCs mit Vor-Ort-Garantie", "EVB-IT Kauf", "Kaufrecht (§ 433 BGB) mit Mängelhaftung und Hardware-Garantie"]
                            ]
                        },
                        solution: "PC-Hardware -> EVB-IT Kauf; Softwareentwicklung -> EVB-IT Erstellung (Werkvertrag); Beratung -> EVB-IT Dienstleistung."
                    },
                    {
                        id: "16_1_c",
                        label: "c) Wirtschaftlichkeitsrechnung (WiBe 5.0) im 5-mm-Rechengitter",
                        points: 8,
                        type: "math-grid",
                        gridConfig: { cols: 26, rows: 6 },
                        stencil: "WIBE 5.0 / VERWALTUNGS-WIRTSCHAFTLICHKEIT",
                        text: "Für die Digitalisierung des Wohngeldantrags:\n• Einmalige Entwicklung und Einführung: 180.000,00 EUR\n• Jährliche Betriebskosten des Portals: 20.000,00 EUR\n• Jährliche Personaleinsparung durch automatische Dunkelverarbeitung: 60.000,00 EUR\nBerechnen Sie im Rechengitter für einen Betrachtungszeitraum von 5 Jahren:\n1. Die jährliche Netto-Ersparnis.\n2. Die kumulierte Gesamtersparnis über 5 Jahre.\n3. Die statische Amortisationsdauer in Jahren.",
                        solution: "Berechnung im Rechengitter:\n1. Jährliche Netto-Einsparung:\n   60.000,00 € (Personaleinsparung) - 20.000,00 € (Betriebskosten) = 40.000,00 EUR pro Jahr\n\n2. Kumulierte Gesamtersparnis über 5 Jahre:\n   Einsparungen: 5 Jahre * 40.000,00 € = 200.000,00 €\n   Abzüglich einmalige Einführung = 200.000,00 € - 180.000,00 € = 20.000,00 EUR Reingewinn nach 5 Jahren.\n\n3. Statische Amortisationszeit:\n   Amortisationszeit = Einmalkosten / jährliche Netto-Ersparnis\n   Amortisationszeit = 180.000,00 € / 40.000,00 € = 4,5 Jahre."
                    },
                    {
                        id: "16_1_d",
                        label: "d) IT-Sicherheitsgesetz & Pflicht zur Barrierefreiheit",
                        points: 4,
                        type: "lines",
                        linesCount: 3,
                        stencil: "VERWALTUNGSVORSCHRIFTEN / BGG & BITV 2.0",
                        text: "Erläutern Sie die gesetzliche Pflicht öffentlicher Stellen nach dem Behindertengleichstellungsgesetz (BGG) bezüglich der Veröffentlichung einer 'Erklärung zur Barrierefreiheit'.",
                        solution: "Öffentliche Stellen müssen auf jeder behördlichen Website und App eine ständig aktualisierte Erklärung zur Barrierefreiheit veröffentlichen, die detailliert auflistet, welche Teile der Website noch nicht voll barrierefrei sind, warum dies der Fall ist (wirtschaftliche Unzumutbarkeit) und einen Feedback-Mechanismus für Bürger bereitstellen."
                    }
                ]
            },
            {
                number: 2,
                title: "2. Aufgabe: Behördennetze (NdB), DNSSEC & IPv6-Migrationskonzept",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "16_2_a",
                        label: "a) Netze des Bundes (NdB / IVBB) & Sicherheitszonen",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "BEHÖRDENNETZE / NDB & BSI-ZONEN",
                        text: "Das Landesamt ist an das Regierungsnetz 'Netze des Bundes' (NdB) angebunden.\naa) Nennen Sie den Hauptzweck des NdB im Vergleich zum öffentlichen Internet (3 Punkte).\nab) Erläutern Sie das Drei-Zonen-Modell (Interne Zone, DMZ, Externe Zone) an Behörden-Gateways (4 Punkte).",
                        solution: "aa) Zweck NdB:\nEin geschlossenes, vom öffentlichen Internet physisch und logisch getrenntes IP-Netzwerk für die verschlüsselte, hochverfügbare Kommunikation zwischen Bundes-, Landes- und Kommunalbehörden mit zentralen Sicherheitsgateways.\nab) Drei-Zonen-Modell:\n• Externe Zone (Untrusted): Öffentliches Internet bzw. offene Zugänge.\n• Demilitarisierte Zone (DMZ): Isoliertes Zwischennetzwerk für öffentlich erreichbare Dienste (z. B. Bürger-Webportale, Mail-Relays), geschützt durch Außen- und Innen-Firewalls.\n• Interne Zone (Trusted): Hochsicherer Bereich für Fachverfahren, Datenbanken und Mitarbeiter-Arbeitsplätze, der niemals direkt aus dem Internet erreichbar ist."
                    },
                    {
                        id: "16_2_b",
                        label: "b) DNSSEC (Domain Name System Security Extensions)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "INTERNETPROTOKOLLE / DNSSEC INTEGRITÄT",
                        text: "Zur Absicherung der behördlichen Domains (.bayern.de, .bund.de) wird DNSSEC eingeführt.\naa) Welche Angriffsart (z. B. DNS-Spoofing / Cache Poisoning) wird durch DNSSEC verhindert? (3 Punkte)\nab) Welche zwei kryptografischen Record-Typen (z. B. RRSIG, DNSKEY, DS) spielen bei DNSSEC eine zentrale Rolle? (3 Punkte).",
                        solution: "aa) Schutzwirkung:\nDNSSEC verhindert DNS-Cache-Poisoning und DNS-Spoofing. Angreifer können DNS-Antworten nicht manipulieren, um Bürger auf gefälschte Phishing-Seiten staatlicher Portale umzuleiten.\nab) Record-Typen:\n• RRSIG (Resource Record Signature): Digitale kryptografische Signatur über eine Gruppe von DNS-Einträgen (RRSet).\n• DNSKEY: Enthält den öffentlichen Schlüssel der Zone zur Verifikation der RRSIG-Signaturen.\n• DS (Delegation Signer): Hashwert des DNSKEY der Subzone, der in der Elternzone hinterlegt ist (Aufbau der Chain of Trust bis zur Root-Zone)."
                    },
                    {
                        id: "16_2_c",
                        label: "c) IPv6-Adressaufbau & Prefix-Kalkulation",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "NETZWERKTECHNIK / IPV6 SUBNETTING",
                        text: "Das Landesamt erhält das offizielle Behörden-Präfix `2001:db8:1200::/48`.\naa) Wie viele Bits stehen der Behörde zur Bildung eigener interner Subnetze zur Verfügung, wenn jedes Subnetz ein Standard `/64` sein soll? (3 Punkte)\nab) Wie viele `/64` Subnetze können damit gebildet werden? (3 Punkte).",
                        solution: "aa) Verfügbare Subnetz-Bits:\nSubnetz-Bits = 64 - 48 = 16 Bits.\nab) Anzahl der /64 Subnetze:\n2^16 = 65.536 eigenständige /64-Subnetze."
                    },
                    {
                        id: "16_2_d",
                        label: "d) Dual-Stack vs. NAT64/DNS64 Migrationsstrategie",
                        points: 6,
                        type: "table",
                        stencil: "IPV6-MIGRATION / TRANSITIONSTECHNIKEN",
                        text: "Vergleichen Sie die beiden Übergangstechniken bei der IPv6-Einführung.",
                        tableConfig: {
                            type: "fill",
                            staticCols: [0],
                            headers: ["Kriterium", "Dual-Stack", "NAT64 / DNS64"],
                            rows: [
                                ["Funktionsprinzip", "Gleichzeitiger Parallelbetrieb von IPv4 und IPv6 auf allen Routern und Hosts", "Reines IPv6-Netzwerk greift über Gateway-Übersetzer auf IPv4-Server zu"],
                                ["IPv4-Adressbedarf", "Benötigt weiterhin auf jedem Endgerät eine IPv4-Adresse", "Keine IPv4-Adressen an Endgeräten notwendig (spart IPv4-Pool)"],
                                ["Komplexität", "Geringe Protokollübersetzung, aber doppelter Administrationsaufwand", "Zentralisiertes Übersetzungsgateway, Inkompatibilität bei IPv4-Literalen"]
                            ]
                        },
                        solution: "Dual-Stack: Parallelbetrieb, hoher IPv4-Bedarf; NAT64: Reines IPv6-Netz mit Übersetzung, spart IPv4-Adressen."
                    }
                ]
            },
            {
                number: 3,
                title: "3. Aufgabe: BSI IT-Grundschutz, Notfallmanagement & Informationsfreiheit",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "16_3_a",
                        label: "a) BSI IT-Grundschutz Vorgehensweise (BSI-Standard 200-2)",
                        points: 7,
                        type: "lines",
                        linesCount: 5,
                        stencil: "BSI STANDARDS / IT-GRUNDSCHUTZ BSI 200-2",
                        text: "Die Behörde führt eine IT-Grundschutz-Modellierung nach BSI-Standard 200-2 durch.\naa) Erläutern Sie die Schritte: Strukturanalyse, Schutzbedarfsfeststellung und Modellierung mit Grundschutz-Bausteinen (4 Punkte).\nab) Was unterscheidet die 'Basis-Absicherung' von der 'Standard-Absicherung'? (3 Punkte).",
                        solution: "aa) Schritte nach BSI 200-2:\n1. Strukturanalyse: Vollständige Erfassung aller IT-Systeme, Netze, Räume, Anwendungen und Geschäftsprozesse.\n2. Schutzbedarfsfeststellung: Zuweisung des Schutzbedarfs (Normal, Hoch, Sehr hoch) bezüglich Vertraulichkeit, Integrität und Verfügbarkeit.\n3. Modellierung: Zuordnung relevanter IT-Grundschutz-Bausteine aus dem IT-Grundschutz-Kompendium (z. B. SYS.1.1 Server, APP.3.1 Webanwendungen) und Ermittlung von Sicherheitsanforderungen.\nab) Basis- vs. Standard-Absicherung:\n• Basis-Absicherung: Schnelle Umsetzung elementarer Basisanforderungen zum grundlegenden Überlebensschutz gegen Massenangriffe.\n• Standard-Absicherung: Vollständige Erfüllung aller Standard- und Kernanforderungen mit Zertifizierungseignung (ISO 27001 auf Basis von IT-Grundschutz)."
                    },
                    {
                        id: "16_3_b",
                        label: "b) Informationsfreiheitsgesetz (IFG) vs. Datenschutz (DSGVO)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "VERWALTUNGSRECHT / IFG VS. DATENSCHUTZ",
                        text: "Ein Bürger stellt nach dem Informationsfreiheitsgesetz (IFG) einen Antrag auf Einsicht in Behördenakten. Erläutern Sie das Spannungsverhältnis zwischen dem Jedermann-Auskunftsrecht nach IFG und dem Schutz personenbezogener Daten Dritter nach DSGVO.",
                        solution: "Spannungsverhältnis:\nDas IFG gewährt grundsätzlich jedermann freien Zugang zu amtlichen Informationen der Verwaltung ohne Nachweis eines berechtigten Interesses. Stehen in den Akten jedoch personenbezogene Daten Dritter (z. B. Namen, Notizen von Sachbearbeitern oder Antragstellern), greift der Schutz nach DSGVO: Diese Daten müssen vor der Herausgabe geschwärzt/anonymisiert werden, es sei denn, die betroffene Person willigt ein oder das Gesetz überwiegt ausnahmsweise."
                    },
                    {
                        id: "16_3_c",
                        label: "c) Notfallhandbuch nach BSI-Standard 200-4",
                        points: 6,
                        type: "table",
                        stencil: "BCM / BSI 200-4 NOTFALLDOKUMENTATION",
                        text: "Ordnen Sie die Dokumenttypen des Business Continuity Managements (BCM) ihren Aufgaben zu.",
                        tableConfig: {
                            type: "matching",
                            targetCol: 0,
                            options: ["Geschäftsfortführungsplan (BCP)", "Wiederanlaufplan (DRP)", "Krisenstabs-Alarmierungsplan"],
                            headers: ["Dokumenttyp", "Verwendungszweck", "Typischer Inhalt"],
                            rows: [
                                ["Wiederanlaufplan (DRP)", "Schrittweises Wiederhochfahren der IT-Infrastruktur", "Reihenfolge des Bootens: Active Directory -> DNS -> Datenbanken -> Apps"],
                                ["Krisenstabs-Alarmierungsplan", "Unverzügliche Einberufung der Entscheidungsträger", "Notfallkontakte, Stellvertreterregelungen, Lagezentrum-Einwahl"],
                                ["Geschäftsfortführungsplan (BCP)", "Sicherstellung der kritischen Kernprozesse im Notbetrieb", "Ausweicharbeitsplätze, manuelle Notfallformulare, Minimalpersonal"]
                            ]
                        },
                        solution: "BCP -> Kernprozesse im Notbetrieb; DRP -> IT-Wiederanlauf-Reihenfolge; Alarmierungsplan -> Krisenstab-Einberufung."
                    },
                    {
                        id: "16_3_d",
                        label: "d) E-Mail-Verschlüsselung in der Verwaltung (S/MIME & PGP)",
                        points: 6,
                        type: "lines",
                        linesCount: 4,
                        stencil: "KRYPTOGRAFIE / BEHÖRDEN-MAIL S/MIME",
                        text: "Bürger und Behörden tauschen Bescheide per E-Mail aus. Warum verlangt die Verwaltung hierfür in der Regel X.509-Zertifikate (S/MIME) anstelle von OpenPGP?",
                        solution: "S/MIME basiert auf einer hierarchischen Vertrauensinfrastruktur (PKI) mit offiziellen, staatlich akkreditierten Zertifizierungsstellen (Root-CAs wie der V-PKI des Bundes), die die Identität behördlich validieren. OpenPGP nutzt ein dezentrales 'Web of Trust', das für automatisierte, rechtsverbindliche Verwaltungsprozesse und Zertifikats-Widerrufslisten (CRLs/OCSP) organisatorisch schwer steuerbar ist."
                    }
                ]
            },
            {
                number: 4,
                title: "4. Aufgabe: Antrags- und Bürgerdatenbank (3NF), SQL & Berechtigungs-Prüfungsalgorithmus",
                totalPoints: 25,
                subtasks: [
                    {
                        id: "16_4_a",
                        label: "a) Relationales OZG-Antragsdatenbankschema (3NF)",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "DATENBANKMODELLIERUNG / OZG-PORTALVERBUND",
                        text: "Modellieren Sie die Datenbank für ein kommunales OZG-Bürgerportal in 3NF:\nEin Bürger hat Stammdaten und eine eindeutige Steuer-ID / bPK (bereichsspezifisches Personenkennzeichen). Ein Leistungskatalog (Leika / XZuFi) listet alle Verwaltungsdienstleistungen auf. Ein Bürger reicht digitale Anträge ein, die einem Sachbearbeiter zur Bearbeitung zugewiesen werden. Zu jedem Antrag existiert ein Antragsstatus und ein Bescheiddatum.\nGeben Sie das Schema mit PK und FK an.",
                        solution: "• tbl_buerger (Buerger_ID [PK], Steuer_ID, Nachname, Vorname, Geburtsdatum, Mail, Strasse, PLZ, Ort)\n• tbl_leika_leistung (Leika_ID [PK], Leistungsname, Zustaendiges_Amt, Bearbeitungsfrist_Tage, Gebuehr_EUR)\n• tbl_sachbearbeiter (Sachbearbeiter_ID [PK], Nachname, Vorname, Amtsbezeichnung, Dienstmail)\n• tbl_antrag (Antrag_ID [PK], Buerger_ID [FK], Leika_ID [FK], Sachbearbeiter_ID [FK], Eingangsdatum, Status, Bescheiddatum, Bescheid_Ergebnis)"
                    },
                    {
                        id: "16_4_b",
                        label: "b) SQL: Fristüberwachung & Amtsauswertung",
                        points: 8,
                        type: "lines",
                        linesCount: 6,
                        stencil: "SQL-QUERIES / VERWALTUNGSCONTROLLING",
                        text: "Formulieren Sie die SQL-Statements:\nba) Ermitteln Sie alle offenen Anträge (`Status = 'IN_BEARBEITUNG'`), deren Eingang länger zurückliegt als die zulässige Frist der Leistung (`DATEDIFF(CURDATE(), Eingangsdatum) > Bearbeitungsfrist_Tage`) (5 Punkte).\nbb) Berechnen Sie die Gesamteinnahmen aus Antragsgebühren (`SUM(Gebuehr_EUR)`) je zuständigem Amt für das Jahr 2026 (3 Punkte).",
                        solution: "ba)\nSELECT a.Antrag_ID, b.Nachname, b.Vorname, l.Leistungsname, a.Eingangsdatum, \n       DATEDIFF(CURDATE(), a.Eingangsdatum) AS Tage_in_Bearbeitung, \n       l.Bearbeitungsfrist_Tage, s.Nachname AS Sachbearbeiter\nFROM tbl_antrag a\nJOIN tbl_buerger b ON a.Buerger_ID = b.Buerger_ID\nJOIN tbl_leika_leistung l ON a.Leika_ID = l.Leika_ID\nLEFT JOIN tbl_sachbearbeiter s ON a.Sachbearbeiter_ID = s.Sachbearbeiter_ID\nWHERE a.Status = 'IN_BEARBEITUNG'\n  AND DATEDIFF(CURDATE(), a.Eingangsdatum) > l.Bearbeitungsfrist_Tage\nORDER BY Tage_in_Bearbeitung DESC;\n\nbb)\nSELECT l.Zustaendiges_Amt, COUNT(a.Antrag_ID) AS Anzahl_Antraege, SUM(l.Gebuehr_EUR) AS Gesamteinnahmen_EUR\nFROM tbl_leika_leistung l\nJOIN tbl_antrag a ON l.Leika_ID = a.Leika_ID\nWHERE a.Eingangsdatum BETWEEN '2026-01-01' AND '2026-12-31'\n  AND a.Status = 'BESCHIEDEN'\nGROUP BY l.Zustaendiges_Amt\nORDER BY Gesamteinnahmen_EUR DESC;"
                    },
                    {
                        id: "16_4_c",
                        label: "c) Algorithmus: Automatisierte Vorprüfung von Antragsberechtigungen",
                        points: 9,
                        type: "lines",
                        linesCount: 7,
                        stencil: "ALGORITHMEN / DUNKELVERARBEITUNG IN BEHÖRDEN",
                        text: "Entwerfen Sie einen Algorithmus für die automatisierte Vorprüfung (Dunkelverarbeitung) eines Wohngeldantrags:\n• Parameter: `haushaltseinkommen_eur` (float), `miete_eur` (float), `haushaltsmitglieder` (int), `schufa_negativmerkmale` (bool), `mindesteinkommen_vorhanden` (bool).\n• Bedingung 1: Wenn `mindesteinkommen_vorhanden == false`, Rückgabe 'ABLEHNUNG_UNTERDECKUNG' (Verweis auf Bürgergeld).\n• Bedingung 2: Berechne Pro-Kopf-Einkommen = `haushaltseinkommen_eur / haushaltsmitglieder`. Wenn Pro-Kopf-Einkommen > 1.800 EUR: Rückgabe 'ABLEHNUNG_EINKOMMENSGRENZE'.\n• Bedingung 3: Mietbelastungsquote = `miete_eur / haushaltseinkommen_eur`. Wenn Quote >= 0.35 und `schufa_negativmerkmale == false`: Rückgabe 'BEWILLIGUNG_AUTOMATISCH'.\n• In allen übrigen Grenzfällen: Rückgabe 'MANUELLE_PRUEFUNG_SACHBEARBEITER'.\nErstellen Sie den Pseudocode.",
                        solution: "FUNCTION pruefe_wohngeld_antrag(haushaltseinkommen_eur, miete_eur, haushaltsmitglieder, schufa_negativmerkmale, mindesteinkommen_vorhanden):\n    // 1. Plausibilitätsprüfung Existenzminimum\n    IF mindesteinkommen_vorhanden == FALSE THEN\n        RETURN 'ABLEHNUNG_UNTERDECKUNG (Zuständigkeit Jobcenter / Bürgergeld)'\n    END IF\n    \n    IF haushaltsmitglieder <= 0 THEN\n        RETURN 'FEHLER: Ungültige Personenzahl'\n    END IF\n    \n    // 2. Einkommensgrenze prüfen\n    pro_kopf_einkommen = haushaltseinkommen_eur / haushaltsmitglieder\n    IF pro_kopf_einkommen > 1800.0 THEN\n        RETURN 'ABLEHNUNG_EINKOMMENSGRENZE_UEBERSCHRITTEN'\n    END IF\n    \n    // 3. Mietbelastung berechnen\n    IF haushaltseinkommen_eur > 0 THEN\n        mietquote = miete_eur / haushaltseinkommen_eur\n    ELSE\n        mietquote = 1.0\n    END IF\n    \n    // 4. Automatische Bewilligung vs. manuelle Prüfung\n    IF mietquote >= 0.35 AND schufa_negativmerkmale == FALSE THEN\n        RETURN 'BEWILLIGUNG_AUTOMATISCH (Hohe Mietlast, Nachweise schlüssig)'\n    ELSE\n        RETURN 'MANUELLE_PRUEFUNG_SACHBEARBEITER (Grenzfall / Einzelprüfung erforderlich)'\n    END IF\nEND FUNCTION"
                    }
                ]
            }
        ]
    }

];

// Helper to get all exam sets
function getAvailableExamSets() {
    return EXAM_SETS;
}

// Generates a dynamic 100-point balanced random exam (Aufgabe 1 to 4 à 25 points)
function generateDynamicFullExam() {
    const task1Pool = EXAM_SETS.map(e => e.tasks[0]);
    const task2Pool = EXAM_SETS.map(e => e.tasks[1]);
    const task3Pool = EXAM_SETS.map(e => e.tasks[2]);
    const task4Pool = EXAM_SETS.map(e => e.tasks[3]);

    const randomChoice = arr => arr[Math.floor(Math.random() * arr.length)];

    return {
        id: "exam_random_" + Date.now(),
        title: "🎲 Dynamische Zufalls-Vollprüfung (100 Punkte)",
        badge: "100 Punkte • 90 Min.",
        subtitle: "Zufällig generierte Abschlussprüfung Teil 1 • 4 Aufgaben à 25 Punkte",
        ausgangssituation: "Sie absolvieren Ihre Prüfungsvorbereitung im Prüfungsmodus. Für diese Simulation wurden 4 vollwertige Prüfungsaufgaben aus allen IT-Fachbereichen dynamisch kombiniert. Bearbeiten Sie alle Aufgaben sorgfältig.",
        tasks: [
            JSON.parse(JSON.stringify(randomChoice(task1Pool))),
            JSON.parse(JSON.stringify(randomChoice(task2Pool))),
            JSON.parse(JSON.stringify(randomChoice(task3Pool))),
            JSON.parse(JSON.stringify(randomChoice(task4Pool)))
        ]
    };
}
