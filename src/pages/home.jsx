import SHCFooter from "../pages/elements/shcFooter.jsx";
import NavBar from "../pages/elements/navBar.jsx";
import { useEffect } from "react";
import blackRock from "../assets/black-stone.png"

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
  useEffect(() => {
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
  }, []);
  return (
    <div id="homeWrapper" className="bg-main">
      <div id="main" className="h-[50vh] flex justify-center mt-0 md:h-screen">
        <video
          autoPlay
          muted
          loop
          id="backgroundVideo"
          className="w-full object-cover z-0 top-0 m-0 p-0 bgVideoFilter"
        >
          <source src="./src/assets/HomePageBackground.mp4" type="video/mp4" />
        </video>
        <div
          id="content"
          className="absolute flex flex-col justify-center items-center text-white h-[50vh] md:h-screen"
        >
          <h1 className="font-bold text-2xl md:text-3xl text-center select-none cursor-default text-h1">
            Sunny Harbor Consulting
          </h1>
          <hr />
          <p
            id="titleDesc"
            className="font-normal font-mono text-base md:text:lg text-center text-p select-none cursor-default"
          ></p>
        </div>
      </div>
      <div id="content" className="bg-elemBackground mx-0">
        <div id="about" className="w-full m-0 p-0 block h-auto">
          <div
            id="storyDiv"
            className="grid grid-cols-1 text-h2 md:grid-cols-2 p-2 md:p-32 w-full m-auto"
          >
            <div id="story" className="w-full">
              <div>
                <h1 className="w-3/5 text-h1 text-7xl absolute font-mono">
                  Sunny Harbor Consulting on nuori ja taitava ohjelmistoyritys,
                  joka erikoistuu innovatiivisiin web- ja mobiilisovelluksiin.
                  Avoimen viestinnän ja tiiviin yhteistyön avulla tarjoamme
                  räätälöityjä ohjelmistoratkaisuja, jotka tukevat asiakkaidemme
                  menestystä.
                </h1>
              </div>
            </div>
            <img src={blackRock}/>
          </div>
          <br />
          <div id="perustajat" className="w-90 mx-auto pb-10vh">
            <h1 className="font-medium text-2xl text-center select-none cursor-default text-h1">
              Tiimimme
            </h1>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center w-full px-5 md:px-10 pb-5">
              <a
                className="bg-elemBackground rounded-lg p-0 transition duration-250 ease-in-out"
                target="_blank"
                href="https://www.linkedin.com/in/sisu-eriksson-b69475231/"
              >
                <div id="perustaja">
                  <img
                    className="w-full filter grayscale h-96 object-cover aspect-square"
                    src="./src/assets/founders/sisu.png"
                  ></img>
                  <div className="my-2 mb-2">
                    <h2 className="font-light text-[2.5vh] text-center select-none cursor-default text-h2 mb-0">
                      Sisu
                    </h2>
                    <p className="font-light text-center text-p text-sm mt-0 pb-2">
                      Frontend kehitäjä ja markkinointi
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="bg-elemBackground rounded-lg p-0 transition duration-250 ease-in-ou"
                target="_blank"
                href="https://www.linkedin.com/in/leon-g-732b31204/"
              >
                <div id="perustaja">
                  <img
                    className="w-full filter grayscale h-96 object-cover aspect-square"
                    src="./src/assets/founders/leon.png"
                  ></img>
                  <div className="my-2 mb-2">
                    <h2 className="font-light text-[2.5vh] text-center select-none cursor-default text-h2 mb-0">
                      Leon
                    </h2>
                    <p className="font-light text-center text-p text-sm mt-0 pb-2">
                      Frontend kehittäjä ja suunnittelija
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="bg-elemBackground rounded-lg p-0 transition duration-250 ease-in-out aspect-square"
                target="_blank"
                href="https://www.linkedin.com/in/victor-ocampo-a609b3250/"
              >
                <div id="perustaja">
                  <img
                    className="w-full filter grayscale h-96 object-cover aspect-square"
                    src="./src/assets/founders/victor.jpeg"
                  ></img>
                  <div className="my-2 mb-2">
                    <h2 className="font-light text-[2.5vh] text-center select-none cursor-default text-h2 mb-0">
                      Victor
                    </h2>
                    <p className="font-light text-center text-p text-sm mt-0 pb-2">
                      Full stack kehittäjä
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="bg-elemBackground rounded-lg p-0 transition duration-250 ease-in-out aspect-square"
                target="_blank"
                href="https://www.linkedin.com/in/marc-alex-smeds-17a08a26b/"
              >
                <div id="perustaja">
                  <img
                    className="w-full filter grayscale h-96 object-cover aspect-square"
                    src="./src/assets/team/alex.png"
                  ></img>
                  <div className="my-2 mb-2">
                    <h2 className="font-light text-[2.5vh] text-center select-none cursor-default text-h2 mb-0">
                      Marc
                    </h2>
                    <p className="font-light text-center text-p text-sm mt-0 pb-2">
                      Full stack kehittäjä
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
