import { useEffect, useRef } from "react";

import leonImg from "../assets/founders/transparent_leon.webp";
import sisuImg from "../assets/founders/transparent_sisu.webp";
import victorImg from "../assets/founders/transparent_victor2.png";
import marcImg from "../assets/team/transparent_alex.webp";

//import '../style/pages/about.css';

let touchstart = null;
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

      console.log(teamElems);

      for(let i = 0; i < teamElems.length; i++) {
        teamElems[i].addEventListener('click', function (event) {
          event.preventDefault();
          return false;
        });

        const contentDiv = teamElems[i].children[0].children[2];
        const paddingX = contentDiv.children[0].getBoundingClientRect().x;
        const posY = contentDiv.children[0].getBoundingClientRect().y;
        const bottomY = contentDiv.children[0].getBoundingClientRect().bottom;

        scrollPoints.push({y: posY, bottom: bottomY, elem: contentDiv, triggered: false, paddingX});

        //Trim description to three sentances
        const description = contentDiv.children[1].innerHTML;
        const sentances = description.split('.').splice(0, window.innerWidth < 768 ? 1 : 2);

        contentDiv.children[1].innerHTML = sentances.join('.') + '.';

        contentDiv.addEventListener('touchstart', e => {
          touchstart = e.touches[0].clientX;
        })

        contentDiv.addEventListener('touchend', e => {
          if (touchstart) {
            const touchend = e.changedTouches[0].clientX;
            if (touchend - touchstart < -touchSensitivity) {
              console.log('swiped left');
              contentDiv.children[0].style.left = '-100vw';
              contentDiv.children[1].style.left = `${paddingX}px`;
            } else if (touchend - touchstart > touchSensitivity) {
              console.log('swiped right');
              contentDiv.children[0].style.left = `${paddingX}px`;
              contentDiv.children[1].style.left = '100vw';
            }
          }
        }, false);

        console.log(scrollPoints);
        
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
                    }, triggerDelay);
                }
              } else if (shouldReset) {
                x.elem.children[0].style.left = `${x.paddingX}px`;
                x.elem.children[1].style.left = '100vw';
              }
            } else {
              scrolled = false;
            }
          })
        });
      }
    }
  }, []);

  return (
    <div
      className="bg-main relative z-[10]"
      ref={aboutUsWrapper}
      id="aboutUsWrapper"
    >
      <div>
        <div
          target="_blank"
          className="bg-white flex justify-between flex-col lg:flex-row lg:h-[90vh] md:min-h-[67.5vh] min-h-[340px] lg:justify-between grid-cols-1 md:grid-cols-2"
          href="https://www.linkedin.com/in/sisu-eriksson-b69475231/"
          onclick="return false;"
        >
          <div className="w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10">
            <h1 className="text-4xl italic font-extrabold text-black font-poppins md:text-7xl lg:text-7xl">
              Sisu Eriksson
            </h1>
            <h2 className="w-5/6 font-bold text-black font-raleway md:text-2xl md:w-full">
              Frontend kehitäjä ja markkinointi
            </h2>
            <div className="absolute left-0 lg:w-auto md:w-[65vw] w-[65vw] lg:h-auto md:h-[54vh] h-[200px] lg:relative overflow-hidden">
              <p className="text-black font-poppins font-light italic text-lg md:text-4xl lg:text-4xl md:mt-5 lg:w-full w-[62vw] lg:relative absolute lg:left-0 md:left-10 left-6 transition-all ease-in-out delay-250">
                "Unelmointi on tärkeä osa onnea ja menestystä, mutta sen voima paljastuu vasta, kun sitoudumme tavoittelemaan niitä."
              </p>
              <p className="text-black font-poppins lg:font-extralight md:font-extralight font-light lg:text-4xl md:text-3xl text-base lg:mt-10 md:mt-5 lg:relative lg:w-auto md:w-[60vw] w-[51vw] lg:left-0 left-[100vw] z-0 absolute transition-all ease-in-out delay-250">
              Sisu on monitaitoinen osaaja, joka toimii yrityksessä sekä
              frontend developerina että markkinoinnin ja toimitusjohtajuuden
              tehtävissä. Hänellä on vankka tekninen osaaminen
              frontend-kehityksessä ja laaja kokemus markkinoinnista. Sisu
              pyrkii luomaan vaikuttavia digitaalisia kokemuksia ja edistämään
              yrityksen menestystä monipuolisesti.
              </p>
            </div>
          </div>
          <div className="flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 md:mt-[-150px] mt-[-110px]">
            <img
              alt="A handsome man"
              className="object-contain w-1/2 aspect-1:4  lg:w-full md:w-3/7 relative z-40"
              src={sisuImg}
            ></img>
          </div>
        </div>
        <div
          target="_blank"
          className="bg-black flex justify-between flex-col lg:flex-row lg:h-[90vh] md:min-h-[67.5vh] min-h-[340px] lg:justify-between grid-cols-1 md:grid-cols-2"
          href="https://www.linkedin.com/in/leon-g-732b31204/"
          onclick="return false;"
        >
          <div className="w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10">
            <h1 className="text-white text-4xl italic font-extrabold text- font-poppins md:text-7xl lg:text-7xl">
              Leon Gustafsson
            </h1>
            <h2 className="w-5/6 font-bold text-white font-raleway md:text-2xl md:w-full">
              Frontend kehittäjä ja suunnittelija
            </h2>
            <div className="absolute left-0 lg:w-auto md:w-[65vw] w-[65vw] lg:h-auto md:h-[54vh] h-[200px] lg:relative overflow-hidden">
              <p className="text-white font-poppins font-light italic text-lg md:text-4xl lg:text-4xl md:mt-5 lg:w-full w-[62vw] lg:relative absolute lg:left-0 md:left-10 left-6 transition-all ease-in-out delay-250">
                "Mä haluun tehä se, mä teen se."
              </p>
              <p className="text-white font-poppins lg:font-extralight md:font-extralight font-light lg:text-4xl md:text-3xl text-base lg:mt-10 md:mt-5 lg:relative lg:w-auto md:w-[60vw] w-[51vw] lg:left-0 left-[100vw] z-0 absolute transition-all ease-in-out delay-250">
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
          <div className="flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 md:mt-[-150px] mt-[-110px]">
            <img
              alt="A handsome man"
              className="object-contain w-1/2 aspect-1:4  lg:w-full md:w-3/7 relative z-40"
              src={leonImg}
            ></img>
          </div>
        </div>
        <div
          target="_blank"
          className="bg-white flex justify-between flex-col lg:flex-row lg:h-[90vh] md:min-h-[67.5vh] min-h-[340px] lg:justify-between grid-cols-1 md:grid-cols-2"
          href="https://www.linkedin.com/in/victor-ocampo-a609b3250/"
          onclick="return false;"
        >
          <div className="w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10">
            <h1 className="text-4xl italic font-extrabold text-black font-poppins md:text-7xl lg:text-7xl">
              Victor Ocampo
            </h1>
            <h2 className="w-5/6 font-bold text-black font-raleway md:text-2xl md:w-full">
              Full stack kehittäjä
            </h2>
            <div className="absolute left-0 lg:w-auto md:w-[65vw] w-[65vw] lg:h-auto md:h-[54vh] h-[200px] lg:relative overflow-hidden">
              <p className="text-black font-poppins font-light italic text-lg md:text-4xl lg:text-4xl md:mt-5 lg:w-full w-[62vw] lg:relative absolute lg:left-0 md:left-10 left-6 transition-all ease-in-out delay-250">
                "Yhdistämällä hyvän suhteen asiakkaisiin ja luotettavan
                teknologian, kaikki on mahdollista."
              </p>
              <p className="text-black font-poppins lg:font-extralight md:font-extralight font-light lg:text-4xl md:text-3xl text-base lg:mt-10 md:mt-5 lg:relative lg:w-auto md:w-[60vw] w-[51vw] lg:left-0 left-[100vw] z-0 absolute transition-all ease-in-out delay-250">
                Victor on monipuolinen fullstack-kehittäjä, joka loistaa
                erityisesti backend-ohjelmoinnissa. Hänen hämmästyttävä
                koodaustaitonsa ja vahva tekninen osaamisensa rikastuttavat
                tiimiämme. Vaikka Victor keskittyy pääosin backend-kehitykseen,
                hänellä on tarvittavat taidot myös frontendin parissa
                työskentelyyn tarvittaessa. Victor panostaa huolellisesti
                projektien laatuun ja turvallisuuteen, ja hänellä on vahva
                sitoutuminen asiakkaidemme tarpeiden täyttämiseen.
              </p>
            </div>
          </div>
          <div className="flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 md:mt-[-150px] mt-[-110px]">
            <img
              alt="A handsome man"
              className="object-contain w-1/2 aspect-1:4  lg:w-full md:w-3/7 relative z-40"
              src={victorImg}
            ></img>
          </div>
        </div>
        <div
          target="_blank"
          className="bg-black flex justify-between flex-col lg:flex-row lg:h-[90vh] md:min-h-[67.5vh] min-h-[340px] lg:justify-between grid-cols-1 md:grid-cols-2"
          href="https://www.linkedin.com/in/marc-alex-smeds-17a08a26b/"
          onclick="return false;"
        >
          <div className="w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10">
            <h1 className="text-white text-4xl italic font-extrabold text- font-poppins md:text-7xl lg:text-7xl">
              Marc Smeds
            </h1>
            <h2 className="w-5/6 font-bold text-white font-raleway md:text-2xl md:w-full">
              Full stack kehittäjä
            </h2>
            <div className="absolute left-0 lg:w-auto md:w-[65vw] w-[65vw] lg:h-auto md:h-[54vh] h-[200px] lg:relative overflow-hidden">
              <p className="text-white font-poppins font-light italic text-lg md:text-4xl lg:text-4xl md:mt-5 lg:w-full w-[62vw] lg:relative absolute lg:left-0 md:left-10 left-6 transition-all ease-in-out delay-250">
                "Suuret kokonaisuudet koostuu pienemmistä osista. Hajottamalla ja jakamalla voimme"
              </p>
              <p className="text-white font-poppins lg:font-extralight md:font-extralight font-light lg:text-4xl md:text-3xl text-base lg:mt-10 md:mt-5 lg:relative lg:w-auto md:w-[60vw] w-[51vw] lg:left-0 left-[100vw] z-0 absolute transition-all ease-in-out delay-250">
                Marc on taitava fullstack-kehittäjä, joka on erikoistunut
                monimutkaisten kokonaisuuksien hajottamiseen ja
                yksinkertaistamiseen. Hänen kykynsä luoda selkeitä ja tehokkaita
                ratkaisuja tekee hänestä arvokkaan tiimipelaajan. Marc on innokas
                tekemään monimutkaisetkin projektit saumattomiksi ja helposti
                hallittaviksi osiksi.
              </p>
            </div>
          </div>
          <div className="flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 md:mt-[-150px] mt-[-110px]">
            <img
              alt="A handsome man"
              className="object-contain w-1/2 aspect-1:4  lg:w-full md:w-3/7 relative z-40"
              src={marcImg}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

        <br></br><br></br>Olemme jatkuvasti ajan hermoilla, oppien uutta teknologiaa ja kehittyen, jotta voimme tarjota parasta palvelua asiakkaillemme.

        Avoimen viestinnän ja tiiviin yhteistyön periaatteemme mahdollistavat syvällisen ymmärryksen asiakkaidemme tarpeista, jotta voimme räätälöidä juuri heille sopivia ohjelmistoratkaisuja. Toteutamme projektit sovitussa aikataulussa ja budjetissa.

        <br></br><br></br>Olemme ylpeitä nuoresta, taitavasta tiimistämme ja kyvystämme luoda ainutlaatuisia ohjelmistoratkaisuja. Missiomme on auttaa asiakkaitamme menestymään modernin teknologian avulla.
               
                            <a target="_blank" href='https://www.linkedin.com/in/leon-g-732b31204/'>
                                <div id='perustaja'>
                                    <img src='./src/assets/founders/leon.png'></img>
                                    <h2>Leon</h2>
                                    <p>Frontend kehittäjä ja suunnittelija</p>
                                </div>
                            </a>
                            <a target="_blank" href='https://www.linkedin.com/in/victor-ocampo-a609b3250/'>
                                <div id='perustaja'>
                                    <img src='./src/assets/founders/victor.jpeg'></img>
                                    <h2>Victor</h2>
                                    <p>Full stack kehittäjä</p>
                                </div>
                            </a>
                            <a target="_blank" href='https://www.linkedin.com/in/marc-alex-smeds-17a08a26b/'>
                                <div id='perustaja'>
                                    <img src='./src/assets/team/alex.png'></img>
                                    <h2>Marc</h2>
                                    <p>Full stack kehittäjä</p>
                                </div>
                            </a>
*/
