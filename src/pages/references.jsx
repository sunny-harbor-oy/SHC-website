import React from "react";
import syke from "../assets/syke.png";
import moon from "../assets/moonlogo.png";
import kvl from "../assets/KVL-valkoinen-kaksirivinen.png";
import kvlStore from "../assets/kvl-store-white.png";
import kvlMockup from "../assets/kvl-mockup.png";
import { Link } from "react-router-dom";

function References() {
  return (
    <section id="asiakkaamme" class="bg-primary w-full mb-36">
      <div class="py-12 px-5 md:px-36">
        <div>
          <h2 className="text-4xl font-bold text-white hover-text text-start">
            Asiakkaamme
          </h2>
        </div>
        <div className="p-8 mb-36">
          <div className="grid justify-center w-full grid-cols-2 gap-10 md:gap-10 md:grid-cols-4">
            <div className="flex justify-center w-full">
              <img
                src={syke}
                alt="logo"
                className="object-contain transition duration-1000 h-14 hover:scale-125"
              />
            </div>
            <div className="flex justify-center w-full">
              <img
                src={kvl}
                alt="logo"
                className="object-contain transition duration-1000 h-14 hover:scale-125"
              />
            </div>
            <div className="flex justify-center w-full ">
              <img
                src={moon}
                alt="logo"
                className="object-contain transition duration-1000 h-14 hover:scale-125 "
              />
            </div>
            <div className="flex justify-center w-full">
              <img
                src={kvlStore}
                alt="logo"
                className="object-contain transition duration-1000 h-14 hover:scale-125"
              />
            </div>
          </div>
        </div>
        <div id="referensseja">
          <h2 className="text-4xl font-bold text-white hover-text text-start">
            Referenssejä
          </h2>

          <div class="mt-8 lg:flex">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              <div className="">
                <img
                  class="object-cover w-full rounded-lg h-96 transition duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-md"
                  src={kvlMockup}
                  alt=""
                />
                <h2 class="mt-4 text-xl font-semibold underline md:no-underline text-white capitalize transition duration-500 hover:scale-105 hover:underline hover:cursor-pointer hover:shadow-md ">
                  Korjausvelkalaskuri
                </h2>
                <p class="mt-2 text-lg tracking-wider text-gray-400 uppercase transition duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-md">
                  web-kehitys
                </p>
              </div>

              <div>
                <img
                  class="object-cover w-full rounded-lg h-96 transition duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-md"
                  src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />
                <h2 class="mt-4 text-xl font-semibold underline md:no-underline text-white capitalize transition duration-500 hover:scale-105 hover:underline hover:cursor-pointer hover:shadow-md">
                  OmaSyke
                </h2>
                <p class="mt-2 text-lg tracking-wider text-gray-400 uppercase transition duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-md">
                  Sovelluskehitys
                </p>
              </div>

              <div>
                <img
                  class="object-cover w-full rounded-lg h-96 transition duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-md"
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <h2 class="mt-4 text-xl font-semibold underline md:no-underline text-white capitalize transition duration-500 hover:scale-105 hover:underline hover:cursor-pointer hover:shadow-md">
                  Moon App
                </h2>
                <p class="mt-2 text-lg tracking-wider text-gray-400 uppercase transition duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-md">
                  Sovelluskehitys
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default References;
