# 🤖 IHK-Lernzettel: Cyber-physische Systeme (CPS) & Industrie 4.0 (LF 7)

---

## 1. Was ist ein Cyber-physisches System (CPS)?
Ein **Cyber-physisches System (CPS)** ist die enge Verschmelzung von **physischen Objekten/Mechanik** (Maschinen, Gebäude, Fahrzeuge) und **informationstechnischen Systemen** (Software, Rechenleistung, Netzwerke). 

### Das EVA-Prinzip im CPS:
```
           +------------------------------------------+
           |           Physische Umwelt / Maschine     |
           +------------------------------------------+
                 ▲                                  │
      (Physikalische Wirkung)             (Physikalische Größe)
                 │                                  ▼
         +---------------+                  +---------------+
         |     AKTOR     |                  |    SENSOR     |
         +---------------+                  +---------------+
                 ▲                                  │
           (Stellgröße)                       (Messsignal)
                 │                                  ▼
           +------------------------------------------+
           |       Cyber-Welt (MCU / SPS / Edge / KI)  |
           |         Regelkreis & Datenverarbeitung    |
           +------------------------------------------+
```

---

## 2. Sensoren vs. Aktoren (IHK-Klassiker!)

| Eigenschaft | Sensor (Messwertaufnehmer) | Aktor / Aktuator (Stellglied) |
| :--- | :--- | :--- |
| **Funktion** | Wandelt eine **physikalische Größe** in ein **elektrisches / digitales Signal** um. | Wandelt ein **elektrisches Steuersignal** in eine **mechanische Bewegung / physikalische Wirkung** um. |
| **Rolle im System** | „Sinnesorgan“ des Systems | „Muskel / Werkzeug“ des Systems |
| **Typische Beispiele** | • PT100 / NTC (Temperatur)<br>• Ultraschall / Infrarot (Abstand)<br>• Lichtschranke (Präsenz)<br>• Dehnungsmessstreifen (Druck/Kraft)<br>• Hall-Sensor (Drehzahl/Magnetfeld)<br>• Feuchtigkeitssensor (Boden/Luft) | • Elektromotor / Schrittmotor<br>• Magnetventil / Hydraulikventil<br>• Relais / Halbleiterschalter<br>• Heizspirale / Heizelement<br>• Signalleuchte / LED / Summer |

---

## 3. Der geschlossene Regelkreis (Regelungstechnik)

In fast jeder IHK-Aufgabe zu CPS muss der Regelkreis erklärt werden:
1. **Regelgröße (Istwert)**: Der vom Sensor tatsächlich gemessene aktuelle Zustand (z. B. Raumtemperatur = 18 °C).
2. **Führungsgröße (Sollwert)**: Der gewünschte Zielwert (z. B. Zieltemperatur = 21 °C).
3. **Regelabweichung**: Differenz zwischen Sollwert und Istwert ($e = \text{Soll} - \text{Ist} = 3\text{ °C}$).
4. **Regler (Cyber-Einheit)**: Berechnet anhand der Regelabweichung die notwendige Gegenmaßnahme (z. B. PID-Algorithmus auf Mikrocontroller/SPS).
5. **Stellgröße**: Der berechnete Ausgangswert des Reglers (z. B. Ventil auf 75 % Öffnung oder PWM-Tastverhältnis).
6. **Stellglied (Aktor)**: Das ausführende Bauteil (z. B. Heizungsventil-Stellmotor), das den Zufluss physisch verändert.
7. **Regelstrecke**: Das zu regelnde System (z. B. der zu beheizende Raum).

---

## 4. Hardware-Vergleich: MCU vs. SBC vs. SPS

| Merkmal | Mikrocontroller (MCU) | Single Board Computer (SBC) | SPS (PLC) |
| :--- | :--- | :--- | :--- |
| **Beispiel** | Arduino Uno, ESP32, STM32 | Raspberry Pi, BeagleBone | Siemens S7-1200 / 1500, Beckhoff |
| **Betriebssystem** | Keines („Bare Metal“) oder schlankes RTOS | Vollwertiges OS (z. B. Linux, Android) | Proprietäres Echtzeit-Echtzeitbetriebssystem |
| **Bootzeit** | Millisekunden (sofort startklar) | 10–40 Sekunden (OS bootet) | Wenige Sekunden |
| **Echtzeitfähigkeit** | **Harte Echtzeit** (deterministisch) | **Weiche Echtzeit** (durch Linux-Jitter verzögert) | **Harte Echtzeit** (zyklischer OB1-Takt) |
| **Energieverbrauch** | Sehr gering (Milliwatt, Batteriebetrieb) | Mittel bis hoch (5–15 Watt) | Industrie-Versorgung (24 V DC) |
| **Hauptzweck** | Direkte Sensor-/Aktor-Steuerung, Pins (GPIO, PWM, I2C, SPI) | Edge-Gateway, Bildverarbeitung, Webserver, Datenaggregation | Zuverlässige Steuerung von Industriemaschinen in rauer Umgebung |

---

## 5. IoT-Kommunikation: MQTT & OPC UA

### A) MQTT (Message Queuing Telemetry Transport)
* **Prinzip**: **Publish-Subscribe-Architektur** über einen zentralen **Broker**.
* **Clients kommunizieren nie direkt miteinander**:
  * **Publisher**: Sendet Daten unter einem hierarchischen Thema (**Topic**), z. B. `fabrik/halle3/linie1/temperatur`.
  * **Broker**: Empfängt Nachrichten und verteilt sie an alle angemeldeten Empfänger.
  * **Subscriber**: Abonniert Topics (z. B. `fabrik/+/+/temperatur`) und empfängt die Werte.
* **Vorteile**: Extrem schlanker Header (ab 2 Byte!), geringe Bandbreite, ideal für instabile Funknetze.

#### Die 3 QoS-Stufen (Quality of Service) – Prüfungsgarantie!
1. **QoS 0 („At most once“ / Maximal einmal)**:
   * *Fire and Forget*. Kein ACK, keine Bestätigung.
   * Nachricht kann bei Netzunterbrechung verloren gehen.
2. **QoS 1 („At least once“ / Mindestens einmal)**:
   * Broker sendet `PUBACK` zurück. Bleibt das ACK aus, sendet der Client erneut.
   * **Nachteil**: Dubletten (doppelte Nachrichten) möglich!
3. **QoS 2 („Exactly once“ / Genau einmal)**:
   * 4-Wege-Handshake (`PUBLISH` -> `PUBREC` -> `PUBREL` -> `PUBCOMP`).
   * **Höchste Sicherheit**: Garantiert kein Datenverlust und keine Dubletten, aber höchster Netzwerk-Overhead.

---

### B) OPC UA (Open Platform Communications Unified Architecture)
* **Der Standard der Industrie 4.0** für Machine-to-Machine (M2M).
* **Vorteile**:
  * **Plattform- und herstellerunabhängig** (läuft auf SPS, Linux, Windows, Cloud).
  * **Semantisches Datenmodell**: Maschinen verstehen nicht nur rohe Zahlen, sondern Bedeutung und Kontext der Daten.
  * **Integrierte Sicherheit (Security by Design)**: Authentifizierung über X.509-Zertifikate, TLS-Verschlüsselung, granulare Zugriffsrechte.

---

## 6. Drahtlose Übertragungstechnologien im IoT

| Technologie | Reichweite | Datenrate | Energieverbrauch | Typischer Einsatzort |
| :--- | :--- | :--- | :--- | :--- |
| **LoRaWAN** | Bis zu 10–15 km | Sehr gering (Bit/s bis kbit/s) | Extrem gering (Batterie hält Jahre) | Smarte Landwirtschaft, Umweltsensoren, Smart City (Parkplatz-Sensoren) |
| **Bluetooth LE (BLE)** | Bis ca. 10–30 m | Mittel (1–2 Mbit/s) | Gering | Wearables, Indoor-Asset-Tracking, Sensor-Nahfeld |
| **ZigBee** | Bis ca. 50 m (Mesh) | Gering (250 kbit/s) | Gering | Smart Home (Leuchtmittel, Schalter) durch selbstheilendes Mesh-Netz |
| **5G (URLLC)** | Mobilfunkzelle | Sehr hoch (> 1 Gbit/s) | Mittel | Autonome Flurförderzeuge (AGVs), mobile Industrieroboter mit < 1 ms Latenz |

---

## 7. Echtzeitfähigkeit (Real-Time)

* **Harte Echtzeit (Hard Real-Time)**:
  * Das Einhalten der Frist (*Deadline*) ist lebensnotwendig. 
  * Eine verspätete Antwort ist wertlos und gilt als **tödlicher Systemfehler**.
  * *Beispiele*: Airbag-Zündung, Not-Aus-Schalter, ABS-Bremsassistent.
* **Weiche Echtzeit (Soft Real-Time)**:
  * Das Überschreiten einer Frist mindert lediglich die System- oder Dienstqualität, führt aber nicht zum Katastrophenfall.
  * *Beispiele*: Video-Livestream, Aktualisierung eines Monitoring-Dashboards.

---

## 8. Safety vs. Security (Wichtigster begrifflicher Unterschied!)

| Begriff | Deutsche Bezeichnung | Schutzrichtung | Typische Maßnahmen |
| :--- | :--- | :--- | :--- |
| **Safety** | **Funktionale Sicherheit** | **Schutz von Mensch & Umwelt vor der Maschine.** | Not-Aus-Schalter, redundante Sensoren, Schutzzäune, Lichtgitter, CE-Konformität |
| **Security** | **IT- / Cyber-Sicherheit** | **Schutz der Maschine / des IT-Systems vor Angriffen von außen.** | Firewalls, Netzwerksegmentierung (IEC 62443), Verschlüsselung, MFA, Zertifikate |

---

## 9. Industrie 4.0: Digital Twin & Predictive Maintenance

* **Digitaler Zwilling (Digital Twin)**:
  * Ein dynamisches, virtuelles Software-Abbild einer physischen Maschine oder eines Prozesses.
  * Wird in Echtzeit über Sensordaten mit dem realen Zustand synchronisiert.
  * Nutzwert: Simulationen vor der Inbetriebnahme, Stresstests ohne Maschinenschaden, Restlebensdauer-Vorhersagen.
* **Predictive Maintenance (Vorausschauende Wartung)**:
  * Statt Bauteile erst nach dem Defekt (reaktiv) oder starr nach festen Intervallen (präventiv) zu tauschen, werden Live-Sensordaten (Körperschall, Vibration, Temperatur, Ölqualität) mit Algorithmen analysiert.
  * Wartungen erfolgen **präzise kurz vor dem Versagen** -> spart Kosten und verhindert ungeplante Stillstände.

* **Edge Computing**:
  * Vorverarbeitung und zeitkritische Auswertung der Sensordaten direkt vor Ort an der Maschine (am „Rand“ des Netzwerks).
  * Vorteil: Extrem geringe Latenz, Schutz von Geschäftsgeheimnissen, Anlage läuft auch bei Internet-Ausfall autonom weiter.
