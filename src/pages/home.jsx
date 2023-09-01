import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import blackRock from "../assets/planet.png";
import capsuleImg from "../assets/capsule.png";
import AboutPage from "../pages/about.jsx";
import ContactPage from "../pages/contact.jsx";
import PartnersPage from "../pages/partners.jsx";
import SHCFooter from "../elements/shcFooter";

const motto = [
  "Developing technology beyond the horizon.",
  "Your edge in technology.",
  "Web.",
  "Apps.",
  "Software & Hardware.",
  "We do it all.",
  "We are Sunny Harbor Consulting.",
];

let sectionOne = null;
let sectionSecond = null;
let oneRect = null;
let secondRect = null;
let navBarY = null;
let done = false;
let isMobile = window.innerWidth < 768;

window.addEventListener("scroll", () => {
  if (sectionOne && sectionSecond && !isMobile) {
    const scrollPos = window.scrollY;

    if (scrollPos < oneRect.y) {
      done = false;
      sectionOne.current.style.position = "relative";
    }
    else if (scrollPos > oneRect.y && (scrollPos < secondRect.bottom) && !done) {
      sectionOne.current.style.position = "fixed";
      sectionOne.current.style.top = `${0}px`;

      if (scrollPos > secondRect.y) {
        sectionSecond.current.style.position = "fixed";
        sectionSecond.current.style.top = `${0}px`;
      } else {
        sectionSecond.current.style.position = "relative";
        sectionSecond.current.style.top = `${0}px`;
      }
    } else if (!done) {
      sectionOne.current.style.position = "relative";
      sectionOne.current.style.top = `${0}px`;

      sectionSecond.current.style.position = "relative";
      sectionSecond.current.style.top = `${0}px`;
      done = true;
    }
  }
}, []);

export default function HomePage(language = "fi") {
  sectionOne = useRef(null);
  sectionSecond = useRef(null);

  useEffect(() => {
    oneRect = sectionOne.current.getBoundingClientRect();
    secondRect = sectionSecond.current.getBoundingClientRect();

    window.scrollTo(0, 0);

    // Animation for the background video
    const video = document.getElementById("backgroundVideo");
    video.playbackRate = 0.7;
    let deg = 0;

    /*setInterval(() => {
            video.style.filter = `sepia(100%) hue-rotate(${deg}deg) saturate(1000%) brightness(50%) contrast(1.2)`
            deg++;
        }, 1000);*/

    // Animation for the title description
    const titleDesc = document.getElementById("titleDesc");
    let current = 0;
    let currentChar = 0;
    let charLimit = motto[current].length;
    let waiting = 0;

    setInterval(() => {
      if (waiting == 0) {
        if (currentChar == 0) titleDesc.innerHTML = "";
        if (currentChar < charLimit) {
          titleDesc.innerHTML = motto[current]
            .concat(" ")
            .substring(0, currentChar + 1);
          currentChar++;
        } else {
          currentChar = 0;
          current++;
          waiting = current == motto.length ? 100 : 40;
          if (current >= motto.length) {
            current = 0;
          }
          charLimit = motto[current].length;
        }
      } else {
        waiting--;
      }
    }, 60);

    setTimeout(() => {
      navBarY = document.getElementById("navBarWrapper").getBoundingClientRect().y;
    }, 1000);
  }, []);
  return (
    <div id="homeWrapper" className="bg-main">
      <div id="main" className="h-[50vh] flex justify-center mt-0 md:h-screen">
        <video
          autoPlay
          muted
          loop
          id="backgroundVideo"
          /* className="w-full object-cover z-0 top-0 m-0 p-0 bgVideoFilter" */
          className="w-full object-cover z-0 top-0 m-0 p-0"
        >
          {/* <source src="./src/assets/HomePageBackground.mp4" type="video/mp4" /> */}
          <source src="./src/assets/earth.mp4" type="video/mp4" />
        </video>
        <div
          id="content"
          className="absolute flex flex-col justify-center items-center text-white h-[50vh] md:h-screen"
        >
          <h1 className="font-bold text-3xl lg:text-6xl text-center select-none cursor-default text-h1">
            Sunny Harbor Consulting
          </h1>
          <p
            id="titleDesc"
            className="font-normal font-mono sm:text-2xl lg:text-3xl text-center text-p select-none cursor-default"
          ></p>
          <div className="text-2xl font-mono flex w-full mt-8 justify-around lg:visible hidden">
            <button 
            onClick={() => document.getElementById('aboutUsWrapper').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })}
            className="bg-black px-2  text-white text-center">Tiimi</button>
            <button 
            onClick={() => document.getElementById('contactWrapper').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })}
            className="bg-black px-2 text-white text-center">Ota yhteyttä</button>
            <button 
            onClick={() => document.getElementById('Partners').scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}
            className="bg-black px-2  text-white text-center">Kumppanit</button>
          </div>
        </div>
      </div>
      <div id="content" className="bg-white mx-0">
        <div id="about" className="w-full m-0 p-0 block h-screen">
          <div className="xl:h-screen h-1/2 z-[0]">
            <div
              id="storyDiv"
              ref={sectionOne}
              className="relative bg-black grid grid-cols-1 text-h2 p-5 pt-5 lg:p-32 w-full m-auto xl:h-screen h-full"
            >
              <div className="relative overflow-hidden w-full z-[10]">
              <h1 className="xl:text-7xl text-4xl font-raleway">Sunny Harbor Consulting</h1>
              <h2 className="lg:w-2/3 md:w-2/3 w-full text-h1 text-xs sm:text-2xl lg:text-5xl 2xl:text-5xl font-mono mt-7 relative">
                  Sunny Harbor Consulting eli SHC on nuori ja taitava ohjelmistoyritys,
                  joka erikoistuu innovatiivisiin web- ja mobiilisovelluksiin.
<br/><br/>
<br/>
                SHC tekee mobiili- ja tietokonesovelluksia, nettisivuja sekä embedded-toteutuksia. Osaamisemme vain laajenee tästä ja panostamme uuden osaamisen hankkimiseen.
                </h2>
              </div>
              <img className="h-4/5 absolute aspect-square xl:right-5 right-0 z-[0] xl:bottom-[8%] bottom-[0]" src={"https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/as4-01-580.jpg"} />
            </div>
          </div>
          <div className="xl:h-screen h-1/2 z-[0]">
            <div
              id="storyDiv"
              ref={sectionSecond}
              className="relative bg-black grid grid-cols-1 text-h2 p-5 pt-5 lg:p-32 w-full m-auto h-screen"
            >
              <div className="inline-block align-middle overflow-hidden w-full z-[10]">
                <h1 className="xl:text-7xl text-4xl font-raleway">Nuori mutta kokenut</h1>
                <h2 className="lg:w-2/3 md:w-2/3 w-full text-h1 text-xs sm:text-2xl lg:text-5xl 2xl:text-5xl font-mono mt-7 relative">
                Meillä on kokemusta seuraavien ohjelmointikielien kanssa työskentelystä: C, C++, Python, Golang, JavaScript, TypeScript, Dart, Java, Kotlin, Swift, Lua, Rust, Mojo, Assembly (x86, ARM ja Z80) ja muilla.
                </h2>
              </div>
              <img src={capsuleImg} className="absolute h-full left-0 top-0 grayscale object-cover" />
            </div>
          </div>
          <AboutPage />
          <div className="pt-10 pb-10 md:py-32">
            {" "}
            <h1 className="md:pb-10 pb-5 font-lora md:text-7xl text-4xl text-center text-black bg-white">
              Yhteistyökumppanit
            </h1>
            <div
              id="Partners"
              className="bg-white flex md:justify-between justify-around md:w-1/2 ml-auto mr-auto"
            >
              <Link to="/partners/sykekotipalvelut" className="md:w-2/5 w-1/3">
                <img
                  className="w-full object-contain hover:cursor-pointer"
                  alt="Partner Image"
                  src="https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png"
                ></img>
              </Link>
              <Link
                to="/partners/korjausvelkalaskuri"
                className="md:w-2/5 w-1/3"
              >
                <img
                  className="w-full object-contain hover:cursor-pointer"
                  alt="Partner Image"
                  src="https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp"
                ></img>
              </Link>
            </div>
          </div>
          <ContactPage />
          <SHCFooter />
        </div>
      </div>
    </div>
  );
}
