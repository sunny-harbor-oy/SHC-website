import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./style/global.css";
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import PartnersPage from "./pages/partners.jsx";
import NavBar from "./elements/navBar.jsx";
import SHCFooter from "./elements/shcFooter.jsx";
import ContactPage from "./pages/contact.jsx";
import GetAJobPage from "./pages/getAJob.jsx";
import PriceEstimation from "./pages/priceCalculator.jsx";
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-a-job" element={<GetAJobPage />} />
        <Route path="/price-estimate" element={<PriceEstimation />} />
      </Routes>
      <SHCFooter />
    </div>
  );
}

export default App;
