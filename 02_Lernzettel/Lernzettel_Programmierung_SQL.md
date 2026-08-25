# Lernzettel: Programmierung, SQL & UML (LF 5)

Dieses Dokument fasst die wichtigsten Grundlagen zu logischen Abläufen, Datenbank-Abfragen und Systemmodellierungen zusammen, die in der AP1-Prüfung verlangt werden.

---

## 1. Programmierung & Pseudocode

In der AP1 wird kein konkreter Programmiercode (wie Java oder C#) verlangt, sondern logischer **Pseudocode** oder ein **Nassi-Shneiderman-Struktogramm**.

### Kontrollstrukturen in Pseudocode
*   **Sequenz:** Lineare Abfolge von Befehlen.
*   **Verzweigung (Auswahl):**
    ```text
    IF bedingung THEN
        anweisung1
    ELSE
        anweisung2
    END IF
    ```
*   **Schleifen (Wiederholungen):**
    *   *Kopfgesteuert (WHILE):* Bedingung wird *vor* der Ausführung geprüft. Kann 0-mal laufen.
        ```text
        WHILE bedingung DO
            anweisungen
        END WHILE
        ```
    *   *Zählschleife (FOR):* Läuft eine feste Anzahl an Durchläufen.
        ```text
        FOR i = 1 TO 10 DO
            anweisungen
        END FOR
        ```

---

## 2. Datenbanken & SQL

SQL-Abfragen sind fester Bestandteil jeder AP1-Prüfung. Du musst Daten abfragen, filtern und Tabellen verknüpfen können.

### Grundstruktur einer SELECT-Abfrage
```sql
SELECT Spalte1, Spalte2
FROM Tabelle1
WHERE Bedingung
ORDER BY Spalte1 ASC|DESC;
```

### Wichtige SQL-Schlüsselwörter:
*   **SELECT:** Bestimmt, welche Spalten angezeigt werden. (`*` für alle Spalten).
*   **FROM:** Gibt die Quelltabelle(n) an.
*   **WHERE:** Filtert die Zeilen anhand einer Bedingung (z. B. `Ort = 'Stuttgart'`).
*   **AND / OR / NOT:** Logische Verknüpfungen von Bedingungen.
*   **LIKE:** Mustersuche mit Wildcards (`%` für beliebige Zeichen, z. B. `Nachname LIKE 'M%'`).
*   **ORDER BY:** Sortiert die Ausgabe (`ASC` für aufsteigend, `DESC` für absteigend).
*   **GROUP BY:** Gruppiert Zeilen, um mathematische Funktionen anzuwenden (z. B. `COUNT()`, `SUM()`, `AVG()`).
*   **INNER JOIN:** Verbindet zwei Tabellen über eine gemeinsame ID.
    ```sql
    SELECT k.Name, b.Bestellnummer
    FROM Kunden k
    INNER JOIN Bestellungen b ON k.KundenID = b.KundenID;
    ```

---

## 3. UML (Unified Modeling Language)

UML-Diagramme dienen der Visualisierung von Softwaresystemen. Die wichtigsten Diagrammtypen für die AP1 sind:

### Use Case Diagramm (Anwendungsfalldiagramm)
Zeigt das Verhalten des Systems aus Anwendersicht.
*   **Akteur (Mensch/System):** Wird als Strichmännchen dargestellt.
*   **Use Case (Anwendungsfall):** Wird als Ellipse gezeichnet.
*   **Systemgrenze:** Ein Kasten um die Use Cases herum.
*   **Beziehungen:**
    *   `<<include>>`: Ein Anwendungsfall schließt einen anderen zwingend mit ein (z. B. "Geld abheben" schließt "PIN eingeben" mit ein).
    *   `<<extend>>`: Ein Anwendungsfall erweitert einen anderen unter bestimmten Bedingungen (z. B. "Beleg drucken" erweitert "Geld abheben" optional).

### Klassendiagramm
Visualisiert die Struktur der Klassen und deren Beziehungen zueinander.
*   **Klassendarstellung:** Kasten mit 3 Bereichen:
    1.  Klassenname
    2.  Attribute (z. B. `- name: String`)
    3.  Methoden (z. B. `+ berechneWert(): Double`)
*   **Sichtbarkeiten:**
    *   `-` Private (nur innerhalb der Klasse sichtbar)
    *   `+` Public (überall sichtbar)
    *   `#` Protected (nur in der Klasse und deren Unterklassen sichtbar)
*   **Multiplizitäten (Kardinalitäten):** Gibt an, wie viele Objekte miteinander in Beziehung stehen (z. B. `1`, `0..*`, `1..*`).
*   **Beziehungstypen:**
    *   *Assoziation:* Einfache Verbindungslinie zwischen Klassen.
    *   *Generalisierung:* Vererbung (Pfeil mit weißer, geschlossener Spitze zeigt zur Elternklasse).
