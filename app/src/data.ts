import type { Gear, Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "bgv1", name: "Sparring Handschuhe", line: "Nakhon", price: "149,00",
    sizes: ["10 oz", "12 oz", "14 oz", "16 oz"], badge: "Neu", cat: "Muay Thai",
    blurb: "Handgenäht aus vollnarbigem Rindsleder, drei Schaumlagen, verstärkte Daumenkappe. Für täglichen Sparringsbetrieb gebaut.",
    long: "In Bangkok von Hand gefertigt. Die Schaumlagen sind so geschichtet, dass der Schlag über die Handfläche verteilt wird — bei 16 oz genug Volumen für Sparring, bei 10 oz kompakt genug für den Wettkampf. Das Klettband ist 12 cm lang und stützt das Handgelenk, ohne Bandagen zu ersetzen.",
    specs: [["Material", "Rindsleder, vollnarbig"], ["Füllung", "3-lagiger Schaum"], ["Verschluss", "Klettband, 12 cm"], ["Herkunft", "Bangkok, Thailand"], ["Gewicht", "454 g"]],
  },
  {
    id: "shin", name: "Shin Guards Pro", line: "Rajadamnern", price: "119,00",
    sizes: ["S", "M", "L", "XL"], cat: "Muay Thai",
    blurb: "Zweiteilige Schienbeinschoner mit Instep-Verlängerung. Für Clinch und Low Kicks im Dauerbetrieb.",
    long: "Der Schaumkern ist an der Kante 22 mm dick und flacht zum Instep auf 12 mm ab, damit der Fuß beim Aufsetzen frei bleibt. Zwei Klettbänder mit Silikonstreifen halten die Position über eine ganze Runde.",
    specs: [["Material", "Rindsleder"], ["Kern", "EVA, 22 mm"], ["Länge", "20–22 cm"], ["Herkunft", "Bangkok, Thailand"], ["Gewicht", "2 × 340 g"]],
  },
  {
    id: "wraps", name: "Handbandagen 5 m", line: "Basis", price: "19,00",
    sizes: ["4,5 m", "5 m"], cat: "Muay Thai",
    blurb: "Halbelastische Baumwollbandage mit Daumenschlaufe. Zwei Paar pro Trainingswoche.",
    long: "Baumwolle mit 12 % Elastan, gewaschen und vorgeschrumpft. Die Kante ist doppelt umgenäht, damit sie nach vierzig Wäschen nicht aufrollt.",
    specs: [["Material", "Baumwolle, 12 % Elastan"], ["Länge", "5 m"], ["Breite", "5 cm"], ["Inhalt", "1 Paar"], ["Gewicht", "120 g"]],
  },
  {
    id: "shorts", name: "Fight Shorts Gold", line: "Heritage", price: "69,00",
    sizes: ["S", "M", "L", "XL"], badge: "-20%", cat: "Bekleidung",
    blurb: "Satin-Shorts mit gesticktem Bund. Weiter Beinschnitt für hohe Kicks.",
    long: "Satin mit 190 g/m², der Bund ist doppelt gestickt und der Beinausschnitt liegt 4 cm höher als bei Boxshorts. Waschbar bei 30 °C.",
    specs: [["Material", "Satin, 190 g/m²"], ["Bund", "Gummi, gestickt"], ["Schnitt", "Thai, weit"], ["Herkunft", "Bangkok, Thailand"], ["Pflege", "30 °C"]],
  },
  {
    id: "pads", name: "Thai Pads Curved", line: "Lumpinee", price: "229,00",
    sizes: ["Standard"], badge: "Pro", cat: "Ausstattung",
    blurb: "Gebogene Pratzen für Kicks und Knie. Paarweise, mit zwei Unterarmschlaufen.",
    long: "Die Krümmung nimmt den Kick auf, ohne dass der Halter den Aufprall in die Schulter bekommt. Vier Schaumlagen, die äußere gegen Durchschlag verdichtet.",
    specs: [["Material", "Rindsleder"], ["Lagen", "4 Schaumlagen"], ["Länge", "45 cm"], ["Inhalt", "1 Paar"], ["Gewicht", "2 × 1,9 kg"]],
  },
  {
    id: "head", name: "Kopfschutz Open Face", line: "Nakhon", price: "139,00",
    sizes: ["S/M", "L/XL"], cat: "Boxen",
    blurb: "Offener Kopfschutz mit Wangenpolster. Freies Sichtfeld für Sparring.",
    long: "Das Wangenpolster ist 18 mm dick und nach hinten versetzt, damit die Sicht nach unten frei bleibt. Kinnriemen und Hinterkopf sind getrennt verstellbar.",
    specs: [["Material", "Rindsleder"], ["Polster", "18 mm"], ["Verschluss", "2 × Klett"], ["Herkunft", "Bangkok, Thailand"], ["Gewicht", "520 g"]],
  },
  {
    id: "mitts", name: "Punch Mitts", line: "Lumpinee", price: "99,00",
    sizes: ["Standard"], cat: "Ausstattung",
    blurb: "Kompakte Pratzen für Präzisionsarbeit. Gebogene Schlagfläche, offene Rückhand.",
    long: "Die Schlagfläche ist um 15° gebogen und mit drei Lagen gefüllt. Die offene Rückhand hält die Hand des Trainers auch nach einer Stunde trocken.",
    specs: [["Material", "Rindsleder"], ["Lagen", "3 Schaumlagen"], ["Durchmesser", "20 cm"], ["Inhalt", "1 Paar"], ["Gewicht", "2 × 380 g"]],
  },
  {
    id: "bag", name: "Boxsack 180 cm", line: "Camp", price: "389,00",
    sizes: ["180 cm"], cat: "Ausstattung",
    blurb: "Ungefüllter Sack aus Segeltuch mit Vierpunkt-Aufhängung. Für Kicks über die volle Länge.",
    long: "Ungefüllt geliefert, Füllgewicht 60–70 kg. Die Vierpunkt-Aufhängung ist auf 300 kg Zug geprüft, die Naht innen doppelt gekappt.",
    specs: [["Material", "Segeltuch, 900 D"], ["Länge", "180 cm"], ["Durchmesser", "35 cm"], ["Aufhängung", "4 Punkt"], ["Zug", "300 kg"]],
  },
];

export const GEAR: Gear[] = [
  {
    id: "g1", pid: "bgv1", name: "Sparring Handschuhe 14 oz", serial: "POM-BGV1-14-0472-TH",
    specs: [["SKU", "POM-BGV1-14OZ"], ["Seriennummer", "0472"], ["Fertigung", "März 2025 · Bangkok"], ["Gekauft", "12.04.2025 · Store Thonglor"], ["Garantie bis", "12.04.2027"]],
    care: ["Nach dem Training offen trocknen lassen, nie in der Tasche.", "Leder alle acht Wochen mit Pflegemilch behandeln.", "Innenfutter mit Sprüh-Desinfektion, nicht auswaschen."],
  },
  {
    id: "g2", pid: "shin", name: "Shin Guards Pro · L", serial: "POM-SHIN-L-1188-TH",
    specs: [["SKU", "POM-SHIN-L"], ["Seriennummer", "1188"], ["Fertigung", "Januar 2025 · Bangkok"], ["Gekauft", "03.02.2025 · Online"], ["Garantie bis", "03.02.2027"]],
    care: ["Klett nach jedem Training von Fasern befreien.", "Nicht in der Sonne trocknen, das Leder wird brüchig.", "Silikonstreifen mit feuchtem Tuch abwischen."],
  },
  {
    id: "g3", pid: "pads", name: "Thai Pads Curved", serial: "POM-PADS-STD-0091-TH",
    specs: [["SKU", "POM-PADS-STD"], ["Seriennummer", "0091"], ["Fertigung", "November 2024 · Bangkok"], ["Gekauft", "20.11.2024 · Team-Bestellung"], ["Garantie bis", "20.11.2026"]],
    care: ["Schaumkern jährlich prüfen, bei Durchschlag tauschen.", "Griffschlaufen auf Naht kontrollieren.", "Leder trocken lagern, nicht stapeln."],
  },
];

export const SIZE_TABLE: [string, string, string][] = [
  ["10 oz", "–60 kg", "Wettkampf"],
  ["12 oz", "60–70 kg", "Wettkampf / Pratzen"],
  ["14 oz", "70–80 kg", "Sparring"],
  ["16 oz", "80 kg+", "Sparring"],
];

export const SPORTS = ["Muay Thai", "Boxen", "MMA", "Bekleidung", "Ausstattung"];
export const SORTS = ["Empfehlung", "Preis aufsteigend", "Neuheiten"] as const;

export const TITLES: Record<string, string> = {
  category: "Sortiment", product: "Produkt", bag: "Warenkorb", scan: "Scanner",
  scanp: "Scan-Ergebnis", scang: "Equipment-Pass", search: "Suche", wish: "Merkliste", account: "Konto",
};

export const num = (s: string) => parseFloat(s.replace(".", "").replace(",", "."));
export const money = (n: number) => n.toFixed(2).replace(".", ",");
