import React from "react";

import kvlMockup from "../assets/kvl-mockup.png";
import moonMockup from "../assets/moon-app-mockup.png";
import kvlStore from "../assets/kvlstore.png";
import omasykeMockup from "../assets/omasyke-mockup.png";
import figma from "../assets/figma.png";
import figmaSvg from "../assets/Figma-Icon.svg";
import FigmaWord from "../assets/Figma-Wordmark.svg";

function ourServices() {
  return (
    <div className="w-screen overflow-x-hidden 2xl:p-36 xl:p-16 lg:p-16 max-lg:px-28 max-md:px-14 max-sm:px-2 max-lg:py-10 bg-primary">
      <h1 className="font-semibold font-poppins text-4xl text-secondary max-lg:mt-[10vh] w-full text-center">
        Palvelumme
      </h1>
      <div id="app" className="grid grid-cols-1 lg:grid-cols-2 xl:gap-5 mt-8 lg:mb-12 max-w-[1700px] mx-auto">
        <div>
          <h2 className="lg:text-2xl md:text-xl sm:text-xl text-lg font-bold text-white pb-1 uppercase">
            1. Web- ja sovelluskehitys
          </h2>
          <div className="sm:w-[340px] w-[280px] bg-secondary h-1 rounded-full" />
          <br className="max-lg:hidden" />
          <p className="text-white xl:text-base max-lg:mt-2">
            Meillä on vankka kokemus skaalautuvien mobiili- ja web-sovellusten
            kehittämisestä. Vuosien varrella olemme työskennelleet lukuisten
            asiakkaiden ja projektien parissa, mikä on antanut meille syvällisen
            ymmärryksen erilaisten digitaalisten ratkaisujen suunnittelusta ja
            toteutuksesta. <br />
            <br />
            Erityisosaamisemme on monialustakehityksessä, mikä mahdollistaa
            saman koodin hyödyntämisen sekä iOS- että Android-alustoilla. Tämä
            lähestymistapa ei ainoastaan nopeuta kehitysprosessia, vaan myös
            vähentää merkittävästi kustannuksia ja varmistaa, että sovellukset
            toimivat saumattomasti kaikilla laitteilla. Monialustakehitys tekee
            sovelluskehityksestä nopeaa ja mutkatonta. Käytämme moderneja
            teknologioita ja parhaita käytäntöjä varmistaaksemme, että
            lopputuotteet ovat korkealaatuisia, turvallisia ja
            käyttäjäystävällisiä. Pyrimme aina ylittämään asiakkaidemme
            odotukset tarjoamalla innovatiivisia ratkaisuja, jotka vastaavat
            heidän liiketoimintatarpeitaan. <br />
            <br />
            Kokemuksemme ja asiantuntemuksemme ansiosta pystymme auttamaan
            asiakkaitamme saavuttamaan heidän tavoitteensa tehokkaasti ja
            luotettavasti. Olemme sitoutuneet jatkuvaan oppimiseen ja
            kehittymiseen, mikä takaa, että pysymme aina teknologian kehityksen
            kärjessä ja voimme tarjota ajantasaisimmat ratkaisut kaikissa
            projekteissamme.
          </p>
          <br />
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 max-xl:lg:px-8 sm:grid-cols-2 grid-cols-1 lg:w-full md:w-[700px] w-[90%] xl:h-[250px] lg:h-[550px] max-lg:h-[300px] max-lg:pb-10 my-auto mx-auto items-center justify-center sm:gap-5">
          <div className="overflow-hidden xl:w-full h-full max-lg:mx-auto rounded-lg bg-white max-lg:w-full lg:hover:scale-[1.10] transition-all duration-[350ms]">
            <img
              class="object-contain overflow-hidden md:scale-[1.3] scale-[1.5] h-full mx-auto max-lg:aspect-square rounded-lg transition duration-500"
              src={kvlMockup}
              alt=""
            />
          </div>
          <div className="overflow-hidden max-sm:hidden xl:w-full h-full max-lg:mx-auto rounded-lg bg-white max-lg:w-full lg:hover:scale-[1.10] transition-all duration-[350ms]">
            <img
              class="object-contain overflow-hidden scale-[1.3] h-full mx-auto max-lg:aspect-square rounded-lg transition duration-500"
              src={omasykeMockup}
              alt=""
            />
          </div>
          <div className="hidden overflow-hidden xl:w-full max-xl:h-full max-lg:mx-auto col-span-2 rounded-lg lg:hover:scale-[1.10] transition-all duration-[350ms]">
            <img
              class="object-cover overflow-hidden scale-[1.39] w-full aspect-square transition duration-500 "
              src={kvlStore}
              alt=""
            />
          </div>
        </div>
        <div className="my-auto max-lg:hidden">
          <div className="overflow-hidden lg:w-[94%] lg:max-w-[700px] rounded-lg lg:hover:scale-[1.10] transition-all duration-[350ms]">
            <img
              class="object-cover overflow-hidden my-auto w-full transition duration-500"
              src={kvlStore}
              alt=""
            />
          </div>
        </div>
        <div id="web">
         <h2 className="lg:text-2xl md:text-xl sm:text-xl text-lg font-bold text-white pb-1 uppercase">
          2. Nettisivut
          </h2>
          <div className="w-[250px] bg-secondary h-1 rounded-full" />
          <br className="max-lg:hidden" />
          <p className="text-white xl:text-base max-lg:mt-2">
            Nykyään nettisivut ovat yrityksen käyntikortti verkossa ja usein
            ensimmäinen kosketuspiste potentiaalisten asiakkaiden kanssa. Tämä
            tekee niistä kriittisen tärkeän osan yrityksen brändiä ja
            markkinointistrategiaa. Hyvin suunnitellut ja toteutetut nettisivut
            voivat merkittävästi vaikuttaa siihen, millaisen ensivaikutelman
            yritys jättää vierailijoihin, sekä siihen, kuinka helposti asiakkaat
            löytävät tarvitsemansa tiedot ja palvelut. <br />
            <br />
            Siksi on tärkeää, että nettisivut ovat sekä visuaalisesti
            houkuttelevat että helppokäyttöiset. Visuaalisesti houkutteleva
            sivusto herättää kiinnostusta ja luo ammattimaisen kuvan
            yrityksestä, kun taas helppokäyttöisyys varmistaa, että vierailijat
            löytävät vaivattomasti etsimänsä tiedot ja voivat navigoida
            sivustolla sujuvasti. Tämä yhdistelmä parantaa asiakaskokemusta ja
            lisää todennäköisyyttä, että vierailijat palaavat sivustolle
            uudelleen. <br />
            <br />
            Meidän tiimimme on erikoistunut luomaan juuri tällaisia
            kokonaisuuksia. Olemme sitoutuneet ymmärtämään asiakkaidemme
            liiketoimintaa ja heidän kohderyhmäänsä, jotta voimme luoda
            räätälöityjä ratkaisuja, jotka vastaavat heidän erityistarpeitaan.
            Käytämme moderneja teknologioita ja parhaita käytäntöjä
            varmistaaksemme, että lopputuloksena on korkealaatuinen,
            responsiivinen ja käyttäjäystävällinen verkkosivusto.
          </p>
          <br />
          <div className="my-auto lg:hidden pb-10">
            <div className="overflow-hidden mx-auto rounded-lg md:w-[600px] sm:w-[500px]">
              <img
                class="object-cover overflow-hidden my-auto w-full transition duration-500"
                src={kvlStore}
                alt=""
              />
            </div>
          </div>
        </div>
      <div id="ui">
        <h2 className="lg:text-2xl md:text-xl sm:text-xl text-lg font-bold text-white pb-1 uppercase">
            3. Käyttöliittymän suunnittelu
          </h2>
          <div className="w-[250px] bg-secondary h-1 rounded-full" />
          <br className="max-lg:hidden" />
          <p className="text-white xl:text-base max-lg:mt-2">
            Käyttöliittymämme on suunniteltu helpottamaan palvelun käyttöä
            kaikille käyttäjille. Meille on ensiarvoisen tärkeää, että
            käyttökokemus on mahdollisimman sujuva ja miellyttävä, riippumatta
            siitä, kuka palvelua käyttää. Olemme panostaneet merkittävästi
            käyttöliittymän selkeyteen ja intuitiivisuuteen, jotta kaikki
            käyttäjät, olivatpa he sitten kokeneita teknologian käyttäjiä tai
            vasta-alkajia, löytäisivät tarvitsemansa tiedot ja toiminnot
            vaivatta. <br /><br />Pyrimme selkeään ja intuitiiviseen navigointiin, joka
            ohjaa käyttäjää loogisesti läpi palvelun eri osioiden.
            Käyttöliittymän suunnittelussa olemme hyödyntäneet
            käyttäjäkokemuksen parhaita käytäntöjä ja modernia designia, jotta
            navigointi on sujuvaa ja johdonmukaista. Tämä tarkoittaa muun muassa
            selkeitä valikoita, yksinkertaisia painikkeita ja visuaalisesti
            erottuvia toimintoja, jotka tekevät palvelun käytöstä vaivatonta. <br /><br />
            Tavoitteenamme on tarjota yksinkertainen ja miellyttävä
            käyttökokemus kaikille käyttäjille. Tämä tarkoittaa, että otamme
            huomioon erilaiset käyttäjäprofiilit ja -tarpeet, ja pyrimme
            tekemään palvelusta mahdollisimman saavutettavan kaikille. Uskomme,
            että käyttäjäystävällinen käyttöliittymä ei ainoastaan paranna
            käyttäjätyytyväisyyttä, vaan myös lisää palvelun tehokkuutta ja
            käyttöönoton sujuvuutta. Haluamme, että jokainen palvelumme käyttäjä
            kokee sen käytön miellyttäväksi ja löytää tarvitsemansa tiedot ja
            toiminnot helposti.
          </p>
        </div>
        <div className="lg:my-auto grid grid-cols-3 grid-rows-4 lg:grid-rows-3 h-[400px] sm:h-[400px] md:h-[500px] lg:h-[500px] w-full px-6 xl:px-12 xl:mx-auto">
          <div className="col-span-3 max-sm:row-span-1 flex h-[60%] mt-auto md:mb-5 max-lg:mx-auto">
          <img
            className="object-contain transition duration-500 h-[80%] my-auto mr-4"
            src={figmaSvg}
            alt=""
          />
          <img
            className="object-contain overflow-hidden h-[70%] my-auto transition duration-500"
            src={FigmaWord}
            alt=""
          />
          </div>
          <div className="overflow-hidden row-span-3 max-sm:mb-auto lg:row-span-2 col-span-3 rounded-lg h-[80%] transition-all duration-[350ms] max-lg:mx-auto">
            <img
              class="object-contain xl:object-cover overflow-hidden mb-auto h-full transition duration-500"
              src={figma}
              alt=""
            />
          </div>
        </div>
      </div>
      <br className="max-lg:hidden" />
      <div className="col-span-2 flex justify-center">
        <div className="h-1 w-5/6 bg-secondary rounded-full" />
      </div>
      <br />
      <div className="col-span-2 justify-center flex flex-col w-full items-center gap-5">
        <a
          className="text-white text-xl max-sm:text-lg font-semibold text-center md:w-[1000px] cursor-pointer"
          href="/kustannusarviolaskuri"
        >
          Kiinnostuitko? Laske alustava{" "}
          <span className="text-secondary hover:underline">hinta-arvio</span>{" "}
          laskurilla ja ole yhteydessä meihin!
        </a>
      </div>
    </div>
  );
}

export default ourServices;
