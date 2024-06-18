import React from "react";

import kvlMockup from "../assets/kvl-mockup.png";
import moonMockup from "../assets/moon-app-mockup.png";
import kvlStore from "../assets/kvlstore.png";

function ourServices() {
  return (
    <div className="w-screen overflow-x-hidden 2xl:p-36 xl:p-16 lg:p-16 max-lg:px-28 max-md:px-14 max-sm:px-2 max-lg:py-10 bg-primary">
      <h1 className="font-semibold font-poppins text-4xl text-secondary max-lg:mt-[8vh] w-full text-center">Palvelumme</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-5 mt-8 lg:mb-12 max-w-[1700px] mx-auto">
        <div>
          <h2 className="lg:text-2xl md:text-xl sm:text-xl text-lg font-bold text-white pb-1 uppercase">
            1. Web- ja sovelluskehitys
          </h2>
          <div className="sm:w-[340px] w-[280px] bg-secondary h-1 rounded-full" />
          <br className="max-lg:hidden" />
          <p className="text-white xl:text-base max-lg:mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            voluptate tenetur velit placeat, cupiditate accusantium? Expedita
            sequi veniam laboriosam quae blanditiis accusamus, mollitia sed
            voluptatem, ea, recusandae molestiae debitis. Sint. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Excepturi voluptate
            tenetur velit placeat, cupiditate accusantium? Expedita sequi veniam
            laboriosam quae blanditiis accusamus, mollitia sed voluptatem, ea,
            recusandae molestiae debitis. Sint. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Excepturi voluptate tenetur velit
            placeat, cupiditate accusantium? Expedita sequi veniam laboriosam
            quae blanditiis accusamus, mollitia sed voluptatem, ea, recusandae
            molestiae debitis. Sint. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Excepturi voluptate tenetur velit placeat,
            cupiditate accusantium? Expedita sequi veniam laboriosam quae
            blanditiis accusamus, mollitia sed voluptatem, ea, recusandae
            molestiae debitis. Sint. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Excepturi voluptate tenetur velit placeat,
            cupiditate accusantium? Expedita sequi veniam laboriosam quae
            blanditiis accusamus, mollitia sed voluptatem, ea, recusandae
            molestiae debitis. Sint.
          </p>
          <br/>
          <div className="w-[450px] bg-secondary h-1 max-lg:hidden rounded-full" />
          <div className="col-span-2 justify-start flex flex-col w-full items-start gap-5">
          <text className="text-white xl:text-lg lg:text-base max-lg:hidden font-light text-start mt-2">
          Laske alustava tarjous <a className="text-secondary cursor-pointer font-semibold hover:underline" href="/kustannusarviolaskuri"> kustannusarviolaskurilla</a>
        </text>
      </div>
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-2 2xl:w-3/4 xl:w-[550px] lg:w-auto md:w-[700px] max-sm:w-[350px] max-xl:h-[500px] max-lg:h-[300px] max-lg:pb-10 my-auto mx-auto items-center justify-center sm:gap-5">
        <div className="overflow-hidden max-sm:hidden xl:w-full max-xl:h-full max-lg:mx-auto lg:aspect-square rounded-lg max-lg:bg-white max-lg:w-full lg:hover:scale-[1.10] transition-all duration-[350ms]">
        <img
              class="lg:object-cover object-contain overflow-hidden scale-[1.3] lg:w-full max-lg:h-full max-lg:mx-auto aspect-square transition duration-500"
              src={kvlMockup}
              alt=""
          />
          </div>
          <div className="overflow-hidden max-sm:col-span-2 xl:w-full max-xl:h-full max-lg:mx-auto lg:aspect-square rounded-lg max-lg:bg-white max-lg:w-full lg:hover:scale-[1.10] transition-all duration-[350ms]">
          <img
              class="lg:object-cover object-contain overflow-hidden scale-[1.3] lg:w-full max-lg:h-full max-lg:mx-auto aspect-square transition duration-500"
              src={moonMockup}
              alt=""
          />
          </div>
          <div className="hidden overflow-hidden xl:w-full max-xl:h-full max-lg:mx-auto col-span-2 rounded-lg lg:hover:scale-[1.10] transition-all duration-[350ms]">
          <img
              class="object-cover overflow-hidden scale-[1.39] w-full aspect-square transition duration-500 "
              src={kvlStore}
              alt=""
          />
          </div>
        </div>
        <div className="my-auto max-lg:hidden">
          <div className="overflow-hidden 2xl:w-[600px] xl:w-[550px] lg:w-[425px] xl:mx-auto rounded-lg lg:hover:scale-[1.10] transition-all duration-[350ms]">
          <img
              class="object-cover overflow-hidden my-auto w-full transition duration-500"
              src={kvlStore}
              alt=""
          />
          </div>
        </div>
        <div>
          <h2 className="lg:text-2xl md:text-xl sm:text-xl text-lg font-bold text-white pb-1 uppercase">
            2. Nettisivut
          </h2>
          <div className="w-[250px] bg-secondary h-1 rounded-full" />
          <br className="max-lg:hidden" />
          <p className="text-white xl:text-base max-lg:mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            voluptate tenetur velit placeat, cupiditate accusantium? Expedita
            sequi veniam laboriosam quae blanditiis accusamus, mollitia sed
            voluptatem, ea, recusandae molestiae debitis. Sint. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Excepturi voluptate
            tenetur velit placeat, cupiditate accusantium? Expedita sequi veniam
            laboriosam quae blanditiis accusamus, mollitia sed voluptatem, ea,
            recusandae molestiae debitis. Sint. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Excepturi voluptate tenetur velit
            placeat, cupiditate accusantium? Expedita sequi veniam laboriosam
            quae blanditiis accusamus, mollitia sed voluptatem, ea, recusandae
            molestiae debitis. Sint. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Excepturi voluptate tenetur velit placeat,
            cupiditate accusantium? Expedita sequi veniam laboriosam quae
            blanditiis accusamus, mollitia sed voluptatem, ea, recusandae
            molestiae debitis. Sint. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Excepturi voluptate tenetur velit placeat,
            cupiditate accusantium? Expedita sequi veniam laboriosam quae
            blanditiis accusamus, mollitia sed voluptatem, ea, recusandae
            molestiae debitis. Sint.
          </p>
          <br/>
          <div className="w-[450px] max-lg:hidden bg-secondary h-1 rounded-full" />
          <div className="col-span-2 justify-start flex flex-col w-full items-start gap-5">
        <text className="text-white xl:text-lg lg:text-base max-lg:hidden font-light text-start mt-2">
        Laske alustava tarjous <a className="text-secondary cursor-pointer font-semibold hover:underline" href="/kustannusarviolaskuri"> kustannusarviolaskurilla</a>
        </text>
      </div>
      <div className="my-auto lg:hidden pb-10">
          <div className="overflow-hidden mx-auto rounded-lg md:w-[600px] sm:w-[500px]">
          <img
              class="object-cover overflow-hidden my-auto w-full transition duration-500"
              src={kvlStore}
              alt=""
          />
          </div>
        </div>
        </div>
        <div>
          <h2 className="lg:text-2xl md:text-xl sm:text-xl text-lg font-bold text-white pb-1 uppercase">
            3. Konsultointi
          </h2>
          <div className="w-[190px] bg-secondary h-1 rounded-full" />
          <br className="max-lg:hidden" />
          <p className="text-white xl:text-base max-lg:mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            voluptate tenetur velit placeat, cupiditate accusantium? Expedita
            sequi veniam laboriosam quae blanditiis accusamus, mollitia sed
            voluptatem, ea, recusandae molestiae debitis. Sint. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Excepturi voluptate
            tenetur velit placeat, cupiditate accusantium? Expedita sequi veniam
            laboriosam quae blanditiis accusamus, mollitia sed voluptatem, ea,
            recusandae molestiae debitis. Sint. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Excepturi voluptate tenetur velit
            placeat, cupiditate accusantium? Expedita sequi veniam laboriosam
            quae blanditiis accusamus, mollitia sed voluptatem, ea, recusandae
            molestiae debitis. Sint. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Excepturi voluptate tenetur velit placeat,
            cupiditate accusantium? Expedita sequi veniam laboriosam quae
            blanditiis accusamus, mollitia sed voluptatem, ea, recusandae
            molestiae debitis. Sint. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Excepturi voluptate tenetur velit placeat,
            cupiditate accusantium? Expedita sequi veniam laboriosam quae
            blanditiis accusamus, mollitia sed voluptatem, ea, recusandae
            molestiae debitis. Sint.
          </p>
        </div>
        <div>
        </div>
      </div>
      <br />
      <div className="col-span-2 flex justify-center">
      <div className="h-1 w-5/6 bg-secondary rounded-full" />
      </div>
      <br />
      <div className="col-span-2 justify-center flex flex-col w-full items-center gap-5">
        <a className="text-white text-xl max-sm:text-lg font-semibold text-center md:w-[1000px] cursor-pointer" href="/kustannusarviolaskuri">
          Kiinnostuitko? Laske alustava <span className="text-secondary hover:underline">hinta-arvio</span> laskurilla ja ole yhteydessä meihin!
        </a>
      </div>
    </div>
  );
}

export default ourServices;
