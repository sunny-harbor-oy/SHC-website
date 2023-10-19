import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./style/global.css";
import HomePage from "./pages/home.jsx";
import ContactPage from "./pages/contact.jsx";
import PriceEstimation from "./pages/priceCalculator.jsx";

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
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/price-estimate" element={<PriceEstimation />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <SHCFooter />
    </div>
  );
}

export default App;
