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
    },
    {
        id: 108,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerktechnik (LF 3): Erkläre das Einsatzszenario sowie die Funktionsweise und Einschränkungen des Übergangsverfahrens DS-Lite (Dual Stack Lite) laut deinen Unterlagen.",
        musterloesung: "Einsatzszenario: Ermöglicht Geräten mit einem reinen IPv6-Anschluss (z.B. bei modernen Glasfaser- oder Kabelanschlüssen) den Zugriff auf das ältere IPv4-Internet.\n\nFunktionsweise:\n1. Die IPv4-Datenpakete des Endgeräts werden in IPv6-Pakete verpackt (getunnelt).\n2. Diese Pakete werden über das reine IPv6-Netz des Providers transportiert.\n3. Beim Provider werden die Pakete entpackt und über eine zentrale IPv4-Adresse (Carrier-Grade NAT / CGNAT) ins IPv4-Internet geleitet.\n\nEinschränkung: Da der Kunde keine eigene öffentliche IPv4-Adresse besitzt, ist eine direkte IPv4-Portfreigabe von außen (z.B. für ein Heim-NAS oder VPN) nicht ohne weiteres möglich.",
        explanation: "Lernkarte DS-Lite (Dual Stack Lite):\n" +
            "- Warum DS-Lite? Da IPv4-Adressen knapp sind, vergeben Provider an Neukunden oft nur noch eine echte IPv6-Adresse. Damit der Kunde trotzdem IPv4-Websites aufrufen kann, wird DS-Lite verwendet.\n" +
            "- AFTR-Gateway: Der Router beim Provider, der die Pakete entpackt und übersetzt, heißt AFTR (Address Family Transition Router).\n" +
            "- Portfreigaben: Während IPv4-Portfreigaben blockiert sind, funktionieren IPv6-Verbindungen von außen (z. B. auf ein IPv6-fähiges Gerät zu Hause) problemlos direkt."
    },
    {
        id: 109,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Hardware (LF 2): Beschreibe die drei Schritte beim Einbau einer CPU und erkläre den physikalischen Grund für die Verwendung von Wärmeleitpaste (Wärmeleitmedium) laut deinen Unterlagen.",
        musterloesung: "Einbauschritte:\n1. Hebel anheben: Löst die Sockelarretierung.\n2. CPU ausrichten: Dreiecksmarkierung an CPU und Sockel abgleichen und CPU ohne Kraft einsetzen (Verbiegung der Pins vermeiden).\n3. CPU sichern: Hebel absenken und einrasten lassen, um die CPU zu fixieren.\n\nGrund für Wärmeleitpaste:\nDie Wärmeleitpaste gleicht mikroskopische Unebenheiten (Rauheit) zwischen der CPU-Oberfläche und dem Kühlerboden aus. Sie verdrängt die dort eingeschlossene Luft (die ein schlechter Wärmeleiter bzw. thermischer Isolator ist) und optimiert so den Wärmeübergang zum Kühler.",
        explanation: "Lernkarte CPU-Einbau:\n" +
            "- Die Wärmeleitpaste muss hauchdünn aufgetragen werden. Eine zu dicke Schicht verschlechtert die Temperaturen, da Paste schlechter leitet als direkt aufeinanderliegendes Kupfer/Aluminium.\n" +
            "- Bei Spannungswandlern (VRMs) oder M.2 NVMe SSDs werden wegen der größeren Abstände meist elastische Wärmeleitpads verwendet."
    },
    {
        id: 110,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Hardware (LF 2): Berechne die maximale Datenübertragungsrate (Bandbreite) eines DDR4-3200 Moduls in MB/s und gib die offizielle PC-Modulbezeichnung an. Erkläre zudem kurz den Unterschied zwischen symmetrischem und asymmetrischem Dual-Channel-Modus.",
        musterloesung: "Bandbreiten-Berechnung:\nDa RAM über einen 64-Bit breiten Kanal kommuniziert (64 Bit / 8 = 8 Bytes), rechnen wir:\n3200 MHz * 8 Bytes = 25.600 MB/s (entspricht 25,6 GB/s).\nModulbezeichnung: PC4-25600 (PC4 steht für DDR4, 25600 für die Übertragungsrate in MB/s).\n\nDual-Channel-Modi:\n- Symmetrisch (Symmetric Mode): Beide Kanäle haben dieselbe RAM-Kapazität (z.B. 2x 8 GB). Der gesamte RAM läuft mit doppelter Bandbreite (128-Bit).\n- Asymmetrisch (Flex Mode): Kanäle haben ungleiche Kapazitäten (z.B. 4 GB + 8 GB). Nur der überlappende Teil (hier: 2x 4 GB = 8 GB) läuft im schnellen Dual-Channel, der Rest läuft im langsameren Single-Channel.",
        explanation: "Lernkarte RAM-Leistung:\n" +
            "- Dual-Channel verdoppelt nicht die RAM-Größe, sondern die Busbreite von 64 auf 128 Bit, was die Transferraten drastisch erhöht.\n" +
            "- Riegel-Steckplätze: Um Dual-Channel zu nutzen, müssen die Module in den vom Handbuch vorgegebenen Slots stecken (meist Slot A2 und B2, d.h. mit einer Lücke dazwischen)."
    },
    {
        id: 111,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Hardware (LF 2): Vergleiche die Speichertechnologien NAS (Network Attached Storage) und SAN (Storage Area Network) bezüglich ihres Zugriffskonzepts (dateibasiert vs. blockbasiert), der typischen Netzwerk-Protokolle und des Einsatzzwecks.",
        musterloesung: "- NAS (Network Attached Storage):\n  * Zugriff: Dateibasiert (dateiorientiert).\n  * Protokolle: SMB, CIFS (Windows), NFS (Linux).\n  * Netzwerk: Normales, gemeinsam genutztes LAN.\n  * Einsatzzweck: Zentrales File-Sharing für Benutzer (Dokumentenablage, Gruppenlaufwerke).\n- SAN (Storage Area Network):\n  * Zugriff: Blockbasiert (Speicher wird wie eine lokale Festplatte eingebunden).\n  * Protokolle: Fibre Channel (FC), iSCSI.\n  * Netzwerk: Ein dediziertes, separates Hochgeschwindigkeits-Netzwerk.\n  * Einsatzzweck: Hochleistungsdatenbanken, Server-Virtualisierungscluster (z.B. VMware vSphere).",
        explanation: "Lernkarte NAS vs. SAN:\n" +
            "- NAS verhält sich wie ein freigegebener Ordner im Netz. Der Client sieht ein Dateisystem (z.B. NTFS oder ext4), das auf dem NAS läuft.\n" +
            "- SAN stellt rohen Speicherplatz (LUNs) bereit. Der Server partitioniert und formatiert diesen Speicherplatz selbst mit seinem eigenen Dateisystem, als wäre es eine physisch eingebaute Festplatte."
    },
    {
        id: 112,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Speicherberechnung (LF 2): Erläutere den Unterschied zwischen den Dezimal-Präfixen (SI-Einheiten wie KB, MB, GB) und den Binär-Präfixen (IEC-Einheiten wie KiB, MiB, GiB) bezüglich ihres Umrechnungsfaktors und nenne jeweils einen typischen Praxis-Kontext.",
        musterloesung: "- Dezimal-Präfixe (SI, z. B. GB):\n  * Umrechnungsfaktor: Basis 10 (1.000er Schritte, 1 GB = 10^9 Bytes = 1.000.000.000 Bytes).\n  * Praxis-Kontext: Angaben von Festplattenherstellern (HDD/SSD-Kapazitäten) und Netzwerk-Bandbreiten (z. B. Gbit/s).\n- Binär-Präfixe (IEC, z. B. GiB):\n  * Umrechnungsfaktor: Basis 2 (1.024er Schritte, 1 GiB = 2^30 Bytes = 1.073.741.824 Bytes).\n  * Praxis-Kontext: Betriebssysteme (wie Windows, die Dateigrößen und RAM-Belegung berechnen).",
        explanation: "Lernkarte SI vs. IEC:\n" +
            "- Warum wird man 'betrogen'? Wenn du eine 1 TB Festplatte kaufst, rechnet der Hersteller mit 1.000.000.000.000 Bytes. Windows rechnet jedoch in TiB (Teilfaktor 1.024) um und zeigt dir daher nur ca. 931 GB freie Kapazität an.\n" +
            "- Mnemotechnik: K-M-G-T (Kilo, Mega, Giga, Tera). Steht ein 'i' in der Abkürzung (KiB, MiB, GiB), teilst du durch 1.024, ansonsten durch 1.000."
    },
    {
        id: 113,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe OSI-Modell (LF 3): Nenne die zwei Hauptgruppen (zusammengefasste Schichten), in die das OSI-Referenzmodell gegliedert wird, und ordne die 7 Schichten diesen Gruppen zu.",
        musterloesung: "1. Anwendungsorientierte Schichten (Schichten 5 bis 7):\n   * Schicht 7: Anwendungsschicht (Application Layer)\n   * Schicht 6: Darstellungsschicht (Presentation Layer)\n   * Schicht 5: Sitzungsschicht (Session Layer)\n\n2. Transportorientierte / netzwerknahe Schichten (Schichten 1 bis 4):\n   * Schicht 4: Transportschicht (Transport Layer)\n   * Schicht 3: Vermittlungsschicht (Network Layer)\n   * Schicht 2: Sicherungsschicht (Data Link Layer)\n   * Schicht 1: Bitübertragungsschicht (Physical Layer)",
        explanation: "Lernkarte OSI-Modell-Gruppen:\n" +
            "- Die anwendungsorientierten Schichten (5-7) regeln die Dateninteraktion, Datenkodierung und Sitzungssteuerung der Applikationen.\n" +
            "- Die transportorientierten Schichten (1-4) kümmern sich um den logischen und physikalischen Datentransport (z.B. Segmentierung, IP-Routing und Bitübertragung) durch das Netzwerk."
    },
    {
        id: 114,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerkprotokolle (LF 3): Ordne die vier Protokolle TCP, IP, UDP und IPsec den entsprechenden Schichten (Layer 1 bis 7) des OSI-Referenzmodells zu.",
        musterloesung: "- Schicht 4 (Transportschicht): TCP (Transmission Control Protocol) und UDP (User Datagram Protocol)\n- Schicht 3 (Vermittlungsschicht): IP (Internet Protocol) und IPsec (Internet Protocol Security)\n- Schichten 7-5, Schicht 2 und Schicht 1: Keine dieser vier Protokolle arbeitet auf diesen Schichten.",
        explanation: "Lernkarte Protokolle & Schichten:\n" +
            "- TCP (verbindungsorientiert mit Flusskontrolle) und UDP (verbindungslos und schnell) regeln den End-zu-End-Transport auf Schicht 4.\n" +
            "- IP regelt die logische Adressierung und das Routing von Paketen auf Schicht 3.\n" +
            "- IPsec verschlüsselt und authentifiziert IP-Verbindungen direkt auf Schicht 3 (wird primär für sichere VPN-Verbindungen genutzt)."
    },
    {
        id: 115,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerkgeräte (LF 3): Erkläre die Funktion eines Access Points (AP) im Netzwerk laut deinen Unterlagen.",
        musterloesung: "Ein Access Point (AP) ist ein aktives Netzwerkgerät, das als Schnittstelle (Brücke) zwischen einem kabelgebundenen Netzwerk (LAN) und drahtlosen Endgeräten (WLAN-Clients wie Smartphones oder Laptops) fungiert. Er wandelt die elektrischen Signale des Netzwerkkabels in Funksignale um und ermöglicht so den drahtlosen Geräten den Zugang zum Netzwerk und dem Internet.",
        explanation: "Lernkarte Access Point:\n" +
            "- Ein AP arbeitet primär auf OSI-Schicht 2 (Sicherungsschicht) und leitet Frames basierend auf MAC-Adressen weiter, ähnlich wie ein Switch.\n" +
            "- Abgrenzung zum WLAN-Router: Ein WLAN-Router ist ein Kombi-Gerät, das einen Access Point, einen Switch und einen Router (zur Adressübersetzung/NAT ins Internet) in einem Gehäuse vereint."
    },
    {
        id: 116,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe WLAN-Sicherheit (LF 3): Nenne 6 Möglichkeiten, mit denen ein drahtloses Netzwerk (WLAN) abgesichert und geschützt werden kann.",
        musterloesung: "1. Starke Verschlüsselung aktivieren (WPA3 mit SAE oder mindestens WPA2-AES).\n2. Langes, komplexes WLAN-Passwort (WPA-Key) vergeben (Schutz vor Wörterbuch- und Brute-Force-Angriffen).\n3. WPA2/WPA3 Enterprise (IEEE 802.1X) mit RADIUS-Server für individuelle Benutzerauthentifizierung nutzen.\n4. SSID-Broadcast deaktivieren (Netzwerknamen verstecken - erschwert das Auffinden).\n5. MAC-Adressfilterung einrichten (nur bekannte MAC-Adressen von Endgeräten zulassen).\n6. WPS (Wi-Fi Protected Setup) am Router deaktivieren (Sicherheitslücke bei PIN-Eingabe).\n7. Firmware des Routers/Access Points regelmäßig aktualisieren (Sicherheitsupdates).\n8. Separates Gast-WLAN (VLAN) für Besucher einrichten.",
        explanation: "Lernkarte WLAN-Sicherheit:\n" +
            "- Die WPA-Verschlüsselung und ein komplexes Passwort bilden den Hauptschutz.\n" +
            "- MAC-Filterung und das Deaktivieren des SSID-Broadcasts bieten nur geringen Schutz (sog. 'Security durch Obscurity'), da Hacker MAC-Adressen leicht klonen (speichern/fälschen) und versteckte Netzwerknamen mit Sniffer-Tools abfangen können.\n" +
            "- WPA2/WPA3 Enterprise wird in Unternehmen verwendet, damit sich jeder Nutzer mit seinen eigenen Login-Daten statt mit einem gemeinsamen Netzwerkschlüssel anmeldet."
    },
    {
        id: 117,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe WLAN-Verschlüsselung (LF 3): Erläutere die wesentlichen Verbesserungen von WPA3 gegenüber dem älteren WPA2-Standard (insbesondere bezüglich SAE und Angriffsschutz) laut deinen Unterlagen.",
        musterloesung: "1. SAE (Simultaneous Authentication of Equals): Ersetzt das anfällige PSK-Verfahren. Endgerät und Access Point authentifizieren sich gegenseitig über Hashes, ohne dass das Passwort im Klartext übertragen werden muss.\n2. Schutz vor Wörterbuch- und Brute-Force-Angriffen: Da kein einfacher Key-Austausch abgefangen werden kann, sind Offline-Passwortangriffe (Brute-Force) nutzlos.\n3. Forward Secrecy: Selbst wenn das WLAN-Passwort nachträglich entschlüsselt oder geleakt wird, können zuvor aufgezeichnete Datenströme nicht im Nachhinein entschlüsselt werden.\n4. Schutz vor Man-in-the-Middle-Angriffen (KRACK-Lücke behoben).\n5. Stärkere Verschlüsselung: Bis zu 192-Bit-Verschlüsselung im Enterprise-Bereich.",
        explanation: "Lernkarte WPA3 & SAE:\n" +
            "- WPA2 (PSK) nutzt einen 4-Wege-Handshake. Fängt ein Angreifer diesen Anmeldevorgang auf, kann er das Passwort offline per Brute-Force/Wörterbuch-Datei knacken.\n" +
            "- WPA3 (SAE) basiert auf dem Dragonfly-Schlüsselaustausch. Hierbei tauschen Geräte mathematische Beweise aus, ohne das Passwort jemals preiszugeben. Das verhindert Offline-Angriffe und garantiert Forward Secrecy."
    },
    {
        id: 118,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Subnetting (LF 3): Der IP-Adressbereich 192.168.164.0 bis 192.168.164.255 soll in 4 gleichgroße Subnetze geteilt werden. Benenne das erste und dritte Netz, nenne die Subnetzmaske und berechne die maximale Hostanzahl pro Subnetz mit Rechenweg.",
        musterloesung: "- 1. Subnetz Netzadresse: 192.168.164.0\n- 3. Subnetz Netzadresse: 192.168.164.128\n- Subnetzmaske: 255.255.255.192 (oder /26)\n\nRechenweg Hosts:\n1. Adressen pro Netz: 256 Gesamt-Adressen / 4 Netze = 64 Adressen pro Subnetz.\n2. Host-Bits bestimmen: 64 = 2^6 -> h = 6 Hostbits.\n3. Nutzbare Hosts berechnen: 2^h - 2 (Abzug von Netzadresse und Broadcastadresse).\n4. Rechnung: 2^6 - 2 = 64 - 2 = 62 nutzbare Hosts pro Subnetz.",
        explanation: "Lernkarte Subnetting-Rechenweg:\n" +
            "- Subnetzmaske: 32 Gesamtbits - 6 Hostbits = 26 Netzbits (/26). Letztes Byte: 11000000 binär = 128 + 64 = 192 dezimal. Daher 255.255.255.192.\n" +
            "- Die Netzgrenzen liegen bei .0 (1. Netz), .64 (2. Netz), .128 (3. Netz) und .192 (4. Netz)."
    },
    {
        id: 119,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerktechnik (LF 3): Beschreibe das Konzept der Strukturierten Verkabelung (nach DIN EN 50173) und nenne die drei Verkabelungsbereiche mit den typischen Kabelmedien und den dazugehörigen Verteilern laut deinen Unterlagen.",
        musterloesung: "- Primärbereich (Flächenverkabelung): Verbindet Gebäude untereinander. Geht vom Standortverteiler (SV) zu den Gebäudeverteilern (GV). Medium: Bevorzugt Lichtwellenleiter (LWL / Glasfaser) wegen galvanischer Trennung (Blitzschutz) und Distanzen.\n- Sekundärbereich (Steigbereich): Verbindet Stockwerke innerhalb eines Gebäudes. Geht vom Gebäudeverteiler (GV) zu den Etagenverteilern (EV). Medium: LWL oder Kupfer (Twisted Pair).\n- Tertiärbereich (Horizontalverkabelung): Verbindet den Etagenverteiler (EV) mit den Anschlussdosen (TA) in den Räumen. Medium: Fast ausschließlich Kupfer (Twisted-Pair-Kabel) bis max. 90m Kabellänge (100m inkl. Patchkabel). LWL nur in Ausnahmen.",
        explanation: "Lernkarte Strukturierte Verkabelung:\n" +
            "- Ziel: Zukunftssichere, herstellerunabhängige und strukturierte Gebäudeverkabelung nach DIN EN 50173, um teure Umrüstungen bei Technologiewechseln zu vermeiden.\n" +
            "- Die Abkürzungen von deiner Folie stehen für:\n" +
            "  * SV: Standortverteiler (Campus Distributor)\n" +
            "  * GV: Gebäudeverteiler (Building Distributor)\n" +
            "  * EV: Etagenverteiler (Floor Distributor)\n" +
            "  * TA: Informationstechnischer Anschluss (Telecommunications Outlet / Dose)"
    },
    {
        id: 120,
        theme: "lf3",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Netzwerktechnik (LF 3): Welches Kabelmedium wird im Primärbereich (Flächenverkabelung zwischen Gebäuden) der strukturierten Verkabelung bevorzugt eingesetzt und warum?",
        options: [
            "Lichtwellenleiter (LWL) - Wegen der galvanischen Trennung (Schutz vor Potenzialunterschieden/Blitzeinschlägen) und hoher Reichweite.",
            "Kupferkabel (Twisted Pair Cat 7) - Weil es kostengünstiger ist und keinen Medienkonverter benötigt.",
            "Koaxialkabel - Weil es mechanisch stabiler im Erdboden verlegt werden kann.",
            "WLAN-Richtfunk - Weil dadurch keine Erdarbeiten zwischen den Gebäuden nötig sind."
        ],
        correctAnswer: 0,
        explanation: "Lernkarte LWL im Primärbereich:\n" +
            "- Glasfaserkabel leiten Lichtsignale statt Strom. Da sie nicht leitend sind, trennen sie die Gebäude galvanisch. Dies verhindert Stromschäden bei Blitzeinschlägen und schützt sensible Netzwerkkomponenten.\n" +
            "- Zudem bieten LWL-Kabel eine extrem hohe Bandbreite und sehr geringe Signaldämpfung, was Übertragungsstrecken von mehreren Kilometern ermöglicht."
    },
    {
        id: 121,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Künstliche Intelligenz (LF 2): Erkläre die Begriffe Künstliche Intelligenz (KI), Machine Learning (ML) und Deep Learning (DL) und beschreibe, wie sie hierarchisch ineinander eingeordnet sind.",
        musterloesung: "- Künstliche Intelligenz (KI): Die Fähigkeit von Maschinen, basierend auf Algorithmen Aufgaben autonom auszuführen und anpassungsfähig auf unbekannte Situationen zu reagieren.\n- Machine Learning (ML): Ein Teilbereich der KI. Nutzt statistische Verfahren, damit Systeme selbstständig aus Daten Muster und Zusammenhänge lernen und Vorhersagen treffen, ohne explizit dafür programmiert zu sein.\n- Deep Learning (DL): Ein Teilbereich von ML, der mit tiefen künstlichen neuronalen Netzen arbeitet (mehrere versteckte Schichten). Besonders leistungsfähig bei unstrukturierten Daten (z. B. Bildern, Sprache).\n\nHierarchische Einordnung:\nDL ist ein Teilbereich von ML, und ML ist wiederum ein Teilbereich von KI (Verschachtelung: KI > ML > DL).",
        explanation: "Lernkarte KI-Begriffe:\n" +
            "- KI ist der Oberbegriff für alles, was menschliches Verhalten simuliert.\n" +
            "- ML lernt aktiv aus Beispielen anhand von Trainingsdaten.\n" +
            "- DL simuliert mit künstlichen Neuronen die Arbeitsweise des menschlichen Gehirns in vielen übereinanderliegenden Netzwerkschichten (Layers)."
    },
    {
        id: 122,
        theme: "lf1",
        type: "open-text",
        question: "Prüfungsaufgabe EU-KI-Verordnung (LF 1): Was ist das Hauptziel der EU-KI-Verordnung (EU AI Act) und welche Risikoklassen werden darin unterschieden? Nenne zu jeder Klasse ein Beispiel.",
        musterloesung: "Hauptziel:\nRegelung des sicheren, fairen, transparenten und vertrauenswürdigen Einsatzes von KI-Systemen in der EU bei gleichzeitigem Schutz von Grundrechten und Sicherheit.\n\nRisikoklassen & Beispiele:\n1. Unannehmbares Risiko (verboten): z. B. Social Scoring (soziale Bewertung durch Regierungen), biometrische Kategorisierung oder Echtzeit-Gesichtserkennung im öffentlichen Raum.\n2. Hohes Risiko (streng reguliert): z. B. KI in kritischer Infrastruktur, Bildung, Beschäftigung (Bewerberauswahl) oder Strafverfolgung.\n3. Begrenztes Risiko (Transparenzpflichten): z. B. Chatbots oder Deepfakes (Nutzer müssen erkennen, dass sie mit einer KI interagieren).\n4. Minimales Risiko (frei nutzbar): z. B. Spam-Filter oder KI in Videospielen.",
        explanation: "Lernkarte EU AI Act:\n" +
            "- Die Verordnung trat am 1. August 2024 EU-weit in Kraft.\n" +
            "- Sie gilt für Anbieter (Entwickler), Importeure, Händler und Bereitsteller/Nutzer von KI-Systemen innerhalb der EU."
    },
    {
        id: 123,
        theme: "lf1",
        type: "open-text",
        question: "Prüfungsaufgabe EU-KI-Verordnung (LF 1): Definiere den Begriff 'Akteur' im Kontext der EU-KI-Verordnung, nenne drei Beispiele für Akteure und erkläre das Kürzel 'GPAI'.",
        musterloesung: "Akteur:\nEine natürliche oder juristische Person, die an der Entwicklung, Bereitstellung, Nutzung, dem Import, Vertrieb oder der Überwachung von KI-Systemen im Lebenszyklus beteiligt ist.\n\nDrei Beispiele für Akteure:\n1. Anbieter (Entwickelt die KI oder lässt sie entwickeln, um sie in den Markt einzuführen).\n2. Betreiber / Nutzer (Nutzt das KI-System im beruflichen Kontext).\n3. Importeur (Führt ein KI-System aus Drittländern in die EU ein).\n\nErklärung GPAI:\nGPAI steht für General Purpose Artificial Intelligence (KI-Modelle mit allgemeinem Verwendungszweck). Das sind KI-Modelle, die auf großen Datenmengen trainiert wurden, eine breite Palette von Aufgaben bewältigen können (wie Text-, Bild- oder Codegenerierung) und sich in verschiedene Anwendungen integrieren lassen (z. B. GPT-4 oder Gemini).",
        explanation: "Lernkarte GPAI & Akteure:\n" +
            "- Der AI Act legt fest, dass GPAI-Modelle transparent sein müssen (z. B. Offenlegung der Trainingsdaten und Einhaltung des Urheberrechts).\n" +
            "- Die Akteure haben je nach ihrer Rolle unterschiedliche Pflichten (die meisten Pflichten liegen beim Anbieter)."
    },
    {
        id: 124,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Cloud Computing (LF 2): Beschreibe die Nutzungsmodelle Private Cloud und Public Cloud, nenne den Vorteil der Skalierung von Ressourcen in Cloud-Systemen gegenüber dem eigenen Rechenzentrum und nenne ein Datenschutzproblem.",
        musterloesung: "Nutzungsmodelle:\n- Private Cloud: IT-Infrastruktur, die exklusiv für ein einziges Unternehmen betrieben wird (entweder intern im eigenen Rechenzentrum oder extern beim Hoster). Höchste Kontrolle und Sicherheit.\n- Public Cloud: IT-Infrastruktur wird über das Internet öffentlich für jedermann bereitgestellt (z.B. AWS, Azure, Google Cloud). Abrechnung nach Nutzung, keine eigene Hardware nötig.\n\nVorteil der Cloud-Skalierung:\nElastizität und Geschwindigkeit: Ressourcen (CPU, RAM, Speicher) können bei Bedarf innerhalb von Sekunden dynamisch und vollautomatisch hoch- oder herunterskaliert werden (Skalierbarkeit). Im eigenen RZ erfordert dies den physischen Kauf und Einbau neuer Server (hoher Zeit- und Kostenaufwand).\n\nDatenschutzproblem:\nDatenübertragung ins Ausland und Speicherung auf Servern von US-amerikanischen Providern (Drittstaaten-Problematik/Cloud Act), wodurch die Einhaltung der EU-DSGVO gefährdet sein kann.",
        explanation: "Lernkarte Cloud-Skalierung & Datenschutz:\n" +
            "- Vertikale Skalierung (Scale Up): Server mit mehr CPU/RAM ausstatten.\n" +
            "- Horizontale Skalierung (Scale Out): Mehr Instanzen des Servers hinzufügen (in der Cloud vollautomatisch möglich).\n" +
            "- Datenschutz-Tipp: Bei sensiblen Daten Verträge abschließen, die eine Datenspeicherung ausschließlich innerhalb der EU zusichern."
    },
    {
        id: 125,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Cloud Computing (LF 2): Erläutere die drei Cloud-Service-Modelle IaaS, PaaS und SaaS und erkläre, inwiefern durch Cloud-Auslagerung Zeiteinsparung, Skalierbarkeit und Kostenreduktion erzielt werden können.",
        musterloesung: "Service-Modelle:\n- IaaS (Infrastructure as a Service): Bereitstellung von roher IT-Infrastruktur (virtuelle Server, Speicher, Netzwerke). Der Kunde verwaltet OS und Software selbst.\n- PaaS (Platform as a Service): Bereitstellung einer Entwicklungs- und Laufzeitumgebung (z.B. für Datenbanken, Web-Apps). OS und Middleware werden vom Provider verwaltet, der Kunde bringt nur seinen Code ein.\n- SaaS (Software as a Service): Bereitstellung fertiger Software über den Webbrowser (z.B. Microsoft 365, Salesforce). Der Provider übernimmt die gesamte Verwaltung.\n\nVorteile der Auslagerung:\n- Zeiteinsparung: Keine zeitaufwendige Wartung, Installation, Patching oder Verkabelung der physischen Infrastruktur.\n- Skalierbarkeit: Schnelles Hinzubuchen oder Kündigen von Ressourcen je nach Auslastung.\n- Kostenreduktion: Wegfall hoher Vorabinvestitionen in Hardware (CAPEX wird zu OPEX). Bezahlt wird nur, was tatsächlich genutzt wird (Pay-per-Use).",
        explanation: "Lernkarte Cloud-Services:\n" +
            "- Es gilt: Je höher die Service-Stufe (IaaS -> PaaS -> SaaS), desto weniger Administrationsaufwand hat der Kunde, desto weniger Flexibilität besitzt er aber auch.\n" +
            "- In der Prüfung wird oft gefragt, wer für das Betriebssystem verantwortlich ist: Bei IaaS der Kunde, bei PaaS/SaaS der Provider."
    },
    {
        id: 126,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe VPN & VLAN (LF 3): Ein VPN verbindet vier Unternehmensstandorte über IPsec. Nenne den VPN-Verbindungstyp sowie den verwendeten IPsec-Modus. Berechne zudem die maximale Anzahl an VLANs in einem Netzwerk auf Basis des IEEE 802.1Q Standard-Tags.",
        musterloesung: "- VPN-Verbindungstyp: Site-to-Site VPN (oder Gateway-to-Gateway VPN / LAN-zu-LAN-Kopplung).\n- IPsec-Verbindungsmodus: Tunnelmodus (Tunnel Mode) - das gesamte ursprüngliche IP-Paket inklusive Header wird verschlüsselt und in ein neues IPsec-Paket verpackt.\n\nVLAN-Berechnung:\n1. Der VLAN-Tag nach IEEE 802.1Q reserviert im Ethernet-Frame exakt 12 Bit für die VLAN-ID (VID).\n2. Die maximale Anzahl an Binärkombinationen mit 12 Bit beträgt: 2^12 = 4.096.\n3. Da die IDs 0 (reserviert) und 4095 (reserviert) nicht genutzt werden, können maximal 4.094 nutzbare VLANs eingerichtet werden.",
        explanation: "Lernkarte VPN & VLAN:\n" +
            "- Site-to-Site VPN: Verbindet ganze Netzwerke dauerhaft über Router/Firewalls. Mitarbeiter greifen ohne eigene VPN-Software direkt auf Ressourcen im anderen Standort zu.\n" +
            "- IPsec Transportmodus vs. Tunnelmodus: Im Transportmodus wird nur die Payload (Nutzdaten) verschlüsselt, nicht der IP-Header. Im Tunnelmodus wird alles verschlüsselt, was maximale Sicherheit bietet.\n" +
            "- VLANs trennen Netzwerke logisch auf Layer 2, um Broadcast-Stürme zu reduzieren und Sicherheitsbereiche abzugrenzen."
    },
    {
        id: 127,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Datensicherung (LF 4): Vergleiche die Vollsicherung mit der differenziellen Sicherung. Erläutere zudem das Backupverfahren 'Klonen' unter Berücksichtigung des benötigten Speichervolumens und den Auswirkungen auf das Archivbit.",
        musterloesung: "Vollsicherung vs. Differenzielle Sicherung:\n- Vollsicherung (Backup): Sichert alle Daten vollständig. Das Archivbit wird danach zurückgesetzt (auf 0 / nicht geändert).\n- Differenzielle Sicherung: Sichert alle Daten, die sich seit der letzten Vollsicherung geändert haben. Das Archivbit wird NICHT zurückgesetzt (bleibt auf 1 / geändert).\n\nBackupverfahren Klonen:\n- Funktion: Erzeugt eine exakte 1:1 Kopie (Image) eines Datenträgers oder Dateisystems im aktuellen Zustand.\n- Speichervolumen: Benötigt sehr viel Speicherplatz (100% des Quellmediums bzw. der belegten Blöcke).\n- Archivbit: Das Klonen hat KEINE Auswirkung auf das Archivbit (es wird weder gelesen noch verändert), da es ein bitgenaues Abbild auf Blockebene ist.",
        explanation: "Lernkarte Backup & Archivbit:\n" +
            "- Das Archivbit (A-Bit) zeigt Windows an, ob eine Datei seit dem letzten Backup geändert wurde (A-Bit = 1 bedeutet: geändert, muss gesichert werden).\n" +
            "- Vollsicherung und inkrementelle Sicherung setzen das A-Bit zurück.\n" +
            "- Differenzielle Sicherung liest das A-Bit, setzt es aber NICHT zurück, weshalb jede tägliche differenzielle Sicherung immer größer wird."
    },
    {
        id: 128,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Archivierung (LF 4): Erläutere die Anforderungen an eine 'revisionssichere Archivierung' und nenne zwei wesentliche Vorteile des Einsatzes von LTO-Magnetbändern mit dem 'Linear Tape File System' (LTFS) laut deinen Unterlagen.",
        musterloesung: "Revisionssichere Archivierung:\nEine Archivierung, die gesetzlichen Vorgaben (wie der GoBD) entspricht und sicherstellt, dass elektronische Dokumente unveränderbar, manipulationssicher, dauerhaft lesbar, vollständig, nachvollziehbar und auffindbar aufbewahrt werden (oft realisiert durch WORM-Speichermedien).\n\nVorteile von LTO & LTFS:\n1. LTO-Bandtechnologie ist extrem kosteneffizient. Die Gesamtbetriebskosten (TCO) liegen über einen 10-Jahres-Zeitraum um ca. 86% niedriger als bei reinen Festplatten-Systemen.\n2. LTFS (Linear Tape File System) ermöglicht es, das Magnetband wie eine normale externe Festplatte per Drag & Drop im Betriebssystem zu nutzen (Dateien direkt auf das Band ziehen/kopieren), ohne dass spezielle Tape-Backup-Software benötigt wird.",
        explanation: "Lernkarte revisionssichere Archivierung:\n" +
            "- Aufbewahrungsfristen: Rechnungen und Handelsbücher müssen laut § 257 HGB 10 Jahre archiviert werden.\n" +
            "- LTO (Linear Tape Open) is ein offener Standard für Magnetbänder. Er bietet auch Hardware-Verschlüsselung und WORM-Unterstützung (Write Once Read Many), was für Revisionssicherheit essenziell ist."
    },
    {
        id: 129,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Datenbanken (LF 5): Nenne vier wesentliche Funktionen eines Datenbank-Management-Systems (DBMS) laut deinen Unterlagen.",
        musterloesung: "1. Datenkonsistenz & Integrität: Gewährleistet korrekte Datenbeziehungen und Constraints (z.B. Fremdschlüssel-Beziehungen).\n2. Mehrbenutzersteuerung (Concurrency Control): Verhindert Datenkonflikte bei gleichzeitigem Zugriff mehrerer Benutzer auf dieselbe Ressource (Sperrmechanismen).\n3. Datensicherheit & Zugriffskontrolle: Zuweisung von Rechten und Rollen (wer darf welche Daten lesen/schreiben).\n4. Transaktionsmanagement (ACID-Prinzip): Stellt sicher, dass Transaktionen entweder ganz oder gar nicht ausgeführt werden.\n5. Datensicherung und Wiederherstellung (Backup & Recovery): Erstellung von Sicherungen und Wiederherstellung nach Abstürzen.\n6. Datenbeschreibung (Data Dictionary): Verwaltung der Metadaten über die Tabellenstruktur.",
        explanation: "Lernkarte DBMS-Funktionen:\n" +
            "- Das DBMS ist die Software (z. B. MySQL, PostgreSQL, Oracle), die den Zugriff auf die physischen Datenbankdateien regelt.\n" +
            "- Wichtiges IHK-Prinzip: **ACID** (Atomicity, Consistency, Isolation, Durability) beschreibt die Eigenschaften sicherer Transaktionen."
    },
    {
        id: 130,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Datenbanken (LF 5): Nenne zwei Vorteile und zwei Nachteile einer relationalen Datenbank gegenüber anderen Datenhaltungssystemen (wie NoSQL-Datenbanken) laut deinen Unterlagen.",
        musterloesung: "Vorteile:\n1. Hohe Datenkonsistenz & Integrität: Fehlerhafte Einträge oder verwaiste Datensätze werden durch Constraints (z. B. referenzielle Integrität) verhindert.\n2. Redundanzfreiheit: Durch den Prozess der Normalisierung werden doppelte Datenbestände vermieden, was Speicherplatz spart und Anomalien verhindert.\n3. Standardisierte Abfragesprache: Nutzung der standardisierten und weit verbreiteten Sprache SQL.\n\nNachteile:\n1. Schlechte horizontale Skalierbarkeit: Das Aufteilen einer relationalen Datenbank über viele Server (Sharding) ist aufgrund komplexer Tabellenbeziehungen (Joins) extrem schwierig.\n2. Starres Tabellenschema: Jede Änderung an der Datenstruktur (z. B. Hinzufügen einer Spalte) erfordert eine Anpassung des Datenbankschemas, was im laufenden Betrieb komplex ist.\n3. Performance-Verlust bei großen Datenmengen: Komplexe Verknüpfungen (Tabellen-Joins) erfordern bei Millionen von Datensätzen einen hohen Rechen- und RAM-Aufwand.",
        explanation: "Lernkarte relationale Datenbanken:\n" +
            "- Relationale Datenbanken speichern Daten in Tabellen (Zeilen und Spalten), die über Primär- und Fremdschlüssel miteinander verknüpft sind.\n" +
            "- Für unstrukturierte, extrem große oder sich ständig ändernde Datenstrukturen werden heute häufig NoSQL-Datenbanken (z. B. Dokumentendatenbanken wie MongoDB) bevorzugt."
    },
    {
        id: 131,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe SQL (LF 5): Erläutere den Unterschied zwischen den SQL-Kategorien DDL (Data Definition Language) und DML (Data Manipulation Language) und nenne zu jeder Kategorie drei typische Befehle.",
        musterloesung: "- DDL (Data Definition Language - Daten-Definitions-Sprache):\n  * Beschreibung: Dient zur Definition und Änderung der Datenbankstruktur (Schema, Tabellen, Indizes).\n  * Befehle: CREATE (Tabellen erstellen), ALTER (Tabellenstruktur ändern), DROP (Tabellen/Datenbank löschen), TRUNCATE (Tabelle leeren, Struktur behalten).\n\n- DML (Data Manipulation Language - Daten-Manipulations-Sprache):\n  * Beschreibung: Dient zur Verwaltung und Abfrage der eigentlichen Daten innerhalb der Tabellen.\n  * Befehle: SELECT (Daten abfragen), INSERT (Daten hinzufügen), UPDATE (Daten ändern), DELETE (Daten löschen).",
        explanation: "Lernkarte SQL-Kategorien:\n" +
            "- Neben DDL und DML gibt es auch noch DCL (Data Control Language) für die Rechtevergabe (GRANT, REVOKE) und TCL (Transaction Control Language) für die Transaktionssteuerung (COMMIT, ROLLBACK).\n" +
            "- Merkregel: DDL ändert die Struktur (das Gerüst), DML ändert die Daten (den Inhalt)."
    },
    {
        id: 132,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Systeme (LF 2): Erläutere die Funktion und den Einsatzzweck der folgenden drei IT-Komponenten: Core-Switch, Domain Controller (DC) und Demilitarisierte Zone (DMZ).",
        musterloesung: "- Core-Switch: Der zentrale Backbone-Switch im Netzwerk. Er verbindet verschiedene Subnetze und Segmente (z.B. Etagen-Switche) miteinander und leitet Datenströme mit extrem hoher Bandbreite und minimaler Latenz weiter.\n- Domain Controller (DC): Ein Server in Windows-Netzwerken, der die zentrale Datenbank (Active Directory) verwaltet. Er dient der Authentifizierung und Autorisierung von Benutzern, Computern und Gruppenrechten im gesamten Netz.\n- Demilitarisierte Zone (DMZ): Ein separates, geschütztes Netzwerksegment zwischen dem internen LAN und dem unsicheren Internet (WAN). Es enthält öffentlich erreichbare Server (z. B. Webserver, E-Mail-Server) und wird durch Firewalls nach außen und innen abgesichert.",
        explanation: "Lernkarte IT-Begriffe:\n" +
            "- Core-Switch: Bildet den Kern des dreistufigen Netzwerk-Designs (Core, Distribution, Access).\n" +
            "- Domain Controller: Nutzt Protokolle wie Kerberos und LDAP für die Benutzeranmeldung.\n" +
            "- DMZ: Falls ein Server in der DMZ gehackt wird, verhindert die innere Firewall, dass der Angreifer ins interne LAN gelangt."
    },
    {
        id: 133,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Sicherheit (LF 4): Erläutere die drei klassischen Schutzziele der Informationssicherheit (CIA-Triade): Vertraulichkeit, Integrität und Verfügbarkeit.",
        musterloesung: "1. Vertraulichkeit (Confidentiality): Daten und Informationen dürfen nur von Personen gelesen oder modifiziert werden, die dafür eine Autorisierung besitzen (Schutz vor unbefugtem Zugriff).\n2. Integrität (Integrity): Die Daten müssen korrekt, vollständig und unverändert sein. Manipulationen oder Übertragungsfehler müssen ausgeschlossen oder nachweisbar sein (Schutz vor unbefugter Änderung).\n3. Verfügbarkeit (Availability): IT-Systeme, Dienste und Daten müssen für berechtigte Benutzer zum geplanten Zeitpunkt nutzbar und funktionsfähig sein (Schutz vor systemweiten Ausfällen).",
        explanation: "Lernkarte Schutzziele:\n" +
            "- Vertraulichkeit wird z. B. durch Verschlüsselung (AES) und Passwörter geschützt.\n" +
            "- Integrität wird z. B. durch Hash-Prüfsummen (SHA-256) oder digitale Signaturen gewährleistet.\n" +
            "- Verfügbarkeit wird z. B. durch redundante Hardware (RAID, USV, Backup-Leitungen) gesichert."
    },
    {
        id: 134,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Hardware (LF 2): Nenne die Bezeichnungen für die Grafikschnittstellen VGA, DVI, HDMI und DisplayPort und vergleiche kurz ihre Signalübertragungsarten (analog vs. digital) sowie Audiofähigkeiten.",
        musterloesung: "- VGA (Video Graphics Array): Analoge Bildübertragung, keine Audioübertragung. Veralteter Standard.\n- DVI (Digital Visual Interface): Überträgt primär digitale Bildsignale (einige Varianten wie DVI-I auch analog), standardmäßig keine Audioübertragung.\n- HDMI (High-Definition Multimedia Interface): Digitale Bild- und Audioübertragung. Weit verbreitet im Consumer-Bereich (TV, Konsolen).\n- DisplayPort (DP): Digitale Bild- und Audioübertragung. Standard im IT- und PC-Bereich (unterstützt hohe Bildwiederholraten und Daisy-Chaining).",
        explanation: "Lernkarte Grafikschnittstellen:\n" +
            "- HDMI und DisplayPort übertragen beide HD-Video und Mehrkanal-Ton über ein einziges Kabel.\n" +
            "- DisplayPort besitzt Verriegelungshaken am Stecker, die ein versehentliches Herausrutschen verhindern.\n" +
            "- VGA-Kabel sind anfällig für elektromagnetische Störungen, da das Signal analog übertragen wird."
    },
    {
        id: 135,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Für eine IT-Anschaffung über 240.000 EUR wird ein Ratendarlehen mit 5% p.a. Zinsen auf 4 Jahre bei jährlicher Tilgungsrate (60.000 EUR Tilgung pro Jahr) mit einem Leasingangebot (monatlich 6.000 EUR, Laufzeit 4 Jahre, Restwertübernahme 16.000 EUR) verglichen. Ermittle rechnerisch die Gesamtkosten beider Alternativen und gib an, welche wirtschaftlicher ist.",
        musterloesung: "1. Berechnung Finanzierung (Ratendarlehen mit jährlicher Zinszahlung auf die Restschuld):\n- Jahr 1: Restschuld = 240.000 EUR. Zinsen (5% von 240.000) = 12.000 EUR. Tilgung = 60.000 EUR. Rate = 72.000 EUR.\n- Jahr 2: Restschuld = 180.000 EUR. Zinsen (5% von 180.000) = 9.000 EUR. Tilgung = 60.000 EUR. Rate = 69.000 EUR.\n- Jahr 3: Restschuld = 120.000 EUR. Zinsen (5% von 120.000) = 6.000 EUR. Tilgung = 60.000 EUR. Rate = 66.000 EUR.\n- Jahr 4: Restschuld = 60.000 EUR. Zinsen (5% von 60.000) = 3.000 EUR. Tilgung = 60.000 EUR. Rate = 63.000 EUR.\n-> Gesamte Zinsen = 12.000 + 9.000 + 6.000 + 3.000 = 30.000 EUR.\n-> Gesamtkosten Finanzierung = 240.000 (Tilgung) + 30.000 (Zinsen) = 270.000 EUR.\n\n2. Berechnung Leasing:\n- Leasingraten über 48 Monate (4 Jahre * 12): 48 * 6.000 EUR = 288.000 EUR.\n- Restwertübernahme = 16.000 EUR.\n-> Gesamtkosten Leasing = 288.000 + 16.000 = 304.000 EUR.\n\nFazit: Die Finanzierung über das Ratendarlehen (270.000 EUR) ist wirtschaftlicher als das Leasing (304.000 EUR). Die Einsparung beträgt 34.000 EUR (ca. 11,2% Ersparnis).",
        explanation: "Lernkarte Zins & Tilgung:\n" +
            "- Beim Ratendarlehen (Abzahlungsdarlehen) bleibt die Tilgungsrate konstant, während die Zinsen jährlich auf die schrumpfende Restschuld berechnet werden. Dadurch sinkt die jährliche Kreditrate (Annuität) kontinuierlich.\n" +
            "- Leasing hat den steuerlichen Vorteil, dass die Raten sofort als Betriebsausgaben abgesetzt werden können, ist aber in der Summe oft teurer als ein Bankkredit."
    },
    {
        id: 136,
        theme: "lf1",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Rechtsformen (LF 1): Welche Aussage zur Haftung bei einer GmbH und einer Offenen Handelsgesellschaft (OHG) laut deinem Westermann-Buch ist korrekt?",
        options: [
            "Bei beiden haftet der Gesellschafter unbeschränkt auch mit seinem Privatvermögen.",
            "Bei der GmbH haftet nur das Gesellschaftsvermögen, bei der OHG haften alle Gesellschafter unbeschränkt auch mit ihrem Privatvermögen.",
            "Bei der OHG haftet nur das Gesellschaftsvermögen, bei der GmbH haften alle Gesellschafter unbeschränkt.",
            "Bei beiden haftet der Gesellschafter nur mit seiner geleisteten Kapitaleinlage."
        ],
        correctAnswer: 1,
        explanation: "Lernkarte Rechtsformen & Haftung:\n" +
            "- GmbH (Gesellschaft mit beschränkter Haftung): Kapitalgesellschaft. Haftung ist auf das Gesellschaftsvermögen (mind. 25.000 € Stammkapital) beschränkt.\n" +
            "- OHG (Offene Handelsgesellschaft): Personengesellschaft. Alle Gesellschafter haften unbeschränkt, persönlich, direkt und solidarisch (einer für alle, alle für einen) auch mit ihrem gesamten Privatvermögen."
    },
    {
        id: 137,
        theme: "lf1",
        type: "open-text",
        question: "Prüfungsaufgabe Betriebsorganisation (LF 1): Nenne den Unterschied zwischen einem Einliniensystem und einem Stabliniensystem laut deiner Westermann-Lernfelder und erläutere den Begriff 'Stabsstelle' anhand eines Beispiels.",
        musterloesung: "- Einliniensystem: Jede Stelle hat genau einen direkten Vorgesetzten (Prinzip der Einheit der Auftragserteilung). Dienstwege sind eindeutig, können aber lang und schwerfällig sein.\n- Stabliniensystem: Ist eine Erweiterung des Einliniensystems. Linienstellen werden durch Stabsstellen unterstützt.\n- Stabsstelle: Eine Stelle ohne eigene Weisungsbefugnis. Sie hat beratende, unterstützende oder vorbereitende Aufgaben für die Leitungsebene (z. B. Assistenz der Geschäftsführung, Rechtsabteilung, IT-Sicherheitsbeauftragter).",
        explanation: "Lernkarte Aufbauorganisation:\n" +
            "- Vorteil Einliniensystem: Klare Kompetenzen und Verantwortlichkeiten.\n" +
            "- Vorteil Stabliniensystem: Entlastung der Führungskräfte durch Spezialisten (Stäbe), ohne das Prinzip der eindeutigen Dienstwege aufzugeben."
    },
    {
        id: 138,
        theme: "lf1",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Marktformen (LF 1): Welcher Marktform entspricht eine Situation, in der es viele Nachfrager (Kunden), aber nur sehr wenige Anbieter (Unternehmen) gibt (z. B. auf dem deutschen Mobilfunkmarkt) laut deinem Westermann-Lehrbuch?",
        options: [
            "Monopol",
            "Angebotsoligopol",
            "Polypol",
            "Nachfrageoligopol (Oligopson)"
        ],
        correctAnswer: 1,
        explanation: "Lernkarte Marktformen:\n" +
            "- Monopol: Nur ein Anbieter (z. B. staatliches Postmonopol früher), viele Nachfrager.\n" +
            "- Oligopol: Wenige Anbieter, viele Nachfrager (Angebotsoligopol) oder viele Anbieter, wenige Nachfrager (Nachfrageoligopol).\n" +
            "- Polypol: Viele Anbieter, viele Nachfrager (vollständige Konkurrenz, z. B. auf dem Gemüsemarkt)."
    },
    {
        id: 139,
        theme: "lf1",
        type: "open-text",
        question: "Prüfungsaufgabe Ausbildung (LF 1): Nenne drei wesentliche gesetzliche Pflichten des Ausbildenden (Betriebs) gegenüber dem Auszubildenden laut Berufsbildungsgesetz (BBiG).",
        musterloesung: "1. Ausbildungspflicht: Der Ausbildende muss dem Azubi die Fertigkeiten und Kenntnisse vermitteln, die zum Erreichen des Ausbildungsziels erforderlich sind.\n2. Bereitstellung von Ausbildungsmitteln: Werkzeuge, Materialien und Unterlagen (Berichtsheft) müssen kostenlos zur Verfügung gestellt werden.\n3. Freistellungspflicht: Der Azubi muss für die Berufsschule, Prüfungen und Ausbildungsmaßnahmen freigestellt werden (ohne Entgeltausfall).\n4. Vergütungspflicht: Zahlung einer angemessenen Ausbildungsvergütung.\n5. Fürsorgepflicht: Schutz vor Gefahren für Leben und Gesundheit am Arbeitsplatz.\n6. Zeugnispflicht: Ausstellung eines schriftlichen Ausbildungszeugnisses am Ende der Ausbildung.",
        explanation: "Lernkarte Pflichten des Ausbilders (§ 14 BBiG):\n" +
            "- Diese Pflichten stehen den Pflichten des Auszubildenden (§ 13 BBiG, z. B. Lernpflicht, Sorgfaltspflicht, Gehorsamspflicht, Berufsschulpflicht) gegenüber."
    },
    {
        id: 140,
        theme: "lf1",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Mitbestimmung (LF 1): Ab welcher Mitarbeiterzahl kann in einem Betrieb ein Betriebsrat nach dem Betriebsverfassungsgesetz (BetrVG) gewählt werden laut deinem Westermann-Lehrbuch?",
        options: [
            "Ab mindestens 5 ständigen wahlberechtigten Arbeitnehmern, von denen 3 wählbar sein müssen.",
            "Ab mindestens 20 wahlberechtigten Arbeitnehmern.",
            "Ab mindestens 100 wahlberechtigten Arbeitnehmern.",
            "In jedem Betrieb, unabhängig von der Mitarbeiterzahl."
        ],
        correctAnswer: 0,
        explanation: "Lernkarte Betriebsratswahl (§ 1 BetrVG):\n" +
            "- Wahlberechtigt (aktives Wahlrecht): Alle Arbeitnehmer des Betriebs, die das 18. Lebensjahr vollendet haben.\n" +
            "- Wählbar (passives Wahlrecht): Alle wahlberechtigten Arbeitnehmer, die dem Betrieb seit mindestens 6 Monaten angehören."
    },
    {
        id: 141,
        theme: "lf3",
        type: "multiple-choice",
        question: "Prüfungsaufgabe VPN-Protokolle (LF 3): Welche Aussage bezüglich der beiden IPsec-Subprotokolle AH (Authentication Header) und ESP (Encapsulating Security Payload) ist für die IHK-Prüfung korrekt?",
        options: [
            "Sowohl AH als auch ESP verschlüsseln den gesamten Datenbereich (Payload) des IP-Pakets.",
            "AH bietet Datenintegrität und Authentizität, verschlüsselt jedoch keine Daten. ESP bietet zusätzlich die Verschlüsselung der Daten (Vertraulichkeit).",
            "ESP dient ausschließlich der Vergabe von IP-Adressen im VPN-Tunnel, während AH den Verbindungsaufbau regelt.",
            "AH verschlüsselt den IP-Header, während ESP ausschließlich den Nutzdatenbereich (Payload) unverschlüsselt überträgt."
        ],
        correctAnswer: 1,
        explanation: "Lernkarte IPsec-Protokolle (AH vs. ESP):\n" +
            "- AH (Authentication Header): Gewährleistet Datenintegrität und Authentizität. Wichtig: **AH verschlüsselt die Daten NICHT!** (Keine Vertraulichkeit).\n" +
            "- ESP (Encapsulating Security Payload): Gewährleistet Integrität, Authentizität UND verschlüsselt die Nutzdaten (bietet somit Vertraulichkeit).\n" +
            "- In der Praxis wird fast immer ESP verwendet, um eine sichere Übertragung zu gewährleisten."
    },
    {
        id: 142,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe NAT & PAT (LF 3): Erkläre den Sinn und Zweck von Network Address Translation (NAT) und unterscheide kurz die drei Varianten: statisches NAT, dynamisches NAT und Port Address Translation (PAT) / Masquerading.",
        musterloesung: "- Sinn und Zweck: NAT ermöglicht die Kommunikation zwischen privaten Netzwerken (LAN) und öffentlichen Netzwerken (Internet). Es übersetzt private IP-Adressen (RFC 1918) in öffentliche IP-Adressen und schont dadurch den begrenzten öffentlichen IPv4-Adressraum.\n- Statisches NAT (1:1): Weist einer festen privaten IP-Adresse dauerhaft eine feste öffentliche IP-Adresse zu (wichtig für interne Server, die von außen über das Internet erreichbar sein müssen).\n- Dynamisches NAT (N:M): Weist einer privaten IP-Adresse temporär eine freie öffentliche IP-Adresse aus einem Pool von verfügbaren öffentlichen IPs zu (für die Dauer einer Sitzung).\n- Port Address Translation (PAT) / NAPT / Masquerading (N:1): Übersetzt viele private IP-Adressen in eine einzige öffentliche IP-Adresse, indem für jede Verbindung zusätzlich eine eindeutige Portnummer vergeben wird (Standard bei Heim- und Firmenroutern).",
        explanation: "Lernkarte NAT-Verfahren:\n" +
            "- Private IP-Adressbereiche (nach RFC 1918) werden im Internet nicht geroutet und müssen zwingend übersetzt werden.\n" +
            "- Private Bereiche: 10.0.0.0/8, 172.16.0.0/12, und 192.168.0.0/16.\n" +
            "- PAT (Port Address Translation) ist das am häufigsten eingesetzte Verfahren, da es Tausenden von Geräten im LAN ermöglicht, über eine einzige öffentliche IP-Adresse ins Internet zu gehen."
    },
    {
        id: 143,
        theme: "lf3",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Speichersysteme (LF 3): Welcher grundlegende Unterschied besteht bezüglich des Datenzugriffsverfahrens und der verwendeten Protokolle zwischen einem NAS (Network Attached Storage) und einem SAN (Storage Area Network)?",
        options: [
            "NAS greift blockbasiert über Fibre Channel zu; SAN greift dateibasiert über SMB/CIFS oder NFS zu.",
            "NAS greift dateibasiert über SMB/CIFS oder NFS zu; SAN greift blockbasiert über Fibre Channel oder iSCSI zu.",
            "Beide Speichertypen greifen ausschließlich dateibasiert über FTP oder HTTP auf die Festplatten zu.",
            "NAS wird direkt als lokale Festplatte per SATA angebunden; SAN wird nur über WLAN per FTP angesprochen."
        ],
        correctAnswer: 1,
        explanation: `Lernkarte Datenzugriff NAS vs. SAN:
- NAS (Network Attached Storage): Bietet dateibasierten Zugriff (File Level). Dateien werden über klassische Dateishare-Protokolle wie SMB (Windows) oder NFS (Linux) im LAN übertragen.
- SAN (Storage Area Network): Bietet blockbasierten Zugriff (Block Level). Der Server sieht den Speicher wie eine eingebaute lokale Festplatte und formatiert ihn mit einem eigenen Dateisystem. Übertragen wird über Fibre Channel oder iSCSI in einem separaten Hochgeschwindigkeitsnetzwerk.`
    },
    {
        id: 144,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe SAN (LF 3): Nenne drei wesentliche Vorteile eines SAN (Storage Area Network) gegenüber lokalen Einzelspeichern (Direct Attached Storage / DAS) sowie die zwei am Markt verbreiteten Haupt-Übertragungstechnologien.",
        musterloesung: `Vorteile (drei nennen):
1. Zentralisierte Verwaltung: Der gesamte Speicherplatz wird an einer Stelle verwaltet und kann flexibel virtuellen Servern zugeordnet werden.
2. Hohe Ausfallsicherheit & Redundanz: Durch redundante Pfade (Multipathing) und zentrale RAID-Systeme sind Daten optimal geschützt.
3. LAN-Entlastung: Das SAN läuft in einem eigenen physisch getrennten Netz parallel zum LAN, wodurch der Speicherverkehr das normale Anwendernetzwerk nicht belastet.
4. Betriebssystem-Unabhängigkeit: Verschiedene Server mit unterschiedlichen OS können sich denselben Speicherpool teilen.

Haupt-Technologien:
1. Fibre Channel (FC): Spezielles optisches Hochgeschwindigkeitsnetzwerk, benötigt eigene Host-Bus-Adapter (HBA) und FC-Switche.
2. iSCSI (Internet SCSI): Transportiert SCSI-Speicherbefehle über das normale Ethernet-Netzwerk (günstiger, da Standard-Netzwerkkomponenten genutzt werden).`,
        explanation: `Lernkarte SAN-Architektur:
- Das SAN dient der Anbindung von Festplatten-Arrays an Virtualisierungs-Cluster (z.B. VMware ESXi) oder große Datenbankserver, bei denen maximale Performance und Flexibilität gefragt sind.`
    },
    {
        id: 145,
        theme: "lf3",
        type: "multiple-choice",
        question: "Prüfungsaufgabe Netzwerkdiagnose (LF 3): Welches Kommandozeilen-Tool wird zur Abfrage von Nameservern verwendet und wie lautet die exakte Syntax in der Windows-Eingabeaufforderung, um ein Reverse Lookup für die IP-Adresse 8.8.8.8 durchzuführen?",
        options: [
            "ping -a 8.8.8.8",
            "nslookup 8.8.8.8",
            "tracert 8.8.8.8",
            "ipconfig /lookup 8.8.8.8"
        ],
        correctAnswer: 1,
        explanation: `Lernkarte Nslookup:
- nslookup (Name System Lookup) dient der DNS-Diagnose.
- Vorwärtsauflösung (Forward Lookup): Auflösung eines Namens in eine IP (z. B. nslookup www.heise.de).
- Rückwärtsauflösung (Reverse Lookup): Auflösung einer IP in einen Namen (z. B. nslookup 8.8.8.8).
- ping -a löst zwar auch Adressen auf, ist aber ein ICMP-Echotest und kein dediziertes Nameserver-Abfragetool.`
    },
    {
        id: 146,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe USV (LF 2): Erläutere die drei Klassen von unterbrechungsfreien Stromversorgungen (USV) nach der Norm DIN EN 62040-3 (VFD, VI und VFI) bezüglich ihrer Funktionsweise und Umschaltzeiten bei einem Netzausfall.",
        musterloesung: `1. Klasse 3: VFD (Voltage and Frequency Dependent - Offline-/Standby-USV):
- Funktionsweise: Leitet den Netzstrom im Normalbetrieb direkt an die Verbraucher weiter und lädt nebenbei den Akku. Bei Stromausfall schaltet sie auf Akkubetrieb um.
- Umschaltzeit: Bis zu 10 Millisekunden.
- Schutz: Nur vor Stromausfall und kurzen Spannungsspitzen.

2. Klasse 2: VI (Voltage Independent - Line-Interactive-USV):
- Funktionsweise: Regelt Spannungsschwankungen über einen eingebauten Transformator (AVR) ständig aus. Frequenz wird direkt übernommen. Schaltet bei Ausfall auf Akku.
- Umschaltzeit: Ca. 2 bis 4 Millisekunden.
- Schutz: Vor Stromausfall, Unter-/Überspannungen.

3. Klasse 1: VFI (Voltage and Frequency Independent - Online-/Doppelwandler-USV):
- Funktionsweise: Der Eingangsstrom wird permanent in Gleichstrom und direkt wieder in sauberen Wechselstrom gewandelt (Doppelwandlung). Die Geräte laufen dauerhaft über den Wechselrichter.
- Umschaltzeit: 0 Millisekunden (unterbrechungsfrei!).
- Schutz: Vollständiger Schutz vor allen Netzstörungen (Frequenzschwankungen, Oberschwingungen etc.). Höchster Schutz, aber teurer und geringerer Wirkungsgrad.`,
        explanation: `Lernkarte USV-Klassen:
- VFI SS 111 stellt die höchste Klassifizierung dar (Spannung und Frequenz unabhängig, Sinus-Ausgangsform in jedem Zustand, 0 ms Umschaltzeit).
- Kritische Infrastruktur wie Server und Core-Switche werden grundsätzlich mit Klasse-1-USV (VFI) gesichert.`
    },
    {
        id: 147,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Sicherheit (LF 4): Erläutere kurz die Funktionsweise und Gefahren der folgenden fünf Bedrohungen: Trojaner, Ransomware, Phishing, DDoS-Angriff und Brute-Force-Angriff.",
        musterloesung: `- Trojaner: Schadsoftware, die sich als nützliche Anwendung tarnt (z. B. nützliches Tool oder Anhang). Sie erfordert eine Benutzerinteraktion zum Starten und öffnet Angreifern Hintertüren (Backdoors) im System.
- Ransomware: Verschlüsselungstrojaner, die das gesamte System oder wichtige Benutzerdaten verschlüsseln und den Zugriff sperren. Die Angreifer erpressen das Opfer und fordern Lösegeld (Ransom) für den Entschlüsselungsschlüssel.
- Phishing: Methode, bei der Angreifer über gefälschte E-Mails, SMS oder Webseiten (z. B. täuschend echte Bankportale) versuchen, sensible Daten wie Passwörter, PINs oder Kreditkartennummern abzugreifen.
- Distributed Denial of Service (DDoS): Überlastungsangriff, bei dem ein Server oder Dienst gezielt mit einer riesigen Menge an Anfragen aus einem Botnetz (viele infizierte Rechner gleichzeitig) geflutet wird, bis er abstürzt oder unbrauchbar wird.
- Brute-Force-Angriff: Eine automatisierte Passwort-Knackmethode, bei der eine Software systematisch alle möglichen Zeichenkombinationen (oder Wörterbuch-Einträge) durchprobiert, bis das richtige Passwort gefunden wurde.`,
        explanation: `Lernkarte Malware & Angriffe:
- Gegen Phishing hilft Mitarbeiterschulung und 2-Faktor-Authentisierung (2FA).
- Gegen Ransomware sind regelmäßige Offline-Backups (z. B. auf Tapes) the beste Schutz.
- Gegen Brute-Force helfen Kontosperrungen nach Falscheingaben und komplexe Passwortrichtlinien.`
    },
    {
        id: 148,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Virtualisierung (LF 2): Nenne jeweils zwei Vorteile der Servervirtualisierung sowie der Anwendungsvirtualisierung und erläutere kurz den Begriff 'Disaster Recovery' in diesem Kontext.",
        musterloesung: `Vorteile Servervirtualisierung (zwei nennen):
1. Bessere Hardwareauslastung: Mehrere virtuelle Server teilen sich die Ressourcen eines leistungsstarken physischen Hosts (Konsolidierung).
2. Kosteneinsparung: Weniger physische Server bedeuten weniger Anschaffungskosten, geringeren Stromverbrauch und weniger Abwärme (Kühlung).
3. Schnelle Bereitstellung: Neue Server können in Minuten als VM aufgesetzt werden.
4. Isolation: Fehler auf einer VM betreffen nicht die anderen VMs auf demselben Host.

Vorteile Anwendungsvirtualisierung (zwei nennen):
1. Keine lokale Installation: Anwendungen laufen in einer isolierten Laufzeitumgebung (Sandbox) auf dem Client, ohne tief in das lokale OS einzugreifen.
2. Konfliktfreiheit: Es können verschiedene Versionen derselben App (z.B. Office) gleichzeitig auf einem PC betrieben werden.
3. Zentrale Verwaltung: Updates müssen nur einmal auf dem Server eingepflegt werden.

Disaster Recovery:
- Die schnelle Wiederherstellung der IT-Infrastruktur nach einem schweren Ausfall (z. B. Hardwaredefekt). Da VMs als einfache Dateien (z. B. vmdk) vorliegen, können sie extrem schnell über Backups oder Snapshots auf einer völlig anderen physischen Hardware wieder in Betrieb genommen werden.`,
        explanation: `Lernkarte Virtualisierung:
- Ein Hypervisor steuert die Verteilung der physischen Ressourcen an die Gast-Betriebssysteme.
- Disaster Recovery Pläne definieren den RTO (Recovery Time Objective - wie lange darf der Ausfall dauern) und RPO (Recovery Point Objective - wie viel Datenverlust ist tolerierbar).`
    },
    {
        id: 149,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Speicherplatzberechnung Video (LF 2): Für eine Marketingkampagne soll ein unkomprimiertes 4K-Werbevideo auf dem Server abgelegt werden. Das Video hat folgende Eigenschaften: Auflösung 3840 x 2160 Pixel, Farbtiefe 24 Bit, Dauer 6 Minuten, Bildfrequenz 60 FPS. Berechne den benötigten Speicherbedarf in vollen GiB (Gibibyte). Der Rechenweg ist anzugeben.",
        musterloesung: `Rechenweg:
1. Pixel pro Frame berechnen:
   3.840 * 2.160 = 8.294.400 Pixel
2. Datenmenge pro Frame in Byte:
   8.294.400 Pixel * (24 Bit / 8) = 24.883.200 Bytes (bzw. ca. 24.88 MB)
3. Datenmenge pro Sekunde (bei 60 FPS):
   24.883.200 Bytes/Frame * 60 Frames/Sekunde = 1.492.992.000 Bytes/Sekunde
4. Gesamtdauer in Sekunden:
   6 Minuten * 60 Sekunden = 360 Sekunden
5. Gesamtgröße in Bytes:
   1.492.992.000 Bytes/Sekunde * 360 Sekunden = 537.477.120.000 Bytes
6. Umrechnung in GiB (Teilung durch 1024^3 bzw. 1.073.741.824):
   537.477.120.000 Bytes / 1.073.741.824 = 500,561... GiB

Ergebnis:
Der benötigte Speicherplatz beträgt ca. 500,56 GiB (bzw. 501 volle GiB).`,
        explanation: `Lernkarte Speicherberechnung:
- Achte in IHK-Prüfungen genau auf die gefragte Einheit! Einheiten mit 'i' (GiB, MiB) rechnen mit dem Faktor 1024 (binär), während SI-Einheiten (GB, MB) mit dem Faktor 1000 (dezimal) rechnen.
- Formel: Gesamtgröße = Breite * Höhe * (Farbtiefe in Byte) * FPS * Zeit in Sekunden.`
    },
    {
        id: 150,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Speicherplatzberechnung Kamera (LF 2): Eine Überwachungskamera im Serverraum speichert jede Minute genau ein Standbild. Jedes Bild hat das Format 800 x 600 Pixel, eine Farbtiefe von 32 Bit und wird mit einem Kompressionsfaktor von 1:10 (Faktor 0,1) abgesichert. Berechne die Anzahl der Bilder pro Woche und den dafür erforderlichen Speicherplatz in vollen GiB (Gibibyte).",
        musterloesung: `Rechenweg:
1. Unkomprimierte Größe eines Bildes in Byte:
   800 * 600 Pixel * (32 Bit / 8) = 800 * 600 * 4 Byte = 1.920.000 Bytes
2. Komprimierte Größe des Bildes (Kompression 1:10):
   1.920.000 Bytes / 10 = 192.000 Bytes
3. Anzahl der Bilder pro Woche berechnen:
   60 Bilder/Stunde * 24 Stunden/Tag * 7 Tage/Woche = 10.080 Bilder pro Woche
4. Gesamtgröße in Bytes pro Woche:
   10.080 Bilder * 192.000 Bytes/Bild = 1.935.360.000 Bytes
5. Umrechnung in GiB (Teilung durch 1024^3 bzw. 1.073.741.824):
   1.935.360.000 Bytes / 1.073.741.824 = 1,802... GiB

Ergebnis:
Es werden wöchentlich 10.080 Bilder gespeichert. Der Speicherbedarf beträgt ca. 1,80 GiB (bzw. 2 volle GiB).`,
        explanation: `Lernkarte Kameraspeicher:
- Bei einer Farbtiefe von 32 Bit wird neben den RGB-Farben (je 8 Bit für Rot, Grün, Blau) zusätzlich ein Alpha-Kanal (8 Bit für Transparenz) übertragen.
- Kompression 1:10 bedeutet, dass die Datei auf ein Zehntel ihrer Originalgröße geschrumpft wird.`
    },
    {
        id: 151,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe UML-Beziehungen (LF 5): Erläutere den Unterschied zwischen den UML-Klassendiagramm-Beziehungen Assoziation, Aggregation und Komposition und nenne jeweils das grafische Verbindungselement/Symbol laut Standard.",
        musterloesung: `- Assoziation:
  * Definition: Eine einfache, neutrale Beziehung zwischen zwei unabhängigen Klassen (z. B. Kunde nutzt Auto).
  * Symbol: Eine einfache Verbindungslinie (eventuell mit Richtungspfeil).

- Aggregation:
  * Definition: Eine 'Besteht-aus'-Beziehung, bei der die Teile zwar Teil des Ganzen sind, aber unabhängig davon existieren und überleben können (Schwache Beziehung, z. B. Bibliothek und Buch. Wenn die Bibliothek schließt, existieren die Bücher weiter).
  * Symbol: Eine Linie mit einer leeren (weißen) Raute am Ende der übergeordneten Klasse.

- Komposition:
  * Definition: Eine existenzabhängige 'Besteht-aus'-Beziehung, bei der die Teile zwingend an das Ganze gekoppelt sind und ohne dieses nicht existieren können (Starke Beziehung, z. B. Gebäude und Raum. Wird das Gebäude abgerissen, verschwinden auch die Räume).
  * Symbol: Eine Linie mit einer ausgefüllten (schwarzen) Raute am Ende der übergeordneten Klasse.`,
        explanation: `Lernkarte UML-Beziehungen:
- Die Multiplizitäten (Kardinalitäten) an den Beziehungsenden geben an, wie viele Instanzen der einen Klasse mit wie vielen Instanzen der anderen Klasse verknüpft sein können (z.B. 1..* oder 0..1).`
    },
    {
        id: 152,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe RAID-Kapazitätsberechnung (LF 2): Ein Server soll mit vier baugleichen Festplatten mit jeweils 6 TB Speicherkapazität ausgestattet werden. Berechne die jeweils nutzbare Netto-Speicherkapazität des Verbunds für die folgenden RAID-Konfigurationen: RAID 0, RAID 1, RAID 5 und RAID 10. Der Rechenweg ist stichwortartig anzugeben.",
        musterloesung: `Berechnung bei 4 Festplatten à 6 TB (Gesamtkapazität brutto = 24 TB):

- RAID 0 (Striping - keine Redundanz):
  * Formel/Erklärung: Alle Platten werden addiert. Netto-Kapazität = N * Kapazität.
  * Rechnung: 4 * 6 TB = 24 TB.

- RAID 1 (Spiegelung - volle Redundanz):
  * Formel/Erklärung: Daten werden auf alle Platten gespiegelt. Netto-Kapazität = Kapazität einer einzelnen Platte.
  * Rechnung: 1 * 6 TB = 6 TB.

- RAID 5 (Parity - Fehlertoleranz von 1 Platte):
  * Formel/Erklärung: Die Kapazität einer Platte wird für Paritätsdaten abgezogen. Netto-Kapazität = (N - 1) * Kapazität.
  * Rechnung: (4 - 1) * 6 TB = 3 * 6 TB = 18 TB.

- RAID 10 (Striping von Spiegelsets - Fehlertoleranz von bis zu 2 Platten):
  * Formel/Erklärung: Die Hälfte der Platten wird zur Spiegelung genutzt. Netto-Kapazität = (N / 2) * Kapazität.
  * Rechnung: (4 / 2) * 6 TB = 2 * 6 TB = 12 TB.`,
        explanation: `Lernkarte RAID-Systeme:
- RAID 0 erhöht die Lese- und Schreibgeschwindigkeit, bietet aber null Ausfallsicherheit. Fällt eine Platte aus, sind alle Daten verloren.
- RAID 5 ist die am häufigsten genutzte Konfiguration, da sie ein gutes Gleichgewicht aus Kapazität und Ausfallsicherheit (Toleranz für 1 Ausfall) bietet.
- RAID 10 verbindet die Sicherheit von RAID 1 mit der Performance von RAID 0, benötigt aber mindestens 4 Festplatten.`
    },
    {
        id: 153,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Softwaretest (LF 5): Erläutere die beiden Blackbox-Testverfahren Äquivalenzklassenbildung und Grenzwertanalyse und beschreibe ihre Anwendung anhand einer Eingabe, die Ganzzahlen von 1 bis 100 akzeptiert.",
        musterloesung: `- Äquivalenzklassenbildung:
  * Definition: Teilt die menge der möglichen Eingabewerte in Klassen auf. Es wird angenommen, dass alle Werte innerhalb einer Klasse vom Programm gleich verarbeitet werden. Man benötigt pro Klasse nur einen Testwert.
  * Klassen für Werte 1 bis 100:
    1. Gültige Äquivalenzklasse (GÄK): Zahlen von 1 bis 100 (z. B. Testwert: 50).
    2. Ungültige Äquivalenzklasse 1 (UÄK1): Werte < 1 (z. B. Testwert: 0 oder -5).
    3. Ungültige Äquivalenzklasse 2 (UÄK2): Werte > 100 (z. B. Testwert: 101 oder 200).
    4. (Optional) Ungültige Datentypen: Buchstaben, Sonderzeichen.

- Grenzwertanalyse:
  * Definition: Testet gezielt die Grenzen der Äquivalenzklassen (die Ränder), da dort durch Programmierfehler (z. B. falsche Operatoren wie '<' statt '<=') am häufigsten Fehler auftreten. Zu testen sind die Grenzwerte selbst sowie die Werte direkt daneben.
  * Werte für Grenzen 1 und 100:
    - Untere Grenze (1): Testwerte 0, 1, 2.
    - Obere Grenze (100): Testwerte 99, 100, 101.`,
        explanation: `Lernkarte Softwaretest (Blackbox):
- Blackbox-Tests testen die Funktion einer Software ohne Kenntnis des inneren Codes.
- Äquivalenzklassenbildung reduziert die Testfälle auf ein Minimum. Die Grenzwertanalyse stellt sicher, dass Grenzbedingungen korrekt eingehalten werden.`
    },
    {
        id: 154,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerkdiagnose (LF 3): Erkläre die genaue Funktionsweise sowie das jeweils genutzte Protokoll der beiden Windows-Befehle 'ping' und 'tracert' (Traceroute).",
        musterloesung: `- ping:
  * Funktion: Prüft die Erreichbarkeit eines Hosts im Netzwerk und misst die Zeit für die Hin- und Rückverbindung (Latenz).
  * Protokoll: ICMP (Internet Control Message Protocol - arbeitet auf OSI-Schicht 3).
  * Funktionsweise: Sendet ein 'ICMP Echo Request'-Paket an den Ziel-Host. Dieser antwortet bei Erreichbarkeit mit einem 'ICMP Echo Reply'-Paket.

- tracert (Traceroute):
  * Funktion: Ermittelt den genauen Pfad (die IP-Adressen aller beteiligten Router/Hops) zu einem Ziel-Host.
  * Protokoll: ICMP (und teilweise UDP).
  * Funktionsweise: Sendet Pakete mit schrittweise erhöhter Lebensdauer (TTL - Time to Live), beginnend bei TTL=1. Der erste Router dekrementiert die TTL auf 0, verwirft das Paket und sendet ein 'ICMP Time Exceeded'-Fehlerpaket zurück, wodurch seine IP registriert wird. Dann wird das Paket mit TTL=2 gesendet, um den zweiten Router zu ermitteln, und so weiter, bis das Ziel erreicht wird.`,
        explanation: `Lernkarte Netzwerkdiagnose:
- TTL (Time to Live) ist ein Zähler im IP-Header, der verhindert, dass Pakete durch Routing-Schleifen endlos im Netz kreisen.
- Gibt ein Router auf dem Weg keine ICMP-Antworten zurück, wird dies in der Ausgabe als Sternchen (* * * Zeitüberschreitung der Anforderung) dargestellt.`
    },
    {
        id: 155,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Handelskalkulation (LF 6): Ein IT-Systemhaus kauft Hardware-Komponenten für einen Listeneinkaufspreis von 2.000 EUR. Berechne den Einstandspreis (Bezugspreis) anhand der folgenden Konditionen: Lieferantenrabatt 10 %, Lieferantenskonto 2 %, Bezugskosten (Transport und Verpackung) 50 EUR. Der Rechenweg ist anzugeben.",
        musterloesung: `Kalkulationsschema (Vorwärtskalkulation):
1. Listeneinkaufspreis: 2.000,00 EUR
2. - Lieferantenrabatt (10 % von 2.000): - 200,00 EUR
3. = Zieleinkaufspreis: 1.800,00 EUR
4. - Lieferantenskonto (2 % von 1.800): - 36,00 EUR
5. = Bareinkaufspreis: 1.764,00 EUR
6. + Bezugskosten (Transport/Verpackung): + 50,00 EUR
7. = Einstandspreis (Bezugspreis): 1.814,00 EUR

Ergebnis: Der Einstandspreis beträgt 1.814,00 EUR.`,
        explanation: `Lernkarte Handelskalkulation:
- Der Lieferantenrabatt wird immer vom Listeneinkaufspreis abgezogen.
- Das Lieferantenskonto wird immer vom Zieleinkaufspreis berechnet und abgezogen.
- Die Bezugskosten (Verpackung, Fracht, Porto) werden zum Bareinkaufspreis hinzugerechnet, um den Einstandspreis (die tatsächlichen Kosten für die Ware auf Lager) zu ermitteln.`
    },
    {
        id: 156,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Verzugszinsen (LF 6): Ein Kunde bezahlt eine fällige Rechnung über 12.000 EUR brutto mit einer Verspätung von 45 Tagen. Berechne die Verzugszinsen, die der Verkäufer dem Kunden für diesen Zeitraum in Rechnung stellen darf. Der Zinssatz beträgt 9 % p.a. (Rechne mit der deutschen Zinsmethode: 30 Tage pro Monat, 360 Tage pro Jahr). Der Rechenweg ist anzugeben.",
        musterloesung: `Zinsberechnungsformel:
Z = (K * p * t) / (100 * 360)

wobei:
- K (Kapital) = 12.000 EUR
- p (Zinssatz) = 9 % p.a.
- t (Zeitraum) = 45 Tage

Rechnung:
Z = (12.000 * 9 * 45) / 36.000
Z = 4.860.000 / 36.000
Z = 135,00 EUR

Ergebnis: Der Verkäufer darf dem Kunden für die 45 Tage Verzug 135,00 EUR Verzugszinsen berechnen.`,
        explanation: `Lernkarte Verzugszinsen:
- Nach der kaufmännischen Zinsmethode (deutsche Zinsmethode) hat jeder Monat 30 Tage und das Jahr 360 Tage.
- Verzugszinsen werden bei B2B-Geschäften (Business-to-Business) gesetzlich auf 9 Prozentpunkte über dem jeweiligen Basiszinssatz festgelegt (§ 288 Abs. 2 BGB).`
    },
    {
        id: 157,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerkverkabelung (Sommer 2025 / LF 3): Für die strukturierte Verkabelung eines Kraftwerks wird im Primärbereich (Außenbereich) ein Single-Mode-Glasfaserkabel gewählt. Begründe, welche Kabelmedien im Sekundärbereich (Gebäude-Steigbereich) und im Tertiärbereich (Etagenverkabelung) verwendet werden können.",
        musterloesung: `- Sekundärbereich (Steigbereich): Glasfaserkabel (z. B. Multi-Mode-Glasfaser / LWL). Dies eignet sich perfekt für vertikale Verbindungen zwischen den Etagenverteilern, da es unempfindlich gegenüber elektromagnetischen Störungen ist und Potenzialunterschiede zwischen den Stockwerken verhindert.
- Tertiärbereich (Etagenbereich): Kupferkabel (Twisted-Pair ab Cat 6A / Cat 7 / Cat 8) mit RJ45-Anschlüssen. Diese Kabel sind flexibel, kostengünstig und ideal für die Endgeräteanbindung über Strecken bis maximal 90 m (plus 10 m Patchkabel für die Verbindung zur Dose und zum Endgerät).`,
        explanation: `Lernkarte Strukturierte Verkabelung:
- Primärbereich (Campus): Verbindung zwischen Gebäuden (immer LWL wg. Strecke und Potenzialtrennung).
- Sekundärbereich (Gebäude): Verbindung zwischen Stockwerken (LWL bevorzugt).
- Tertiärbereich (Etage): Verbindung von Etagenverteilern zu Dosen/Arbeitsplätzen (Kupfer/Twisted-Pair bevorzugt).`
    },
    {
        id: 158,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe IPv6-Adressierung (Sommer 2025 / LF 3): In einem Subnetz mit dem Präfix '2001:db8::/64' sind bereits folgende Geräte im Netzplan konfiguriert:\n- Router: 2001:db8::1\n- DHCP-Server: 2001:db8::2\n- Laptop 1: 2001:db8::3\n- Laptop 2: 2001:db8::4\n- PC 1: 2001:db8::5\n- PC 2: 2001:db8::6\n\nAls Global Unicast Address (GUA) wird einem neu angeschlossenen Computer die nächste freie (fortlaufende) IP-Adresse zugewiesen. Ermittle diese Adresse und gib sie vollständig gekürzt an.",
        musterloesung: `Die gesuchte gekürzte Adresse lautet:
2001:db8::7

Erklärung:
- Der Netzwerkanteil (Präfix) '2001:db8::/64' belegt die ersten 64 Bit.
- Die Host-IDs werden sequenziell hochgezählt. Da '::1' bis '::6' bereits belegt sind, ist die nächste freie hexadezimale Stelle die '::7'.`,
        explanation: `Lernkarte IPv6-Kürzungsregeln:
- Führende Nullen innerhalb eines Blocks können weggelassen werden (z. B. '0db8' wird zu 'db8').
- Aufeinanderfolgende Null-Blöcke können einmalig durch ein Doppel-Doppelpunkt '::' ersetzt werden.`
    },
    {
        id: 159,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe IPv4-Hostberechnung & Router-Konfiguration (Sommer 2025 / LF 3):\n1. Berechne die maximale Anzahl an verfügbaren (nutzbaren) Host-IP-Adressen in einem IPv4-Netzwerk mit dem IP-Bereich 172.16.0.0/16.\n2. Die letzte nutzbare Hostadresse dieses Netzwerks soll für das Standard-Gateway des Routers reserviert werden. Nenne diese IP-Adresse und die zugehörige Subnetzmaske.",
        musterloesung: `1. Maximale Anzahl nutzbarer Hostadressen:
- Ein /16-Netzwerk hat 16 Bits für den Host-Anteil (32 - 16 = 16).
- Gesamtzahl der IP-Adressen = 2^16 = 65.536.
- Nutzbare Adressen = 2^16 - 2 = 65.534.
(Abzuziehen sind die Netzadresse 172.16.0.0 und die Broadcast-Adresse 172.16.255.255).

2. Konfiguration für den Router (letzte nutzbare IP):
- Die letzte nutzbare Hostadresse liegt direkt vor der Broadcast-Adresse (172.16.255.255 - 1).
- IP-Adresse: 172.16.255.254
- Subnetzmaske (für /16): 255.255.0.0`,
        explanation: `Lernkarte IP-Berechnung:
- Die Subnetzmaske für ein /16-Netzwerk hat die ersten zwei Oktette auf 255 (255.255.0.0).
- Die erste nutzbare IP-Adresse lautet 172.16.0.1, die letzte nutzbare lautet 172.16.255.254.`
    },
    {
        id: 160,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe WLAN-Technik (Sommer 2025 / LF 3): Für das WLAN sollen Access-Points nach dem Standard IEEE 802.11ax installiert werden, die das neue 6-GHz-Frequenzband nutzen. Nenne 3 wesentliche Vorteile des neuen 6-GHz-Bands gegenüber dem klassischen 2,4-GHz-Frequenzband.",
        musterloesung: `- Höhere Übertragungsraten / Bandbreiten: Im 6-GHz-Band stehen breitere Kanäle (bis zu 160 MHz statt meist nur 20 MHz) zur Verfügung, was extrem hohe Geschwindigkeiten ermöglicht.
- Geringere Störungen / Interferenzen: Da das 6-GHz-Band frisch freigegeben ist, wird es nicht von Altgeräten blockiert und ist immun gegen typische Störer wie Mikrowellen, Bluetooth-Geräte oder Babyphones, die im 2,4-GHz-Netz senden.
- Mehr überlappungsfreie Kanäle: Es gibt im 6-GHz-Band eine viel größere Auswahl an Kanälen, wodurch benachbarte Access-Points sich in großen Gebäuden nicht mehr gegenseitig stören (keine Kanal-Überlappung).`,
        explanation: `Lernkarte WLAN-Frequenzen:
- 2,4 GHz: Große Reichweite, durchdringt Wände gut, aber extrem überlastet und langsame Datenraten.
- 5 GHz: Gute Datenrate, mittlere Reichweite, teilweise DFS/TPC-reguliert.
- 6 GHz: Maximale Datenrate, sehr geringe Latenz, aber geringere Reichweite (wird stark durch Wände gedämpft).`
    },
    {
        id: 161,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Sicherheit Phishing-Erkennung (Sommer 2025 / LF 4): Ein Mitarbeiter erhält eine E-Mail mit dem Betreff 'WICHTIG! Konto gesperrt' von 'krusty@sparkasse.de' mit einer unpersönlichen Anrede ('Sehr geehrte Damen und Herren') und der Aufforderung, sein Konto über einen Link freizuschalten. Nenne 3 typische Merkmale dieser E-Mail, an denen man Phishing erkennen kann.",
        musterloesung: `Typische Phishing-Merkmale (drei nennen):
1. Absenderadresse stimmt nicht: Die E-Mail-Domain nutzt den Namen 'Krusty' (unseriös für eine Bank) oder die Absender-Domain passt nicht zur echten Bank.
2. Allgemeine, unpersönliche Anrede: Sparkassen sprechen Kunden bei sicherheitsrelevanten Vorgängen immer mit ihrem echten Namen an, niemals mit 'Sehr geehrte Damen und Herren'.
3. Künstlicher Zeitdruck / Drohung: Die Aufforderung zur Freischaltung 'innerhalb von 24 Stunden' soll den Empfänger unter Druck setzen, unüberlegt zu handeln.
4. Aufforderung zum Anklicken eines Links für sensible Daten: Banken senden keine E-Mails, um Konten über eingebettete Links zu entsperren.`,
        explanation: `Lernkarte Phishing-Prävention:
- Der beste Schutz vor Phishing ist die Sensibilisierung der Mitarbeiter (Security Awareness Training) sowie technische Filter (SPF, DKIM, DMARC) auf dem Mailserver.`
    },
    {
        id: 162,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Passwortsicherheit & 2FA (Sommer 2025 / LF 4):\n1. Beurteile das Sicherheitsrisiko, wenn ein Mitarbeiter dasselbe Passwort für alle Online-Anwendungen verwendet.\n2. Nenne den Hauptvorteil eines Passwortmanagers.\n3. Erkläre das grundlegende Funktionsprinzip einer Zwei-Faktor-Authentisierung (2FA).",
        musterloesung: `1. Sicherheitsrisiko:
- Wenn ein einziger Dienst gehackt oder per Phishing kompromittiert wird, hat der Angreifer sofortigen Zugriff auf alle anderen Accounts des Benutzers (z. B. E-Mail, ERP, Banking) – das Risiko eines Domino-Effekts ist extrem hoch.

2. Vorteil eines Passwortmanagers:
- Er generiert und speichert hochkomplexe, einzigartige Passwörter für jeden einzelnen Dienst in einem verschlüsselten Tresor. Der Benutzer muss sich nur noch ein einziges Master-Passwort merken.

3. Prinzip der Zwei-Faktor-Authentisierung (2FA):
- Die Anmeldung erfordert den Nachweis von zwei unterschiedlichen Faktoren aus den folgenden drei Kategorien:
  * Wissen (z. B. Passwort, PIN)
  * Besitz (z. B. Smartphone für Authenticator-Apps, Sicherheits-Token/YubiKey, Smartcard)
  * Sein / Biometrie (z. B. Fingerabdruck, Gesichtsscan)
- Ein Angreifer kann sich ohne den zweiten physischen Faktor (z. B. das Smartphone) selbst dann nicht anmelden, wenn er das Passwort kennt.`,
        explanation: `Lernkarte Authentisierung:
- Ein-Faktor-Authentisierung (nur Passwort) gilt heute in Firmennetzwerken als unsicher.
- 2FA schützt effektiv vor den Folgen gestohlener Passwörter.`
    },
    {
        id: 163,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Schutzziele (Sommer 2025 / LF 4): Angreifer erlangen unerlaubten Zugriff auf das Urlaubsplanungstool eines Unternehmens und manipulieren die Urlaubsanträge der Mitarbeiter. Begründe für jedes der drei klassischen IT-Schutzziele (Vertraulichkeit, Integrität, Verfügbarkeit), ob es in diesem Szenario verletzt wurde.",
        musterloesung: `- Vertraulichkeit (Confidentiality): Verletzt. Unbefugte Dritte konnten die Urlaubsanträge der Mitarbeiter (personenbezogene und interne Daten) einsehen.
- Integrität (Integrity): Verletzt. Die Daten wurden unautorisiert verändert (die Urlaubsdaten wurden manipuliert), sodass die Daten nicht mehr verlässlich und korrekt sind.
- Verfügbarkeit (Availability): Nicht verletzt (bzw. nicht betroffen). Das System und die Daten waren weiterhin abrufbar und wurden nicht gelöscht oder durch Verschlüsselung (Ransomware) blockiert.`,
        explanation: `Lernkarte CIA-Triade (Schutzziele):
- Vertraulichkeit: Nur Berechtigte dürfen Daten lesen.
- Integrität: Daten dürfen nicht unbemerkt verändert werden.
- Verfügbarkeit: Systeme und Daten müssen für Berechtigte nutzbar sein.`
    },
    {
        id: 164,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Beschaffung & Service-Level-Agreement (Sommer 2025 / LF 6):\n1. Entsteht durch das Absenden einer schriftlichen Anfrage zur Beschaffung von IT-Systemen eine rechtliche Verpflichtung für den Absender?\n2. Erkläre den Begriff 'Service-Level-Agreement' (SLA) und nenne ein typisches Beispiel für dessen Inhalt.",
        musterloesung: `1. Rechtliche Verpflichtung bei einer Anfrage:
- Nein. Eine Anfrage ist rechtlich unverbindlich (eine sogenannte "invitatio ad offerendum" - Einladung zur Abgabe eines Angebots) und verpflichtet den Absender weder zum Kauf noch zu sonstigen Leistungen.

2. Service-Level-Agreement (SLA):
- Definition: Eine vertragliche Vereinbarung zwischen einem Dienstleister (z. B. IT-Dienstleister) und einem Kunden, in der messbare Serviceleistungen wie Reaktionszeiten, Verfügbarkeiten und Lösungszeiten definiert werden.
- Beispiel für den Inhalt: Garantierte Verfügbarkeit des Servers von 99,9 % pro Jahr, maximale Reaktionszeit bei Störungen der Priorität 1 von 2 Stunden.`,
        explanation: `Lernkarte IT-Beschaffung:
- Eine Anfrage führt erst über das Angebot des Händlers und die Bestellung des Kunden (oder umgekehrt) zu einem rechtlich bindenden Kaufvertrag.`
    },
    {
        id: 165,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe SQL & Datenbanken (Sommer 2025 / LF 5): Gegeben ist das Relationenmodell:\nMitarbeiter (mID, vorname, name, strasse, stadt)\nFormuliere die entsprechenden SQL-Befehle für die folgenden Aktionen:\n1. Erstelle die Tabelle 'Mitarbeiter' (mID ist Ganzzahl und Primärschlüssel, die restlichen Felder sind Textfelder bis 100 Zeichen).\n2. Zeige alle Mitarbeiterdaten sortiert nach dem Attribut 'name' (alphabetisch aufsteigend) an.\n3. Ermittle die Anzahl der Mitarbeiter, die aus der Stadt 'Mannheim' kommen.",
        musterloesung: `1. Tabelle anlegen:
\`\`\`sql
CREATE TABLE Mitarbeiter (
    mID INT PRIMARY KEY,
    vorname VARCHAR(100),
    name VARCHAR(100),
    strasse VARCHAR(100),
    stadt VARCHAR(100)
);
\`\`\`

2. Sortierte Abfrage:
\`\`\`sql
SELECT * FROM Mitarbeiter ORDER BY name ASC;
\`\`\`

3. Anzahl ermitteln:
\`\`\`sql
SELECT COUNT(*) FROM Mitarbeiter WHERE stadt = 'Mannheim';
\`\`\``,
        explanation: `Lernkarte SQL-Grundlagen:
- CREATE TABLE dient der Definition der Tabellenstruktur (DDL - Data Definition Language).
- ORDER BY sortiert standardmäßig aufsteigend (ASC).
- COUNT(*) ist eine Aggregatfunktion, die die Anzahl der übereinstimmenden Zeilen zählt.`
    },
    {
        id: 166,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Angebotsvergleich (Sommer 2025 / LF 6): Ein Händler möchte für sein Unternehmen genau einen PC HP-GIGA-4711 beschaffen. Es liegen drei Angebote vor:\n- Angebot 1 (BH GmbH): Stückpreis 390 EUR, ab Werk, Lieferkosten 30 EUR. Neukundenrabatt 10 %, Skonto 3 % bei Zahlung innerhalb von 10 Tagen.\n- Angebot 2 (CBS KG): Stückpreis 320 EUR, ab Werk, Lieferkosten 40 EUR. Rabatt 5 %, Skonto 2 % bei Zahlung innerhalb von 14 Tagen.\n- Angebot 3 (Lhanding Plus Ltd.): Stückpreis 190 EUR, frei Haus, Frachtkosten pauschal 200 EUR pro Sendung. 10 % Rabatt bei Abnahme von mindestens 5 Stück, Skonto 3 % bei Zahlung innerhalb von 10 Tagen.\n\nFühre eine quantitative Bezugskalkulation (für 1 Stück) durch, ermittle den Einstandspreis (Bezugspreis) für alle drei Angebote und entscheide dich für das wirtschaftlichste Angebot. Der Rechenweg ist anzugeben.",
        musterloesung: `1. Bezugskalkulation BH GmbH:
  Listeneinkaufspreis: 390,00 EUR
- Lieferantenrabatt (10 %): - 39,00 EUR
= Zieleinkaufspreis: 351,00 EUR
- Lieferantenskonto (3 % von 351): - 10,53 EUR
= Bareinkaufspreis: 340,47 EUR
+ Bezugskosten (Lieferung): + 30,00 EUR
= Einstandspreis: 370,47 EUR

2. Bezugskalkulation CBS KG:
  Listeneinkaufspreis: 320,00 EUR
- Lieferantenrabatt (5 %): - 16,00 EUR
= Zieleinkaufspreis: 304,00 EUR
- Lieferantenskonto (2 % von 304): - 6,08 EUR
= Bareinkaufspreis: 297,92 EUR
+ Bezugskosten (Lieferung): + 40,00 EUR
= Einstandspreis: 337,92 EUR

3. Bezugskalkulation Lhanding Plus Ltd. (Achtung Falle! Es wird nur 1 PC gekauft):
  Listeneinkaufspreis: 190,00 EUR
- Lieferantenrabatt: 0,00 EUR (Rabatt gibt es erst ab 5 Stück!)
= Zieleinkaufspreis: 190,00 EUR
- Lieferantenskonto (3 % von 190): - 5,70 EUR
= Bareinkaufspreis: 184,30 EUR
+ Bezugskosten (Fracht): + 200,00 EUR
= Einstandspreis: 384,30 EUR

Ergebnis:
Das Angebot der CBS KG ist mit einem Einstandspreis von 337,92 EUR das wirtschaftlichste Angebot (BH GmbH kostet 370,47 EUR; Lhanding Plus Ltd. kostet 384,30 EUR).`,
        explanation: `Lernkarte Angebotsvergleich:
- Achte extrem genau auf die Bedingungen! Wenn Bedingungen wie "Mindestabnahme von 5 Stück" für den Rabatt nicht erfüllt sind, darf der Rabatt in der Kalkulation nicht abgezogen werden.
- Ab Werk bedeutet, dass der Käufer die Transportkosten (Bezugskosten) tragen muss.`
    },
    {
        id: 167,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe XML-Fehlerkorrektur (Sommer 2025 / LF 5): Finde und korrigiere die vier Syntaxfehler in der folgenden XML-Datei, damit sie fehlerfrei eingelesen werden kann:\n\n\`\`\`xml\n<mitarbeiter>\n  <name>Simpson</name>\n  <vorname>Herbert<vorname>\n  <adresse>\n    <strasse>Immergrünstr.742</straße>\n    <stadt>sprungfeld\n  </adresse>\n  <abteilung>Sicherheit</abteilung>\n  <urlaubsanträge>\n    <urlaubsantrag>\n      <antragsnr>1</antragsnr>\n      <startdatum>1.2.2024</startdatum>\n      <enddatum>15.2.2024</enddatum>\n    </urlaubsanträge>\n    </urlaubsantrag>\n</mitarbeiter>\n\`\`\`",
        musterloesung: `Die vier Fehler und deren Korrekturen lauten:

1. Zeile 3: <vorname>Herbert<vorname>
- Fehler: Dem schließenden Tag fehlt das Symbol '/'.
- Korrektur: <vorname>Herbert</vorname>

2. Zeile 5: <strasse>Immergrünstr.742</straße>
- Fehler: Mismatch im Tag-Namen (Start-Tag 'strasse' mit Doppel-S, End-Tag 'straße' mit Eszett). Groß-/Kleinschreibung und Schreibweisen müssen exakt übereinstimmen.
- Korrektur: <strasse>Immergrünstr.742</strasse>

3. Zeile 6: <stadt>sprungfeld
- Fehler: Dem Element fehlt das schließende Tag.
- Korrektur: <stadt>sprungfeld</stadt>

4. Zeilen 13-14: </urlaubsanträge> und </urlaubsantrag>
- Fehler: Falsche Verschachtelung (Nesting-Fehler). Das innere Element <urlaubsantrag> (Zeile 10) muss geschlossen werden, bevor das äußere Element <urlaubsanträge> (Zeile 9) geschlossen werden darf.
- Korrektur: Die Reihenfolge der schließenden Tags muss umgedreht werden:
    </urlaubsantrag>
  </urlaubsanträge>`,
        explanation: `Lernkarte XML-Syntaxregeln:
- XML-Tags sind case-sensitive (achten auf Groß-/Kleinschreibung und Schreibweise).
- Jedes geöffnete Tag muss wieder geschlossen werden.
- Elemente müssen korrekt geschachtelt sein (Last-In-First-Out-Prinzip).`
    },
    {
        id: 168,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Struktogramm-Implementierung (Sommer 2025 / LF 5): Setze das Struktogramm zur Urlaubsverwaltung in lauffähigen JavaScript-Code um. Das Struktogramm besitzt folgende Logik:\n- Initialisierung: anzUrlaubstage = 29\n- Wiederholung solange: anzUrlaubstage > 0\n  * Ausgabe: 'Sie haben noch ' + anzUrlaubstage + ' Tage Urlaub.'\n  * Ausgabe: 'Wieviele Tage Urlaub möchten Sie nehmen?'\n  * Eingabe: tage\n  * Verzweigung (IF): anzUrlaubstage - tage >= 0\n    - JA (Wahr): Ausgabe: 'Urlaub genehmigt.' und anzUrlaubstage um tage vermindern\n    - NEIN (Falsch): Ausgabe: 'Urlaub nicht genehmigt.'\n- Nach der Schleife (außerhalb): Ausgabe: 'Urlaub aufgebraucht.'",
        musterloesung: `JavaScript-Code:
\`\`\`javascript
let anzUrlaubstage = 29;
while (anzUrlaubstage > 0) {
    console.log("Sie haben noch " + anzUrlaubstage + " Tage Urlaub.");
    let tage = parseInt(prompt("Wieviele Tage Urlaub möchten Sie nehmen?"));
    if (anzUrlaubstage - tage >= 0) {
        console.log("Urlaub genehmigt.");
        anzUrlaubstage -= tage;
    },
    {
        id: 169,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Beschaffung (Sommer 2024 / LF 6): Ein Unternehmen möchte für ein neues Projekt Hardware beschaffen und sucht nach geeigneten Lieferanten. Nenne jeweils 2 interne und 2 externe Bezugsquellen, die das Unternehmen für die Lieferantensuche nutzen kann.",
        musterloesung: `- Interne Bezugsquellen (aus dem eigenen Unternehmen):
  1. Lieferantendatei / Lieferantenkartei (im Warenwirtschafts-/ERP-System gespeicherte Kontaktdaten).
  2. Eigene Einkaufsstatistiken / frühere Bestellungen (Bewertung bereits bekannter Lieferanten).

- Externe Bezugsquellen (außerhalb des Unternehmens):
  1. Internetrecherchen (Preissuchmaschinen, Suchmaschinen, Websites der Hersteller).
  2. Fachmessen, Ausstellungen und Produktpräsentationen.
  3. Branchen- und Adressbücher (z. B. "Gelbe Seiten", "Wer liefert was").
  4. Fachzeitschriften, IHK-Datenbanken oder Bezugsquellenverzeichnisse.`,
        explanation: `Lernkarte Bezugsquellen:
- Interne Quellen greifen auf bereits vorhandenes Wissen zurück (schneller, risikoärmer).
- Externe Quellen erschließen neue Anbieter und ermöglichen aktuelle Marktvergleiche.`
    },
    {
        id: 170,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Wareneingangsprüfung (Sommer 2024 / LF 6): Zwei Wochen nach der Bestellung wird das Videoüberwachungssystem geliefert. Erläutere 4 wesentliche Arbeitsschritte, die bei einer ordnungsgemäßen Wareneingangsprüfung durchgeführt werden müssen.",
        musterloesung: `1. Identitäts- und Mengenprüfung (Abgleich): Vergleichen der gelieferten Ware und der Anzahl mit dem Lieferschein und der ursprünglichen Bestellung (Wurde die richtige Ware in der richtigen Menge geliefert?).
2. Äußere Sichtprüfung auf Transportschäden: Untersuchung der Transportverpackung auf Feuchtigkeit, Deformationen oder Risse noch im Beisein des Frachtführers (Paketdienstes), um Transportschäden sofort vermerken zu können.
3. Qualitäts- und Funktionsprüfung: Auspacken der Geräte und Untersuchung auf offensichtliche Mängel (z. B. Kratzer, Brüche) sowie ggf. Durchführung eines kurzen Funktionstests (z. B. Kamera einschalten).
4. Dokumentation & Buchung: Quittieren des Lieferscheins, Erfassen des Wareneingangs im ERP-System zur Aktualisierung des Lagerbestands und ggf. Verfassen einer Mängelrüge bei fehlerhafter Lieferung.`,
        explanation: `Lernkarte Wareneingang:
- Eine unverzügliche Wareneingangsprüfung ist laut § 377 HGB für Kaufleute Pflicht (Rügepflicht). Werden Mängel zu spät gemeldet, gilt die Ware als genehmigt.`
    },
    {
        id: 171,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerktechnik (Sommer 2024 / LF 3): Die Geschäftsleitung möchte vom Homeoffice aus direkt auf das neu installierte Videoüberwachungssystem mit der privaten IP-Adresse '192.168.0.33' zugreifen. Begründe ausführlich, warum dieser direkte Zugriff aus dem Internet technisch nicht möglich ist.",
        musterloesung: `Begründung:
- Die IP-Adresse 192.168.0.33 liegt im privaten IP-Adressbereich (Klasse C nach RFC 1918).
- Private IP-Adressen sind im weltweiten öffentlichen Internet nicht routingfähig. Sie werden von den Routern im Internet ignoriert und verworfen, um weltweite Adresskonflikte zu vermeiden.
- Ein Zugriff aus dem Homeoffice ist nur über einen gesicherten Tunnel (z. B. ein Virtual Private Network / VPN) oder über ein auf dem Router konfiguriertes NAT/PAT (Portweiterleitung) möglich, bei dem eine öffentliche IP-Adresse des Routers auf die interne IP der Kamera umgeleitet wird.`,
        explanation: `Lernkarte Private IPs (RFC 1918):
- Private Bereiche: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.
- Diese Adressen dürfen ausschließlich in lokalen Netzen (LANs) verwendet werden und sind im Internet unsichtbar.`
    },
    {
        id: 172,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Subnetz-Routbarkeit (Sommer 2024 / LF 3): In einem Firmennetzwerk mit dem IP-Adressbereich 192.168.0.0/24 werden neue Kameras mit den IP-Adressen 192.168.1.33 bis 192.168.9.33 angeschlossen. Die Clients im Netz (192.168.0.50 bis 192.168.0.200) können diese Kameras nicht erreichen. Begründe, warum die Kommunikation ohne weitere Maßnahmen fehlschlägt.",
        musterloesung: `Begründung:
- Die Subnetzmaske /24 (255.255.255.0) legt fest, dass die ersten drei Oktette (24 Bit) den Netzwerkanteil bilden. Für die Clients lautet das logische Subnetz also '192.168.0.x'.
- Die neuen Kameras befinden sich jedoch in anderen Subnetzen ('192.168.1.x' bis '192.168.9.x').
- Da Clients und Kameras in unterschiedlichen IP-Netzen liegen, können sie nicht direkt (auf OSI-Schicht 2) miteinander kommunizieren. Es wird zwingend ein Router (Gateway) benötigt, der zwischen den Netzen vermittelt, oder die Subnetzmaske der Clients müsste angepasst werden (z. B. auf /16), damit alle IPs im selben Netz liegen.`,
        explanation: `Lernkarte Subnetzgrenzen:
- Ohne Router (Gateway) können IP-Geräte nur mit Partnern kommunizieren, deren IP-Adresse im selben Subnetz liegt (ermittelt durch die logische UND-Verknüpfung von eigener IP und Subnetzmaske).`
    },
    {
        id: 173,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Gateway-Konfiguration (Sommer 2024 / LF 3): Ein Client im Firmennetzwerk kommt nicht ins Internet. Laut Netzplan lautet die IP des Routers 192.168.0.254, die IP des Testservers lautet 192.168.0.1. Die manuelle Client-Konfiguration zeigt:\n- IPv4-Adresse: 192.168.0.51\n- Subnetzmaske: 255.255.255.0\n- Standardgateway: 192.168.0.1\n- DNS-Server: 192.168.0.254\n\nErkläre den Konfigurationsfehler und seine konkrete Auswirkung.",
        musterloesung: `Konfigurationsfehler:
- Als Standardgateway (Default Gateway) wurde fälschlicherweise die IP-Adresse des Testservers (192.168.0.1) anstelle der IP-Adresse des Routers (192.168.0.254) eingetragen.

Auswirkung:
- Jedes Mal, wenn der Client Datenpakete an Adressen außerhalb des eigenen Subnetzes (z. B. ins Internet) senden möchte, schickt er diese an den Testserver (192.168.0.1). Da der Testserver kein Routing ins Internet betreibt, verbleiben die Pakete dort und der Client hat keine Internetverbindung.`,
        explanation: `Lernkarte Standardgateway:
- Das Standardgateway muss immer das Gerät im lokalen Netz sein, welches physisch und logisch mit externen Netzen (z. B. dem Internet) verbunden ist – in der Regel also der Router.`
    },
    {
        id: 174,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe IPv6-Adresstypen (Sommer 2024 / LF 3): In der Konfiguration eines Netzwerkadapters befinden sich zwei IPv6-Adressen:\n1. fe80::868c:6a65:bb44:b228\n2. 2001:db8:1234:55::a/64\n\nBenenne die beiden IPv6-Adresstypen und beschreibe kurz ihren jeweiligen Verwendungszweck.",
        musterloesung: `1. Adresse 'fe80::...': Link-Local-Adresse (LLA)
- Zweck: Wird für die Kommunikation innerhalb desselben lokalen Netzwerksegments (Link) verwendet. Sie wird automatisch generiert und dient z. B. für Protokolle wie Nachbarschaftserkennung (NDP), Autokonfiguration (SLAAC) oder DHCPv6. Sie wird nicht über Router hinweg weitergeleitet.

2. Adresse '2001:db8::...': Global Unicast Address (GUA)
- Zweck: Eine weltweit eindeutige, öffentlich routingfähige IPv6-Adresse. Sie entspricht einer öffentlichen IPv4-Adresse und ermöglicht die weltweite Kommunikation über das Internet.`,
        explanation: `Lernkarte IPv6-Adressbereiche:
- Link-Local-Adressen beginnen immer mit dem Präfix 'fe80::/10'.
- Global Unicast-Adressen liegen aktuell im Bereich ab '2000::/3'.`
    },
    {
        id: 175,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Datenschutz & Videoüberwachung (Sommer 2024 / LF 4): Ein Händler richtet an seinem Ladenlokal eine Videokamera ein, die auch einen Teil des öffentlichen Bürgersteigs erfasst. Erkläre die datenschutzrechtliche Zulässigkeit dieses Vorhabens laut DSGVO/BDSG und nenne die erforderliche Maßnahme.",
        musterloesung: `Zulässigkeit:
- Die Videoüberwachung des öffentlichen Raums (wie eines Bürgersteigs) durch private Betreiber ist grundsätzlich unzulässig, da sie das Recht auf informationelle Selbstbestimmung der Passanten verletzt. Private Unternehmen dürfen ausschließlich das eigene Privat- bzw. Betriebsgelände überwachen.

Erforderliche Maßnahme:
- Der Erfassungswinkel der Kamera muss physisch so angepasst werden, dass der öffentliche Raum nicht mehr erfasst wird. Ist dies baulich nicht möglich, müssen diese Bereiche im Videobild softwareseitig dauerhaft unkenntlich gemacht (geschwärzt, verpixelt oder maskiert) werden.
- Zudem muss an gut sichtbarer Stelle ein Hinweisschild mit Kamerasymbol und Informationen gemäß Art. 13 DSGVO (Verantwortlicher, Zweck der Überwachung, Speicherdauer) angebracht werden.`,
        explanation: `Lernkarte Videoüberwachung nach DSGVO:
- Zulässig nur bei berechtigtem Interesse (z. B. Diebstahlschutz) und wenn dies erforderlich ist (kein milderes Mittel). Öffentlicher Raum ist tabu!`
    },
    {
        id: 176,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe SQL & Datenbanken (Sommer 2024 / LF 5): Gegeben ist das Relationenmodell:\nimages (filename, filesize, timestamp)\nFormuliere die entsprechenden SQL-Befehle für die folgenden Aktionen:\n1. Lösche den Datenbankeintrag für die Bilddatei mit dem Namen 'testbild.jpg'.\n2. Bestimme die Gesamtgröße (Summe) aller Bilddateien, die in der Tabelle erfasst sind.\n3. Füge einen neuen Datenbankeintrag für die Bilddatei mit dem Namen 'testbild.jpg', der Größe 117000 Byte und dem Zeitstempel 1667292685 hinzu.",
        musterloesung: `1. Datensatz löschen:
\`\`\`sql
DELETE FROM images WHERE filename = 'testbild.jpg';
\`\`\`

2. Summe berechnen:
\`\`\`sql
SELECT SUM(filesize) FROM images;
\`\`\`

3. Datensatz hinzufügen:
\`\`\`sql
INSERT INTO images (filename, filesize, timestamp) 
VALUES ('testbild.jpg', 117000, 1667292685);
\`\`\``,
        explanation: `Lernkarte SQL-Manipulationsbefehle:
- DELETE löscht bestehende Datensätze (DML).
- SUM() ist eine Aggregatfunktion zur Summenbildung.
- INSERT INTO fügt neue Zeilen in eine Tabelle ein.`
    },
    {
        id: 177,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Programmierung (Sommer 2024 / LF 5): Erstelle eine Funktion 'deleteOldFiles()' in JavaScript, die so lange lückenlos die jeweils älteste Bilddatei löscht, bis die Gesamtgröße der verbleibenden Dateien unter 1 GB (1.000.000.000 Byte) liegt. Nutze hierzu folgende Hilfsfunktionen:\n- getTotalFileSize(): Gibt die Gesamtgröße aller Bilddateien in Byte zurück.\n- getFileNameByNumber(0): Gibt den Dateinamen der ältesten Datei zurück.\n- deleteFileByName(filename): Löscht die Datei mit dem übergebenen Dateinamen.",
        musterloesung: `JavaScript-Code:
\`\`\`javascript
function deleteOldFiles() {
    // Die Schleife läuft so lange, wie die Gesamtgröße 1 GB oder mehr beträgt
    while (getTotalFileSize() >= 1000000000) {
        // Ermittle den Dateinamen der ältesten Datei (immer an Index 0)
        let oldestFile = getFileNameByNumber(0);
        // Lösche die älteste Datei
        deleteFileByName(oldestFile);
    }
}
\`\`\``,
        explanation: `Lernkarte Programmierlogik:
- Da gelöschte Dateien aus der Liste entfernt werden, rückt die nächstältere Datei automatisch an Index 0 auf.
- Die Schleifenbedingung prüft vor jedem Durchlauf, ob die Speichergrenze bereits unterschritten wurde.`
    },
    {
        id: 178,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Schutzbedarfsanalyse (Sommer 2024 / LF 4): Bestimme und begründe den Schutzbedarf für die Videodaten einer Filial-Videoüberwachung bezüglich der drei Schutzziele:\n1. Vertraulichkeit (Klassifizierung: Vertraulich oder Intern)\n2. Integrität (Klassifizierung: Erhöhte oder Normale Anforderungen)\n3. Verfügbarkeit (Klassifizierung: Extrem hoch [0,5h], Sehr hoch [4h], Hoch [24h], Normal [72h])",
        musterloesung: `1. Vertraulichkeit: Intern (oder Vertraulich)
- Begründung: Die Aufnahmen zeigen Kunden und Mitarbeiter (personenbezogene Daten) sowie sensible Sicherheitsbereiche. Unbefugte dürfen diese Daten nicht einsehen, um Persönlichkeitsrechte zu schützen und Einbruchsplanungen vorzubeugen.

2. Integrität: Normale Anforderungen
- Begründung: Vereinzelte Bildfehler oder kurze Aussetzer in einer Videodatei sind tolerierbar. Es entstehen dadurch keine lebensbedrohlichen Situationen (wie bei Medizingeräten) oder unmittelbare finanzielle Schäden.

3. Verfügbarkeit: Normal (Wiederanlaufzeit 72h)
- Begründung: Fällt das Kamerasystem für einige Stunden aus, läuft der Supermarktbetrieb normal weiter. Ein Systemausfall gefährdet die Existenz der Filiale nicht unmittelbar, weshalb ein Wiederanlauf innerhalb von 3 Tagen ausreichend ist.`,
        explanation: `Lernkarte Schutzbedarfsanalyse:
- Der Schutzbedarf orientiert sich an den möglichen Schadensfolgen bei einer Verletzung des jeweiligen Schutzziels (Vertraulichkeit, Integrität, Verfügbarkeit).`
    },
    {
        id: 179,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Handelskalkulation (Sommer 2024 / LF 6): Ein Händler kauft 10 Videoüberwachungssysteme für einen Gesamt-Listeneinkaufspreis von 12.550 EUR netto. Der Lieferant gewährt 5 % Rabatt und 3 % Skonto bei Zahlung innerhalb von 10 Tagen. Die Lieferung erfolgt 'frei Haus'. Berechne den Gesamt-Bezugspreis (Einstandspreis) netto unter Ausnutzung des Skontos. Der Rechenweg ist anzugeben.",
        musterloesung: `Kalkulationsschema:
1. Listeneinkaufspreis (Gesamt): 12.550,00 EUR
2. - Lieferantenrabatt (5 % von 12.550): - 627,50 EUR
3. = Zieleinkaufspreis: 11.922,50 EUR
4. - Lieferantenskonto (3 % von 11.922,50): - 357,68 EUR
5. = Bareinkaufspreis: 11.564,82 EUR
6. + Bezugskosten (frei Haus): + 0,00 EUR
7. = Bezugspreis (Einstandspreis): 11.564,82 EUR

Ergebnis:
Der Gesamt-Bezugspreis beträgt 11.564,82 EUR netto.`,
        explanation: `Lernkarte Handelskalkulation:
- "Frei Haus" bedeutet, dass die Versandkosten bereits im Preis enthalten sind (Bezugskosten = 0 EUR).
- Das Skonto wird immer vom zuvor rabattierten Zieleinkaufspreis berechnet und abgezogen.`
    },
    {
        id: 180,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Lieferantenauswahl (Sommer 2024 / LF 6): Ein Lieferant bietet zwar günstige Basispreise an, gewährt jedoch vorerst keinerlei Rabatte für Neuaufträge. Nenne 3 triftige kaufmännische oder logistische Gründe, weshalb ein IT-Systemhaus dennoch bei diesem Lieferanten bestellen sollte.",
        musterloesung: `Triftige Gründe (drei nennen):
- Schnelle und garantierte Lieferzeit: Kurze Lieferzeiten verringern das Risiko von Verzögerungen im Kundenprojekt.
- Hohe Produktqualität & Zuverlässigkeit: Geringe Ausfall- und Mängelquoten sparen Reklamations- und Supportkosten.
- Hervorragender Kundenservice / Gewährleistung: Schneller Austausch defekter Ware und ein kompetenter Support sind oft wichtiger als ein kleiner Rabatt.
- Gute Zahlungsbedingungen: Z. B. ein langes Zahlungsziel (Zahlung innerhalb von 30 Tagen) oder attraktive Skonto-Regelungen, was die Liquidität schont.
- Langjährige Geschäftsbeziehung: Ein eingespieltes Vertrauensverhältnis erleichtert die Kommunikation und sorgt für Kulanz im Problemfall.`,
        explanation: `Lernkarte Lieferantenbewertung:
- Bei der Lieferantenauswahl spielen nicht nur quantitative Kriterien (Preis, Rabatt, Konditionen), sondern vor allem qualitative Kriterien (Qualität, Liefertreue, Service, Nachhaltigkeit) eine entscheidende Rolle.`
    },
    {
        id: 181,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Verkaufskalkulation (Winter 2024/25 / LF 6): Ein Händler kalkuliert den Verkaufspreis für ein PC-Set ausgehend von einem Einstandspreis (Bezugspreis) von 500,00 EUR. Ermittle den Listenverkaufspreis (netto) anhand der folgenden Kalkulationssätze:\n- Handlungskostenzuschlag: 30 %\n- Gewinnzuschlag: 15 %\n- Kundenskonto: 2 % (wird vom Listenverkaufspreis gewährt; Kalkulation 'im Hundert')\nDer Rechenweg ist anzugeben.",
        musterloesung: `Kalkulationsschema (Verkaufskalkulation):
1. Einstandspreis: 500,00 EUR
2. + Handlungskosten (30 % von 500): + 150,00 EUR
3. = Selbstkostenpreis: 650,00 EUR
4. + Gewinnzuschlag (15 % von 650): + 97,50 EUR
5. = Barverkaufspreis: 747,50 EUR
6. + Kundenskonto (2 % im Hundert):
   - Der Barverkaufspreis entspricht 98 % des Zielverkaufspreises (100 % - 2 % Skonto).
   - Rechnung: 747,50 EUR / 0,98 = 762,76 EUR
   - Skonto-Betrag = 762,76 EUR - 747,50 EUR = 15,26 EUR
7. = Listenverkaufspreis (netto): 762,76 EUR

Ergebnis: Der Netto-Listenverkaufspreis beträgt 762,76 EUR.`,
        explanation: `Lernkarte Verkaufskalkulation:
- Im Gegensatz zur Einkaufskalkulation wird bei der Verkaufskalkulation rückwärts gerechnet (im Hundert), da das Skonto auf den höheren Zielverkaufspreis gewährt wird (Barverkaufspreis = 98 %, Zielverkaufspreis = 100 %).`
    },
    {
        id: 182,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerktechnik (Winter 2024/25 / LF 3): Erläutere auf Basis des OSI-Schichtenmodells die grundlegenden Unterschiede zwischen einer MAC-Adresse und einer IP-Adresse bezüglich ihrer Schicht, ihrer Eindeutigkeit und ihres Verwendungszwecks.",
        musterloesung: `- MAC-Adresse (Physical Address):
  * OSI-Schicht: Schicht 2 (Sicherungsschicht / Data Link Layer).
  * Eindeutigkeit: Vom Hersteller der Netzwerkkarte fest eingebrannt und weltweit physisch eindeutig.
  * Verwendungszweck: Dient der direkten Adressierung von Geräten innerhalb desselben lokalen Netzwerks (LAN / Broadcast-Domain).

- IP-Adresse (Logical Address):
  * OSI-Schicht: Schicht 3 (Vermittlungsschicht / Network Layer).
  * Eindeutigkeit: Wird dem Gerät logisch und flexibel je nach Standort im Netzwerk zugewiesen.
  * Verwendungszweck: Ermöglicht das systemübergreifende Routing von Datenpaketen über Subnetzgrenzen hinweg im weltweiten Internet.`,
        explanation: `Lernkarte Adressierung im Netz:
- Switches arbeiten auf Schicht 2 und leiten Pakete anhand von MAC-Adressen weiter.
- Router arbeiten auf Schicht 3 und leiten Pakete anhand von IP-Adressen weiter.`
    },
    {
        id: 183,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe USV-Leistungsberechnung (Winter 2024/25 / LF 6): Ein Serverraum soll mit einer USV abgesichert werden. An der USV werden Geräte mit folgenden Leistungsdaten betrieben:\n- Server 1: Wirkleistung 400 W, Leistungsfaktor (cos phi) 0,80\n- Server 2: Wirkleistung 300 W, Leistungsfaktor (cos phi) 0,85\n\n1. Berechne die gesamte Scheinleistung (S) in VA.\n2. Berechne die erforderliche Mindest-Scheinleistung der USV, wenn eine Leistungsreserve von 40 % eingerechnet werden soll. Der Rechenweg ist anzugeben.",
        musterloesung: `1. Berechnung der Scheinleistungen (Formel: S = P / cos phi):
- Server 1: S1 = 400 W / 0,80 = 500 VA
- Server 2: S2 = 300 W / 0,85 = 352,94 VA
- Gesamte Scheinleistung: S_ges = 500 VA + 352,94 VA = 852,94 VA

2. Berechnung der USV-Mindestleistung (40 % Leistungsreserve):
- S_min = S_ges * 1,40
- S_min = 852,94 VA * 1,40 = 1.194,12 VA

Ergebnis: Die USV muss eine Mindestleistung von 1.194,12 VA (bzw. aufgerundet 1.200 VA) aufweisen.`,
        explanation: `Lernkarte USV-Dimensionierung:
- USV-Leistungen werden in Scheinleistung (VA - Voltampere) angegeben, da sie induktive und kapazitive Lasten der Netzteile abfangen müssen.
- Wirkleistung (Watt) beschreibt die tatsächlich verbrauchte Energie, Scheinleistung (VA) die Gesamtbelastung der Leitung.`
    },
    {
        id: 184,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe SQL-Fehlersuche (Winter 2024/25 / LF 5): Beim Ausführen des folgenden SQL-Befehls in einer Kundendatenbank treten 2 Fehler auf. Benenne diese Fehler:\n\n\`\`\`sql\nINSERT INTO Kunde (knr, name, vorname, strasse, plz, ort, geschlecht)\nVALUES ('128', 'Müller', 'Tamara', 'Brunnengasse 4', '74722', 'Buchen', 'w', '1999-08-10');\n\`\`\`",
        musterloesung: `Die 2 Fehler lauten:
1. Anzahl-Diskrepanz (Spalten vs. Werte): In der Spaltenliste des INSERT INTO werden 7 Spalten definiert (knr, name, vorname, strasse, plz, ort, geschlecht). In der VALUES-Liste werden jedoch 8 Werte übergeben. Der letzte Wert ('1999-08-10') hat keine zugehörige Spalte.
2. Fehlende Spaltendefinition: Die Spalte für das Geburtsdatum (z. B. 'geburtsdatum') fehlt in der Spaltenliste des INSERT-Befehls. Um den Fehler zu beheben, muss entweder diese Spalte hinzugefügt oder der Wert '1999-08-10' gelöscht werden.`,
        explanation: `Lernkarte SQL INSERT-Syntax:
- Bei einem INSERT-Statement muss die Anzahl der angegebenen Spalten exakt mit der Anzahl der übergebenen Werte übereinstimmen. Andernfalls bricht das DBMS die Transaktion mit einem Syntaxfehler ab.`
    },
    {
        id: 185,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Algorithmen Prüfziffer (Winter 2024/25 / LF 5): Eine Kundenkartennummer besteht aus einem Array mit 10 Ganzzahlen. Die Ziffern an Index 0 bis 8 werden jeweils mit ihrer Stelle (Index + 1) multipliziert. Die Summe der Produkte wird modulo 10 geteilt. Der Rest entspricht der Prüfziffer, die an Index 9 steht. Schreibe eine JavaScript-Funktion 'pruefeNummer(nummer)', die 'true' zurückgibt, wenn die Ziffer an Index 9 mit der berechneten Prüfziffer übereinstimmt, andernfalls 'false'.",
        musterloesung: `JavaScript-Code:
\`\`\`javascript
function pruefeNummer(nummer) {
    let sum = 0;
    // Multipliziere die ersten 9 Ziffern (Index 0 bis 8) mit ihrer Stelle (1 bis 9)
    for (let i = 0; i < 9; i++) {
        sum += nummer[i] * (i + 1);
    },
    {
        id: 186,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe IP-Konfiguration (Winter 2024/25 / LF 3): Ein neuer Client soll in der Abteilung Verkauf/Service (VK/S) einer Firma konfiguriert werden. Laut logischem Netzwerkplan gelten folgende Parameter:\n- Das Subnetz der Abteilung VK/S lautet 10.3.0.0/16.\n- Die IP-Adressen 10.3.0.2 und 10.3.0.3 sind bereits an PCs vergeben.\n- Der abteilungsinterne DNS- und Dateiserver hat die IP-Adresse 10.3.0.1.\n- Der Router besitzt im Subnetz der Abteilung VK/S die IP-Adresse 10.3.0.100.\n\nGib eine vollständige, gültige IPv4-Konfiguration (IP-Adresse, Subnetzmaske, Standardgateway, bevorzugter DNS-Server) für den neuen Client an.",
        musterloesung: `Gültige Client-Konfiguration:
- IP-Adresse: 10.3.0.4 (oder jede andere freie Adresse im Bereich 10.3.0.4 bis 10.3.255.255, ausgenommen 10.3.0.100 und 10.3.0.110/Drucker)
- Subnetzmaske: 255.255.0.0 (entspricht dem CIDR-Präfix /16)
- Standardgateway: 10.3.0.100 (die IP-Adresse der Router-Schnittstelle im lokalen Subnetz)
- Bevorzugter DNS-Server: 10.3.0.1 (die IP-Adresse des abteilungsinternen DNS-Servers)`,
        explanation: `Lernkarte IP-Netzkonfiguration:
- Der Client muss eine freie IP-Adresse im selben Subnetz wie der DNS-Server und das Standardgateway besitzen.
- Das Standardgateway vermittelt den Datenverkehr in fremde Subnetze und ins Internet.
- Der DNS-Server übersetzt Domainnamen in IP-Adressen.`
    },
    {
        id: 187,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Angebotsvergleich (Winter 2024/25 / LF 6): Ein Händler vergleicht zwei Angebote für einen neuen Arbeitsplatz (Rechner und Monitor):\n- Angebot 1 (Hemak AG): Listeneinkaufspreis gesamt 533,01 EUR netto, Treue-Rabatt 10 %, Verpackung/Versand 25,00 EUR. Skonto 2 % bei Zahlung innerhalb von 10 Tagen.\n- Angebot 2 (DiWin GmbH): Listeneinkaufspreis gesamt 595,00 EUR netto, Neukunden-Rabatt 20 %, Verpackung/Versand 50,00 EUR. Skonto 3 % bei Zahlung innerhalb von 7 Tagen.\n\nBerechne für beide Angebote den Bezugspreis (Einstandspreis) netto unter Ausnutzung des Skontos. Entscheide dich für das wirtschaftlichere Angebot. Der Rechenweg ist anzugeben.",
        musterloesung: `1. Bezugskalkulation Hemak AG:
  Listeneinkaufspreis (Gesamt): 533,01 EUR
- Lieferantenrabatt (10 %): - 53,30 EUR
= Zieleinkaufspreis: 479,71 EUR
- Lieferantenskonto (2 % von 479,71): - 9,59 EUR
= Bareinkaufspreis: 470,12 EUR
+ Bezugskosten (Versand): + 25,00 EUR
= Bezugspreis (Einstandspreis): 495,12 EUR

2. Bezugskalkulation DiWin GmbH:
  Listeneinkaufspreis (Gesamt): 595,00 EUR
- Lieferantenrabatt (20 %): - 119,00 EUR
= Zieleinkaufspreis: 476,00 EUR
- Lieferantenskonto (3 % von 476,00): - 14,28 EUR
= Bareinkaufspreis: 461,72 EUR
+ Bezugskosten (Versand): + 50,00 EUR
= Bezugspreis (Einstandspreis): 511,72 EUR

Ergebnis:
Das Angebot der Hemak AG ist mit einem Einstandspreis von 495,12 EUR rein quantitativ das wirtschaftlichere Angebot (Ersparnis von 16,60 EUR gegenüber dem Angebot der DiWin GmbH mit 511,72 EUR).`,
        explanation: `Lernkarte Angebotsvergleich:
- Rabatt wird immer auf den Listeneinkaufspreis gewährt.
- Skonto wird vom rabattierten Zieleinkaufspreis abgezogen.
- Die Versandkosten (Bezugskosten) werden zum Bareinkaufspreis addiert, um den endgültigen Einstandspreis (Bezugspreis) zu erhalten.`
    },
    {
        id: 188,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe USV-Dimensionierung & Scheinleistung (Winter 2024/25 / LF 6): Eine USV soll die IT-Infrastruktur absichern. Folgende Verbraucher sind vorhanden:\n- 3 Server (je 230 V, 3 A)\n- 1 Laptop (230 V, 0,8 A)\n- 5 PCs (je 230 V, 0,8 A)\n- 1 Router (230 V, 0,5 A)\n- 3 Switches (je 230 V, 0,8 A)\n- 1 Firewall (230 V, 1 A)\n- 2 Laserdrucker (je 230 V, 2 A)\n- 1 Farblaser (230 V, 3 A)\n\n1. Entscheide begründet, welche der Geräte an die USV angeschlossen werden sollten und welche nicht.\n2. Berechne die gesamte Scheinleistung (S) in VA für alle an die USV angeschlossenen Geräte.\n3. Berechne die benötigte Mindestleistung der USV bei einer Leistungsreserve von 40 %. Der Rechenweg ist anzugeben.",
        musterloesung: `1. Geräteauswahl für die USV:
- Angeschlossen werden: Server, Laptop, PCs, Router, Switches und die Firewall (zur Aufrechterhaltung des Netzwerkbetriebs und zur Vermeidung von Datenverlusten/Dateisystemfehlern).
- NICHT angeschlossen werden: Laserdrucker und Farblaser.
  * Begründung: Laserdrucker erzeugen durch ihre Heizelemente (Fixierstation) extrem hohe Leistungsspitzen beim Einschalten und Drucken. Diese Spitzen würden eine USV überlasten. Zudem ist das Weiterdrucken bei Stromausfall nicht geschäftskritisch.

2. Berechnung der gesamten Scheinleistung (S = U * I):
- 3 Server: 3 * 230 V * 3 A = 2.070 VA
- 1 Laptop: 1 * 230 V * 0,8 A = 184 VA
- 5 PCs: 5 * 230 V * 0,8 A = 920 VA
- 1 Router: 1 * 230 V * 0,5 A = 115 VA
- 3 Switches: 3 * 230 V * 0,8 A = 552 VA
- 1 Firewall: 1 * 230 V * 1 A = 230 VA
- Gesamte Scheinleistung S_ges: 2.070 + 184 + 920 + 115 + 552 + 230 = 4.071 VA

3. USV-Mindestleistung mit 40 % Leistungsreserve:
- S_min = S_ges * 1,40
- S_min = 4.071 VA * 1,40 = 5.699,40 VA (bzw. ca. 5,7 kVA)

Ergebnis: Die USV muss eine Mindestleistung von 5.699,40 VA aufweisen.`,
        explanation: `Lernkarte USV-Dimensionierung:
- Drucker und andere Heizgeräte (Kaffeemaschinen, Kopierer) dürfen NIEMALS an eine USV angeschlossen werden, da sie die USV durch extreme Stromspitzen zerstören oder sofort entladen können.`
    }
];
