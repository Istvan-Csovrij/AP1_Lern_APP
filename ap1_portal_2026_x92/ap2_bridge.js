/**
 * AP2 BRIDGE & FIAE HUB (Abschlussprüfung Teil 2)
 * Speziell für die Vorbereitung zwischen AP1 und AP2 für Fachinformatiker Anwendungsentwicklung (FIAE)
 * Prüfungsbereiche:
 * - PB 2: Planen eines Softwareproduktes (ca. 90 Min)
 * - PB 3: Entwicklung und Umsetzung von Algorithmen (ca. 90 Min)
 * - PB 4: Wirtschafts- und Sozialkunde / WiSo (ca. 60 Min)
 * Enthält: Interaktive Aufgaben, Theorie-Leitfäden, lokale PC-Prüfungen & Internet-Ressourcen.
 */

const AP2_FILES_CATALOG = [
  {
    "term": "Sommer 20",
    "name": "FIAE_FISI_WISO_S20.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 20\\FIAE_FISI_WISO_S20.pdf",
    "size": "164 KB",
    "category": "PB 4: WiSo"
  },
  {
    "term": "Sommer 20",
    "name": "FIAE_Ganzheitliche Aufgabe 1_S20.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 20\\FIAE_Ganzheitliche Aufgabe 1_S20.pdf",
    "size": "1969 KB",
    "category": "Allgemein"
  },
  {
    "term": "Sommer 21",
    "name": "Ganzheitliche Aufgabe 1 FIAE S21.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 21\\Ganzheitliche Aufgabe 1 FIAE S21.pdf",
    "size": "2017 KB",
    "category": "PB 2: Planen Softwareprodukt"
  },
  {
    "term": "Sommer 21",
    "name": "Ganzheitliche Aufgabe 2 FIAE FISI S21.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 21\\Ganzheitliche Aufgabe 2 FIAE FISI S21.pdf",
    "size": "3104 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Sommer 21",
    "name": "WISO FIAE FISI S21.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 21\\WISO FIAE FISI S21.pdf",
    "size": "1838 KB",
    "category": "PB 4: WiSo"
  },
  {
    "term": "Sommer 22",
    "name": "FIAE Entwicklung und Umsetzung von Algorithmen_S22.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 22\\FIAE Entwicklung und Umsetzung von Algorithmen_S22.pdf",
    "size": "1015 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Sommer 22",
    "name": "FIAE_Ganzheitliche Aufgabe 1_S22.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 22\\FIAE_Ganzheitliche Aufgabe 1_S22.pdf",
    "size": "3750 KB",
    "category": "PB 2: Planen Softwareprodukt"
  },
  {
    "term": "Sommer 22",
    "name": "FIAE_Ganzheitliche Aufgabe 2_S22.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 22\\FIAE_Ganzheitliche Aufgabe 2_S22.pdf",
    "size": "5127 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Sommer 22",
    "name": "FIAE_Planen eines Softwareproduktes_S22.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 22\\FIAE_Planen eines Softwareproduktes_S22.pdf",
    "size": "1273 KB",
    "category": "PB 2: Planen Softwareprodukt"
  },
  {
    "term": "Sommer 22",
    "name": "WISO_FIAE_FISI_S22.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 22\\WISO_FIAE_FISI_S22.pdf",
    "size": "2710 KB",
    "category": "PB 4: WiSo"
  },
  {
    "term": "Sommer 23",
    "name": "FIAE Entwicklung und Umsetzung von Algorithmen S23.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 23\\FIAE Entwicklung und Umsetzung von Algorithmen S23.pdf",
    "size": "973 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Sommer 23",
    "name": "FIAE Hinweis zur Bearbeitung Aufgabe 2.1 S23_.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 23\\FIAE Hinweis zur Bearbeitung Aufgabe 2.1 S23_.pdf",
    "size": "766 KB",
    "category": "Allgemein"
  },
  {
    "term": "Sommer 23",
    "name": "FIAE Planen eines Softwareproduktes Aufgaben S23.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 23\\FIAE Planen eines Softwareproduktes Aufgaben S23.pdf",
    "size": "950 KB",
    "category": "PB 2: Planen Softwareprodukt"
  },
  {
    "term": "Sommer 23",
    "name": "FISI Analyse und Entwicklung von Netzwerken Aufgaben S23.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 23\\FISI Analyse und Entwicklung von Netzwerken Aufgaben S23.pdf",
    "size": "893 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Sommer 23",
    "name": "FISI Konzeption und Administration von IT-Systemen Aufgaben S23.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 23\\FISI Konzeption und Administration von IT-Systemen Aufgaben S23.pdf",
    "size": "1005 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Sommer 23",
    "name": "WiSO FISI FIAE Aufgaben S23.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 23\\WiSO FISI FIAE Aufgaben S23.pdf",
    "size": "681 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Sommer 24",
    "name": "AP 2 PB4 WiSo AUFGABEN Sommer 2024 Baden Württemberg.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 24\\AP 2 PB4 WiSo AUFGABEN Sommer 2024 Baden Württemberg.pdf",
    "size": "1314 KB",
    "category": "PB 4: WiSo"
  },
  {
    "term": "Sommer 24",
    "name": "Aufgaben FIAE FA234 Entwicklung und Umsetzung von Algorithmen.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 24\\Aufgaben FIAE FA234 Entwicklung und Umsetzung von Algorithmen.pdf",
    "size": "2863 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Sommer 24",
    "name": "Aufgaben FIAE FA234 Planen eines Softwareproduktes.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 24\\Aufgaben FIAE FA234 Planen eines Softwareproduktes.pdf",
    "size": "2012 KB",
    "category": "PB 2: Planen Softwareprodukt"
  },
  {
    "term": "Sommer 24",
    "name": "Aufgaben FISI FA235 Analyse und Entwicklung von Netzwerken.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 24\\Aufgaben FISI FA235 Analyse und Entwicklung von Netzwerken.pdf",
    "size": "2119 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Sommer 24",
    "name": "Aufgaben FISI FA235 Konzeption und Administration von IT-Systemen.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Sommer 24\\Aufgaben FISI FA235 Konzeption und Administration von IT-Systemen.pdf",
    "size": "2875 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 20-21",
    "name": "FIAE_Ganzheitliche Aufgabe 1_Winter 2020-2021.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 20-21\\FIAE_Ganzheitliche Aufgabe 1_Winter 2020-2021.pdf",
    "size": "131 KB",
    "category": "Allgemein"
  },
  {
    "term": "Winter 20-21",
    "name": "FISI_Ganzheitliche Aufgabe 1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 20-21\\FISI_Ganzheitliche Aufgabe 1.pdf",
    "size": "146 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 20-21",
    "name": "FISI_Ganzheitliche Aufgabe 1_Anlage_Datenblatt.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 20-21\\FISI_Ganzheitliche Aufgabe 1_Anlage_Datenblatt.pdf",
    "size": "1869 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 20-21",
    "name": "Ganzheitliche Aufgabe 2_Winter 2020-2021.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 20-21\\Ganzheitliche Aufgabe 2_Winter 2020-2021.pdf",
    "size": "158 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Winter 20-21",
    "name": "WISO_FIAE_FISI_Winter 2020-2021.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 20-21\\WISO_FIAE_FISI_Winter 2020-2021.pdf",
    "size": "731 KB",
    "category": "PB 4: WiSo"
  },
  {
    "term": "Winter 21-22",
    "name": "FIAE Ganzheitliche Aufgabe 1_W21-22.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 21-22\\FIAE Ganzheitliche Aufgabe 1_W21-22.pdf",
    "size": "3991 KB",
    "category": "Allgemein"
  },
  {
    "term": "Winter 21-22",
    "name": "FISI Ganzheitliche Aufgabe 1_W21-22.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 21-22\\FISI Ganzheitliche Aufgabe 1_W21-22.pdf",
    "size": "4197 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 21-22",
    "name": "Ganzheitliche Aufgabe  2_W21-22.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 21-22\\Ganzheitliche Aufgabe  2_W21-22.pdf",
    "size": "3009 KB",
    "category": "Allgemein"
  },
  {
    "term": "Winter 21-22",
    "name": "WISO_FIAE_FISI_Winter 2021-2022.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 21-22\\WISO_FIAE_FISI_Winter 2021-2022.pdf",
    "size": "2677 KB",
    "category": "PB 4: WiSo"
  },
  {
    "term": "Winter 22-23",
    "name": "FIAE Entwicklung und Umsetzung von Algorithmen.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 22-23\\FIAE Entwicklung und Umsetzung von Algorithmen.pdf",
    "size": "1984 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Winter 22-23",
    "name": "FIAE Planen eines Softwareproduktes.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 22-23\\FIAE Planen eines Softwareproduktes.pdf",
    "size": "3876 KB",
    "category": "PB 2: Planen Softwareprodukt"
  },
  {
    "term": "Winter 22-23",
    "name": "FIAE_FISI Ganzheitliche Aufgabe 2__W22-23.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 22-23\\FIAE_FISI Ganzheitliche Aufgabe 2__W22-23.pdf",
    "size": "1413 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 22-23",
    "name": "FISI Analyse und Entwicklung von Netzwerken FA 235 Aufgaben.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 22-23\\FISI Analyse und Entwicklung von Netzwerken FA 235 Aufgaben.pdf",
    "size": "2888 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 22-23",
    "name": "FISI Konzeption und Administration von IT-Systemen  FA 235 Aufgaben.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 22-23\\FISI Konzeption und Administration von IT-Systemen  FA 235 Aufgaben.pdf",
    "size": "1946 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 22-23",
    "name": "WISO FA 033-3 Aufgaben.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 22-23\\WISO FA 033-3 Aufgaben.pdf",
    "size": "2204 KB",
    "category": "PB 4: WiSo"
  },
  {
    "term": "Winter 23",
    "name": "FIAE Entwicklung und Umsetzung von Algorithmen Aufgaben.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 23\\FIAE Entwicklung und Umsetzung von Algorithmen Aufgaben.pdf",
    "size": "2000 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Winter 23",
    "name": "FIAE Planen eines Softwareproduktes Aufgaben.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 23\\FIAE Planen eines Softwareproduktes Aufgaben.pdf",
    "size": "1638 KB",
    "category": "PB 2: Planen Softwareprodukt"
  },
  {
    "term": "Winter 23",
    "name": "FISI Analyse und Entwicklung von Netzwerken Aufgaben.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 23\\FISI Analyse und Entwicklung von Netzwerken Aufgaben.pdf",
    "size": "2472 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 23",
    "name": "FISI Konzeption und Administration von IT-Systemen Aufgaben.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 23\\FISI Konzeption und Administration von IT-Systemen Aufgaben.pdf",
    "size": "1432 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 23",
    "name": "W2023_WISO_ Aufgaben_alte AO.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 23\\W2023_WISO_ Aufgaben_alte AO.pdf",
    "size": "1907 KB",
    "category": "PB 4: WiSo"
  },
  {
    "term": "Winter 23",
    "name": "W2023_WISO_ Aufgaben_neue AO.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 23\\W2023_WISO_ Aufgaben_neue AO.pdf",
    "size": "1836 KB",
    "category": "PB 4: WiSo"
  },
  {
    "term": "Winter 24",
    "name": "FIAE Entwicklung und Umsetzung von Algorithmen AUFGABEN W24.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 24\\FIAE Entwicklung und Umsetzung von Algorithmen AUFGABEN W24.pdf",
    "size": "1963 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Winter 24",
    "name": "FIAE Planung eines Softwareproduktes AUFGABEN W24.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 24\\FIAE Planung eines Softwareproduktes AUFGABEN W24.pdf",
    "size": "2206 KB",
    "category": "PB 2: Planen Softwareprodukt"
  },
  {
    "term": "Winter 24",
    "name": "FISI Analyse und Entwicklung von Netzwerken AUFGABEN W24.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 24\\FISI Analyse und Entwicklung von Netzwerken AUFGABEN W24.pdf",
    "size": "3147 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 24",
    "name": "FISI Konzeption und Administration von IT-Systemen AUFGABEN W24.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 24\\FISI Konzeption und Administration von IT-Systemen AUFGABEN W24.pdf",
    "size": "2443 KB",
    "category": "FISI Netzwerke / IT-Systeme"
  },
  {
    "term": "Winter 24",
    "name": "WiSo AUFGABEN W24.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 24\\WiSo AUFGABEN W24.pdf",
    "size": "1932 KB",
    "category": "PB 4: WiSo"
  },
  {
    "term": "Winter 24-25",
    "name": "AP 2 PB2 FIAE PlanSWProdukt AUFGABEN Winter 2024 Baden Württemberg.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 24-25\\AP 2 PB2 FIAE PlanSWProdukt AUFGABEN Winter 2024 Baden Württemberg.pdf",
    "size": "2206 KB",
    "category": "PB 2: Planen Softwareprodukt"
  },
  {
    "term": "Winter 24-25",
    "name": "AP 2 PB2 FISI KonzAdminIT-Systeme AUFGABEN Winter 2024 Baden Württemberg 1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 24-25\\AP 2 PB2 FISI KonzAdminIT-Systeme AUFGABEN Winter 2024 Baden Württemberg 1.pdf",
    "size": "2443 KB",
    "category": "PB 2: Planen Softwareprodukt"
  },
  {
    "term": "Winter 24-25",
    "name": "AP 2 PB3 FIAE Entw.Ums.Algo AUFGABEN Winter 2024 Baden Württemberg.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 24-25\\AP 2 PB3 FIAE Entw.Ums.Algo AUFGABEN Winter 2024 Baden Württemberg.pdf",
    "size": "1963 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Winter 24-25",
    "name": "AP 2 PB3 FISI AnalyEntwNetzw AUFGABEN Winter 2024 Baden Württemberg 1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 24-25\\AP 2 PB3 FISI AnalyEntwNetzw AUFGABEN Winter 2024 Baden Württemberg 1.pdf",
    "size": "3147 KB",
    "category": "PB 3: Algorithmen & Entwicklung"
  },
  {
    "term": "Winter 24-25",
    "name": "AP 2 PB4 WiSo AUFGABEN Winter 2024 Baden Württemberg.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP2\\Winter 24-25\\AP 2 PB4 WiSo AUFGABEN Winter 2024 Baden Württemberg.pdf",
    "size": "1932 KB",
    "category": "PB 4: WiSo"
  }
];

const AP1_FILES_CATALOG = [
  {
    "term": "Frühjahr 2026 (Letzte)",
    "name": "AP1_2026.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1_2026.pdf",
    "size": "598 KB",
    "category": "AP1 Aufgaben",
    "isLatest": true
  },
  {
    "term": "Frühjahr 2026 (Letzte)",
    "name": "AP1_Frühjahr_2026 2.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1_Frühjahr_2026 2.pdf",
    "size": "3.7 MB",
    "category": "AP1 Aufgaben",
    "isLatest": true
  },
  {
    "term": "Frühjahr 2026 (Letzte)",
    "name": "AP1_Frühjahr_2026_Lösung 1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1_Frühjahr_2026_Lösung 1.pdf",
    "size": "932 KB",
    "category": "AP1 Musterlösung",
    "isLatest": true
  },
  {
    "term": "Frühjahr 2026 (Letzte)",
    "name": "AP1_Herbst_2026 1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1_Herbst_2026 1.pdf",
    "size": "1.6 MB",
    "category": "AP1 Aufgaben",
    "isLatest": true
  },
  {
    "term": "Frühjahr 2026 (Letzte)",
    "name": "F26BW 3.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\PV-Vorbereitung\\Letzte-AP1-Prüfung\\Geladen-Baden-Württembergische Abschlussprüfungen AP1\\F26BW 3.pdf",
    "size": "598 KB",
    "category": "AP1 Aufgaben",
    "isLatest": true
  },
  {
    "term": "2022",
    "name": "AP1 Frühjahr 2022.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 Frühjahr 2022.pdf",
    "size": "3.8 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2022",
    "name": "AP1 Herbst 2022.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 Herbst 2022.pdf",
    "size": "5.6 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2022",
    "name": "AP1 W2022-23 1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 W2022-23 1.pdf",
    "size": "715 KB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2022",
    "name": "AP1 W2022-23 Lösung 1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 W2022-23 Lösung 1.pdf",
    "size": "1.8 MB",
    "category": "AP1 Musterlösung",
    "isLatest": false
  },
  {
    "term": "2022",
    "name": "Abschlussprüfung Winter 2022-23 AP2 PB 2 FIAE Planen eines Softwareproduktes FA 234 Aufgaben-1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\Abschlussprüfung Winter 2022-23 AP2 PB 2 FIAE Planen eines Softwareproduktes FA 234 Aufgaben-1.pdf",
    "size": "3.8 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2023",
    "name": "AP1 Frühjahr 2023.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 Frühjahr 2023.pdf",
    "size": "4.6 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2023",
    "name": "AP1 Herbst 2023.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 Herbst 2023.pdf",
    "size": "3.2 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2023",
    "name": "AP1 S2023 Lösungen.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 S2023 Lösungen.pdf",
    "size": "927 KB",
    "category": "AP1 Musterlösung",
    "isLatest": false
  },
  {
    "term": "2023",
    "name": "AP1 S2023.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 S2023.pdf",
    "size": "4.6 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2023",
    "name": "Prüfungsvorbereitung-Teil1-Europa_01.09.2023 (1) 1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\Prüfungsvorbereitung-Teil1-Europa_01.09.2023 (1) 1.pdf",
    "size": "66.6 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2024",
    "name": "24 AP1_Herbst_2024 1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\24 AP1_Herbst_2024 1.pdf",
    "size": "3.0 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2024",
    "name": "AP 1 AUFGABEN Winter 2024 Baden Württemberg.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP 1 AUFGABEN Winter 2024 Baden Württemberg.pdf",
    "size": "3.7 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2024",
    "name": "AP1 Früjahr 2024.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 Früjahr 2024.pdf",
    "size": "5.2 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2024",
    "name": "AP1 Herbst 2024.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 Herbst 2024.pdf",
    "size": "3.7 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2024",
    "name": "AP1 Herbst 2024_schriftliche_Prfg._Teil_1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 Herbst 2024_schriftliche_Prfg._Teil_1.pdf",
    "size": "227 KB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2024",
    "name": "Abschlusspruefung_Sommer_2024_Teil_2_Fachinformatiker_Anwendungsentwicklung-1.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\Abschlusspruefung_Sommer_2024_Teil_2_Fachinformatiker_Anwendungsentwicklung-1.pdf",
    "size": "4.1 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2025",
    "name": "25 AP1_frühjahr_2025.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\25 AP1_frühjahr_2025.pdf",
    "size": "2.2 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "2025",
    "name": "AP1 Frühjahr 2025.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 Frühjahr 2025.pdf",
    "size": "2.9 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "Unbekannt",
    "name": "25 AP1_Herbst 4.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\25 AP1_Herbst 4.pdf",
    "size": "6.9 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "Unbekannt",
    "name": "25 AP1_Herbst_Lösung 3.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\25 AP1_Herbst_Lösung 3.pdf",
    "size": "1.2 MB",
    "category": "AP1 Musterlösung",
    "isLatest": false
  },
  {
    "term": "Unbekannt",
    "name": "AP1 Beispielaufgabe Lösungen.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 Beispielaufgabe Lösungen.pdf",
    "size": "454 KB",
    "category": "AP1 Musterlösung",
    "isLatest": false
  },
  {
    "term": "Unbekannt",
    "name": "AP1 Beispielaufgabe.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\AP1 Beispielaufgabe.pdf",
    "size": "552 KB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "Unbekannt",
    "name": "H22HS2.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\H22HS2.pdf",
    "size": "625 KB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  },
  {
    "term": "Unbekannt",
    "name": "H22HS3.pdf",
    "path": "C:\\Users\\Student\\OneDrive - GFN GmbH (EDU)\\Dokumente\\ALEX-AP1_AP2\\Baden-Württembergische Abschlussprüfungen AP1\\H22HS3.pdf",
    "size": "1.9 MB",
    "category": "AP1 Aufgaben",
    "isLatest": false
  }
];

// Combined catalog of both AP1 and AP2 exam documents
const ALL_EXAM_FILES = [
  ...AP1_FILES_CATALOG.map(f => ({ ...f, examType: 'AP1' })),
  ...AP2_FILES_CATALOG.map(f => ({ ...f, examType: 'AP2' }))
];


// State for active tab in AP2 modal
let currentAp2Tab = "pb2";

// Open the AP2 Bridge Modal
function openAp2BridgeModal(targetTab) {
    const modal = document.getElementById("ap2-bridge-modal");
    if (!modal) return;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    if (targetTab) {
        switchAp2Tab(targetTab);
    } else {
        switchAp2Tab(currentAp2Tab || "pb2");
    }
}

// Close the AP2 Bridge Modal
function closeAp2BridgeModal() {
    const modal = document.getElementById("ap2-bridge-modal");
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "";
}

// Switch between tabs in AP2 Hub
function switchAp2Tab(tabId) {
    currentAp2Tab = tabId;
    
    // Update tab button classes
    document.querySelectorAll(".ap2-nav-tab").forEach(btn => {
        if (btn.dataset.tab === tabId) {
            btn.classList.add("active");
            btn.style.borderBottomColor = "#6366f1";
            btn.style.color = "#4338ca";
            btn.style.fontWeight = "700";
        } else {
            btn.classList.remove("active");
            btn.style.borderBottomColor = "transparent";
            btn.style.color = "#64748b";
            btn.style.fontWeight = "600";
        }
    });

    // Update tab content displays
    document.querySelectorAll(".ap2-tab-content").forEach(pane => {
        pane.style.display = (pane.id === "ap2-tab-" + tabId) ? "block" : "none";
    });

    // If local files tab, render file list
    if (tabId === "files") {
        renderAp2FilesList();
    }
}

// Toggle collapsible solutions
function toggleAp2Solution(solutionId) {
    const el = document.getElementById(solutionId);
    const btn = document.getElementById(solutionId + "-btn");
    if (!el) return;

    if (el.style.display === "none" || !el.style.display) {
        el.style.display = "block";
        if (btn) btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Musterlösung ausblenden';
    } else {
        el.style.display = "none";
        if (btn) btn.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Musterlösung & Korrekturhinweise anzeigen';
    }
}

// Copy file path to clipboard
function copyAp2FilePath(path, btnEl) {
    navigator.clipboard.writeText(path).then(() => {
        const originalText = btnEl.innerHTML;
        btnEl.innerHTML = '<i class="fa-solid fa-check"></i> Pfad kopiert!';
        btnEl.style.background = "#10b981";
        btnEl.style.color = "white";
        setTimeout(() => {
            btnEl.innerHTML = originalText;
            btnEl.style.background = "";
            btnEl.style.color = "";
        }, 2000);
    }).catch(err => {
        alert("Pfad: " + path);
    });
}

// Render the list of local AP2 exam files with live search & filter
function renderAp2FilesList() {
    const container = document.getElementById("ap2-files-table-body");
    const searchInput = document.getElementById("ap2-files-search");
    const filterSelect = document.getElementById("ap2-files-filter");
    if (!container) return;

    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const filter = filterSelect ? filterSelect.value : "all";

    const catalog = (typeof ALL_EXAM_FILES !== "undefined") ? ALL_EXAM_FILES : AP2_FILES_CATALOG;

    const filtered = catalog.filter(f => {
        const matchesQuery = f.name.toLowerCase().includes(query) || f.term.toLowerCase().includes(query) || (f.category && f.category.toLowerCase().includes(query));
        let matchesCategory = true;
        if (filter === "all") {
            matchesCategory = true;
        } else if (filter === "letzte") {
            matchesCategory = !!f.isLatest;
        } else if (filter === "ap1") {
            matchesCategory = (f.examType === "AP1");
        } else if (filter === "fiae") {
            matchesCategory = (f.category && (f.category.includes("PB 2") || f.category.includes("PB 3")));
        } else {
            matchesCategory = (f.category && f.category.includes(filter));
        }
        return matchesQuery && matchesCategory;
    });

    const countBadge = document.getElementById("ap2-files-count");
    if (countBadge) countBadge.textContent = `${filtered.length} von ${catalog.length} Dateien`;

    if (filtered.length === 0) {
        container.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 2rem; color: #64748b;">
                    <i class="fa-solid fa-file-circle-xmark" style="font-size: 2rem; margin-bottom: 0.5rem; color: #94a3b8;"></i>
                    <p style="margin: 0; font-weight: 600;">Keine Prüfungsdateien für den gewählten Filter gefunden.</p>
                </td>
            </tr>
        `;
        return;
    }

    container.innerHTML = filtered.map((f, i) => {
        let badgeColor = "#6366f1";
        let badgeBg = "#eef2ff";
        if (f.isLatest) {
            badgeColor = "#b45309"; badgeBg = "#fef3c7";
        } else if (f.category && f.category.includes("PB 2")) {
            badgeColor = "#4338ca"; badgeBg = "#e0e7ff";
        } else if (f.category && f.category.includes("PB 3")) {
            badgeColor = "#0e7490"; badgeBg = "#cffafe";
        } else if (f.category && f.category.includes("WiSo")) {
            badgeColor = "#be185d"; badgeBg = "#fce7f3";
        } else if (f.category && f.category.includes("Musterlösung")) {
            badgeColor = "#047857"; badgeBg = "#d1fae5";
        } else if (f.category && f.category.includes("FISI")) {
            badgeColor = "#b45309"; badgeBg = "#fef3c7";
        } else if (f.examType === "AP1") {
            badgeColor = "#6d28d9"; badgeBg = "#ede9fe";
        }

        const safePath = f.path.replace(/'/g, "\\'");
        const fileUrl = "file:///" + encodeURI(f.path.replace(/\\/g, "/"));

        const isLatestHighlight = f.isLatest ? "background-color: #fffdf5;" : "";
        const latestStar = f.isLatest ? '<span style="background: #f59e0b; color: white; font-size: 0.7rem; font-weight: 800; padding: 0.1rem 0.35rem; border-radius: 4px; margin-right: 0.3rem;">⭐ NEU</span>' : '';

        const interactiveBtn = (f.isLatest || (f.name && f.name.includes("2026"))) ? `
            <button class="btn" onclick="closeAp2BridgeModal(); startExamMode(false, 'exam_24');" title="Diese Prüfung interaktiv mit Split-Screen und Anlagen lösen" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; border-radius: 6px; cursor: pointer; border: none; background: #10b981; color: white; margin-left: 0.3rem; font-weight: 700;">
                <i class="fa-solid fa-play"></i> Interaktiv
            </button>
        ` : '';

        return `
            <tr style="border-bottom: 1px solid #e2e8f0; font-size: 0.88rem; ${isLatestHighlight}">
                <td style="padding: 0.75rem 0.6rem; font-weight: 700; color: #334155; white-space: nowrap;">
                    ${latestStar}${f.term}
                </td>
                <td style="padding: 0.75rem 0.6rem;">
                    <span style="display: inline-block; padding: 0.2rem 0.55rem; border-radius: 999px; font-size: 0.75rem; font-weight: 700; color: ${badgeColor}; background: ${badgeBg};">
                        ${f.category}
                    </span>
                </td>
                <td style="padding: 0.75rem 0.6rem; font-weight: 600; color: #0f172a;">
                    <i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 0.35rem;"></i> ${f.name}
                </td>
                <td style="padding: 0.75rem 0.6rem; color: #64748b; font-size: 0.82rem; white-space: nowrap;">
                    ${f.size}
                </td>
                <td style="padding: 0.75rem 0.6rem; text-align: right; white-space: nowrap;">
                    <button class="btn btn-secondary" onclick="copyAp2FilePath('${safePath}', this)" title="Vollständigen Windows-Dateipfad kopieren" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; border-radius: 6px; cursor: pointer; border: 1px solid #cbd5e1; background: #f8fafc;">
                        <i class="fa-solid fa-copy"></i> Pfad
                    </button>
                    <a href="${fileUrl}" target="_blank" class="btn" title="Datei im Browser / PDF-Viewer öffnen" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; border-radius: 6px; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem; background: #4f46e5; color: white; margin-left: 0.3rem;">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Öffnen
                    </a>
                    ${interactiveBtn}
                </td>
            </tr>
        `;
    }).join("");
}

// Initialize global window functions
window.openAp2BridgeModal = openAp2BridgeModal;
window.closeAp2BridgeModal = closeAp2BridgeModal;
window.switchAp2Tab = switchAp2Tab;
window.toggleAp2Solution = toggleAp2Solution;
window.copyAp2FilePath = copyAp2FilePath;
window.renderAp2FilesList = renderAp2FilesList;
