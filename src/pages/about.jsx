import { useEffect, useRef } from "react";
import ScrollingSlides from "../elements/scrollingSlides";

import leonImg from "../assets/founders/transparent_leon.webp";
import sisuImg from "../assets/founders/transparent_sisu.webp";
import victorImg from "../assets/founders/transparent_victor2.webp";
import marcImg from "../assets/team/transparent_alex.webp";

let mobileScreen = window.innerWidth < 821;
let scrollPoints = [];
let scrollOffset = window.innerHeight / 2;
const touchSensitivity = 50;
const triggerDelay = 1250;
const shouldReset = true;

export default function AboutPage(language = "fi") {
  const aboutUsWrapper = useRef(null);

  useEffect(() => {
    if (mobileScreen) {
      scrollPoints = [];
      // Mobile description swiping feature
      const teamElems = aboutUsWrapper.current.children[0].children;

      for(let i = 0; i < teamElems.length; i++) {
        teamElems[i].addEventListener('click', function (event) {
          event.preventDefault();
          return false;
        });

        const contentDiv = teamElems.length - 1 !== i ? teamElems[i].children[0].children[2] : teamElems[i].children[0].children[0].children[0].children[2];
        const paddingX = contentDiv.children[0].getBoundingClientRect().x;
        const posY = contentDiv.children[0].getBoundingClientRect().y;
        const height = contentDiv.children[0].getBoundingClientRect().height;

        scrollPoints.push({y: posY, bottom: height + posY, elem: contentDiv, triggered: false, paddingX, state: true});

        //Trim description to three sentances
        const description = contentDiv.children[1].innerHTML;
        const sentances = description.split('.').splice(0, window.innerWidth < 768 ? 1 : 2);

        contentDiv.children[1].innerHTML = sentances.join('.') + '.';

        contentDiv.addEventListener('click', () => {
          if (scrollPoints[i].state) {
            contentDiv.children[0].style.left = '-100vw';
            contentDiv.children[1].style.left = `${paddingX}px`;

            scrollPoints[i].state = false;
          } else {
            contentDiv.children[0].style.left = `${paddingX}px`;
            contentDiv.children[1].style.left = '100vw';

            scrollPoints[i].state = true;
          }
        });

        window.addEventListener('scroll', () => {
          let scrolled = true;
          scrollPoints.forEach(x => {
            if (window.scrollY + scrollOffset > x.y) {
              if (window.scrollY < x.bottom + scrollOffset*0.5) {
                if (!x.triggered) {
                    x.triggered = true;
                    setTimeout(() => {
                      x.elem.children[0].style.left = '-100vw';
                      x.elem.children[1].style.left = `${x.paddingX}px`;
                      x.state = false;
                    }, triggerDelay);
                }
              } else if (shouldReset) {
                x.elem.children[0].style.left = `${x.paddingX}px`;
                x.elem.children[1].style.left = '100vw';
                x.state = true;
              }
            } else {
              scrolled = false;
            }
          })
        });
      }

      return () => {
        window.removeEventListener('scroll', () => {});
      }
    }
  }, []);

  return (
    <div
      className="bg-main relative z-[1]"
      ref={aboutUsWrapper}
      id="aboutUsWrapper"
    >
      <div>
        <div
          className="bg-white relative md:flex justify-between md:flex-row lg:h-[45vw] md:h-[80vw] h-[85vw] lg:justify-between grid-cols-1 md:grid-cols-2"
        >
          <div className="w-full pl-6 mt-5 md:pl-[5vw] lg:mt-[3.5vw] md:mt-10">
            <h1 className="text-4xl italic font-extrabold text-black font-poppins lg:text-[3.8vw] md:text-[7vw] lg:leading-[3.8vw] md:leading-[7vw]">
              Leon Gustafsson
            </h1>
            <h2 className="w-5/6 font-bold text-black font-raleway lg:mt-0 md:mt-[0.5vw] lg:text-[1.3vw] md:text-[2.5vw] md:w-full">
              Frontend kehittäjä ja suunnittelija
            </h2>
            <div className="absolute left-0 md:w-[95%] w-[72vw] md:h-auto h-[200px] lg:relative overflow-hidden">
              <p className="text-black font-poppins font-light italic text-lg lg:text-[2vw] lg:leading-[2.56vw] md:text-[4vw] md:leading-[4.4vw] lg:mt-[0.6vw] md:mt-[2vw] lg:w-full w-[63vw] lg:relative absolute lg:left-0 md:left-10 left-6 transition-all ease-in-out delay-250">
                "Mä haluun tehä se, mä teen se."
              </p>
              <p className="text-black font-poppins lg:font-extralight font-light lg:text-[2vw] md:text-[3vw] lg:leading-[2.25vw] md:leading-[4.4vw] text-base lg:mt-[2] md:mt-[1.5vw] md:relative lg:w-auto md:w-[54vw] w-[51vw] lg:left-0 left-[100vw] z-0 absolute transition-all ease-in-out delay-250">
                Leon on kokenut frontend-kehittäjä, joka yhdessä suunnittelijan 
                kanssa luo vaikuttavia käyttöliittymiä. Hänen taitonsa
                teknologiassa ja kykynsä yhdistää käytettävyys ja visuaalinen
                houkuttelevuus tekevät hänestä arvokkaan tiimin jäsenen. Leonin
                intohimo käyttäjärajapintojen kehittämiseen heijastuu hänen
                työssään, ja hän pyrkii jatkuvasti tuomaan innovatiivisia
                ratkaisuja projekteihin.
              </p>
            </div>
          </div>
          <img
              alt="A handsome man"
              className="lg:relative absolute z-40 object-contain object-bottom right-0 lg:h-auto md:h-[70vw] h-[85vw] lg:top-0 md:top-[10vw] lg:w-[40vw] md:w-auto w-[54vw]"
              src={leonImg}
          ></img>
        </div>
        <div
          className="bg-black relative md:flex justify-between md:flex-row lg:h-[45vw] md:h-[80vw] h-[85vw] lg:justify-between grid-cols-1 md:grid-cols-2"
        >
          <div className="w-full pl-6 pt-5 md:pl-[5vw] lg:mt-[3.5vw] md:mt-10">
            <h1 className="text-4xl italic font-extrabold text-white font-poppins lg:text-[3.8vw] md:text-[7vw] lg:leading-[3.8vw] md:leading-[7vw]">
              Sisu Eriksson
            </h1>
            <h2 className="w-5/6 font-bold text-white font-raleway lg:mt-0 md:mt-[0.5vw] lg:text-[1.3vw] md:text-[2.5vw] md:w-full">
              Frontend kehitäjä ja markkinointi
            </h2>
            <div className="absolute left-0 md:w-[95%] w-[72vw] lg:relative overflow-hidden">
              <p className="text-white font-poppins font-light italic text-lg lg:text-[2vw] lg:leading-[2.56vw] md:text-[4vw] md:leading-[4.4vw] lg:mt-[0.6vw] md:mt-[2vw] lg:w-full md:w-[59vw] w-[63vw] lg:relative absolute lg:left-0 md:left-10 left-6 transition-all ease-in-out delay-250">
                "Unelmointi on tärkeä osa onnea ja menestystä, mutta sen voima paljastuu vasta, kun sitoudumme tavoittelemaan niitä."
              </p>
              <p className="text-white font-poppins lg:font-extralight font-light lg:text-[2vw] md:text-[3vw] lg:leading-[2.25vw] md:leading-[4.4vw] text-base lg:mt-[2] md:mt-[1.5vw] md:relative lg:w-auto md:w-[54vw] w-[51vw] lg:left-0 left-[100vw] z-0 absolute transition-all ease-in-out delay-250">
                Sisu on monitaitoinen osaaja, joka toimii yrityksessä sekä
                frontend developerina että markkinoinnin ja toimitusjohtajuuden
                tehtävissä. Hänellä on vankka tekninen osaaminen
                frontend-kehityksessä ja laaja kokemus markkinoinnista. Sisu
                pyrkii luomaan vaikuttavia digitaalisia kokemuksia ja edistämään
                yrityksen menestystä monipuolisesti.
              </p>
            </div>
          </div>
          <img
              alt="A handsome man"
              className="lg:relative absolute z-40 object-contain object-bottom right-0 lg:h-auto md:h-[70vw] h-[85vw] lg:top-0 md:top-[10vw] lg:w-[40vw] md:w-auto w-[49vw]"
              src={sisuImg}
          ></img>
        </div>
        <div
          className="bg-white relative md:flex justify-between md:flex-row lg:h-[45vw] md:h-[80vw] h-[85vw] lg:justify-between grid-cols-1 md:grid-cols-2"
        >
          <div className="w-full pl-6 mt-5 md:pl-[5vw] lg:mt-[3.5vw] md:mt-10">
            <h1 className="text-4xl italic font-extrabold text-black font-poppins lg:text-[3.8vw] md:text-[7vw] lg:leading-[3.8vw] md:leading-[7vw]">
              Victor Ocampo
            </h1>
            <h2 className="w-5/6 font-bold text-black font-raleway lg:mt-0 md:mt-[0.5vw] lg:text-[1.3vw] md:text-[2.5vw] md:w-full">
              Full stack kehittäjä
            </h2>
            <div className="absolute left-0 md:w-[95%] w-[72vw] md:h-auto h-[200px] lg:relative overflow-hidden">
              <p className="text-black font-poppins font-light italic text-lg lg:text-[2vw] lg:leading-[2.56vw] md:text-[4vw] md:leading-[4.4vw] lg:mt-[0.6vw] md:mt-[2vw] lg:w-full w-[63vw] lg:relative absolute lg:left-0 md:left-10 left-6 transition-all ease-in-out delay-250">
                "Yhdistämällä hyvän suhteen asiakkaisiin ja luotettavan teknologian, kaikki on mahdollista."
              </p>
              <p className="text-black font-poppins lg:font-extralight font-light lg:text-[2vw] md:text-[3vw] lg:leading-[2.25vw] md:leading-[4.4vw] text-base lg:mt-[2] md:mt-[1.5vw] md:relative lg:w-auto md:w-[51vw] w-[51vw] lg:left-0 left-[100vw] z-0 absolute transition-all ease-in-out delay-250">
                Victor on monipuolinen fullstack kehittäjä, joka loistaa
                erityisesti backend ohjelmoinnissa. Hänen hämmästyttävä
                koodaustaitonsa ja vahva tekninen osaamisensa rikastuttavat
                tiimiämme. Vaikka Victor keskittyy pääosin backend-kehitykseen,
                hänellä on tarvittavat taidot myös frontendin parissa
                työskentelyyn tarvittaessa. Victor panostaa huolellisesti
                projektien laatuun ja turvallisuuteen, ja hänellä on vahva
                sitoutuminen asiakkaidemme tarpeiden täyttämiseen.
              </p>
            </div>
          </div>
          <img
              alt="A handsome man"
              className="lg:relative absolute z-40 object-contain object-bottom right-0 lg:h-auto md:h-[70vw] h-[85vw] lg:top-0 md:top-[10vw] lg:w-[40vw] md:w-[54vw] w-[52vw]"
              src={victorImg}
          ></img>
        </div>

        <ScrollingSlides reset={true} deviceType={"desktop"} slideAttributes={"w-full"}>
          <div
            className="bg-black relative md:flex justify-between md:flex-row lg:h-[45vw] md:h-[80vw] h-[85vw] lg:justify-between grid-cols-1 md:grid-cols-2"
          >
            <div className="w-full pl-6 pt-5 md:pl-[5vw] lg:mt-[3.5vw] md:mt-10">
              <h1 className="text-4xl italic font-extrabold text-white font-poppins lg:text-[3.8vw] md:text-[7vw] lg:leading-[3.8vw] md:leading-[7vw]">
                Marc Smeds
              </h1>
              <h2 className="w-5/6 font-bold text-white font-raleway lg:mt-0 md:mt-[0.5vw] lg:text-[1.3vw] md:text-[2.5vw] md:w-full">
                Full stack kehittäjä
              </h2>
              <div className="absolute left-0 md:w-[95%] w-[72vw] md:h-auto h-[200px] lg:relative overflow-hidden">
                <p className="text-white font-poppins font-light italic text-lg lg:text-[2vw] lg:leading-[2.56vw] md:text-[4vw] md:leading-[4.4vw] lg:mt-[0.6vw] md:mt-[2vw] lg:w-full w-[62vw] lg:relative absolute lg:left-0 md:left-10 left-6 transition-all ease-in-out delay-250">
                  "Quality is not an act, it is a habit."
                </p>
                <p className="text-white font-poppins lg:font-extralight font-light lg:text-[2vw] md:text-[3vw] lg:leading-[2.25vw] md:leading-[4.4vw] text-base lg:mt-[2] md:mt-[1.5vw] md:relative lg:w-auto md:w-[60vw] w-[51vw] lg:left-0 left-[100vw] z-0 absolute transition-all ease-in-out delay-250">
                  Marc on taitava fullstack-kehittäjä, joka on erikoistunut
                  monimutkaisten kokonaisuuksien hajottamiseen ja
                  yksinkertaistamiseen. Hänen kykynsä luoda selkeitä ja tehokkaita
                  ratkaisuja tekee hänestä arvokkaan tiimipelaajan. Marc on innokas
                  tekemään monimutkaisetkin projektit saumattomiksi ja helposti
                  hallittaviksi osiksi.
                </p>
              </div>
            </div>
            <img
                alt="A handsome man"
                className="lg:relative absolute z-40 object-bottom object-contain right-0 lg:h-auto md:h-[70vw] h-[85vw] lg:top-0 md:top-[10vw] lg:w-[40vw] md:w-auto w-[50vw]"
                src={marcImg}
            ></img>
          </div>
        </ScrollingSlides>
      </div>
    </div>
  );
}