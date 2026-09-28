export type Screen =
  | "home" | "category" | "product" | "scan" | "scanp" | "scang"
  | "bag" | "search" | "wish" | "account";

export interface Product {
  id: string;
  name: string;
  line: string;
  price: string;
  sizes: string[];
  badge?: string;
  cat: string;
  blurb: string;
  long: string;
  specs: [string, string][];
  image?: string;
}

export interface Gear {
  id: string;
  pid: string;
  name: string;
  serial: string;
  specs: [string, string][];
  care: string[];
}

export interface BagLine {
  id: string;
  size: string;
  qty: number;
}

export type Sheet = "size" | "filter" | null;
export type ScanMode = "produkt" | "equipment";
export type ProductTab = "desc" | "spec" | "rev";
