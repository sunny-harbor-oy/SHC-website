import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./style/global.css";
import HomePage from "./pages/home.jsx";
import ContactPage from "./pages/contact.jsx";
import PriceEstimation from "./pages/priceCalculator.jsx";
import IlmoPage from "./pages/ilmo.jsx";

import OkPage from "./pages/thanks.jsx";
import FailedPage from "./pages/failed.jsx"

import NavBar from "./elements/navBar.jsx";
import SHCFooter from "./elements/shcFooter.jsx";
//import AlertManager from "./elements/alertManager";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener('beforeunload', () => {});
    }
  }, [])

  return (
    <div className="overflow-x-hidden w-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/price-estimate" element={<PriceEstimation />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ilmo" element={<IlmoPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/contact/ok" element={<OkPage/>}></Route>
        <Route path="/contact/failed" element={<FailedPage/>}></Route>
      </Routes>
      <SHCFooter />
    </div>
  );
}

export default App;
