import React from "react";
import syke from "../assets/syke.png";
import moon from "../assets/moonlogo.png";
import kvl from "../assets/velka.webp";

function References() {
  return (
    <section class="bg-primary w-full">
      <div class="py-12 px-20">
        <h2 className="text-4xl font-bold text-white hover-text text-start">
          Referenssejä
        </h2>

        <div class="mt-8 lg:flex">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <div>
              <img
                class="object-cover w-full rounded-lg h-96 "
                src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                alt=""
              />
              <h2 class="mt-4 text-xl font-semibold text-white capitalize">
                Best website collections
              </h2>
              <p class="mt-2 text-lg tracking-wider text-gray-400 uppercase">
                Website
              </p>
            </div>

            <div>
              <img
                class="object-cover w-full rounded-lg h-96 "
                src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
              <h2 class="mt-4 text-xl font-semibold text-white capitalize">
                Block of Ui kit collections
              </h2>
              <p class="mt-2 text-lg tracking-wider text-gray-400 uppercase">
                Ui kit
              </p>
            </div>

            <div>
              <img
                class="object-cover w-full rounded-lg h-96 "
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <h2 class="mt-4 text-xl font-semibold text-white capitalize">
                Ton’s of mobile mockup
              </h2>
              <p class="mt-2 text-lg tracking-wider text-gray-400 uppercase">
                Mockups
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-white hover-text text-start">
            Asiakkaamme
          </h2>
        </div>
        <div className="flex flex-row my-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full justify-items-center h-46">
            <div className="h-36 w-full">
              <img src={syke} alt="logo" class="  h-full  p-8" />
            </div>
            <div className="h-36 w-full">
              <img src={kvl} alt="logo" class=" h-full  p-8" />
            </div>
            <div className="h-36 w-full">
              <img src={moon} alt="logo" class="h-full   p-8" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default References;
