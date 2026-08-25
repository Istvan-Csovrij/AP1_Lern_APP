# Lernzettel: Netzwerkgrundlagen (LF 3)

Dieses Dokument fasst die wichtigsten netzwerktechnischen Grundlagen zusammen, die regelmäßig in der AP1-Prüfung abgefragt werden.

---

## 1. IP-Adressierung & Subnetting

In der AP1 wird fast immer ein Subnetz berechnet. Hier sind die Kernkonzepte:

### Begriffe
*   **IP-Adresse:** Logische Adresse eines Geräts (z. B. `192.168.1.50`).
*   **Subnetzmaske:** Bestimmt, welcher Teil der IP-Adresse das Netzwerk (Netzwerk-ID) und welcher den Host (Host-ID) identifiziert (z. B. `255.255.255.0` oder `/24`).
*   **Netzwerkadresse (NetID):** Die erste IP-Adresse im Netz. Identifiziert das Netz selbst. Alle Host-Bits sind `0`. (z. B. `192.168.1.0`).
*   **Broadcast-Adresse:** Die letzte IP-Adresse im Netz. Wird für Rundrufe an alle Geräte im Subnetz verwendet. Alle Host-Bits sind `1`. (z. B. `192.168.1.255`).
*   **Host-Bereich:** Alle IPs zwischen Netzwerkadresse und Broadcast-Adresse. Diese können an Computer vergeben werden (z. B. `192.168.1.1` bis `192.168.1.254`).

### Berechnung eines Subnetzes (Beispiel /24)
Gegeben: IP `192.168.10.45`, Maske `255.255.255.0`
1.  **Netzwerkadresse:** Die Maske blockiert die ersten drei Oktette (`192.168.10.`). Das letzte Oktett wird mit `0` gefüllt -> **`192.168.10.0`**.
2.  **Broadcast-Adresse:** Das letzte Oktett wird auf das Maximum `255` gesetzt -> **`192.168.10.255`**.
3.  **Host-Bereich:** Erste nutzbare IP = Netzwerkadresse + 1 (`192.168.10.1`), Letzte nutzbare IP = Broadcast-Adresse - 1 (`192.168.10.254`).

---

## 2. Das OSI-Referenzmodell

Das OSI-Modell teilt die Netzwerkkommunikation in 7 logische Schichten auf:

| Schicht (Layer) | Bezeichnung | Geräte / Protokolle | Hauptaufgabe |
| :--- | :--- | :--- | :--- |
| **7** | Anwendung (Application) | HTTP, HTTPS, FTP, SMTP, DNS | Schnittstelle zur Anwendungssoftware |
| **6** | Darstellung (Presentation) | ASCII, JPEG, Verschlüsselung | Datenformatierung & Komprimierung |
| **5** | Sitzung (Session) | NetBIOS, RPC | Steuerung der Verbindungen |
| **4** | Transport (Transport) | TCP, UDP | Ende-zu-Ende-Verbindung, Fehlerkontrolle |
| **3** | Vermittlung (Network) | IP, **Router**, ICMP | Routing, logische Adressierung (Pakete) |
| **2** | Sicherung (Data Link) | Ethernet, **Switch**, MAC-Adressen | Physikalische Adressierung (Frames) |
| **1** | Bitübertragung (Physical) | Kabel, **Hub**, Repeater | Bitübertragung, Kupfer, Glasfaser |

### Wichtige Geräte-Unterscheidungen:
*   **Hub (Schicht 1):** Sendet ankommende Daten blind an *alle* Ports weiter (hohes Kollisionsrisiko).
*   **Switch (Schicht 2):** Sendet Daten gezielt an den Port des Empfängers anhand der MAC-Adresse (effizient, teilt Kollisionsdomänen auf).
*   **Router (Schicht 3):** Verbindet verschiedene logische Netzwerke miteinander (z. B. LAN mit Internet) anhand der IP-Adresse.

---

## 3. Zentrale Protokolle

*   **DHCP (Dynamic Host Configuration Protocol):** Automatische Zuweisung von IP-Konfigurationen (IP-Adresse, Subnetzmaske, Gateway, DNS) an Clients.
*   **DNS (Domain Name System):** Namensauflösung. Übersetzt menschenlesbare Namen (z. B. `gfn.de`) in IP-Adressen (z. B. `193.99.144.80`).
*   **ARP (Address Resolution Protocol):** Übersetzt eine bekannte IP-Adresse in die dazugehörige physikalische MAC-Adresse.
*   **TCP vs. UDP:**
    *   **TCP (Transmission Control Protocol):** Verbindungsorientiert, garantiert Zustellung, fehlerkorrigierend (z. B. HTTP, FTP, E-Mail).
    *   **UDP (User Datagram Protocol):** Verbindungslos, schnell, keine Zustellungsgarantie (z. B. DNS-Anfragen, Video-Streaming, Gaming).
