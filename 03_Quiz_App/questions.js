// AP1 Fragen-Datenbank
// Enthält echte und prüfungsnahe Aufgaben basierend auf deinen Lernfeldern (LF1 - LF6), Lernzielkontrollen (LZK) und Unterrichtsmaterialien.

const staticQuestions = [
    // === LERNFELD 1: UNTERNEHMEN & MARKT (lf1) ===
    {
        id: 1,
        theme: "lf1",
        type: "multiple-choice",
        question: "Welches Rechtsgeschäft ist einseitig verpflichtend?",
        options: [
            "Kaufvertrag",
            "Schenkung",
            "Mietvertrag",
            "Ausbildungsvertrag"
        ],
        correctAnswer: 1,
        explanation: "Die Schenkung ist ein einseitig verpflichtendes Rechtsgeschäft, da nur eine Partei (der Schenker) eine Leistung erbringen muss. Kauf-, Miet- und Ausbildungsverträge sind mehrseitig verpflichtende Verträge (gegenseitige Leistungsverpflichtungen)."
    },
    {
        id: 2,
        theme: "lf1",
        type: "multiple-choice",
        question: "Ein Auszubildender (19 Jahre) kauft ohne Wissen seiner Eltern ein teures Smartphone auf Raten. Wie ist die Rechtslage?",
        options: [
            "Der Vertrag ist schwebend unwirksam, da er noch in der Ausbildung ist.",
            "Der Vertrag ist voll wirksam, da er voll geschäftsfähig ist.",
            "Der Vertrag ist nichtig, da kein Einverständnis der Eltern vorliegt.",
            "Der Vertrag ist anfechtbar wegen arglistiger Täuschung."
        ],
        correctAnswer: 1,
        explanation: "Mit Vollendung des 18. Lebensjahres tritt die volle Geschäftsfähigkeit ein (§ 2 BGB). Der Auszubildende ist 19 Jahre alt, somit ist der Vertrag sofort voll wirksam. Das Einverständnis der Eltern oder die Höhe des Einkommens spielen hier rechtlich keine Rolle mehr."
    },

    // === LERNFELD 2: ARBEITSPLATZ & HARDWARE (lf2) ===
    {
        id: 3,
        theme: "lf2",
        type: "multiple-choice",
        question: "Welcher RAID-Level bietet trotz Ausfallsicherheit die verhältnismäßig größte Nettospeicherkapazität bei mindestens 3 Festplatten?",
        options: [
            "RAID 10",
            "RAID 0",
            "RAID 01",
            "RAID 5",
            "RAID 6"
        ],
        correctAnswer: 3,
        explanation: "RAID 5 verteilt die Paritätsdaten über alle Festplatten und verliert dabei die Kapazität von genau einer Festplatte für Parität (N-1 Nutzkapazität). RAID 10 und 01 spiegeln Daten und verlieren 50% der Kapazität (N/2). RAID 6 nutzt doppelte Parität und verliert die Kapazität von zwei Festplatten (N-2). RAID 0 bietet keine Ausfallsicherheit."
    },
    {
        id: 4,
        theme: "lf2",
        type: "text-input",
        question: "Wie lautet der Fachbegriff für den Typ von Speicher, der beim Ausschalten des Computers alle gespeicherten Daten verliert? (Abkürzung mit 3 Buchstaben)",
        correctAnswers: ["RAM", "DRAM", "SRAM"],
        explanation: "RAM (Random Access Memory) ist ein flüchtiger Speicher (volatile memory). Sobald die Stromversorgung unterbrochen wird, gehen alle darin befindlichen Daten verloren."
    },
    {
        id: 26,
        theme: "lf2",
        type: "multiple-choice",
        question: "Welche Windows 11 Edition ist für den Heimanwender gedacht und bietet standardmäßig keine Möglichkeit, einer klassischen Active Directory-Domäne beizutreten?",
        options: [
            "Windows 11 Education",
            "Windows 11 Home",
            "Windows 11 Pro",
            "Windows 11 Enterprise"
        ],
        correctAnswer: 1,
        explanation: "Windows 11 Home ist für Heimanwender ausgelegt und besitzt im Gegensatz zu Pro, Education und Enterprise keine erweiterten Unternehmensfunktionen wie den Domänenbeitritt (Active Directory) oder die BitLocker-Verschlüsselung."
    },

    // === LERNFELD 3: NETZWERKE & PROTOKOLLE (lf3) ===
    {
        id: 5,
        theme: "lf3",
        type: "text-input",
        question: "Gegeben ist die IP-Adresse 192.168.10.45 mit der Subnetzmaske 255.255.255.0. Wie lautet die Netzwerkadresse (Network ID)?",
        correctAnswers: ["192.168.10.0"],
        explanation: "Die Subnetzmaske 255.255.255.0 (/24) besagt, dass die ersten 3 Oktette den Netzwerkanteil darstellen. Durch eine logische UND-Verknüpfung der IP mit der Maske erhält man die Netzwerkadresse: 192.168.10.0."
    },
    {
        id: 6,
        theme: "lf3",
        type: "text-input",
        question: "Gegeben ist die IP-Adresse 192.168.10.45 mit der Subnetzmaske 255.255.255.0. Wie lautet die Broadcast-Adresse?",
        correctAnswers: ["192.168.10.255"],
        explanation: "Bei der Subnetzmaske 255.255.255.0 werden für die Broadcast-Adresse alle Bits des Hostanteils (das letzte Oktett) auf 1 gesetzt. Das entspricht der Dezimalzahl 255, somit lautet die Adresse 192.168.10.255."
    },
    {
        id: 7,
        theme: "lf3",
        type: "multiple-choice",
        question: "Auf welcher Schicht des OSI-Referenzmodells arbeitet ein IP-Router zur Weiterleitung von Datenpaketen?",
        options: [
            "Schicht 1: Bitübertragungsschicht (Physical Layer)",
            "Schicht 2: Sicherungsschicht (Data Link Layer)",
            "Schicht 3: Vermittlungsschicht (Network Layer)",
            "Schicht 4: Transportschicht (Transport Layer)"
        ],
        correctAnswer: 2,
        explanation: "Ein Router arbeitet auf Schicht 3 (Network Layer / Vermittlungsschicht), da er logische IP-Adressen analysiert, um den optimalen Weg für Datenpakete in andere Netzwerke zu bestimmen. Switches arbeiten meist auf Schicht 2 (MAC-Ebene), Hubs auf Schicht 1."
    },
    {
        id: 8,
        theme: "lf3",
        type: "multiple-choice",
        question: "Welches Protokoll dient der automatischen Zuweisung von IP-Adressen, Subnetzmasken und Standard-Gateways an Netzwerk-Clients?",
        options: [
            "DNS",
            "DHCP",
            "ARP",
            "ICMP"
        ],
        correctAnswer: 1,
        explanation: "DHCP (Dynamic Host Configuration Protocol) weist Clients beim Systemstart dynamisch eine IP-Konfiguration zu. DNS übersetzt Domainnamen in IP-Adressen. ARP löst IP-Adressen in physikalische MAC-Adressen auf."
    },
    {
        id: 18,
        theme: "lf3",
        type: "text-input",
        question: "Auf welcher Schicht des OSI-Modells ist der Begriff 'Frame' (Rahmen) zu finden? Gib die Nummer der Schicht an (1-7):",
        correctAnswers: ["2", "Schicht 2", "Zwei"],
        explanation: "Auf Schicht 2 (Sicherungsschicht / Data Link Layer) werden Bits zu Datenrahmen (Frames) zusammengefasst und mit physikalischen Adressen (MAC-Adressen) versehen. Auf Schicht 3 spricht man von Paketen (Packets), auf Schicht 4 von Segmenten."
    },
    {
        id: 19,
        theme: "lf3",
        type: "multiple-choice",
        question: "Wozu nutzt man das Spanning Tree Protocol (STP) in einem lokalen Netzwerk?",
        options: [
            "Um Bandbreiten durch Komprimierung zu sparen",
            "Um Layer-2-Schleifen (Loops) bei redundanten Verbindungen zu vermeiden",
            "Um virtuelle Netzwerke (VLANs) auf einem Switch zu deklarieren",
            "Um Routing-Tabellen zwischen Switches auszutauschen"
        ],
        correctAnswer: 1,
        explanation: "Das Spanning Tree Protocol (STP, IEEE 802.1D) blockiert redundante Pfade in einem geswitchten Netzwerk so, dass eine schleifenfreie Baumstruktur entsteht. Dadurch werden Broadcast-Stürme (Layer-2-Loops) verhindert."
    },
    {
        id: 20,
        theme: "lf3",
        type: "multiple-choice",
        question: "Unter welcher IEEE-Norm sind die Standards für drahtlose lokale Netzwerke (WLAN) spezifiziert?",
        options: [
            "IEEE 802.3",
            "IEEE 802.5",
            "IEEE 802.11",
            "IEEE 802.15"
        ],
        correctAnswer: 2,
        explanation: "WLAN ist unter der Norm IEEE 802.11 spezifiziert (z. B. 802.11ax für Wi-Fi 6). IEEE 802.3 spezifiziert Ethernet (Kabelnetze), 802.5 Token Ring und 802.15 WPAN (z. B. Bluetooth)."
    },
    {
        id: 21,
        theme: "lf3",
        type: "text-input",
        question: "Wie viele nutzbare Hosts können in einem Subnetz mit der Subnetzmaske 255.255.255.240 (/28) adressiert werden?",
        correctAnswers: ["14"],
        explanation: "Ein /28-Netzwerk hat 4 Host-Bits (32 - 28 = 4). Die Gesamtzahl der IP-Adressen ist 2^4 = 16. Davon müssen die Netzwerkadresse (erste IP) und die Broadcastadresse (letzte IP) abgezogen werden: 16 - 2 = 14 nutzbare Hostadressen."
    },
    {
        id: 22,
        theme: "lf3",
        type: "text-input",
        question: "Wie lautet die Netzwerkadresse (Network ID) für die IP-Adresse 16.218.108.91 /27?",
        correctAnswers: ["16.218.108.64"],
        explanation: "Ein /27-Subnetz hat eine Maske von 255.255.255.224. Das letzte Oktett 91 in Binärschreibweise lautet 01011011. Die ersten 3 Bits (24+3 = 27) gehören zum Netzwerkanteil. Maskiert man die letzten 5 Bits auf 0, erhält man 01000000, was dezimal 64 entspricht. Die Netzadresse lautet also 16.218.108.64."
    },
    {
        id: 23,
        theme: "lf3",
        type: "multiple-choice",
        question: "Welche Funktion hat die IPv6-Multicastadresse ff02::2?",
        options: [
            "Adressiert alle Hosts im lokalen Subnetz (Link-Local All-Nodes)",
            "Dient als Loopback-Adresse zur Überprüfung des TCP/IP-Stacks",
            "Adressiert alle Router im lokalen Netzbereich (Link-Local All-Routers)",
            "Entspricht der DHCPv6-Server-Adresse"
        ],
        correctAnswer: 2,
        explanation: "Die IPv6-Adresse ff02::2 ist die Link-Local All-Routers Multicastadresse. Pakete an diese Adresse erreichen alle IPv6-Router im selben Netzsegment. ff02::1 adressiert alle Hosts (All-Nodes)."
    },
    {
        id: 27,
        theme: "lf3",
        type: "multiple-choice",
        question: "Welches ist das Hauptmerkmal einer Arbeitsgruppe (Workgroup) im Vergleich zu einer Active-Directory-Domäne unter Windows?",
        options: [
            "Benutzerkonten werden dezentral auf jedem PC einzeln gepflegt (Peer-to-Peer).",
            "Alle Berechtigungen werden zentral von einem Domain Controller gesteuert.",
            "Die Computer müssen sich in unterschiedlichen Netzwerken befinden.",
            "Es wird zwingend das ReFS-Dateisystem vorausgesetzt."
        ],
        correctAnswer: 0,
        explanation: "In einer Arbeitsgruppe (Workgroup) erfolgt die Verwaltung dezentral. Jeder Computer verwaltet seine eigenen Benutzerkonten lokal (Peer-to-Peer). In einer Domäne übernimmt das Active Directory auf dem Domain Controller die zentrale Verwaltung aller Identitäten."
    },
    {
        id: 28,
        theme: "lf3",
        type: "text-input",
        question: "In welchem Standardverzeichnis legt Windows 11 Treiberpakete ab, damit neue Hardware sofort automatisch ohne Datenträger installiert werden kann? (DriverStore-Pfad)",
        correctAnswers: ["C:\\Windows\\System32\\DriverStore", "C:/Windows/System32/DriverStore", "\\Windows\\System32\\DriverStore"],
        explanation: "Windows legt signierte Treiberpakete im DriverStore-Repository unter C:\\Windows\\System32\\DriverStore ab. Bei Anschluss des Geräts greift das Betriebssystem direkt darauf zu (Staging & Installation)."
    },

    // === LERNFELD 4: SCHUTZ & SICHERHEIT (lf4) ===
    {
        id: 9,
        theme: "lf4",
        type: "multiple-choice",
        question: "Welche Backup-Methode sichert an jedem Wochentag ausschließlich die Daten, die sich seit dem letzten VOLLBACKUP geändert haben?",
        options: [
            "Inkrementelle Sicherung",
            "Differenzielle Sicherung",
            "Großvater-Vater-Sohn-Sicherung",
            "Klonen (1:1 Abbild)"
        ],
        correctAnswer: 1,
        explanation: "Die differenzielle Sicherung sichert alle Änderungen seit dem letzten Vollbackup. Der Speicherbedarf wächst täglich an, dafür werden zur Wiederherstellung nur das Vollbackup und das letzte differenzielle Backup benötigt. Das inkrementelle Backup sichert dagegen nur Änderungen seit der jeweils letzten Sicherung."
    },
    {
        id: 24,
        theme: "lf4",
        type: "multiple-choice",
        question: "Ein Unternehmen macht samstags ein Vollbackup (80 GiB). Mo fallen 10 GiB, Di 20 GiB und Mi 30 GiB neue Daten an. Wie viel Datenvolumen wird am DIENSTAG gesichert bei a) inkrementeller Sicherung und b) differenzieller Sicherung?",
        options: [
            "a) 20 GiB / b) 30 GiB",
            "a) 20 GiB / b) 20 GiB",
            "a) 30 GiB / b) 30 GiB",
            "a) 10 GiB / b) 30 GiB"
        ],
        correctAnswer: 0,
        explanation: "Die inkrementelle Sicherung sichert nur die Änderungen des Tages (Dienstag = 20 GiB). Die differenzielle Sicherung sichert alle Änderungen seit Samstag (Montag + Dienstag = 10 GiB + 20 GiB = 30 GiB)."
    },
    {
        id: 10,
        theme: "lf4",
        type: "multiple-choice",
        question: "Welches kryptografische Verfahren nutzt einen öffentlichen Schlüssel (Public Key) zur Verschlüsselung und einen privaten Schlüssel (Private Key) zur Entschlüsselung?",
        options: [
            "Symmetrische Verschlüsselung (z.B. AES)",
            "Asymmetrische Verschlüsselung (z.B. RSA)",
            "Hashverfahren (z.B. SHA-256)",
            "Steganographie"
        ],
        correctAnswer: 1,
        explanation: "Die asymmetrische Verschlüsselung arbeitet mit einem Schlüsselpaar. Der öffentliche Schlüssel wird verteilt und dient der Verschlüsselung. Der private Schlüssel bleibt geheim und dient als einziger Schlüssel der Entschlüsselung. Symmetrische Verfahren nutzen denselben Schlüssel für beide Vorgänge."
    },
    {
        id: 11,
        theme: "lf4",
        type: "multiple-choice",
        question: "Welches IT-Sicherheitsziel stellt sicher, dass Daten unversehrt, vollständig und vor unbefugter oder unbemerkter Veränderung geschützt sind?",
        options: [
            "Vertraulichkeit (Confidentiality)",
            "Integrität (Integrity)",
            "Verfügbarkeit (Availability)",
            "Authentizität (Authenticity)"
        ],
        correctAnswer: 1,
        explanation: "Integrität garantiert, dass Daten korrekt und vollständig übertragen und nicht manipuliert wurden. Vertraulichkeit schützt vor unbefugtem Mitlesen, Verfügbarkeit stellt die Systembereitschaft sicher."
    },
    {
        id: 29,
        theme: "lf4",
        type: "text-input",
        question: "Wie groß darf eine einzelne Datei unter dem Dateisystem FAT32 maximal sein? Gib die Zahl mit der Einheit an (z. B. '4 GB'):",
        correctAnswers: ["4 GB", "4GB", "4 Gigabyte", "4.294.967.295 Bytes"],
        explanation: "Unter FAT32 liegt die maximale Dateigröße bei exakt 4 GB minus 1 Byte (4.294.967.295 Bytes). Für größere Dateien muss exFAT oder NTFS verwendet werden."
    },
    {
        id: 30,
        theme: "lf4",
        type: "text-input",
        question: "Welcher Registry-Pfad / Schlüssel (Key) wird in Windows 11 unter Hyper-V verwendet, um bei der Installation die Hardware-Prüfungen 'BypassTPMCheck' und 'BypassSecureBootCheck' manuell zu hinterlegen?",
        correctAnswers: ["LabConfig", "HKLM\\SYSTEM\\Setup\\LabConfig", "HKEY_LOCAL_MACHINE\\SYSTEM\\Setup\\LabConfig"],
        explanation: "In der Windows-Registry muss unter 'HKEY_LOCAL_MACHINE\\SYSTEM\\Setup' der Schlüssel 'LabConfig' erstellt werden. Darin werden die DWORD-Werte 'BypassTPMCheck=1' und 'BypassSecureBootCheck=1' angelegt, um die Systemprüfung zu umgehen."
    },
    {
        id: 31,
        theme: "lf4",
        type: "multiple-choice",
        question: "Welche Funktion hat die Benutzerkontensteuerung (UAC - User Account Control) in Windows 11 primär?",
        options: [
            "Sie verschlüsselt die Systemdateien, um sie vor Spionage zu schützen.",
            "Sie verhindert, dass Programme ohne administrative Rechte und Bestätigung tiefe Eingriffe am Betriebssystem vornehmen.",
            "Sie blockiert verdächtige IP-Adressen auf Netzwerkebene.",
            "Sie bereinigt automatisch temporäre Dateien auf der Festplatte."
        ],
        correctAnswer: 1,
        explanation: "Die UAC (User Account Control) fordert bei Aktionen, die administrative Rechte erfordern (z.B. Software-Installationen, Treiber-Updates), eine Bestätigung des Nutzers an, um unbemerkte Eingriffe durch Malware im Hintergrund zu verhindern."
    },
    {
        id: 32,
        theme: "lf4",
        type: "multiple-choice",
        question: "Welcher Typ von Malware benötigt im Gegensatz zu Viren keinen 'Wirt' (also kein legitimes Programm, an das er sich anhängt), sondern verbreitet sich selbstständig über Netzwerke und Sicherheitslücken?",
        options: [
            "Spyware",
            "Trojaner",
            "Computer-Wurm",
            "Ransomware"
        ],
        correctAnswer: 2,
        explanation: "Ein Computer-Wurm (Worm) verbreitet sich selbstständig über Netzwerke und nutzt Systemlücken aus. Ein Virus benötigt zur Aktivierung und Ausbreitung immer ein Wirtsprogramm, das vom Benutzer ausgeführt werden muss."
    },
    {
        id: 33,
        theme: "lf4",
        type: "multiple-choice",
        question: "Welche Art der Verschlüsselung wird standardmäßig bei Windows BitLocker eingesetzt, um Festplatten komplett zu verschlüsseln?",
        options: [
            "Symmetrische Verschlüsselung (z.B. AES)",
            "Asymmetrische Verschlüsselung (z.B. RSA)",
            "Klassische RSA-Verschlüsselung mit Public/Private Key-Verteilung",
            "MD5-Hashing"
        ],
        correctAnswer: 0,
        explanation: "BitLocker nutzt die symmetrische AES-Verschlüsselung (meist mit 128 oder 256 Bit Schlüssellänge), da diese extrem schnell und sicher beim Lesen und Schreiben großer Datenmengen auf Systemdatenträgern arbeitet."
    },
    {
        id: 34,
        theme: "lf4",
        type: "multiple-choice",
        question: "Welche Komprimierungsart eignet sich für die Speicherung von Textdokumenten oder Programm-Quellcodes?",
        options: [
            "Verlustbehaftete Komprimierung (Lossy)",
            "Verlustfreie Komprimierung (Lossless)",
            "MP3-Codierung",
            "JPEG-Standard"
        ],
        correctAnswer: 1,
        explanation: "Bei Texten und Programmcodes darf kein einziges Bit verloren gehen (sonst ist der Text unlesbar oder der Code kompiliert nicht). Daher muss zwingend eine verlustfreie Komprimierung (z.B. ZIP oder GZIP) verwendet werden. Verlustbehaftete Komprimierung ist nur für Medien (Bilder, Musik, Videos) geeignet."
    },

    // === LERNFELD 5: SOFTWARE & SQL (lf5) ===
    {
        id: 12,
        theme: "lf5",
        type: "multiple-choice",
        question: "Welcher SQL-Befehl wird verwendet, um alle Datensätze aus einer Tabelle 'Kunden' abzurufen, bei denen der Ort 'Berlin' ist, sortiert nach dem Nachnamen?",
        options: [
            "SELECT * FROM Kunden HAVING Ort = 'Berlin' ORDER BY Nachname;",
            "SELECT * FROM Kunden WHERE Ort = 'Berlin' GROUP BY Nachname;",
            "SELECT * FROM Kunden WHERE Ort = 'Berlin' ORDER BY Nachname;",
            "GET ALL FROM Kunden WHERE Ort = 'Berlin' SORT BY Nachname;"
        ],
        correctAnswer: 2,
        explanation: "Der korrekte SQL-Befehl lautet: SELECT * FROM Kunden WHERE Ort = 'Berlin' ORDER BY Nachname;. Das WHERE-Keyword filtert Datensätze, ORDER BY sortiert sie. GROUP BY wird zum Aggregieren benutzt, HAVING filtert aggregierte Ergebnisse."
    },
    {
        id: 13,
        theme: "lf5",
        type: "text-input",
        question: "Gegeben ist folgendes Pseudocode-Segment. Welchen Wert hat die Variable 'erg' am Ende der Ausführung?",
        code: "SET erg = 0\nSET i = 1\nWHILE i < 5 DO\n    IF i % 2 == 0 THEN\n        erg = erg + i\n    END IF\n    i = i + 1\nEND WHILE",
        correctAnswers: ["6"],
        explanation: "Die Schleife läuft für i = 1, 2, 3, 4 (da i < 5). Die Bedingung i % 2 == 0 trifft für i = 2 und i = 4 zu. Somit wird gerechnet: erg = 0 + 2 = 2 (bei i=2) und danach erg = 2 + 4 = 6 (bei i=4). Am Ende is erg = 6."
    },
    {
        id: 14,
        theme: "lf5",
        type: "text-input",
        question: "Gegeben ist folgende PIN-Prüfung als Pseudocode. Welche Ausgabe liefert das Programm bei der Eingabe '12A456'?",
        code: "SET pin = '12A456'\nSET gueltig = true\nIF laenge(pin) != 6 THEN\n    gueltig = false\nEND IF\nFOR jedes zeichen in pin DO\n    IF zeichen ist keine Ziffer THEN\n        gueltig = false\n    END IF\nEND FOR\nIF gueltig == true THEN\n    AUSGABE 'JA'\nELSE\n    AUSGABE 'NEIN'\nEND IF",
        correctAnswers: ["NEIN"],
        explanation: "Die PIN hat zwar die Länge 6, aber das Zeichen 'A' an dritter Stelle ist keine Ziffer. Die Variable 'gueltig' wird in der Schleife auf 'false' gesetzt, weswegen die Bedingung am Ende fehlschlägt und 'NEIN' ausgegeben wird."
    },
    {
        id: 35,
        theme: "lf5",
        type: "text-input",
        question: "Wofür steht die Abkürzung 'KISS' im Software-Engineering und Code-Design?",
        correctAnswers: ["Keep It Simple, Stupid", "Keep It Simple Stupid"],
        explanation: "Das KISS-Prinzip fordert, Lösungen im Softwaredesign so einfach wie möglich zu halten, da einfache Strukturen lesbarer, wartbarer und weniger fehleranfällig sind."
    },
    {
        id: 36,
        theme: "lf5",
        type: "text-input",
        question: "Wie lautet das Standardformat einer User Story in der agilen Anforderungsanalyse? (Ergänze den letzten Teil: 'Als [Rolle] möchte ich [Ziel], damit ...')",
        correctAnswers: ["[Nutzen]", "Nutzen", "[ich einen Nutzen habe]", "Nutzen generiert wird"],
        explanation: "Das Standardformat lautet: 'Als [Rolle] möchte ich [Ziel], damit [Nutzen]'. Dies stellt sicher, dass die Anforderungen immer fachlich begründet sind."
    },
    {
        id: 37,
        theme: "lf5",
        type: "multiple-choice",
        question: "Welchen Testtyp führt ein Entwickler aus, um sicherzustellen, dass eine einzelne, isolierte Klasse oder Funktion fehlerfrei arbeitet?",
        options: [
            "Regressionstest",
            "Systemtest",
            "Integrationstest",
            "Unit-Test (Modultest)"
        ],
        correctAnswer: 3,
        explanation: "Ein Unit-Test (Modultest) prüft die kleinste isolierbare Einheit einer Software (z.B. eine Funktion oder Klasse) auf korrekte Funktionsweise."
    },
    {
        id: 38,
        theme: "lf5",
        type: "multiple-choice",
        question: "Welche UML-Beziehung beschreibt im Use-Case-Diagramm (Anwendungsfalldiagramm) einen Anwendungsfall, der unter bestimmten Bedingungen optional ausgeführt werden kann?",
        options: [
            "<<include>>-Beziehung",
            "<<extend>>-Beziehung",
            "Generalisierung",
            "Assoziation"
        ],
        correctAnswer: 1,
        explanation: "Die <<extend>>-Beziehung modelliert ein optionales Verhalten eines Anwendungsfalls unter bestimmten Bedingungen. Dagegen beschreibt <<include>> einen zwingend erforderlichen Teil-Anwendungsfall."
    },
    {
        id: 39,
        theme: "lf5",
        type: "multiple-choice",
        question: "Wie werden Multiplizitäten (Kardinalitäten) standardmäßig in einem UML-Use-Case-Diagramm dargestellt?",
        options: [
            "Als Zahlenwerte (z.B. 1..*) an den Verbindungslinien.",
            "Normalerweise gar nicht, da Use-Case-Diagramme rein funktionale Interaktionen zeigen.",
            "In den Ecken der Systemgrenzen-Boxen.",
            "Als Attribute innerhalb der Akteurs-Symbole."
        ],
        correctAnswer: 1,
        explanation: "Use-Case-Diagramme sind fachliche Übersichten. Kardinalitäten (Mengenangaben) werden im Use-Case-Diagramm standardmäßig nicht angegeben. Sie gehören stattdessen in Klassendiagramme."
    },
    {
        id: 40,
        theme: "lf5",
        type: "multiple-choice",
        question: "Wie nennt man Softwaretests, die nach einer Code-Änderung oder einem Update durchgeführt werden, um sicherzustellen, dass keine funktionierenden Systembereiche unbeabsichtigt beschädigt wurden?",
        options: [
            "Unit-Tests",
            "Regressionstests",
            "Integrationstests",
            "Alpha-Tests"
        ],
        correctAnswer: 1,
        explanation: "Regressionstests prüfen das bestehende Gesamtsystem nach Änderungen, um sicherzustellen, dass keine 'Rückschritte' (Regressionen) bzw. neue Fehler in bereits stabilen Funktionen eingebaut wurden."
    },

    // === LERNFELD 6: SERVICES & WISO (lf6) ===
    {
        id: 15,
        theme: "lf6",
        type: "multiple-choice",
        question: "Ein Systemhaus bestellt 20 Notebooks für ein Kundenprojekt beim Großhändler. Bei der sofortigen Lieferung stellt der Techniker fest, dass statt 16 GB RAM nur 8 GB verbaut sind. Welche Rechtslage gilt?",
        options: [
            "Es liegt ein zweiseitiger Handelskauf vor. Der Käufer muss den Mangel unverzüglich nach Lieferung rügen, andernfalls gilt die Ware als genehmigt (§ 377 HGB).",
            "Der Käufer hat 2 Jahre Gewährleistung und kann den Mangel jederzeit reklamieren.",
            "Der Vertrag ist nichtig, da eine Falschlieferung vorliegt.",
            "Das Systemhaus kann vom Vertrag zurücktreten, muss aber keine Rüge einreichen."
        ],
        correctAnswer: 0,
        explanation: "Da beide Parteien Kaufleute sind, gilt das HGB. Gemäß § 377 HGB (Untersuchungs- und Rügepflicht beim zweiseitigen Handelskauf) muss der Käufer offene Mängel unverzüglich rügen. Versäumt er dies, gilt die mangelhafte Lieferung als genehmigt und er verliert seine Gewährleistungsrechte für diesen Mangel."
    },
    {
        id: 16,
        theme: "lf6",
        type: "multiple-choice",
        question: "Welche Methode eignet sich am besten, um verschiedene Angebote für eine neue Serverinfrastruktur sowohl nach quantitativen (Kosten) als auch nach qualitativen Kriterien (Garantiezeit, Support, Energieeffizienz) strukturiert zu bewerten?",
        options: [
            "Kosten-Nutzen-Vergleich (Amortisationsrechnung)",
            "Nutzwertanalyse (NWA)",
            "ABC-Analyse",
            "Meilensteintrendanalyse"
        ],
        correctAnswer: 1,
        explanation: "Die Nutzwertanalyse (NWA) ermöglicht es, Angebote anhand von Kriterien mit unterschiedlicher Gewichtung und Bewertungspunkten strukturiert zu vergleichen. Sie berücksichtigt neben harten Faktoren (Kosten) gezielt weiche bzw. qualitative Kriterien."
    },
    {
        id: 17,
        theme: "lf6",
        type: "multiple-choice",
        question: "Wie wird ein Vertrag bezeichnet, in dem sich ein Dienstleister verpflichtet, dem Auftraggeber die Verfügbarkeit eines IT-Services (z. B. 99,9 % Server-Uptime im Jahr) vertraglich zuzusichern?",
        options: [
            "Werkvertrag",
            "Service Level Agreement (SLA)",
            "ITIL-Leitfaden",
            "Dienstvertrag"
        ],
        correctAnswer: 1,
        explanation: "Ein SLA (Service Level Agreement) ist eine Vereinbarung zwischen Dienstleister und Kunde, in der Qualitätsstandards wie Verfügbarkeiten, Reaktionszeiten und Eskalationswege für einen IT-Service festgelegt werden."
    },
    {
        id: 25,
        theme: "lf6",
        type: "multiple-choice",
        question: "Ein Programm zum Betrachten von Internetseiten nennt man...",
        options: [
            "Browser",
            "Explorer",
            "Client",
            "Scanner"
        ],
        correctAnswer: 0,
        explanation: "Ein Browser (wie Chrome, Firefox oder Edge) ist ein Softwareprogramm zur Darstellung von Webseiten im World Wide Web. Explorer ist z.B. die Windows-Dateiverwaltung, Client das allgemeine System im Netzwerk und Scanner ein Eingabegerät."
    },
    {
        id: 41,
        theme: "lf6",
        type: "multiple-choice",
        question: "Wie wird ein Cloud-Dienst bezeichnet, bei dem der Provider dem Kunden eine fertige Laufzeitumgebung (z.B. für Datenbanken oder Java-Code) bereitstellt und das Betriebssystem verwaltet, während der Kunde nur seine Anwendungen einpflegt?",
        options: [
            "IaaS (Infrastructure as a Service)",
            "SaaS (Software as a Service)",
            "PaaS (Platform as a Service)",
            "BaaS (Backup as a Service)"
        ],
        correctAnswer: 2,
        explanation: "Bei PaaS (Platform as a Service) stellt der Provider die Plattform (inklusive Betriebssystem und Laufzeitumgebung wie Datenbanken oder Webserver) bereit. Der Kunde entwickelt und verwaltet nur seine Applikationen. IaaS liefert nur nackte Hardware/VMs, SaaS die fertige Endnutzer-Software."
    },
    {
        id: 42,
        theme: "lf6",
        type: "multiple-choice",
        question: "Welchen großen Vorteil bietet die Skalierung von Cloud-Systemen gegenüber physischen Systemen in einem eigenen lokalen Rechenzentrum?",
        options: [
            "Cloud-Systeme verbrauchen keinen Strom vor Ort.",
            "Ressourcen wie CPU, RAM oder Speicher können extrem schnell, bedarfsgerecht und oft vollautomatisch angepasst werden, ohne physische Hardware bestellen und einbauen zu müssen.",
            "In Cloud-Systemen sind Backups gesetzlich nicht erforderlich.",
            "Es wird kein Hypervisor benötigt."
        ],
        correctAnswer: 1,
        explanation: "Cloud-Systeme zeichnen sich durch Elastizität und On-Demand-Skalierung aus. Anpassungen erfolgen per Klick oder Skript in Minuten, während ein eigenes Rechenzentrum Beschaffung, Wartezeiten und manuellen Einbau erfordert."
    },
    {
        id: 43,
        theme: "lf6",
        type: "text-input",
        question: "Welcher Begriff beschreibt das gesamte Nutzungserlebnis, das ein Anwender bei der Bedienung einer Software, Webseite oder App erfährt? (Abkürzung mit 2 Buchstaben)",
        correctAnswers: ["UX", "User Experience"],
        explanation: "UX steht für User Experience (Nutzungserlebnis) und umfasst Usability, visuelles Design, Ladezeiten, emotionale Wirkung und die Barrierefreiheit der Software."
    },
    {
        id: 44,
        theme: "lf6",
        type: "multiple-choice",
        question: "Ein Lieferant verspricht in einem Kaufvertrag, Notebooks bis zum 6. November zu liefern. Es erfolgt keine Lieferung. Der Lieferant gerät in Lieferungsverzug. Welche rechtliche Voraussetzung muss für den Verzug erfüllt sein?",
        options: [
            "Der Käufer muss nach Ablauf des Datums eine Mahnung senden.",
            "Keine weitere, da der Liefertermin kalendermäßig bestimmt ist (Fixkauf/Terminkauf) und der Verzug automatisch eintritt.",
            "Der Vertrag muss notariell beglaubigt sein.",
            "Der Käufer muss eine Fristverlängerung von mindestens 14 Tagen einräumen."
        ],
        correctAnswer: 1,
        explanation: "Wenn ein Liefertermin kalendermäßig bestimmt ist (z. B. 'am 06. November'), gerät der Schuldner nach § 286 BGB ohne Mahnung automatisch mit Ablauf dieses Datums in Verzug."
    },
    {
        id: 45,
        theme: "lf6",
        type: "text-input",
        question: "Wie nennt man die Rügepflicht, bei der ein Mangel bei einer B2B-Lieferung erst nach Tagen oder Wochen bei der Benutzung auffällt, aber dennoch sofort gemeldet werden muss? (Begriff mit 2 Wörtern, z. B. '... Mangel')",
        correctAnswers: ["verdeckter Mangel", "verdeckten Mangel", "verdeckte Mängel"],
        explanation: "Ein verdeckter Mangel ist bei der Lieferung nicht sofort erkennbar. Er muss unverzüglich nach seiner Entdeckung gerügt werden, damit Gewährleistungsrechte erhalten bleiben."
    },
    {
        id: 46,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Vertragsrecht (LF 6): Die IT AG bestellt Notebooks. Bei der Warenannahme wird festgestellt, dass die Notebooks nicht die vereinbarten 8 GB RAM, sondern nur 4 GB RAM haben. Nenne die vorliegende Art der Vertragsstörung.",
        musterloesung: "Mangelhafte Lieferung (Schlechtleistung) bzw. Sachmangel (Falschlieferung / Abweichung von der vereinbarten Beschaffenheit).",
        explanation: "Da die gelieferte Ware nicht die vereinbarte Beschaffenheit aufweist (4 GB statt 8 GB RAM), liegt ein Sachmangel nach § 434 BGB vor. Die Vertragsstörung nennt sich mangelhafte Lieferung (Schlechtleistung)."
    },
    {
        id: 47,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Vertragsrecht (LF 6): Beschreibe, was ein Käufer (Unternehmen) im Rahmen eines zweiseitigen Handelskaufs (§ 377 HGB) tun muss, wenn er eine mangelhafte Lieferung erhält, um seine Gewährleistungsrechte zu wahren.",
        musterloesung: "Der Käufer muss die gelieferte Ware unverzüglich nach der Ablieferung untersuchen und, wenn sich ein Mangel zeigt, dem Verkäufer unverzüglich Anzeige machen (Rügepflicht).",
        explanation: "Beim B2B-Kauf (zweiseitiger Handelskauf) gilt die Rügepflicht nach § 377 HGB. Unterlässt der Käufer die unverzügliche Untersuchung und Rüge, gilt die Ware als genehmigt, es sei denn, der Mangel war nicht erkennbar."
    },
    {
        id: 48,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Sicherheit (LF 4): Erläutere den Unterschied zwischen einem Computer-Virus und einem Computer-Wurm bezüglich ihrer Ausbreitung und Vermehrung.",
        musterloesung: "Ein Computervirus benötigt zwingend eine Trägerdatei oder ein Wirtsprogramm, um sich zu verbreiten, und muss vom Nutzer aktiv gestartet/ausgeführt werden. Ein Computerwurm ist ein eigenständiges Programm, das sich selbstständig und aktiv über Netzwerke und Sicherheitslücken vervielfältigt, ohne ein Wirtsprogramm zu benötigen.",
        explanation: "Viren infizieren bestehende Dateien. Würmer nutzen Sicherheitslücken und Netzwerkprotokolle, um sich vollkommen eigenständig im Netz auszubreiten."
    },
    {
        id: 49,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Sicherheit (LF 4): Erläutere, wie ein Distributed Denial of Service (DDoS)-Angriff abläuft und welches Ziel er verfolgt.",
        musterloesung: "Bei einem DDoS-Angriff wird ein Server oder Dienst durch massenhafte, gleichzeitige Anfragen von einer Vielzahl verschiedener Rechner (oftmals ein koordiniertes Botnetz) überlastet. Das Ziel ist es, die Ressourcen des Servers (Bandbreite, CPU, RAM) so stark zu beanspruchen, dass der Dienst für reguläre Benutzer unerreichbar wird.",
        explanation: "Der Angriff erfolgt verteilt (Distributed) über viele Rechner, was eine Abwehr durch einfaches Blockieren einer einzelnen IP-Adresse unmöglich macht."
    },
    {
        id: 50,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Ergonomie (LF 2): Nenne 4 wesentliche Kriterien, die bei der ergonomischen Einrichtung eines Bildschirmarbeitsplatzes beachtet werden müssen.",
        musterloesung: "1. Flimmerfreier Bildschirm mit ausreichendem Sehabstand (ca. 50-80 cm).\n2. Reflexionsfreie Oberfläche des Bildschirms und der Arbeitsfläche.\n3. Tastatur flach, reflexionsarm und getrennt vom Bildschirm positioniert.\n4. Individuell anpassbarer, ergonomischer Bürostuhl und Schreibtischhöhe.",
        explanation: "Die Ergonomie dient der Gesunderhaltung der Mitarbeiter und umfasst physikalische Faktoren wie Sehabstand, Tastaturwinkel, Lichtverhältnisse und Stuhleinstellungen."
    },
    {
        id: 51,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Datenschutz (LF 4): Die DSGVO nennt verschiedene Grundsätze für die Verarbeitung personenbezogener Daten. Nenne und erläutere kurz 3 dieser Grundsätze.",
        musterloesung: "1. Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz (Erkennbarkeit für den Betroffenen).\n2. Zweckbindung (Daten dürfen nur für den bei der Erhebung festgelegten Zweck verarbeitet werden).\n3. Datenminimierung / Datensparsamkeit (Es dürfen nur so viele Daten erhoben werden, wie für den Zweck zwingend notwendig sind). Weitere: Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit.",
        explanation: "Die Grundsätze der DSGVO sind in Artikel 5 geregelt und bilden das Fundament des europäischen Datenschutzrechts bei der Verarbeitung von personenbezogenen Daten."
    },
    {
        id: 52,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Backup (LF 4): Erkläre das Großvater-Vater-Sohn-Prinzip (Generationen-Prinzip) bei der Datensicherung und nenne dessen Vorteil.",
        musterloesung: "Es handelt sich um ein rotierendes Backup-Schema auf drei Ebenen:\n- Sohn: Tägliche Sicherung (wird wöchentlich überschrieben).\n- Vater: Wöchentliche Sicherung (wird monatlich überschrieben).\n- Großvater: Monatliche Sicherung (wird jährlich überschrieben).\nVorteil: Ermöglicht die Wiederherstellung von Daten weit in die Vergangenheit, spart aber gleichzeitig Speichermedien durch geplante Rotation.",
        explanation: "Durch das Generationen-Prinzip wird verhindert, dass ein schleichender Datenverlust (z.B. durch unbemerkt korrupte Dateien) alle Backups gleichzeitig überschreibt."
    },
    {
        id: 53,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Backup (LF 4): Unterscheide das differenzielle Backup vom inkrementellen Backup bezüglich des täglichen Speicherbedarfs und des Aufwands bei einer Datenwiederherstellung (Restore).",
        musterloesung: "- Differenziell: Sichert täglich alle Änderungen seit dem letzten Vollbackup. Der tägliche Speicherbedarf steigt an. Für ein Restore benötigt man nur das Vollbackup und das letzte differenzielle Backup (schnelle Wiederherstellung).\n- Inkrementell: Sichert täglich nur die Änderungen seit dem jeweils letzten Backup. Der Speicherbedarf ist minimal. Für ein Restore benötigt man das Vollbackup und ALLE täglichen inkrementellen Backups in der richtigen Reihenfolge (zeitaufwendigere Wiederherstellung).",
        explanation: "Unternehmen müssen abwägen, ob ihnen ein minimaler Speicherbedarf (inkrementell) oder eine schnelle, sichere Wiederherstellung im Notfall (differenziell) wichtiger ist."
    },
    {
        id: 54,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Kryptografie (LF 4): Erläutere den Unterschied zwischen symmetrischer und asymmetrischer Verschlüsselung und nenne jeweils ein typisches Protokoll.",
        musterloesung: "- Symmetrisch: Sender und Empfänger nutzen denselben geheimen Schlüssel zum Ver- und Entschlüsseln. (Vorteil: Schnell. Nachteil: Sicherer Schlüsselaustausch nötig). Protokoll: AES, DES.\n- Asymmetrisch: Es gibt ein Schlüsselpaar. Der öffentliche Schlüssel (Public Key) verschlüsselt die Daten, der private Schlüssel (Private Key) entschlüsselt sie. (Vorteil: Kein geheimer Schlüsselaustausch nötig. Nachteil: Rechenintensiv). Protokoll: RSA, ECC.",
        explanation: "In der Praxis (z. B. bei HTTPS / TLS) werden beide Verfahren kombiniert: Asymmetrisch für den sicheren Austausch eines temporären Sitzungsschlüssels (Handshake), symmetrisch für die anschließende schnelle Datenübertragung."
    },
    {
        id: 55,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Vertragsrecht (LF 6): Nenne die Rügefristen für Mängel beim zweiseitigen Handelskauf (§ 377 HGB) für offene Mängel, verdeckte Mängel und arglistig verschwiegene Mängel.",
        musterloesung: "- Offener Mangel: Unverzüglich nach der Ablieferung (Untersuchungspflicht).\n- Verdeckter Mangel: Unverzüglich nach der Entdeckung des Mangels (spätestens vor Ablauf der Gewährleistung).\n- Arglistig verschwiegener Mangel: Keine Rügepflicht zur Fristwahrung; verjährt nach der regelmäßigen Verjährungsfrist von 3 Jahren.",
        explanation: "Die strengen Rügepflichten des HGB gelten nur im B2B-Bereich. Im Verbrauchsgüterkauf (B2C) gelten diese Fristen zum Schutz des Endverbrauchers nicht."
    },
    {
        id: 56,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Vertragsrecht (LF 6): Nenne jeweils die Hauptpflichten des Verkäufers und des Käufers bei einem rechtsgültigen Kaufvertrag nach § 433 BGB.",
        musterloesung: "- Verkäufer: Übergabe der Ware frei von Sach- und Rechtsmängeln und die Verschaffung des Eigentums an der Sache.\n- Käufer: Zahlung des vereinbarten Kaufpreises und die Abnahme der gekauften Sache.",
        explanation: "Der Kaufvertrag ist ein mehrseitig verpflichtendes Rechtsgeschäft. Die Hauptleistungspflichten stehen im Synallagma (Gegenseitigkeitsverhältnis)."
    },
    {
        id: 57,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe UML (LF 5): Erläutere den Hauptzweck eines UML-Anwendungsfalldiagramms (Use-Case-Diagramm) und nenne zwei seiner Hauptelemente.",
        musterloesung: "Hauptzweck: Beschreibung des erwarteten Verhaltens eines Systems aus Sicht der Akteure (Was kann das System tun, wer nutzt es?). Es dient der Anforderungsanalyse.\nHauptelemente:\n- Akteur (Actor): Person oder externes System, das mit dem System interagiert.\n- Anwendungsfall (Use Case): Eine Funktion oder ein Geschäftsprozess des Systems.\n- Systemgrenze (Subject): Der Rahmen, der das System von der Umwelt abgrenzt.",
        explanation: "Use Case Diagramme zeigen die funktionale Außensicht eines Systems. Sie zeigen keine zeitlichen oder logischen Abläufe (das machen Aktivitäts- oder Sequenzdiagramme)."
    },
    {
        id: 58,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Softwaretechnik (LF 10): Unterscheide den Unit-Test (Modultest) vom Integrationstest bezüglich des Testgegenstands.",
        musterloesung: "- Unit-Test (Modultest): Testet kleinste, isolierte Software-Einheiten (einzelne Klassen, Methoden oder Funktionen) unabhängig vom Rest des Systems auf korrekte Funktion.\n- Integrationstest: Testet das Zusammenspiel und die Schnittstellen mehrerer miteinander verbundener Module oder Subsysteme, um sicherzustellen, dass die Daten korrekt fließen.",
        explanation: "Unit-Tests werden meist vom Entwickler direkt geschrieben (z. B. mit JUnit). Integrationstests decken Fehler auf, die erst beim Zusammensetzen der Einzelteile entstehen."
    },
    {
        id: 59,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Was ist das Ziel einer Nutzwertanalyse (NWA) bei IT-Beschaffungen und wie läuft sie grob ab?",
        musterloesung: "Ziel: Systematischer Vergleich und Bewertung von komplexen Handlungsalternativen (z. B. Software A vs. B) anhand nicht-monetärer (qualitativer) Kriterien.\nAblauf:\n1. Festlegen der Bewertungskriterien.\n2. Gewichtung der Kriterien (Summe = 100%).\n3. Bewertung der Alternativen mit Punkten (z.B. 1-10).\n4. Multiplikation der Punkte mit der Gewichtung und Summenbildung. Die Alternative mit der höchsten Gesamtpunktzahl gewinnt.",
        explanation: "Die Nutzwertanalyse hilft, Entscheidungen objektiv und nachvollziehbar zu dokumentieren. Sie ergänzt rein finanzielle Vergleiche (wie den reinen Preisvergleich)."
    },
    {
        id: 60,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Erläutere kurz die Funktionsweise und das Ziel des Domain Name Systems (DNS) im Internet.",
        musterloesung: "Funktionsweise: DNS arbeitet als verteiltes Verzeichnis (wie ein Telefonbuch). Wenn ein Client eine Domain (z. B. google.com) aufruft, sendet er eine Anfrage an einen DNS-Nameserver. Dieser sucht den passenden Eintrag (A-Record) und liefert die dazugehörige IP-Adresse zurück.\nZiel: Übersetzung von menschenlesbaren Domainnamen in maschinenlesbare IP-Adressen (und umgekehrt via Reverse DNS).",
        explanation: "Ohne DNS müssten sich Internetnutzer die numerischen IP-Adressen aller Server merken. Es arbeitet standardmäßig auf Port 53 über UDP (und TCP für Zonentransfers)."
    },
    {
        id: 61,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Hardware (LF 2): Erkläre den Unterschied zwischen einem Typ-1-Hypervisor (Bare-Metal) und einem Typ-2-Hypervisor (Hosted) bei der Virtualisierung.",
        musterloesung: "- Typ-1-Hypervisor (Bare-Metal): Setzt direkt auf der physischen Hardware des Servers auf. Es wird kein separates Betriebssystem darunter benötigt. (Vorteil: Extrem performant, geringer Overhead). Beispiele: VMware ESXi, Microsoft Hyper-V Server.\n- Typ-2-Hypervisor (Hosted): Läuft als normale Anwendungssoftware auf einem bereits installierten Betriebssystem (Host-OS). (Vorteil: Einfache Installation, gut für Entwicklungsrechner). Beispiele: VirtualBox, VMware Workstation.",
        explanation: "In professionellen Rechenzentren werden fast ausschließlich Typ-1-Hypervisoren verwendet, um eine maximale Ressourceneffizienz und Stabilität zu garantieren."
    },
    {
        id: 62,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Hardware (LF 2): Unterscheide die USV-Klassen (Offline-USV, Line-Interactive-USV und Online-USV) bezüglich ihrer Schutzwirkung.",
        musterloesung: "- Offline-USV (Standby): Schützt nur vor Netzausfall und extremen Spannungsspitzen. Die Umschaltung erfolgt mit einer kurzen Verzögerung von einigen Millisekunden.\n- Line-Interactive-USV: Reguliert zusätzlich kleinere Spannungsschwankungen über einen Transformator ohne Batteriebetrieb. Kurze Umschaltzeit bei Stromausfall.\n- Online-USV (Double-Conversion): Wandelt den Netzstrom kontinuierlich in Gleichstrom und wieder in Wechselstrom um. Bietet lückenlosen Schutz vor allen Störungen (Spannung, Frequenz, Netzausfall) ohne jegliche Umschaltzeit.",
        explanation: "Für sensible Server in Rechenzentren wird immer eine Online-USV (Klasse VFI) verwendet, da sie eine perfekte Sinuswelle liefert und keine Schaltverzögerung hat."
    },
    {
        id: 63,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe UML (LF 5): Erkläre im Kontext von UML-Klassendiagrammen den Unterschied zwischen Aggregation und Komposition.",
        musterloesung: "- Aggregation (leere Raute): Beschreibt eine 'Teil-Ganzes'-Beziehung, bei der die Teile unabhängig vom Ganzen existieren können (Existenzunabhängigkeit). Beispiel: Bibliothek und Buch (wird die Bibliothek gelöscht, existiert das Buch weiter).\n- Komposition (gefüllte Raute): Beschreibt eine starke Existenzabhängigkeit. Die Teile können ohne das Ganze nicht existieren. Wird das Ganze gelöscht, werden die Teile automatisch mitgelöscht. Beispiel: Gebäude und Raum (wird das Gebäude abgerissen, hören die Räume auf zu existieren).",
        explanation: "Sowohl Aggregation als auch Komposition sind Spezialisierungen der allgemeinen Assoziation im UML-Klassendiagramm."
    },
    {
        id: 64,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Erläutere das Prinzip des 'Magischen Dreiecks des Projektmanagements' und nenne seine drei Eckpunkte.",
        musterloesung: "Prinzip: Die drei Eckpunkte stehen in Wechselwirkung zueinander. Wird ein Punkt verändert, hat dies direkte Auswirkungen auf die beiden anderen Punkte (Zielkonflikt). Beispiel: Höhere Qualität benötigt meist mehr Zeit und Budget.\nEckpunkte:\n1. Zeit (Termine, Projektdauer).\n2. Kosten (Budget, Ressourcen).\n3. Inhalt / Qualität (Leistungsumfang, Projektergebnis).",
        explanation: "Das magische Dreieck dient Projektleitern zur Visualisierung von Zielkonflikten und zur Steuerung von Kundenerwartungen."
    },
    {
        id: 65,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Softwarequalität (LF 10): Unterscheide den Black-Box-Test vom White-Box-Test.",
        musterloesung: "- Black-Box-Test: Der Tester kennt den internen Programmcode nicht. Getestet wird das System ausschließlich über seine äußeren Schnittstellen anhand von Eingaben und den erwarteten Ausgaben (Soll-Ist-Vergleich).\n- White-Box-Test: Der Tester hat vollen Zugriff auf den Quellcode. Getestet wird die innere Struktur, Kontrollflüsse, Zweige und Bedingungen des Programmcodes auf logische Korrektheit.",
        explanation: "Black-Box-Tests eignen sich für Akzeptanztests durch Anwender. White-Box-Tests werden meist von Entwicklern zur Code-Abdeckung (Coverage) durchgeführt."
    },
    {
        id: 66,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Datenbanken (LF 18): Beschreibe die Bedingungen, die erfüllt sein müssen, damit sich eine Datenbanktabelle in der 1. und in der 2. Normalform befindet.",
        musterloesung: "- 1. Normalform (1. NF): Alle Attribute müssen atomar sein (keine zusammengesetzten oder mehrwertigen Werte pro Zelle) und die Tabelle muss frei von sich wiederholenden Gruppen sein.\n- 2. Normalform (2. NF): Die Tabelle muss sich in der 1. NF befinden und jedes Nicht-Schlüssel-Attribut muss vollfunktionell vom gesamten Primärschlüssel abhängen (wichtig bei zusammengesetzten Primärschlüsseln; keine Abhängigkeiten von Teilen des Schlüssels).",
        explanation: "Die Normalisierung dient der Vermeidung von Redundanzen und Anomalien (Einfüge-, Änderungs-, Lösch-Anomalien) in relationalen Datenbanken."
    },
    {
        id: 67,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Rechnungswesen (LF 6): Erkläre den Begriff 'Deckungsbeitrag' und nenne die Formel zu dessen Berechnung.",
        musterloesung: "Erklärung: Der Deckungsbeitrag ist der Betrag, der einem Unternehmen nach Abzug der variablen Kosten vom Umsatz übrigbleibt, um die Fixkosten zu decken. Ist er positiv, trägt er zum Betriebsgewinn bei.\nFormel (Stück-Deckungsbeitrag): db = Verkaufspreis (netto) - variable Stückkosten\nFormel (Gesamt-Deckungsbeitrag): DB = Gesamtumsatz - variable Gesamtkosten",
        explanation: "Liegt der Deckungsbeitrag über den Fixkosten, erwirtschaftet das Unternehmen einen Gewinn. Liegt er darunter, entsteht ein Verlust."
    },
    {
        id: 68,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Nenne 3 wesentliche Vorteile von IPv6 gegenüber dem älteren IPv4-Protokoll.",
        musterloesung: "1. Riesiger Adressraum (128 Bit statt 32 Bit, dadurch keine IP-Adressknappheit mehr).\n2. Automatische Adresskonfiguration (SLAAC ermöglicht Clients, sich ohne DHCP-Server selbstständig eine IP-Konfiguration zu erstellen).\n3. Bessere Effizienz durch vereinfachten Header-Aufbau (Router müssen den Header weniger intensiv verarbeiten) und native Unterstützung von IPSec zur Verschlüsselung.",
        explanation: "IPv6 löst das Problem des erschöpften IPv4-Adressraums und macht NAT (Network Address Translation) im LAN überflüssig."
    },
    {
        id: 69,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Welche Aufgabe hat das Standard-Gateway (Default Gateway) in der IP-Konfiguration eines Endgeräts?",
        musterloesung: "Aufgabe: Das Standard-Gateway leitet Datenpakete an ein anderes, externes Netzwerk weiter, wenn die Ziel-IP-Adresse nicht im eigenen lokalen Subnetz liegt. In der Praxis ist das Standard-Gateway die lokale IP-Adresse des Routers.",
        explanation: "Befindet sich das Ziel im selben Subnetz (z.B. durch Vergleich der Subnetzmaske ermittelt), sendet der Host das Paket direkt per ARP an das lokale Zielgerät. Andernfalls geht es an das Standard-Gateway."
    },
    {
        id: 70,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Datenschutz (LF 4): Nenne 4 Rechte, die betroffenen Personen laut DSGVO bezüglich ihrer personenbezogenen Daten zustehen.",
        musterloesung: "1. Recht auf Auskunft (Artikel 15 DSGVO - Welche Daten sind gespeichert?).\n2. Recht auf Berichtigung (Artikel 16 DSGVO - Korrektur falscher Daten).\n3. Recht auf Löschung / 'Recht auf Vergessenwerden' (Artikel 17 DSGVO).\n4. Recht auf Datenübertragbarkeit (Artikel 20 DSGVO - Erhalt der Daten in maschinenlesbarem Format). Weitere: Recht auf Einschränkung der Verarbeitung, Widerspruchsrecht.",
        explanation: "Diese Rechte stärken die informationelle Selbstbestimmung der Bürger gegenüber Unternehmen und Behörden."
    },
    {
        id: 71,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Softwarearchitektur (LF 5): Erkläre die Funktionsweise des Model-View-Controller (MVC) Architekturmusters und nenne die Aufgaben der 3 Komponenten.",
        musterloesung: "- Model (Datenmodell): Enthält die Anwendungslogik, Geschäftsregeln und die eigentlichen Daten. Es ist unabhängig von der Benutzeroberfläche.\n- View (Präsentation/Ansicht): Ist für die Darstellung der Daten auf dem Bildschirm verantwortlich und nimmt Benutzereingaben entgegen.\n- Controller (Steuerung): Verarbeitet die Benutzereingaben von der View, manipuliert das Model entsprechend und aktualisiert anschließend die View.",
        explanation: "Das MVC-Muster trennt Präsentation und Programmlogik sauber voneinander, was die Wartbarkeit und Testbarkeit von Software drastisch erhöht."
    },
    {
        id: 72,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Unterscheide im agilen Scrum-Framework die Aufgaben des Product Owners von denen des Scrum Masters.",
        musterloesung: "- Product Owner: Ist für den wirtschaftlichen Erfolg des Produkts verantwortlich. Er definiert die Produktanforderungen, pflegt und priorisiert das Product Backlog und vertritt die Interessen der Kunden.\n- Scrum Master: Ist für den Scrum-Prozess verantwortlich. Er fungiert als Coach für das Team, beseitigt Hindernisse (Impediments) und schützt das Team vor Störungen von außen, besitzt aber keine disziplinarische Weisungsbefugnis.",
        explanation: "Der Product Owner bestimmt das 'Was' (Produktvision), der Scrum Master sorgt für das 'Wie' (Prozessoptimierung und Arbeitsumfeld)."
    },
    {
        id: 73,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Hardware (LF 2): Nenne jeweils 2 technische Vor- und Nachteile einer Solid-State-Drive (SSD) im Vergleich zu einer klassischen Festplatte (HDD).",
        musterloesung: "Vorteile:\n1. Extrem hohe Schreib- und Lesegeschwindigkeiten (keine mechanischen Verzögerungen).\n2. Unempfindlich gegenüber Erschütterungen und lautlos (keine beweglichen Teile).\nNachteile:\n1. Höherer Preis pro Gigabyte Speicherkapazität.\n2. Begrenzte Lebensdauer durch Abnutzung der Flash-Zellen bei Schreibzyklen (TBW).",
        explanation: "HDDs werden heutzutage primär als kostengünstiger Langzeitspeicher für große Datenmengen (Archivierung/NAS) genutzt, während SSDs als Systemlaufwerke Standard sind."
    },
    {
        id: 74,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Sicherheit (LF 4): Erläutere den Unterschied zwischen einem Paketfilter und einer Stateful Inspection Firewall.",
        musterloesung: "- Paketfilter: Analysiert jedes Datenpaket isoliert für sich auf Layer 3 und 4 (Quell-/Ziel-IP, Port, Protokoll) anhand starrer Regeln. Er weiß nicht, ob ein Paket zu einer bestehenden Verbindung gehört.\n- Stateful Inspection (Zustandsgesteuerte Filterung): Überwacht den Verbindungszustand aktiver Sitzungen in einer Statustabelle. Sie lässt Antwortpakete von außen nur dann passieren, wenn sie zu einer intern initiierten, aktiven Verbindung gehören (deutlich sicherer).",
        explanation: "Moderne Next-Generation-Firewalls (NGFW) gehen noch weiter und analysieren zusätzlich die tatsächlichen Anwendungsdaten auf Layer 7 (Deep Packet Inspection)."
    },
    {
        id: 75,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Gewährleistung (LF 6): Unterscheide die gesetzliche Gewährleistung (Mängelhaftung) von einer Herstellergarantie.",
        musterloesung: "- Gesetzliche Gewährleistung (Mängelhaftung): Gesetzlich vorgeschrieben (BGB). Richtet sich gegen den VERKÄUFER. Gilt für 24 Monate ab Kauf. Haftet nur für Mängel, die bereits zum Zeitpunkt des Gefahrenübergangs (Übergabe) vorlagen.\n- Garantie: Freiwillige Zusage des HERSTELLERS (oder Händlers). Bedingungen und Dauer (z.B. 5 Jahre) sind frei gestaltbar. Haftet meist auch für Defekte, die erst während der Laufzeit durch normalen Gebrauch entstehen.",
        explanation: "Bei der Gewährleistung gilt in den ersten 12 Monaten (B2C) die Beweislastumkehr: Es wird vermutet, dass der Mangel von Anfang an da war. Danach muss der Käufer dies beweisen."
    },
    {
        id: 76,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Kaufrecht (LF 6): Nenne die rechtlichen Voraussetzungen, damit ein Käufer bei einer mangelhaften Lieferung das Recht auf Minderung des Kaufpreises oder Rücktritt vom Vertrag geltend machen kann.",
        musterloesung: "Voraussetzungen:\n1. Es muss ein Sach- oder Rechtsmangel bei Gefahrenübergang vorliegen.\n2. Der Käufer muss dem Verkäufer eine angemessene Frist zur Nacherfüllung (Reparatur oder Neulieferung) gesetzt haben.\n3. Die Frist zur Nacherfüllung muss erfolglos abgelaufen sein, oder die Nacherfüllung wurde vom Verkäufer verweigert bzw. ist zweimal fehlgeschlagen.",
        explanation: "Der Gesetzgeber räumt dem Verkäufer das 'Recht zur zweiten Andienung' (Nacherfüllung) ein, bevor der Käufer vom Vertrag zurücktreten oder den Preis mindern darf."
    },
    {
        id: 77,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Kaufrecht (LF 6): Ab wann gerät ein Käufer bei einer Rechnung ohne vereinbartes Zahlungsziel automatisch in Zahlungsverzug und wie hoch ist der gesetzliche Verzugszinssatz im B2C- und B2B-Bereich?",
        musterloesung: "- Verzugseintritt: Spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung (§ 286 Abs. 3 BGB). Bei Verbrauchern (B2C) muss auf diese Folge in der Rechnung ausdrücklich hingewiesen worden sein.\n- Verzugszins B2C (Verbraucher): 5 Prozentpunkte über dem Basiszinssatz.\n- Verzugszins B2B (Unternehmen): 9 Prozentpunkte über dem Basiszinssatz (plus 40 EUR Verzugspauschale).",
        explanation: "Der Basiszinssatz wird halbjährlich von der Deutschen Bundesbank angepasst und dient als Referenzwert für die Berechnung von Verzugszinsen."
    },
    {
        id: 78,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Erläutere den Sinn und Zweck von Virtual Local Area Networks (VLANs) in einem Firmennetzwerk.",
        musterloesung: "Sinn und Zweck: Aufteilung eines physischen lokalen Netzwerks (LAN) in mehrere logische, voneinander getrennte Broadcast-Domänen auf Layer 2. \nZiele:\n1. Erhöhung der Sicherheit (z. B. Trennung von Buchhaltung und Gäste-WLAN).\n2. Reduzierung des Broadcast-Verkehrs im Netz.\n3. Flexibilität bei der Netzwerkgestaltung ohne neue Hardware.",
        explanation: "Die Trennung erfolgt auf Switch-Ebene (z.B. nach IEEE 802.1Q per VLAN-Tagging). Um Daten zwischen verschiedenen VLANs auszutauschen, wird ein Router oder Layer-3-Switch benötigt."
    },
    {
        id: 79,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Erkläre im Kontext eines Netzplans den Begriff 'Kritischer Pfad' und dessen Bedeutung für die Projektdauer.",
        musterloesung: "Erklärung: Der kritische Pfad ist die Kette von Vorgängen in einem Netzplan, bei denen der Gesamtpuffer gleich null ist (GP = 0). Er stellt den längsten zeitlichen Weg durch das Projekt dar.\nBedeutung: Vorgänge auf dem kritischen Pfad bestimmen die Mindestprojektdauer. Verzögert sich ein einziger Vorgang auf diesem Pfad, verschiebt sich sofort der gesamte Fertigstellungstermin des Projekts.",
        explanation: "Projektleiter müssen Vorgänge auf dem kritischen Pfad besonders intensiv überwachen (Critical Path Method, CPM)."
    },
    {
        id: 80,
        theme: "lf1",
        type: "open-text",
        question: "Prüfungsaufgabe Ausbildung (LF 1): Nenne 4 gesetzliche Pflichten eines Auszubildenden nach dem Berufsbildungsgesetz (BBiG).",
        musterloesung: "1. Lernpflicht / Bemühungspflicht (Auszubildender muss sich bemühen, die Fertigkeiten zu erwerben).\n2. Sorgfaltspflicht (sorgfältige Behandlung von Werkzeugen, Maschinen und Materialien).\n3. Gehorsamspflicht (Folgeleistung von Weisungen der Ausbilder).\n4. Berufsschulpflicht (Teilnahme am Berufsschulunterricht).\nWeitere Pflichten: Führen des Berichtshefts (Ausbildungsnachweis), Schweigepflicht (Betriebsgeheimnisse wahren), Krankmeldungspflicht.",
        explanation: "Hintergrundwissen & Details zu den Azubi-Pflichten (§ 13 BBiG):\n" +
            "- Lernpflicht: Der Azubi schuldet keinen Arbeitserfolg (wie ein normaler Angestellter), sondern die ernsthafte Bemühung, den Beruf zu erlernen.\n" +
            "- Berichtspflicht: Das Berichtsheft (Ausbildungsnachweis) ist Zulassungsvoraussetzung zur Abschlussprüfung. Das Führen muss während der Arbeitszeit ermöglicht werden.\n" +
            "- Schweigepflicht: Gilt auch nach Beendigung der Ausbildung bezüglich Geschäfts- und Betriebsgeheimnissen.\n" +
            "- Pflegliche Behandlung: Werkzeuge und Maschinen müssen ordnungsgemäß benutzt und vor Schaden bewahrt werden (Verstoß kann zur Abmahnung führen)."
    },
    {
        id: 81,
        theme: "lf1",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Ausbildung (LF 1): Welches Gesetz regelt primär die gesetzlichen Mindeststandards und Rahmenbedingungen für die Berufsausbildung in Deutschland?",
        options: [
            "Berufsbildungsgesetz (BBiG)",
            "Betriebsverfassungsgesetz (BetrVG)",
            "Jugendarbeitsschutzgesetz (JArbSchG)",
            "Arbeitszeitgesetz (ArbZG)"
        ],
        correctAnswer: 0,
        explanation: "Lern-Zusammenfassung zum Berufsbildungsgesetz (BBiG):\n" +
            "- Geltungsbereich: Regelt bundesweit die betriebliche Berufsausbildung, Fortbildung und Umschulung.\n" +
            "- Wichtige Inhalte: Mindestvergütung für Auszubildende, Regelungen zum Ausbildungsvertrag (Rechte/Pflichten, Kündigung, Probezeit von 1-4 Monaten), Ausbilder-Eignung (AEVO), sowie die Organisation und Zulassung zu Prüfungen.\n" +
            "- Abgrenzung: Das BetrVG regelt die Mitbestimmung der Arbeitnehmer, das JArbSchG schützt Jugendliche unter 18 Jahren bei der Arbeit, und das ArbZG regelt Arbeitszeitgrenzen (z. B. max. 8-10 Stunden pro Tag)."
    },
    {
        id: 82,
        theme: "lf1",
        type: "open-text",
        question: "Prüfungsaufgabe Mitbestimmung (LF 1): Unter welchen Voraussetzungen kann in einem Betrieb eine Jugend- und Auszubildendenvertretung (JAV) gewählt werden?",
        musterloesung: "Voraussetzungen:\n1. Es müssen im Betrieb mindestens 5 Arbeitnehmer unter 18 Jahren oder Auszubildende (in der Berufsausbildung) unter 25 Jahren beschäftigt sein.\n2. Es muss im Betrieb bereits ein Betriebsrat existieren.",
        explanation: "Lernkarte JAV & Mitbestimmung:\n" +
            "- Zweck: Die JAV vertritt die speziellen Interessen von Jugendlichen und Auszubildenden gegenüber dem Betriebsrat (z. B. Übernahme nach der Ausbildung, Qualität der Ausbildung).\n" +
            "- Besonderheit: Die JAV hat kein direktes Mitbestimmungsrecht gegenüber dem Arbeitgeber. Sie muss Anträge und Anliegen über den Betriebsrat einreichen.\n" +
            "- Wahlberechtigung (Aktives Wahlrecht): Alle Azubis unter 25 Jahren und alle Jugendlichen unter 18 Jahren.\n" +
            "- Wählbarkeit (Passives Wahlrecht): Alle Arbeitnehmer/Azubis des Betriebs unter 25 Jahren (ausgenommen Betriebsratsmitglieder)."
    },
    {
        id: 83,
        theme: "lf1",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Mitbestimmung (LF 1): Wer besitzt das aktive Wahlrecht bei Betriebsratswahlen nach dem Betriebsverfassungsgesetz (BetrVG)?",
        options: [
            "Alle Arbeitnehmer des Betriebs, die das 18. Lebensjahr vollendet haben (volljährige Arbeitnehmer).",
            "Nur Arbeitnehmer, die mindestens 5 Jahre durchgehend im Betrieb beschäftigt sind.",
            "Nur leitende Angestellte und Abteilungsleiter.",
            "Alle Arbeitnehmer, unabhängig von Alter und Dauer der Betriebszugehörigkeit."
        ],
        correctAnswer: 0,
        explanation: "Betriebsratswahl-Regeln (BetrVG):\n" +
            "- Aktives Wahlrecht (Wer darf wählen?): Alle Arbeitnehmer des Betriebs ab vollendetem 18. Lebensjahr. Leiharbeitnehmer dürfen wählen, wenn sie länger als 3 Monate im Betrieb arbeiten.\n" +
            "- Passives Wahlrecht (Wer darf gewählt werden?): Alle wahlberechtigten Arbeitnehmer, die seit mindestens 6 Monaten dem Betrieb angehören (§ 8 BetrVG).\n" +
            "- Ausnahmen: Leitende Angestellte (z. B. Prokuristen, Geschäftsführer) sind weder aktiv wahlberechtigt noch passiv wählbar, da sie Arbeitgeberfunktionen ausüben."
    },
    {
        id: 84,
        theme: "lf1",
        type: "open-text",
        question: "Prüfungsaufgabe Tarifrecht (LF 1): Erläutere den Unterschied zwischen einem Manteltarifvertrag und einem Entgelttarifvertrag bezüglich ihrer typischen Inhalte und Laufzeiten.",
        musterloesung: "- Manteltarifvertrag (Rahmentarifvertrag): Regelt allgemeine Arbeitsbedingungen wie Arbeitszeiten, Urlaubsanspruch, Kündigungsfristen oder Arbeitsbedingungen. Er hat meist eine lange Laufzeit (mehrere Jahre).\n- Entgelttarifvertrag (Lohntarifvertrag): Regelt die konkrete Höhe der Löhne, Gehälter und Ausbildungsvergütungen. Er hat eine kurze Laufzeit (meist 1 bis 2 Jahre) und wird regelmäßig neu verhandelt.",
        explanation: "Lern-Details zum Tarifrecht:\n" +
            "- Tarifautonomie: Der Staat hält sich aus den Verhandlungen heraus. Die Tarifpartner (Gewerkschaften für die Arbeitnehmer und Arbeitgeberverbände für die Arbeitgeber) verhandeln die Verträge eigenständig.\n" +
            "- Friedenspflicht: Während der Laufzeit eines Tarifvertrags darf bezüglich der geregelten Inhalte nicht gestreikt werden. Erst nach Ablauf (und Scheitern neuer Verhandlungen) sind Streiks zulässig.\n" +
            "- Günstigkeitsprinzip: Abweichungen vom Tarifvertrag im Einzelarbeitsvertrag sind nur zulässig, wenn sie für den Arbeitnehmer günstiger sind (z. B. mehr Urlaub oder höheres Gehalt)."
    },
    {
        id: 85,
        theme: "lf1",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Jugendschutz (LF 1): Wer gilt laut Jugendarbeitsschutzgesetz (JArbSchG) als 'Jugendlicher' und darf nur unter Einhaltung strenger Schutzvorschriften beschäftigt werden?",
        options: [
            "Personen, die 15, aber noch nicht 18 Jahre alt sind.",
            "Personen, die noch nicht 14 Jahre alt sind.",
            "Personen, die 14, aber noch nicht 16 Jahre alt sind.",
            "Alle Personen, die sich in einer Erstausbildung befinden."
        ],
        correctAnswer: 0,
        explanation: "Altersgrenzen & Regeln nach dem JArbSchG:\n" +
            "- Kind: Wer noch nicht 15 Jahre alt ist (Beschäftigungsverbot, Ausnahmen nur für leichte Tätigkeiten wie Zeitungen austragen ab 13 Jahren für max. 2 Stunden).\n" +
            "- Jugendlicher: Wer 15, aber noch nicht 18 Jahre alt ist. Hier greifen Schutzvorschriften:\n" +
            "  * Arbeitszeit: Max. 8 Stunden täglich, max. 40 Stunden wöchentlich, nur an 5 Tagen in der Woche.\n" +
            "  * Freizeit: Samstags- und Sonntagsarbeit ist grundsätzlich verboten (Ausnahmen für Gastronomie/Krankenhäuser mit Freizeitausgleich).\n" +
            "  * Nachtruhe: Beschäftigung nur zwischen 6:00 und 20:00 Uhr (Ausnahmen für Schichtbetriebe ab 16 Jahren)."
    },
    {
        id: 86,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Erkläre den Unterschied zwischen einem Lastenheft und einem Pflichtenheft bezüglich des Urhebers und des Inhalts.",
        musterloesung: "- Lastenheft: Wird vom AUFTRAGGEBER (Kunden) erstellt. Es beschreibt die Gesamtheit der Anforderungen ('Was' soll getan werden und 'Wofür').\n- Pflichtenheft: Wird vom AUFTRAGNEHMER (Dienstleister) erstellt. Es beschreibt das konkrete Realisierungskonzept ('Wie' und 'Womit' werden die Anforderungen umgesetzt).",
        explanation: "Lern-Vergleich (Lastenheft vs. Pflichtenheft):\n" +
            "- Lastenheft (Requirements Specification):\n" +
            "  * Beschreibt den SOLL-Zustand aus Nutzersicht.\n" +
            "  * Dient als Ausschreibungsgrundlage für Angebote.\n" +
            "  * Beantwortet: 'Was wird benötigt?'\n" +
            "- Pflichtenheft (System Specification / Functional Specification):\n" +
            "  * Beschreibt die konkrete technische Umsetzung.\n" +
            "  * Ist Teil des Vertrags und rechtlich bindend.\n" +
            "  * Beantwortet: 'Wie lösen wir die Anforderungen technisch?'"
    },
    {
        id: 87,
        theme: "lf6",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Welcher Pufferwert in einem Netzplan gibt an, um wie viel sich ein Vorgang verschieben lässt, ohne den frühesten Anfang des direkten Nachfolgers zu beeinflussen?",
        options: [
            "Freier Puffer (FP)",
            "Gesamtpuffer (GP)",
            "Kritischer Puffer (KP)",
            "Vorgangspuffer (VP)"
        ],
        correctAnswer: 0,
        explanation: "Pufferzeiten-Erklärung (Netzplantechnik):\n" +
            "- Gesamtpuffer (GP): Der Zeitraum, um den ein Vorgang verschoben werden kann, ohne das Projektende zu gefährden. Formel: GP = SAZ - FAZ (oder SEZ - FEZ). Wenn GP = 0, liegt der Vorgang auf dem Kritischen Pfad.\n" +
            "- Freier Puffer (FP): Der Zeitraum, um den ein Vorgang verschoben werden kann, ohne den frühesten Start (FAZ) des direkten Nachfolgers zu beeinflussen. Formel: FP = FAZ(Nachfolger) - FEZ(aktuell).\n" +
            "- Wichtig: Der freie Puffer kann nie größer als der Gesamtpuffer sein (FP <= GP)."
    },
    {
        id: 88,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Nenne die 4 klassischen Phasen eines Projektlebenszyklus in der richtigen chronologischen Reihenfolge.",
        musterloesung: "1. Definitionsphase (Initiierung, Zieldefinition)\n2. Planungsphase (Ressourcen-, Ablauf- und Terminplanung)\n3. Realisierungsphase / Durchführungsphase (Entwicklung, Umsetzung)\n4. Abschlussphase (Abnahme, Einführung, Evaluierung)",
        explanation: "Lernübersicht Projektphasen:\n" +
            "- 1. Definitionsphase: Projektauftrag wird erstellt, Projektziele festgelegt (SMART-Formel), Stakeholder analysiert und die Machbarkeit geprüft.\n" +
            "- 2. Planungsphase: Strukturplan (WBS) wird erstellt, Netzplan berechnet, Ressourcen zugeteilt und das Budget kalkuliert.\n" +
            "- 3. Realisierungsphase: Das eigentliche Produkt wird entwickelt. Projektleiter führt Projektcontrolling durch (Soll-Ist-Vergleiche, Meilensteintrendanalyse).\n" +
            "- 4. Abschlussphase: Abnahme durch den Kunden, Erstellung des Projektabschlussberichts, Auflösung des Projektteams und 'Lessons Learned'-Sitzung."
    },
    {
        id: 89,
        theme: "lf6",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Welche Eigenschaft kennzeichnet einen Meilenstein in einem Projektablaufplan bezüglich seiner Dauer?",
        options: [
            "Ein Meilenstein hat immer eine Dauer von genau 0 Zeiteinheiten.",
            "Ein Meilenstein dauert so lange wie der kritische Pfad.",
            "Ein Meilenstein hat eine variable Dauer von 1-5 Tagen.",
            "Ein Meilenstein hat keine Dauer, da er nicht geplant werden kann."
        ],
        correctAnswer: 0,
        explanation: "Lernkarte Meilensteine:\n" +
            "- Definition: Ein Meilenstein ist ein Kontrollpunkt oder ein Ereignis von besonderer Bedeutung im Projektverlauf (z.B. Fertigstellung des Prototyps, Freigabe des Budgets).\n" +
            "- Dauer: Er hat keine eigene Dauer (Dauer = 0) und verbraucht keine Ressourcen. Er beschreibt einen Zeitpunkt, keinen Zeitraum.\n" +
            "- Nutzen: Er dient der Strukturierung des Projekts und der Überprüfung des Projektfortschritts (Meilensteintrendanalyse - MTA)."
    },
    {
        id: 90,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Projektorganisation (LF 6): Erläutere das Prinzip der Matrix-Projektorganisation und nenne das wesentliche Merkmal bezüglich der Weisungsbefugnis.",
        musterloesung: "Prinzip: Die Mitarbeiter verbleiben in ihren Fachabteilungen (Linie) und arbeiten nur zeitweise für das Projekt.\nWesentliches Merkmal: Der Mitarbeiter hat zwei Vorgesetzte. Der Linien-Vorgesetzte (Fachabteilungsleiter) behält die disziplinarische Weisungsbefugnis (z.B. Urlaub), während der Projektleiter die fachliche Weisungsbefugnis für die Projektaufgaben erhält. Dies führt häufig zu Konflikten.",
        explanation: "Vergleich der Projektorganisationsformen:\n" +
            "- Stabs-Projektorganisation (Einflussorganisation): Projektleiter hat keine Weisungsbefugnis, berät nur. Mitarbeiter bleibt zu 100% in der Linie. (Vorteil: Keine Umorganisation. Nachteil: Projektleiter hat kaum Durchsetzungskraft).\n" +
            "- Matrix-Projektorganisation: Geteilte Weisungsbefugnis (Linienleiter disziplinarisch, Projektleiter fachlich). (Vorteil: Flexibel, Wissenstransfer. Nachteil: Konflikte bei Ressourcenpriorisierung, Überlastung der Mitarbeiter).\n" +
            "- Reine (autonome) Projektorganisation: Mitarbeiter wird voll aus der Linie herausgelöst und untersteht allein dem Projektleiter. (Vorteil: Schnelle Entscheidungen, hohe Identifikation. Nachteil: Wiedereingliederung nach Projektende schwierig)."
    },
    {
        id: 91,
        theme: "lf6",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Wie lautet die mathematische Formel zur Berechnung des Gesamtpuffers (GP) eines Vorgangs im Netzplan?",
        options: [
            "GP = SAZ - FAZ (oder GP = SEZ - FEZ)",
            "GP = FAZ - SAZ",
            "GP = SEZ - FAZ",
            "GP = FEZ - SAZ"
        ],
        correctAnswer: 0,
        explanation: "Formeln und Logik im Netzplan:\n" +
            "- Abkürzungen:\n" +
            "  * FAZ = Frühester Anfangszeitpunkt | FEZ = Frühester Endzeitpunkt\n" +
            "  * SAZ = Spätester Anfangszeitpunkt | SEZ = Spätester Endzeitpunkt\n" +
            "- Vorwärtsrechnung (ermittelt FAZ und FEZ):\n" +
            "  * FEZ = FAZ + Dauer\n" +
            "  * FAZ(Nachfolger) = Maximum aller FEZ der Vorgänger\n" +
            "- Rückwärtsrechnung (ermittelt SEZ und SAZ):\n" +
            "  * SAZ = SEZ - Dauer\n" +
            "  * SEZ(Vorgänger) = Minimum aller SAZ der Nachfolger\n" +
            "- Pufferberechnung:\n" +
            "  * Gesamtpuffer: GP = SAZ - FAZ  oder  GP = SEZ - FEZ"
    },
    {
        id: 92,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Erkläre die genaue Funktion und die beteiligten OSI-Schichten des Protokolls ARP (Address Resolution Protocol) laut deinen Unterlagen.",
        musterloesung: "Funktion: ARP löst IP-Adressen (logische Adressen) in MAC-Adressen (physische Adressen) auf.\nBeteiligte Schichten: Layer 2 (Sicherungsschicht) und Layer 3 (Vermittlungsschicht).",
        explanation: "Lernkarte ARP (Address Resolution Protocol):\n" +
            "- Warum benötigt man ARP? Router und Switche im lokalen Netzwerk senden Datenrahmen (Frames) auf Layer 2 an physikalische MAC-Adressen. Die Software (z.B. Browser) kennt aber meist nur die IP-Adresse (Layer 3). ARP schließt diese Lücke.\n" +
            "- Ablauf (ARP Request/Reply):\n" +
            "  1. Sender schickt einen 'ARP Request' als Broadcast (an alle) ins Netz: 'Wer hat die IP-Adresse 10.4.1.57? Bitte sag mir deine MAC-Adresse!'\n" +
            "  2. Das Zielgerät antwortet mit einem 'ARP Reply' direkt an den Sender (Unicast): 'Ich habe diese IP-Adresse, meine MAC lautet f8:e0:79:af:57:eb!'\n" +
            "  3. Der Sender speichert diese Zuordnung im lokalen ARP-Cache, um zukünftige Anfragen zu vermeiden."
    },
    {
        id: 93,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Erkläre die genaue Funktion und die beteiligten OSI-Schichten des Protokolls DNS (Domain Name System) laut deinen Unterlagen.",
        musterloesung: "Funktion: DNS löst Domänennamen (menschenlesbare Namen wie google.com) in IP-Adressen (maschinenlesbare Adressen) auf.\nBeteiligte Schichten: Layer 3 (Vermittlungsschicht) und Layer 7 (Anwendungsschicht).",
        explanation: "Lernkarte DNS (Domain Name System):\n" +
            "- Funktion: DNS übersetzt für Menschen lesbare Domains (z. B. www.gfn.de) in IP-Adressen (z. B. 193.18.23.4), die von Routern auf Layer 3 verarbeitet werden können.\n" +
            "- Aufbau: DNS ist eine weltweit hierarchisch und dezentral verteilte Datenbank. Die Auflösung erfolgt über:\n" +
            "  * Root-Nameserver (Wurzelserver)\n" +
            "  * TLD-Nameserver (Top-Level-Domain, z. B. für .de, .com)\n" +
            "  * Autoritative Nameserver (für die spezifische Domain)\n" +
            "- Details: DNS verwendet standardmäßig Port 53 über das verbindunglose UDP-Protokoll (schneller). Bei großen Datenmengen (z. B. Zonentransfers) wird TCP genutzt."
    },
    {
        id: 94,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Erkläre die genaue Funktion und die beteiligten OSI-Schichten des Protokolls DHCP (Dynamic Host Configuration Protocol) laut deinen Unterlagen.",
        musterloesung: "Funktion: DHCP verteilt automatisch verschiedene Konfigurationen (wie IP-Adresse, Subnetzmaske, Standard-Gateway und DNS-Server) an die Netzwerkteilnehmer.\nBeteiligte Schichten: Layer 3 (Vermittlungsschicht) bis Layer 7 (Anwendungsschicht).",
        explanation: "Lernkarte DHCP (Dynamic Host Configuration Protocol):\n" +
            "- Nutzen: Vermeidet manuelle Konfigurationen von Hand (Fehlerquelle, Zeitaufwand) und verhindert IP-Adresskonflikte (wenn zwei Geräte versehentlich dieselbe IP erhalten).\n" +
            "- Ablauf (DORA-Prinzip):\n" +
            "  1. Discover: Client sendet einen Broadcast: 'Ich brauche eine IP-Konfiguration!'\n" +
            "  2. Offer: DHCP-Server bietet eine freie IP-Adresse an.\n" +
            "  3. Request: Client fordert dieses Angebot offiziell an.\n" +
            "  4. Acknowledge: Server bestätigt die Zuweisung (inkl. IP, Maske, Gateway, DNS und Lease-Time [Gültigkeitsdauer der IP])."
    },
    {
        id: 95,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Beschreibe den Aufbau einer MAC-Adresse (Gesamtlänge in Bit/Bytes, Darstellung und die zwei Hauptbestandteile aus den 6 Oktetten) laut deinen Unterlagen.",
        musterloesung: "Eine MAC-Adresse hat eine Gesamtlänge von 48 Bit (6 Oktette/Bytes) und wird in hexadezimaler Darstellung angegeben (z. B. f8:e0:79:af:57:eb).\nSie gliedert sich in:\n- Die ersten 3 Oktette (Bytes): OUI (Organisationally Unique Identifier), welcher weltweit eindeutig den Hersteller identifiziert.\n- Die letzten 3 Oktette (Bytes): NIC Specific (Network Interface Controller Specific), welcher die eindeutige ID der Netzwerkkarte kennzeichnet.",
        explanation: "Lernkarte MAC-Adresse (Media Access Control):\n" +
            "- Funktionsweise: MAC-Adressen sind physikalische, hardwareseitig eingebrannte Adressen von Netzwerkgeräten auf OSI-Layer 2. Im LAN kommunizieren Switche ausschließlich über MAC-Adressen, indem sie eine Source-Address-Table (SAT) pflegen.\n" +
            "- OUI (3 Bytes): Wird von der IEEE an Hersteller vergeben (z.B. f8:e0:79 für Intel oder Apple). So lässt sich die Hardware einem Hersteller zuordnen.\n" +
            "- NIC Specific (3 Bytes): Wird vom Hersteller fortlaufend vergeben. So wird garantiert, dass weltweit keine zwei Netzwerkkarten dieselbe MAC-Adresse besitzen."
    },
    {
        id: 96,
        theme: "lf3",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Welcher Teil einer MAC-Adresse identifiziert weltweit eindeutig den Hersteller des Netzwerkadapters?",
        options: [
            "OUI (Organisationally Unique Identifier) - die ersten 3 Bytes",
            "NIC Specific - die letzten 3 Bytes",
            "MAC Header - das erste Byte",
            "IP-Mapping-Präfix - die ersten 4 Bytes"
        ],
        correctAnswer: 0,
        explanation: "Lernkarte OUI (Organisationally Unique Identifier):\n" +
            "- Länge: Die ersten 24 Bit (3 Bytes) einer 48-Bit MAC-Adresse.\n" +
            "- Zweck: Identifiziert weltweit eindeutig den Hersteller der Netzwerkkarte.\n" +
            "- Verwaltung: Wird zentral durch das IEEE (Institute of Electrical and Electronics Engineers) an Hardwarehersteller lizenziert.\n" +
            "- Beispiel: Siehst du eine MAC-Adresse, die mit '00:05:cd' beginnt, weißt du anhand des OUI-Katalogs sofort, dass die Netzwerkkarte von Cisco Systems stammt."
    },
    {
        id: 97,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Erkläre im Aufbau des ersten Oktetts einer MAC-Adresse die Bedeutung des Bits b0 (I/G-Bit) und des Bits b1 (U/L-Bit) laut deinen Unterlagen.",
        musterloesung: "- Bit b0 (least significant bit): Bestimmt, ob es eine Unicast-Adresse (Wert 0, Übertragung an einen einzelnen Empfänger) oder eine Multicast-Adresse (Wert 1, Übertragung an eine Gruppe) ist.\n- Bit b1: Bestimmt, ob die Adresse weltweit einzigartig ist (Wert 0, globally unique / OUI enforced) oder lokal geändert/administriert wurde (Wert 1, locally administered).",
        explanation: "Detailliertes Hintergrundwissen zu den Bits b0 und b1:\n" +
            "- Bit b0 (Individual/Group bit): Ist das erste übertragene Bit im ersten Oktett einer MAC-Adresse.\n" +
            "  * 0 = Unicast: Paket ist an genau ein einziges Gerät gerichtet.\n" +
            "  * 1 = Multicast: Paket geht an eine vordefinierte Empfängergruppe (z. B. IPv6-Multicast beginnt oft mit 33:33).\n" +
            "- Bit b1 (Universal/Local bit): Bestimmt die Herkunft der MAC.\n" +
            "  * 0 = Universal (Globally administered): Die MAC wurde vom Hersteller eingebrannt und der OUI ist gültig.\n" +
            "  * 1 = Local (Locally administered): Die MAC wurde softwareseitig überschrieben. Das schützt z. B. deine Privatsphäre auf dem iPhone, da iOS beim WLAN-Scan zufällige, lokale MACs generiert (MAC-Address Randomization)."
    },
    {
        id: 98,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Erkläre die gängige Eselsbrücke zur Aufteilung einer IP-Verbindung mit der Post-Zustellung (Netzanteil, Hostanteil und Port) laut deinen Unterlagen.",
        musterloesung: "- Netzanteil: Entspricht dem Straßennamen (bestimmt, in welchem Netzbereich/Wohnbereich sich der Empfänger befindet).\n- Hostanteil: Entspricht der Hausnummer (identifiziert das konkrete Endgerät/Gebäude in diesem Netz).\n- Port: Entspricht dem Namen des Empfängers (bestimmt, welche konkrete Anwendung/Person im Haus die Daten erhalten soll).",
        explanation: "Diese Eselsbrücke hilft, die Adressierungsstufen zu verstehen:\n" +
            "- Der Router lenkt Pakete anhand des Netzanteils (Straße) zum richtigen Netzwerk.\n" +
            "- Der Switch leitet sie innerhalb des Netzwerks an das Zielgerät (Hausnummer) weiter.\n" +
            "- Das Betriebssystem übergibt das Paket anhand des Ports (Name) an die richtige App (z.B. Webserver)."
    },
    {
        id: 99,
        theme: "lf3",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Welche Regel gilt ausnahmslos für den Aufbau einer Subnetzmaske im Binärformat (z. B. für CIDR)?",
        options: [
            "Subnetzmasken bestehen immer aus aufeinanderfolgenden 1en und danach 0en. Die 1en und 0en werden niemals gemischt.",
            "Subnetzmasken können beliebige Folgen von 1en und 0en enthalten.",
            "Subnetzmasken müssen immer genau zur Hälfte aus 1en und zur Hälfte aus 0en bestehen.",
            "Eine Subnetzmaske darf im Binärformat keine 0en enthalten."
        ],
        correctAnswer: 0,
        explanation: "Lernkarte Subnetzmasken-Regel:\n" +
            "- Aufbau: Eine Subnetzmaske maskiert den Netzanteil einer IP-Adresse mit 1en und den Hostanteil mit 0en.\n" +
            "- Wichtigste Regel: Die 1en müssen immer lückenlos nacheinander folgen, gefolgt von den 0en. Es darf keine Mischung wie 101010... geben.\n" +
            "- CIDR (Classless Inter-Domain Routing): Nutzt diese Regel aus, indem einfach die Anzahl der 1en geschrieben wird (z. B. '/24' für 24 Einsen, was der Maske 255.255.255.0 entspricht)."
    },
    {
        id: 100,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Vergleiche die IP-Versionen IPv4 und IPv6 bezüglich ihrer Bit-Breite, der Anzahl der Blöcke/Oktette, der Trennzeichen und ihrer Darstellung laut deinen Unterlagen.",
        musterloesung: "- IPv4: 32 Bit, aufgeteilt in 4 Oktette (Bytes), getrennt durch Punkte, in gepunkteter Dezimalschreibweise (dotted-decimal, z. B. 192.168.10.1).\n- IPv6: 128 Bit, aufgeteilt in 8 Blöcke von je 16 Bit, getrennt durch Doppelpunkte, in hexadezimaler Darstellung (z. B. 2001:0db8:3c4d:0015:0000:0000:1a2f:1a2b).",
        explanation: "Lernkarte IPv4 vs. IPv6:\n" +
            "- Warum IPv6? Der 32-Bit-Adressraum von IPv4 (ca. 4,3 Milliarden Adressen) ist erschöpft. IPv6 bietet durch 128 Bit unvorstellbar viele Adressen (ca. 340 Sextillionen).\n" +
            "- IPv4-Darstellung: Jedes Oktett hat 8 Bit (Wert von 0 bis 255).\n" +
            "- IPv6-Darstellung: Jeder der 8 Blöcke wird als 4-stellige Hexadezimalzahl geschrieben (Werte von 0000 bis FFFF). Führende Nullen innerhalb eines Blocks können weggelassen werden, und aufeinanderfolgende Null-Blöcke können einmalig durch '::' abgekürzt werden."
    },
    {
        id: 101,
        theme: "lf3",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Auf welcher Schicht des OSI-Referenzmodells arbeiten Ports zur Adressierung von bestimmten Applikationen auf einem Zielgerät?",
        options: [
            "Schicht 4 - Transportschicht (Transport Layer)",
            "Schicht 3 - Vermittlungsschicht (Network Layer)",
            "Schicht 7 - Anwendungsschicht (Application Layer)",
            "Schicht 2 - Sicherungsschicht (Data Link Layer)"
        ],
        correctAnswer: 0,
        explanation: "Lernkarte Ports & Schicht 4:\n" +
            "- Schichtzuordnung: Ports gehören zu den Transportschicht-Protokollen (TCP und UDP) auf OSI-Layer 4.\n" +
            "- Zweck: Während IP-Adressen (Schicht 3) ein bestimmtes Gerät im Netzwerk adressieren, adressieren Ports die konkrete Software (Prozess) auf diesem Gerät.\n" +
            "- Portbereiche: Well Known Ports (0 - 1023, fest zugewiesen), Registered Ports (1024 - 49151), Dynamic/Private Ports (49152 - 65535)."
    },
    {
        id: 102,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Ordne den Ports 80, 23 und 143 die jeweilige Anwendung und das Protokoll laut deinen Unterlagen zu.",
        musterloesung: "- Port 80: HTTP (Web-Server - Webseiten-Anfrage)\n- Port 23: Telnet (Konsole - textbasierte Fernsteuerung/Konfiguration)\n- Port 143: IMAP (Mail-Server - E-Mail-Abholung vom Server)",
        explanation: "Hintergrundwissen zu den Ports von deiner Folie:\n" +
            "- Port 80 (HTTP): Überträgt unverschlüsselte Webseiten (für verschlüsselte Übertragung wird HTTPS auf Port 443 genutzt).\n" +
            "- Port 23 (Telnet): Ermöglicht unverschlüsselte Remote-Kommandozeilenverbindungen (wurde aus Sicherheitsgründen durch SSH auf Port 22 ersetzt).\n" +
            "- Port 143 (IMAP): Holt E-Mails ab, wobei die Mails auf dem Server verbleiben (im Gegensatz zu POP3 auf Port 110, welches Mails standardmäßig herunterlädt und löscht)."
    },
    {
        id: 103,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Subnetting (LF 3): Der IP-Adressbereich 192.168.164.0 bis 192.168.164.255 soll in genau 4 gleichgroße Subnetze unter maximaler Ausnutzung des Adressraumes aufgeteilt werden.\n\nGib die Subnetzmaske, die maximale Anzahl Hosts pro Subnetz und für jedes der 4 Subnetze die erste und letzte nutzbare Hostadresse an.",
        musterloesung: "Subnetzmaske: 255.255.255.192 (oder /26)\nMax. Hosts pro Subnetz: 62 (2^6 - 2 = 62)\n\n- 1. Subnetz: Erste nutzbare IP: 192.168.164.1 | Letzte nutzbare IP: 192.168.164.62\n- 2. Subnetz: Erste nutzbare IP: 192.168.164.65 | Letzte nutzbare IP: 192.168.164.126\n- 3. Subnetz: Erste nutzbare IP: 192.168.164.129 | Letzte nutzbare IP: 192.168.164.190\n- 4. Subnetz: Erste nutzbare IP: 192.168.164.193 | Letzte nutzbare IP: 192.168.164.254",
        explanation: "Ausführliche Herleitung & Lernschritte:\n" +
            "1. Gesamtbereich bestimmen: Der Adressbereich umfasst 256 Adressen (ein klassisches /24 Netz).\n" +
            "2. Größe der Subnetze ermitteln: Bei 4 gleichgroßen Subnetzen hat jedes Subnetz 256 / 4 = 64 Adressen.\n" +
            "3. Host-Bits bestimmen: Da 64 = 2^6, werden 6 Bits für die Adressierung der Hosts benötigt. Die verbleibenden 2 Bits (8 - 6) gehen in den Netzanteil. Das ergibt ein /26 Netz (24 + 2).\n" +
            "4. Subnetzmaske berechnen: Binär 11111111.11111111.11111111.11000000 -> Dezimal: 255.255.255.192.\n" +
            "5. Maximale Host-Anzahl pro Subnetz: Gesamt-Adressen pro Netz (64) minus Netzadresse (erste IP) und Broadcastadresse (letzte IP) = 64 - 2 = 62 Hosts.\n" +
            "6. Subnetz-Bereiche auflisten (die Netzadressen steigen immer um die Schrittweite 64):\n" +
            "   * 1. Subnetz (.0): Erste nutzbare IP: .1, Letzte nutzbare IP: .62 (Broadcast: .63)\n" +
            "   * 2. Subnetz (.64): Erste nutzbare IP: .65, Letzte nutzbare IP: .126 (Broadcast: .127)\n" +
            "   * 3. Subnetz (.128): Erste nutzbare IP: .129, Letzte nutzbare IP: .190 (Broadcast: .191)\n" +
            "   * 4. Subnetz (.192): Erste nutzbare IP: .193, Letzte nutzbare IP: .254 (Broadcast: .255)"
    },
    {
        id: 104,
        theme: "lf3",
        type: "multiple-choice",
        question: "Prüfungsaufgabe IP-Klassen (LF 3): Nenne für die klassischen IP-Adressklassen B, C und D die jeweilige Standard-Subnetzmaske.",
        options: [
            "Klasse B: 255.255.0.0, Klasse C: 255.255.255.0, Klasse D: Keine Standardmaske (für Multicast reserviert)",
            "Klasse B: 255.0.0.0, Klasse C: 255.255.0.0, Klasse D: 255.255.255.0",
            "Klasse B: 255.255.255.0, Klasse C: 255.255.255.128, Klasse D: 255.255.255.255",
            "Klasse B: 255.255.0.0, Klasse C: 255.255.255.0, Klasse D: 255.255.255.0"
        ],
        correctAnswer: 0,
        explanation: "Lern-Zusammenfassung zu den klassischen IP-Klassen:\n" +
            "- Klasse A: IP-Bereich 0.0.0.0 bis 127.255.255.255. Standard-Subnetzmaske ist 255.0.0.0 (/8).\n" +
            "- Klasse B: IP-Bereich 128.0.0.0 bis 191.255.255.255. Standard-Subnetzmaske ist 255.255.0.0 (/16).\n" +
            "- Klasse C: IP-Bereich 192.0.0.0 bis 223.255.255.255. Standard-Subnetzmaske ist 255.255.255.0 (/24).\n" +
            "- Klasse D: IP-Bereich 224.0.0.0 bis 239.255.255.255. Diese Klasse ist für Multicast-Gruppen reserviert und besitzt keine Standard-Subnetzmaske für Unicast-Endgeräte."
    },
    {
        id: 105,
        theme: "lf3",
        type: "multiple-choice",
        question: "Prüfungsaufgabe IP-Adressraum (LF 3): Ermittle die Anzahl der IPv4-Hostadressen, die in einem Subnetz mit der Subnetzmaske 255.255.0.0 maximal an Endgeräte vergeben werden können.",
        options: [
            "65.534 Hostadressen (2^16 - 2)",
            "65.536 Hostadressen (2^16)",
            "16.777.214 Hostadressen (2^24 - 2)",
            "254 Hostadressen (2^8 - 2)"
        ],
        correctAnswer: 0,
        explanation: "Herleitung der Hostanzahl:\n" +
            "- Die Subnetzmaske 255.255.0.0 entspricht im CIDR-Format /16.\n" +
            "- Das bedeutet, dass von den 32 Gesamt-Bits einer IPv4-Adresse genau 16 Bits für den Netzanteil und 16 Bits für den Hostanteil bestimmt sind (32 - 16 = 16).\n" +
            "- Gesamtzahl möglicher Adress-Kombinationen im Hostanteil: 2^16 = 65.536.\n" +
            "- Abzug der zwei geschützten Sonderadressen:\n" +
            "  * Erste Adresse (Hostbits alle 0) = Netzadresse (z.B. 192.168.0.0)\n" +
            "  * Letzte Adresse (Hostbits alle 1) = Broadcastadresse (z.B. 192.168.255.255)\n" +
            "- Formel: 2^h - 2 -> 2^16 - 2 = 65.536 - 2 = 65.534 nutzbare Hostadressen."
    },
    {
        id: 106,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Subnetting (LF 3): Für das Netzwerk 192.168.1.0/24 sollen für 5 Abteilungen jeweils ein eigenes Subnetz eingerichtet werden. Jedes Subnetz muss mindestens 20 Hosts unterstützen.\n\nErmittle die benötigte Subnetzmaske und die Netzadressen für die Subnetze 2 und 3.",
        musterloesung: "Subnetzmaske: 255.255.255.224 (oder /27)\nNetzadresse Subnetz 2: 192.168.1.32\nNetzadresse Subnetz 3: 192.168.1.64",
        explanation: "Ausführliche Herleitung & Lernschritte:\n" +
            "1. Anforderung Hosts: Jedes Subnetz muss mindestens 20 Host-IPs bieten. Wir suchen die kleinste Zweierpotenz 2^h - 2 >= 20:\n" +
            "   * h=4: 2^4 - 2 = 14 Hosts (zu wenig)\n" +
            "   * h=5: 2^5 - 2 = 30 Hosts (reicht aus!)\n" +
            "   Wir benötigen also h=5 Bits für die Hosts.\n" +
            "2. Ermittlung der Subnetzmaske: Eine IP-Adresse hat 32 Bits. Wenn wir 5 Bits für den Host reservieren, verbleiben 32 - 5 = 27 Bits für den Netzanteil (/27).\n" +
            "   * Binär: 11111111.11111111.11111111.11100000 -> Dezimal: 255.255.255.224.\n" +
            "3. Anforderung Subnetze prüfen: Das Originalnetz war /24. Unser Subnetz hat /27, wir haben also 3 Bits für die Subnetze hinzugewonnen (27 - 24 = 3).\n" +
            "   * Mögliche Subnetze: 2^3 = 8 Subnetze. Da wir nur 5 Abteilungen haben, reicht das perfekt.\n" +
            "4. Netzgrenzen bestimmen: Da h=5 Hostbits vorhanden sind, beträgt die Schrittweite (Blockgröße) 2^5 = 32 IP-Adresse pro Subnetz:\n" +
            "   * Subnetz 1: Netzadresse 192.168.1.0 (Bereich .0 bis .31)\n" +
            "   * Subnetz 2: Netzadresse 192.168.1.32 (Bereich .32 bis .63)\n" +
            "   * Subnetz 3: Netzadresse 192.168.1.64 (Bereich .64 bis .95)"
    },
    {
        id: 107,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe IP-Adressierung (LF 3): Ein neuer Datenbankserver wird in ein Netzwerk integriert. Als IP-Adressen werden vorgeschlagen: 192.168.10.0/24, 192.168.10.200/24 und 127.0.0.1/8.\n\nBeurteile die Eignung dieser drei IP-Adressen für den Datenbankserver.",
        musterloesung: "1. 192.168.10.0/24: Ungeeignet (Netzadresse des Subnetzes, darf nicht an Endgeräte vergeben werden).\n2. 192.168.10.200/24: Geeignet (liegt im nutzbaren Host-Bereich von .1 bis .254).\n3. 127.0.0.1/8: Ungeeignet (Loopback-Adresse / Localhost, dient nur internen Diagnosezwecken auf dem eigenen Gerät und ist im Netzwerk nicht routbar).",
        explanation: "Lernübersicht zur Adressgültigkeit:\n" +
            "- Netzadresse: Identifiziert das gesamte Netzwerk (alle Hostbits sind binär 0). Ungeeignet für Geräte.\n" +
            "- Broadcastadresse: Dient zum Senden von Rundrufen an alle Geräte im Netz (alle Hostbits sind binär 1, hier: 192.168.10.255). Ungeeignet für Einzelgeräte.\n" +
            "- Loopback-Bereich (127.0.0.0 bis 127.255.255.255): Ist für den localhost reserviert. Pakete an diese IP verlassen die Netzwerkkarte nie."
    }
];


