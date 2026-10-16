/**
 * EXAM ATTACHMENTS & DUAL-PANE SPLIT-VIEW ENGINE
 * Ermöglicht die parallele, getrennte Anzeige von Prüfungsaufgabe (links)
 * und Anlageblättern (rechts) mit unabhängigem Scrolling (Split-Screen).
 */

const ExamAttachments = {
    activeAttachmentTab: "all",

    // Returns HTML for the attachments corresponding to the active exam and page
    renderAttachmentsForPage: function(exam, pageIndex) {
        if (!exam) return "";

        const examId = exam.id || "";

        // PRÜFUNG 23: DAR-SYS GMBH & SYSTEMHAUS KG (IBBW MUSTERPRÜFUNG)
        if (examId === "exam_23") {
            return this.renderDarSysAttachments(pageIndex);
        }

        // PRÜFUNG 22: SOFTTECH SOLUTIONS GMBH (BAWÜ 2026 FA 230)
        if (examId === "exam_22") {
            return this.renderSoftTechAttachments(pageIndex);
        }

        // GENERIC EXAMS 1 to 21: SCENARIO + DIAGRAM + IT-HANDBUCH QUICK-REF
        return this.renderGenericAttachments(exam, pageIndex);
    },

    // Renders the authentic DarSys GmbH Anlageblätter (1 to 12)
    renderDarSysAttachments: function(pageIndex) {
        // Page 0: Deckblatt -> Overview of all 12 Anlagen
        if (pageIndex === 0) {
            return `
                <div class="attachment-sheet">
                    <div class="attachment-header">
                        <span>IBBW Abschlussprüfung Teil 1 &bull; DarSys GmbH</span>
                        <span class="attachment-tag">Anlagen-Verzeichnis</span>
                     <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="attachment-body">
                        <div class="attachment-doc-title">
                            <i class="fa-solid fa-folder-open" style="color: #f59e0b;"></i> Übersicht aller 12 offiziellen Anlageblätter
                        </div>
                        <p style="font-size: 0.9rem; color: #475569; line-height: 1.5; margin-bottom: 1rem;">
                            Dieser Prüfungssatz enthält 6 Vorgabeanlagen (Informationsmaterialien) sowie 6 zu bearbeitende Lösungsanlagen. Die Anlagen werden während der Bearbeitung der jeweiligen Aufgabe automatisch direkt neben der Fragestellung eingeblendet.
                        </p>

                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <div class="anlage-summary-card" onclick="changeExamPage(1)">
                                <div class="anlage-badge">IT 1 &bull; Aufgabe 1</div>
                                <div>
                                    <strong>Anlage 1:</strong> Kunden-E-Mail von Frau Dr. DarSys (Bedarf für 15 Designer-PCs)<br>
                                    <strong>Anlage 2:</strong> Produktsortiment (Spezifikationen PC 1, PC 2, PC 3)<br>
                                    <span style="font-size: 0.8rem; color: #64748b;">Lösungsblätter: Anlage 7 (Nutzwertmatrix), Anlage 8 (Angebot DIN 5008)</span>
                                </div>
                            </div>

                            <div class="anlage-summary-card" onclick="changeExamPage(2)">
                                <div class="anlage-badge" style="background: #0284c7;">IT 2 &bull; Aufgabe 2</div>
                                <div>
                                    <strong>Anlage 3:</strong> Logischer Netzwerkplan der DarSys GmbH (Dual-Stack IPv4/IPv6)<br>
                                    <strong>Anlage 4:</strong> ECOLAN Cat.5e U/UTP Kabeldatenblatt (Schirmung &amp; EMV)<br>
                                    <span style="font-size: 0.8rem; color: #64748b;">Lösungsblätter: Anlage 9 (Dual-Stack Adresstabelle), Anlage 10 (EMV-Analyse)</span>
                                </div>
                            </div>

                            <div class="anlage-summary-card" onclick="changeExamPage(3)">
                                <div class="anlage-badge" style="background: #d97706;">IT 3 &bull; Aufgabe 3</div>
                                <div>
                                    <strong>Anlage 5:</strong> Beschreibung Zeiterfassungssystem (RFID-Terminal &amp; BSI)<br>
                                    <strong>Anlage 6:</strong> XML-Export der Zeiterfassung (time_log_export.xml)<br>
                                    <span style="font-size: 0.8rem; color: #64748b;">Lösungsblätter: Anlage 11 (BSI-Schutzbedarfsmatrix), Anlage 12.1/12.2 (Datenbank)</span>
                                </div>
                            </div>

                            <div class="anlage-summary-card" onclick="changeExamPage(4)">
                                <div class="anlage-badge" style="background: #475569;">IT 4 &bull; Aufgabe 4</div>
                                <div>
                                    <strong>Formale Bewertung:</strong> DIN 5008 Einhaltung, Fachterminologie, Rechenwege, Vollständigkeit.
                                </div>
                            </div>
                        </div>

                        <div style="margin-top: 1.5rem; padding: 0.85rem; background: #e0f2fe; border: 1px solid #7dd3fc; border-radius: 8px; font-size: 0.85rem; color: #0369a1;">
                            <i class="fa-solid fa-circle-info"></i> <strong>Tipp:</strong> Klicke oben auf <strong>„1. Aufgabe“</strong> oder <strong>„Nächste Seite ➔“</strong>, um mit der ersten Prüfungsaufgabe zu beginnen. Das zugehörige Anlageblatt erscheint sofort hier rechts daneben!
                        </div>
                    </div>
                </div>
            `;
        }

        // Page 1: IT 1 Arbeitsmittelbeschaffung (Anlage 1: E-Mail & Anlage 2: Produktsortiment)
        if (pageIndex === 1) {
            return `
                <div class="attachment-sheet">
                    <div class="attachment-header">
                        <span>Anlagen zu IT 1 &bull; Arbeitsmittelbeschaffung</span>
                        <div class="attachment-sub-tabs">
                            <button class="att-tab-btn ${this.activeAttachmentTab === 'all' ? 'active' : ''}" onclick="ExamAttachments.setTab('all')">Beide Anlagen</button>
                            <button class="att-tab-btn ${this.activeAttachmentTab === 'a1' ? 'active' : ''}" onclick="ExamAttachments.setTab('a1')">Anlage 1 (E-Mail)</button>
                            <button class="att-tab-btn ${this.activeAttachmentTab === 'a2' ? 'active' : ''}" onclick="ExamAttachments.setTab('a2')">Anlage 2 (PCs)</button>
                         <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    </div>

                    <div class="attachment-body">
                        
                        <!-- ANLAGE 1: E-MAIL -->
                        <div id="att-section-a1" class="att-section" style="${this.activeAttachmentTab === 'a2' ? 'display: none;' : ''}">
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-envelope" style="color: #6366f1;"></i> Anlage 1: Kunden-E-Mail von Frau Dr. DarSys (Evelin Schreiber)
                            </div>
                            
                            <div class="authentic-email-box">
                                <div class="email-meta-row"><strong>Von:</strong> Dr. Evelin Schreiber &lt;e.schreiber@darsys-webdesign.de&gt;</div>
                                <div class="email-meta-row"><strong>An:</strong> Systemhaus KG Beratung &lt;beratung@systemhaus-kg.de&gt;</div>
                                <div class="email-meta-row"><strong>Datum:</strong> 14. Oktober, 09:15 Uhr</div>
                                <div class="email-meta-row"><strong>Betreff:</strong> Ausstattung von 15 Webdesign-Arbeitsplätzen &amp; IT-Erweiterung</div>
                                
                                <div class="email-content-text">
                                    Sehr geehrtes Systemhaus-Team,<br><br>
                                    wir erweitern unseren Hauptstandort in Karlsruhe-Durlach um <strong>15 hochmoderne Arbeitsplätze</strong> für unsere Web- und UI/UX-Designer. Die bisherigen Rechner stoßen bei paralleler Ausführung von Adobe Creative Cloud (Photoshop, Illustrator, After Effects), lokalen Docker-Containern und 4K-Rendering an ihre Grenzen.<br><br>
                                    <strong>Unsere zwingenden Mindestanforderungen an die neuen PCs:</strong>
                                    <ul>
                                        <li><strong>Prozessor (CPU):</strong> Mindestens 8 physische Kerne / 16 Threads für flüssiges Multitasking und Rendering.</li>
                                        <li><strong>Arbeitsspeicher (RAM):</strong> Mindestens 32 GB RAM (unsere Tests zeigten, dass 16 GB permanent vollaufen).</li>
                                        <li><strong>Grafikkarte (GPU):</strong> Dedizierte GPU mit mindestens 8 GB VRAM. <em>Onboard-Grafikkarten sind für unsere Design-Workflows absolut ausgeschlossen!</em></li>
                                        <li><strong>Festplattenspeicher:</strong> Schnelle PCIe-NVMe-SSD mit mindestens 1 TB Kapazität (mechanische Festplatten/HDDs sind nicht zulässig).</li>
                                        <li><strong>Geräuschemission / Lautstärke:</strong> Maximal 35 dB(A) unter Volllast, da die Designer im offenen Großraumbüro arbeiten. Werte über 38 dB(A) führen zu Konzentrationsproblemen und scheiden aus.</li>
                                        <li><strong>Energieeffizienz:</strong> Das Netzteil muss einen Wirkungsgrad von mindestens 85% aufweisen (80 PLUS Gold Standard erwünscht).</li>
                                        <li><strong>Budget:</strong> Netto-Stückpreis maximal 950,00 € pro PC.</li>
                                    </ul>
                                    Bitte erstellen Sie auf Basis Ihrer Nutzwertanalyse ein vollständiges kaufmännisches Angebot über 15 Komplettsysteme inklusive Windows 10 Pro Lizenz und Vor-Ort-Installation.<br><br>
                                    Mit freundlichen Grüßen,<br>
                                    <strong>Dr. Evelin Schreiber</strong><br>
                                    <em>Geschäftsführerin DarSys GmbH</em>
                                </div>
                            </div>
                        </div>

                        <!-- ANLAGE 2: PRODUKTSORTIMENT -->
                        <div id="att-section-a2" class="att-section" style="${this.activeAttachmentTab === 'a1' ? 'display: none;' : ''}; margin-top: 1.5rem;">
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-desktop" style="color: #0284c7;"></i> Anlage 2: Produktsortiment (Systemhaus KG)
                            </div>
                            <p style="font-size: 0.88rem; color: #475569; margin-bottom: 0.6rem;">
                                Die Systemhaus KG hat folgende 3 PC-Systeme in ihrem aktuellen Lieferprogramm:
                            </p>

                            <div class="att-spec-table-wrap">
                                <table class="att-spec-table">
                                    <thead>
                                        <tr>
                                            <th>Merkmal / Kriterium</th>
                                            <th>PC 1 (OfficeBasic Pro)</th>
                                            <th style="background: #e0f2fe; color: #0369a1;">PC 2 (CreativeStation Work)</th>
                                            <th>PC 3 (PerformancePro Extreme)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Prozessor (CPU)</strong></td>
                                            <td>AMD Ryzen 5 5600G<br><span class="ko-badge">6 Kerne / 12 Threads (K.O.)</span></td>
                                            <td style="background: #f0fdf4;"><strong>Intel Core i7-13700</strong><br>16 Kerne (8P+8E) / 24 Threads</td>
                                            <td>AMD Ryzen 9 7900X<br>12 Kerne / 24 Threads</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Arbeitsspeicher (RAM)</strong></td>
                                            <td>16 GB DDR4-3200<br><span class="ko-badge">Nur 16 GB (K.O.)</span></td>
                                            <td style="background: #f0fdf4;"><strong>32 GB DDR5-5600</strong></td>
                                            <td>32 GB DDR5-6000</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Grafikkarte (GPU)</strong></td>
                                            <td>AMD Radeon Graphics<br><span class="ko-badge">Onboard-GPU (K.O.)</span></td>
                                            <td style="background: #f0fdf4;"><strong>NVIDIA GeForce RTX 4060</strong><br>8 GB GDDR6 dediziert</td>
                                            <td>AMD Radeon RX 7700 XT<br>12 GB GDDR6 dediziert</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Speichermedium</strong></td>
                                            <td>2 TB HDD 7200 RPM<br><span class="ko-badge">Keine SSD / nur HDD (K.O.)</span></td>
                                            <td style="background: #f0fdf4;"><strong>1 TB M.2 NVMe PCIe 4.0 SSD</strong><br>7.000 MB/s Leserate</td>
                                            <td>2 TB M.2 NVMe PCIe 4.0 SSD</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Lautstärke Volllast</strong></td>
                                            <td>30 dB(A)</td>
                                            <td style="background: #f0fdf4;"><strong>28 dB(A)</strong> (Silent-Cooler)</td>
                                            <td>45 dB(A)<br><span class="ko-badge">&gt; 38 dB(A) viel zu laut (K.O.)</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Netzteil-Effizienz</strong></td>
                                            <td>80 PLUS Bronze (82%)</td>
                                            <td style="background: #f0fdf4;"><strong>80 PLUS Gold (90% Wirkungsgrad)</strong></td>
                                            <td>750W Standard-Netzteil<br><span class="ko-badge">75% Wirkungsgrad &lt; 85% (K.O.)</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Einkaufspreis / Stück</strong></td>
                                            <td>520,00 € Netto</td>
                                            <td style="background: #f0fdf4;"><strong>850,00 € Netto</strong></td>
                                            <td>940,00 € Netto</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div style="margin-top: 0.75rem; font-size: 0.82rem; color: #475569; background: #f8fafc; padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid #e2e8f0;">
                                <strong>Kaufmännische Konditionen:</strong> Betriebssystemlizenz Windows 10 Pro: 110,00 € Netto je Arbeitsplatz &bull; Vor-Ort-Montage/Installation: 40,00 € Netto je Arbeitsplatz.
                            </div>
                        </div>

                    </div>
                </div>
            `;
        }

        // Page 2: IT 2 Netzkonfiguration (Anlage 3: Netzwerkplan SVG & Anlage 4: Kabeldatenblatt)
        if (pageIndex === 2) {
            const svgPlan = (typeof VisualDiagrams !== "undefined" && typeof VisualDiagrams.getDarSysNetzwerkplanSvg === "function")
                            ? VisualDiagrams.getDarSysNetzwerkplanSvg()
                            : '<div style="padding: 2rem; text-align: center;">Netzwerkplan lädt...</div>';

            return `
                <div class="attachment-sheet">
                    <div class="attachment-header">
                        <span>Anlagen zu IT 2 &bull; Netzkonfiguration &amp; Fehlersuche</span>
                        <div class="attachment-sub-tabs">
                            <button class="att-tab-btn ${this.activeAttachmentTab === 'all' ? 'active' : ''}" onclick="ExamAttachments.setTab('all')">Beide Anlagen</button>
                            <button class="att-tab-btn ${this.activeAttachmentTab === 'a3' ? 'active' : ''}" onclick="ExamAttachments.setTab('a3')">Anlage 3 (Netzwerkplan)</button>
                            <button class="att-tab-btn ${this.activeAttachmentTab === 'a4' ? 'active' : ''}" onclick="ExamAttachments.setTab('a4')">Anlage 4 (Kabeldatenblatt)</button>
                         <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    </div>

                    <div class="attachment-body">
                        
                        <!-- ANLAGE 3: LOGISCHER NETZWERKPLAN -->
                        <div id="att-section-a3" class="att-section" style="${this.activeAttachmentTab === 'a4' ? 'display: none;' : ''}">
                            <div class="attachment-doc-title" style="display: flex; justify-content: space-between; align-items: center;">
                                <span><i class="fa-solid fa-network-wired" style="color: #0284c7;"></i> Anlage 3: Logischer Netzwerkplan der DarSys GmbH</span>
                                <span style="font-size: 0.78rem; background: #0284c7; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-weight: 700;">Dual-Stack IPv4 &bull; IPv6</span>
                            </div>
                            
                            <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 0.5rem; margin-bottom: 0.75rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05); overflow-x: auto;">
                                ${svgPlan}
                            </div>

                            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.6rem 0.8rem; font-size: 0.84rem; color: #334155; line-height: 1.4;">
                                <strong>Netzwerk-Parameter der DarSys GmbH:</strong><br>
                                &bull; <strong>IPv4-Subnetz:</strong> <code>192.168.3.0 /24</code> &bull; Standard-Gateway: <code>192.168.3.2</code> (Router)<br>
                                &bull; <strong>IPv6-Global-Unicast:</strong> <code>2003:f3:700:6c00::/64</code> &bull; IPv6-Gateway (Link-Local): <code>fe80::1</code><br>
                                &bull; <strong>DHCP-Bereich für Clients:</strong> <code>192.168.3.80</code> bis <code>192.168.3.150</code><br>
                                &bull; <strong>IPv6-Host-Suffix:</strong> Wird dezimal aus dem letzten IPv4-Oktett gebildet (Computer 31: 81 dez = 51 hex &rarr; <code>2003:f3:700:6c00:9::51/64</code>).
                            </div>
                        </div>

                        <!-- ANLAGE 4: KABELDATENBLATT -->
                        <div id="att-section-a4" class="att-section" style="${this.activeAttachmentTab === 'a3' ? 'display: none;' : ''}; margin-top: 1.5rem;">
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
                                        <td style="padding: 0.35rem 0; font-weight: 600; width: 45%;">Kategorie &amp; Frequenz:</td>
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
                                </tbody>
                                </table>

                                <div style="margin-top: 0.75rem; padding: 0.6rem; background: #fef2f2; border-left: 3px solid #ef4444; border-radius: 4px; font-size: 0.82rem; color: #991b1b;">
                                    <strong>Störfall-Ursache bei DarSys:</strong> Die Netzwerk-Zuleitung zu den Arbeitsplätzen wurde nachträglich im selben Kabelkanal direkt neben dem 400V-Drehstromkabel des Klimaanlagen-Kompressors verlegt. Bei jedem Kompressor-Anlauf induziert das magnetische Feld Störspannungen (Bitfehler &amp; Verbindungsabbrüche)!
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            `;
        }

        // Page 3: IT 3 Zeiterfassung (Anlage 5: Beschreibung & Anlage 6: XML-Logdatei)
        if (pageIndex === 3) {
            return `
                <div class="attachment-sheet">
                    <div class="attachment-header">
                        <span>Anlagen zu IT 3 &bull; Zeiterfassung, BSI-Schutzbedarf &amp; Datenbank</span>
                        <div class="attachment-sub-tabs">
                            <button class="att-tab-btn ${this.activeAttachmentTab === 'all' ? 'active' : ''}" onclick="ExamAttachments.setTab('all')">Beide Anlagen</button>
                            <button class="att-tab-btn ${this.activeAttachmentTab === 'a5' ? 'active' : ''}" onclick="ExamAttachments.setTab('a5')">Anlage 5 (System)</button>
                            <button class="att-tab-btn ${this.activeAttachmentTab === 'a6' ? 'active' : ''}" onclick="ExamAttachments.setTab('a6')">Anlage 6 (XML)</button>
                         <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    </div>

                    <div class="attachment-body">
                        
                        <!-- ANLAGE 5: SYSTEMBESCHREIBUNG -->
                        <div id="att-section-a5" class="att-section" style="${this.activeAttachmentTab === 'a6' ? 'display: none;' : ''}">
                            <div class="attachment-doc-title">
                                <i class="fa-solid fa-clock" style="color: #d97706;"></i> Anlage 5: Beschreibung des Zeiterfassungssystems
                            </div>
                            
                            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; font-size: 0.88rem; color: #1e293b; line-height: 1.5;">
                                <p style="margin-top: 0;">
                                    <strong>1. Funktionsweise &amp; Komponenten:</strong><br>
                                    Die DarSys GmbH erfasst die Arbeits- und Pausenzeiten ihrer 45 Mitarbeiter über ein RFID-Chipkartenterminal (<code>TERM-01-EINGANG</code>) am Eingangsbereich. Die Buchungen werden per Netzwerk an den internen Datenbank-Server (<code>SRV-01</code>) übertragen und in einer relationalen Datenbank gespeichert.
                                </p>
                                <p>
                                    <strong>2. Gesetzliche Anforderungen &amp; Datenschutz (DSGVO):</strong><br>
                                    Es werden hochsensible <strong>personenbezogene Verhaltens- und Leistungsdaten</strong> der Beschäftigten verarbeitet (§ 26 BDSG). Der Betriebsrat besitzt bei der Einführung und Überwachung nach § 87 Abs. 1 Nr. 6 BetrVG ein zwingendes Mitbestimmungsrecht. Ein unberechtigter Einblick Dritter (z.B. Kollegen oder Externe) in die Arbeitszeiten anderer Mitarbeiter muss technisch strikt verhindert werden (Schutzbedarf: <em>Vertraulich</em>).
                                </p>
                                <p style="margin-bottom: 0;">
                                    <strong>3. Ausfalltoleranz &amp; Korrekturmöglichkeiten:</strong><br>
                                    Bei einem Serverausfall oder Leitungsunterbrechung ist eine manuelle Noterfassung auf Stundenzetteln für bis zu 72 Stunden betrieblich tolerierbar (Schutzbedarf Verfügbarkeit: <em>Normal</em>). Fehlbuchungen oder vergessene Buchungen können am Monatsende von der Personalabteilung korrigiert werden (Schutzbedarf Integrität: <em>Normal / Erhöht</em>).
                                </p>
                            </div>
                        </div>

                        <!-- ANLAGE 6: XML-EXPORT -->
                        <div id="att-section-a6" class="att-section" style="${this.activeAttachmentTab === 'a5' ? 'display: none;' : ''}; margin-top: 1.5rem;">
                            <div class="attachment-doc-title" style="display: flex; justify-content: space-between; align-items: center;">
                                <span><i class="fa-solid fa-file-code" style="color: #10b981;"></i> Anlage 6: XML-Export der Zeiterfassung (time_log_export.xml)</span>
                                <span style="font-size: 0.75rem; background: #065f46; color: white; padding: 0.15rem 0.5rem; border-radius: 4px;">XML 2.4</span>
                            </div>

                            <p style="font-size: 0.86rem; color: #475569; margin-bottom: 0.5rem;">
                                Die relationale Datenbank soll aus dem folgenden XML-Format abgeleitet werden:
                            </p>

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

                            <div style="margin-top: 0.6rem; font-size: 0.82rem; color: #475569; background: #f8fafc; padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid #e2e8f0;">
                                <strong>Datenbank-Hinweis:</strong> Die XML-Daten zeigen eine 1:n-Beziehung zwischen Mitarbeitern (<code>persid</code>) und Buchungen (<code>entry id</code>). Die Mitarbeiter-Stammdaten müssen in <code>tblUserAccount</code> und die Buchungsdaten in <code>tblLogEntry</code> über den Fremdschlüssel <code>persid</code> getrennt werden.
                            </div>
                        </div>

                    </div>
                </div>
            `;
        }

        // Page 4: IT 4 Form & Gesamteindruck
        if (pageIndex === 4) {
            return `
                <div class="attachment-sheet">
                    <div class="attachment-header">
                        <span>Anlage zu IT 4 &bull; Formale Prüfungskriterien</span>
                        <span class="attachment-tag">Bewertungsrichtlinie</span>
                     <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="attachment-body">
                        <div class="attachment-doc-title">
                            <i class="fa-solid fa-stamp" style="color: #475569;"></i> Bewertungskriterien des Prüfungsausschusses
                        </div>
                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem; font-size: 0.9rem; color: #1e293b; line-height: 1.5;">
                            <strong>Folgende Qualitätsstandards fließen in die 10 Punkte von IT 4 ein:</strong>
                            <ul style="margin: 0.75rem 0; padding-left: 1.3rem;">
                                <li><strong>DIN 5008:</strong> Korrekter Aufbau des kaufmännischen Angebots in Anlage 8 (Empfängerfeld, Datumsangabe, Betreffzeile ohne Wort 'Betreff', übersichtliche Tabellenstaffelung, korrekte Ausweisung von Netto, USt und Brutto).</li>
                                <li><strong>Terminologie:</strong> Saubere Unterscheidung von IPv4- (punktdezimal mit Subnetzmaske) und IPv6-Notation (hexadezimal mit Präfixlänge /64, Doppelpunkt-Kürzung).</li>
                                <li><strong>Mathematische Nachvollziehbarkeit:</strong> Lückenloser Rechenweg bei der Nutzwertmatrix und Preiskalkulation (keine reinen Endergebnisse ohne Formelansatz).</li>
                                <li><strong>Vollständigkeit:</strong> Alle Lösungsblätter (Anlagen 7 bis 12.2) sind ausgefüllt, nicht zutreffende Felder sind normgerecht mit Schrägstrich (/) gesperrt.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        return "";
    },

    // Renders SoftTech Solutions GmbH attachments for Exam 22
    renderSoftTechAttachments: function(pageIndex) {
        return `
            <div class="attachment-sheet">
                <div class="attachment-header">
                    <span>Prüfung 22 &bull; SoftTech Solutions GmbH (FA 230)</span>
                    <span class="attachment-tag">Anlagen &amp; Vorgaben</span>
                 <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                <div class="attachment-body">
                    <div class="attachment-doc-title">
                        <i class="fa-solid fa-file-invoice" style="color: #0284c7;"></i> Aufgaben-Anlagen zu Aufgabe ${pageIndex}
                    </div>
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; font-size: 0.88rem; color: #334155; line-height: 1.5;">
                        <strong>Szenario SoftTech Solutions GmbH:</strong><br>
                        Das Systemhaus berät Kunden bei der Digitalisierung von Geschäftsprozessen. Für die aktuelle Aufgabe ${pageIndex} gelten die im Aufgabentext vorgegebenen Parameter.
                    </div>
                </div>
            </div>
        `;
    },

    // Renders generic attachments / scenario / cheat-sheet for exams 1 to 21
    renderGenericAttachments: function(exam, pageIndex) {
        return `
            <div class="attachment-sheet">
                <div class="attachment-header">
                    <span>${escapeHtml(exam.title.split(':')[0])} &bull; Referenz- &amp; Anlageblatt</span>
                    <span class="attachment-tag">Szenario &amp; Hilfsmittel</span>
                 <button class="att-close-btn" onclick="closeAttachmentPane()" title="Anlageblatt schließen (X)"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                <div class="attachment-body">
                    <!-- Scenario block -->
                    <div class="attachment-doc-title">
                        <i class="fa-solid fa-building" style="color: #4f46e5;"></i> Ausgangssituation &amp; Modellunternehmen
                    </div>
                    <div style="background: #eef2ff; border-left: 3px solid #6366f1; border-radius: 4px; padding: 0.85rem; font-size: 0.88rem; color: #312e81; line-height: 1.5; margin-bottom: 1.25rem;">
                        ${escapeHtml(exam.ausgangssituation || 'Keine gesonderte Ausgangssituation angegeben.')}
                    </div>

                    <!-- Cheat-Sheet Reference Card -->
                    <div class="attachment-doc-title">
                        <i class="fa-solid fa-book-bookmark" style="color: #059669;"></i> IHK-Formelsammlung &amp; Prüfungswissen
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.84rem;">
                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.6rem;">
                            <strong>IPv4-Subnetting Schnellübersicht:</strong><br>
                            /24 = 255.255.255.0 (254 Hosts) &bull; /25 = 128 Hosts &bull; /26 = 62 Hosts &bull; /27 = 30 Hosts &bull; /28 = 14 Hosts &bull; /30 = 2 Hosts
                        </div>
                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.6rem;">
                            <strong>Handelskalkulation:</strong><br>
                            Listeneinkaufspreis - Lieferrabatt = Zieleinkaufspreis - Lieferskonto = Bareinkaufspreis + Bezugskosten = Bezugspreis (Einstandspreis) + Handlungskostenzuschlag = Selbstkostenpreis + Gewinn = Barverkaufspreis.
                        </div>
                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.6rem;">
                            <strong>DIN EN ISO 9241-110 Grundsätze:</strong><br>
                            Aufgabenangemessenheit, Selbstbeschreibungsfähigkeit, Erwartungskonformität, Fehlertoleranz, Steuerbarkeit, Individualisierbarkeit, Lernförderlichkeit.
                        </div>
                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.6rem;">
                            <strong>RAID-Vergleich:</strong><br>
                            RAID 0 (Striping, 0% Redundanz, Performance) &bull; RAID 1 (Mirroring, 50% Kapazität, Ausfallsicherheit) &bull; RAID 5 (Striping+Parität, n-1 Kapazität) &bull; RAID 10 (Mirroring+Striping, mind. 4 Disks).
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    setTab: function(tabId) {
        this.activeAttachmentTab = tabId;
        const pane = document.getElementById("exam-split-attachments-pane");
        if (pane && typeof activeExamSet !== "undefined" && typeof examCurrentPage !== "undefined") {
            pane.innerHTML = this.renderAttachmentsForPage(activeExamSet, examCurrentPage);
        }
    }
};

window.ExamAttachments = ExamAttachments;
