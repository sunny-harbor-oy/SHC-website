import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shc_logo.png";

export default function NavBar() {

  return (
    <nav className="fixed z-[10000] h-[8vh] bg-[#14213D] flex justify-between w-screen px-[2vw] text-white text-center text-[1.75vh] font-poppins">
      <div className="flex">
        <img src={logo} className="h-[7vh] my-auto"></img>
        <div className="grid grid-cols-3 gap-4 my-auto font-light text-center px-[3vw]">
          <h1 className="hover:cursor-pointer">Tarinamme</h1>
          <h1 className="hover:cursor-pointer">Tiimi</h1>
          <h1 className="hover:cursor-pointer">Asiakkaat</h1>
        </div>
      </div>
      <div className="border-solid border-[#FCA311] border-2 w-[15vh] my-auto">
        <h1 className="text-[#FCA311] hover:font-extrabold font-semibold hover:cursor-pointer transition-all duration-[250ms] my-auto py-[0.5vw] w-full h-full">Ota yhteyttä!</h1>
      </div>
    </nav>
  );
}
