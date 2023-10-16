import { useEffect, useRef } from "react";
import ScrollingSlides from "../elements/scrollingSlides.jsx";
import SlideShow from "../elements/slideShow.jsx";
import { Link } from "react-router-dom";

import leonImg from "../assets/founders/leonv2.jpg";
import sisuImg from "../assets/founders/sisu.png";
import victorImg from "../assets/founders/victor.jpg";
import marcImg from "../assets/team/alexv2.png";
import ceoImg from "../assets/founders/CEO.jpg";

const motto = [
  "Developing technology beyond the horizon.",
  "Your edge in technology.",
  "Web.",
  "Apps.",
  "Software & Hardware.",
  "We do it all.",
  "We are Sunny Harbor Consulting.",
];

export default function HomePage(language = "fi") {
  return (
    <div id="homeWrapper" className="w-screen">
        <SlideShow delay={5*1000} duration={200000} viewPortClassNames="w-screen h-screen">
        <div className="relative h-screen w-screen text-white font-poppins font-semibold">
          <div className="px-[5vw] pt-[13vh]">
            <h1 className="sm:text-[12.5vh] text-[15vw]">Ratkaisuja<br/>joihin luotat.<br/></h1>
            <h2 className="sm:w-[80vh] sm:text-[3.43vh] text-[5vw] sm:h-[20vh] h-[40vh] pt-[5vh]">
              Uskomme vahvasti, että luomalla kestäviä ja pitkäikäisiä ratkaisuja, voimme mahdollistaa asiakkailemme ennennäkemättömän edun teknologiassa.
            </h2>
            <div className="relative sm:mt-[13vh]">
              <div className="absolute hidden z-[1] bg-[#FCA311] filter blur-md w-[23.4vw] h-[4.3vw] px-[1vw] py-[2vw]"></div>
              <Link to={"./price-estimate"} className="relative z-[3] text-[2.6vh] text-left py-[1.5vh] px-[2vh] bg-[#14213D] rounded-lg">Kustannusarvio sekunneissa! &rarr;</Link>
            </div>
          </div>
          <div className="fixed z-[-1] filter top-0 left-0 h-screen w-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
        </div>
        <div className="relative h-screen w-screen bg-[#000000] text-white font-poppins font-semibold">

        </div>
        </SlideShow>
        <div className="w-screen py-[5vw] px-[10vw] sm:grid grid-cols-3 gap-[10vw] block bg-white">
          <div className="shadow-lg border-solid bg-[#14213D] sm:h-[20vw] sm:w-auto w-[80vw] mx-auto sm:my-0 my-[4vh] sm:py-0 py-[15vw] rounded-lg text-center text-white font-poppins">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FCA311" className="mx-auto md:w-[8vw] w-[30vw] md:pt-[2vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="sm:text-[1.5vw] text-[6.5vw] md:font-medium font-semibold sm:w-3/4 mx-auto sm:pt-[2vw]">Kustannustehokkaat ratkaisut</h1>
          </div>
          <div className="shadow-lg border-solid bg-[#14213D] sm:h-[20vw] sm:w-auto w-[80vw] mx-auto sm:my-0 my-[4vh] sm:py-0 py-[15vw] rounded-lg text-center text-white font-poppins">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FCA311" className="mx-auto md:w-[8vw] w-[30vw] md:pt-[2vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
          <h1 className="sm:text-[1.5vw] text-[6.5vw] md:font-medium font-semibold sm:w-3/4 mx-auto sm:pt-[2vw]">Aktiivinen ja erehtymätön tuki</h1>
          </div>
          <div className="shadow-lg border-solid bg-[#14213D] sm:h-[20vw] sm:w-auto w-[80vw] mx-auto sm:my-0 my-[4vh] sm:py-0 py-[15vw] rounded-lg text-center text-white font-poppins">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FCA311" className="mx-auto md:w-[8vw] w-[30vw] md:pt-[2vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          <h1 className="sm:text-[1.5vw] text-[6.5vw] md:font-medium font-semibold sm:w-3/4 mx-auto sm:pt-[2vw]">Täysin räätälöidyt ratkaisut</h1>
          </div>
        </div>
        <div className="md:h-[40vw] bg-[#14213D] text-white font-poppins md:py-[5vw] py-[7.5vh]" id="customers">
          <h1 className="text-center md:text-[4vw] text-[9vw] font-semibold mx-auto md:mb-[5vw] mb-[10vw] text-[#FCA311]">Löydä itsesi muiden joukosta!</h1>
          <div className="block md:grid grid-cols-2 gap-[2vw] md:w-[75vw] w-[90vw] mx-auto">
            <div className="bg-[#E5E5E5] rounded-lg md:h-[20vw] h-[70vw] text-[#14213D] px-[2vw] py-[1vw] md:my-0 my-[10vw]">
              <h1 className="md:text-[2.75vw] text-[7vw] font-semibold">Sykekotipalvelut</h1>
              <p className="md:text-[1.35vw] text-[5vw] md:h-[10.5vw] h-[46vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam aliquam beatae sunt recusandae commodi</p>
              <button className="bg-[#14213D] text-[#FCA311] py-[0.5vw] md:px-[1vw] px-[3vw] text-left md:text-[1.5vw] text-[5vw] rounded-lg">Lue lisää <i className="fa fa-angle-right"></i></button>
            </div>
            <div className="bg-[#E5E5E5] rounded-lg md:h-[20vw] h-[70vw] text-[#14213D] px-[2vw] py-[1vw] md:my-0 my-[10vw]">
              <h1 className="md:text-[2.75vw] text-[7vw] font-semibold">Korjausvelkalaskuri.fi</h1>
              <p className="md:text-[1.35vw] text-[5vw] md:h-[10.5vw] h-[46vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam aliquam beatae sunt recusandae commodi</p>
              <button className="bg-[#14213D] text-[#FCA311] py-[0.5vw] md:px-[1vw] px-[3vw] text-left md:text-[1.5vw] text-[5vw] rounded-lg">Lue lisää <i className="fa fa-angle-right"></i></button>
            </div>
          </div>
        </div>
        <div className="bg-[#14213D] w-screen font-poppins" id="team">
        <h1 className="pt-[2vw] md:text-[3.5vw] text-[9vw] left-0 font-semibold text-[#FCA311] text-center w-screen">Tiimimme</h1>
        <div className="block md:grid grid-cols-4 gap-[2vw] w-[90vw] md:h-[43vw] py-[5vw] font-poppins font-bold mx-auto text-white">
          <div className="bg-[#1b2843] md:h-[full] h-auto relative rounded-lg overflow-hidden font-normal md:my-0 my-[5vh]">
            <img src={leonImg} className="w-full mx-auto md:h-[26vw] h-[100vw] object-cover"></img>
            <h1 className="text-center leading-snug md:text-[2.5vw] text-[7vw] md:pb-[-1vw] pb-[-2vw] md:pt-[0.5vw] pt-[1vw]">Leon</h1>
            <h2 className="text-center md:text-[1vw] text-[4vw] my-0 md:pb-0 pb-[3vw]">Frontend kehittäjä ja suunnittelija</h2>
          </div>
          <div className="bg-[#1b2843] md:h-[full] h-auto relative rounded-lg overflow-hidden font-normal md:my-0 my-[5vh]">
            <img src={victorImg} className="w-full mx-auto md:h-[26vw] h-[100vw] object-cover"></img>
            <h1 className="text-center leading-snug md:text-[2.5vw] text-[7vw] md:pb-[-1vw] pb-[-2vw] md:pt-[0.5vw] pt-[1vw]">Victor</h1>
            <h2 className="text-center md:text-[1vw] text-[4vw] my-0 md:pb-0 pb-[3vw]">Fullstack kehittäjä</h2>
          </div>
          <div className="bg-[#1b2843] md:h-[full] h-auto relative rounded-lg overflow-hidden font-normal md:my-0 my-[5vh]">
            <img src={sisuImg} className="w-full mx-auto md:h-[26vw] h-[100vw] object-cover"></img>
            <h1 className="text-center leading-snug md:text-[2.5vw] text-[7vw] md:pb-[-1vw] pb-[-2vw] md:pt-[0.5vw] pt-[1vw]">Sisu</h1>
            <h2 className="text-center md:text-[1vw] text-[4vw] my-0 md:pb-0 pb-[3vw]">Markkinointi ja frontend kehittäjä</h2>
          </div>
          <div className="bg-[#1b2843] md:h-[full] h-auto relative rounded-lg overflow-hidden font-normal md:my-0 my-[5vh]">
            <img src={marcImg} className="w-full mx-auto md:h-[26vw] h-[100vw] object-cover"></img>
            <h1 className="text-center leading-snug md:text-[2.5vw] text-[7vw] md:pb-[-1vw] pb-[-2vw] md:pt-[0.5vw] pt-[1vw]">Marc</h1>
            <h2 className="text-center md:text-[1vw] text-[4vw] my-0 md:pb-0 pb-[3vw]">Fullstack kehittäjä</h2>
          </div>
        </div>
        </div>
    </div>
  );
}
