// ==========================================================================
// AP1 VOLLPRÜFUNGEN - 4 VOLLSTÄNDIGE 100-PUNKTE-PRÜFUNGSSÄTZE (AUFGABE 1-4)
// Pädagogisch aufbereitete, 100% urheberrechtskonforme Prüfungsbögen
// Entspricht exakt dem amtlichen 1:1 IHK-Prüfungsbogen-Design
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
                            headers: ["SMART-Kriterium", "Bedeutung / Anforderung", "Projektbeispiel"],
                            rows: [
                                ["S - Spezifisch", "Ziel muss eindeutig, konkret und präzise formuliert sein", "Kundenportal mit REST-API für Heizungs- und Lichtsteuerung"],
                                ["M - Messbar", "Zielerreichung muss quantitativ oder qualitativ prüfbar sein", "Antwortzeit der API liegt bei 99 % der Anfragen unter 200 ms"],
                                ["A - Akzeptiert", "Ziel muss von den Stakeholdern und Teammitgliedern getragen werden", "Freigabe der Anforderungen durch Vertrieb und Entwicklerteam"],
                                ["R - Realistisch", "Ziel muss mit verfügbaren Ressourcen machbar sein", "Umsetzung mit bestehendem Team von 3 Entwicklern in 4 Monaten"],
                                ["T - Terminiert", "Feste zeitliche Zielvorgabe mit Deadline", "Abschluss des Rollouts bis zum 30. November 2026"]
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
                        solution: "Klassisches Kalkulationsschema nach IHK: LEP ➔ ZEP ➔ BEP ➔ Einstandspreis ➔ SKP ➔ BVP (Netto) ➔ ZVP ➔ LVP (Netto) ➔ BVP (Brutto inkl. USt)."
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
