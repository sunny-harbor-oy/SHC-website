import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./style/global.css";
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import PartnersPage from "./pages/partners.jsx";
import NavBar from "./elements/navBar";
import SHCFooter from "./elements/shcFooter";
import ContactPage from "./pages/contact";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <SHCFooter />
    </div>
  );
}

export default App;
