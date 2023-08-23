import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import './style/global.css'
import HomePage from "./pages/home.jsx"
import AboutPage from "./pages/about.jsx"
import PartnersPage from "./pages/partners.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/partners" element={<PartnersPage />} />
    </Routes>
  )
}

export default App