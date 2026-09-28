import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { GEAR, PRODUCTS, money, num } from "../data";
import type { BagLine, ProductTab, ScanMode, Screen, Sheet } from "../types";

interface State {
  screen: Screen;
  hist: Screen[];
  cat: string;
  pid: string;
  size: string;
  qty: number;
  bag: BagLine[];
  wish: string[];
  sheet: Sheet;
  toast: string | null;
  tab: ProductTab;
  scanMode: ScanMode;
  scanning: boolean;
  gearId: string;
  query: string;
  voucher: string;
  sort: string;
  onlyStock: boolean;
}

const initialState: State = {
  screen: "home", hist: [], cat: "Muay Thai", pid: "bgv1", size: "14 oz", qty: 1,
  bag: [], wish: ["shin"], sheet: null, toast: null, tab: "desc", scanMode: "produkt",
  scanning: false, gearId: "g1", query: "", voucher: "", sort: "Empfehlung", onlyStock: false,
};

function AppState() {
  const [state, setState] = useState<State>(initialState);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const scanTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const go = useCallback((screen: Screen, extra?: Partial<State>) => {
    setState((st) => ({ ...st, ...extra, screen, hist: [...st.hist, st.screen], sheet: null }));
  }, []);

  const back = useCallback(() => {
    setState((st) => ({
      ...st,
      screen: st.hist[st.hist.length - 1] || "home",
      hist: st.hist.slice(0, -1),
      sheet: null,
    }));
  }, []);

  const goHome = useCallback(() => setState((st) => ({ ...st, screen: "home", hist: [], sheet: null })), []);

  const showToast = useCallback((text: string) => {
    clearTimeout(toastTimer.current);
    setState((st) => ({ ...st, toast: text }));
    toastTimer.current = setTimeout(() => setState((st) => ({ ...st, toast: null })), 2600);
  }, []);

  const openProduct = useCallback((id: string) => {
    setState((st) => {
      const p = PRODUCTS.find((x) => x.id === id)!;
      return {
        ...st, screen: "product", hist: [...st.hist, st.screen], pid: id,
        size: p.sizes[Math.min(2, p.sizes.length - 1)], qty: 1, tab: "desc", sheet: null,
      };
    });
  }, []);

  const addToBag = useCallback(() => {
    setState((st) => {
      const i = st.bag.findIndex((l) => l.id === st.pid && l.size === st.size);
      const bag = i > -1
        ? st.bag.map((l, n) => (n === i ? { ...l, qty: l.qty + st.qty } : l))
        : [...st.bag, { id: st.pid, size: st.size, qty: st.qty }];
      return { ...st, bag };
    });
    const cur = PRODUCTS.find((x) => x.id === state.pid)!;
    showToast(cur.name + " · " + state.size);
  }, [state.pid, state.size, showToast]);

  const doScan = useCallback(() => {
    setState((st) => ({ ...st, scanning: true }));
    clearTimeout(scanTimer.current);
    scanTimer.current = setTimeout(() => {
      setState((st) => {
        const mode = st.scanMode;
        if (mode === "produkt") {
          return { ...st, scanning: false, screen: "scanp", hist: [...st.hist, "scan"], pid: "bgv1", size: "14 oz" };
        }
        return { ...st, scanning: false, screen: "scang", hist: [...st.hist, "scan"], gearId: "g1" };
      });
    }, 1100);
  }, []);

  const chip = useCallback(
    (on: boolean, label: string, pick: () => void) => ({
      label, pick, bg: on ? "var(--gold-500)" : "transparent",
      fg: on ? "var(--black-1000)" : "var(--text-secondary)",
      ring: on ? "none" : "inset 0 0 0 1px var(--border-hairline)",
    }),
    [],
  );

  const p = useMemo(() => PRODUCTS.find((x) => x.id === state.pid) || PRODUCTS[0], [state.pid]);
  const gear = useMemo(() => GEAR.find((g) => g.id === state.gearId) || GEAR[0], [state.gearId]);

  const catList = useMemo(() => {
    let cat = PRODUCTS.filter((x) => x.cat === state.cat);
    if (state.sort === "Preis aufsteigend") cat = [...cat].sort((a, b) => num(a.price) - num(b.price));
    if (state.sort === "Neuheiten") cat = [...cat].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
    if (state.onlyStock) cat = cat.filter((x) => x.id !== "bag");
    return cat;
  }, [state.cat, state.sort, state.onlyStock]);

  const bagLines = useMemo(
    () =>
      state.bag.map((l, i) => {
        const pr = PRODUCTS.find((x) => x.id === l.id)!;
        return {
          name: pr.name, meta: pr.line + " · " + l.size, qty: l.qty, sum: money(num(pr.price) * l.qty),
          inc: () => setState((s) => ({ ...s, bag: s.bag.map((x, n) => (n === i ? { ...x, qty: x.qty + 1 } : x)) })),
          dec: () =>
            setState((s) => ({
              ...s,
              bag: s.bag.map((x, n) => (n === i ? { ...x, qty: x.qty - 1 } : x)).filter((x) => x.qty > 0),
            })),
        };
      }),
    [state.bag],
  );

  const bagTotalNum = useMemo(
    () => state.bag.reduce((a, l) => a + num(PRODUCTS.find((x) => x.id === l.id)!.price) * l.qty, 0),
    [state.bag],
  );

  const searchResults = useMemo(() => {
    const q = state.query.trim().toLowerCase();
    return q
      ? PRODUCTS.filter((x) => (x.name + " " + x.line + " " + x.sizes.join(" ")).toLowerCase().includes(q))
      : PRODUCTS.slice(0, 4);
  }, [state.query]);

  const applyVoucher = useCallback(() => showToast("Code nicht gültig"), [showToast]);
  const checkout = useCallback(() => showToast("Kasse folgt im nächsten Schritt"), [showToast]);

  return {
    state, setState, go, back, goHome, showToast, openProduct, addToBag, doScan, chip,
    p, gear, catList, bagLines, bagTotalNum, searchResults, applyVoucher, checkout,
  };
}

type AppContextValue = ReturnType<typeof AppState>;
const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const value = AppState();
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
