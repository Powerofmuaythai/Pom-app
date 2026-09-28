import { useEffect, useRef } from "react";
import "./styles/app.css";
import { AppProvider, useApp } from "./context/AppContext";
import { Header } from "./components/Header";
import { TabBar } from "./components/TabBar";
import { BuyBar } from "./components/BuyBar";
import { Toast } from "./components/Toast";
import { SizeGuideSheet } from "./components/SizeGuideSheet";
import { FilterSheet } from "./components/FilterSheet";
import { Home } from "./screens/Home";
import { Category } from "./screens/Category";
import { Product } from "./screens/Product";
import { Scan } from "./screens/Scan";
import { ScanProduct } from "./screens/ScanProduct";
import { ScanGear } from "./screens/ScanGear";
import { Bag } from "./screens/Bag";
import { Search } from "./screens/Search";
import { Wish } from "./screens/Wish";
import { Account } from "./screens/Account";

function Screen() {
  const { state } = useApp();
  switch (state.screen) {
    case "home": return <Home />;
    case "category": return <Category />;
    case "product": return <Product />;
    case "scan": return <Scan />;
    case "scanp": return <ScanProduct />;
    case "scang": return <ScanGear />;
    case "bag": return <Bag />;
    case "search": return <Search />;
    case "wish": return <Wish />;
    case "account": return <Account />;
    default: return <Home />;
  }
}

function Shell() {
  const { state } = useApp();
  const isProduct = state.screen === "product";
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [state.screen]);

  return (
    <div className="shell">
      <Header />
      <main className="main" ref={mainRef}>
        <Screen />
      </main>
      {isProduct ? <BuyBar /> : <TabBar />}
      <Toast />
      <SizeGuideSheet />
      <FilterSheet />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
