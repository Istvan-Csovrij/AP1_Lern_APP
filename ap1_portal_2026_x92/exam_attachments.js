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

        // PRÜFUNG 24: SOLARTECH GMBH (ORIGINALANLAGEN 2 BIS 6: UML, VLSM, KALKULATION, NWA, HARDWARE)
        // PRÜFUNG 25: HOTEL CITY HOF (PROBEKLAUSUR WINTER 2026/27 FA 230: PREISLISTE.HTML, SUBNETS.TXT, ANGEBOTE)
        if (examId === "exam_25") {
            return this.renderCityHofAttachments(pageIndex);
        }

        if (examId === "exam_24") {
            return this.renderSolarExamAttachments(pageIndex);
        }

        // PRÜFUNG 22: SOFTTECH SOLUTIONS GMBH (BAWÜ SOMMER 2026 FA 230)
        if (examId === "exam_22") {
            return this.renderSoftTechAttachments(pageIndex);
        }

        // PRÜFUNGEN 1 BIS 21: RICHTIGE THEMENBEZOGENE ANLAGEN MIT AUSFÜLL-RAHMEN
        return this.renderGenericAttachments(exam, pageIndex);
    },


    // =========================================================================
    // PRÜFUNG 24: SOLARTECH & ECOPOWER GMBH (ORIGINAL-ANLAGEN 2 BIS 6)
    // =========================================================================
    renderSolarExamAttachments: function(pageIndex) {
        const isSol = this.displayMode === "solution";

        // Helper header with tabs
        const renderSolarHeader = (title, currentTab, tabList) => {
            return `
                <div class="attachment-header">
                    <span>${title}</span>
                    <div style="display: flex; gap: 4px; align-items: center; flex-wrap: wrap;">
                        ${tabList.map(t => `
                            <button type="button" class="att-tab-btn ${currentTab === t.id ? 'active' : ''}" onclick="ExamAttachments.setTab('${t.id}')">
                                ${t.label}
                            </button>
                        `).join('')}
                        <button type="button" class="ihk-sol-toggle-btn ${this.displayMode === 'solution' ? 'active' : ''}" onclick="ExamAttachments.setMode(ExamAttachments.displayMode === 'solution' ? 'info' : 'solution')" title="Amtliche IHK-Musterlösung einblenden">
                            <i class="fa-solid fa-award"></i> 💡 IHK-Lösung
                        </button>
                        <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            `;
        };

        // Page 0: Deckblatt -> Overview of all 5 authentic Anlagen
        if (pageIndex === 0) {
            return `
                <div class="attachment-sheet">
                    <div class="attachment-header">
                        <span>SolarTech GmbH &bull; Anlagen-Verzeichnis</span>
                        <span class="attachment-tag">Original IHK AP1 Prüfung</span>
                        <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="attachment-body">
                        <div class="attachment-doc-title">
                            <i class="fa-solid fa-folder-open" style="color: #f59e0b;"></i> Übersicht der 5 amtlichen Prüfungs-Anlagen (Anlagen 2 bis 6)
                        </div>
                        <p style="font-size: 0.9rem; color: #475569; line-height: 1.5; margin-bottom: 1rem;">
                            Dieser authentische Prüfungssatz kombiniert Vorgabe-Informationsblätter mit amtlichen Abgabeblättern:
                        </p>

                        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                            <div class="anlage-summary-card" onclick="changeExamPage(1)">
                                <div class="anlage-badge">IT 1 &bull; Aufgabe 1</div>
                                <div style="font-size: 0.88rem; line-height: 1.45;">
                                    <strong>📄 Anlage 2:</strong> Klassenbeschreibung (UML-Klassen XmlAnfrage, CsvAnfrage, Flaeche, Angebot, Bestellposition, Komponente)<br>
                                    <span style="color: #0284c7; font-weight: 700;">✍️ Abgabebereich:</span> Beziehungsanalyse, Entwurfsmuster &amp; Dachflächen-Berechnung
                                </div>
                            </div>

                            <div class="anlage-summary-card" onclick="changeExamPage(2)">
                                <div class="anlage-badge" style="background: #0284c7;">IT 2 &bull; Aufgabe 2</div>
                                <div style="font-size: 0.88rem; line-height: 1.45;">
                                    <strong>✍️ Anlage 3 - Subnetz:</strong> Offizielles Abgabeblatt mit Ausfüllrahmen<br>
                                    <span style="color: #0284c7; font-weight: 700;">🌐 VLSM-Planung:</span> 7 Teilnetze (WLAN1, WLAN2, LAN1, LAN2, Server, Mgmt, VPN Transfernetzwerk)
                                </div>
                            </div>

                            <div class="anlage-summary-card" onclick="changeExamPage(3)">
                                <div class="anlage-badge" style="background: #10b981;">IT 3 &bull; Aufgabe 3</div>
                                <div style="font-size: 0.88rem; line-height: 1.45;">
                                    <strong>📡 Anlage 6:</strong> Hardware-Datenblatt (AZOS AP-42, Getnear AP-08, ELink AP-15)<br>
                                    <strong>💶 Anlage 4:</strong> Handelskalkulation / Bezugskalkulation (Abgabeblatt)<br>
                                    <strong>📊 Anlage 5:</strong> Nutzwertanalyse Entscheidungsmatrix (Abgabeblatt)
                                </div>
                            </div>
                        </div>

                        <div style="margin-top: 1.25rem; padding: 0.85rem; background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 8px; font-size: 0.86rem; color: #1e40af;">
                            <i class="fa-solid fa-lightbulb"></i> <strong>Tipp für die Bearbeitung:</strong> Wechseln Sie in den Aufgaben mit den Reitern oben zwischen den Vorgabeblättern, den interaktiven Ausfüllrahmen und den Original-Scans!
                        </div>
                    </div>
                </div>
            `;
        }

        // =====================================================================
        // AUFGABE 1: ANLAGE 2 - KLASSENBESCHREIBUNG (IT 1)
        // =====================================================================
        if (pageIndex === 1) {
            let activeTab = this.activeSubTab;
            if (!["a2_table", "a2_scan", "a2_rahmen"].includes(activeTab)) {
                activeTab = "a2_table";
            }

            const header = renderSolarHeader("IT 1 &bull; Softwarearchitektur &amp; OOP", activeTab, [
                { id: "a2_table", label: "📄 Anlage 2: Klassen" },
                { id: "a2_rahmen", label: "✍️ Entwurfs-Rahmen" },
                { id: "a2_scan", label: "🖼️ Original-Scan" }
            ]);

            return `
                <div class="attachment-sheet">
                    ${header}
                    <div class="attachment-body">
                        
                        ${activeTab === "a2_scan" ? `
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-image" style="color: #6366f1;"></i> Original-Scan: Anlage 2 - Klassenbeschreibung
                            </div>
                            <div style="border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: #000000; text-align: center; margin-bottom: 1rem;">
                                <img src="anlagen_scans/anlage_2_klassen.png" alt="Anlage 2 Scan" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            </div>
                        ` : ''}

                        ${activeTab === "a2_table" ? `
                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 6px; margin-bottom: 1rem;">
                                <div style="font-weight: 800; font-size: 1.05rem; color: #0f172a;">Anlage 2 - Klassenbeschreibung</div>
                                <span style="font-size: 0.8rem; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 700;">UML 2.5 Spezifikation</span>
                            </div>

                            <p style="font-size: 0.85rem; color: #475569; line-height: 1.45; margin-bottom: 1rem;">
                                Die folgende tabellarische Spezifikation definiert das objektorientierte Datenmodell für die Solaranlagen-Planungssoftware:
                            </p>

                            <!-- KLASSE 1: XmlAnfrage -->
                            <div style="border: 1.5px solid #0f172a; margin-bottom: 1rem; border-radius: 4px; overflow: hidden;">
                                <div style="display: flex; background: #ffffff;">
                                    <div style="flex: 0 0 45%; border-right: 1.5px solid #0f172a; padding: 0.5rem 0.65rem; font-family: monospace; font-size: 0.88rem;">
                                        <div style="font-weight: 800; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-bottom: 3px; color: #0f172a;">XmlAnfrage</div>
                                        <div style="color: #0284c7;">+XmlAnfrage(pfad: string)</div>
                                    </div>
                                    <div style="flex: 1; padding: 0.5rem 0.65rem; font-size: 0.84rem; line-height: 1.4; color: #334155;">
                                        <strong>Konstruktor</strong> &ndash; Liest XML-Datei am übergebenen Pfad und erzeugt und initialisiert mit den eingelesenen Werten ein Objekt vom Typ <code>XmlAnfrage</code>.
                                    </div>
                                </div>
                            </div>

                            <!-- KLASSE 2: CsvAnfrage -->
                            <div style="border: 1.5px solid #0f172a; margin-bottom: 1rem; border-radius: 4px; overflow: hidden;">
                                <div style="display: flex; background: #ffffff;">
                                    <div style="flex: 0 0 45%; border-right: 1.5px solid #0f172a; padding: 0.5rem 0.65rem; font-family: monospace; font-size: 0.88rem;">
                                        <div style="font-weight: 800; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-bottom: 3px; color: #0f172a;">CsvAnfrage</div>
                                        <div style="color: #0284c7;">+CsvAnfrage(pfad: string)</div>
                                    </div>
                                    <div style="flex: 1; padding: 0.5rem 0.65rem; font-size: 0.84rem; line-height: 1.4; color: #334155;">
                                        <strong>Konstruktor</strong> &ndash; Liest CSV-Datei am übergebenen Pfad und erzeugt und initialisiert mit den eingelesenen Werten ein Objekt vom Typ <code>CsvAnfrage</code>.
                                    </div>
                                </div>
                            </div>

                            <!-- KLASSE 3: Flaeche -->
                            <div style="border: 1.5px solid #0f172a; margin-bottom: 1rem; border-radius: 4px; overflow: hidden;">
                                <div style="display: flex; background: #ffffff;">
                                    <div style="flex: 0 0 45%; border-right: 1.5px solid #0f172a; padding: 0.5rem 0.65rem; font-family: monospace; font-size: 0.88rem;">
                                        <div style="font-weight: 800; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-bottom: 3px; color: #0f172a;">Flaeche</div>
                                        <div style="color: #dc2626;">-bezeichnung: string</div>
                                        <div style="color: #dc2626;">-laenge: double</div>
                                        <div style="color: #dc2626;">-breite: double</div>
                                        <div style="color: #0284c7; border-top: 1px solid #cbd5e1; margin-top: 3px; padding-top: 3px;">+Flaeche(...)</div>
                                    </div>
                                    <div style="flex: 1; padding: 0.5rem 0.65rem; font-size: 0.84rem; line-height: 1.4; color: #334155;">
                                        <div>Bezeichnung der Dachfläche</div>
                                        <div>Länge der Fläche (in Metern)</div>
                                        <div>Breite der Fläche (in Metern)</div>
                                        <div style="margin-top: 4px;"><strong>Konstruktor</strong> &ndash; übernimmt für jedes Klassenattribut einen Wert und initialisiert diese.</div>
                                    </div>
                                </div>
                            </div>

                            <!-- KLASSE 4: Angebot -->
                            <div style="border: 1.5px solid #0f172a; margin-bottom: 1rem; border-radius: 4px; overflow: hidden;">
                                <div style="display: flex; background: #ffffff;">
                                    <div style="flex: 0 0 45%; border-right: 1.5px solid #0f172a; padding: 0.5rem 0.65rem; font-family: monospace; font-size: 0.88rem;">
                                        <div style="font-weight: 800; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-bottom: 3px; color: #0f172a;">Angebot</div>
                                        <div style="color: #dc2626;">-id: int</div>
                                        <div style="color: #dc2626;">-positionen: BestellPosition[ ]</div>
                                        <div style="color: #0284c7; border-top: 1px solid #cbd5e1; margin-top: 3px; padding-top: 3px;">+Angebot(...)</div>
                                        <div style="color: #0284c7;">+ToString(): string</div>
                                    </div>
                                    <div style="flex: 1; padding: 0.5rem 0.65rem; font-size: 0.84rem; line-height: 1.4; color: #334155;">
                                        <div>Primärschlüssel des Datensatzes</div>
                                        <div>Liste von Bestellpositionen (Komposition)</div>
                                        <div style="margin-top: 4px;"><strong>Konstruktor</strong> &ndash; übernimmt für jedes Klassenattribut einen Wert und initialisiert diese.</div>
                                        <div>Überschreibt <code>Object.ToString()</code> &ndash; gibt Angebot in Textform aus.</div>
                                    </div>
                                </div>
                            </div>

                            <!-- KLASSE 5: Bestellposition -->
                            <div style="border: 1.5px solid #0f172a; margin-bottom: 1rem; border-radius: 4px; overflow: hidden;">
                                <div style="display: flex; background: #ffffff;">
                                    <div style="flex: 0 0 45%; border-right: 1.5px solid #0f172a; padding: 0.5rem 0.65rem; font-family: monospace; font-size: 0.88rem;">
                                        <div style="font-weight: 800; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-bottom: 3px; color: #0f172a;">Bestellposition</div>
                                        <div style="color: #dc2626;">-nr: int</div>
                                        <div style="color: #dc2626;">-komponente: Komponente</div>
                                        <div style="color: #dc2626;">-anzahl</div>
                                        <div style="color: #0284c7; border-top: 1px solid #cbd5e1; margin-top: 3px; padding-top: 3px;">+Bestellposition(...)</div>
                                    </div>
                                    <div style="flex: 1; padding: 0.5rem 0.65rem; font-size: 0.84rem; line-height: 1.4; color: #334155;">
                                        <div>Primärschlüssel des Datensatzes</div>
                                        <div>Die in dieser Position bestellte Komponente (Aggregation)</div>
                                        <div>Menge der bestellten Komponenten</div>
                                        <div style="margin-top: 4px;"><strong>Konstruktor</strong> &ndash; übernimmt für jedes Klassenattribut einen Wert und initialisiert diese.</div>
                                    </div>
                                </div>
                            </div>

                            <!-- KLASSE 6: Komponente (abstract) -->
                            <div style="border: 1.5px solid #0f172a; margin-bottom: 1rem; border-radius: 4px; overflow: hidden;">
                                <div style="display: flex; background: #ffffff;">
                                    <div style="flex: 0 0 45%; border-right: 1.5px solid #0f172a; padding: 0.5rem 0.65rem; font-family: monospace; font-size: 0.88rem;">
                                        <div style="font-weight: 800; font-style: italic; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-bottom: 3px; color: #0f172a;">Komponente (abstract)</div>
                                        <div style="color: #dc2626;">-id: int</div>
                                        <div style="color: #dc2626;">-preis: double</div>
                                        <div style="color: #0284c7; border-top: 1px solid #cbd5e1; margin-top: 3px; padding-top: 3px;">+Komponente(...)</div>
                                        <div style="color: #0284c7;">+ToString(): string</div>
                                    </div>
                                    <div style="flex: 1; padding: 0.5rem 0.65rem; font-size: 0.84rem; line-height: 1.4; color: #334155;">
                                        <div>Primärschlüssel des Datensatzes</div>
                                        <div>Preis der Komponente</div>
                                        <div style="margin-top: 4px;"><strong>Konstruktor</strong> &ndash; übernimmt für jedes Klassenattribut einen Wert und initialisiert diese.</div>
                                        <div>Überschreibt <code>Object.ToString()</code> &ndash; gibt Komponente in Textform aus.</div>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${activeTab === "a2_rahmen" ? `
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-pen" style="color: #0284c7;"></i> Lösungs- &amp; Begründungsrahmen zu Aufgabe 1
                            </div>
                            <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem; background: #f8fafc; font-size: 0.85rem; line-height: 1.5; color: #1e293b;">
                                <strong>Prüfungsrelevante Kernbegriffe für Ihre Ausarbeitung:</strong><br>
                                &bull; <strong>Komposition vs. Aggregation:</strong> Gefüllte Raute (Komposition) an Angebot &bull; Offene Raute an Bestellposition &bull; Multiplizitäten: <code>1</code> zu <code>1..*</code><br>
                                &bull; <strong>Abstrakte Klasse:</strong> Nicht instanziierbar &bull; Polymorphe Schablone für Solarmodule, Wechselrichter, Speicher &bull; Kursivschrift im UML-Diagramm<br>
                                &bull; <strong>Entwurfsmuster:</strong> Factory Method Pattern &bull; Entkopplung von Aufrufer und Erzeugung &bull; Single-Responsibility-Principle<br>
                                &bull; <strong>Dachflächen-Formel:</strong> Abzug von 2 &times; 0,5 m Randabstand = 11,0 m &times; 5,5 m = 30 Module.
                            </div>
                        ` : ''}

                        ${isSol ? `
                            <div style="margin-top: 1rem; padding: 0.85rem; background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 8px; font-size: 0.85rem; color: #166534; line-height: 1.5;">
                                <i class="fa-solid fa-check-circle"></i> <strong>IHK-Musterlösung aktiviert:</strong> Beachten Sie die präzise Trennung von Komposition (lebenslange Bindung an Angebot) und Aggregation (Komponente existiert auch ohne Bestellposition).
                            </div>
                        ` : ''}

                    </div>
                </div>
            `;
        }

        // =====================================================================
        // AUFGABE 2: ANLAGE 3 - SUBNETZ (IT 2)
        // =====================================================================
        if (pageIndex === 2) {
            let activeTab = this.activeSubTab;
            if (!["a3_sheet", "a3_scan", "a3_info"].includes(activeTab)) {
                activeTab = "a3_sheet";
            }

            const header = renderSolarHeader("IT 2 &bull; Subnetting nach VLSM", activeTab, [
                { id: "a3_sheet", label: "✍️ Anlage 3: Abgabeblatt" },
                { id: "a3_info", label: "📄 Vorgaben &amp; Formel" },
                { id: "a3_scan", label: "🖼️ Original-Scan" }
            ]);

            return `
                <div class="attachment-sheet">
                    ${header}
                    <div class="attachment-body">
                        
                        ${activeTab === "a3_scan" ? `
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-image" style="color: #6366f1;"></i> Original-Scan: Anlage 3 - Subnetz
                            </div>
                            <div style="border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: #000000; text-align: center; margin-bottom: 1rem;">
                                <img src="anlagen_scans/anlage_3_subnetz.png" alt="Anlage 3 Scan" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            </div>
                        ` : ''}

                        ${activeTab === "a3_info" ? `
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-network-wired" style="color: #0284c7;"></i> VLSM-Berechnungsgrundlagen (Basisnetz: 192.168.10.0/24)
                            </div>
                            <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem; font-size: 0.86rem; line-height: 1.5; color: #1e293b; margin-bottom: 1rem;">
                                <strong>Regeln für die VLSM-Berechnung:</strong><br>
                                1. <strong>Sortierung nach Hostbedarf (absteigend):</strong><br>
                                &bull; WLAN1 (50 Hosts) &bull; WLAN2 (50 Hosts) &rarr; Benötigen je 2<sup>6</sup> &ndash; 2 = 62 Adressen &rarr; <strong>/26</strong> (Schrittweite 64)<br>
                                &bull; LAN1 (25 Hosts) &bull; LAN2 (25 Hosts) &rarr; Benötigen je 2<sup>5</sup> &ndash; 2 = 30 Adressen &rarr; <strong>/27</strong> (Schrittweite 32)<br>
                                &bull; Server (10 Hosts) &bull; Mgmt (10 Hosts) &rarr; Benötigen je 2<sup>4</sup> &ndash; 2 = 14 Adressen &rarr; <strong>/28</strong> (Schrittweite 16)<br>
                                &bull; VPN Transfernetz (2 Hosts) &rarr; Benötigt 2<sup>2</sup> &ndash; 2 = 2 Adressen &rarr; <strong>/30</strong> (Schrittweite 4)<br><br>
                                2. <strong>Regel für PCs &amp; Gateways:</strong> Standard-Gateway erhält die erste nutzbare Adresse, PCs nutzen den verbleibenden Adressbereich.
                            </div>
                        ` : ''}

                        ${activeTab === "a3_sheet" ? `
                            <!-- OFFIZIELLER IHK-KOPF DES ABGABEBLATTS -->
                            <div style="border-bottom: 2px solid #0f172a; padding-bottom: 8px; margin-bottom: 1rem;">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
                                    <div>
                                        <div style="font-weight: 800; font-size: 1.1rem; color: #0f172a;">Anlage 3 - Subnetz</div>
                                        <div style="font-size: 0.8rem; font-weight: 700; color: #dc2626; margin-top: 2px;">Bitte geben Sie dieses Blatt mit Ihren Lösungen ab.</div>
                                    </div>
                                    <div style="font-size: 0.84rem; color: #334155;">
                                        <span>Name, Vorname: <span style="display: inline-block; width: 140px; border-bottom: 1px solid #475569;">&nbsp;</span></span>
                                        <span style="margin-left: 12px;">Klasse: <span style="display: inline-block; width: 60px; border-bottom: 1px solid #475569;">&nbsp;</span></span>
                                    </div>
                                </div>
                            </div>

                            <!-- INTERAKTIVE ODER GELÖSTE SUBNETZ-TABELLE -->
                            <div class="att-spec-table-wrap">
                                <table class="att-spec-table" style="font-size: 0.8rem;">
                                    <thead>
                                        <tr style="background: #f1f5f9; text-align: center;">
                                            <th style="width: 18%;">Netzwerkname</th>
                                            <th style="width: 12%;">Zahl der geplanten Hosts</th>
                                            <th style="width: 18%;">Netzwerkadresse</th>
                                            <th style="width: 14%;">Subnetzmaske nach CIDR</th>
                                            <th style="width: 22%;">IP-Range PCs</th>
                                            <th style="width: 16%;">IP-Adresse Standard-Gateway</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- WLAN1 -->
                                        <tr>
                                            <td style="font-weight: 700; background: #fafafa;">WLAN1</td>
                                            <td style="text-align: center;">50</td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.0' : '192.168.10.<input type="text" style="width:38px; padding:2px; font-family:monospace;" placeholder="0">'}
                                            </td>
                                            <td style="text-align: center; font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '/26' : '<input type="text" style="width:38px; text-align:center; padding:2px; font-family:monospace;" placeholder="/26">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.2 &ndash; 192.168.10.62' : '192.168.10.<input type="text" style="width:30px; padding:2px;" placeholder="2">&ndash;<input type="text" style="width:30px; padding:2px;" placeholder="62">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.1' : '192.168.10.<input type="text" style="width:34px; padding:2px;" placeholder="1">'}
                                            </td>
                                        </tr>

                                        <!-- WLAN2 -->
                                        <tr>
                                            <td style="font-weight: 700; background: #fafafa;">WLAN2</td>
                                            <td style="text-align: center;">50</td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.64' : '192.168.10.<input type="text" style="width:38px; padding:2px; font-family:monospace;" placeholder="64">'}
                                            </td>
                                            <td style="text-align: center; font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '/26' : '<input type="text" style="width:38px; text-align:center; padding:2px; font-family:monospace;" placeholder="/26">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.66 &ndash; 192.168.10.126' : '192.168.10.<input type="text" style="width:30px; padding:2px;" placeholder="66">&ndash;<input type="text" style="width:30px; padding:2px;" placeholder="126">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.65' : '192.168.10.<input type="text" style="width:34px; padding:2px;" placeholder="65">'}
                                            </td>
                                        </tr>

                                        <!-- LAN1 -->
                                        <tr>
                                            <td style="font-weight: 700; background: #fafafa;">LAN1</td>
                                            <td style="text-align: center;">25</td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.128' : '192.168.10.<input type="text" style="width:38px; padding:2px; font-family:monospace;" placeholder="128">'}
                                            </td>
                                            <td style="text-align: center; font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '/27' : '<input type="text" style="width:38px; text-align:center; padding:2px; font-family:monospace;" placeholder="/27">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.130 &ndash; 192.168.10.158' : '192.168.10.<input type="text" style="width:30px; padding:2px;" placeholder="130">&ndash;<input type="text" style="width:30px; padding:2px;" placeholder="158">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.129' : '192.168.10.<input type="text" style="width:34px; padding:2px;" placeholder="129">'}
                                            </td>
                                        </tr>

                                        <!-- LAN2 -->
                                        <tr>
                                            <td style="font-weight: 700; background: #fafafa;">LAN2</td>
                                            <td style="text-align: center;">25</td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.160' : '192.168.10.<input type="text" style="width:38px; padding:2px; font-family:monospace;" placeholder="160">'}
                                            </td>
                                            <td style="text-align: center; font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '/27' : '<input type="text" style="width:38px; text-align:center; padding:2px; font-family:monospace;" placeholder="/27">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.162 &ndash; 192.168.10.190' : '192.168.10.<input type="text" style="width:30px; padding:2px;" placeholder="162">&ndash;<input type="text" style="width:30px; padding:2px;" placeholder="190">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.161' : '192.168.10.<input type="text" style="width:34px; padding:2px;" placeholder="161">'}
                                            </td>
                                        </tr>

                                        <!-- Servernetzwerk -->
                                        <tr>
                                            <td style="font-weight: 700; background: #fafafa;">Servernetzwerk</td>
                                            <td style="text-align: center;">10</td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.192' : '192.168.10.<input type="text" style="width:38px; padding:2px; font-family:monospace;" placeholder="192">'}
                                            </td>
                                            <td style="text-align: center; font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '/28' : '<input type="text" style="width:38px; text-align:center; padding:2px; font-family:monospace;" placeholder="/28">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.194 &ndash; 192.168.10.206' : '192.168.10.<input type="text" style="width:30px; padding:2px;" placeholder="194">&ndash;<input type="text" style="width:30px; padding:2px;" placeholder="206">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.193' : '192.168.10.<input type="text" style="width:34px; padding:2px;" placeholder="193">'}
                                            </td>
                                        </tr>

                                        <!-- Netzwerkmanagement -->
                                        <tr>
                                            <td style="font-weight: 700; background: #fafafa;">Netzwerkmanagement</td>
                                            <td style="text-align: center;">10</td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.208' : '192.168.10.<input type="text" style="width:38px; padding:2px; font-family:monospace;" placeholder="208">'}
                                            </td>
                                            <td style="text-align: center; font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '/28' : '<input type="text" style="width:38px; text-align:center; padding:2px; font-family:monospace;" placeholder="/28">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.210 &ndash; 192.168.10.222' : '192.168.10.<input type="text" style="width:30px; padding:2px;" placeholder="210">&ndash;<input type="text" style="width:30px; padding:2px;" placeholder="222">'}
                                            </td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.209' : '192.168.10.<input type="text" style="width:34px; padding:2px;" placeholder="209">'}
                                            </td>
                                        </tr>

                                        <!-- VPN Transfernetzwerk -->
                                        <tr>
                                            <td style="font-weight: 700; background: #fafafa;">VPN Transfernetzwerk</td>
                                            <td style="text-align: center;">2</td>
                                            <td style="font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.224' : '192.168.10.<input type="text" style="width:38px; padding:2px; font-family:monospace;" placeholder="224">'}
                                            </td>
                                            <td style="text-align: center; font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '/30' : '<input type="text" style="width:38px; text-align:center; padding:2px; font-family:monospace;" placeholder="/30">'}
                                            </td>
                                            <td style="text-align: center; font-weight: 700; color: #64748b;">
                                                &ndash;
                                            </td>
                                            <td style="font-family: monospace; line-height: 1.4; ${isSol ? 'background: #f0fdf4; font-weight: 700; color: #166534;' : ''}">
                                                ${isSol ? '192.168.10.225<br>192.168.10.226' : '192.168.10.<input type="text" style="width:30px; padding:1px;" placeholder="225"><br>192.168.10.<input type="text" style="width:30px; padding:1px;" placeholder="226">'}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ` : ''}

                    </div>
                </div>
            `;
        }

        // =====================================================================
        // AUFGABE 3: ANLAGE 6 (HARDWARE), ANLAGE 4 (KALKULATION), ANLAGE 5 (NWA)
        // =====================================================================
        if (pageIndex === 3) {
            let activeTab = this.activeSubTab;
            if (!["a6_hw", "a4_kalk", "a5_nwa", "a_scans"].includes(activeTab)) {
                activeTab = "a6_hw";
            }

            const header = renderSolarHeader("IT 3 &bull; Hardware, Kalkulation &amp; NWA", activeTab, [
                { id: "a6_hw", label: "📡 Anlage 6: Datenblatt" },
                { id: "a4_kalk", label: "💶 Anlage 4: Kalkulation" },
                { id: "a5_nwa", label: "📊 Anlage 5: NWA" },
                { id: "a_scans", label: "🖼️ Original-Scans" }
            ]);

            return `
                <div class="attachment-sheet">
                    ${header}
                    <div class="attachment-body">
                        
                        ${activeTab === "a_scans" ? `
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-images" style="color: #6366f1;"></i> Original-Scans der Anlagen 4, 5 und 6
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem;">
                                <div>
                                    <div style="font-weight: 700; font-size: 0.85rem; margin-bottom: 4px;">Anlage 6 (Hardware-Vergleich):</div>
                                    <img src="anlagen_scans/anlage_6_hardware.png" style="max-width: 100%; border: 1px solid #cbd5e1; border-radius: 6px;">
                                </div>
                                <div>
                                    <div style="font-weight: 700; font-size: 0.85rem; margin-bottom: 4px;">Anlage 5 (Nutzwertanalyse):</div>
                                    <img src="anlagen_scans/anlage_5_nutzwertanalyse.png" style="max-width: 100%; border: 1px solid #cbd5e1; border-radius: 6px;">
                                </div>
                                <div>
                                    <div style="font-weight: 700; font-size: 0.85rem; margin-bottom: 4px;">Anlage 4 (Bezugskalkulation):</div>
                                    <img src="anlagen_scans/anlage_4_kalkulation.png" style="max-width: 100%; border: 1px solid #cbd5e1; border-radius: 6px;">
                                </div>
                            </div>
                        ` : ''}

                        ${activeTab === "a6_hw" ? `
                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 6px; margin-bottom: 1rem;">
                                <div style="font-weight: 800; font-size: 1.05rem; color: #0f172a;">Anlage 6 &bull; Hardware-Vergleich Access Points</div>
                                <span style="font-size: 0.8rem; background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 4px; font-weight: 700;">Vorgabe-Informationsblatt</span>
                            </div>

                            <!-- GERÄT 1: AZOS AP-42 -->
                            <div style="border: 1.5px solid #0f172a; margin-bottom: 1.25rem; border-radius: 6px; overflow: hidden; background: #ffffff;">
                                <div style="background: #0f172a; color: #ffffff; padding: 6px 12px; font-weight: 800; font-size: 0.95rem; display: flex; justify-content: space-between;">
                                    <span>AZOS AP-42</span>
                                    <span style="color: #38bdf8;">178,31 € zzgl. MwSt</span>
                                </div>
                                <div class="att-spec-table-wrap" style="margin: 0;">
                                    <table class="att-spec-table" style="font-size: 0.82rem; margin: 0;">
                                        <tr><td style="width: 35%; font-weight: 700; background: #f8fafc;">LAN</td><td>1x 1000Base-T</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Wireless</td><td>WLAN 802.11a/ac/b/g/n</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Übertragungsrate</td><td><strong>575 Mbit/s</strong> (2,4 GHz) &bull; <strong>1200 Mbit/s</strong> (5 GHz)</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Sicherheit</td><td>WPA, WPA-PSK, WPA2, WPA2-Enterprise, <strong>WPA3</strong></td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Anschlüsse und Bedienung</td><td>2xLAN, 12V DC</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Leistungsaufnahme</td><td><strong>14,4W</strong> (Betrieb)</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Maximale Anzahl Clients</td><td>50</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Mittlere Betriebsdauer MTBF</td><td><strong>691 548 Stunden</strong> (~79 Jahre)</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Herstellergarantie</td><td><strong>7 Jahre</strong></td></tr>
                                    </table>
                                </div>
                            </div>

                            <!-- GERÄT 2: Getnear AP-08 -->
                            <div style="border: 1.5px solid #0f172a; margin-bottom: 1.25rem; border-radius: 6px; overflow: hidden; background: #ffffff;">
                                <div style="background: #334155; color: #ffffff; padding: 6px 12px; font-weight: 800; font-size: 0.95rem; display: flex; justify-content: space-between;">
                                    <span>Getnear AP-08</span>
                                    <span style="color: #cbd5e1;">221,73 € zzgl. MwSt</span>
                                </div>
                                <div class="att-spec-table-wrap" style="margin: 0;">
                                    <table class="att-spec-table" style="font-size: 0.82rem; margin: 0;">
                                        <tr><td style="width: 35%; font-weight: 700; background: #f8fafc;">LAN</td><td>1x 1000Base-T</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Wireless</td><td>WLAN 802.11a/ac/b/g/n</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Übertragungsrate</td><td>575 Mbit/s (2,4 GHz) &bull; 867 Mbit/s (5 GHz)</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Sicherheit</td><td>WPA, WPA-PSK, WPA2, WPA2-Enterprise (kein WPA3!)</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Anschlüsse und Bedienung</td><td>LAN, 24V DC</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Leistungsaufnahme</td><td>16,8W (Betrieb)</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Maximale Anzahl Clients</td><td>50</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Mittlere Betriebsdauer MTBF</td><td>476 348 Stunden</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Herstellergarantie</td><td>3 Jahre</td></tr>
                                    </table>
                                </div>
                            </div>

                            <!-- GERÄT 3: ELink AP-15 -->
                            <div style="border: 1.5px solid #0f172a; margin-bottom: 1rem; border-radius: 6px; overflow: hidden; background: #ffffff;">
                                <div style="background: #475569; color: #ffffff; padding: 6px 12px; font-weight: 800; font-size: 0.95rem; display: flex; justify-content: space-between;">
                                    <span>ELink AP-15</span>
                                    <span style="color: #cbd5e1;">237,18 € zzgl. MwSt</span>
                                </div>
                                <div class="att-spec-table-wrap" style="margin: 0;">
                                    <table class="att-spec-table" style="font-size: 0.82rem; margin: 0;">
                                        <tr><td style="width: 35%; font-weight: 700; background: #f8fafc;">LAN</td><td>1x 1000Base-T</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Wireless</td><td>WLAN 802.11 b/g/n (nur 2,4 GHz!)</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Übertragungsrate</td><td>575 Mbit/s (2,4 GHz)</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Sicherheit</td><td>WPA, WPA-PSK, WPA2, WPA2-Enterprise, WPA3</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Anschlüsse und Bedienung</td><td>LAN, 12V DC</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Leistungsaufnahme</td><td>15,1W (Betrieb)</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Maximale Anzahl Clients</td><td>50</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Mittlere Betriebsdauer MTBF</td><td>367 715 Stunden</td></tr>
                                        <tr><td style="font-weight: 700; background: #f8fafc;">Herstellergarantie</td><td>3 Jahre</td></tr>
                                    </table>
                                </div>
                            </div>
                        ` : ''}

                        ${activeTab === "a4_kalk" ? `
                            <!-- OFFIZIELLER KOPF ANLAGE 4 -->
                            <div style="border-bottom: 2px solid #0f172a; padding-bottom: 8px; margin-bottom: 1rem;">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
                                    <div>
                                        <div style="font-weight: 800; font-size: 1.1rem; color: #0f172a;">Anlage 4 &bull; Bezugskalkulation</div>
                                        <div style="font-size: 0.8rem; font-weight: 700; color: #dc2626; margin-top: 2px;">Bitte geben Sie dieses Blatt mit Ihren Lösungen ab.</div>
                                    </div>
                                    <div style="font-size: 0.84rem; color: #334155;">
                                        <span>Name, Vorname: <span style="display: inline-block; width: 140px; border-bottom: 1px solid #475569;">&nbsp;</span></span>
                                        <span style="margin-left: 12px;">Klasse: <span style="display: inline-block; width: 60px; border-bottom: 1px solid #475569;">&nbsp;</span></span>
                                    </div>
                                </div>
                            </div>

                            <div class="att-spec-table-wrap">
                                <table class="att-spec-table" style="font-size: 0.8rem;">
                                    <thead>
                                        <tr style="background: #f1f5f9; text-align: center;">
                                            <th rowspan="2" style="width: 28%; vertical-align: middle;">Kalkulationsposition</th>
                                            <th colspan="2" style="width: 24%;">AZOS AP-42</th>
                                            <th colspan="2" style="width: 24%;">Getnear AP-08</th>
                                            <th colspan="2" style="width: 24%;">ELink AP-15</th>
                                        </tr>
                                        <tr style="background: #f8fafc; text-align: center;">
                                            <th style="width: 8%;">%</th><th style="width: 16%;">€</th>
                                            <th style="width: 8%;">%</th><th style="width: 16%;">€</th>
                                            <th style="width: 8%;">%</th><th style="width: 16%;">€</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="font-weight: 700;">Listenpreis (pro Stück)</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace;">178,31 €</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace;">221,73 €</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace;">237,18 €</td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: 700;">Listenpreis (Gesamt 10 Stk.)</td>
                                            <td style="text-align: center;">100%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight:700;' : ''}">${isSol ? '1.783,10 €' : '<input type="text" style="width:68px; text-align:right;" placeholder="1783,10">'}</td>
                                            <td style="text-align: center;">100%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight:700;' : ''}">${isSol ? '2.217,30 €' : '<input type="text" style="width:68px; text-align:right;" placeholder="2217,30">'}</td>
                                            <td style="text-align: center;">100%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4; font-weight:700;' : ''}">${isSol ? '2.371,80 €' : '<input type="text" style="width:68px; text-align:right;" placeholder="2371,80">'}</td>
                                        </tr>
                                        <tr>
                                            <td>&ndash; Lieferrabatt</td>
                                            <td style="text-align: center;">10%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '178,31 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                            <td style="text-align: center;">15%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '332,60 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                            <td style="text-align: center;">20%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '474,36 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                        </tr>
                                        <tr style="background: #fafafa; font-weight: 700;">
                                            <td>= Zieleinkaufspreis</td>
                                            <td style="text-align: center;">90%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '1.604,79 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                            <td style="text-align: center;">85%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '1.884,70 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                            <td style="text-align: center;">80%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '1.897,44 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                        </tr>
                                        <tr>
                                            <td>&ndash; Lieferskonti</td>
                                            <td style="text-align: center;">2%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '32,10 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                            <td style="text-align: center;">3%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '56,54 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                            <td style="text-align: center;">2%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '37,95 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                        </tr>
                                        <tr style="background: #fafafa; font-weight: 700;">
                                            <td>= Bareinkaufspreis</td>
                                            <td style="text-align: center;">98%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '1.572,69 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                            <td style="text-align: center;">97%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '1.828,16 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                            <td style="text-align: center;">98%</td><td style="text-align: right; font-family: monospace; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '1.859,49 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                        </tr>
                                        <tr>
                                            <td>+ Bezugskosten</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace;">25,00 €</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace;">0,00 €</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace;">35,00 €</td>
                                        </tr>
                                        <tr style="background: #eff6ff; font-weight: 800; border-top: 2px solid #0f172a; border-bottom: 2px solid #0f172a;">
                                            <td style="color: #1e3a8a;">= Einstandspreis (Gesamt)</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace; color: #166534; font-size: 0.9rem;">${isSol ? '1.597,69 €' : '<input type="text" style="width:72px; text-align:right; font-weight:bold;">'}</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace; color: #1e3a8a; font-size: 0.9rem;">${isSol ? '1.828,16 €' : '<input type="text" style="width:72px; text-align:right; font-weight:bold;">'}</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace; color: #1e3a8a; font-size: 0.9rem;">${isSol ? '1.894,49 €' : '<input type="text" style="width:72px; text-align:right; font-weight:bold;">'}</td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: 700; color: #475569;">= Einstandspreis (pro Stück)</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace; font-weight: 700;">${isSol ? '159,77 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace; font-weight: 700;">${isSol ? '182,82 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                            <td style="text-align: center;">&ndash;</td><td style="text-align: right; font-family: monospace; font-weight: 700;">${isSol ? '189,45 €' : '<input type="text" style="width:68px; text-align:right;">'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ` : ''}

                        ${activeTab === "a5_nwa" ? `
                            <!-- OFFIZIELLER KOPF ANLAGE 5 -->
                            <div style="border-bottom: 2px solid #0f172a; padding-bottom: 8px; margin-bottom: 1rem;">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
                                    <div>
                                        <div style="font-weight: 800; font-size: 1.1rem; color: #0f172a;">Anlage 5 &bull; Nutzwertanalyse</div>
                                        <div style="font-size: 0.8rem; font-weight: 700; color: #dc2626; margin-top: 2px;">Bitte geben Sie dieses Blatt mit Ihren Lösungen ab.</div>
                                    </div>
                                    <div style="font-size: 0.84rem; color: #334155;">
                                        <span>Name, Vorname: <span style="display: inline-block; width: 140px; border-bottom: 1px solid #475569;">&nbsp;</span></span>
                                        <span style="margin-left: 12px;">Klasse: <span style="display: inline-block; width: 60px; border-bottom: 1px solid #475569;">&nbsp;</span></span>
                                    </div>
                                </div>
                            </div>

                            <div class="att-spec-table-wrap">
                                <table class="att-spec-table" style="font-size: 0.8rem;">
                                    <thead>
                                        <tr style="background: #f1f5f9; text-align: center;">
                                            <th rowspan="2" style="width: 26%; vertical-align: middle;">Entscheidungskriterien</th>
                                            <th rowspan="2" style="width: 14%; vertical-align: middle;">Gewichtung</th>
                                            <th colspan="2" style="width: 20%;">AZOS AP-42</th>
                                            <th colspan="2" style="width: 20%;">Getnear AP-08</th>
                                            <th colspan="2" style="width: 20%;">ELink AP-15</th>
                                        </tr>
                                        <tr style="background: #f8fafc; text-align: center;">
                                            <th>Punkte</th><th>gew. Pkt</th>
                                            <th>Punkte</th><th>gew. Pkt</th>
                                            <th>Punkte</th><th>gew. Pkt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="font-weight: 700;">Übertragungsrate</td>
                                            <td style="text-align: center; font-weight: 700;">40</td>
                                            <td style="text-align: center;">${isSol ? '10' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '400' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                            <td style="text-align: center;">${isSol ? '7' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '280' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                            <td style="text-align: center;">${isSol ? '3' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '120' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: 700;">Sicherheit</td>
                                            <td style="text-align: center; font-weight: 700;">30</td>
                                            <td style="text-align: center;">${isSol ? '10' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '300' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                            <td style="text-align: center;">${isSol ? '5' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '150' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                            <td style="text-align: center;">${isSol ? '10' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '300' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: 700;">Leistungsaufnahme</td>
                                            <td style="text-align: center; font-weight: 700;">5</td>
                                            <td style="text-align: center;">${isSol ? '10' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '50' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                            <td style="text-align: center;">${isSol ? '5' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '25' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                            <td style="text-align: center;">${isSol ? '8' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '40' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: 700;">Betriebsdauer</td>
                                            <td style="text-align: center; font-weight: 700;">20</td>
                                            <td style="text-align: center;">${isSol ? '10' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '200' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                            <td style="text-align: center;">${isSol ? '7' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '140' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                            <td style="text-align: center;">${isSol ? '5' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '100' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: 700;">Garantie</td>
                                            <td style="text-align: center; font-weight: 700;">5</td>
                                            <td style="text-align: center;">${isSol ? '10' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '50' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                            <td style="text-align: center;">${isSol ? '5' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '25' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                            <td style="text-align: center;">${isSol ? '5' : '<input type="text" style="width:28px; text-align:center;">'}</td>
                                            <td style="text-align: center; font-weight: 700; ${isSol ? 'background: #f0fdf4;' : ''}">${isSol ? '25' : '<input type="text" style="width:34px; text-align:center;">'}</td>
                                        </tr>
                                        <tr style="background: #eff6ff; font-weight: 800; border-top: 2px solid #0f172a; border-bottom: 2px solid #0f172a;">
                                            <td>Punktesumme</td>
                                            <td style="text-align: center;">100</td>
                                            <td style="background: #e2e8f0;">&ndash;</td>
                                            <td style="text-align: center; font-size: 0.95rem; color: #166534; font-weight: 800; background: #dcfce7;">
                                                ${isSol ? '1000' : '<input type="text" style="width:45px; text-align:center; font-weight:bold;">'}
                                            </td>
                                            <td style="background: #e2e8f0;">&ndash;</td>
                                            <td style="text-align: center; font-size: 0.95rem; color: #1e3a8a; font-weight: 800;">
                                                ${isSol ? '620' : '<input type="text" style="width:45px; text-align:center; font-weight:bold;">'}
                                            </td>
                                            <td style="background: #e2e8f0;">&ndash;</td>
                                            <td style="text-align: center; font-size: 0.95rem; color: #1e3a8a; font-weight: 800;">
                                                ${isSol ? '585' : '<input type="text" style="width:45px; text-align:center; font-weight:bold;">'}
                                            </td>
                                        </tr>
                                        <tr style="font-weight: 800;">
                                            <td>Rangfolge</td>
                                            <td style="background: #e2e8f0;">&ndash;</td>
                                            <td colspan="2" style="text-align: center; font-size: 1rem; color: #166534; background: #f0fdf4;">
                                                ${isSol ? '1 (Sieger)' : 'Rang <input type="text" style="width:25px; text-align:center;">'}
                                            </td>
                                            <td colspan="2" style="text-align: center; font-size: 1rem; color: #475569;">
                                                ${isSol ? '2' : 'Rang <input type="text" style="width:25px; text-align:center;">'}
                                            </td>
                                            <td colspan="2" style="text-align: center; font-size: 1rem; color: #475569;">
                                                ${isSol ? '3' : 'Rang <input type="text" style="width:25px; text-align:center;">'}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ` : ''}

                    </div>
                </div>
            `;
        }

        return "";
    },

    // =========================================================================
    // PRÜFUNG 23: DARSYS GMBH (IBBW BADEN-WÜRTTEMBERG ORIGINAL)
    // =========================================================================
    // =========================================================================
    // PRÜFUNG 25: HOTEL CITY HOF (ORIGINAL-PROBEKLAUSUR FA 230 WINTER 2026/27)
    // Anlagen: Angebot 1 & 2 (Tablets), DHCP subnets.txt & Preisliste.html
    // =========================================================================
    renderCityHofAttachments: function(pageIndex) {
        const isSol = this.displayMode === "solution";

        if (pageIndex === 1) {
            // IT 1: Angebotsvergleich Tablets 140 Stück
            const isTabA2 = this.activeTab === "ch_ang2";
            const isTabKalk = this.activeTab === "ch_kalk";

            return `
                <div class="authentic-att-wrapper">
                    <div class="att-header-bar">
                        <span class="att-official-badge">
                            <i class="fa-solid fa-file-invoice-dollar"></i> IT 1: Angebotsvergleich &bull; 140 Tablets (Anlage 1)
                        </span>
                        <div class="att-tab-pills">
                            <button class="att-tab-btn ${(!isTabA2 && !isTabKalk) ? 'active' : ''}" onclick="ExamAttachments.setTab('ch_ang1')">
                                🏢 Angebot 1 (Systemhaus Maier)
                            </button>
                            <button class="att-tab-btn ${isTabA2 ? 'active' : ''}" onclick="ExamAttachments.setTab('ch_ang2')">
                                🏢 Angebot 2 (Digital Pro)
                            </button>
                            <button class="att-tab-btn ${isTabKalk ? 'active' : ''}" onclick="ExamAttachments.setTab('ch_kalk')">
                                📊 Kalkulationstabelle
                            </button>
                        </div>
                    </div>

                    ${(!isTabA2 && !isTabKalk) ? `
                        <div class="att-paper-sheet">
                            <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #cbd5e1; padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
                                <div>
                                    <strong style="color: #1e1b4b; font-size: 1.1rem;">Systemhaus Maier GmbH</strong><br>
                                    <span style="font-size: 0.82rem; color: #64748b;">Bissdorfer Str. 12 &bull; 20459 Hamburg</span>
                                </div>
                                <div style="text-align: right; font-size: 0.82rem; color: #475569;">
                                    <strong>Angebot A576B-1112</strong><br>
                                    Datum: 1. Dezember 20xx
                                </div>
                            </div>
                            <h4 style="color: #312e81; margin: 0 0 0.5rem 0;">Angebot: 140 Tablets Modell TW-Tab 10</h4>
                            <p style="font-size: 0.88rem; color: #334155; margin-bottom: 0.75rem;">
                                Inklusive Tischladestation. Einzelpreis: <strong>410,00 € brutto</strong> (inkl. 19 % USt.) &bull; Gesamt: <strong>57.400,00 € brutto</strong>.
                            </p>
                            <table class="att-spec-table">
                                <tr><th style="width: 35%;">Kondition</th><th>Vorgabe des Lieferanten</th></tr>
                                <tr><td><strong>Rabattstaffel:</strong></td><td>Ab 100 Stk.: <strong>2 % Rabatt</strong> &bull; Ab 150 Stk.: 3 % Rabatt</td></tr>
                                <tr><td><strong>Lieferung &amp; Fracht:</strong></td><td>Lieferung innerhalb von <strong>7 Tagen</strong> &bull; Versand <strong>frei Haus</strong></td></tr>
                                <tr><td><strong>Verpackungskosten:</strong></td><td>10er Verpackungseinheiten à <strong>5,95 € brutto</strong> (für 140 Stk. = 14 Einheiten)</td></tr>
                                <tr><td><strong>Zahlungsbedingungen:</strong></td><td>Zahlungsziel 30 Tage &bull; Bei Zahlung innerhalb 10 Tagen: <strong>2 % Skonto</strong></td></tr>
                                <tr><td><strong>Preisbasis:</strong></td><td><span style="color: #dc2626; font-weight: bold;">⚠️ Alle Beträge sind BRUTTOPREISE (inkl. 19 % USt.)!</span></td></tr>
                            </table>
                        </div>
                    ` : isTabA2 ? `
                        <div class="att-paper-sheet">
                            <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #cbd5e1; padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
                                <div>
                                    <strong style="color: #1e1b4b; font-size: 1.1rem;">Digital Pro GmbH</strong><br>
                                    <span style="font-size: 0.82rem; color: #64748b;">Wolf-Hirth-Str. 4 &bull; 75175 Pforzheim</span>
                                </div>
                                <div style="text-align: right; font-size: 0.82rem; color: #475569;">
                                    <strong>Angebot 2026-1733</strong><br>
                                    Datum: 1. Dezember 20xx
                                </div>
                            </div>
                            <h4 style="color: #312e81; margin: 0 0 0.5rem 0;">Angebot: 140 Tablets Modell BP-Comfort 10</h4>
                            <p style="font-size: 0.88rem; color: #334155; margin-bottom: 0.75rem;">
                                Inklusive Tischladestation "Easy Safe". Einzelpreis: <strong>355,00 € netto</strong> &bull; Gesamt: <strong>49.700,00 € netto</strong>.
                            </p>
                            <table class="att-spec-table">
                                <tr><th style="width: 35%;">Kondition</th><th>Vorgabe des Lieferanten</th></tr>
                                <tr><td><strong>Rabattstaffel:</strong></td><td>Ab 200 Stk.: <strong>5 % Rabatt</strong> (bei 140 Stk. greift kein Rabatt = 0 %)</td></tr>
                                <tr><td><strong>Lieferung &amp; Fracht:</strong></td><td>Lieferzeit: <strong>14 Tage</strong> (2 Wochen)</td></tr>
                                <tr><td><strong>Verpackung &amp; Versand:</strong></td><td>Pauschale für Verpackung &amp; Versand: <strong>75,00 € netto</strong></td></tr>
                                <tr><td><strong>Zahlungsbedingungen:</strong></td><td>Bei Zahlung innerhalb von 14 Tagen: <strong>3 % Skonto</strong> &bull; 30 Tage netto</td></tr>
                                <tr><td><strong>Preisbasis:</strong></td><td><span style="color: #059669; font-weight: bold;">✓ Alle Beträge sind NETTOPREISE!</span></td></tr>
                            </table>
                        </div>
                    ` : `
                        <div class="att-paper-sheet">
                            <h4 style="margin: 0 0 0.5rem 0; color: #1e1b4b;">Kaufmännischer Angebotsvergleich (Nettowerte auf 2 Nachkommastellen)</h4>
                            <table class="att-spec-table">
                                <thead>
                                    <tr>
                                        <th>Kalkulationsschritt</th>
                                        <th>Systemhaus Maier GmbH</th>
                                        <th>Digital Pro GmbH</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Listeneinkaufspreis (netto)</strong></td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">${isSol ? '48.235,29 €' : '48.235,29 € (57.400 / 1,19)'}</td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">49.700,00 € (140 × 355)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>- Lieferrabatt</strong></td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">- 964,71 € (2 %)</td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">- 0,00 € (0 %)</td>
                                    </tr>
                                    <tr style="background: #f8fafc;">
                                        <td><strong>= Zieleinkaufspreis</strong></td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">47.270,58 €</td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">49.700,00 €</td>
                                    </tr>
                                    <tr>
                                        <td><strong>- Liefererskonto</strong></td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">- 945,41 € (2 %)</td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">- 1.491,00 € (3 %)</td>
                                    </tr>
                                    <tr style="background: #f8fafc;">
                                        <td><strong>= Bareinkaufspreis</strong></td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">46.325,17 €</td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">48.209,00 €</td>
                                    </tr>
                                    <tr>
                                        <td><strong>+ Bezugskosten (netto)</strong></td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">+ 70,00 € (83,30 € / 1,19)</td>
                                        <td style="${isSol ? 'font-weight: bold; color: #047857;' : ''}">+ 75,00 €</td>
                                    </tr>
                                    <tr style="background: #f0fdf4; border-top: 2px solid #10b981;">
                                        <td><strong style="color: #065f46;">= Bezugspreis (Einstandspreis)</strong></td>
                                        <td style="font-size: 1.05rem; font-weight: 800; color: #047857;">
                                            46.395,17 € 🏆 (Günstiger!)
                                        </td>
                                        <td style="font-size: 1.05rem; font-weight: 700; color: #64748b;">
                                            48.284,00 €
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 0.6rem 0.85rem; border-radius: 4px; margin-top: 0.75rem; font-size: 0.85rem; color: #065f46;">
                                <strong>Entscheidung:</strong> Systemhaus Maier ist um <strong>1.888,83 € günstiger</strong> und liefert in nur <strong>7 Tagen</strong> (statt 14 Tagen).
                            </div>
                        </div>
                    `}
                </div>
            `;
        }

        if (pageIndex === 2) {
            // IT 2: Infrastruktur, WLAN & DHCP subnets.txt
            const isTabDhcp = this.activeTab === "ch_dhcp";

            return `
                <div class="authentic-att-wrapper">
                    <div class="att-header-bar">
                        <span class="att-official-badge">
                            <i class="fa-solid fa-network-wired"></i> IT 2: WLAN-Infrastruktur &amp; DHCP (Anlage 2)
                        </span>
                        <div class="att-tab-pills">
                            <button class="att-tab-btn ${!isTabDhcp ? 'active' : ''}" onclick="ExamAttachments.setTab('ch_infra')">
                                📡 Infrastruktur &amp; WLAN 2010
                            </button>
                            <button class="att-tab-btn ${isTabDhcp ? 'active' : ''}" onclick="ExamAttachments.setTab('ch_dhcp')">
                                ⚙️ subnets.txt (DHCP)
                            </button>
                        </div>
                    </div>

                    ${!isTabDhcp ? `
                        <div class="att-paper-sheet">
                            <h4 style="margin: 0 0 0.4rem 0; color: #1e1b4b;">Ist-Zustand IT-Infrastruktur Hotel City Hof (Stand 2010)</h4>
                            <p style="font-size: 0.86rem; color: #475569; margin-bottom: 0.75rem;">
                                Die Hoteltechnik basiert auf alten 802.11n Access Points (Wi-Fi 4), die rein im überlasteten 2,4-GHz-Band betrieben werden. Sobald über 50 % der Zimmer belegt sind, bricht die Datenrate drastisch ein.
                            </p>
                            <table class="att-spec-table">
                                <tr><th>Schwachstelle</th><th>Technische Ursache &amp; Auswirkung</th></tr>
                                <tr>
                                    <td><strong>1. Frequenzüberlastung 2,4 GHz:</strong></td>
                                    <td>Nur 3 überlappungsfreie Kanäle (1, 6, 11). Hohe Co-Channel-Interference bei vielen aktiven Smartphones &amp; Tablets.</td>
                                </tr>
                                <tr>
                                    <td><strong>2. Hohe Client-Dichte (CSMA/CA):</strong></td>
                                    <td>WLAN ist ein Shared Medium. Zu viele Endgeräte pro Zelle erzeugen hohe Latenzen und Kollisionen.</td>
                                </tr>
                                <tr>
                                    <td><strong>3. Veraltete Switches &amp; Uplinks:</strong></td>
                                    <td>Fast-Ethernet (100 Mbit/s) Flaschenhals zwischen den Etagenverteilern und dem zentralen Gateway.</td>
                                </tr>
                            </table>
                            <div style="background: #eef2ff; border-left: 4px solid #6366f1; padding: 0.6rem 0.85rem; border-radius: 4px; margin-top: 0.75rem; font-size: 0.84rem; color: #312e81;">
                                <strong>Lösungsansatz:</strong> Upgrade auf Wi-Fi 6 (802.11ax), Dual-Band (5 GHz / 6 GHz mit Band Steering), nahtloses Roaming (802.11k/r/v) und PoE-Versorgung.
                            </div>
                        </div>
                    ` : `
                        <div class="att-paper-sheet">
                            <h4 style="margin: 0 0 0.4rem 0; color: #1e1b4b;">DHCP-Server Konfiguration (subnets.txt) für 1.000 Clients</h4>
                            <p style="font-size: 0.86rem; color: #475569; margin-bottom: 0.75rem;">
                                Vorlage aus subnets.txt. Für 1.000 gleichzeitige Clients muss das /24-Subnetz auf ein <strong>/22-Subnetz</strong> erweitert werden (2^10 = 1.024 Adressen).
                            </p>
                            <pre style="background: #0f172a; color: #38bdf8; padding: 1rem; border-radius: 8px; font-family: monospace; font-size: 0.88rem; line-height: 1.45; overflow-x: auto;">
# subnets.txt (Angepasst für Hotel City Hof – 1.000 Clients)
subnet 192.168.0.0 netmask 255.255.252.0 {
    option broadcast-address 192.168.3.255;

    # Dynamische IP-Range für 1.000 Gäste-Clients & Tablets
    range 192.168.0.10 192.168.3.250;

    # Gateway Adresse
    option routers 192.168.0.1;

    # DNS Server Adressen
    option domain-name-servers 192.168.0.1, 1.1.1.1;

    # Lease-Zeiten (z. B. 4 Std. Standard, max. 8 Std. für Hotelgäste)
    default-lease-time 14400;
    max-lease-time 28800;
}</pre>
                            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 0.6rem 0.85rem; border-radius: 6px; margin-top: 0.75rem; font-size: 0.84rem; color: #166534;">
                                <strong>Prüfungskern:</strong> /22 Präfix = <code>255.255.252.0</code> &bull; Netz: <code>192.168.0.0</code> &bull; Broadcast: <code>192.168.3.255</code> &bull; Nutzbare Hosts: 1.022.
                            </div>
                        </div>
                    `}
                </div>
            `;
        }

        if (pageIndex === 3) {
            // IT 3: Preisliste.html & SQL
            const isTabSql = this.activeTab === "ch_sql";
            const isTabSim = this.activeTab === "ch_sim";

            return `
                <div class="authentic-att-wrapper">
                    <div class="att-header-bar">
                        <span class="att-official-badge">
                            <i class="fa-solid fa-code"></i> IT 3: Preisliste.html &amp; Funktion ermittle_Preis (Anlage 3)
                        </span>
                        <div class="att-tab-pills">
                            <button class="att-tab-btn ${(!isTabSql && !isTabSim) ? 'active' : ''}" onclick="ExamAttachments.setTab('ch_preis')">
                                📋 Preisliste.html
                            </button>
                            <button class="att-tab-btn ${isTabSim ? 'active' : ''}" onclick="ExamAttachments.setTab('ch_sim')">
                                🧮 Rabatt-Rechner
                            </button>
                            <button class="att-tab-btn ${isTabSql ? 'active' : ''}" onclick="ExamAttachments.setTab('ch_sql')">
                                🗄️ SQL Schema &amp; Abfragen
                            </button>
                        </div>
                    </div>

                    ${(!isTabSql && !isTabSim) ? `
                        <div class="att-paper-sheet" style="background: #fbf9f5; border: 1.5px solid #dcd5c9;">
                            <div style="text-align: center; border-bottom: 2px solid #b8913d; padding-bottom: 0.6rem; margin-bottom: 0.85rem;">
                                <h3 style="margin: 0; font-family: Georgia, serif; color: #14313a; font-size: 1.35rem;">Hotel City Hof</h3>
                                <p style="margin: 0.15rem 0 0 0; font-size: 0.85rem; color: #5d7178;">Sport- und Wellnessangebote Preisliste</p>
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                                <!-- Sport -->
                                <div style="background: white; border: 1px solid #cfd8d6; border-radius: 8px; padding: 0.75rem;">
                                    <h5 style="color: #1f5f66; font-size: 0.95rem; margin: 0 0 0.4rem 0;">🏃 Sport</h5>
                                    <table style="width: 100%; font-size: 0.82rem; border-collapse: collapse;">
                                        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 0.25rem 0;">Morgen-Yoga (60 Min)</td><td style="text-align: right; font-weight: bold;">14 €</td></tr>
                                        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 0.25rem 0;">Aqua-Fitness (45 Min)</td><td style="text-align: right; font-weight: bold;">12 €</td></tr>
                                        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 0.25rem 0;">Pilates (55 Min)</td><td style="text-align: right; font-weight: bold;">15 €</td></tr>
                                        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 0.25rem 0;">Rückenfit (45 Min)</td><td style="text-align: right; font-weight: bold;">12 €</td></tr>
                                        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 0.25rem 0;">Nordic Walking (90 Min)</td><td style="text-align: right; font-weight: bold;">10 €</td></tr>
                                        <tr><td style="padding: 0.25rem 0;">Personal Training (60 Min)</td><td style="text-align: right; font-weight: bold;">55 €</td></tr>
                                    </table>
                                </div>

                                <!-- Wellness -->
                                <div style="background: white; border: 1px solid #cfd8d6; border-radius: 8px; padding: 0.75rem;">
                                    <h5 style="color: #1f5f66; font-size: 0.95rem; margin: 0 0 0.4rem 0;">💆 Wellness</h5>
                                    <table style="width: 100%; font-size: 0.82rem; border-collapse: collapse;">
                                        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 0.25rem 0;">Saunalandschaft (Tag)</td><td style="text-align: right; font-weight: bold;">18 €</td></tr>
                                        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 0.25rem 0;">Klassische Massage (30m)</td><td style="text-align: right; font-weight: bold;">39 €</td></tr>
                                        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 0.25rem 0;">Klassische Massage (60m)</td><td style="text-align: right; font-weight: bold;">69 €</td></tr>
                                        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 0.25rem 0;">Hot-Stone-Massage (75m)</td><td style="text-align: right; font-weight: bold;">85 €</td></tr>
                                        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 0.25rem 0;">Gesichtsbehandlung (60m)</td><td style="text-align: right; font-weight: bold;">65 €</td></tr>
                                        <tr><td style="padding: 0.25rem 0;">Private Spa für Zwei (2h)</td><td style="text-align: right; font-weight: bold;">120 €</td></tr>
                                    </table>
                                </div>
                            </div>

                            <!-- Rabattstaffel Tiers -->
                            <div style="background: white; border: 1px solid #cfd8d6; border-radius: 8px; padding: 0.75rem;">
                                <h5 style="margin: 0 0 0.4rem 0; color: #14313a; font-size: 0.9rem;">🎁 Rabattstaffelung laut Preisliste.html:</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; text-align: center;">
                                    <div style="background: #f3f0ea; padding: 0.5rem; border-radius: 6px;">
                                        <div style="font-size: 1.3rem; font-weight: 800; color: #1f5f66;">20 %</div>
                                        <div style="font-size: 0.75rem; color: #5d7178;">Mehr als 3 Kurse</div>
                                    </div>
                                    <div style="background: #f3f0ea; padding: 0.5rem; border-radius: 6px;">
                                        <div style="font-size: 1.3rem; font-weight: 800; color: #1f5f66;">30 %</div>
                                        <div style="font-size: 0.75rem; color: #5d7178;">Mehr als 5 Kurse</div>
                                    </div>
                                    <div style="background: #f6ecd3; border: 1px solid #b8913d; padding: 0.5rem; border-radius: 6px;">
                                        <div style="font-size: 1.3rem; font-weight: 800; color: #b8913d;">50 %</div>
                                        <div style="font-size: 0.75rem; color: #78350f; font-weight: bold;">Goldstatus (Zusatz)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ` : isTabSim ? `
                        <div class="att-paper-sheet">
                            <h4 style="margin: 0 0 0.5rem 0; color: #1e1b4b;">Interaktive Funktionsprüfung von ermittle_Preis</h4>
                            <p style="font-size: 0.86rem; color: #475569; margin-bottom: 0.75rem;">
                                Signatur: <code>ermittle_Preis(gebuchteKurse: string[], Status: string): float</code>
                            </p>
                            <table class="att-spec-table">
                                <thead>
                                    <tr>
                                        <th>Testfall</th>
                                        <th>Gebuchte Kurse</th>
                                        <th>Status</th>
                                        <th>Basispreis</th>
                                        <th>Rabatt</th>
                                        <th>Endbetrag</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Test 1</strong></td>
                                        <td>Yoga (14 €) + Aqua (12 €) = 2 Kurse</td>
                                        <td>Standard</td>
                                        <td>26,00 €</td>
                                        <td>0 % (&le; 3)</td>
                                        <td style="font-weight: bold; color: #047857;">26,00 €</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Test 2</strong></td>
                                        <td>Yoga + Aqua + Pilates + Rückenfit = 4 Kurse</td>
                                        <td>Standard</td>
                                        <td>53,00 €</td>
                                        <td>20 % (> 3)</td>
                                        <td style="font-weight: bold; color: #047857;">42,40 €</td>
                                    </tr>
                                    <tr style="background: #fffbeb;">
                                        <td><strong>Test 3</strong></td>
                                        <td>Yoga + Aqua + Pilates + Rückenfit = 4 Kurse</td>
                                        <td><span style="background: #f59e0b; color: white; padding: 0.1rem 0.4rem; border-radius: 4px; font-weight: bold; font-size: 0.75rem;">Gold</span></td>
                                        <td>53,00 €</td>
                                        <td>20 % + 50 % Gold</td>
                                        <td style="font-weight: 800; color: #b45309;">21,20 €</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Test 4</strong></td>
                                        <td>6 Kurse gebucht (53 € + 10 € + 55 €)</td>
                                        <td>Standard</td>
                                        <td>118,00 €</td>
                                        <td>30 % (> 5)</td>
                                        <td style="font-weight: bold; color: #047857;">82,60 €</td>
                                    </tr>
                                    <tr style="background: #fffbeb;">
                                        <td><strong>Test 5</strong></td>
                                        <td>6 Kurse gebucht</td>
                                        <td><span style="background: #f59e0b; color: white; padding: 0.1rem 0.4rem; border-radius: 4px; font-weight: bold; font-size: 0.75rem;">Gold</span></td>
                                        <td>118,00 €</td>
                                        <td>30 % + 50 % Gold</td>
                                        <td style="font-weight: 800; color: #b45309;">41,30 €</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ` : `
                        <div class="att-paper-sheet">
                            <h4 style="margin: 0 0 0.5rem 0; color: #1e1b4b;">Datenbankschema Sportkurse &amp; SQL-Musterlösung</h4>
                            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 0.6rem 0.85rem; border-radius: 6px; font-family: monospace; font-size: 0.84rem; margin-bottom: 0.75rem;">
                                Sportkurse(<strong>KursID</strong>, Kurstitel, Kategorie, Tag, Startzeit, Dauer, Kosten, maxTeilnehmerzahl, aktuelleTeilnehmerzahl)
                            </div>
                            <pre style="background: #0f172a; color: #38bdf8; padding: 0.85rem; border-radius: 6px; font-family: monospace; font-size: 0.84rem; line-height: 1.45;">
-- 1) Kurstitel der Kategorie 'Wellness'
SELECT Kurstitel 
FROM Sportkurse 
WHERE Kategorie = 'Wellness';

-- 2) Kurse mit freien Plätzen sortiert nach Kosten DESC
SELECT 
    Kurstitel, 
    Tag, 
    Startzeit, 
    Dauer, 
    Kosten, 
    (maxTeilnehmerzahl - aktuelleTeilnehmerzahl) AS freiePlaetze
FROM Sportkurse
WHERE maxTeilnehmerzahl > aktuelleTeilnehmerzahl
ORDER BY Kosten DESC;

-- 3) Kursbuchung ID 1: aktuelleTeilnehmerzahl + 1
UPDATE Sportkurse 
SET aktuelleTeilnehmerzahl = aktuelleTeilnehmerzahl + 1 
WHERE KursID = 1;</pre>
                        </div>
                    `}
                </div>
            `;
        }

        return `<div class="authentic-att-wrapper"><div class="att-paper-sheet"><p>Deckblatt Prüfung 25: Hotel City Hof (Probeklausur Winter 2026/27).</p></div></div>`;
    },

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
        const isSol = this.displayMode === "solution";
        const currentTask = (exam.tasks && exam.tasks[pageIndex - 1]) ? exam.tasks[pageIndex - 1] : null;
        const taskTitle = currentTask ? currentTask.title : `Aufgabe ${pageIndex}`;

        return `
            <div class="attachment-sheet">
                <div class="attachment-header">
                    <span>${escapeHtml(examNum)} &bull; Anlageblatt zu Aufgabe ${pageIndex}</span>
                    <div style="display: flex; gap: 4px; align-items: center; flex-wrap: wrap;">
                        <button type="button" class="ihk-sol-toggle-btn ${isSol ? 'active' : ''}" onclick="ExamAttachments.setMode(ExamAttachments.displayMode === 'solution' ? 'info' : 'solution')" title="Amtliche IHK-Musterlösung einblenden">
                            <i class="fa-solid fa-award"></i> 💡 IHK-Lösung
                        </button>
                        <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
                <div class="attachment-body">
                    
                    <!-- 1. AUTHENTISCHES SZENARIO & KUNDENPROFIL -->
                    <div class="attachment-doc-title">
                        <i class="fa-solid fa-building" style="color: #4f46e5;"></i> Ausgangssituation &amp; Projektkontext
                    </div>
                    <div style="background: #eff6ff; border-left: 3px solid #3b82f6; border-radius: 6px; padding: 0.85rem 1rem; font-size: 0.88rem; color: #1e3a8a; line-height: 1.5; margin-bottom: 1.25rem;">
                        ${escapeHtml(exam.ausgangssituation || 'Das IT-Systemhaus plant und implementiert die IT-Infrastruktur für den Kunden.')}
                    </div>

                    <!-- 2. ANLAGEN-DOKUMENT NACH THEMENBEREICH DER AUFGABE -->
                    ${pageIndex === 1 ? `
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 6px; margin-bottom: 1rem;">
                            <div style="font-weight: 800; font-size: 1.05rem; color: #0f172a;">Anlage 1 &bull; Lastenheft &amp; Software-Spezifikation</div>
                            <span style="font-size: 0.8rem; background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 4px; font-weight: 700;">Konzeption &amp; Usability</span>
                        </div>
                        <div style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 1rem; font-size: 0.86rem; color: #1e293b; line-height: 1.5; margin-bottom: 1rem;">
                            <strong>Auszug aus dem Pflichtenheft zu ${escapeHtml(taskTitle)}:</strong><br>
                            &bull; <strong>Usability &amp; Ergonomie (DIN EN ISO 9241-110):</strong> Aufgabenangemessenheit, Selbstbeschreibungsfähigkeit, Erwartungskonformität, Fehlertoleranz und Steuerbarkeit.<br>
                            &bull; <strong>SMART-Kriterien für Projektziele:</strong> Spezifisch (präzise formuliert), Messbar (Kennzahl vorhanden), Akzeptiert/Attraktiv, Realistisch (im Zeit-/Budgetrahmen) und Terminiert (fester Endtermin).<br>
                            &bull; <strong>UML-Modellierung:</strong> Use-Case-Diagramme zur Abgrenzung der Systemgrenze und Definition der Benutzer-Interaktionen (&laquo;include&raquo; = verpflichtend integriert, &laquo;extend&raquo; = optionale Erweiterung unter Bedingung).
                        </div>
                    ` : ''}

                    ${pageIndex === 2 ? `
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 6px; margin-bottom: 1rem;">
                            <div style="font-weight: 800; font-size: 1.05rem; color: #0f172a;">Anlage 2 &bull; Netzwerk-Infrastruktur &amp; Adressierung</div>
                            <span style="font-size: 0.8rem; background: #dbeafe; color: #1e40af; padding: 2px 8px; border-radius: 4px; font-weight: 700;">IPv4 / IPv6 / VLAN</span>
                        </div>
                        <div class="att-spec-table-wrap" style="margin-bottom: 1rem;">
                            <table class="att-spec-table" style="font-size: 0.82rem;">
                                <thead>
                                    <tr style="background: #f1f5f9;">
                                        <th>CIDR-Präfix</th>
                                        <th>Subnetzmaske (Dotted Decimal)</th>
                                        <th>Host-Bits</th>
                                        <th>Max. nutzbare Hosts</th>
                                        <th>Typischer Verwendungszweck</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>/24</td><td>255.255.255.0</td><td>8</td><td>254</td><td>Standard-Büronetz / Großes LAN</td></tr>
                                    <tr><td>/25</td><td>255.255.255.128</td><td>7</td><td>126</td><td>Abteilungsnetzwerk (z. B. Entwicklung)</td></tr>
                                    <tr><td>/26</td><td>255.255.255.192</td><td>6</td><td>62</td><td>WLAN-Subnetz (Mitarbeiter / Gäste)</td></tr>
                                    <tr><td>/27</td><td>255.255.255.224</td><td>5</td><td>30</td><td>Etagen-Netz / Labornetz</td></tr>
                                    <tr><td>/28</td><td>255.255.255.240</td><td>4</td><td>14</td><td>Serverfarm / DMZ-Segment</td></tr>
                                    <tr><td>/29</td><td>255.255.255.248</td><td>3</td><td>6</td><td>Management-Netzwerk (Switch/Router)</td></tr>
                                    <tr><td>/30</td><td>255.255.255.252</td><td>2</td><td>2</td><td>Point-to-Point / Router-Transfernetz</td></tr>
                                </tbody>
                            </table>
                        </div>
                    ` : ''}

                    ${pageIndex === 3 ? `
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 6px; margin-bottom: 1rem;">
                            <div style="font-weight: 800; font-size: 1.05rem; color: #0f172a;">Anlage 3 &bull; Kaufmännische Handelskalkulation &amp; NWA</div>
                            <span style="font-size: 0.8rem; background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 4px; font-weight: 700;">Wirtschaftlichkeit</span>
                        </div>
                        <div style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 1rem; font-size: 0.85rem; line-height: 1.5; color: #1e293b; margin-bottom: 1rem;">
                            <strong>Kaufmännisches Kalkulationsschema (Vorwärtskalkulation):</strong>
                            <div style="margin-top: 6px; font-family: monospace; font-size: 0.86rem; background: #ffffff; padding: 8px 12px; border: 1px solid #e2e8f0; border-radius: 4px; line-height: 1.6;">
                                &nbsp;&nbsp;Listeneinkaufspreis (LEP) netto<br>
                                &ndash; Lieferrabatt (in % vom LEP)<br>
                                = <strong>Zieleinkaufspreis (ZEP)</strong><br>
                                &ndash; Lieferskonto (in % vom ZEP)<br>
                                = <strong>Bareinkaufspreis (BEP)</strong><br>
                                + Bezugskosten (Fracht, Verpackung, Rollgeld, Versicherung)<br>
                                = <strong>Bezugspreis (Einstandspreis)</strong>
                            </div>
                        </div>
                    ` : ''}

                    ${pageIndex >= 4 ? `
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 6px; margin-bottom: 1rem;">
                            <div style="font-weight: 800; font-size: 1.05rem; color: #0f172a;">Anlage 4 &bull; Relationale Datenmodelle &amp; IT-Sicherheit</div>
                            <span style="font-size: 0.8rem; background: #f0fdf4; color: #166534; padding: 2px 8px; border-radius: 4px; font-weight: 700;">3. Normalform &amp; DSGVO</span>
                        </div>
                        <div style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 1rem; font-size: 0.86rem; color: #1e293b; line-height: 1.5; margin-bottom: 1rem;">
                            <strong>Regeln zur Normalisierung relationaler Datenbanken:</strong><br>
                            &bull; <strong>1. Normalform (1NF):</strong> Alle Attribute sind atomar (unteilbar). Keine Wiederholungsgruppen.<br>
                            &bull; <strong>2. Normalform (2NF):</strong> Befindet sich in 1NF und jedes Nicht-Schlüsselattribut ist voll funktional abhängig vom Primärschlüssel (keine Teilabhängigkeiten von zusammengesetzten Primärschlüsseln).<br>
                            &bull; <strong>3. Normalform (3NF):</strong> Befindet sich in 2NF und es existieren keine transitiven Abhängigkeiten (kein Nicht-Schlüsselattribut hängt von einem anderen Nicht-Schlüsselattribut ab).<br><br>
                            &bull; <strong>Referenzielle Integrität:</strong> Fremdschlüssel dürfen nur Werte annehmen, die als Primärschlüssel in der referenzierten Elterntabelle existieren (Verhinderung von Waisen-Datensätzen).
                        </div>
                    ` : ''}

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
