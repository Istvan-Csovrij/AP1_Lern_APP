# Lernzettel: Datenschutz, Backup & Sicherheit (LF 4)

Dieses Dokument fasst die wichtigsten Grundlagen zu Backup-Strategien, IT-Sicherheit und Datenschutz zusammen, die in der AP1-Prüfung verlangt werden.

---

## 1. Datensicherungsarten (Backup-Typen)

In der Prüfung wird oft verlangt, die Vor- und Nachteile der verschiedenen Backup-Arten zu erläutern:

| Backup-Art | Beschreibung | Vorteile | Nachteile |
| :--- | :--- | :--- | :--- |
| **Vollsicherung (Full)** | Sichert alle ausgewählten Daten komplett ab (Archivbit wird gelöscht). | Sehr einfache Wiederherstellung (nur ein Medium nötig). | Hoher Speicherbedarf; dauert lange. |
| **Inkrementell (Incremental)** | Sichert nur die Änderungen seit der *letzten* Sicherung (egal ob Voll- oder inkrementelle Sicherung). Archivbit wird danach gelöscht. | Geringer Speicherbedarf; geht sehr schnell. | Wiederherstellung ist aufwendig (Vollbackup + alle inkrementellen Teile nacheinander nötig). |
| **Differenziell (Differential)** | Sichert alle Änderungen seit dem *letzten Vollbackup*. Archivbit wird *nicht* gelöscht. | Schneller als Vollbackup; Wiederherstellung einfacher als inkrementell. | Speicherbedarf wächst täglich an, da immer mehr Änderungen akkumuliert werden. |

---

## 2. Backup-Strategien & Technologien

### Das Großvater-Vater-Sohn-Prinzip (Generationenprinzip)
Dient der langfristigen Absicherung durch rotierende Medien:
*   **Sohn (Täglich):** Werktags (Montag–Donnerstag) wird eine tägliche Sicherung gemacht. Die Medien werden nach einer Woche überschrieben.
*   **Vater (Wöchentlich):** Am Wochenende (meist freitags) wird eine Vollsicherung erstellt. Die Medien werden nach einem Monat überschrieben.
*   **Großvater (Monatlich):** Am Monatsende wird eine Vollsicherung erstellt. Diese Medien werden jahrelang archiviert.

### Revisionssichere Archivierung
Vorschriften für geschäftliche Rechnungs- und Buchhaltungsdaten (z. B. nach GoBD):
1.  **Unveränderbarkeit (Ordnungsmäßigkeit):** Daten dürfen nachträglich nicht manipuliert werden können (WORM-Medien, Signaturen).
2.  **Vollständigkeit:** Keine Löcher in der Erfassung.
3.  **Richtigkeit:** Entspricht dem Originalzustand.
4.  **Wiederfindbarkeit:** Schneller Zugriff und lesbares Format über die gesetzliche Aufbewahrungsfrist hinweg (meist 10 Jahre).

### LTO-Magnetbänder & LTFS
*   **LTO (Linear Tape Open):** Physischer Standard für Magnetbänder. Sehr kostengünstig pro Terabyte (TCO bis zu 86 % günstiger als Festplattenspeicher).
*   **LTFS (Linear Tape File System):** Ermöglicht es, ein Magnetband wie ein normales Verzeichnis (Festplatte) im Betriebssystem anzuzeigen. Dateien können einfach per Drag-and-Drop verschoben werden.

---

## 3. IT-Sicherheitsziele (Die CIA-Triade)

*   **Vertraulichkeit (Confidentiality):** Nur Berechtigte dürfen Daten lesen (z. B. durch Zugriffsrechte, Verschlüsselung).
*   **Integrität (Integrity):** Daten dürfen nicht unbemerkt verändert werden (z. B. durch Prüfsummen, Signaturen).
*   **Verfügbarkeit (Availability):** IT-Systeme und Daten müssen bereitstehen, wenn sie gebraucht werden (z. B. durch Redundanz, USV, Backups).

---

## 4. Kryptografie & Verschlüsselung

*   **Symmetrische Verschlüsselung:** Ein einziger, geheimer Schlüssel wird sowohl zum Verschlüsseln als auch zum Entschlüsseln verwendet (z. B. AES).
    *   *Problem:* Der Schlüssel muss sicher an den Empfänger übertragen werden.
*   **Asymmetrische Verschlüsselung:** Es wird ein Schlüsselpaar verwendet (z. B. RSA).
    *   *Public Key (öffentlich):* Darf jeder haben, wird zum Verschlüsseln genutzt.
    *   *Private Key (privat):* Bleibt streng geheim, wird zum Entschlüsseln genutzt.
*   **Hybride Verschlüsselung:** Kombination aus beiden Systemen (z. B. bei HTTPS/SSL).
    *   Die eigentlichen Nutzdaten werden schnell und effizient symmetrisch verschlüsselt.
    *   Der symmetrische Sitzungsschlüssel (Session Key) wird einmalig sicher asymmetrisch übertragen.
