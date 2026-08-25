# Lernzettel: Wirtschaftlichkeit, Verträge & Cloud (LF 1, 6)

Dieses Dokument fasst die wichtigsten Grundlagen zu kaufmännischen Rechnungen, Vertragsstörungen und Cloud-Diensten zusammen, die in der AP1-Prüfung abgefragt werden.

---

## 1. Wirtschaftlichkeitsanalysen

### Nutzwertanalyse (NWA)
Wird verwendet, um Angebote anhand qualitativer und quantitativer Kriterien zu bewerten.
*   **Schritte:**
    1.  Festlegen der Bewertungskriterien.
    2.  Gewichten der Kriterien (Summe der Gewichte muss 100 % bzw. 1,0 ergeben).
    3.  Bewerten der Kriterien für jedes Angebot (z. B. Punkte von 1 bis 10).
    4.  Berechnung: Gewicht × Punkte = Teilwert.
    5.  Die Teilwerte addieren. Das Angebot mit dem höchsten Gesamtwert gewinnt.

### Amortisationsrechnung
Gibt an, nach welcher Zeit die Anschaffungskosten einer Investition durch die damit erzielten Einsparungen oder Erträge wieder eingespielt sind.
$$\text{Amortisationszeit} = \frac{\text{Anschaffungskosten}}{\text{jährliche Einsparung} \text{ (oder jährlicher Gewinn)}}$$

---

## 2. Vertragsrecht & Leistungsstörungen

### Der zweiseitige Handelskauf (§ 377 HGB)
Kauft ein Kaufmann von einem anderen Kaufmann Waren (B2B), gilt die **unverzügliche Untersuchungs- und Rügepflicht**:
*   **Ablauf:** Der Käufer muss die Ware sofort nach Lieferung auf Mängel untersuchen.
*   **Offener Mangel:** Ein offensichtlicher Mangel (z. B. falsche RAM-Größe, Gehäuseschaden) muss **unverzüglich** (i. d. R. innerhalb weniger Tage) schriftlich gerügt werden.
*   **Verdeckter Mangel:** Ein Mangel, der erst später auffällt (z. B. Festplattenausfall nach einer Woche Betrieb), muss unverzüglich nach der Entdeckung gerügt werden.
*   **Rechtsfolge bei Versäumnis:** Rüstet der Käufer nicht rechtzeitig, gilt die Ware als genehmigt. Alle Gewährleistungsansprüche für diesen Mangel gehen verloren!

### Lieferungsverzug
Wenn der Verkäufer nicht rechtzeitig liefert.
*   Ist ein kalendermäßig bestimmter Liefertermin vereinbart (Fixkauf/Terminkauf, z. B. „Lieferung am 06. November“), gerät der Lieferant automatisch mit Ablauf des Tages in Verzug – eine Mahnung ist nicht notwendig.

---

## 3. Cloud-Modelle (SaaS, PaaS, IaaS)

In der AP1 musst du erklären können, was die verschiedenen Dienstleistungsmodelle umfassen und wer wofür verantwortlich ist:

*   **IaaS (Infrastructure as a Service):** Der Provider stellt nur die physische bzw. virtuelle Infrastruktur (Server, Festplatten, Netzwerkkomponenten). Der Kunde muss das Betriebssystem installieren, absichern und seine Software verwalten.
*   **PaaS (Platform as a Service):** Der Provider stellt die Plattform inklusive Betriebssystem und Laufzeitumgebung (z. B. Java-Laufzeitumgebung oder SQL-Datenbank). Der Kunde lädt nur noch seine Programme und Daten hoch (z. B. Webentwickler, die Code hochladen).
*   **SaaS (Software as a Service):** Der Provider stellt die komplette Softwareanwendung zur Verfügung (z. B. Office 365, Google Docs). Der Kunde muss nichts installieren oder warten, er nutzt das Programm einfach über das Web.

### Cloud-Vorteile gegenüber lokalem Rechenzentrum:
1.  **Skalierbarkeit (Elastizität):** Ressourcen (CPU, RAM, Speicher) können per Klick oder automatisch hoch- und runtergefahren werden. Lokal müsste erst Hardware gekauft und eingebaut werden.
2.  **Kostenreduktion:** Keine hohen Investitionskosten (Capex) für eigene Hardware. Abrechnung erfolgt nach Nutzung (Pay-as-you-go / Opex).
3.  **Zeiteinsparung:** Schnelle Bereitstellung von Systemen ohne Beschaffungs- und Einrichtungszeiten.
