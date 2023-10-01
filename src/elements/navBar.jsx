import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shc_logo.png";

export default function NavBar() {
  useEffect(() => {
    if (window.location.hash != "") {
      if (document.cookie.split(";").some((item) => item.trim().startsWith("scrollTo="))) {
        const elem = document.getElementById(window.location.hash.substring(1));
        if (elem != null) {
          window.scrollTo(0, elem.offsetTop - document.getElementById("navBar").getBoundingClientRect().height);
          document.cookie = "scrollTo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
      }
    }
  });

  return (
    <nav id="navBar" className="fixed z-[10000] h-[8vh] bg-[#14213D] flex justify-between w-screen px-[2vw] text-white text-center text-[1.75vh] font-poppins">
      <div className="flex">
        <Link className="my-auto hover:cursor-pointer" reloadDocument="true" to={"/"}><img src={logo} className="h-[7vh] my-auto"></img></Link>
        <div className="grid grid-cols-3 gap-4 my-auto font-light text-center px-[3vw]">
          <Link to={"/price-estimate"}><h1 className="hover:cursor-pointer">Kustannusarvio</h1></Link>
          <h1 className="hover:cursor-pointer" onClick={() => {
            if (window.location.pathname == "/") {
              window.scrollTo(0, document.getElementById("team").offsetTop - document.getElementById("navBar").getBoundingClientRect().height);
            } else {
              window.location = "/#team";
              document.cookie = "scrollTo=true";
            }
          }}>Tiimi</h1>
          <h1 className="hover:cursor-pointer" onClick={() => {
            if (window.location.pathname == "/") {
              window.scrollTo(0, document.getElementById("customers").offsetTop - document.getElementById("navBar").getBoundingClientRect().height);
            } else {
              window.location = "/#customers";
              document.cookie = "scrollTo=true";
            }
          }}>Asiakkaat</h1>
        </div>
      </div>
      <div className="border-solid border-[#FCA311] border-2 w-[15vh] my-auto">
        <Link reloadDocument="true" to={"/contact"}><h1 className="text-[#FCA311] hover:font-extrabold font-semibold hover:cursor-pointer transition-all duration-[250ms] my-auto py-[0.5vw] w-full h-full">Ota yhteyttä!</h1></Link>
      </div>
    </nav>
  );
}
