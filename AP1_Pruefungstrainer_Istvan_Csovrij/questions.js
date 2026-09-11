// AP1 Fragen-Datenbank
// Enthält echte und prüfungsnahe Aufgaben basierend auf deinen Lernfeldern (LF1 - LF6), Lernzielkontrollen (LZK) und Unterrichtsmaterialien.

if (typeof window !== "undefined" && typeof window.VisualDiagrams === "undefined") {
    window.VisualDiagrams = {
        getUseCaseDiagramSvg: function() { return ""; },
        getClassDiagramSvg: function() { return ""; },
        getErdDiagramSvg: function() { return ""; },
        getEpkDiagramSvg: function() { return ""; },
        getBpmnDiagramSvg: function() { return ""; },
        getStruktogrammSvg: function() { return ""; },
        getNetzplanDiagramSvg: function() { return ""; },
        getOrganigrammStabSvg: function() { return ""; },
        getMarktgleichgewichtSvg: function() { return ""; },
        getKalkulationTreeSvg: function() { return ""; },
        getRelationalErdSvg: function() { return ""; },
        getAutoDiagramSvg: function() { return ""; }
    };
}
if (typeof VisualDiagrams === "undefined") {
    var VisualDiagrams = (typeof window !== "undefined" ? window.VisualDiagrams : null) || {};
}

var staticQuestions = [
    // === LERNFELD 1: UNTERNEHMEN & MARKT (lf1) ===
    {
        id: 1,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
        theme: "lf2",
        type: "text-input",
        question: "Wie lautet der Fachbegriff für den Typ von Speicher, der beim Ausschalten des Computers alle gespeicherten Daten verliert? (Abkürzung mit 3 Buchstaben)",
        correctAnswers: ["RAM", "DRAM", "SRAM"],
        explanation: "RAM (Random Access Memory) ist ein flüchtiger Speicher (volatile memory). Sobald die Stromversorgung unterbrochen wird, gehen alle darin befindlichen Daten verloren."
    },
    {
        id: 26,
        isBawueFocus: true,
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
        isBawueFocus: true,
        theme: "lf3",
        type: "text-input",
        question: "Gegeben ist die IP-Adresse 192.168.10.45 mit der Subnetzmaske 255.255.255.0. Wie lautet die Netzwerkadresse (Network ID)?",
        correctAnswers: ["192.168.10.0"],
        explanation: "Die Subnetzmaske 255.255.255.0 (/24) besagt, dass die ersten 3 Oktette den Netzwerkanteil darstellen. Durch eine logische UND-Verknüpfung der IP mit der Maske erhält man die Netzwerkadresse: 192.168.10.0."
    },
    {
        id: 6,
        isBawueFocus: true,
        theme: "lf3",
        type: "text-input",
        question: "Gegeben ist die IP-Adresse 192.168.10.45 mit der Subnetzmaske 255.255.255.0. Wie lautet die Broadcast-Adresse?",
        correctAnswers: ["192.168.10.255"],
        explanation: "Bei der Subnetzmaske 255.255.255.0 werden für die Broadcast-Adresse alle Bits des Hostanteils (das letzte Oktett) auf 1 gesetzt. Das entspricht der Dezimalzahl 255, somit lautet die Adresse 192.168.10.255."
    },
    {
        id: 7,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
        theme: "lf3",
        type: "text-input",
        question: "Auf welcher Schicht des OSI-Modells ist der Begriff 'Frame' (Rahmen) zu finden? Gib die Nummer der Schicht an (1-7):",
        correctAnswers: ["2", "Schicht 2", "Zwei"],
        explanation: "Auf Schicht 2 (Sicherungsschicht / Data Link Layer) werden Bits zu Datenrahmen (Frames) zusammengefasst und mit physikalischen Adressen (MAC-Adressen) versehen. Auf Schicht 3 spricht man von Paketen (Packets), auf Schicht 4 von Segmenten."
    },
    {
        id: 19,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
        theme: "lf3",
        type: "text-input",
        question: "Wie viele nutzbare Hosts können in einem Subnetz mit der Subnetzmaske 255.255.255.240 (/28) adressiert werden?",
        correctAnswers: ["14"],
        explanation: "Ein /28-Netzwerk hat 4 Host-Bits (32 - 28 = 4). Die Gesamtzahl der IP-Adressen ist 2^4 = 16. Davon müssen die Netzwerkadresse (erste IP) und die Broadcastadresse (letzte IP) abgezogen werden: 16 - 2 = 14 nutzbare Hostadressen."
    },
    {
        id: 22,
        isBawueFocus: true,
        theme: "lf3",
        type: "text-input",
        question: "Wie lautet die Netzwerkadresse (Network ID) für die IP-Adresse 16.218.108.91 /27?",
        correctAnswers: ["16.218.108.64"],
        explanation: "Ein /27-Subnetz hat eine Maske von 255.255.255.224. Das letzte Oktett 91 in Binärschreibweise lautet 01011011. Die ersten 3 Bits (24+3 = 27) gehören zum Netzwerkanteil. Maskiert man die letzten 5 Bits auf 0, erhält man 01000000, was dezimal 64 entspricht. Die Netzadresse lautet also 16.218.108.64."
    },
    {
        id: 23,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
        theme: "lf3",
        type: "text-input",
        question: "In welchem Standardverzeichnis legt Windows 11 Treiberpakete ab, damit neue Hardware sofort automatisch ohne Datenträger installiert werden kann? (DriverStore-Pfad)",
        correctAnswers: ["C:\\Windows\\System32\\DriverStore", "C:/Windows/System32/DriverStore", "\\Windows\\System32\\DriverStore"],
        explanation: "Windows legt signierte Treiberpakete im DriverStore-Repository unter C:\\Windows\\System32\\DriverStore ab. Bei Anschluss des Geräts greift das Betriebssystem direkt darauf zu (Staging & Installation)."
    },

    // === LERNFELD 4: SCHUTZ & SICHERHEIT (lf4) ===
    {
        id: 9,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
        theme: "lf4",
        type: "text-input",
        question: "Wie groß darf eine einzelne Datei unter dem Dateisystem FAT32 maximal sein? Gib die Zahl mit der Einheit an (z. B. '4 GB'):",
        correctAnswers: ["4 GB", "4GB", "4 Gigabyte", "4.294.967.295 Bytes"],
        explanation: "Unter FAT32 liegt die maximale Dateigröße bei exakt 4 GB minus 1 Byte (4.294.967.295 Bytes). Für größere Dateien muss exFAT oder NTFS verwendet werden."
    },
    {
        id: 30,
        isBawueFocus: true,
        theme: "lf4",
        type: "text-input",
        question: "Welcher Registry-Pfad / Schlüssel (Key) wird in Windows 11 unter Hyper-V verwendet, um bei der Installation die Hardware-Prüfungen 'BypassTPMCheck' und 'BypassSecureBootCheck' manuell zu hinterlegen?",
        correctAnswers: ["LabConfig", "HKLM\\SYSTEM\\Setup\\LabConfig", "HKEY_LOCAL_MACHINE\\SYSTEM\\Setup\\LabConfig"],
        explanation: "In der Windows-Registry muss unter 'HKEY_LOCAL_MACHINE\\SYSTEM\\Setup' der Schlüssel 'LabConfig' erstellt werden. Darin werden die DWORD-Werte 'BypassTPMCheck=1' und 'BypassSecureBootCheck=1' angelegt, um die Systemprüfung zu umgehen."
    },
    {
        id: 31,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
        theme: "lf5",
        type: "text-input",
        question: "Gegeben ist folgendes Pseudocode-Segment. Welchen Wert hat die Variable 'erg' am Ende der Ausführung?",
        code: "SET erg = 0\nSET i = 1\nWHILE i < 5 DO\n    IF i % 2 == 0 THEN\n        erg = erg + i\n    END IF\n    i = i + 1\nEND WHILE",
        correctAnswers: ["6"],
        explanation: "Die Schleife läuft für i = 1, 2, 3, 4 (da i < 5). Die Bedingung i % 2 == 0 trifft für i = 2 und i = 4 zu. Somit wird gerechnet: erg = 0 + 2 = 2 (bei i=2) und danach erg = 2 + 4 = 6 (bei i=4). Am Ende is erg = 6."
    },
    {
        id: 14,
        isBawueFocus: true,
        theme: "lf5",
        type: "text-input",
        question: "Gegeben ist folgende PIN-Prüfung als Pseudocode. Welche Ausgabe liefert das Programm bei der Eingabe '12A456'?",
        code: "SET pin = '12A456'\nSET gueltig = true\nIF laenge(pin) != 6 THEN\n    gueltig = false\nEND IF\nFOR jedes zeichen in pin DO\n    IF zeichen ist keine Ziffer THEN\n        gueltig = false\n    END IF\nEND FOR\nIF gueltig == true THEN\n    AUSGABE 'JA'\nELSE\n    AUSGABE 'NEIN'\nEND IF",
        correctAnswers: ["NEIN"],
        explanation: "Die PIN hat zwar die Länge 6, aber das Zeichen 'A' an dritter Stelle ist keine Ziffer. Die Variable 'gueltig' wird in der Schleife auf 'false' gesetzt, weswegen die Bedingung am Ende fehlschlägt und 'NEIN' ausgegeben wird."
    },
    {
        id: 35,
        isBawueFocus: true,
        theme: "lf5",
        type: "text-input",
        question: "Wofür steht die Abkürzung 'KISS' im Software-Engineering und Code-Design?",
        correctAnswers: ["Keep It Simple, Stupid", "Keep It Simple Stupid"],
        explanation: "Das KISS-Prinzip fordert, Lösungen im Softwaredesign so einfach wie möglich zu halten, da einfache Strukturen lesbarer, wartbarer und weniger fehleranfällig sind."
    },
    {
        id: 36,
        isBawueFocus: true,
        theme: "lf5",
        type: "text-input",
        question: "Wie lautet das Standardformat einer User Story in der agilen Anforderungsanalyse? (Ergänze den letzten Teil: 'Als [Rolle] möchte ich [Ziel], damit ...')",
        correctAnswers: ["[Nutzen]", "Nutzen", "[ich einen Nutzen habe]", "Nutzen generiert wird"],
        explanation: "Das Standardformat lautet: 'Als [Rolle] möchte ich [Ziel], damit [Nutzen]'. Dies stellt sicher, dass die Anforderungen immer fachlich begründet sind."
    },
    {
        id: 37,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
        theme: "lf6",
        type: "text-input",
        question: "Welcher Begriff beschreibt das gesamte Nutzungserlebnis, das ein Anwender bei der Bedienung einer Software, Webseite oder App erfährt? (Abkürzung mit 2 Buchstaben)",
        correctAnswers: ["UX", "User Experience"],
        explanation: "UX steht für User Experience (Nutzungserlebnis) und umfasst Usability, visuelles Design, Ladezeiten, emotionale Wirkung und die Barrierefreiheit der Software."
    },
    {
        id: 44,
        isBawueFocus: true,
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
        isBawueFocus: true,
        theme: "lf6",
        type: "text-input",
        question: "Wie nennt man die Rügepflicht, bei der ein Mangel bei einer B2B-Lieferung erst nach Tagen oder Wochen bei der Benutzung auffällt, aber dennoch sofort gemeldet werden muss? (Begriff mit 2 Wörtern, z. B. '... Mangel')",
        correctAnswers: ["verdeckter Mangel", "verdeckten Mangel", "verdeckte Mängel"],
        explanation: "Ein verdeckter Mangel ist bei der Lieferung nicht sofort erkennbar. Er muss unverzüglich nach seiner Entdeckung gerügt werden, damit Gewährleistungsrechte erhalten bleiben."
    },
    {
        id: 46,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Vertragsrecht (LF 6): Die IT AG bestellt Notebooks. Bei der Warenannahme wird festgestellt, dass die Notebooks nicht die vereinbarten 8 GB RAM, sondern nur 4 GB RAM haben. Nenne die vorliegende Art der Vertragsstörung.",
        musterloesung: "Mangelhafte Lieferung (Schlechtleistung) bzw. Sachmangel (Falschlieferung / Abweichung von der vereinbarten Beschaffenheit).",
        explanation: "Da die gelieferte Ware nicht die vereinbarte Beschaffenheit aufweist (4 GB statt 8 GB RAM), liegt ein Sachmangel nach § 434 BGB vor. Die Vertragsstörung nennt sich mangelhafte Lieferung (Schlechtleistung)."
    },
    {
        id: 47,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Vertragsrecht (LF 6): Beschreibe, was ein Käufer (Unternehmen) im Rahmen eines zweiseitigen Handelskaufs (§ 377 HGB) tun muss, wenn er eine mangelhafte Lieferung erhält, um seine Gewährleistungsrechte zu wahren.",
        musterloesung: "Der Käufer muss die gelieferte Ware unverzüglich nach der Ablieferung untersuchen und, wenn sich ein Mangel zeigt, dem Verkäufer unverzüglich Anzeige machen (Rügepflicht).",
        explanation: "Beim B2B-Kauf (zweiseitiger Handelskauf) gilt die Rügepflicht nach § 377 HGB. Unterlässt der Käufer die unverzügliche Untersuchung und Rüge, gilt die Ware als genehmigt, es sei denn, der Mangel war nicht erkennbar."
    },
    {
        id: 48,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Sicherheit (LF 4): Erläutere den Unterschied zwischen einem Computer-Virus und einem Computer-Wurm bezüglich ihrer Ausbreitung und Vermehrung.",
        musterloesung: "Ein Computervirus benötigt zwingend eine Trägerdatei oder ein Wirtsprogramm, um sich zu verbreiten, und muss vom Nutzer aktiv gestartet/ausgeführt werden. Ein Computerwurm ist ein eigenständiges Programm, das sich selbstständig und aktiv über Netzwerke und Sicherheitslücken vervielfältigt, ohne ein Wirtsprogramm zu benötigen.",
        explanation: "Viren infizieren bestehende Dateien. Würmer nutzen Sicherheitslücken und Netzwerkprotokolle, um sich vollkommen eigenständig im Netz auszubreiten."
    },
    {
        id: 49,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Sicherheit (LF 4): Erläutere, wie ein Distributed Denial of Service (DDoS)-Angriff abläuft und welches Ziel er verfolgt.",
        musterloesung: "Bei einem DDoS-Angriff wird ein Server oder Dienst durch massenhafte, gleichzeitige Anfragen von einer Vielzahl verschiedener Rechner (oftmals ein koordiniertes Botnetz) überlastet. Das Ziel ist es, die Ressourcen des Servers (Bandbreite, CPU, RAM) so stark zu beanspruchen, dass der Dienst für reguläre Benutzer unerreichbar wird.",
        explanation: "Der Angriff erfolgt verteilt (Distributed) über viele Rechner, was eine Abwehr durch einfaches Blockieren einer einzelnen IP-Adresse unmöglich macht."
    },
    {
        id: 50,
        isBawueFocus: true,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Ergonomie (LF 2): Nenne 4 wesentliche Kriterien, die bei der ergonomischen Einrichtung eines Bildschirmarbeitsplatzes beachtet werden müssen.",
        musterloesung: "1. Flimmerfreier Bildschirm mit ausreichendem Sehabstand (ca. 50-80 cm).\n2. Reflexionsfreie Oberfläche des Bildschirms und der Arbeitsfläche.\n3. Tastatur flach, reflexionsarm und getrennt vom Bildschirm positioniert.\n4. Individuell anpassbarer, ergonomischer Bürostuhl und Schreibtischhöhe.",
        explanation: "Die Ergonomie dient der Gesunderhaltung der Mitarbeiter und umfasst physikalische Faktoren wie Sehabstand, Tastaturwinkel, Lichtverhältnisse und Stuhleinstellungen."
    },
    {
        id: 51,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Datenschutz (LF 4): Die DSGVO nennt verschiedene Grundsätze für die Verarbeitung personenbezogener Daten. Nenne und erläutere kurz 3 dieser Grundsätze.",
        musterloesung: "1. Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz (Erkennbarkeit für den Betroffenen).\n2. Zweckbindung (Daten dürfen nur für den bei der Erhebung festgelegten Zweck verarbeitet werden).\n3. Datenminimierung / Datensparsamkeit (Es dürfen nur so viele Daten erhoben werden, wie für den Zweck zwingend notwendig sind). Weitere: Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit.",
        explanation: "Die Grundsätze der DSGVO sind in Artikel 5 geregelt und bilden das Fundament des europäischen Datenschutzrechts bei der Verarbeitung von personenbezogenen Daten."
    },
    {
        id: 52,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Backup (LF 4): Erkläre das Großvater-Vater-Sohn-Prinzip (Generationen-Prinzip) bei der Datensicherung und nenne dessen Vorteil.",
        musterloesung: "Es handelt sich um ein rotierendes Backup-Schema auf drei Ebenen:\n- Sohn: Tägliche Sicherung (wird wöchentlich überschrieben).\n- Vater: Wöchentliche Sicherung (wird monatlich überschrieben).\n- Großvater: Monatliche Sicherung (wird jährlich überschrieben).\nVorteil: Ermöglicht die Wiederherstellung von Daten weit in die Vergangenheit, spart aber gleichzeitig Speichermedien durch geplante Rotation.",
        explanation: "Durch das Generationen-Prinzip wird verhindert, dass ein schleichender Datenverlust (z.B. durch unbemerkt korrupte Dateien) alle Backups gleichzeitig überschreibt."
    },
    {
        id: 53,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Backup (LF 4): Unterscheide das differenzielle Backup vom inkrementellen Backup bezüglich des täglichen Speicherbedarfs und des Aufwands bei einer Datenwiederherstellung (Restore).",
        musterloesung: "- Differenziell: Sichert täglich alle Änderungen seit dem letzten Vollbackup. Der tägliche Speicherbedarf steigt an. Für ein Restore benötigt man nur das Vollbackup und das letzte differenzielle Backup (schnelle Wiederherstellung).\n- Inkrementell: Sichert täglich nur die Änderungen seit dem jeweils letzten Backup. Der Speicherbedarf ist minimal. Für ein Restore benötigt man das Vollbackup und ALLE täglichen inkrementellen Backups in der richtigen Reihenfolge (zeitaufwendigere Wiederherstellung).",
        explanation: "Unternehmen müssen abwägen, ob ihnen ein minimaler Speicherbedarf (inkrementell) oder eine schnelle, sichere Wiederherstellung im Notfall (differenziell) wichtiger ist."
    },
    {
        id: 54,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Kryptografie (LF 4): Erläutere den Unterschied zwischen symmetrischer und asymmetrischer Verschlüsselung und nenne jeweils ein typisches Protokoll.",
        musterloesung: "- Symmetrisch: Sender und Empfänger nutzen denselben geheimen Schlüssel zum Ver- und Entschlüsseln. (Vorteil: Schnell. Nachteil: Sicherer Schlüsselaustausch nötig). Protokoll: AES, DES.\n- Asymmetrisch: Es gibt ein Schlüsselpaar. Der öffentliche Schlüssel (Public Key) verschlüsselt die Daten, der private Schlüssel (Private Key) entschlüsselt sie. (Vorteil: Kein geheimer Schlüsselaustausch nötig. Nachteil: Rechenintensiv). Protokoll: RSA, ECC.",
        explanation: "In der Praxis (z. B. bei HTTPS / TLS) werden beide Verfahren kombiniert: Asymmetrisch für den sicheren Austausch eines temporären Sitzungsschlüssels (Handshake), symmetrisch für die anschließende schnelle Datenübertragung."
    },
    {
        id: 55,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Vertragsrecht (LF 6): Nenne die Rügefristen für Mängel beim zweiseitigen Handelskauf (§ 377 HGB) für offene Mängel, verdeckte Mängel und arglistig verschwiegene Mängel.",
        musterloesung: "- Offener Mangel: Unverzüglich nach der Ablieferung (Untersuchungspflicht).\n- Verdeckter Mangel: Unverzüglich nach der Entdeckung des Mangels (spätestens vor Ablauf der Gewährleistung).\n- Arglistig verschwiegener Mangel: Keine Rügepflicht zur Fristwahrung; verjährt nach der regelmäßigen Verjährungsfrist von 3 Jahren.",
        explanation: "Die strengen Rügepflichten des HGB gelten nur im B2B-Bereich. Im Verbrauchsgüterkauf (B2C) gelten diese Fristen zum Schutz des Endverbrauchers nicht."
    },
    {
        id: 56,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Vertragsrecht (LF 6): Nenne jeweils die Hauptpflichten des Verkäufers und des Käufers bei einem rechtsgültigen Kaufvertrag nach § 433 BGB.",
        musterloesung: "- Verkäufer: Übergabe der Ware frei von Sach- und Rechtsmängeln und die Verschaffung des Eigentums an der Sache.\n- Käufer: Zahlung des vereinbarten Kaufpreises und die Abnahme der gekauften Sache.",
        explanation: "Der Kaufvertrag ist ein mehrseitig verpflichtendes Rechtsgeschäft. Die Hauptleistungspflichten stehen im Synallagma (Gegenseitigkeitsverhältnis)."
    },
    {
        id: 57,
        isBawueFocus: true,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe UML (LF 5): Erläutere den Hauptzweck eines UML-Anwendungsfalldiagramms (Use-Case-Diagramm) und nenne zwei seiner Hauptelemente.",
        musterloesung: "Hauptzweck: Beschreibung des erwarteten Verhaltens eines Systems aus Sicht der Akteure (Was kann das System tun, wer nutzt es?). Es dient der Anforderungsanalyse.\nHauptelemente:\n- Akteur (Actor): Person oder externes System, das mit dem System interagiert.\n- Anwendungsfall (Use Case): Eine Funktion oder ein Geschäftsprozess des Systems.\n- Systemgrenze (Subject): Der Rahmen, der das System von der Umwelt abgrenzt.",
        explanation: "Use Case Diagramme zeigen die funktionale Außensicht eines Systems. Sie zeigen keine zeitlichen oder logischen Abläufe (das machen Aktivitäts- oder Sequenzdiagramme)."
    },
    {
        id: 58,
        isBawueFocus: true,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Softwaretechnik (LF 10): Unterscheide den Unit-Test (Modultest) vom Integrationstest bezüglich des Testgegenstands.",
        musterloesung: "- Unit-Test (Modultest): Testet kleinste, isolierte Software-Einheiten (einzelne Klassen, Methoden oder Funktionen) unabhängig vom Rest des Systems auf korrekte Funktion.\n- Integrationstest: Testet das Zusammenspiel und die Schnittstellen mehrerer miteinander verbundener Module oder Subsysteme, um sicherzustellen, dass die Daten korrekt fließen.",
        explanation: "Unit-Tests werden meist vom Entwickler direkt geschrieben (z. B. mit JUnit). Integrationstests decken Fehler auf, die erst beim Zusammensetzen der Einzelteile entstehen."
    },
    {
        id: 59,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Wirtschaftlichkeit (LF 6): Was ist das Ziel einer Nutzwertanalyse (NWA) bei IT-Beschaffungen und wie läuft sie grob ab?",
        musterloesung: "Ziel: Systematischer Vergleich und Bewertung von komplexen Handlungsalternativen (z. B. Software A vs. B) anhand nicht-monetärer (qualitativer) Kriterien.\nAblauf:\n1. Festlegen der Bewertungskriterien.\n2. Gewichtung der Kriterien (Summe = 100%).\n3. Bewertung der Alternativen mit Punkten (z.B. 1-10).\n4. Multiplikation der Punkte mit der Gewichtung und Summenbildung. Die Alternative mit der höchsten Gesamtpunktzahl gewinnt.",
        explanation: "Die Nutzwertanalyse hilft, Entscheidungen objektiv und nachvollziehbar zu dokumentieren. Sie ergänzt rein finanzielle Vergleiche (wie den reinen Preisvergleich)."
    },
    {
        id: 60,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Erläutere kurz die Funktionsweise und das Ziel des Domain Name Systems (DNS) im Internet.",
        musterloesung: "Funktionsweise: DNS arbeitet als verteiltes Verzeichnis (wie ein Telefonbuch). Wenn ein Client eine Domain (z. B. google.com) aufruft, sendet er eine Anfrage an einen DNS-Nameserver. Dieser sucht den passenden Eintrag (A-Record) und liefert die dazugehörige IP-Adresse zurück.\nZiel: Übersetzung von menschenlesbaren Domainnamen in maschinenlesbare IP-Adressen (und umgekehrt via Reverse DNS).",
        explanation: "Ohne DNS müssten sich Internetnutzer die numerischen IP-Adressen aller Server merken. Es arbeitet standardmäßig auf Port 53 über UDP (und TCP für Zonentransfers)."
    },
    {
        id: 61,
        isBawueFocus: true,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Hardware (LF 2): Erkläre den Unterschied zwischen einem Typ-1-Hypervisor (Bare-Metal) und einem Typ-2-Hypervisor (Hosted) bei der Virtualisierung.",
        musterloesung: "- Typ-1-Hypervisor (Bare-Metal): Setzt direkt auf der physischen Hardware des Servers auf. Es wird kein separates Betriebssystem darunter benötigt. (Vorteil: Extrem performant, geringer Overhead). Beispiele: VMware ESXi, Microsoft Hyper-V Server.\n- Typ-2-Hypervisor (Hosted): Läuft als normale Anwendungssoftware auf einem bereits installierten Betriebssystem (Host-OS). (Vorteil: Einfache Installation, gut für Entwicklungsrechner). Beispiele: VirtualBox, VMware Workstation.",
        explanation: "In professionellen Rechenzentren werden fast ausschließlich Typ-1-Hypervisoren verwendet, um eine maximale Ressourceneffizienz und Stabilität zu garantieren."
    },
    {
        id: 62,
        isBawueFocus: true,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Hardware (LF 2): Unterscheide die USV-Klassen (Offline-USV, Line-Interactive-USV und Online-USV) bezüglich ihrer Schutzwirkung.",
        musterloesung: "- Offline-USV (Standby): Schützt nur vor Netzausfall und extremen Spannungsspitzen. Die Umschaltung erfolgt mit einer kurzen Verzögerung von einigen Millisekunden.\n- Line-Interactive-USV: Reguliert zusätzlich kleinere Spannungsschwankungen über einen Transformator ohne Batteriebetrieb. Kurze Umschaltzeit bei Stromausfall.\n- Online-USV (Double-Conversion): Wandelt den Netzstrom kontinuierlich in Gleichstrom und wieder in Wechselstrom um. Bietet lückenlosen Schutz vor allen Störungen (Spannung, Frequenz, Netzausfall) ohne jegliche Umschaltzeit.",
        explanation: "Für sensible Server in Rechenzentren wird immer eine Online-USV (Klasse VFI) verwendet, da sie eine perfekte Sinuswelle liefert und keine Schaltverzögerung hat."
    },
    {
        id: 63,
        isBawueFocus: true,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe UML (LF 5): Erkläre im Kontext von UML-Klassendiagrammen den Unterschied zwischen Aggregation und Komposition.",
        musterloesung: "- Aggregation (leere Raute): Beschreibt eine 'Teil-Ganzes'-Beziehung, bei der die Teile unabhängig vom Ganzen existieren können (Existenzunabhängigkeit). Beispiel: Bibliothek und Buch (wird die Bibliothek gelöscht, existiert das Buch weiter).\n- Komposition (gefüllte Raute): Beschreibt eine starke Existenzabhängigkeit. Die Teile können ohne das Ganze nicht existieren. Wird das Ganze gelöscht, werden die Teile automatisch mitgelöscht. Beispiel: Gebäude und Raum (wird das Gebäude abgerissen, hören die Räume auf zu existieren).",
        explanation: "Sowohl Aggregation als auch Komposition sind Spezialisierungen der allgemeinen Assoziation im UML-Klassendiagramm."
    },
    {
        id: 64,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Erläutere das Prinzip des 'Magischen Dreiecks des Projektmanagements' und nenne seine drei Eckpunkte.",
        musterloesung: "Prinzip: Die drei Eckpunkte stehen in Wechselwirkung zueinander. Wird ein Punkt verändert, hat dies direkte Auswirkungen auf die beiden anderen Punkte (Zielkonflikt). Beispiel: Höhere Qualität benötigt meist mehr Zeit und Budget.\nEckpunkte:\n1. Zeit (Termine, Projektdauer).\n2. Kosten (Budget, Ressourcen).\n3. Inhalt / Qualität (Leistungsumfang, Projektergebnis).",
        explanation: "Das magische Dreieck dient Projektleitern zur Visualisierung von Zielkonflikten und zur Steuerung von Kundenerwartungen."
    },
    {
        id: 65,
        isBawueFocus: true,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Softwarequalität (LF 10): Unterscheide den Black-Box-Test vom White-Box-Test.",
        musterloesung: "- Black-Box-Test: Der Tester kennt den internen Programmcode nicht. Getestet wird das System ausschließlich über seine äußeren Schnittstellen anhand von Eingaben und den erwarteten Ausgaben (Soll-Ist-Vergleich).\n- White-Box-Test: Der Tester hat vollen Zugriff auf den Quellcode. Getestet wird die innere Struktur, Kontrollflüsse, Zweige und Bedingungen des Programmcodes auf logische Korrektheit.",
        explanation: "Black-Box-Tests eignen sich für Akzeptanztests durch Anwender. White-Box-Tests werden meist von Entwicklern zur Code-Abdeckung (Coverage) durchgeführt."
    },
    {
        id: 66,
        isBawueFocus: true,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Datenbanken (LF 18): Beschreibe die Bedingungen, die erfüllt sein müssen, damit sich eine Datenbanktabelle in der 1. und in der 2. Normalform befindet.",
        musterloesung: "- 1. Normalform (1. NF): Alle Attribute müssen atomar sein (keine zusammengesetzten oder mehrwertigen Werte pro Zelle) und die Tabelle muss frei von sich wiederholenden Gruppen sein.\n- 2. Normalform (2. NF): Die Tabelle muss sich in der 1. NF befinden und jedes Nicht-Schlüssel-Attribut muss vollfunktionell vom gesamten Primärschlüssel abhängen (wichtig bei zusammengesetzten Primärschlüsseln; keine Abhängigkeiten von Teilen des Schlüssels).",
        explanation: "Die Normalisierung dient der Vermeidung von Redundanzen und Anomalien (Einfüge-, Änderungs-, Lösch-Anomalien) in relationalen Datenbanken."
    },
    {
        id: 67,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Rechnungswesen (LF 6): Erkläre den Begriff 'Deckungsbeitrag' und nenne die Formel zu dessen Berechnung.",
        musterloesung: "Erklärung: Der Deckungsbeitrag ist der Betrag, der einem Unternehmen nach Abzug der variablen Kosten vom Umsatz übrigbleibt, um die Fixkosten zu decken. Ist er positiv, trägt er zum Betriebsgewinn bei.\nFormel (Stück-Deckungsbeitrag): db = Verkaufspreis (netto) - variable Stückkosten\nFormel (Gesamt-Deckungsbeitrag): DB = Gesamtumsatz - variable Gesamtkosten",
        explanation: "Liegt der Deckungsbeitrag über den Fixkosten, erwirtschaftet das Unternehmen einen Gewinn. Liegt er darunter, entsteht ein Verlust."
    },
    {
        id: 68,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Nenne 3 wesentliche Vorteile von IPv6 gegenüber dem älteren IPv4-Protokoll.",
        musterloesung: "1. Riesiger Adressraum (128 Bit statt 32 Bit, dadurch keine IP-Adressknappheit mehr).\n2. Automatische Adresskonfiguration (SLAAC ermöglicht Clients, sich ohne DHCP-Server selbstständig eine IP-Konfiguration zu erstellen).\n3. Bessere Effizienz durch vereinfachten Header-Aufbau (Router müssen den Header weniger intensiv verarbeiten) und native Unterstützung von IPSec zur Verschlüsselung.",
        explanation: "IPv6 löst das Problem des erschöpften IPv4-Adressraums und macht NAT (Network Address Translation) im LAN überflüssig."
    },
    {
        id: 69,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Welche Aufgabe hat das Standard-Gateway (Default Gateway) in der IP-Konfiguration eines Endgeräts?",
        musterloesung: "Aufgabe: Das Standard-Gateway leitet Datenpakete an ein anderes, externes Netzwerk weiter, wenn die Ziel-IP-Adresse nicht im eigenen lokalen Subnetz liegt. In der Praxis ist das Standard-Gateway die lokale IP-Adresse des Routers.",
        explanation: "Befindet sich das Ziel im selben Subnetz (z.B. durch Vergleich der Subnetzmaske ermittelt), sendet der Host das Paket direkt per ARP an das lokale Zielgerät. Andernfalls geht es an das Standard-Gateway."
    },
    {
        id: 70,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Datenschutz (LF 4): Nenne 4 Rechte, die betroffenen Personen laut DSGVO bezüglich ihrer personenbezogenen Daten zustehen.",
        musterloesung: "1. Recht auf Auskunft (Artikel 15 DSGVO - Welche Daten sind gespeichert?).\n2. Recht auf Berichtigung (Artikel 16 DSGVO - Korrektur falscher Daten).\n3. Recht auf Löschung / 'Recht auf Vergessenwerden' (Artikel 17 DSGVO).\n4. Recht auf Datenübertragbarkeit (Artikel 20 DSGVO - Erhalt der Daten in maschinenlesbarem Format). Weitere: Recht auf Einschränkung der Verarbeitung, Widerspruchsrecht.",
        explanation: "Diese Rechte stärken die informationelle Selbstbestimmung der Bürger gegenüber Unternehmen und Behörden."
    },
    {
        id: 71,
        isBawueFocus: true,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Softwarearchitektur (LF 5): Erkläre die Funktionsweise des Model-View-Controller (MVC) Architekturmusters und nenne die Aufgaben der 3 Komponenten.",
        musterloesung: "- Model (Datenmodell): Enthält die Anwendungslogik, Geschäftsregeln und die eigentlichen Daten. Es ist unabhängig von der Benutzeroberfläche.\n- View (Präsentation/Ansicht): Ist für die Darstellung der Daten auf dem Bildschirm verantwortlich und nimmt Benutzereingaben entgegen.\n- Controller (Steuerung): Verarbeitet die Benutzereingaben von der View, manipuliert das Model entsprechend und aktualisiert anschließend die View.",
        explanation: "Das MVC-Muster trennt Präsentation und Programmlogik sauber voneinander, was die Wartbarkeit und Testbarkeit von Software drastisch erhöht."
    },
    {
        id: 72,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Unterscheide im agilen Scrum-Framework die Aufgaben des Product Owners von denen des Scrum Masters.",
        musterloesung: "- Product Owner: Ist für den wirtschaftlichen Erfolg des Produkts verantwortlich. Er definiert die Produktanforderungen, pflegt und priorisiert das Product Backlog und vertritt die Interessen der Kunden.\n- Scrum Master: Ist für den Scrum-Prozess verantwortlich. Er fungiert als Coach für das Team, beseitigt Hindernisse (Impediments) und schützt das Team vor Störungen von außen, besitzt aber keine disziplinarische Weisungsbefugnis.",
        explanation: "Der Product Owner bestimmt das 'Was' (Produktvision), der Scrum Master sorgt für das 'Wie' (Prozessoptimierung und Arbeitsumfeld)."
    },
    {
        id: 73,
        isBawueFocus: true,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe Hardware (LF 2): Nenne jeweils 2 technische Vor- und Nachteile einer Solid-State-Drive (SSD) im Vergleich zu einer klassischen Festplatte (HDD).",
        musterloesung: "Vorteile:\n1. Extrem hohe Schreib- und Lesegeschwindigkeiten (keine mechanischen Verzögerungen).\n2. Unempfindlich gegenüber Erschütterungen und lautlos (keine beweglichen Teile).\nNachteile:\n1. Höherer Preis pro Gigabyte Speicherkapazität.\n2. Begrenzte Lebensdauer durch Abnutzung der Flash-Zellen bei Schreibzyklen (TBW).",
        explanation: "HDDs werden heutzutage primär als kostengünstiger Langzeitspeicher für große Datenmengen (Archivierung/NAS) genutzt, während SSDs als Systemlaufwerke Standard sind."
    },
    {
        id: 74,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Sicherheit (LF 4): Erläutere den Unterschied zwischen einem Paketfilter und einer Stateful Inspection Firewall.",
        musterloesung: "- Paketfilter: Analysiert jedes Datenpaket isoliert für sich auf Layer 3 und 4 (Quell-/Ziel-IP, Port, Protokoll) anhand starrer Regeln. Er weiß nicht, ob ein Paket zu einer bestehenden Verbindung gehört.\n- Stateful Inspection (Zustandsgesteuerte Filterung): Überwacht den Verbindungszustand aktiver Sitzungen in einer Statustabelle. Sie lässt Antwortpakete von außen nur dann passieren, wenn sie zu einer intern initiierten, aktiven Verbindung gehören (deutlich sicherer).",
        explanation: "Moderne Next-Generation-Firewalls (NGFW) gehen noch weiter und analysieren zusätzlich die tatsächlichen Anwendungsdaten auf Layer 7 (Deep Packet Inspection)."
    },
    {
        id: 75,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Gewährleistung (LF 6): Unterscheide die gesetzliche Gewährleistung (Mängelhaftung) von einer Herstellergarantie.",
        musterloesung: "- Gesetzliche Gewährleistung (Mängelhaftung): Gesetzlich vorgeschrieben (BGB). Richtet sich gegen den VERKÄUFER. Gilt für 24 Monate ab Kauf. Haftet nur für Mängel, die bereits zum Zeitpunkt des Gefahrenübergangs (Übergabe) vorlagen.\n- Garantie: Freiwillige Zusage des HERSTELLERS (oder Händlers). Bedingungen und Dauer (z.B. 5 Jahre) sind frei gestaltbar. Haftet meist auch für Defekte, die erst während der Laufzeit durch normalen Gebrauch entstehen.",
        explanation: "Bei der Gewährleistung gilt in den ersten 12 Monaten (B2C) die Beweislastumkehr: Es wird vermutet, dass der Mangel von Anfang an da war. Danach muss der Käufer dies beweisen."
    },
    {
        id: 76,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Kaufrecht (LF 6): Nenne die rechtlichen Voraussetzungen, damit ein Käufer bei einer mangelhaften Lieferung das Recht auf Minderung des Kaufpreises oder Rücktritt vom Vertrag geltend machen kann.",
        musterloesung: "Voraussetzungen:\n1. Es muss ein Sach- oder Rechtsmangel bei Gefahrenübergang vorliegen.\n2. Der Käufer muss dem Verkäufer eine angemessene Frist zur Nacherfüllung (Reparatur oder Neulieferung) gesetzt haben.\n3. Die Frist zur Nacherfüllung muss erfolglos abgelaufen sein, oder die Nacherfüllung wurde vom Verkäufer verweigert bzw. ist zweimal fehlgeschlagen.",
        explanation: "Der Gesetzgeber räumt dem Verkäufer das 'Recht zur zweiten Andienung' (Nacherfüllung) ein, bevor der Käufer vom Vertrag zurücktreten oder den Preis mindern darf."
    },
    {
        id: 77,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Kaufrecht (LF 6): Ab wann gerät ein Käufer bei einer Rechnung ohne vereinbartes Zahlungsziel automatisch in Zahlungsverzug und wie hoch ist der gesetzliche Verzugszinssatz im B2C- und B2B-Bereich?",
        musterloesung: "- Verzugseintritt: Spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung (§ 286 Abs. 3 BGB). Bei Verbrauchern (B2C) muss auf diese Folge in der Rechnung ausdrücklich hingewiesen worden sein.\n- Verzugszins B2C (Verbraucher): 5 Prozentpunkte über dem Basiszinssatz.\n- Verzugszins B2B (Unternehmen): 9 Prozentpunkte über dem Basiszinssatz (plus 40 EUR Verzugspauschale).",
        explanation: "Der Basiszinssatz wird halbjährlich von der Deutschen Bundesbank angepasst und dient als Referenzwert für die Berechnung von Verzugszinsen."
    },
    {
        id: 78,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerk (LF 3): Erläutere den Sinn und Zweck von Virtual Local Area Networks (VLANs) in einem Firmennetzwerk.",
        musterloesung: "Sinn und Zweck: Aufteilung eines physischen lokalen Netzwerks (LAN) in mehrere logische, voneinander getrennte Broadcast-Domänen auf Layer 2. \nZiele:\n1. Erhöhung der Sicherheit (z. B. Trennung von Buchhaltung und Gäste-WLAN).\n2. Reduzierung des Broadcast-Verkehrs im Netz.\n3. Flexibilität bei der Netzwerkgestaltung ohne neue Hardware.",
        explanation: "Die Trennung erfolgt auf Switch-Ebene (z.B. nach IEEE 802.1Q per VLAN-Tagging). Um Daten zwischen verschiedenen VLANs auszutauschen, wird ein Router oder Layer-3-Switch benötigt."
    },
    {
        id: 79,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Projektmanagement (LF 6): Erkläre im Kontext eines Netzplans den Begriff 'Kritischer Pfad' und dessen Bedeutung für die Projektdauer.",
        musterloesung: "Erklärung: Der kritische Pfad ist die Kette von Vorgängen in einem Netzplan, bei denen der Gesamtpuffer gleich null ist (GP = 0). Er stellt den längsten zeitlichen Weg durch das Projekt dar.\nBedeutung: Vorgänge auf dem kritischen Pfad bestimmen die Mindestprojektdauer. Verzögert sich ein einziger Vorgang auf diesem Pfad, verschiebt sich sofort der gesamte Fertigstellungstermin des Projekts.",
        explanation: "Projektleiter müssen Vorgänge auf dem kritischen Pfad besonders intensiv überwachen (Critical Path Method, CPM)."
    },
    {
        id: 80,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
        theme: "lf1",
        type: "open-text",
        question: "Prüfungsaufgabe Ausbildung (LF 1): Nenne drei wesentliche gesetzliche Pflichten des Ausbildenden (Betriebs) gegenüber dem Auszubildenden laut Berufsbildungsgesetz (BBiG).",
        musterloesung: "1. Ausbildungspflicht: Der Ausbildende muss dem Azubi die Fertigkeiten und Kenntnisse vermitteln, die zum Erreichen des Ausbildungsziels erforderlich sind.\n2. Bereitstellung von Ausbildungsmitteln: Werkzeuge, Materialien und Unterlagen (Berichtsheft) müssen kostenlos zur Verfügung gestellt werden.\n3. Freistellungspflicht: Der Azubi muss für die Berufsschule, Prüfungen und Ausbildungsmaßnahmen freigestellt werden (ohne Entgeltausfall).\n4. Vergütungspflicht: Zahlung einer angemessenen Ausbildungsvergütung.\n5. Fürsorgepflicht: Schutz vor Gefahren für Leben und Gesundheit am Arbeitsplatz.\n6. Zeugnispflicht: Ausstellung eines schriftlichen Ausbildungszeugnisses am Ende der Ausbildung.",
        explanation: "Lernkarte Pflichten des Ausbilders (§ 14 BBiG):\n" +
            "- Diese Pflichten stehen den Pflichten des Auszubildenden (§ 13 BBiG, z. B. Lernpflicht, Sorgfaltspflicht, Gehorsamspflicht, Berufsschulpflicht) gegenüber."
    },
    {
        id: 140,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
    } else {
        console.log("Urlaub nicht genehmigt.");
    }
}
console.log("Urlaub aufgebraucht.");
\`\`\``,
        explanation: `Lernkarte Struktogramme (Nassi-Shneiderman):
- Der Schleifenblock umschließt alle eingerückten Aktionen.
- Verzweigungen werden als Dreiecke mit True (T) und False (F) dargestellt.
- Wertzuweisungen werden als einfache Anweisungen umgesetzt.`
    },
    {
        id: 169,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
    }
    // Berechne die Prüfziffer (Rest der Division durch 10)
    let berechnetePruefziffer = sum % 10;
    // Vergleiche die berechnete Prüfziffer mit der an Index 9
    return berechnetePruefziffer === nummer[9];
}
\`\`\``,
        explanation: `Lernkarte Algorithmen (Prüfziffern):
- Prüfziffern (wie bei IBAN, ISBN oder Kundenkarten) dienen dazu, Tippfehler bei der Dateneingabe sofort im Frontend zu erkennen, ohne eine Datenbankabfrage durchführen zu müssen.`
    },
    {
        id: 186,
        isBawueFocus: true,
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
        isBawueFocus: true,
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
        isBawueFocus: true,
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
    },
    {
        id: 189,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe IT-Service-Management (Sommer 2023 / LF 6): Klassifiziere die folgenden 5 Meldungen aus einem Ticketsystem begründet in die ITIL-Kategorien 'Incident' (Störung), 'Service Request' (Serviceanfrage) oder 'Event' (Ereignis):\n1. Mitteilung, dass die Lizenz der Office-Anwendung in 14 Tagen abläuft.\n2. Ein Mitarbeiter beantragt eine Maus für Linkshänder.\n3. Der Accesspoint im Lager funktioniert nicht.\n4. Statusmeldung: Mehr als fünf fehlgeschlagene Anmeldeversuche auf dem Konto von Herr Müller.\n5. Ein Mitarbeiter meldet, dass sein Bildschirm flackert.",
        musterloesung: `Klassifizierung der Tickets:
1. Event: Automatisierte Benachrichtigung über eine Zustandsänderung (Lizenzablauf). Es liegt zum aktuellen Zeitpunkt noch keine Störung des Betriebs vor.
2. Service Request: Anforderung einer Standarddienstleistung bzw. Standard-Hardware (Maus für Linkshänder) durch einen Anwender.
3. Incident: Ungeplante Störung bzw. Unterbrechung des IT-Services (Netzwerkverbindung im Lager), die behoben werden muss.
4. Event: Protokolliertes Systemereignis (Sicherheitsmeldung), das auf ein mögliches Problem (Tippfehler des Users oder Brute-Force-Angriff) hindeutet.
5. Incident: Unerwartete Qualitätsminderung einer Hardware (flackernder Monitor), die den normalen Arbeitsablauf des Mitarbeiters behindert.`,
        explanation: `Lernkarte ITIL-Begriffe:
- Incident: Eine ungeplante Unterbrechung oder Qualitätsminderung eines IT-Services. Ziel: Schnellstmögliche Wiederherstellung.
- Service Request: Eine formelle Anfrage eines Benutzers nach Bereitstellung von Hardware, Software, Passwörtern oder Informationen.
- Event: Jedes erkennbare Vorkommnis, das für die Verwaltung der IT-Infrastruktur von Bedeutung ist.`
    },
    {
        id: 190,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe WLAN & MAC-Adressierung (Sommer 2023 / LF 3): Beantworte folgende Fragen zu WLAN und Netzwerkhardware:\n1. Nenne eine wesentliche Neuerung, die der Standard IEEE 802.11ax (ab Wi-Fi 6E) im Vergleich zu älteren Standards bietet.\n2. Wie viele Bits werden für die Darstellung einer physischen MAC-Adresse benötigt?\n3. Auf welcher Schicht des OSI-Schichtenmodells arbeitet die physische MAC-Adresse zur Weiterleitung von Ethernet-Frames?",
        musterloesung: `1. Neuerung Wi-Fi 6E: Erschließung und Nutzung des neuen 6-GHz-Frequenzbands (bietet viel mehr Frequenzspektrum, weniger Überlagerungen/Interferenzen und breitere Kanäle bis 160 MHz).
2. Bit-Anzahl MAC-Adresse: 48 Bits (entspricht 6 Bytes, meist dargestellt in Hexadezimalform, z. B. 0C-DD-24-CE-C6-D8).
3. OSI-Schicht: Schicht 2 (Sicherungsschicht / Data Link Layer).`,
        explanation: `Lernkarte Netzwerk-Grundlagen:
- Wi-Fi 6E erweitert den Standard Wi-Fi 6 um das 6-GHz-Band, um verstopfte 2,4-GHz- und 5-GHz-Bänder zu entlasten.
- Die MAC-Adresse (Media Access Control) dient der eindeutigen Adressierung auf Schicht 2 (Hardware-Ebene).`
    },
    {
        id: 191,
        isBawueFocus: true,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Programmierung (Sommer 2023 / LF 5): Erstelle eine JavaScript-Funktion 'loginUeberpruefung(username, passwort)'. Die Funktion nutzt die Hilfsfunktion 'DB_Abfrage(username, passwort)', welche folgende Rückgabewerte liefert:\n- 0: Daten korrekt\n- 1: Benutzername existiert nicht\n- 2: Passwort falsch\n\nWenn die Daten korrekt sind, soll die Funktion 'true' zurückgeben. In allen anderen Fällen soll der Text 'Daten nicht korrekt' auf der Konsole ausgegeben und 'false' zurückgegeben werden.",
        musterloesung: `JavaScript-Code:
\`\`\`javascript
function loginUeberpruefung(username, passwort) {
    // Führe die Datenbankabfrage durch und speichere den Rückgabewert
    let abfrageErgebnis = DB_Abfrage(username, passwort);
    
    // Wenn das Ergebnis 0 ist, sind die Anmeldedaten korrekt
    if (abfrageErgebnis === 0) {
        return true;
    } else {
        // Bei jedem anderen Wert (1 oder 2) Fehlermeldung ausgeben und false zurückgeben
        console.log("Daten nicht korrekt");
        return false;
    }
}
\`\`\``,
        explanation: `Lernkarte Programmierlogik:
- Der Vergleichsoperator === stellt sicher, dass sowohl der Wert als auch der Datentyp (Zahl 0) übereinstimmen.
- Durch die Kapselung in einen else-Block wird die Fehlermeldung nur im Fehlerfall ausgegeben.`
    },
    {
        id: 192,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Handelskalkulation (Sommer 2023 / LF 6): Ein IT-Systemhaus beschafft 30 Laptops zu einem Listeneinkaufspreis von je 1.300,00 EUR netto. Der Großhändler gewährt 20 % Rabatt und 3 % Skonto. Die Transportkosten betragen 10,00 EUR netto pro Laptop.\nDie Laptops werden an einen Kunden für einen Listenverkaufspreis von je 1.800,00 EUR netto verkauft. Das Systemhaus gewährt dem Kunden 20 % Rabatt und 2 % Skonto. Die internen Handlungskosten betragen 35 % auf den Einstandspreis.\n\nBerechne:\n1. Den Bezugspreis (Einstandspreis) pro Laptop netto bei Ausnutzung des Lieferantenskontos.\n2. Den Selbstkostenpreis pro Laptop netto.\n3. Den tatsächlichen Gewinn/Verlust (in EUR und in % bezogen auf die Selbstkosten) pro Laptop bei Ausnutzung aller Skonti. Der Rechenweg ist anzugeben.",
        musterloesung: `1. Bezugskalkulation (Einkauf):
  Listeneinkaufspreis: 1.300,00 EUR
- Lieferantenrabatt (20 %): - 260,00 EUR
= Zieleinkaufspreis: 1.040,00 EUR
- Lieferantenskonto (3 % von 1.040): - 31,20 EUR
= Bareinkaufspreis: 1.008,80 EUR
+ Bezugskosten (Transport): + 10,00 EUR
= Bezugspreis (Einstandspreis): 1.018,80 EUR

2. Selbstkostenpreis:
  Bezugspreis (Einstandspreis): 1.018,80 EUR
+ Handlungskosten (35 % von 1.018,80): + 356,58 EUR
= Selbstkostenpreis: 1.375,38 EUR

3. Verkaufskalkulation & Gewinnberechnung:
  Listenverkaufspreis: 1.800,00 EUR
- Kundenrabatt (20 %): - 360,00 EUR
= Zielverkaufspreis: 1.440,00 EUR
- Kundenskonto (2 % von 1.440): - 28,80 EUR
= Barverkaufspreis (Nettoerlös): 1.411,20 EUR

- Gewinn (in EUR): Barverkaufspreis (1.411,20 EUR) - Selbstkostenpreis (1.375,38 EUR) = 35,82 EUR (Gewinn)
- Gewinn (in % bezogen auf Selbstkosten): (35,82 EUR / 1.375,38 EUR) * 100 = 2,60 %`,
        explanation: `Lernkarte Handelskalkulation:
- Bezugskosten werden erst nach Abzug des Skontos zum Bareinkaufspreis addiert.
- Handlungskosten werden auf den Einstandspreis (Bezugspreis) aufgeschlagen.
- Der Gewinn ist die Differenz zwischen dem Nettoerlös (Barverkaufspreis) und den Selbstkosten.`
    },
    {
        id: 193,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerktechnik (Sommer 2023 / LF 3): Aus der IP-Konfiguration eines Laptops sind folgende Werte bekannt:\n- IPv4-Adresse: 10.1.10.1\n- Subnetzmaske: 255.255.0.0 (bzw. /16)\n\nBestimme die Netzwerkadresse sowie die Broadcastadresse des IP-Subnetzes, in dem sich der Laptop befindet. Der Rechenweg/die Logik ist kurz zu beschreiben.",
        musterloesung: `- Netzwerkadresse: 10.1.0.0
  * Erklärung: Die ersten 16 Bits (2 Oktette: 10.1) bilden den Netzanteil, der unverändert bleibt. Die restlichen 16 Bits des Hostanteils werden auf 0 gesetzt (binär 00000000.00000000).

- Broadcastadresse: 10.1.255.255
  * Erklärung: Der Netzanteil (10.1) bleibt unverändert. Alle Bits des Hostanteils werden auf 1 gesetzt (binär 11111111.11111111 entspricht dezimal 255.255).`,
        explanation: `Lernkarte Netzwerkadressen:
- Die Netzwerkadresse kennzeichnet das Subnetz als Ganzes und darf nicht an Hosts vergeben werden.
- Die Broadcastadresse dient dazu, Datenpakete an alle Hosts im Subnetz gleichzeitig zu senden.`
    },
    {
        id: 194,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Schutzbedarfsanalyse (Sommer 2023 / LF 4): Für eine Auftrags- und Kundenverwaltung soll der Schutzbedarf bezüglich Vertraulichkeit, Integrität und Verfügbarkeit (Kategorien: normal, hoch, sehr hoch) bestimmt werden. Ordne die Kategorien begründet zu anhand dieser Vorgaben:\n1. Vertraulichkeit: Es werden Kundendaten verarbeitet, deren Missbrauch dem Unternehmen großen Schaden (50.000 bis 500.000 EUR) zufügt.\n2. Integrität: Manipulationen an Preisangaben führen zu Schäden über 50.000 EUR und erheblichem Vertrauensverlust.\n3. Verfügbarkeit: Ein Ausfall von über 24 Stunden ist hinnehmbar, da auf Ersatzgeräten weitergearbeitet werden kann.",
        musterloesung: `- Vertraulichkeit: hoch
  * Begründung: Der Missbrauch von personenbezogenen Kundendaten kann einen beträchtlichen finanziellen Schaden (zwischen 50.000 und 500.000 EUR) und Imageverlust verursachen.

- Integrität: hoch
  * Begründung: Verfälschte Preisdaten führen zu Fehlbuchungen, Vertragsstreitigkeiten und erheblichem Ansehensverlust bei Kunden.

- Verfügbarkeit: normal
  * Begründung: Ein Ausfall von mehr als 24 Stunden behindert zwar das Arbeiten, gefährdet das Unternehmen aber nicht existenziell, da unkompliziert auf andere PCs ausgewichen werden kann.`,
        explanation: `Lernkarte Schutzbedarfsanalyse:
- Der Schutzbedarf (normal, hoch, sehr hoch) wird für jedes Schutzziel einzeln ermittelt, indem man die maximalen Auswirkungen eines Schadensfalls bewertet.`
    },
    {
        id: 195,
        isBawueFocus: true,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe ER-Modellierung (Sommer 2023 / LF 5): Gegeben sind die Entitäten 'Mitarbeiter', 'Laptop' und 'Projekt'. Bestimme die Kardinalitäten (in Min..Max-Notation) für folgende Beziehungen:\n1. Mitarbeiter zu Laptop (Ein Laptop gehört genau einem Mitarbeiter. Ein Mitarbeiter kann keinen oder mehrere Laptops besitzen.)\n2. Mitarbeiter zu Projekt (In einem Projekt arbeiten mehrere Mitarbeiter. Ein Mitarbeiter kann in mehreren Projekten arbeiten.)",
        musterloesung: `Kardinalitäten in Min..Max-Notation:

1. Beziehung Mitarbeiter <-> Laptop (1:N):
- Mitarbeiter zu Laptop: 0..* (oder 0..N) (Ein Mitarbeiter kann 0 bis N Laptops besitzen).
- Laptop zu Mitarbeiter: 1..1 (Ein Laptop gehört genau einem Mitarbeiter).

2. Beziehung Mitarbeiter <-> Projekt (N:M):
- Mitarbeiter zu Projekt: 0..* (oder 0..N) (Ein Mitarbeiter kann in 0 bis N Projekten mitarbeiten).
- Projekt zu Mitarbeiter: 1..* (oder 1..N) (In einem Projekt arbeitet mindestens 1 bis N Mitarbeiter).`,
        explanation: `Lernkarte ER-Kardinalitäten:
- 1:N-Beziehungen werden über einen Fremdschlüssel auf der N-Seite (hier Laptop) realisiert.
- N:M-Beziehungen müssen im relationalen Modell über eine Verknüpfungstabelle (z. B. Projekt_Mitarbeiter) in zwei 1:N-Beziehungen aufgelöst werden.`
    }
,
    {
        id: 196,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Aufbauorganisation (Sommer 2026 / LF 6):\nDas aktuelle Organigramm eines IT-Unternehmens zeigt eine Struktur mit der Geschäftsführung an der Spitze, beratenden Stellen (Öffentlichkeitsarbeit, Rechtsabteilung) an der Seite und einer Aufteilung in Funktionsbereiche (Einkauf, Entwicklung) sowie Kundensegmente (Privatkunden, Behörden).\n\nBeantworte folgende Fragen:\n1. Nenne und erkläre die 3 verschiedenen Organisationsstrukturen, die in dieser Mischstruktur enthalten sind.\n2. Nenne und erkläre die Stellenarten, die im Organigramm dargestellt sind.\n3. Beschreibe jeweils einen wesentlichen Vorteil und Nachteil dieser divisionalen und funktionalen Mischstruktur.",
        musterloesung: `1. Die 3 Organisationsstrukturen:
- Einliniensystem (oder Stabliniensystem): Klare Dienstwege von der Geschäftsführung nach unten mit beratenden Stabsstellen an der Seite.
- Funktionale Organisation (Verrichtungsorganisation): Aufteilung der Abteilungen nach Aufgaben (Einkauf, Entwicklung, Fertigung, Verkauf, Verwaltung, Rechnungswesen).
- Divisionale Organisation (Spartenorganisation / Objektorganisation): Aufteilung der nachgelagerten Stellen nach Kundengruppen (Privatkunden, Gewerbe & Unternehmen, Behörden).

2. Stellenarten:
- Instanz (Leitende Stelle): Stelle mit Weisungsbefugnis und Fachverantwortung (z. B. Geschäftsführung).
- Linienstelle (Ausführende Stelle): Abteilung oder Mitarbeiter im regulären Dienstweg mit Fachverantwortung für bestimmte Aufgaben (z. B. Einkauf, Entwicklung).
- Stabsstelle: Beratende, unterstützende Stelle ohne direkte Weisungsbefugnis gegenüber der Linie (z. B. Rechtsabteilung, Öffentlichkeitsarbeit).

3. Vor- und Nachteile:
- Vorteil: Sehr hohe Kundenorientierung und Flexibilität durch die kundenorientierten Sparten (Divisionen); gleichzeitig klare fachliche Spezialisierung im Funktionsbereich.
- Nachteil: Hohe Personalkosten durch die Gefahr von Doppelarbeiten (z. B. wenn jede Sparte eigene administrative Aufgaben erledigt); erhöhter Koordinationsbedarf zwischen den Sparten und Funktionen.`,
        explanation: `Lernkarte Aufbauorganisation:
- Einliniensysteme zeichnen sich durch Eindeutigkeit der Weisungswege aus.
- Stabsstellen dienen der Entlastung der Instanzen, treffen aber selbst keine operativen Weisungen.
- Spartenorganisationen gliedern nach Objekten (Produkten, Regionen oder Kunden).`
    },
    {
        id: 197,
        isBawueFocus: true,
        theme: "lf6",
        type: "open-text",
        question: "Prüfungsaufgabe Handelskalkulation (Sommer 2026 / LF 6):\nFür einen neuen Artikel im Sortiment soll eine Handelskalkulation durchgeführt werden. Folgende Daten sind bekannt:\n- Barverkaufspreis (netto): 1.000,00 EUR\n- Handlungskostenzuschlag: 20 %\n- Lieferer-Rabatt: 10 %\n- Gewinnzuschlag: 5 %\n- Bezugskosten (Transport): 25,00 EUR\n- Lieferer-Skonto: 3 %\n\nErmittle den Listeneinkaufspreis (netto) mittels Rückwärtskalkulation. Der vollständige Rechenweg ist anzugeben.",
        musterloesung: `Rückwärtskalkulation (von unten nach oben):

1. Selbstkostenpreis berechnen:
   Barverkaufspreis = 1.000,00 EUR (entspricht 105 %, da Gewinn = 5 % auf Selbstkosten aufgeschlagen wird)
   Selbstkostenpreis = 1.000,00 EUR / 1,05 = 952,38 EUR
   Gewinn = 47,62 EUR

2. Bezugspreis (Einstandspreis) berechnen:
   Selbstkostenpreis = 952,38 EUR (entspricht 120 %, da Handlungskosten = 20 % auf den Bezugspreis aufgeschlagen werden)
   Bezugspreis = 952,38 EUR / 1,20 = 793,65 EUR
   Handlungskosten = 158,73 EUR

3. Bareinkaufspreis berechnen:
   Bezugspreis = Bareinkaufspreis + Bezugskosten
   Bareinkaufspreis = 793,65 EUR - 25,00 EUR = 768,65 EUR

4. Zieleinkaufspreis berechnen:
   Bareinkaufspreis = 768,65 EUR (entspricht 97 %, da Liefererskonto = 3 % vom Zieleinkaufspreis abgezogen wird)
   Zieleinkaufspreis = 768,65 EUR / 0,97 = 792,42 EUR
   Liefererskonto = 23,77 EUR

5. Listeneinkaufspreis berechnen:
   Zieleinkaufspreis = 792,42 EUR (entspricht 90 %, da Liefererrabatt = 10 % vom Listeneinkaufspreis abgezogen wird)
   Listeneinkaufspreis = 792,42 EUR / 0,90 = 880,47 EUR
   Liefererrabatt = 88,05 EUR

Ergebnis: Der Listeneinkaufspreis beträgt 880,47 EUR.`,
        explanation: `Lernkarte Handelskalkulation (Rückwärts):
- Gewinnsatz und Handlungskostensatz beziehen sich in der Einkaufskalkulation immer auf die vorherige Stufe (Selbstkosten bzw. Bezugspreis = Basis 100 %).
- Bezugskosten werden bei der Rückwärtsrechnung vom Bezugspreis abgezogen, um den Bareinkaufspreis zu erhalten.
- Rabatt und Skonto beziehen sich auf den Listeneinkaufspreis bzw. Zieleinkaufspreis.`
    },
    {
        id: 198,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Datenverfügbarkeit & RAID (Sommer 2026 / LF 4):\n1. Berechne die maximale Ausfallzeit pro Jahr (in Minuten) für die Verfügbarkeitsklasse 3 (99,9 % Verfügbarkeit) bei 365 Tagen.\n2. Berechne die nutzbare Speicherkapazität (in TB) bei 6 Festplatten mit jeweils 20 TB Kapazität (ohne Hot-Spare) für ein RAID 5 und ein RAID 10.\n3. Begründe anhand des Aufbaus eines RAID 10 Systems, warum der Umstieg von RAID 5 auf RAID 10 die Datenverfügbarkeit positiv beeinflusst.\n4. Bewerte die Aussage: 'Wenn man RAID verwendet, benötigt man kein Backup.'",
        musterloesung: `1. Maximale Ausfallzeit pro Jahr:
- Gesamtminuten pro Jahr = 365 Tage * 24 Std * 60 Min = 525.600 Minuten.
- Maximale Ausfallzeit (0,1 % von 525.600) = 525.600 * 0,001 = 525,6 Minuten (entspricht 8 Stunden und 45,6 Minuten).

2. Nutzbare Speicherkapazität:
- RAID 5: Kapazität = (n - 1) * Festplattengröße = (6 - 1) * 20 TB = 100 TB nutzbarer Speicher.
- RAID 10: Kapazität = (n / 2) * Festplattengröße = (6 / 2) * 20 TB = 60 TB nutzbarer Speicher.

3. Begründung des Umstiegs auf RAID 10:
- RAID 10 spiegelt die Daten zuerst (RAID 1) und verteilt sie dann (RAID 0). Dadurch kann in jedem Spiegelpaar eine Platte ausfallen, ohne dass Daten verloren gehen (im Idealfall bis zu 3 Platten gleichzeitig).
- Zudem entfällt die Paritätsberechnung von RAID 5. Ein Rebuild (Wiederherstellung nach Plattenwechsel) belastet das System deutlich weniger und geht viel schneller, was das Risiko eines Folgeausfalls während der kritischen Rebuild-Phase stark senkt.

4. Bewertung der Aussage:
- Die Aussage ist falsch. RAID sorgt für Betriebskontinuität und Ausfallsicherheit bei physischen Festplattendefekten (Hardware-Redundanz). Es schützt jedoch nicht vor logischem Datenverlust (z. B. durch Viren, Ransomware/Verschlüsselung, versehentliches Löschen, Softwarefehler) oder physischen Katastrophen (Brand, Diebstahl, Überschwemmung). Hierfür ist zwingend ein externes, getrenntes Backup erforderlich.`,
        explanation: `Lernkarte Datenverfügbarkeit:
- RAID erhöht die Ausfallsicherheit (High Availability), ist aber kein Ersatz für Datensicherung (Disaster Recovery).
- RAID 5 verkraftet den Ausfall von maximal 1 beliebigen Festplatte.
- RAID 10 halbiert die Bruttokapazität durch Spiegelung.`
    },
    {
        id: 199,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe IPv6-Konfiguration (Sommer 2026 / LF 3):\nEin Provider teilt ein IPv6-Präfix 2001:0db8:00ea:2300::/56 zu. Das Subnetz für den Admin-PC lautet 2001:0db8:00ea:2301::/64. Der Admin-PC hat die PC-Nummer AB.1001. Die Router-Schnittstelle im lokalen Netz (Gateway) hat fe80::1, der lokale DNS-Server fe80::d.\n\nGib eine vollständige manuelle IPv6-Konfiguration in Kurzform für den Admin-PC an:\n1. Globale IPv6-Adresse (mit Präfixlänge /64; die PC-Nummer AB.1001 muss im Interface-Identifier enthalten sein)\n2. Standardgateway\n3. Bevorzugter DNS-Server",
        musterloesung: `Manuelle IPv6-Konfiguration (Kurzform):

1. Globale IPv6-Adresse: 2001:db8:ea:2301::ab:1001/64
   * Erklärung zur Kurzform: Führende Nullen in Blöcken werden weggelassen (db8 statt 0db8, ea statt 00ea). Aufeinanderfolgende Null-Blöcke werden durch :: abgekürzt. Der Interface-Identifier am Ende enthält die PC-Nummer als Hexadezimalwert (ab:1001).
   
2. Standardgateway: fe80::1
   * Erklärung: Link-Local-Adresse der Router-Schnittstelle im lokalen Netz.

3. Bevorzugter DNS-Server: fe80::d
   * Erklärung: Link-Local-Adresse des DNS-Servers im lokalen Netz.`,
        explanation: `Lernkarte IPv6-Regeln:
- IPv6-Adressen bestehen aus 8 Blöcken à 16 Bit (hexadezimal).
- Das Kürzen erfolgt durch: 1. Weglassen führender Nullen pro Block, 2. Einmaliges Ersetzen von aufeinanderfolgenden Nullblöcken durch ::.
- Link-Local-Adressen (fe80::/10) sind nur im lokalen Segment gültig und werden häufig für Gateways und lokale Dienste verwendet.`
    },
    {
        id: 200,
        isBawueFocus: true,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Programmierung CSV-Prüfung (Sommer 2026 / LF 5):\nEin Kunde meldet fehlerhafte Artikelpreise in Bestellungen. Schreibe eine JavaScript-Funktion 'pruefeFehlendenPreis(daten, artikelID)', die ein Array von CSV-Zeilen ('daten') und eine Artikel-ID ('artikelID') erhält.\nDie CSV-Struktur lautet:\nBestellID;Bestelldatum;ArtikelID;Artikelbezeichnung;Menge;Preis;Hersteller;HerstellerID\n\nDie Funktion soll 'true' zurückgeben, wenn für die übergebene 'artikelID' mindestens eine Zeile existiert, in welcher der Preis leer (leerer String) oder gleich 'NULL' ist. Andernfalls soll 'false' zurückgegeben werden.",
        musterloesung: `JavaScript-Code:
\`\`\`javascript
function pruefeFehlendenPreis(daten, artikelID) {
    // Schleife durch alle übergebenen Zeilen des Arrays
    for (let i = 0; i < daten.length; i++) {
        let zeile = daten[i];
        
        // Zeile anhand des Semikolons in Felder aufteilen
        let felder = zeile.split(";");
        
        // Sicherstellen, dass die Zeile genügend Felder hat
        if (felder.length > 5) {
            let currentArtikelID = felder[2]; // Index 2: ArtikelID
            let preis = felder[5];           // Index 5: Preis
            
            // Wenn die gesuchte Artikel-ID übereinstimmt
            if (currentArtikelID === artikelID) {
                // Prüfe, ob das Preisfeld leer ist oder den String 'NULL' enthält
                if (preis === "" || preis === "NULL") {
                    return true; // Unvollständiger Preis gefunden!
                }
            }
        }
    }
    return false; // Alle Preise für diese ArtikelID sind vollständig vorhanden
}
\`\`\``,
        explanation: `Lernkarte CSV-Verarbeitung:
- Die split(';')-Methode teilt einen String an den Trennzeichen in ein Array von Teilstrings auf.
- In JavaScript beginnt die Indizierung bei 0 (BestellID = Index 0, Bestelldatum = Index 1, ArtikelID = Index 2, Preis = Index 5).
- Vorzeitiges Verlassen der Schleife per 'return true' spart Rechenleistung, sobald der erste Fehler gefunden wird.`
    },
    {
        id: 201,
        isBawueFocus: true,
        theme: "lf5",
        type: "open-text",
        question: "Prüfungsaufgabe Datenbanken & SQL (Sommer 2026 / LF 5):\n1. Gegeben ist die flache CSV-Struktur:\nBestellID;Bestelldatum;ArtikelID;Artikelbezeichnung;Menge;Preis;Hersteller;HerstellerID\nÜberführe diese Struktur in ein redundanzfreies Relationenmodell in der 3. Normalform (3NF). Kennzeichne Primärschlüssel (PK) und Fremdschlüssel (FK) eindeutig.\n2. Gegeben ist die Relation: Kunde (KundeID, Name, Straße, Telefonnr, Email, Ortnr)\nFormuliere einen SQL-Befehl, der alle Kunden anzeigt, bei denen keine E-Mail-Adresse hinterlegt ist.",
        musterloesung: `1. Relationenmodell in 3. Normalform (3NF):
- Bestellung (BestellID [PK], Bestelldatum)
- Bestellposition (BestellID [PK][FK], ArtikelID [PK][FK], Menge)
- Artikel (ArtikelID [PK], Artikelbezeichnung, Preis, HerstellerID [FK])
- Hersteller (HerstellerID [PK], Hersteller)

* Erklärung zur Normalisierung: 
  * 1NF: Alle Attribute sind atomar (bereits gegeben).
  * 2NF: Jedes Nicht-Primärattribut ist voll funktionell abhängig vom Primärschlüssel. Die Menge hängt von der Kombination aus BestellID und ArtikelID ab (n:m), während Bestelldatum nur von BestellID und Artikeldaten nur von ArtikelID abhängen. Daher Aufteilung in eigene Relationen.
  * 3NF: Keine transitiven Abhängigkeiten. Der Herstellername hängt von der HerstellerID ab, welche wiederum von der ArtikelID abhängt. Daher wird die HerstellerID zum Fremdschlüssel und der Herstellername in eine eigene Tabelle ausgelagert.

2. SQL-Abfrage:
\`\`\`sql
SELECT * FROM Kunde 
WHERE Email IS NULL OR Email = '';
\`\`\``,
        explanation: `Lernkarte Normalisierung & SQL:
- Primärschlüssel identifizieren einen Datensatz eindeutig. Zusammengesetzte Schlüssel werden in n:m-Verknüpfungstabellen (Bestellposition) verwendet.
- Fremdschlüssel verweisen auf die Primärschlüssel anderer Relationen, um Beziehungen abzubilden.
- NULL repräsentiert einen fehlenden oder unbekannten Wert in Datenbanken und muss mit 'IS NULL' abgefragt werden.`
    }
,
    {
        id: 202,
        isBawueFocus: true,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe PC-Hardware & Mainboard (Sommer 2022 / LF 2):\nBeantworte folgende Fragen zum Hardware-Zusammenbau und zur Systemleistung:\n1. Nenne die drei Schritte für den Einbau einer CPU und beschreibe, welche zwei Punkte beim Einsetzen besonders zu beachten sind.\n2. Erläutere, welche Aufgabe die Wärmeleitpaste hat.\n3. Erläutere, was beim Einsetzen von zwei RAM-Riegeln beachtet werden muss, damit diese im Dual Channel Modus arbeiten.\n4. Nenne je einen Vorteil und Nachteil einer M.2 SSD gegenüber einer SATA SSD.\n5. Nenne zwei Vorteile eines USB-C Anschlusses gegenüber einem USB-3.0-Anschluss (Typ A).\n6. Beschreibe, welche Besonderheit ein umrahmter USB-Anschluss mit der Beschriftung 'BIOS / BIOS FLBK' (Flashback) an der Gehäuserückseite hat.\n7. Erläutere den Begriff 'Logische Prozessoren' im Taskmanager und gib eine Taktfrequenz von 3,4 GHz in Hertz an.",
        musterloesung: `1. Schritte beim CPU-Einbau:
- Hebel des CPU-Sockels nach oben ziehen (anheben).
- Die CPU vorsichtig unter Beachtung der korrekten Ausrichtung (Pfeilmarkierungen deckungsgleich bringen) in den Sockel einsetzen.
- Den Hebel wieder nach unten drücken und arretieren, um die CPU zu sichern.
* Zu beachten beim Einsetzen:
  - Die Orientierung muss stimmen: Der Pfeil auf der CPU muss exakt auf den Pfeil am CPU-Sockel ausgerichtet sein (die CPU passt nur in einer Position).
  - Keine Gewalt anwenden: Die CPU darf nicht in den Sockel gepresst werden, um ein Verbiegen der empfindlichen Kontakte im Sockel zu vermeiden.

2. Aufgabe der Wärmeleitpaste:
- Die Wärmeleitpaste gleicht mikroskopisch kleine Unebenheiten und Lufteinschlüsse zwischen der CPU-Oberfläche und dem Kühlkörper aus. Da Luft Wärme extrem schlecht leitet, minimiert die Paste den thermischen Widerstand und optimiert die Wärmeabgabe an den Kühler.

3. RAM im Dual-Channel-Modus betreiben:
- Die RAM-Riegel müssen in separate Speicherkanäle eingesetzt werden. Bei vier vorhandenen Slots bestückt man in der Regel paarweise entweder die Slots DIMM A2 und DIMM B2 (primär empfohlen) oder alternativ DIMM A1 und DIMM B1. Werden fälschlicherweise Slots desselben Kanals (z. B. A1 und A2) belegt, läuft der RAM nur im langsameren Single-Channel-Modus.

4. M.2 SSD vs. SATA SSD:
- Vorteil: Wesentlich höhere Datenübertragungsraten (NVMe über PCIe-Lanes) sowie kabellose, platzsparende Montage direkt auf dem Mainboard.
- Nachteil: Höhere Wärmeentwicklung unter Dauerlast (kann zur temperaturbedingten Drosselung führen) sowie oft ein etwas höherer Anschaffungspreis pro Gigabyte.

5. Vorteile von USB-C gegenüber USB 3.0 Typ-A:
- Punktsymmetrische Bauform (der Stecker ist verdrehsicher und kann in beiden Ausrichtungen eingesteckt werden).
- Unterstützung alternativer Protokolle (z. B. DisplayPort, Thunderbolt) sowie deutlich höhere Leistungsübertragung (Power Delivery) zum Laden von größeren Geräten.

6. Besonderheit des USB-Flashback-Anschlusses:
- Über diesen dedizierten Port kann eine neue BIOS/UEFI-Firmware direkt von einem USB-Stick aufgespielt werden, ohne dass eine CPU, RAM oder eine Grafikkarte auf dem Mainboard installiert sein müssen (BIOS-Flashback).

7. Taskmanager-Auswertung:
- Logische Prozessoren: Bezeichnet die Anzahl der dem Betriebssystem zur Verfügung stehenden virtuellen Kerne. Durch Multithreading (Hyper-Threading / SMT) kann ein physischer Rechenkern zwei Threads parallel abarbeiten (z. B. 16 physische Kerne = 32 logische Prozessoren).
- Taktfrequenz in Hertz: 3,4 GHz entsprechen 3.400.000.000 Hz (3,4 Milliarden Hertz).`,
        explanation: `Lernkarte PC-Systeme & Hardware:
- Die CPU-Ausrichtung wird durch eine kleine Dreiecksmarkierung an einer Ecke signalisiert.
- Dual-Channel verdoppelt die Busbreite des Speicher-Interface von 64 Bit auf 128 Bit.
- BIOS-Flashback schützt das Mainboard vor Unbrauchbarkeit bei fehlerhaften Updates.`
    },
    {
        id: 203,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe WLAN & OSI-Modell (Sommer 2022 / LF 3):\nEin Client soll per WLAN angebunden werden. Beantworte folgende Fragen zum Netzwerk-Troubleshooting:\n1. Nenne zwei wesentliche Informationen, die vom Administrator erfragt werden müssen, um das Notebook im WLAN anzumelden (WPA-PSK).\n2. Nenne je einen Vor- und Nachteil von WPA-Enterprise (RADIUS) gegenüber WPA-PSK und gib eine Empfehlung für die passende Unternehmensgröße.\n3. Ergänze die fehlenden Spalten der OSI-Modell-Fehlersuchtabelle für Schicht 7 (Anwendung), Schicht 3 (Vermittlung), Schicht 2 (Sicherung) und Schicht 1 (Bitübertragung) mit Name, Protokoll, Adresse und einem typischen Fehler.\n4. Eine ipconfig-Ausgabe zeigt die MAC-Adresse 50-1A-C5-F2-38-B7 und die IPv6-Adresse fe80::85e1:1ec1:c9e2:3cbb. Erkläre jeweils kurz die Herkunft dieser beiden Adressen.\n5. Der Client erhält per DHCP die IP-Adresse 192.168.0.52 mit der Subnetzmaske 255.255.255.0 und dem Gateway 192.168.0.1. Bestimme die Netzadresse, die Hostadresse und die Broadcastadresse.\n6. Ein anschließender Ping auf das Standardgateway (192.168.0.1) ist erfolgreich. Warum zeigt das System dennoch 'Kein Netzwerkzugriff'?",
        musterloesung: `1. Benötigte Informationen für WPA-PSK:
- Die SSID (Netzwerkname) zur Identifikation des WLANs.
- Der WPA-PSK-Netzwerkschlüssel (WLAN-Passwort).

2. WPA-Enterprise (RADIUS) vs. WPA-PSK:
- Vorteil: Deutlich höhere Sicherheit. Jeder Nutzer besitzt eigene Anmeldedaten. Scheidet ein Mitarbeiter aus, wird nur sein Account gesperrt. Bei WPA-PSK müsste das Passwort für alle Geräte im Unternehmen geändert werden.
- Nachteil: Hoher Administrations- und Hardwareaufwand ( RADIUS-Server, Benutzerverwaltung/Active Directory zwingend erforderlich).
- Empfehlung: Für mittlere bis große Unternehmen geeignet.

3. OSI-Tabelle Ergänzungen:
- Schicht 7: Anwendungsschicht (Application) | Protokoll: HTTP, HTTPS, DHCP, DNS | Adresse: - | Fehler: Webserver antwortet nicht.
- Schicht 3: Vermittlungsschicht (Network) | Protokoll: IP (IPv4, IPv6), ICMP | Adresse: IP-Adresse | Fehler: Falsches Standardgateway konfiguriert.
- Schicht 2: Sicherungsschicht (Data Link) | Protokoll: Ethernet, IEEE 802.11 (WLAN) | Adresse: MAC-Adresse | Fehler: MAC-Filter sperrt Client / falsches WLAN-Passwort.
- Schicht 1: Bitübertragungsschicht (Physical) | Protokoll: - | Adresse: - | Fehler: Medium getrennt / Hardware defekt.

4. Herkunft der Adressen:
- MAC-Adresse (50-1A-C5-F2-38-B7): Die physische Adresse des WLAN-Adapters. Sie wird vom Hersteller fest eingebrannt und ist weltweit eindeutig.
- IPv6-Adresse (fe80::85e1:1ec1:c9e2:3cbb): Eine Link-Local-Adresse (Präfix fe80::). Sie wird vom Betriebssystem automatisch generiert (SLAAC/EUI-64 oder zufällig) und ist nur im lokalen Segment gültig.

5. Adressberechnung (Subnetz 192.168.0.52/24):
- Netzadresse: 192.168.0.0
- Hostadresse: 192.168.0.52
- Broadcastadresse: 192.168.0.255

6. Fehleranalyse (Ping auf Gateway erfolgreich, aber kein Internet):
- Da das Standardgateway (der Router) antwortet, ist die Verbindung im lokalen Netzwerk (LAN) in Ordnung. Der Fehler liegt außerhalb des lokalen Netzes: Entweder hat der Router selbst keine Verbindung ins WAN (Internetverbindung unterbrochen) oder es liegt ein Ausfall des DNS-Servers vor (Webseiten-Namen können nicht in IP-Adressen übersetzt werden).`,
        explanation: `Lernkarte WLAN & Netzwerk-Troubleshooting:
- DHCP (Dynamic Host Configuration Protocol) vergibt IP-Adressen dynamisch an Clients.
- Link-Local-Adressen (fe80::/10) werden nicht über Router hinweg weitergeleitet.
- Ping (ICMP Echo Request) testet die Erreichbarkeit auf Schicht 3 des OSI-Modells.`
    }
,
    {
        id: 204,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Speichersysteme & Datenvolumen (Herbst 2022 / LF 4):\nEine Produktionslinie erzeugt Kartonbahnen mit einer Breite von 50,80 cm und einer Geschwindigkeit von 30,48 m/min. Zur Qualitätskontrolle werden fortlaufend Kamerabilder erfasst (Scanfläche pro Aufnahme: 50,80 cm breit x 30,48 cm lang; Auflösung: 400x400 dpi; Farbtiefe: 16 Bit; 1 Inch = 2,54 cm). Die Produktionszeit beträgt 12 Stunden am Tag.\n\nBeantworte folgende Fragen:\n1. Ermittle die Anzahl der Aufnahmen/Scans pro Tag.\n2. Berechne das zu speichernde Datenvolumen in MiB pro Scan.\n3. Berechne das gesamte Datenvolumen pro Tag in TiB (auf volle TiB aufrunden).\n4. Berechne die maximale Netto-Speicherkapazität (in TB) bei einer RAID 5 Konfiguration unter Verwendung aller verfügbaren Festplatten (2x 3 TB und 7x 2 TB) an einem RAID-Hostadapter.\n5. Berechne die Kapazität desselben Plattenpools bei Einsatz von JBOD und nenne zwei Vorteile von JBOD gegenüber einem RAID 0.\n6. Nenne drei Vorteile eines SAN (Storage Area Network) gegenüber einem NAS (Network Attached Storage).\n7. Nenne jeweils einen Vor- und Nachteil der Kennzeichnung mittels QR-Code bzw. RFID-Chips gegenüber dem herkömmlichen Barcode.",
        musterloesung: `1. Anzahl der Aufnahmen pro Tag:
- Geschwindigkeit: 30,48 m/min = 3048 cm/min.
- Länge eines Scans: 30,48 cm.
- Scans pro Minute: 3048 cm / 30,48 cm = 100 Scans.
- Scans pro Tag (12 Stunden): 100 Scans/min * 60 min/std * 12 std/Tag = 72.000 Scans/Tag.

2. Datenvolumen pro Scan in MiB:
- Breite in Inch: 50,80 cm / 2,54 cm = 20 Inch.
- Länge in Inch: 30,48 cm / 2,54 cm = 12 Inch.
- Pixelanzahl: (20 Inch * 400 dpi) * (12 Inch * 400 dpi) = 8.000 * 4.800 = 38.400.000 Pixel.
- Datenvolumen pro Scan: 38.400.000 Pixel * 16 Bit (2 Byte) = 76.800.000 Byte.
- Umrechnung in MiB: 76.800.000 Byte / 1024 / 1024 = 73,24 MiB.

3. Gesamtvolumen pro Tag in TiB:
- Gesamtvolumen: 72.000 Scans * 73,24 MiB = 5.273.280 MiB.
- Umrechnung in TiB: 5.273.280 MiB / 1024 / 1024 = 5,03 TiB.
- Aufgerundet auf volle TiB: 6 TiB.
*(Hinweis: Bei IHK-Standardwerten von 100.000 Scans und 70 MiB: 100.000 * 70 MiB = 7.000.000 MiB / 1024^2 = 6,68 TiB -> aufgerundet 7 TiB).*

4. Maximale RAID 5 Kapazität:
- Da in einem RAID 5 alle Festplatten gleich groß sein müssen, werden die 3 TB Platten als 2 TB Platten behandelt.
- Anzahl der nutzbaren Platten (n) = 7 + 2 = 9 Platten.
- Kapazität: (n - 1) * kleinste Plattengröße = (9 - 1) * 2 TB = 16 TB Netto-Speicherkapazität.
*(Ein RAID 5 mit nur den zwei 3 TB Platten ist nicht möglich, da mindestens 3 Platten benötigt werden).*

5. JBOD-Kapazität & Vorteile:
- JBOD-Kapazität (Summe aller Platten): (2 * 3 TB) + (7 * 2 TB) = 6 TB + 14 TB = 20 TB (bzw. 20 TiB).
* Vorteile von JBOD gegenüber RAID 0:
  - Unterschiedliche Festplattengrößen können verlustfrei kombiniert werden (bei RAID 0 bestimmt die kleinste Platte die nutzbare Größe aller anderen).
  - Höhere Datensicherheit bei Plattenausfall: Fällt eine Platte in JBOD aus, sind nur die Daten dieser einen Platte verloren. Bei RAID 0 sind sofort alle Daten im gesamten Verbund unwiderruflich zerstört.

6. Vorteile eines SAN gegenüber einem NAS:
- Blockbasierter Speicherzugriff (deutlich schneller und effizienter für Datenbanken und Virtualisierung).
- Eigener, dedizierter Netzwerk-Übertragungsweg (z. B. Fibre Channel oder iSCSI), wodurch das reguläre Benutzer-LAN entlastet wird.
- Bessere Skalierbarkeit und flexiblere dynamische Speicherzuweisung an Server.

7. QR-Code & RFID vs. Barcode:
- QR-Code Vorteil: Kann deutlich mehr Daten speichern, besitzt Fehlerkorrektur (trotz Verschmutzung lesbar) und ist omnidirektional (aus jedem Winkel) scannbar.
- QR-Code Nachteil: Benötigt Kamera-Scanner statt einfacher Laser-Scanner; optische Sichtverbindung zwingend nötig.
- RFID-Chip Vorteil: Keine optische Sichtverbindung nötig; Pulkerfassung möglich (hunderte Chips gleichzeitig über Distanz auslesen); Chips sind wiederbeschreibbar.
- RFID-Chip Nachteil: Sehr hohe Anschaffungskosten für Etiketten und Lesesysteme; Störanfälligkeit durch Metalle und Flüssigkeiten.`,
        explanation: `Lernkarte Speichersysteme & Medien:
- MiB (Mebibyte) und TiB (Tebibyte) basieren auf dem Binärsystem (Faktor 1024), während MB und TB auf dem Dezimalsystem (Faktor 1000) basieren.
- RAID 5 verteilt Paritätsdaten über alle Platten und verkraftet den Ausfall von genau einer Platte.
- SAN arbeitet auf Blockebene (wie lokale Platten), NAS stellt Freigaben auf Dateiebene (Protokolle SMB, NFS) zur Verfügung.`
    },
    {
        id: 205,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe IPv6 & Nutzwertanalyse (Herbst 2022 / LF 3):\nBeantworte folgende netzwerk- und beschaffungsbezogene Fragen:\n1. Nenne zwei technologische Vorteile der IPv6-Adressierung gegenüber IPv4 für den Bereich IoT.\n2. Gegeben ist die IPv6-Adresse 2001:da8:5f2d:28::/64. Gib das ungekürzte Standortpräfix (48 Bit) und die ungekürzte Teilnetz-ID (16 Bit) im Hexadezimalformat an.\n3. Bestimme, wie viele Subnetze (/64) mit einem /48-Präfix gebildet werden können.\n4. In einer Testumgebung mit dem Präfix 2001:da8:5f2d:29::/64 hat der Router die IP ::1 und der Switch ::2. Vergib sinnvolle Gateway- und Host-IPv6-Adressen für: den Switch, einen Sensor, eine Steuerung und einen Industrie-PC (IP: ::20).\n5. Gib die IPv6-Befehle an, um die Erreichbarkeit des Loopback-Interfaces sowie des Gateways (Router) zu prüfen.\n6. Erkläre die Herkunft der IPv6-Adresse fe80::62eb:69ff:fed2:d2a6/64.\n7. Ein IT-Einkauf vergleicht drei Angebote für 30 Laptops (Noteplus AG: 1015€ gesamt, Lieferzeit 5 Wochen, Qual. Gut, Mängel bekannt; Notebook-Clever: 1110€ gesamt, Lieferzeit 3 Wochen, Qual. Durchschnitt, keine Beanstandung; PC-Genie: 1300€ gesamt, Lieferzeit 1 Woche, Qual. Sehr gut, hohe Kulanz). Führe eine Nutzwertanalyse (Skala 1 bis 3) mit den Kriterien Bezugspreis (Gew. 11), Lieferzeit (Gew. 8), Qualität (Gew. 9) und Erfahrung (Gew. 5) durch. Berechne die Gesamtpunkte und gib eine begründete Empfehlung ab.",
        musterloesung: `1. Vorteile von IPv6 im IoT:
- Nahezu unerschöpflicher Adressraum (jedes Gerät weltweit kann eine eindeutige globale IP erhalten; NAT entfällt).
- Automatische Adresskonfiguration (SLAAC ermöglicht Plug-and-Play ohne DHCP-Server).
- Schlankerer Protokoll-Header beschleunigt die Verarbeitung in kleinen Routern/Gateways.

2. Ungekürzte IPv6-Bestandteile:
- Ungekürztes Standortpräfix (48 Bit): 2001:0da8:5f2d
- Ungekürzte Teilnetz-ID (16 Bit): 0028

3. Anzahl der Teilnetze:
- Für die Subnetz-ID verbleiben 64 Bit - 48 Bit = 16 Bit.
- Anzahl der Teilnetze = 2^16 = 65.536.

4. IPv6-Adressvergabe in der Testumgebung:
- Switch: Adresse = 2001:da8:5f2d:29::2/64 | Gateway = 2001:da8:5f2d:29::1/64
- Sensor: Adresse = 2001:da8:5f2d:29::18/64 (oder jede freie Host-ID, z.B. ::3) | Gateway = 2001:da8:5f2d:29::1/64
- Steuerung: Adresse = 2001:da8:5f2d:29::19/64 (oder jede freie Host-ID, z.B. ::4) | Gateway = 2001:da8:5f2d:29::1/64
- Industrie-PC: Adresse = 2001:da8:5f2d:29::20/64 | Gateway = 2001:da8:5f2d:29::1/64

5. IPv6-Pingbefehle:
- Loopback-Interface: ping ::1
- Standardgateway: ping 2001:da8:5f2d:29::1

6. Herkunft der Adresse fe80::62eb:69ff:fed2:d2a6:
- Es handelt sich um eine Link-Local-Adresse (erkenntlich am Präfix fe80::). Diese wird vom Betriebssystem automatisch für das lokale Netzsegment generiert (SLAAC, oft unter Einbeziehung der MAC-Adresse über EUI-64 oder zufallsbasiert).

7. Nutzwertanalyse:
- Bezugspreis (Gew. 11): Noteplus (cheapest) = 3 (33 P.) | Notebook-Clever = 2 (22 P.) | PC-Genie = 1 (11 P.)
- Lieferzeit (Gew. 8): Noteplus (5 W.) = 1 (8 P.) | Notebook-Clever (3 W.) = 2 (16 P.) | PC-Genie (1 W.) = 3 (24 P.)
- Qualität (Gew. 9): Noteplus = 2 (18 P.) | Notebook-Clever = 1 (9 P.) | PC-Genie = 3 (27 P.)
- Erfahrung/Service (Gew. 5): Noteplus = 1 (5 P.) | Notebook-Clever = 2 (10 P.) | PC-Genie = 3 (15 P.)

* Gesamtpunkte:
  - Noteplus AG, Mainz: 33 + 8 + 18 + 5 = 64 Punkte.
  - Notebook-Clever.de, Berlin: 22 + 16 + 9 + 10 = 57 Punkte.
  - PC-Genie KG, Frankfurt: 11 + 24 + 27 + 15 = 77 Punkte.
* Empfehlung: Es wird das Angebot der PC-Genie KG aus Frankfurt empfohlen, da es mit 77 Punkten den höchsten Nutzwert aufweist. Ausschlaggebend waren die extrem kurze Lieferzeit, die beste Qualität und der hervorragende Service.`,
        explanation: `Lernkarte IPv6 & Nutzwertanalyse:
- Link-Local-IPs fangen immer mit fe80:: an.
- Ein IPv6-Präfix /64 ist Standard für Endbenutzer-Netze, da es die Autokonfiguration (SLAAC) unterstützt.
- Die Nutzwertanalyse ist ein quantitatives Punktebewertungsverfahren zur Entscheidungsfindung bei mehreren Kriterien.`
    },
    {
        id: 206,
        isBawueFocus: true,
        theme: "lf4",
        type: "open-text",
        question: "Prüfungsaufgabe Betriebssystem-Sicherheit & BSI (Frühjahr 2023 / LF 4):\nBeantworte folgende Fragen zur Sicherheit von Arbeitsplatzrechnern und Richtlinien:\n1. Benenne im Schalenmodell eines PC-Systems die Schicht oberhalb und unterhalb des Betriebssystems und beschreibe jeweils eine Funktion dieser Schichten.\n2. Nenne zwei allgemeine Aufgaben des BSI (Bundesamt für Sicherheit in der Informationstechnik).\n3. Erkläre den Begriff 'Härtung' (hardening) eines Betriebssystems und nenne zwei typische Beispiele hierfür.\n4. Nenne zwei im Betriebssystem integrierte Systemwerkzeuge ('Bordmittel'), mit denen die IT-Sicherheit direkt erhöht werden kann.\n5. Beschreibe, wozu Gruppenrichtlinien (GPOs) auf einem Arbeitsplatzrechner eingesetzt werden können.\n6. Beschreibe, inwiefern eine Protokollierung (Logging) zur Erhöhung der IT-Sicherheit beitragen kann und nenne die besonderen datenschutzrechtlichen Anforderungen (DSGVO), die dabei beachtet werden müssen.",
        musterloesung: `1. Schalenmodell des PC-Systems:
- Schicht oberhalb des OS: Anwendungsschicht (Anwendungsprogramme)
  * Funktion: Interaktion mit dem Benutzer zur Ausführung spezifischer Aufgaben (z. B. Webbrowser, Office-Programme), greift über APIs des Betriebssystems auf Hardware-Ressourcen zu.
- Schicht unterhalb des OS: Hardwareschicht (und BIOS/UEFI)
  * Funktion: Physikalische Ausführung von Berechnungen, Datenspeicherung und Bereitstellung physischer Schnittstellen (z. B. CPU, RAM, Netzwerkkarte).

2. Aufgaben des BSI:
- Abwehr von Sicherheitsrisiken für die IT-Systeme des Bundes.
- Erstellung von Sicherheitsstandards (z. B. IT-Grundschutz) und Durchführung von Sicherheitszertifizierungen für IT-Produkte.
- Information und Sensibilisierung der Öffentlichkeit (Bürger, Unternehmen) zu Gefahren im Cyberraum.

3. Härtung eines Betriebssystems:
- Definition: Konfiguration des OS zur Minimierung der Angriffsfläche durch Deaktivierung nicht benötigter Funktionen, Dienste und Protokolle.
- Beispiele:
  * Abschalten ungenutzter Dienste (z. B. Bluetooth oder Remoteregistrierung auf Desktop-PCs).
  * Schließen nicht benötigter Ports in der Firewall.
  * Regelmäßiges Patchen (automatische Sicherheitsupdates).

4. Integrierte Systemwerkzeuge (Bordmittel):
- Lokale Sicherheitsrichtlinien / Gruppenrichtlinien-Editor (gpedit.msc) zur Rechteverwaltung.
- Windows Defender Antivirus / Windows Defender Firewall.
- BitLocker zur vollständigen Festplattenverschlüsselung.

5. Einsatz von Gruppenrichtlinien (GPOs):
- GPOs dienen zur zentralen Konfiguration und Durchsetzung von Einstellungen für Benutzer und Computer im Netzwerk.
- Beispiele: Durchsetzung von Mindestpasswortlängen, Sperrung des Zugriffs auf die Eingabeaufforderung (cmd) oder Systemsteuerung, automatische Verteilung von Netzwerklaufwerken und Druckern.

6. Protokollierung (Logging) & Datenschutz:
* Beitrag zur IT-Sicherheit:
  - Nachvollziehbarkeit von Ereignissen (Audit-Trail: Wer hat sich wann angemeldet?).
  - Früherkennung von Angriffen (z. B. wiederholte Anmeldefehler).
  - Forensische Schadensanalyse nach einem Sicherheitsvorfall.
* Datenschutz-Anforderungen (DSGVO):
  - Personenbezogene Daten (z. B. IP-Adressen, Benutzernamen) dürfen nur pseudonymisiert oder anonymisiert erfasst werden, sofern für den Zweck nicht zwingend Klartext nötig ist.
  - Zweckbindung und definierte Aufbewahrungsfristen (Protokolle müssen nach Ablauf einer Frist, z. B. 7 oder 14 Tage, automatisch gelöscht werden).
  - Streng reglementierter Zugriff: Nur berechtigte Personen (IT-Sicherheitsbeauftragte) dürfen Protokolldaten einsehen, um internen Datenmissbrauch zu verhindern.`,
        explanation: `Lernkarte System-Sicherheit:
- GPOs (Group Policy Objects) können lokal (lgpo) oder über Active Directory (AD) verteilt werden.
- IT-Grundschutz-Kataloge des BSI bieten standardisierte Empfehlungen zur Absicherung von IT-Infrastrukturen.
- Logfiles sollten manipulationssicher an einen zentralen Syslog-Server weitergeleitet werden.`
    }
,
    {
        id: 207,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Überwachungskameras & Bandbreite (Sommer 2026 / LF 3/4):\nEin Logistikzentrum soll mit Sicherheitskameras ausgestattet werden. Beantworte folgende Aufgaben aus der Planung:\n1. In der Spezifikation steht 'no default passwords'. Beschreibe zwei mögliche Konsequenzen dieser Voreinstellung.\n2. Eine Kamera benötigt inklusive Infrarot-Nachtmodus (IR) und Heizung (heater) maximal 24 W Leistung. Wähle aus der Tabelle den passenden PoE-Standard (IEEE 802.3af mit 6,49-12,95 W oder IEEE 802.3at mit 12,95-25,50 W) und berechne die Stromstärke in mA bei einer Spannung von 48 V.\n3. Berechne die erforderliche Datenübertragungsrate in Mbit/s für einen Live-Stream bei einer Auflösung von 1920x1080 @ 30fps, einer Farbtiefe von 24 Bit und einer Komprimierung auf 30 % (Ergebnis auf volle Mbit/s aufrunden). Der Rechenweg ist anzugeben.\n4. Berechne die notwendige Speicherkapazität in TiB für die Aufnahmen von 4 Kameras über einen Zeitraum von 72 Stunden (reche mit der berechneten Übertragungsrate bzw. dem Ausweichwert von 482 Mbit/s). Ergebnis auf volle TiB aufrunden.\n5. Erkläre das Prinzip des 'Daisy Chaining' bei Monitoren und nenne einen Vorteil sowie die technischen Voraussetzungen zur Nutzung.",
        musterloesung: `1. Konsequenzen von "no default passwords":
- Erhöhte Sicherheit ab Werk: Der Administrator wird gezwungen, bei der Ersteinrichtung ein individuelles Kennwort festzulegen, was Angriffe über allbekannte Standardpasswörter (wie admin/admin) verhindert.
- Erhöhter Aufwand: Bei Passwortverlust kann kein Standardzugang genutzt werden, was einen physischen Werksreset der Kamera erforderlich macht.

2. PoE-Standard und Stromstärke:
- Gewählter Standard: IEEE 802.3at (PoE+), da die Leistungsaufnahme (24 W) im Bereich von 12,95 bis 25,50 W liegt.
- Stromstärke I = P / U = 24 W / 48 V = 0,5 A = 500 mA.

3. Datenübertragungsrate (Bandbreite) berechnen:
- Pixel pro Sekunde: 1920 * 1080 Pixel/Frame * 30 Frames/Sekunde = 62.208.000 Pixel/s.
- Datenmenge unkomprimiert: 62.208.000 Pixel/s * 24 Bit = 1.492.992.000 Bit/s.
- In Megabit pro Sekunde (dezimal): 1.492.992.000 Bit/s / 1.000.000 = 1492,992 Mbit/s.
- Komprimierung auf 30 %: 1492,992 Mbit/s * 0,30 = 447,8976 Mbit/s.
- Aufgerundet: 448 Mbit/s.
*(Hinweis: Bei binärer Umrechnung: 1.492.992.000 / 1024^2 = 1423,83 Mibit/s * 0,30 = 427,15 Mibit/s -> aufgerundet 428 Mibit/s).*

4. Speicherkapazität berechnen (für 72 Std. und 4 Kameras):
* Rechnung mit 448 Mbit/s:
  - Bandbreite gesamt: 4 * 448 Mbit/s = 1792 Mbit/s.
  - Datenvolumen pro Sekunde: 1792 Mbit/s / 8 = 224 MByte/s.
  - Gesamtsekunden in 72 Std.: 72 * 3600 s = 259.200 s.
  - Speicherbedarf: 224 MByte/s * 259.200 s = 58.060.800 MByte = 58.060.800.000.000 Byte.
  - In TiB (binär): 58.060.800.000.000 / 1024^4 = 52,80 TiB -> aufgerundet 53 TiB.
* Rechnung mit Ausweichwert 482 Mbit/s:
  - Bandbreite gesamt: 4 * 482 Mbit/s = 1928 Mbit/s.
  - Datenvolumen pro Sekunde: 1928 Mbit/s / 8 = 241 MByte/s.
  - Speicherbedarf: 241 MByte/s * 259.200 s = 62.467.200 MByte = 62.467.200.000.000 Byte.
  - In TiB (binär): 62.467.200.000.000 / 1024^4 = 56,81 TiB -> aufgerundet 57 TiB.

5. Daisy Chaining (Monitore):
- Prinzip: Monitore werden in Reihe hintereinander verkabelt (PC -> Monitor 1 -> Monitor 2 -> Monitor 3) statt jeder einzeln am PC angeschlossen zu werden.
- Vorteil: Deutlich verringerter Kabelsalat; am PC/Grafikkarte wird nur ein einziger DisplayPort-Ausgang benötigt.
- Voraussetzungen: Die Grafikkarte und das Betriebssystem müssen DisplayPort 1.2 oder höher mit MST (Multi-Stream Transport) unterstützen. Die Monitore in der Kette müssen einen DP-Eingang und einen DP-Ausgang besitzen (der letzte Monitor benötigt keinen Ausgang).`,
        explanation: `Lernkarte PoE & Video-Streaming:
- IEEE 802.3af (PoE) liefert bis zu 15,4 W am Switchport (ca. 12,95 W am Gerät).
- IEEE 802.3at (PoE+) liefert bis zu 30 W am Switchport (ca. 25,5 W am Gerät).
- DisplayPort MST ermöglicht es, mehrere unabhängige Videosignale über eine einzige physische Leitung zu übertragen.`
    },
    {
        id: 208,
        isBawueFocus: true,
        theme: "lf3",
        type: "open-text",
        question: "Prüfungsaufgabe Netzwerkgrundlagen & IPv6 (Sommer 2026 / LF 3):\nBeantworte folgende netzwerkbezogene Fragen:\n1. Erkläre die Bedeutung der LEDs an einem Ethernet-Netzwerkanschluss (durchgehendes Leuchten vs. unregelmäßiges Blinken).\n2. Ordne die folgenden Netzwerk-Komponenten/Begriffe den passenden Schichten (1, 2, 3, 4 oder 7) des OSI-Modells zu: DHCP, TCP, verbindungslokale IPv6-Adresse (fe80::), physische Adresse (MAC), Buchse mit LED.\n3. Gegeben ist die IPv6-Adresse fe80::521a:c5ff:fef2:38b7. Bestimme: die Gesamtlänge einer IPv6-Adresse in Bits, die ungekürzte Darstellung der Adresse, die Präfixlänge und den Interface-Identifier.\n4. Nenne zwei grundlegende Netzwerkinformationen, die ein Client von einem DHCP-Server erhält.\n5. Erkläre kurz die Aufgabe des Address Resolution Protocol (ARP) im Netzwerk.\n6. Gib den Befehl an, um die Verbindung zum Standardgateway 192.168.0.1 per Eingabeaufforderung zu prüfen.\n7. Ein PC hat die IP 192.168.0.52 und die MAC 50-1A-C5-F2-38-B7. Der lokale Router hat die IP 192.168.0.1 und die MAC d4-3f-cb-8c-37-8b. Welcher Adresse wird 'Eigener PC' und welcher 'Standardgateway' zugeordnet?",
        musterloesung: `1. Bedeutung der Netzwerk-LEDs:
- LED leuchtet durchgehend: Physische Verbindung (Link) zum Switch/Netzwerkpartner ist erfolgreich hergestellt (Schicht 1 steht).
- LED blinkt unregelmäßig: Es findet eine aktive Datenübertragung statt (Activity / Senden & Empfangen).

2. OSI-Schichten-Zuordnung:
- Schicht 7 (Anwendungsschicht / Application): DHCP
- Schicht 4 (Transportschicht / Transport): TCP
- Schicht 3 (Vermittlungsschicht / Network): Verbindungslokale IPv6-Adresse (fe80::)
- Schicht 2 (Sicherungsschicht / Data Link): Physische Adresse (MAC-Adresse)
- Schicht 1 (Bitübertragungsschicht / Physical): Buchse mit LED

3. IPv6-Eigenschaften für fe80::521a:c5ff:fef2:38b7:
- Gesamtlänge in Bits: 128 Bits.
- Ungekürzte Darstellung: fe80:0000:0000:0000:521a:c5ff:fef2:38b7 (oder fe80:0:0:0:521a:c5ff:fef2:38b7).
- Präfixlänge: /64 (Standard bei Link-Local-Adressen).
- Interface-Identifier (Host-Teil): 521a:c5ff:fef2:38b7.

4. Informationen durch den DHCP-Server:
- Eine eindeutige IPv4-Adresse.
- Die passende Subnetzmaske (sowie Standardgateway und DNS-Server-Adressen).

5. Aufgabe von ARP:
- ARP (Address Resolution Protocol) löst bekannte IP-Adressen (Schicht 3) in physische MAC-Adressen (Schicht 2) im lokalen Netzwerk auf. Dies ist notwendig, damit Datenpakete auf der Ethernet-Ebene (Schicht 2) an die richtige Netzwerkkarte zugestellt werden können.

6. Befehl zur Erreichbarkeitsprüfung:
- ping 192.168.0.1

7. Zuordnung der Systemkomponenten:
- Eigener PC: IP-Adresse = 192.168.0.52 | MAC-Adresse = 50-1A-C5-F2-38-B7
- Standardgateway (Router): IP-Adresse = 192.168.0.1 | MAC-Adresse = d4-3f-cb-8c-37-8b`,
        explanation: `Lernkarte Netzwerkgrundlagen:
- DHCP arbeitet auf Schicht 7, verwendet aber UDP (Schicht 4) zur Übertragung.
- Link-Local-IPv6-Adressen werden lokal automatisch generiert, oft mittels EUI-64 aus der MAC-Adresse (erkenntlich am eingefügten 'ff:fe' in der Mitte des Host-Teils).`
    },
    {
        id: 209,
        isBawueFocus: true,
        theme: "lf2",
        type: "open-text",
        question: "Prüfungsaufgabe CAD-Dateiformate & Netzteilberechnung (Sommer 2026 / LF 2):\nBeantworte folgende Aufgaben zur Arbeitsplatzrechner-Planung und Dateiformaten:\n1. Nenne drei Möglichkeiten, wie du dich über ein unbekanntes Dateiformat informieren kannst, wenn der Dateityp unbekannt ist.\n2. Beschreibe, wie du Kundendaten (z. B. im PLY-Format) nutzen kannst, wenn das hauseigene CAD-System dieses Format nicht direkt unterstützt.\n3. Erkläre den Unterschied zwischen einem Textformat (ASCII) und einem Binärformat bezüglich Lesbarkeit und Speicherbedarf.\n4. Eine PLY-3D-Modelldatei enthält 3.840 Punkte (jeder Punkt hat 3 Koordinaten x,y,z im 32-Bit/4-Byte-Float-Format). Berechne den Speicherbedarf für die Koordinaten in KiB. Berechne außerdem, wie viele Farben mit RGB (8 Bit pro Kanal) dargestellt werden können und wie viel Prozent zusätzlicher Speicherplatz pro Bildpunkt benötigt wird, wenn zu jedem Punkt ein RGB-Farbwert (3 Byte) hinzukommt.\n5. Berechne die erforderliche Leistung eines Netzteils für folgende Komponenten: Mainboard (20W), CPU (172W), CPU-Lüfter (12W), 4x RAM (je 5W), Grafikkarte (310W), 2x M.2 SSD (je 5W), 2x Gehäuselüfter (je 8W). Schlage einen Sicherheitszuschlag von 10 % auf und wähle die passende Netzteilgröße in 50W-Schritten.\n6. Berechne die jährlichen Stromkosten bei 200 Arbeitstagen à 9 Std. Täglich, wenn die durchschnittliche Leistungsabgabe 325 W beträgt, das Netzteil eine Effizienz von 90 % besitzt und der Strompreis 0,40 EUR/kWh beträgt. Der Rechenweg ist anzugeben.",
        musterloesung: `1. Informationsbeschaffung über unbekannte Dateiformate:
- Dateiendung online in Datenbanken (z. B. FileInfo.com) recherchieren.
- Die Datei in einem Text- oder Hex-Editor öffnen und den Datei-Header (Magic Bytes) analysieren, um das Format zu identifizieren.
- Die Herstellerdokumentation einsehen oder den Absender der Datei nach dem verwendeten Programm fragen.

2. Nutzung nicht-unterstützter Formate im CAD-System:
- Die Datei mithilfe eines Konverters (Konvertierungstool) oder eines Drittanbieter-CAD-Programms in ein kompatibles Standardformat (wie OBJ, STL oder STEP) umwandeln.

3. ASCII- vs. Binärformat:
- ASCII-Format: Textbasiert, im Klartext für Menschen lesbar, höherer Speicherbedarf durch Zeichenkodierung (jedes Zeichen belegt mind. 1 Byte).
- Binärformat: Maschinenlesbar (Nullen und Einsen), nicht im Klartext lesbar, extrem kompakter Speicherbedarf und schnellere Verarbeitung durch Computer.

4. PLY-Datei Berechnungen:
- Speicherbedarf für 3.840 Punkte:
  * Pro Punkt: 3 Koordinaten * 4 Byte = 12 Byte.
  * Gesamtbyte: 3.840 Punkte * 12 Byte = 46.080 Byte.
  * In KiB (binär): 46.080 Byte / 1024 = 45 KiB.
- RGB-Farbanzahl: 8 Bit pro Kanal = 24 Bit Farbtiefe. 2^24 = 16.777.216 Farben (ca. 16,8 Millionen).
- Zusätzlicher Speicherplatz:
  * RGB-Farbwert benötigt 3 Byte zusätzlich.
  * Verhältnis: (3 Byte zusätzlich / 12 Byte Basis) * 100 = 25 % zusätzlicher Speicherbedarf.

5. Netzteilberechnung:
- Leistungsbedarf der Komponenten:
  * Mainboard: 20 W
  * Prozessor: 172 W
  * Prozessor-Lüfter: 12 W
  * RAM: 4 * 5 W = 20 W
  * Grafikkarte: 310 W
  * M.2 SSDs: 2 * 5 W = 10 W
  * Gehäuselüfter: 2 * 8 W = 16 W
  * Summe = 20 + 172 + 12 + 20 + 310 + 10 + 16 = 560 W.
- Mit 10 % Sicherheitszuschlag: 560 W * 1,1 = 616 W.
- Gewählte Netzteilgröße (nächster 50W-Schritt): 650 W Netzteil.

6. Stromkostenberechnung:
- Gesamtlaufzeit: 200 Tage * 9 Stunden = 1.800 Stunden.
- Leistungsaufnahme aus dem Netz (bei 90 % Effizienz): 325 W Leistungsabgabe / 0,90 Wirkungsgrad = 361,11 W (= 0,36111 kW).
- Gesamtverbrauch: 0,36111 kW * 1.800 Stunden = 650 kWh.
- Jährliche Stromkosten: 650 kWh * 0,40 EUR/kWh = 260,00 EUR.`,
        explanation: `Lernkarte Hardware-Planung:
- Netzteile arbeiten bei ca. 50 % bis 80 % Auslastung am effizientesten (80 Plus Zertifizierungen).
- Der Wirkungsgrad gibt das Verhältnis zwischen abgegebener Gleichstromleistung (für PC-Komponenten) und aufgenommener Wechselstromleistung (aus der Steckdose) an. Verluste entstehen als Wärme.`
    }
,
    {
        id: 210,
        isBawueFocus: true,
        topic: "LF 1 - Aufbauorganisation, Leitungssysteme & Führung",
        type: "open-text",
        title: "Aufbauorganisation: Einlinien- vs. Mehrliniensystem, Stabsstellen, Führungsstile & Stellenbeschreibung",
        question: "Die Geschäftsleitung eines IT-Unternehmens plant eine Reorganisation der Softwareabteilung. Beantworten Sie dazu die folgenden IHK-Prüfungsfragen:\n\n" +
                  "1. Vergleichen Sie das **Einliniensystem** und das **Mehrliniensystem**. Erklären Sie das jeweilige Leitungsprinzip. (2 Punkte)\n" +
                  "2. Nennen Sie jeweils **zwei Vorteile** und **zwei Nachteile** des Mehrliniensystems. (4 Punkte)\n" +
                  "3. Wie wird die Stelle 'Assistenz der Geschäftsleitung' in der Organisationslehre bezeichnet und welche besondere Eigenschaft hat sie bezüglich Weisungsbefugnissen? (2 Punkte)\n" +
                  "4. Nennen Sie zwei Hauptaufgaben einer Stabsstelle. (2 Punkte)\n" +
                  "5. Die Entwickler wünschen sich einen **kooperativen Führungsstil**. Nennen Sie drei typische Verhaltensweisen / Merkmale dieses Führungsstils. (3 Punkte)\n" +
                  "6. Für alle Mitarbeiter sollen einheitliche Stellenbeschreibungen erstellt werden. Nennen Sie **vier wesentliche Bestandteile** einer Stellenbeschreibung. (4 Punkte)",
        correctAnswer: "1. Leitungsprinzipien:\n" +
                       "   - Einliniensystem: Jede Stelle/jeder Mitarbeiter hat genau einen direkten Vorgesetzten (Einheit der Auftragserteilung). Die Anweisungswege sind eindeutig und linear.\n" +
                       "   - Mehrliniensystem (Funktionsmeistersystem): Eine Stelle kann von mehreren übergeordneten Fachvorgesetzten gleichzeitig fachliche Weisungen erhalten (Prinzip des kürzesten Weges).\n\n" +
                       "2. Vor- und Nachteile des Mehrliniensystems:\n" +
                       "   - Vorteile (2 Punkte):\n" +
                       "     * Kürzere, direkte Kommunikations- und Informationswege (kein zeitraubender Dienstweg über Zwischeninstanzen).\n" +
                       "     * Spezialisierung der Führungskräfte auf ihre Fachbereiche (hohe Fachkompetenz der Anweisungen).\n" +
                       "     * Entlastung der oberen Unternehmensführung von operativen Fachfragen.\n" +
                       "   - Nachteile (2 Punkte):\n" +
                       "     * Gefahr von widersprüchlichen Anweisungen verschiedener Fachvorgesetzter.\n" +
                       "     * Unklare Verantwortlichkeiten und schwierige Fehlerzurechnung.\n" +
                       "     * Konfliktpotenzial und Kompetenzstreitigkeiten zwischen den Vorgesetzten.\n\n" +
                       "3. Stabsstelle & Weisungsbefugnis (2 Punkte):\n" +
                       "   - Bezeichnung: Stabsstelle (oder Staborganisation).\n" +
                       "   - Weisungsbefugnis: Stabsstellen haben reine Beratungs- und Unterstützungsfunktion und besitzen KEINE fachliche oder disziplinarische Weisungsbefugnis gegenüber Linienstellen.\n\n" +
                       "4. Aufgaben einer Stabsstelle (2 Punkte):\n" +
                       "   - Entlastung der Führungskraft von Routine- und Rechercheaufgaben.\n" +
                       "   - Beschaffung, Analyse und Aufbereitung von Informationen.\n" +
                       "   - Vorbereitung von unternehmerischen Entscheidungen und strategische Planung.\n\n" +
                       "5. Merkmale des kooperativen Führungsstils (3 Punkte):\n" +
                       "   - Einbindung der Mitarbeiter in Entscheidungs- und Planungsprozesse (Partizipation).\n" +
                       "   - Offene, transparente Kommunikation und Feedbackkultur auf Augenhöhe.\n" +
                       "   - Delegation von Verantwortung, Aufgaben und Handlungsspielräumen an die Mitarbeiter.\n" +
                       "   - Vertrauen und Förderung der Eigeninitiative statt reiner Kontrolle.\n\n" +
                       "6. Bestandteile einer Stellenbeschreibung (4 Punkte):\n" +
                       "   - 1. Stellenbezeichnung / Name der Position (z. B. Senior Frontend Developer).\n" +
                       "   - 2. Organisatorische Eingliederung (Über- und Unterstellungsverhältnisse, Vertretungsregelung).\n" +
                       "   - 3. Aufgaben und Kompetenzen (Haupt-, Nebenaufgaben, Befugnisse und Verantwortungsbereiche).\n" +
                       "   - 4. Anforderungsprofil (erforderliche fachliche Qualifikationen, Ausbildung, Berufserfahrung, Soft Skills).",
        explanation: "Aufbauorganisation und Leitungssysteme sind feste Standardinhalte der AP1. Achten Sie besonders auf die klare Trennung von Linien- und Stabsstellen sowie die Vor- und Nachteile von Ein- und Mehrliniensystemen.",
        points: 17
    },
    {
        id: 211,
        isBawueFocus: true,
        topic: "LF 1 - Marktformen, Wirtschaftslehre & Rechtsformen",
        type: "open-text",
        title: "Wirtschaftslehre: Marktformen, Ökonomisches Prinzip, E-Commerce, Leasing & Vertretungsbefugnisse (Prokura)",
        question: "Beantworten Sie folgende betriebswirtschaftliche Aufgaben aus dem Bereich Wirtschaftslehre und Unternehmensführung:\n\n" +
                  "1. Erklären Sie die drei grundlegenden **Marktformen** (Monopol, Oligopol, Polypol) anhand der Anzahl von Anbietern und Nachfragern. (3 Punkte)\n" +
                  "2. Was unterscheidet einen **Käufermarkt** von einem **Verkäufermarkt** und welche drei Bedingungen kennzeichnen das Modell des **vollkommenen Marktes**? (4 Punkte)\n" +
                  "3. Erläutern Sie das **Ökonomische Prinzip** und grenzen Sie das **Maximalprinzip** vom **Minimalprinzip** mit jeweils einem Beispiel ab. (4 Punkte)\n" +
                  "4. Nennen Sie **zwei betriebswirtschaftliche Vorteile von Leasing** gegenüber dem Direktkauf von Server-Hardware für ein Unternehmen. (2 Punkte)\n" +
                  "5. Ein Prokurist besitzt eine weitreichende kaufmännische Vollmacht. Nennen Sie **drei Rechtsgeschäfte**, die ein Prokurist laut HGB ausdrücklich **nicht** vornehmen darf. (3 Punkte)",
        correctAnswer: "1. Marktformen (3 Punkte):\n" +
                       "   - Monopol: Ein einziger Anbieter steht vielen Nachfragern gegenüber (Angebotsmonopol) oder viele Anbieter einem Nachfrager (Nachfragemonopol). Der Monopolist kann Preise weitgehend unabhängig bestimmen.\n" +
                       "   - Oligopol: Wenige Anbieter stehen vielen Nachfragern gegenüber (Angebotsoligopol) oder wenige Nachfrager vielen Anbietern. Hoher Wettbewerb und gegenseitige Reaktionsabhängigkeit.\n" +
                       "   - Polypol: Viele Anbieter stehen vielen Nachfragern gegenüber. Starker Wettbewerb (vollständige Konkurrenz), Preisbildung erfolgt über Angebot und Nachfrage.\n\n" +
                       "2. Käufer-/Verkäufermarkt & vollkommener Markt (4 Punkte):\n" +
                       "   - Käufermarkt: Angebotsüberhang (Angebot > Nachfrage). Die Käufer haben die stärkere Verhandlungsmacht und bestimmen Preise/Konditionen.\n" +
                       "   - Verkäufermarkt: Nachfrageüberhang (Nachfrage > Angebot). Die Verkäufer haben die stärkere Marktmacht (z. B. bei Chip-Mangel).\n" +
                       "   - Vollkommener Markt (Merkmale): Homogene Güter (völlig gleichartig), vollkommene Markttransparenz (alle Marktteilnehmer kennen alle Preise), keine persönlichen/sachlichen/räumlichen/zeitlichen Präferenzen, unendliche Reaktionsgeschwindigkeit.\n\n" +
                       "3. Ökonomisches Prinzip (4 Punkte):\n" +
                       "   - Minimalprinzip: Ein fest vorgegebenes Ziel soll mit minimalem (geringstmöglichem) Mitteleinsatz erreicht werden. (Beispiel: Kauf von genau 20 vorkonfigurierten Laptops zum günstigsten Preis).\n" +
                       "   - Maximalprinzip: Mit fest vorgegebenen Mitteln (Budget/Ressourcen) soll der maximal mögliche Erfolg/Ertrag erzielt werden. (Beispiel: Mit einem festen Budget von 10.000 € so viele Laptops wie möglich beschaffen).\n\n" +
                       "4. Vorteile von Leasing (2 Punkte):\n" +
                       "   - Schonung der Liquidität und des Eigenkapitals (keine hohe Anfangsinvestition nötig).\n" +
                       "   - Leasingraten sind voll als Betriebsausgaben steuerlich absetzbar.\n" +
                       "   - 'Pay-as-you-earn'-Effekt: Die Hardware erwirtschaftet ihren Ertrag während der Vertragslaufzeit.\n" +
                       "   - Schnelle Anpassung an den technischen Fortschritt durch Hardwaretausch nach Leasingende.\n\n" +
                       "5. Grenzen der Prokura (3 Punkte):\n" +
                       "   - Unterzeichnung und Einreichung des Jahresabschlusses / der Bilanz.\n" +
                       "   - Veräußerung oder Belastung von Grundstücken / Immobilien (außer bei gesonderter Grundstücksvollmacht).\n" +
                       "   - Einstellung oder Verkauf des Handelsgeschäfts bzw. Liquidation/Insolvenzanmeldung.\n" +
                       "   - Aufnahme neuer Gesellschafter.\n" +
                       "   - Erteilung oder Übertragung der Prokura an Dritte.",
        explanation: "Wirtschafts- und Rechtskunde-Grundlagen gehören zu den festen Bestandteilen der IHK-Ganzheitlichen Aufgaben I und II. Merken Sie sich die Ausschlussgeschäfte der Prokura und die beiden Ausprägungen des ökonomischen Prinzips.",
        points: 16
    },
    {
        id: 212,
        isBawueFocus: true,
        topic: "LF 2 - PC-Hardware, Systemarchitektur & Energieeffizienz",
        type: "open-text",
        title: "Hardware-Architektur: Mainboard-Chipsatz, BIOS/UEFI, CPU-Caches & RAM-Konfiguration",
        question: "Für ein neues Entwicklerteam sollen leistungsfähige Workstations konfiguriert werden. Beantworten Sie folgende hardwaretechnische Fragestellungen:\n\n" +
                  "1. Welche zentrale Aufgabe hat der **Chipsatz** auf dem Mainboard und welche **drei standardisierten Formfaktoren** für Mainboards werden im PC-Bereich unterschieden? (3 Punkte)\n" +
                  "2. Vergleichen Sie das traditionelle **BIOS** mit dem modernen **UEFI**. Nennen Sie zwei entscheidende Vorteile von UEFI (u. a. im Bereich Systemsicherheit). (3 Punkte)\n" +
                  "3. Nennen Sie die Hauptaufgabe der **ALU** (Arithmetic Logic Unit) im Prozessor und erklären Sie Funktion und Unterschiede der **Cache-Stufen L1, L2 und L3**. (4 Punkte)\n" +
                  "4. Erklären Sie den Unterschied zwischen **DRAM** und **SRAM**. Was bewirkt der **Dual-Channel-Betrieb** beim Arbeitsspeicher und was bedeutet eine geringere **CAS-Latenz (CL)**? (4 Punkte)\n" +
                  "5. Nennen Sie **zwei konkrete Maßnahmen**, um die laufenden Energiekosten an IT-Arbeitsplätzen spürbar zu senken. (2 Punkte)",
        correctAnswer: "1. Mainboard-Chipsatz & Formfaktoren (3 Punkte):\n" +
                       "   - Aufgabe des Chipsatzes: Steuerung und Koordination der gesamten Datenflüsse und Kommunikation zwischen CPU, RAM, Grafikkarten (PCIe), Massenspeichern (M.2 NVMe, SATA) und Peripherieschnittstellen (USB, LAN, Audio).\n" +
                       "   - Formfaktoren: ATX (Standard-Großformat), Micro-ATX (mATX, kompaktes Mittelformat), Mini-ITX (sehr kompaktes Kleinformat für Small-Form-Factor-PCs).\n\n" +
                       "2. BIOS vs. UEFI (3 Punkte):\n" +
                       "   - BIOS (Basic Input/Output System): Veraltete 16-Bit-Firmware, Beschränkung auf MBR-Partitionen bis maximal 2,2 TB, langsame Initialisierung.\n" +
                       "   - UEFI (Unified Extensible Firmware Interface): Moderne 64-Bit-Firmware-Schnittstelle.\n" +
                       "   - Vorteile von UEFI:\n" +
                       "     * Secure Boot: Verhindert das Starten von nicht digital signierter Software / Boot-Malware.\n" +
                       "     * Unterstützung von GPT-Partitionstabellen für Datenträger größer als 2,2 TB (bis zu 9,4 ZB).\n" +
                       "     * Deutlich schnellerer Systemstart durch parallele Hardware-Initialisierung und grafische Benutzeroberfläche mit Mausunterstützung.\n\n" +
                       "3. CPU-Aufbau & Cache-Hierarchie (4 Punkte):\n" +
                       "   - ALU (Arithmetisch-Logische Einheit): Führt alle arithmetischen (Addition, Subtraktion etc.) und logischen Rechenoperationen (UND, ODER, NICHT, Vergleiche) aus.\n" +
                       "   - Cache-Speicher (Funktion): Extrem schneller Pufferspeicher auf der CPU, um Latenzen beim Zugriff auf den langsameren RAM zu minimieren.\n" +
                       "     * L1-Cache: Kleinster Speicher (einige KB pro Kern), läuft mit vollem CPU-Takt, extrem geringe Latenz.\n" +
                       "     * L2-Cache: Größer als L1 (einige MB pro Kern), minimal langsamer als L1.\n" +
                       "     * L3-Cache: Größter Cache (geteilt von allen CPU-Kernen), dient dem Datenaustausch zwischen den Kernen.\n\n" +
                       "4. RAM-Technologie (4 Punkte):\n" +
                       "   - DRAM vs. SRAM: DRAM (Dynamic RAM) speichert Daten über Kondensatoren und benötigt ständige periodische Refreshes (günstig, hohe Dichte, als Hauptspeicher genutzt). SRAM (Static RAM) speichert Daten über Flip-Flops ohne Refresh (sehr schnell, teuer, für CPU-Caches genutzt).\n" +
                       "   - Dual-Channel: Nutzt zwei separate 64-Bit-Speicherkanäle gleichzeitig, wodurch sich die theoretische Bandbreite des Speicherbusses auf 128 Bit verdoppelt.\n" +
                       "   - CAS-Latenz (CL): Gibt die Anzahl der Taktzyklen an, die zwischen dem Senden einer Spaltenadresse und dem Eintreffen der Daten am Ausgang vergehen. Eine geringere Latenz bedeutet schnellere Datenbereitstellung.\n\n" +
                       "5. Energiesparmaßnahmen (2 Punkte):\n" +
                       "   - Einsatz von energieeffizienten Netzteilen mit 80 PLUS Gold/Platinum Zertifizierung und sparsamen Monitoren mit automatischer Abschaltung.\n" +
                       "   - Konsequente Nutzung von Energieprofilen / Standby-Modi im Betriebssystem und schaltbaren Steckdosenleisten gegen Standby-Verbrauch.\n" +
                       "   - Einsatz von Thin Clients / Mini-PCs statt überdimensionierter Desktop-Rechner für Office-Tätigkeiten.",
        explanation: "Hardwarekomponenten, Speicherhierarchien und Energieeffizienz sind zentrale Themen in LF 2. Verinnerlichen Sie die Unterschiede zwischen DRAM/SRAM, UEFI/BIOS und den Cache-Ebenen.",
        points: 16
    },
    {
        id: 213,
        isBawueFocus: true,
        topic: "LF 3 - Netzwerktechnik, OSI-Modell, USV & Verkabelung",
        type: "open-text",
        title: "Netzwerktechnik: OSI-Schichten, DHCP/UDP/NAT, VLAN, USV-Klassen & Strukturierte Verkabelung",
        question: "Beantworten Sie folgende Aufgaben aus dem Bereich der Netzwerktechnik, Infrastruktur und Hochverfügbarkeit:\n\n" +
                  "1. Nennen Sie alle **sieben Schichten des OSI-Referenzmodells** in der richtigen Reihenfolge (Schicht 1 bis 7). Teilen Sie diese in die zwei Hauptgruppen (Transportorientiert vs. Anwendungsorientiert) ein und nennen Sie die Hauptaufgabe von **Schicht 3**. (4 Punkte)\n" +
                  "2. **Netzwerkprotokolle & Adressierung:**\n" +
                  "   a) Nennen Sie **vier typische Netzwerkeinstellungen**, die ein DHCP-Server an Clients verteilt. (2 Punkte)\n" +
                  "   b) Nennen Sie die Hauptmerkmale des Protokolls **UDP** im Vergleich zu TCP. (1 Punkt)\n" +
                  "   c) Nennen Sie **zwei wesentliche Gründe** für den Einsatz von NAT (Network Address Translation). (1 Punkt)\n" +
                  "   d) Rechnen Sie die IPv4-Adresse `192.168.1.2` in das **Hexadezimalformat** um. (1 Punkt)\n" +
                  "3. Nennen Sie **drei Vorteile** des Einsatzes von **VLANs** und **zwei Protokolle**, die bei sicherem VPN-Fernzugriff eingesetzt werden. (3 Punkte)\n" +
                  "4. Erklären Sie den Zweck einer **USV** (Unterbrechungsfreie Stromversorgung) und unterscheiden Sie die drei standardisierten USV-Klassen: **VFD (Offline)**, **VI (Line-Interactive)** und **VFI (Online)**. (4 Punkte)\n" +
                  "5. Beschreiben Sie den Aufbau der **strukturierten Gebäudeverkabelung** (Primär-, Sekundär- und Tertiärverkabelung) und ordnen Sie jedem Bereich das typische Kabelmedium und den Einsatzort zu. (4 Punkte)",
        correctAnswer: "1. OSI-Referenzmodell (4 Punkte):\n" +
                       "   - Schicht 1: Bitübertragungsschicht (Physical Layer)\n" +
                       "   - Schicht 2: Sicherungsschicht (Data Link Layer)\n" +
                       "   - Schicht 3: Vermittlungsschicht (Network Layer) -> Hauptaufgabe: Logische Adressierung (IP) und Routing von Datenpaketen zwischen verschiedenen Netzen.\n" +
                       "   - Schicht 4: Transportschicht (Transport Layer)\n" +
                       "   - Schicht 5: Sitzungsschicht (Session Layer)\n" +
                       "   - Schicht 6: Darstellungsschicht (Presentation Layer)\n" +
                       "   - Schicht 7: Anwendungsschicht (Application Layer)\n" +
                       "   - Hauptgruppen: Schichten 1-4 = Transportorientierte Schichten (Netzwerkbasis); Schichten 5-7 = Anwendungsorientierte Schichten.\n\n" +
                       "2. Protokolle & Adressierung (5 Punkte):\n" +
                       "   a) DHCP-Optionen: IP-Adresse, Subnetzmaske, Standard-Gateway (Default Gateway), DNS-Server-Adressen (optional: NTP-Server, Domain-Name, WINS).\n" +
                       "   b) UDP (User Datagram Protocol): Verbindungsloses, ungesichertes Transportprotokoll ohne Handshake, ohne Empfangsbestätigung und ohne Flusskontrolle (dafür minimale Latenz, ideal für VoIP/Live-Streams).\n" +
                       "   c) NAT-Gründe: Einsparung öffentlicher IPv4-Adressen (viele interne private IPs teilen sich eine öffentliche IP) und Sicherheitsgewinn durch Verbergen der internen Netzwerkstruktur nach außen.\n" +
                       "   d) Hexadezimal-Umrechnung 192.168.1.2:\n" +
                       "      * 192 = C0\n" +
                       "      * 168 = A8\n" +
                       "      * 1 = 01\n" +
                       "      * 2 = 02\n" +
                       "      -> Hex-Adresse: C0.A8.01.02 (oder C0 A8 01 02)\n\n" +
                       "3. VLAN & VPN (3 Punkte):\n" +
                       "   - VLAN-Vorteile: Höhere Sicherheit durch logische Trennung von Netzen (z. B. Gastnetz, Management, Buchhaltung); Begrenzung von Broadcast-Domänen zur Leistungssteigerung; hohe Flexibilität bei Raum-/Arbeitsplatzwechseln ohne Umverkabelung.\n" +
                       "   - VPN-Protokolle: IPsec (IP Security) und SSL/TLS (OpenVPN, WireGuard).\n\n" +
                       "4. USV-Klassifizierung (4 Punkte):\n" +
                       "   - Zweck: Sicherstellung der kontinuierlichen Stromversorgung bei Netzausfall und Schutz vor Spannungsspitzen/Spannungsschwankungen für geordnetes Weiterarbeiten oder kontrolliertes Herunterfahren.\n" +
                       "   - VFD (Voltage and Frequency Dependent / Offline-USV): Leitet Netzstrom direkt durch; schaltet bei Stromausfall mit kurzer Umschaltzeit (2-10 ms) auf Akku um (einfacher Desktop-Schutz).\n" +
                       "   - VI (Voltage Independent / Line-Interactive): Besitzt einen automatischen Spannungsregler (AVR) zur Filterung von Unter-/Überspannungen ohne Akkubetrieb; schnelle Umschaltzeit (2-4 ms).\n" +
                       "   - VFI (Voltage and Frequency Independent / Online-USV / Dauerwandler): Wandelt Netzstrom ständig von AC zu DC und wieder zu AC um; 0 ms Umschaltzeit, perfekter Sinusstrom für Server und Rechenzentren.\n\n" +
                       "5. Strukturierte Verkabelung (4 Punkte):\n" +
                       "   - Primärbereich (Geländeverkabelung): Verbindet den Standortverteiler (SV) mit den Gebäudeverteilern (GV) verschiedener Gebäude auf dem Gelände. Medium: Glasfaser (LWL / Singlemode oder Multimode) wegen hoher Reichweite und galvanischer Trennung.\n" +
                       "   - Sekundärbereich (Steigbereich / Gebäudeverkabelung): Verbindet den Gebäudeverteiler (GV) mit den Etagenverteilern (EV) in den einzelnen Stockwerken. Medium: Glasfaser (LWL) oder hochwertige Twisted-Pair-Kupferkabel (Cat. 7/8).\n" +
                       "   - Tertiärbereich (Etagenverkabelung / Horizontalbereich): Verbindet den Etagenverteiler (EV / Patchfeld) mit den Endgerätedosen (RJ45) am Arbeitsplatz. Maximale Länge: 90 m Verlegekabel + 10 m Patchkabel (100 m Gesamtlänge). Medium: Twisted Pair (Cat. 6a / Cat. 7).",
        explanation: "Das OSI-Modell, strukturierte Verkabelung nach EN 50173 und USV-Klassen sind absolute Standardfragen in der IHK AP1 Prüfung.",
        points: 20
    },
    {
        id: 214,
        isBawueFocus: true,
        topic: "LF 4 - Software-Engineering, UML & Qualitätssicherung",
        type: "open-text",
        title: "Software-Engineering: OOP-Konzepte, UML-Diagramme, Testverfahren & Qualitätsmanagement",
        question: "Beantworten Sie folgende Aufgaben zur Softwareentwicklung, Objektorientierung und Qualitätssicherung:\n\n" +
                  "1. **Objektorientierte Programmierung (OOP):**\n" +
                  "   a) Erklären Sie den Unterschied zwischen einer **Klasse** und einem **Objekt (Instanz)**. (2 Punkte)\n" +
                  "   b) Erläutern Sie das Prinzip der **Vererbung** (Generalisierung/Spezialisierung). (1 Punkt)\n" +
                  "   c) Was unterscheidet eine **Aggregation** von einer **Komposition** im Klassendiagramm? Nennen Sie die jeweilige Raute. (2 Punkte)\n" +
                  "2. **UML-Modellierung:**\n" +
                  "   a) Was spezifiziert ein **Use-Case (Anwendungsfall)** und worin liegt der Unterschied zwischen einer `«include»`- und einer `«extend»`-Beziehung? (3 Punkte)\n" +
                  "   b) Wozu dient ein **Aktivitätsdiagramm** im Softwareentwicklungsprozess? (1 Punkt)\n" +
                  "3. **Softwaretests & Testverfahren:**\n" +
                  "   a) Vergleichen Sie einen **Compiler** mit einem **Interpreter**. (2 Punkte)\n" +
                  "   b) Erklären Sie den Unterschied zwischen **Black-Box-Tests** und **White-Box-Tests**. (2 Punkte)\n" +
                  "   c) Nennen Sie **drei standardisierte Teststufen** im Softwaretest. (1 Punkt)\n" +
                  "4. **Qualitätsmanagement & Projektmanagement:**\n" +
                  "   a) Erklären Sie die vier Phasen des **PDCA-Zyklus**. (2 Punkte)\n" +
                  "   b) Nennen Sie **drei Qualitätsmerkmale für Software** nach DIN EN ISO 25010 (bzw. ISO 9126). (2 Punkte)\n" +
                  "   c) Lösen Sie das Akronym **SMART** für Zieldefinitionen auf. (2 Punkte)",
        correctAnswer: "1. Objektorientierte Programmierung (5 Punkte):\n" +
                       "   a) Klasse vs. Objekt: Eine Klasse ist der abstrakte Bauplan/Schablone (definiert Attribute und Methoden). Ein Objekt (Instanz) ist das konkrete, zur Laufzeit im Speicher erzeugte Exemplar dieser Klasse mit individuellen Attributwerten.\n" +
                       "   b) Vererbung: Ermöglicht es einer abgeleiteten Unterklasse (Subklasse), Attribute und Methoden einer Oberklasse (Superklasse) zu übernehmen und zu erweitern (Spezialisierung). Vermeidung von Code-Duplizierung.\n" +
                       "   c) Aggregation vs. Komposition:\n" +
                       "      * Aggregation (leere Raute ◊): Lose Teil-Ganzes-Beziehung ('hat-ein'). Das Teil-Objekt kann auch ohne das Ganze eigenständig existieren (z. B. Abteilung und Mitarbeiter).\n" +
                       "      * Komposition (ausgefüllte schwarze Raute ♦): Strikte Teil-Ganzes-Beziehung mit existenzieller Abhängigkeit. Das Teil kann ohne das Ganze nicht existieren und hat die gleiche Lebensdauer (z. B. Haus und Zimmer).\n\n" +
                       "2. UML-Modellierung (4 Punkte):\n" +
                       "   a) Use-Case & Include/Extend: Ein Use-Case beschreibt eine in sich geschlossene Interaktionssequenz zwischen einem Akteur und dem System mit greifbarem Nutzen.\n" +
                       "      * «include»: Zwingende, immer ausgeführte Teilfunktion (Pfeil zeigt zum inkludierten Use-Case).\n" +
                       "      * «extend»: Optionale Erweiterung, die nur unter bestimmten Bedingungen (Extension Point) ausgeführt wird (Pfeil zeigt zum Basisanwendungsfall).\n" +
                       "   b) Aktivitätsdiagramm: Visualisiert den Ablauf von Aktionen, Kontroll- und Datenflüssen (Geschäftsprozesse, Algorithmen) mit Verzweigungen und parallelen Pfaden.\n\n" +
                       "3. Tests & Übersetzung (5 Punkte):\n" +
                       "   a) Compiler vs. Interpreter: Ein Compiler übersetzt den gesamten Quelltext vor der Ausführung einmalig vollständig in Maschinencode (schnelle Laufzeit, z. B. C/C++, Rust). Ein Interpreter liest und führt den Quellcode zur Laufzeit Zeile für Zeile aus (z. B. Python, JavaScript).\n" +
                       "   b) Black-Box vs. White-Box: Black-Box-Tests prüfen Funktionalität und Ein-/Ausgabe von außen ohne Kenntnis des inneren Quellcodes. White-Box-Tests prüfen die innere Programmstruktur, Codeüberdeckung und Kontrollflüsse mit Kenntnis des Quellcodes.\n" +
                       "   c) Teststufen: Modultest/Unit-Test -> Integrationstest -> Systemtest -> Abnahmetest (Acceptance Test).\n\n" +
                       "4. Qualitäts- & Projektmanagement (6 Punkte):\n" +
                       "   a) PDCA-Zyklus (Deming-Kreis):\n" +
                       "      * Plan: Ist-Zustand analysieren, Qualitätsziele und Maßnahmen planen.\n" +
                       "      * Do: Geplante Maßnahmen im kleinen Rahmen umsetzen/ausführen.\n" +
                       "      * Check: Ergebnisse überprüfen und mit den Zielen vergleichen.\n" +
                       "      * Act: Erfolgreiche Maßnahmen als neuen Standard etablieren und kontinuierliche Verbesserung vorantreiben.\n" +
                       "   b) ISO 25010 Software-Qualitätsmerkmale: Funktionalität, Zuverlässigkeit, Benutzbarkeit (Usability), Effizienz (Performance), Wartbarkeit, Übertragbarkeit (Portabilität), Sicherheit.\n" +
                       "   c) SMART-Kriterien:\n" +
                       "      * S = Spezifisch (präzise und eindeutig formuliert)\n" +
                       "      * M = Messbar (anhand klarer Metriken überprüfbar)\n" +
                       "      * A = Akzeptiert / Attraktiv (von den Beteiligten mitgetragen)\n" +
                       "      * R = Realistisch (mit den verfügbaren Ressourcen machbar)\n" +
                       "      * T = Terminiert (mit klarem Endtermin versehen).",
        explanation: "UML-Klassendiagramme, Testmethodik und das Qualitätsmanagement (ISO 25010, PDCA, SMART) sind wiederkehrende Prüfungsklassiker in der AP1.",
        points: 20
    },
    {
        id: 215,
        isBawueFocus: true,
        topic: "LF 4 / KI & EU AI Act",
        type: "open-text",
        title: "Künstliche Intelligenz (KI), Machine Learning & EU AI Act (EU-KI-Verordnung)",
        question: "Künstliche Intelligenz und europäische KI-Regulierung sind hochaktuelle Schwerpunkte in der IT-Ausbildung. Beantworten Sie folgende Fachfragen:\n\n" +
                  "1. **Grundlagen der Künstlichen Intelligenz:**\n" +
                  "   a) Definieren Sie den Begriff **Künstliche Intelligenz (KI)**. (1 Punkt)\n" +
                  "   b) Wie unterscheiden sich **Machine Learning (ML)** und **Deep Learning (DL)** von klassischer KI? (2 Punkte)\n" +
                  "   c) Was versteht man unter **Reinforcement Learning (Bestärkendes Lernen)**? (1 Punkt)\n" +
                  "2. **KI-Konzepte & Technologien:**\n" +
                  "   a) Grenzen Sie **Schwache KI (Narrow AI)** von **Starker KI / AGI (Artificial General Intelligence)** ab. (2 Punkte)\n" +
                  "   b) Aus welchen **drei Schichten (Ebenen)** besteht ein künstliches neuronales Netz? (1 Punkt)\n" +
                  "   c) Erklären Sie den Begriff **Prompting (Prompt Engineering)** im Kontext generativer Sprachmodelle. (1 Punkt)\n" +
                  "3. **EU AI Act (Europäische KI-Verordnung):**\n" +
                  "   a) Welches übergeordnete Ziel verfolgt der EU AI Act? (1 Punkt)\n" +
                  "   b) Erläutern Sie das **risikobasierte Klassifizierungssystem** des EU AI Acts (die 4 Risikostufen) mit jeweils einem konkreten Praxisbeispiel. (4 Punkte)\n" +
                  "4. **GPAI & Pflichten:**\n" +
                  "   a) Was ist ein **GPAI-Modell (General Purpose AI)**? (1 Punkt)\n" +
                  "   b) Welche Kernpflichten haben **Anbieter von Hochrisiko-KI-Systemen** laut EU AI Act? (2 Punkte)",
        correctAnswer: "1. KI-Grundlagen (4 Punkte):\n" +
                       "   a) Definition KI: Ein Teilgebiet der Informatik, das sich mit der Entwicklung von Systemen befasst, die menschenähnliche kognitive Fähigkeiten wie Lernen, Schlussfolgern, Problemlösen, Sprachverstehen und Entscheiden maschinell nachbilden.\n" +
                       "   b) ML vs. DL: Machine Learning ist ein Teilbereich der KI, bei dem Algorithmen eigenständig aus Daten Muster lernen, anstatt explizit programmiert zu werden. Deep Learning ist wiederum ein Teilbereich des ML, der künstliche neuronale Netze mit vielen verborgenen Schichten (Deep Neural Networks) nutzt, um hochkomplexe Muster (z. B. in Bild- und Sprachverarbeitung) zu erfassen.\n" +
                       "   c) Reinforcement Learning: Ein Lernverfahren, bei dem ein autonomer Software-Agent durch Interaktion mit einer Umgebung durch Belohnungen (Rewards) und Bestrafungen (Penalties) lernt, die optimale Handlungsstrategie zur Zielerreichung zu finden.\n\n" +
                       "2. KI-Arten & Technologien (4 Punkte):\n" +
                       "   a) Narrow AI vs. AGI: Schwache KI (Narrow AI) ist auf eine einzige spezifische Aufgabe trainiert und optimiert (z. B. Schacherkennung, Bildklassifikation, Übersetzung) und kann nicht eigenständig auf andere Domänen transferiert werden. Starke KI / AGI (Artificial General Intelligence) besitzt menschenähnliche, vielseitige Denk-, Abstraktions- und Lernfähigkeiten über alle Wissensdomänen hinweg.\n" +
                       "   b) Schichten neuronaler Netze: 1. Eingabeschicht (Input Layer), 2. Verborgene Schichten (Hidden Layers), 3. Ausgabeschicht (Output Layer).\n" +
                       "   c) Prompting: Das gezielte Formulieren von Eingabeanweisungen, Rollen, Kontexten und Beispielen (Prompts), um von einem generativen KI-Modell (LLM) das präziseste und qualitativ hochwertigste Ergebnis zu erhalten.\n\n" +
                       "3. EU AI Act & Risikoklassen (5 Punkte):\n" +
                       "   a) Ziel: Gewährleistung von Sicherheit, Transparenz, Grundrechteschutz und ethischen Standards beim Einsatz von KI im EU-Binnenmarkt bei gleichzeitiger Innovationsförderung.\n" +
                       "   b) Die 4 Risikostufen des EU AI Acts:\n" +
                       "      * 1. Unannehmbares Risiko (Verboten): Praktiken, die Grundrechte verletzen (z. B. staatliches Social Scoring, biometrische Echtzeit-Überwachung im öffentlichen Raum, kognitive Verhaltensmanipulation).\n" +
                       "      * 2. Hohes Risiko (High Risk): Streng reguliert mit Zulassungspflicht, Qualitätsmanagement, menschlicher Aufsicht und CE-Kennzeichnung (z. B. KI in kritischer Infrastruktur, Medizingeräten, HR-Bewerberauswahl, Kreditwürdigkeitsprüfung, Justiz).\n" +
                       "      * 3. Begrenztes Risiko / Spezifisches Transparenzrisiko: Unterliegt Transparenzpflichten, d. h. Nutzer müssen informiert werden, dass sie mit einer KI interagieren (z. B. Kundenservice-Chatbots, Deepfakes, KI-generierte Inhalte).\n" +
                       "      * 4. Minimales / Kein Risiko: Frei nutzbar ohne Auflagen (z. B. KI-Spamfilter, KI in Videospielen, Bestandsoptimierung).\n\n" +
                       "4. GPAI & Betreiberpflichten (3 Punkte):\n" +
                       "   a) GPAI (General Purpose AI / Allzweck-KI): Vielseitige Basismodelle (Foundation Models wie GPT-4), die auf breiten Datenmengen trainiert sind und für unterschiedlichste Folgeaufgaben genutzt oder in andere KI-Systeme integriert werden können.\n" +
                       "   b) Pflichten bei Hochrisiko-KI: Einrichtung eines umfassenden Qualitätsmanagementsystems (QMS) und Risikomanagementsystems; Gewährleistung hoher Datenqualität gegen Verzerrungen (Bias); lückenlose technische Dokumentation und automatische Protokollierung (Logging); Sicherstellung wirksamer menschlicher Aufsicht (Human Oversight); Erfüllung hoher Cyber-Sicherheitsstandards.",
        explanation: "Der EU AI Act und Grundlagen moderner KI-Systeme (ML, DL, Prompting, Neuronale Netze) sind hochaktuelle, zukunftsrelevante Prüfungsthemen für IT-Berufe.",
        points: 16
    }
,
    {
        id: 216,
        isBawueFocus: true,
        topic: "LF 1 - Unternehmensziele, Zielarten & Zielbeziehungen",
        type: "open-text",
        title: "Unternehmensziele: Formalziele, Sachziele, Sozialziele, Ökologische Ziele & Zielbeziehungen",
        question: "Ein IT-Systemhaus formuliert für das kommende Geschäftsjahr seine strategische Unternehmensplanung. Beantworten Sie folgende betriebswirtschaftliche Aufgaben:\n\n" +
                  "1. **Zielarten unterscheiden:** Erklären Sie die vier grundlegenden Zielarten (**Formalziele/ökonomische Ziele**, **Sachziele/Leistungsziele**, **soziale Ziele**, **ökologische Ziele**) und nennen Sie für jede Zielart ein konkretes Praxisbeispiel aus einem IT-Unternehmen. (4 Punkte)\n" +
                  "2. **Zielbeziehungen:** Erläutern Sie die drei möglichen Beziehungen zwischen verschiedenen Unternehmenszielen (**Zielharmonie/komplementär**, **Zielkonflikt/konkurrierend**, **Zielindifferenz/neutral**) anhand von Beispielen. (3 Punkte)\n" +
                  "3. **Erwerbswirtschaftlich vs. Gemeinwirtschaftlich:** Vergleichen Sie die primären Zielsetzungen eines privaten IT-Dienstleisters (erwerbswirtschaftlich) mit denen eines kommunalen Rechenzentrums (öffentlich/gemeinwirtschaftlich). (3 Punkte)\n" +
                  "4. **Green-IT & Nachhaltigkeit:** Das Management möchte die Hardwarebeschaffung auf nachhaltige 'Green-IT'-Kriterien umstellen. Nennen Sie **vier messbare Kriterien**, die in die Beschaffungsmatrix einfließen sollten. (4 Punkte)\n" +
                  "5. **Zielerreichungsgrad:** Ein Softwarehaus plante für ein neues Cloud-Backup-Produkt einen Jahresumsatz von 500.000 €. Tatsächlich wurden 440.000 € erzielt. Berechnen Sie den Zielerreichungsgrad in Prozent. (2 Punkte)",
        correctAnswer: "1. Die vier Zielarten (4 Punkte):\n" +
                       "   - Ökonomische Ziele (Formalziele / Erfolgsziele): Beschreiben den wirtschaftlichen und finanziellen Erfolg (z. B. Steigerung des Jahresgewinns um 15 %, Erhöhung der Eigenkapitalrentabilität auf 12 %, Umsatzwachstum, Marktanteilssteigerung).\n" +
                       "   - Sachziele (Leistungsziele): Bestimmen das konkrete Produkt- und Dienstleistungsangebot sowie Art, Menge, Qualität und Termine der betrieblichen Leistung (z. B. Einführung eines 24/7-Managed-Security-Services, Release von Version 2.0 bis Q3, Senkung der Reaktionszeit im Support auf unter 15 Minuten).\n" +
                       "   - Soziale Ziele (Mitarbeiterbezogene Ziele): Betreffen das Wohlbefinden und die Interessen der Mitarbeiter (z. B. Erhöhung der Ausbildungsquote, Angebot von Homeoffice/Gleitzeit, betriebliche Weiterbildungsangebote, ergonomische Arbeitsplätze, faire Vergütung).\n" +
                       "   - Ökologische Ziele (Umweltbezogene Ziele): Betreffen den schonenden Umgang mit der Natur und natürlichen Ressourcen (z. B. Reduktion des Stromverbrauchs im Rechenzentrum um 12 % durch Kaltgangeinhausung, 100 % Ökostrom-Nutzung, papierloses Büro, Einführung von Mehrweg-Verpackungen).\n\n" +
                       "2. Zielbeziehungen (3 Punkte):\n" +
                       "   - Zielharmonie (komplementäre Ziele): Das Erreichen von Ziel A fördert automatisch das Erreichen von Ziel B (Beispiel: Steigerung der Softwarequalität senkt Supportkosten und erhöht gleichzeitig Kundenzufriedenheit und Gewinn).\n" +
                       "   - Zielkonflikt (konkurrierende Ziele): Das Erreichen von Ziel A behindert oder verringert das Erreichen von Ziel B (Beispiel: Höchste Verfügbarkeit durch 4-fache Redundanz erhöht die Hardwarekosten und schmälert kurzfristig den Gewinn; Lohnerhöhungen für Mitarbeiter senken die Marge).\n" +
                       "   - Zielindifferenz / Zielneutralität: Die Erreichung von Ziel A hat keinerlei Einfluss auf Ziel B (Beispiel: Umstellung auf Ökostrom in der Firmenzentrale hat keinen Einfluss auf die Einhaltung von Programmierstandards im Software-Team).\n\n" +
                       "3. Erwerbswirtschaftlich vs. Gemeinwirtschaftlich (3 Punkte):\n" +
                       "   - Erwerbswirtschaftliches Unternehmen (privater IT-Dienstleister): Vorrangiges Ziel ist die langfristige Gewinnmaximierung, Erzielung einer angemessenen Kapitalrendite und Sicherung der Wettbewerbsposition am freien Markt.\n" +
                       "   - Öffentliches / gemeinwirtschaftliches Unternehmen (z. B. kommunales Rechenzentrum): Vorrangiges Ziel ist die bedarfsgerechte und zuverlässige Versorgung der öffentlichen Verwaltung und Bürger (Bedarfsdeckung). Wirtschaftliche Ziele sind Kostendeckung, Verlustminimierung und sparsamer Mitteleinsatz, nicht maximale Kapitalrendite.\n\n" +
                       "4. Green-IT Beschaffungskriterien (4 Punkte):\n" +
                       "   - 1. Energieeffizienz (geringer Stromverbrauch im Betrieb und Standby, z. B. 80 PLUS Titanium Netzteile, Energy Star Zertifizierung).\n" +
                       "   - 2. Reparierbarkeit und Modularität (leichter Komponententausch, kein verklebtes Gehäuse, hohe Ersatzteilverfügbarkeit über 5+ Jahre).\n" +
                       "   - 3. Recyclingfähigkeit und Schadstofffreiheit (Einhaltung von RoHS/WEEE, hoher Anteil recycelter Kunststoffe/Metalle, schadstoffarme Fertigung).\n" +
                       "   - 4. Langlebigkeit und Update-Garantie (robuste Verarbeitung, garantierte Treiber- und Sicherheitsupdate-Versorgung über den gesamten Lebenszyklus).\n\n" +
                       "5. Berechnung Zielerreichungsgrad (2 Punkte):\n" +
                       "   - Formel: Zielerreichungsgrad = (Ist-Wert / Soll-Wert) * 100 %\n" +
                       "   - Rechnung: (440.000 € / 500.000 €) * 100 % = 0,88 * 100 % = 88,00 %\n" +
                       "   - Ergebnis: 88 % (Fehlbetrag zum Ziel: 12 Prozentpunkte)",
        explanation: "Unternehmensziele, Zielbeziehungen (Harmonie, Konflikt, Indifferenz) und Green-IT sind Kernbestandteile von LF 1 und WiSo.",
        points: 16
    },
    {
        id: 217,
        isBawueFocus: true,
        topic: "LF 1 / WiSo - Betriebswirtschaftliche Kennzahlen & Wirtschaftlichkeit",
        type: "open-text",
        title: "Wirtschaftlichkeitsrechnung: Wirtschaftlichkeit, Produktivität, Rentabilitäten & Marktanteil",
        question: "Ein IT-Systemhaus analysiert die Jahresabschlussdaten und Leistungsdaten seiner Cloud-Sparte. Lösen Sie die folgenden Berechnungen und betriebswirtschaftlichen Aufgaben:\n\n" +
                  "1. **Wirtschaftlichkeit:**\n" +
                  "   a) Nennen Sie die mathematische Formel zur Berechnung der **Wirtschaftlichkeit**. (1 Punkt)\n" +
                  "   b) Ein IT-Projekt erwirtschaftet Erträge (Verkaufserlöse) von 780.000 € bei Gesamtaufwendungen (Kosten) von 650.000 €. Berechnen Sie die Wirtschaftlichkeit und beurteilen Sie das Ergebnis. (2 Punkte)\n" +
                  "   c) Was passiert mit der Wirtschaftlichkeit, wenn die Verkaufspreise aufgrund von Konkurrenzdruck um 10 % sinken, die Kosten jedoch exakt gleich bleiben? (1 Punkt)\n" +
                  "2. **Produktivität:**\n" +
                  "   a) Nennen Sie die Definition und Grundformel der **Produktivität**. (1 Punkt)\n" +
                  "   b) Vor der Einführung eines automatisierten Deployment-Tools benötigte das Support-Team 8 Arbeitsstunden, um 40 Kunden-Updates auszurollen. Nach der Automatisierung schaffen sie 60 Updates in 6 Arbeitsstunden. Berechnen Sie die Produktivität vor und nach der Umstellung (Updates pro Stunde) sowie die prozentuale Produktivitätssteigerung. (4 Punkte)\n" +
                  "3. **Rentabilitätskennzahlen:**\n" +
                  "   a) Ein IT-Unternehmen erzielte einen Jahresgewinn von 180.000 €. Das eingesetzte Eigenkapital beträgt 1.200.000 €, das Fremdkapital 800.000 € (Fremdkapitalzinsen: 40.000 €). Die Gesamterlöse (Umsatz) lagen bei 2.400.000 €.\n" +
                  "   b) Berechnen Sie die **Eigenkapitalrentabilität** (EKR). (2 Punkte)\n" +
                  "   c) Berechnen Sie die **Gesamtkapitalrentabilität** (GKR). (3 Punkte)\n" +
                  "   d) Berechnen Sie die **Umsatzrentabilität** (Umsatzrendite / ROS). (2 Punkte)\n" +
                  "4. **Marktanteil:** Im deutschen Markt für Firewall-Appliances beträgt das gesamte Marktvolumen 55.000.000 € pro Jahr. Das Unternehmen erzielt in diesem Segment einen eigenen Umsatz von 6.600.000 €. Berechnen Sie den **Marktanteil** des Unternehmens in Prozent. (2 Punkte)",
        correctAnswer: "1. Wirtschaftlichkeit (4 Punkte):\n" +
                       "   a) Formel: Wirtschaftlichkeit = Ertrag / Aufwand (oder Erlöse / Kosten)\n" +
                       "   b) Rechnung: Wirtschaftlichkeit = 780.000 € / 650.000 € = 1,20 (oder 120 %)\n" +
                       "      - Beurteilung: Da der Wert > 1,0 ist, arbeitet das Projekt wirtschaftlich (Gewinnzone: pro 1,00 € Einsatz werden 1,20 € Ertrag erwirtschaftet).\n" +
                       "   c) Auswirkung: Da der Zähler (Ertrag) sinkt und der Nenner (Aufwand) gleich bleibt, sinkt der Wert der Wirtschaftlichkeit (die Wirtschaftlichkeit wird kleiner).\n\n" +
                       "2. Produktivität (5 Punkte):\n" +
                       "   a) Formel: Produktivität = Ausbringungsmenge (Output) / Faktoreinsatzmenge (Input)\n" +
                       "   b) Berechnung:\n" +
                       "      * Vor Umstellung: 40 Updates / 8 Stunden = 5,00 Updates pro Stunde\n" +
                       "      * Nach Umstellung: 60 Updates / 6 Stunden = 10,00 Updates pro Stunde\n" +
                       "      * Produktivitätssteigerung: ((10,00 - 5,00) / 5,00) * 100 % = (5,00 / 5,00) * 100 % = +100 % (Verdopplung der Produktivität).\n\n" +
                       "3. Rentabilitätskennzahlen (7 Punkte):\n" +
                       "   a) Eigenkapitalrentabilität (EKR):\n" +
                       "      - Formel: EKR = (Gewinn / Eigenkapital) * 100 %\n" +
                       "      - Rechnung: (180.000 € / 1.200.000 €) * 100 % = 0,15 * 100 % = 15,00 %\n" +
                       "   b) Gesamtkapitalrentabilität (GKR):\n" +
                       "      - Gesamtkapital = Eigenkapital + Fremdkapital = 1.200.000 € + 800.000 € = 2.000.000 €\n" +
                       "      - Formel: GKR = ((Gewinn + Fremdkapitalzinsen) / Gesamtkapital) * 100 %\n" +
                       "      - Rechnung: ((180.000 € + 40.000 €) / 2.000.000 €) * 100 % = (220.000 € / 2.000.000 €) * 100 % = 11,00 %\n" +
                       "   c) Umsatzrentabilität (ROS):\n" +
                       "      - Formel: Umsatzrentabilität = (Gewinn / Umsatz) * 100 %\n" +
                       "      - Rechnung: (180.000 € / 2.400.000 €) * 100 % = 0,075 * 100 % = 7,50 %\n\n" +
                       "4. Marktanteil (2 Punkte):\n" +
                       "   - Formel: Marktanteil = (Eigener Umsatz / Marktvolumen) * 100 %\n" +
                       "   - Rechnung: (6.600.000 € / 55.000.000 €) * 100 % = 0,12 * 100 % = 12,00 %",
        explanation: "Wirtschaftlichkeit (Ertrag/Aufwand), Produktivität (Menge/Einsatz) und die drei Rentabilitäten (EKR, GKR, Umsatzrentabilität) sind essenzielle IHK-Prüfungsrechenaufgaben in WiSo und LF 1.",
        points: 18
    },
    {
        id: 218,
        isBawueFocus: true,
        topic: "LF 1 / WiSo - Arbeitsrecht, Gehaltsabrechnung & Sozialversicherung",
        type: "open-text",
        title: "Arbeits- & Sozialrecht: Brutto-Netto-Abrechnung, 5 Säulen der Sozialversicherung, Überstunden & Kündigung",
        question: "Beantworten Sie folgende praxisnahe Fragestellungen aus dem Arbeits-, Tarif- und Sozialversicherungsrecht:\n\n" +
                  "1. **Gehaltsabrechnung & Sozialabgaben:**\n" +
                  "   a) Ein Auszubildender im 1. Lehrjahr erhält eine monatliche Ausbildungsvergütung von 1.050,00 € brutto (Steuerklasse I, keine Kirchensteuer, keine Lohnsteuer). Die Sozialversicherungsabgaben betragen für den Arbeitnehmeranteil pauschal 20,0 % des Bruttos. Berechnen Sie den monatlichen Auszahlungsbetrag (Nettogehalt). (2 Punkte)\n" +
                  "   b) Nennen Sie die **fünf gesetzlichen Säulen der Sozialversicherung** in Deutschland und geben Sie an, wer jeweils die Beiträge trägt (Arbeitgeber/Arbeitnehmer paritätisch oder allein). (5 Punkte)\n" +
                  "2. **Arbeitszeit & Überstunden:**\n" +
                  "   a) Laut Ausbildungsvertrag gilt für eine 19-jährige Auszubildende eine 38-Stunden-Woche. In einer Projekt-Rollout-Woche leistet sie 45 Arbeitsstunden. Wie viele Überstunden sind in dieser Woche angefallen? (1 Punkt)\n" +
                  "   b) Welche gesetzlichen Regelungen gelten laut BBiG für Überstunden von Auszubildenden (Zulässigkeit, Vergütung/Freizeitausgleich)? (2 Punkte)\n" +
                  "3. **Tariferhöhung & Gewerkschaft:**\n" +
                  "   a) Ein Fachinformatiker verdient aktuell 3.200,00 € brutto. Ein neuer Tarifvertrag sieht eine Gehaltserhöhung um 4,5 % vor. Berechnen Sie das neue Monatsbruttogehalt. (2 Punkte)\n" +
                  "   b) Der Mitarbeiter zahlt 1,0 % seines Monatsbruttogehalts als Gewerkschaftsbeitrag. Wie viel Euro Gewerkschaftsbeitrag zahlt er im gesamten Jahr (12 Monate) nach der Gehaltserhöhung? (2 Punkte)\n" +
                  "4. **Kündigung & Urlaub:**\n" +
                  "   a) Ein Mitarbeiter befindet sich in der 4. Woche seiner 6-monatigen Probezeit. Welche Kündigungsfrist gilt laut BGB während der Probezeit und bedarf die Kündigung einer Begründung? (2 Punkte)\n" +
                  "   b) Wie viele Werktage bzw. Arbeitstage beträgt der gesetzliche Mindesturlaub nach dem Bundesurlaubsgesetz (BUrlG) bei einer 5-Tage-Arbeitswoche? (2 Punkte)",
        correctAnswer: "1. Gehalt & Sozialversicherung (7 Punkte):\n" +
                       "   a) Nettoberechnung:\n" +
                       "      - Sozialversicherungsabzug: 1.050,00 € * 20,0 % = 210,00 €\n" +
                       "      - Nettogehalt: 1.050,00 € - 210,00 € = 840,00 €\n" +
                       "   b) Die 5 Säulen der Sozialversicherung:\n" +
                       "      - 1. Krankenversicherung (GKV) -> paritätisch (ca. 50 % AN / 50 % AG zzgl. hälftiger Zusatzbeitrag)\n" +
                       "      - 2. Pflegeversicherung (PV) -> paritätisch (50 % AN / 50 % AG; Kinderlosenzuschlag trägt AN allein)\n" +
                       "      - 3. Rentenversicherung (RV) -> paritätisch (50 % AN / 50 % AG, je 9,3 % bei 18,6 % Gesamtsatz)\n" +
                       "      - 4. Arbeitslosenversicherung (AV) -> paritätisch (50 % AN / 50 % AG, je 1,3 % bei 2,6 % Gesamtsatz)\n" +
                       "      - 5. Gesetzliche Unfallversicherung (Berufsgenossenschaft / DGUV) -> wird zu 100 % ALLEIN vom Arbeitgeber getragen!\n\n" +
                       "2. Arbeitszeit & Überstunden (3 Punkte):\n" +
                       "   a) Überstunden: 45 Stunden - 38 Stunden = 7 Überstunden.\n" +
                       "   b) Überstunden im BBiG: Überstunden für Azubis dürfen nur in begründeten Ausnahmefällen anfallen und müssen dem Ausbildungszweck dienen. Sie müssen stets besonders vergütet oder durch entsprechenden bezahlten Freizeitausgleich abgegolten werden.\n\n" +
                       "3. Tariferhöhung & Gewerkschaft (4 Punkte):\n" +
                       "   a) Neues Monatsbrutto: 3.200,00 € * 1,045 = 3.344,00 € (Erhöhung um 144,00 €)\n" +
                       "   b) Gewerkschaftsbeitrag pro Jahr: 3.344,00 € * 1,0 % = 33,44 € pro Monat -> 33,44 € * 12 Monate = 401,28 € pro Jahr.\n\n" +
                       "4. Kündigung & Mindesturlaub (4 Punkte):\n" +
                       "   a) Probezeit-Kündigung: Kündigungsfrist beträgt 2 Wochen zu jedem beliebigen Kalendertag (§ 622 Abs. 3 BGB). Eine Angabe von Gründen ist im Kündigungsschreiben nicht erforderlich (Schriftform zwingend nach § 623 BGB).\n" +
                       "   b) Gesetzlicher Mindesturlaub (BUrlG): 24 Werktage bei einer 6-Tage-Woche, das entspricht genau 20 Arbeitstagen bei einer 5-Tage-Woche (4 volle Wochen bezahlter Jahresurlaub).",
        explanation: "Sozialversicherungsbeiträge, Unfallversicherung (100% AG-finanziert!), Kündigungsfristen und Mindesturlaub nach BUrlG gehören zu den Standardfragen jeder WiSo-Prüfung.",
        points: 18
    },
    {
        id: 219,
        topic: "LF 1 / WiSo - Betriebswirtschaftliche Kennzahlen",
        type: "multiple-choice",
        question: "Aufgrund von starkem Wettbewerbsdruck muss ein IT-Systemhaus seine Dienstleistungspreise senken. Die Gesamtaufwendungen (Kosten) bleiben unverändert, wodurch die Verkaufserlöse (Erträge) sinken. Welche Aussage zur Wirtschaftlichkeit trifft exakt zu?",
        options: [
            "Die Wirtschaftlichkeit wird größer.",
            "Die Wirtschaftlichkeit wird kleiner.",
            "Die Produktivität sinkt proportional zum Preis.",
            "Die Rentabilität bleibt unverändert.",
            "Die Wirtschaftlichkeit bleibt genau 1,0."
        ],
        correctAnswer: "Die Wirtschaftlichkeit wird kleiner.",
        explanation: "Wirtschaftlichkeit = Ertrag / Aufwand. Wenn der Ertrag (Zähler) sinkt und der Aufwand (Nenner) gleich bleibt, wird der resultierende Quotient (die Wirtschaftlichkeit) kleiner.",
        points: 2
    },
    {
        id: 220,
        topic: "LF 1 / WiSo - Arbeitsrecht & Sozialversicherung",
        type: "multiple-choice",
        question: "Welche der fünf gesetzlichen Säulen der Sozialversicherung in Deutschland wird finanziell zu 100 % vom Arbeitgeber getragen?",
        options: [
            "Gesetzliche Krankenversicherung (GKV)",
            "Gesetzliche Rentenversicherung (GRV)",
            "Gesetzliche Unfallversicherung (Berufsgenossenschaft)",
            "Gesetzliche Pflegeversicherung (GPV)",
            "Arbeitslosenversicherung (ALV)"
        ],
        correctAnswer: "Gesetzliche Unfallversicherung (Berufsgenossenschaft)",
        explanation: "Die gesetzliche Unfallversicherung (abgewickelt über die Berufsgenossenschaften wie z. B. VBG für IT-Berufe) ist die einzige Sozialversicherung, deren Beiträge zu 100 % vom Arbeitgeber gezahlt werden.",
        points: 2
    },
    {
        id: 221,
        topic: "LF 1 / WiSo - Unternehmensziele",
        type: "multiple-choice",
        question: "Welche Zielbeziehung liegt vor, wenn die Einführung einer neuen automatisierten Test-Pipeline sowohl die Software-Entwicklungsgeschwindigkeit erhöht als auch gleichzeitig die Fehlerquote im Produktivbetrieb senkt?",
        options: [
            "Zielkonflikt (konkurrierende Ziele)",
            "Zielharmonie (komplementäre Ziele)",
            "Zielindifferenz (neutrale Ziele)",
            "Zielantagonismus (sich ausschließende Ziele)",
            "Zielsubstanz (identische Ziele)"
        ],
        correctAnswer: "Zielharmonie (komplementäre Ziele)",
        explanation: "Bei komplementären Zielen (Zielharmonie) unterstützt das Erreichen des einen Ziels gleichzeitig das Erreichen des anderen Ziels.",
        points: 2
    }
,
    {
        id: 222,
        theme: "lf1",
        isBawueFocus: true,
        topic: "LF 1/2 - Projektmanagement & Netzplantechnik",
        type: "open-text",
        title: "Projektmanagement: Netzplantechnik (FAZ, FEZ, SAZ, SEZ, Pufferzeiten & Kritischer Weg)",
        question: "Für das Projekt 'Rollout von 80 neuen CAD-Workstations' liegt folgende Vorgangsliste vor:\n\n" +
                  "| Vorgang | Bezeichnung | Dauer | Vorgänger |\n" +
                  "| :--- | :--- | :--- | :--- |\n" +
                  "| A | Hardware beschaffen | 4 Tage | - |\n" +
                  "| B | Basis-Betriebssystem-Image erstellen | 3 Tage | A |\n" +
                  "| C | CAD-Spezialsoftware konfigurieren | 5 Tage | A |\n" +
                  "| D | Netzwerkanschlüsse und Patching | 2 Tage | A |\n" +
                  "| E | Endmontage und Softwareverteilung | 4 Tage | B, C |\n" +
                  "| F | Benutzerschulung und Übergabe | 2 Tage | D, E |\n\n" +
                  "Lösen Sie folgende Aufgaben:\n\n" +
                  "1. Führen Sie die **Vorwärtsrechnung** (FAZ und FEZ) für alle Vorgänge durch. Welcher früheste Endzeitpunkt (Projektdauer) ergibt sich? (4 Punkte)\n" +
                  "2. Führen Sie die **Rückwärtsrechnung** (SEZ und SAZ) durch. (4 Punkte)\n" +
                  "3. Berechnen Sie für alle Vorgänge den **Gesamtpuffer (GP)** und den **freien Puffer (FP)**. (4 Punkte)\n" +
                  "4. Bestimmen Sie den **Kritischen Weg (Critical Path)** und erklären Sie die Konsequenz einer 2-tägigen Verzögerung bei Vorgang C vs. Vorgang D. (4 Punkte)\n" +
                  "5. Vergleichen Sie ein **Gantt-Diagramm (Balkendiagramm)** mit einem **Netzplan**. Nennen Sie jeweils einen Vorteil. (4 Punkte)",
        correctAnswer: "1. Vorwärtsrechnung (FAZ / FEZ) - Start bei Tag 0 (4 Punkte):\n" +
                       "   - Vorgang A (Dauer 4): FAZ = 0, FEZ = 4\n" +
                       "   - Vorgang B (Dauer 3, Vorgänger A): FAZ = 4, FEZ = 7\n" +
                       "   - Vorgang C (Dauer 5, Vorgänger A): FAZ = 4, FEZ = 9\n" +
                       "   - Vorgang D (Dauer 2, Vorgänger A): FAZ = 4, FEZ = 6\n" +
                       "   - Vorgang E (Dauer 4, Vorgänger B [FEZ 7] und C [FEZ 9]): FAZ = max(7, 9) = 9, FEZ = 13\n" +
                       "   - Vorgang F (Dauer 2, Vorgänger D [FEZ 6] und E [FEZ 13]): FAZ = max(6, 13) = 13, FEZ = 15\n" +
                       "   -> Gesamte Projektdauer: 15 Tage (FEZ von F).\n\n" +
                       "2. Rückwärtsrechnung (SEZ / SAZ) - Ende bei Tag 15 (4 Punkte):\n" +
                       "   - Vorgang F (Dauer 2): SEZ = 15, SAZ = 13\n" +
                       "   - Vorgang E (Dauer 4, Nachfolger F [SAZ 13]): SEZ = 13, SAZ = 9\n" +
                       "   - Vorgang D (Dauer 2, Nachfolger F [SAZ 13]): SEZ = 13, SAZ = 11\n" +
                       "   - Vorgang C (Dauer 5, Nachfolger E [SAZ 9]): SEZ = 9, SAZ = 4\n" +
                       "   - Vorgang B (Dauer 3, Nachfolger E [SAZ 9]): SEZ = 9, SAZ = 6\n" +
                       "   - Vorgang A (Dauer 4, Nachfolger B [SAZ 6], C [SAZ 4], D [SAZ 11]): SEZ = min(6, 4, 11) = 4, SAZ = 0\n\n" +
                       "3. Pufferzeiten (GP = SAZ - FAZ; FP = min(FAZ_Nachfolger) - FEZ) (4 Punkte):\n" +
                       "   - Vorgang A: GP = 0 - 0 = 0, FP = min(4, 4, 4) - 4 = 0\n" +
                       "   - Vorgang B: GP = 6 - 4 = 2 Tage, FP = 9 (FAZ E) - 7 = 2 Tage\n" +
                       "   - Vorgang C: GP = 4 - 4 = 0, FP = 9 (FAZ E) - 9 = 0\n" +
                       "   - Vorgang D: GP = 11 - 4 = 7 Tage, FP = 13 (FAZ F) - 6 = 7 Tage\n" +
                       "   - Vorgang E: GP = 9 - 9 = 0, FP = 13 (FAZ F) - 13 = 0\n" +
                       "   - Vorgang F: GP = 13 - 13 = 0, FP = 15 - 15 = 0\n\n" +
                       "4. Kritischer Weg & Verzögerung (4 Punkte):\n" +
                       "   - Kritischer Weg: Vorgänge mit GP = 0 -> **A -> C -> E -> F** (Dauer = 4 + 5 + 4 + 2 = 15 Tage).\n" +
                       "   - Konsequenz Verzögerung Vorgang C (auf dem kritischen Weg, GP = 0): Jede Verzögerung bei C (z. B. 2 Tage) verschiebt das gesamte Projektende direkt um 2 Tage nach hinten (Gesamtdauer 17 Tage).\n" +
                       "   - Konsequenz Verzögerung Vorgang D (nicht-kritisch, GP = 7 Tage): Eine Verzögerung um 2 Tage hat KEINE Auswirkungen auf das Projektende, da der Puffer von 7 Tagen die Verzögerung vollständig abfedert.\n\n" +
                       "5. Gantt-Diagramm vs. Netzplan (4 Punkte):\n" +
                       "   - Vorteil Gantt-Diagramm: Sehr anschauliche, intuitive Kalenderdarstellung des zeitlichen Verlaufs und der Überschneidungen auf einer horizontalen Zeitachse (optimal für Stakeholder-Präsentationen).\n" +
                       "   - Vorteil Netzplan: Zeigt explizit alle logischen Abhängigkeiten zwischen Vorgängen, ermöglicht die mathematische Berechnung von Pufferzeiten und identifiziert sofort den Kritischen Weg.",
        explanation: "Netzplantechnik (FAZ, FEZ, SAZ, SEZ, GP, FP, Kritischer Weg) ist einer der am häufigsten abgefragten Rechen- und Logikbereiche in der AP1 Baden-Württemberg.",
        points: 20
    },
    {
        id: 223,
        theme: "lf1",
        isBawueFocus: true,
        topic: "LF 1 - Wirtschaftlichkeit: Break-Even, AfA & Nutzwertanalyse",
        type: "open-text",
        title: "Kaufmännische Prozesse: Break-Even-Analyse, Lineare Abschreibung (AfA) & Nutzwertanalyse",
        question: "Ein IT-Unternehmen prüft die Wirtschaftlichkeit neuer Investitionen. Lösen Sie folgende Teilaufgaben:\n\n" +
                  "1. **Break-Even-Analyse (Gewinnschwelle):**\n" +
                  "   Ein neues Cloud-Security-Paket verursacht fixe Entwicklungskosten von 48.000,00 € pro Jahr. Die variablen Kosten (Server-Ressourcen, Support) betragen 30,00 € pro Lizenz/Monat. Der Verkaufspreis beträgt 70,00 € pro Lizenz/Monat.\n" +
                  "   a) Berechnen Sie den **Deckungsbeitrag pro Lizenz** (pro Jahr). (2 Punkte)\n" +
                  "   b) Berechnen Sie die **Break-Even-Menge** (Anzahl Lizenzen, ab der das Projekt die Gewinnzone erreicht). (2 Punkte)\n" +
                  "   c) Erklären Sie den Begriff **Break-Even-Point**. (1 Punkt)\n" +
                  "2. **Lineare Abschreibung (AfA nach EStG):**\n" +
                  "   Am 01.07.2026 beschafft das Unternehmen ein Enterprise-Storage-System für 72.000,00 € netto (Nutzungsdauer laut amtlicher AfA-Tabelle: 3 Jahre / 36 Monate).\n" +
                  "   a) Berechnen Sie den **jährlichen linearen Abschreibungsbetrag** (AfA-Satz und AfA in €). (2 Punkte)\n" +
                  "   b) Berechnen Sie die zeitanteilige Abschreibung für das Anschaffungsjahr 2026 (Monats-pro-rata) und den **Restbuchwert** zum 31.12.2026. (3 Punkte)\n" +
                  "   c) Ermitteln Sie den Restbuchwert zum 31.12.2027. (2 Punkte)\n" +
                  "3. **Nutzwertanalyse (Entscheidungsmatrix):**\n" +
                  "   Für zwei Server-Angebote (A und B) liegt folgende Bewertungsmatrix vor (Punkte 1-10):\n" +
                  "   - Kriterium 1: Anschaffungspreis (Gewichtung 30 %) -> Angebot A: 8 Punkte, Angebot B: 6 Punkte\n" +
                  "   - Kriterium 2: Energieeffizienz / Stromverbrauch (Gewichtung 25 %) -> Angebot A: 6 Punkte, Angebot B: 9 Punkte\n" +
                  "   - Kriterium 3: Ausfallsicherheit / Redundanz (Gewichtung 25 %) -> Angebot A: 7 Punkte, Angebot B: 8 Punkte\n" +
                  "   - Kriterium 4: Service & Support (Gewichtung 20 %) -> Angebot A: 9 Punkte, Angebot B: 7 Punkte\n" +
                  "   a) Berechnen Sie den gewichteten Gesamtnutzwert für Angebot A und Angebot B. (4 Punkte)\n" +
                  "   b) Welches Angebot ist wirtschaftlich und technisch zu bevorzugen? (2 Punkte)",
        correctAnswer: "1. Break-Even-Analyse (5 Punkte):\n" +
                       "   a) Deckungsbeitrag (DB) pro Monat: Preis - variable Kosten = 70,00 € - 30,00 € = 40,00 € / Monat (entspricht 480,00 € pro Jahr).\n" +
                       "   b) Break-Even-Menge (BEP):\n" +
                       "      - Formel: BEP = Fixkosten / Deckungsbeitrag pro Stück\n" +
                       "      - Auf Jahresbasis: 48.000,00 € / 480,00 €/Jahr = **100 Lizenzen**\n" +
                       "      - (Auf Monatsbasis: (48.000 € / 12 = 4.000 € Fixkosten/Monat) / 40,00 € = 100 Lizenzen).\n" +
                       "   c) Begriff: Der Break-Even-Point (Gewinnschwelle) ist die Absatzmenge, bei der die Gesamterlöse exakt den Gesamtkosten (Fixkosten + variable Kosten) entsprechen. Gewinn = 0 €; jede darüber verkaufte Einheit erwirtschaftet Gewinn.\n\n" +
                       "2. Lineare Abschreibung (AfA) (7 Punkte):\n" +
                       "   a) Jährlicher AfA-Betrag:\n" +
                       "      - AfA-Satz: 100 % / 3 Jahre = 33,333 %\n" +
                       "      - Jährliche AfA: 72.000,00 € / 3 Jahre = **24.000,00 € pro volles Jahr**\n" +
                       "   b) Anschaffungsjahr 2026 (Kauf am 01.07. -> 6 Monate zeitanteilig):\n" +
                       "      - AfA 2026: 24.000,00 € * (6 Monate / 12 Monate) = **12.000,00 €**\n" +
                       "      - Restbuchwert 31.12.2026: 72.000,00 € - 12.000,00 € = **60.000,00 €**\n" +
                       "   c) Folgejahr 2027:\n" +
                       "      - AfA 2027: 24.000,00 € (volles Jahr)\n" +
                       "      - Restbuchwert 31.12.2027: 60.000,00 € - 24.000,00 € = **36.000,00 €**\n\n" +
                       "3. Nutzwertanalyse (6 Punkte):\n" +
                       "   a) Berechnung der gewichteten Nutzwerte (Teilnutzwert = Gewicht * Punkte):\n" +
                       "      * Angebot A:\n" +
                       "        - Preis: 0,30 * 8 = 2,40\n" +
                       "        - Energieeffizienz: 0,25 * 6 = 1,50\n" +
                       "        - Redundanz: 0,25 * 7 = 1,75\n" +
                       "        - Service: 0,20 * 9 = 1,80\n" +
                       "        -> Gesamtnutzwert A = 2,40 + 1,50 + 1,75 + 1,80 = **7,45 Punkte**\n" +
                       "      * Angebot B:\n" +
                       "        - Preis: 0,30 * 6 = 1,80\n" +
                       "        - Energieeffizienz: 0,25 * 9 = 2,25\n" +
                       "        - Redundanz: 0,25 * 8 = 2,00\n" +
                       "        - Service: 0,20 * 7 = 1,40\n" +
                       "        -> Gesamtnutzwert B = 1,80 + 2,25 + 2,00 + 1,40 = **7,45 Punkte** (Gleichstand!)\n" +
                       "   b) Entscheidungsempfehlung: Da beide Angebote denselben Gesamtnutzwert (7,45) aufweisen, erfolgt die Entscheidung nach Priorisierung der Kriterien: Wenn laufende Betriebskosten und Hochverfügbarkeit oberste Priorität haben, ist **Angebot B** vorzuziehen (bessere Energieeffizienz 9 vs 6 und höhere Redundanz 8 vs 7). Steht geringer Investitionsaufwand und bester Service im Vordergrund, wird **Angebot A** gewählt.",
        explanation: "Break-Even-Point, AfA-Monatsberechnung (pro rata temporis) und Nutzwertanalyse sind Standardaufgaben der IHK.",
        points: 18
    },
    {
        id: 224,
        theme: "lf4",
        isBawueFocus: true,
        topic: "LF 4 - Prozessmodellierung: EPK & BPMN 2.0",
        type: "open-text",
        title: "Geschäftsprozesse: Ereignisgesteuerte Prozesskette (EPK) & BPMN 2.0 Modellierung",
        question: "Ein Supportprozess soll analysiert und modelliert werden:\n\n" +
                  "Prozessbeschreibung:\n" +
                  "'Wenn ein Kunde ein Ticket einreicht, wird die Störungsmeldung durch den 1st-Level-Support erfasst. Anschließend wird geprüft, ob es sich um ein Standardproblem handelt. Wenn ja, wird die Lösung direkt an den Kunden übermittelt und das Ticket geschlossen. Wenn nein, wird das Ticket an den 2nd-Level-Support weitergeleitet und parallel dazu der Kunde über die Verzögerung per E-Mail informiert. Erst wenn der 2nd-Level-Support die Lösung erarbeitet hat und die Kundenbenachrichtigung erfolgt ist, wird das Ticket geschlossen.'\n\n" +
                  "1. **Ereignisgesteuerte Prozesskette (EPK):**\n" +
                  "   a) Welche grundlegenden Symbole werden in einer EPK für **Ereignisse** und **Funktionen** verwendet und welche Syntaxregel gilt für ihre Abfolge? (2 Punkte)\n" +
                  "   b) Erklären Sie die drei logischen Konnektoren (**AND / UND**, **OR / ODER**, **XOR / Exklusiv-ODER**). (3 Punkte)\n" +
                  "   c) Welche Konnektoren müssen im beschriebenen Prozess an der Verzweigung (Standardproblem?) und bei der Zusammenführung vor dem Schließen eingesetzt werden? (3 Punkte)\n" +
                  "2. **BPMN 2.0 (Business Process Model and Notation):**\n" +
                  "   a) Erklären Sie den Unterschied zwischen einem **Pool** und einer **Lane** in BPMN. (2 Punkte)\n" +
                  "   b) Welche Bedeutung haben **exklusive Gateways (XOR)** und **parallele Gateways (AND)** in BPMN? (2 Punkte)\n" +
                  "   c) Nennen Sie die drei Arten von Startereignissen, Zwischenereignissen und Endereignissen bezüglich ihrer Linienstärke/Grafik. (2 Punkte)\n" +
                  "3. Nennen Sie **zwei Vorteile von BPMN 2.0** gegenüber der klassischen EPK. (2 Punkte)",
        correctAnswer: "1. Ereignisgesteuerte Prozesskette (EPK) (8 Punkte):\n" +
                       "   a) Symbole & Syntax:\n" +
                       "      - Ereignis: Sechseck (Hexagon), beschreibt einen Zustand in der Vergangenheitsform (z. B. 'Ticket eingereicht').\n" +
                       "      - Funktion: Rechteck mit abgerundeten Ecken, beschreibt eine Aktion im Infinitiv (z. B. 'Störung erfassen').\n" +
                       "      - Syntaxregel: Ereignisse und Funktionen müssen sich streng abwechseln (Ereignis -> Funktion -> Ereignis). Niemals dürfen zwei Ereignisse oder zwei Funktionen direkt aufeinander folgen!\n" +
                       "   b) Logische Konnektoren (Kreise mit Symbol):\n" +
                       "      - AND (∧): Alle ausgehenden bzw. eingehenden Pfade müssen zwingend ausgeführt werden (Parallelität / Synchronisation).\n" +
                       "      - OR (∨): Mindestens ein Pfad oder mehrere Pfade können ausgeführt werden (inklusive ODER).\n" +
                       "      - XOR (⊕): Genau ein einziger Pfad wird ausgeführt, die anderen schließen sich aus (Entweder-Oder).\n" +
                       "   c) Konnektoren im Beispiel:\n" +
                       "      - Nach der Prüfung (Standardproblem?): **XOR-Verzweigung** (entweder Standardproblem ODER komplexer Fall).\n" +
                       "      - Bei Weiterleitung an 2nd-Level & Kundeninfo: **AND-Verzweigung** (beides findet parallel statt).\n" +
                       "      - Vor dem Schließen nach 2nd-Level: **AND-Zusammenführung** (beide Pfade müssen beendet sein, bevor geschlossen wird).\n\n" +
                       "2. BPMN 2.0 (6 Punkte):\n" +
                       "   a) Pool vs. Lane:\n" +
                       "      - Pool: Repräsentiert eine eigenständige Organisationseinheit oder ein Unternehmen (z. B. 'IT-Dienstleister' oder 'Kunde'). Kommunikation zwischen Pools erfolgt über Nachrichtenflüsse (Message Flow, gestrichelt).\n" +
                       "      - Lane: Unterteilt einen Pool horizontal/vertikal in interne Abteilungen oder Rollen (z. B. Lane '1st-Level-Support', Lane '2nd-Level-Support'). Kontrollfluss innerhalb einer Lane läuft über Sequenzflüsse (durchgezogene Pfeile).\n" +
                       "   b) Gateways (Rauten):\n" +
                       "      - Exklusives Gateway (XOR, Raute mit X): Verzweigung in genau einen Pfad basierend auf Bedingungen.\n" +
                       "      - Paralleles Gateway (AND, Raute mit +): Teilt den Ablauf in mehrere gleichzeitig ablaufende Pfade (ohne Bedingung) oder synchronisiert sie.\n" +
                       "   c) Ereignis-Grafik in BPMN:\n" +
                       "      - Startereignis: Dünne einfache Kreislinie (○).\n" +
                       "      - Zwischenereignis: Doppelte dünne Kreislinie (◎).\n" +
                       "      - Endereignis: Dicke/fette Kreislinie (● / hervorgehobener Rand).\n\n" +
                       "3. Vorteile von BPMN 2.0 (2 Punkte):\n" +
                       "   - International standardisiert (ISO/IEC 19510) und von fast allen Workflow-Engines direkt ausführbar (technische Automatisierbarkeit).\n" +
                       "   - Bessere Modellierung von Organisationsgrenzen (Pools/Lanes) und systemübergreifender Kommunikation (Message Flows).",
        explanation: "EPK und BPMN 2.0 Prozessmodellierungen werden in der Baden-Württembergischen AP1 regelmäßig zur Analyse von betrieblichen Workflows verlangt.",
        points: 16
    },
    {
        id: 225,
        theme: "lf4",
        isBawueFocus: true,
        topic: "LF 4 - Algorithmen: Struktogramme & Pseudocode",
        type: "open-text",
        title: "Programmierung & Logik: Nassi-Shneiderman Struktogramme, Kontrollstrukturen & Pseudocode",
        question: "Gegeben ist folgende Aufgabenstellung zur Rabattberechnung in einem Onlineshop:\n\n" +
                  "'Ein Kunde bestellt Waren im Gesamtwert von `bestellwert`. Wenn der Kunde den Status `premium` hat, erhält er ab einem Bestellwert von 100 € einen Rabatt von 10 %, andernfalls 5 %. Standard-Kunden erhalten ab 200 € Bestellwert einen Rabatt von 5 %, darunter keinen Rabatt (0 %). Am Ende wird der Rechnungsbetrag berechnet und ausgegeben. Solange weitere Artikel im Warenkorb liegen, soll die Erfassung wiederholt werden.'\n\n" +
                  "1. **Struktogramm-Bausteine (Nassi-Shneiderman):**\n" +
                  "   a) Skizzieren/beschreiben Sie das Symbol für eine **Sequenz (einfache Anweisung)**. (1 Punkt)\n" +
                  "   b) Beschreiben Sie das Symbol für eine **Zweiseitige Verzweigung (IF-THEN-ELSE)**. (2 Punkte)\n" +
                  "   c) Wie unterscheiden sich im Struktogramm eine **kopfgesteuerte Schleife (WHILE)** und eine **fußgesteuerte Schleife (DO-WHILE)** grafisch? (3 Punkte)\n" +
                  "   d) Wie wird eine **Zählschleife (FOR)** dargestellt? (1 Punkt)\n" +
                  "2. **Logik-Entwurf:** Formulieren Sie den vollständigen Algorithmus zur Rabatt- und Rechnungsbetragsberechnung in sauber strukturiertem **Pseudocode** (inkl. Verzweigungen). (6 Punkte)\n" +
                  "3. **Fehleranalyse:** Welche Gefahr besteht, wenn in einer Schleife die Abbruchbedingung falsch formuliert oder die Zählvariable nicht verändert wird? (3 Punkte)",
        correctAnswer: "1. Struktogramm-Grundsymbole (7 Punkte):\n" +
                       "   a) Sequenz (Anweisung): Ein einfaches rechteckiges Kästchen mit dem Anweisungstext (wird von oben nach unten durchlaufen).\n" +
                       "   b) Zweiseitige Verzweigung (IF-THEN-ELSE): Ein Rechteck mit einem oberen Dreieckskeil. Oben steht die Bedingung; links steht der 'JA/WAHR'-Zweig mit Anweisungen, rechts steht der 'NEIN/FALSCH'-Zweig mit Anweisungen.\n" +
                       "   c) Schleifen-Darstellung:\n" +
                       "      - Kopfgesteuerte Schleife (WHILE / abweisend): Ein L-förmiger Rahmen mit dem Schleifenbalken OBEN (Bedingung steht oben im Balken). Der Schleifenkörper wird nur durchlaufen, wenn die Bedingung anfangs wahr ist (0 bis n Durchläufe).\n" +
                       "      - Fußgesteuerte Schleife (DO-WHILE / annehmend): Ein L-förmiger Rahmen mit dem Schleifenbalken UNTEN (Bedingung steht unten). Der Schleifenkörper wird mindestens einmal zwingend ausgeführt (1 bis n Durchläufe).\n" +
                       "   d) Zählschleife (FOR): Ein Kasten mit linkem Balken und oberer Schleifenleiste: 'FÜR i = 1 BIS n SCHRITT 1'.\n\n" +
                       "2. Pseudocode für die Rabattberechnung (6 Punkte):\n" +
                       "```text\n" +
                       "WENN status == 'premium' DANN\n" +
                       "    WENN bestellwert >= 100 DANN\n" +
                       "        rabattProzent = 0.10\n" +
                       "    SONST\n" +
                       "        rabattProzent = 0.05\n" +
                       "    ENDE_WENN\n" +
                       "SONST\n" +
                       "    WENN bestellwert >= 200 DANN\n" +
                       "        rabattProzent = 0.05\n" +
                       "    SONST\n" +
                       "        rabattProzent = 0.00\n" +
                       "    ENDE_WENN\n" +
                       "ENDE_WENN\n" +
                       "\n" +
                       "rabattBetrag = bestellwert * rabattProzent\n" +
                       "rechnungsbetrag = bestellwert - rabattBetrag\n" +
                       "AUSGABE 'Rechnungsbetrag:', rechnungsbetrag\n" +
                       "```\n\n" +
                       "3. Fehleranalyse (3 Punkte):\n" +
                       "   - Es entsteht eine **Endlosschleife (Infinite Loop)**.\n" +
                       "   - Das Programm reagiert nicht mehr, blockiert CPU-Ressourcen (100 % Kernauslastung) und stürzt ab bzw. erzeugt einen Programm-Freeze / Stack Overflow / Speicherüberlauf.",
        explanation: "Nassi-Shneiderman Struktogramme (DIN 66261) und Pseudocode sind feste Programmier-Bestandteile der AP1.",
        points: 16
    },
    {
        id: 226,
        theme: "lf3",
        isBawueFocus: true,
        topic: "LF 3/4 - Fachenglisch: Technische Logs & Troubleshooting",
        type: "open-text",
        title: "Fachenglisch: Analyse von englischen Server-Logfiles & Troubleshooting",
        question: "In einem Supportfall analysieren Sie folgenden Auszug aus einem englischsprachigen Server-Logfile (Webserver / API-Gateway):\n\n" +
                  "```text\n" +
                  "[2026-09-08 14:22:15.104] [CRITICAL] [auth-service] Connection to database cluster 'db-node-01.internal' timed out after 30000ms.\n" +
                  "[2026-09-08 14:22:15.109] [ERROR] [api-gateway] HTTP 504 Gateway Timeout on POST /api/v1/auth/login. Client IP: 192.168.10.45.\n" +
                  "[2026-09-08 14:22:15.115] [WARNING] [load-balancer] Health check failed for backend 'auth-service-01'. Marking node as UNHEALTHY.\n" +
                  "[2026-09-08 14:22:16.002] [INFO] [failover-daemon] Automatic failover triggered. Redirecting incoming traffic to secondary cluster 'db-node-02.internal'.\n" +
                  "```\n\n" +
                  "Beantworten Sie folgende IHK-Fragen auf Deutsch:\n\n" +
                  "1. Übersetzen und erklären Sie sinngemäß die **Fehlerursache** in Zeile 1 und 2. (4 Punkte)\n" +
                  "2. Was bedeutet die Statusmeldung des Load-Balancers in Zeile 3 und welche Konsequenz hat das 'Marking node as UNHEALTHY'? (3 Punkte)\n" +
                  "3. Welche automatische Notfallmaßnahme (**Failover**) wird in Zeile 4 eingeleitet? (3 Punkte)\n" +
                  "4. Nennen Sie den Unterschied zwischen dem HTTP-Statuscode **502 Bad Gateway** und **504 Gateway Timeout**. (2 Punkte)",
        correctAnswer: "1. Fehlerursache (4 Punkte):\n" +
                       "   - Zeile 1: Der Authentifizierungsdienst ('auth-service') konnte keine Verbindung zum primären Datenbank-Cluster ('db-node-01.internal') aufbauen; nach 30 Sekunden (30.000 ms) wurde die Verbindung wegen Zeitüberschreitung abgebrochen (Connection Timeout).\n" +
                       "   - Zeile 2: Das API-Gateway meldet daraufhin an den Client (IP 192.168.10.45) den Fehlercode HTTP 504 (Gateway Timeout), weil der dahinterliegende Authentifizierungsserver nicht rechtzeitig geantwortet hat.\n\n" +
                       "2. Load-Balancer Health-Check & Konsequenz (3 Punkte):\n" +
                       "   - Bedeutung: Der periodische Funktions-/Gesundheitstest (Health Check) für den Knoten 'auth-service-01' ist fehlgeschlagen.\n" +
                       "   - Konsequenz: Der Knoten wird als fehlerhaft/nicht einsatzbereit markiert ('UNHEALTHY') und der Load-Balancer leitet ab sofort keine neuen Client-Anfragen mehr an diesen defekten Server weiter, um Verbindungsabbrüche für Nutzer zu verhindern.\n\n" +
                       "3. Automatisches Failover (3 Punkte):\n" +
                       "   - Der Ausfallerkennungs-Dienst (Failover-Daemon) schaltet den Datenverkehr automatisch auf das redundante Ersatzsystem / den sekundären Datenbank-Cluster ('db-node-02.internal') um, damit der Dienst ohne manuellen Eingriff weiterläuft (Hochverfügbarkeit).\n\n" +
                       "4. HTTP 502 vs. 504 (2 Punkte):\n" +
                       "   - HTTP 502 Bad Gateway: Der Proxy/Gateway hat eine ungültige Antwort (z. B. Verbindungsabbruch oder fehlerhafte Daten) vom Upstream-Server erhalten.\n" +
                       "   - HTTP 504 Gateway Timeout: Der Proxy/Gateway hat innerhalb der vorgegebenen Zeitspanne überhaupt keine Antwort vom Upstream-Server erhalten (Zeitüberschreitung).",
        explanation: "Fachenglische Textauszüge, Logs und Handbücher sinngemäß auf Deutsch zu verstehen und zu erklären ist ein fester Bestandteil der Baden-Württembergischen IHK-Abschlussprüfung.",
        points: 12
    },
    {
        id: 227,
        theme: "lf1",
        isBawueFocus: true,
        topic: "LF 1 / WiSo - Prozesse im Unternehmen: Prozessorganisation & Wertschöpfung",
        type: "open-text",
        title: "Geschäftsprozesse: Funktionsorientierung vs. Prozessorientierung, Kern- & Supportprozesse",
        question: "Ein IT-Systemhaus mit 80 Mitarbeitern stellt seine Arbeitsweise von einer rein funktionsorientierten Aufbauorganisation auf eine durchgängige Prozessorganisation um.\n\n" +
                  "1. **Funktionsorientierung vs. Prozessorientierung (4 Punkte):**\n" +
                  "   a) Erklären Sie das klassische 'Abteilungs-/Silodenken' einer funktionsorientierten Organisation und nennen Sie zwei typische Nachteile für Kunden. (2 Punkte)\n" +
                  "   b) Was kennzeichnet im Gegensatz dazu eine prozessorientierte Organisation und welcher Vorteil ergibt sich für Durchlaufzeiten? (2 Punkte)\n\n" +
                  "2. **Prozessarten im Systemhaus (6 Punkte):**\n" +
                  "   Klassifizieren Sie folgende vier betriebliche Abläufe begründet als **Kernprozess**, **Supportprozess (Unterstützungsprozess)** oder **Führungsprozess / Steuerungsprozess**:\n" +
                  "   - *Ablauf 1:* Planung und Rollout von 50 Server-Workstations beim Kunden inklusive Inbetriebnahme.\n" +
                  "   - *Ablauf 2:* Monatliche Gehaltsabrechnung und Urlaubsverwaltung in der Personalabteilung (HR).\n" +
                  "   - *Ablauf 3:* Strategische Jahresplanung der Geschäftsleitung zur Einführung von KI-gestütztem IT-Monitoring.\n" +
                  "   - *Ablauf 4:* Wartung und Patch-Management der internen Firmen-Firewall durch die interne IT-Administration.\n\n" +
                  "3. **Prozess vs. Workflow (3 Punkte):**\n" +
                  "   Grenzen Sie die Begriffe **Geschäftsprozess** und **Workflow** klar voneinander ab.\n\n" +
                  "4. **Kundenorientierung (3 Punkte):**\n" +
                  "   Erklären Sie den Unterschied zwischen einem **externen Kunden** und einem **internen Kunden** an einem konkreten Beispiel aus dem IT-Helpdesk.",
        correctAnswer: "1. Funktions- vs. Prozessorientierung (4 Punkte):\n" +
                       "   a) Funktionsorientierung & Silodenken:\n" +
                       "      - Mitarbeiter denken nur innerhalb ihrer eigenen Abteilung (z. B. nur Vertrieb oder nur Technik) und optimieren nur Teilbereiche, anstatt das Gesamtergebnis im Blick zu haben.\n" +
                       "      - Nachteile für Kunden: Hoher Abstimmungsaufwand, Informationsverluste an Schnittstellen, lange Wartezeiten und unklare Verantwortlichkeiten ('Niemand fühlt sich zuständig').\n" +
                       "   b) Prozessorientierung:\n" +
                       "      - Die Abläufe sind horizontal entlang der Wertschöpfungskette am Kundennutzen ausgerichtet (End-to-End).\n" +
                       "      - Vorteil für Durchlaufzeiten: Vermeidung von Liegezeiten, Wegfall von Medienbrüchen und schnellere Auftragsbearbeitung durch klare Prozessverantwortliche (Process Owner).\n\n" +
                       "2. Klassifikation der Prozessarten (6 Punkte):\n" +
                       "   - Ablauf 1 (Server-Rollout): **Kernprozess** (direkte Wertschöpfung für den externen Kunden, erzeugt Umsatz/Kundennutzen).\n" +
                       "   - Ablauf 2 (Gehaltsabrechnung): **Supportprozess / Unterstützungsprozess** (notwendige interne Dienstleistung, schafft keinen direkten Kundennutzen, unterstützt aber den Betrieb).\n" +
                       "   - Ablauf 3 (Strategische Jahresplanung): **Führungsprozess / Steuerungsprozess** (strategische Ausrichtung, Zielvorgaben und Unternehmenssteuerung durch das Management).\n" +
                       "   - Ablauf 4 (Interne Firewall-Wartung): **Supportprozess / Unterstützungsprozess** (stellt die Funktionsfähigkeit der internen IT-Infrastruktur sicher).\n\n" +
                       "3. Geschäftsprozess vs. Workflow (3 Punkte):\n" +
                       "   - **Geschäftsprozess:** Die fachlich-organisatorische, betriebswirtschaftliche Gesamtheit aller Aktivitäten zur Erreichung eines geschäftlichen Ziels (z. B. 'Beschaffung von Hardware').\n" +
                       "   - **Workflow:** Die konkrete, IT-technische, oft automatisierte operative Ausführung eines Teilprozesses oder Arbeitsablaufs in einem Softwaresystem (z. B. automatisiertes Routing eines Genehmigungs-Tickets in Jira/ServiceNow).\n\n" +
                       "4. Interner vs. externer Kunde (3 Punkte):\n" +
                       "   - **Externer Kunde:** Der zahlende Auftraggeber von außerhalb des Unternehmens (z. B. Kunde kauft Cloud-Hosting).\n" +
                       "   - **Interner Kunde:** Ein Kollege oder eine Abteilung innerhalb des eigenen Unternehmens, die eine IT-Dienstleistung empfängt (z. B. Mitarbeiterin aus dem Marketing meldet defekten Laptop beim internen IT-Helpdesk; Helpdesk betrachtet sie als internen Kunden mit SLA-Qualitätsanspruch).",
        explanation: "Prozessorientierung, Kern- und Supportprozesse sowie Kundenfokussierung sind elementare Kerninhalte von LF 1 und WiSo.",
        points: 16
    },
    {
        id: 228,
        theme: "lf1",
        isBawueFocus: true,
        topic: "LF 1 / WiSo - Beschaffung: Der Ende-zu-Ende Beschaffungsprozess im IT-Unternehmen",
        type: "open-text",
        title: "Beschaffungsmanagement: Phasen des Beschaffungsprozesses von der Bedarfsanforderung bis zur Zahlung",
        question: "Ein IT-Dienstleister plant die Beschaffung von 30 High-End-Entwickler-Notebooks.\n\n" +
                  "1. **Phasen des Beschaffungsprozesses (6 Punkte):**\n" +
                  "   Bringen Sie die folgenden 6 Prozessschritte in die korrekte zeitlich-logische Reihenfolge (1 bis 6) und beschreiben Sie kurz den Hauptzweck jedes Schritts:\n" +
                  "   - Schritt A: *Wareneingangskontrolle & Lieferscheinabgleich*\n" +
                  "   - Schritt B: *Rechnungsprüfung (Drei-Wege-Abgleich: Bestellung, Lieferschein, Rechnung)*\n" +
                  "   - Schritt C: *Bedarfsanforderung (Banf) & Budgetgenehmigung*\n" +
                  "   - Schritt D: *Bestellabwicklung (Übermittlung der Bestellung an den Lieferanten)*\n" +
                  "   - Schritt E: *Angebotseinholung & Nutzwertanalyse / Lieferantenbewertung*\n" +
                  "   - Schritt F: *Zahlungsanweisung unter Berücksichtigung von Skonto*\n\n" +
                  "2. **Lastenheft vs. Pflichtenheft bei Beschaffung (4 Punkte):**\n" +
                  "   Wer erstellt im Beschaffungsprozess das **Lastenheft** (Was/Wofür?) und wer erstellt das **Pflichtenheft** (Wie/Womit?)?\n\n" +
                  "3. **Drei-Wege-Rechnungsprüfung (4 Punkte):**\n" +
                  "   Welche drei Dokumente werden bei der kaufmännischen Rechnungsprüfung vor der Freigabe zwingend abgeglichen und welche Diskrepanzen werden dabei aufgedeckt?\n\n" +
                  "4. **Skonto-Berechnung (2 Punkte):**\n" +
                  "   Auf der Rechnung über 45.000,00 € netto steht die Zahlungsbedingung: *'Zahlbar innerhalb 10 Tagen mit 3 % Skonto oder innerhalb 30 Tagen netto'*. Berechnen Sie den Überweisungsbetrag bei Skontoabzug.",
        correctAnswer: "1. Chronologische Reihenfolge der Phasen (6 Punkte):\n" +
                       "   1. **Schritt C:** Bedarfsanforderung (Banf) & Budgetgenehmigung (Fachabteilung meldet Bedarf, Kostenstelle/Vorgesetzter genehmigt Budget).\n" +
                       "   2. **Schritt E:** Angebotseinholung & Nutzwertanalyse / Lieferantenbewertung (Einkauf holt Vergleichsangebote ein und bewertet nach Preis/Leistung).\n" +
                       "   3. **Schritt D:** Bestellabwicklung (Verbindliche Bestellung wird an den ausgewählten Lieferanten übermittelt -> Kaufvertragsschluss).\n" +
                       "   4. **Schritt A:** Wareneingangskontrolle & Lieferscheinabgleich (Physische Prüfung auf Transportschäden, Vollständigkeit und Rüge nach § 377 HGB).\n" +
                       "   5. **Schritt B:** Rechnungsprüfung (Drei-Wege-Abgleich: Buchhalterische Prüfung von Bestellung, Lieferschein und Eingangsrechnung).\n" +
                       "   6. **Schritt F:** Zahlungsanweisung (Termingerechte Überweisung durch die Buchhaltung unter Ausnutzung von Skonto).\n\n" +
                       "2. Lastenheft vs. Pflichtenheft (4 Punkte):\n" +
                       "   - **Lastenheft:** Wird vom **Auftraggeber / Besteller (Kunden)** erstellt. Beschreibt die Gesamtheit der Anforderungen (*WAS* und *WOFÜR*).\n" +
                       "   - **Pflichtenheft:** Wird vom **Auftragnehmer / Lieferanten** erstellt. Beschreibt den konkreten Realisierungs- und Lieferplan (*WIE* und *WOMIT*).\n\n" +
                       "3. Drei-Wege-Rechnungsprüfung (4 Punkte):\n" +
                       "   - Die 3 Dokumente: **Bestellung (Purchase Order)**, **Lieferschein / Wareneingangsbeleg (Goods Receipt)** und **Lieferantenrechnung (Invoice)**.\n" +
                       "   - Aufgedeckte Diskrepanzen: Falsche Preise (Rechnung weicht von Bestellpreis ab), Mengenabweichungen (Berechnung von nicht gelieferten Artikeln), falsche Rabatte oder fehlende Artikel.\n\n" +
                       "4. Skonto-Berechnung (2 Punkte):\n" +
                       "   - Skontobetrag: 45.000,00 € * 0,03 = 1.350,00 €\n" +
                       "   - Überweisungsbetrag: 45.000,00 € - 1.350,00 € = **43.650,00 €** (netto).",
        explanation: "Der kaufmännische Beschaffungsprozess von der Bedarfsanforderung über die Rechnungsprüfung bis zur Skontoberechnung ist Prüfungsstandard.",
        points: 16
    },
    {
        id: 229,
        theme: "lf1",
        isBawueFocus: true,
        topic: "LF 1 / WiSo - Vertragsrecht: IT-Vertragstypen & Abgrenzung",
        type: "open-text",
        title: "Vertragsrecht: Abgrenzung von Kaufvertrag, Dienstvertrag, Werkvertrag & Werklieferungsvertrag",
        question: "Ein IT-Systemhaus schließt mit verschiedenen Kunden unterschiedliche Verträge ab.\n\n" +
                  "1. **Dienstvertrag vs. Werkvertrag (6 Punkte):**\n" +
                  "   a) Was schuldet der Auftragnehmer bei einem **Dienstvertrag (§ 611 BGB)** und was bei einem **Werkvertrag (§ 631 BGB)**? (2 Punkte)\n" +
                  "   b) Warum ist die **förmliche Abnahme (§ 640 BGB)** nur beim Werkvertrag zwingend erforderlich und welche drei rechtlichen Wirkungen löst sie aus? (4 Punkte)\n\n" +
                  "2. **Fallzuordnungen IT-Vertragstypen (6 Punkte):**\n" +
                  "   Bestimmen Sie für folgende 3 IT-Praxisfälle den zutreffenden Vertragstyp nach BGB:\n" +
                  "   - *Fall A:* Das Systemhaus programmiert für einen Kunden eine maßgeschneiderte E-Commerce-Plattform nach einem detaillierten Pflichtenheft mit fest vereinbarten Funktionsgarantien.\n" +
                  "   - *Fall B:* Ein Senior-Consultant des Systemhauses berät die Geschäftsleitung eines Kunden an 3 Tagen zum Thema 'Cloud-Migration' auf Stundennachweis ohne Erfolgszusage.\n" +
                  "   - *Fall C:* Das Systemhaus assembliert aus Einzelkomponenten (Mainboard, CPU, RAM) zehn maßgeschneiderte Hochleistungs-CAD-Workstations und übereignet sie an das Architektur-Büro.\n\n" +
                  "3. **SaaS / Cloud-Verträge (4 Punkte):**\n" +
                  "   Ein Kunde nutzt Software über das Internet als Software-as-a-Service (SaaS, z. B. Microsoft 365) gegen monatliche Gebühr. Welche vertragsrechtliche Einordnung greift hier überwiegend und welche Hauptpflicht hat der Provider bezüglich der Verfügbarkeit?",
        correctAnswer: "1. Dienstvertrag vs. Werkvertrag (6 Punkte):\n" +
                       "   a) Geschuldete Leistung:\n" +
                       "      - Dienstvertrag (§ 611 BGB): Geschuldet wird das reine **Tätigwerden / Bemühen** nach bestem Wissen (kein bestimmter Erfolg garantiert).\n" +
                       "      - Werkvertrag (§ 631 BGB): Geschuldet wird die Herbeiführung eines konkreten, mangelfreien **Erfolgs / Werkergebnisses**.\n" +
                       "   b) Abnahme (§ 640 BGB) & Wirkungen:\n" +
                       "      - Die Abnahme ist die körperliche Entgegennahme des Werkes verbunden mit der Billigung als im Wesentlichen vertragsgemäß.\n" +
                       "      - 3 zentrale Rechtswirkungen der Abnahme:\n" +
                       "        1. **Fälligkeit der Vergütung (Werklohn):** Der Vergütungsanspruch wird fällig (§ 641 BGB).\n" +
                       "        2. **Gefahrübergang:** Die Gefahr des zufälligen Untergangs geht auf den Besteller über (§ 644 BGB).\n" +
                       "        3. **Beweislastumkehr & Verjährungsbeginn:** Vor der Abnahme muss der Auftragnehmer Mängelfreiheit beweisen; nach der Abnahme muss der Kunde Mängel beweisen. Die 2-jährige Gewährleistungsfrist beginnt zu laufen.\n\n" +
                       "2. Zuordnung der Praxisfälle (6 Punkte):\n" +
                       "   - Fall A (Individualsoftware nach Pflichtenheft): **Werkvertrag (§ 631 BGB)**, da ein konkreter Erfolg (funktionierende Plattform nach Pflichtenheft) geschuldet ist.\n" +
                       "   - Fall B (IT-Beratung nach Stundennachweis): **Dienstvertrag (§ 611 BGB)**, da reine Beratungstätigkeit ohne Garantie eines messbaren wirtschaftlichen Erfolgs geschuldet wird.\n" +
                       "   - Fall C (Individuell gebaute CAD-Workstations): **Werklieferungsvertrag (§ 650 BGB)** (Herstellung und Übereignung einer beweglichen Sache aus eigenen Bauteilen; unterliegt weitgehend Kaufvertragsrecht).\n\n" +
                       "3. SaaS / Cloud-Verträge (4 Punkte):\n" +
                       "   - Einordnung: Weist überwiegend Züge eines **Mietvertrags (§ 535 BGB)** auf (zeitweise Gebrauchsüberlassung von Software/Infrastruktur) kombiniert mit dienstvertraglichen Elementen (Support, Wartung).\n" +
                       "   - Hauptpflicht des Providers: Erhaltung der Software im vertragsgemäßen, betriebsbereiten Zustand während der gesamten Vertragslaufzeit und Gewährleistung der im Service Level Agreement (SLA) garantierten Mindestverfügbarkeit (z. B. 99,5 % p. a.).",
        explanation: "Die präzise Abgrenzung von Dienstvertrag, Werkvertrag und Werklieferungsvertrag ist eine klassische IHK-Prüfungsaufgabe in ganz Deutschland und BaWü.",
        points: 16
    },
    {
        id: 230,
        theme: "lf1",
        isBawueFocus: true,
        topic: "LF 1 / WiSo - Vertragsrecht: Zweiseitiger Handelskauf & Rügepflicht (§ 377 HGB)",
        type: "open-text",
        title: "B2B-Handelskauf: Rügefristen, Mängelarten & Rechtsfolgen bei unterlassener Rüge nach § 377 HGB",
        question: "Die IT-Solutions GmbH (Kaufmann nach HGB) bestellt beim Großhändler Server-Express OHG 20 Managed Gigabit-Switches mit je 48 Ports. Bei der Lieferung treten rechtliche Fragen auf:\n\n" +
                  "1. **Rechtsnatur des Geschäfts (2 Punkte):**\n" +
                  "   Warum handelt es sich hierbei um einen **beiderseitigen (zweiseitigen) Handelskauf** und welches Gesetzbuch findet vorrangig Anwendung?\n\n" +
                  "2. **Rügepflicht nach § 377 HGB (6 Punkte):**\n" +
                  "   a) Welche zwei Pflichten treffen die IT-Solutions GmbH unverzüglich nach Ablieferung der Ware? (2 Punkte)\n" +
                  "   b) Unterscheiden Sie **offene Mängel**, **versteckte Mängel** und **arglistig verschwiegene Mängel** bezüglich der Rügefristen. (4 Punkte)\n\n" +
                  "3. **Fallanalyse (5 Punkte):**\n" +
                  "   Die Switches werden am Montag geliefert. Bei der Warenannahme wird das Paket ungeöffnet ins Lager gestellt. Nach 4 Wochen packt der IT-Techniker die Geräte aus und stellt fest, dass alle Switches nur 24 Ports statt der bestellten 48 Ports haben (Falschlieferung/Mangel). Die GmbH reklamiert sofort beim Großhändler.\n" +
                  "   - Prüfen Sie die Rechtslage: Hat die IT-Solutions GmbH noch Anspruch auf Nacherfüllung / Umtausch? Begründen Sie mit § 377 HGB.\n\n" +
                  "4. **Verbrauchsgüterkauf im Vergleich (3 Punkte):**\n" +
                  "   Gilt die strenge Rügepflicht nach § 377 HGB auch für einen privaten Verbraucher (B2C), der im Online-Shop Hardware bestellt? Begründen Sie.",
        correctAnswer: "1. Rechtsnatur (2 Punkte):\n" +
                       "   - Beide Vertragspartner (GmbH und OHG) sind Kaufleute im Sinne des Handelsgesetzbuches (HGB) und das Geschäft gehört zum Betrieb ihres Handelsgewerbes -> **zweiseitiger Handelskauf (§ 343 HGB)**.\n" +
                       "   - Das **HGB** findet vorrangig als Spezialgesetz vor dem BGB Anwendung.\n\n" +
                       "2. Rügepflicht nach § 377 HGB (6 Punkte):\n" +
                       "   a) Die 2 Pflichten des Käufers:\n" +
                       "      1. **Untersuchungspflicht:** Die Ware muss unverzüglich (ohne schuldhaftes Zögern) nach der Ablieferung untersucht werden.\n" +
                       "      2. **Rügepflicht:** Zeigt sich ein Mangel, muss dieser dem Verkäufer unverzüglich angezeigt (gerügt) werden.\n" +
                       "   b) Mängelarten & Rügefristen:\n" +
                       "      - **Offener Mangel:** Bei ordnungsgemäßer Untersuchung sofort erkennbar (z. B. Gehäuseschaden, falsche Portanzahl) -> Rüge muss **unverzüglich (innerhalb weniger Tage)** erfolgen.\n" +
                       "      - **Versteckter Mangel:** Bei normaler Eingangsprüfung nicht erkennbar (z. B. thermischer Chipfehler bei Volllast nach 3 Wochen) -> Rüge muss **unverzüglich nach der Entdeckung** innerhalb der 2-jährigen Verjährungsfrist erfolgen.\n" +
                       "      - **Arglistig verschwiegener Mangel:** Verkäufer wusste vom Mangel und hat ihn verheimlicht -> Verkäufer kann sich nicht auf verspätete Rüge berufen (§ 377 Abs. 5 HGB); Verjährungsfrist 3 Jahre (§ 195 BGB).\n\n" +
                       "3. Fallanalyse (5 Punkte):\n" +
                       "   - **Rechtsfolge:** Die IT-Solutions GmbH hat **keinen Anspruch mehr auf Nacherfüllung oder Umtausch**.\n" +
                       "   - **Begründung:** Die falsche Portanzahl (24 statt 48 Ports) stellt einen offenen Mangel (Aliud-Lieferung, § 434 Abs. 5 BGB) dar. Da die GmbH die Ware erst nach 4 Wochen geprüft hat, erfolgte die Rüge nicht unverzüglich. Nach § 377 Abs. 2 HGB gilt die Ware somit als **genehmigt**. Alle gesetzlichen Gewährleistungsansprüche sind erloschen.\n\n" +
                       "4. Verbrauchsgüterkauf (B2C) (3 Punkte):\n" +
                       "   - **Nein**, die Rügepflicht nach § 377 HGB gilt ausschließlich für Kaufleute (B2B).\n" +
                       "   - Verbraucher (B2C nach § 474 BGB) haben **keine Rügepflicht** und können Mängel während der gesamten 2-jährigen gesetzlichen Gewährleistungsfrist geltend machen.",
        explanation: "§ 377 HGB Rügepflicht ist einer der wichtigsten Rechtsbestandteile der AP1-Abschlussprüfung.",
        points: 16
    },
    {
        id: 231,
        theme: "lf1",
        isBawueFocus: true,
        topic: "LF 1 / WiSo - Rechtsgrundlagen: Geschäftsfähigkeit & Willenserklärungen",
        type: "open-text",
        title: "Bürgerliches Recht: Geschäftsfähigkeit (§§ 104-113 BGB), Taschengeldparagraph & schwebende Unwirksamkeit",
        question: "In einem IT-Fachgeschäft ereignen sich folgende Verkaufsfälle:\n\n" +
                  "1. **Stufen der Geschäftsfähigkeit (6 Punkte):**\n" +
                  "   Erläutern Sie die 3 gesetzlichen Stufen der Geschäftsfähigkeit (Altersgrenzen und rechtliche Wirksamkeit von Willenserklärungen):\n" +
                  "   - Stufe 1: *Geschäftsunfähigkeit (§ 104 BGB)*\n" +
                  "   - Stufe 2: *Beschränkte Geschäftsfähigkeit (§ 106 BGB)*\n" +
                  "   - Stufe 3: *Unbeschränkte Geschäftsfähigkeit (§ 2 BGB)*\n\n" +
                  "2. **Fallbeurteilungen (6 Punkte):**\n" +
                  "   Beurteilen Sie die Rechtswirksamkeit des jeweiligen Kaufvertrags (wirksam, nichtig oder schwebend unwirksam? Begründen Sie):\n" +
                  "   - *Fall 1:* Der 6-jährige Tim kauft von seinem Taschengeld im Laden eine Gaming-Maus für 35,00 € in bar.\n" +
                  "   - *Fall 2:* Der 16-jährige Auszubildende Jan kauft ein Smartphone für 400,00 € auf 24 Monatsraten ohne Wissen seiner Eltern.\n" +
                  "   - *Fall 3:* Die 15-jährige Sarah kauft eine externe SSD für 80,00 € und bezahlt den Betrag sofort vollständig in bar aus ihrem angesparten Taschengeld.\n\n" +
                  "3. **Taschengeldparagraph § 110 BGB (2 Punkte):**\n" +
                  "   Unter welcher zwingenden Voraussetzung wird ein Vertrag nach § 110 BGB ohne vorherige Zustimmung der Eltern wirksam?",
        correctAnswer: "1. Stufen der Geschäftsfähigkeit (6 Punkte):\n" +
                       "   - **Geschäftsunfähigkeit (0 bis unter 7 Jahre, § 104 Nr. 1 BGB):** Willenserklärungen sind von Anfang an **nichtig (§ 105 Abs. 1 BGB)**. Gesetzliche Vertreter handeln.\n" +
                       "   - **Beschränkte Geschäftsfähigkeit (7 bis unter 18 Jahre, § 106 BGB):** Verträge sind **schwebend unwirksam**, bis die gesetzlichen Vertreter (Eltern) zustimmen (§ 108 BGB). Ausnahmen: Lediglich rechtlicher Vorteil (§ 107) oder Taschengeldparagraph (§ 110).\n" +
                       "   - **Unbeschränkte Geschäftsfähigkeit (ab Vollendung des 18. Lebensjahres, § 2 BGB):** Alle Willenserklärungen und Verträge sind voll **rechtswirksam**.\n\n" +
                       "2. Fallbeurteilungen (6 Punkte):\n" +
                       "   - **Fall 1 (6-jähriger Tim):** Kaufvertrag ist **nichtig (§ 105 Abs. 1 BGB)**, da Tim unter 7 Jahre alt und somit geschäftsunfähig ist. Der Taschengeldparagraph greift hier nicht!\n" +
                       "   - **Fall 2 (16-jähriger Jan, Ratenkauf):** Kaufvertrag ist **schwebend unwirksam (§ 108 Abs. 1 BGB)**. Ein Ratenkauf / Kreditgeschäft fällt **niemals** unter den Taschengeldparagraphen (§ 110 BGB), da die Leistung nicht sofort vollständig bewirkt wird. Verweigern die Eltern die Genehmigung, wird der Vertrag endgültig unwirksam.\n" +
                       "   - **Fall 3 (15-jährige Sarah, SSD Barzahlung):** Kaufvertrag ist **voll wirksam nach § 110 BGB (Taschengeldparagraph)**, da Sarah die Leistung sofort und vollständig mit Mitteln bewirkt hat, die ihr zu diesem Zweck oder zur freien Verfügung überlassen wurden.\n\n" +
                       "3. Voraussetzung des § 110 BGB (2 Punkte):\n" +
                       "   - Der Minderjährige muss die vertragsmäßige Leistung **vollständig bewirkt (in voller Höhe bezahlt)** haben mit Mitteln, die ihm zur freien Verfügung oder zu diesem Zweck überlassen wurden (keine Ratenzahlung, keine Schuldenübernahme!).",
        explanation: "Geschäftsfähigkeit, Taschengeldparagraph und Ratenkäufe von Minderjährigen sind beliebte Prüfungsfälle der IHK.",
        points: 14
    },
    {
        id: 232,
        theme: "lf1",
        isBawueFocus: true,
        topic: "LF 1 / WiSo - Vertragsrecht: Gewährleistung (§§ 434 ff. BGB) vs. Garantie",
        type: "open-text",
        title: "Mängelrechte beim Kaufvertrag: Sachmängel, Vorrang der Nacherfüllung & Gewährleistung vs. Garantie",
        question: "Ein Unternehmen beschafft 10 Laserdrucker. Nach der Inbetriebnahme treten Mängel auf.\n\n" +
                  "1. **Gesetzliche Gewährleistung vs. Freiwillige Garantie (4 Punkte):**\n" +
                  "   Stellen Sie die gesetzliche **Gewährleistung (Sachmängelhaftung nach BGB)** und die **Herstellergarantie** tabellarisch oder stichpunktartig anhand von 3 Kriterien (Rechtsnatur, Verpflichteter, Dauer) gegenüber.\n\n" +
                  "2. **Rechte des Käufers bei Sachmängeln (6 Punkte):**\n" +
                  "   a) Welches Recht steht dem Käufer im Rahmen des **Vorrangs der Nacherfüllung (§ 439 BGB)** zu und welche Wahlmöglichkeit hat er? (3 Punkte)\n" +
                  "   b) Unter welchen Voraussetzungen kann der Käufer zu den **Sekundärrechten (Rücktritt, Minderung, Schadensersatz)** übergehen? (3 Punkte)\n\n" +
                  "3. **Beweislastumkehr beim Verbrauchsgüterkauf (§ 477 BGB) (4 Punkte):**\n" +
                  "   Wie lange gilt seit der Schuldrechtsreform die gesetzliche **Beweislastumkehr zugunsten des Verbrauchers** und was besagt diese Regelung?",
        correctAnswer: "1. Gewährleistung vs. Garantie (4 Punkte):\n" +
                       "   - **Gesetzliche Gewährleistung (Sachmängelhaftung):**\n" +
                       "     * Rechtsnatur: Gesetzlich vorgeschrieben (§§ 434 ff. BGB), nicht abdingbar gegenüber Verbrauchern.\n" +
                       "     * Verpflichteter: Immer der **Verkäufer (Vertragspartner)**.\n" +
                       "     * Dauer: Gesetzlich **2 Jahre** ab Übergabe bei neuen beweglichen Sachen (§ 438 BGB).\n" +
                       "   - **Herstellergarantie:**\n" +
                       "     * Rechtsnatur: Freiwillige vertragliche Zusicherung (§ 443 BGB), Bedingungen frei gestaltbar.\n" +
                       "     * Verpflichteter: In der Regel der **Hersteller** (oder Garantiegeber).\n" +
                       "     * Dauer: Frei wählbar (z. B. 1 Jahr, 3 Jahre, 5 Jahre Bring-In / Vor-Ort-Garantie).\n\n" +
                       "2. Rechte bei Sachmängeln (6 Punkte):\n" +
                       "   a) Vorrang der Nacherfüllung (§ 439 BGB):\n" +
                       "      - Der Käufer hat zunächst das Recht auf **Nacherfüllung**.\n" +
                       "      - Wahlrecht des Käufers: Er kann nach seiner Wahl entweder die **Beseitigung des Mangels (Nachbesserung / Reparatur)** oder die **Lieferung einer mangelfreien Sache (Nachlieferung / Umtausch)** verlangen. Der Verkäufer trägt alle erforderlichen Kosten (Transport, Arbeits- und Materialkosten).\n" +
                       "   b) Übergang zu den Sekundärrechten:\n" +
                       "      - Voraussetzung: Dem Verkäufer wurde eine angemessene Frist zur Nacherfüllung gesetzt und diese ist erfolglos verstrichen, oder die Nacherfüllung ist zweimal fehlgeschlagen (§ 440 BGB) bzw. wurde vom Verkäufer endgültig verweigert.\n" +
                       "      - Sekundärrechte: **Rücktritt vom Kaufvertrag (§ 323 BGB)** (Geld zurück gegen Ware), **Minderung des Kaufpreises (§ 441 BGB)** und/oder **Schadensersatz statt der Leistung (§ 280 BGB)**.\n\n" +
                       "3. Beweislastumkehr beim Verbrauchsgüterkauf (§ 477 BGB) (4 Punkte):\n" +
                       "   - **Dauer:** **1 Jahr (12 Monate)** ab Lieferung (seit der Reform 2022, zuvor 6 Monate).\n" +
                       "   - **Bedeutung:** Zeigt sich innerhalb von 12 Monaten ab Übergabe ein Mangel, wird gesetzlich vermutet, dass die Ware bereits bei Gefahrübergang mangelhaft war. Der Verkäufer müsste das Gegenteil beweisen.",
        explanation: "Nacherfüllung (§ 439 BGB), 12 Monate Beweislastumkehr (§ 477 BGB) und Garantieabgrenzung sind Kernfragen des Wirtschaftsrechts.",
        points: 14
    },
    {
        id: 233,
        theme: "lf1",
        isBawueFocus: true,
        topic: "LF 1 / WiSo - Vertragsrecht: Leistungsstörungen - Lieferungsverzug & Fixgeschäft",
        type: "open-text",
        title: "Vertragsstörungen: Lieferverzug (§ 286 BGB), Mahnung & Rechtsfolgen beim Fixkauf",
        question: "Ein IT-Unternehmen bestellt Hardware für ein wichtiges Kunden-Event.\n\n" +
                  "1. **Voraussetzungen des Lieferungsverzugs (4 Punkte):**\n" +
                  "   Welche drei Voraussetzungen müssen vorliegen, damit ein Lieferant in **Lieferverzug (§ 286 BGB)** gerät?\n\n" +
                  "2. **Entbehrlichkeit der Mahnung (4 Punkte):**\n" +
                  "   In welchen zwei Fällen ist eine Mahnung zur Inverzugsetzung **entbehrlich**?\n\n" +
                  "3. **Fixkauf / Relatives Fixgeschäft (6 Punkte):**\n" +
                  "   Für eine IT-Messe am 15.10. bestellt die Firma Präsentations-Displays mit dem ausdrücklichen Zusatz: *'Lieferung fix am 14.10. bis 12:00 Uhr zum Messeaufbau'*. Die Displays treffen am 14.10. nicht ein.\n" +
                  "   - Welche besonderen Rechte hat der Besteller sofort am 15.10., ohne dem Lieferanten eine Nachfrist setzen zu müssen? Begründen Sie.",
        correctAnswer: "1. Voraussetzungen des Lieferverzugs (4 Punkte):\n" +
                       "   1. **Fälligkeit der Lieferung:** Der Liefertermin muss erreicht und überschritten sein.\n" +
                       "   2. **Mahnung des Gläubigers:** Grundsätzlich muss der Käufer nach Fälligkeit mahnen (es sei denn, die Mahnung ist gesetzlich entbehrlich).\n" +
                       "   3. **Nichtleistung trotz Möglichkeit:** Die Ware wurde noch nicht geliefert.\n" +
                       "   4. **Verschulden des Schuldners:** Der Lieferant hat die Verzögerung zu vertreten (Vorsatz oder Fahrlässigkeit, § 276 BGB; bei Gattungsschulden haftet er für Beschaffungsrisiko).\n\n" +
                       "2. Entbehrlichkeit der Mahnung (§ 286 Abs. 2 BGB) (4 Punkte):\n" +
                       "   1. Wenn für die Leistung eine Zeit nach dem **Kalender bestimmt** ist (z. B. 'Lieferung am 06. November').\n" +
                       "   2. Wenn der Schuldner die Leistung ernsthaft und endgültig verweigert.\n\n" +
                       "3. Rechte beim Fixkauf / Fixgeschäft (6 Punkte):\n" +
                       "   - Da der Leistungszeitpunkt für den Besteller essenziell war (Messeauftritt) und dies vertraglich vereinbart wurde, liegt ein **relatives Fixgeschäft (§ 323 Abs. 2 Nr. 2 BGB)** vor.\n" +
                       "   - **Rechte des Bestellers ohne Nachfristsetzung:**\n" +
                       "     1. **Sofortiger Rücktritt vom Vertrag (§ 323 Abs. 2 Nr. 2 BGB)**: Der Besteller muss keine Nachfrist gewähren, da die Lieferung nach der Messe für ihn sinnlos ist.\n" +
                       "     2. **Schadensersatz statt der Leistung (§ 280, 281 BGB)**: Ersatz von Mehrkosten (z. B. Kosten für teure Notfall-Mietgeräte vom Messe-Service vor Ort).\n" +
                       "     3. **Deckungskauf:** Der Besteller kann sich die Displays anderweitig beschaffen und die Preisdifferenz als Verzugsschaden geltend machen.",
        explanation: "Lieferungsverzug, Fixgeschäfte und Schadensersatz bei Leistungsstörungen sind IHK-Standardthemen.",
        points: 14
    },
    {
        id: 234,
        theme: "lf1",
        isBawueFocus: true,
        type: "multiple-choice",
        question: "Welche Aussage zur Einordnung von Unternehmensprozessen ist RICHTIG?",
        options: [
            "Die Gehaltsabrechnung der Mitarbeiter ist ein Kernprozess, weil sie monatlich zwingend durchgeführt werden muss.",
            "Die Softwareentwicklung für einen externen Kunden ist ein Kernprozess, da sie unmittelbar Wertschöpfung erzeugt.",
            "Supportprozesse haben immer direkten Kontakt zum externen Endkunden.",
            "Führungsprozesse dürfen ausschließlich von externen Unternehmensberatern durchgeführt werden."
        ],
        correctAnswer: 1,
        explanation: "Kernprozesse (primäre Prozesse) zeichnen sich dadurch aus, dass sie direkten Kundennutzen und Wertschöpfung für das Unternehmen generieren. Die Softwareentwicklung für Kunden ist ein klassischer Kernprozess."
    },
    {
        id: 235,
        theme: "lf1",
        isBawueFocus: true,
        type: "multiple-choice",
        question: "Ein 17-jähriger Auszubildender bestellt online ein Notebook auf Ratenzahlung (12 Monatsraten à 80 €). Die Eltern wissen nichts davon. Wie ist der Kaufvertrag rechtlich einzuordnen?",
        options: [
            "Voll wirksam nach § 110 BGB (Taschengeldparagraph), da der Auszubildende eigenes Einkommen hat.",
            "Schwebend unwirksam nach § 108 BGB, da Ratenkredite nicht unter den Taschengeldparagraphen fallen.",
            "Von Anfang an nichtig nach § 105 BGB, da Minderjährige keine Online-Käufe tätigen dürfen.",
            "Voll wirksam, da Jugendliche ab 16 Jahren voll geschäftsfähig sind."
        ],
        correctAnswer: 1,
        explanation: "Der Taschengeldparagraph (§ 110 BGB) greift nur, wenn die Leistung mit den überlassenen Mitteln VOLLSTÄNDIG bewirkt (bar bezahlt) wird. Raten- und Kreditverträge sind schwebend unwirksam, bis die gesetzlichen Vertreter zustimmen."
    },
    {
        id: 236,
        theme: "lf1",
        isBawueFocus: true,
        type: "multiple-choice",
        question: "Die IT-GmbH bestellt bei einem Händler 10 Monitore (B2B). Bei der Anlieferung am Montag wird die Ware unbesehen ins Lager gestellt. Nach 3 Wochen stellt sich heraus, dass 3 Monitore Glasbruch haben. Welche Rechtsfolge tritt nach § 377 HGB ein?",
        options: [
            "Der Händler muss die Monitore umtauschen, da die gesetzliche Gewährleistungsfrist 2 Jahre beträgt.",
            "Die Ware gilt als genehmigt, da die IT-GmbH ihrer unverzüglichen Untersuchungs- und Rügepflicht nicht nachgekommen ist.",
            "Die IT-GmbH kann sofort vom Kaufvertrag zurücktreten.",
            "Der Händler muss Schadensersatz in Höhe des doppelten Kaufpreises zahlen."
        ],
        correctAnswer: 1,
        explanation: "Beim beiderseitigen Handelskauf (B2B) greift die Rügepflicht nach § 377 HGB. Offene Mängel müssen unverzüglich (binnen weniger Tage) gerügt werden. Nach 3 Wochen gilt die Ware als genehmigt und Gewährleistungsansprüche erlöschen."
    },
    {
        id: 237,
        theme: "lf1",
        isBawueFocus: true,
        type: "true-false",
        question: "Wahr oder Falsch: Bei einem IT-Dienstvertrag (§ 611 BGB) schuldet der Auftragnehmer das reine fachgerechte Bemühen (z. B. IT-Beratung), während bei einem Werkvertrag (§ 631 BGB) ein konkreter, mangelfreier Erfolg (z. B. funktionierende Individualsoftware) geschuldet wird.",
        options: [
            "Wahr (Richtig)",
            "Falsch"
        ],
        "correctAnswer": 0,
        explanation: "Richtig! Beim Dienstvertrag ist die ordnungsgemäße Tätigkeit geschuldet (ohne Erfolgsgarantie), beim Werkvertrag ist die mangelfreie Erstellung des versprochenen Werkes (Erfolg) geschuldet."
    },
    {
        id: 238,
        theme: "lf1",
        isBawueFocus: true,
        type: "true-false",
        question: "Wahr oder Falsch: Die gesetzliche Beweislastumkehr zugunsten des Verbrauchers (§ 477 BGB beim Verbrauchsgüterkauf) beträgt in Deutschland seit 2022 genau 12 Monate.",
        options: [
            "Wahr (Richtig)",
            "Falsch (Es sind weiterhin nur 6 Monate)"
        ],
        "correctAnswer": 0,
        explanation: "Richtig! Mit der Schuldrechtsreform 2022 wurde die Beweislastumkehr von 6 Monaten auf 12 Monate verdoppelt."
    },
    {
        "id": 239,
        "theme": "diagrams",
        "topic": "UML Use-Case-Diagramm",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Use-Case",
        "type": "multiple-choice",
        "question": "Welche Aussagen zu den Basiselementen eines UML-Use-Case-Diagramms (Anwendungsfalldiagramm) treffen nach IHK-Standard zu?",
        "options": [
                "Akteure stehen außerhalb der Systemgrenze, Anwendungsfälle (Ellipsen) liegen innerhalb des Systems, und Akteure werden mit durchgezogenen Linien (Assoziationen) mit Use-Cases verbunden.",
                "Akteure müssen zwingend innerhalb der Systemgrenze liegen und dürfen nur über gestrichelte Pfeile kommunizieren.",
                "Use-Cases werden als Rechtecke dargestellt und Akteure als Rauten.",
                "Zwischen zwei Akteuren darf es niemals eine Generalisierungsbeziehung geben."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getUseCaseDiagramSvg("Online-Shop Bestellsystem"),
        "explanation": "Im UML-Use-Case-Diagramm visualisiert die Systemgrenze das zu entwickelnde System. Akteure (Personen, Nachbarsysteme, Rollen) stehen außerhalb und interagieren über Assoziationen (durchgezogene Linien) mit den Use-Cases (Ellipsen) im Inneren."
},
    {
        "id": 240,
        "theme": "diagrams",
        "topic": "UML Use-Case <<include>>",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Use-Case",
        "type": "multiple-choice",
        "question": "Ein Entwickler modelliert einen Checkout-Prozess für einen Webshop: Bei jedem Aufruf von **'Bestellung abschließen'** muss zwingend der Use-Case **'Lagerbestand prüfen'** ausgeführt werden. Welcher Beziehungstyp und welche Pfeilrichtung ist korrekt?",
        "options": [
                "Gestrichelter Pfeil mit <<include>>, der vom Basis-Use-Case 'Bestellung abschließen' auf 'Lagerbestand prüfen' zeigt.",
                "Gestrichelter Pfeil mit <<extend>>, der von 'Lagerbestand prüfen' auf 'Bestellung abschließen' zeigt.",
                "Gestrichelter Pfeil mit <<include>>, der von 'Lagerbestand prüfen' auf 'Bestellung abschließen' zeigt.",
                "Durchgezogene Linie mit weißer Dreiecksspitze (Generalisierung) zu 'Lagerbestand prüfen'."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getUseCaseDiagramSvg("Online-Shop Bestellsystem"),
        "explanation": "Eine <<include>>-Beziehung bedeutet, dass ein Use-Case zwingend und immer einen anderen Use-Case einschließt. Der gestrichelte Pfeil zeigt dabei vom Basis-Use-Case ('Bestellung abschließen') HIN zum inkludierten Use-Case ('Lagerbestand prüfen')."
},
    {
        "id": 241,
        "theme": "diagrams",
        "topic": "UML Use-Case <<extend>>",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Use-Case",
        "type": "multiple-choice",
        "question": "Beim Use-Case **'Flug buchen'** kann der Kunde optional (nur unter einer Bedingung wie z. B. 'Kunde wählt Sitzplatzreservierung') den Use-Case **'Sitzplatz reservieren'** ausführen. Wie wird diese optionale Beziehung modelliert?",
        "options": [
                "Gestrichelter Pfeil mit <<extend>>, der vom erweiternden Use-Case 'Sitzplatz reservieren' auf den Basis-Use-Case 'Flug buchen' zeigt.",
                "Gestrichelter Pfeil mit <<extend>>, der von 'Flug buchen' auf 'Sitzplatz reservieren' zeigt.",
                "Gestrichelter Pfeil mit <<include>>, der von 'Flug buchen' auf 'Sitzplatz reservieren' zeigt.",
                "Durchgezogene Assoziationslinie ohne Stereotyp."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getUseCaseDiagramSvg("Online-Shop Bestellsystem"),
        "explanation": "Eine <<extend>>-Beziehung erweitert einen Basis-Use-Case nur optional unter bestimmten Bedingungen (Extension Point). Der gestrichelte Pfeil zeigt dabei vom erweiternden Use-Case ('Sitzplatz reservieren') AUF den Basis-Use-Case ('Flug buchen')."
},
    {
        "id": 242,
        "theme": "diagrams",
        "topic": "UML Klassendiagramm Struktur",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Klassendiagramm",
        "type": "multiple-choice",
        "question": "In welcher vertikalen Reihenfolge sind die drei Abteilungen (Fächer) einer Klasse im Standard-UML-Klassendiagramm angeordnet?",
        "options": [
                "1. Klassenname (oben), 2. Attribute / Variablen (Mitte), 3. Methoden / Operationen (unten)",
                "1. Methoden (oben), 2. Klassenname (Mitte), 3. Attribute (unten)",
                "1. Klassenname (oben), 2. Methoden (Mitte), 3. Attribute (unten)",
                "1. Schnittstellen (oben), 2. Klassenname (Mitte), 3. Parameter (unten)"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getClassDiagramSvg(),
        "explanation": "Ein Standard-UML-Klassenkasten ist dreigeteilt: 1. Fach (oben) = Klassenname (evtl. mit Stereotyp <<interface>>), 2. Fach (Mitte) = Attribute mit Datentyp und Sichtbarkeit, 3. Fach (unten) = Methoden/Operationen mit Parametern und Rückgabetyp."
},
    {
        "id": 243,
        "theme": "diagrams",
        "topic": "UML Sichtbarkeiten (Visibilities)",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Klassendiagramm",
        "type": "multiple-choice",
        "question": "Welche Bedeutung haben die Sichtbarkeitsmodifikatoren `+`, `-`, `#` und `~` vor Attributen und Methoden in einem UML-Klassendiagramm?",
        "options": [
                "+ = public (öffentlich), - = private (privat / gekapselt), # = protected (geschützt für Unterklassen), ~ = package (Paketsichtbarkeit)",
                "+ = private, - = public, # = package, ~ = protected",
                "+ = statisch, - = dynamisch, # = final, ~ = abstract",
                "+ = Pflichtfeld, - = optional, # = Primärschlüssel, ~ = Fremdschlüssel"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getClassDiagramSvg(),
        "explanation": "In UML steht '+' für public (jederzeit zugreifbar), '-' für private (Kapselung, nur innerhalb der eigenen Klasse), '#' für protected (in der Klasse und abgeleiteten Klassen sichtbar) und '~' für package (innerhalb desselben Pakets)."
},
    {
        "id": 244,
        "theme": "diagrams",
        "topic": "UML Aggregation vs. Komposition",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Klassendiagramm",
        "type": "multiple-choice",
        "question": "Was unterscheidet eine **Komposition** (ausgefüllte, schwarze Raute `◆`) von einer **Aggregation** (leere, weiße Raute `◇`) im UML-Klassendiagramm?",
        "options": [
                "Bei der Komposition besteht eine existenzielle Abhängigkeit (Teilobjekt stirbt mit dem Ganzen, z. B. Rechnung ◆─ 1..* Rechnungsposition). Bei der Aggregation kann das Teilobjekt unabhängig weiterbestehen (z. B. Abteilung ◇─ * Mitarbeiter).",
                "Bei der Aggregation wird das Teilobjekt beim Löschen des Ganzen automatisch gelöscht, bei der Komposition nicht.",
                "Die Komposition wird nur für Interfaces verwendet, die Aggregation für Datenbanktabellen.",
                "Es gibt keinen Unterschied, die Raute ist rein dekorativ."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getClassDiagramSvg(),
        "explanation": "Komposition (schwarze Raute) = 'Besteht-aus' mit starker Existenzabhängigkeit (löscht man die Rechnung, existieren die Posten nicht mehr). Aggregation (weiße Raute) = 'Hat-ein' mit schwacher Bindung (wird die Abteilung aufgelöst, bleibt der Mitarbeiter im Unternehmen)."
},
    {
        "id": 245,
        "theme": "diagrams",
        "topic": "UML Generalisierung / Vererbung",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Klassendiagramm",
        "type": "multiple-choice",
        "question": "Wie wird Vererbung (Generalisierung) zwischen der Kindklasse `Manager` und der Elternklasse `Mitarbeiter` in UML grafisch dargestellt?",
        "options": [
                "Eine durchgezogene Linie mit einer geschlossenen, nicht ausgefüllten (weißen) Dreiecksspitze, die auf die Elternklasse `Mitarbeiter` zeigt.",
                "Eine gestrichelte Linie mit offener Pfeilspitze, die auf `Manager` zeigt.",
                "Eine durchgezogene Linie mit einer schwarzen Raute an `Mitarbeiter`.",
                "Ein Kreis mit einem Kreuz (XOR-Symbol) zwischen beiden Klassen."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getClassDiagramSvg(),
        "explanation": "Generalisierung/Vererbung ('Ist-ein'-Beziehung) wird in UML durch eine durchgezogene Linie mit einem hohlen (weißen) Dreieck dargestellt, das stets auf die Oberklasse/Superklasse zeigt."
},
    {
        "id": 246,
        "theme": "diagrams",
        "topic": "ERD Chen-Notation",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "ERD",
        "type": "multiple-choice",
        "question": "Welche Formen repräsentieren Entitätstypen, Attribute und Beziehungstypen in der klassischen Chen-Notation eines Entity-Relationship-Diagramms (ERD)?",
        "options": [
                "Rechteck = Entitätstyp, Oval/Ellipse = Attribut (unterstrichen = Primärschlüssel), Raute = Beziehungstyp",
                "Oval = Entitätstyp, Rechteck = Attribut, Dreieck = Beziehungstyp",
                "Raute = Entitätstyp, Sechseck = Attribut, Kreis = Beziehungstyp",
                "Rechteck = Beziehungstyp, Raute = Attribut, Kreis = Primärschlüssel"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getErdDiagramSvg(),
        "explanation": "In der klassischen Chen-Notation stehen Rechtecke für Entitätstypen (Tabellen/Objekte wie KUNDE), Ellipsen für Attribute (Eigenschaften wie Name) und Rauten für Beziehungen (Verknüpfungen wie 'kauft'). Primärschlüsselattribute werden unterstrichen."
},
    {
        "id": 247,
        "theme": "diagrams",
        "topic": "ERD n:m Auflösung",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "ERD",
        "type": "multiple-choice",
        "question": "Im ERD besteht zwischen `PROJEKT` und `MITARBEITER` eine `n:m`-Beziehung. Wie wird diese Beziehung bei der Überführung in das relationale Datenbankschema (Tabellenentwurf) aufgelöst?",
        "options": [
                "Durch Erstellung einer dritten Verknüpfungstabelle (z. B. `Projekt_Mitarbeiter`), die die Primärschlüssel beider Tabellen als Fremdschlüssel (und meist als kombinierten Primärschlüssel) enthält.",
                "Durch Speichern aller Mitarbeiter-IDs als kommagetrennte Liste in der Projekt-Tabelle.",
                "Durch einfaches Eintragen des Fremdschlüssels `ProjektID` in der Tabelle `MITARBEITER`.",
                "Eine n:m-Beziehung kann in relationalen Datenbanken nicht realisiert werden."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getErdDiagramSvg(),
        "explanation": "Um die 1. Normalform nicht zu verletzen (keine atomaren Listen/Wiederholungsgruppen), werden n:m-Beziehungen im relationalen Modell immer über eine Zwischentabelle (Assoziationstabelle) aufgelöst, die zwei 1:n-Beziehungen abbildet."
},
    {
        "id": 248,
        "theme": "diagrams",
        "topic": "ERD 1:n Fremdschlüssel",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "ERD",
        "type": "multiple-choice",
        "question": "Gegeben ist die 1:n Beziehung: Ein `KUNDE` (1) kann mehrere `AUFTRAEGE` (n) aufgeben. Wo muss der Fremdschlüssel in den relationalen Tabellen platziert werden?",
        "options": [
                "In der Tabelle `AUFTRAG` (n-Seite) als Fremdschlüssel `FK_KundenNr`, der auf den Primärschlüssel der Tabelle `KUNDE` verweist.",
                "In der Tabelle `KUNDE` (1-Seite) als Fremdschlüssel `FK_AuftragsNr`.",
                "In beiden Tabellen gleichzeitig.",
                "In einer separaten 1:1 Kopplungstabelle."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getErdDiagramSvg(),
        "explanation": "Bei einer 1:n Beziehung wandert der Primärschlüssel der 1-Seite (z. B. KundenNr) IMMER als Fremdschlüssel in die Tabelle der n-Seite (Auftrag), da jeder Auftrag genau einem Kunden zugeordnet ist."
},
    {
        "id": 249,
        "theme": "diagrams",
        "topic": "ERD Krähenfuß-Notation",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "ERD",
        "type": "multiple-choice",
        "question": "Was bedeuten die Symbole `||` (zwei parallele Striche) und `o<` (Kreis mit Krähenfuß) an den Verbindungslinien in der Krähenfuß-Notation (Martin-Notation)?",
        "options": [
                "|| = genau eins (1..1, Pflichtbeziehung), o< = null bis viele (0..*, optionale Mehrfachbeziehung)",
                "|| = null oder eins, o< = mindestens zwei",
                "|| = unendlich, o< = exakt null",
                "|| = Primärschlüssel, o< = Fremdschlüssel"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getErdDiagramSvg(),
        "explanation": "In der Krähenfuß-Notation bezeichnet '||' 'Exactly One' (Minimal- und Maximalkardinalität 1). 'o<' (Kreis = optional 0, Krähenfuß = many *) bezeichnet 'Zero or More' (0..*)."
},
    {
        "id": 250,
        "theme": "diagrams",
        "topic": "UML Aktivitätsdiagramm Fork & Join",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Aktivitätsdiagramm",
        "type": "multiple-choice",
        "question": "Was ist der fundamentale Unterschied zwischen einer **Raute (Decision / Verzweigung)** und einem **dicken Balken (Fork / Join / Synchronisationsbalken)** im UML-Aktivitätsdiagramm?",
        "options": [
                "Die Raute wählt genau EINEN alternativen Pfad basierend auf Bedingungen ([ja]/[nein]), während der Fork-Balken den Ablauf in MEHRERE parallele, gleichzeitig ablaufende Pfade aufspaltet (und der Join-Balken wartet, bis alle fertig sind).",
                "Die Raute steht für parallele Threads, der Balken für IF-Bedingungen.",
                "Die Raute markiert das Programmende, der Balken den Programmstart.",
                "Der Balken dient ausschließlich zur Einbindung von Datenbankzugriffen."
        ],
        "correctAnswer": 0,
        "explanation": "Raute = Exklusive Verzweigung / Entscheidung (Decision/Merge). Synchronisationsbalken = Nebenläufigkeit / Parallelität (Fork = Aufspaltung in parallele Kontrollflüsse; Join = Synchronisation/Warten auf Beendigung aller parallelen Zweige)."
},
    {
        "id": 251,
        "theme": "diagrams",
        "topic": "EPK Grundregeln",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "EPK",
        "type": "multiple-choice",
        "question": "Welche elementare Konstruktionsregel gilt für eine gültige EPK (Ereignisgesteuerte Prozesskette)?",
        "options": [
                "Ereignisse (Sechsecke) und Funktionen (abgerundete Rechtecke) müssen sich immer streng abwechseln. Ein Ereignis kann selbst keine Entscheidung treffen (daher kein OR/XOR-Split direkt nach einem Ereignis!).",
                "Eine EPK darf nur aus Funktionen bestehen; Ereignisse sind optional.",
                "Zwei Funktionen dürfen direkt hintereinandergeschaltet werden, ohne ein Zwischenereignis.",
                "Nach einem Startereignis muss immer sofort ein XOR-Operator folgen."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getEpkDiagramSvg(),
        "explanation": "In einer EPK gilt das strenge Abwechselungsprinzip (Ereignis -> Funktion -> Ereignis). Da Ereignisse passive Zustände sind, können sie keine Entscheidungen treffen – Entscheidungen trifft nur eine Funktion, weshalb Verzweigungen (XOR/OR) nur nach Funktionen folgen dürfen!"
},
    {
        "id": 252,
        "theme": "diagrams",
        "topic": "EPK Konnektoren",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "EPK",
        "type": "multiple-choice",
        "question": "In einer EPK soll nach der Funktion **'Server-Hardware prüfen'** im Fehlerfall der Pfad 'Ersatzteil bestellen' und im fehlerfreien Fall der Pfad 'Betriebssystem installieren' beschritten werden. Welcher Konnektor muss verwendet werden?",
        "options": [
                "XOR-Konnektor (Exklusives Oder), da sich die beiden Pfade gegenseitig ausschließen und genau eine Bedingung zutrifft.",
                "UND-Konnektor, damit beide Pfade gleichzeitig ausgeführt werden.",
                "ODER-Konnektor, damit eventuell beide Pfade zutreffen.",
                "Kein Konnektor, sondern eine direkte Verbindungslinie."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getEpkDiagramSvg(),
        "explanation": "Wenn sich Pfade gegenseitig ausschließen (entweder fehlerfrei ODER defekt, niemals beides gleichzeitig), ist zwingend der XOR-Operator (Exklusives Oder) einzusetzen."
},
    {
        "id": 253,
        "theme": "diagrams",
        "topic": "BPMN 2.0 Gateways",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "BPMN 2.0",
        "type": "multiple-choice",
        "question": "Welches Symbol kennzeichnet in einem BPMN-2.0-Diagramm ein **Paralleles Gateway (AND-Split / AND-Join)**?",
        "options": [
                "Eine Raute mit einem Pluszeichen (+) im Inneren.",
                "Eine Raute mit einem X im Inneren (Exclusive Gateway).",
                "Eine Raute mit einem Kreis (O) im Inneren (Inclusive Gateway).",
                "Eine Raute mit einem Stern/Fünfeck im Inneren (Event-based Gateway)."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getBpmnDiagramSvg(),
        "explanation": "BPMN Gateways: '+' = Parallel (AND, alle Pfade laufen gleichzeitig), 'X' oder leer = Exklusiv (XOR, genau ein Pfad), 'O' = Inklusiv (OR, einer oder mehrere Pfade), Fünfeck = Ereignisbasiert."
},
    {
        "id": 254,
        "theme": "diagrams",
        "topic": "BPMN 2.0 Pools & Swimlanes",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "BPMN 2.0",
        "type": "multiple-choice",
        "question": "Wie wird der Nachrichtenaustausch zwischen zwei separaten **Pools** (z. B. 'Kunde' und 'IT-Dienstleister') in BPMN 2.0 korrekt dargestellt?",
        "options": [
                "Über Nachrichtenflüsse (Message Flow), dargestellt als gestrichelte Pfeillinie mit einem offenen Kreis am Start und einer offenen Pfeilspitze am Ende.",
                "Über normale Sequenzflüsse (durchgezogene Pfeillinie).",
                "Über Assoziationslinien mit schwarzen Rauten.",
                "Zwischen zwei Pools darf es in BPMN keine Verbindungen geben."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getBpmnDiagramSvg(),
        "explanation": "Pool-übergreifend dürfen NUR gestrichelte Nachrichtenflüsse (Message Flows) verwendet werden. Durchgezogene Sequenzflüsse (Sequence Flows) dürfen NIEMALS Poolgrenzen überschreiten!"
},
    {
        "id": 255,
        "theme": "diagrams",
        "topic": "Netzplantechnik DIN 69900",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "Netzplantechnik",
        "type": "multiple-choice",
        "question": "Gegeben ist der Standard-Vorgangsknoten nach DIN 69900. Welche Abkürzungen stehen für den 'Frühesten Anfangszeitpunkt', 'Spätesten Endzeitpunkt' und 'Gesamtpuffer'?",
        "options": [
                "FAZ (Frühester Anfang), SEZ (Spätestes Ende), GP (Gesamtpuffer)",
                "FEZ (Frühester Anfang), SAZ (Spätestes Ende), FP (Gesamtpuffer)",
                "FAZ = Fertigstellungsanfang, SEZ = Standardende, GP = Grenzperiode",
                "FAP = Frühester Arbeitsplan, SEP = Spätester Endplan, GP = Gruppenphase"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getNetzplanDiagramSvg(),
        "explanation": "Nach DIN 69900: FAZ = Frühester Anfangszeitpunkt, FEZ = Frühester Endzeitpunkt, SAZ = Spätester Anfangszeitpunkt, SEZ = Spätester Endzeitpunkt, GP = Gesamtpuffer (SAZ - FAZ), FP = Freier Puffer."
},
    {
        "id": 256,
        "theme": "diagrams",
        "topic": "Netzplantechnik Vorwärtsrechnung",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "Netzplantechnik",
        "type": "multiple-choice",
        "question": "Vorgang D (Dauer 5 Tage) hat zwei direkte Vorgänger: Vorgang B (FEZ = 4) und Vorgang C (FEZ = 7). Welcher **FAZ** und **FEZ** ergibt sich für Vorgang D bei der Vorwärtsrechnung?",
        "options": [
                "FAZ = 7 Tage, FEZ = 12 Tage (Bei der Vorwärtsrechnung gilt: FAZ = Maximum aller FEZ der Vorgänger; FEZ = FAZ + Dauer = 7 + 5 = 12).",
                "FAZ = 4 Tage, FEZ = 9 Tage",
                "FAZ = 11 Tage, FEZ = 16 Tage",
                "FAZ = 5,5 Tage, FEZ = 10,5 Tage"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getNetzplanDiagramSvg(),
        "explanation": "Ein Nachfolger kann erst beginnen, wenn ALLE Vorgänger abgeschlossen sind. Daher gilt bei mehreren Vorgängern: FAZ = max(FEZ_Vorgänger) = max(4, 7) = 7. FEZ = FAZ + Dauer = 7 + 5 = 12."
},
    {
        "id": 257,
        "theme": "diagrams",
        "topic": "Netzplantechnik Pufferberechnung",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "Netzplantechnik",
        "type": "multiple-choice",
        "question": "Für einen Vorgang X (Dauer D = 6 Tage) wurden berechnet: FAZ = 8, FEZ = 14, SAZ = 11, SEZ = 17. Wie groß ist der **Gesamtpuffer (GP)**?",
        "options": [
                "GP = 3 Tage (Berechnung: GP = SAZ - FAZ = 11 - 8 = 3 bzw. SEZ - FEZ = 17 - 14 = 3)",
                "GP = 6 Tage",
                "GP = 0 Tage",
                "GP = 9 Tage"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getNetzplanDiagramSvg(),
        "explanation": "Der Gesamtpuffer (GP) berechnet sich nach der Formel: GP = SAZ - FAZ = 11 - 8 = 3 Tage (oder äquivalent SEZ - FEZ = 17 - 14 = 3 Tage)."
},
    {
        "id": 258,
        "theme": "diagrams",
        "topic": "Netzplantechnik Kritischer Pfad",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "Netzplantechnik",
        "type": "multiple-choice",
        "question": "Welche Eigenschaft zeichnet den **Kritischen Pfad** eines Projekts aus und warum ist er für das Projektmanagement essenziell?",
        "options": [
                "Alle Vorgänge auf dem kritischen Pfad haben einen Gesamtpuffer von GP = 0. Jede zeitliche Verzögerung eines Vorgangs auf diesem Pfad führt direkt zu einer Verzögerung des Projektgesamttermins.",
                "Es ist der Pfad mit den geringsten Hardwarekosten.",
                "Es ist der Pfad, der die wenigsten Risiken enthält.",
                "Auf dem kritischen Pfad besitzen alle Vorgänge maximalen freien Puffer (FP > 5)."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getNetzplanDiagramSvg(),
        "explanation": "Der kritische Pfad bestimmt die minimale Gesamtdauer des Projekts. Bei allen Vorgängen auf diesem Pfad gilt GP = 0 und FP = 0. Jede Verzögerung verschiebt das Projektende um die gleiche Dauer nach hinten!"
},
    {
        "id": 259,
        "theme": "diagrams",
        "topic": "Netzplantechnik Freier Puffer",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "Netzplantechnik",
        "type": "multiple-choice",
        "question": "Wie unterscheidet sich der **Freie Puffer (FP)** vom **Gesamtpuffer (GP)**?",
        "options": [
                "Der Freie Puffer gibt an, wie weit ein Vorgang verschoben werden kann, OHNE den frühesten Anfang (FAZ) der nachfolgenden Vorgänge zu gefährden (FP = min(FAZ_Nachfolger) - FEZ_aktuell).",
                "Der Freie Puffer ist immer größer als der Gesamtpuffer.",
                "Der Freie Puffer gilt nur für das Gesamtprojekt am Ende.",
                "Der Freie Puffer ist identisch mit der Vorgangsdauer."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getNetzplanDiagramSvg(),
        "explanation": "Gesamtpuffer (GP): Verschiebung ohne Gefährdung des Projektendtermins. Freier Puffer (FP): Verschiebung ohne Gefährdung des frühestmöglichen Beginns (FAZ) der direkten Nachfolger."
},
    {
        "id": 260,
        "theme": "diagrams",
        "topic": "Struktogramm Schleifentypen",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "Struktogramm",
        "type": "multiple-choice",
        "question": "Wie unterscheidet sich eine kopfgesteuerte Schleife (WHILE) von einer fußgesteuerten Schleife (DO-WHILE / REPEAT-UNTIL) in einem DIN-66261-Struktogramm (Nassi-Shneiderman)?",
        "options": [
                "Bei der kopfgesteuerten Schleife steht der Bedingungsbalken oben (Prüfung vor dem ersten Durchlauf; kann 0-mal ausgeführt werden); bei der fußgesteuerten Schleife steht die Bedingung unten (wird mindestens 1-mal ausgeführt).",
                "Kopfgesteuerte Schleifen sind dreieckig, fußgesteuerte Schleifen kreisförmig.",
                "Kopfgesteuerte Schleifen werden immer mindestens einmal ausgeführt.",
                "Struktogramme unterstützen nur Zählschleifen (FOR)."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getStruktogrammSvg(),
        "explanation": "Kopfgesteuerte Schleife (Pre-Condition): Bedingung oben -> Ausführung nur, wenn Bedingung zu Beginn wahr ist (0 bis n Durchläufe). Fußgesteuerte Schleife (Post-Condition): Bedingung unten -> Rumpf wird mindestens 1-mal durchlaufen (1 bis n Durchläufe)."
},
    {
        "id": 261,
        "theme": "diagrams",
        "topic": "Entscheidungstabelle Vollständigkeit",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "Entscheidungstabelle",
        "type": "multiple-choice",
        "question": "Eine Entscheidungstabelle zur Freigabe von Firewall-Regeln besitzt 3 unabhängige Bedingungen, die jeweils entweder 'Ja' (J) oder 'Nein' (N) annehmen können. Wie viele Regeln (Spalten) muss die Tabelle für eine vollständige Prüfung enthalten?",
        "options": [
                "8 Regeln (Berechnung: 2^3 = 8 Spalten für alle logischen Wertekombinationen).",
                "3 Regeln (Entspricht der Zeilenzahl).",
                "6 Regeln (3 * 2).",
                "16 Regeln (2^4)."
        ],
        "correctAnswer": 0,
        "explanation": "Bei n unabhängigen binären Bedingungen beträgt die Anzahl der theoretisch möglichen Kombinationen (Regelspalten) 2^n. Bei 3 Bedingungen sind es 2^3 = 8 Regeln."
},
    {
        "id": 262,
        "theme": "diagrams",
        "topic": "UML Use-Case Wahr/Falsch",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Use-Case",
        "type": "true-false",
        "question": "Wahr oder Falsch: Im UML-Use-Case-Diagramm zeigt der gestrichelte Pfeil mit dem Stereotyp <<include>> immer vom aufrufenden Basis-Use-Case HIN zum eingeschlossenen Teil-Use-Case.",
        "options": [
                "Wahr (Richtig)",
                "Falsch (Er zeigt in die Gegenrichtung)"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getUseCaseDiagramSvg("Online-Shop Bestellsystem"),
        "explanation": "Richtig! Der Basis-Use-Case 'inkludiert' den Teil-Use-Case, daher zeigt der Pfeil vom Basis-Use-Case auf den inkludierten Use-Case."
},
    {
        "id": 263,
        "theme": "diagrams",
        "topic": "UML Klassendiagramm Wahr/Falsch",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Klassendiagramm",
        "type": "true-false",
        "question": "Wahr oder Falsch: Im UML-Klassendiagramm steht die gefüllte (schwarze) Raute bei einer Komposition immer an der Klasse, die das übergeordnete 'Ganze' (den Container/Besitzer) repräsentiert.",
        "options": [
                "Wahr (Richtig)",
                "Falsch (Sie steht am Teilobjekt)"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getClassDiagramSvg(),
        "explanation": "Richtig! Sowohl bei Aggregation (leere Raute) als auch bei Komposition (schwarze Raute) befindet sich die Raute stets an der übergeordneten Besitzerklasse ('Ganzes')."
},
    {
        "id": 264,
        "theme": "diagrams",
        "topic": "ERD Wahr/Falsch",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "ERD",
        "type": "true-false",
        "question": "Wahr oder Falsch: In der Chen-Notation eines ERDs wird ein mehrwertiges Attribut (z. B. ein Mitarbeiter besitzt mehrere Telefonnummern) durch zwei konzentrische Ellipsen (Doppel-Oval) gekennzeichnet.",
        "options": [
                "Wahr (Richtig)",
                "Falsch (Es wird als Sechseck dargestellt)"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getErdDiagramSvg(),
        "explanation": "Richtig! Ein Doppel-Oval stellt in der Chen-Notation ein mehrwertiges Attribut dar (im relationalen Datenbankschema muss dieses in eine eigene Tabelle überführt werden)."
},
    {
        "id": 265,
        "theme": "diagrams",
        "topic": "Netzplantechnik Wahr/Falsch",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "Netzplantechnik",
        "type": "true-false",
        "question": "Wahr oder Falsch: Vorgänge, die auf dem Kritischen Pfad eines Netzplans liegen, besitzen stets einen Gesamtpuffer (GP) von 0 Tagen.",
        "options": [
                "Wahr (Richtig)",
                "Falsch (Der Puffer ist größer als 0)"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getNetzplanDiagramSvg(),
        "explanation": "Richtig! Auf dem kritischen Pfad gilt ausnahmslos GP = 0 (und FP = 0), da es keinerlei zeitlichen Spielraum gibt."
},
    {
        "id": 266,
        "theme": "diagrams",
        "topic": "IHK Fallstudie Helpdesk ERD & Use-Case",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Use-Case / ERD",
        "type": "open-text",
        "question": "Prüfungsaufgabe Modellierung (BaWü-Fokus): Für ein mittelständisches Unternehmen soll ein internes IT-Ticketsystem modelliert werden.\n\nAnforderungen:\n1. Ein Mitarbeiter (Kunde) kann mehrere Tickets erfassen. Jedes Ticket gehört zu genau einem Mitarbeiter.\n2. Ein Support-Mitarbeiter kann mehrere Tickets bearbeiten. Ein Ticket kann vorübergehend keinem oder genau einem Support-Mitarbeiter zugewiesen sein.\n3. Zu einem Ticket können mehrere Statuskommentare erfasst werden.\n\nAufgabe:\na) Bestimme die ERD-Kardinalitäten zwischen MITARBEITER ─ TICKET und TICKET ─ SUPPORT.\nb) Wo müssen die Fremdschlüssel platziert werden?\nc) Skizziere die Struktur bei Bedarf auf dem Whiteboard.",
        "musterloesung": "a) ERD-Kardinalitäten:\n- MITARBEITER ─ (1:n) ─ TICKET (1 Mitarbeiter erstellt [0..*] Tickets; 1 Ticket gehört zu [1..1] Mitarbeiter).\n- SUPPORT ─ (1:n) ─ TICKET (1 Support-Mitarbeiter bearbeitet [0..*] Tickets; 1 Ticket ist [0..1] Support-Mitarbeitern zugewiesen).\n- TICKET ─ (1:n) ─ STATUSKOMMENTAR.\n\nb) Fremdschlüsselplatzierung:\n- In Tabelle TICKET: `FK_MitarbeiterNr` (NOT NULL) und `FK_SupportMitarbeiterNr` (NULLable, da Zuweisung optional ist).\n- In Tabelle STATUSKOMMENTAR: `FK_TicketNr` (NOT NULL).\n\nc) Tabellenschema:\nMITARBEITER(MitarbeiterNr (PK), Name, Abt)\nTICKET(TicketID (PK), Betreff, ErstellDatum, FK_MitarbeiterNr, FK_SupportMitarbeiterNr)\nSTATUSKOMMENTAR(KommentarID (PK), Text, Zeitstempel, FK_TicketNr)",
        "solutionDiagramSvg": VisualDiagrams.getUseCaseDiagramSvg("IT-Helpdesk Ticketverwaltung"),
        "explanation": "Bei 1:n Beziehungen wird der Primärschlüssel der 1-Seite immer als Fremdschlüssel in der n-Tabelle abgelegt. Da ein Ticket anfangs keinem Support-Mitarbeiter zugeordnet sein muss, ist dieser FK als NULL-fähig zu deklarieren."
},
    {
        "id": 267,
        "theme": "diagrams",
        "topic": "IHK Fallstudie Netzplan Rollout",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "Netzplantechnik",
        "type": "open-text",
        "code": "+---------+--------------------+-------+------------+\n| Vorgang | Bezeichnung        | Dauer | Vorgänger  |\n+---------+--------------------+-------+------------+\n| A       | Hardware beschaffen| 4 T.  | -          |\n| B       | Images erstellen   | 2 T.  | -          |\n| C       | Clients clonen     | 3 T.  | A, B       |\n| D       | Switch konfigurieren| 1 T. | -          |\n| E       | Rollout vor Ort    | 5 T.  | C, D       |\n+---------+--------------------+-------+------------+",
        "question": "Prüfungsaufgabe Netzplantechnik (BaWü-Fokus): Gegeben ist die obige Vorgangstabelle für einen Client-Rollout.\n\nAufgabe:\n1. Führe die Vorwärts- und Rückwärtsrechnung durch (Projektstart = Tag 0).\n2. Berechne FAZ, FEZ, SAZ, SEZ und Gesamtpuffer (GP) für alle 5 Vorgänge.\n3. Nenne den Kritischen Pfad und die Gesamtlaufzeit des Projekts.",
        "musterloesung": "1. & 2. Berechnung der Knotenwerte (nach DIN 69900):\n- Vorgang A (D=4): FAZ=0, FEZ=4 | SAZ=0, SEZ=4 | GP = 0, FP = 0 (Kritisch)\n- Vorgang B (D=2): FAZ=0, FEZ=2 | SAZ=2, SEZ=4 | GP = 2, FP = 2\n- Vorgang C (D=3, Vorl.: A,B -> FAZ=max(4,2)=4): FAZ=4, FEZ=7 | SAZ=4, SEZ=7 | GP = 0, FP = 0 (Kritisch)\n- Vorgang D (D=1): FAZ=0, FEZ=1 | SAZ=6, SEZ=7 | GP = 6, FP = 6\n- Vorgang E (D=5, Vorl.: C,D -> FAZ=max(7,1)=7): FAZ=7, FEZ=12 | SAZ=7, SEZ=12 | GP = 0, FP = 0 (Kritisch)\n\n3. Kritischer Pfad & Dauer:\n- Kritischer Pfad: A ➔ C ➔ E (alle mit GP = 0)\n- Gesamtlaufzeit des Projekts: 12 Tage.",
        "solutionDiagramSvg": VisualDiagrams.getNetzplanDiagramSvg(),
        "explanation": "Vorwärtsrechnung: FAZ = max(FEZ aller Vorgänger), FEZ = FAZ + Dauer. Rückwärtsrechnung: SEZ = min(SAZ aller Nachfolger), SAZ = SEZ - Dauer. GP = SAZ - FAZ. Kritischer Pfad umfasst alle Vorgänge mit GP=0."
},
    {
        "id": 268,
        "theme": "diagrams",
        "topic": "IHK Fallstudie EPK & BPMN Prozess",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "EPK / BPMN",
        "type": "open-text",
        "question": "Prüfungsaufgabe Prozessmodellierung (BaWü-Fokus): In einer Prüfung soll ein Beschaffungsprozess von Hardware dargestellt werden.\n\nAufgabe:\na) Nenne zwei typische Syntaxfehler, die in Prüfungen bei Ereignisgesteuerten Prozessketten (EPK) häufig auftreten.\nb) Erkläre, wie die Verantwortlichkeiten (z. B. 'Fachabteilung', 'Einkauf', 'IT-Leitung') in BPMN 2.0 übersichtlich dargestellt werden.\nc) Wann wird in BPMN 2.0 ein 'Paralleles Gateway' (+) im Gegensatz zu einem 'Exklusiven Gateway' (X) eingesetzt?",
        "musterloesung": "a) Häufige EPK-Syntaxfehler:\n1. Regelverstoß beim Wechsel: Zwei Funktionen oder zwei Ereignisse folgen direkt aufeinander ohne Zwischenelement.\n2. Verzweigung nach Ereignis: Ein OR- oder XOR-Operator folgt direkt auf ein Ereignis (Ereignisse sind passiv und können keine Entscheidungen treffen).\n\nb) Verantwortlichkeiten in BPMN 2.0:\n- Über Pools (für externe Organisationen) und Swimlanes (Bahnen innerhalb eines Pools für Abteilungen wie Einkauf, IT, Fachabteilung).\n\nc) Gateway-Einsatz in BPMN 2.0:\n- Paralleles Gateway (+): Wenn zwei oder mehr Teilaufgaben gleichzeitig und unabhängig voneinander ausgeführt werden müssen (z. B. 'Hardware bestellen' UND 'Lizenz anfordern').\n- Exklusives Gateway (X): Wenn genau eine Alternative basierend auf einer Bedingung gewählt wird (z. B. 'Betrag > 1.000 €: Genehmigung erforderlich' vs. 'Betrag <= 1.000 €: Direkt bestellen').",
        "solutionDiagramSvg": VisualDiagrams.getEpkDiagramSvg(),
        "explanation": "EPKs fordern strengen Wechsel und Entscheidungen nur durch Funktionen. BPMN 2.0 nutzt Swimlanes für organisatorische Zuordnungen und standardisierte Gateway-Symbole (+ für parallel, X für exklusiv)."
},
    {
        "id": 269,
        "theme": "diagrams",
        "topic": "IHK Fallstudie UML Klassendiagramm Asset",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Klassendiagramm",
        "type": "open-text",
        "code": "+---------------------------------------+\n|              Geraet                   |\n+---------------------------------------+\n| - inventarNr: String                  |\n| - anschaffungsDatum: Date             |\n| # standort: String                    |\n+---------------------------------------+\n| + getInventarNr(): String             |\n| + ermittleRestwert(): double          |\n+---------------------------------------+\n                  /\\\n                 /  \\ (Generalisierung)\n               +------+------+\n               |             |\n+-----------------------+ +-----------------------+\n|       Workstation     | |        Server         |\n+-----------------------+ +-----------------------+\n| - betriebssystem: Str | | - rackEinheit: int    |\n| - arbeitsspeicher: int| | - redundantesNetz: bool|\n+-----------------------+ +-----------------------+",
        "question": "Prüfungsaufgabe Klassendiagramm (BaWü-Fokus): Betrachte das oben dargestellte Klassendiagramm.\n\nAufgabe:\na) Welche OOP-Beziehung liegt zwischen `Geraet` und `Workstation`/`Server` vor und welche Pfeilspitze gehört dorthin?\nb) Welche Bedeutung hat das Zeichen `#` vor dem Attribut `standort` in der Klasse `Geraet`?\nc) Kann die Methode `getInventarNr()` von außen auf einem `Workstation`-Objekt aufgerufen werden? Begründe.",
        "musterloesung": "a) Beziehung: Generalisierung / Vererbung ('Ist-ein'-Beziehung). `Geraet` ist die Oberklasse (Superklasse), `Workstation` und `Server` sind abgeleitete Unterklassen. Das Symbol ist eine durchgezogene Linie mit einer geschlossenen, nicht ausgefüllten (weißen) Dreiecksspitze zur Oberklasse `Geraet`.\n\nb) Sichtbarkeit `#`: Bedeutet `protected`. Das Attribut `standort` ist in der Klasse `Geraet` sowie in allen abgeleiteten Klassen (`Workstation`, `Server`) direkt sichtbar und veränderbar, jedoch vor Zugriffen von außen gekapselt.\n\nc) Aufruf `getInventarNr()`: Ja, der Aufruf ist möglich. Durch die Vererbung erbt `Workstation` alle öffentlichen Methoden der Oberklasse, und das führende `+` kennzeichnet die Methode als `public`.",
        "solutionDiagramSvg": VisualDiagrams.getClassDiagramSvg(),
        "explanation": "Generalisierung vererbt Attribute und Methoden. Private (-) Attribute werden nicht direkt vererbt bzw. sind gekapselt, Protected (#) Attribute sind für Kindklassen zugänglich, Public (+) Methoden sind überall aufrufbar."
},
    {
        "id": 270,
        "theme": "diagrams",
        "topic": "UML Sequenzdiagramm",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Sequenzdiagramm",
        "type": "multiple-choice",
        "question": "Wie werden im UML-Sequenzdiagramm die Lebenslinie eines Objekts sowie synchrone und asynchrone Methodenaufrufe dargestellt?",
        "options": [
                "Lebenslinie = gestrichelte vertikale Linie mit Aktivierungsbalken; synchroner Aufruf = durchgezogene Linie mit gefüllter Dreieckspfeilspitze (Aufrufer wartet auf Antwort); asynchroner Aufruf = durchgezogene Linie mit offener Pfeilspitze (Aufrufer arbeitet sofort weiter).",
                "Lebenslinie = durchgezogene horizontale Linie; synchrone Aufrufe sind immer gestrichelt.",
                "Synchrone Aufrufe dürfen nur mit Rauten dargestellt werden.",
                "Sequenzdiagramme kennen keine Pfeile, sondern nur Kästchen."
        ],
        "correctAnswer": 0,
        "explanation": "Im Sequenzdiagramm verläuft die Zeit von oben nach unten entlang der vertikalen gestrichelten Lebenslinie. Ein gefüllter Pfeil stellt einen synchronen Aufruf (Blockierung bis Antwort eintrifft) dar; ein offener Pfeil einen asynchronen Aufruf (Non-Blocking)."
},
    {
        "id": 271,
        "theme": "diagrams",
        "topic": "UML Zustandsdiagramm (State Machine)",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "UML Zustandsdiagramm",
        "type": "multiple-choice",
        "question": "Ein Ticket wechselt von `Neu` zu `In Bearbeitung`, wenn ein Mitarbeiter die Aktion ausführt (`[Mitarbeiter zugewiesen] / sendeBestaetigung()`). Welche Bedeutung haben die Bestandteile einer Transition `Ereignis [Wächter] / Aktion` in UML?",
        "options": [
                "Ereignis (Trigger, löst Übergang aus) [Wächterbedingung / Guard, boolesche Bedingung] / Effekt / Aktion (wird beim Übergang ausgeführt).",
                "Startzustand [Endzustand] / Methodenname.",
                "Klassenname [Attribute] / Sichtbarkeit.",
                "Primärschlüssel [Fremdschlüssel] / Tabellenname."
        ],
        "correctAnswer": 0,
        "explanation": "Die Syntax einer Transition im Zustandsdiagramm lautet: Trigger [Guard] / Action. Der Trigger stößt den Übergang an, der Guard (in eckigen Klammern) muss wahr sein, und die Action (nach dem Schrägstrich) wird beim Wechsel ausgeführt."
},
    {
        "id": 272,
        "theme": "diagrams",
        "topic": "Programmablaufplan (PAP nach DIN 66001)",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "PAP",
        "type": "multiple-choice",
        "question": "Welche Symbole werden in einem Programmablaufplan (PAP nach DIN 66001) für Start/Stopp, Operationen und Verzweigungen genutzt?",
        "options": [
                "Oval / abgerundetes Rechteck = Grenzstelle (Start/Stopp), Rechteck = Operation / Anweisung, Raute = Verzweigung / Entscheidung (Bedingung).",
                "Rechteck = Start/Stopp, Kreis = Operation, Dreieck = Verzweigung.",
                "Kreuz = Start, Pfeil = Operation, Doppelstrich = Verzweigung.",
                "Sechseck = Start, Raute = Operation, Kreis = Verzweigung."
        ],
        "correctAnswer": 0,
        "explanation": "Nach DIN 66001: Abgerundetes Rechteck/Oval = Start/Ende (Grenzstelle), Rechteck = Operation/Verarbeitungsschritt, Raute = Verzweigung/Entscheidung mit ausgehenden Pfaden (z. B. Ja/Nein)."
},
    {
        "id": 273,
        "theme": "diagrams",
        "topic": "ERD (min, max)-Notation",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "ERD",
        "type": "multiple-choice",
        "question": "Im Unterschied zur Chen-Notation gibt die (min, max)-Notation (z. B. `(0, 1)`, `(1, n)`, `(0, *)`) an, wie oft eine Entität an der Beziehung mindestens und höchstens teilnehmen muss. Was bedeutet `(1, 1)`?",
        "options": [
                "Obligatorische Einzelteilnahme: Jede Entität muss an genau einer Beziehungsausprägung teilnehmen (weder 0 noch mehr als 1).",
                "Optionale Teilnahme: Die Entität kann teilnehmen, muss aber nicht.",
                "Die Entität hat genau 1 Primärschlüssel und 1 Fremdschlüssel.",
                "Es handelt sich um eine unbeschränkte Mehrfachbeziehung."
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getErdDiagramSvg(),
        "explanation": "Die (min, max)-Notation definiert min = Mindestanzahl der Teilnahmen (0 = optional, 1 = Pflicht) und max = Höchstanzahl (1 = maximal eins, * bzw. n = beliebig viele). (1, 1) bedeutet daher genau ein obligatorisches Vorkommen."
},
    {
        "id": 274,
        "theme": "diagrams",
        "topic": "BPMN 2.0 Wahr/Falsch",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "BPMN 2.0",
        "type": "true-false",
        "question": "Wahr oder Falsch: Ein Exklusives Gateway (XOR) in BPMN 2.0 spaltet den Kontrollfluss so auf, dass bei der Ausführung immer alle ausgehenden Pfade gleichzeitig durchlaufen werden müssen.",
        "options": [
                "Wahr",
                "Falsch (Richtig: Es wird genau 1 einziger Pfad basierend auf Bedingungen gewählt)"
        ],
        "correctAnswer": 1,
        "solutionDiagramSvg": VisualDiagrams.getBpmnDiagramSvg(),
        "explanation": "Falsch! Ein Exklusives Gateway (XOR) wählt genau einen Pfad aus. Das Parallele Gateway (+) spaltet in alle Pfade gleichzeitig auf."
},
    {
        "id": 275,
        "theme": "diagrams",
        "topic": "Struktogramm Fehleranalyse",
        "isDiagram": true,
        "isBawueFocus": true,
        "diagramType": "Struktogramm",
        "type": "open-text",
        "code": "+--------------------------------------------------------+\n| Eingabe: einkaufswert, istStammkunde                   |\n+--------------------------------------------------------+\n| rabatt = 0                                             |\n+--------------------------------------------------------+\n| einkaufswert >= 500 ?                                  |\n|                      JA /                              |\n| +--------------------------------+-------------------+ |\n| | rabatt = 10                    | einkaufswert >= 200? | |\n| |                                |      JA /         | |\n| |                                | +---------+-----+ | |\n| |                                | | rabatt=5| r=0 | | |\n| +--------------------------------+---------+-----+ | |\n+--------------------------------------------------------+\n| istStammkunde == true ?                                |\n|                      JA /                              |\n| +--------------------------------+-------------------+ |\n| | rabatt = rabatt + 3            | TUE NICHTS        | |\n| +--------------------------------+-------------------+ |\n+--------------------------------------------------------+\n| endpreis = einkaufswert * (1 - rabatt / 100)           |\n+--------------------------------------------------------+\n| Ausgabe: endpreis, rabatt                              |",
        "question": "Prüfungsaufgabe Struktogramm-Tracing (BaWü-Fokus): Analysiere das oben dargestellte Struktogramm nach Nassi-Shneiderman.\n\nAufgabe:\na) Berechne den Endpreis und den Rabattsatz für: `einkaufswert = 300 €`, `istStammkunde = true`.\nb) Berechne den Endpreis und den Rabattsatz für: `einkaufswert = 600 €`, `istStammkunde = false`.\nc) Welcher Rabatt ergibt sich für einen Neukunden (`istStammkunde = false`) bei einem Einkaufswert von `150 €`?",
        "musterloesung": "a) Fall 1 (300 €, Stammkunde):\n- Bedingung 1: 300 >= 500 ist FALSCH.\n- Bedingung 2: 300 >= 200 ist WAHR -> rabatt = 5%.\n- Bedingung 3: istStammkunde == true ist WAHR -> rabatt = 5 + 3 = 8%.\n- Endpreis: 300 € * (1 - 0,08) = 300 € * 0,92 = 276,00 € (Rabatt: 8%).\n\nb) Fall 2 (600 €, kein Stammkunde):\n- Bedingung 1: 600 >= 500 ist WAHR -> rabatt = 10%.\n- Bedingung 3: istStammkunde == true ist FALSCH -> rabatt bleibt 10%.\n- Endpreis: 600 € * (1 - 0,10) = 600 € * 0,90 = 540,00 € (Rabatt: 10%).\n\nc) Fall 3 (150 €, kein Stammkunde):\n- 150 < 500 und 150 < 200 -> rabatt = 0%.\n- Kein Stammkunde -> rabatt = 0%.\n- Endpreis = 150,00 €.",
        "solutionDiagramSvg": VisualDiagrams.getStruktogrammSvg(),
        "explanation": "Struktogramme werden von oben nach unten sequenziell abgearbeitet. Verzweigungen prüfen Bedingungen hierarchisch. Tracing-Tabellen helfen, alle Variablenzustände fehlerfrei zu berechnen."
},
    {
        "id": 276,
        "theme": "calculations",
        "topic": "Elektrotechnik: Ohmsches Gesetz & Leistung",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Server-Netzteil zieht an einer 230-V-Wechselstromsteckdose (U = 230 V) einen Strom von I = 2,5 A. Wie groß ist die aufgenommene Wirkleistung P bei einem Wirkleistungsfaktor cos φ = 1,0?",
        "options": [
                "P = 575 W (bzw. 0,575 kW)",
                "P = 92 W",
                "P = 232,5 W",
                "P = 1.150 W"
        ],
        "correctAnswer": 0,
        "explanation": "Formel: P = U * I * cos φ. Bei cos φ = 1,0 gilt: P = 230 V * 2,5 A = 575 W = 0,575 kW."
},
    {
        "id": 277,
        "theme": "calculations",
        "topic": "Energiekostenberechnung 24/7",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Switch im Serverraum hat eine konstante Leistungsaufnahme von 120 W im 24/7-Dauerbetrieb (365 Tage/Jahr). Der Strompreis beträgt 0,35 € pro kWh. Wie hoch sind die jährlichen Stromkosten?",
        "options": [
                "367,92 € pro Jahr",
                "1.051,20 € pro Jahr",
                "42,00 € pro Jahr",
                "126,14 € pro Jahr"
        ],
        "correctAnswer": 0,
        "explanation": "Rechnung:\n1. Jahres-Betriebsstunden: 24 h/Tag * 365 Tage = 8.760 h.\n2. Energieverbrauch in kWh: (120 W / 1.000) * 8.760 h = 0,12 kW * 8.760 h = 1.051,2 kWh.\n3. Stromkosten: 1.051,2 kWh * 0,35 €/kWh = 367,92 €."
},
    {
        "id": 278,
        "theme": "calculations",
        "topic": "Wirkleistung vs. Scheinleistung (USV)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Eine unterbrechungsfreie Stromversorgung (USV) hat eine Nenn-Scheinleistung von S = 1.500 VA und einen Leistungsfaktor von cos φ = 0,8. Welche maximale Wirkleistung P in Watt darf die angeschlossene IT-Hardware in Summe ziehen?",
        "options": [
                "P = 1.200 W (1,2 kW)",
                "P = 1.500 W",
                "P = 1.875 W",
                "P = 960 W"
        ],
        "correctAnswer": 0,
        "explanation": "Formel: Wirkleistung P = Scheinleistung S * cos φ = 1.500 VA * 0,8 = 1.200 W. Scheinleistung in VA darf nicht 1:1 mit Watt gleichgesetzt werden, wenn cos φ < 1 ist."
},
    {
        "id": 279,
        "theme": "calculations",
        "topic": "USV Überbrückungszeit / Autonomiezeit",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Eine USV-Batteriebank liefert 24 V und eine Kapazität von 50 Ah. Bei einem Netzausfall muss eine Last von 600 W versorgt werden. Der Wirkungsgrad der USV liegt bei η = 85 %. Wie lange (in Minuten) kann die Last versorgt werden?",
        "options": [
                "102 Minuten (1,7 Stunden)",
                "120 Minuten (2,0 Stunden)",
                "60 Minuten (1,0 Stunde)",
                "85 Minuten"
        ],
        "correctAnswer": 0,
        "explanation": "Rechnung:\n1. Gespeicherte Energie: 24 V * 50 Ah = 1.200 Wh.\n2. Nutzeffektive Energie: 1.200 Wh * 0,85 = 1.020 Wh.\n3. Autonomiezeit in Stunden: t = 1.020 Wh / 600 W = 1,7 h.\n4. In Minuten: 1,7 h * 60 min/h = 102 Minuten."
},
    {
        "id": 280,
        "theme": "calculations",
        "topic": "RZ Energieeffizienz: PUE-Faktor",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Rechenzentrum verbraucht pro Jahr insgesamt 180.000 kWh elektrische Gesamtenergie. Davon entfallen 120.000 kWh direkt auf die IT-Infrastruktur (Server, Storage, Netzwerk). Wie hoch ist der PUE-Wert (Power Usage Effectiveness)?",
        "options": [
                "PUE = 1,50",
                "PUE = 0,67",
                "PUE = 1,20",
                "PUE = 2,16"
        ],
        "correctAnswer": 0,
        "explanation": "Formel: PUE = Gesamtenergiebedarf des Rechenzentrums / Energiebedarf der reinen IT-Geräte = 180.000 kWh / 120.000 kWh = 1,50. (Ein PUE nahe 1,0 ist ideal)."
},
    {
        "id": 281,
        "theme": "calculations",
        "topic": "Speichereinheiten: SI vs. IEC",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Was ist der rechnerische Unterschied zwischen 1 MB (Megabyte nach SI-Standard) und 1 MiB (Mebibyte nach IEC-Standard)?",
        "options": [
                "1 MB = 1.000.000 Bytes (10^6), während 1 MiB = 1.048.576 Bytes (2^20) entspricht. 1 MiB ist also ca. 4,86 % größer.",
                "1 MB = 1.048.576 Bytes und 1 MiB = 1.000.000 Bytes.",
                "1 MB und 1 MiB sind exakt identisch.",
                "1 MB basiert auf Basis 2, 1 MiB auf Basis 16."
        ],
        "correctAnswer": 0,
        "explanation": "SI-Präfixe (KB, MB, GB, TB) nutzen Zehnerpotenzen (10^3, 10^6, 10^9). IEC-Präfixe (KiB, MiB, GiB, TiB) nutzen Zweierpotenzen (2^10 = 1024, 2^20 = 1.048.576, 2^30 = 1.073.741.824)."
},
    {
        "id": 282,
        "theme": "calculations",
        "topic": "Festplatten-Nettokapazität (TB vs. GiB)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Festplattenhersteller deklariert eine SSD mit 1 TB (1.000.000.000.000 Bytes). Welcher Wert in GiB (Binär-Gigabyte) wird dem Betriebssystem nach der Formatierung angezeigt?",
        "options": [
                "ca. 931,32 GiB (10^12 Bytes / 1024^3 Bytes)",
                "exakt 1.000,00 GiB",
                "ca. 976,56 GiB",
                "ca. 894,25 GiB"
        ],
        "correctAnswer": 0,
        "explanation": "Rechnung: 1.000.000.000.000 Bytes / (1024 * 1024 * 1024) Bytes/GiB = 1.000.000.000.000 / 1.073.741.824 ≈ 931,32 GiB."
},
    {
        "id": 283,
        "theme": "calculations",
        "topic": "Umrechnung TiB in GiB & MiB",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Wie viele GiB (Gibibyte) und wie viele MiB (Mebibyte) entsprechen einem Storage-Pool von 4 TiB (Tebibyte)?",
        "options": [
                "4.096 GiB und 4.194.304 MiB",
                "4.000 GiB und 4.000.000 MiB",
                "2.048 GiB und 2.097.152 MiB",
                "8.192 GiB und 8.388.608 MiB"
        ],
        "correctAnswer": 0,
        "explanation": "Rechnung:\n4 TiB * 1.024 GiB/TiB = 4.096 GiB.\n4.096 GiB * 1.024 MiB/GiB = 4.194.304 MiB."
},
    {
        "id": 284,
        "theme": "calculations",
        "topic": "Downloadzeit / Übertragungsdauer",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein ISO-Image mit 4,5 GB Dateigröße (4.500 MB = 36.000 Mbit) soll über eine 100-Mbit/s-Internetleitung heruntergeladen werden. Wie lange dauert der Download rein rechnerisch bei voller Bandbreitenauslastung ohne Overhead?",
        "options": [
                "360 Sekunden (6 Minuten)",
                "45 Sekunden",
                "450 Sekunden (7,5 Minuten)",
                "288 Sekunden (4,8 Minuten)"
        ],
        "correctAnswer": 0,
        "explanation": "Rechnung:\n1. Datenmenge in Bit: 4,5 GB * 8 Gbit/GB = 36 Gbit = 36.000 Mbit.\n2. Dauer: 36.000 Mbit / 100 Mbit/s = 360 Sekunden = 6 Minuten."
},
    {
        "id": 285,
        "theme": "calculations",
        "topic": "Backup-Übertragungszeit mit Protokoll-Overhead",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Backup-Server überträgt 600 GB Daten über eine 1-Gbit/s-Ethernetverbindung (Netto-Übertragungsrate nach 15 % Protokoll-Overhead beträgt 850 Mbit/s bzw. 106,25 MB/s). Wie lange dauert die Datenübertragung?",
        "options": [
                "ca. 5.647 Sekunden (ca. 1 Stunde 34 Minuten)",
                "ca. 4.800 Sekunden (1 Stunde 20 Minuten)",
                "ca. 600 Sekunden (10 Minuten)",
                "ca. 2 Stunden 45 Minuten"
        ],
        "correctAnswer": 0,
        "explanation": "Rechnung:\n1. Effektive Übertragungsrate: 1.000 Mbit/s * 0,85 = 850 Mbit/s = 106,25 MB/s.\n2. Datenmenge in MB: 600 GB * 1.000 MB/GB = 600.000 MB.\n3. Zeit: 600.000 MB / 106,25 MB/s ≈ 5.647,06 Sekunden ≈ 94,12 Minuten ≈ 1 h 34 min."
},
    {
        "id": 286,
        "theme": "calculations",
        "topic": "Backup-Zeitfenster (Backup Window)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein nächtliches Backup-Fenster beträgt maximal 5 Stunden (18.000 Sekunden). Zu sichern sind 1,5 TB Daten. Das Backup-Ziel erreicht eine mittlere Schreibrate von 75 MB/s. Reicht das Zeitfenster aus?",
        "options": [
                "Nein, das Backup benötigt ca. 20.000 Sekunden (5,56 Stunden) und überschreitet das Zeitfenster um ca. 33 Minuten.",
                "Ja, das Backup benötigt exakt 4 Stunden.",
                "Ja, das Backup benötigt ca. 2,5 Stunden.",
                "Nein, das Backup benötigt mehr als 12 Stunden."
        ],
        "correctAnswer": 0,
        "explanation": "Rechnung:\n1. 1,5 TB = 1.500.000 MB.\n2. Übertragungszeit: 1.500.000 MB / 75 MB/s = 20.000 Sekunden = 5,556 Stunden = 5 Stunden 33 Minuten 20 Sekunden.\n3. Da 5,56 h > 5,00 h, reicht das Backup-Fenster nicht aus!"
},
    {
        "id": 287,
        "theme": "calculations",
        "topic": "Zahlensysteme: Dezimal nach Binär",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Wie lautet die Binärdarstellung (Dualzahl) der Dezimalzahl 213?",
        "options": [
                "11010101 (2)",
                "11100101 (2)",
                "10110101 (2)",
                "11011001 (2)"
        ],
        "correctAnswer": 0,
        "explanation": "Zerlegung nach Zweierpotenzen:\n213 = 128 + 64 + 16 + 4 + 1\n= (1 * 128) + (1 * 64) + (0 * 32) + (1 * 16) + (0 * 8) + (1 * 4) + (0 * 2) + (1 * 1)\n= 11010101 (2)."
},
    {
        "id": 288,
        "theme": "calculations",
        "topic": "Zahlensysteme: Binär nach Hexadezimal (Nibbles)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Wandle die 12-Bit-Binärzahl 110111110010 (2) in das Hexadezimalsystem um:",
        "options": [
                "DF2 (16)",
                "E72 (16)",
                "CF2 (16)",
                "DFA (16)"
        ],
        "correctAnswer": 0,
        "explanation": "Aufteilung in 4-Bit-Blöcke (Nibbles/Tetraden) von rechts nach links:\n- 0010 (2) = 2 (16)\n- 1111 (2) = 15 = F (16)\n- 1101 (2) = 13 = D (16)\nErgebnis: DF2 (16)."
},
    {
        "id": 289,
        "theme": "calculations",
        "topic": "Zahlensysteme: Hexadezimal nach Dezimal",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Welchem Dezimalwert entspricht der Hexadezimalwert 3A7 (16)?",
        "options": [
                "935",
                "871",
                "983",
                "1.024"
        ],
        "correctAnswer": 0,
        "explanation": "Rechnung nach 16er-Potenzen:\n3A7 (16) = (3 * 16^2) + (10 * 16^1) + (7 * 16^0)\n= (3 * 256) + (10 * 16) + (7 * 1)\n= 768 + 160 + 7 = 935."
},
    {
        "id": 290,
        "theme": "calculations",
        "topic": "Zahlensysteme: Oktal nach Binär & Dezimal",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Welche Binär- und Dezimalzahl entspricht der Oktalzahl 754 (8)?",
        "options": [
                "Binär: 111101100 (2) | Dezimal: 492",
                "Binär: 111101010 (2) | Dezimal: 486",
                "Binär: 110101100 (2) | Dezimal: 512",
                "Binär: 111111100 (2) | Dezimal: 508"
        ],
        "correctAnswer": 0,
        "explanation": "1. Binär über 3-Bit-Triaden:\n- 7 (8) = 111\n- 5 (8) = 101\n- 4 (8) = 100\n-> 111101100 (2).\n2. Dezimal über 8er-Potenzen: (7 * 64) + (5 * 8) + (4 * 1) = 448 + 40 + 4 = 492."
},
    {
        "id": 291,
        "theme": "calculations",
        "topic": "IPv4 Subnetting & Adressberechnung",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Administrator teilt das Netz 192.168.50.0 mit der Subnetzmaske /27 (255.255.255.224) auf. Wie viele nutzbare Host-IP-Adressen gibt es pro Subnetz und wie lautet die Broadcast-Adresse des 1. Subnetzes?",
        "options": [
                "30 nutzbare Hosts | Broadcast-Adresse: 192.168.50.31",
                "32 nutzbare Hosts | Broadcast-Adresse: 192.168.50.32",
                "62 nutzbare Hosts | Broadcast-Adresse: 192.168.50.63",
                "14 nutzbare Hosts | Broadcast-Adresse: 192.168.50.15"
        ],
        "correctAnswer": 0,
        "explanation": "Rechnung:\n1. Host-Bits: 32 - 27 = 5 Bits.\n2. Gesamte IP-Adressen: 2^5 = 32 Adressen (192.168.50.0 bis .31).\n3. Nutzbare Hosts: 2^5 - 2 = 30 (Netzadresse .0 und Broadcast .31 abgezogen).\n4. Broadcast-Adresse des 1. Subnetzes ist 192.168.50.31."
},
    {
        "id": 292,
        "theme": "calculations",
        "topic": "Handelskalkulation: Einkaufskalkulation (Bezugspreis)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein IT-Systemhaus kauft Hardware ein:\n- Listeneinkaufspreis (LEP): 2.000,00 €\n- Lieferantenrabatt: 15 %\n- Lieferantenskonto: 2 %\n- Bezugskosten (Fracht/Zoll): 50,00 €\n\nWie hoch ist der Bezugspreis (Einstandspreis)?",
        "options": [
                "1.716,00 €",
                "1.750,00 €",
                "1.666,00 €",
                "1.700,00 €"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "explanation": "Kalkulationsschema:\n  Listeneinkaufspreis: 2.000,00 €\n- Lieferantenrabatt (15 %): -300,00 €\n= Zieleinkaufspreis (ZEP): 1.700,00 €\n- Lieferantenskonto (2 % von 1.700 €): -34,00 €\n= Bareinkaufspreis (BEP): 1.666,00 €\n+ Bezugskosten: +50,00 €\n= Bezugspreis (Einstandspreis): 1.716,00 €."
},
    {
        "id": 293,
        "theme": "calculations",
        "topic": "Handelskalkulation: Selbstkostenpreis",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Der Einstandspreis für ein Netzwerk-Bundle beträgt 1.500,00 €. Das Systemhaus kalkuliert mit einem Handlungskostenzuschlagssatz (HKZ) von 40 %. Wie hoch sind die Selbstkosten?",
        "options": [
                "2.100,00 €",
                "1.900,00 €",
                "2.500,00 €",
                "1.850,00 €"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "explanation": "Formel: Selbstkosten = Bezugspreis + (Bezugspreis * HKZ / 100) = 1.500,00 € + 600,00 € = 2.100,00 € (bzw. 1.500 € * 1,40 = 2.100,00 €)."
},
    {
        "id": 294,
        "theme": "calculations",
        "topic": "Handelskalkulation: Differenzkalkulation (Gewinnzuschlag)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein IT-Dienstleister ermittelt für ein Softwarepaket Selbstkosten von 800,00 €. Der am Markt maximal durchsetzbare Nettoverkaufspreis (Barverkaufspreis BVP) beträgt 1.000,00 €. Wie hoch sind der absolute Gewinn und der kalkulierte Gewinnzuschlagssatz in Prozent?",
        "options": [
                "Gewinn: 200,00 € | Gewinnzuschlagssatz: 25 %",
                "Gewinn: 200,00 € | Gewinnzuschlagssatz: 20 %",
                "Gewinn: 160,00 € | Gewinnzuschlagssatz: 20 %",
                "Gewinn: 250,00 € | Gewinnzuschlagssatz: 31,25 %"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "explanation": "Rechnung:\n1. Absoluter Gewinn = Barverkaufspreis (1.000 €) - Selbstkosten (800 €) = 200,00 €.\n2. Gewinnzuschlagssatz = (Gewinn / Selbstkosten) * 100 = (200 € / 800 €) * 100 = 25,0 %."
},
    {
        "id": 295,
        "theme": "calculations",
        "topic": "Kreditarten: Annuitäten- vs. Ratendarlehen",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Wie unterscheidet sich der Verlauf der monatlichen Gesamtrate bei einem Annuitätendarlehen von dem bei einem Ratendarlehen (Abzahlungsdarlehen)?",
        "options": [
                "Beim Annuitätendarlehen bleibt die monatliche Gesamtrate konstant (Zinsanteil sinkt, Tilgungsanteil steigt). Beim Ratendarlehen bleibt die Tilgungsrate konstant, wodurch die Gesamtrate monatlich sinkt.",
                "Beim Annuitätendarlehen steigt die Gesamtrate monatlich an.",
                "Beim Ratendarlehen werden am Ende alle Zinsen auf einmal fällig.",
                "Es gibt keinen Unterschied, beide Darlehensformen haben identische monatliche Raten."
        ],
        "correctAnswer": 0,
        "explanation": "Annuitätendarlehen = Feste, gleichbleibende Rate (Annuität). Da die Restschuld sinkt, sinken die Zinsen und der Tilgungsanteil wächst. Ratendarlehen = Feste Tilgung + sinkende Zinsen = monatlich abnehmende Gesamtrate."
},
    {
        "id": 296,
        "theme": "calculations",
        "topic": "Zinsformel & Überbrückungskredit",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein IT-Unternehmen nimmt einen kurzfristigen Betriebsmittelkredit über 60.000,00 € für genau 90 Tage zu einem Zinssatz von 8 % p.a. auf (kaufmännische Zinsmethode 30/360 Tage). Wie hoch sind die anfallenden Kreditzinsen?",
        "options": [
                "1.200,00 €",
                "4.800,00 €",
                "1.600,00 €",
                "900,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Kaufmännische Zinsformel: Z = (K * p * t) / (100 * 360)\nZ = (60.000 * 8 * 90) / 36.000 = 43.200.000 / 36.000 = 1.200,00 €."
},
    {
        "id": 297,
        "theme": "calculations",
        "topic": "Skontoausnutzung vs. Kontokorrentkredit",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Eine Rechnung über 10.000,00 € bietet: 3 % Skonto bei Zahlung innerhalb von 10 Tagen oder 30 Tage netto. Das Unternehmen nimmt für 20 Tage einen Kontokorrentkredit zu 12 % p.a. auf, um Skonto zu ziehen. Wie hoch ist der Netto-Finanzierungsgewinn durch die Skontonutzung?",
        "options": [
                "235,33 € Reingewinn (Skontoersparnis 300,00 € abzüglich 64,67 € Kreditzinsen)",
                "300,00 €",
                "150,00 €",
                "Kein Gewinn, die Kreditaufnahme ist teurer als das Skonto"
        ],
        "correctAnswer": 0,
        "explanation": "Rechnung:\n1. Skontoabzug: 3 % von 10.000 € = 300,00 € Ersparnis.\n2. Zu finanzierender Überweisungsbetrag: 9.700,00 €.\n3. Kreditzinsen für 20 Tage (30 - 10 Tage): Z = (9.700 * 12 * 20) / (100 * 360) = 64,67 €.\n4. Reingewinn = 300,00 € - 64,67 € = 235,33 €."
},
    {
        "id": 298,
        "theme": "calculations",
        "topic": "Effektiver Jahreszins Lieferantenkredit",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Lieferant bietet: 2 % Skonto bei Zahlung innerhalb von 10 Tagen, 30 Tage netto. Welchem effektiven Jahreszinssatz (p_eff) entspricht dieser Lieferantenkredit bei Nichtausnutzung des Skontos?",
        "options": [
                "36,0 % p.a. (Berechnung: (2 % * 360) / (30 - 10))",
                "2,0 % p.a.",
                "24,0 % p.a.",
                "18,0 % p.a."
        ],
        "correctAnswer": 0,
        "explanation": "Formel für eff. Jahreszins: p_eff = (Skontosatz * 360) / (Zahlungsziel - Skontofrist) = (2 * 360) / (30 - 10) = 720 / 20 = 36,0 % p.a. Dies verdeutlicht, wie extrem teuer der Verzicht auf Skonto ist!"
},
    {
        "id": 299,
        "theme": "calculations",
        "topic": "Leasing vs. Kauf Wirtschaftlichkeitsvergleich",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Unternehmen benötigt neue Server für 3 Jahre:\n- Kauf: Anschaffung 24.000 €, Wartung 1.000 €/Jahr, geschätzter Restwert nach 3 Jahren: 3.000 €.\n- Leasing: 0 € Anzahlung, monatliche Rate 700 € (inkl. Wartung).\n\nWelche Option ist über die 3 Jahre wirtschaftlicher und um wie viel Euro?",
        "options": [
                "Kauf ist um 1.200,00 € günstiger (Kauf: 24.000 € Gesamtkosten vs. Leasing: 25.200 €).",
                "Leasing ist um 2.400,00 € günstiger.",
                "Beide Optionen sind auf den Cent exakt gleich teuer.",
                "Kauf ist um 4.200,00 € teurer."
        ],
        "correctAnswer": 0,
        "explanation": "Kostenvergleich:\n- Kauf: 24.000 € (Kauf) + 3.000 € (Wartung 3 Jahre) - 3.000 € (Restwerterlös) = 24.000,00 €.\n- Leasing: 36 Monate * 700 €/Monat = 25.200,00 €.\n- Differenz: 25.200 € - 24.000 € = 1.200,00 € Vorteil für den Kauf."
},
    {
        "id": 300,
        "theme": "calculations",
        "topic": "Statische Amortisationsrechnung",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Die Anschaffung eines energieeffizienten Server-Clusters kostet 36.000,00 €. Durch die Maßnahme werden jährlich 12.000,00 € an Strom- und Lizenzkosten eingespart. Nach welcher Amortisationszeit hat sich die Investition amortisiert?",
        "options": [
                "3,0 Jahre (36 Monate)",
                "2,5 Jahre (30 Monate)",
                "4,0 Jahre (48 Monate)",
                "1,5 Jahre (18 Monate)"
        ],
        "correctAnswer": 0,
        "explanation": "Formel (statische Amortisation): Amortisationszeit = Anschaffungskosten / jährliche Einsparung = 36.000,00 € / 12.000,00 €/Jahr = 3,0 Jahre (36 Monate)."
},
    {
        "id": 301,
        "theme": "calculations",
        "topic": "Return on Investment (ROI)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein IT-Systemhaus investiert 80.000,00 € in eine automatisierte Bereitstellungsplattform. Der durchschnittliche jährliche Nettogewinn durch diese Lösung beträgt 20.000,00 €. Wie hoch ist der Return on Investment (ROI)?",
        "options": [
                "25,0 %",
                "40,0 %",
                "20,0 %",
                "16,0 %"
        ],
        "correctAnswer": 0,
        "explanation": "Formel: ROI = (Gewinn / Kapitaleinsatz) * 100 = (20.000,00 € / 80.000,00 €) * 100 = 25,0 %."
},
    {
        "id": 302,
        "theme": "calculations",
        "topic": "Lineare Abschreibung (AfA)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Server wird für 9.000,00 € netto angeschafft. Die betriebsgewöhnliche Nutzungsdauer laut amtlicher AfA-Tabelle beträgt 3 Jahre. Wie hoch sind der jährliche Abschreibungsbetrag und der Restbuchwert am Ende des 2. Nutzungsjahres?",
        "options": [
                "Jährliche AfA: 3.000,00 € | Restbuchwert nach Jahr 2: 3.000,00 €",
                "Jährliche AfA: 4.500,00 € | Restbuchwert nach Jahr 2: 0,00 €",
                "Jährliche AfA: 3.000,00 € | Restbuchwert nach Jahr 2: 6.000,00 €",
                "Jährliche AfA: 2.000,00 € | Restbuchwert nach Jahr 2: 5.000,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Lineare AfA:\n1. Jährlicher Abschreibungsbetrag: 9.000 € / 3 Jahre = 3.000,00 €/Jahr.\n2. Abschreibung nach 2 Jahren: 2 * 3.000 € = 6.000,00 €.\n3. Restbuchwert Ende Jahr 2 = 9.000 € - 6.000 € = 3.000,00 €."
},
    {
        "id": 303,
        "theme": "calculations",
        "topic": "Wahr/Falsch: Skontoabzug",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "true-false",
        "question": "Wahr oder Falsch: Skonto wird in der Handelskalkulation immer auf den Zieleinkaufspreis (nach Abzug des Rabatts) berechnet und nicht auf den ursprünglichen Listeneinkaufspreis.",
        "options": [
                "Wahr (Richtig)",
                "Falsch (Skonto wird vom Bruttopreis oder Listeneinkaufspreis berechnet)"
        ],
        "correctAnswer": 0,
        "explanation": "Richtig! Der Skontobetrag errechnet sich stets aus dem Zieleinkaufspreis (LEP minus Rabatt)."
},
    {
        "id": 304,
        "theme": "calculations",
        "topic": "Wahr/Falsch: PUE-Wert",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "true-false",
        "question": "Wahr oder Falsch: Ein PUE-Wert von 1,1 kennzeichnet ein wesentlich energieeffizienteres Rechenzentrum als ein PUE-Wert von 2,0.",
        "options": [
                "Wahr (Richtig)",
                "Falsch (Ein höherer PUE-Wert bedeutet bessere Effizienz)"
        ],
        "correctAnswer": 0,
        "explanation": "Richtig! Der ideale PUE-Wert ist 1,0 (100 % der Energie fließen in IT-Hardware). Je näher an 1,0, desto weniger Energie wird für Kühlung und Nebenverluste verschwendet."
},
    {
        "id": 305,
        "theme": "calculations",
        "topic": "IHK Fallstudie Vollständige Handelskalkulation",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "open-text",
        "question": "Prüfungsaufgabe Handelskalkulation (BaWü-Fokus): Für die Beschaffung und den Weiterverkauf von 20 High-End-Workstations liegen folgende Daten vor:\n\n- Listeneinkaufspreis (LEP): 1.500,00 € pro Stück\n- Lieferantenrabatt: 20 %\n- Lieferantenskonto: 3 %\n- Bezugskosten: insgesamt 200,00 € (für alle 20 Stück zusammen)\n- Handlungskostenzuschlag (HKZ): 35 %\n- Gewinnzuschlag: 15 %\n- Kundenskonto: 2 % (im Hundert)\n- Kundenrabatt: 10 % (im Hundert)\n- Umsatzsteuer: 19 %\n\nAufgabe:\nBerechne pro Stück:\na) Den Bezugspreis (Einstandspreis)\nb) Die Selbstkosten\nc) Den Barverkaufspreis (BVP)\nd) Den Zielverkaufspreis (ZVP) und den Netto-Listenverkaufspreis (LVP netto)\ne) Den Brutto-Verkaufspreis inklusive 19 % USt.",
        "musterloesung": "Vollständige Vorwärtskalkulation (pro Stück):\n\n1. Einkaufskalkulation:\n  Listeneinkaufspreis (LEP): 1.500,00 €\n- Lieferantenrabatt (20 %): -300,00 €\n= Zieleinkaufspreis (ZEP): 1.200,00 €\n- Lieferantenskonto (3 % von 1.200 €): -36,00 €\n= Bareinkaufspreis (BEP): 1.164,00 €\n+ Bezugskosten (200 € / 20 Stück): +10,00 €\n= a) Bezugspreis (Einstandspreis): 1.174,00 €\n\n2. Selbstkosten:\n+ Handlungskosten (35 % von 1.174 €): +410,90 €\n= b) Selbstkosten: 1.584,90 €\n\n3. Verkaufskalkulation:\n+ Gewinnzuschlag (15 % von 1.584,90 €): +237,74 €\n= c) Barverkaufspreis (BVP): 1.822,64 €\n\n4. Im-Hundert-Kalkulation für Kundenskonto & Rabatt:\n+ Kundenskonto (2 % im Hundert -> BVP / 0,98): +37,20 €\n= d1) Zielverkaufspreis (ZVP): 1.859,84 €\n+ Kundenrabatt (10 % im Hundert -> ZVP / 0,90): +206,65 €\n= d2) Listenverkaufspreis netto (LVP): 2.066,49 €\n\n5. Endpreis:\n+ Umsatzsteuer (19 % von 2.066,49 €): +392,63 €\n= e) Listenverkaufspreis brutto: 2.459,12 € pro Stück.",
        "solutionDiagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "explanation": "Wichtig: Lieferantenrabatt und Skonto werden 'vom Hundert' abgezogen. Kundenskonto und Kundenrabatt in der Vorwärtskalkulation müssen 'im Hundert' aufgeschlagen werden (Division durch 0,98 bzw. 0,90), damit der Kunde nach seinem Abzug genau den BVP zahlt!"
},
    {
        "id": 306,
        "theme": "calculations",
        "topic": "IHK Fallstudie RZ-Stromkosten & Amortisation",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "open-text",
        "question": "Prüfungsaufgabe RZ-Stromkosten & Amortisation (BaWü-Fokus): Eine IT-Abteilung betreibt 10 ältere Server mit einer durchschnittlichen Leistungsaufnahme von jeweils 450 Watt im 24/7-Dauerbetrieb (8.760 h/Jahr).\n\nEs wird vorgeschlagen, diese durch 2 moderne Hochleistungsserver zu ersetzen, die jeweils 300 Watt verbrauchen.\n- Strompreis: 0,40 € pro kWh\n- Anschaffungskosten für die 2 neuen Server inkl. Migration: 18.000,00 €\n\nAufgabe:\na) Berechne die jährlichen Stromkosten der alten 10 Server.\nb) Berechne die jährlichen Stromkosten der neuen 2 Server.\nc) Berechne die jährliche Stromkostenersparnis in Euro.\nd) Ermittle die Amortisationszeit (in Jahren und Monaten).",
        "musterloesung": "a) Stromkosten alte Server (10 Stück à 450 W = 4.500 W = 4,5 kW):\n- Jahresenergie: 4,5 kW * 8.760 h = 39.420 kWh.\n- Stromkosten alt: 39.420 kWh * 0,40 €/kWh = 15.768,00 € pro Jahr.\n\nb) Stromkosten neue Server (2 Stück à 300 W = 600 W = 0,6 kW):\n- Jahresenergie: 0,6 kW * 8.760 h = 5.256 kWh.\n- Stromkosten neu: 5.256 kWh * 0,40 €/kWh = 2.102,40 € pro Jahr.\n\nc) Jährliche Ersparnis:\n- 15.768,00 € - 2.102,40 € = 13.665,60 € pro Jahr.\n\nd) Amortisationszeit:\n- Amortisationsdauer = 18.000,00 € / 13.665,60 €/Jahr ≈ 1,317 Jahre.\n- In Monaten: 1,317 * 12 Monate ≈ 15,8 Monate (ca. 1 Jahr und 4 Monate).",
        "explanation": "Formel: E = P * t. Stromkosten = E * Arbeitspreis. Amortisationszeit = Investition / jährliche Netto-Einsparung."
},
    {
        "id": 307,
        "theme": "calculations",
        "topic": "IHK Fallstudie Zahlensystem-Umrechnungen",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "open-text",
        "question": "Prüfungsaufgabe Zahlensysteme (BaWü-Fokus): Führe folgende Umrechnungen schrittweise durch:\n\na) Wandle die Dezimalzahl 179 in das Binär- (Dual-) und Hexadezimalsystem um.\nb) Wandle die Hexadezimalzahl 2E5 (16) in das Dezimalsystem um.\nc) Wandle die Binärzahl 10111011 (2) in das Oktalsystem um.",
        "musterloesung": "a) Dezimal 179 umwandeln:\n- Binär: 179 = 128 + 32 + 16 + 2 + 1 = 10110011 (2).\n- Hexadezimal: 1011 (2) = B (16), 0011 (2) = 3 (16) -> B3 (16). (Probe: 11 * 16 + 3 = 176 + 3 = 179).\n\nb) 2E5 (16) in Dezimal:\n- (2 * 16^2) + (14 * 16^1) + (5 * 16^0) = (2 * 256) + (14 * 16) + (5 * 1) = 512 + 224 + 5 = 741 (10).\n\nc) 10111011 (2) in Oktal:\n- Aufteilung in 3-Bit-Triaden von rechts: 010 | 111 | 011 (2)\n- 010 (2) = 2 (8)\n- 111 (2) = 7 (8)\n- 011 (2) = 3 (8)\n- Ergebnis: 273 (8). (Probe: 2 * 64 + 7 * 8 + 3 = 128 + 56 + 3 = 187).",
        "explanation": "Binär <-> Hexadezimal: 4-Bit-Gruppen (Tetraden). Binär <-> Oktal: 3-Bit-Gruppen (Triaden)."
},
    {
        "id": 308,
        "theme": "calculations",
        "topic": "IHK Fallstudie Datenübertragungszeit & Overhead",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "open-text",
        "question": "Prüfungsaufgabe Bandbreite & WAN-Replikation (BaWü-Fokus):\nEin Unternehmen möchte täglich ein VM-Replikat von 800 GiB über eine gemietete Standleitung mit 250 Mbit/s in ein Ausweich-Rechenzentrum übertragen.\n\nAufgabe:\na) Berechne die Datenmenge von 800 GiB in Gigabit (Gbit).\nb) Berechne die Übertragungszeit in Stunden und Minuten unter idealen Bedingungen (ohne Overhead).\nc) Die Replikationssoftware verursacht 12 % Protokoll- und Verschlüsselungs-Overhead. Berechne die tatsächliche Replikationsdauer.",
        "musterloesung": "a) Datenmenge in Gigabit:\n- 800 GiB * 1.024 MiB/GiB * 1.024 KiB/MiB * 1.024 Bytes/KiB = 858.993.459.200 Bytes.\n- In Bit: 858.993.459.200 * 8 = 6.871.947.673.600 Bits ≈ 6.871,95 Gbit (bzw. vereinfacht 800 GiB * 8 = 6.400 Gibibit = ca. 6.872 Gbit).\n\nb) Ideale Übertragungszeit (bei 250 Mbit/s = 0,25 Gbit/s):\n- t = 6.871,95 Gbit / 0,25 Gbit/s = 27.487,8 Sekunden.\n- In Stunden: 27.487,8 s / 3.600 s/h ≈ 7,635 Stunden = 7 Stunden 38 Minuten.\n\nc) Mit 12 % Overhead:\n- Datenmenge mit Overhead: 6.871,95 Gbit * 1,12 = 7.696,58 Gbit.\n- Zeit: 7.696,58 Gbit / 0,25 Gbit/s = 30.786,3 Sekunden.\n- In Stunden: 30.786,3 s / 3.600 s/h ≈ 8,552 Stunden = 8 Stunden 33 Minuten 7 Sekunden.",
        "explanation": "Achtung: Byte in Bit umrechnen (Faktor 8) und Einheiten (Mbit/s vs. Gbit) angleichen!"
},
    {
        "id": 309,
        "theme": "calculations",
        "topic": "Handelskalkulation: Zieleinkaufspreis (ZEP)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein IT-Systemhaus bestellt 10 Notebooks zum Listeneinkaufspreis (LEP) von jeweils 800,00 € (Gesamt: 8.000,00 €). Der Großhändler gewährt einen Mengenrabatt (Lieferantenrabatt) von 15 %. Wie hoch ist der Zieleinkaufspreis (ZEP) pro Stück und gesamt?",
        "options": [
                "680,00 € pro Stück (Gesamt: 6.800,00 €)",
                "720,00 € pro Stück (Gesamt: 7.200,00 €)",
                "650,00 € pro Stück (Gesamt: 6.500,00 €)",
                "700,00 € pro Stück (Gesamt: 7.000,00 €)"
        ],
        "correctAnswer": 0,
        "explanation": "Formel: Zieleinkaufspreis (ZEP) = Listeneinkaufspreis (LEP) - Lieferantenrabatt.\nRechnung pro Stück: 800,00 € - (800,00 € * 0,15) = 800,00 € - 120,00 € = 680,00 € (Gesamt: 6.800,00 €)."
},
    {
        "id": 310,
        "theme": "calculations",
        "topic": "Handelskalkulation: Bareinkaufspreis (BEP)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Der Zieleinkaufspreis (ZEP) für einen Switch beträgt 500,00 €. Der Lieferant gewährt bei Zahlung innerhalb von 10 Tagen 3 % Skonto (Lieferantenskonto). Wie hoch ist der Bareinkaufspreis (BEP)?",
        "options": [
                "485,00 € (Skontoabzug: 15,00 €)",
                "490,00 €",
                "475,00 €",
                "480,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Formel: Bareinkaufspreis (BEP) = Zieleinkaufspreis (ZEP) - Lieferantenskonto.\nRechnung: 500,00 € - (500,00 € * 0,03) = 500,00 € - 15,00 € = 485,00 €."
},
    {
        "id": 311,
        "theme": "calculations",
        "topic": "Handelskalkulation: Bezugspreis / Einstandspreis",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Der Bareinkaufspreis (BEP) einer Serverlieferung liegt bei 3.200,00 €. An Bezugskosten fallen an: 60,00 € Fracht/Spedition und 20,00 € Transportversicherung. Wie hoch ist der Bezugspreis (Einstandspreis)?",
        "options": [
                "3.280,00 €",
                "3.200,00 €",
                "3.120,00 €",
                "3.340,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Formel: Bezugspreis (Einstandspreis) = Bareinkaufspreis (BEP) + Bezugskosten.\nRechnung: 3.200,00 € + 60,00 € + 20,00 € = 3.280,00 €."
},
    {
        "id": 312,
        "theme": "calculations",
        "topic": "Handelskalkulation: Selbstkostenpreis",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Der Einstandspreis für einen Router beträgt 200,00 €. Das Unternehmen kalkuliert mit einem Handlungskostenzuschlagssatz (HKZ) von 30 % für Lager, Verwaltung und Vertrieb. Wie hoch sind die Selbstkosten?",
        "options": [
                "260,00 € (Handlungskosten: 60,00 €)",
                "230,00 €",
                "280,00 €",
                "300,00 €"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "explanation": "Formel: Selbstkosten = Bezugspreis + Handlungskosten.\nRechnung: 200,00 € + (200,00 € * 0,30) = 200,00 € + 60,00 € = 260,00 €."
},
    {
        "id": 313,
        "theme": "calculations",
        "topic": "Handelskalkulation: Barverkaufspreis (BVP)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Die Selbstkosten für ein IT-Servicepaket betragen 600,00 €. Das Unternehmen möchte einen Gewinnzuschlag von 20 % erzielen. Wie hoch ist der Barverkaufspreis (BVP)?",
        "options": [
                "720,00 € (Gewinn: 120,00 €)",
                "680,00 €",
                "750,00 €",
                "700,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Formel: Barverkaufspreis (BVP) = Selbstkosten + Gewinnzuschlag.\nRechnung: 600,00 € + (600,00 € * 0,20) = 600,00 € + 120,00 € = 720,00 €."
},
    {
        "id": 314,
        "theme": "calculations",
        "topic": "Handelskalkulation: Zielverkaufspreis (ZVP)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Barverkaufspreis (BVP) beträgt 980,00 €. Dem Kunden soll 2 % Skonto (Kundenskonto) eingeräumt werden. Wie hoch muss der Zielverkaufspreis (ZVP) sein, damit das Unternehmen nach Skontoabzug genau die 980,00 € erhält (Kalkulation 'im Hundert')?",
        "options": [
                "1.000,00 € (Berechnung: 980,00 € / 0,98)",
                "999,60 € (Berechnung: 980,00 € * 1,02)",
                "960,40 €",
                "1.020,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Achtung: In der Vorwärtskalkulation ist der ZVP die 100%-Basis für das Kundenskonto. Da der BVP dem Betrag nach Skontoabzug entspricht, gilt: BVP = 98 % des ZVP.\nFormel: ZVP = BVP / (1 - Skonto/100) = 980,00 € / 0,98 = 1.000,00 €.\n(Probe: 1.000,00 € - 2 % Skonto (20,00 €) = 980,00 €)."
},
    {
        "id": 315,
        "theme": "calculations",
        "topic": "Handelskalkulation: Listenverkaufspreis (LVP netto & brutto)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Der Zielverkaufspreis (ZVP) beträgt 900,00 €. Dem Kunden wird 10 % Kundenrabatt (im Hundert) gewährt. Wie hoch sind der Netto-Listenverkaufspreis (LVP) und der Brutto-Endpreis (inkl. 19 % USt)?",
        "options": [
                "LVP netto = 1.000,00 € | LVP brutto = 1.190,00 €",
                "LVP netto = 990,00 € | LVP brutto = 1.178,10 €",
                "LVP netto = 1.000,00 € | LVP brutto = 1.160,00 €",
                "LVP netto = 1.050,00 € | LVP brutto = 1.249,50 €"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "explanation": "Rechnung:\n1. LVP netto (im Hundert): ZVP / (1 - 0,10) = 900,00 € / 0,90 = 1.000,00 €.\n2. LVP brutto: 1.000,00 € * 1,19 = 1.190,00 €."
},
    {
        "id": 316,
        "theme": "calculations",
        "topic": "Handelskalkulation: Rückwärtskalkulation (Max. LEP)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein IT-Händler möchte ein Zubehörteil für 119,00 € brutto (100,00 € netto LVP) verkaufen. Er kalkuliert mit 10 % Kundenrabatt, 2 % Kundenskonto, 15 % Gewinn, 25 % HKZ, 5,00 € Bezugskosten, 2 % Lieferantenskonto und 20 % Lieferantenrabatt. Welcher maximale Listeneinkaufspreis (LEP) darf im Einkauf akzeptiert werden?",
        "options": [
                "ca. 71,98 € (durch schrittweise Rückrechnung von 100,00 € LVP zum LEP)",
                "ca. 50,00 €",
                "ca. 85,00 €",
                "ca. 92,00 €"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "explanation": "Rückwärtskalkulation:\n1. LVP netto = 100,00 € - 10 % Kundenrabatt (10,00 €) = ZVP 90,00 €.\n2. ZVP 90,00 € - 2 % Kundenskonto (1,80 €) = BVP 88,20 €.\n3. BVP 88,20 € / 1,15 (Gewinn) = Selbstkosten 76,70 €.\n4. Selbstkosten 76,70 € / 1,25 (HKZ) = Bezugspreis 61,36 €.\n5. Bezugspreis 61,36 € - 5,00 € Bezugskosten = BEP 56,36 €.\n6. BEP 56,36 € / 0,98 (Lieferantenskonto) = ZEP 57,51 €.\n7. ZEP 57,51 € / 0,80 (Lieferantenrabatt) = max. LEP ≈ 71,89 € bis 71,98 €."
},
    {
        "id": 317,
        "theme": "calculations",
        "topic": "Zinsrechnung: Kaufmännische Zinsformel (Tage)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Unternehmen leiht sich 36.000,00 € für 40 Tage bei einer Bank zu einem Zinssatz von 7,5 % p.a. (deutsche kaufmännische Zinsmethode: 360 Tage/Jahr). Wie hoch sind die anfallenden Kreditzinsen?",
        "options": [
                "300,00 €",
                "270,00 €",
                "360,00 €",
                "750,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Formel: Z = (K * p * t) / (100 * 360)\nZ = (36.000 * 7,5 * 40) / 36.000 = 10.800.000 / 36.000 = 300,00 €."
},
    {
        "id": 318,
        "theme": "calculations",
        "topic": "Zinsrechnung: Monatszinsen",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Für ein Projekt wird ein Darlehen von 120.000,00 € für 5 Monate zu 6 % p.a. aufgenommen. Wie hoch sind die Zinsen für diese 5 Monate?",
        "options": [
                "3.000,00 €",
                "7.200,00 €",
                "6.000,00 €",
                "2.500,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Formel für Monatszinsen: Z = (K * p * m) / (100 * 12)\nZ = (120.000 * 6 * 5) / 1.200 = 3.600.000 / 1.200 = 3.000,00 €."
},
    {
        "id": 319,
        "theme": "calculations",
        "topic": "Wahr/Falsch: Rabatt vs. Skonto",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "true-false",
        "question": "Wahr oder Falsch: Ein Rabatt wird meist für Mengenabnahme, Treue oder Aktionen direkt auf der Rechnung vom Listeneinkaufspreis abgezogen, während Skonto ein zeitlich befristeter Preisnachlass für vorzeitige Zahlung innerhalb einer Skontofrist ist.",
        "options": [
                "Wahr (Richtig)",
                "Falsch (Rabatt und Skonto sind rechtlich und kaufmännisch dasselbe)"
        ],
        "correctAnswer": 0,
        "explanation": "Richtig! Rabatt = Leistungsnachlass (Menge, Treue, Personal). Skonto = Zinsvergütung für vorzeitige Zahlung / Liquiditätsvorteil."
},
    {
        "id": 320,
        "theme": "calculations",
        "topic": "IHK Fallstudie Komplette Handelskalkulation Tabelle",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "open-text",
        "question": "Prüfungsaufgabe Handelskalkulation (BaWü-Fokus): Gegeben sind folgende Werte für 100 Server-Netzteile:\n\n- Listeneinkaufspreis (LEP): 120,00 € pro Stück\n- Lieferantenrabatt: 25 %\n- Lieferantenskonto: 2 %\n- Bezugskosten: 90,00 € (für alle 100 Stück zusammen)\n- Handlungskostenzuschlag (HKZ): 20 %\n- Gewinnzuschlag: 20 %\n- Kundenskonto: 3 % (im Hundert)\n- Kundenrabatt: 5 % (im Hundert)\n- Umsatzsteuer: 19 %\n\nAufgabe:\nBerechne pro Stück:\n1. Zieleinkaufspreis (ZEP)\n2. Bareinkaufspreis (BEP)\n3. Bezugspreis (Einstandspreis)\n4. Selbstkosten\n5. Barverkaufspreis (BVP)\n6. Zielverkaufspreis (ZVP)\n7. Listenverkaufspreis (LVP netto)\n8. Endpreis (LVP brutto)",
        "musterloesung": "Schrittweise Lösung (pro Stück):\n\n1. LEP: 120,00 €\n- Lieferantenrabatt (25 %): -30,00 €\n= 1. ZEP: 90,00 €\n\n- Lieferantenskonto (2 % von 90 €): -1,80 €\n= 2. BEP: 88,20 €\n\n+ Bezugskosten (90 € / 100): +0,90 €\n= 3. Bezugspreis (Einstandspreis): 89,10 €\n\n+ Handlungskosten (20 % von 89,10 €): +17,82 €\n= 4. Selbstkosten: 106,92 €\n\n+ Gewinnzuschlag (20 % von 106,92 €): +21,38 €\n= 5. Barverkaufspreis (BVP): 128,30 €\n\n+ Kundenskonto (3 % im Hundert -> 128,30 € / 0,97): +3,97 €\n= 6. Zielverkaufspreis (ZVP): 132,27 €\n\n+ Kundenrabatt (5 % im Hundert -> 132,27 € / 0,95): +6,96 €\n= 7. Listenverkaufspreis netto (LVP): 139,23 €\n\n+ 19 % USt (19 % von 139,23 €): +26,45 €\n= 8. Listenverkaufspreis brutto: 165,68 €.",
        "solutionDiagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "explanation": "Vorwärtskalkulationsschema schrittweise von oben nach unten anwenden."
},
    {
        "id": 321,
        "theme": "calculations",
        "topic": "Handelskalkulation: Kalkulationszuschlag",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein IT-Systemhaus ermittelt für einen Monitor einen Bezugs-/Einstandspreis von 179,00 € und einen Listenverkaufspreis (netto) von 350,00 €. Wie hoch ist der Kalkulationszuschlag in Prozent?",
        "options": [
                "95,53 % (Formel: [(LVP - Bezugspreis) * 100] / Bezugspreis)",
                "48,86 %",
                "51,14 %",
                "195,53 %"
        ],
        "correctAnswer": 0,
        "explanation": "Kalkulationszuschlag Formel:\nKalkulationszuschlag = [(Listenverkaufspreis - Bezugspreis) / Bezugspreis] * 100\nRechnung: [(350,00 € - 179,00 €) / 179,00 €] * 100 = (171,00 € / 179,00 €) * 100 = 95,53 %.\nDer Kalkulationszuschlag ist der prozentuale Aufschlag auf den Einstands-/Bezugspreis, um den Listenverkaufspreis zu berechnen."
},
    {
        "id": 322,
        "theme": "calculations",
        "topic": "Handelskalkulation: Handelsspanne",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Für denselben Monitor (Bezugspreis 179,00 €, Listenverkaufspreis netto 350,00 €) soll nun die Handelsspanne berechnet werden. Wie hoch ist die Handelsspanne in Prozent?",
        "options": [
                "48,86 % (Formel: [(LVP - Bezugspreis) * 100] / LVP)",
                "95,53 %",
                "51,14 %",
                "35,00 %"
        ],
        "correctAnswer": 0,
        "explanation": "Handelsspanne Formel:\nHandelsspanne = [(Listenverkaufspreis - Bezugspreis) / Listenverkaufspreis] * 100\nRechnung: [(350,00 € - 179,00 €) / 350,00 €] * 100 = (171,00 € / 350,00 €) * 100 = 48,86 %.\nAls Handelsspanne wird die Differenz zwischen Listenverkaufspreis (netto) und Einstandspreis bezeichnet, ausgedrückt in Prozent des Listenverkaufspreises (netto)."
},
    {
        "id": 323,
        "theme": "calculations",
        "topic": "Handelskalkulation: Kalkulationsfaktor",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Wie lautet der Kalkulationsfaktor für den Bezugspreis von 179,00 € und einen Listenverkaufspreis netto von 350,00 €, und wozu dient er?",
        "options": [
                "ca. 1,9553 (LVP / Bezugspreis) – Multiplikator zur direkten Ermittlung des LVP aus dem Bezugspreis",
                "ca. 0,5114 – Quotient aus Bezugspreis geteilt durch LVP",
                "ca. 0,9553 – Der Kalkulationsfaktor ist identisch mit dem Kalkulationszuschlag als Dezimalzahl",
                "ca. 2,4360 – Faktor aus Barverkaufspreis und Einstandspreis"
        ],
        "correctAnswer": 0,
        "explanation": "Formel: Kalkulationsfaktor = Listenverkaufspreis (netto) / Bezugspreis\nRechnung: 350,00 € / 179,00 € ≈ 1,9553.\nZweck: Mit dem Kalkulationsfaktor kann man bei gegebener Kostenstruktur durch einfache Multiplikation sofort den Netto-Listenverkaufspreis aus dem Bezugspreis errechnen: LVP = Bezugspreis * Kalkulationsfaktor."
},
    {
        "id": 324,
        "theme": "lf1",
        "topic": "Vertragsarten: Werklieferungsvertrag vs. Kauf- und Werkvertrag",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein IT-Dienstleister liefert einem Kunden Hardware (PCs, Monitore) und übernimmt zusätzlich den vollständigen Aufbau, die Verkabelung, die Betriebssystem- und Softwareinstallation sowie die schlüsselfertige Übergabe des PC-Arbeitsplatzes. Welche Vertragsart liegt vor?",
        "options": [
                "Werklieferungsvertrag (§ 650 BGB)",
                "Reiner Kaufvertrag (§ 433 BGB)",
                "Dienstvertrag (§ 611 BGB)",
                "Mietvertrag (§ 535 BGB)"
        ],
        "correctAnswer": 0,
        "explanation": "Es liegt ein Werklieferungsvertrag (§ 650 BGB) vor:\n- Lieferung der Hardware = Kaufvertragliches Element (Übereignung von Sachen).\n- Aufbau, Montage, Verkabelung und schlüsselfertige Installation = Werkvertragliches Element (Herbeiführung eines garantierten Erfolgs).\nFormel: Kaufvertrag + Werkvertrag = Werklieferungsvertrag."
},
    {
        "id": 325,
        "theme": "calculations",
        "topic": "Handelskalkulation: Vertreterprovision & Skonto im Hundert",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "In einer Handelskalkulation beträgt der Barverkaufspreis (BVP) 243,60 €. Dem Kunden werden 3 % Kundenskonto und dem Handelsvertreter 10 % Provision gewährt (zusammen 13 % im Hundert bezogen auf den Zielverkaufspreis). Wie hoch sind der Zielverkaufspreis (ZVP) und die Vertreterprovision?",
        "options": [
                "ZVP = 280,00 € und Vertreterprovision = 28,00 €",
                "ZVP = 275,27 € und Vertreterprovision = 24,36 €",
                "ZVP = 267,96 € und Vertreterprovision = 26,80 €",
                "ZVP = 290,00 € und Vertreterprovision = 29,00 €"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "explanation": "Rechnung 'im Hundert':\nZielverkaufspreis (ZVP) = 100 %\n- Kundenskonto: 3 %\n- Vertreterprovision: 10 %\n= Barverkaufspreis (BVP): 87 % (100 % - 13 %)\n\nZVP = BVP / 0,87 = 243,60 € / 0,87 = 280,00 €.\nKundenskonto (3 % von 280 €) = 8,40 €.\nVertreterprovision (10 % von 280 €) = 28,00 €.\nProbe: 280,00 € - 8,40 € - 28,00 € = 243,60 € (BVP)."
},
    {
        "id": 326,
        "theme": "lf1",
        "topic": "Wirtschaftlichkeit: Total Cost of Ownership (TCO)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Was versteht man unter dem Begriff 'Total Cost of Ownership' (TCO) bei IT-Investitionen und welche Kostenfaktoren gehören dazu?",
        "options": [
                "Die ganzheitliche Erfassung aller Kosten über den gesamten Lebenszyklus: Einmalige Anschaffungskosten plus laufende Betriebskosten (Energie, Wartung, Support, Schulung, Lizenzen, Entsorgung)",
                "Ausschließlich die reinen Anschaffungs- und Transportkosten der Hardware bei der Erstbestellung",
                "Der Listenverkaufspreis abzüglich Skonto und Rabatt",
                "Die reinen Personalkosten der IT-Abteilung pro Monat"
        ],
        "correctAnswer": 0,
        "explanation": "TCO (Total Cost of Ownership) = Gesamtkosten des Eigentums / Betriebs.\nEs berücksichtigt nicht nur den Kaufpreis, sondern alle direkten und indirekten Kosten über die Nutzungsdauer:\n- Anschaffung (Hardware, Software, Rollout)\n- Betriebskosten (Stromverbrauch, Kühlung im RZ, Internet)\n- Wartung & Serviceverträge (SLA, Patches, Ersatzteile)\n- Mitarbeiterschulungen & Benutzer-Support\n- Entsorgungskosten (WEEE, Datenträgervernichtung nach DIN 66399)."
},
    {
        "id": 327,
        "theme": "calculations",
        "topic": "Preisbildung: Marktgleichgewicht & Gleichgewichtspreis",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Auf einem Markt gilt folgende Preis-Mengen-Situation:\n- Nachfragefunktion: Bei 100 Stück = 70 €, bei 200 Stück = 60 €, bei 300 Stück = 50 €, bei 400 Stück = 40 €, bei 500 Stück = 30 €.\n- Angebotsfunktion: Bei 100 Stück = 10 €, bei 200 Stück = 20 €, bei 300 Stück = 30 €, bei 400 Stück = 40 €, bei 500 Stück = 50 €.\n\nWie hoch sind der Gleichgewichtspreis und die Gleichgewichtsmenge?",
        "options": [
                "Gleichgewichtspreis = 40,00 € bei einer Gleichgewichtsmenge von 400 Stück",
                "Gleichgewichtspreis = 50,00 € bei 300 Stück",
                "Gleichgewichtspreis = 30,00 € bei 500 Stück",
                "Gleichgewichtspreis = 70,00 € bei 100 Stück"
        ],
        "correctAnswer": 0,
        "solutionDiagramSvg": VisualDiagrams.getMarktgleichgewichtSvg(),
        "explanation": "Das Marktgleichgewicht ist der Schnittpunkt von Angebot und Nachfrage:\nBei einem Preis von 40,00 € stimmen die angebotene Menge (400 Stück) und die nachgefragte Menge (400 Stück) exakt überein."
},
    {
        "id": 328,
        "theme": "calculations",
        "topic": "Preisbildung: Marktumsatz beim Gleichgewichtspreis",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Gegeben ist das Marktgleichgewicht mit einem Gleichgewichtspreis von 40,00 € und einer Gleichgewichtsmenge von 400 Stück. Wie hoch ist der Gesamtumsatz am Markt beim Gleichgewichtspreis?",
        "options": [
                "16.000,00 € (Umsatz = Preis * Menge = 40 € * 400 Stück)",
                "8.000,00 €",
                "24.000,00 €",
                "4.000,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Formel für Marktumsatz:\nUmsatz = Gleichgewichtspreis * Gleichgewichtsmenge\nRechnung: 40,00 € * 400 Stück = 16.000,00 €."
},
    {
        "id": 329,
        "theme": "calculations",
        "topic": "Preisbildung: Nachfrageüberhang berechnen",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Bei einem festgesetzten Preis von 20,00 € bieten die Hersteller 200 Stück an, während die Kunden 600 Stück nachfragen. Welche Marktsituation liegt vor und wie groß ist die Differenz?",
        "options": [
                "Nachfrageüberhang von 400 Stück (Nachfrage 600 - Angebot 200 = 400 Stück)",
                "Angebotsüberhang von 400 Stück",
                "Marktgleichgewicht mit Überhang 0 Stück",
                "Nachfrageüberhang von 200 Stück"
        ],
        "correctAnswer": 0,
        "explanation": "Da der Preis (20 €) unter dem Gleichgewichtspreis (40 €) liegt, ist die Nachfrage (600 Stück) größer als das Angebot (200 Stück).\nEs liegt ein Nachfrageüberhang (Verkäufermarkt) in Höhe von 600 - 200 = 400 Stück vor."
},
    {
        "id": 330,
        "theme": "calculations",
        "topic": "Preisbildung: Angebotsüberhang berechnen",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Bei einem Preis von 60,00 € bieten die Hersteller 600 Stück an, während die Kunden nur 200 Stück kaufen wollen. Welche Marktsituation liegt vor?",
        "options": [
                "Angebotsüberhang von 400 Stück (Angebot 600 - Nachfrage 200 = 400 Stück) -> Käufermarkt",
                "Nachfrageüberhang von 400 Stück -> Verkäufermarkt",
                "Gleichgewichtspreis bei 60,00 €",
                "Angebotsüberhang von 200 Stück"
        ],
        "correctAnswer": 0,
        "explanation": "Da der Preis (60 €) über dem Gleichgewichtspreis (40 €) liegt, ist das Angebot (600 Stück) größer als die Nachfrage (200 Stück).\nEs liegt ein Angebotsüberhang von 600 - 200 = 400 Stück vor. Da die Kunden wählerisch sein können, spricht man von einem Käufermarkt."
},
    {
        "id": 331,
        "theme": "lf1",
        "topic": "Wahr/Falsch: Werklieferungsvertrag & TCO",
        "isBawueFocus": true,
        "type": "true-false",
        "question": "Wahr oder Falsch:\n1. Ein Werklieferungsvertrag (§ 650 BGB) liegt vor, wenn die Lieferung beweglicher Sachen mit montage- und werkvertraglichen Installationsleistungen kombiniert wird.\n2. Bei der TCO-Analyse werden die Anschaffungskosten sowie die gesamten Betriebs- und Entsorgungskosten über den Lebenszyklus berücksichtigt.",
        "options": [
                "Wahr (Beide Aussagen sind fachlich und rechtlich absolut zutreffend)",
                "Falsch (Ein Werklieferungsvertrag existiert im deutschen Recht nicht)"
        ],
        "correctAnswer": 0,
        "explanation": "Richtig! Der Werklieferungsvertrag kombiniert Ware und Werkerstellung, und TCO (Total Cost of Ownership) betrachtet ganzheitlich Lebenszykluskosten."
},
    {
        "id": 332,
        "theme": "calculations",
        "topic": "IHK Fallstudie: ConSystem GmbH Gesamtkalkulation & Kennzahlen",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "open-text",
        "question": "IHK-Prüfungsaufgabe (BaWü-Fokus): Bei der ConSystem GmbH wird für einen Kunden ein Arbeitsplatz-Bildschirm kalkuliert.\n\nGegebene Daten:\n- Listeneinkaufspreis: 200,00 €\n- Lieferantenrabatt: 10 %\n- Lieferantenskonto: 2 %\n- Bezugskosten: 2,60 €\n- Handlungskostenzuschlag: 25 %\n- Gewinnzuschlag: 8,87 %\n- Kundenskonto: 3 % (im Hundert)\n- Vertreterprovision: 10 % (im Hundert)\n- Kundenrabatt: 20 % (im Hundert)\n\nAufgaben:\n1. Führen Sie die Handelskalkulation schrittweise durch und ermitteln Sie:\n   a) Bezugspreis (Einstandspreis)\n   b) Selbstkosten\n   c) Barverkaufspreis (BVP)\n   d) Zielverkaufspreis (ZVP)\n   e) Listenverkaufspreis netto (LVP)\n2. Berechnen Sie den Kalkulationszuschlag in Prozent.\n3. Berechnen Sie die Handelsspanne in Prozent.\n4. Erläutern Sie, warum für den Auftrag (Lieferung + Montage/Installation) ein Werklieferungsvertrag abgeschlossen wird.",
        "musterloesung": "Musterlösung:\n\n1. Handelskalkulation:\n- Listeneinkaufspreis: 200,00 €\n- 10 % Lieferantenrabatt: -20,00 €\n= Zieleinkaufspreis: 180,00 €\n- 2 % Lieferantenskonto: -3,60 €\n= Bareinkaufspreis: 176,40 €\n+ Bezugskosten: +2,60 €\n= a) Bezugs-/Einstandspreis: 179,00 €\n\n+ 25 % Handlungskosten (25 % von 179,00 €): +44,75 €\n= b) Selbstkosten: 223,75 €\n\n+ 8,87 % Gewinnzuschlag (8,87 % von 223,75 €): +19,85 €\n= c) Barverkaufspreis (BVP): 243,60 €\n\n+ 3 % Kundenskonto & 10 % Provision (13 % im Hundert -> 243,60 € / 0,87):\n  - Kundenskonto: +8,40 €\n  - Vertreterprovision: +28,00 €\n= d) Zielverkaufspreis (ZVP): 280,00 €\n\n+ 20 % Kundenrabatt (20 % im Hundert -> 280,00 € / 0,80):\n  - Kundenrabatt: +70,00 €\n= e) Listenverkaufspreis netto (LVP): 350,00 €\n\n2. Kalkulationszuschlag:\nFormel: [(LVP - Bezugspreis) / Bezugspreis] * 100\nRechnung: [(350,00 € - 179,00 €) / 179,00 €] * 100 = (171,00 € / 179,00 €) * 100 = 95,53 %.\n\n3. Handelsspanne:\nFormel: [(LVP - Bezugspreis) / LVP] * 100\nRechnung: [(350,00 € - 179,00 €) / 350,00 €] * 100 = (171,00 € / 350,00 €) * 100 = 48,86 %.\n\n4. Vertragsart:\nEs wird ein Werklieferungsvertrag (§ 650 BGB) abgeschlossen. Die Lieferung der Hardware ist kaufvertraglich (§ 433 BGB), der Aufbau, die Verkabelung, Software-Installation und Übergabe ist werkvertraglich (§ 631 BGB), da ein betriebsbereiter Arbeitsplatz (Erfolg) geschuldet wird.",
        "solutionDiagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "explanation": "Vollständige Handelskalkulation mit Vorwärtskalkulation, Vertreterprovision, Kalkulationszuschlag, Handelsspanne und Vertragsarten."
},
    {
        "id": 333,
        "theme": "lf6",
        "topic": "Buchungssätze: Einkauf von Rohstoffen / Material auf Ziel",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Die Firma Winter Möbelbau kauft Rohstoffe (AWR) für 6.300,00 € netto zuzüglich 19 % Vorsteuer (1.197,00 €) auf Ziel (Rechnungsbetrag 7.497,00 €). Wie lautet der korrekte Buchungssatz?",
        "options": [
                "6000 AWR 6.300,00 € und 2600 VORST 1.197,00 € an 4400 VE 7.497,00 €",
                "4400 VE 7.497,00 € an 6000 AWR 6.300,00 € und 2600 VORST 1.197,00 €",
                "6000 AWR 7.497,00 € an 2800 BK 7.497,00 €",
                "6020 AWH 6.300,00 € an 4400 VE 6.300,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Einkauf auf Ziel (Rechnung):\n- Aufwandskonto im Soll: 6000 AWR (Aufwendungen für Rohstoffe) 6.300,00 €\n- Steuerkonto im Soll: 2600 VORST (Vorsteuer 19 %) 1.197,00 €\n- Passives Bestandskonto im Haben: an 4400 VE (Verbindlichkeiten aus LuL) 7.497,00 €."
},
    {
        "id": 334,
        "theme": "lf6",
        "topic": "Buchungssätze: Ausgleich einer Eingangsrechnung per Bank",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Eine offene Eingangsrechnung für Verbindlichkeiten gegenüber Lieferanten in Höhe von 10.281,60 € wird vollständig per Online-Banküberweisung beglichen. Wie lautet der Buchungssatz?",
        "options": [
                "4400 VE 10.281,60 € an 2800 BK 10.281,60 €",
                "2800 BK 10.281,60 € an 4400 VE 10.281,60 €",
                "4400 VE 10.281,60 € an 2400 FO 10.281,60 €",
                "6000 AWR 10.281,60 € an 2800 BK 10.281,60 €"
        ],
        "correctAnswer": 0,
        "explanation": "Ausgleich von Lieferantenverbindlichkeiten per Bank:\n- Das passive Bestandskonto Verbindlichkeiten (4400 VE) nimmt im Soll ab.\n- Das aktive Bestandskonto Bank (2800 BK) nimmt im Haben ab.\nBuchungssatz: 4400 VE an 2800 BK 10.281,60 €."
},
    {
        "id": 335,
        "theme": "lf6",
        "topic": "Buchungssätze: Verkauf von Sachanlagen mit Umsatzsteuer",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein gebrauchter Firmentransporter wird zum Netto-Restwert von 4.774,00 € zuzüglich 19 % Umsatzsteuer (907,06 €) verkauft. Der Gesamtbetrag von 5.681,06 € geht sofort per Banküberweisung/Lastschrift ein. Wie lautet der Buchungssatz?",
        "options": [
                "2800 BK 5.681,06 € an 0840 FP 4.774,00 € und 4800 UST 907,06 €",
                "0840 FP 4.774,00 € und 4800 UST 907,06 € an 2800 BK 5.681,06 €",
                "2800 BK 5.681,06 € an 5000 UEFE 5.681,06 €",
                "2400 FO 4.774,00 € an 0840 FP 4.774,00 €"
        ],
        "correctAnswer": 0,
        "explanation": "Verkauf von Anlagevermögen (Fuhrpark):\n- Bank (2800 BK) steigt im Soll um den Bruttobetrag (5.681,06 €).\n- Fuhrpark (0840 FP) sinkt im Haben um den Nettobetrag (4.774,00 €).\n- Umsatzsteuer (4800 UST) steigt im Haben um 907,06 €.\nBuchungssatz: 2800 BK 5.681,06 € an 0840 FP 4.774,00 € und 4800 UST 907,06 €."
},
    {
        "id": 336,
        "theme": "lf6",
        "topic": "Buchungssätze: Forderungsausgleich durch Kunden",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein Kunde überweist den Rechnungsbetrag für eine gelieferte Ware in Höhe von 9.793,70 € auf das Geschäftskonto der Firma. Wie lautet der Buchungssatz?",
        "options": [
                "2800 BK 9.793,70 € an 2400 FO 9.793,70 €",
                "2400 FO 9.793,70 € an 2800 BK 9.793,70 €",
                "2800 BK 9.793,70 € an 5000 UEFE 9.793,70 €",
                "4400 VE 9.793,70 € an 2800 BK 9.793,70 €"
        ],
        "correctAnswer": 0,
        "explanation": "Zahlungseingang eines Kunden:\n- Bankkonto (2800 BK) mehrt sich im Soll (+ 9.793,70 €).\n- Forderungen aus LuL (2400 FO) mindern sich im Haben (- 9.793,70 €).\nBuchungssatz: 2800 BK an 2400 FO 9.793,70 € (Aktivtausch)."
},
    {
        "id": 337,
        "theme": "calculations",
        "topic": "Mathematik: Lineare Gleichung mit Klammern lösen",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Löse die folgende lineare Gleichung nach x auf:\n(40x - 4) / 4 = (40 - 80x) * 2\n\nWelcher Wert für x ist korrekt?",
        "options": [
                "x = 0,48",
                "x = 1,50",
                "x = 40,00",
                "x = 17,00"
        ],
        "correctAnswer": 0,
        "explanation": "Rechenweg:\n1. Linke Seite durch 4 kürzen: (40x - 4) / 4 = 10x - 1\n2. Rechte Seite ausmultiplizieren: (40 - 80x) * 2 = 80 - 160x\n3. Gleichung aufstellen: 10x - 1 = 80 - 160x\n4. Äquivalenzumformung: + 160x auf beiden Seiten -> 170x - 1 = 80\n5. + 1 auf beiden Seiten -> 170x = 81\n6. Durch 170 teilen: x = 81 / 170 ≈ 0,47647... gerundet x ≈ 0,48 (in Originalaufgabe: x = 0,48)."
},
    {
        "id": 338,
        "theme": "calculations",
        "topic": "Mathematik: Lineare Gleichung lösen",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Löse folgende Gleichung nach x auf:\n2x + 10 = 8x - 92\n\nWelcher Wert für x ist korrekt?",
        "options": [
                "x = 17",
                "x = 15",
                "x = 12",
                "x = 24"
        ],
        "correctAnswer": 0,
        "explanation": "Rechenweg:\n2x + 10 = 8x - 92\n- 2x auf beiden Seiten: 10 = 6x - 92\n+ 92 auf beiden Seiten: 102 = 6x\nDurch 6 teilen: x = 102 / 6 = 17."
},
    {
        "id": 339,
        "theme": "calculations",
        "topic": "Mathematik: Dreisatz proportional",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Eine Serverfarm benötigt für 6 identische Blade-Server unter Volllast 300 W Leistungsaufnahme. Wie viel Watt verbrauchen 4 dieser Blade-Server bei gleicher Auslastung (proportionaler Dreisatz)?",
        "options": [
                "200 W (300 W / 6 * 4 = 200 W)",
                "250 W",
                "150 W",
                "180 W"
        ],
        "correctAnswer": 0,
        "explanation": "Dreisatz in drei Schritten:\n1. Schritt: 6 Server = 300 W\n2. Schritt (auf 1 Einheit): 300 W / 6 = 50 W pro Server\n3. Schritt (auf Zielmenge 4): 50 W * 4 = 200 W."
},
    {
        "id": 340,
        "theme": "lf2",
        "topic": "Zahlensysteme: Hexadezimal zu Binär (Nibble-Verfahren)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Wandle die Hexadezimalzahl ACDC (Basis 16) in eine 16-Bit-Binärzahl um:\n(Hinweis: A=1010, C=1100, D=1101)",
        "options": [
                "1010 1100 1101 1100",
                "1111 0001 0001 0010",
                "1010 1110 0000 0000",
                "1001 1000 0111 0110"
        ],
        "correctAnswer": 0,
        "explanation": "Jede Hex-Ziffer wird als 4-Bit-Nibble dargestellt:\n- A (10) = 1010\n- C (12) = 1100\n- D (13) = 1101\n- C (12) = 1100\nZusammen: 1010 1100 1101 1100_2."
},
    {
        "id": 341,
        "theme": "lf2",
        "topic": "Zahlensysteme: Hexadezimal zu Binär (F112_16)",
        "isCalculation": true,
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Wie lautet die Binärdarstellung der Hexadezimalzahl F112 (16)?",
        "options": [
                "1111 0001 0001 0010",
                "1010 1100 1101 1100",
                "1111 1111 0001 0010",
                "1110 0001 0001 0001"
        ],
        "correctAnswer": 0,
        "explanation": "Nibble-Zerlegung:\n- F (15) = 1111\n- 1 (1)  = 0001\n- 1 (1)  = 0001\n- 2 (2)  = 0010\nErgebnis: 1111 0001 0001 0010_2."
},
    {
        "id": 342,
        "theme": "lf2",
        "topic": "Zahlensysteme: Vor- und Nachteile des Dualsystems",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Welche Aussage beschreibt die technischen Vor- und Nachteile des Dualsystems (Binärsystems) in Computersystemen zutreffend?",
        "options": [
                "Vorteil: Einfache technische Realisierbarkeit von Schaltungen (2 Zustände: Strom an/aus bzw. 1/0 Bit) und hohe Rechengeschwindigkeit. Nachteil: Lange Ziffernfolgen und schwierige Lesbarkeit für Menschen.",
                "Vorteil: Extrem kurze Zahlenfolgen für Menschen. Nachteil: Schwer in elektronischen Schaltungen abbildbar.",
                "Vorteil: Keine Rundungsfehler bei Kommazahlen. Nachteil: Langsame Rechengeschwindigkeit in ALUs.",
                "Vorteil: Unterstützt direkt ASCII-Zeichen ohne Codierung. Nachteil: Benötigt mehr Strom als das Dezimalsystem."
        ],
        "correctAnswer": 0,
        "explanation": "Das Dualsystem basiert auf 2 Zuständen (High/Low, Spannung an/aus), was physikalisch extrem robust und schnell in Transistoren schaltbar ist. Der Nachteil ist die hohe Stellenzahl (z. B. 1111 1111 statt 255)."
},
    {
        "id": 343,
        "theme": "lf1",
        "topic": "Marktformen: Monopol, Oligopol & Polypol",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ordne die Marktformen korrekt nach der Anzahl der Anbieter und Nachfrager zu:\n1. Monopol\n2. Oligopol\n3. Polypol",
        "options": [
                "Monopol = ein Anbieter (oder ein Nachfrager); Oligopol = wenige Anbieter/Nachfrager; Polypol = viele Anbieter und viele Nachfrager",
                "Monopol = viele Anbieter; Oligopol = ein Anbieter; Polypol = wenige Anbieter",
                "Monopol = staatlicher Markt; Oligopol = internationaler Markt; Polypol = lokaler Markt",
                "Monopol = Käufermarkt; Oligopol = Verkäufermarkt; Polypol = Mischmarkt"
        ],
        "correctAnswer": 0,
        "explanation": "Definitionen der Marktformen:\n- Monopol (griech. monos = allein, polein = verkaufen): Ein einziger Marktteilnehmer (Angebotsmonopol oder Nachfragemonopol).\n- Oligopol (oligos = wenig): Wenige Marktteilnehmer auf einer Seite (z. B. Smartphone-Betriebssysteme: Apple iOS & Google Android).\n- Polypol (polys = viel): Vollständiger Wettbewerb mit vielen Anbietern und vielen Nachfragern."
},
    {
        "id": 344,
        "theme": "lf1",
        "topic": "Aufbauorganisation: Einlinien-, Mehrlinien- & Stabliniensystem",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Welche Eigenschaften und Vor-/Nachteile zeichnen das Stabliniensystem aus?",
        "options": [
                "Es erweitert das Einliniensystem um Stabsstellen (z. B. Datenschutzbeauftragter, Rechtsabteilung, IT-Revision), die Führungskräfte beratend unterstützen, aber keine formale Weisungsbefugnis gegenüber der Linie besitzen.",
                "Jeder Mitarbeiter hat mehrere gleichberechtigte Vorgesetzte mit uneingeschränkter Weisungsbefugnis.",
                "Stabsstellen haben immer die höchste Weisungsbefugnis über alle Abteilungen hinweg.",
                "Es handelt sich um eine reine Projektorganisation ohne feste Hierarchien."
        ],
        "correctAnswer": 0,
        "explanation": "Stabliniensystem:\n- Stab = Expertenunterstützung ohne Anordnungs-/Weisungsrecht (beratende Funktion).\n- Vorteil: Entlastung der Geschäftsleitung durch Fachwissen.\n- Nachteil: Stäbe haben oft informellen Einfluss ('Schattenmacht'), ohne direkte Verantwortung für die Umsetzung tragen zu müssen."
},
    {
        "id": 345,
        "theme": "lf1",
        "topic": "Aufbauorganisation: Aufgabenanalyse vs. Aufgabensynthese",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Was unterscheidet die Aufgabenanalyse von der Aufgabensynthese bei der Gestaltung der Aufbauorganisation?",
        "options": [
                "Aufgabenanalyse: Zerlegung der Unternehmensgesamtaufgabe in Teilaufgaben (nach Verrichtung, Objekt, Rang, Phase). Aufgabensynthese: Zusammenfassung der Teilaufgaben zu Stellen, Instanzen und Abteilungen.",
                "Aufgabenanalyse fasst Stellen zusammen; Aufgabensynthese zerlegt sie wieder.",
                "Aufgabenanalyse regelt den zeitlichen Ablauf; Aufgabensynthese regelt die Finanzen.",
                "Beide Begriffe beschreiben identische Vorgänge im Qualitätsmanagement."
        ],
        "correctAnswer": 0,
        "explanation": "Klassische Organisationslehre:\n1. Aufgabenanalyse: Von der Gesamtaufgabe zu den elementaren Teilaufgaben.\n2. Aufgabensynthese: Zusammenführung verwandter Teilaufgaben zu Stellen (kleinste organisatorische Einheit), Instanzen (Leitungsstellen) und Abteilungen."
},
    {
        "id": 346,
        "theme": "lf1",
        "topic": "Führungsstile & Managementtechniken (MbO, MbE, MbD)",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein IT-Leiter vereinbart mit seinen Entwicklern zu Jahresbeginn messbare Projektziele (z. B. Release bis 30.06., Fehlerquote unter 0,5 %). Wie die Entwickler diese Ziele im Detail erreichen, entscheiden sie eigenverantwortlich. Welche Managementtechnik liegt vor?",
        "options": [
                "Management by Objectives (Führen durch Zielvereinbarung)",
                "Management by Exception (Führen nach dem Ausnahmeprinzip)",
                "Management by Delegation (Führen durch Aufgabenübertragung)",
                "Autoritäre Führung nach Weisung"
        ],
        "correctAnswer": 0,
        "explanation": "Management by Objectives (MbO):\n- Führungskraft und Mitarbeiter vereinbaren gemeinsam konkrete Soll-Ziele.\n- Mitarbeiter wählt die Mittel und den Lösungsweg selbständig.\n- Am Ende erfolgt ein Soll-Ist-Vergleich."
},
    {
        "id": 347,
        "theme": "lf1",
        "topic": "Vollmachten: Prokura (§ 48 ff. HGB) Umfang & Grenzen",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Welche der folgenden Handlungen darf eine Prokuristin (mit erteilter Prokura 'ppa.') kraft Gesetzes OHNE besondere Spezialvollmacht NICHT durchführen?",
        "options": [
                "Grundstücke des Unternehmens verkaufen oder mit einer Hypothek/Grundschuld belasten (§ 49 Abs. 2 HGB) sowie Bilanzen unterschreiben und das Unternehmen auflösen",
                "Mitarbeiter einstellen, befördern und entlassen",
                "Kredite und Darlehen für das Unternehmen bei Banken aufnehmen",
                "Einen Firmenwagen im Wert von 80.000 € für den Außendienst bestellen"
        ],
        "correctAnswer": 0,
        "explanation": "Die Prokura (§ 49 HGB) ermächtigt zu allen Arten von gerichtlichen und außergerichtlichen Geschäften und Rechtshandlungen eines Handelsgewerbes.\nAusnahmen (Prinzipalgeschäfte / Grundstücke):\n- Veräußerung und Belastung von Grundstücken (erfordert gesonderte Grundstücksklausel nach § 49 Abs. 2 HGB)\n- Jahresabschluss/Bilanz unterschreiben\n- Prokura an andere Personen erteilen oder entziehen\n- Insolvenz anmelden oder Betrieb veräußern/auflösen."
},
    {
        "id": 348,
        "theme": "lf1",
        "topic": "Ökonomisches Prinzip: Maximalprinzip vs. Minimalprinzip",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein IT-Administrator hat ein festes Budget von 10.000 € (gegebener Input) und versucht, damit die maximal mögliche Anzahl an performanten Server-Komponenten zu beschaffen (maximaler Output). Welches Prinzip des ökonomischen Handelns wendet er an?",
        "options": [
                "Maximalprinzip (Fester Input -> Maximaler Output)",
                "Minimalprinzip (Gegebener Output -> Minimaler Input)",
                "Extremprinzip (Unbestimmter Input -> Unbestimmter Output)",
                "Gemeinwirtschaftliches Prinzip"
        ],
        "correctAnswer": 0,
        "explanation": "Ökonomisches Prinzip:\n- Maximalprinzip: Mit gegebenen Mitteln (festes Budget 10.000 €) das bestmögliche / maximale Ergebnis erzielen.\n- Minimalprinzip: Ein festes Ziel (z. B. genau 5 Server mit fester Spezifikation) mit möglichst geringem Aufwand / minimalen Kosten erreichen."
},
    {
        "id": 349,
        "theme": "lf1",
        "topic": "Finanzierungsvergleich: Kauf vs. Kredit vs. Leasing",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Welche Vorteile bietet das IT-Leasing (z. B. von 50 Notebooks für Mitarbeiter) gegenüber dem Sofortkauf aus Eigenkapital?",
        "options": [
                "Schonung der Liquidität, bilanzneutral (Pay-as-you-earn), Leasingraten sind sofort voll als Betriebsausgaben steuerlich absetzbar, und regelmäßiger Hardwaretausch nach 3 Jahren sichert aktuellen Technologiestand.",
                "Das Unternehmen wird sofort ab dem ersten Tag rechtlicher Eigentümer der Hardware.",
                "Leasing ist in der Gesamtsumme ausnahmslos billiger als ein Barkauf mit Skonto.",
                "Die Geräte müssen nach Ablauf niemals an die Leasinggesellschaft zurückgegeben werden."
        ],
        "correctAnswer": 0,
        "explanation": "Vorteile von Leasing:\n- Liquiditätsschonung (keine hohe Einmalinvestition)\n- Steuerlicher Vorteil (Raten = Aufwand, senken den steuerlichen Gewinn)\n- Bilanzneutralität (keine Erhöhung des Anlagevermögens/Verschuldungsgrades)\n- Schutz vor Veralterung (Hardware-Refresh nach z. B. 36 Monaten)."
},
    {
        "id": 350,
        "theme": "lf1",
        "topic": "Vertragsrecht: Stufen der Geschäftsfähigkeit (§§ 104 ff. BGB)",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein 16-jähriger Auszubildender bestellt im Internet ohne Zustimmung seiner Eltern einen High-End-Gaming-PC für 2.500 € auf Rechnung. Wie ist die rechtliche Wirksamkeit dieses Kaufvertrags einzustufen?",
        "options": [
                "Der Vertrag ist schwebend unwirksam (§§ 106, 108 BGB) und wird erst mit der nachträglichen Genehmigung der gesetzlichen Vertreter wirksam (Taschengeldparagraph greift bei 2.500 € auf Rechnung nicht).",
                "Der Vertrag ist von Anfang an voll wirksam, da Jugendliche ab 14 Jahren unbeschränkt Verträge abschließen dürfen.",
                "Der Vertrag ist absolut nichtig und kann von den Eltern nicht nachträglich genehmigt werden.",
                "Der Vertrag ist automatisch wirksam, da der Auszubildende eigenes Gehalt verdient."
        ],
        "correctAnswer": 0,
        "explanation": "Stufen der Geschäftsfähigkeit:\n- 0 bis 6 Jahre: Geschäftsunfähig (Willenserklärungen nichtig § 105 BGB)\n- 7 bis 17 Jahre: Beschränkt geschäftsfähig (§ 106 BGB). Verträge bedürfen der Einwilligung der Eltern. Ohne Einwilligung: schwebend unwirksam bis zur Genehmigung (§ 108 BGB). Der Taschengeldparagraph (§ 110 BGB) gilt nur bei vollständiger Barzahlung mit überlassenen Mitteln, nicht bei Kauf auf Rechnung/Raten!\n- Ab 18 Jahre: Voll geschäftsfähig."
},
    {
        "id": 351,
        "theme": "lf1",
        "topic": "Kaufvertrag: Mangelhafte Lieferung & Rechte des Käufers",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Ein gelieferter Server weist einen defekten RAID-Controller auf (Sachmangel). Welches Recht muss der Käufer vorrangig geltend machen, bevor er vom Vertrag zurücktreten oder den Preis mindern darf?",
        "options": [
                "Vorrangiges Recht auf Nacherfüllung (§ 439 BGB: wahlweise Beseitigung des Mangels / Nachbesserung oder Lieferung einer mangelfreien Sache / Nachlieferung)",
                "Sofortiger Rücktritt vom Kaufvertrag und Geld zurück ohne Fristsetzung",
                "Sofortige Preisminderung um 50 %",
                "Sofortige Strafanzeige wegen Betrugs"
        ],
        "correctAnswer": 0,
        "explanation": "Gewährleistungsrechte bei Mängeln:\n1. Vorrangige Rechte (Stufe 1): Nacherfüllung (Käufer hat Wahlrecht zwischen Nachbesserung = Reparatur oder Nachlieferung = Neulieferung). Der Verkäufer hat das Recht zur zweiten Andienung.\n2. Nachrangige Rechte (Stufe 2, nach erfolglosem Ablauf einer angemessenen Frist): Rücktritt vom Vertrag, Minderung des Kaufpreises oder Schadensersatz statt der Leistung."
},
    {
        "id": 352,
        "theme": "lf1",
        "topic": "Kaufvertrag: Eigentumsvorbehalt (§ 449 BGB)",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Was bedeutet der vertraglich vereinbarte einfache 'Eigentumsvorbehalt' bei der Lieferung von IT-Hardware auf Ziel/Raten?",
        "options": [
                "Der Käufer wird bei Übergabe sofort Besitzer der Hardware, das rechtliche Eigentum verbleibt jedoch bis zur vollständigen Bezahlung des Kaufpreises beim Verkäufer (aufschiebende Bedingung § 449 BGB).",
                "Der Käufer wird sofort Eigentümer, der Verkäufer behält den Besitz.",
                "Die Ware darf vom Käufer 5 Jahre lang nicht genutzt werden.",
                "Der Verkäufer haftet nicht für Sachmängel."
        ],
        "correctAnswer": 0,
        "explanation": "Unterschied Besitz und Eigentum beim Eigentumsvorbehalt (§ 449 BGB):\n- Besitz = tatsächliche Sachherrschaft (Käufer nutzt die Hardware).\n- Eigentum = rechtliche Herrschaft (geht erst mit Zahlung der letzten Rate auf den Käufer über). Zahlt der Käufer nicht, kann der Verkäufer vom Vertrag zurücktreten und die Ware herausverlangen."
},
    {
        "id": 353,
        "theme": "lf1",
        "topic": "Erweiterter Wirtschaftskreislauf: Die 5 Sektoren",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Welche 5 Wirtschaftssubjekte (Sektoren) bilden den erweiterten volkswirtschaftlichen Wirtschaftskreislauf?",
        "options": [
                "Private Haushalte, Unternehmen, Staat, Banken (Kapitalsammelstellen/Finanzsektor) und das Ausland",
                "Hersteller, Großhändler, Einzelhändler, Endverbraucher, Logistiker",
                "Geschäftsleitung, Einkauf, Produktion, Vertrieb, Buchhaltung",
                "Käufer, Verkäufer, Notare, Gerichte, Finanzamt"
        ],
        "correctAnswer": 0,
        "explanation": "Der erweiterte Wirtschaftskreislauf (IHK-Standard) besteht aus 5 Sektoren:\n1. Private Haushalte (Arbeitskraft, Konsum)\n2. Unternehmen (Produktion, Löhne, Investitionen)\n3. Staat (Steuern, Subventionen, öffentliche Aufträge)\n4. Banken / Vermögensveränderung (Sparen, Kredite, Zinsen)\n5. Ausland (Exporte, Importe)."
},
// =========================================================================
    // Visuelle Diagramm-Aufgaben (Erkennung & Modellierung mit SVG)
    // =========================================================================
    {
        "id": 354,
        "theme": "diagrams",
        "topic": "Diagramm-Erkennung: UML Use-Case-Diagramm",
        "isDiagram": true,
        "diagramType": "UML Use-Case-Diagramm",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Betrachte das oben abgebildete visuelle Modell. Um welchen Diagrammtyp handelt es sich und was stellt das gestrichelte Rechteck dar?",
        "diagramTitle": "Visualisierung 1: Systemmodell",
        "diagramCaption": "Abbildung: Systemmodell mit Akteuren (Kunde, Payment Gateway) und Anwendungsfällen",
        "diagramSvg": VisualDiagrams.getUseCaseDiagramSvg("Online-Shop Bestellsystem"),
        "options": [
            "UML-Anwendungsfalldiagramm (Use-Case-Diagramm) mit einer Systemgrenze (Scope des Onlineshops)",
            "UML-Klassendiagramm mit Paketstruktur",
            "Entity-Relationship-Diagramm (ERD) mit Entitätsmengen",
            "Ereignisgesteuerte Prozesskette (EPK) mit Organisationseinheiten"
        ],
        "correctAnswer": 0,
        "explanation": "Es handelt sich um ein UML-Use-Case-Diagramm (Anwendungsfalldiagramm):
- Männchen-Symbole = Akteure (Akteur 'Kunde' und externes System 'Payment Gateway')
- Ovale = Use Cases (z. B. 'Artikel suchen', 'Bestellung aufgeben')
- Gestricheltes Rechteck = Systemgrenze (grenzt das zu entwickelnde Onlineshop-System von externen Akteuren ab)
- Gestrichelte Pfeile = <<include>> (zwingend erforderlich) und <<extend>> (optionale Erweiterung)."
    },
    {
        "id": 355,
        "theme": "diagrams",
        "topic": "Diagramm-Erkennung: UML Klassendiagramm & Komposition",
        "isDiagram": true,
        "diagramType": "UML Klassendiagramm",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Betrachte das abgebildete UML-Klassendiagramm. Was bedeutet die ausgefüllte schwarze Raute (Diamant) an der Beziehung zwischen den Klassen 'Bestellung' und 'Bestellposition'?",
        "diagramTitle": "Visualisierung 2: Objektorientiertes Datenmodell",
        "diagramCaption": "Abbildung: UML-Klassendiagramm mit Attributen, Methoden, Multiplizitäten und Beziehungen",
        "diagramSvg": VisualDiagrams.getClassDiagramSvg(),
        "options": [
            "Komposition (strenge existenzabhängige Teil-Ganzes-Beziehung: Wird eine Bestellung gelöscht, werden auch alle zugehörigen Bestellpositionen unwiderruflich gelöscht).",
            "Aggregation (schwache Teil-Ganzes-Beziehung: Die Teile können auch ohne das Ganze eigenständig weiter existieren).",
            "Generalisierung / Vererbung (Bestellposition erbt Attribute von Bestellung).",
            "Einfache lose Assoziation ohne Lebenszeitabhängigkeit."
        ],
        "correctAnswer": 0,
        "explanation": "In der UML-Notation bedeutet:
- Ausgefüllte schwarze Raute = Komposition: Eine existenzabhängige Teil-Ganzes-Beziehung (starke Bindung). Die Lebensdauer des Teils (Bestellposition) ist an das Ganze (Bestellung) gebunden.
- Helle/leere Raute = Aggregation (schwache Bindung).
- Pfeil mit weißem Dreieck = Generalisierung / Vererbung.
- Die Notation '1' und '1..*' zeigt die Multiplizitäten (Eine Bestellung hat mindestens 1 oder beliebig viele Positionen)."
    },
    {
        "id": 356,
        "theme": "diagrams",
        "topic": "Diagramm-Erkennung: Entity-Relationship-Modell (ERD)",
        "isDiagram": true,
        "diagramType": "Entity-Relationship-Modell (ERD)",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Betrachte das abgebildete Entity-Relationship-Diagramm (ERD nach Chen). Welche Bedeutung haben die unterstrichenen Attribute in den Ellipsen (z. B. 'KundenNr', 'BestellNr', 'ArtikelNr')?",
        "diagramTitle": "Visualisierung 3: Konzeptionelles Datenmodell",
        "diagramCaption": "Abbildung: ERD in Chen-Notation mit Entitätstypen, Beziehungstypen und Kardinalitäten (1:n und n:m)",
        "diagramSvg": VisualDiagrams.getErdDiagramSvg(),
        "options": [
            "Primärschlüssel-Attribute (eindeutige Identifikationsmerkmale der Entität)",
            "Fremdschlüssel-Attribute zur Tabellenverknüpfung",
            "Optionale Attribute mit NULL-Werten",
            "Mehrwertige Attribute"
        ],
        "correctAnswer": 0,
        "explanation": "In der Chen-Notation für ER-Modelle gilt:
- Rechtecke = Entitätstypen (z. B. KUNDE, BESTELLUNG, ARTIKEL)
- Rauten = Beziehungstypen (z. B. erteilt [1:n], umfasst [n:m])
- Ovale/Ellipsen = Attribute
- Unterstrichene Attribute (z. B. KundenNr) = Primärschlüssel (Primary Key), die jede Entität in der Tabelle eindeutig identifizieren."
    },
    {
        "id": 357,
        "theme": "diagrams",
        "topic": "Diagramm-Erkennung: Ereignisgesteuerte Prozesskette (EPK)",
        "isDiagram": true,
        "diagramType": "Ereignisgesteuerte Prozesskette (EPK)",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Betrachte die abgebildete Ereignisgesteuerte Prozesskette (EPK). Welches logische Verknüpfungselement (Konnektor) ist nach der Funktion 'Bestellung prüfen' geschaltet und was bewirkt es?",
        "diagramTitle": "Visualisierung 4: Geschäftsprozessmodell (EPK)",
        "diagramCaption": "Abbildung: EPK-Prozess mit Ereignissen (Sechsecke), Funktionen (abgerundete Rechtecke) und Konnektoren",
        "diagramSvg": VisualDiagrams.getEpkDiagramSvg(),
        "options": [
            "XOR-Konnektor (Exklusives Oder: Es tritt genau einer der beiden Folgepfade ein – entweder 'Auftrag bestätigt' ODER 'Auftrag abgelehnt')",
            "AND-Konnektor (Und-Verknüpfung: Beide Folgepfade müssen parallel ausgeführt werden)",
            "OR-Konnektor (Inklusives Oder: Mindestens ein Pfad oder beide Pfade treten ein)",
            "Rückkopplungsschleife ohne logischen Operator"
        ],
        "correctAnswer": 0,
        "explanation": "EPK-Grundregeln:
- Sechsecke (Rosa/Rot) = Ereignisse (Zustände, z. B. 'Kunde bestellt', 'Auftrag bestätigt')
- Abgerundete Rechtecke (Grün) = Funktionen (Aktivitäten / Verben, z. B. 'Bestellung prüfen')
- Kreis mit 'XOR' = Exklusives Oder (Entweder/Oder, niemals beides gleichzeitig).
- Wichtige IHK-Regel: Auf ein Ereignis darf keine direkte XOR/OR-Verzweigung ohne vorherige Funktion folgen!"
    },
    {
        "id": 358,
        "theme": "diagrams",
        "topic": "Diagramm-Erkennung: BPMN 2.0 Prozessmodell",
        "isDiagram": true,
        "diagramType": "BPMN 2.0",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Betrachte das abgebildete Geschäftsprozessdiagramm in BPMN 2.0 Notation. Welche Elemente repräsentieren jeweils den Prozessstart, die Aufgaben und die exklusive Verzweigung?",
        "diagramTitle": "Visualisierung 5: BPMN 2.0 Ablauf",
        "diagramCaption": "Abbildung: Standardisierter BPMN 2.0 Ablauf mit Start-Event, Tasks, Exclusive Gateway (✕) und End-Event",
        "diagramSvg": VisualDiagrams.getBpmnDiagramSvg(),
        "options": [
            "Grüner Kreis (Start-Event), abgerundete blaue Rechtecke (Tasks / Aktivitäten), Raute mit Kreuz ✕ (Exclusive Gateway / XOR-Verzweigung)",
            "Rotes Sechseck (Start), Ellipsen (Tasks), Dreieck (Gateway)",
            "Doppelkreis (Start), Pfeile (Tasks), Parallelogramm (Gateway)",
            "Quadrat (Start), Zylinder (Tasks), Kreis mit Plus (Gateway)"
        ],
        "correctAnswer": 0,
        "explanation": "BPMN 2.0 Standardelemente:
- Dünner grüner Kreis = Start Event
- Abgerundete Rechtecke = Tasks (Aktivitäten wie 'Auftrag erfassen', 'Waren kommissionieren')
- Raute mit 'X' = Exclusive Gateway (XOR: Nur ein Ausgangspfad wird gewählt)
- Dicker roter Kreis = End Event."
    },
    {
        "id": 359,
        "theme": "diagrams",
        "topic": "Diagramm-Erkennung: Nassi-Shneiderman Struktogramm (DIN 66261)",
        "isDiagram": true,
        "diagramType": "Struktogramm (DIN 66261)",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Betrachte das abgebildete Struktogramm nach DIN 66261. Welche Programmier-Kontrollstrukturen sind von oben nach unten korrekt dargestellt?",
        "diagramTitle": "Visualisierung 6: Algorithmenentwurf",
        "diagramCaption": "Abbildung: DIN 66261 Struktogramm mit linearer Sequenz, Verzweigung (IF-ELSE) und kopfgesteuerter Schleife",
        "diagramSvg": VisualDiagrams.getStruktogrammSvg(),
        "options": [
            "1. Lineare Sequenz (Anweisungsblock) -> 2. Verzweigung / Selektion (IF-THEN-ELSE mit Ja/Nein) -> 3. Kopfgesteuerte Zählschleife (FOR / WHILE)",
            "1. Fußgesteuerte Schleife -> 2. Switch-Case -> 3. Rekursion",
            "1. Parallele Ausführung -> 2. Endlosschleife -> 3. Funktionsaufruf",
            "1. Try-Catch Block -> 2. Goto-Sprung -> 3. Return"
        ],
        "correctAnswer": 0,
        "explanation": "Struktogramm-Bausteine nach DIN 66261:
- Einfaches Rechteck = Sequenz (z. B. 'rabatt = 0.0')
- Dreieckig geteilter Block mit Bedingung = Alternative / Verzweigung (IF 'rabattCode != null' mit linkem JA-Zweig und rechtem NEIN-Zweig)
- L-förmig umrahmter Block = Schleife / Iteration (z. B. 'FÜR JEDEN Artikel in warenkorb')."
    },
    {
        "id": 360,
        "theme": "diagrams",
        "topic": "Diagramm-Erkennung: Netzplan (DIN 69900) & Kritischer Pfad",
        "isDiagram": true,
        "diagramType": "Netzplan (DIN 69900)",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Betrachte den abgebildeten Netzplan nach DIN 69900. Welche Vorgänge liegen auf dem kritischen Pfad und warum sind diese für die Projektdauer entscheidend?",
        "diagramTitle": "Visualisierung 7: Projektnetzplan (DIN 69900)",
        "diagramCaption": "Abbildung: Netzplanknoten mit Vorwärtsrechnung (FAZ/FEZ), Rückwärtsrechnung (SAZ/SEZ), Pufferzeiten (GP/FP) und rotem Kritischen Pfad",
        "diagramSvg": VisualDiagrams.getNetzplanDiagramSvg(),
        "options": [
            "V1 -> V2 -> V4 (Rot markiert): Ihre Gesamtpufferzeit ist GP = 0. Jede Verzögerung bei diesen Vorgängen verlängert unmittelbar das gesamte Projektende (Tag 18).",
            "V1 -> V3 -> V4: Weil V3 die höchste Gesamtpufferzeit von GP = 4 Tagen besitzt.",
            "Nur Vorgang V4, da er am Ende des Projekts liegt.",
            "Alle Vorgänge liegen gleichermaßen auf dem kritischen Pfad."
        ],
        "correctAnswer": 0,
        "explanation": "Netzplantechnik nach DIN 69900:
- FAZ (Frühester Anfangszeitpunkt), FEZ (Frühester Endzeitpunkt)
- SAZ (Spätester Anfangszeitpunkt), SEZ (Spätester Endzeitpunkt)
- GP (Gesamtpuffer) = SAZ - FAZ (oder SEZ - FEZ)
- Der kritische Pfad verbindet alle Vorgänge mit GP = 0 (hier V1 [D=4] -> V2 [D=6] -> V4 [D=8] = 18 Tage). Eine Verzögerung führt sofort zum Projektverzug!"
    },
    {
        "id": 361,
        "theme": "diagrams",
        "topic": "Diagramm-Erkennung: Stabliniensystem Organigramm",
        "isDiagram": true,
        "diagramType": "Organigramm (Stabliniensystem)",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Betrachte das abgebildete Organisationsdiagramm (Organigramm). Welche Funktion hat das seitlich angegliederte Oval 'Stab: Datenschutz & Revision'?",
        "diagramTitle": "Visualisierung 8: Organisationsstruktur",
        "diagramCaption": "Abbildung: Stabliniensystem mit Geschäftsleitung, Stabsstelle und Linieninstanzen (IT, Vertrieb, Finanzen)",
        "diagramSvg": VisualDiagrams.getOrganigrammStabSvg(),
        "options": [
            "Stabsstelle: Beratende, prüfende und unterstützende Funktion für die Geschäftsleitung ohne eigene Weisungsbefugnis gegenüber den nachgeordneten Linienabteilungen.",
            "Höchste Weisungsinstanz mit Durchgriffsrecht auf alle Mitarbeiter.",
            "Ausgelagerte externe Tochtergesellschaft.",
            "Matrix-Schnittstelle zwischen Einkauf und Vertrieb."
        ],
        "correctAnswer": 0,
        "explanation": "Im Stabliniensystem gilt:
- Linienstellen (Rechtecke) sind in die hierarchische Befehlskette eingebunden und besitzen Weisungsbefugnis.
- Stabsstellen (z. B. Datenschutzbeauftragter, Revision, Rechtsabteilung) beraten die Geschäftsführung als Stabsassistenten, haben aber KEINE disziplinarische Weisungsbefugnis gegenüber der Linie."
    },
    {
        "id": 362,
        "theme": "diagrams",
        "topic": "Diagramm-Erkennung: Marktpreisbildung & Marktgleichgewicht",
        "isDiagram": true,
        "diagramType": "Marktgleichgewicht Diagramm",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Betrachte das abgebildete Preisbildungsdiagramm. Welcher Zustand liegt im markierten roten Bereich (Preis = 20,00 €, Nachfrage = 600 Stk., Angebot = 200 Stk.) vor?",
        "diagramTitle": "Visualisierung 9: Volkswirtschaftliches Marktmodell",
        "diagramCaption": "Abbildung: Koordinatensystem mit Angebot, Nachfrage, Marktgleichgewicht G (40 €, 400 Stk.) und Nachfrageüberhang",
        "diagramSvg": VisualDiagrams.getMarktgleichgewichtSvg(),
        "options": [
            "Nachfrageüberhang von 400 Stück (600 Nachfrage - 200 Angebot) -> Verkäufermarkt mit Aufwärtsdruck auf die Preise.",
            "Angebotsüberhang von 400 Stück -> Käufermarkt mit Abwärtsdruck auf die Preise.",
            "Vollkommenes Marktgleichgewicht bei 20,00 €.",
            "Monopolistischer Sättigungspunkt."
        ],
        "correctAnswer": 0,
        "explanation": "Marktmechanismus:
- Liegt der Preis (20 €) UNTER dem Gleichgewichtspreis (40 €), fragen Kunden mehr nach (600 Stk.), als die Anbieter bereitstellen (200 Stk.).
- Es entsteht ein Nachfrageüberhang von 600 - 200 = 400 Stück (Knappheit, Verkäufermarkt).
- Liegt der Preis über 40 €, entsteht ein Angebotsüberhang (Käufermarkt)."
    },
    {
        "id": 363,
        "theme": "diagrams",
        "topic": "Diagramm-Erkennung: Handelskalkulation Schema-Treppe",
        "isDiagram": true,
        "diagramType": "Kalkulationsschema Treppe",
        "isBawueFocus": true,
        "type": "multiple-choice",
        "question": "Betrachte das abgebildete visuelle Kalkulationsschema. Welche Formel gilt für den Übergang vom Barverkaufspreis (BVP) zum Zielverkaufspreis (ZVP) bei Vorhandensein von 3 % Kundenskonto?",
        "diagramTitle": "Visualisierung 10: Handelskalkulation Vorwärtskalkulation",
        "diagramCaption": "Abbildung: Vollständiges Kalkulationsschema vom Listeneinkaufspreis (LEP) bis zum Listenverkaufspreis (LVP brutto)",
        "diagramSvg": VisualDiagrams.getKalkulationTreeSvg(),
        "options": [
            "Rechnung 'im Hundert': ZVP = BVP / (1 - Skonto/100) = BVP / 0,97",
            "Rechnung 'vom Hundert': ZVP = BVP * 1,03",
            "Rechnung 'auf Hundert': ZVP = BVP * 0,97",
            "ZVP = BVP + 19 % MwSt."
        ],
        "correctAnswer": 0,
        "explanation": "Wichtige IHK-Regel der Handelskalkulation:
- Kundenskonto und Kundenrabatt werden IM HUNDERT (vom höheren Zielpreis ausgehend) berechnet!
- Da ZVP = 100 % und Skonto = 3 %, entspricht der BVP genau 97 %.
- Formel: ZVP = BVP / 0,97 (oder BVP / (100 - Skonto) * 100)."
    },
    {
        "id": 364,
        "theme": "diagrams",
        "topic": "Modellierungs-Aufgabe: UML Use-Case-Diagramm entwerfen",
        "isDiagram": true,
        "diagramType": "UML Use-Case-Diagramm",
        "isBawueFocus": true,
        "type": "open-text",
        "question": "IHK-Prüfungsaufgabe (Modellierung): Skizziere auf dem Whiteboard oder beschreibe ein UML-Use-Case-Diagramm für ein Online-Bestellsystem mit folgenden Vorgaben:\n\n1. Akteure: 'Kunde' (primär) und 'Payment Gateway' (externes Zahlsystem).\n2. Use Cases: 'Artikel suchen', 'Bestellung aufgeben', 'Bonität prüfen' und 'Gutschein einlösen'.\n3. Beziehungen: Die Use-Cases müssen über eine Systemgrenze sauber abgegrenzt werden. Die 'Bonitätsprüfung' ist bei jeder Bestellung zwingend erforderlich (<<include>>), während das 'Gutschein einlösen' optional möglich ist (<<extend>>).\n\nVergleiche anschließend deine Skizze mit der visuellen Musterlösung.",
        "solutionDiagramSvg": VisualDiagrams.getUseCaseDiagramSvg("Online-Shop Bestellsystem"),
        "solutionDiagramCaption": "Visuelle Musterlösung: UML-Use-Case-Diagramm mit Akteuren, Systemgrenze, <<include>> und <<extend>>",
        "musterloesung": "Grafische und textliche Musterlösung:\n\n1. Systemgrenze: Rechteck mit Titel 'Online-Shop Bestellsystem'\n2. Akteure:\n   - Akteur 'Kunde' links außerhalb der Grenze\n   - Akteur 'Payment Gateway' rechts außerhalb der Grenze\n3. Use-Cases (Ovale):\n   - 'Artikel suchen' verbunden mit Kunde\n   - 'Bestellung aufgeben' verbunden mit Kunde und Payment Gateway\n   - <<include>> Pfeil gestrichelt von 'Bestellung aufgeben' zu 'Bonität prüfen' (zwingender Teilprozess)\n   - <<extend>> Pfeil gestrichelt von 'Gutschein einlösen' zu 'Bestellung aufgeben' (optionale Erweiterung).",
        "explanation": "Vollständige Modellierung eines UML-Use-Case-Diagramms gemäß DIN/ISO UML-Standard mit sauberer Unterscheidung von <<include>> und <<extend>>."
    },
    {
        "id": 365,
        "theme": "diagrams",
        "topic": "Modellierungs-Aufgabe: UML Klassendiagramm entwerfen",
        "isDiagram": true,
        "diagramType": "UML Klassendiagramm",
        "isBawueFocus": true,
        "type": "open-text",
        "question": "IHK-Prüfungsaufgabe (Modellierung): Modellieren Sie ein UML-Klassendiagramm für ein Bestellsystem mit folgenden Anforderungen:\n\n1. Klassen: Kunde, Bestellung und Bestellposition mit je 3 Fächern (Klassenname, Attribute, Methoden).\n2. Beziehungen:\n   - Ein Kunde kann 0..* Bestellungen besitzen (Assoziation).\n   - Eine Bestellung besteht aus 1..* Bestellpositionen als existenzabhängige Komposition (schwarze Raute).\n3. Sichtbarkeiten: Private Attribute (-) und öffentliche Methoden (+).\n\nSkizziere den Entwurf im Whiteboard und überprüfe ihn mit der grafischen Musterlösung.",
        "solutionDiagramSvg": VisualDiagrams.getClassDiagramSvg(),
        "solutionDiagramCaption": "Visuelle Musterlösung: UML-Klassendiagramm mit Attributen, Methoden, Komposition und Multiplizitäten",
        "musterloesung": "Musterlösung für das Klassendiagramm:\n\n- Klasse Kunde: - kundenNr: int, - name: String, - email: String | + getBestellungen(), + addBestellung(), + getUmsatz(): double\n- Klasse Bestellung: - bestellNr: int, - datum: Date, - status: String | + berechneGesamtpreis(): double, + addPosition()\n- Klasse Bestellposition: - positionsNr: int, - menge: int, - einzelpreis: double | + getZwischensumme(): double\n- Multiplizität: Kunde [1] --- (0..*) Bestellung\n- Komposition: Bestellung [1] ◆--- (1..*) Bestellposition (schwarze Raute bei Bestellung).",
        "explanation": "Klassendiagramm mit 3-teiligen Klassenboxen, Sichtbarkeitsmodifikatoren (+ / -), Multiplizitäten und Kompositionsraute."
    },
    {
        "id": 366,
        "theme": "diagrams",
        "topic": "Modellierungs-Aufgabe: Entity-Relationship-Diagramm (ERD) nach Chen",
        "isDiagram": true,
        "diagramType": "Entity-Relationship-Modell (ERD)",
        "isBawueFocus": true,
        "type": "open-text",
        "question": "IHK-Prüfungsaufgabe (Modellierung): Modellieren Sie ein konzeptionelles Datenmodell (ER-Modell in Chen-Notation) für ein Vertriebssystem:\n\n1. Entitäten: KUNDE, BESTELLUNG und ARTIKEL.\n2. Beziehungen: KUNDE 'erteilt' BESTELLUNG (1:n) und BESTELLUNG 'umfasst' ARTIKEL (n:m).\n3. Kennzeichnen Sie für jede Entität die Primärschlüssel-Attribute durch Unterstreichung.\n\nSkizziere dein ERD im Whiteboard und vergleiche mit der Musterlösung.",
        "solutionDiagramSvg": VisualDiagrams.getErdDiagramSvg(),
        "solutionDiagramCaption": "Visuelle Musterlösung: ERD nach Chen mit 1:n und n:m Kardinalitäten sowie unterstrichenen Primärschlüsseln",
        "musterloesung": "Musterlösung für das ER-Diagramm:\n\n- Entität KUNDE [Rechteck] mit Attributen (KundenNr [PK unterstrichen], Name, Ort)\n- Beziehung 'erteilt' [Raute] mit Kardinalität 1:n (1 Kunde -> n Bestellungen)\n- Entität BESTELLUNG [Rechteck] mit Attributen (BestellNr [PK unterstrichen], Datum)\n- Beziehung 'umfasst' [Raute] mit Kardinalität n:m und Beziehungsattribut 'Menge'\n- Entität ARTIKEL [Rechteck] mit Attributen (ArtikelNr [PK unterstrichen], Bezeichnung, Preis).",
        "explanation": "ER-Modellierung nach Chen mit korrekter Notation für Entitäten, Attribute, Rauten für Beziehungen und Multiplizitäten."
    },
    {
        "id": 367,
        "theme": "diagrams",
        "topic": "Modellierungs-Aufgabe: Ereignisgesteuerte Prozesskette (EPK)",
        "isDiagram": true,
        "diagramType": "Ereignisgesteuerte Prozesskette (EPK)",
        "isBawueFocus": true,
        "type": "open-text",
        "question": "IHK-Prüfungsaufgabe (Geschäftsprozesse): Erstellen Sie eine Ereignisgesteuerte Prozesskette (EPK) für den Prozess 'Kundenauftrag bearbeiten' mit folgenden Schritten:\n\n1. Start-Ereignis: 'Kunde bestellt Ware'\n2. Funktion: 'Bestellung prüfen'\n3. XOR-Verzweigung:\n   - Pfad A: 'Auftrag abgelehnt' -> 'Absage versenden' -> 'Kunde informiert'\n   - Pfad B: 'Auftrag bestätigt' -> 'Rechnung erstellen' -> 'Rechnung versendet'\n\nSkizziere die EPK auf dem Whiteboard und vergleiche mit der visuellen Musterlösung.",
        "solutionDiagramSvg": VisualDiagrams.getEpkDiagramSvg(),
        "solutionDiagramCaption": "Visuelle Musterlösung: EPK mit Ereignissen (Sechsecke), Funktionen (abgerundete Rechtecke) und XOR-Verzweigung",
        "musterloesung": "Musterlösung EPK:\n\n- Sechseck: 'Kunde bestellt Ware' (Start-Ereignis)\n- Pfeil zu grünem abgerundeten Rechteck: 'Bestellung prüfen' (Funktion)\n- Pfeil zu Kreis mit XOR-Konnektor\n- Verzweigung zu zwei Sechsecken: 'Auftrag abgelehnt' ODER 'Auftrag bestätigt'\n- Nach 'Auftrag abgelehnt': Funktion 'Absage versenden' -> Ereignis 'Kunde informiert'\n- Nach 'Auftrag bestätigt': Funktion 'Rechnung erstellen' -> Ereignis 'Rechnung versendet'.",
        "explanation": "Ereignisgesteuerte Prozesskette unter Einhaltung des Wechsels von Ereignis und Funktion sowie Verzweigungsregeln."
    },
    {
        "id": 368,
        "theme": "diagrams",
        "topic": "Modellierungs-Aufgabe: Netzplan (DIN 69900) mit Kritischem Pfad",
        "isDiagram": true,
        "diagramType": "Netzplan (DIN 69900)",
        "isBawueFocus": true,
        "type": "open-text",
        "question": "IHK-Prüfungsaufgabe (Projektmanagement): Berechnen und zeichnen Sie einen Netzplan nach DIN 69900 für folgende 4 Vorgänge:\n\n- Vorgang V1: Dauer 4 Tage, Vorgänger: keine\n- Vorgang V2: Dauer 6 Tage, Vorgänger: V1\n- Vorgang V3: Dauer 2 Tage, Vorgänger: V1\n- Vorgang V4: Dauer 8 Tage, Vorgänger: V2 und V3\n\nAufgaben:\n1. Berechnen Sie in der Vorwärtsrechnung FAZ und FEZ.\n2. Berechnen Sie in der Rückwärtsrechnung SAZ und SEZ.\n3. Bestimmen Sie für jeden Vorgang Gesamtpuffer (GP) und Freien Puffer (FP).\n4. Identifizieren Sie den Kritischen Pfad und die gesamte Projektdauer.",
        "solutionDiagramSvg": VisualDiagrams.getNetzplanDiagramSvg(),
        "solutionDiagramCaption": "Visuelle Musterlösung: DIN 69900 Netzplan mit 7-Felder-Knoten, Vor-/Rückwärtsrechnung und Kritischem Pfad",
        "musterloesung": "Musterlösung Netzplan:\n\n1. Vorwärtsrechnung:\n- V1: FAZ=0, D=4 -> FEZ=4\n- V2: FAZ=4, D=6 -> FEZ=10\n- V3: FAZ=4, D=2 -> FEZ=6\n- V4: FAZ=max(10, 6)=10, D=8 -> FEZ=18 (Projektdauer = 18 Tage)\n\n2. Rückwärtsrechnung (Projektende = 18):\n- V4: SEZ=18, D=8 -> SAZ=10\n- V2: SEZ=10, D=6 -> SAZ=4\n- V3: SEZ=10, D=2 -> SAZ=8\n- V1: SEZ=min(4, 8)=4, D=4 -> SAZ=0\n\n3. Pufferzeiten:\n- V1: GP = 0 - 0 = 0, FP = 0\n- V2: GP = 4 - 4 = 0, FP = 0\n- V3: GP = 8 - 4 = 4 Tage, FP = 10 - 6 = 4 Tage\n- V4: GP = 10 - 10 = 0, FP = 0\n\n4. Kritischer Pfad:\nV1 -> V2 -> V4 mit Gesamtpuffer GP = 0 und einer Projektdauer von 18 Tagen.",
        "explanation": "Vollständige Netzplanberechnung nach DIN 69900 mit 7-teiligem Knoten, Vorwärts- und Rückwärtsrechnung sowie Bestimmung des Kritischen Pfads."
    }
];
