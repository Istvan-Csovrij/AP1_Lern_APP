/**
 * EXAM ATTACHMENTS & DUAL-PANE SPLIT-VIEW ENGINE
 * 
 * Enthält sowohl die amtlichen VORGABE-ANLAGEN (Informationsblätter)
 * als auch die offiziellen LÖSUNGS- & ABGABE-RAHMEN
 * ("Bitte geben Sie dieses Blatt mit Ihren Lösungen ab")
 * inklusive IHK-Musterlösungen, Punkteschlüsseln und Berechnungsmasken.
 */

const ExamAttachments = {
    // Current active display mode: 'info' (Vorgabe), 'rahmen' (Abgabeblatt), 'solution' (Musterlösung)
    displayMode: "info",
    activeSubTab: "all",

    // Sets the display mode (Info-Vorgabe vs. Abgabe-Rahmen vs. Musterlösung)
    setMode: function(mode) {
        this.displayMode = mode;
        this.refreshPane();
    },

    // Sets active subtab
    setTab: function(tabId) {
        this.activeSubTab = tabId;
        this.refreshPane();
    },

    refreshPane: function() {
        const pane = document.getElementById("exam-split-attachments-pane");
        if (pane && typeof activeExamSet !== "undefined" && typeof examCurrentPage !== "undefined") {
            pane.innerHTML = this.renderAttachmentsForPage(activeExamSet, examCurrentPage);
        }
    },

    // Main entry point
    renderAttachmentsForPage: function(exam, pageIndex) {
        if (!exam) return "";
        const examId = exam.id || "";

        // PRÜFUNG 23: DAR-SYS GMBH & SYSTEMHAUS KG (IBBW ORIGINALPRÜFUNG)
        if (examId === "exam_23") {
            return this.renderDarSysAttachments(pageIndex);
        }

        // PRÜFUNG 22: SOFTTECH SOLUTIONS GMBH (BAWÜ SOMMER 2026 FA 230)
        if (examId === "exam_22") {
            return this.renderSoftTechAttachments(pageIndex);
        }

        // PRÜFUNGEN 1 BIS 21: RICHTIGE THEMENBEZOGENE ANLAGEN MIT AUSFÜLL-RAHMEN
        return this.renderGenericAttachments(exam, pageIndex);
    },

    // =========================================================================
    // PRÜFUNG 23: DARSYS GMBH (IBBW BADEN-WÜRTTEMBERG ORIGINAL)
    // =========================================================================
    renderDarSysAttachments: function(pageIndex) {
        // Page 0: Deckblatt -> Overview of all 12 authentic Anlagen
        if (pageIndex === 0) {
            return `
                <div class="attachment-sheet">
                    <div class="attachment-header">
                        <span>IBBW Abschlussprüfung Teil 1 &bull; DarSys GmbH</span>
                        <span class="attachment-tag">Offizielles Anlagen-Verzeichnis</span>
                        <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="attachment-body">
                        <div class="attachment-doc-title">
                            <i class="fa-solid fa-folder-open" style="color: #f59e0b;"></i> Übersicht der 12 amtlichen Prüfungs-Anlagen
                        </div>
                        <p style="font-size: 0.9rem; color: #475569; line-height: 1.5; margin-bottom: 1rem;">
                            Dieser authentische IHK/IBBW-Prüfungssatz besteht aus zwei getrennten Bereichen:
                            <strong>6 Vorgabe-Anlagen (Informationsblätter)</strong> und <strong>6 Lösungs-Anlagen (Abgabeblätter mit Ausfüll-Rahmen)</strong>.
                        </p>

                        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                            <div class="anlage-summary-card" onclick="changeExamPage(1)">
                                <div class="anlage-badge">IT 1 &bull; Aufgabe 1</div>
                                <div style="font-size: 0.88rem; line-height: 1.45;">
                                    <strong>Vorgaben:</strong> Anlage 1 (Kunden-E-Mail Dr. DarSys) &bull; Anlage 2 (Produktsortiment 15 Kriterien)<br>
                                    <span style="color: #0284c7; font-weight: 700;">✍️ Abgabeblätter:</span> Anlage 7 (Nutzwertanalyse-Rahmen) &bull; Anlage 8 (DIN 5008 Angebotsschreiben)
                                </div>
                            </div>

                            <div class="anlage-summary-card" onclick="changeExamPage(2)">
                                <div class="anlage-badge" style="background: #0284c7;">IT 2 &bull; Aufgabe 2</div>
                                <div style="font-size: 0.88rem; line-height: 1.45;">
                                    <strong>Vorgaben:</strong> Anlage 3 (Logischer Netzwerkplan IPv4/IPv6) &bull; Anlage 4 (Kabeldatenblatt Cat.5e U/UTP)<br>
                                    <span style="color: #0284c7; font-weight: 700;">✍️ Abgabeblätter:</span> Anlage 9 (Dual-Stack Adresstabelle) &bull; Anlage 10 (Kunden-E-Mail EMV-Störung)
                                </div>
                            </div>

                            <div class="anlage-summary-card" onclick="changeExamPage(3)">
                                <div class="anlage-badge" style="background: #d97706;">IT 3 &bull; Aufgabe 3</div>
                                <div style="font-size: 0.88rem; line-height: 1.45;">
                                    <strong>Vorgaben:</strong> Anlage 5 (BSI-Schutzziele Klassifikation) &bull; Anlage 6 (XML-Logdatei Struktur)<br>
                                    <span style="color: #0284c7; font-weight: 700;">✍️ Abgabeblätter:</span> Anlage 11 (BSI-Auswahlrahmen) &bull; Anlage 12.1/12.2 (Datenbankentwurf &amp; ER-Modell)
                                </div>
                            </div>

                            <div class="anlage-summary-card" onclick="changeExamPage(4)">
                                <div class="anlage-badge" style="background: #475569;">IT 4 &bull; Aufgabe 4</div>
                                <div style="font-size: 0.88rem; line-height: 1.45;">
                                    <strong>Bewertung:</strong> Formale Kriterien (DIN 5008, Rechenwege, Vollständigkeit aller Abgabeblätter).
                                </div>
                            </div>
                        </div>

                        <div style="margin-top: 1.25rem; padding: 0.85rem; background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 8px; font-size: 0.86rem; color: #1e40af;">
                            <i class="fa-solid fa-lightbulb"></i> <strong>Hinweis zur Ansicht:</strong> In den einzelnen Aufgaben können Sie oben in der Leiste zwischen <strong>„📄 Vorgabe-Anlage“</strong>, <strong>„✍️ Abgabe-Rahmen“</strong> und <strong>„💡 IHK-Musterlösung“</strong> umschalten!
                        </div>
                    </div>
                </div>
            `;
        }

        // Helper header with 3 toggle buttons: Info vs. Rahmen vs. Musterlösung
        const renderModeHeader = (title, defaultSubTabLabel) => {
            return `
                <div class="attachment-header">
                    <span>${title}</span>
                    <div style="display: flex; gap: 4px; align-items: center; flex-wrap: wrap;">
                        <button type="button" class="att-tab-btn ${this.displayMode === 'info' ? 'active' : ''}" onclick="ExamAttachments.setMode('info')" title="Informationsblätter zur Aufgabenstellung">
                            <i class="fa-solid fa-file-lines"></i> 📄 Vorgabe-Info
                        </button>
                        <button type="button" class="att-tab-btn ${this.displayMode === 'rahmen' ? 'active' : ''}" onclick="ExamAttachments.setMode('rahmen')" title="Offizieller Abgabe- &amp; Ausfüll-Rahmen">
                            <i class="fa-solid fa-pen-to-square"></i> ✍️ Abgabe-Rahmen
                        </button>
                        <button type="button" class="ihk-sol-toggle-btn ${this.displayMode === 'solution' ? 'active' : ''}" onclick="ExamAttachments.setMode(ExamAttachments.displayMode === 'solution' ? 'rahmen' : 'solution')" title="Amtliche IHK-Musterlösung im Rahmen einblenden">
                            <i class="fa-solid fa-award"></i> 💡 IHK-Lösung
                        </button>
                        <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            `;
        };

        // ---------------------------------------------------------------------
        // IT 1: ARBEITSMITTELBESCHAFFUNG (Anlagen 1, 2, 7, 8)
        // ---------------------------------------------------------------------
        if (pageIndex === 1) {
            const isSol = this.displayMode === "solution";

            // VORGABE-ANLAGEN: Anlage 1 (E-Mail) & Anlage 2 (Produktsortiment)
            if (this.displayMode === "info") {
                return `
                    <div class="attachment-sheet">
                        ${renderModeHeader("IT 1 &bull; Vorgabe-Anlagen (Informationsblätter)", "Anlagen")}
                        <div class="attachment-body">
                            
                            <!-- ANLAGE 1: KUNDEN-E-MAIL -->
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-envelope" style="color: #6366f1;"></i> Anlage 1: Kunden-E-Mail von Frau Dr. DarSys (Evelin Schreiber)
                            </div>
                            <div class="authentic-email-box" style="margin-bottom: 1.5rem;">
                                <div class="email-meta-row"><strong>Von:</strong> Dr. Evelin Schreiber &lt;e.schreiber@darsys-webdesign.de&gt;</div>
                                <div class="email-meta-row"><strong>An:</strong> Systemhaus KG Beratung &lt;beratung@systemhaus-kg.de&gt;</div>
                                <div class="email-meta-row"><strong>Datum:</strong> 14. Oktober, 09:15 Uhr &bull; <strong>Betreff:</strong> Ausstattung 15 Webdesign-Arbeitsplätze</div>
                                <div class="email-content-text">
                                    Sehr geehrtes Systemhaus-Team,<br><br>
                                    wir erweitern unseren Hauptstandort in Karlsruhe-Durlach um <strong>15 moderne Arbeitsplätze</strong> für unsere Web- und UI/UX-Designer. Die bisherigen Rechner stoßen bei Adobe Creative Cloud (Photoshop, Illustrator, After Effects), lokalen Docker-Containern und 4K-Rendering an Grenzen.<br><br>
                                    <strong>Unsere harten Mindestanforderungen an die neuen PCs:</strong>
                                    <ul>
                                        <li><strong>Prozessor (CPU):</strong> Mindestens 4 Kerne / Basistakt &ge; 2,8 GHz (bevorzugt &ge; 8 Kerne für flüssiges Multitasking).</li>
                                        <li><strong>Arbeitsspeicher (RAM):</strong> Mindestens 32 GB RAM (unsere Tests zeigten, dass 16 GB permanent vollaufen).</li>
                                        <li><strong>Grafikkarte (GPU):</strong> Dedizierte PCIe-Grafikkarte (Mittel- bis High-End). <em>Onboard-Grafikkarten sind für unsere Design-Workflows absolut ausgeschlossen!</em></li>
                                        <li><strong>Festplattenspeicher:</strong> Schnelle PCIe-NVMe-SSD mit mindestens 500 GB (reine mechanische HDDs sind unzulässig).</li>
                                        <li><strong>Geräuschentwicklung:</strong> Maximal 35 dB(A) unter Volllast im Großraumbüro. Werte ab 38 dB(A) führen zu Konzentrationsproblemen und scheiden aus.</li>
                                        <li><strong>Energieeffizienz:</strong> Das Netzteil muss energieeffizient sein (80 PLUS Gold Standard erwünscht, Wirkungsgrad &ge; 85%).</li>
                                        <li><strong>Budget:</strong> Netto-Stückpreis maximal 950,00 € pro PC.</li>
                                    </ul>
                                    Bitte erstellen Sie auf Basis einer Nutzwertanalyse ein vollständiges Angebot über 15 Komplettsysteme inkl. Windows 10 Pro Lizenz und Vor-Ort-Installation.<br><br>
                                    Mit freundlichen Grüßen,<br>
                                    <strong>Dr. Evelin Schreiber</strong> &bull; Geschäftsführerin DarSys GmbH
                                </div>
                            </div>

                            <!-- ANLAGE 2: PRODUKTSORTIMENT -->
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-desktop" style="color: #0284c7;"></i> Anlage 2: Produktsortiment (Systemhaus KG) &ndash; Vollständige Spezifikationen
                            </div>
                            <div class="att-spec-table-wrap">
                                <table class="att-spec-table">
                                    <thead>
                                        <tr>
                                            <th style="width: 25%;">Kriterium / Merkmal</th>
                                            <th style="width: 25%;">PC 1 (OfficeBasic Pro)</th>
                                            <th style="width: 25%; background: #e0f2fe; color: #0369a1;">PC 2 (CreativeStation Work)</th>
                                            <th style="width: 25%;">PC 3 (PerformancePro Extreme)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>1. Massenspeicher</strong></td>
                                            <td>2 TB HDD 7200 RPM, SATA 6 Gb/s<br><span class="ko-badge">Nur HDD / Keine SSD (K.O.)</span></td>
                                            <td style="background: #f0fdf4;"><strong>512 GB M.2 NVMe PCIe SSD</strong><br>TLC-NAND, 3.500 MB/s Leserate</td>
                                            <td>512 GB PCIe NVMe TLC SSD<br>High-Speed Speicher</td>
                                        </tr>
                                        <tr>
                                            <td><strong>2. Grafikkarte (GPU)</strong></td>
                                            <td>AMD Radeon Graphics (integriert)<br><span class="ko-badge">Keine PCIe-GPU / Onboard (K.O.)</span></td>
                                            <td style="background: #f0fdf4;"><strong>PCIe-Grafikkarte Mittelklasse</strong><br>NVIDIA GeForce RTX (8 GB VRAM)</td>
                                            <td>PCIe-Grafikkarte High-End<br>Radeon RX Extreme (12 GB VRAM)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>3. Prozessor (CPU)</strong></td>
                                            <td>4 Kerne, 3,6 GHz Basistakt<br>6 MB L3-Cache</td>
                                            <td style="background: #f0fdf4;"><strong>4 Kerne, 4,2 GHz Basistakt</strong><br>6 MB L3-Cache (schneller Takt)</td>
                                            <td>8 Kerne, 3,0 GHz Basistakt<br>12 MB L3-Cache</td>
                                        </tr>
                                        <tr>
                                            <td><strong>4. Arbeitsspeicher (RAM)</strong></td>
                                            <td>16 GB DDR4-2666 (2x 8 GB)<br><span class="ko-badge">Nur 16 GB &lt; 32 GB (K.O.)</span></td>
                                            <td style="background: #f0fdf4;"><strong>32 GB DDR4-2666 (2x 16 GB)</strong><br>Erweiterbar auf 64 GB</td>
                                            <td>64 GB DDR4-2666 (2x 32 GB)<br>Große Kapazität</td>
                                        </tr>
                                        <tr>
                                            <td><strong>5. Lärmentwicklung</strong></td>
                                            <td>38 dB(A) Volllast<br><span class="ko-badge">&gt; 35 dB(A) Großraumbüro (K.O.)</span></td>
                                            <td style="background: #f0fdf4;"><strong>25 dB(A) Volllast</strong><br>Flüsterleise / Silent-Lüfter</td>
                                            <td>45 dB(A) Volllast<br><span class="ko-badge">45 dB(A) viel zu laut! (K.O.)</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>6. Netzteil &amp; Ökologie</strong></td>
                                            <td>180 W Netzteil<br>Wirkungsgrad bis zu 92%, Active PFC</td>
                                            <td style="background: #f0fdf4;"><strong>400 W Netzteil</strong><br>80 PLUS Gold Zertifizierung</td>
                                            <td>600 W Internes Netzteil<br><span class="ko-badge">Wirkungsgrad 75% &lt; 85% (K.O.)</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>7. Prüfsiegel &amp; Normen</strong></td>
                                            <td>CE-Prüfbericht, FTZ/ZZF, VDE,<br>GS-Prüfzeichen, Energy Star 6.1</td>
                                            <td style="background: #f0fdf4;"><strong>VDE-Zulassung, CE-Zertifikat</strong><br>entspricht den RoHS-Richtlinien</td>
                                            <td>Keine Zertifizierung<br><span class="ko-badge">Kein CE/VDE-Nachweis (K.O.)</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>8. Preis netto / Stück</strong></td>
                                            <td>550,00 € Netto</td>
                                            <td style="background: #f0fdf4;"><strong>850,00 € Netto</strong> (im Budget)</td>
                                            <td>1.000,00 € Netto<br><span class="ko-badge">&gt; 950 € Budget (K.O.)</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `;
            }

            // LÖSUNGS-RAHMEN: Anlage 7 (Nutzwertanalyse) & Anlage 8 (Angebotsschreiben DIN 5008)
            return `
                <div class="attachment-sheet">
                    ${renderModeHeader("IT 1 &bull; Offizielle Abgabeblätter (Ausfüll-Rahmen)", "Lösungsrahmen")}
                    <div class="attachment-body">
                        
                        <!-- ANLAGE 7: NUTZWERTANALYSE-RAHMEN -->
                        <div class="ihk-abgabe-banner">
                            <span>Anlage 7 &ndash; Sortiment Auswahl zu IT 1.1</span>
                            <span class="ihk-abgabe-tag">Bitte mit Lösungen abgeben</span>
                        </div>
                        <div class="ihk-candidate-line">
                            <span>Name des Prüflings: _____________________________________</span>
                            <span>Klasse / Prüflingsnummer: _____________</span>
                        </div>

                        <div style="font-weight: 700; font-size: 0.92rem; margin-bottom: 6px;">
                            Nutzwertanalyse zur Rechnerauswahl (Bewertungsrahmen):
                        </div>

                        <div class="att-spec-table-wrap">
                            <table class="ihk-matrix-table">
                                <thead>
                                    <tr>
                                        <th rowspan="2" style="width: 24%; text-align: left;">Entscheidungskriterien</th>
                                        <th rowspan="2" style="width: 13%;">Gewichtung in %</th>
                                        <th colspan="2" style="width: 21%;">PC 1 (OfficeBasic)</th>
                                        <th colspan="2" style="width: 21%; background: #e0f2fe; color: #0369a1;">PC 2 (CreativeStation)</th>
                                        <th colspan="2" style="width: 21%;">PC 3 (PerformancePro)</th>
                                    </tr>
                                    <tr>
                                        <th>Pkt</th><th>Gew. Pkt</th>
                                        <th style="background: #e0f2fe;">Pkt</th><th style="background: #e0f2fe;">Gew. Pkt</th>
                                        <th>Pkt</th><th>Gew. Pkt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="text-align: left; font-weight: 600;">1. Preis</td>
                                        <td><strong>${isSol ? '10 %' : '<input class="ihk-matrix-input" value="10" placeholder="%">'}</strong></td>
                                        <td>${isSol ? '5' : '<input class="ihk-matrix-input" value="5">'}</td>
                                        <td><strong>${isSol ? '50' : '50'}</strong></td>
                                        <td style="background: #f0fdf4;">${isSol ? '4' : '<input class="ihk-matrix-input" value="4">'}</td>
                                        <td style="background: #f0fdf4;"><strong>${isSol ? '40' : '40'}</strong></td>
                                        <td>${isSol ? '3' : '<input class="ihk-matrix-input" value="3">'}</td>
                                        <td><strong>${isSol ? '30' : '30'}</strong></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: left; font-weight: 600;">2. Leistung (CPU, RAM, GPU, SSD)</td>
                                        <td><strong>${isSol ? '40 %' : '<input class="ihk-matrix-input" value="40" placeholder="%">'}</strong></td>
                                        <td>${isSol ? '1' : '<input class="ihk-matrix-input" value="1">'}</td>
                                        <td><strong>${isSol ? '40' : '40'}</strong></td>
                                        <td style="background: #f0fdf4;">${isSol ? '4' : '<input class="ihk-matrix-input" value="4">'}</td>
                                        <td style="background: #f0fdf4;"><strong>${isSol ? '160' : '160'}</strong></td>
                                        <td>${isSol ? '5' : '<input class="ihk-matrix-input" value="5">'}</td>
                                        <td><strong>${isSol ? '200' : '200'}</strong></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: left; font-weight: 600;">3. Lärm (dB(A) Großraumbüro)</td>
                                        <td><strong>${isSol ? '25 %' : '<input class="ihk-matrix-input" value="25" placeholder="%">'}</strong></td>
                                        <td>${isSol ? '3' : '<input class="ihk-matrix-input" value="3">'}</td>
                                        <td><strong>${isSol ? '75' : '75'}</strong></td>
                                        <td style="background: #f0fdf4;">${isSol ? '5' : '<input class="ihk-matrix-input" value="5">'}</td>
                                        <td style="background: #f0fdf4;"><strong>${isSol ? '125' : '125'}</strong></td>
                                        <td>${isSol ? '1' : '<input class="ihk-matrix-input" value="1">'}</td>
                                        <td><strong>${isSol ? '25' : '25'}</strong></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: left; font-weight: 600;">4. Ökologie / Netzteil-Effizienz</td>
                                        <td><strong>${isSol ? '25 %' : '<input class="ihk-matrix-input" value="25" placeholder="%">'}</strong></td>
                                        <td>${isSol ? '5' : '<input class="ihk-matrix-input" value="5">'}</td>
                                        <td><strong>${isSol ? '125' : '125'}</strong></td>
                                        <td style="background: #f0fdf4;">${isSol ? '4' : '<input class="ihk-matrix-input" value="4">'}</td>
                                        <td style="background: #f0fdf4;"><strong>${isSol ? '100' : '100'}</strong></td>
                                        <td>${isSol ? '1' : '<input class="ihk-matrix-input" value="1">'}</td>
                                        <td><strong>${isSol ? '25' : '25'}</strong></td>
                                    </tr>
                                    <tr class="total-row">
                                        <td style="text-align: left;">SUMME:</td>
                                        <td>100 %</td>
                                        <td colspan="2" style="color: #64748b; font-size: 1.05rem;"><strong>290 Pkt</strong></td>
                                        <td colspan="2" style="background: #dcfce7; color: #15803d; font-size: 1.15rem;"><strong>425 Pkt (SIEGER)</strong></td>
                                        <td colspan="2" style="color: #64748b; font-size: 1.05rem;"><strong>280 Pkt</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style="border: 1.5px solid #000000; padding: 10px 12px; background: #fdfdfd; margin-bottom: 24px;">
                            <strong>Auswahlentscheidung mit Begründung:</strong><br>
                            <div style="font-size: 0.88rem; line-height: 1.5; color: ${isSol ? '#15803d; font-weight: 600;' : '#1e293b;'} margin-top: 4px;">
                                ${isSol
                                    ? "✓ Der PC 2 (CreativeStation Work) erfüllt alle harten Kundenanforderungen vollständig (SSD vorhanden, 32 GB RAM, dedizierte Mittelklasse-GPU, flüsterleise 25 dB(A), 80 PLUS Gold) und erreicht mit 425 Punkten den höchsten Gesamtnutzen.<br>• PC 1 scheidet wegen harter K.O.-Kriterien aus (nur 16 GB RAM, keine SSD, keine PCIe-GPU).<br>• PC 3 scheidet aus wegen 45 dB(A) (viel zu laut), 75% Netzteilwirkungsgrad und 1.000 € Preis (> 950 € Budget)."
                                    : "PC 2 erfüllt alle Kundenanforderungen und erzielt den höchsten Nutzwert (425 Punkte). PC 1 scheidet wegen harter K.O.-Kriterien (keine SSD, nur Onboard-GPU, nur 16 GB RAM) und PC 3 wegen Lärm (45 dB(A)) und Budgetüberschreitung (1.000 €) aus."}
                            </div>
                        </div>

                        <!-- ANLAGE 8: DIN 5008 ANGEBOTSSCHREIBEN -->
                        <div class="ihk-abgabe-banner">
                            <span>Anlage 8 &ndash; Kaufmännisches Angebot zu IT 1.2</span>
                            <span class="ihk-abgabe-tag">Bitte mit Lösungen abgeben</span>
                        </div>
                        <div class="ihk-candidate-line">
                            <span>Name des Prüflings: _____________________________________</span>
                            <span>Klasse / Prüflingsnummer: _____________</span>
                        </div>

                        <div class="ihk-din5008-letter">
                            <div class="din5008-sender-return">
                                Systemhaus KG &bull; Hans-Thoma-Platz 2 &bull; 76135 Karlsruhe
                            </div>
                            <div class="din5008-recipient-box">
                                DarSys GmbH Webdesign<br>
                                z. Hd. Frau Dr. Evelin Schreiber<br>
                                Steinhäuserstr. 24<br>
                                76135 Karlsruhe
                            </div>

                            <div class="din5008-meta-bar">
                                <div><strong>Kundennummer:</strong> 35/46/4148</div>
                                <div><strong>Bearbeiter:</strong> Fachberater IT-Systeme</div>
                                <div><strong>Datum:</strong> 15. Oktober 2026</div>
                            </div>

                            <div class="din5008-subject">
                                Angebot: Ausstattung von 15 Designer-Arbeitsplätzen am Standort Karlsruhe-Durlach
                            </div>

                            <p style="font-size: 0.88rem; line-height: 1.5; margin-bottom: 10px;">
                                Sehr geehrte Frau Dr. Schreiber,<br>
                                vielen Dank für Ihre Anfrage. Basierend auf Ihren Anforderungen unterbreiten wir Ihnen freibleibend folgendes Angebot:
                            </p>

                            <div class="att-spec-table-wrap">
                                <table class="din5008-positions-table">
                                    <thead>
                                        <tr>
                                            <th style="width: 8%;">Pos.</th>
                                            <th style="width: 48%;">Artikelbezeichnung / Leistung</th>
                                            <th style="width: 10%; text-align: center;">Menge</th>
                                            <th style="width: 17%; text-align: right;">Einzelpreis Netto</th>
                                            <th style="width: 17%; text-align: right;">Gesamtpreis Netto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><strong>Arbeitsplatzrechner PC 2 (CreativeStation Work)</strong><br><span style="font-size: 0.78rem; color: #64748b;">Intel i7, 32 GB DDR5, 512 GB M.2 NVMe SSD, RTX 4060, Silent-Lüfter 25 dB(A)</span></td>
                                            <td style="text-align: center;">15</td>
                                            <td style="text-align: right;">850,00 €</td>
                                            <td style="text-align: right; font-weight: 700;">12.750,00 €</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><strong>Vor-Ort-Montage &amp; Aufstellung</strong><br><span style="font-size: 0.78rem; color: #64748b;">Fachgerechte Verkabelung und betriebsbereite Inbetriebnahme</span></td>
                                            <td style="text-align: center;">15</td>
                                            <td style="text-align: right;">40,00 €</td>
                                            <td style="text-align: right; font-weight: 700;">600,00 €</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><strong>Betriebssystemlizenz Microsoft Windows 10 Pro 64-Bit</strong><br><span style="font-size: 0.78rem; color: #64748b;">OEM-Lizenz inklusive Vorinstallation</span></td>
                                            <td style="text-align: center;">15</td>
                                            <td style="text-align: right;">110,00 €</td>
                                            <td style="text-align: right; font-weight: 700;">1.650,00 €</td>
                                        </tr>
                                        <tr class="din5008-total-row">
                                            <td colspan="4" style="text-align: right;"><strong>Gesamtpreis Netto:</strong></td>
                                            <td style="text-align: right; font-weight: 900; font-size: 0.95rem;">15.000,00 €</td>
                                        </tr>
                                        <tr class="din5008-total-row">
                                            <td colspan="4" style="text-align: right;"><strong>Zzgl. 19 % Umsatzsteuer:</strong></td>
                                            <td style="text-align: right; font-weight: 800; color: #b91c1c;">2.850,00 €</td>
                                        </tr>
                                        <tr class="din5008-total-row" style="background: #e0f2fe; border-top: 2px solid #000000;">
                                            <td colspan="4" style="text-align: right; font-size: 1.05rem;"><strong>Gesamtbetrag Brutto:</strong></td>
                                            <td style="text-align: right; font-weight: 900; font-size: 1.15rem; color: #0369a1;">17.850,00 €</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div style="font-size: 0.84rem; line-height: 1.5; color: #334155; border-top: 1px solid #cbd5e1; padding-top: 8px;">
                                <strong>Zahlungsbedingungen:</strong> Die Lieferung erfolgt innerhalb von 3&ndash;4 Wochen nach Auftragseingang. Bei Zahlung innerhalb von 14 Tagen gewähren wir <strong>2 % Skonto</strong> (Skontobetrag: 357,00 € brutto &rarr; Zahlbetrag: 17.493,00 €). Zahlbar rein netto innerhalb von 30 Tagen.
                            </div>
                        </div>

                    </div>
                </div>
            `;
        }

        // ---------------------------------------------------------------------
        // IT 2: NETZWERK & FEHLERSUCHE (Anlagen 3, 4, 9, 10)
        // ---------------------------------------------------------------------
        if (pageIndex === 2) {
            const isSol = this.displayMode === "solution";

            // VORGABE-ANLAGEN: Anlage 3 (Netzwerkplan) & Anlage 4 (Kabeldatenblatt)
            if (this.displayMode === "info") {
                const svgPlan = (typeof VisualDiagrams !== "undefined" && typeof VisualDiagrams.getDarSysNetzwerkplanSvg === "function")
                                ? VisualDiagrams.getDarSysNetzwerkplanSvg()
                                : '<div style="padding: 2rem; text-align: center;">Netzwerkplan lädt...</div>';

                return `
                    <div class="attachment-sheet">
                        ${renderModeHeader("IT 2 &bull; Vorgabe-Anlagen (Netzwerk &amp; Verkabelung)", "Anlagen")}
                        <div class="attachment-body">
                            
                            <!-- ANLAGE 3: LOGISCHER NETZWERKPLAN -->
                            <div class="attachment-doc-title" style="display: flex; justify-content: space-between; align-items: center;">
                                <span><i class="fa-solid fa-network-wired" style="color: #0284c7;"></i> Anlage 3: Logischer Netzwerkplan der DarSys GmbH</span>
                                <span style="font-size: 0.76rem; background: #0284c7; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-weight: 700;">Dual-Stack IPv4/IPv6</span>
                            </div>
                            
                            <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 0.5rem; margin-bottom: 0.75rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05); overflow-x: auto;">
                                ${svgPlan}
                            </div>

                            <div style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 6px; padding: 0.75rem 0.9rem; font-size: 0.85rem; color: #1e293b; line-height: 1.5; margin-bottom: 1.5rem;">
                                <strong>Amtliche Netzwerk-Vorgaben der DarSys GmbH:</strong><br>
                                &bull; <strong>IPv4-Subnetz:</strong> <code>192.168.3.0 /24</code> (Subnetzmaske 255.255.255.0)<br>
                                &bull; <strong>Standard-Gateway IPv4:</strong> <code>192.168.3.2</code> (Router RTR-01)<br>
                                &bull; <strong>IPv6-Global-Unicast:</strong> <code>2003:f3:700:6c00::/64</code> &bull; IPv6-Gateway (Link-Local): <code>fe80::1</code><br>
                                &bull; <strong>DHCP-Bereich für Clients:</strong> <code>192.168.3.80</code> bis <code>192.168.3.150</code><br>
                                &bull; <strong>Bildungsregel IPv6-Host-Suffix:</strong> Wird dezimal aus dem letzten IPv4-Oktett gebildet:<br>
                                &nbsp;&nbsp;&ndash; Computer 31 (IPv4: .81 dez = 51 hex) &rarr; IPv6: <code>2003:f3:700:6c00:9::51/64</code><br>
                                &nbsp;&nbsp;&ndash; Computer 45 (IPv4: .95 dez = 5f hex) &rarr; IPv6: <code>2003:f3:700:6c00:9::5f/64</code>
                            </div>

                            <!-- ANLAGE 4: KABELDATENBLATT -->
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-plug" style="color: #d97706;"></i> Anlage 4: Kabeldatenblatt ECOLAN Cat.5e U/UTP Installationskabel
                            </div>
                            <div class="cable-datasheet-card">
                                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
                                    <div>
                                        <strong style="font-size: 1.05rem; color: #0f172a;">ECOLAN Cat.5e U/UTP 4x2xAWG24/1</strong><br>
                                        <span style="font-size: 0.8rem; color: #64748b;">Art.-Nr. 605101.500 &bull; Unshielded Twisted Pair</span>
                                    </div>
                                    <span style="background: #fee2e2; color: #991b1b; padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: 800; font-size: 0.8rem;">
                                        UNGESCHIRMT (U/UTP)
                                    </span>
                                </div>

                                <table style="width: 100%; border-collapse: collapse; font-size: 0.86rem; color: #1e293b;">
                                    <tr style="border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 0.35rem 0; font-weight: 600; width: 45%;">Kategorie &amp; Grenzfrequenz:</td>
                                        <td style="padding: 0.35rem 0;">Cat.5e bis 100 MHz (1000BASE-T Gigabit Ethernet)</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 0.35rem 0; font-weight: 600;">Gesamtschirm (Outer Shield):</td>
                                        <td style="padding: 0.35rem 0; color: #dc2626; font-weight: bold;">U = Kein Schirmgeflecht / keine Folie</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 0.35rem 0; font-weight: 600;">Aderpaarschirm (Pair Shield):</td>
                                        <td style="padding: 0.35rem 0; color: #dc2626; font-weight: bold;">UTP = Ungeschirmte verdrillte Adernpaare</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 0.35rem 0; font-weight: 600;">Kopplungsdämpfung (EMV):</td>
                                        <td style="padding: 0.35rem 0;">&lt; 40 dB (sehr geringer Schutz gegen elektromagnetische Wechselfelder)</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #f1f5f9;">
                                        <td style="padding: 0.35rem 0; font-weight: 600;">Trennklasse nach DIN EN 50174-2:</td>
                                        <td style="padding: 0.35rem 0;"><strong>Trennklasse „a“</strong> (erfordert 200 mm Mindestabstand zu Starkstromleitungen)</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 0.35rem 0; font-weight: 600;">Gleichstromwiderstand:</td>
                                        <td style="padding: 0.35rem 0;">Max. 9,5 Ohm / 100 m</td>
                                    </tr>
                                </table>

                                <div style="margin-top: 0.75rem; padding: 0.6rem; background: #fef2f2; border-left: 3px solid #ef4444; border-radius: 4px; font-size: 0.82rem; color: #991b1b;">
                                    <strong>Störfall-Ursache bei DarSys:</strong> Die Netzwerk-Zuleitung zu den Arbeitsplätzen wurde nachträglich im selben Kabelkanal direkt neben dem 400V-Drehstromkabel des Klimaanlagen-Kompressors verlegt. Bei jedem Kompressor-Anlauf induziert das magnetische Feld Störspannungen (Bitfehler &amp; Verbindungsabbrüche)!
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            // LÖSUNGS-RAHMEN: Anlage 9 (Adresstabelle) & Anlage 10 (E-Mail an Kundin)
            return `
                <div class="attachment-sheet">
                    ${renderModeHeader("IT 2 &bull; Offizielle Abgabeblätter (Adresstabelle &amp; E-Mail)", "Lösungsrahmen")}
                    <div class="attachment-body">
                        
                        <!-- ANLAGE 9: ADRESSTABELLE -->
                        <div class="ihk-abgabe-banner">
                            <span>Anlage 9 &ndash; Adresstabelle zu IT 2.1</span>
                            <span class="ihk-abgabe-tag">Bitte mit Lösungen abgeben</span>
                        </div>
                        <div class="ihk-candidate-line">
                            <span>Name des Prüflings: _____________________________________</span>
                            <span>Klasse / Prüflingsnummer: _____________</span>
                        </div>

                        <div class="att-spec-table-wrap">
                            <table class="ihk-matrix-table">
                                <thead>
                                    <tr>
                                        <th>Device</th>
                                        <th>Interface</th>
                                        <th>IP-Adresse des Computers</th>
                                        <th>Default Gateway</th>
                                        <th>Netzwerk-Adresse / Präfix</th>
                                        <th>Broadcast-Adresse</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowspan="2" style="font-weight: 700; background: #f8fafc;">Computer Nr. 31</td>
                                        <td>NIC IPv4</td>
                                        <td><strong>192.168.3.81 /24</strong></td>
                                        <td style="${isSol ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : ''}">${isSol ? '192.168.3.2' : '192.168.3.2'}</td>
                                        <td style="${isSol ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : ''}">${isSol ? '192.168.3.0' : '192.168.3.0'}</td>
                                        <td style="${isSol ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : ''}">${isSol ? '192.168.3.255' : '192.168.3.255'}</td>
                                    </tr>
                                    <tr>
                                        <td>NIC IPv6</td>
                                        <td>
                                            <strong>gekürzt:</strong><br>${isSol ? '2003:f3:700:6c00:9::51 /64' : '2003:f3:700:6c00:9::51 /64'}<br>
                                            <span style="font-size: 0.75rem; color: #64748b;">ungekürzt:</span><br>
                                            <span style="font-family: monospace; font-size: 0.74rem;">2003:00f3:0700:6c00:0009:0000:0000:0051 /64</span>
                                        </td>
                                        <td style="${isSol ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : ''}"><strong>gekürzt:</strong><br>${isSol ? 'fe80::1' : 'fe80::1'}</td>
                                        <td style="${isSol ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : ''}"><strong>gekürzt:</strong><br>${isSol ? '2003:f3:700:6c00::/64' : '2003:f3:700:6c00::/64'}</td>
                                        <td class="diagonal-slash" style="font-weight: bold;">/</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2" style="font-weight: 700; background: #f8fafc;">Computer Nr. 45</td>
                                        <td>NIC IPv4</td>
                                        <td><strong>192.168.3.95 /24</strong></td>
                                        <td style="${isSol ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : ''}">${isSol ? '192.168.3.2' : '192.168.3.2'}</td>
                                        <td style="${isSol ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : ''}">${isSol ? '192.168.3.0' : '192.168.3.0'}</td>
                                        <td style="${isSol ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : ''}">${isSol ? '192.168.3.255' : '192.168.3.255'}</td>
                                    </tr>
                                    <tr>
                                        <td>NIC IPv6</td>
                                        <td>
                                            <strong>gekürzt:</strong><br>${isSol ? '2003:f3:700:6c00:9::5f /64' : '2003:f3:700:6c00:9::5f /64'}<br>
                                            <span style="font-size: 0.75rem; color: #64748b;">ungekürzt:</span><br>
                                            <span style="font-family: monospace; font-size: 0.74rem;">2003:00f3:0700:6c00:0009:0000:0000:005f /64</span>
                                        </td>
                                        <td style="${isSol ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : ''}"><strong>gekürzt:</strong><br>${isSol ? 'fe80::1' : 'fe80::1'}</td>
                                        <td style="${isSol ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : ''}"><strong>gekürzt:</strong><br>${isSol ? '2003:f3:700:6c00::/64' : '2003:f3:700:6c00::/64'}</td>
                                        <td class="diagonal-slash" style="font-weight: bold;">/</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- ANLAGE 10: E-MAIL RAHMEN -->
                        <div class="ihk-abgabe-banner" style="margin-top: 1.5rem;">
                            <span>Anlage 10 &ndash; Kunden-E-Mail zu IT 2.4</span>
                            <span class="ihk-abgabe-tag">Bitte mit Lösungen abgeben</span>
                        </div>
                        <div class="ihk-candidate-line">
                            <span>Name des Prüflings: _____________________________________</span>
                            <span>Klasse / Prüflingsnummer: _____________</span>
                        </div>

                        <div class="authentic-email-box">
                            <div class="email-meta-row"><strong>Von:</strong> info@systemhaus.de</div>
                            <div class="email-meta-row"><strong>An:</strong> schreiber@darsys.de</div>
                            <div class="email-meta-row"><strong>Betreff:</strong> Störung der Netzwerkkommunikation durch die Klimaanlage</div>
                            <div class="email-content-text" style="font-size: 0.88rem;">
                                Sehr geehrte Frau Dr. Schreiber,<br><br>
                                ${isSol
                                    ? `<div style="background: #f0fdf4; border-left: 3px solid #22c55e; padding: 0.75rem; border-radius: 4px; color: #15803d; line-height: 1.6;">
                                        <strong>Musterlösung des Prüfungsausschusses (4 Punkte):</strong><br>
                                        Vor einigen Jahren wurden in Ihren Büros Netzwerkleitungen verlegt, die zwischenzeitlich nicht mehr den aktuellen Standards entsprechen.<br><br>
                                        Die damals verlegten Netzwerkleitungen besitzen weder eine Schirmung aus Metallgeflecht noch aus metallischer Folie (Kategorie Cat.5e U/UTP, Trennklasse „a“ nach DIN EN 50174-2). Da diese Leitungen im selben Kanal direkt neben dem 400V-Starkstromkabel des Klimakompressors liegen, induzieren die starken elektromagnetischen Schaltfelder des Kompressors Störspannungen in die Adernpaare (Bitfehler &amp; Verbindungsabbrüche).<br><br>
                                        <strong>Empfohlene Maßnahmen:</strong><br>
                                        1. Zeitnaher Austausch der Zuleitungen durch doppelt geschirmte Netzwerkleitungen (Cat.6A oder Cat.7 S/FTP mit Trennklasse „d“).<br>
                                        2. Getrennte Verlegung von Daten- und Energieleitungen mit metallischem Trennsteg und Einhaltung der Mindestabstände gemäß DIN EN 50174-2.<br>
                                        3. Überprüfung der Klimaanlage bezüglich der Einhaltung der geltenden EMV-Richtlinien.<br><br>
                                        Mit freundlichen Grüßen,<br>
                                        Ihr Systemhaus-Support-Team
                                       </div>`
                                    : `<div style="color: #64748b; font-style: italic; border: 1.5px dashed #cbd5e1; padding: 1rem; border-radius: 4px; background: #f8fafc;">
                                        [ Schreiben Sie hier die E-Mail an die Kundin mit Ursachenanalyse (EMV, ungeschirmtes Cat.5e U/UTP Kabel, Starkstrom-Kompressor), Normverweis auf DIN EN 50174-2 Trennklasse und mindestens zwei konkreten Maßnahmen zur dauerhaften Behebung der Netzwerkstörungen. ]
                                       </div>`}
                            </div>
                        </div>

                    </div>
                </div>
            `;
        }

        // ---------------------------------------------------------------------
        // IT 3: ZEITERFASSUNG, BSI & DATENBANK (Anlagen 5, 6, 11, 12)
        // ---------------------------------------------------------------------
        if (pageIndex === 3) {
            const isSol = this.displayMode === "solution";

            // VORGABE-ANLAGEN: Anlage 5 (BSI Schutzziele) & Anlage 6 (XML)
            if (this.displayMode === "info") {
                return `
                    <div class="attachment-sheet">
                        ${renderModeHeader("IT 3 &bull; Vorgabe-Anlagen (BSI-Schutzziele &amp; XML)", "Anlagen")}
                        <div class="attachment-body">
                            
                            <!-- ANLAGE 5: BSI-SCHUTZZIELE -->
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-shield-halved" style="color: #10b981;"></i> Anlage 5: BSI-Klassifikation der Schutzziele (IT-Grundschutz)
                            </div>
                            <div style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 1rem; font-size: 0.86rem; color: #1e293b; line-height: 1.5; margin-bottom: 1.5rem;">
                                <h5 style="margin: 0 0 6px 0; color: #0f172a; font-size: 0.95rem;">1. Schutzbedarf Vertraulichkeit (Schutz vor unbefugtem Zugriff):</h5>
                                &bull; <strong>Streng vertraulich:</strong> Daten, bei deren Offenlegung eine erhebliche Gefahr der Verletzung von Grundrechten besteht (z.B. Rassische/ethnische Herkunft, Gewerkschaftszugehörigkeit, Biometrie, Gesundheitsdaten). Gravierende Folgen für den Einzelnen.<br>
                                &bull; <strong>Vertraulich:</strong> Personenbezogene Verhaltens- und Leistungsdaten (z.B. Arbeitszeiten, Einstempelzeiten, Pausenzeiten). Negativer Einfluss auf das Arbeitsverhältnis bei unberechtigtem Einblick von Kollegen.<br><br>

                                <h5 style="margin: 0 0 6px 0; color: #0f172a; font-size: 0.95rem;">2. Schutzbedarf Verfügbarkeit (Maximal tolerierbare Ausfallzeit):</h5>
                                &bull; <strong>Extrem hoch (Wiederanlauf &lt; 0,5 h):</strong> Einsatzleitsysteme von Polizei, Feuerwehr, Rettungsdienst.<br>
                                &bull; <strong>Sehr hoch (Wiederanlauf &lt; 4 h):</strong> Börsenhandel, Echtzeit-Zahlungssysteme, internationale Transaktionen.<br>
                                &bull; <strong>Hoch (Wiederanlauf &lt; 24 h):</strong> Unternehmensweites E-Mail-System, ERP-System.<br>
                                &bull; <strong>Normal (Wiederanlauf &lt; 72 h):</strong> Zeiterfassungssysteme, interne Dokumentenarchive. Ein Ausfall kann bis zu 72 Stunden mit manuellen Notfallzetteln überbrückt werden.<br><br>

                                <h5 style="margin: 0 0 6px 0; color: #0f172a; font-size: 0.95rem;">3. Schutzbedarf Integrität (Korrektheit &amp; Unverfälschtheit):</h5>
                                &bull; <strong>Erhöhte Anforderungen:</strong> Fehler in den Daten führen direkt zu schweren Schäden (z.B. Medizintechnik, Dosierung von Medikamenten, Ampelschaltungen).<br>
                                &bull; <strong>Normale Anforderungen:</strong> Fehler können nachträglich korrigiert werden (z.B. Monatsabrechnung, vergessene Arbeitszeitbuchung wird am Monatsende korrigiert).
                            </div>

                            <!-- ANLAGE 6: XML-EXPORT -->
                            <div class="attachment-doc-title" style="display: flex; justify-content: space-between; align-items: center;">
                                <span><i class="fa-solid fa-code" style="color: #6366f1;"></i> Anlage 6: XML-Export der Zeiterfassung (time_log_export.xml)</span>
                                <span style="font-size: 0.75rem; background: #065f46; color: white; padding: 0.15rem 0.5rem; border-radius: 4px;">XML 2.4</span>
                            </div>

                            <pre class="xml-code-box"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;timetracking version="2.4" generated="2026-10-15T18:00:00Z"&gt;
  &lt;company id="DARSYS-KA"&gt;DarSys GmbH Webdesign&lt;/company&gt;
  &lt;entries&gt;
    &lt;entry id="84920"&gt;
      &lt;persid&gt;1042&lt;/persid&gt;
      &lt;firstname&gt;Evelin&lt;/firstname&gt;
      &lt;lastname&gt;Schreiber&lt;/lastname&gt;
      &lt;type&gt;KOMMEN&lt;/type&gt;
      &lt;time&gt;2026-10-15T07:54:12&lt;/time&gt;
      &lt;host&gt;TERM-01-EINGANG&lt;/host&gt;
      &lt;lastUpdate&gt;2026-10-15T07:54:15&lt;/lastUpdate&gt;
    &lt;/entry&gt;
    &lt;entry id="84921"&gt;
      &lt;persid&gt;1088&lt;/persid&gt;
      &lt;firstname&gt;Markus&lt;/firstname&gt;
      &lt;lastname&gt;Weber&lt;/lastname&gt;
      &lt;type&gt;KOMMEN&lt;/type&gt;
      &lt;time&gt;2026-10-15T08:02:44&lt;/time&gt;
      &lt;host&gt;TERM-01-EINGANG&lt;/host&gt;
      &lt;lastUpdate&gt;2026-10-15T08:02:45&lt;/lastUpdate&gt;
    &lt;/entry&gt;
    &lt;entry id="84922"&gt;
      &lt;persid&gt;1042&lt;/persid&gt;
      &lt;firstname&gt;Evelin&lt;/firstname&gt;
      &lt;lastname&gt;Schreiber&lt;/lastname&gt;
      &lt;type&gt;GEHEN&lt;/type&gt;
      &lt;time&gt;2026-10-15T12:30:10&lt;/time&gt;
      &lt;host&gt;TERM-01-EINGANG&lt;/host&gt;
      &lt;lastUpdate&gt;2026-10-15T12:30:11&lt;/lastUpdate&gt;
    &lt;/entry&gt;
  &lt;/entries&gt;
&lt;/timetracking&gt;</code></pre>
                        </div>
                    </div>
                `;
            }

            // LÖSUNGS-RAHMEN: Anlage 11 (BSI-Schutzbedarf) & Anlage 12.1/12.2 (Datenbank)
            return `
                <div class="attachment-sheet">
                    ${renderModeHeader("IT 3 &bull; Offizielle Abgabeblätter (BSI &amp; Datenbank)", "Lösungsrahmen")}
                    <div class="attachment-body">
                        
                        <!-- ANLAGE 11: SCHUTZBEDARF -->
                        <div class="ihk-abgabe-banner">
                            <span>Anlage 11 &ndash; Auswahl &amp; Begründung Schutzziele zu IT 3.1</span>
                            <span class="ihk-abgabe-tag">Bitte mit Lösungen abgeben</span>
                        </div>
                        <div class="ihk-candidate-line">
                            <span>Name des Prüflings: _____________________________________</span>
                            <span>Klasse / Prüflingsnummer: _____________</span>
                        </div>

                        <!-- 1. Vertraulichkeit -->
                        <div style="border: 1.5px solid #000000; padding: 10px 12px; background: #ffffff; margin-bottom: 14px;">
                            <div style="font-weight: 800; font-size: 0.92rem; margin-bottom: 4px;">1. Vertraulichkeit (Bitte mit „X“ markieren):</div>
                            <div style="display: flex; gap: 24px; margin: 8px 0;">
                                <div class="ihk-checkbox-item">
                                    <span class="ihk-checkbox-box ${isSol ? '' : ''}"></span>
                                    <span>Streng vertraulich</span>
                                </div>
                                <div class="ihk-checkbox-item">
                                    <span class="ihk-checkbox-box ${isSol ? 'checked' : ''}">${isSol ? 'X' : ''}</span>
                                    <span><strong>Vertraulich (RICHTIG)</strong></span>
                                </div>
                            </div>
                            <div style="font-size: 0.85rem; line-height: 1.5; color: ${isSol ? '#15803d; font-weight: 600;' : '#475569;'} margin-top: 6px; border-top: 1px dashed #cbd5e1; padding-top: 4px;">
                                <strong>Begründung:</strong> ${isSol
                                    ? "„Kommt“- und „Geht“-Buchungen sind personenbezogene Verhaltens- und Leistungsdaten (§ 26 BDSG). Ein unbefugter Zugriff stellt eine Persönlichkeitsverletzung dar, gefährdet aber keine Menschenleben (daher nicht „streng vertraulich“)."
                                    : "____________________________________________________________________________________"}
                            </div>
                        </div>

                        <!-- 2. Verfügbarkeit -->
                        <div style="border: 1.5px solid #000000; padding: 10px 12px; background: #ffffff; margin-bottom: 14px;">
                            <div style="font-weight: 800; font-size: 0.92rem; margin-bottom: 4px;">2. Verfügbarkeit (Bitte mit „X“ markieren):</div>
                            <div style="display: flex; gap: 16px; margin: 8px 0; flex-wrap: wrap;">
                                <div class="ihk-checkbox-item"><span class="ihk-checkbox-box"></span><span>Extrem hoch (&lt;0,5h)</span></div>
                                <div class="ihk-checkbox-item"><span class="ihk-checkbox-box"></span><span>Sehr hoch (&lt;4h)</span></div>
                                <div class="ihk-checkbox-item"><span class="ihk-checkbox-box"></span><span>Hoch (&lt;24h)</span></div>
                                <div class="ihk-checkbox-item"><span class="ihk-checkbox-box ${isSol ? 'checked' : ''}">${isSol ? 'X' : ''}</span><span><strong>Normal (&lt;72h) (RICHTIG)</strong></span></div>
                            </div>
                            <div style="font-size: 0.85rem; line-height: 1.5; color: ${isSol ? '#15803d; font-weight: 600;' : '#475569;'} margin-top: 6px; border-top: 1px dashed #cbd5e1; padding-top: 4px;">
                                <strong>Begründung:</strong> ${isSol
                                    ? "Fällt das RFID-Terminal aus, kann problemlos auf handschriftliche Stundenzettel oder E-Mail ausgewichen werden. Die Arbeitsfähigkeit des Unternehmens hängt nicht von der Sekundenverfügbarkeit ab (bis zu 72h tolerierbar)."
                                    : "____________________________________________________________________________________"}
                            </div>
                        </div>

                        <!-- 3. Integrität -->
                        <div style="border: 1.5px solid #000000; padding: 10px 12px; background: #ffffff; margin-bottom: 20px;">
                            <div style="font-weight: 800; font-size: 0.92rem; margin-bottom: 4px;">3. Integrität (Bitte mit „X“ markieren):</div>
                            <div style="display: flex; gap: 24px; margin: 8px 0;">
                                <div class="ihk-checkbox-item"><span class="ihk-checkbox-box"></span><span>Erhöhte Anforderung</span></div>
                                <div class="ihk-checkbox-item"><span class="ihk-checkbox-box ${isSol ? 'checked' : ''}">${isSol ? 'X' : ''}</span><span><strong>Normale Anforderung (RICHTIG)</strong></span></div>
                            </div>
                            <div style="font-size: 0.85rem; line-height: 1.5; color: ${isSol ? '#15803d; font-weight: 600;' : '#475569;'} margin-top: 6px; border-top: 1px dashed #cbd5e1; padding-top: 4px;">
                                <strong>Begründung:</strong> ${isSol
                                    ? "Fehler oder vergessene Buchungen können am Monatsende von der Personalabteilung nachträglich korrigiert werden. Fehler in der Zeiterfassung gefährden keine Menschenleben."
                                    : "____________________________________________________________________________________"}
                            </div>
                        </div>

                        <!-- ANLAGE 12.1: DATENBANKENTWURF -->
                        <div class="ihk-abgabe-banner">
                            <span>Anlage 12.1 &ndash; Relationaler Datenbankentwurf zu IT 3.2</span>
                            <span class="ihk-abgabe-tag">Bitte mit Lösungen abgeben</span>
                        </div>
                        <div class="ihk-candidate-line">
                            <span>Name des Prüflings: _____________________________________</span>
                            <span>Klasse / Prüflingsnummer: _____________</span>
                        </div>

                        <div class="ihk-db-table-frame">
                            <div class="ihk-db-table-header">Tabellenname: tblUserAccount (Mitarbeiter-Stammdaten)</div>
                            <table class="din5008-positions-table" style="margin: 0; border: none;">
                                <thead>
                                    <tr>
                                        <th style="width: 40%;">Spaltenname</th>
                                        <th style="width: 35%;">Datentyp</th>
                                        <th style="width: 25%; text-align: center;">„PK“ oder „FK“</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="${isSol ? 'background: #f0fdf4;' : ''}">
                                        <td><strong>persid</strong></td>
                                        <td>INTEGER / INT</td>
                                        <td style="text-align: center; font-weight: bold; color: #dc2626;">PK (Primary Key)</td>
                                    </tr>
                                    <tr style="${isSol ? 'background: #f0fdf4;' : ''}">
                                        <td><strong>firstname / vorname</strong></td>
                                        <td>VARCHAR(45)</td>
                                        <td style="text-align: center; color: #64748b;">&mdash;</td>
                                    </tr>
                                    <tr style="${isSol ? 'background: #f0fdf4;' : ''}">
                                        <td><strong>lastname / nachname</strong></td>
                                        <td>VARCHAR(45)</td>
                                        <td style="text-align: center; color: #64748b;">&mdash;</td>
                                    </tr>
                                    <tr style="${isSol ? 'background: #f0fdf4;' : ''}">
                                        <td><strong>lastUpdate</strong></td>
                                        <td>DATETIME / TIMESTAMP</td>
                                        <td style="text-align: center; color: #64748b;">&mdash;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="ihk-db-table-frame" style="margin-top: 14px;">
                            <div class="ihk-db-table-header" style="background: #1e3a8a;">Tabellenname: tblLogEntry (Zeiterfassungs-Buchungen)</div>
                            <table class="din5008-positions-table" style="margin: 0; border: none;">
                                <thead>
                                    <tr>
                                        <th style="width: 40%;">Spaltenname</th>
                                        <th style="width: 35%;">Datentyp</th>
                                        <th style="width: 25%; text-align: center;">„PK“ oder „FK“</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="${isSol ? 'background: #f0fdf4;' : ''}">
                                        <td><strong>id / entry_id</strong></td>
                                        <td>INTEGER / INT</td>
                                        <td style="text-align: center; font-weight: bold; color: #dc2626;">PK (Primary Key)</td>
                                    </tr>
                                    <tr style="${isSol ? 'background: #f0fdf4;' : ''}">
                                        <td><strong>type (KOMMEN / GEHEN)</strong></td>
                                        <td>VARCHAR(10) / ENUM</td>
                                        <td style="text-align: center; color: #64748b;">&mdash;</td>
                                    </tr>
                                    <tr style="${isSol ? 'background: #f0fdf4;' : ''}">
                                        <td><strong>time</strong></td>
                                        <td>DATETIME</td>
                                        <td style="text-align: center; color: #64748b;">&mdash;</td>
                                    </tr>
                                    <tr style="${isSol ? 'background: #f0fdf4;' : ''}">
                                        <td><strong>host (Terminal-ID)</strong></td>
                                        <td>VARCHAR(25)</td>
                                        <td style="text-align: center; color: #64748b;">&mdash;</td>
                                    </tr>
                                    <tr style="${isSol ? 'background: #fef3c7;' : ''}">
                                        <td><strong>persid</strong></td>
                                        <td>INTEGER / INT</td>
                                        <td style="text-align: center; font-weight: bold; color: #2563eb;">FK (Foreign Key)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- ANLAGE 12.2: KARDINALITÄTEN -->
                        <div class="ihk-abgabe-banner" style="margin-top: 1.5rem;">
                            <span>Anlage 12.2 &ndash; Beziehungsart &amp; Kardinalität zu IT 3.3</span>
                            <span class="ihk-abgabe-tag">Bitte mit Lösungen abgeben</span>
                        </div>
                        <div style="border: 1.5px solid #000000; padding: 10px 12px; background: #ffffff;">
                            <div style="font-weight: 800; font-size: 0.92rem; margin-bottom: 6px;">Welche Beziehung besteht zwischen tblUserAccount und tblLogEntry?</div>
                            <div style="display: flex; flex-direction: column; gap: 6px; margin: 8px 0;">
                                <div class="ihk-checkbox-item"><span class="ihk-checkbox-box"></span><span>Eine m:n-Beziehung</span></div>
                                <div class="ihk-checkbox-item"><span class="ihk-checkbox-box ${isSol ? 'checked' : ''}">${isSol ? 'X' : ''}</span><span><strong>Eine 1:n-Beziehung (RICHTIG)</strong></span></div>
                                <div class="ihk-checkbox-item"><span class="ihk-checkbox-box"></span><span>Eine 1:1-Beziehung</span></div>
                            </div>
                            <div style="font-size: 0.85rem; line-height: 1.5; color: ${isSol ? '#15803d; font-weight: 600;' : '#475569;'} margin-top: 6px; border-top: 1px dashed #cbd5e1; padding-top: 4px;">
                                <strong>Begründung:</strong> ${isSol
                                    ? "Ein Benutzer-Account (Mitarbeiter) kann beliebig viele (n) LogEntries (Buchungen) erzeugen, aber jede einzelne Buchung gehört zwingend zu genau einem (1) Mitarbeiter. Der Fremdschlüssel persid liegt in der Tabelle tblLogEntry."
                                    : "____________________________________________________________________________________"}
                            </div>
                        </div>

                    </div>
                </div>
            `;
        }

        // IT 4: FORM & GESAMTEINDRUCK
        if (pageIndex === 4) {
            return `
                <div class="attachment-sheet">
                    <div class="attachment-header">
                        <span>IT 4 &bull; Formale Kriterien &amp; Gesamteindruck</span>
                        <span class="attachment-tag">Bewertungsrichtlinie</span>
                        <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="attachment-body">
                        <div class="attachment-doc-title">
                            <i class="fa-solid fa-stamp" style="color: #475569;"></i> Bewertungskriterien des Prüfungsausschusses (10 Punkte)
                        </div>
                        <div style="background: #f8fafc; border: 1.5px solid #000000; padding: 1.25rem; font-size: 0.9rem; color: #1e293b; line-height: 1.6;">
                            <strong>In die 10 Punkte der formalen Bewertung von IT 4 fließen ein:</strong>
                            <ul style="margin: 0.75rem 0; padding-left: 1.3rem;">
                                <li><strong>DIN 5008 Einhaltung (Anlage 8):</strong> Korrektes Adressfeld (Zusatz-/Vermerkzone, Anschrift), saubere Betreffzeile ohne das Wort 'Betreff', übersichtliche tabellarische Gliederung mit Mengenangabe, Netto-, USt- und Bruttobetrag, bankübliche Zahlungsbedingungen.</li>
                                <li><strong>Fachterminologische Korrektheit:</strong> Saubere Trennung von IPv4-CIDR und IPv6-Präfixlänge /64, Doppelpunkt-Kürzung, Link-Local Gateway (fe80::1).</li>
                                <li><strong>Nachvollziehbarkeit aller Rechenwege:</strong> Ausgewiesene Formelansätze und Rechenschritte bei Nutzwertanalyse, Skonto- und Umsatzsteuerberechnung.</li>
                                <li><strong>Vollständigkeit:</strong> Alle 6 Lösungs-Anlagen (Anlagen 7, 8, 9, 10, 11, 12.1/12.2) vollständig ausgefüllt, nicht zutreffende Tabellenfelder mit Schrägstrich (/) gesperrt.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        return "";
    },

    // =========================================================================
    // PRÜFUNG 22: SOFTTECH SOLUTIONS GMBH (BAWÜ SOMMER 2026 FA 230)
    // =========================================================================
    renderSoftTechAttachments: function(pageIndex) {
        return `
            <div class="attachment-sheet">
                <div class="attachment-header">
                    <span>Prüfung 22 &bull; SoftTech Solutions GmbH (FA 230)</span>
                    <span class="attachment-tag">Anlageblatt zu Aufgabe ${pageIndex}</span>
                    <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="attachment-body">
                    <div class="attachment-doc-title">
                        <i class="fa-solid fa-briefcase" style="color: #0284c7;"></i> Pflichtenheft &amp; Technische Spezifikationen zu Aufgabe ${pageIndex}
                    </div>

                    ${pageIndex === 1 ? `
                        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem; font-size: 0.88rem; line-height: 1.5; margin-bottom: 1rem;">
                            <strong>Kundenanforderung Arbeitsplatzerweiterung:</strong><br>
                            Die SoftTech Solutions GmbH stattet 20 Software-Entwickler mit mobilen Hochleistungs-Workstations und Dual-Monitor-Arbeitsplätzen (2x 27" 4K UHD, 3840x2160, 60 Hz) aus. Die Anbindung erfolgt über eine zentrale Thunderbolt-4-Dockingstation mit 100W Power Delivery.<br>
                            &bull; <strong>DGUV Information 215-410 (Bildschirmarbeitsplätze):</strong> Sehabstand 60&ndash;80 cm, reflexionsarme matte Bildschirmoberfläche, flimmerfreie 60 Hz, Höhenverstellbarkeit 130 mm.<br>
                            &bull; <strong>Kalkulationsdaten:</strong> Notebook Einkaufspreis 1.450 € netto &bull; Dual-4K-Monitor je 320 € netto &bull; TB4-Dockingstation 180 € netto &bull; Zubehör/Kabel 50 € netto.
                        </div>
                    ` : ''}

                    ${pageIndex === 2 ? `
                        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem; font-size: 0.88rem; line-height: 1.5; margin-bottom: 1rem;">
                            <strong>Netzwerk-Spezifikation &amp; Wi-Fi 6E (IEEE 802.11ax):</strong><br>
                            &bull; <strong>Frequenzbänder:</strong> 2,4 GHz (Reichweite), 5 GHz (Durchsatz), 6 GHz (Latenzfrei, 160-MHz-Kanäle).<br>
                            &bull; <strong>Sicherheitsstandard:</strong> WPA3-Enterprise mit 802.1X / RADIUS und EAP-TLS (Zertifikatsbasiert).<br>
                            &bull; <strong>PoE-Leistungsbudget (IEEE 802.3at PoE+):</strong> 30 Watt pro Switchport für Access Points mit Multi-Gigabit-Uplink (2.5GBASE-T).
                        </div>
                    ` : ''}

                    ${pageIndex === 3 ? `
                        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem; font-size: 0.88rem; line-height: 1.5; margin-bottom: 1rem;">
                            <strong>Cyber-Physische Systeme &amp; Industrie 4.0 IoT-Anbindung:</strong><br>
                            &bull; <strong>Protokollstandard:</strong> OPC UA (Open Platform Communications Unified Architecture) für plattformunabhängige M2M-Kommunikation.<br>
                            &bull; <strong>Publish-Subscribe Telemetrie:</strong> MQTT (Message Queuing Telemetry Transport) mit Broker auf Edge-Gateway.<br>
                            &bull; <strong>Security &amp; Härtung:</strong> TLS 1.3 Transportverschlüsselung, X.509 Client-Zertifikate, rollenbasierte Autorisierung (RBAC).
                        </div>
                    ` : ''}

                    ${pageIndex === 4 ? `
                        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem; font-size: 0.88rem; line-height: 1.5; margin-bottom: 1rem;">
                            <strong>Projektkalkulation &amp; TCO-Vergleich:</strong><br>
                            &bull; <strong>Kaufoption:</strong> Hohe Anfangsinvestition (CapEx), Abschreibung über 3 Jahre (AfA), Restwertrisiko.<br>
                            &bull; <strong>Leasingoption:</strong> Laufende Betriebsausgaben (OpEx), steuerlich sofort abzugsfähig, inkl. Hardware-Refresh und Vor-Ort-Austausch-SLA (Next Business Day).
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    },

    // =========================================================================
    // PRÜFUNGEN 1 BIS 21: THEMENBEZOGENE ANLAGEN MIT SPEZIFIKATIONEN & KALKULATIONEN
    // =========================================================================
    renderGenericAttachments: function(exam, pageIndex) {
        const titleStr = exam.title || "";
        const examNum = titleStr.split(':')[0] || "Prüfung";

        return `
            <div class="attachment-sheet">
                <div class="attachment-header">
                    <span>${escapeHtml(examNum)} &bull; Aufgaben-Anlageblatt</span>
                    <span class="attachment-tag">Szenario &amp; Technische Referenz</span>
                    <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="attachment-body">
                    
                    <!-- 1. AUTHENTISCHES SZENARIO & KUNDENPROFIL -->
                    <div class="attachment-doc-title">
                        <i class="fa-solid fa-building" style="color: #4f46e5;"></i> Ausgangssituation &amp; Kundenprofil
                    </div>
                    <div style="background: #eff6ff; border-left: 3px solid #3b82f6; border-radius: 6px; padding: 0.85rem 1rem; font-size: 0.88rem; color: #1e3a8a; line-height: 1.5; margin-bottom: 1.25rem;">
                        ${escapeHtml(exam.ausgangssituation || 'Das Systemhaus plant und implementiert die IT-Infrastruktur für den Kunden.')}
                    </div>

                    <!-- 2. ANLAGEN-DATENBLATT FÜR DIE AKTUELLE AUFGABE -->
                    <div class="attachment-doc-title">
                        <i class="fa-solid fa-clipboard-list" style="color: #0284c7;"></i> Technische Parameter &amp; Vorgaben zu Aufgabe ${pageIndex}
                    </div>

                    <div style="border: 1.5px solid #cbd5e1; border-radius: 8px; overflow: hidden; margin-bottom: 1.25rem; background: #ffffff;">
                        <div style="background: #f8fafc; padding: 6px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 700; font-size: 0.84rem; color: #334155;">
                            IHK-Prüfungsstandards &bull; Formelsammlung &amp; Berechnungsregeln:
                        </div>
                        <div style="padding: 0.85rem; font-size: 0.85rem; line-height: 1.5; color: #1e293b;">
                            <div style="margin-bottom: 8px;">
                                <strong>&bull; Handelskalkulation (Vorwärtskalkulation):</strong><br>
                                Listeneinkaufspreis (LEP) &ndash; Lieferrabatt = Zieleinkaufspreis (ZEP) &ndash; Lieferskonto = Bareinkaufspreis (BEP) + Bezugskosten = Bezugspreis (Einstandspreis) + Handlungskostenzuschlag (HKZ) = Selbstkostenpreis (SKP) + Gewinnzuschlag = Barverkaufspreis (BVP) + Kundenskonto = Zielverkaufspreis (ZVP) + Kundenrabatt = Netto-Listenverkaufspreis (LVP) + 19% USt = Brutto-Verkaufspreis.
                            </div>
                            <div style="margin-bottom: 8px;">
                                <strong>&bull; IPv4-Subnetting &amp; Hostformel:</strong><br>
                                Nutzbare Hosts = 2<sup>(32 &ndash; CIDR)</sup> &ndash; 2 (Netzwerk- und Broadcast-Adresse abgezogen).<br>
                                /24 = 254 Hosts &bull; /25 = 126 Hosts &bull; /26 = 62 Hosts &bull; /27 = 30 Hosts &bull; /28 = 14 Hosts &bull; /29 = 6 Hosts &bull; /30 = 2 Hosts.
                            </div>
                            <div>
                                <strong>&bull; Speicher- &amp; Übertragungsberechnung:</strong><br>
                                1 Byte = 8 Bit &bull; 1 MB = 1.000 KB = 8.000 Kbit &bull; 1 MiB = 1.024 KiB = 1.048.576 Byte.<br>
                                Übertragungszeit <em>t</em> = Datenmenge (in Bit) / Bandbreite (in Bit/s).
                            </div>
                        </div>
                    </div>

                    <!-- 3. BEWERTUNGS- & DOKUMENTATIONSHINWEISE -->
                    <div style="background: #fefce8; border: 1.5px solid #fde047; border-radius: 8px; padding: 0.85rem; font-size: 0.85rem; color: #854d0e; line-height: 1.5;">
                        <i class="fa-solid fa-triangle-exclamation"></i> <strong>Wichtiger Prüfungshinweis:</strong><br>
                        Tragen Sie alle Antworten auf den vorgesehenen Linien oder in den Tabellen der linken Aufgabenseite ein. Verwenden Sie für Berechnungen den ausgewiesenen Rechenkasten und geben Sie stets die Maßeinheiten (z.B. €, dB(A), Mbit/s, Pkt) an.
                    </div>

                </div>
            </div>
        `;
    }
};

window.ExamAttachments = ExamAttachments;
