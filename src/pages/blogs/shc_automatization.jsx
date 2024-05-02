import SubParagraph from "../../elements/blogit/subParagraph.jsx";
import Title from "../../elements/blogit/title.jsx";
import Author from "../../elements/blogit/author.jsx";
import Image from "../../elements/blogit/image.jsx";

import office from "../../assets/office.jpeg";

export default function AutomatizationBlog() {
  return (
    <div
      id="blog"
      className="bg-white pt-[8vh] md:pt-[18vh] md:pb-[10vh] w-screen"
    >
      <div className="w-[100vw] md:w-[80vw] mx-auto max-w-[900px] md:mt-[1v] py-[4vh] px-[4vh] rounded-lg bg-white">
        <Title>
          <h1>
            Milloin henkilöstönhallinta kannattaa tehdä ohjelmiston avulla?
          </h1>
        </Title>

        <SubParagraph>
          Pyrimme kaikki jakamaan eri askareita mahdollisimman tehokkaasti
          kaikissa ympäristöissä: kodista yrityksiin. Perheissä vanhemmilla voi
          usein olla haastavaa jakaa monien lapsien välillä eri askareita. Sama
          ongelma tulee organisaatioissa, joissa pitää jakaa kymmenien, jos ei
          satojen, työntekijöiden välillä eri yksittäisiä työtehtäviä. <br />{" "}
          <br />
          Esimerkiksi siivousalan yrityksessä, jossa jokainen työntekijä tekee
          nollatunti sopimuksella siivoustöitä, voi olla aika vaikeaa
          koordinoida jokaisen työntekijän eri aikatauluja. Tämän monimutkaisuus
          vielä nousee eksponentiaalisesti, eikä lineaarisesti. Tämän takia moni
          yritys päätyy siihen, että hankitaan jonkin ohjelmisto, jossa
          helpotetaan keikkojen jakamista. Yleensä tällainen ohjelmisto sisältää
          työntekijälle jonkinlaisen sovelluksen, jossa hän voi ottaa vastaan
          keikkoja sekä hallintapaneelin, jossa työnantaja voi lisätä
          sovellukseen keikkoja. <br /> <br /> Tällä ratkaisulla saat
          organisaatiollesi kaikki Whatsapp-ryhmän säätelyt ja viime hetken
          “onko ketään vapaana kello 15:00-18:00?” viestit poistettua
          ikuisuudeksi. Kuitenkin tällaisen ohjelmiston hankinta on merkittävä
          kuluerä. Jos on vaikka vain 5 työntekijää niin kallis
          ohjelmistoratkaisu ei ole välttämättä sen arvoinen.
          <Image>
            <img src={office} className="md:h-[50vh] object-cover" />
          </Image>
        </SubParagraph>
        <SubParagraph>
         <h1 className="w-full text-[1.25rem] md:text-[1.2rem] mt-0 md:leading-[1.4rem] text-black font-roboto">
          Tässä on neljä kriteeriä, minkä perusteella voidaan päättää hankinnan
          tarpeellisuus: </h1> <br /> <br />
          <span className="font-bold">
            {" "}
            1. Organisaatiolla on usein tarve jakaa työvuoroja eri
            työntekijöille.{" "}
          </span>
          Mitä enemmän työvuoroja on jaettava, sitä tarpeellisempi
          automatisointi on. <br />  <br />
          <span className="font-bold">
            2. Työvuorojen jako vaatii liikaa viestintää.{" "}
          </span>
          Mikäli käytössä on jokin suuri työntekijöiden Whatsapp-ryhmä tai
          pahimmillaan työvuoroja jaetaan yksityisviestien avulla pienikin
          työvuorojen määrä voi varastaa joltain monta tuntia. <br /> <br />
          <span className="font-bold">3. Eri työntekijöiden välillä koordinointi on haastavaa. </span>Joissain
          organisaatioissa työntekijöille annetaan ohjeet heti aamusta
          toimipisteellä eri työtehtävistä. Kun kyse on kuitenkin sellaisesta
          tilanteessa, jossa työvuoroja/-tehtäviä ei jaella heti aamusta
          toimipisteellä vaan jokainen työntekijä toimii lähtökohtaisesti
          itsenäisesti ja ottaa vastaan työvuoroja itsenäisesti niin
          työntekijöiden koordinointi alkaa olemaan erittäin haastavaa. Kun
          haastavuus on riittävä, ohjelmiston hankkiminen tätä koordinointia
          varten voi olla hyvä suunnitelma. <br />  <br />
          <span className="font-bold">4. Inhimilliset virheet näkyvät työvuorojen jaossa ja vastaanotossa. </span>
          Inhimillisiä virheitä tulee joka työssä ja varsinkin kun kyse on
          kommunikaatiosta. Inhimillisten virheiden määrä kääntyy selvästi
          laskuun, kun otetaan käyttöön ohjelmisto, jossa työvuorojen hallinta
          helpottuu ja kenenkään ei tarvitse kysellä työvuoron ottajan perään,
          kun kaikille tulee sovelluksessa ilmoitus uudesta työvuorosta.
          <br /> <br /> <br />
          Mitä teen, jos tarvitsen työvuoroihin ohjelmistoa? Pyytäkää meiltä
          palaveria, jossa voidaan miettiä minkälainen ratkaisu sopii teidän
          yritykselle. Teemme rehellisen ja suoraviivaisen hinta-arvioin teille.
        </SubParagraph>

        <Author>
          <h1>Victor Ocampo</h1>
          <p>01.05.2024</p>
        </Author>
      </div>
    </div>
  );
}
