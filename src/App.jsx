import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./style/global.css";
import HomePage from "./pages/home.jsx";
import ContactPage from "./pages/contact.jsx";
import PriceEstimation from "./pages/priceCalculator.jsx";
import IlmoPage from "./pages/ilmo.jsx";
import BlogsPage from "./pages/blogs.jsx";

import OkPage from "./pages/thanks.jsx";
import FailedPage from "./pages/failed.jsx"

import NavBar from "./elements/navBar.jsx";
import SHCFooter from "./elements/shcFooter.jsx";

// Blogit
import BlogV1 from "./pages/templates/blogs/blogv1.jsx";
import SHC_Victor from "./pages/blogs/shc_victor.jsx";
import SHC_Sisu from "./pages/blogs/shc_sisu.jsx";
import TransparencyBlog from "./pages/blogs/shc_transparency";
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
    <div className="overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/price-estimate" element={<PriceEstimation />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ilmo" element={<IlmoPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/contact/ok" element={<OkPage/>}></Route>
        <Route path="/contact/failed" element={<FailedPage/>}></Route>
        <Route path="/blogs" element={<BlogsPage/>}></Route>

        {/* BLOGIT */}
        <Route path="/blogs/v1" element={<BlogV1/>}></Route>
        <Route path="/blogs/shc_victor" element={<SHC_Victor/>}></Route>
        <Route path="/blogs/shc_sisu" element={<SHC_Sisu/>}></Route>
        <Route path="/blogs/shc_transparency" element={<TransparencyBlog/>}></Route>
      </Routes>
      <SHCFooter />
    </div>
  );
}

export default App;
