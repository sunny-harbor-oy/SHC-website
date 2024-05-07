import { Link } from "react-router-dom";
import SlideShow from "../elements/slideShow.jsx";

import socialImage from "../assets/blogcard1.jpg";
import victorImg from "../assets/founders/victor.jpg";
import sisuImg from "../assets/founders/sisu_blogv2.png";
import office from "../assets/office.jpeg";
import saas from "../assets/saas-blog.jpeg";
import { Helmet } from "react-helmet";

export default function BlogitPage() {
  return (
    <div className="min-h-screen mt-[8vh] bg-primary w-screen font-poppins ">
      <Helmet>
        <title>Blogimme</title>
        <meta
          name="description"
          content="Blogi tekstimme tarjoavat oivan mahdollisuuden tutustua teknologian
          maailmaan ja sen kiperiin kysymyksiin."
        />
        <meta property="og:title" content="Blogimme" />
        <meta
          property="og:description"
          content="Blogi tekstimme tarjoavat oivan mahdollisuuden tutustua teknologian
          maailmaan ja sen kiperiin kysymyksiin."
        />
      </Helmet>
      <h1 className="text-center pt-[4vh] text-[5vh] text-secondary font-semibold">
        Blogit
      </h1>
      <h2 className="text-center md:min-w-[600px] md:text-[1.3rem] w-[90%] md:w-[40%] mx-auto text-white text-[1]">
        Blogi tekstimme tarjoavat oivan mahdollisuuden tutustua teknologian
        maailmaan ja sen kiperiin kysymyksiin.
      </h2>
      <div className="grid min-h-[60vh] gap-20 md:gap-10 mt-[5vh] max-md:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:px-[10vw] pb-[5vh]">
        <Link
          to={"/blogs/shc_saas"}
          reloadDocument="true"
          className="w-[80%] md:w-full max-md:mx-auto min-h-[70vh] md:h-full relative bg-card2 md:aspect-[5/7] rounded-lg overflow-hidden transition hover:cursor-pointer duration-500  hover:scale-105 md:hover:scale-105 "
        >
          <img src={saas} className="w-full h-[45%] object-cover" />
          <div className="mt-[4%] px-[5%] w-full h-full">
            <h2 className="text-secondary font-semibold text-left border-l-secondary border-l-[3px] pl-[3%] max-md:text-[100%] max-xl:text-[1.65vw] xl:text-[100%] hover:underline">
              Saas vai täysin räätälöity ratkaisu?
            </h2>
            <p className="text-white mt-[3%] max-sm:text-[0.7rem] max-md:text-[4vw] max-xl:text-[1.2vw] xl:text-[0.7rem] 2xl:text-[0.95rem]">
              SaaS, eli "Software as a Service", on usein käytetty
              liiketoimintamalli ohjelmistojen myyjille. Netflix on hyvä
              esimerkki: sillä on kuukausimaksu, jolla pääsee katsomaan
              elokuvia.
            </p>
            <div className="absolute bottom-[2%] left-0 px-[5%] flex justify-between w-full">
              <p className="text-gray-300 max-md:text-[2vh] md:text-[0.7rem] xl:text-[1rem] 2xl:text-[1rem]">
                Victor Ocampo
              </p>
              <p className="text-gray-300 max-md:text-[2vh] md:text-[0.7rem] xl:text-[1rem] 2xl:text-[1rem]">
                02.05.2024
              </p>
            </div>
          </div>
        </Link>
        <Link
          to={"/blogs/shc_automatization"}
          reloadDocument="true"
          className="w-[80%] md:w-full max-md:mx-auto min-h-[70vh] md:h-full relative bg-card2 md:aspect-[5/7] rounded-lg overflow-hidden transition hover:cursor-pointer duration-500 hover:scale-105 md:hover:scale-105 "
        >
          <div className="w-full overflow-hidden h-[45%]">
            <img src={office} className="object-cover w-full" />
          </div>
          <div className="mt-[4%] px-[5%] w-full h-full">
            <h2 className="text-secondary font-semibold text-left border-l-secondary border-l-[3px] pl-[3%] max-md:text-[100%] max-xl:text-[1.65vw] xl:text-[100%] hover:underline">
              Milloin henkilöstönhallinta kannattaa tehdä ohjelmiston avulla?
            </h2>
            <p className="text-white mt-[3%] max-sm:text-[0.7rem] max-md:text-[4vw] max-xl:text-[1.2vw] xl:text-[0.7rem] 2xl:text-[0.95rem]">
              {" "}
              Tarpeellisuus henkilöstönhallinnan automatisoinnissa korostuu
              erityisesti suurissa organisaatioissa, missä manuaalinen
              koordinointi aiheuttaa tehottomuutta ja virheitä. 
            </p>
            <div className="absolute bottom-[2%] left-0 px-[5%] flex justify-between w-full">
              <p className="text-gray-300 max-md:text-[2vh] md:text-[0.7rem] xl:text-[1rem] 2xl:text-[1rem]">
                Victor Ocampo
              </p>
              <p className="text-gray-300 max-md:text-[2vh] md:text-[0.7rem] xl:text-[1rem] 2xl:text-[1rem]">
                01.05.2024
              </p>
            </div>
          </div>
        </Link>
        <Link
          to={"/blogs/shc_transparency"}
          reloadDocument="true"
          className="w-[80%] md:w-full max-md:mx-auto min-h-[70vh] md:h-full relative bg-card2 md:aspect-[5/7] rounded-lg overflow-hidden transition hover:cursor-pointer duration-500 hover:scale-105 md:hover:scale-105 "
        >
          <div className="w-full overflow-hidden h-[45%]">
            <img src={socialImage} className="object-cover w-full" />
          </div>
          <div className="mt-[4%] px-[5%] w-full h-full">
            <h2 className="text-secondary font-semibold text-left border-l-secondary border-l-[3px] pl-[3%] max-md:text-[100%] max-xl:text-[1.65vw] xl:text-[100%] hover:underline">
              Läpinäkyvyyden merkitys ohjelmistokehityksessä
            </h2>
            <p className="text-white mt-[3%] max-sm:text-[0.7rem] max-md:text-[4vw] max-xl:text-[1.2vw] xl:text-[0.7rem] 2xl:text-[0.95rem]">
              {" "}
              Läpinäkyvyys on meille tärkein asia asiakassuhteissa! Kun
              etsit yhteistyökumppania mihin tahansa tarpeeseen, varsinkin
              ulkopuoliselta ja IT-alan toimijalta, muista valita toimija
              läpinäkyvyyden ja luotettavuuden perusteella.
            </p>
            <div className="absolute bottom-[2%] left-0 px-[5%] flex justify-between w-full">
              <p className="text-gray-300 max-md:text-[2vh] md:text-[0.7rem] xl:text-[1rem] 2xl:text-[1rem]">
                Victor Ocampo
              </p>
              <p className="text-gray-300 max-md:text-[2vh] md:text-[0.7rem] xl:text-[1rem] 2xl:text-[1rem]">
                29.04.2024
              </p>
            </div>
          </div>
        </Link>
        <Link
          to={"/blogs/shc_sisu"}
          reloadDocument="true"
          className="w-[80%] md:w-full max-md:mx-auto min-h-[70vh] md:h-full relative bg-card2 md:aspect-[5/7] rounded-lg overflow-hidden transition hover:cursor-pointer duration-500 hover:scale-105 md:hover:scale-105 "
        >
          <div className="w-full overflow-hidden h-[45%]">
            <img src={sisuImg} className="object-cover w-full" />
          </div>
          <div className="mt-[4%] px-[5%] w-full h-full">
            <h2 className="text-secondary font-semibold text-left border-l-secondary border-l-[3px] pl-[3%] max-md:text-[100%] max-xl:text-[1.65vw] xl:text-[100%] hover:underline">
              SHC tiimi: Sisu Eriksson
            </h2>
            <p className="text-white mt-[3%] max-sm:text-[0.7rem] max-md:text-[4vw] max-xl:text-[1.2vw] xl:text-[0.7rem] 2xl:text-[0.95rem]">
              Sisu Eriksson SHC:n toimitusjohtaja. Hän yksi Sunny Harbor Oy:n
              perustajista ja jo nuoresta lähtien nähnyt yrittäjyyden unelmana.
              Tutustu tähän kiinnostavaan tarinaan blogitekstistä.
            </p>
            <div className="absolute bottom-[2%] left-0 px-[5%] flex justify-between w-full">
              <p className="text-gray-300 max-md:text-[2vh] md:text-[0.7rem] xl:text-[1rem] 2xl:text-[1rem]">
                Sisu Eriksson
              </p>
              <p className="text-gray-300 max-md:text-[2vh] md:text-[0.7rem] xl:text-[1rem] 2xl:text-[1rem]">
                18.01.2024
              </p>
            </div>
          </div>
        </Link>
       {/*  <Link
          to={"/blogs/shc_victor"}
          reloadDocument="true"
          className="w-[80%] md:w-full max-md:mx-auto min-h-[70vh] md:h-full relative bg-card2 md:aspect-[5/7] rounded-lg overflow-hidden transition hover:cursor-pointer duration-500  hover:scale-105 md:hover:scale-105 "
        >
          <img src={victorImg} className="w-full h-[50%] object-cover" />
          <div className="mt-[4%] px-[5%] w-full h-full">
            <h2 className="text-secondary font-semibold text-left border-l-secondary border-l-[3px] pl-[3%] max-md:text-[100%] max-xl:text-[1.65vw] xl:text-[100%] hover:underline">
              SHC tiimi: Victor Ocampo
            </h2>
            <p className="text-white mt-[3%] max-sm:text-[0.9rem] max-md:text-[4vw] max-xl:text-[1.2vw] xl:text-[0.6rem] 2xl:text-[0.95rem]">
              Tutustu SHC:n teknologiajohtajaan Victor Ocampoon. Scratchistä
              C-kieleen ja shakkipelistä simulaattoreihin. Hän on yksi Sunny
              Harbour Oy:n perustajista ja IT konkari.
            </p>
            <div className="absolute bottom-[2%] left-0 px-[5%] flex justify-between w-full">
              <p className="text-gray-300 max-md:text-[2vh] md:text-[0.9rem] xl:text-[1rem] 2xl:text-[1rem]">
                Victor Ocampo
              </p>
              <p className="text-gray-300 max-md:text-[2vh] md:text-[0.9rem] xl:text-[1rem] 2xl:text-[1rem]">
                17.01.2024
              </p>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
