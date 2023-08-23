import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./style/global.css";
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import PartnersPage from "./pages/partners.jsx";
import NavBar from "./pages/elements/navBar";
import SHCFooter from "./pages/elements/shcFooter";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
      <SHCFooter />
    </div>
  );
}

export default App;
