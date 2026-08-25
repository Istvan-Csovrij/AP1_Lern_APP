// AP1 Dynamischer Aufgabengenerator (Vollständige Abdeckung aller 6 Lernfelder, der höheren Lernfelder bis LF 18 sowie englischer Fachaufgaben)
// Erzeugt über 1.250 zufällige Prüfungsaufgaben aus allen relevanten Bereichen
// Integriert eine 50%-Regelung für offene Baden-Württemberg-Aufgaben (open-text)

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
    for (let i = 0; i < 200; i++) {
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
            let mLösung = "";
            if (qType === 0) {
                qText = `Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Ein Unternehmen möchte für seine Mitarbeiter ${count} neue Monitore beschaffen. Angebot A kostet ${priceA} EUR pro Stück. Berechne die Gesamtkosten für Angebot A.`;
                mLösung = `${totalA} EUR. (Rechnung: ${count} Stück * ${priceA} EUR/Stück = ${totalA} EUR).`;
            } else if (qType === 1) {
                qText = `Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Ein Unternehmen möchte für seine Mitarbeiter ${count} neue Monitore beschaffen. Angebot B kostet ${priceB} EUR pro Stück. Berechne die Gesamtkosten für Angebot B.`;
                mLösung = `${totalB} EUR. (Rechnung: ${count} Stück * ${priceB} EUR/Stück = ${totalB} EUR).`;
            } else {
                qText = `Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Für die Anschaffung von ${count} neuen Monitoren liegen drei Angebote vor:\nAngebot A: ${priceA} EUR/Stück\nAngebot B: ${priceB} EUR/Stück\nAngebot C: ${priceC} EUR/Stück\n\nWelches Angebot hat die niedrigsten Gesamtanschaffungskosten und warum?`;
                mLösung = `Angebot C hat die niedrigsten Kosten (${totalC} EUR), da der Stückpreis mit ${priceC} EUR der geringste ist.`;
            }

            dynamicQuestions.push({
                id: currentId++,
                theme: "lf6",
                type: "open-text",
                question: qText,
                musterloesung: mLösung,
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
    for (let i = 0; i < 200; i++) {
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
    for (let i = 0; i < 50; i++) {
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
    for (let i = 0; i < 300; i++) {
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
            let mLösung = "";
            if (qType === 0) {
                qText = `Prüfungsaufgabe Netzwerk (LF 3): Gegeben ist die IP-Adresse ${baseIP} mit der Subnetzmaske ${m.maskStr} (/${m.slash}). Bestimme die Netzwerkadresse (Network ID).`;
                mLösung = `Netzwerkadresse: ${netID}`;
            } else if (qType === 1) {
                qText = `Prüfungsaufgabe Netzwerk (LF 3): Gegeben ist die IP-Adresse ${baseIP} mit der Subnetzmaske ${m.maskStr} (/${m.slash}). Bestimme die Broadcast-Adresse.`;
                mLösung = `Broadcast-Adresse: ${broadcast}`;
            } else if (qType === 2) {
                qText = `Prüfungsaufgabe Netzwerk (LF 3): Berechne die Anzahl der nutzbaren Host-IP-Adressen für ein Subnetz mit der Subnetzmaske ${m.maskStr} (/${m.slash}).`;
                mLösung = `${hostsCount} Hosts.`;
            } else {
                qText = `Prüfungsaufgabe Netzwerk (LF 3): Gegeben ist die IP-Adresse ${baseIP} mit der Subnetzmaske ${m.maskStr} (/${m.slash}). Bestimme den ersten und den letzten nutzbaren Hostbereich.`;
                mLösung = `Erster Host: ${hostMin}, Letzter Host: ${hostMax}`;
            }

            dynamicQuestions.push({
                id: currentId++,
                theme: "lf3",
                type: "open-text",
                question: qText,
                musterloesung: `${mLösung}\n\n${explanationStr}`,
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
        { name: "Ethernet", layer: "2", layerName: "Sicherungsschicht (Data Link Layer)" }
    ];
    for (let i = 0; i < 60; i++) {
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
    for (let i = 0; i < 50; i++) {
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
    for (let i = 0; i < 50; i++) {
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
    for (let i = 0; i < 200; i++) {
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
    for (let i = 0; i < 50; i++) {
        const item = htmlCssQuestions[Math.floor(Math.random() * htmlCssQuestions.length)];
        const isOpen = shouldBeOpenText();

        if (isOpen) {
            dynamicQuestions.push({
                id: currentId++,
                theme: "lf5",
                type: "open-text",
                question: `Prüfungsaufgabe Web-Entwicklung (LF 17): ${item.q}`,
                musterloesung: item.options[item.answer],
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
    for (let i = 0; i < 50; i++) {
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
    for (let i = 0; i < 50; i++) {
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
    for (let i = 0; i < 50; i++) {
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
    for (let i = 0; i < 150; i++) {
        const num = Math.floor(Math.random() * 256); // 0 bis 255
        const binStr = num.toString(2).padStart(8, '0');
        const hexStr = num.toString(16).toUpperCase();
        
        const qType = Math.floor(Math.random() * 6);
        const isOpen = shouldBeOpenText();
        
        let questionText = "";
        let correctAnswersList = [];
        let mLösung = "";
        let explanationStr = "";
        
        if (qType === 0) {
            // Dezimal zu Binär
            questionText = `Prüfungsaufgabe Zahlensysteme (LF 3): Rechne die Dezimalzahl ${num} in eine 8-Bit-Binärzahl um.`;
            correctAnswersList = [binStr];
            mLösung = binStr;
            
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
            mLösung = num.toString();
            
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
            mLösung = hexStr;
            
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
            mLösung = num.toString();
            
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
            mLösung = hexStr;
            
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
            mLösung = binStr;
            
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
                musterloesung: `Ergebnis: ${mLösung}.\n\n${explanationStr}`,
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
    for (let i = 0; i < 50; i++) {
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
    for (let i = 0; i < 50; i++) {
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
    for (let i = 0; i < 50; i++) {
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
    for (let i = 0; i < 50; i++) {
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

    return dynamicQuestions;
}
