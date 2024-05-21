import background from "../assets/WebVideo.webm";
import backgroundForMobile from "../assets/MobileVideo.mp4";
import AboutUs from "../pages/aboutUs.jsx";
import TextSection from "../pages/textSection.jsx";
import References from "./references";
import Calendar from "../elements/calendar";
import { Helmet } from "react-helmet";

// The squad
/* import leonImg from "../assets/founders/leon.jpg";
import sisuImg from "../assets/founders/sisu.jpg";
import victorImg from "../assets/founders/victorv2.jpg";
import marcImg from "../assets/team/alexv3.jpg"; */

export default function HomePage(language = "fi") {
  return (
    <div id="homeWrapper" className="w-screen overflow-x-hidden bg-primary">
      <Helmet>
      <title>Sunny Harbor Oy: Mobiili- ja Websovellukset</title>
        <meta
          name="description"
          content="Tavoitteemme on olla alan läpinäkyvin ja luotettavin vaihtoehto IT-ratkaisuillesi! Taidokkaasti suunnittelemamme mobiili- ja verkkosovellukset on tarkoitettu juuri sinulle, jos tavoitteesi on luoda yrityksellesi ainutlaatuinen kilpailuetu."
        />
        <meta property="og:title" content="Sunny Harbor" />
        <meta
          property="og:description"
          content="Tavoitteemme on olla alan läpinäkyvin ja luotettavin vaihtoehto IT-ratkaisuillesi! Taidokkaasti suunnittelemamme mobiili- ja verkkosovellukset on tarkoitettu juuri sinulle, jos tavoitteesi on luoda yrityksellesi ainutlaatuinen kilpailuetu."
        />
          <meta property="og:image" content={background} />
          <meta
          name="keywords"
          content="läpinäkyvyys, ohjelmistokehitys, nettisivut, sovellus, peli, ulkopuolinen toimija, kommunikaatio, sopimukset, ominaisuudet, hinta, ylläpito, jatkokehitys, projektin toteutus, suunnittelu, immateriaalioikeudet, rehellisyys, suora kommunikaatio, ohjelmistokehittäjät, suunnittelijat"
        />
        <meta
          property="og:url"
          content="https://sunnyharbor.fi"
        />
        <meta name="author" content="Sisu Eriksson" />
        <link
          rel="canonical"
          href="https://sunnyharbor.fi"
        />
      </Helmet>
      <div className="relative w-screen h-screen font-semibold text-white font-poppins">
        <video  
          src={window.innerWidth < 762 ? backgroundForMobile : background}
          autoPlay
          loop
          muted
          playsInline
          className="absolute bg-black w-screen 2xl:object-cover object-cover h-screen z-[0]"
        />
      </div>
      <AboutUs />
      <TextSection />
      <References />
      <div id="calendar" className="mx-6">
      <Calendar />
      </div>
      {/* <div className="w-screen pb-[5vw] md:pb-[10vh] px-[10vw] sm:grid grid-cols-3 gap-[10vw] block bg-primary">
        <div className="transition duration-500 hover:scale-110 md:hover:scale-105 hover:bg-ilmoPrimaryColor shadow-lg border-solid bg-card2 sm:h-[19vw] sm:w-[19vw] w-[70vw] mx-auto sm:my-0 my-[4vh] sm:py-0 py-[12vw] rounded-lg text-center text-white font-poppins">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FCA311"
            className="mx-auto md:w-[8vw] w-[25vw] md:pt-[2vw] md:mb-0 mb-[0.5vw]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="sm:text-2xl text-lg md:font-normal font-semibold w-[90%] mx-auto sm:pt-[2vw]">
            Kilpailukykyiset ratkaisut
          </h3>
        </div>
        <div className="transition duration-500 hover:scale-110 md:hover:scale-105 hover:bg-ilmoPrimaryColor  shadow-lg border-solid bg-card2 sm:h-[19vw] sm:w-[19vw] w-[70vw] mx-auto sm:my-0 my-[4vh] sm:py-0 py-[12vw] rounded-lg text-center text-white font-poppins">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FCA311"
            className="mx-auto md:w-[8vw] w-[25vw] md:pt-[2vw] md:mb-0 mb-[0.5vw]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
          <h3 className="sm:text-2xl text-lg md:font-normal font-semibold w-[90%] mx-auto sm:pt-[2vw]">
            Aktiivinen ja erehtymätön tuki
          </h3>
        </div>
        <div className="transition duration-500 hover:scale-110 md:hover:scale-105 hover:bg-ilmoPrimaryColor shadow-lg border-solid bg-card2 sm:h-[19vw] sm:w-[19vw] w-[70vw] mx-auto sm:my-0 my-[4vh] sm:py-0 py-[12vw] rounded-lg text-center text-white font-poppins">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FCA311"
            className="mx-auto md:w-[8vw] w-[25vw] md:pt-[2vw] md:mb-0 mb-[0.5vw]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          <h3 className="sm:text-2xl text-lg md:font-normal font-semibold w-[90%] mx-auto sm:pt-[2vw]">
            Täysin räätälöidyt ratkaisut
          </h3>
        </div>
      </div> */}
      {/* <div
        className="w-screen bg-primary font-poppins pt-[17vh] md:pt-[20vh]"
        id="team"
      >
        <h1 className="md:text-[3vw] text-[9vw] left-0 font-semibold text-secondary text-center w-screen">
          Tiimimme
        </h1>
        <div className="block md:grid grid-cols-4 gap-[2vw] w-[90vw] md:h-[43vw] py-[5vw] font-poppins font-bold mx-auto text-white">
          <div className="bg-card2 md:h-[full] h-auto relative rounded-lg overflow-hidden font-normal md:my-0 my-[5vh]">
            <img
              src={sisuImg}
              className="w-full mx-auto md:h-[26vw] h-[100vw] object-cover"
            ></img>
            <h1 className="text-center leading-snug md:text-[2vw] text-[7vw] md:pb-[-1vw] pb-[-2vw] md:pt-[0.5vw] pt-[1vw]">
              Sisu Eriksson
            </h1>
            <h2 className="text-center md:text-[1vw] text-[4vw] my-0 md:pb-0 pb-[3vw]">
              Toimitusjohtaja ja frontend kehittäjä
            </h2>
          </div>
          <div className="bg-card2 md:h-[full] h-auto relative rounded-lg overflow-hidden font-normal md:my-0 my-[5vh]">
            <img
              src={leonImg}
              className="w-full mx-auto md:h-[26vw] h-[100vw] object-cover"
            ></img>
            <h1 className="text-center leading-snug md:text-[2vw] text-[7vw] md:pb-[-1vw] pb-[-2vw] md:pt-[0.5vw] pt-[1vw]">
              Leon Gustafsson
            </h1>
            <h2 className="text-center md:text-[1vw] text-[4vw] my-0 md:pb-0 pb-[3vw]">
              Frontend kehittäjä
            </h2>
          </div>
          <div className="bg-card2 md:h-[full] h-auto relative rounded-lg overflow-hidden font-normal md:my-0 my-[5vh]">
            <img
              src={victorImg}
              className="w-full mx-auto md:h-[26vw] h-[100vw] object-cover"
            ></img>
            <h1 className="text-center leading-snug md:text-[2vw] text-[7vw] md:pb-[-1vw] pb-[-2vw] md:pt-[0.5vw] pt-[1vw]">
              Victor Ocampo
            </h1>
            <h2 className="text-center md:text-[1vw] text-[4vw] my-0 md:pb-0 b-[3vw] pb-[3vw]">
              Teknologiajohtaja ja backend kehittäjä
            </h2>
          </div>
          <div className="bg-card2 md:h-[full] h-auto relative rounded-lg overflow-hidden font-normal md:my-0 my-[5vh]">
            <img
              src={marcImg}
              className="w-full mx-auto md:h-[26vw] h-[100vw] object-cover"
            ></img>
            <h1 className="text-center leading-snug md:text-[2vw] text-[7vw] md:pb-[-1vw] pb-[-2vw] md:pt-[0.5vw] pt-[1vw]">
              Marc Smeds
            </h1>
            <h2 className="text-center md:text-[1vw] text-[4vw] my-0 md:pb-0 pb-[3vw]">
              Fullstack kehittäjä
            </h2>
          </div>
        </div>
      </div> */}
    </div>
  );
}
