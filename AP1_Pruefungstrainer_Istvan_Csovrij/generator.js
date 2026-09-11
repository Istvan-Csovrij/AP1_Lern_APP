// AP1 Dynamischer Aufgabengenerator (Vollständige Abdeckung aller 6 Lernfelder, der höheren Lernfelder bis LF 18 sowie englischer Fachaufgaben)
// Erzeugt über 1.250 zufällige Prüfungsaufgaben aus allen relevanten Bereichen
// Integriert eine 50%-Regelung für offene Baden-Württemberg-Aufgaben (open-text)

var VisualDiagrams = (typeof window !== "undefined" && window.VisualDiagrams) ? window.VisualDiagrams : ((typeof VisualDiagrams !== "undefined") ? VisualDiagrams : {});

function generateDynamicQuestions(typeMode = "mix") {
    const dynamicQuestions = [];
    let currentId = 1000;

    // Helper to decide if a generated question should be open-text based on selected mode
    function shouldBeOpenText() {
        if (typeMode === "open") return true;
        if (typeMode === "standard") return false;
        return Math.random() < 0.5; // "mix" mode (50/50)
    }

    // ==========================================
    // LERNFELD 1 & 6: WIRTSCHAFT & VERTRÄGE (lf1, lf6)
    // ==========================================
    
    // 1.1 Wirtschaftlichkeitsrechnungen (Angebotsvergleich)
    for (let i = 0; i < 15; i++) {
        const count = Math.floor(Math.random() * 41) + 10; // 10 bis 50 Stück
        const priceA = Math.floor(Math.random() * 100) + 100; // 100 bis 200 EUR
        const priceB = priceA + Math.floor(Math.random() * 30) + 15; // Teurer, da mehr Garantie
        const priceC = priceA - Math.floor(Math.random() * 20) - 10; // Billiger
        
        const totalA = count * priceA;
        const totalB = count * priceB;
        const totalC = count * priceC;

        const qType = Math.floor(Math.random() * 3);
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            let qText = "";
            let mLoesung = "";
            if (qType === 0) {
                qText = `Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Ein Unternehmen möchte für seine Mitarbeiter ${count} neue Monitore beschaffen. Angebot A kostet ${priceA} EUR pro Stück. Berechne die Gesamtkosten für Angebot A.`;
                mLoesung = `${totalA} EUR. (Rechnung: ${count} Stück * ${priceA} EUR/Stück = ${totalA} EUR).`;
            } else if (qType === 1) {
                qText = `Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Ein Unternehmen möchte für seine Mitarbeiter ${count} neue Monitore beschaffen. Angebot B kostet ${priceB} EUR pro Stück. Berechne die Gesamtkosten für Angebot B.`;
                mLoesung = `${totalB} EUR. (Rechnung: ${count} Stück * ${priceB} EUR/Stück = ${totalB} EUR).`;
            } else {
                qText = `Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Für die Anschaffung von ${count} neuen Monitoren liegen drei Angebote vor:\nAngebot A: ${priceA} EUR/Stück\nAngebot B: ${priceB} EUR/Stück\nAngebot C: ${priceC} EUR/Stück\n\nWelches Angebot hat die niedrigsten Gesamtanschaffungskosten und warum?`;
                mLoesung = `Angebot C hat die niedrigsten Kosten (${totalC} EUR), da der Stückpreis mit ${priceC} EUR der geringste ist.`;
            }

            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `Rechnung: Menge (${count}) * Stückpreis.`
            });
        } else {
            // Original Multiple-Choice / Text-Input
            if (qType === 0) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    type: "text-input",
                    question: `Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Ein Unternehmen möchte für seine Mitarbeiter ${count} neue Monitore beschaffen.\nAngebot A kostet ${priceA} EUR pro Stück.\nBerechne die Gesamtkosten für Angebot A in EUR. (Gib nur die Zahl ein)`,
                    correctAnswers: [totalA.toString()],
                    explanation: `Rechnung: ${count} Stück * ${priceA} EUR/Stück = ${totalA} EUR.`
                });
            } else if (qType === 1) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    type: "text-input",
                    question: `Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Ein Unternehmen möchte für seine Mitarbeiter ${count} neue Monitore beschaffen.\nAngebot B (mit erweitertem Support) kostet ${priceB} EUR pro Stück.\nBerechne die Gesamtkosten für Angebot B in EUR. (Gib nur die Zahl ein)`,
                    correctAnswers: [totalB.toString()],
                    explanation: `Rechnung: ${count} Stück * ${priceB} EUR/Stück = ${totalB} EUR.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Für die Anschaffung von ${count} neuen Monitoren liegen drei Angebote vor:\nAngebot A: ${priceA} EUR/Stück (2 Jahre Garantie)\nAngebot B: ${priceB} EUR/Stück (5 Jahre Garantie)\nAngebot C: ${priceC} EUR/Stück (ohne DisplayPort-Kabel)\n\nWelches Angebot hat die niedrigsten Gesamtanschaffungskosten?`,
                    options: [
                        `Angebot A (Gesamt: ${totalA} EUR)`,
                        `Angebot B (Gesamt: ${totalB} EUR)`,
                        `Angebot C (Gesamt: ${totalC} EUR)`,
                        "Die Angebote sind alle gleich teuer."
                    ],
                    correctAnswer: 2,
                    explanation: `Angebot C ist mit ${priceC} EUR pro Stück das günstigste Angebot. Gesamtkosten: ${count} * ${priceC} EUR = ${totalC} EUR.`
                });
            }
        }
    }

    // ==========================================
    // LERNFELD 2: ARBEITSPLATZ & HARDWARE (lf2)
    // ==========================================
    
    // 2.1 RAID-Kapazitätsberechnungen
    for (let i = 0; i < 15; i++) {
        const diskCount = Math.floor(Math.random() * 5) + 3; // 3 bis 7 Platten
        const diskSizeList = [1, 2, 4, 6, 8, 10, 12];
        const diskSize = diskSizeList[Math.floor(Math.random() * diskSizeList.length)];
        const raidLevels = [0, 1, 5, 6, 10];
        const raid = raidLevels[Math.floor(Math.random() * raidLevels.length)];
        
        let netCapacity = 0;
        let explanation = "";
        let isPossible = true;

        if (raid === 0) {
            netCapacity = diskCount * diskSize;
            explanation = `Bei RAID 0 (Striping) wird die Kapazität aller Festplatten vollständig genutzt (${diskCount} * ${diskSize} TB = ${netCapacity} TB). Keine Ausfallsicherheit!`;
        } else if (raid === 1) {
            netCapacity = diskSize;
            explanation = `Bei RAID 1 (Spiegelung) entspricht die Nettokapazität der Größe einer einzelnen Festplatte (${diskSize} TB), da alle anderen Platten Spiegelungen sind.`;
        } else if (raid === 5) {
            netCapacity = (diskCount - 1) * diskSize;
            explanation = `Bei RAID 5 wird die Kapazität einer Festplatte für Paritätsdaten verwendet. Nettokapazität: (N - 1) * Kapazität = (${diskCount} - 1) * ${diskSize} TB = ${netCapacity} TB.`;
        } else if (raid === 6) {
            netCapacity = (diskCount - 2) * diskSize;
            explanation = `Bei RAID 6 wird die Kapazität von zwei Festplatten für Paritätsdaten verwendet. Nettokapazität: (N - 2) * Kapazität = (${diskCount} - 2) * ${diskSize} TB = ${netCapacity} TB.`;
        } else if (raid === 10) {
            if (diskCount % 2 !== 0) {
                isPossible = false;
            } else {
                netCapacity = (diskCount / 2) * diskSize;
                explanation = `Bei RAID 10 wird die Hälfte der Festplatten für die Spiegelung benötigt. Nettokapazität: (N / 2) * Kapazität = (${diskCount} / 2) * ${diskSize} TB = ${netCapacity} TB.`;
            }
        }

        if (isPossible) {
            const isOpen = shouldBeOpenText();
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf2",
                    type: "open-text",
                    question: `Prüfungsaufgabe Hardware (LF 2): Ein Server soll mit einem RAID-${raid}-Verbund aus ${diskCount} Festplatten mit jeweils ${diskSize} TB Kapazität konfiguriert werden. Berechne die nutzbare Nettokapazität des Verbunds in TB und erkläre kurz deinen Rechenweg.`,
                    musterloesung: `Nettokapazität: ${netCapacity} TB. Rechenweg: ${explanation}`,
                    explanation: explanation
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf2",
                    type: "text-input",
                    question: `Prüfungsaufgabe Hardware (LF 2): Ein Server soll mit einem RAID-${raid}-Verbund aus ${diskCount} Festplatten mit jeweils ${diskSize} TB Kapazität konfiguriert werden.\nWie hoch ist die nutzbare Nettokapazität des Verbunds in TB? (Gib nur die Zahl ein)`,
                    correctAnswers: [netCapacity.toString()],
                    explanation: explanation
                });
            }
        }
    }

    // 2.2 Windows 11 Editionen
    const winEditions = [
        { name: "Windows 11 Home", target: "Privatpersonen für den Einzel- oder Heimgebrauch" },
        { name: "Windows 11 Pro", target: "Kleine bis mittlere Unternehmen sowie fortgeschrittene Anwender (Power-User)" },
        { name: "Windows 11 Enterprise", target: "Große Unternehmen mit komplexer IT-Infrastruktur und Volumenlizenzen" },
        { name: "Windows 11 Education", target: "Schulpersonal, Lehrkräfte und Studierende in Bildungseinrichtungen" }
    ];
    for (let i = 0; i < 10; i++) {
        const targetEdition = winEditions[Math.floor(Math.random() * winEditions.length)];
        const wrongEditions = winEditions.filter(e => e.name !== targetEdition.name).map(e => e.name);
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                type: "open-text",
                question: `Prüfungsaufgabe Hardware & OS (LF 2): Nenne die Windows 11 Edition, die primär für folgende Zielgruppe ausgelegt ist:\n"${targetEdition.target}".`,
                musterloesung: targetEdition.name,
                explanation: `Die Microsoft Windows 11 Editionen sind nach Zielgruppen gestaffelt. Für "${targetEdition.target}" ist ${targetEdition.name} die empfohlene Version.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                type: "multiple-choice",
                question: `Prüfungsaufgabe Hardware & OS (LF 2): Welche Windows 11 Edition ist primär für folgende Zielgruppe ausgelegt: "${targetEdition.target}"?`,
                options: [targetEdition.name, ...wrongEditions],
                correctAnswer: 0,
                explanation: `Die Microsoft Windows 11 Editionen sind nach Zielgruppen gestaffelt. Für "${targetEdition.target}" ist ${targetEdition.name} die empfohlene Version.`
            });
        }
    }

    // ==========================================
    //     // 3.1 Subnetting (IP, NetID, Broadcast, Hosts)
    for (let i = 0; i < 20; i++) {
        const ip3 = Math.floor(Math.random() * 254) + 1;
        const ip4 = Math.floor(Math.random() * 254) + 1;
        const masks = [
            { slash: 24, maskStr: "255.255.255.0", size: 256 },
            { slash: 25, maskStr: "255.255.255.128", size: 128 },
            { slash: 26, maskStr: "255.255.255.192", size: 64 },
            { slash: 27, maskStr: "255.255.255.224", size: 32 },
            { slash: 28, maskStr: "255.255.255.240", size: 16 },
            { slash: 29, maskStr: "255.255.255.248", size: 8 },
            { slash: 30, maskStr: "255.255.255.252", size: 4 }
        ];
        
        const m = masks[Math.floor(Math.random() * masks.length)];
        const baseIP = `192.168.${ip3}.${ip4}`;
        
        const netOctet = Math.floor(ip4 / m.size) * m.size;
        const netID = `192.168.${ip3}.${netOctet}`;
        const broadcast = `192.168.${ip3}.${netOctet + m.size - 1}`;
        const hostMin = `192.168.${ip3}.${netOctet + 1}`;
        const hostMax = `192.168.${ip3}.${netOctet + m.size - 2}`;
        const hostsCount = m.size - 2;

        const qType = Math.floor(Math.random() * 4);
        const isOpen = shouldBeOpenText();
        
        const explanationStr = `Schritt-für-Schritt-Lösungsweg:\n` +
            `1. Subnetz-Maske analysieren:\n` +
            `   Die Maske ${m.maskStr} entspricht CIDR /${m.slash}. Das heißt, ${m.slash} Bits sind für das Netz reserviert (Netzwerk-Teil).\n` +
            `2. Blockgröße bestimmen:\n` +
            `   Die Blockgröße ist die Anzahl der Adressen pro Subnetz. Berechnung:\n` +
            `   Blockgröße = 256 - ${m.maskStr.split('.')[3]} = ${m.size} Adressen (inkl. Netzadresse und Broadcast).\n` +
            `   Alternativ über Host-Bits: 32 - ${m.slash} = ${32 - m.slash} Host-Bits -> 2^${32 - m.slash} = ${m.size} Adressen.\n` +
            `3. Netzwerkadresse bestimmen (Network ID):\n` +
            `   Das letzte Oktett der IP-Adresse (${ip4}) wird durch die Blockgröße ${m.size} geteilt und abgerundet:\n` +
            `   ${ip4} / ${m.size} = ${Math.floor(ip4 / m.size)} (abgerundet).\n` +
            `   Dieses Ergebnis wird wieder mit der Blockgröße multipliziert:\n` +
            `   ${Math.floor(ip4 / m.size)} * ${m.size} = ${netOctet}.\n` +
            `   -> Netzwerkadresse: 192.168.${ip3}.${netOctet}\n` +
            `4. Broadcast-Adresse bestimmen:\n` +
            `   Sie ist die letzte IP vor dem nächsten Subnetz (Netzadresse + Blockgröße - 1):\n` +
            `   192.168.${ip3}.${netOctet} + ${m.size} - 1 = 192.168.${ip3}.${netOctet + m.size - 1}.\n` +
            `   -> Broadcast-Adresse: ${broadcast}\n` +
            `5. Nutzbare Host-Adressen bestimmen:\n` +
            `   Das sind alle IPs zwischen der Netzwerkadresse und der Broadcast-Adresse:\n` +
            `   - Erste nutzbare IP: Netzwerkadresse + 1 = 192.168.${ip3}.${netOctet + 1}\n` +
            `   - Letzte nutzbare IP: Broadcast-Adresse - 1 = 192.168.${ip3}.${netOctet + m.size - 2}\n` +
            `   - Anzahl nutzbarer Hosts: Blockgröße (${m.size}) - 2 = ${hostsCount} Hosts (Netzadresse und Broadcast-IP sind nicht an Hosts vergehbar).`;

        if (isOpen) {
            let qText = "";
            let mLoesung = "";
            if (qType === 0) {
                qText = `Prüfungsaufgabe Netzwerk (LF 3): Gegeben ist die IP-Adresse ${baseIP} mit der Subnetzmaske ${m.maskStr} (/${m.slash}). Bestimme die Netzwerkadresse (Network ID).`;
                mLoesung = `Netzwerkadresse: ${netID}`;
            } else if (qType === 1) {
                qText = `Prüfungsaufgabe Netzwerk (LF 3): Gegeben ist die IP-Adresse ${baseIP} mit der Subnetzmaske ${m.maskStr} (/${m.slash}). Bestimme die Broadcast-Adresse.`;
                mLoesung = `Broadcast-Adresse: ${broadcast}`;
            } else if (qType === 2) {
                qText = `Prüfungsaufgabe Netzwerk (LF 3): Berechne die Anzahl der nutzbaren Host-IP-Adressen für ein Subnetz mit der Subnetzmaske ${m.maskStr} (/${m.slash}).`;
                mLoesung = `${hostsCount} Hosts.`;
            } else {
                qText = `Prüfungsaufgabe Netzwerk (LF 3): Gegeben ist die IP-Adresse ${baseIP} mit der Subnetzmaske ${m.maskStr} (/${m.slash}). Bestimme den ersten und den letzten nutzbaren Hostbereich.`;
                mLoesung = `Erster Host: ${hostMin}, Letzter Host: ${hostMax}`;
            }

            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: explanationStr
            });
        } else {
            // Original Multiple-Choice / Text-Input
            if (qType === 0) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf3",
                    type: "text-input",
                    question: `Prüfungsaufgabe Netzwerk (LF 3): Gegeben ist die IP-Adresse ${baseIP} mit der Subnetzmaske ${m.maskStr} (/${m.slash}).\nBestimme die Netzwerkadresse (Network ID).`,
                    correctAnswers: [netID],
                    explanation: explanationStr
                });
            } else if (qType === 1) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf3",
                    type: "text-input",
                    question: `Prüfungsaufgabe Netzwerk (LF 3): Gegeben ist die IP-Adresse ${baseIP} mit der Subnetzmaske ${m.maskStr} (/${m.slash}).\nBestimme die Broadcast-Adresse.`,
                    correctAnswers: [broadcast],
                    explanation: explanationStr
                });
            } else if (qType === 2) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf3",
                    type: "text-input",
                    question: `Prüfungsaufgabe Netzwerk (LF 3): Wie viele nutzbare Host-IP-Adressen können in einem Subnetz mit der Subnetzmaske ${m.maskStr} (/${m.slash}) adressiert werden?`,
                    correctAnswers: [hostsCount.toString()],
                    explanation: explanationStr
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf3",
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe Netzwerk (LF 3): Welcher Host-Bereich ist für das Subnetz der IP-Adresse ${baseIP} /${m.slash} gültig?`,
                    options: [
                        `192.168.${ip3}.0 bis 192.168.${ip3}.255`,
                        `${hostMin} bis ${hostMax}`,
                        `${netID} bis ${broadcast}`,
                        `192.168.${ip3}.${netOctet + 2} bis 192.168.${ip3}.${netOctet + m.size}`
                    ],
                    correctAnswer: 1,
                    explanation: explanationStr
                });
            }
        }
    }

    // 3.2 OSI-Protokollzuordnungen
    const osiProtocols = [
        { name: "HTTP", layer: "7", layerName: "Anwendungsschicht (Application Layer)" },
        { name: "HTTPS", layer: "7", layerName: "Anwendungsschicht (Application Layer)" },
        { name: "FTP", layer: "7", layerName: "Anwendungsschicht (Application Layer)" },
        { name: "SMTP", layer: "7", layerName: "Anwendungsschicht (Application Layer)" },
        { name: "DNS", layer: "7", layerName: "Anwendungsschicht (Application Layer)" },
        { name: "TCP", layer: "4", layerName: "Transportschicht (Transport Layer)" },
        { name: "UDP", layer: "4", layerName: "Transportschicht (Transport Layer)" },
        { name: "IP", layer: "3", layerName: "Vermittlungsschicht (Network Layer)" },
        { name: "ICMP", layer: "3", layerName: "Vermittlungsschicht (Network Layer)" },
        { name: "ARP", layer: "2", layerName: "Sicherungsschicht (Data Link Layer)" },
        { name: "Ethernet", layer: "2", layerName: "Sicherungsschicht (Data Link Layer)" },
        { name: "DHCP", layer: "7", layerName: "Anwendungsschicht (Application Layer)" }
    ];
    for (let i = 0; i < 10; i++) {
        const proto = osiProtocols[Math.floor(Math.random() * osiProtocols.length)];
        const wrongLayers = ["Schicht 1", "Schicht 2", "Schicht 3", "Schicht 4", "Schicht 7"].filter(l => !l.includes(proto.layer));
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                type: "open-text",
                question: `Prüfungsaufgabe Netzwerk (LF 3): Auf welcher Schicht des OSI-Referenzmodells arbeitet das Netzwerkprotokoll "${proto.name}"? Nenne die Schicht-Nummer und den Schicht-Namen.`,
                musterloesung: `Schicht ${proto.layer}: ${proto.layerName}`,
                explanation: `Das Protokoll "${proto.name}" ist der Schicht ${proto.layer} (${proto.layerName}) des OSI-Referenzmodells zugeordnet.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                type: "multiple-choice",
                question: `Prüfungsaufgabe Netzwerk (LF 3): Auf welcher Schicht des OSI-Referenzmodells arbeitet das Netzwerkprotokoll "${proto.name}"?`,
                options: [
                    `Schicht ${proto.layer}: ${proto.layerName}`,
                    `${wrongLayers[0]}`,
                    `${wrongLayers[1]}`,
                    `${wrongLayers[2]}`
                ],
                correctAnswer: 0,
                explanation: `Das Protokoll "${proto.name}" ist der Schicht ${proto.layer} (${proto.layerName}) des OSI-Referenzmodells zugeordnet.`
            });
        }
    }

    // ==========================================
    // LERNFELD 4: SCHUTZ & SICHERHEIT (lf4)
    // ==========================================
    
    // 4.1 Malware-Klassifizierung
    const malwareTypes = [
        { name: "Trojaner (Trojanisches Pferd)", desc: "tarnen sich als nützliche Software, öffnen im Hintergrund jedoch heimlich eine Hintertür (Backdoor) für Angreifer" },
        { name: "Ransomware (Erpressersoftware)", desc: "verschlüsseln Benutzerdaten auf dem System und fordern Lösegeld für die Freigabe des Schlüssels" },
        { name: "Spyware", desc: "spionieren Benutzerdaten und Aktivitäten heimlich aus (z.B. durch Mitprotokollieren von Tastatureingaben)" },
        { name: "Computer-Wurm (Worm)", desc: "verbreiten sich selbstständig über Netzwerke und Sicherheitslücken, ohne ein Wirtsprogramm zu benötigen" },
        { name: "Computer-Virus", desc: "benötigen zwingend ein Wirtsprogramm zur Ausbreitung und hängen sich an andere ausführbare Dateien an" }
    ];
    for (let i = 0; i < 10; i++) {
        const mw = malwareTypes[Math.floor(Math.random() * malwareTypes.length)];
        const wrongMW = malwareTypes.filter(m => m.name !== mw.name).map(m => m.name);
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf4",
                type: "open-text",
                question: `Prüfungsaufgabe IT-Sicherheit (LF 4): Erläutere, welche Art von Malware der folgenden Beschreibung entspricht:\n"${mw.desc}"`,
                musterloesung: mw.name,
                explanation: `Der Beschreibung nach handelt es sich eindeutig um einen "${mw.name}".`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf4",
                type: "multiple-choice",
                question: `Prüfungsaufgabe IT-Sicherheit (LF 4): Welche Art von Malware entspricht der folgenden Beschreibung:\n"${mw.desc}"?`,
                options: [mw.name, wrongMW[0], wrongMW[1], wrongMW[2]],
                correctAnswer: 0,
                explanation: `Der Beschreibung nach handelt es sich eindeutig um einen "${mw.name}".`
            });
        }
    }

    // 4.2 IT-Sicherheitsziele
    const securityGoals = [
        { name: "Vertraulichkeit (Confidentiality)", desc: "Sicherstellung, dass Daten nur für autorisierte Personen zugänglich sind und unbefugtes Mitlesen verhindert wird" },
        { name: "Integrität (Integrity)", desc: "Sicherstellung, dass Daten vollständig, korrekt und unversehrt bleiben und nicht unbemerkt manipuliert werden" },
        { name: "Verfügbarkeit (Availability)", desc: "Sicherstellung, dass IT-Systeme, Dienste und Daten für berechtigte Benutzer zur vereinbarten Zeit betriebsbereit sind" }
    ];
    for (let i = 0; i < 10; i++) {
        const goal = securityGoals[Math.floor(Math.random() * securityGoals.length)];
        const wrongGoals = securityGoals.filter(g => g.name !== goal.name).map(g => g.name);
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf4",
                type: "open-text",
                question: `Prüfungsaufgabe IT-Sicherheit (LF 4): Welches IT-Sicherheitsziel (aus der CIA-Triade) beschreibt die:\n"${goal.desc}"?`,
                musterloesung: goal.name,
                explanation: `Das beschriebene Schutzziel ist die "${goal.name}".`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf4",
                type: "multiple-choice",
                question: `Prüfungsaufgabe IT-Sicherheit (LF 4): Welches IT-Sicherheitsziel (CIA-Triade) wird primär durch folgende Definition beschrieben:\n"${goal.desc}"?`,
                options: [goal.name, wrongGoals[0], wrongGoals[1]],
                correctAnswer: 0,
                explanation: `Das beschriebene Schutzziel ist die "${goal.name}".`
            });
        }
    }

    // ==========================================
    // LERNFELD 5 & LF 10: SOFTWARE & ALGORITHMEN (lf5)
    // ==========================================
    
    // 5.1 Pseudocode Schleifen-Tracing
    for (let i = 0; i < 15; i++) {
        const startErg = Math.floor(Math.random() * 5); // 0 bis 4
        const multiplier = Math.floor(Math.random() * 3) + 1; // 1 bis 3
        const loopLimit = Math.floor(Math.random() * 4) + 4; // 4 bis 7
        
        let erg = startErg;
        for (let j = 1; j < loopLimit; j++) {
            erg = erg + j * multiplier;
        }

        const isOpen = shouldBeOpenText();
        const pCode = `SET erg = ${startErg}\nSET i = 1\nWHILE i < ${loopLimit} DO\n    erg = erg + (i * ${multiplier})\n    i = i + 1\nEND WHILE`;
        const explanationStr = `Durchlauf-Rechnung:\nStart: erg = ${startErg}\n` + 
            Array.from({ length: loopLimit - 1 }, (_, idx) => {
                const currentI = idx + 1;
                const addValue = currentI * multiplier;
                const prevErg = startErg + Array.from({ length: idx }, (_, k) => (k+1)*multiplier).reduce((a, b) => a + b, 0);
                return `Durchlauf i=${currentI}: erg = ${prevErg} + (${currentI} * ${multiplier}) = ${prevErg + addValue}`;
            }).join("\n") + `\nAm Ende bricht die Schleife bei i = ${loopLimit} ab.`;

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "open-text",
                question: `Prüfungsaufgabe Algorithmen (LF 5): Bestimme den Endwert der Variable 'erg' am Ende dieses Pseudocode-Ablaufs und notiere deine Berechnungsschritte.`,
                code: pCode,
                musterloesung: `Ergebnis: ${erg}.\nBerechnungsschritte:\n${explanationStr}`,
                explanation: explanationStr
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "text-input",
                question: `Prüfungsaufgabe Algorithmen (LF 5): Welchen Wert hat die Variable 'erg' am Ende dieses Pseudocode-Ablaufs?`,
                code: pCode,
                correctAnswers: [erg.toString()],
                explanation: explanationStr
            });
        }
    }

    // ==========================================
    // LERNFELD 17: WEB-ENTWICKLUNG (HTML & CSS) (lf5)
    // ==========================================
    const htmlCssQuestions = [
        { q: "Welches HTML-Tag wird verwendet, um eine Verlinkung (Hyperlink) zu einer anderen Webseite zu definieren?", options: ["<a>", "<link>", "<href>", "<url>"], answer: 0, exp: "Das <a> Tag (Anchor) definiert Hyperlinks. Das Attribut href gibt das Ziel an (z. B. <a href='url'>Text</a>)." },
        { q: "Mit welcher CSS-Eigenschaft wird die Hintergrundfarbe eines HTML-Elements festgelegt?", options: ["background-color", "color", "bg-color", "background-style"], answer: 0, exp: "Die CSS-Eigenschaft 'background-color' bestimmt die Hintergrundfarbe eines Elements, während 'color' für die Textfarbe genutzt wird." },
        { q: "Wofür steht die Abkürzung 'CSS' in der Webentwicklung?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Class Style Selector"], answer: 0, exp: "CSS steht für 'Cascading Style Sheets'. Es dient der optischen Gestaltung und Formatierung von HTML-Dokumenten." },
        { q: "Welches HTML-Tag wird verwendet, um eine ungeordnete Liste (mit Aufzählungspunkten) zu erstellen?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: 0, exp: "<ul> (unordered list) definiert eine ungeordnete Liste mit Punkten. <ol> (ordered list) definiert eine nummerierte Liste, und <li> steht für ein einzelnes Listenelement (list item)." },
        { q: "Wie lautet die korrekte CSS-Syntax, um alle Absätze (<p>-Elemente) fett gedruckt anzuzeigen?", options: ["p { font-weight: bold; }", "p { font-style: bold; }", "p { text-weight: bold; }", "p { text-style: bold; }"], answer: 0, exp: "Die korrekte CSS-Eigenschaft lautet 'font-weight: bold;'." }
    ];
    for (let i = 0; i < 10; i++) {
        const item = htmlCssQuestions[Math.floor(Math.random() * htmlCssQuestions.length)];
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "open-text",
                question: `Prüfungsaufgabe Web-Entwicklung (LF 17): ${item.q}`,
                musterloesung: `Richtige Antwort: ${item.options[item.answer]}\n\nErklärung / Hintergrund: ${item.exp}`,
                explanation: item.exp
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "multiple-choice",
                question: `Prüfungsaufgabe Web-Entwicklung (LF 17): ${item.q}`,
                options: item.options,
                correctAnswer: item.answer,
                explanation: item.exp
            });
        }
    }

    // ==========================================
    // SQL-ABFRAGEN SCHREIBEN & VERSTEHEN (lf5)
    // ==========================================
    const sqlScenarios = [
        {
            tableDesc: "Tabellen: `Kunde(KundenID, Name, Ort)` und `Bestellung(BestellID, KundenID, Betrag)`",
            task: "Erstelle eine SQL-Abfrage, die alle Kundennamen (`Name`) und die dazugehörigen Bestellbeträge (`Betrag`) ausgibt (Verwende einen INNER JOIN).",
            sql: "SELECT Kunde.Name, Bestellung.Betrag FROM Kunde INNER JOIN Bestellung ON Kunde.KundenID = Bestellung.KundenID;",
            explanation: "Ein INNER JOIN verbindet Zeilen aus beiden Tabellen, bei denen die KundenID übereinstimmt."
        },
        {
            tableDesc: "Tabelle: `Mitarbeiter(MitarbeiterID, Vorname, Nachname, Gehalt, Abteilung)`",
            task: "Erstelle eine SQL-Abfrage, die den Vornamen, Nachnamen und das Gehalt aller Mitarbeiter anzeigt, die mehr als 50.000 EUR verdienen, sortiert nach dem Nachnamen aufsteigend.",
            sql: "SELECT Vorname, Nachname, Gehalt FROM Mitarbeiter WHERE Gehalt > 50000 ORDER BY Nachname ASC;",
            explanation: "WHERE filtert nach dem Gehalt, ORDER BY sortiert nach dem angegebenen Feld (standardmäßig aufsteigend = ASC)."
        },
        {
            tableDesc: "Tabelle: `Bestellung(BestellID, KundenID, Betrag, Datum)`",
            task: "Erstelle eine SQL-Abfrage, die die Summe aller Bestellbeträge aus der Tabelle `Bestellung` berechnet.",
            sql: "SELECT SUM(Betrag) FROM Bestellung;",
            explanation: "Die Aggregatfunktion SUM() berechnet das Gesamtergebnis einer numerischen Spalte."
        },
        {
            tableDesc: "Tabelle: `Produkt(ProduktID, Name, Preis, Kategorie)`",
            task: "Erstelle eine SQL-Abfrage, die den Durchschnittspreis aller Produkte gruppiert nach der Kategorie anzeigt.",
            sql: "SELECT Kategorie, AVG(Preis) FROM Produkt GROUP BY Kategorie;",
            explanation: "Um Durchschnittswerte pro Kategorie anzuzeigen, wird die Aggregatfunktion AVG(Preis) in Kombination mit GROUP BY Kategorie verwendet."
        }
    ];
    for (let i = 0; i < 10; i++) {
        const scenario = sqlScenarios[Math.floor(Math.random() * sqlScenarios.length)];
        const isOpen = shouldBeOpenText();
        
        const qText = `Prüfungsaufgabe SQL (LF 5 / LF 18):\n${scenario.tableDesc}\n\nAufgabe:\n${scenario.task}`;
        
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "open-text",
                question: qText,
                musterloesung: `SQL-Lösung:\n${scenario.sql}\n\nErläuterung: ${scenario.explanation}`,
                explanation: scenario.explanation
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "text-input",
                question: qText + "\n\n(Gib die SQL-Abfrage ein - Leerzeichen und Groß-/Kleinschreibung werden toleriert)",
                correctAnswers: [scenario.sql, scenario.sql.replace(/\s+/g, ' ')],
                explanation: scenario.explanation
            });
        }
    }

    // ==========================================
    // ER-MODELLIERUNG & KARDINALITÄTEN (lf5)
    // ==========================================
    const erScenarios = [
        {
            q: "Wie wird eine m:n-Beziehung (z. B. zwischen Student und Kurs) in einem physikalischen relationalen Datenbankentwurf aufgelöst?",
            options: [
                "Durch das Erstellen einer dritten Hilfstabelle (Verknüpfungstabelle), die die Primärschlüssel der beiden Ausgangstabellen als Fremdschlüssel enthält.",
                "Durch das direkte Einfügen der KursID als Fremdschlüssel in die Tabelle Student.",
                "Durch das direkte Einfügen der StudentID als Fremdschlüssel in die Tabelle Kurs.",
                "Eine m:n-Beziehung kann in relationalen Datenbanken nicht abgebildet werden."
            ],
            answer: 0,
            exp: "Eine m:n-Beziehung wird im relationalen Entwurf durch eine Verknüpfungstabelle aufgelöst, um Redundanzen und Mehrfachwerte in einzelnen Feldern zu vermeiden."
        },
        {
            q: "In welcher Tabelle wird bei einer 1:n-Beziehung (z. B. ein Kunde [1] hat mehrere Bestellungen [n]) der Fremdschlüssel eingetragen?",
            options: [
                "In der Tabelle auf der n-Seite (also in der Tabelle 'Bestellung').",
                "In der Tabelle auf der 1-Seite (also in der Tabelle 'Kunde').",
                "In einer eigens dafür angelegten Verknüpfungstabelle.",
                "In beiden Tabellen, um die Verknüpfung in beide Richtungen zu ermöglichen."
            ],
            answer: 0,
            exp: "Der Fremdschlüssel wird immer auf der n-Seite (Detailseite) eingetragen und verweist auf den Primärschlüssel der 1-Seite (Stammseite)."
        },
        {
            q: "Welche Beziehungskardinalität liegt vor zwischen einem Mitarbeiter und seinem Dienstwagen, wenn jeder Mitarbeiter höchstens einen Dienstwagen besitzt und jeder Dienstwagen genau einem Mitarbeiter zugeordnet ist?",
            options: [
                "1:1-Beziehung",
                "1:n-Beziehung",
                "n:m-Beziehung",
                "Rekursive Beziehung"
            ],
            answer: 0,
            exp: "Da die Zuordnung in beide Richtungen eindeutig ist (Mitarbeiter -> Dienstwagen: max. 1, Dienstwagen -> Mitarbeiter: 1), handelt es sich um eine 1:1-Beziehung."
        }
    ];
    for (let i = 0; i < 10; i++) {
        const scenario = erScenarios[Math.floor(Math.random() * erScenarios.length)];
        const isOpen = shouldBeOpenText();
        
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "open-text",
                question: `Prüfungsaufgabe ER-Modellierung (LF 18 / LF 5):\n${scenario.q}`,
                musterloesung: scenario.options[scenario.answer],
                explanation: scenario.exp
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "multiple-choice",
                question: `Prüfungsaufgabe ER-Modellierung (LF 18 / LF 5):\n${scenario.q}`,
                options: scenario.options,
                correctAnswer: scenario.answer,
                explanation: scenario.exp
            });
        }
    }

    // ==========================================
    // DATENBANK-GRUNDLAGEN (CONCEPTS) (lf5)
    // ==========================================
    const databaseConcepts = [
        { q: "Wie nennt man einen Schlüssel in einer Tabelle, der auf den Primärschlüssel einer anderen Tabelle verweist, um Beziehungen herzustellen?", options: ["Fremdschlüssel (Foreign Key)", "Sekundärschlüssel (Secondary Key)", "Verbindungsschlüssel (Link Key)", "Indexschlüssel"], answer: 0, exp: "Ein Fremdschlüssel (Foreign Key) stellt die Beziehung zwischen zwei relationalen Tabellen her, indem er auf den Primärschlüssel der Eltern-Tabelle referenziert." },
        { q: "Welche beiden Bedingungen muss ein Feld zwingend erfüllen, um als Primärschlüssel (Primary Key) definiert werden zu können?", options: ["Es muss eindeutig sein (Unique) und darf keine NULL-Werte enthalten (Not Null).", "Es muss eine Zahl sein und darf nicht verändert werden.", "Es muss mit einer ID beginnen und indiziert sein.", "Es muss mindestens 10 Zeichen lang sein."], answer: 0, exp: "Ein Primärschlüssel identifiziert jeden Datensatz in einer Tabelle eindeutig. Er darf daher keine Duplikate (Unique) und keine leeren Werte (Not Null) enthalten." },
        { q: "Welches Prinzip sichert in relationalen Datenbanken, dass Fremdschlüssel-Beziehungen konsistent bleiben und keine verwaisten Einträge entstehen?", options: ["Referenzielle Integrität", "Redundanzfreiheit", "Normalisierung", "Kapselung"], answer: 0, exp: "Die referenzielle Integrität stellt sicher, dass Datensätze nicht gelöscht werden können, solange andere Datensätze (über Fremdschlüssel) auf sie verweisen. Dies verhindert ungültige Beziehungen." },
        { q: "Was versteht man unter dem Begriff 'Redundanz' in einer Datenbank?", options: ["Mehrfaches Vorhandensein derselben Daten im System, was zu Inkonsistenzen führen kann.", "Fehlen von Backups im Speicher.", "Löschen von Datensätzen.", "Die Geschwindigkeit der Abfragen."], answer: 0, exp: "Redundanz bedeutet, dass dieselben Daten mehrfach abgespeichert sind. Normalisierung dient dazu, Redundanzen zu minimieren, um Inkonsistenzen zu verhindern." }
    ];
    for (let i = 0; i < 10; i++) {
        const item = databaseConcepts[Math.floor(Math.random() * databaseConcepts.length)];
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "open-text",
                question: `Prüfungsaufgabe Datenbank-Design (LF 18): ${item.q}`,
                musterloesung: item.options[item.answer],
                explanation: item.exp
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "multiple-choice",
                question: `Prüfungsaufgabe Datenbank-Design (LF 18): ${item.q}`,
                options: item.options,
                correctAnswer: item.answer,
                explanation: item.exp
            });
        }
    }

    // ==========================================
    // BINÄR-, DEZIMAL- & HEXADEZIMAL-UMRECHNUNG (lf3)
    // ==========================================
    for (let i = 0; i < 20; i++) {
        const num = Math.floor(Math.random() * 256); // 0 bis 255
        const binStr = num.toString(2).padStart(8, '0');
        const hexStr = num.toString(16).toUpperCase();
        
        const qType = Math.floor(Math.random() * 6);
        const isOpen = shouldBeOpenText();
        
        let questionText = "";
        let correctAnswersList = [];
        let mLoesung = "";
        let explanationStr = "";
        
        if (qType === 0) {
            // Dezimal zu Binär
            questionText = `Prüfungsaufgabe Zahlensysteme (LF 3): Rechne die Dezimalzahl ${num} in eine 8-Bit-Binärzahl um.`;
            correctAnswersList = [binStr];
            mLoesung = binStr;
            
            let temp = num;
            let steps = [];
            for (let j = 0; j < 8; j++) {
                let quot = Math.floor(temp / 2);
                let rem = temp % 2;
                steps.push(`   ${temp} : 2 = ${quot}, Rest ${rem}`);
                temp = quot;
            }
            explanationStr = `Schritt-für-Schritt-Lösungsweg (Sukzessive Division durch 2):\n` +
                steps.join("\n") + `\n` +
                `Lies die Reste von unten nach oben ab:\n` +
                `Ergebnis: ${binStr}`;
        } else if (qType === 1) {
            // Binär zu Dezimal
            questionText = `Prüfungsaufgabe Zahlensysteme (LF 3): Rechne die Binärzahl ${binStr} in eine Dezimalzahl um.`;
            correctAnswersList = [num.toString()];
            mLoesung = num.toString();
            
            let sumSteps = [];
            let activeStellen = [];
            for (let j = 0; j < 8; j++) {
                let bit = binStr[j];
                let val = Math.pow(2, 7 - j);
                if (bit === '1') {
                    sumSteps.push(`   Stelle ${j+1} (Bit 2^${7 - j}): 1 * ${val} = ${val}`);
                    activeStellen.push(val);
                } else {
                    sumSteps.push(`   Stelle ${j+1} (Bit 2^${7 - j}): 0 * ${val} = 0`);
                }
            }
            explanationStr = `Schritt-für-Schritt-Lösungsweg (Binär zu Dezimal):\n` +
                `Binärzahl: ${binStr}\n` +
                sumSteps.join("\n") + `\n` +
                `Berechnung der Summe aller aktiven Stellenwerte:\n` +
                `   ${activeStellen.join(" + ")} = ${num}`;
        } else if (qType === 2) {
            // Dezimal zu Hexadezimal
            questionText = `Prüfungsaufgabe Zahlensysteme (LF 3): Rechne die Dezimalzahl ${num} in eine Hexadezimalzahl um.`;
            correctAnswersList = [hexStr, "0x" + hexStr];
            mLoesung = hexStr;
            
            let temp = num;
            let steps = [];
            let quot1 = Math.floor(temp / 16);
            let rem1 = temp % 16;
            let rem1Hex = rem1.toString(16).toUpperCase();
            steps.push(`   ${temp} : 16 = ${quot1}, Rest ${rem1} (Hex: ${rem1Hex})`);
            
            let temp2 = quot1;
            let quot2 = Math.floor(temp2 / 16);
            let rem2 = temp2 % 16;
            let rem2Hex = rem2.toString(16).toUpperCase();
            steps.push(`   ${temp2} : 16 = ${quot2}, Rest ${rem2} (Hex: ${rem2Hex})`);
            
            explanationStr = `Schritt-für-Schritt-Lösungsweg (Sukzessive Division durch 16):\n` +
                steps.join("\n") + `\n` +
                `Lies die Reste von unten nach oben ab (Hinweis: Restwerte 10-15 entsprechen A-F):\n` +
                `Ergebnis: ${hexStr}`;
        } else if (qType === 3) {
            // Hexadezimal zu Dezimal
            questionText = `Prüfungsaufgabe Zahlensysteme (LF 3): Rechne die Hexadezimalzahl ${hexStr} in eine Dezimalzahl um.`;
            correctAnswersList = [num.toString()];
            mLoesung = num.toString();
            
            let firstDigit = hexStr[0] || '0';
            let secondDigit = hexStr[1] || '';
            let val1 = parseInt(firstDigit, 16);
            let val2 = secondDigit ? parseInt(secondDigit, 16) : 0;
            
            let steps = [];
            if (secondDigit) {
                steps.push(`   1. Stelle (links, Wertigkeit 16^1): '${firstDigit}' -> Dezimalwert ${val1} * 16 = ${val1 * 16}`);
                steps.push(`   2. Stelle (rechts, Wertigkeit 16^0): '${secondDigit}' -> Dezimalwert ${val2} * 1 = ${val2}`);
                explanationStr = `Schritt-für-Schritt-Lösungsweg (Hexadezimal zu Dezimal):\n` +
                    `Hexadezimalzahl: ${hexStr}\n` +
                    steps.join("\n") + `\n` +
                    `Berechnung der Summe:\n` +
                    `   ${val1 * 16} + ${val2} = ${num}`;
            } else {
                steps.push(`   Einzige Stelle (Wertigkeit 16^0): '${firstDigit}' -> Dezimalwert ${val1} * 1 = ${val1}`);
                explanationStr = `Schritt-für-Schritt-Lösungsweg (Hexadezimal zu Dezimal):\n` +
                    `Hexadezimalzahl: ${hexStr}\n` +
                    steps.join("\n") + `\n` +
                    `Ergebnis: ${num}`;
            }
        } else if (qType === 4) {
            // Binär zu Hexadezimal
            questionText = `Prüfungsaufgabe Zahlensysteme (LF 3): Rechne die Binärzahl ${binStr} in eine Hexadezimalzahl um.`;
            correctAnswersList = [hexStr, "0x" + hexStr];
            mLoesung = hexStr;
            
            let leftNibble = binStr.substring(0, 4);
            let rightNibble = binStr.substring(4, 8);
            let leftVal = parseInt(leftNibble, 2);
            let rightVal = parseInt(rightNibble, 2);
            let leftHex = leftVal.toString(16).toUpperCase();
            let rightHex = rightVal.toString(16).toUpperCase();
            
            explanationStr = `Schritt-für-Schritt-Lösungsweg (Binär zu Hexadezimal):\n` +
                `1. Teile die 8-Bit-Binärzahl in zwei 4-Bit-Blöcke (Nibbles) auf:\n` +
                `   Linker Block: ${leftNibble} | Rechter Block: ${rightNibble}\n` +
                `2. Rechne das linke Nibble in Hexadezimal um:\n` +
                `   ${leftNibble} -> (${leftNibble[0]}*8 + ${leftNibble[1]}*4 + ${leftNibble[2]}*2 + ${leftNibble[3]}*1) = ${leftVal} -> Hex: ${leftHex}\n` +
                `3. Rechne das rechte Nibble in Hexadezimal um:\n` +
                `   ${rightNibble} -> (${rightNibble[0]}*8 + ${rightNibble[1]}*4 + ${rightNibble[2]}*2 + ${rightNibble[3]}*1) = ${rightVal} -> Hex: ${rightHex}\n` +
                `4. Setze die Hexadezimalzeichen zusammen:\n` +
                `   Ergebnis: ${hexStr}`;
        } else {
            // Hexadezimal zu Binär
            questionText = `Prüfungsaufgabe Zahlensysteme (LF 3): Rechne die Hexadezimalzahl ${hexStr} in eine 8-Bit-Binärzahl um.`;
            correctAnswersList = [binStr];
            mLoesung = binStr;
            
            let firstDigit = hexStr[0] || '0';
            let secondDigit = hexStr[1] || '';
            let val1 = parseInt(firstDigit, 16);
            let val2 = secondDigit ? parseInt(secondDigit, 16) : 0;
            let leftBin = val1.toString(2).padStart(4, '0');
            let rightBin = secondDigit ? val2.toString(2).padStart(4, '0') : '';
            
            explanationStr = `Schritt-für-Schritt-Lösungsweg (Hexadezimal zu Binär):\n` +
                `1. Zerlege die Hexadezimalzahl in einzelne Ziffern:\n` +
                (secondDigit ? `   Erste Ziffer: '${firstDigit}', Zweite Ziffer: '${secondDigit}'\n` : `   Einzige Ziffer: '${firstDigit}'\n`) +
                `2. Rechne jede Ziffer einzeln in eine 4-Bit-Binärzahl um:\n` +
                `   - Ziffer '${firstDigit}' (Wert ${val1}) -> 4-Bit-Binär: ${leftBin}\n` +
                (secondDigit ? `   - Ziffer '${secondDigit}' (Wert ${val2}) -> 4-Bit-Binär: ${rightBin}\n` : '') +
                `3. Setze die 4-Bit-Blöcke nacheinander zusammen:\n` +
                `   Ergebnis: ${binStr}`;
        }
        
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                type: "open-text",
                question: questionText,
                musterloesung: `Ergebnis: ${mLoesung}`,
                explanation: explanationStr
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                type: "text-input",
                question: questionText + " (Gib nur das Ergebnis ohne Präfixe ein)",
                correctAnswers: correctAnswersList,
                explanation: explanationStr
            });
        }
    }

    // ==========================================
    // STROM- & ENERGIEKOSTEN-BERECHNUNG (lf2)
    // ==========================================
    for (let i = 0; i < 10; i++) {
        const powerWatts = (Math.floor(Math.random() * 9) + 2) * 50; // 100 bis 500 Watt
        const days = [30, 90, 365][Math.floor(Math.random() * 3)];
        const centPerKwh = Math.floor(Math.random() * 16) + 30; // 30 bis 45 Cent
        const priceEur = centPerKwh / 100;
        
        const kwh = (powerWatts * 24 * days) / 1000;
        const totalCosts = Math.round((kwh * priceEur) * 100) / 100; // Gerundet auf 2 Dezimalstellen
        
        const isOpen = shouldBeOpenText();
        const qText = `Prüfungsaufgabe Energieeffizienz (LF 2): Ein Server hat eine durchschnittliche Leistungsaufnahme von ${powerWatts} Watt und läuft rund um die Uhr (24/7) für insgesamt ${days} Tage. Der Strompreis beträgt ${centPerKwh} Cent pro Kilowattstunde (kWh).\nBerechne die gesamten Stromkosten für diesen Zeitraum in EUR.`;
        const explanationStr = `Herleitung:\n` +
            `1. Gesamtbetriebsstunden = 24 Std/Tag * ${days} Tage = ${24 * days} Stunden.\n` +
            `2. Energieverbrauch in Wh = ${powerWatts} Watt * ${24 * days} Std = ${powerWatts * 24 * days} Wh.\n` +
            `3. Energieverbrauch in kWh = ${powerWatts * 24 * days} / 1000 = ${kwh} kWh.\n` +
            `4. Stromkosten = ${kwh} kWh * ${priceEur.toFixed(2)} EUR = ${totalCosts.toFixed(2)} EUR.`;

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                type: "open-text",
                question: qText,
                musterloesung: `Ergebnis: ${totalCosts.toFixed(2)} EUR.\n\n${explanationStr}`,
                explanation: explanationStr
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                type: "text-input",
                question: qText + " (Gib nur die Zahl mit Punkt als Dezimaltrennzeichen ein, z. B. '120.45')",
                correctAnswers: [totalCosts.toString(), totalCosts.toFixed(2)],
                explanation: explanationStr
            });
        }
    }

    // ==========================================
    // SPEICHERBEDARFS-BERECHNUNG (DATEIVOLUMEN) (lf2)
    // ==========================================
    for (let i = 0; i < 10; i++) {
        const mbits = Math.floor(Math.random() * 9) + 2; // 2 bis 10 Mbit/s
        const hours = Math.floor(Math.random() * 12) + 2; // 2 bis 13 Stunden
        
        const totalBits = mbits * 1000000 * 3600 * hours;
        const totalBytes = totalBits / 8;
        const totalGB = Math.round((totalBytes / 1000000000) * 100) / 100; // SI-Definition: 1 GB = 10^9 Bytes
        
        const isOpen = shouldBeOpenText();
        const qText = `Prüfungsaufgabe Speicherplatz (LF 2): Eine IP-Überwachungskamera zeichnet Videodaten mit einer kontinuierlichen Bitrate von ${mbits} Mbit/s auf. Die Aufnahme läuft durchgehend für ${hours} Stunden.\nBerechne den benötigten Speicherplatz in Gigabyte (GB) unter der Annahme, dass 1 GB = 1.000.000.000 Bytes (Dezimalpräfix) entspricht.`;
        const explanationStr = `Herleitung:\n` +
            `1. Datenmenge pro Sekunde = ${mbits} Mbit = ${mbits * 1000000} Bits.\n` +
            `2. Gesamtsekunden = ${hours} Stunden * 3600 Sek = ${hours * 3600} Sekunden.\n` +
            `3. Gesamtbits = ${mbits * 1000000} Bits/s * ${hours * 3600} s = ${totalBits} Bits.\n` +
            `4. Gesamtbytes = ${totalBits} / 8 = ${totalBytes} Bytes.\n` +
            `5. Speicherplatz in GB = ${totalBytes} / 1.000.000.000 = ${totalGB} GB.`;

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                type: "open-text",
                question: qText,
                musterloesung: `Ergebnis: ${totalGB} GB.\n\n${explanationStr}`,
                explanation: explanationStr
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                type: "text-input",
                question: qText + " (Gib nur die Zahl mit Punkt als Dezimaltrennzeichen ein)",
                correctAnswers: [totalGB.toString(), totalGB.toFixed(2)],
                explanation: explanationStr
            });
        }
    }

    // ==========================================
    // DATENÜBERTRAGUNGSZEIT-BERECHNUNG (lf3)
    // ==========================================
    for (let i = 0; i < 10; i++) {
        const fileGb = [5, 10, 20, 50, 100][Math.floor(Math.random() * 5)]; // Dateigröße
        const speedMbit = [50, 100, 250, 500, 1000][Math.floor(Math.random() * 5)]; // Leitungsgeschwindigkeit
        const overheadPercent = [10, 20][Math.floor(Math.random() * 2)]; // 10% oder 20% Protokoll-Overhead
        
        const fileBits = fileGb * 1000 * 1000 * 1000 * 8;
        const totalBitsWithOverhead = fileBits * (1 + overheadPercent / 100);
        const speedBits = speedMbit * 1000000;
        const seconds = Math.round((totalBitsWithOverhead / speedBits) * 10) / 10; // Gerundet auf 1 Dezimalstelle
        
        const isOpen = shouldBeOpenText();
        const qText = `Prüfungsaufgabe Netzwerk (LF 3): Eine Backup-Datei mit der Größe von ${fileGb} GB soll über ein Netzwerk mit einer Bruttobandbreite von ${speedMbit} Mbit/s übertragen werden. Durch die Protokolle entsteht ein Overhead von ${overheadPercent} %.\nBerechne die Übertragungszeit in Sekunden (1 GB = 10^9 Bytes, 1 Mbit = 10^6 Bits).`;
        const explanationStr = `Herleitung:\n` +
            `1. Dateigröße in Bits = ${fileGb} * 10^9 Bytes * 8 Bits/Byte = ${fileBits} Bits.\n` +
            `2. Dateigröße inkl. ${overheadPercent}% Overhead = ${fileBits} * ${(1 + overheadPercent/100)} = ${totalBitsWithOverhead} Bits.\n` +
            `3. Übertragungsgeschwindigkeit in Bits/s = ${speedMbit} * 10^6 Bits/s = ${speedBits} Bits/s.\n` +
            `4. Übertragungszeit in Sek = ${totalBitsWithOverhead} Bits / ${speedBits} Bits/s = ${seconds} Sekunden.`;

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                type: "open-text",
                question: qText,
                musterloesung: `Ergebnis: ${seconds} Sekunden.\n\n${explanationStr}`,
                explanation: explanationStr
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                type: "text-input",
                question: qText + " (Gib nur die Zahl mit Punkt als Dezimaltrennzeichen ein, z. B. '160.5')",
                correctAnswers: [seconds.toString(), seconds.toFixed(1)],
                explanation: explanationStr
            });
        }
    }

    // ==========================================
    // ENGLISCHE FACHTEXT-AUFGABEN (TEXT COMPREHENSION) (lf6)
    // ==========================================
    const englishTexts = [
        {
            text: "LTO tape technology is expected to remain significantly less expensive than hard disk storage for years to come. An Economic Validation Study found that an LTO-8 solution provides a total cost of ownership that is 86% lower than an all-disk solution over a 10-year period.",
            q: "Welchen Hauptvorteil von LTO-Magnetbändern nennt das ESG-Institut in Bezug auf Festplatten?",
            options: [
                "LTO-Bänder haben über einen Zeitraum von 10 Jahren um 86 % geringere Gesamtbetriebskosten (TCO).",
                "LTO-Bänder sind 86 % schneller als Festplatten.",
                "LTO-Bänder verbrauchen 86 % weniger Strom als SSDs.",
                "LTO-Bänder halten 86 % länger."
            ],
            answer: 0,
            exp: "Der englische Text besagt, dass eine LTO-8-Lösung Gesamtkosten (Total Cost of Ownership, TCO) hat, die um 86 % niedriger sind als eine reine Disk-Lösung ('TCO that is 86% lower over a 10-year period')."
        },
        {
            text: "LTFS (Linear Tape File System) is a software utility that allows LTO tape drives to connect and operate just like a large hard disk. Users can drag and drop files directly from the tape onto the desktop or vice-versa.",
            q: "Was ermöglicht das Linear Tape File System (LTFS) laut Text bei der Benutzung von LTO-Bändern?",
            options: [
                "Es lässt das Magnetband wie eine normale Festplatte erscheinen, sodass Dateien per Drag-and-Drop kopiert werden können.",
                "Es verschlüsselt die Daten automatisch mit AES-256.",
                "Es komprimiert Videodateien verlustfrei im Hintergrund.",
                "Es verbindet das Bandlaufwerk direkt mit Cloud-Systemen wie OneDrive."
            ],
            answer: 0,
            exp: "Der Text beschreibt, dass LTFS es ermöglicht, LTO-Bänder wie eine normale Festplatte zu betreiben ('operate just like a large hard disk') und Dateien direkt per Drag-and-Drop zu kopieren ('drag and drop files directly from the tape onto the desktop or vice-versa')."
        },
        {
            text: "OpenStack is an open-source Infrastructure as a Service (IaaS) cloud platform. It offers the ability to port workloads in and out of the cloud with no vendor lock-in. Customers have flexible options for CPU, RAM, Storage, and Networking.",
            q: "Welche Eigenschaft von OpenStack sorgt dafür, dass Kunden ihre Anwendungen ohne Abhängigkeit von einem bestimmten Anbieter verschieben können?",
            options: [
                "Kein 'Vendor Lock-in' (Anbieter-Knebelung) durch einfache Workload-Portierung.",
                "Das System ist vollkommen kostenlos (Freeware).",
                "Es läuft ausschließlich in deutschen Rechenzentren.",
                "Es handelt sich um eine Software-as-a-Service-Lösung."
            ],
            answer: 0,
            exp: "Der Text hebt hervor, dass die Workloads flexibel rein und raus portiert werden können ('ability to port workloads in and out') ohne Vendor Lock-in ('with no vendor lock-in')."
        },
        {
            text: "The service provider guarantees a monthly service availability of 99.9%. If the uptime falls below this metric, the customer is eligible to receive service credits as financial compensation.",
            q: "Welche Konsequenz wird im SLA vereinbart, falls die monatliche Verfügbarkeit des Services unter 99,9 % fällt?",
            options: [
                "Der Kunde erhält Service-Gutschriften (Service Credits) als finanzielle Entschädigung.",
                "Der Vertrag wird sofort und ohne Kündigungsfrist beendet.",
                "Der Provider muss die gesamte Hardware austauschen.",
                "Es gibt keine Konsequenzen, da 99,9 % nur ein Richtwert ist."
            ],
            answer: 0,
            exp: "Der Text besagt: Wenn die Uptime unter den garantierten Wert fällt, erhält der Kunde Service-Gutschriften ('customer is eligible to receive service credits as financial compensation')."
        }
    ];
    for (let i = 0; i < 10; i++) {
        const item = englishTexts[Math.floor(Math.random() * englishTexts.length)];
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                type: "open-text",
                question: `Prüfungsaufgabe Englisch (Comprehension - LF 6):\n\nFachtext:\n"${item.text}"\n\nFrage dazu:\n${item.q}`,
                musterloesung: item.options[item.answer],
                explanation: item.exp
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                type: "multiple-choice",
                question: `Prüfungsaufgabe Englisch (Comprehension - LF 6):\n\nFachtext:\n"${item.text}"\n\nFrage dazu:\n${item.q}`,
                options: item.options,
                correctAnswer: item.answer,
                explanation: item.exp
            });
        }
    }


    // ============================================================================
    // DYNAMISCHE GENERATOREN: IT-VERTRAGSRECHT, PROZESSE & WISO (Tag 13 & 14)
    // ============================================================================

    // 1. IT-Vertragstypen Generator (Kauf, Dienst, Werk, Werklieferung, SaaS/Miete)
    const contractScenarios = [
        {
            desc: "Ein IT-Berater führt eine dreitägige Schulung für die Mitarbeiter eines Kunden zum Thema 'IT-Sicherheitsbewusstsein' auf Stundensatzbasis durch. Ein messbarer Lernerfolg wird vertraglich nicht garantiert.",
            type: "Dienstvertrag (§ 611 BGB)",
            reason: "Geschuldet ist das reine fachgerechte Tätigwerden / Unterrichten, nicht ein bestimmter garantierter Prüfungserfolg."
        },
        {
            desc: "Ein Systemhaus entwickelt für eine Spedition ein individuelles Tourenplanungs-Tool nach einem detaillierten Pflichtenheft mit garantierter Funktionsfähigkeit und vereinbarter Gesamtabnahme.",
            type: "Werkvertrag (§ 631 BGB)",
            reason: "Geschuldet ist die Herbeiführung eines konkreten, mangelfreien Erfolgs (fertige Software) inklusive förmlicher Abnahme."
        },
        {
            desc: "Ein Büro kauft 25 Standard-Office-Lizenzen (OEM-Pakete) auf DVD im Fachhandel und bezahlt die Ware sofort.",
            type: "Kaufvertrag (§ 433 BGB)",
            reason: "Standardsoftware auf Datenträgern wird rechtlich wie eine bewegliche Sache behandelt (Kaufvertrag mit dauerhafter Übereignung)."
        },
        {
            desc: "Ein Unternehmen mietet für 24 Monate virtuelle Server-Kapazitäten und Speicherplatz in der Cloud gegen eine monatliche Nutzungsgebühr inklusive 99,9 % Verfügbarkeits-SLA.",
            type: "Mietvertrag (§ 535 BGB) / SaaS-Vertrag",
            reason: "Geschuldet ist die zeitweise Gebrauchsüberlassung von IT-Ressourcen im vertragsgemäßen Zustand während der Mietdauer."
        },
        {
            desc: "Ein Hardware-Hersteller baut aus kundenspezifisch ausgewählten Komponenten (Gehäuse, CPU, Spezialgrafikkarten) 5 Render-Workstations und liefert diese an eine Filmproduktionsfirma.",
            type: "Werklieferungsvertrag (§ 650 BGB)",
            reason: "Herstellung und Lieferung einer beweglichen Sache aus eigenem Material; unterliegt weitgehend den Vorschriften des Kaufvertragsrechts."
        }
    ];

    for (let i = 0; i < 15; i++) {
        const item = contractScenarios[Math.floor(Math.random() * contractScenarios.length)];
        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf1",
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsfall IT-Vertragsrecht (LF 1 / WiSo):\n\nSachverhalt:\n"${item.desc}"\n\nAufgabe:\n1. Benennen Sie den zutreffenden Vertragstyp nach BGB.\n2. Begründen Sie Ihre Entscheidung rechtlich anhand der geschuldeten Hauptleistung.`,
                musterloesung: `1. Vertragstyp: ${item.type}\n2. Begründung: ${item.reason}`,
                explanation: `Lernkarte IT-Vertragstypen: Dienstvertrag = Bemühen/Tätigkeit (§ 611 BGB); Werkvertrag = Konkreter Erfolg + Abnahme (§ 631 BGB); Kaufvertrag = Dauerhafte Übereignung (§ 433 BGB); Werklieferung = Herstellung beweglicher Sachen (§ 650 BGB).`
            });
        } else {
            const allTypes = ["Dienstvertrag (§ 611 BGB)", "Werkvertrag (§ 631 BGB)", "Kaufvertrag (§ 433 BGB)", "Mietvertrag (§ 535 BGB) / SaaS-Vertrag", "Werklieferungsvertrag (§ 650 BGB)"];
            const wrongTypes = allTypes.filter(t => t !== item.type);
            const shuffledOptions = [item.type, ...wrongTypes.slice(0, 3)].sort(() => Math.random() - 0.5);
            const correctIdx = shuffledOptions.indexOf(item.type);

            dynamicQuestions.push({
                id: currentId++,
                theme: "lf1",
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Prüfungsaufgabe Vertragsrecht (LF 1 / WiSo):\n\nSachverhalt:\n"${item.desc}"\n\nUm welchen Vertragstyp handelt es sich hierbei?`,
                options: shuffledOptions,
                correctAnswer: correctIdx,
                explanation: item.reason
            });
        }
    }

    // 2. Dynamischer 50:50 (Wahr/Falsch) WiSo & Prozessfragen Generator
    const trueFalseItems = [
        {
            q: "Wahr oder Falsch: Die förmliche Abnahme (§ 640 BGB) ist ein wesentliches Merkmal des Werkvertrags, welches die Fälligkeit des Werklohns auslöst und die Beweislast für Mängel auf den Besteller überträgt.",
            isTrue: true,
            exp: "Richtig! Die Abnahme billigt das Werk als im Wesentlichen vertragsgemäß, löst die Fälligkeit der Vergütung aus (§ 641 BGB) und kehrt die Beweislast um."
        },
        {
            q: "Wahr oder Falsch: Ein 16-jähriger Auszubildender kann ohne Zustimmung seiner Eltern einen 2-jährigen Handyvertrag mit monatlicher Grundgebühr abschließen, wenn er die erste Monatsrate bar bezahlt.",
            isTrue: false,
            exp: "Falsch! Dauerschuldverhältnisse und Raten-/Kreditverträge fallen NIEMALS unter den Taschengeldparagraphen (§ 110 BGB). Sie sind schwebend unwirksam bis zur Genehmigung der Eltern."
        },
        {
            q: "Wahr oder Falsch: Beim beiderseitigen Handelskauf (B2B) führt das Unterlassen der unverzüglichen Mängelrüge (§ 377 HGB) dazu, dass die Ware als genehmigt gilt und gesetzliche Gewährleistungsansprüche für offene Mängel erlöschen.",
            isTrue: true,
            exp: "Richtig! Nach § 377 Abs. 2 HGB gilt die Ware bei unterlassener unverzüglicher Rüge als genehmigt."
        },
        {
            q: "Wahr oder Falsch: Supportprozesse (Unterstützungsprozesse) wie Buchhaltung oder interne IT-Administration haben immer direkten Kontakt zum externen Kunden und erzeugen den Hauptumsatz.",
            isTrue: false,
            exp: "Falsch! Kernprozesse erzeugen den direkten Kundennutzen und Umsatz. Supportprozesse unterstützen die Kernprozesse intern und haben meist interne Kunden."
        },
        {
            q: "Wahr oder Falsch: Bei der Drei-Wege-Rechnungsprüfung im Einkauf werden die Bestellung, der Wareneingangsschein (Lieferschein) und die Eingangsrechnung vor der Zahlungsfreigabe miteinander abgeglichen.",
            isTrue: true,
            exp: "Richtig! Der Drei-Wege-Abgleich (Three-Way Match) stellt sicher, dass nur tatsächlich bestellte und mängelfrei gelieferte Mengen zum vereinbarten Preis bezahlt werden."
        },
        {
            q: "Wahr oder Falsch: Die gesetzliche Verzugszinspauschale bei Entgeltforderungen zwischen Unternehmen (B2B) nach § 288 Abs. 5 BGB beträgt 40,00 €.",
            isTrue: true,
            exp: "Richtig! Bei B2B-Zahlungsverzug hat der Gläubiger nach § 288 Abs. 5 BGB Anspruch auf eine gesetzliche Schadenspauschale von 40,00 € zusätzlich zu den Verzugszinsen (9 Prozentpunkte über Basiszinssatz)."
        },
        {
            q: "Wahr oder Falsch: Ein unverbindliches Online-Shop-Angebot ('solange der Vorrat reicht') stellt eine rechtlich bindende Willenserklärung dar.",
            isTrue: false,
            exp: "Falsch! Es handelt sich um eine Aufforderung zur Abgabe eines Angebots (invitatio ad offerendum) mit Freizeichnungsklausel."
        },
        {
            q: "Wahr oder Falsch: Nach § 477 BGB gilt beim Verbrauchsgüterkauf eine 12-monatige gesetzliche Beweislastumkehr zugunsten des Verbrauchers.",
            isTrue: true,
            exp: "Richtig! Zeigt sich ein Mangel innerhalb von 12 Monaten ab Übergabe, wird vermutet, dass er bereits beim Kauf vorlag."
        }
    ];

    for (let i = 0; i < 20; i++) {
        const tf = trueFalseItems[Math.floor(Math.random() * trueFalseItems.length)];
        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf1",
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Rechtskunde / BWL (IHK BaWü):\nBeurteilen und begründen Sie die folgende Aussage rechtlich/fachlich fundiert:\n"${tf.q.replace(/^Wahr oder Falsch:\s*/, '')}"`,
                musterloesung: `Bewertung: ${tf.isTrue ? 'Die Aussage ist WAHR / ZUTREFFEND.' : 'Die Aussage ist FALSCH / UNZUTREFFEND.'}\nBegründung: ${tf.exp}`,
                explanation: tf.exp
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf1",
                isBawueFocus: true,
                type: "true-false",
                question: tf.q,
                options: [
                    "Wahr (Richtig)",
                    "Falsch"
                ],
                correctAnswer: tf.isTrue ? 0 : 1,
                explanation: tf.exp
            });
        }
    }

    
    // ==========================================
    // DIAGRAMME & MODELLIERUNG DYNAMISCHE GENERATOREN (AP1 SPEZIAL)
    // ==========================================

    // D.1 Dynamische ERD-Kardinalitäten & Fremdschlüssel-Generierung
    const erdScenarios = [
        { entA: "Kunde", entB: "Bestellung", card: "1:n", rel: "erteilt", fkTable: "Bestellung", fkField: "FK_KundenNr", reason: "Ein Kunde kann beliebig viele Bestellungen aufgeben, jede Bestellung gehört zu genau einem Kunden." },
        { entA: "Abteilung", entB: "Mitarbeiter", card: "1:n", rel: "beschäftigt", fkTable: "Mitarbeiter", fkField: "FK_AbteilungsID", reason: "Eine Abteilung hat viele Mitarbeiter, jeder Mitarbeiter ist genau einer Abteilung zugeordnet." },
        { entA: "Projekt", entB: "Entwickler", card: "n:m", rel: "arbeitet an", fkTable: "Projekt_Entwickler (Zwischentabelle)", fkField: "FK_ProjektID und FK_EntwicklerID", reason: "Ein Entwickler arbeitet an mehreren Projekten, ein Projekt hat mehrere Entwickler (erfordert Zwischentabelle)." },
        { entA: "Rechnung", entB: "Rechnungsposition", card: "1:n", rel: "besteht aus", fkTable: "Rechnungsposition", fkField: "FK_RechnungsNr", reason: "Eine Rechnung hat 1..n Positionen, jede Position gehört zu exakt einer Rechnung." },
        { entA: "Student", entB: "Vorlesung", card: "n:m", rel: "besucht", fkTable: "Student_Vorlesung (Zwischentabelle)", fkField: "FK_MatrikelNr und FK_VorlesungsID", reason: "Mehrere Studenten hören mehrere Vorlesungen (n:m Beziehung)." },
        { entA: "Mitarbeiter", entB: "Dienstwagen", card: "1:1", rel: "besitzt fest", fkTable: "Mitarbeiter oder Dienstwagen", fkField: "FK_DienstwagenID / FK_MitarbeiterID", reason: "Jedem Mitarbeiter ist höchstens ein Dienstwagen fest zugeordnet und umgekehrt." },
        { entA: "Server", entB: "Festplatte", card: "1:n", rel: "enthält", fkTable: "Festplatte", fkField: "FK_ServerID", reason: "Ein Server besitzt mehrere Festplatten, eine Festplatte ist fest in einem Server verbaut." },
        { entA: "SoftwareLizenz", entB: "ArbeitsplatzPC", card: "n:m", rel: "ist installiert auf", fkTable: "Lizenz_PC (Zwischentabelle)", fkField: "FK_LizenzKey und FK_PC_InventarNr", reason: "Volumenlizenzen können auf mehreren PCs installiert sein, ein PC hat mehrere Lizenzen." }
    ];

    for (let i = 0; i < 25; i++) {
        const item = erdScenarios[Math.floor(Math.random() * erdScenarios.length)];
        const isFkQuestion = Math.random() < 0.5;
        const isOpen = shouldBeOpenText();

        const erdVisualSvg = VisualDiagrams.getRelationalErdSvg(item.entA, item.entB, item.rel, item.card, item.fkTable, item.fkField, item.reason);

        if (isFkQuestion) {
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "diagrams",
                    topic: "ERD Fremdschlüssel-Modellierung",
                    isDiagram: true,
                    isBawueFocus: true,
                    diagramType: "ERD & Tabellenschema",
                    type: "open-text",
                    question: `Prüfungsaufgabe ERD & Tabellenschema: Im Datenmodell eines IT-Systems besteht zwischen **${item.entA}** und **${item.entB}** die Beziehung **'${item.rel}'** (${item.card}).\n\nIn welcher Tabelle muss der Fremdschlüssel (Foreign Key) angelegt werden und wie lautet die datenbanktheoretische Begründung?`,
                    solutionDiagramSvg: erdVisualSvg,
                    solutionDiagramCaption: `Relationales Tabellenschema mit Fremdschlüssel für: ${item.entA} ➔ ${item.entB} (${item.card})`,
                    musterloesung: `Fremdschlüssel-Platzierung: In der Tabelle '${item.fkTable}'.\n\nBegründung: ${item.reason}`,
                    explanation: `Bei 1:n Beziehungen wandert der PK der 1-Seite in die Tabelle der n-Seite. Bei n:m Beziehungen entsteht eine separate Verknüpfungstabelle.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "diagrams",
                    topic: "ERD Fremdschlüssel-Modellierung",
                    isDiagram: true,
                    isBawueFocus: true,
                    diagramType: "ERD & Tabellenschema",
                    diagramSvg: erdVisualSvg,
                    diagramTitle: `Datenmodell: ${item.entA} & ${item.entB}`,
                    diagramCaption: `ERD & Relationales Datenbankschema (${item.card})`,
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe ERD & Relationenmodell: Gegeben ist die Beziehung '${item.entA}' ${item.rel} '${item.entB}' mit Kardinalität ${item.card}. Wo muss der Fremdschlüssel im Tabellenschema platziert werden?`,
                    options: [
                        `In der Tabelle '${item.fkTable}' (${item.fkField})`,
                        `Ausschließlich in der Tabelle '${item.entA}'`,
                        `In einer temporären Logdatei`,
                        `Fremdschlüssel sind bei dieser Beziehung nicht zulässig`
                    ],
                    correctAnswer: 0,
                    explanation: `Regel: ${item.reason}`
                });
            }
        } else {
            // Cardinality question
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "diagrams",
                    topic: "ERD Kardinalitäten bestimmen",
                    isDiagram: true,
                    isBawueFocus: true,
                    diagramType: "ERD",
                    type: "open-text",
                    question: `Prüfungsaufgabe ERD-Modellierung: Bestimme die logische Kardinalität (1:1, 1:n oder n:m) für folgende Fachanforderung:\n"${item.entA} ${item.rel} ${item.entB}".\n\nBegründe deine Entscheidung aus Sicht des Datenbankentwurfs.`,
                    solutionDiagramSvg: erdVisualSvg,
                    solutionDiagramCaption: `Visuelles ER-Datenmodell: ${item.entA} ➔ ${item.entB} (${item.card})`,
                    musterloesung: `Kardinalität: ${item.card}\n\nBegründung: ${item.reason}`,
                    explanation: `Prüfe immer beide Leserichtungen: Wie viele ${item.entB} hat ein ${item.entA} (max)? Und wie viele ${item.entA} gehören zu einem ${item.entB} (max)?`
                });
            } else {
                const optList = ["1:n", "n:m", "1:1", "m:1 (bzw. n:1)"];
                const correctIdx = optList.indexOf(item.card) !== -1 ? optList.indexOf(item.card) : 0;
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "diagrams",
                    topic: "ERD Kardinalitäten",
                    isDiagram: true,
                    isBawueFocus: true,
                    diagramType: "ERD",
                    diagramSvg: erdVisualSvg,
                    diagramTitle: `Datenmodell: ${item.entA} & ${item.entB}`,
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe ERD: Welche Kardinalität beschreibt die Beziehung zwischen '${item.entA}' und '${item.entB}' (${item.reason})?`,
                    options: [
                        `${item.card} (Erklärung: ${item.reason})`,
                        item.card === "1:n" ? "n:m (Zwischentabelle)" : "1:n (Fremdschlüssel)",
                        item.card === "1:1" ? "n:m (Mehrfachbezug)" : "1:1 (Identitätsbezug)",
                        "Keine relationale Beziehung möglich"
                    ],
                    correctAnswer: 0,
                    explanation: item.reason
                });
            }
        }
    }

    // D.2 Dynamische Netzplantechnik-Aufgaben (Vorwärts-, Rückwärtsrechnung & Puffer)
    for (let i = 0; i < 20; i++) {
        const dA = Math.floor(Math.random() * 4) + 2; // 2..5 Tage
        const dB = Math.floor(Math.random() * 3) + 2; // 2..4 Tage
        const dC = Math.floor(Math.random() * 4) + 3; // 3..6 Tage
        const dD = Math.floor(Math.random() * 3) + 2; // 2..4 Tage

        // Structure: A (start) -> B and C (parallel) -> D (join end)
        const fazA = 0;
        const fezA = fazA + dA;
        
        const fazB = fezA;
        const fezB = fazB + dB;
        
        const fazC = fezA;
        const fezC = fazC + dC;

        const fazD = Math.max(fezB, fezC);
        const fezD = fazD + dD;

        // Backward calculation
        const sezD = fezD;
        const sazD = sezD - dD;

        const sezB = sazD;
        const sazB = sezB - dB;
        const gpB = sazB - fazB;

        const sezC = sazD;
        const sazC = sezC - dC;
        const gpC = sazC - fazC;

        const criticalBranch = (fezC >= fezB) ? "A ➔ C ➔ D" : "A ➔ B ➔ D";
        const criticalBranchText = (fezC >= fezB) 
            ? `Der kritische Pfad verläuft über Vorgang C (Dauer ${dC} Tage), da dieser länger dauert als Vorgang B (Dauer ${dB} Tage). Kritischer Pfad: A ➔ C ➔ D.`
            : `Der kritische Pfad verläuft über Vorgang B (Dauer ${dB} Tage), da dieser länger dauert als Vorgang C (Dauer ${dC} Tage). Kritischer Pfad: A ➔ B ➔ D.`;

        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: "Netzplantechnik Berechnung",
                isDiagram: true,
                isBawueFocus: true,
                diagramType: "Netzplantechnik",
                type: "open-text",
                solutionDiagramSvg: VisualDiagrams.getNetzplanDiagramSvg(),
                solutionDiagramCaption: "Visuelle Musterlösung: DIN 69900 Netzplan mit Kritischem Pfad",
                code: `Vorgänge:\n- Vorgang A (Start): Dauer = ${dA} Tage\n- Vorgang B (Vorgänger A): Dauer = ${dB} Tage\n- Vorgang C (Vorgänger A): Dauer = ${dC} Tage\n- Vorgang D (Vorgänger B und C): Dauer = ${dD} Tage (Projektende)`,
                question: `Prüfungsaufgabe Netzplantechnik: Gegeben ist ein IT-Projekt mit den 4 oben aufgeführten Vorgängen.\n\nAufgabe:\n1. Berechne den Frühesten Anfangs- und Endzeitpunkt (FAZ, FEZ) für alle Vorgänge.\n2. Berechne die Gesamtdauer des Projekts.\n3. Bestimme den Gesamtpuffer (GP) für Vorgang B und Vorgang C.\n4. Welcher Pfad bildet den Kritischen Pfad?`,
                musterloesung: `1. Vorwärtsrechnung:\n- Vorgang A: FAZ = ${fazA}, FEZ = ${fezA}\n- Vorgang B: FAZ = ${fazB}, FEZ = ${fezB}\n- Vorgang C: FAZ = ${fazC}, FEZ = ${fezC}\n- Vorgang D: FAZ = max(${fezB}, ${fezC}) = ${fazD}, FEZ = ${fezD}\n\n2. Gesamtlaufzeit des Projekts: ${fezD} Tage.\n\n3. Gesamtpuffer (GP):\n- Vorgang B: GP = SAZ - FAZ = ${sazB} - ${fazB} = ${gpB} Tag(e)\n- Vorgang C: GP = SAZ - FAZ = ${sazC} - ${fazC} = ${gpC} Tag(e)\n\n4. Kritischer Pfad: ${criticalBranch} (Gesamtpuffer = 0).`,
                explanation: `Vorwärtsrechnung ermittelt das Maximum der Vorgänger-FEZs. Der Pfad mit Gesamtpuffer = 0 ist der kritische Pfad.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: "Netzplantechnik Gesamtdauer & Kritischer Pfad",
                isDiagram: true,
                isBawueFocus: true,
                diagramType: "Netzplantechnik",
                diagramSvg: VisualDiagrams.getNetzplanDiagramSvg(),
                diagramTitle: "Projektnetzplan (DIN 69900)",
                diagramCaption: "Netzplan mit 7-Felder-Knoten und kritischem Pfad",
                type: "multiple-choice",
                code: `Vorgänge:\n- A: Dauer = ${dA} Tage (Start)\n- B: Dauer = ${dB} Tage (nach A)\n- C: Dauer = ${dC} Tage (nach A)\n- D: Dauer = ${dD} Tage (nach B und C)`,
                question: `Prüfungsaufgabe Netzplantechnik: Wie lange dauert das gesamte Projekt und welcher Pfad ist der Kritische Pfad?`,
                options: [
                    `Gesamtdauer = ${fezD} Tage | Kritischer Pfad = ${criticalBranch}`,
                    `Gesamtdauer = ${dA + dB + dC + dD} Tage (einfache Summe aller Vorgänge)`,
                    `Gesamtdauer = ${fezA + fazD} Tage | Kritischer Pfad = A ➔ D`,
                    `Gesamtdauer = ${fezA + Math.min(fezB, fezC) + dD} Tage`
                ],
                correctAnswer: 0,
                explanation: `Gesamtdauer: ${fezA} (A) + max(${dB}, ${dC}) (längerer paralleler Zweig) + ${dD} (D) = ${fezD} Tage. ${criticalBranchText}`
            });
        }
    }

    // D.3 Dynamische UML Klassendiagramm- & Use-Case-Generatoren
    const umlPatterns = [
        { title: "UML Use-Case: <<include>> vs <<extend>>", q: "Im Use-Case-Diagramm eines Geldautomaten: Beim Use-Case 'Geld abheben' wird zwingend 'PIN prüfen' aufgerufen. Welche Beziehung liegt vor?", optA: "<<include>> mit Pfeil auf 'PIN prüfen'", optB: "<<extend>> mit Pfeil auf 'Geld abheben'", optC: "Generalisierung", optD: "Komposition", correct: 0, exp: "Zwingend erforderlich = <<include>>. Pfeil zeigt auf den aufgerufenen Use-Case." },
        { title: "UML Klassendiagramm: Komposition", q: "In einem Ticketsystem enthält eine Klasse 'Ticket' mehrere Objekte der Klasse 'TicketHistorienEintrag'. Wird ein Ticket gelöscht, müssen alle Historieneinträge ebenfalls unwiderruflich gelöscht werden. Welche Beziehung liegt vor?", optA: "Komposition (ausgefüllte schwarze Raute an 'Ticket')", optB: "Aggregation (weiße Raute)", optC: "Generalisierung (Vererbung)", optD: "Realisierung (Interface)", correct: 0, exp: "Existenzabhängigkeit ('Teil stirbt mit dem Ganzen') = Komposition mit schwarzer Raute an der Besitzerklasse." },
        { title: "UML Klassendiagramm: Aggregation", q: "In einer Schulungssoftware: Die Klasse 'Kurs' enthält mehrere 'Teilnehmer'. Wird ein Kurs beendet/gelöscht, bleiben die Teilnehmer weiterhin im System gespeichert. Welche Beziehung liegt vor?", optA: "Aggregation (leere weiße Raute an 'Kurs')", optB: "Komposition (schwarze Raute)", optC: "Generalisierung", optD: "Assoziation 1:1", correct: 0, exp: "Schwache Bindung ('Hat-ein' ohne Existenzvernichtung) = Aggregation mit weißer Raute." },
        { title: "BPMN 2.0: Exklusives vs Paralleles Gateway", q: "In einem BPMN-Prozess sollen nach der Prüfung 'Zahlungsmethode' entweder 'Kreditkartenzahlung' ODER 'Rechnungskauf' durchlaufen werden. Welches Symbol wird verwendet?", optA: "Exklusives Gateway (Raute mit 'X')", optB: "Paralleles Gateway (Raute mit '+')", optC: "Inklusives Gateway (Raute mit 'O')", optD: "Ereignisbasiertes Gateway", correct: 0, exp: "Entweder-oder (genau 1 Pfad) = Exclusive Gateway (XOR)." }
    ];

    for (let i = 0; i < 15; i++) {
        const item = umlPatterns[Math.floor(Math.random() * umlPatterns.length)];
        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: item.title,
                isDiagram: true,
                isBawueFocus: true,
                diagramType: "UML / BPMN",
                type: "open-text",
                question: `Prüfungsaufgabe Modellierung (IHK BaWü - ${item.title}):\n${item.q}\n\nNennen und begründen Sie das passende Modellierungselement bzw. die Beziehung im Diagramm.`,
                musterloesung: `Fachliche Lösung:\n- Modellierungselement / Beziehung: ${item.optA}\n- Begründung / Regel: ${item.exp}`,
                explanation: item.exp
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: item.title,
                isDiagram: true,
                isBawueFocus: true,
                diagramType: "UML / BPMN",
                type: "multiple-choice",
                question: `Prüfungsaufgabe Modellierung: ${item.q}`,
                options: [
                    item.optA,
                    item.optB,
                    item.optC,
                    item.optD
                ],
                correctAnswer: item.correct,
                explanation: item.exp
            });
        }
    }

    
    // ==========================================
    // RECHNEN, FORMELN & HANDELSKALKULATION DYNAMISCHE GENERATOREN (AP1)
    // ==========================================

    // C.1 Dynamische Elektrotechnik & Stromkosten-Berechnungen
    for (let i = 0; i < 20; i++) {
        const watt = (Math.floor(Math.random() * 20) + 5) * 20; // 100 bis 480 Watt
        const hoursPerDay = 24;
        const days = 365;
        const pricePerKwh = (Math.floor(Math.random() * 20) + 30) / 100; // 0.30 bis 0.49 €/kWh
        
        const kwhPerYear = (watt / 1000) * hoursPerDay * days;
        const costPerYear = kwhPerYear * pricePerKwh;
        const costRounded = costPerYear.toFixed(2);
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Stromkostenberechnung Dauerbetrieb",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Energiekosten (LF 2 / WiSo): Ein Server hat eine durchschnittliche Leistungsaufnahme von ${watt} W im 24/7-Dauerbetrieb (365 Tage/Jahr).\nDer Strompreis beträgt ${pricePerKwh.toFixed(2)} € pro kWh.\n\nBerechne:\na) Den jährlichen Energieverbrauch in kWh.\nb) Die jährlichen Stromkosten in Euro.`,
                musterloesung: `a) Jährlicher Energieverbrauch:\n- Formel: E = P * t = (${watt} W / 1.000 kW/W) * 24 h/Tag * 365 Tage = ${(watt/1000).toFixed(3)} kW * 8.760 h = ${kwhPerYear.toFixed(2)} kWh.\n\nb) Jährliche Stromkosten:\n- Kosten = ${kwhPerYear.toFixed(2)} kWh * ${pricePerKwh.toFixed(2)} €/kWh = ${costRounded} € pro Jahr.`,
                explanation: `Energie E = P * t. Immer von Watt in Kilowatt umrechnen (durch 1.000 teilen) und mit 8.760 Jahresstunden multiplizieren.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Stromkostenberechnung",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Prüfungsaufgabe Energiekosten: Ein Switch verbraucht dauerhaft ${watt} W (24/7, 365 Tage/Jahr). Strompreis: ${pricePerKwh.toFixed(2)} €/kWh. Wie hoch sind die jährlichen Stromkosten?`,
                options: [
                    `${costRounded} € pro Jahr`,
                    `${(costPerYear * 1.19).toFixed(2)} € pro Jahr`,
                    `${(kwhPerYear * 0.2).toFixed(2)} € pro Jahr`,
                    `${(costPerYear / 12).toFixed(2)} € pro Jahr`
                ],
                correctAnswer: 0,
                explanation: `Rechnung: (${watt}/1000 kW) * 8.760 h = ${kwhPerYear.toFixed(2)} kWh. ${kwhPerYear.toFixed(2)} kWh * ${pricePerKwh.toFixed(2)} € = ${costRounded} €.`
            });
        }
    }

    // C.2 Dynamische Handelskalkulation (Einkauf bis Einstandspreis)
    for (let i = 0; i < 20; i++) {
        const lep = (Math.floor(Math.random() * 30) + 10) * 100; // 1.000 bis 3.900 €
        const rabattProzent = (Math.floor(Math.random() * 4) + 2) * 5; // 10%, 15%, 20%, 25%
        const skontoProzent = Math.random() < 0.5 ? 2 : 3; // 2% oder 3%
        const bezugskosten = (Math.floor(Math.random() * 10) + 2) * 10; // 20 bis 110 €

        const rabattBetrag = lep * (rabattProzent / 100);
        const zep = lep - rabattBetrag;
        const skontoBetrag = zep * (skontoProzent / 100);
        const bep = zep - skontoBetrag;
        const einstandspreis = bep + bezugskosten;

        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Einkaufskalkulation Bezugspreis",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Handelskalkulation: Ein IT-Händler beschafft Server-Hardware:\n- Listeneinkaufspreis (LEP): ${lep.toFixed(2)} €\n- Lieferantenrabatt: ${rabattProzent} %\n- Lieferantenskonto: ${skontoProzent} %\n- Bezugskosten (Fracht/Verpackung): ${bezugskosten.toFixed(2)} €\n\nBerechne schrittweise den Bezugspreis (Einstandspreis).`,
                musterloesung: `Kalkulationsschritte:\n  Listeneinkaufspreis (LEP): ${lep.toFixed(2)} €\n- Lieferantenrabatt (${rabattProzent} %): -${rabattBetrag.toFixed(2)} €\n= Zieleinkaufspreis (ZEP): ${zep.toFixed(2)} €\n- Lieferantenskonto (${skontoProzent} % von ${zep.toFixed(2)} €): -${skontoBetrag.toFixed(2)} €\n= Bareinkaufspreis (BEP): ${bep.toFixed(2)} €\n+ Bezugskosten: +${bezugskosten.toFixed(2)} €\n= Bezugspreis (Einstandspreis): ${einstandspreis.toFixed(2)} €.`,
                explanation: `Reihenfolge: LEP - Rabatt = ZEP. ZEP - Skonto = BEP. BEP + Bezugskosten = Einstandspreis.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Einkaufskalkulation",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Prüfungsaufgabe Handelskalkulation: LEP = ${lep.toFixed(2)} €, Rabatt = ${rabattProzent} %, Skonto = ${skontoProzent} %, Bezugskosten = ${bezugskosten.toFixed(2)} €. Wie hoch ist der Bezugspreis (Einstandspreis)?`,
                options: [
                    `${einstandspreis.toFixed(2)} €`,
                    `${(bep).toFixed(2)} € (ohne Bezugskosten)`,
                    `${(zep + bezugskosten).toFixed(2)} € (ohne Skonto)`,
                    `${(lep - rabattBetrag + bezugskosten).toFixed(2)} €`
                ],
                correctAnswer: 0,
                explanation: `LEP (${lep} €) - ${rabattProzent}% Rabatt = ${zep.toFixed(2)} € (ZEP) - ${skontoProzent}% Skonto = ${bep.toFixed(2)} € (BEP) + ${bezugskosten} € = ${einstandspreis.toFixed(2)} €.`
            });
        }
    }

    // C.3 Dynamische Zahlensystem-Umrechnungen (Dezimal <-> Binär <-> Hexadezimal)
    for (let i = 0; i < 20; i++) {
        const decVal = Math.floor(Math.random() * 230) + 25; // 25 bis 255
        const binVal = decVal.toString(2);
        const hexVal = decVal.toString(16).toUpperCase();
        const octVal = decVal.toString(8);

        const mode = Math.floor(Math.random() * 3);
        const isOpen = shouldBeOpenText();

        if (mode === 0) {
            // Dec to Bin/Hex
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Zahlensysteme Umrechnung",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Zahlensysteme: Wandle die Dezimalzahl **${decVal}** in das Binärsystem (Dualzahl) und das Hexadezimalsystem um.`,
                    musterloesung: `Dezimalzahl: ${decVal}\n- Binär: ${binVal} (2)\n- Hexadezimal: ${hexVal} (16)\n- Oktal: ${octVal} (8)`,
                    explanation: `Binär durch fortlaufende Division durch 2 oder Summe von 2er-Potenzen. Hexadezimal durch 4-Bit-Nibbles.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Zahlensysteme: Dezimal nach Hexadezimal",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe Zahlensysteme: Welcher Hexadezimalwert entspricht der Dezimalzahl ${decVal}?`,
                    options: [
                        `${hexVal} (16) [Binär: ${binVal}]`,
                        `${(decVal + 1).toString(16).toUpperCase()} (16)`,
                        `${(decVal - 1).toString(16).toUpperCase()} (16)`,
                        `${octVal} (16)`
                    ],
                    correctAnswer: 0,
                    explanation: `${decVal} = ${binVal} (2) = ${hexVal} (16).`
                });
            }
        } else if (mode === 1) {
            // Hex to Dec
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Zahlensysteme: Hexadezimal nach Dezimal",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Zahlensysteme: Wandle den Hexadezimalwert **${hexVal}** (Basis 16) mit vollständigem Rechenweg in eine Dezimalzahl um.`,
                    musterloesung: `Rechenweg für Hexadezimal ${hexVal} (16):\n- Dezimalwert = ${decVal}\n- Dualzahl = ${binVal} (2)`,
                    explanation: `Hexadezimal ${hexVal} = ${decVal} im Dezimalsystem (Binär: ${binVal}).`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Zahlensysteme: Hexadezimal nach Dezimal",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe Zahlensysteme: Wandle den Hexadezimalwert ${hexVal} (16) in eine Dezimalzahl um.`,
                    options: [
                        `${decVal}`,
                        `${decVal + 16}`,
                        `${decVal - 8}`,
                        `${decVal + 10}`
                    ],
                    correctAnswer: 0,
                    explanation: `Hexadezimal ${hexVal} = ${decVal} im Dezimalsystem (Binär: ${binVal}).`
                });
            }
        } else {
            // Bin to Hex
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Zahlensysteme: Binär nach Hexadezimal",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Zahlensysteme: Wandle die Binärzahl **${binVal}** (Basis 2) in das Hexadezimalsystem um (Nibble-Verfahren).`,
                    musterloesung: `Nibble-Gruppierung von ${binVal} (2):\n- Hexadezimalwert = ${hexVal} (16)\n- Dezimalwert = ${decVal}`,
                    explanation: `Binärzahl in 4er-Blöcke (Nibbles) aufteilen und in Hex-Ziffern umwandeln: ${binVal} (2) = ${hexVal} (16).`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Zahlensysteme: Binär nach Hexadezimal",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe Zahlensysteme: Wandle die Binärzahl ${binVal} (2) in das Hexadezimalsystem um.`,
                    options: [
                        `${hexVal} (16)`,
                        `${(decVal + 2).toString(16).toUpperCase()} (16)`,
                        `${octVal} (16)`,
                        `${(decVal - 1).toString(16).toUpperCase()} (16)`
                    ],
                    correctAnswer: 0,
                    explanation: `Gruppiere die Bits in 4er-Blöcke von rechts: ${binVal} (2) = ${hexVal} (16).`
                });
            }
        }
    }

    // C.4 Dynamische Datenübertragungszeit & Downloadberechnungen
    for (let i = 0; i < 20; i++) {
        const fileSizeGB = Math.floor(Math.random() * 8) + 2; // 2 bis 9 GB
        const speedMbit = [50, 100, 250, 500, 1000][Math.floor(Math.random() * 5)];
        const totalMbit = fileSizeGB * 8 * 1000;
        const totalSeconds = totalMbit / speedMbit;
        const minutes = (totalSeconds / 60).toFixed(1);

        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Datenübertragungszeit",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Übertragungszeit: Ein Software-Update mit ${fileSizeGB} GB Dateigröße soll über eine Internetleitung mit ${speedMbit} Mbit/s heruntergeladen werden.\n\nBerechne die Übertragungszeit in Sekunden und Minuten (ohne Protokoll-Overhead).`,
                musterloesung: `Rechnung:\n1. Datenmenge in Megabit: ${fileSizeGB} GB * 8 Gbit/GB * 1.000 Mbit/Gbit = ${totalMbit} Mbit.\n2. Zeit in Sekunden: ${totalMbit} Mbit / ${speedMbit} Mbit/s = ${totalSeconds.toFixed(0)} Sekunden.\n3. Zeit in Minuten: ${totalSeconds.toFixed(0)} s / 60 s/min = ${minutes} Minuten.`,
                explanation: `Immer Datenmenge in Bit umrechnen (Faktor 8) und Einheiten (Mbit/s vs GB) anpassen.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Downloadzeit",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Prüfungsaufgabe Übertragungszeit: Dateigröße = ${fileSizeGB} GB, Bandbreite = ${speedMbit} Mbit/s. Wie lange dauert der Download rein rechnerisch?`,
                options: [
                    `${totalSeconds.toFixed(0)} Sekunden (${minutes} Minuten)`,
                    `${(totalSeconds * 8).toFixed(0)} Sekunden`,
                    `${(totalSeconds / 8).toFixed(0)} Sekunden`,
                    `${(fileSizeGB * 60).toFixed(0)} Sekunden`
                ],
                correctAnswer: 0,
                explanation: `(${fileSizeGB} * 8.000 Mbit) / ${speedMbit} Mbit/s = ${totalSeconds.toFixed(0)} s (${minutes} min).`
            });
        }
    }

    // C.5 Dynamische Zins- & Skontovergleich-Berechnungen
    for (let i = 0; i < 15; i++) {
        const rechnungBetrag = (Math.floor(Math.random() * 15) + 5) * 1000; // 5.000 bis 19.000 €
        const skontoPct = Math.random() < 0.5 ? 2 : 3;
        const skontoTage = 10;
        const nettoTage = 30;
        const diffTage = nettoTage - skontoTage; // 20 Tage
        const kreditZinsPct = Math.floor(Math.random() * 5) + 8; // 8 bis 12%

        const skontoErsparnis = rechnungBetrag * (skontoPct / 100);
        const ueberweisung = rechnungBetrag - skontoErsparnis;
        const kreditzinsen = (ueberweisung * kreditZinsPct * diffTage) / (100 * 360);
        const reingewinn = skontoErsparnis - kreditzinsen;
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Skontoausnutzung vs. Kredit",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Finanzierung: Eine Rechnung über ${rechnungBetrag.toFixed(2)} € bietet ${skontoPct} % Skonto bei Zahlung innerhalb von ${skontoTage} Tagen (oder 30 Tage netto).\nZur Skontonutzung wird ein Kontokorrentkredit für ${diffTage} Tage zu ${kreditZinsPct} % p.a. aufgenommen.\n\nBerechnen Sie:\n1. Die Skontoersparnis in €\n2. Die Kreditzinsen für ${diffTage} Tage in €\n3. Den finanziellen Reingewinn / Vorteil der Skontoausnutzung in €`,
                musterloesung: `Lösungsschritte:\n1. Skontoersparnis: ${rechnungBetrag.toFixed(2)} € * ${skontoPct} % = ${skontoErsparnis.toFixed(2)} €\n2. Überweisungsbetrag: ${rechnungBetrag.toFixed(2)} € - ${skontoErsparnis.toFixed(2)} € = ${ueberweisung.toFixed(2)} €\n3. Kreditzinsen für ${diffTage} Tage: (${ueberweisung.toFixed(2)} € * ${kreditZinsPct} * ${diffTage}) / 36.000 = ${kreditzinsen.toFixed(2)} €\n4. Finanzieller Vorteil (Reingewinn): ${skontoErsparnis.toFixed(2)} € - ${kreditzinsen.toFixed(2)} € = ${reingewinn.toFixed(2)} €`,
                explanation: `Skontoersparnis = ${skontoErsparnis.toFixed(2)} €. Kreditzinsen = ${kreditzinsen.toFixed(2)} €. Vorteil = ${reingewinn.toFixed(2)} €.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Skontoausnutzung vs. Kredit",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Prüfungsaufgabe Finanzierung: Eine Rechnung über ${rechnungBetrag.toFixed(2)} € bietet ${skontoPct} % Skonto bei Zahlung innerhalb von ${skontoTage} Tagen (oder 30 Tage netto). Zur Skontonutzung wird ein Kontokorrentkredit für ${diffTage} Tage zu ${kreditZinsPct} % p.a. aufgenommen. Wie hoch ist der finanzielle Vorteil (Reingewinn)?`,
                options: [
                    `${reingewinn.toFixed(2)} € Ersparnis (Skonto ${skontoErsparnis.toFixed(2)} € minus ${kreditzinsen.toFixed(2)} € Zinsen)`,
                    `${skontoErsparnis.toFixed(2)} €`,
                    `${kreditzinsen.toFixed(2)} €`,
                    `Kein Vorteil (Verlust von ${kreditzinsen.toFixed(2)} €)`
                ],
                correctAnswer: 0,
                explanation: `Skontoersparnis = ${skontoErsparnis.toFixed(2)} €. Kreditzinsen für ${diffTage} Tage = (${ueberweisung.toFixed(2)} € * ${kreditZinsPct}% * ${diffTage}) / 36.000 = ${kreditzinsen.toFixed(2)} €. Vorteil = ${reingewinn.toFixed(2)} €.`
            });
        }
    }

    // C.6 Dynamische Amortisationsberechnungen (Investition & Einsparung)
    for (let i = 0; i < 15; i++) {
        const invest = (Math.floor(Math.random() * 20) + 10) * 1000; // 10.000 bis 29.000 €
        const einsparungJahr = (Math.floor(Math.random() * 8) + 4) * 1000; // 4.000 bis 11.000 €
        const amortJahre = (invest / einsparungJahr).toFixed(2);
        const amortMonate = ((invest / einsparungJahr) * 12).toFixed(1);
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Statische Amortisation",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Wirtschaftlichkeit: Ein IT-Projekt verursacht einmalige Anschaffungskosten von ${invest.toFixed(2)} € und führt zu jährlichen Betriebskosteneinsparungen in Höhe von ${einsparungJahr.toFixed(2)} €.\n\nBerechnen Sie die statische Amortisationszeit in Jahren und Monaten (mit Formel und Rechenweg).`,
                musterloesung: `Rechenweg statische Amortisation:\n- Formel: Amortisationszeit = Anschaffungskosten / jährliche Einsparung\n- Rechnung: ${invest.toFixed(2)} € / ${einsparungJahr.toFixed(2)} €/Jahr = ${amortJahre} Jahre\n- In Monaten: ${amortJahre} * 12 = ${amortMonate} Monate\n- Ergebnis: ${amortJahre} Jahre (ca. ${amortMonate} Monate)`,
                explanation: `Amortisationszeit = Anschaffungskosten / jährliche Einsparung = ${invest} € / ${einsparungJahr} € = ${amortJahre} Jahre.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Statische Amortisation",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Prüfungsaufgabe Wirtschaftlichkeit: Ein IT-Projekt kostet einmalig ${invest.toFixed(2)} € und spart pro Jahr ${einsparungJahr.toFixed(2)} € an Betriebskosten. Nach welcher Amortisationszeit hat sich die Investition bezahlt gemacht?`,
                options: [
                    `${amortJahre} Jahre (ca. ${amortMonate} Monate)`,
                    `${(invest / 12).toFixed(0)} Monate`,
                    `${(einsparungJahr / 1000).toFixed(1)} Jahre`,
                    `${(invest / einsparungJahr * 1.5).toFixed(2)} Jahre`
                ],
                correctAnswer: 0,
                explanation: `Formel: Amortisationszeit = Anschaffungskosten / jährliche Einsparung = ${invest} € / ${einsparungJahr} € = ${amortJahre} Jahre (${amortMonate} Monate).`
            });
        }
    }

    
    // C.7 Dynamische Einzelstufen der Handelskalkulation (LEP, ZEP, BEP, BVP, ZVP, LVP)
    for (let i = 0; i < 25; i++) {
        const step = Math.floor(Math.random() * 5);
        const lep = (Math.floor(Math.random() * 20) + 5) * 50; // 250 bis 1.250 €
        const rabattPct = (Math.floor(Math.random() * 4) + 1) * 5; // 5, 10, 15, 20 %
        const skontoPct = Math.random() < 0.5 ? 2 : 3;
        const bezugskosten = (Math.floor(Math.random() * 5) + 1) * 10; // 10 bis 50 €
        const hkzPct = (Math.floor(Math.random() * 4) + 4) * 5; // 20, 25, 30, 35 %
        const gewinnPct = (Math.floor(Math.random() * 4) + 2) * 5; // 10, 15, 20, 25 %

        const rabattBetrag = lep * (rabattPct / 100);
        const zep = lep - rabattBetrag;
        const skontoBetrag = zep * (skontoPct / 100);
        const bep = zep - skontoBetrag;
        const einstand = bep + bezugskosten;
        const hkBetrag = einstand * (hkzPct / 100);
        const selbstkosten = einstand + hkBetrag;
        const gewinnBetrag = selbstkosten * (gewinnPct / 100);
        const bvp = selbstkosten + gewinnBetrag;
        const zvp = bvp / (1 - (skontoPct / 100));
        const lvpNetto = zvp / (1 - (rabattPct / 100));
        const lvpBrutto = lvpNetto * 1.19;

        const isOpen = shouldBeOpenText();

        if (step === 0) {
            // ZEP aus LEP und Lieferantenrabatt
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Zieleinkaufspreis (ZEP) Berechnung",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Handelskalkulation (IHK BaWü):\nEin Server kostet laut Katalog (Listeneinkaufspreis LEP) ${lep.toFixed(2)} €. Der Lieferant gewährt ${rabattPct} % Lieferantenrabatt.\n\nBerechnen Sie den Zieleinkaufspreis (ZEP) mit Rechenweg.`,
                    musterloesung: `Rechenweg:\n- Listeneinkaufspreis (LEP): ${lep.toFixed(2)} €\n- Lieferantenrabatt (${rabattPct} %): - ${rabattBetrag.toFixed(2)} €\n= Zieleinkaufspreis (ZEP): ${zep.toFixed(2)} €`,
                    explanation: `ZEP = LEP (${lep.toFixed(2)} €) - ${rabattPct} % Rabatt (${rabattBetrag.toFixed(2)} €) = ${zep.toFixed(2)} €.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Zieleinkaufspreis (ZEP) Berechnung",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe Handelskalkulation: Ein Server kostet laut Katalog (Listeneinkaufspreis LEP) ${lep.toFixed(2)} €. Der Lieferant gewährt ${rabattPct} % Lieferantenrabatt. Wie hoch ist der Zieleinkaufspreis (ZEP)?`,
                    options: [
                        `${zep.toFixed(2)} € (Rabattabzug: ${rabattBetrag.toFixed(2)} €)`,
                        `${(lep + rabattBetrag).toFixed(2)} €`,
                        `${(lep * 0.98).toFixed(2)} €`,
                        `${(zep - 10).toFixed(2)} €`
                    ],
                    correctAnswer: 0,
                    explanation: `ZEP = LEP (${lep.toFixed(2)} €) - ${rabattPct} % Rabatt (${rabattBetrag.toFixed(2)} €) = ${zep.toFixed(2)} €.`
                });
            }
        } else if (step === 1) {
            // BEP aus ZEP und Lieferantenskonto
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Bareinkaufspreis (BEP) Berechnung",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Handelskalkulation (IHK BaWü):\nDer Zieleinkaufspreis (ZEP) beträgt ${zep.toFixed(2)} €. Bei Zahlung innerhalb von 10 Tagen werden ${skontoPct} % Lieferantenskonto abgezogen.\n\nBerechnen Sie den Bareinkaufspreis (BEP) mit Rechenweg.`,
                    musterloesung: `Rechenweg:\n- Zieleinkaufspreis (ZEP): ${zep.toFixed(2)} €\n- Lieferantenskonto (${skontoPct} %): - ${skontoBetrag.toFixed(2)} €\n= Bareinkaufspreis (BEP): ${bep.toFixed(2)} €`,
                    explanation: `BEP = ZEP (${zep.toFixed(2)} €) - ${skontoPct} % Skonto (${skontoBetrag.toFixed(2)} €) = ${bep.toFixed(2)} €.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Bareinkaufspreis (BEP) Berechnung",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe Handelskalkulation: Der Zieleinkaufspreis (ZEP) beträgt ${zep.toFixed(2)} €. Bei Zahlung innerhalb von 10 Tagen werden ${skontoPct} % Lieferantenskonto abgezogen. Wie hoch ist der Bareinkaufspreis (BEP)?`,
                    options: [
                        `${bep.toFixed(2)} € (Skontoersparnis: ${skontoBetrag.toFixed(2)} €)`,
                        `${(zep + skontoBetrag).toFixed(2)} €`,
                        `${(zep * 0.90).toFixed(2)} €`,
                        `${(bep - 5).toFixed(2)} €`
                    ],
                    correctAnswer: 0,
                    explanation: `BEP = ZEP (${zep.toFixed(2)} €) - ${skontoPct} % Skonto (${skontoBetrag.toFixed(2)} €) = ${bep.toFixed(2)} €.`
                });
            }
        } else if (step === 2) {
            // Barverkaufspreis BVP aus Selbstkosten und Gewinn
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Barverkaufspreis (BVP) Berechnung",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Handelskalkulation (IHK BaWü):\nDie Selbstkosten für ein IT-Produkt betragen ${selbstkosten.toFixed(2)} €. Das Systemhaus kalkuliert einen Gewinnzuschlag von ${gewinnPct} %.\n\nBerechnen Sie den Barverkaufspreis (BVP) mit Rechenweg.`,
                    musterloesung: `Rechenweg:\n- Selbstkosten: ${selbstkosten.toFixed(2)} €\n- Gewinnzuschlag (${gewinnPct} %): + ${gewinnBetrag.toFixed(2)} €\n= Barverkaufspreis (BVP): ${bvp.toFixed(2)} €`,
                    explanation: `BVP = Selbstkosten (${selbstkosten.toFixed(2)} €) + ${gewinnPct} % Gewinn (${gewinnBetrag.toFixed(2)} €) = ${bvp.toFixed(2)} €.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Barverkaufspreis (BVP) Berechnung",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe Handelskalkulation: Die Selbstkosten für ein IT-Produkt betragen ${selbstkosten.toFixed(2)} €. Das Systemhaus kalkuliert einen Gewinnzuschlag von ${gewinnPct} %. Wie hoch ist der Barverkaufspreis (BVP)?`,
                    options: [
                        `${bvp.toFixed(2)} € (Gewinn: ${gewinnBetrag.toFixed(2)} €)`,
                        `${(selbstkosten - gewinnBetrag).toFixed(2)} €`,
                        `${(selbstkosten * 1.19).toFixed(2)} €`,
                        `${(bvp + 50).toFixed(2)} €`
                    ],
                    correctAnswer: 0,
                    explanation: `BVP = Selbstkosten (${selbstkosten.toFixed(2)} €) + ${gewinnPct} % Gewinn (${gewinnBetrag.toFixed(2)} €) = ${bvp.toFixed(2)} €.`
                });
            }
        } else if (step === 3) {
            // Zielverkaufspreis ZVP im Hundert
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Zielverkaufspreis (ZVP im Hundert)",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Handelskalkulation (IHK BaWü):\nDer Barverkaufspreis (BVP) beträgt ${bvp.toFixed(2)} €. Dem Kunden werden ${skontoPct} % Kundenskonto gewährt.\n\nBerechnen Sie den Zielverkaufspreis (ZVP) unter Beachtung der Kalkulation im Hundert (mit Formel und Rechenweg).`,
                    musterloesung: `Rechenweg (Kalkulation im Hundert):\n- Formel: ZVP = BVP / (1 - Kundenskonto % / 100)\n- Rechnung: ${bvp.toFixed(2)} € / ${(1 - skontoPct/100).toFixed(2)} = ${zvp.toFixed(2)} €\n- Ergebnis: ${zvp.toFixed(2)} €\n(Probe: ${zvp.toFixed(2)} € - ${skontoPct} % Skonto = ${bvp.toFixed(2)} €)`,
                    explanation: `ZVP = BVP / (1 - ${skontoPct}/100) = ${bvp.toFixed(2)} € / ${(1 - skontoPct/100).toFixed(2)} = ${zvp.toFixed(2)} €.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Zielverkaufspreis (ZVP im Hundert)",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe Handelskalkulation: Der Barverkaufspreis (BVP) beträgt ${bvp.toFixed(2)} €. Dem Kunden werden ${skontoPct} % Kundenskonto gewährt. Welcher Zielverkaufspreis (ZVP) muss kalkuliert werden (Kalkulation im Hundert)?`,
                    options: [
                        `${zvp.toFixed(2)} € (Berechnung: ${bvp.toFixed(2)} € / ${(1 - skontoPct/100).toFixed(2)})`,
                        `${(bvp * (1 + skontoPct/100)).toFixed(2)} € (Vom Hundert - fehlerhaft)`,
                        `${(bvp * 0.98).toFixed(2)} €`,
                        `${(zvp * 1.19).toFixed(2)} €`
                    ],
                    correctAnswer: 0,
                    explanation: `ZVP = BVP / (1 - ${skontoPct}/100) = ${bvp.toFixed(2)} € / ${(1 - skontoPct/100).toFixed(2)} = ${zvp.toFixed(2)} €. (Im-Hundert-Aufschlag, damit nach Skontoabzug genau der BVP verbleibt).`
                });
            }
        } else {
            // LVP brutto mit 19% USt
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Bruttoverkaufspreis (inkl. 19% MwSt)",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Handelskalkulation (IHK BaWü):\nDer Netto-Listenverkaufspreis (LVP) einer Softwarelizenz beträgt ${lvpNetto.toFixed(2)} €.\n\nBerechnen Sie den Brutto-Verkaufspreis inklusive 19 % Umsatzsteuer (mit Rechenweg).`,
                    musterloesung: `Rechenweg:\n- Netto-LVP: ${lvpNetto.toFixed(2)} €\n- Umsatzsteuer (19 %): + ${(lvpNetto * 0.19).toFixed(2)} €\n= Brutto-Verkaufspreis: ${lvpBrutto.toFixed(2)} € (oder ${lvpNetto.toFixed(2)} € * 1,19 = ${lvpBrutto.toFixed(2)} €)`,
                    explanation: `LVP brutto = LVP netto (${lvpNetto.toFixed(2)} €) * 1,19 = ${lvpBrutto.toFixed(2)} €.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Bruttoverkaufspreis (inkl. 19% MwSt)",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Prüfungsaufgabe Handelskalkulation: Der Netto-Listenverkaufspreis (LVP) einer Softwarelizenz beträgt ${lvpNetto.toFixed(2)} €. Wie hoch ist der Brutto-Verkaufspreis für den Endverbraucher inklusive 19 % Umsatzsteuer?`,
                    options: [
                        `${lvpBrutto.toFixed(2)} € (USt-Betrag: ${(lvpNetto * 0.19).toFixed(2)} €)`,
                        `${(lvpNetto / 1.19).toFixed(2)} €`,
                        `${(lvpNetto + 19).toFixed(2)} €`,
                        `${(lvpBrutto * 1.19).toFixed(2)} €`
                    ],
                    correctAnswer: 0,
                    explanation: `LVP brutto = LVP netto (${lvpNetto.toFixed(2)} €) * 1,19 = ${lvpBrutto.toFixed(2)} €.`
                });
            }
        }
    }

    // C.8 Dynamische Zinsformel-Berechnungen (Tageszinsen Z = K * p * t / 36000)
    for (let i = 0; i < 20; i++) {
        const kapital = (Math.floor(Math.random() * 20) + 2) * 5000; // 10.000 bis 105.000 €
        const zinssatz = (Math.floor(Math.random() * 8) + 4); // 4 bis 11 %
        const tage = [30, 45, 60, 90, 120, 180][Math.floor(Math.random() * 6)];
        const zinsen = (kapital * zinssatz * tage) / 36000;
        const zinsenRounded = zinsen.toFixed(2);

        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Kaufmännische Zinsrechnung",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Zinsrechnung: Ein IT-Systemhaus nimmt zur Finanzierung eines Großauftrags ein Darlehen von ${kapital.toFixed(2)} € für genau ${tage} Tage auf.\nDer Zinssatz beträgt ${zinssatz} % p.a. (kaufmännische Zinsmethode: 360 Tage/Jahr).\n\nBerechne die anfallenden Zinsen in Euro.`,
                musterloesung: `Kaufmännische Zinsformel:\n- Formel: Z = (K * p * t) / (100 * 360) = (K * p * t) / 36.000\n- Rechnung: Z = (${kapital.toFixed(2)} € * ${zinssatz} * ${tage}) / 36.000 = ${zinsenRounded} € an Kreditzinsen.`,
                explanation: `Zinsformel für Tageszinsen: Z = (Kapital * Zinssatz * Tage) / 36.000.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Kaufmännische Zinsrechnung",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Prüfungsaufgabe Zinsrechnung: Kapital = ${kapital.toFixed(2)} €, Zinssatz = ${zinssatz} % p.a., Laufzeit = ${tage} Tage. Wie hoch sind die Zinsen nach der kaufmännischen Zinsmethode (360 Tage)?`,
                options: [
                    `${zinsenRounded} €`,
                    `${(zinsen * 1.2).toFixed(2)} €`,
                    `${(kapital * (zinssatz/100)).toFixed(2)} € (Jahreszinsen)`,
                    `${(zinsen / 2).toFixed(2)} €`
                ],
                correctAnswer: 0,
                explanation: `Z = (${kapital} * ${zinssatz} * ${tage}) / 36.000 = ${zinsenRounded} €.`
            });
        }
    }

    
    // ==========================================
    // C.9 KALKULATIONSZUSCHLAG, HANDELSSPANNE & KALKULATIONSFAKTOR
    // ==========================================
    for (let i = 0; i < 20; i++) {
        const bezugspreis = Math.floor(Math.random() * 250) + 50; // 50 bis 300 €
        const aufschlagFaktor = (Math.floor(Math.random() * 120) + 30) / 100; // 0.30 bis 1.50
        const lvpNetto = Number((bezugspreis * (1 + aufschlagFaktor)).toFixed(2));
        
        const differenz = Number((lvpNetto - bezugspreis).toFixed(2));
        const kalkZuschlag = Number(((differenz / bezugspreis) * 100).toFixed(2));
        const handelsspanne = Number(((differenz / lvpNetto) * 100).toFixed(2));
        const kalkFaktor = Number((lvpNetto / bezugspreis).toFixed(4));

        const subType = Math.floor(Math.random() * 3);
        const isOpen = shouldBeOpenText();

        if (subType === 0) {
            // Kalkulationszuschlag
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Kalkulationszuschlag",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Handelskalkulation: Ein IT-Händler bezieht einen Switch zum Einstandspreis (Bezugspreis) von ${bezugspreis.toFixed(2)} € und verkauft ihn für ${lvpNetto.toFixed(2)} € netto (Listenverkaufspreis).\n\nBerechne den Kalkulationszuschlag in Prozent. (Gib die Formel und den Rechenweg an)`,
                    musterloesung: `Kalkulationszuschlag:\n- Formel: [(Listenverkaufspreis - Bezugspreis) / Bezugspreis] * 100\n- Differenz (Rohgewinn/Zuschlag in €): ${lvpNetto.toFixed(2)} € - ${bezugspreis.toFixed(2)} € = ${differenz.toFixed(2)} €\n- Rechnung: (${differenz.toFixed(2)} € / ${bezugspreis.toFixed(2)} €) * 100 = ${kalkZuschlag.toFixed(2)} %\n- Ergebnis: ${kalkZuschlag.toFixed(2)} %`,
                    explanation: `Der Kalkulationszuschlag bezieht sich immer auf den Bezugs-/Einstandspreis (Basis = 100 %).`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Kalkulationszuschlag",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Bezugspreis = ${bezugspreis.toFixed(2)} €, Listenverkaufspreis (netto) = ${lvpNetto.toFixed(2)} €. Wie hoch ist der Kalkulationszuschlag?`,
                    options: [
                        `${kalkZuschlag.toFixed(2)} % (Formel: [(LVP - Bezugspreis) / Bezugspreis] * 100)`,
                        `${handelsspanne.toFixed(2)} %`,
                        `${(kalkZuschlag * 0.8).toFixed(2)} %`,
                        `${(100 + kalkZuschlag).toFixed(2)} %`
                    ],
                    correctAnswer: 0,
                    explanation: `Kalkulationszuschlag = ((${lvpNetto} - ${bezugspreis}) / ${bezugspreis}) * 100 = ${kalkZuschlag.toFixed(2)} %.`
                });
            }
        } else if (subType === 1) {
            // Handelsspanne
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Handelsspanne",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Handelskalkulation: Ein IT-Fachhändler kauft Festplatten zu einem Bezugspreis von ${bezugspreis.toFixed(2)} € ein und setzt den Netto-Listenverkaufspreis auf ${lvpNetto.toFixed(2)} € fest.\n\nBerechne die Handelsspanne in Prozent.`,
                    musterloesung: `Handelsspanne:\n- Formel: [(Listenverkaufspreis - Bezugspreis) / Listenverkaufspreis] * 100\n- Differenz: ${lvpNetto.toFixed(2)} € - ${bezugspreis.toFixed(2)} € = ${differenz.toFixed(2)} €\n- Rechnung: (${differenz.toFixed(2)} € / ${lvpNetto.toFixed(2)} €) * 100 = ${handelsspanne.toFixed(2)} %\n- Ergebnis: ${handelsspanne.toFixed(2)} %`,
                    explanation: `Die Handelsspanne drückt die Marge im Verhältnis zum Netto-Verkaufspreis aus (Basis LVP = 100 %).`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Handelsspanne",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Bezugspreis = ${bezugspreis.toFixed(2)} €, Listenverkaufspreis (netto) = ${lvpNetto.toFixed(2)} €. Wie hoch ist die Handelsspanne?`,
                    options: [
                        `${handelsspanne.toFixed(2)} % (Formel: [(LVP - Bezugspreis) / LVP] * 100)`,
                        `${kalkZuschlag.toFixed(2)} %`,
                        `${(handelsspanne * 1.2).toFixed(2)} %`,
                        `${(100 - handelsspanne).toFixed(2)} %`
                    ],
                    correctAnswer: 0,
                    explanation: `Handelsspanne = ((${lvpNetto} - ${bezugspreis}) / ${lvpNetto}) * 100 = ${handelsspanne.toFixed(2)} %.`
                });
            }
        } else {
            // Kalkulationsfaktor
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Kalkulationsfaktor",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Kalkulation (IHK BaWü):\nEin IT-Artikel hat einen Bezugspreis von ${bezugspreis.toFixed(2)} € und soll für ${lvpNetto.toFixed(2)} € netto angeboten werden.\n\nBerechnen Sie den Kalkulationsfaktor (mit Formel und 4 Nachkommastellen).`,
                    musterloesung: `Rechenweg Kalkulationsfaktor:\n- Formel: Kalkulationsfaktor = Netto-Listenverkaufspreis / Bezugspreis\n- Rechnung: ${lvpNetto.toFixed(2)} € / ${bezugspreis.toFixed(2)} € = ${kalkFaktor.toFixed(4)}\n- Ergebnis: ${kalkFaktor.toFixed(4)}`,
                    explanation: `Kalkulationsfaktor = LVP / Bezugspreis = ${lvpNetto.toFixed(2)} € / ${bezugspreis.toFixed(2)} € = ${kalkFaktor.toFixed(4)}.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Kalkulationsfaktor",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Ein IT-Artikel hat einen Bezugspreis von ${bezugspreis.toFixed(2)} € und soll für ${lvpNetto.toFixed(2)} € netto angeboten werden. Wie lautet der Kalkulationsfaktor?`,
                    options: [
                        `${kalkFaktor.toFixed(4)} (LVP / Bezugspreis)`,
                        `${(1 / kalkFaktor).toFixed(4)}`,
                        `${(kalkZuschlag / 100).toFixed(4)}`,
                        `${(handelsspanne / 100).toFixed(4)}`
                    ],
                    correctAnswer: 0,
                    explanation: `Kalkulationsfaktor = LVP / Bezugspreis = ${lvpNetto.toFixed(2)} € / ${bezugspreis.toFixed(2)} € = ${kalkFaktor.toFixed(4)}.`
                });
            }
        }
    }

    // ==========================================
    // C.10 PREISBILDUNG, MARKTGLEICHGEWICHT & ÜBERHÄNGE
    // ==========================================
    for (let i = 0; i < 15; i++) {
        const pGleich = (Math.floor(Math.random() * 6) + 3) * 10; // 30, 40, 50, 60, 70, 80 €
        const qGleich = (Math.floor(Math.random() * 8) + 2) * 100; // 200 bis 900 Stück
        const umsatz = pGleich * qGleich;
        
        const pNiedrig = pGleich - 15;
        const qAngebotNiedrig = qGleich - 200;
        const qNachfrageNiedrig = qGleich + 200;
        const nachfrageUeberhang = qNachfrageNiedrig - qAngebotNiedrig;

        const pHoch = pGleich + 15;
        const qAngebotHoch = qGleich + 200;
        const qNachfrageHoch = qGleich - 200;
        const angebotsUeberhang = qAngebotHoch - qNachfrageHoch;

        const subQ = Math.floor(Math.random() * 3);
        const isOpen = shouldBeOpenText();

        if (subQ === 0) {
            // Umsatz beim Gleichgewichtspreis
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Marktgleichgewicht: Marktumsatz",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Preisbildung: Am Markt für SSD-Speicher stellt sich ein Gleichgewichtspreis von ${pGleich},00 € bei einer Gleichgewichtsmenge von ${qGleich} Stück ein.\n\nBerechne den gesamten Marktumsatz im Marktgleichgewicht.`,
                    musterloesung: `Rechnung Marktumsatz:\n- Formel: Umsatz = Gleichgewichtspreis * Gleichgewichtsmenge\n- Rechnung: ${pGleich},00 € * ${qGleich} Stück = ${umsatz.toLocaleString('de-DE')} €\n- Ergebnis: ${umsatz.toLocaleString('de-DE')} €`,
                    explanation: `Im Marktgleichgewicht schneiden sich Angebots- und Nachfragekurve. Der Umsatz ist Preis * Menge.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Marktgleichgewicht: Marktumsatz",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Bei einem Gleichgewichtspreis von ${pGleich},00 € und einer Gleichgewichtsmenge von ${qGleich} Stück: Wie hoch ist der Gesamtumsatz am Markt?`,
                    options: [
                        `${umsatz.toLocaleString('de-DE')} € (Umsatz = ${pGleich} € * ${qGleich} Stück)`,
                        `${(umsatz * 0.5).toLocaleString('de-DE')} €`,
                        `${(umsatz * 1.5).toLocaleString('de-DE')} €`,
                        `${(pGleich + qGleich).toLocaleString('de-DE')} €`
                    ],
                    correctAnswer: 0,
                    explanation: `Umsatz = Preis * Menge = ${pGleich} € * ${qGleich} = ${umsatz.toLocaleString('de-DE')} €.`
                });
            }
        } else if (subQ === 1) {
            // Nachfrageüberhang
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Marktüberhang: Nachfrageüberhang",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Preisbildung & Marktüberhang (IHK BaWü):\nAuf einem Markt liegt der aktuelle Preis bei ${pNiedrig},00 € (unter dem Gleichgewichtspreis von ${pGleich},00 €).\nDie Anbieter bieten ${qAngebotNiedrig} Stück an, während die Kunden ${qNachfrageNiedrig} Stück nachfragen.\n\n1. Welche Marktsituation liegt vor (Käufer- oder Verkäufermarkt)?\n2. Wie hoch ist der Überhang in Stück?`,
                    musterloesung: `Fachliche Lösung:\n1. Marktsituation: Nachfrageüberhang (Verkäufermarkt), da bei niedrigem Preis die Nachfrage das Angebot übersteigt.\n2. Überhang: ${qNachfrageNiedrig} Stück (Nachfrage) - ${qAngebotNiedrig} Stück (Angebot) = ${nachfrageUeberhang} Stück Nachfrageüberhang.`,
                    explanation: `Liegt der Preis unter dem Gleichgewichtspreis, ist die Nachfrage größer als das Angebot (Nachfrageüberhang -> Verkäufermarkt). Überhang = ${nachfrageUeberhang} Stück.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Marktüberhang: Nachfrageüberhang",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Auf einem Markt liegt der aktuelle Preis bei ${pNiedrig},00 € (unter dem Gleichgewichtspreis von ${pGleich},00 €). Die Anbieter bieten ${qAngebotNiedrig} Stück an, während die Kunden ${qNachfrageNiedrig} Stück nachfragen. Welche Marktsituation liegt vor und wie groß ist der Überhang?`,
                    options: [
                        `Nachfrageüberhang von ${nachfrageUeberhang} Stück (${qNachfrageNiedrig} - ${qAngebotNiedrig}) -> Verkäufermarkt`,
                        `Angebotsüberhang von ${nachfrageUeberhang} Stück -> Käufermarkt`,
                        `Marktgleichgewicht von ${qGleich} Stück`,
                        `Nachfrageüberhang von ${qAngebotNiedrig} Stück`
                    ],
                    correctAnswer: 0,
                    explanation: `Liegt der Preis unter dem Gleichgewichtspreis, ist die Nachfrage größer als das Angebot (Nachfrageüberhang). Die Verkäufer haben Marktmacht (Verkäufermarkt). Überhang: ${qNachfrageNiedrig} - ${qAngebotNiedrig} = ${nachfrageUeberhang} Stück.`
                });
            }
        } else {
            // Angebotsüberhang
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Marktüberhang: Angebotsüberhang",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Preisbildung & Marktüberhang (IHK BaWü):\nAuf einem Markt liegt der aktuelle Preis bei ${pHoch},00 € (über dem Gleichgewichtspreis von ${pGleich},00 €).\nDie Hersteller bieten ${qAngebotHoch} Stück an, aber die Kunden fragen nur ${qNachfrageHoch} Stück nach.\n\n1. Welche Marktsituation liegt vor (Käufer- oder Verkäufermarkt)?\n2. Wie hoch ist der Überhang in Stück?`,
                    musterloesung: `Fachliche Lösung:\n1. Marktsituation: Angebotsüberhang (Käufermarkt), da das Angebot die Nachfrage übersteigt.\n2. Überhang: ${qAngebotHoch} Stück (Angebot) - ${qNachfrageHoch} Stück (Nachfrage) = ${angebotsUeberhang} Stück Angebotsüberhang.`,
                    explanation: `Liegt der Preis über dem Gleichgewichtspreis, ist das Angebot größer als die Nachfrage (Angebotsüberhang -> Käufermarkt). Überhang = ${angebotsUeberhang} Stück.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "calculations",
                    topic: "Marktüberhang: Angebotsüberhang",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Auf einem Markt liegt der aktuelle Preis bei ${pHoch},00 € (über dem Gleichgewichtspreis von ${pGleich},00 €). Die Hersteller bieten ${qAngebotHoch} Stück an, aber die Kunden fragen nur ${qNachfrageHoch} Stück nach. Welche Marktsituation liegt vor?`,
                    options: [
                        `Angebotsüberhang von ${angebotsUeberhang} Stück (${qAngebotHoch} - ${qNachfrageHoch}) -> Käufermarkt`,
                        `Nachfrageüberhang von ${angebotsUeberhang} Stück -> Verkäufermarkt`,
                        `Vollkommener Markt im Gleichgewicht`,
                        `Angebotsüberhang von ${qNachfrageHoch} Stück`
                    ],
                    correctAnswer: 0,
                    explanation: `Liegt der Preis über dem Gleichgewichtspreis, bieten Hersteller mehr an als nachgefragt wird (Angebotsüberhang). Käufer haben Auswahl- und Verhandlungsmacht (Käufermarkt). Überhang = ${qAngebotHoch} - ${qNachfrageHoch} = ${angebotsUeberhang} Stück.`
                });
            }
        }
    }

    // ==========================================
    // C.11 TOTAL COST OF OWNERSHIP (TCO) & LEBENSZYKLUSKOSTEN
    // ==========================================
    for (let i = 0; i < 10; i++) {
        const serverCount = Math.floor(Math.random() * 5) + 2; // 2 bis 6 Server
        const hwKauf = serverCount * 3500;
        const stromJahr = serverCount * 650;
        const wartungJahr = serverCount * 450;
        const jahre = 3;
        const schulung = 2500;
        const entsorgung = serverCount * 80;

        const betriebskosten = (stromJahr + wartungJahr) * jahre + schulung + entsorgung;
        const tcoGesamt = hwKauf + betriebskosten;

        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "TCO-Berechnung (Total Cost of Ownership)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Wirtschaftlichkeit / TCO (LF 1 / LF 6): Ein Unternehmen plant die Beschaffung von ${serverCount} Servern über eine geplante Nutzungsdauer von ${jahre} Jahren.\n\nKostenpositionen:\n- Anschaffungspreis pro Server: 3.500,00 €\n- Stromkosten pro Server und Jahr: ${stromJahr / serverCount},00 €\n- Wartungs- und Supportvertrag pro Server und Jahr: ${wartungJahr / serverCount},00 €\n- Einmalige Administratorschulung: ${schulung},00 €\n- Fachgerechte Entsorgung pro Server am Ende des Lebenszyklus: ${entsorgung / serverCount},00 €\n\nAufgabe:\nBerechne die Total Cost of Ownership (TCO) für alle ${serverCount} Server über die gesamte Laufzeit von ${jahre} Jahren.`,
                musterloesung: `TCO-Berechnung:\n1. Einmalige Anschaffungskosten: ${serverCount} * 3.500 € = ${hwKauf.toLocaleString('de-DE')} €\n2. Laufende Betriebskosten (${jahre} Jahre):\n   - Strom: ${serverCount} * ${stromJahr / serverCount} € * ${jahre} Jahre = ${(stromJahr * jahre).toLocaleString('de-DE')} €\n   - Wartung/Support: ${serverCount} * ${wartungJahr / serverCount} € * ${jahre} Jahre = ${(wartungJahr * jahre).toLocaleString('de-DE')} €\n   - Schulung: ${schulung.toLocaleString('de-DE')} €\n   - Entsorgung: ${serverCount} * ${entsorgung / serverCount} € = ${entsorgung.toLocaleString('de-DE')} €\n3. TCO Gesamtkosten = ${hwKauf.toLocaleString('de-DE')} € + ${(betriebskosten).toLocaleString('de-DE')} € = ${tcoGesamt.toLocaleString('de-DE')} €`,
                explanation: `TCO umfasst immer Anschaffung + sämtliche Betriebs-, Wartungs-, Schulungs- und Entsorgungskosten.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "TCO-Berechnung (Total Cost of Ownership)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Berechne die TCO über ${jahre} Jahre für ${serverCount} Server (Kauf: ${hwKauf.toLocaleString('de-DE')} €; Strom/Wartung pro Jahr: ${(stromJahr + wartungJahr).toLocaleString('de-DE')} €; Schulung: ${schulung} €; Entsorgung: ${entsorgung} €):`,
                options: [
                    `${tcoGesamt.toLocaleString('de-DE')} €`,
                    `${hwKauf.toLocaleString('de-DE')} € (nur Anschaffungskosten)`,
                    `${(hwKauf + (stromJahr + wartungJahr)).toLocaleString('de-DE')} € (ohne Mehrjahresbetrieb)`,
                    `${(tcoGesamt * 1.25).toLocaleString('de-DE')} €`
                ],
                correctAnswer: 0,
                explanation: `TCO = Anschaffung (${hwKauf} €) + Betrieb (${jahre} Jahre * ${(stromJahr + wartungJahr)} € = ${(stromJahr + wartungJahr) * jahre} €) + Schulung (${schulung} €) + Entsorgung (${entsorgung} €) = ${tcoGesamt.toLocaleString('de-DE')} €.`
            });
        }
    }

    
    // ==========================================
    // C.13 BUCHUNGSSÄTZE & FINANZBUCHHALTUNG (Winter Möbelbau & IT-Cases)
    // ==========================================
    for (let i = 0; i < 20; i++) {
        const netValue = (Math.floor(Math.random() * 40) + 5) * 100; // 500 bis 4500 €
        const ust = Number((netValue * 0.19).toFixed(2));
        const grossValue = Number((netValue + ust).toFixed(2));
        
        const bCase = Math.floor(Math.random() * 4);
        const isOpen = shouldBeOpenText();

        if (bCase === 0) {
            // Rohstoffeinkauf auf Ziel (AWR + VORST an VE)
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    topic: "Buchungssätze: Einkauf auf Ziel",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Buchführung / WiSo: Unser Unternehmen kauft Rohstoffe / Fertigungsmaterial für ${netValue.toLocaleString('de-DE')},00 € netto zuzüglich 19 % Vorsteuer auf Ziel.\n\nBilde den vollständigen Buchungssatz mit Kontonummern (6000 AWR, 2600 VORST, 4400 VE) und Beträgen.`,
                    musterloesung: `Buchungssatz:\n6000 AWR ${netValue.toLocaleString('de-DE')},00 €\n2600 VORST ${ust.toLocaleString('de-DE')} €\nan 4400 VE ${grossValue.toLocaleString('de-DE')} €`,
                    explanation: `Aufwand und Vorsteuer im Soll, Verbindlichkeiten im Haben.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    topic: "Buchungssätze: Einkauf auf Ziel",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Einkauf von Rohstoffen für ${netValue.toLocaleString('de-DE')},00 € netto (19 % Vorsteuer: ${ust.toLocaleString('de-DE')} €) auf Ziel. Welcher Buchungssatz ist korrekt?`,
                    options: [
                        `6000 AWR ${netValue.toLocaleString('de-DE')},00 € und 2600 VORST ${ust.toLocaleString('de-DE')} € an 4400 VE ${grossValue.toLocaleString('de-DE')} €`,
                        `4400 VE ${grossValue.toLocaleString('de-DE')} € an 6000 AWR ${netValue.toLocaleString('de-DE')},00 € und 2600 VORST ${ust.toLocaleString('de-DE')} €`,
                        `6000 AWR ${grossValue.toLocaleString('de-DE')} € an 2800 BK ${grossValue.toLocaleString('de-DE')} €`,
                        `2600 VORST ${ust.toLocaleString('de-DE')} € an 4400 VE ${grossValue.toLocaleString('de-DE')} €`
                    ],
                    correctAnswer: 0,
                    explanation: `6000 AWR (netto) + 2600 VORST (19 %) an 4400 VE (brutto).`
                });
            }
        } else if (bCase === 1) {
            // Ausgleich von Verbindlichkeiten per Bank
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    topic: "Buchungssätze: Lieferantenverbindlichkeiten begleichen",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Rechnungswesen (IHK BaWü):\nWir begleichen eine noch offene Lieferantenrechnung über ${grossValue.toLocaleString('de-DE')} € per Banküberweisung.\n\nBilden Sie den Buchungssatz (Soll an Haben mit Kontonummern/Kontennamen und Betrag).`,
                    musterloesung: `Buchungssatz:\n4400 VE an 2800 BK ${grossValue.toLocaleString('de-DE')} €\n\nErklärung: Verbindlichkeiten aus Lieferungen und Leistungen nehmen im Soll ab, Bankkonto nimmt im Haben ab (Passiv-Aktiv-Minderung / Bilanzverkürzung).`,
                    explanation: `Verbindlichkeiten (4400 VE) nehmen im Soll ab, Bankkonto (2800 BK) nimmt im Haben ab.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    topic: "Buchungssätze: Lieferantenverbindlichkeiten begleichen",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Wir begleichen eine noch offene Lieferantenrechnung über ${grossValue.toLocaleString('de-DE')} € per Banküberweisung. Wie lautet der Buchungssatz?`,
                    options: [
                        `4400 VE an 2800 BK ${grossValue.toLocaleString('de-DE')} €`,
                        `2800 BK an 4400 VE ${grossValue.toLocaleString('de-DE')} €`,
                        `4400 VE an 2400 FO ${grossValue.toLocaleString('de-DE')} €`,
                        `6000 AWR an 2800 BK ${grossValue.toLocaleString('de-DE')} €`
                    ],
                    correctAnswer: 0,
                    explanation: `Verbindlichkeiten (4400 VE) nehmen im Soll ab, Bankkonto (2800 BK) nimmt im Haben ab (Passiv-Aktiv-Minderung).`
                });
            }
        } else if (bCase === 2) {
            // Verkauf von BGA / Sachanlagen mit Umsatzsteuer
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    topic: "Buchungssätze: Anlagenverkauf mit USt",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Rechnungswesen (IHK BaWü):\nVerkauf einer gebrauchten Büroeinrichtung/BGA für ${netValue.toLocaleString('de-DE')},00 € netto (+ 19 % USt: ${ust.toLocaleString('de-DE')} €) per Banküberweisung.\n\nBilden Sie den vollständigen Buchungssatz mit Beträgen.`,
                    musterloesung: `Buchungssatz:\n2800 BK ${grossValue.toLocaleString('de-DE')} € an 0870 BGA ${netValue.toLocaleString('de-DE')},00 € und 4800 UST ${ust.toLocaleString('de-DE')} €\n\nErklärung: Bank im Soll mit Bruttobetrag, BGA im Haben mit Nettobetrag, Umsatzsteuer 4800 UST im Haben.`,
                    explanation: `Bank im Soll mit Bruttobetrag, BGA im Haben mit Nettobetrag, Umsatzsteuer 4800 UST im Haben.`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    topic: "Buchungssätze: Anlagenverkauf mit USt",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Verkauf einer gebrauchten Büroeinrichtung/BGA für ${netValue.toLocaleString('de-DE')},00 € netto (+ 19 % USt: ${ust.toLocaleString('de-DE')} €) per Banküberweisung. Wie lautet der Buchungssatz?`,
                    options: [
                        `2800 BK ${grossValue.toLocaleString('de-DE')} € an 0870 BGA ${netValue.toLocaleString('de-DE')},00 € und 4800 UST ${ust.toLocaleString('de-DE')} €`,
                        `0870 BGA ${netValue.toLocaleString('de-DE')},00 € und 4800 UST ${ust.toLocaleString('de-DE')} € an 2800 BK ${grossValue.toLocaleString('de-DE')} €`,
                        `2800 BK ${grossValue.toLocaleString('de-DE')} € an 5000 UEFE ${grossValue.toLocaleString('de-DE')} €`,
                        `2400 FO an 0870 BGA ${grossValue.toLocaleString('de-DE')} €`
                    ],
                    correctAnswer: 0,
                    explanation: `Bank im Soll mit Bruttobetrag, BGA im Haben mit Nettobetrag, Umsatzsteuer 4800 UST im Haben.`
                });
            }
        } else {
            // Forderungsausgleich Kunde an Bank
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    topic: "Buchungssätze: Kundenzahlungseingang",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "open-text",
                    question: `Prüfungsaufgabe Rechnungswesen (IHK BaWü):\nEin Kunde überweist den fälligen Rechnungsbetrag von ${grossValue.toLocaleString('de-DE')} € auf unser Bankkonto.\n\nBilden Sie den Buchungssatz (Soll an Haben mit Konten und Betrag).`,
                    musterloesung: `Buchungssatz:\n2800 BK an 2400 FO ${grossValue.toLocaleString('de-DE')} €\n\nErklärung: Bank (2800 BK) nimmt im Soll zu, Forderungen aus Lieferungen und Leistungen (2400 FO) nehmen im Haben ab (Aktivtausch).`,
                    explanation: `Bank (2800 BK) nimmt im Soll zu, Forderungen (2400 FO) nehmen im Haben ab (Aktivtausch).`
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "lf6",
                    topic: "Buchungssätze: Kundenzahlungseingang",
                    isCalculation: true,
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: `Ein Kunde überweist den fälligen Rechnungsbetrag von ${grossValue.toLocaleString('de-DE')} € auf unser Bankkonto. Wie lautet der Buchungssatz?`,
                    options: [
                        `2800 BK an 2400 FO ${grossValue.toLocaleString('de-DE')} €`,
                        `2400 FO an 2800 BK ${grossValue.toLocaleString('de-DE')} €`,
                        `2800 BK an 5000 UEFE ${grossValue.toLocaleString('de-DE')} €`,
                        `4400 VE an 2800 BK ${grossValue.toLocaleString('de-DE')} €`
                    ],
                    correctAnswer: 0,
                    explanation: `Bank (2800 BK) nimmt im Soll zu, Forderungen (2400 FO) nehmen im Haben ab (Aktivtausch).`
                });
            }
        }
    }

    // ==========================================
    // C.14 MATHEMATIK: DREISATZ & LINEARE GLEICHUNGEN
    // ==========================================
    for (let i = 0; i < 15; i++) {
        // Lineare Gleichung: a*x + b = c*x - d
        const a = Math.floor(Math.random() * 4) + 2; // 2 bis 5
        const c = a + Math.floor(Math.random() * 5) + 3; // 5 bis 12 (c > a)
        const xVal = Math.floor(Math.random() * 20) + 5; // Ganzzahliges x von 5 bis 24
        const b = Math.floor(Math.random() * 30) + 10;
        const d = (c - a) * xVal - b;

        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Mathematik: Lineare Gleichung lösen",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Mathematik für IT-Berufe: Löse die folgende Gleichung schrittweise nach x auf:\n${a}x + ${b} = ${c}x - ${d}`,
                musterloesung: `Rechenweg:\n1. - ${a}x auf beiden Seiten: ${b} = ${c - a}x - ${d}\n2. + ${d} auf beiden Seiten: ${b + d} = ${c - a}x\n3. Durch ${c - a} teilen: x = ${b + d} / ${c - a} = ${xVal}\nErgebnis: x = ${xVal}`,
                explanation: `Äquivalenzumformung: Variablen auf eine Seite, Zahlen auf die andere Seite bringen und teilen.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Mathematik: Lineare Gleichung lösen",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Löse die Gleichung nach x auf:\n${a}x + ${b} = ${c}x - ${d}`,
                options: [
                    `x = ${xVal}`,
                    `x = ${xVal + 3}`,
                    `x = ${Math.max(1, xVal - 4)}`,
                    `x = ${(xVal * 2)}`
                ],
                correctAnswer: 0,
                explanation: `${a}x + ${b} = ${c}x - ${d} -> ${b + d} = ${c - a}x -> x = ${b + d} / ${c - a} = ${xVal}.`
            });
        }
    }

    // ==========================================
    // C.15 ZAHLENSYSTEME: HEXADEZIMAL <-> BINÄR (Nibble-Verfahren)
    // ==========================================
    const hexDigits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    const hexToBinMap = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011',
        '4': '0100', '5': '0101', '6': '0110', '7': '0111',
        '8': '1000', '9': '1001', 'A': '1010', 'B': '1011',
        'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111'
    };

    for (let i = 0; i < 15; i++) {
        const d1 = hexDigits[Math.floor(Math.random() * 15) + 1]; // 1-F
        const d2 = hexDigits[Math.floor(Math.random() * 16)];
        const d3 = hexDigits[Math.floor(Math.random() * 16)];
        const d4 = hexDigits[Math.floor(Math.random() * 16)];
        const hexStr = `${d1}${d2}${d3}${d4}`;
        const binCorrect = `${hexToBinMap[d1]} ${hexToBinMap[d2]} ${hexToBinMap[d3]} ${hexToBinMap[d4]}`;
        
        // Wrong options with bit flips
        const binWrong1 = `${hexToBinMap[d1]} ${hexToBinMap[d3]} ${hexToBinMap[d2]} ${hexToBinMap[d4]}`;
        const binWrong2 = `${hexToBinMap[d2]} ${hexToBinMap[d1]} ${hexToBinMap[d4]} ${hexToBinMap[d3]}`;
        const binWrong3 = `1111 0000 ${hexToBinMap[d3]} ${hexToBinMap[d4]}`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "Zahlensysteme: Hexadezimal zu Binär",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Zahlensysteme (IHK BaWü):\nWandeln Sie die Hexadezimalzahl **${hexStr}** (Basis 16) schrittweise in das 16-Bit-Binärmuster (4er-Nibbles) um.`,
                musterloesung: `Nibble-Umwandlung von ${hexStr}:\n- Ziffer '${d1}' = ${hexToBinMap[d1]}\n- Ziffer '${d2}' = ${hexToBinMap[d2]}\n- Ziffer '${d3}' = ${hexToBinMap[d3]}\n- Ziffer '${d4}' = ${hexToBinMap[d4]}\n\nErgebnis: ${binCorrect}_2`,
                explanation: `Jede Hex-Ziffer entspricht genau 4 Binärstellen (1 Nibble).`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "Zahlensysteme: Hexadezimal zu Binär",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Wandle die Hexadezimalzahl ${hexStr} (Basis 16) in das 16-Bit-Binärsystem um (4er-Nibbles):`,
                options: [
                    `${binCorrect}`,
                    `${binWrong1}`,
                    `${binWrong2}`,
                    `${binWrong3}`
                ],
                correctAnswer: 0,
                explanation: `Nibble-Umwandlung von ${hexStr}:\n${d1} = ${hexToBinMap[d1]}, ${d2} = ${hexToBinMap[d2]}, ${d3} = ${hexToBinMap[d3]}, ${d4} = ${hexToBinMap[d4]}\nErgebnis: ${binCorrect}_2.`
            });
        }
    }

    // ==========================================
    // C.16 EINKAUFSKALKULATION (Winter Möbelbau mit Rabatt, Skonto & Bezugskosten)
    // ==========================================
    for (let i = 0; i < 15; i++) {
        const stueck = (Math.floor(Math.random() * 10) + 1) * 100; // 100 bis 1000 Stück
        const stueckPreis = (Math.floor(Math.random() * 30) + 5); // 5 bis 35 €
        const lep = stueck * stueckPreis;
        const rabattP = [10, 20, 25, 30][Math.floor(Math.random() * 4)];
        const skontoP = [1, 2, 3][Math.floor(Math.random() * 3)];
        
        const rabattBetrag = (lep * rabattP) / 100;
        const zep = lep - rabattBetrag;
        const skontoBetrag = (zep * skontoP) / 100;
        const bep = zep - skontoBetrag;
        const einstandspreis = bep; // frei Haus

        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Einkaufskalkulation: Einstandspreis",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Einkaufskalkulation (Winter Möbelbau):\nWir bestellen ${stueck} Bauteile zu einem Listenpreis von ${stueckPreis.toFixed(2)} € pro Stück.\nKonditionen des Lieferanten: ${rabattP} % Rabatt, ${skontoP} % Skonto, Lieferung frei Haus.\n\nBerechne schrittweise:\n1. Listeneinkaufspreis (LEP)\n2. Zieleinkaufspreis (ZEP)\n3. Bareinkaufspreis (BEP)\n4. Einstandspreis / Bezugspreis`,
                musterloesung: `Kalkulationsschema:\n1. LEP: ${stueck} Stück * ${stueckPreis.toFixed(2)} € = ${lep.toLocaleString('de-DE')},00 € (100 %)\n- ${rabattP} % Rabatt: -${rabattBetrag.toLocaleString('de-DE')} €\n= 2. ZEP: ${zep.toLocaleString('de-DE')} € (100 %)\n- ${skontoP} % Skonto: -${skontoBetrag.toLocaleString('de-DE')} €\n= 3. BEP: ${bep.toLocaleString('de-DE')} €\n+ 0,00 € Bezugskosten (frei Haus)\n= 4. Einstandspreis: ${einstandspreis.toLocaleString('de-DE')} €`,
                explanation: `Einkaufskalkulation: LEP - Rabatt = ZEP; ZEP - Skonto = BEP; BEP + Bezugskosten = Einstandspreis.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "calculations",
                topic: "Einkaufskalkulation: Einstandspreis",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Bestellung von ${stueck} Stück à ${stueckPreis.toFixed(2)} € (LEP: ${lep.toLocaleString('de-DE')} €). Konditionen: ${rabattP} % Rabatt, ${skontoP} % Skonto, Lieferung frei Haus. Wie hoch ist der Einstandspreis?`,
                options: [
                    `${einstandspreis.toLocaleString('de-DE')} €`,
                    `${(lep - rabattBetrag).toLocaleString('de-DE')} € (ohne Skonto)`,
                    `${(lep * (1 - (rabattP + skontoP)/100)).toLocaleString('de-DE')} € (falscher Prozentabzug)`,
                    `${(einstandspreis * 1.19).toLocaleString('de-DE')} € (inkl. USt)`
                ],
                correctAnswer: 0,
                explanation: `LEP ${lep} € - ${rabattP}% (${rabattBetrag} €) = ZEP ${zep} €; ZEP ${zep} € - ${skontoP}% (${skontoBetrag} €) = ${einstandspreis.toLocaleString('de-DE')} €.`
            });
        }
    }

    
    // =========================================================================
    // C.17 DYNAMISCHE DIAGRAMM-ERKENNUNGSAUFGABEN & MODELLIERUNG MIT LIVE-SVG
    // =========================================================================

    // C.17.1 Dynamische Use-Case-Diagramm Erkennung & Modellierung
    for (let i = 0; i < 12; i++) {
        const systems = [
            { title: "Smart-Home Steuerungssystem", actor: "Hausbewohner", sub: "Cloud-Server" },
            { title: "IT-Helpdesk Ticketsystem", actor: "Mitarbeiter", sub: "LDAP-Server" },
            { title: "Krankenhaus-Patientenverwaltung", actor: "Arzt/Pfleger", sub: "Krankenkassen-API" },
            { title: "Flugbuchungs-Portal", actor: "Passagier", sub: "Zahlungsschnittstelle" },
            { title: "Lagerlogistik-Verwaltung", actor: "Lagerist", sub: "ERP-System" }
        ];
        const sys = systems[i % systems.length];
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: `UML Use-Case-Modellierung: ${sys.title}`,
                isDiagram: true,
                diagramType: "UML Use-Case-Diagramm",
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe UML (Modellierung): Erstelle für das '${sys.title}' ein vollständiges UML-Anwendungsfalldiagramm.\n\nVorgaben:\n- Primärer Akteur: '${sys.actor}'\n- Sekundäres Fremdsystem: '${sys.sub}'\n- Bette wesentliche Anwendungsfälle in die Systemgrenze ein.\n- Integriere eine zwingende <<include>>-Beziehung (z. B. Authentifizierung/Prüfung) und eine optionale <<extend>>-Beziehung.\n\nSkizziere dein Diagramm auf dem Whiteboard und vergleiche mit der grafischen Musterlösung.`,
                solutionDiagramSvg: VisualDiagrams.getUseCaseDiagramSvg(sys.title),
                solutionDiagramCaption: `Grafische Referenz-Musterlösung für: ${sys.title}`,
                musterloesung: `Musterlösung Use-Case-Diagramm (${sys.title}):\n- Systemgrenze als Rechteck mit Titel '${sys.title}'.\n- Akteur '${sys.actor}' links außerhalb der Systemgrenze mit Assoziationslinien zu den Kernanwendungsfällen.\n- Akteur '${sys.sub}' rechts außerhalb der Systemgrenze.\n- Gestrichelter Pfeil mit <<include>> für zwingende Teilabläufe.\n- Gestrichelter Pfeil mit <<extend>> für optionale Erweiterungen.`,
                explanation: "Anwendungsfalldiagramme beschreiben die funktionale Sicht eines Systems aus Perspektive der Akteure (DIN/ISO UML)."
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: `Diagramm-Erkennung: UML Use-Case (${sys.title})`,
                isDiagram: true,
                diagramType: "UML Use-Case-Diagramm",
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Betrachte das abgebildete Modell für '${sys.title}'. Welcher Diagrammtyp liegt vor und welche Modellierungselemente werden verwendet?`,
                diagramTitle: `Systemmodell: ${sys.title}`,
                diagramCaption: `Abbildung: Modellierung für '${sys.title}' mit Akteuren, Ovale als Use-Cases und Systemgrenze`,
                diagramSvg: VisualDiagrams.getUseCaseDiagramSvg(sys.title),
                options: [
                    "UML-Use-Case-Diagramm (Akteure, Anwendungsfall-Ovale, Systemgrenze, <<include>> & <<extend>> Beziehungen)",
                    "UML-Aktivitätsdiagramm mit Swimlanes",
                    "UML-Zustandsdiagramm mit Transitionen",
                    "ER-Datenmodell nach Chen"
                ],
                correctAnswer: 0,
                explanation: `Das Diagramm zeigt ein UML-Use-Case-Diagramm für das ${sys.title}. Die Männchen symbolisieren Akteure, die Ovale Anwendungsfälle und das Rechteck die Systemgrenze.`
            });
        }
    }

    // C.17.2 Dynamische Klassendiagramm-Erkennung & Multiplizitäten
    for (let i = 0; i < 10; i++) {
        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: "UML Klassendiagramm: Struktur & Methoden",
                isDiagram: true,
                diagramType: "UML Klassendiagramm",
                isBawueFocus: true,
                type: "open-text",
                question: "Prüfungsaufgabe UML (Klassendiagramm): Entwerfen Sie ein 3-teiliges UML-Klassendiagramm für die Entitäten 'Kunde', 'Bestellung' und 'Bestellposition'. Berücksichtigen Sie Attribute mit Datentypen, Methoden mit Rückgabetypen, Multiplizitäten (1 zu 1..*) sowie eine existenzabhängige Komposition (schwarze Raute).\n\nNutze das Whiteboard für deine Skizze und vergleiche deine Lösung mit der visuellen Musterlösung.",
                solutionDiagramSvg: VisualDiagrams.getClassDiagramSvg(),
                solutionDiagramCaption: "Visuelle Musterlösung: UML-Klassendiagramm",
                musterloesung: "Musterlösung:\n1. Dreigeteilte Klassenboxen (Name, Attribute, Methoden).\n2. Sichtbarkeiten: - für private Attribute, + für public Methoden.\n3. Komposition: Ausgefüllte Raute bei Bestellung zur Kennzeichnung der Lebenszeitbindung der Positionen.\n4. Multiplizitäten: 1 Kunde hat 0..* Bestellungen; 1 Bestellung hat 1..* Bestellpositionen.",
                explanation: "Objektorientierte Modellierung mit UML-Klassendiagrammen nach ISO/IEC 19505."
            });
        } else {
            const multVariations = [
                { q: "Was bedeutet die Multiplizität '1..*' bei der Klasse Bestellposition?", correct: "Mindestens eine, aber beliebig viele Bestellpositionen pro Bestellung.", wrong1: "Genau eine Position.", wrong2: "Beliebig viele inklusive null Positionen.", wrong3: "Genau 10 Positionen." },
                { q: "Welche Sichtbarkeit bedeutet das Vorzeichen '-' vor Attributen wie '- kundenNr: int'?", correct: "Private (nur innerhalb der eigenen Klasse sichtbar)", wrong1: "Public (überall öffentlich zugänglich)", wrong2: "Protected (nur im Paket und Unterklassen)", wrong3: "Package-Private" },
                { q: "Was kennzeichnet die ausgefüllte schwarze Raute an der Beziehung zur Klasse Bestellposition?", correct: "Komposition (Existenzabhängigkeit: Löschung von Bestellung löscht alle Positionen)", wrong1: "Aggregation (Lose Bindung ohne Löschweitergabe)", wrong2: "Vererbung", wrong3: "Schnittstellen-Implementierung" }
            ];
            const v = multVariations[i % multVariations.length];

            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: "Diagramm-Erkennung: UML Klassendiagramm Details",
                isDiagram: true,
                diagramType: "UML Klassendiagramm",
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Betrachte das abgebildete UML-Klassendiagramm.\n${v.q}`,
                diagramTitle: "UML-Klassendiagramm Prüfung",
                diagramCaption: "Abbildung: 3-Fach-Klassenboxen mit Attributen, Methoden, Kompositionsraute und Multiplizitäten",
                diagramSvg: VisualDiagrams.getClassDiagramSvg(),
                options: [
                    v.correct,
                    v.wrong1,
                    v.wrong2,
                    v.wrong3
                ],
                correctAnswer: 0,
                explanation: "UML-Klassendiagramm-Standard: 3 Fächer (Klasse, Attribute, Operationen), Sichtbarkeiten (+ public, - private, # protected), Rauten (schwarz = Komposition, weiß = Aggregation)."
            });
        }
    }

    // C.17.3 Dynamische ERD-Erkennung & Kardinalitäten
    for (let i = 0; i < 10; i++) {
        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: "ER-Modellierung: Chen-Notation & Normalisierung",
                isDiagram: true,
                diagramType: "Entity-Relationship-Modell (ERD)",
                isBawueFocus: true,
                type: "open-text",
                question: "Prüfungsaufgabe Datenbanken (ERD): Erstelle ein vollständiges Entity-Relationship-Diagramm in Chen-Notation für ein Handelssystem mit den Entitäten KUNDE, BESTELLUNG und ARTIKEL.\n\nVorgaben:\n- KUNDE erteilt BESTELLUNG (1:n)\n- BESTELLUNG umfasst ARTIKEL (n:m) mit Beziehungsattribut Menge\n- Unterstreiche alle Primärschlüssel-Attribute\n\nSkizziere das ERD im Whiteboard und überprüfe es mit der grafischen Musterlösung.",
                solutionDiagramSvg: VisualDiagrams.getErdDiagramSvg(),
                solutionDiagramCaption: "Visuelle Musterlösung: ERD in Chen-Notation",
                musterloesung: "Musterlösung ERD (Chen):\n- Entitätstypen: Rechtecke KUNDE, BESTELLUNG, ARTIKEL.\n- Beziehungstypen: Rauten 'erteilt' (1:n) und 'umfasst' (n:m).\n- Attribute: Ellipsen, wobei Primärschlüssel (KundenNr, BestellNr, ArtikelNr) unterstrichen sind.\n- Beziehungsattribut 'Menge' an der Raute 'umfasst'.",
                explanation: "Konzeptioneller Datenbankentwurf mit Entity-Relationship-Modellen (Chen-Notation)."
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: "Diagramm-Erkennung: ERD (Chen-Notation)",
                isDiagram: true,
                diagramType: "Entity-Relationship-Modell (ERD)",
                isBawueFocus: true,
                type: "multiple-choice",
                question: "Betrachte das abgebildete Datenmodell in Chen-Notation. Wie wird die n:m Beziehung zwischen 'BESTELLUNG' und 'ARTIKEL' bei der Überführung in ein relationales Datenbankschema aufgelöst?",
                diagramTitle: "Entity-Relationship-Modell (ERD)",
                diagramCaption: "Abbildung: Chen-Notation mit Entitäten (Rechtecke), Beziehungen (Rauten) und Attributen (Ellipsen)",
                diagramSvg: VisualDiagrams.getErdDiagramSvg(),
                options: [
                    "Durch Erzeugung einer Zwischentabelle / Verknüpfungstabelle (z. B. 'Bestellposition') mit den Fremdschlüsseln BestellNr und ArtikelNr sowie dem Attribut Menge.",
                    "Indem die ArtikelNr direkt als Fremdschlüssel in die Tabelle BESTELLUNG eingetragen wird.",
                    "Indem die BestellNr als Fremdschlüssel in die Tabelle ARTIKEL eingetragen wird.",
                    "n:m Beziehungen können ohne zusätzliche Zwischentabelle direkt in SQL gespeichert werden."
                ],
                correctAnswer: 0,
                explanation: "Im relationalen Modell können n:m Beziehungen nicht direkt abgebildet werden. Sie müssen in zwei 1:n Beziehungen mit einer Verknüpfungstabelle (Composite Key aus beiden Fremdschlüsseln + Beziehungsattribute wie Menge) aufgelöst werden."
            });
        }
    }

    // C.17.4 Dynamische EPK- & BPMN-Erkennung
    for (let i = 0; i < 10; i++) {
        const isEpk = i % 2 === 0;
        const isOpen = shouldBeOpenText();

        if (isEpk) {
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "diagrams",
                    topic: "Prozessmodellierung: Ereignisgesteuerte Prozesskette (EPK)",
                    isDiagram: true,
                    diagramType: "Ereignisgesteuerte Prozesskette (EPK)",
                    isBawueFocus: true,
                    type: "open-text",
                    question: "Prüfungsaufgabe Prozessmodellierung (EPK): Modellieren Sie eine EPK für den Prozess 'Kundenauftragsprüfung' mit den Elementen: Ereignis 'Kunde bestellt Ware' -> Funktion 'Bestellung prüfen' -> XOR-Verzweigung in 'Auftrag abgelehnt' bzw. 'Auftrag bestätigt' mit Folgeaktivitäten.\n\nSkizziere die EPK auf dem Whiteboard und vergleiche mit der visuellen Musterlösung.",
                    solutionDiagramSvg: VisualDiagrams.getEpkDiagramSvg(),
                    solutionDiagramCaption: "Visuelle Musterlösung: EPK mit Ereignissen, Funktionen und XOR-Konnektor",
                    musterloesung: "Musterlösung EPK:\n- Strikter Wechsel zwischen Ereignissen (Sechseck) und Funktionen (abgerundetes Rechteck).\n- Konnektor XOR nach Funktion 'Bestellung prüfen'.\n- Zwei getrennte Pfade für Zusage/Rechnungserstellung und Ablehnung/Absage.",
                    explanation: "EPK-Regeln: Wechsel von Ereignis (Zustand) und Funktion (Aktivität). Keine direkte Verzweigung nach Ereignissen ohne vorherige Entscheidung/Funktion."
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "diagrams",
                    topic: "Diagramm-Erkennung: EPK Formregeln",
                    isDiagram: true,
                    diagramType: "Ereignisgesteuerte Prozesskette (EPK)",
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: "Betrachte die abgebildete Ereignisgesteuerte Prozesskette (EPK). Welche fundamentale Syntaxregel der EPK ist in dem Modell korrekt eingehalten?",
                    diagramTitle: "EPK Prozessmodell",
                    diagramCaption: "Abbildung: EPK mit hexagonalen Ereignissen, rechteckigen Funktionen und XOR-Entscheidung",
                    diagramSvg: VisualDiagrams.getEpkDiagramSvg(),
                    options: [
                        "Auf ein Ereignis folgt eine Funktion und auf eine Funktion folgt ein Ereignis (alternierende Reihenfolge; Ereignisse lösen Funktionen aus).",
                        "Eine EPK besteht ausschließlich aus Funktionen ohne Ereignisse.",
                        "Ereignisse dürfen selbst Entscheidungen treffen und verzweigen.",
                        "Funktionen werden immer durch Rauten dargestellt."
                    ],
                    correctAnswer: 0,
                    explanation: "Grundregel der EPK: Ereignisse (Zustände) und Funktionen (Aktivitäten) wechseln sich ab. Da Ereignisse passiv sind, können sie keine Entscheidungen treffen – Verzweigungen (XOR/OR/AND) müssen stets von einer Funktion ausgehen."
                });
            }
        } else {
            // BPMN 2.0
            if (isOpen) {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "diagrams",
                    topic: "BPMN 2.0: Ablaufmodellierung mit Gateways",
                    isDiagram: true,
                    diagramType: "BPMN 2.0",
                    isBawueFocus: true,
                    type: "open-text",
                    question: "Prüfungsaufgabe Prozessmodellierung (BPMN 2.0): Zeichnen Sie ein standardkonformes BPMN 2.0 Diagramm für einen Warenversand-Prozess mit Start-Event, zwei Aufgaben (Tasks), einem exklusiven Gateway (XOR) und End-Event.\n\nSkizziere dein BPMN-Diagramm auf dem Whiteboard und vergleiche mit der Referenzgrafik.",
                    solutionDiagramSvg: VisualDiagrams.getBpmnDiagramSvg(),
                    solutionDiagramCaption: "Visuelle Musterlösung: BPMN 2.0 Standarddiagramm",
                    musterloesung: "Musterlösung BPMN 2.0:\n- Start-Event: Grüner dünner Kreis mit Prozessstart\n- Tasks: Abgerundete Rechtecke mit Aktivitäten\n- Exclusive Gateway: Raute mit 'X' für datenbasierte Entscheidung (exklusiver Pfad)\n- End-Event: Roter dicker Kreis zur Beendigung des Prozesses.",
                    explanation: "BPMN 2.0 (Business Process Model and Notation) ist der weltweite Standard für die Modellierung von Geschäftsprozessen."
                });
            } else {
                dynamicQuestions.push({
                    id: currentId++,
                    theme: "diagrams",
                    topic: "Diagramm-Erkennung: BPMN 2.0 Symbole",
                    isDiagram: true,
                    diagramType: "BPMN 2.0",
                    isBawueFocus: true,
                    type: "multiple-choice",
                    question: "Betrachte das abgebildete BPMN 2.0 Diagramm. Welcher Unterschied besteht zwischen einem exklusiven Gateway (XOR / Raute mit X) und einem parallelen Gateway (AND / Raute mit +)?",
                    diagramTitle: "BPMN 2.0 Geschäftsprozess",
                    diagramCaption: "Abbildung: BPMN 2.0 Prozessablauf mit Startereignis, Tasks, XOR-Gateway und Endereignis",
                    diagramSvg: VisualDiagrams.getBpmnDiagramSvg(),
                    options: [
                        "Exklusives Gateway (X): Es wird genau ein einziger Ausgangspfad gewählt. Paralleles Gateway (+): Alle ausgehenden Pfade werden gleichzeitig/parallel ausgeführt.",
                        "Exklusives Gateway führt alle Pfade aus, paralleles Gateway nur einen.",
                        "Es gibt keinen Unterschied, beide Symbole sind austauschbar.",
                        "Parallele Gateways dienen nur zur Fehlerbehandlung."
                    ],
                    correctAnswer: 0,
                    explanation: "BPMN-Gateways: Exclusive Gateway (XOR, Raute mit X) wählt exakt einen Pfad basierend auf Bedingungen. Parallel Gateway (AND, Raute mit +) spaltet den Token auf und startet alle Pfade parallel."
                });
            }
        }
    }

    // C.17.5 Dynamische Netzplan- & Kritischer Pfad Generatoren
    for (let i = 0; i < 8; i++) {
        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: "Netzplantechnik: DIN 69900 Pufferzeiten & Projektlaufzeit",
                isDiagram: true,
                diagramType: "Netzplan (DIN 69900)",
                isBawueFocus: true,
                type: "open-text",
                question: "Prüfungsaufgabe Projektmanagement (Netzplan nach DIN 69900):\nGegeben ist ein Projektnetzplan mit Vorgängen V1 (4 Tage), V2 (6 Tage), V3 (2 Tage) und V4 (8 Tage).\n\nBerechnen Sie:\n1. Früheste Termine (FAZ, FEZ)\n2. Späteste Termine (SAZ, SEZ)\n3. Gesamtpuffer (GP) und Freier Puffer (FP) für jeden Vorgang\n4. Den Kritischen Pfad und die Gesamtdauer.\n\nSkizziere den Netzplan im Whiteboard und überprüfe ihn mit der visuellen Musterlösung.",
                solutionDiagramSvg: VisualDiagrams.getNetzplanDiagramSvg(),
                solutionDiagramCaption: "Visuelle Musterlösung: DIN 69900 Netzplan mit 7-Felder-Knoten",
                musterloesung: "Musterlösung Netzplan:\n- V1 (D=4): FAZ=0, FEZ=4, SAZ=0, SEZ=4, GP=0, FP=0 (Kritisch)\n- V2 (D=6): FAZ=4, FEZ=10, SAZ=4, SEZ=10, GP=0, FP=0 (Kritisch)\n- V3 (D=2): FAZ=4, FEZ=6, SAZ=8, SEZ=10, GP=4, FP=4\n- V4 (D=8): FAZ=10, FEZ=18, SAZ=10, SEZ=18, GP=0, FP=0 (Kritisch)\n- Gesamtdauer: 18 Tage. Kritischer Pfad: V1 -> V2 -> V4.",
                explanation: "Netzplantechnik nach DIN 69900 mit Vorwärts-/Rückwärtsrechnung und Pufferberechnung."
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "diagrams",
                topic: "Diagramm-Erkennung: DIN 69900 7-Felder-Knoten",
                isDiagram: true,
                diagramType: "Netzplan (DIN 69900)",
                isBawueFocus: true,
                type: "multiple-choice",
                question: "Betrachte den abgebildeten DIN 69900 Netzplan. Wie berechnet sich der Gesamtpuffer (GP) und der Freie Puffer (FP) eines Vorgangs?",
                diagramTitle: "DIN 69900 Netzplan Analyse",
                diagramCaption: "Abbildung: Netzplan mit 7-Felder-Knotenstruktur und rot markiertem kritischen Pfad",
                diagramSvg: VisualDiagrams.getNetzplanDiagramSvg(),
                options: [
                    "Gesamtpuffer GP = SAZ - FAZ (oder SEZ - FEZ); Freier Puffer FP = min(FAZ Nachfolger) - FEZ",
                    "GP = FEZ + SEZ; FP = SAZ + FAZ",
                    "GP = Dauer * 2; FP = Dauer / 2",
                    "Puffer existieren nur auf dem kritischen Pfad"
                ],
                correctAnswer: 0,
                explanation: `Formeln der Netzplantechnik nach DIN 69900:
- Gesamtpuffer (GP): Zeitspanne, um die ein Vorgang verschoben werden kann, ohne das Projektende zu gefährden (GP = SAZ - FAZ = SEZ - FEZ).
- Freier Puffer (FP): Zeitspanne, um die ein Vorgang verschoben werden kann, ohne den frühesten Anfang des Nachfolgers zu verschieben (FP = FAZ_nachfolger - FEZ).`
            });
        }
    }
// =========================================================================
    // === AUTHENTISCHE DYNAMISCHE GENERATOREN: WOCHE 1 (LF 1, LF 2, LF 3, LF 6) ===
    // =========================================================================

    // G1. Stundensatzberechnung Personal (LF 1 / LF 6)
    for (let i = 0; i < 15; i++) {
        const calDays = Math.floor(Math.random() * 21) + 250; // 250 - 270 Tage
        const vacation = Math.floor(Math.random() * 6) + 28; // 28 - 33 Tage
        const sickDays = Math.floor(Math.random() * 6) + 4; // 4 - 9 Tage
        const holidays = Math.floor(Math.random() * 5) + 4; // 4 - 8 Tage
        const dailyHours = [7.5, 7.8, 8.0][Math.floor(Math.random() * 3)];
        const yearlyCost = (Math.floor(Math.random() * 8) + 10) * 10000; // 100.000 - 170.000 EUR
        const externRate = Math.floor(Math.random() * 25) + 75; // 75 - 99 EUR/h

        const prodDays = calDays - vacation - sickDays - holidays;
        const prodHours = Math.round(prodDays * dailyHours * 10) / 10;
        const hourRate = Math.round((yearlyCost / prodHours) * 100) / 100;
        const isInternalCheaper = hourRate < externRate;
        const diffRate = Math.round(Math.abs(hourRate - externRate) * 100) / 100;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf1",
                topic: "Kostenrechnung: Kalkulatorischer Mitarbeiter-Stundensatz (LF 1/6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Stundensatzkalkulation (LF 1 / LF 6):\nEin Unternehmen prüft den Einsatz eines internen IT-Mitarbeiters im Vergleich zu einem externen Dienstleister (${externRate.toFixed(2)} EUR/h).\n\nKalkulationsdaten:\n- Kalenderarbeitstage pro Jahr: ${calDays} Tage\n- Jahresurlaub: ${vacation} Tage\n- Krankheitstage: ${sickDays} Tage\n- Feiertage auf Arbeitstagen: ${holidays} Tage\n- Tägliche Arbeitszeit: ${dailyHours} Stunden\n- Jahrespersonalkosten: ${yearlyCost.toLocaleString('de-DE')} EUR\n\nAufgaben:\n1. Berechnen Sie die produktiven Jahresstunden.\n2. Berechnen Sie den internen Stundensatz (auf 2 Nachkommastellen genau).\n3. Geben Sie an, welche Option wirtschaftlicher ist.`,
                musterloesung: `Musterlösung:\n1. Produktive Tage = ${calDays} - ${vacation} - ${sickDays} - ${holidays} = ${prodDays} Tage.\n   Produktive Stunden = ${prodDays} * ${dailyHours} h = ${prodHours.toLocaleString('de-DE')} Stunden/Jahr.\n2. Interner Stundensatz = ${yearlyCost.toLocaleString('de-DE')} EUR / ${prodHours.toLocaleString('de-DE')} h = ${hourRate.toFixed(2)} EUR/h.\n3. Wirtschaftlichkeit: ${isInternalCheaper ? `Der interne Mitarbeiter (${hourRate.toFixed(2)} EUR/h) ist um ${diffRate.toFixed(2)} EUR/h günstiger als der externe Berater (${externRate.toFixed(2)} EUR/h).` : `Der externe Berater (${externRate.toFixed(2)} EUR/h) ist um ${diffRate.toFixed(2)} EUR/h günstiger als der interne Mitarbeiter (${hourRate.toFixed(2)} EUR/h).`}`,
                explanation: `Berechnung: Jahreskosten / ([Kalendertage - Urlaub - Krankheit - Feiertage] * tägliche Arbeitszeit) = ${yearlyCost} / (${prodDays} * ${dailyHours}) = ${hourRate.toFixed(2)} EUR/h.`
            });
        } else {
            const wrong1 = (hourRate * 1.15).toFixed(2);
            const wrong2 = (hourRate * 0.85).toFixed(2);
            const wrong3 = (hourRate + 12.5).toFixed(2);
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf1",
                topic: "Kostenrechnung: Kalkulatorischer Mitarbeiter-Stundensatz (LF 1/6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Ein IT-Spezialist verursacht Jahresgesamtkosten von ${yearlyCost.toLocaleString('de-DE')} EUR. Bei ${calDays} Arbeitstagen, ${vacation} Urlaubstagen, ${sickDays} Krankheitstagen und ${holidays} Feiertagen arbeitet er täglich ${dailyHours} Stunden.\n\nWie hoch ist der kalkulatorische Stundensatz?`,
                options: [
                    `${hourRate.toFixed(2)} EUR/h`,
                    `${wrong1} EUR/h`,
                    `${wrong2} EUR/h`,
                    `${wrong3} EUR/h`
                ],
                correctAnswer: 0,
                explanation: `Produktive Stunden: (${calDays} - ${vacation} - ${sickDays} - ${holidays}) * ${dailyHours} = ${prodHours} h. Stundensatz = ${yearlyCost} EUR / ${prodHours} h = ${hourRate.toFixed(2)} EUR/h.`
            });
        }
    }

    // G2. USV-Überbrückungszeit (LF 2 / LF 6)
    for (let i = 0; i < 15; i++) {
        const serverCount = Math.floor(Math.random() * 3) + 2; // 2 - 4 Server
        const serverWatt = [500, 600, 700, 750, 800][Math.floor(Math.random() * 5)];
        const batteryCount = [2, 4, 6, 8][Math.floor(Math.random() * 4)];
        const batteryAh = [80, 100, 120, 150][Math.floor(Math.random() * 4)];
        const voltage = 12; // 12 V

        const totalPowerW = serverCount * serverWatt;
        const totalCapacityAh = batteryCount * batteryAh;
        const totalEnergyWh = totalCapacityAh * voltage;
        const timeHoursExact = totalEnergyWh / totalPowerW;
        const hours = Math.floor(timeHoursExact);
        const minutes = Math.floor((timeHoursExact - hours) * 60);

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "Hardware & Strom: USV-Überbrückungszeit Dimensionierung (LF 2/6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe USV-Berechnung (LF 2 / LF 6):\nEine USV-Anlage sichert ${serverCount} Server mit je ${serverWatt} Watt Netzteilen unter Volllast ab.\nDie USV verfügt über ${batteryCount} Akkus mit je ${batteryAh} Ah bei einer Spannung von ${voltage} V (Verluste vernachlässigt, 100% Entladung).\n\nBerechnen Sie:\n1. Die Gesamtleistung P in Watt.\n2. Die gesamte gespeicherte Energie W in Wh.\n3. Die theoretische Überbrückungszeit in Stunden und Minuten (auf volle Minuten abgerundet).`,
                musterloesung: `Musterlösung:\n1. Gesamtleistung P = ${serverCount} Server * ${serverWatt} W = ${totalPowerW} Watt.\n2. Gespeicherte Energie W = ${batteryCount} Akkus * ${batteryAh} Ah * ${voltage} V = ${totalEnergyWh} Wh.\n3. Überbrückungszeit t = W / P = ${totalEnergyWh} Wh / ${totalPowerW} W = ${timeHoursExact.toFixed(3)} Stunden = ${hours} Stunden und ${minutes} Minuten.`,
                explanation: `Formel: P = Server * Watt; W = Akkus * Ah * Volt; t = W / P. Zeit = ${hours} Std. und ${minutes} Min.`
            });
        } else {
            const wrongMin = (minutes + 15) % 60;
            const wrongHr = hours + 1;
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "Hardware & Strom: USV-Überbrückungszeit (LF 2/6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Eine USV mit ${batteryCount} Akkus à ${batteryAh} Ah (${voltage} V) puffert ${serverCount} Server à ${serverWatt} W.\n\nWie lange ist die theoretische Überbrückungszeit bei Stromausfall?`,
                options: [
                    `${hours} Stunden und ${minutes} Minuten`,
                    `${wrongHr} Stunden und ${wrongMin} Minuten`,
                    `${hours} Stunden und 55 Minuten`,
                    `${hours + 2} Stunden und 10 Minuten`
                ],
                correctAnswer: 0,
                explanation: `Energie W = ${batteryCount} * ${batteryAh} Ah * ${voltage} V = ${totalEnergyWh} Wh. Leistung P = ${serverCount} * ${serverWatt} W = ${totalPowerW} W. Zeit t = ${totalEnergyWh} / ${totalPowerW} = ${hours} Std. ${minutes} Min.`
            });
        }
    }

    // G3. Finanzierungsvergleich Abzahlungsdarlehen vs. Leasing (LF 1 / LF 6)
    for (let i = 0; i < 15; i++) {
        const investSum = [120000, 180000, 240000, 300000][Math.floor(Math.random() * 4)];
        const years = 4;
        const interestRate = [4.0, 5.0, 6.0][Math.floor(Math.random() * 3)];
        const linearTilgung = investSum / years;

        let totalInterest = 0;
        let restSchuld = investSum;
        for (let y = 1; y <= years; y++) {
            const zinsYear = restSchuld * (interestRate / 100);
            totalInterest += zinsYear;
            restSchuld -= linearTilgung;
        }
        const totalLoanCost = investSum + totalInterest;

        // Leasing
        const monthlyRate = Math.round((investSum / 40) / 500) * 500; // e.g. 6000 for 240k
        const residualValue = Math.round((investSum * 0.065) / 1000) * 1000; // e.g. 16000 for 240k
        const totalLeasingCost = (years * 12 * monthlyRate) + residualValue;

        const diffSavings = Math.abs(totalLeasingCost - totalLoanCost);
        const isLoanCheaper = totalLoanCost < totalLeasingCost;
        const pctDiff = Math.round((diffSavings / (isLoanCheaper ? totalLoanCost : totalLeasingCost)) * 10000) / 100;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "Investitionsrechnung: Abzahlungsdarlehen vs. Leasing (LF 1/6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Finanzierungsvergleich (LF 1 / LF 6):\nEin Unternehmen plant die Anschaffung von Maschinen im Wert von ${investSum.toLocaleString('de-DE')} EUR.\n\nAlternative 1: Abzahlungsdarlehen über ${years} Jahre mit linearer Tilgung zu ${interestRate.toFixed(1)} % p.a. auf die jeweilige Restschuld zu Jahresbeginn.\nAlternative 2: Leasingvertrag über ${years} Jahre (${years * 12} Monate) à ${monthlyRate.toLocaleString('de-DE')} EUR/Monat mit Übernahme zum Restwert von ${residualValue.toLocaleString('de-DE')} EUR.\n\nAufgaben:\n1. Berechnen Sie die Gesamtkosten des Abzahlungsdarlehens.\n2. Berechnen Sie die Gesamtkosten des Leasings.\n3. Welche Alternative ist wirtschaftlicher und wie hoch ist die prozentuale Abweichung?`,
                musterloesung: `Musterlösung:\n1. Darlehen Gesamtzinsen = ${totalInterest.toLocaleString('de-DE')} EUR => Gesamtkosten Darlehen = ${totalLoanCost.toLocaleString('de-DE')} EUR.\n2. Gesamtkosten Leasing = (${years * 12} Monate * ${monthlyRate.toLocaleString('de-DE')} EUR) + ${residualValue.toLocaleString('de-DE')} EUR = ${totalLeasingCost.toLocaleString('de-DE')} EUR.\n3. Vergleich: Das ${isLoanCheaper ? 'Abzahlungsdarlehen' : 'Leasing'} ist um ${diffSavings.toLocaleString('de-DE')} EUR günstiger (Abweichung: ${pctDiff.toFixed(2)} %).`,
                explanation: `Lineare Tilgung: ${linearTilgung.toLocaleString('de-DE')} EUR/Jahr. Zinsen sinken jährlich auf die Restschuld. Gesamtkosten: Darlehen = ${totalLoanCost.toLocaleString('de-DE')} EUR vs. Leasing = ${totalLeasingCost.toLocaleString('de-DE')} EUR.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "Investitionsrechnung: Darlehen vs. Leasing (LF 1/6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Eine Investition von ${investSum.toLocaleString('de-DE')} EUR wird verglichen: Abzahlungsdarlehen (${years} Jahre, ${interestRate.toFixed(1)} % p.a. Zinsen) vs. Leasing (${years * 12} Monate à ${monthlyRate.toLocaleString('de-DE')} EUR + ${residualValue.toLocaleString('de-DE')} EUR Restwert).\n\nWie hoch sind die Gesamtkosten beider Alternativen?`,
                options: [
                    `Darlehen: ${totalLoanCost.toLocaleString('de-DE')} EUR | Leasing: ${totalLeasingCost.toLocaleString('de-DE')} EUR`,
                    `Darlehen: ${(totalLoanCost + 20000).toLocaleString('de-DE')} EUR | Leasing: ${totalLeasingCost.toLocaleString('de-DE')} EUR`,
                    `Darlehen: ${totalLoanCost.toLocaleString('de-DE')} EUR | Leasing: ${(totalLeasingCost + 30000).toLocaleString('de-DE')} EUR`,
                    `Beide exakt ${totalLoanCost.toLocaleString('de-DE')} EUR`
                ],
                correctAnswer: 0,
                explanation: `Gesamtzinsen Darlehen: ${totalInterest.toLocaleString('de-DE')} EUR. Gesamtkosten Darlehen = ${totalLoanCost.toLocaleString('de-DE')} EUR. Leasing = ${years * 12} * ${monthlyRate} + ${residualValue} = ${totalLeasingCost.toLocaleString('de-DE')} EUR.`
            });
        }
    }

    // G4. Bildscans & Speicherplatzberechnung (LF 2 / LF 4)
    for (let i = 0; i < 15; i++) {
        const hours = [8, 16, 24][Math.floor(Math.random() * 3)];
        const partsPerHour = [20, 30, 40][Math.floor(Math.random() * 3)];
        const widthCm = [40, 50, 60][Math.floor(Math.random() * 3)];
        const heightCm = [25, 30, 40][Math.floor(Math.random() * 3)];
        const dpi = [300, 400][Math.floor(Math.random() * 2)];
        const bytePerPixel = 3; // 24 Bit RGB

        const totalParts = hours * partsPerHour;
        const doubleScans = Math.round(totalParts * (2 / 3));
        const singleScans = totalParts - doubleScans;
        const totalScans = (doubleScans * 2) + singleScans;

        const widthInch = widthCm / 2.54;
        const heightInch = heightCm / 2.54;
        const pixelW = Math.round(widthInch * dpi);
        const pixelH = Math.round(heightInch * dpi);
        const bytesPerScan = pixelW * pixelH * bytePerPixel;
        const totalBytes = totalScans * bytesPerScan;
        const totalGiB = Math.round((totalBytes / (1024 * 1024 * 1024)) * 10) / 10;
        const gibRounded = Math.ceil(totalBytes / (1024 * 1024 * 1024));

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "Digitalisierung & Speicherbedarf: Scanfläche & Auflösung (LF 2/4)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Bildverarbeitung (LF 2 / LF 4):\nIn einer Fertigung laufen Anlagen ${hours} h/Tag bei ${partsPerHour} Teilen/h.\n2/3 der Teile werden beidseitig (2 Scans) und 1/3 einseitig (1 Scan) erfasst.\nScanparameter: ${widthCm} cm x ${heightCm} cm, ${dpi} dpi x ${dpi} dpi, Farbtiefe 24 Bit unkomprimiert (1 Inch = 2,54 cm).\n\nAufgaben:\n1. Ermitteln Sie die Gesamtzahl der Scans pro Tag.\n2. Berechnen Sie das tägliche unkomprimierte Speichervolumen in vollen GiB (Binärpräfix).`,
                musterloesung: `Musterlösung:\n1. Gefertigte Teile = ${hours} h * ${partsPerHour} Teile/h = ${totalParts} Teile.\n   Scans = (${doubleScans} * 2) + (${singleScans} * 1) = ${totalScans} Scans/Tag.\n2. Pixel pro Bild = (${widthCm} / 2,54 * ${dpi}) * (${heightCm} / 2,54 * ${dpi}) ≈ ${pixelW} * ${pixelH} = ${(pixelW * pixelH).toLocaleString('de-DE')} Pixel.\n   Dateigröße pro Bild = ${(pixelW * pixelH).toLocaleString('de-DE')} * 3 Bytes ≈ ${(bytesPerScan / 1000000).toFixed(2)} MB.\n   Tagesvolumen = ${totalScans} * ${bytesPerScan} Bytes = ${totalBytes.toLocaleString('de-DE')} Bytes => ${gibRounded} GiB (genau: ${totalGiB} GiB).`,
                explanation: `Scans pro Tag: ${totalScans}. Pixel: ${pixelW} x ${pixelH}. Pro Scan: ${(bytesPerScan / (1024*1024)).toFixed(1)} MiB. Tagesbedarf: ${gibRounded} GiB.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "Digitalisierung & Speicherbedarf: Scan-Speicherplatz (LF 2/4)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Bei ${hours} h Betrieb und ${partsPerHour} Teilen/h werden 2/3 beidseitig und 1/3 einseitig mit ${dpi} dpi (${widthCm}x${heightCm} cm, 24 Bit) gescannt.\n\nWie viele Scans fallen täglich an und welches Speichervolumen in GiB wird benötigt?`,
                options: [
                    `${totalScans} Scans | ca. ${gibRounded} GiB`,
                    `${totalParts} Scans | ca. ${Math.round(gibRounded * 0.6)} GiB`,
                    `${totalScans * 2} Scans | ca. ${gibRounded * 2} GiB`,
                    `${totalScans} Scans | ca. ${Math.round(gibRounded * 10)} GiB`
                ],
                correctAnswer: 0,
                explanation: `Teile: ${totalParts} -> ${doubleScans}*2 + ${singleScans}*1 = ${totalScans} Scans. Speichervolumen = ${totalScans} * (${pixelW}*${pixelH}*3) / 1024^3 ≈ ${gibRounded} GiB.`
            });
        }
    }

    // G5. Materialbedarfsplanung & Verschnittberechnung "im Hundert" (LF 1 / LF 6)
    for (let i = 0; i < 15; i++) {
        const netMeters = [1800, 2300, 2800, 3200][Math.floor(Math.random() * 4)];
        const wastePct = [5, 8, 10, 12][Math.floor(Math.random() * 4)];
        const stock = netMeters + 100;
        const ironStock = 500;
        const workStock = 200;
        const reservedStock = 400;

        const availableStock = stock - ironStock - workStock - reservedStock;
        const grossToPurchase = Math.ceil(netMeters / (1 - (wastePct / 100)));
        const orderAmount = Math.max(0, grossToPurchase - availableStock);

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "Materialdisposition: Verschnittrechnung im Hundert & Bestellmenge (LF 1/6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Materialbedarfsplanung (LF 1 / LF 6):\nFür ein Projekt werden netto ${netMeters} Meter Verlegekabel benötigt. Der Betrieb rechnet mit ${wastePct} % Verschnitt von der einzukaufenden Menge (Rechnung im Hundert).\nLagerbestand: ${stock} m, Mindestbestand (Eiserner Bestand): ${ironStock} m, Werkstattbestand: ${workStock} m, Vormerkbestand: ${reservedStock} m.\n\nAufgaben:\n1. Ermitteln Sie die für das Projekt verfügbare Lagermenge.\n2. Berechnen Sie die einzukaufende Menge (inkl. Verschnitt) in vollen Metern.\n3. Berechnen Sie die erforderliche Bestellmenge beim Lieferanten.`,
                musterloesung: `Musterlösung:\n1. Verfügbare Menge = ${stock} m - ${ironStock} m - ${workStock} m - ${reservedStock} m = ${availableStock} Meter.\n2. Einzukaufende Menge (im Hundert) = ${netMeters} m / (1 - ${wastePct / 100}) = ${grossToPurchase} Meter.\n3. Bestellmenge = ${grossToPurchase} m - ${availableStock} m = ${orderAmount} Meter.`,
                explanation: `Verschnitt im Hundert: Netto / (1 - ${wastePct}%) = ${netMeters} / ${1 - wastePct/100} = ${grossToPurchase} m. Verfügbar = ${availableStock} m. Bestellung = ${orderAmount} m.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "Materialdisposition: Verschnittrechnung im Hundert (LF 1/6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Ein Betrieb benötigt ${netMeters} m Kabel mit ${wastePct} % Verschnitt von der Einkaufsmenge. Lagerbestand: ${stock} m, Mindestbestand: ${ironStock} m, Werkstatt: ${workStock} m, Vormerk: ${reservedStock} m.\n\nWelche Bestellmenge muss geordert werden?`,
                options: [
                    `${orderAmount} Meter (Einkauf: ${grossToPurchase} m, Verfügbar: ${availableStock} m)`,
                    `${grossToPurchase} Meter (ohne Lagerverrechnung)`,
                    `${orderAmount + 300} Meter`,
                    `${Math.round(netMeters * (1 + wastePct / 100))} Meter`
                ],
                correctAnswer: 0,
                explanation: `Einkaufsmenge = ${netMeters} / (1 - 0,${wastePct < 10 ? '0' + wastePct : wastePct}) = ${grossToPurchase} m. Verfügbar = ${stock} - ${ironStock} - ${workStock} - ${reservedStock} = ${availableStock} m. Bestellmenge = ${grossToPurchase} - ${availableStock} = ${orderAmount} m.`
            });
        }
    }

    // G6. Externe Bandbreite VoIP & Datenabgleich (LF 3)
    for (let i = 0; i < 15; i++) {
        const calls = [20, 25, 30, 40, 50][Math.floor(Math.random() * 5)];
        const kbitPerCall = 100; // 100 kbit/s
        const syncMbit = [5, 10, 15, 20][Math.floor(Math.random() * 4)];

        const voipMbit = (calls * kbitPerCall) / 1000;
        const totalMbit = Math.round((voipMbit + syncMbit) * 10) / 10;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                topic: "Netzwerktechnik: Bandbreitenberechnung VoIP & Synchronisation (LF 3)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe WAN-Bandbreitenanalyse (LF 3):\nEin Standortanschluss soll für folgende Anforderungen ausgelegt werden:\n- ${calls} parallele VoIP-Gespräche mit mindestens ${kbitPerCall} kbit/s pro Verbindung.\n- Kontinuierlicher Datenabgleich mit der Firmenzentrale: mindestens ${syncMbit} Mbit/s.\n\nErmitteln Sie die erforderliche symmetrische Gesamtbandbreite des Internetanschlusses in Mbit/s.`,
                musterloesung: `Musterlösung:\n1. Bandbreite VoIP = ${calls} * ${kbitPerCall} kbit/s = ${calls * kbitPerCall} kbit/s = ${voipMbit.toFixed(1)} Mbit/s.\n2. Bandbreite Datenabgleich = ${syncMbit} Mbit/s.\n3. Symmetrische Gesamtbandbreite = ${voipMbit.toFixed(1)} Mbit/s + ${syncMbit} Mbit/s = ${totalMbit.toFixed(1)} Mbit/s.`,
                explanation: `VoIP: ${calls} * 100 kbit/s = ${voipMbit} Mbit/s. Daten: ${syncMbit} Mbit/s. Gesamt: ${totalMbit} Mbit/s.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                topic: "Netzwerktechnik: VoIP-Bandbreitenbedarf (LF 3)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Wie viel Bandbreite benötigen ${calls} VoIP-Gespräche à ${kbitPerCall} kbit/s plus ${syncMbit} Mbit/s Produktionsdatenabgleich?`,
                options: [
                    `${totalMbit.toFixed(1)} Mbit/s`,
                    `${(totalMbit * 1.5).toFixed(1)} Mbit/s`,
                    `${(calls * 0.1).toFixed(1)} Mbit/s`,
                    `${syncMbit} Mbit/s`
                ],
                correctAnswer: 0,
                explanation: `${calls} * ${kbitPerCall} kbit/s = ${voipMbit} Mbit/s. Gesamt: ${voipMbit} + ${syncMbit} = ${totalMbit} Mbit/s.`
            });
        }
    }
// =========================================================================
    // === AUTHENTISCHE DYNAMISCHE GENERATOREN: MUSTERKLAUSUREN & PREISBILDUNG ===
    // =========================================================================

    // G7. Handelskalkulation: Vorwärtskalkulation (LF 6 / Rechnen)
    for (let i = 0; i < 15; i++) {
        const lep = [800, 1000, 1200, 1500, 2000][Math.floor(Math.random() * 5)];
        const lRabattPct = [10, 15, 20][Math.floor(Math.random() * 3)];
        const lSkontoPct = 2; // 2 %
        const bezugskosten = [15, 20, 25, 30][Math.floor(Math.random() * 4)];
        const hkzPct = [25, 30, 35, 40][Math.floor(Math.random() * 4)];
        const gewinnPct = [10, 12, 15][Math.floor(Math.random() * 3)];

        const zep = lep * (1 - lRabattPct / 100);
        const bep = zep * (1 - lSkontoPct / 100);
        const bezugspreis = bep + bezugskosten;
        const handlungskosten = bezugspreis * (hkzPct / 100);
        const selbstkosten = bezugspreis + handlungskosten;
        const gewinn = selbstkosten * (gewinnPct / 100);
        const bvp = selbstkosten + gewinn;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "Handelskalkulation: Vorwärtskalkulation bis Barverkaufspreis (LF 6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Handelskalkulation (LF 6):\nKalkulieren Sie für einen Hardware-Artikel den Barverkaufspreis (BVP) anhand folgender Angaben:\n- Listeneinkaufspreis (LEP): ${lep.toFixed(2)} EUR\n- Lieferantenrabatt: ${lRabattPct} %\n- Lieferantenskonto: ${lSkontoPct} %\n- Bezugskosten: ${bezugskosten.toFixed(2)} EUR\n- Handlungskostenzuschlag (HKZ): ${hkzPct} %\n- Gewinnzuschlag: ${gewinnPct} %\n\nErmitteln Sie Bezugspreis, Selbstkosten und Barverkaufspreis (BVP) mit vollständigem Rechenweg.`,
                musterloesung: `Musterlösung:\n1. LEP = ${lep.toFixed(2)} EUR - ${lRabattPct}% Rabatt (${(lep * lRabattPct / 100).toFixed(2)} EUR) = ZEP: ${zep.toFixed(2)} EUR.\n2. ZEP - ${lSkontoPct}% Skonto (${(zep * lSkontoPct / 100).toFixed(2)} EUR) = BEP: ${bep.toFixed(2)} EUR.\n3. BEP + Bezugskosten (${bezugskosten.toFixed(2)} EUR) = Bezugspreis: ${bezugspreis.toFixed(2)} EUR.\n4. Bezugspreis + ${hkzPct}% HKZ (${handlungskosten.toFixed(2)} EUR) = Selbstkosten: ${selbstkosten.toFixed(2)} EUR.\n5. Selbstkosten + ${gewinnPct}% Gewinn (${gewinn.toFixed(2)} EUR) = Barverkaufspreis (BVP): ${bvp.toFixed(2)} EUR.`,
                explanation: `Vorwärtskalkulation: LEP (${lep} EUR) -> Rabatt (${lRabattPct}%) -> Skonto (${lSkontoPct}%) -> Bezugskosten (${bezugskosten} EUR) = Bezugspreis (${bezugspreis.toFixed(2)} EUR) -> HKZ (${hkzPct}%) = Selbstkosten (${selbstkosten.toFixed(2)} EUR) -> Gewinn (${gewinnPct}%) = BVP (${bvp.toFixed(2)} EUR).`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "Handelskalkulation: Bezugspreis & Selbstkosten (LF 6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Ein Server hat einen Listeneinkaufspreis von ${lep.toFixed(2)} EUR (${lRabattPct} % Rabatt, ${lSkontoPct} % Skonto, ${bezugskosten.toFixed(2)} EUR Bezugskosten, ${hkzPct} % HKZ, ${gewinnPct} % Gewinn).\n\nWie hoch ist der Bezugspreis (Einstandspreis)?`,
                options: [
                    `${bezugspreis.toFixed(2)} EUR`,
                    `${(bezugspreis * 1.15).toFixed(2)} EUR`,
                    `${selbstkosten.toFixed(2)} EUR`,
                    `${zep.toFixed(2)} EUR`
                ],
                correctAnswer: 0,
                explanation: `ZEP = ${lep} * ${(1 - lRabattPct/100).toFixed(2)} = ${zep.toFixed(2)} EUR. BEP = ${zep.toFixed(2)} * 0,98 = ${bep.toFixed(2)} EUR. Bezugspreis = ${bep.toFixed(2)} + ${bezugskosten} = ${bezugspreis.toFixed(2)} EUR.`
            });
        }
    }

    // G8. Kalkulationszuschlag & Handelsspanne (LF 6 / Rechnen)
    for (let i = 0; i < 15; i++) {
        const bezugspreis = [400, 500, 600, 800, 1000][Math.floor(Math.random() * 5)];
        const markupPct = [40, 50, 60, 75, 80][Math.floor(Math.random() * 5)];
        const nettoLvp = Math.round(bezugspreis * (1 + markupPct / 100));
        const diff = nettoLvp - bezugspreis;
        const kalkFaktor = Math.round((nettoLvp / bezugspreis) * 100) / 100;
        const handelsspanne = Math.round(((diff / nettoLvp) * 100) * 10) / 10;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "Handelskalkulation: Kalkulationszuschlag, Faktor & Handelsspanne (LF 6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Kennzahlen der Handelskalkulation (LF 6):\nFür einen Artikel beträgt der Bezugspreis ${bezugspreis.toFixed(2)} EUR und der Netto-Listenverkaufspreis ${nettoLvp.toFixed(2)} EUR.\n\nBerechnen Sie:\n1. Den Kalkulationszuschlag in %\n2. Den Kalkulationsfaktor\n3. Die Handelsspanne in %`,
                musterloesung: `Musterlösung:\n1. Kalkulationszuschlag = ((${nettoLvp} EUR - ${bezugspreis} EUR) / ${bezugspreis} EUR) * 100 = ${markupPct.toFixed(1)} %.\n2. Kalkulationsfaktor = ${nettoLvp} EUR / ${bezugspreis} EUR = ${kalkFaktor.toFixed(2)}.\n3. Handelsspanne = ((${nettoLvp} EUR - ${bezugspreis} EUR) / ${nettoLvp} EUR) * 100 = ${handelsspanne.toFixed(1)} %.`,
                explanation: `Kalkulationszuschlag = Diff/Bezugspreis = ${markupPct}%. Handelsspanne = Diff/Netto-LVP = ${handelsspanne}%. Kalkulationsfaktor = ${kalkFaktor}.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "Handelskalkulation: Handelsspanne & Kalkulationsfaktor (LF 6)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Bei einem Bezugspreis von ${bezugspreis.toFixed(2)} EUR und Netto-LVP von ${nettoLvp.toFixed(2)} EUR: Wie hoch sind Kalkulationszuschlag und Handelsspanne?`,
                options: [
                    `Kalkulationszuschlag: ${markupPct.toFixed(1)} % | Handelsspanne: ${handelsspanne.toFixed(1)} %`,
                    `Kalkulationszuschlag: ${handelsspanne.toFixed(1)} % | Handelsspanne: ${markupPct.toFixed(1)} %`,
                    `Beide exakt ${markupPct.toFixed(1)} %`,
                    `Kalkulationszuschlag: ${(markupPct + 10).toFixed(1)} % | Handelsspanne: ${(handelsspanne - 10).toFixed(1)} %`
                ],
                correctAnswer: 0,
                explanation: `Kalkulationszuschlag bezieht sich auf Bezugspreis (${diff}/${bezugspreis} = ${markupPct}%). Handelsspanne bezieht sich auf Verkaufspreis (${diff}/${nettoLvp} = ${handelsspanne}%).`
            });
        }
    }

    // G9. RAID-Kapazitäten & Ausfallsicherheit (LF 2 / Rechnen)
    for (let i = 0; i < 15; i++) {
        const diskCount = [4, 6, 8][Math.floor(Math.random() * 3)];
        const diskSizeTiB = [2, 4, 8, 12][Math.floor(Math.random() * 4)];
        const raidType = [5, 6, 10][Math.floor(Math.random() * 3)];

        let netCapacity = 0;
        let faultTolerance = "";
        if (raidType === 5) {
            netCapacity = (diskCount - 1) * diskSizeTiB;
            faultTolerance = "1 Festplatte";
        } else if (raidType === 6) {
            netCapacity = (diskCount - 2) * diskSizeTiB;
            faultTolerance = "2 Festplatten gleichzeitig";
        } else {
            netCapacity = (diskCount / 2) * diskSizeTiB;
            faultTolerance = "mindestens 1 Festplatte (max. 1 pro Spiegelpaar)";
        }

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "Speichertechnik: RAID-Nettokapazität & Ausfallsicherheit (LF 2)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Speicherhardware (LF 2):\nEin Speicher-Server wird mit ${diskCount} Festplatten à ${diskSizeTiB} TiB in einem RAID ${raidType}-Verbund aufgebaut.\n\n1. Berechnen Sie die nutzbare Netto-Speicherkapazität in TiB.\n2. Wie viele Festplatten dürfen maximal gleichzeitig ausfallen, ohne dass es zu Datenverlust kommt?`,
                musterloesung: `Musterlösung:\n1. Netto-Speicherkapazität RAID ${raidType}: ${raidType === 5 ? `(n - 1) * Kapazität = (${diskCount} - 1) * ${diskSizeTiB} TiB = ${netCapacity} TiB.` : raidType === 6 ? `(n - 2) * Kapazität = (${diskCount} - 2) * ${diskSizeTiB} TiB = ${netCapacity} TiB.` : `(n / 2) * Kapazität = (${diskCount} / 2) * ${diskSizeTiB} TiB = ${netCapacity} TiB.`}\n2. Ausfallsicherheit: Es darf / dürfen ${faultTolerance} ausfallen.`,
                explanation: `Formel RAID ${raidType}: ${raidType === 5 ? '(n-1)*C' : raidType === 6 ? '(n-2)*C' : '(n/2)*C'}. Netto = ${netCapacity} TiB.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "Speichertechnik: RAID-Kapazität (LF 2)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Ein RAID ${raidType} besteht aus ${diskCount} Festplatten à ${diskSizeTiB} TiB. Welche Netto-Speicherkapazität steht zur Verfügung?`,
                options: [
                    `${netCapacity} TiB`,
                    `${diskCount * diskSizeTiB} TiB`,
                    `${netCapacity - diskSizeTiB} TiB`,
                    `${netCapacity / 2} TiB`
                ],
                correctAnswer: 0,
                explanation: `RAID ${raidType} bei ${diskCount} Platten à ${diskSizeTiB} TiB ergibt ${netCapacity} TiB nutzbare Kapazität.`
            });
        }
    }

    // G10. Elektrotechnik: Grundgrößen & Ohmsches Gesetz (LF 2 / Rechnen)
    for (let i = 0; i < 15; i++) {
        const u = [12, 24, 230][Math.floor(Math.random() * 3)];
        const i_amp = [2, 5, 10, 16][Math.floor(Math.random() * 4)];
        const r = Math.round((u / i_amp) * 10) / 10;
        const p = u * i_amp;
        const hours = [2, 4, 8, 24][Math.floor(Math.random() * 4)];
        const energyWh = p * hours;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "Elektrotechnik: Ohmsches Gesetz, Leistung & Energie (LF 2)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Elektrotechnik (LF 2):\nEin IT-Gerät wird an einer Spannung von ${u} V betrieben. Dabei wird eine Stromstärke von ${i_amp} A gemessen.\n\nBerechnen Sie:\n1. Den elektrischen Widerstand R in Ohm.\n2. Die elektrische Leistung P in Watt.\n3. Die verbrauchte elektrische Energie W in Wh bei einer Betriebsdauer von ${hours} Stunden.`,
                musterloesung: `Musterlösung:\n1. Widerstand R = U / I = ${u} V / ${i_amp} A = ${r} Ohm (Ω).\n2. Leistung P = U * I = ${u} V * ${i_amp} A = ${p} Watt (W).\n3. Energie W = P * t = ${p} W * ${hours} h = ${energyWh} Wh (Wattstunden).`,
                explanation: `R = U / I = ${r} Ω. P = U * I = ${p} W. W = P * t = ${energyWh} Wh.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "Elektrotechnik: Leistung & Energie (LF 2)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Ein IT-System zieht bei ${u} V Spannung einen Strom von ${i_amp} A. Welche Leistung P und welcher Energieverbrauch W fallen in ${hours} Stunden an?`,
                options: [
                    `P = ${p} W | W = ${energyWh} Wh`,
                    `P = ${p * 2} W | W = ${energyWh * 2} Wh`,
                    `P = ${r} W | W = ${energyWh / 2} Wh`,
                    `P = ${u} W | W = ${p} Wh`
                ],
                correctAnswer: 0,
                explanation: `P = ${u} V * ${i_amp} A = ${p} W. W = ${p} W * ${hours} h = ${energyWh} Wh.`
            });
        }
    }

    // G11. IPv4-Subnetting & Host-Kapazitäten (LF 3 / Rechnen)
    for (let i = 0; i < 15; i++) {
        const prefix = [24, 25, 26, 27, 28, 29, 30][Math.floor(Math.random() * 7)];
        const hostBits = 32 - prefix;
        const totalIps = Math.pow(2, hostBits);
        const usableHosts = prefix === 31 ? 2 : prefix === 32 ? 1 : totalIps - 2;
        const maskOctet = 256 - totalIps;
        const fullMask = `255.255.255.${maskOctet}`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                topic: "Netzwerktechnik: Subnetzmaske & nutzbare Host-IPs (LF 3)",
                isCalculation: true,
                isBawueFocus: true,
                type: "open-text",
                question: `Prüfungsaufgabe Subnetting (LF 3):\nEin Netzwerk-Segment erhält die CIDR-Präfixlänge /${prefix}.\n\n1. Ermitteln Sie die zugehörige Subnetzmaske in dotted-decimal Notation.\n2. Berechnen Sie die maximale Anzahl an nutzbaren Host-IP-Adressen in diesem Subnetz.`,
                musterloesung: `Musterlösung:\n1. Subnetzmaske: ${fullMask} (Präfix /${prefix} = ${prefix} gesetzte Einsen-Bits).\n2. Host-Bits = 32 - ${prefix} = ${hostBits} Bits => 2^${hostBits} = ${totalIps} IP-Adressen gesamt.\n   Nutzbare Hosts = ${totalIps} - 2 (abzüglich Netz-ID und Broadcast-Adresse) = ${usableHosts} Host-Adressen.`,
                explanation: `/${prefix} -> Host-Bits: ${hostBits} -> 2^${hostBits} - 2 = ${usableHosts} nutzbare Host-IPs. Subnetzmaske: ${fullMask}.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                topic: "Netzwerktechnik: Host-Adressen je CIDR-Präfix (LF 3)",
                isCalculation: true,
                isBawueFocus: true,
                type: "multiple-choice",
                question: `Wie viele nutzbare Host-IP-Adressen stehen in einem Subnetz mit der Präfixlänge /${prefix} (${fullMask}) zur Verfügung?`,
                options: [
                    `${usableHosts} Hosts`,
                    `${totalIps} Hosts (inkl. Netz-ID und Broadcast)`,
                    `${usableHosts * 2} Hosts`,
                    `${usableHosts + 8} Hosts`
                ],
                correctAnswer: 0,
                explanation: `Host-Bits = 32 - ${prefix} = ${hostBits}. 2^${hostBits} - 2 = ${usableHosts} nutzbare Hosts.`
            });
        }
    }

    
    // ============================================================================
    // 🔥 MEISTERKLASSE: SCHWERE PRÜFUNGSAUFGABEN (IHK HARDCORE / PROFI-NIVEAU)
    // ============================================================================

    // MC1: Mehrstufige VLSM-Subnetzplanung (LF 3 / Rechnen / Schwer)
    for (let i = 0; i < 20; i++) {
        const netBaseB = [16, 20, 24, 32, 48][Math.floor(Math.random() * 5)];
        const baseNet = `172.${netBaseB}.0.0/20`;
        const abtA_hosts = [420, 460, 490, 500][Math.floor(Math.random() * 4)]; // Needs /23 (512 IPs)
        const abtB_hosts = [180, 210, 230, 240][Math.floor(Math.random() * 4)]; // Needs /24 (256 IPs)
        const abtC_hosts = [45, 52, 58, 60][Math.floor(Math.random() * 4)];      // Needs /26 (64 IPs)
        const abtD_hosts = 2; // Needs /30 (4 IPs)

        const netA = `172.${netBaseB}.0.0/23 (Maske: 255.255.254.0) -> Erste Host-IP: 172.${netBaseB}.0.1, Letzte Host-IP: 172.${netBaseB}.1.254, Broadcast: 172.${netBaseB}.1.255 (Kapazität: 510 nutzbare Hosts)`;
        const netB = `172.${netBaseB}.2.0/24 (Maske: 255.255.255.0) -> Erste Host-IP: 172.${netBaseB}.2.1, Letzte Host-IP: 172.${netBaseB}.2.254, Broadcast: 172.${netBaseB}.2.255 (Kapazität: 254 nutzbare Hosts)`;
        const netC = `172.${netBaseB}.3.0/26 (Maske: 255.255.255.192) -> Erste Host-IP: 172.${netBaseB}.3.1, Letzte Host-IP: 172.${netBaseB}.3.62, Broadcast: 172.${netBaseB}.3.63 (Kapazität: 62 nutzbare Hosts)`;
        const netD = `172.${netBaseB}.3.64/30 (Maske: 255.255.255.252) -> Erste Host-IP: 172.${netBaseB}.3.65, Letzte Host-IP: 172.${netBaseB}.3.66, Broadcast: 172.${netBaseB}.3.67 (Kapazität: 2 nutzbare Hosts)`;

        const qText = `🔥 Meisterklasse Prüfungsaufgabe VLSM (LF 3):\nEin Unternehmen erhält den Adressblock ${baseNet} zugewiesen. Für eine Standortvernetzung müssen vier Teilnetze mit Variable Length Subnet Masking (VLSM) ohne Adressverschwendung gebildet werden:\n- Subnetz A (Produktion): ${abtA_hosts} Hosts benötigt\n- Subnetz B (Verwaltung): ${abtB_hosts} Hosts benötigt\n- Subnetz C (Server / DMZ): ${abtC_hosts} Hosts benötigt\n- Subnetz D (Point-to-Point WAN-Link): ${abtD_hosts} Hosts benötigt\n\nErmittle für alle vier Subnetze:\n1. Das jeweilige Subnetz-Präfix (CIDR) und die Subnetzmaske in Dotted-Decimal-Notation.\n2. Die Netz-ID, den ersten nutzbaren Host, den letzten nutzbaren Host und die Broadcast-Adresse.`;

        const mLoesung = `Musterlösung VLSM-Subnetzplanung:\nSortierung nach Hostbedarf (absteigend):\n\n1. Subnetz A (${abtA_hosts} Hosts):\n   - Benötigte Adressen: ${abtA_hosts} + 2 = ${abtA_hosts + 2} -> Nächste Zweierpotenz = 512 (2^9) -> 9 Host-Bits, 23 Netz-Bits (/23).\n   - ${netA}\n\n2. Subnetz B (${abtB_hosts} Hosts):\n   - Benötigte Adressen: ${abtB_hosts} + 2 = ${abtB_hosts + 2} -> 2^8 = 256 Adressen -> 8 Host-Bits (/24).\n   - ${netB}\n\n3. Subnetz C (${abtC_hosts} Hosts):\n   - Benötigte Adressen: ${abtC_hosts} + 2 = ${abtC_hosts + 2} -> 2^6 = 64 Adressen -> 6 Host-Bits (/26).\n   - ${netC}\n\n4. Subnetz D (${abtD_hosts} Hosts WAN):\n   - Benötigte Adressen: 2 + 2 = 4 -> 2^2 = 4 Adressen -> 2 Host-Bits (/30).\n   - ${netD}`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                topic: "🔥 Meisterklasse: VLSM Multi-Subnetzplanung (LF 3)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `VLSM-Regel: Immer mit dem größten Subnetz beginnen, um Fragmentierung zu vermeiden. Subnetz A (/23 = 512 IPs), B (/24 = 256 IPs), C (/26 = 64 IPs), D (/30 = 4 IPs).`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                topic: "🔥 Meisterklasse: VLSM Multi-Subnetzplanung (LF 3)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWelche Netz-ID und Subnetzmaske erhält Subnetz C (Server/DMZ)?`,
                options: [
                    `172.${netBaseB}.3.0/26 (255.255.255.192)`,
                    `172.${netBaseB}.2.0/26 (255.255.255.192)`,
                    `172.${netBaseB}.3.0/25 (255.255.255.128)`,
                    `172.${netBaseB}.4.0/26 (255.255.255.192)`
                ],
                correctAnswer: 0,
                explanation: `Nach Subnetz A (172.${netBaseB}.0.0/23 = 0.0-1.255) und Subnetz B (172.${netBaseB}.2.0/24 = 2.0-2.255) beginnt Subnetz C bei 172.${netBaseB}.3.0 mit /26 (255.255.255.192).`
            });
        }
    }

    // MC2: CIDR Route Summarization & Longest Prefix Match Routing (LF 3 / Schwer)
    for (let i = 0; i < 15; i++) {
        const thirdOctet = [16, 32, 64, 128][Math.floor(Math.random() * 4)];
        const nets = [
            `192.168.${thirdOctet}.0/24`,
            `192.168.${thirdOctet + 1}.0/24`,
            `192.168.${thirdOctet + 2}.0/24`,
            `192.168.${thirdOctet + 3}.0/24`
        ];
        const summaryNet = `192.168.${thirdOctet}.0/22`;
        const summaryMask = "255.255.252.0";

        const isOpen = shouldBeOpenText();
        const qText = `🔥 Meisterklasse Routing & CIDR (LF 3):\nEin Core-Router verbindet vier getrennte Netze:\n- Netz 1: ${nets[0]}\n- Netz 2: ${nets[1]}\n- Netz 3: ${nets[2]}\n- Netz 4: ${nets[3]}\n\nZur Verkleinerung der Routingtabelle sollen diese vier Teilnetze zu einer einzigen zusammengefassten Supernet-Route (Route Summarization / CIDR Aggregation) aggregiert werden.\n\nErmitteln Sie die optimale summarische Route (Netz-ID und CIDR-Präfix sowie Subnetzmaske in Dotted-Decimal-Notation) und erläutern Sie die binäre Herleitung.`;

        const mLoesung = `Musterlösung CIDR Route Summarization:\n1. Summarische Route: ${summaryNet} mit Subnetzmaske ${summaryMask}\n2. Binäre Herleitung im 3. Oktett:\n   ${thirdOctet}  = ${(thirdOctet).toString(2).padStart(8, '0')}\n   ${thirdOctet + 1} = ${(thirdOctet + 1).toString(2).padStart(8, '0')}\n   ${thirdOctet + 2} = ${(thirdOctet + 2).toString(2).padStart(8, '0')}\n   ${thirdOctet + 3} = ${(thirdOctet + 3).toString(2).padStart(8, '0')}\n   Gemeinsame führende Bits im 3. Oktett: 6 Bits identisch -> 16 + 6 = 22 Bits Netzanteil (/22).\n   Subnetzmaske: 255.255.(256 - 4).0 = 255.255.252.0.`;

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                topic: "🔥 Meisterklasse: CIDR Route Aggregation & Supernetting (LF 3)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `4x /24 Netze fassen 4*256 = 1024 Adressen zusammen. 1024 = 2^10 Host-Bits -> 32 - 10 = 22 Netz-Bits (/22). Maske = ${summaryMask}.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                topic: "🔥 Meisterklasse: CIDR Route Aggregation & Supernetting (LF 3)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWelche zusammengefasste Route ist korrekt?`,
                options: [
                    `${summaryNet} (Subnetzmaske: ${summaryMask})`,
                    `192.168.${thirdOctet}.0/23 (Subnetzmaske: 255.255.254.0)`,
                    `192.168.${thirdOctet}.0/21 (Subnetzmaske: 255.255.248.0)`,
                    `192.168.0.0/16 (Subnetzmaske: 255.255.0.0)`
                ],
                correctAnswer: 0,
                explanation: `Die 4 Netze haben 6 identische Bits im 3. Oktett. 16 + 6 = 22 Bit Präfix (${summaryNet}, ${summaryMask}).`
            });
        }
    }

    // MC3: Enterprise Storage, Datacenter Backup, Deduplication, Compression & Bandbreite (LF 3 / LF 2 / LF 7 / Schwer)
    for (let i = 0; i < 15; i++) {
        const rawTB = [12, 16, 20, 24][Math.floor(Math.random() * 4)]; // Terabyte
        const dedupRatio = [2.5, 3.0, 4.0][Math.floor(Math.random() * 3)];
        const compPercent = [20, 25, 30][Math.floor(Math.random() * 3)];
        const backupHours = [3, 4, 5][Math.floor(Math.random() * 3)];
        const overheadPercent = 10; // 10% TCP/IP/Ethernet overhead
        const maxLinkUtilization = 0.80; // max 80% Auslastung

        // Step 1: After Deduplication
        const afterDedupTB = rawTB / dedupRatio;
        // Step 2: After Compression
        const afterCompTB = afterDedupTB * (1 - (compPercent / 100));
        // In GByte:
        const backupGByte = afterCompTB * 1000;
        // In Gbit:
        const backupGbitNet = backupGByte * 8;
        // Gross with 10% overhead:
        const backupGbitGross = backupGbitNet * (1 + (overheadPercent / 100));
        // Seconds:
        const totalSeconds = backupHours * 3600;
        // Required Mbit/s gross:
        const reqMbitGross = (backupGbitGross * 1000) / totalSeconds;
        // Required line speed accounting for 80% max utilization:
        const recommendedLineMbit = reqMbitGross / maxLinkUtilization;

        const qText = `🔥 Meisterklasse Datacenter & Übertragung (LF 3 / LF 7):\nEin Unternehmen muss ein nächtliches Full-Backup eines Datenbestands von ${rawTB} TB (Dezimal: 1 TB = 1.000 GB) über eine WAN-Strecke in ein sekundäres Rechenzentrum übertragen.\n\nRahmenbedingungen:\n- Deduplizierungsrate der Backup-Appliance: ${dedupRatio}:1\n- Anschließende Datenkompression: ${compPercent}%\n- Zeitfenster für das Backup (Backup-Window): maximal ${backupHours} Stunden\n- Protokoll- und Verschlüsselungs-Overhead (IPsec / TCP / L2): ${overheadPercent}%\n- Maximale Leitungsdauerlast: maximal ${maxLinkUtilization * 100}% der nominalen Bandbreite\n\nAufgaben:\n1. Berechnen Sie das effektiv zu übertragende Datenvolumen in GByte (GB).\n2. Berechnen Sie die mindestens erforderliche Brutto-Übertragungsrate in Mbit/s (ohne Auslastungspuffer).\n3. Ermitteln Sie die empfohlene Mindestbandbreite des WAN-Anschlusses in Mbit/s unter Einhaltung der maximalen 80%-Auslastungsgrenze.`;

        const mLoesung = `Musterlösung Datacenter Backup-Dimensionierung:\n\n1. Effektives Datenvolumen:\n   - Nach Deduplikation (${dedupRatio}:1): ${rawTB} TB / ${dedupRatio} = ${afterDedupTB.toFixed(2)} TB\n   - Nach Kompression (-${compPercent}%): ${afterDedupTB.toFixed(2)} TB * (1 - ${compPercent / 100}) = ${afterCompTB.toFixed(2)} TB = ${backupGByte.toFixed(0)} GB\n\n2. Brutto-Datenmenge mit ${overheadPercent}% Overhead:\n   - Netto-Bits: ${backupGByte.toFixed(0)} GB * 8 = ${backupGbitNet.toFixed(0)} Gbit = ${(backupGbitNet * 1000).toFixed(0)} Mbit\n   - Brutto (+${overheadPercent}% Overhead): ${(backupGbitNet * 1000).toFixed(0)} Mbit * 1,10 = ${(backupGbitGross * 1000).toFixed(0)} Mbit\n   - Zeitfenster: ${backupHours} Stunden * 3.600 s = ${totalSeconds} Sekunden\n   - Erforderliche Brutto-Rate: ${(backupGbitGross * 1000).toFixed(0)} Mbit / ${totalSeconds} s = ${reqMbitGross.toFixed(2)} Mbit/s\n\n3. Empfohlene Mindestbandbreite bei max. 80% Leitungsnutzung:\n   - Bandbreite = ${reqMbitGross.toFixed(2)} Mbit/s / 0,80 = ${recommendedLineMbit.toFixed(2)} Mbit/s (z. B. 1 Gbit/s oder ${Math.ceil(recommendedLineMbit / 100) * 100} Mbit/s Anschluss).`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                topic: "🔥 Meisterklasse: Enterprise Backup & Bandbreiten-Kalkulation (LF 3)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `1. Dedup -> Kompression -> ${backupGByte.toFixed(0)} GB. 2. * 8 * 1.10 / ${totalSeconds} s = ${reqMbitGross.toFixed(2)} Mbit/s. 3. / 0.80 = ${recommendedLineMbit.toFixed(2)} Mbit/s.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                topic: "🔥 Meisterklasse: Enterprise Backup & Bandbreiten-Kalkulation (LF 3)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWie hoch ist die mindestens erforderliche Brutto-Übertragungsrate (Frage 2)?`,
                options: [
                    `${reqMbitGross.toFixed(2)} Mbit/s`,
                    `${(reqMbitGross * 0.8).toFixed(2)} Mbit/s`,
                    `${(reqMbitGross * 1.5).toFixed(2)} Mbit/s`,
                    `${(reqMbitGross / 8).toFixed(2)} Mbit/s`
                ],
                correctAnswer: 0,
                explanation: `Brutto-Datenvolumen = ${(backupGbitGross * 1000).toFixed(0)} Mbit. Geteilt durch ${totalSeconds} s = ${reqMbitGross.toFixed(2)} Mbit/s.`
            });
        }
    }

    // MC4: RAID 6 / RAID 10 mit Write Penalty, IOPS-Verlust & Rebuild-Zeiten (LF 2 / LF 7 / Schwer)
    for (let i = 0; i < 15; i++) {
        const diskCount = [8, 10, 12, 16][Math.floor(Math.random() * 4)];
        const diskSizeTB = [12, 16, 18, 20][Math.floor(Math.random() * 4)];
        const diskIops = 75; // SAS HDD 7.2k
        const rebuildRateMBs = 80; // 80 MB/s

        // RAID 6: Net Capacity = (N - 2) * Size
        const raid6NetTB = (diskCount - 2) * diskSizeTB;
        // In TiB: TB * 10^12 / 2^40 = TB * 0.9094947
        const raid6NetTiB = raid6NetTB * (Math.pow(1000, 4) / Math.pow(1024, 4));

        // Rebuild time: 1 disk size in MB / rebuildRate
        const diskSizeMB = diskSizeTB * 1000 * 1000;
        const rebuildSeconds = diskSizeMB / rebuildRateMBs;
        const rebuildHours = rebuildSeconds / 3600;

        const qText = `🔥 Meisterklasse Storage & RAID (LF 2 / LF 7):\nEin Enterprise-Storage-System wird mit ${diskCount} Enterprise-SAS-Festplatten (je ${diskSizeTB} TB Bruttokapazität nach Herstellerangabe in Dezimal, 7.200 U/min, Einzelfestplattenleistung 75 IOPS) in einem RAID 6-Verbund konfiguriert.\n\nAufgaben:\n1. Berechnen Sie die nutzbare Netto-Speicherkapazität des RAID 6 in Terabyte (TB) und in Tebibyte (TiB, gerundet auf 2 Nachkommastellen).\n2. Erläutern Sie den Begriff "Write Penalty" bei RAID 6 und geben Sie den Write-Penalty-Faktor an.\n3. Berechnen Sie die Rebuild-Dauer in Stunden (gerundet auf 1 Nachkommastelle), wenn eine defekte ${diskSizeTB}-TB-Festplatte getauscht wird und der RAID-Controller im Hintergrund eine Rebuild-Geschwindigkeit von durchschnittlich ${rebuildRateMBs} MB/s freigibt.`;

        const mLoesung = `Musterlösung RAID 6 Enterprise Storage:\n\n1. Nutzbare Nettokapazität:\n   - RAID 6 Formel: (N - 2) * Festplattengröße = (${diskCount} - 2) * ${diskSizeTB} TB = ${raid6NetTB} TB (Dezimal).\n   - Umrechnung in TiB (Binär): ${raid6NetTB} * 10^12 Bytes / 1024^4 Bytes = ${raid6NetTiB.toFixed(2)} TiB.\n\n2. Write Penalty bei RAID 6:\n   - Bei RAID 6 müssen für jeden Schreibzugriff die Daten und zwei unabhängige Paritätsblöcke (P und Q) aktualisiert werden (Read-Modify-Write).\n   - Dies erfordert 3 Leseoperationen und 3 Schreiboperationen = 6 I/O-Operationen pro logischem Schreibvorgang (Write Penalty = 6).\n\n3. Rebuild-Dauer der ${diskSizeTB}-TB-Platte:\n   - Datenmenge: ${diskSizeTB} TB = ${(diskSizeTB * 1000 * 1000).toLocaleString('de-DE')} MB\n   - Rebuild-Zeit = ${(diskSizeTB * 1000 * 1000)} MB / ${rebuildRateMBs} MB/s = ${rebuildSeconds.toFixed(0)} Sekunden\n   - In Stunden: ${rebuildSeconds.toFixed(0)} s / 3.600 s/h = ${rebuildHours.toFixed(1)} Stunden (ca. ${(rebuildHours / 24).toFixed(1)} Tage).`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "🔥 Meisterklasse: RAID 6 Write Penalty & Rebuild-Kalkulation (LF 2)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `RAID 6: (N-2)*${diskSizeTB} TB = ${raid6NetTB} TB = ${raid6NetTiB.toFixed(2)} TiB. Write Penalty = 6. Rebuild = ${rebuildHours.toFixed(1)} h.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "🔥 Meisterklasse: RAID 6 Write Penalty & Rebuild-Kalkulation (LF 2)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWie hoch ist der Write-Penalty-Faktor bei RAID 6 und wie lang ist die Rebuild-Dauer?`,
                options: [
                    `Write Penalty: 6 I/Os pro Schreibzugriff | Rebuild-Dauer: ${rebuildHours.toFixed(1)} Stunden`,
                    `Write Penalty: 4 I/Os pro Schreibzugriff | Rebuild-Dauer: ${(rebuildHours * 0.75).toFixed(1)} Stunden`,
                    `Write Penalty: 2 I/Os pro Schreibzugriff | Rebuild-Dauer: ${(rebuildHours * 0.5).toFixed(1)} Stunden`,
                    `Write Penalty: 8 I/Os pro Schreibzugriff | Rebuild-Dauer: ${(rebuildHours * 1.5).toFixed(1)} Stunden`
                ],
                correctAnswer: 0,
                explanation: `RAID 6 hat Write Penalty = 6 (3 Reads + 3 Writes). Rebuild = ${diskSizeTB}*10^6 MB / ${rebuildRateMBs} MB/s / 3600 = ${rebuildHours.toFixed(1)} h.`
            });
        }
    }

    // MC5: USV-Dimensionierung mit Scheinleistung, Wirkleistung, cos phi, Batteriekapa in Ah & Autonomiezeit (LF 2 / LF 7 / Schwer)
    for (let i = 0; i < 15; i++) {
        const serverCount = [6, 8, 10, 12][Math.floor(Math.random() * 4)];
        const serverPowerW = 550; // Watt
        const serverCosPhi = 0.88;
        const switchCount = 2;
        const switchPowerW = 150;
        const switchCosPhi = 0.95;
        const storagePowerW = 600;
        const storageCosPhi = 0.90;
        const reservePercent = 25; // 25% Reserve
        const autonomyMinutes = 30; // 30 min
        const dcVoltage = 48; // 48V DC Bus
        const inverterEfficiency = 0.90; // 90%
        const maxDod = 0.80; // 80% Depth of Discharge

        // Active Power (W)
        const totalActivePowerW = (serverCount * serverPowerW) + (switchCount * switchPowerW) + storagePowerW;
        // Apparent Power (VA)
        const totalApparentPowerVA = ((serverCount * serverPowerW) / serverCosPhi) + 
                                     ((switchCount * switchPowerW) / switchCosPhi) + 
                                     (storagePowerW / storageCosPhi);
        // Required USV Apparent Power with 25% reserve:
        const requiredUsvVA = totalApparentPowerVA * (1 + (reservePercent / 100));
        const requiredUsvKVA = requiredUsvVA / 1000;

        // Battery Capacity: C = (P * t_h) / (U * eta * DOD)
        const autonomyHours = autonomyMinutes / 60;
        const energyWh = totalActivePowerW * autonomyHours;
        const batteryAh = energyWh / (dcVoltage * inverterEfficiency * maxDod);

        const qText = `🔥 Meisterklasse Stromversorgung & USV-Dimensionierung (LF 2 / LF 7):\nEin Server-Rack in einem Rechenzentrum beherbergt folgende Komponenten:\n- ${serverCount}x 2HE-Server mit je ${serverPowerW} W Wirkleistung (Leistungsfaktor cos φ = ${serverCosPhi})\n- ${switchCount}x Redundante Core-Switche mit je ${switchPowerW} W (cos φ = ${switchCosPhi})\n- 1x SAN-Storage-Shelf mit ${storagePowerW} W (cos φ = ${storageCosPhi})\n\nAnforderungen an die Online-Dauerwandler-USV (VFI nach EN 62040-3):\n- Sicherheitsreserve für Lastspitzen und Erweiterungen: ${reservePercent}%\n- Gewünschte Autonomiezeit (Überbrückungszeit bei Stromausfall): ${autonomyMinutes} Minuten\n- USV-Gleichspannungs-Zwischenkreis (DC-Bus): ${dcVoltage} V\n- Wechselrichter-Wirkungsgrad der USV: ${inverterEfficiency * 100}%\n- Maximale Batterie-Entladetiefe (DOD = Depth of Discharge zum Zellenschutz): ${maxDod * 100}%\n\nAufgaben:\n1. Berechnen Sie die gesamte elektrische Wirkleistung P (in Watt) und die gesamte Scheinleistung S (in VA).\n2. Berechnen Sie die empfohlene Mindest-Scheinleistung der USV in kVA (inkl. ${reservePercent}% Reserve).\n3. Berechnen Sie die erforderliche Akkukapazität des externen Batteriepacks in Amperestunden (Ah).`;

        const mLoesung = `Musterlösung USV- & Batterie-Kalkulation:\n\n1. Elektrische Wirk- und Scheinleistung:\n   - Gesamte Wirkleistung P:\n     P = (${serverCount} * ${serverPowerW} W) + (${switchCount} * ${switchPowerW} W) + ${storagePowerW} W = ${(serverCount * serverPowerW)} W + ${(switchCount * switchPowerW)} W + ${storagePowerW} W = ${totalActivePowerW} Watt (${(totalActivePowerW / 1000).toFixed(2)} kW)\n   - Gesamte Scheinleistung S (S = P / cos φ):\n     S_Server = ${(serverCount * serverPowerW)} / ${serverCosPhi} = ${((serverCount * serverPowerW) / serverCosPhi).toFixed(1)} VA\n     S_Switch = ${(switchCount * switchPowerW)} / ${switchCosPhi} = ${((switchCount * switchPowerW) / switchCosPhi).toFixed(1)} VA\n     S_Storage = ${storagePowerW} / ${storageCosPhi} = ${(storagePowerW / storageCosPhi).toFixed(1)} VA\n     S_Gesamt = ${totalApparentPowerVA.toFixed(1)} VA (${(totalApparentPowerVA / 1000).toFixed(2)} kVA)\n\n2. USV-Scheinleistung mit ${reservePercent}% Sicherheitsreserve:\n   - S_USV = ${totalApparentPowerVA.toFixed(1)} VA * 1,25 = ${requiredUsvVA.toFixed(1)} VA = ${requiredUsvKVA.toFixed(2)} kVA (z. B. Standardgröße: ${Math.ceil(requiredUsvKVA)} kVA USV).\n\n3. Erforderliche Akkukapazität für ${autonomyMinutes} min (${autonomyHours} h):\n   - Benötigte Energie = ${totalActivePowerW} W * ${autonomyHours} h = ${energyWh.toFixed(0)} Wh\n   - Batteriekapazität C = Energie / (U_DC * Wirkungsgrad * DOD)\n   - C = ${energyWh.toFixed(0)} Wh / (${dcVoltage} V * ${inverterEfficiency} * ${maxDod}) = ${energyWh.toFixed(0)} Wh / ${(dcVoltage * inverterEfficiency * maxDod).toFixed(2)} V = ${batteryAh.toFixed(1)} Ah.`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "🔥 Meisterklasse: USV-Dimensionierung & Schein-/Wirkleistung (LF 2)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `P = ${totalActivePowerW} W, S = ${totalApparentPowerVA.toFixed(0)} VA. USV (+25%) = ${requiredUsvKVA.toFixed(2)} kVA. Batterie = ${batteryAh.toFixed(1)} Ah bei ${dcVoltage}V.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "🔥 Meisterklasse: USV-Dimensionierung & Schein-/Wirkleistung (LF 2)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWelche USV-Leistung (kVA) und Akkukapazität (Ah) werden benötigt?`,
                options: [
                    `${requiredUsvKVA.toFixed(2)} kVA USV-Leistung | ${batteryAh.toFixed(1)} Ah Akkukapazität`,
                    `${(requiredUsvKVA * 0.8).toFixed(2)} kVA USV-Leistung | ${(batteryAh * 0.7).toFixed(1)} Ah Akkukapazität`,
                    `${(requiredUsvKVA * 1.5).toFixed(2)} kVA USV-Leistung | ${(batteryAh * 1.4).toFixed(1)} Ah Akkukapazität`,
                    `${(totalActivePowerW / 1000).toFixed(2)} kVA USV-Leistung | ${(batteryAh / 2).toFixed(1)} Ah Akkukapazität`
                ],
                correctAnswer: 0,
                explanation: `USV: ${totalApparentPowerVA.toFixed(0)} VA * 1.25 = ${requiredUsvKVA.toFixed(2)} kVA. Akku: ${energyWh.toFixed(0)} Wh / (${dcVoltage}*0.9*0.8) = ${batteryAh.toFixed(1)} Ah.`
            });
        }
    }

    // MC6: Rechenzentrums-PUE, Kühlung & Energiekostenberechnung (LF 2 / LF 7 / Schwer)
    for (let i = 0; i < 15; i++) {
        const itPowerKW = [100, 120, 150, 180][Math.floor(Math.random() * 4)];
        const totalPowerKW = itPowerKW + [60, 75, 90, 110][Math.floor(Math.random() * 4)];
        const currentPUE = totalPowerKW / itPowerKW;
        const targetPUE = 1.25;
        const electricityPriceEur = 0.32; // 0,32 EUR/kWh
        const hoursPerYear = 8760; // 365 * 24

        const currentYearlyKWh = totalPowerKW * hoursPerYear;
        const currentYearlyCostEur = currentYearlyKWh * electricityPriceEur;

        const targetTotalPowerKW = itPowerKW * targetPUE;
        const targetYearlyKWh = targetTotalPowerKW * hoursPerYear;
        const targetYearlyCostEur = targetYearlyKWh * electricityPriceEur;

        const yearlySavingsEur = currentYearlyCostEur - targetYearlyCostEur;

        const qText = `🔥 Meisterklasse Datacenter Green-IT & PUE (LF 2 / LF 7):\nEin Rechenzentrum misst im Dauerbetrieb eine durchschnittliche Leistungsaufnahme der IT-Hardware (Server, Storage, Switche) von ${itPowerKW} kW. Die gesamte Leistungsaufnahme der gesamten RZ-Infrastruktur (inkl. Kältemaschinen, USV-Verlusten, Lüftung und Beleuchtung) beträgt ${totalPowerKW} kW.\n\nRahmendaten:\n- Strompreis: ${electricityPriceEur.toFixed(2)} EUR / kWh\n- Betriebsstunden pro Jahr: ${hoursPerYear} Stunden (24/7/365)\n- Geplante Modernisierung (Kaltgang-Einhausung, Freikühlung, hocheffiziente USV) zur Senkung des PUE-Werts auf ${targetPUE.toFixed(2)}.\n\nAufgaben:\n1. Berechnen Sie den aktuellen PUE-Wert (Power Usage Effectiveness) des Rechenzentrums (gerundet auf 2 Nachkommastellen).\n2. Berechnen Sie die aktuellen jährlichen Stromkosten in EUR.\n3. Berechnen Sie die jährliche Stromkostenersparnis in EUR nach Erreichen des Ziel-PUE-Werts von ${targetPUE.toFixed(2)}.`;

        const mLoesung = `Musterlösung PUE & Rechenzentrums-Kühlkosten:\n\n1. Aktueller PUE-Wert:\n   - Formel: PUE = Gesamtenergieaufnahme / IT-Energieaufnahme\n   - PUE = ${totalPowerKW} kW / ${itPowerKW} kW = ${currentPUE.toFixed(2)}\n\n2. Aktuelle jährliche Stromkosten:\n   - Jahresverbrauch = ${totalPowerKW} kW * ${hoursPerYear} h = ${currentYearlyKWh.toLocaleString('de-DE')} kWh\n   - Stromkosten = ${currentYearlyKWh.toLocaleString('de-DE')} kWh * ${electricityPriceEur.toFixed(2)} EUR/kWh = ${currentYearlyCostEur.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})} EUR\n\n3. Jährliche Stromkostenersparnis mit PUE ${targetPUE.toFixed(2)}:\n   - Neue Gesamtleistung = ${itPowerKW} kW * ${targetPUE.toFixed(2)} = ${targetTotalPowerKW.toFixed(1)} kW\n   - Neuer Jahresverbrauch = ${targetTotalPowerKW.toFixed(1)} kW * ${hoursPerYear} h = ${targetYearlyKWh.toLocaleString('de-DE')} kWh\n   - Neue Stromkosten = ${targetYearlyKWh.toLocaleString('de-DE')} kWh * ${electricityPriceEur.toFixed(2)} EUR/kWh = ${targetYearlyCostEur.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})} EUR\n   - Jährliche Ersparnis = ${yearlySavingsEur.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})} EUR / Jahr.`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "🔥 Meisterklasse: Rechenzentrums-PUE & Energiekostenkalkulation (LF 2)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `PUE = ${currentPUE.toFixed(2)}. Vorher: ${currentYearlyCostEur.toFixed(0)} EUR. Nachher: ${targetYearlyCostEur.toFixed(0)} EUR. Ersparnis = ${yearlySavingsEur.toFixed(0)} EUR/Jahr.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf2",
                topic: "🔥 Meisterklasse: Rechenzentrums-PUE & Energiekostenkalkulation (LF 2)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWie hoch ist der PUE-Wert und wie viel Geld wird jährlich eingespart?`,
                options: [
                    `PUE: ${currentPUE.toFixed(2)} | Jährliche Ersparnis: ${yearlySavingsEur.toLocaleString('de-DE', {maximumFractionDigits: 0})} EUR`,
                    `PUE: ${(currentPUE * 0.8).toFixed(2)} | Jährliche Ersparnis: ${(yearlySavingsEur * 0.7).toLocaleString('de-DE', {maximumFractionDigits: 0})} EUR`,
                    `PUE: ${(currentPUE * 1.2).toFixed(2)} | Jährliche Ersparnis: ${(yearlySavingsEur * 1.4).toLocaleString('de-DE', {maximumFractionDigits: 0})} EUR`,
                    `PUE: 1.00 | Jährliche Ersparnis: 0 EUR`
                ],
                correctAnswer: 0,
                explanation: `PUE = ${totalPowerKW}/${itPowerKW} = ${currentPUE.toFixed(2)}. Ersparnis = (${totalPowerKW} - ${targetTotalPowerKW.toFixed(1)}) * 8760 * ${electricityPriceEur} = ${yearlySavingsEur.toFixed(0)} EUR.`
            });
        }
    }

    // MC7: Vollständige 12-stufige Handelskalkulation (LF 1 / LF 6 / Schwer)
    for (let i = 0; i < 15; i++) {
        const lep = [1200, 1500, 2000, 2400][Math.floor(Math.random() * 4)]; // Listeneinkaufspreis
        const lieferRabattP = 15; // 15%
        const lieferSkontoP = 2;  // 2%
        const bezugskosten = 50;  // 50 EUR
        const hkzP = 25;          // 25% Handlungskostenzuschlag
        const gewinnP = 20;       // 20% Gewinn
        const kundenSkontoP = 2;  // 2% Kundenskonto
        const kundenRabattP = 10; // 10% Kundenrabatt
        const ustP = 19;          // 19% USt

        // 1. LEP
        // 2. - Lieferrabatt (15%)
        const zep = lep * (1 - lieferRabattP / 100);
        // 3. - Lieferskonto (2%)
        const bep = zep * (1 - lieferSkontoP / 100);
        // 4. + Bezugskosten
        const ep = bep + bezugskosten;
        // 5. + HKZ (25%)
        const sk = ep * (1 + hkzP / 100);
        // 6. + Gewinn (20%)
        const bvp = sk * (1 + gewinnP / 100);
        // 7. + Kundenskonto (2% im Hundert -> BVP / 0.98)
        const zvp = bvp / (1 - kundenSkontoP / 100);
        // 8. + Kundenrabatt (10% im Hundert -> ZVP / 0.90)
        const lvpNetto = zvp / (1 - kundenRabattP / 100);
        // 9. + 19% USt
        const lvpBrutto = lvpNetto * 1.19;

        const qText = `🔥 Meisterklasse Handelskalkulation (LF 1 / LF 6):\nEin Systemhaus kalkuliert den Verkaufspreis für einen Highend-Datenbankserver.\n\nGegebene Kalkulationsdaten:\n- Listeneinkaufspreis (LEP): ${lep.toFixed(2)} EUR\n- Lieferantenrabatt: ${lieferRabattP} %\n- Lieferantenskonto: ${lieferSkontoP} %\n- Bezugskosten (Transport & Versicherung): ${bezugskosten.toFixed(2)} EUR\n- Handlungskostenzuschlagssatz (HKZ): ${hkzP} %\n- Gewinnzuschlagssatz: ${gewinnP} %\n- Kundenskonto: ${kundenSkontoP} % (vom Zielverkaufspreis)\n- Kundenrabatt: ${kundenRabattP} % (vom Netto-Listenverkaufspreis)\n- Umsatzsteuer: ${ustP} %\n\nFühren Sie eine vollständige 12-stufige Vorwärtskalkulation durch und ermitteln Sie:\n1. Den Bezugspreis (Einstandspreis).\n2. Die Selbstkosten.\n3. Den Barverkaufspreis.\n4. Den Netto-Listenverkaufspreis.\n5. Den Brutto-Listenverkaufspreis (inkl. 19% USt).`;

        const mLoesung = `Musterlösung Vollständige Vorwärtskalkulation:\n\n1.  Listeneinkaufspreis (LEP): ${lep.toFixed(2)} EUR\n2.  - Lieferantenrabatt (${lieferRabattP} %): -${(lep * lieferRabattP / 100).toFixed(2)} EUR\n3.  = Zieleinkaufspreis (ZEP): ${zep.toFixed(2)} EUR\n4.  - Lieferantenskonto (${lieferSkontoP} %): -${(zep * lieferSkontoP / 100).toFixed(2)} EUR\n5.  = Bareinkaufspreis (BEP): ${bep.toFixed(2)} EUR\n6.  + Bezugskosten: +${bezugskosten.toFixed(2)} EUR\n7.  = Bezugspreis / Einstandspreis: ${ep.toFixed(2)} EUR\n8.  + Handlungskosten (${hkzP} % von EP): +${(ep * hkzP / 100).toFixed(2)} EUR\n9.  = Selbstkosten (SK): ${sk.toFixed(2)} EUR\n10. + Gewinn (${gewinnP} % von SK): +${(sk * gewinnP / 100).toFixed(2)} EUR\n11. = Barverkaufspreis (BVP): ${bvp.toFixed(2)} EUR\n12. + Kundenskonto (${kundenSkontoP} % im Hundert: ${bvp.toFixed(2)} / 0,98 - ${bvp.toFixed(2)}): +${(zvp - bvp).toFixed(2)} EUR\n13. = Zielverkaufspreis (ZVP): ${zvp.toFixed(2)} EUR\n14. + Kundenrabatt (${kundenRabattP} % im Hundert: ${zvp.toFixed(2)} / 0,90 - ${zvp.toFixed(2)}): +${(lvpNetto - zvp).toFixed(2)} EUR\n15. = Netto-Listenverkaufspreis: ${lvpNetto.toFixed(2)} EUR\n16. + 19 % Umsatzsteuer: +${(lvpNetto * 0.19).toFixed(2)} EUR\n17. = Brutto-Listenverkaufspreis: ${lvpBrutto.toFixed(2)} EUR.`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "🔥 Meisterklasse: 12-stufige Handelskalkulation (LF 1 / LF 6)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `EP = ${ep.toFixed(2)} EUR, SK = ${sk.toFixed(2)} EUR, BVP = ${bvp.toFixed(2)} EUR, LVP Netto = ${lvpNetto.toFixed(2)} EUR, LVP Brutto = ${lvpBrutto.toFixed(2)} EUR.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "🔥 Meisterklasse: 12-stufige Handelskalkulation (LF 1 / LF 6)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWie hoch sind der Netto- und der Brutto-Listenverkaufspreis?`,
                options: [
                    `Netto: ${lvpNetto.toFixed(2)} EUR | Brutto: ${lvpBrutto.toFixed(2)} EUR`,
                    `Netto: ${(lvpNetto * 0.9).toFixed(2)} EUR | Brutto: ${(lvpBrutto * 0.9).toFixed(2)} EUR`,
                    `Netto: ${(lvpNetto * 1.1).toFixed(2)} EUR | Brutto: ${(lvpBrutto * 1.1).toFixed(2)} EUR`,
                    `Netto: ${bvp.toFixed(2)} EUR | Brutto: ${(bvp * 1.19).toFixed(2)} EUR`
                ],
                correctAnswer: 0,
                explanation: `Vorwärtskalkulation im Hundert für Skonto und Rabatt: LVP Netto = ${lvpNetto.toFixed(2)} EUR, Brutto (19%) = ${lvpBrutto.toFixed(2)} EUR.`
            });
        }
    }

    // MC8: TCO 5-Jahres-Kostenvergleich Cloud (AWS/Azure) vs. On-Premises (LF 1 / LF 6 / Schwer)
    for (let i = 0; i < 15; i++) {
        const onPremCapex = [35000, 45000, 60000][Math.floor(Math.random() * 3)]; // Hardware, Switche, USV
        const onPremMaintenanceYear = 4000; // Wartung, Lizenzen
        const onPremPowerYear = 3500; // Strom & Kühlung
        const onPremAdminHoursYear = 120; // 120 h Wartung
        const adminHourlyRate = 80; // 80 EUR/h

        const onPremTotal5Years = onPremCapex + ((onPremMaintenanceYear + onPremPowerYear + (onPremAdminHoursYear * adminHourlyRate)) * 5);

        const cloudMonthlyFee = [950, 1200, 1450][Math.floor(Math.random() * 3)]; // VM, Storage, Backup
        const cloudEgressMonthly = 150; // Traffic
        const cloudSetupCapex = 5000; // Migration & Setup
        const cloudAdminHoursYear = 30; // 30 h Cloud-Betreuung

        const cloudTotal5Years = cloudSetupCapex + (((cloudMonthlyFee + cloudEgressMonthly) * 12 + (cloudAdminHoursYear * adminHourlyRate)) * 5);

        const diffEur = Math.abs(onPremTotal5Years - cloudTotal5Years);
        const cheaperOption = onPremTotal5Years < cloudTotal5Years ? "On-Premises" : "Cloud";

        const qText = `🔥 Meisterklasse TCO & Cloud-Wirtschaftlichkeit (LF 1 / LF 6):\nEin Unternehmen plant den Betrieb seiner ERP-Infrastruktur für einen Betrachtungszeitraum von 5 Jahren und vergleicht On-Premises mit einer Cloud-Lösung (AWS / Azure).\n\nSzenario A (On-Premises Rechenzentrum):\n- Anschaffung Server, Storage, USV, Firewall (Capex): ${onPremCapex.toLocaleString('de-DE')} EUR einmalig\n- Jährliche Software-Lizenzen und Hersteller-Wartungsverträge: ${onPremMaintenanceYear.toLocaleString('de-DE')} EUR / Jahr\n- Jährliche Strom- und Kühlungskosten: ${onPremPowerYear.toLocaleString('de-DE')} EUR / Jahr\n- Administrationsaufwand: ${onPremAdminHoursYear} Stunden pro Jahr zu ${adminHourlyRate} EUR / Stunde\n\nSzenario B (Cloud SaaS / IaaS):\n- Einmalige Setup- und Migrationskosten: ${cloudSetupCapex.toLocaleString('de-DE')} EUR einmalig\n- Monatliche IaaS-Gebühren (VMs, Managed Storage, Backup): ${cloudMonthlyFee.toLocaleString('de-DE')} EUR / Monat\n- Monatliche Daten-Egress- und Traffic-Kosten: ${cloudEgressMonthly.toLocaleString('de-DE')} EUR / Monat\n- Administrationsaufwand: ${cloudAdminHoursYear} Stunden pro Jahr zu ${adminHourlyRate} EUR / Stunde\n\nAufgaben:\n1. Berechnen Sie die Total Cost of Ownership (TCO) für beide Szenarien über den 5-Jahres-Zeitraum.\n2. Ermitteln Sie die kostengünstigere Variante und die absolute Kostenersparnis über 5 Jahre.`;

        const mLoesung = `Musterlösung TCO 5-Jahres-Vergleich:\n\n1. Szenario A (On-Premises):\n   - Einmalig (Capex): ${onPremCapex.toLocaleString('de-DE')} EUR\n   - Laufende Kosten pro Jahr (Opex): ${onPremMaintenanceYear} EUR (Wartung) + ${onPremPowerYear} EUR (Strom) + (${onPremAdminHoursYear} h * ${adminHourlyRate} EUR/h = ${onPremAdminHoursYear * adminHourlyRate} EUR Admin) = ${(onPremMaintenanceYear + onPremPowerYear + (onPremAdminHoursYear * adminHourlyRate)).toLocaleString('de-DE')} EUR / Jahr\n   - Gesamtkosten 5 Jahre: ${onPremCapex.toLocaleString('de-DE')} EUR + (5 * ${(onPremMaintenanceYear + onPremPowerYear + (onPremAdminHoursYear * adminHourlyRate)).toLocaleString('de-DE')} EUR) = ${onPremTotal5Years.toLocaleString('de-DE')} EUR\n\n2. Szenario B (Cloud):\n   - Einmalig: ${cloudSetupCapex.toLocaleString('de-DE')} EUR\n   - Laufende Kosten pro Jahr (Opex): ((${cloudMonthlyFee} + ${cloudEgressMonthly}) EUR * 12 Monate = ${((cloudMonthlyFee + cloudEgressMonthly) * 12).toLocaleString('de-DE')} EUR) + (${cloudAdminHoursYear} h * ${adminHourlyRate} EUR/h = ${cloudAdminHoursYear * adminHourlyRate} EUR Admin) = ${(((cloudMonthlyFee + cloudEgressMonthly) * 12) + (cloudAdminHoursYear * adminHourlyRate)).toLocaleString('de-DE')} EUR / Jahr\n   - Gesamtkosten 5 Jahre: ${cloudSetupCapex.toLocaleString('de-DE')} EUR + (5 * ${(((cloudMonthlyFee + cloudEgressMonthly) * 12) + (cloudAdminHoursYear * adminHourlyRate)).toLocaleString('de-DE')} EUR) = ${cloudTotal5Years.toLocaleString('de-DE')} EUR\n\n3. Ergebnis:\n   - ${cheaperOption} ist über 5 Jahre um ${diffEur.toLocaleString('de-DE')} EUR günstiger.`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "🔥 Meisterklasse: TCO-Vergleich Cloud vs. On-Premises (LF 1 / LF 6)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `On-Premises TCO = ${onPremTotal5Years.toLocaleString('de-DE')} EUR. Cloud TCO = ${cloudTotal5Years.toLocaleString('de-DE')} EUR. Ersparnis = ${diffEur.toLocaleString('de-DE')} EUR.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "🔥 Meisterklasse: TCO-Vergleich Cloud vs. On-Premises (LF 1 / LF 6)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWelche TCO-Kosten ergeben sich für 5 Jahre?`,
                options: [
                    `On-Premises: ${onPremTotal5Years.toLocaleString('de-DE')} EUR | Cloud: ${cloudTotal5Years.toLocaleString('de-DE')} EUR`,
                    `On-Premises: ${(onPremTotal5Years * 1.2).toLocaleString('de-DE')} EUR | Cloud: ${(cloudTotal5Years * 0.8).toLocaleString('de-DE')} EUR`,
                    `On-Premises: ${(onPremTotal5Years * 0.7).toLocaleString('de-DE')} EUR | Cloud: ${(cloudTotal5Years * 1.3).toLocaleString('de-DE')} EUR`,
                    `On-Premises: ${onPremCapex.toLocaleString('de-DE')} EUR | Cloud: ${cloudSetupCapex.toLocaleString('de-DE')} EUR`
                ],
                correctAnswer: 0,
                explanation: `On-Premises = ${onPremCapex} + 5*${onPremMaintenanceYear + onPremPowerYear + onPremAdminHoursYear*adminHourlyRate} = ${onPremTotal5Years.toLocaleString('de-DE')} EUR. Cloud = ${cloudTotal5Years.toLocaleString('de-DE')} EUR.`
            });
        }
    }

    // MC9: Komplexer Netzplan mit 8–10 Vorgängen, Vorwärts-/Rückwärtsrechnung & Pufferzeiten (LF 1 / LF 2 / LF 6 / Schwer)
    for (let i = 0; i < 15; i++) {
        // Activities:
        // A: Dauer 3, Vorgänger - -> FAZ: 0, FEZ: 3
        // B: Dauer 4, Vorgänger A -> FAZ: 3, FEZ: 7
        // C: Dauer 2, Vorgänger A -> FAZ: 3, FEZ: 5
        // D: Dauer 5, Vorgänger B -> FAZ: 7, FEZ: 12
        // E: Dauer 3, Vorgänger C -> FAZ: 5, FEZ: 8
        // F: Dauer 4, Vorgänger D, E -> FAZ: 12, FEZ: 16
        // G: Dauer 2, Vorgänger E -> FAZ: 8, FEZ: 10
        // H: Dauer 3, Vorgänger F, G -> FAZ: 16, FEZ: 19
        // Project Duration: 19 Days
        // Backward:
        // H: SEZ 19, SAZ 16, GP = 0, FP = 0 (Critical)
        // F: SEZ 16, SAZ 12, GP = 0, FP = 0 (Critical)
        // G: SEZ 16, SAZ 14, GP = 16 - 10 = 6, FP = 16 - 10 = 6
        // D: SEZ 12, SAZ 7,  GP = 0, FP = 0 (Critical)
        // E: SEZ = min(SAZ_F=12, SAZ_G=14) = 12, SAZ = 9. GP = 12 - 8 = 4, FP = min(FAZ_F=12, FAZ_G=8) - 8 = 0
        // C: SEZ = SAZ_E = 9, SAZ = 7. GP = 9 - 5 = 4, FP = FAZ_E - FEZ_C = 5 - 5 = 0
        // B: SEZ = SAZ_D = 7, SAZ = 3. GP = 0, FP = 0 (Critical)
        // A: SEZ = min(SAZ_B=3, SAZ_C=7) = 3, SAZ = 0. GP = 0, FP = 0 (Critical)
        // Critical Path: A -> B -> D -> F -> H (Gesamtdauer = 19 Tage)

        const qText = `🔥 Meisterklasse Netzplantechnik & Kritischer Pfad (LF 1 / LF 6):\nFür ein Software-Rollout liegt folgende Vorgangsliste vor:\n- Vorgang A: Kick-Off & Ist-Analyse (Dauer: 3 Tage, Vorgänger: keine)\n- Vorgang B: Backend-Konfiguration (Dauer: 4 Tage, Vorgänger: A)\n- Vorgang C: Schulungsunterlagen erstellen (Dauer: 2 Tage, Vorgänger: A)\n- Vorgang D: Datenbank-Migration (Dauer: 5 Tage, Vorgänger: B)\n- Vorgang E: Key-User-Schulung (Dauer: 3 Tage, Vorgänger: C)\n- Vorgang F: Integrationstest & Abnahme (Dauer: 4 Tage, Vorgänger: D, E)\n- Vorgang G: Benutzer-Handbuch drucken (Dauer: 2 Tage, Vorgänger: E)\n- Vorgang H: Go-Live & Übergabe (Dauer: 3 Tage, Vorgänger: F, G)\n\nAufgaben:\n1. Führen Sie die Vorwärtsrechnung (FAZ, FEZ) und Rückwärtsrechnung (SAZ, SEZ) durch.\n2. Berechnen Sie den Gesamtpuffer (GP = SAZ - FAZ) und den Freien Puffer (FP = min(FAZ_Nachfolger) - FEZ) für die Vorgänge C, E und G.\n3. Bestimmen Sie die Projektdauer und den Kritischen Pfad.\n4. Vorgang C verzögert sich um 3 Tage. Welche Auswirkung hat dies auf den Gesamtendtermin des Projekts?`;

        const mLoesung = `Musterlösung Netzplantechnik:\n\n1. Vorwärts- und Rückwärtsrechnung:\n- Vorgang A (D=3): FAZ=0, FEZ=3 | SAZ=0, SEZ=3 | GP=0, FP=0 (Kritisch)\n- Vorgang B (D=4): FAZ=3, FEZ=7 | SAZ=3, SEZ=7 | GP=0, FP=0 (Kritisch)\n- Vorgang C (D=2): FAZ=3, FEZ=5 | SAZ=7, SEZ=9 | GP=4, FP=0\n- Vorgang D (D=5): FAZ=7, FEZ=12 | SAZ=7, SEZ=12 | GP=0, FP=0 (Kritisch)\n- Vorgang E (D=3): FAZ=5, FEZ=8 | SAZ=9, SEZ=12 | GP=4, FP=0\n- Vorgang F (D=4): FAZ=12, FEZ=16 | SAZ=12, SEZ=16 | GP=0, FP=0 (Kritisch)\n- Vorgang G (D=2): FAZ=8, FEZ=10 | SAZ=14, SEZ=16 | GP=6, FP=6\n- Vorgang H (D=3): FAZ=16, FEZ=19 | SAZ=16, SEZ=19 | GP=0, FP=0 (Kritisch)\n\n2. Pufferzeiten für C, E, G:\n- Vorgang C: GP = 4 Tage, FP = 0 Tage\n- Vorgang E: GP = 4 Tage, FP = 0 Tage\n- Vorgang G: GP = 6 Tage, FP = 6 Tage\n\n3. Projektdauer & Kritischer Pfad:\n- Gesamtdauer: 19 Werktage\n- Kritischer Pfad: A -> B -> D -> F -> H (alle Vorgänge mit GP = 0)\n\n4. Auswirkung der Verzögerung von Vorgang C um 3 Tage:\n- Vorgang C hat einen Gesamtpuffer von 4 Tagen. Eine Verzögerung um 3 Tage liegt vollständig innerhalb des Puffers (3 <= 4 Tage).\n- Der Projektendtermin (19 Tage) verschiebt sich NICHT!`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "🔥 Meisterklasse: Netzplan-Berechnung & Kritischer Pfad (LF 1 / LF 6)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `Kritischer Pfad: A-B-D-F-H = 19 Tage. GP(C)=4, GP(E)=4, GP(G)=6. Verzögerung um 3 Tage verschiebt Projekttermin nicht.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "🔥 Meisterklasse: Netzplan-Berechnung & Kritischer Pfad (LF 1 / LF 6)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWelcher Kritische Pfad und welche Gesamtdauer ergeben sich?`,
                options: [
                    `Kritischer Pfad: A -> B -> D -> F -> H | Projektdauer: 19 Tage`,
                    `Kritischer Pfad: A -> C -> E -> F -> H | Projektdauer: 15 Tage`,
                    `Kritischer Pfad: A -> C -> E -> G -> H | Projektdauer: 13 Tage`,
                    `Kritischer Pfad: A -> B -> D -> E -> H | Projektdauer: 18 Tage`
                ],
                correctAnswer: 0,
                explanation: `Pfad A-B-D-F-H = 3+4+5+4+3 = 19 Tage (alle GP=0). Pfad A-C-E-F-H = 3+2+3+4+3 = 15 Tage (4 Tage Puffer).`
            });
        }
    }

    // MC10: Komplexe SQL-Abfragen über 4 Tabellen mit GROUP BY, HAVING, subqueries & Aggregation (LF 5 / Schwer)
    for (let i = 0; i < 15; i++) {
        const minOrders = [2, 3, 4][Math.floor(Math.random() * 3)];
        const minRevenue = [3000, 5000, 7500][Math.floor(Math.random() * 3)];
        const year = 2025;

        const sqlCode = `SELECT 
    k.kunden_nr,
    k.nachname,
    k.firma,
    COUNT(DISTINCT b.bestell_nr) AS anzahl_bestellungen,
    ROUND(SUM(bp.menge * bp.einzelpreis * (1 - bp.rabatt_prozent / 100.0)), 2) AS gesamtumsatz_euro
FROM tbl_kunde k
INNER JOIN tbl_bestellung b ON k.kunden_nr = b.kunden_nr
INNER JOIN tbl_bestellposition bp ON b.bestell_nr = bp.bestell_nr
INNER JOIN tbl_artikel a ON bp.artikel_nr = a.artikel_nr
WHERE b.bestell_datum BETWEEN '${year}-01-01' AND '${year}-12-31'
  AND b.status != 'storniert'
GROUP BY k.kunden_nr, k.nachname, k.firma
HAVING COUNT(DISTINCT b.bestell_nr) >= ${minOrders}
   AND SUM(bp.menge * bp.einzelpreis * (1 - bp.rabatt_prozent / 100.0)) > ${minRevenue}
ORDER BY gesamtumsatz_euro DESC;`;

        const qText = `🔥 Meisterklasse SQL & Relationale Abfragen (LF 5):\nEin Online-Großhändler besitzt folgendes relationales Datenbankschema:\n- tbl_kunde (kunden_nr [PK], nachname, vorname, firma, plz, ort)\n- tbl_bestellung (bestell_nr [PK], kunden_nr [FK], bestell_datum, status)\n- tbl_bestellposition (pos_nr [PK], bestell_nr [FK], artikel_nr [FK], menge, einzelpreis, rabatt_prozent)\n- tbl_artikel (artikel_nr [PK], bezeichnung, kategorie, einkaufspreis)\n\nAufgabenstellung:\nSchreiben Sie eine syntaktisch einwandfreie SQL-Abfrage nach ANSI-SQL-Standard, die:\n1. Kunden-Nr, Nachname, Firmenname, Anzahl getätigter Bestellungen und den rabattbereinigten Gesamtumsatz (auf 2 Nachkommastellen gerundet) ausgibt.\n2. Nur Bestellungen aus dem Kalenderjahr ${year} berücksichtigt, die nicht den Status 'storniert' besitzen.\n3. Nur Kunden anzeigt, die im Jahr ${year} mindestens ${minOrders} Bestellungen getätigt haben UND einen Gesamtumsatz von über ${minRevenue} EUR erzielt haben.\n4. Das Ergebnis absteigend nach dem Gesamtumsatz sortiert.`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                topic: "🔥 Meisterklasse: Komplexe SQL-Aggregation & Multi-Table-JOIN (LF 5)",
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                code: sqlCode,
                musterloesung: `Musterlösung SQL-Statement:\n\n${sqlCode}\n\nErläuterung:\n- INNER JOIN über alle relevanten Tabellen verknüpft Kunden mit ihren Positionen.\n- WHERE filtert vor der Aggregation nach Datum (${year}) und Status (!= 'storniert').\n- GROUP BY gruppiert nach allen nicht-aggregierten Spalten des SELECTs.\n- HAVING filtert nach den aggregierten Bedingungen (COUNT(DISTINCT bestell_nr) >= ${minOrders} und SUM(...) > ${minRevenue}).\n- ORDER BY sortiert absteigend (DESC).`,
                explanation: `INNER JOINs verknüpfen Tabellen. WHERE filtert Einzelzeilen vorab. GROUP BY fasst Kunden zusammen. HAVING filtert Aggregatwerte. ORDER BY sortiert.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                topic: "🔥 Meisterklasse: Komplexe SQL-Aggregation & Multi-Table-JOIN (LF 5)",
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWelche SQL-Klausel muss verwendet werden, um die Filterung "Gesamtumsatz > ${minRevenue} EUR" durchzuführen?`,
                options: [
                    `HAVING SUM(bp.menge * bp.einzelpreis * (1 - bp.rabatt_prozent / 100.0)) > ${minRevenue}`,
                    `WHERE SUM(bp.menge * bp.einzelpreis * (1 - bp.rabatt_prozent / 100.0)) > ${minRevenue}`,
                    `GROUP BY SUM(bp.menge * bp.einzelpreis) > ${minRevenue}`,
                    `ORDER BY SUM(bp.menge) > ${minRevenue}`
                ],
                correctAnswer: 0,
                explanation: `Bedingungen auf Aggregatfunktionen (SUM, COUNT, AVG) dürfen niemals in der WHERE-Klausel stehen, sondern MÜSSEN zwingend in der HAVING-Klausel nach dem GROUP BY definiert werden.`
            });
        }
    }

    // MC11: Datenbank-Normalisierung & Anomalien (1NF bis 3NF) (LF 5 / Schwer)
    for (let i = 0; i < 15; i++) {
        const qText = `🔥 Meisterklasse Datenbank-Design & Normalisierung (LF 5):\nGegeben ist folgende unnormalisierte Relation für Rechnungsdaten:\nRechnung_Unnormalisiert (RechnungsNr, RechnungsDatum, KundenNr, KundenName, KundenStrasse, KundenPLZ, KundenOrt, ArtikelListe, GesamtBetrag, ProjektleiterNr, ProjektleiterName)\n\nHierbei enthält das Feld "ArtikelListe" mehrere durch Komma getrennte Artikel inkl. Mengen und Einzelpreisen.\n\nAufgaben:\n1. Definieren Sie die 1., 2. und 3. Normalform (1NF, 2NF, 3NF).\n2. Zeigen Sie auf, welche Normalformen in der gegebenen Tabelle verletzt sind und überführen Sie das Schema vollständig in die 3. Normalform (Tabellennamen, Primärschlüssel [PK] und Fremdschlüssel [FK] angeben).\n3. Erläutern Sie anhand der Ausgangstabelle je ein konkretes Beispiel für:\n   a) Eine Einfüge-Anomalie (Insertion Anomaly)\n   b) Eine Änderungs-Anomalie (Update Anomaly)\n   c) Eine Lösch-Anomalie (Deletion Anomaly).`;

        const mLoesung = `Musterlösung Datenbank-Normalisierung:\n\n1. Definitionen der Normalformen:\n- 1NF: Jedes Attribut enthält nur atomare (unteilbare) Werte; keine Wiederholungsgruppen/Mehrfachwerte.\n- 2NF: Befindet sich in 1NF UND jedes Nicht-Schlüssel-Attribut ist voll funktional vom gesamten Primärschlüssel abhängig (keine partiellen Abhängigkeiten bei zusammengesetzten Schlüsseln).\n- 3NF: Befindet sich in 2NF UND kein Nicht-Schlüssel-Attribut hängt transitiv von einem anderen Nicht-Schlüssel-Attribut ab (keine transitiven Abhängigkeiten).\n\n2. Überführung in die 3. Normalform:\n- tbl_Kunde (KundenNr [PK], KundenName, KundenStrasse, PLZ [FK])\n- tbl_Ort (PLZ [PK], Ort)  -- Löst transitive Abhängigkeit PLZ -> Ort auf (3NF)\n- tbl_Projektleiter (ProjektleiterNr [PK], ProjektleiterName)\n- tbl_Rechnung (RechnungsNr [PK], RechnungsDatum, KundenNr [FK], ProjektleiterNr [FK])\n- tbl_Artikel (ArtikelNr [PK], Bezeichnung, Einzelpreis)\n- tbl_Rechnungsposition (RechnungsNr [PK, FK], PositionsNr [PK], ArtikelNr [FK], Menge, Einzelpreis_Historisch)\n\n3. Anomalien in der unnormalisierten Tabelle:\n- a) Einfüge-Anomalie: Ein neuer Kunde kann erst in die Datenbank eingetragen werden, wenn er mindestens eine Rechnung mit einem Artikel erzeugt hat.\n- b) Änderungs-Anomalie: Zieht ein Kunde um, muss die Adresse in dutzenden alten Rechnungszeilen manuell geändert werden; wird eine Zeile vergessen, entstehen inkonsistente Daten.\n- c) Lösch-Anomalie: Wird die einzige Rechnung eines Kunden storniert und gelöscht, werden gleichzeitig die gesamten Kundendaten unwiederbringlich gelöscht.`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                topic: "🔥 Meisterklasse: Normalisierung 1NF-3NF & Datenbank-Anomalien (LF 5)",
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `1NF = atomare Werte. 2NF = voll funktionale Abhängigkeit vom PK. 3NF = keine transitiven Abhängigkeiten. Anomalien: Einfügen, Ändern, Löschen.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                topic: "🔥 Meisterklasse: Normalisierung 1NF-3NF & Datenbank-Anomalien (LF 5)",
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWann liegt eine Verletzung der 3. Normalform (3NF) vor?`,
                options: [
                    `Wenn ein Nicht-Schlüssel-Attribut transitiv von einem Primärschlüssel abhängt (d.h. von einem anderen Nicht-Schlüssel-Attribut)`,
                    `Wenn Attribute nicht atomar sind (z. B. mehrere Werte in einem Datenfeld)`,
                    `Wenn ein Attribut nur von einem Teil eines zusammengesetzten Primärschlüssels abhängt`,
                    `Wenn in einer Tabelle keine Fremdschlüssel definiert wurden`
                ],
                correctAnswer: 0,
                explanation: `Eine 3NF-Verletzung liegt vor, wenn funktionale Abhängigkeiten zwischen Nicht-Schlüssel-Attributen bestehen (z. B. PLZ -> Ort, Kundennummer -> Kundenname).`
            });
        }
    }

    // MC12: Algorithmen, 2D-Arrays / Matrizen, Trace-Tabellen & Zeitkomplexität (LF 5 / LF 8 / Schwer)
    for (let i = 0; i < 15; i++) {
        const matrixCode = `FUNCTION AnalyzeMatrix(matrix[3][3]):
    sum_diag = 0
    max_val = matrix[0][0]
    swap_count = 0
    
    FOR i FROM 0 TO 2 DO:
        FOR j FROM 0 TO 2 DO:
            IF i == j THEN:
                sum_diag = sum_diag + matrix[i][j]
            END IF
            IF matrix[i][j] > max_val THEN:
                max_val = matrix[i][j]
                swap_count = swap_count + 1
            END IF
        END FOR
    END FOR
    
    RETURN (sum_diag, max_val, swap_count)`;

        const sampleMatrix = [
            [4, 2, 7],
            [1, 9, 3],
            [8, 5, 6]
        ];
        // i=0:
        // j=0: val=4, i==j -> sum_diag=4, max_val=4
        // j=1: val=2, max_val=4
        // j=2: val=7, max_val=7 (swap_count=1)
        // i=1:
        // j=0: val=1
        // j=1: val=9, i==j -> sum_diag=4+9=13, max_val=9 (swap_count=2)
        // j=2: val=3
        // i=2:
        // j=0: val=8
        // j=1: val=5
        // j=2: val=6, i==j -> sum_diag=13+6=19
        // Result: sum_diag=19, max_val=9, swap_count=2

        const qText = `🔥 Meisterklasse Algorithmen & Trace-Tabelle (LF 5 / LF 8):\nGegeben ist folgender Pseudocode zur Analyse einer 3x3-Matrix:\n\n${matrixCode}\n\nGegebene Eingabematrix:\nmatrix = [\n  [4, 2, 7],\n  [1, 9, 3],\n  [8, 5, 6]\n]\n\nAufgaben:\n1. Erstellen Sie eine vollständige Trace-Tabelle für alle 9 Schleifendurchläufe mit den Spalten (i, j, matrix[i][j], sum_diag, max_val, swap_count).\n2. Geben Sie die finalen Rückgabewerte der Funktion an.\n3. Bestimmen Sie die Zeitkomplexität des Algorithmus in der O-Notation bezogen auf eine quadratische Matrix der Größe N x N.`;

        const mLoesung = `Musterlösung Trace-Tabelle & Komplexität:\n\n1. Trace-Tabelle:\n| Durchlauf | i | j | matrix[i][j] | sum_diag | max_val | swap_count |\n|---|---|---|---|---|---|---|\n| Start | - | - | - | 0 | 4 | 0 |\n| 1 | 0 | 0 | 4 | 4 | 4 | 0 |\n| 2 | 0 | 1 | 2 | 4 | 4 | 0 |\n| 3 | 0 | 2 | 7 | 4 | 7 | 1 |\n| 4 | 1 | 0 | 1 | 4 | 7 | 1 |\n| 5 | 1 | 1 | 9 | 13 | 9 | 2 |\n| 6 | 1 | 2 | 3 | 13 | 9 | 2 |\n| 7 | 2 | 0 | 8 | 13 | 9 | 2 |\n| 8 | 2 | 1 | 5 | 13 | 9 | 2 |\n| 9 | 2 | 2 | 6 | 19 | 9 | 2 |\n\n2. Finale Rückgabewerte:\n- sum_diag = 19 (Hauptdiagonale: 4 + 9 + 6 = 19)\n- max_val = 9 (Größter Wert der Matrix)\n- swap_count = 2\n\n3. Zeitkomplexität:\n- Zwei verschachtelte Zählschleifen von 0 bis N-1 durchlaufen genau N * N = N^2 Elemente.\n- Die Zeitkomplexität beträgt O(N^2) (quadratischer Aufwand).`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                topic: "🔥 Meisterklasse: Algorithmen, Trace-Tabelle & Komplexität O(n) (LF 5)",
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                code: matrixCode,
                musterloesung: mLoesung,
                explanation: `Hauptdiagonale = 4+9+6 = 19. Max = 9. Swaps = 2. Komplexität: 2 verschachtelte Schleifen = O(N^2).`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                topic: "🔥 Meisterklasse: Algorithmen, Trace-Tabelle & Komplexität O(n) (LF 5)",
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWelche Rückgabewerte liefert die Funktion für die gegebene Matrix?`,
                options: [
                    `sum_diag = 19, max_val = 9, swap_count = 2`,
                    `sum_diag = 13, max_val = 8, swap_count = 3`,
                    `sum_diag = 22, max_val = 9, swap_count = 1`,
                    `sum_diag = 19, max_val = 7, swap_count = 2`
                ],
                correctAnswer: 0,
                explanation: `Hauptdiagonale: 4 + 9 + 6 = 19. Maximalwert = 9 (wurde bei 7 und 9 aktualisiert -> swap_count = 2).`
            });
        }
    }

    // MC13: IT-Sicherheit: BSI-Grundschutz, Ransomware Incident Response (5 Phasen), Art. 33 DSGVO & TOMs (LF 4 / Schwer)
    for (let i = 0; i < 15; i++) {
        const qText = `🔥 Meisterklasse IT-Sicherheit, Incident Response & DSGVO (LF 4):\nEin mittelständisches Handelsunternehmen wird Opfer eines gezielten Ransomware-Angriffs. Erste Systeme verschlüsseln Datenbestände, und ein Erpresserschreiben fordert 500.000 EUR in Bitcoin.\n\nAufgaben:\n1. Skizzieren Sie den Ablauf eines professionellen Incident-Response-Prozesses anhand der 5 Phasen nach dem BSI-Leitfaden (Erkennung/Triage, Eindämmung, Beseitigung, Wiederherstellung, Nachbereitung / Lessons Learned).\n2. Nennen Sie zwei Sofortmaßnahmen in der Phase "Eindämmung" (Containment), um eine Ausbreitung im internen Netzwerk sofort zu stoppen.\n3. Erläutern Sie die rechtliche Meldepflicht nach Art. 33 DSGVO (Meldefrist, zuständige Behörde, erforderliche Mindestangaben).\n4. Nennen Sie 4 Technische und Organisatorische Maßnahmen (TOM nach Art. 32 DSGVO), mit denen dieser Vorfall präventiv hätte verhindert oder abgemildert werden können.`;

        const mLoesung = `Musterlösung IT-Sicherheitsvorfall & Datenschutz:\n\n1. Die 5 Phasen des Incident-Response-Prozesses (BSI):\n- 1. Identifikation & Triage: Vorfall verifizieren, Ausmaß feststellen, Incident-Response-Team (CSIRT) aktivieren.\n- 2. Eindämmung (Containment): Schadensbegrenzung, infizierte Systeme isolieren, laterale Bewegung des Angreifers stoppen.\n- 3. Beseitigung (Eradication): Malware, Backdoors, kompromittierte Konten und Persistenzmechanismen vollständig entfernen.\n- 4. Wiederherstellung (Recovery): Sauberes Einspielen verifizierter Offline-/Immutable-Backups, kontrollierter Wiederanlauf unter Monitoring.\n- 5. Lessons Learned: Dokumentation, Schwachstellenanalyse, Härtung der IT-Infrastruktur.\n\n2. Sofortmaßnahmen zur Eindämmung:\n- Trennung aller Netzwerkverbindungen der betroffenen Server (Netzwerkkabel ziehen / VLANs isolieren / Port-Shutdown am Switch), KEIN Ausschalten der Rechner (zum Erhalt von RAM-Forensik).\n- Sperrung aller Domänen-Admin-Accounts und Zurücksetzen sämtlicher Privileged Access Zugangsdaten.\n\n3. Meldepflicht nach Art. 33 DSGVO:\n- Frist: Unverzüglich, spätestens binnen 72 Stunden nach Bekanntwerden des Vorfalls.\n- Behörde: Der zuständige Landesbeauftragte für Datenschutz (LfDI des jeweiligen Bundeslandes).\n- Inhalt: Art der Datenschutzverletzung, betroffene Datenkategorien, ungefähre Zahl der Betroffenen, Kontaktdaten des DSB, wahrscheinliche Folgen und ergriffene Gegenmaßnahmen.\n\n4. Präventive TOMs (Art. 32 DSGVO):\n- 3-2-1-1-0 Backup-Strategie mit unveränderbarem (Immutable/WORM) oder Air-Gapped Offline-Backup.\n- Mehrfaktor-Authentifizierung (MFA) an allen Fernzugängen (VPN, RDP, Web-Portale).\n- Endpoint Detection & Response (EDR) mit verhaltensbasierter Angriffserkennung.\n- Netzwerksegmentierung (VLANs, DMZ, Microsegmentation) und Principle of Least Privilege (PoLP).`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf4",
                topic: "🔥 Meisterklasse: BSI Incident Response, DSGVO Art. 33 & TOMs (LF 4)",
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `5 Phasen: Identifikation, Eindämmung, Beseitigung, Recovery, Lessons Learned. DSGVO Art. 33: 72-Stunden-Meldepflicht an Aufsichtsbehörde. TOMs: 3-2-1-Backup, MFA, EDR.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf4",
                topic: "🔥 Meisterklasse: BSI Incident Response, DSGVO Art. 33 & TOMs (LF 4)",
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nInnerhalb welcher Frist muss eine Datenschutzverletzung an die zuständige Aufsichtsbehörde gemeldet werden?`,
                options: [
                    `Unverzüglich, spätestens innerhalb von 72 Stunden nach Bekanntwerden (Art. 33 DSGVO)`,
                    `Innerhalb von 14 Werktagen`,
                    `Innerhalb von 24 Stunden, sonst droht sofortige Betriebsschließung`,
                    `Innerhalb von 30 Kalendertagen`
                ],
                correctAnswer: 0,
                explanation: `Gemäß Art. 33 Abs. 1 DSGVO muss der Verantwortliche eine Verletzung des Schutzes personenbezogener Daten unverzüglich und möglichst binnen 72 Stunden melden.`
            });
        }
    }

    // MC14: Projektmanagement & Earned Value Analyse (EVM) (LF 1 / LF 6 / Schwer)
    for (let i = 0; i < 15; i++) {
        const bac = [100000, 150000, 200000][Math.floor(Math.random() * 3)]; // Budget at Completion
        const pv = bac * 0.60; // Planwert 60%
        const ev = bac * 0.50; // Fertigstellungswert 50%
        const ac = bac * 0.65; // Ist-Kosten 65%

        const cv = ev - ac; // Cost Variance (<0 -> über Budget)
        const sv = ev - pv; // Schedule Variance (<0 -> Verzug)
        const cpi = ev / ac; // <1 -> ineffizient
        const spi = ev / pv; // <1 -> Verzögerung
        const eac = bac / cpi; // Estimate at Completion

        const qText = `🔥 Meisterklasse Projektmanagement & Earned Value Analyse (LF 1 / LF 6):\nFür ein IT-Migrationsprojekt mit einem Gesamtbudget (BAC = Budget at Completion) von ${bac.toLocaleString('de-DE')} EUR liegen zum aktuellen Stichtag folgende Kennzahlen vor:\n- Planwert (PV = Planned Value): ${pv.toLocaleString('de-DE')} EUR\n- Ist-Kosten (AC = Actual Cost): ${ac.toLocaleString('de-DE')} EUR\n- Fertigstellungswert (EV = Earned Value): ${ev.toLocaleString('de-DE')} EUR\n\nAufgaben:\n1. Berechnen Sie die Kostenabweichung (CV = Cost Variance) und die Terminabweichung (SV = Schedule Variance).\n2. Berechnen Sie den Kosteneffizienzindex (CPI = Cost Performance Index) und den Termineffizienzindex (SPI = Schedule Performance Index) auf 2 Nachkommastellen genau.\n3. Berechnen Sie die prognostizierten Gesamtkosten bei Projektabschluss (EAC = Estimate at Completion).\n4. Interpretieren Sie den aktuellen Projektstatus für den Lenkungsausschuss (Termintreue und Budgettreue).`;

        const mLoesung = `Musterlösung Earned Value Analyse (EVM):\n\n1. Kosten- und Terminabweichung:\n- CV (Cost Variance) = EV - AC = ${ev.toLocaleString('de-DE')} EUR - ${ac.toLocaleString('de-DE')} EUR = ${cv.toLocaleString('de-DE')} EUR (Negativ: Kostenüberschreitung von ${Math.abs(cv).toLocaleString('de-DE')} EUR).\n- SV (Schedule Variance) = EV - PV = ${ev.toLocaleString('de-DE')} EUR - ${pv.toLocaleString('de-DE')} EUR = ${sv.toLocaleString('de-DE')} EUR (Negativ: Zeitverzug im Gegenwert von ${Math.abs(sv).toLocaleString('de-DE')} EUR).\n\n2. Effizienz-Indizes:\n- CPI (Cost Performance Index) = EV / AC = ${ev} / ${ac} = ${cpi.toFixed(2)} (Für jeden investierten Euro wurden nur ${(cpi * 100).toFixed(0)} Cent Projektwert geschaffen).\n- SPI (Schedule Performance Index) = EV / PV = ${ev} / ${pv} = ${spi.toFixed(2)} (Das Projekt arbeitet mit einer Geschwindigkeit von ${(spi * 100).toFixed(0)} % des geplanten Tempos).\n\n3. Prognose Gesamtkosten (EAC):\n- EAC = BAC / CPI = ${bac.toLocaleString('de-DE')} EUR / ${cpi.toFixed(2)} = ${eac.toLocaleString('de-DE', {maximumFractionDigits: 0})} EUR (Budgetüberschreitung um ${(eac - bac).toLocaleString('de-DE', {maximumFractionDigits: 0})} EUR).\n\n4. Interpretation:\n- Das Projekt ist sowohl hinter dem Zeitplan (SPI < 1, SV < 0) als auch über dem Budget (CPI < 1, CV < 0). Es sind sofortige steuernde Maßnahmen (z. B. Scope-Reduktion / Fast-Tracking) erforderlich.`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "🔥 Meisterklasse: Earned Value Analyse (EVM) & Projektcontrolling (LF 1 / LF 6)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `CV = EV - AC = ${cv.toLocaleString('de-DE')} EUR. SV = EV - PV = ${sv.toLocaleString('de-DE')} EUR. CPI = ${cpi.toFixed(2)}, SPI = ${spi.toFixed(2)}. EAC = ${eac.toFixed(0)} EUR.`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                topic: "🔥 Meisterklasse: Earned Value Analyse (EVM) & Projektcontrolling (LF 1 / LF 6)",
                isCalculation: true,
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWie lauten die Werte für CPI und die voraussichtlichen Gesamtkosten (EAC)?`,
                options: [
                    `CPI: ${cpi.toFixed(2)} | EAC: ${eac.toLocaleString('de-DE', {maximumFractionDigits: 0})} EUR`,
                    `CPI: 1.15 | EAC: ${(bac * 0.9).toLocaleString('de-DE', {maximumFractionDigits: 0})} EUR`,
                    `CPI: 1.00 | EAC: ${bac.toLocaleString('de-DE')} EUR`,
                    `CPI: ${(cpi * 0.5).toFixed(2)} | EAC: ${(eac * 1.5).toLocaleString('de-DE', {maximumFractionDigits: 0})} EUR`
                ],
                correctAnswer: 0,
                explanation: `CPI = EV / AC = ${ev}/${ac} = ${cpi.toFixed(2)}. EAC = BAC / CPI = ${bac}/${cpi.toFixed(2)} = ${eac.toFixed(0)} EUR.`
            });
        }
    }

    // MC15: BGB Vertragsrecht & Leistungsstörungen (Werkvertrag vs. Dienstvertrag, Sachmängelhaftung § 437 BGB) (LF 1 / Schwer)
    for (let i = 0; i < 15; i++) {
        const qText = `🔥 Meisterklasse IT-Vertragsrecht & Gewährleistung (LF 1 / LF 6):\nEin Unternehmen beauftragt ein Softwarehaus mit der Erstellung einer maßgeschneiderten Warenwirtschaftssoftware für 60.000 EUR. Im Vertrag wird vereinbart, dass die Software den im Pflichtenheft definierten automatischen Lagerabgleich fehlerfrei beherrschen muss.\n\nNach der Bereitstellung stellt der Auftraggeber fest, dass der Lagerabgleich bei mehr als 100 gleichzeitigen Buchungen abstürzt. Der Auftraggeber verweigert die Abnahme und will sofort vom Vertrag zurücktreten und Schadensersatz verlangen.\n\nAufgaben:\n1. Bestimmen Sie den zutreffenden Vertragstyp nach BGB (Werkvertrag gem. § 631 BGB oder Dienstvertrag gem. § 611 BGB) und begründen Sie Ihre Entscheidung.\n2. Ist der sofortige Rücktritt des Auftraggebers rechtlich sofort zulässig? Erläutern Sie das gestufte System der Mängelrechte nach BGB (§ 437 / § 634 BGB) und die rechtlichen Voraussetzungen für Rücktritt oder Minderung.\n3. Welche Rechte hat der Auftragnehmer (Recht zur zweiten Andienung)? Wie viele Nachbesserungsversuche stehen ihm üblicherweise nach BGB zu?`;

        const mLoesung = `Musterlösung IT-Vertragsrecht & Mängelhaftung:\n\n1. Vertragstyp:\n- Es handelt sich um einen Werkvertrag gem. § 631 BGB (bzw. Werklieferungsvertrag nach § 650 BGB bei Individualsoftware).\n- Begründung: Das Softwarehaus schuldet einen konkreten werkvertraglichen Erfolg (eine funktionstüchtige, abnahmefähige Software gemäß Pflichtenheft), nicht bloß ein reines Tätigwerden/Bemühen wie beim Dienstvertrag.\n\n2. Zulässigkeit des sofortigen Rücktritts:\n- Nein, der sofortige Rücktritt ist unzulässig.\n- Begründung: Vorrang der Nacherfüllung ("Recht zur zweiten Andienung"). Der Auftraggeber muss dem Auftragnehmer zunächst eine angemessene Frist zur Nacherfüllung (Mängelbeseitigung/Nachbesserung) setzen.\n- Erst nach fruchtlosem Ablauf der Frist oder bei endgültiger Verweigerung greifen die sekundären Mängelrechte: Rücktritt vom Vertrag, Minderung der Vergütung oder Schadensersatz statt der Leistung.\n\n3. Rechte des Auftragnehmers:\n- Der Auftragnehmer hat das Recht, den Mangel innerhalb der gesetzten Frist kostenfrei zu beheben (Nacherfüllungsanspruch).\n- Gemäß § 440 BGB gilt eine Nachbesserung im Regelfall nach dem erfolglosen zweiten Versuch als fehlgeschlagen, sofern sich nicht aus der Art der Sache oder den Umständen etwas anderes ergibt.`;

        const isOpen = shouldBeOpenText();
        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf1",
                topic: "🔥 Meisterklasse: Werkvertrag vs. Dienstvertrag & Mängelrechte BGB (LF 1)",
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "open-text",
                question: qText,
                musterloesung: mLoesung,
                explanation: `Werkvertrag (§ 631 BGB), da Erfolg geschuldet. Sofortiger Rücktritt unzulässig wg. Vorrang der Nacherfüllung (§ 634 BGB, Recht zur 2. Andienung, i.d.R. 2 Versuche).`
            });
        } else {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf1",
                topic: "🔥 Meisterklasse: Werkvertrag vs. Dienstvertrag & Mängelrechte BGB (LF 1)",
                isHard: true,
                difficulty: "hard",
                isBawueFocus: true,
                type: "multiple-choice",
                question: qText + `\n\nWelcher Vertragstyp liegt vor und darf der Auftraggeber sofort zurücktreten?`,
                options: [
                    `Werkvertrag (§ 631 BGB) | Sofortiger Rücktritt unzulässig (Vorrang der Nacherfüllung / Recht zur 2. Andienung)`,
                    `Dienstvertrag (§ 611 BGB) | Sofortiger Rücktritt sofort wirksam`,
                    `Kaufvertrag (§ 433 BGB) | Auftraggeber kann ohne Fristsetzung Minderung fordern`,
                    `Werkvertrag (§ 631 BGB) | Sofortiger Rücktritt sofort zulässig`
                ],
                correctAnswer: 0,
                explanation: `Individualsoftware = Werkvertrag (Erfolg geschuldet). Der Auftragnehmer hat das Recht zur zweiten Andienung (Nacherfüllung vor Rücktritt).`
            });
        }
    }

    return dynamicQuestions;
}
