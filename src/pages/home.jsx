import { useEffect } from "react";
import blackRock from "../assets/planet.png";

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
          className="w-full object-cover z-0 top-0 m-0 p-0 grayscale"
        >
          {/* <source src="./src/assets/HomePageBackground.mp4" type="video/mp4" /> */}
          <source src="./src/assets/earth.mp4" type="video/mp4" />
        </video>
        <div
          id="content"
          className="absolute flex flex-col justify-center items-center text-white h-[50vh] md:h-screen"
        >
          <h1 className="font-bold text-6xl text-center select-none cursor-default text-h1">
            Sunny Harbor Consulting
          </h1>
          <hr />
          <p
            id="titleDesc"
            className="font-normal font-mono text-3xl text-center text-p select-none cursor-default"
          ></p>
        </div>
      </div>
      <div id="content" className="bg-elemBackground mx-0">
        <div id="about" className="w-full m-0 p-0 block h-auto">
          <div
            id="storyDiv"
            className="relative grid grid-cols-2 text-h2 p-5 pt-10 md:p-32 w-full m-auto"
          >
            <div className="flex items-center">
              <h1 className="w-3/5 text-h1 text-xs sm:text-2xl md:text-5xl 2xl:text-6xl absolute font-mono">
                Sunny Harbor Consulting on nuori ja taitava ohjelmistoyritys,
                joka erikoistuu innovatiivisiin web- ja mobiilisovelluksiin.
                Avoimen viestinnän ja tiiviin yhteistyön avulla tarjoamme
                räätälöityjä ohjelmistoratkaisuja, jotka tukevat asiakkaidemme
                menestystä.
              </h1>
            </div>
            <img src={blackRock} className="w-full" />
          </div>
          <div id="perustajat" className="w-90 mx-auto pb-10vh">
            <div>
                <div>
                    <a target="_blank" className='bg-white flex h-[90vh]' href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                        <div>
                            <h1 className='text-black font-lora text-8xl ml-32 mt-20'>Sisu Eriksson</h1>
                            <h2 className='text-black font-raleway font-bold text-2xl ml-32'>Frontend kehitäjä ja markkinointi</h2>
                            <p className='text-black font-lora mt-10 ml-20 text-8xl w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                        </div>
                        <img className='aspect-1:4 h-[80vh] mt-20 right-[10vw] object-cover grayscale absolute' src='./src/assets/founders/transparent_sisu.png'></img>
                    </a>
                    <a target="_blank" className='bg-black flex h-[90vh]' href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                        <div>
                            <h1 className='text-white font-lora text-8xl ml-32 mt-20'>Leon Gustafsson</h1>
                            <h2 className='text-white font-raleway font-bold text-2xl ml-32'>Frontend kehitäjä ja suunnittelija</h2>
                            <p className='text-white font-lora mt-10 ml-20 text-8xl w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                        </div>
                        <img className='aspect-1:4 h-[80vh] mt-20 right-[10vw] object-cover grayscale absolute' src='./src/assets/founders/transparent_leon.png'></img>
                    </a>
                    <a target="_blank" className='bg-white flex h-[90vh]' href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                        <div>
                            <h1 className='text-black font-lora text-8xl ml-32 mt-20'>Victor Ocampo</h1>
                            <h2 className='text-black font-raleway font-bold text-2xl ml-32'>Full stack kehittäjä</h2>
                            <p className='text-black font-lora mt-10 ml-20 text-8xl w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                        </div>
                        <img className='aspect-1:4 h-[80vh] mt-20 right-[10vw] object-cover grayscale absolute' src='./src/assets/founders/transparent_victor.png'></img>
                    </a>
                    <a target="_blank" className='bg-black flex h-[90vh]' href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                        <div>
                            <h1 className='text-white font-lora text-8xl ml-32 mt-20'>Marc Smeds</h1>
                            <h2 className='text-white font-raleway font-bold text-2xl ml-32'>Full stack kehittäjä</h2>
                            <p className='text-white font-lora mt-10 ml-20 text-8xl w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                        </div>
                        <img className='aspect-1:4 h-[80vh] mt-20 right-[10vw] object-cover grayscale absolute' src='./src/assets/team/transparent_alex.png'></img>
                    </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
