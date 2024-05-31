import { useEffect, useRef } from "react";

import emialjs from "@emailjs/browser";
import leonImg from "../assets/founders/leon.webp";
import sisuImg from "../assets/founders/sisu.webp";
import victorImg from "../assets/founders/victor.webp";
import marcImg from "../assets/team/alex.webp";
import teamImg from "../assets/team/team.webp"
import { Helmet } from "react-helmet";

export default function ContactPage() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  const service_id = "service_h0lcpz6";
  const template_id = "template_q0yx1ki"; 
  const public_key = "fDBmtoOTSXOql1db-";

  const send = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const desc = descRef.current.value;
    const data = getCookieData('priceCalculator');

    const template_params = {
      name,
      email,
      phone,
      desc,
      data
    };
    emialjs.send(service_id, template_id, template_params, public_key).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        window.location = "/ota-yhteytta/ok";
      },
      function (error) {
        console.log("FAILED...", error);
        window.location = "/ota-yhteytta/failed";
      }
    );
  };

  function getCookie(name) {
    const priceCalculatorCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('priceCalculator='));

    if (priceCalculatorCookie) {
      return true
    } else {
      return false
    }
  }

  function getCookieData(name) {
    const priceCalculatorCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('priceCalculator='));

    if (priceCalculatorCookie) {
      return priceCalculatorCookie.split('=')[1]
    } else {
      return false
    }
  }

  useEffect(() => {
    btnRef.current.addEventListener("click", send);

    return () => {
      btnRef.current.removeEventListener("click", send);
    };
  });

  return (
    <div className="relative w-screen z-[0] bg-primary font-poppins">
        <Helmet>
          <title>Ota yhteyttä </title>
          <meta 
          property="og:title"
          content="Ota yhteyttä"
          />
        <meta
          property="og:description"
          content="Ota meihin yhteyttä käyttämällä alla olevaa lomaketta tai tee kustannusarvio laskurillamme, niin vastaamme mahdollisimman pian!"
        />
               <meta property="og:image" content={teamImg} />
               <meta name="keywords" content="nettisivut, ohjelmointi, sovellus, applikaatio, ohjelmistokehitys, työnohjaus, automatisointi, järjestelmä, ohjelmisto"/>
        <meta
          property="og:url"
          content="https://sunnyharbor.fi/ota-yhteytta"
        />
        <meta name="author" content="Sisu Eriksson" />
        <link rel="canonical" href="https://sunnyharbor.fi/ota-yhteytta" />
      </Helmet>
      <div className="md:pt-[16vh] pt-[12vh] mx-10 md:w-[53vw] md:mx-auto">
        <h1 className="text-[#FCA311] md:text-3xl text-[7vw] font-semibold">
          Ota yhteyttä!
        </h1>
        <h2 className="text-white md:text-xl text-[4.5vw] items-center font-light pb-[6vh] md:w-[70%] w-[80vw]">
          Ota meihin yhteyttä käyttämällä alla olevaa lomaketta tai tee
          kustannusarvio laskurillamme, niin vastaamme mahdollisimman pian!
        </h2>
      </div>
      <div className="lg:w-[90vw] md:w-[60vw] w-[80vw] mx-auto md:pb-22 pb-[5vh]">
        <div className="md:min-w-[400px] h-full mx-auto overflow-hidden md:px-[2vw] md:w-[60%]">
          <h2 className="md:text-lg text-[5.5vw] text-[#FCA311] pb-1">
            Nimi
          </h2>
          <input
            ref={nameRef}
            for="name"
            type="text"
            placeholder="Nimi"
            className="bg-[#E5E5E5] w-[90%] p-3 text-[#14213D] mb-[1.5vh]"
          ></input>
          <h2 className="md:text-lg text-[5.5vw] text-[#FCA311] pb-1">
            Sähköposti
          </h2>
          <input
            ref={emailRef}
            type="text"
            placeholder="Sähköposti"
            className="bg-[#E5E5E5] w-[90%] p-3 text-[#14213D] mb-[1.5vh]"
          ></input>
          <h2
            for="email"
            className="md:text-lg text-[5.5vw] text-[#FCA311] pb-1"
          >
            Puhelinnumero
          </h2>
          <input
            ref={phoneRef}
            type="text"
            placeholder="Puhelinnumero"
            className="bg-[#E5E5E5] w-[90%] p-3 text-[#14213D] mb-[1.5vh]"
          ></input>
          <h2 className="md:text-lg text-[5.5vw] text-[#FCA311]">
            Kuvaus
          </h2>
          <p className="md:text-base md:w-auto w-[70%] text-[4vw] md:leading-normal leading-[4.2vw] text-white font-light mb-2 md:mb-0">
            Kuvaile yksityiskohtaisesti tarvettasi.
          </p>
          <textarea
            ref={descRef}
            className="bg-[#E5E5E5] p-2 w-[90%] h-[20vh] text-[#14213D] mb-[1.5vh]"
          ></textarea>
          <div className="mb-[5vh]">
          <h2 className="md:text-lg text-[5.5vw] text-[#FCA311]">
            Kustannusarvio laskuri syöte:
          </h2>
          {
            getCookie('priceCalculator') ?          
          <p className="md:text-base md:w-auto w-[70%] text-[4vw] md:leading-normal leading-[4.2vw] text-white font-semibold mb-2 md:mb-0 flex">
            Syöte saatavilla!<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 ml-[0.2vw]" onClick={() => {
              document.cookie = 'priceCalculator=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
              window.location.reload();
            }}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

          </p> :           
          <p className="md:text-base md:w-auto w-[70%] text-[4vw] md:leading-normal leading-[4.2vw] text-white font-light mb-2 md:mb-0">
            Syöte ei ole saatavilla.<a href="./kustannusarviolaskuri" className="text-[#FCA311] ml-[1vw] font-semibold">{">"}Käy täyttämässä laskuri tästä{"<"}</a>
          </p>
          }
          </div>
          <button
            ref={btnRef}
             className="relative z-[3] sm:text-xl text-base text-secondary  text-left py-[1.5vh] px-[2vh] shadow-md bg-card2 transition duration-500 hover:scale-225 hover:text-white hover:bg-secondary rounded-lg"
          >
            Lähetä <i className="fa fa-angle-right"></i>
          </button>
        </div>
        {/* <div className="md:flex hidden flex-col justify-center items-center border-l-[0px] border-[#FCA311] md:h-[90%] overflow-hidden px-[2vw] w-full hover:cursor-pointer"><div className="md:flex hidden flex-col justify-center items-center border-l-[0px] border-[#FCA311] md:h-[90%] overflow-hidden px-[2vw] w-full hover:cursor-pointer">
          <Link
            to={"/price-estimate"}
            reloadDocument="true"
            className="w-[70%]"
          >
            <h1
              className="relative
                text-[#FCA311] text-5xl font-semibold
                "
            >
              Kustannusarvio
              <br />
              laskuriin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FCA311"
                className="z-[-1] absolute top-[2.8vw] right-[30vw] w-[2vw] h-[2vw]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </h1>
          </Link>
        </div> */}
        {/* <div className="md:flex hidden flex-col justify-center items-center border-l-[0px] border-[#FCA311] md:h-[90%] overflow-hidden px-[2vw] w-full hover:cursor-pointer">
          <Link
            to={"/price-estimate"}
            reloadDocument="true"
            className="w-[70%]"
          >
            <h1
              className="relative
                text-[#FCA311] text-5xl font-semibold
                "
            >
              Kustannusarvio
              <br />
              laskuriin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FCA311"
                className="z-[-1] absolute top-[2.8vw] right-[30vw] w-[2vw] h-[2vw]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </h1>
          </Link>
        </div> */}
      </div>
      <div
        className="w-screen bg-primary font-poppins "
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
              Toimitusjohtaja
              
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
              Teknologiajohtaja ja Fullstack kehittäjä
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
