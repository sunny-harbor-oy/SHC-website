import { useEffect, useRef } from "react";
import SlideShow from "../elements/slideShow.jsx";
import DropDown from "../elements/dropDownBox.jsx";
import { Link } from "react-router-dom";

import background from "../assets/earth.mp4";

// The squad
import leonImg from "../assets/founders/leon.png";
import sisuImg from "../assets/founders/sisu.jpg";
import victorImg from "../assets/founders/victor.jpg";
import marcImg from "../assets/team/alexv2.png";

// Ilmo
import ilmoImg from "../assets/Ilmo.png";
import ilmoVid from "../assets/ilmo-record.mp4";

// Syke 
import sykeImg from "../assets/syke.png";
import sykeLaptop from "../assets/sykeLaptop.png";
import sykePhone from "../assets/sykePhone.png";

// KVL
import velkaImg from "../assets/velka.webp";
import velkaLaptop from "../assets/velkaLaptop.png";
import velkaRaportti from "../assets/velkaRaportti.png";

// Moon
import moonBg from "../assets/moonBg.mp4";
import moonLogo from "../assets/moonlogo.png";
import moonPhone from "../assets/moon-wallet.png";

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
  const ilmoDescription = useRef(null);
  const ilmoContext = useRef(null);
  const ilmoButton = useRef(null);
  const ilmoVidRef = useRef(null);
  let ilmoOpen = false;
  let ilmoHeight = 0;
  let ilmoVidTimeout = null;
  let isMobile = false;

  const ilmoUpdateHeight = () => {
    ilmoOpen = false;
    ilmoHeight = ilmoContext.current.children[0].offsetHeight;
    ilmoContext.current.style.height = ilmoOpen ? `auto` : `${ilmoHeight}px`;
    ilmoContext.current.children[0].style.borderRadius = isMobile ? '0px' : (ilmoOpen ? `10px 10px 0px 0px` : `10px`);
  }

  const ilmoVideo = (e) => {
    if (ilmoVidRef.current === null) return;
    const rect = ilmoVidRef.current.getBoundingClientRect();
    if (rect.y < window.innerHeight && rect.y > -ilmoVidRef.current.getBoundingClientRect().height) {
      if (ilmoVidTimeout) return;
      ilmoVidRef.current.play();
      ilmoVidTimeout = setTimeout(() => {
        ilmoVidRef.current.pause();
      }, ilmoVidRef.current.duration / 2 * 1000);
    } else {
      ilmoVidRef.current.pause();
      ilmoVidRef.current.currentTime = 0;
      clearInterval(ilmoVidTimeout);
      ilmoVidTimeout = null;
    }
  }

  const updateMobile = () => {
    isMobile = window.innerWidth < 768;
  }

  useEffect(() => {
    updateMobile();
    ilmoUpdateHeight();

    ilmoButton.current.addEventListener("click", () => {
        ilmoOpen = !ilmoOpen;
        ilmoContext.current.style.height = ilmoOpen ? `auto` : `${ilmoHeight}px`;
        ilmoContext.current.children[0].style.borderRadius = isMobile ? '0px' : (ilmoOpen ? `10px 10px 0px 0px` : `10px`);
    });

    window.addEventListener("resize", () => {
      ilmoUpdateHeight();
      updateMobile();
    });

    window.addEventListener("scroll", ilmoVideo);

    return () => {
        window.removeEventListener("scroll", ilmoVideo);
    }
  }, []);

  const ilmoFunc = () => {
    ilmoDescription.current.style.height = "100vh";
  };

  return (
    <div id="homeWrapper" className="w-screen overflow-x-hidden bg-primary">
      <SlideShow
        delay={8 * 1000}
        duration={200000}
        maxAfk={10}
        swipeThreshold={50}
        swipeTimer={250}
        viewPortClassNames="w-screen h-screen"
      >
        <div className="relative w-screen h-screen font-semibold text-white font-poppins">
          <video
            src={background}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-screen 2xl:object-fill object-cover h-screen z-[0]"
          />
          <div className="px-[5vw] pb-[2vh] h-screen flex flex-col justify-center relative z-[2]">
            <h1 className="sm:text-h1-sm text-h1 leading-[8vh] sm:leading-[8vw] lg:leading-[7.2vh] xl:leading-[7.2vh]">
              Ratkaisuja
              <br />
              joihin luotat.
              <br />
            </h1>
            <h2 className="sm:w-[80vh] sm:text-h2-sm text-h2 sm:h-[20vh] h-[37vh] pt-[3vh] font-medium">
              Uskomme vahvasti, että luomalla kestäviä ja pitkäikäisiä
              IT-ratkaisuja, voimme mahdollistaa asiakkailemme ennennäkemättömän
              edun teknologiassa.
            </h2>
            <div className="relative sm:mt-[10vh] mt-[5vh] ">
              <div className="absolute hidden z-[1] bg-secondary filter blur-md w-[23.4vw] h-[4.3vw] px-[1vw] py-[2vw]"></div>
              <Link
                to={"./price-estimate"}
                className="relative z-[3] sm:text-[2.43vh] text-[4.6vw] text-left py-[1.5vh] px-[2vh] bg-gray-800 rounded-lg"
              >
                Kustannusarvio sekunneissa! &rarr;
              </Link>
            </div>
          </div>
          {/* <div className="fixed z-[-1] filter top-0 left-0 h-screen w-screen bg-gradient-to-br from-[#14213D] via-[#14213D] to-[#000000]"></div> */}
        </div>
        <div className="bg-[#BFA28E] relative grid w-screen h-screen grid-cols-1 md:grid-cols-2 font-semibold text-white font-poppins">
          <div className="px-[5vw] pb-[2vh] h-screen flex flex-col md:justify-center md:pt-0 pt-[13vh] z-[1]">
            <h1 className="sm:text-h1-sm text-[10vw]">ILMO</h1>
            <h2 className="sm:w-[80vh] sm:text-h2-sm text-h2 sm:h-[20vh] h-[35vh] font-medium">
              ILMO on helppokäyttöinen työnjakosovellus, joka on suunniteltu
              helpottamaan organisaatioiden arkea tarjoamalla selkeän ja
              tehokkaan tavan hallita, jakaa ja seurata työtehtäviä.
            </h2>
            <div className="relative sm:mt-[10vh] sm:h-[2.43vh] h-[4.6vw] py-[1.5vh] px-[2vh] w-[1vw]"></div>
            {/* <div className="relative sm:mt-[13vh]">
              <Link
                onClick={ilmoFunc}
                className="relative z-[3] text-[2.4vh] text-left py-[1.5vh] px-[2vh] bg-ilmoPrimaryColor rounded-lg"
              >
                Katso tarkemmin! &rarr;
              </Link>
            </div> */}
          </div>
          {/*           <div className="ml-16 h-screen mt-[25vh] flex flex-col justify-center md:relative absolute z-[0]">
            <img src={ilmoImg} className="w-3/4 my-auto"/>
          </div> */}
          <div className="h-screen md:relative absolute md:bottom-auto bottom-[-40vh] 2xl:left-0 2xl:right-auto lg:right-[-7vw] md:right-[-8vh] right-0 lg:ml-[1vw] md:top-[14vh] z-[0]">
            <img
              src={ilmoImg}
              className="md:w-[70vh] h-screen w-screen md:my-auto md:object-cover object-contain"
            />
          </div>
        </div>
      </SlideShow>
      <div
        ref={ilmoDescription}
        className="absolute transition-all duration-[250ms] top-[100vh] h-0 w-screen bg-white"
      ></div>
      <div className="w-screen py-[5vw] px-[10vw] sm:grid grid-cols-3 gap-[10vw] block bg-primary">
        <div className="shadow-lg border-solid bg-card2 sm:h-[19vw] sm:w-[19vw] w-[70vw] mx-auto sm:my-0 my-[4vh] sm:py-0 py-[12vw] rounded-lg text-center text-white font-poppins">
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
          <h3 className="sm:text-h3-sm text-h3 md:font-medium font-semibold w-[90%] mx-auto sm:pt-[2vw]">
            Kustannustehokkaat ratkaisut
          </h3>
        </div>
        <div className="shadow-lg border-solid bg-card2 sm:h-[19vw] sm:w-[19vw] w-[70vw] mx-auto sm:my-0 my-[4vh] sm:py-0 py-[12vw] rounded-lg text-center text-white font-poppins">
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
          <h3 className="sm:text-h3-sm text-h3 md:font-medium font-semibold w-[90%] mx-auto sm:pt-[2vw]">
            Aktiivinen ja erehtymätön tuki
          </h3>
        </div>
        <div className="shadow-lg border-solid bg-card2 sm:h-[19vw] sm:w-[19vw] w-[70vw] mx-auto sm:my-0 my-[4vh] sm:py-0 py-[12vw] rounded-lg text-center text-white font-poppins">
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
          <h3 className="sm:text-h3-sm text-h3 md:font-medium font-semibold w-[90%] mx-auto sm:pt-[2vw]">
            Täysin räätälöidyt ratkaisut
          </h3>
        </div>
      </div>
      <div className="bg-primary pb-[5vw]">
      <h1 className="text-center md:text-[3vw] text-[9vw] font-semibold mx-auto md:mb-[2vw] mb-[10vw] text-secondary" id="customers">
          Löydä itsesi muiden joukosta!
      </h1>
      <SlideShow
        delay={10 * 1000}
        duration={200000}
        maxAfk={10}
        swipeThreshold={50}
        swipeTimer={250}
        viewPortClassNames="md:w-[90vw] w-[90vw] md:h-[40vw] h-[63vh] md:font-poppins font-oxanium mx-auto rounded-lg font-light"
      >
        <div className="w-[90vw] md:h-[40vw] h-[63vh] relative bg-syke text-white overflow-hidden">
          <img src={sykeImg} className="md:h-[11vh] max-md:to-zinc-100 object-contain md:py-7 md:relative max-md:absolute max-md:h-[8vh] max-md:top-[3vh] left-[50%] translate-x-[-55%]"></img>
          <div className="md:grid grid-cols-2 space-x-10 md:px-[2vw] h-[27vw] hidden">
          <div className="md:h-full my-auto translate-y-[-2.5vw]">
          <h3 className="text-[1.5vw] font-semibold py-[1vw]">Tehokasta ja automatisoitua työnjakoa</h3>
          <p className="text-[1.3vw] ">
          Syke Kotipalvelut tarjoaa henkilökohtaista avustajapalvelua, ja OmaSyke on projekti, joka kehitettiin tukemaan heidän toimintaansa ohjelmiston avulla. Kehitimme ohjelmiston, joka yhdistää mobiili- ja web-alustan. Esimiehet hallinnoivat työkeikkoja, käyttäjiä ja raportteja helppokäyttöisellä ja monitoimisella admin-nettisivulla. <br/><br/>Työntekijät käyttävät android- ja iOS-yhteensopivaa mobiilisovellusta keikkojen lukemiseen, osallistumiseen ja raportointiin. Teknologiat React, TypeScript, Gin, Golang ja Flutter takaavat järjestelmän tehokkuuden ja saumattoman integraation. OmaSyke tehosti ja automatisoi Syke Kotihoitopalveluiden liiketoiminnan!
          </p>
          </div>
          <div className="flex justify-center px-7 md:mt-[-2vw] w-full">
          <img src={sykeLaptop} className="object-contain md:w-[35vw]"></img>
          <img src={sykePhone} className="object-contain md:w-[15vw] md:mt-[-2vw] md:ml-[-13vw]"></img>
          </div>
          </div>
          <div className="overflow-hidden absolute top-[15vh] h-[72%] w-full">
          </div>
          <img src={sykeLaptop} className="object-contain absolute md:hidden left-[50%] translate-x-[-50%] h-[110%] bottom-[-18%]"></img>
          <img src={sykePhone} className="object-contain absolute md:hidden left-[75%] translate-x-[-50%] h-[54%] bottom-[15%]"></img>
        </div>
        <div className="md:w-[90vw] w-[90vw] md:h-[40vw] h-[63vh] relative">
          <video
            src={moonBg}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover bg-black"
          />
          <div className="h-full w-full relative md:flex">
          <h3 className="text-[3vh] font-bold py-[1vw] absolute md:hidden block text-white w-full text-center top-[13vh] font-oxanium">Moon App</h3>
          <div className="absolute md:block hidden frostedglass with-shadow w-[40vw] h-[29vw] text-white ml-[2vw] px-[2vw] py-[1vw] mt-auto mb-auto bottom-0 translate-y-[0%]">
            <h3 className="text-[1.5vw] font-semibold py-[1vw]">Markkinoinnin edelläkävijä - Moon App</h3>
            <p className="text-[1.3vw]">
            Moon Application on meidän uusin projekti, jonka tarkoitus on mullistaa vaikuttajamarkkinointi. Sovelluksen kehityksessä panostimme eniten käyttäjäkokemukseen.<br/><br/>
            Projektiin sisältyy web-pohjainen adminpaneeli, josta hallinnoidaan sisällöntuottajien markkinointihaasteita, sekä sovellus, jonka avulla vaikuttajat voivat osallistua haasteisiin ja ansaita.  Työstimme myös projektin kotisivut! Käytimme teknologioina flutteria, typescriptiä, giniä, golangia ja pythonia.            </p>
          </div>
          <img src={moonPhone} className="absolute md:right-[7vw] md:w-[22vw] h-[90%] object-contain md:top-[50%] max-md:right-[50%] max-md:translate-x-[50%] bottom-[-10vh] md:translate-y-[-50%]"/>
          </div>
          <img src={moonLogo} className="object-contain absolute md:w-[4vw] w-[20vw] left-[50%] md:top-[1.5vh] top-[2vh] translate-x-[-50%]"></img>
        </div>
        <div className="relative w-[90vw] md:h-[40vw] h-[63vh] bg-velka overflow-hidden">
        <img src={velkaImg} className="md:h-[11vh] max-md:h-[10vh] max-md:absolute md:relative object-contain md:py-7 left-[50%] translate-x-[-50%] max-md:top-[4vh]"></img>
        <div className="md:grid grid-cols-2 hidden space-x-10 md:px-[2vw] h-[27vw]">
          <div className="md:h-full my-auto">
          <h3 className="text-[1.5vw] font-semibold py-[1vw]">Isännöitsijätodistus selkokielellä</h3>
          <p className="text-[1.3vw] ">
          Korjausvelkalaskuri® avaa isännöitsijäntodistuksen ja korjaussuunnitelman sisällön selkeällä kielellä, tarjoten yksityiskohtaisen katsauksen helposti luettavan raportin muodossa taloyhtiön tuleviin remontteihin ja niiden arvioituihin kustannuksiin.<br/><br/>Kehittämiseen käytetty taitomme ja teknologiat, kuten React, JavaScript, Gin ja Golang, takaavat laskurin tehokkuuden ja luotettavuuden. Suunnittele ja hallinnoi korjausvelkaasi helposti ja pitkäjänteisesti Korjausvelkalaskurin avulla!          
          </p>
          </div>
          <div className="relative px-7">
          <img src={velkaLaptop} className="object-contain md:block hidden absolute md:w-[35vw] mx-auto my-auto top-[50%] right-[10%] translate-y-[-50%] z-[1]"></img>
          <img src={velkaRaportti} className="object-contain md:block hidden absolute md:w-[20vw] top-[50%] right-[2vw] translate-y-[-60%] z-[2]"></img>
          </div>
        </div>
        <img src={velkaLaptop} className="object-contain md:hidden block absolute h-[40%] bottom-[15%] left-[50%] translate-x-[-50%]"></img>
        <img src={velkaRaportti} className="object-contain md:hidden block absolute h-[45%] bottom-[20%] left-[65%] translate-x-[-50%] z-[0]"></img>
        </div>
      </SlideShow>
      </div>
      <h1 id="products" className="text-center md:text-[3vw] text-[9vw] pt-[7vh] font-semibold mx-auto md:mb-[2vw] mb-[10vw] text-secondary">
          Tuotteemme
      </h1>
      <div ref={ilmoContext} style={{transitionProperty: "all", transitionDuration: "250ms"}} className="transition-all md:max-w-[2500px] duration-200 bg-ilmoSecondaryColor relative md:px-[1vw] md:py-[1vw] md:w-[98vw] w-screen mx-auto md:rounded-lg text-white font-poppins overflow-hidden">
      <div className="absolute max-md:left-0 top-0 h-[75vh] max-h-[900px] w-full overflow-hidden">
        <video ref={ilmoVidRef} src={ilmoVid} autoPlay loop muted playsInline className="absolute top-[-5vh] h-[90vh] max-h-[1000px] md:w-[98vw] w-screen object-cover md:rounded-lg"></video>
        <h2 ref={ilmoButton} className="max-md:hidden hover:cursor-pointer text-[1.8vw] font-semibold text-center px-[1vw] md:rounded-lg absolute bottom-[5%] left-[50%] translate-x-[-50%] z-[1]"><i className="fa fa-angle-right rotate-90"></i> Tuotteeseen <i className="fa fa-angle-right rotate-90"></i></h2>
      </div>
      <div className="h-[80vh] max-h-[900px] pt-[30vh] md:pt-[20vh] relative z-[0]">
      <h1 className="md:text-[3vw] text-[10vw] font-poppins font-semibold text-center">ILMO</h1>
      <div className="md:block md:frostedglass-ilmo frostedglass-ilmo-mobile with-shadow md:w-[40vw] w-[80%] text-white mx-auto">
      <h3 className="md:text-[1.5vw] text-[4.4vw] font-semibold py-[1vw] px-[2vw] w-full text-center">ILMO tekee työnteon sujuvaksi:<br></br>Hallitse, jaa ja seuraa tehtäviä helposti ja tehokkaasti organisaatiossasi!</h3>
      </div>
      </div>
      <div className="px-[2vw] pt-[2vh] top-[80vh] w-full grid grid-cols-1 md:grid-cols-2">
      <div className="grid grid-cols-1 grid-rows-2 h-[50vh] max-h-[500px]">
        <div className="w-[35vw]">
          <h2 className="text-[2vw] font-poppins font-semibold">Mikä on ILMO?</h2>
          <h3 className="text-[1.2vw] font-poppins">ILMO on helppokäyttöinen työnjakosovellus, joka on suunniteltu helpottamaan organisaatioiden arkea tarjoamalla selkeän ja tehokkaan tavan hallita, jakaa ja seurata työtehtäviä.</h3>
        </div>
        <div className="w-[35vw]">
          <h2 className="text-[2vw] font-poppins font-semibold">Sujuvoita työntekoa Ilmolla!</h2>
          <h3 className="text-[1.2vw] font-poppins">ILMO on helppokäyttöinen työnjakosovellus, joka tehostaa organisaatioiden työnkulkuja. Intuitiivinen käyttöliittymä mahdollistaa vaivattoman työtehtävien hallinnan, jakamisen ja seuraamisen. ILMO yhdistää tiimit ja tehtävät saumattomasti, tarjoten selkeän ja tehokkaan tavan parantaa työn virtausta organisaatiossasi.</h3>
        </div>
      </div>
      <div>
        <h2 className="text-[2vw] font-poppins font-semibold">UKK:</h2>
        <DropDown test="w-full mb-[1vh] h-[3vh]">
          <h1 className="w-full hover:cursor-pointer bg-ilmoPrimaryColor px-[1vw] py-[1vh] rounded-lg text-[1.35vw] font-poppins font-semibold">Miten ILMO eroaa muista työnjakosovelluksista?</h1>
          <h2 className="px-[1vw] py-[1vh] bg-ilmoPrimaryTextColor rounded-b-lg text-[1vw]">ILMO tarjoaa helppokäyttöisen ja tehokkaan tavan hallita, jakaa ja seurata työtehtäviä. Käyttäjälähtöinen suunnittelu, reaaliaikainen yhteistyö ja monialustainen käytettävyys tekevät siitä ensiluokkaisen työkalun organisaatioiden arjen tehostamiseksi. Lisäksi ILMO on alan edullisin hinta, tarjoten huippuluokan ominaisuudet kilpailukykyiseen hintaan.</h2>
        </DropDown>
        <DropDown test="w-full mb-[1vh]">
          <h1 className="w-full hover:cursor-pointer bg-ilmoPrimaryColor px-[1vw] py-[1vh] rounded-lg text-[1.35vw] font-poppins font-semibold">Onko ILMO turvallinen käyttää organisaation sisäisissä työtehtävissä?</h1>
          <h2 className="px-[1vw] py-[1vh] bg-ilmoPrimaryTextColor rounded-b-lg text-[1vw]">ILMO erottuu kilpailijoistaan monipuolisilla ominaisuuksillaan, kuten räätälöitävillä ratkaisuilla, reaaliaikaisella yhteistyöllä ja edullisuudellaan. Se tarjoaa kattavan hallintosivun ja mobiilisovelluksen, jotka yhdessä muodostavat tehokkaan työkalun työvuorojen hallintaan.</h2>
        </DropDown>
        <DropDown test="w-full mb-[1vh]">
          <h1 className="w-full hover:cursor-pointer bg-ilmoPrimaryColor px-[1vw] py-[1vh] rounded-lg text-[1.35vw] font-poppins font-semibold">Voidaanko ILMO integroida muihin organisaation järjestelmiin?</h1>
          <h2 className="px-[1vw] py-[1vh] bg-ilmoPrimaryTextColor rounded-b-lg text-[1vw]">Kyllä, ILMO on suunniteltu tietoturvalliseksi. Kaikki tiedot siirretään salatussa muodossa, ja käyttäjien hallintaan liittyvät toiminnot ovat suojattuja. ILMO takaa luottamuksellisen työskentely-ympäristön organisaatiolle.</h2>
        </DropDown>
        <DropDown test="w-full mb-[1vh]">
          <h1 className="w-full hover:cursor-pointer bg-ilmoPrimaryColor px-[1vw] py-[1vh] rounded-lg text-[1.35vw] font-poppins font-semibold">Miksi valita ILMO työnjakosovellukseksi, ja miten se eroaa muista alan ratkaisuista?</h1>
          <h2 className="px-[1vw] py-[1vh] bg-ilmoPrimaryTextColor rounded-b-lg text-[1vw]">Kyllä, ILMO on suunniteltu integroitumaan saumattomasti muiden järjestelmien kanssa. Tarjoamme avoimen rajapinnan, joka mahdollistaa integraatiot esimerkiksi palkanlaskenta- tai henkilöstöhallintajärjestelmiin. Näin varmistamme, että ILMO sopeutuu organisaation olemassa oleviin prosesseihin.</h2>
        </DropDown>
      </div>
      </div>
      <Link to={"/contact"} reloadDocument="true" className="text-center absolute left-[50%] translate-x-[-50%] justify-center font-poppins text-[1.5vw] pb-[1vh] font-bold">Kiinnostuitko? Ota yhteyttä!</Link>
      <div className="h-[5vh] w-full"></div>
      </div>
      <div className="w-screen bg-primary font-poppins pt-[7vh] md:pt-[20vh]" id="team">
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
              Perustaja ja frontend kehittäjä
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
            <h2 className="text-center md:text-[1vw] text-[4vw] my-0 md:pb-0 pb-[3vw]">
              Teknologiajohtaja ja fullstack kehittäjä
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
      </div>
    </div>
  );
}
