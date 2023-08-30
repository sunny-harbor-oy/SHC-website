import { useEffect } from "react";
import { Link } from "react-router-dom";
import blackRock from "../assets/planet.png";
import AboutPage from "../pages/about.jsx";
import ContactPage from "../pages/contact.jsx";
import PartnersPage from "../pages/partners.jsx";

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
          <hr />
          <p
            id="titleDesc"
            className="font-normal font-mono sm:text-2xl lg:text-3xl text-center text-p select-none cursor-default"
          ></p>
        </div>
      </div>
      <div id="content" className="bg-white mx-0">
        <div id="about" className="w-full m-0 p-0 block h-auto">
          <div
            id="storyDiv"
            className="relative bg-black grid grid-cols-2 text-h2 p-5 pt-5 lg:p-32 w-full m-auto"
          >
            <div className="flex items-center overflow-hidden">
              <h1 className="lg:w-3/5 md:w-2/3 w-3/5 text-h1 text-xs sm:text-2xl lg:text-5xl 2xl:text-6xl absolute font-mono">
                Sunny Harbor Consulting on nuori ja taitava ohjelmistoyritys,
                joka erikoistuu innovatiivisiin web- ja mobiilisovelluksiin.
                Avoimen viestinnän ja tiiviin yhteistyön avulla tarjoamme
                räätälöityjä ohjelmistoratkaisuja, jotka tukevat asiakkaidemme
                menestystä.
              </h1>
            </div>
            <img src={blackRock} className="w-full" />
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
        </div>
      </div>
    </div>
  );
}
