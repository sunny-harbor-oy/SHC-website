import { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";

const decaultSettings = {
  multipleChoice: false,
};

const attributeCost = {
  scale: 0.75,
  complexity: 1.25,
  urgency: 1.25,
  cost: 1,
  coefficient: 0,
  laajuusAlustat: 0,
  laajuusOminaisuudet: 0,
  kiireellisyys: 0,
  räätälöityUlkonakö: 0,
  räätälöityOminaisuudet: 0,
  käyttäjät: 0,
  integraatio: 0,
  ylläpito: 0,
  test_1: 0,
};

export default function PriceEstimation() {
  let [cardData, setCardData] = useState([]);

  /*


{
    title: "Alustat",
    question: "Millä alustoilla ohjelmiston pitäisi toimia?",
    settings: {
        multipleChoice: true,
    },
    answers: {
    "Selain": {coefficient: 1, laajuusAlustat: 1},
    "Mobiili (Android & iOS)": {coefficient: 1.2, laajuusAlustat: 1},
    "Tietokone": {coefficient: 1.2, laajuusAlustat: 1},
    },
},
{
    title: "Ulkonäkö",
    question: "Tarvitsetko täysin yksilöidyn ulkonäön?",
    answers: {
    "Kyllä": {coefficient: 1.2, räätälöityUlkonakö: 1},
    "Ei": {coefficient: 1, räätälöityUlkonakö: 0},
    }
},
{
    title: "Ominaisuudet",
    question: "Mitkä ovat hankkeen toivotut ominaisuudet? (Valitse kaikki soveltuvat)",
    settings: {
        multipleChoice: true,
    },
    answers: {
    "Sähköisen kaupankäynnin toiminnallisuus": {cost: 1, laajuusOminaisuudet: 1},
    "Mukautettu suunnittelu": {cost: 1, laajuusOminaisuudet: 1},
    "Analytiikka": {cost: 2, laajuusOminaisuudet: 1},
    "Tietokanta (esim. SQL)": {cost: 2, laajuusOminaisuudet: 1},
    "Muu...": {cost: 2, laajuusOminaisuudet: 1},
    }
},
{
    title: "Ominaisuudet",
    question: "Ominaisuudet olisivat...",
    answers: {
    "Avoimen lähdekoodin": {coefficient: 1, räätälöityOminaisuudet: 0},
    "Juuri sinulle kehitetty": {coefficient: 1.1, räätälöityOminaisuudet: 1},
    "Kummatkin": {coefficient: 1.1, räätälöityOminaisuudet: 1}, 
    }
},
{
    title: "Käyttäjät",
    question: "Ketä käyttäjät/asiakkaat ovat?",
    settings: {
        multipleChoice: false,
    },
    answers: {
    "Yksityishenkilöt": {coefficient: 1.1, käyttäjät: 0},
    "Yritykset": {coefficient: 1.2, käyttäjät: 1},
    "Kummatkin": {coefficient: 1.1, käyttäjät: 2},
    }
},
{
    title: "Integraatio",
    question: "Pitääkö ohjelmisto integroida jo jonkin valmiin järjestelmän kanssa?",
    answers: {
    "Kyllä": {coefficient: 1.1, integraatio: 1},
    "Ei": {coefficient: 1, integraatio: 0},
    }
},
{
    title: "Aikataulu",
    question: "Kuinka kauan uskot ohjelmiston kehityksen kestävän?",
    answers: {
    "Alle 3 kuukautta": {coefficient: 1,    laajuusAikataulu: 3},
    "3 - 6  kuukautta": {coefficient: 1.5,  laajuusAikataulu: 2},
    "6 - 12 kuukautta": {coefficient: 2,    laajuusAikataulu: 1},
    }
},
{
    title: "Aikataulu",
    question: "Millä aikataululla ohjelmiston pitäisi olla valmis?",
    answers: {
    "1 - 3  kuukautta": {coefficient: 1, kiireellisyys: 3},
    "3 - 6  kuukautta": {coefficient: 1, kiireellisyys: 2},
    "6 - 12 kuukautta": {coefficient: 1, kiireellisyys: 1},
    }
},
{
    title: "Ylläpito",
    question: "Tarvitsetko ylläpitoa?",
    answers: {
    "Kyllä": {coefficient: 1, ylläpito: 1},
    "Ei": {coefficient: 1.05, ylläpito: 0},
    }
}
]
*/

  let kotisivutData = [
    {
      title: "Ulkonäkö",
      question: "Vaatiiko sivut graafisen suunnittelun?",
      answers: {
        "Ei, se on jo tehty": { cost: 0.5 },
        Kyllä: { cost: 1 },
      },
    },
    {
      title: "Monikielisyys",
      question: "Onko kotisivu monikielinen?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 0.4 },
      },
    },
    {
      title: "Näkymien määrä",
      question: "Kuinka monta näkymää sivulla pitäisi olla?",
      answers: {
        1: { insta_coef: 0 },
        "2-4": { insta_coef: 1.5 },
        "5+": { insta_coef: 1.8 },
      },
    },
    {
      title: "Järjestelmät",
      question:
        "Onko sivuilla tarve blogisysteemille tai muille samankaltaisille järjestelmille?",
      answers: {
        "Blogi järjestelmälle on tarvetta": { cost: 0.5 },
        "Muulle järjestelmälle on tarvetta (kuten tämä hintalaskuri)": {
          cost: 1,
        },
        "Ei ole tarvetta": { cost: 0 },
      },
    },
    {
      title: "Uutiskirje",
      question: "Onko tarvetta uutiskirjeelle?",
      answers: {
        Kyllä: { cost: 0.2 },
        Ei: { cost: 0 },
      },
    },
    {
      title: "Käyttöehdot ja muu",
      question: "Onko tarvetta sille, että kirjoitamme eväsehdät, jne?",
      answers: {
        Kyllä: { cost: 0.2 },
        Ei: { cost: 0 },
      },
    },
    {
      title: "Projektin aikataulu",
      question: "Mikä on projektin aikataulu?",
      answers: {
        "2-4 viikkoa": { coefficient: 1.5 },
        "5-8 viikkoa": { coefficient: 1.3 },
        "9+ viikkoa": { coefficient: 1 },
      },
    },
  ];

  let verkkokauppaData = [
    {
      title: "Ulkonäkö",
      question:
        "Pitääkö verkkokaupalle suunnitella oma ulkonäkö/käyttöliittymä?",
      answers: {
        "Kyllä, pitää suunnitella": { cost: 2.5 },
        "EI, ulkonäkö on jo suunniteltu": { cost: 2 },
      },
    },
    {
      title: "Tuotteet",
      question: "Onko kyseessä digitaalinen vai fyysinen tuote?",
      answers: {
        Digitaalinen: { cost: 0 },
        Fyysinen: { cost: 1.5 },
        Kumpaakin: { cost: 1.5 },
      },
    },
    {
      title: "Monikielisyys",
      question: "Ovatko sivut monikieliset?",
      answers: {
        "Vain yksi kieli": { cost: 0 },
        "Useampi kieli": { cost: 0.4 },
      },
    },
    {
      title: "Tuotteiden räätälöinti",
      question: "Voiko tuotteita/palveluja räätälöidä verkkokaupassa?",
      answers: {
        "Ei, tuotteita ei voi räätälöidä": { cost: 0 },
        "Kyllä, tuotteita voi räätälöidä": { cost: 1.5 },
      },
    },
    {
      title: "Integraatio",
      question: "Tuleeko tuotteiden tiedot toisesta verkkopalvelusta?",
      answers: {
        Ei: { cost: 0 },
        Osittain: { cost: 0.5 },
        Kyllä: { cost: 0.3 },
      },
    },
    {
      title: "Olemassa olevat nettisivut",
      question: "Onko palvelusta tai tuotteesta olemassa jo omat nettisivut?",
      answers: {
        "Ei, joten nettisivut pitää luoda verkkokaupan yhteydessä": { cost: 1 },
        "On, joten vain verkkokaupalle on tarvetta": { cost: 0 },
      },
    },
    {
      title: "Uutiskirje",
      question: "Onko tarvetta uutiskirjeelle asiakkaalle?",
      answers: {
        Kyllä: { cost: 0.2 },
        Ei: { cost: 0 },
      },
    },
    {
      title: "Käyttöehdot ja cookie policy",
      question:
        "Onko tarvetta sillä, että kirjoitamme nettikaupalle käyttöehdot, cookie policy:n, jne?",
      answers: {
        Kyllä: { cost: 0.4 },
        Ei: { cost: 0 },
      },
    },
    {
      title: "Tuotteiden hallinnointi",
      question: "Pysyvätkö myytävät tuotteet/palvelut samoina?",
      answers: {
        "Ei, minun pitää pystyä muuttamaan niitä helposti": { cost: 0.1 },
        "Ei, ne muuttuvat aina välillä": { cost: 0.2 },
        Kyllä: { cost: 0 },
      },
    },
    {
      title: "Käyttäjäkirjautuminen",
      question: "Pitääkö kuluttajien pystyä kirjautumaan verkkokauppaan?",
      answers: {
        Kyllä: { cost: 1 },
        Ei: { cost: 0 },
      },
    },
    {
      title: "Projektin aikataulu",
      question: "Projektin aikataulu on:",
      answers: {
        "3-4 viikkoa": { coefficient: 1.75 },
        "1-2 kk": { coefficient: 1.3 },
        "3+ kk": { coefficient: 1 },
      },
    },
  ];

  /*

- Pitääkö sovellukselle suunnitella oma ulkonäkö/käyttöliittymä?
    - Ei, ulkonäkö on jo suunniteltu
    - Joo, ulkonäkö pitää suunnitella [+ 2 000€]
- Vaatiiko sovellus seuraavia ominaisuuksia
    - Kartan käyttö [+1 000€]
    - Kameran käyttö [+1 500€]
    - Bluetooth [+2 000€]
    - AR [+5 000€]
    - Integraatio sosiaalisen median alustan kanssa [+ 1 000€]
    - Tarkka analytiikka sovelluksen käytöstä [+ 4 000 €]
- Tarve käyttäjille / sisäänkirjautumiselle?
    - Ei
    - Kyllä [+ 4 000€]
- Vaatiiko sovellus sovellusta hallitsevan nettisivun (hallintapaneelin)?
    - Ei
    - Kyllä [loppuun * 1,8]
- Tarvitseeko sovellus ilmoituksia?
    - Ei
    - Kyllä [+ 3 000€]
- Vaatiiko sovellus maksujärjestelmää?
    - Ei
    - Kyllä [+2 000€]
- Onko sovellus yrityksen sisäiseen käyttöön vai julkiseen käyttöön?
    - Sisäiseen
    - Julkiseen [+ 2 000€]
- Onko sovellus monikielinen?
    - Ei
    - Kyllä [+1 000€]
- Tarvitseeko sovellus viestintä/chat -ominaisuuden?
    - Ei
    - Kyllä [+4 000€]
- Mihin alustoihin tämä julkaistaan?
    - iOS [+ 200 €]
    - Android [+ 250 €]
    - Molemmat [+ 400 €]
- Vaatiiko sovellus identtisen nettisivun (WebAppin) mobiilisovelluksen rinnalle?
    - Ei
    - Kyllä [*1.8]
- Onko tarvetta sille, että kirjoitamme käyttöehdot, jne?
    - Ei
    - Kyllä [+1 000€]
- Mikä on projektin aikataulu?
    - 2-3 kuukautta [* 2]
    - 4-6 kuukautta [* 1.5]
    - 6+ kuukautta [* 1]
*/

  let mobiilisovellusData = [
    {
      title: "Ulkonäkö",
      question:
        "Pitääkö sovellukselle suunnitella oma ulkonäkö/käyttöliittymä?",
      answers: {
        "Ei, ulkonäkö on jo suunniteltu": { cost: 5 },
        "Joo, ulkonäkö pitää suunnitella": { cost: 7 },
      },
    },
    {
      title: "Ominaisuudet",
      question: "Vaatiiko sovellus seuraavia ominaisuuksia?",
      answers: {
        "Kartan käyttö": { cost: 1 },
        "Kameran käyttö": { cost: 1.5 },
        Bluetooth: { cost: 2 },
        AR: { cost: 5 },
        "Integraatio sosiaalisen median alustan kanssa": { cost: 1 },
        "Tarkka analytiikka sovelluksen käytöstä": { cost: 4 },
      },
      settings: {
        multipleChoice: true,
      },
    },
    {
      title: "Käyttäjät",
      question: "Onko tarve käyttäjille / sisäänkirjautumiselle?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 4 },
      },
    },
    {
      title: "Hallintapaneeli",
      question:
        "Vaatiiko sovellus sovellusta hallitsevan nettisivun (hallintapaneelin)?",
      answers: {
        Ei: { coefficient: 1 },
        Kyllä: { coefficient: 1.8 },
      },
    },
    {
      title: "Ilmoitukset",
      question: "Tarvitseeko sovellus ilmoituksia?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 3 },
      },
    },
    {
      title: "Maksujärjestelmä",
      question: "Vaatiiko sovellus maksujärjestelmää?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 2 },
      },
    },
    {
      title: "Käyttö",
      question:
        "Onko sovellus yrityksen sisäiseen käyttöön vai julkiseen käyttöön?",
      answers: {
        Sisäiseen: { cost: 0 },
        Julkiseen: { cost: 2 },
      },
    },
    {
      title: "Kielisyys",
      question: "Onko sovellus monikielinen?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 1 },
      },
    },
    {
      title: "Viestintä",
      question: "Tarvitseeko sovellus viestintä/chat -ominaisuuden?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 4 },
      },
    },
    {
      title: "Alustat",
      question: "Mihin alustoihin tämä julkaistaan?",
      answers: {
        iOS: { cost: 0.2 },
        Android: { cost: 0.25 },
        Molemmat: { cost: 0.4 },
      },
    },
    {
      title: "Identtinen nettisivu",
      question:
        "Vaatiiko sovellus identtisen nettisivun (WebAppin) mobiilisovelluksen rinnalle?",
      answers: {
        Ei: { insta_coef: 1 },
        Kyllä: { insta_coef: 1.8 },
      },
    },
    {
      title: "Käyttöehdot",
      question: "Onko tarvetta sille, että kirjoitamme käyttöehdot, jne?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 1 },
      },
    },
    {
      title: "Aikataulu",
      question: "Mikä on projektin aikataulu?",
      answers: {
        "2-3 kuukautta": { coefficient: 2 },
        "4-6 kuukautta": { coefficient: 1.5 },
        "6+ kuukautta": { coefficient: 1 },
      },
    },
  ];

  let tietokonesovellusData = [
    {
      title: "Ulkonäkö",
      question:
        "Pitääkö sovellukselle suunnitella oma ulkonäkö/käyttöliittymä?",
      answers: {
        "Ei, ulkonäkö on jo suunniteltu": { cost: 3.5 },
        "Joo, ulkonäkö pitää suunnitella": { cost: 5.5 },
      },
    },
    {
      title: "Ominaisuudet",
      question: "Vaatiiko sovellus seuraavia ominaisuuksia?",
      answers: {
        "Kartan käyttö": { cost: 1 },
        "Kameran käyttö": { cost: 1.5 },
        Bluetooth: { cost: 2 },
        AR: { cost: 5 },
        "Integraatio sosiaalisen median alustan kanssa": { cost: 1 },
        "Tarkka analytiikka sovelluksen käytöstä": { cost: 4 },
      },
    },
    {
      title: "Käyttäjät",
      question: "Onko tarve käyttäjille / sisäänkirjautumiselle?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 4 },
      },
    },
    {
      title: "Hallintapaneeli",
      question:
        "Vaatiiko sovellus sovellusta hallitsevan nettisivun (hallintapaneelin)?",
      answers: {
        Ei: { coefficient: 1 },
        Kyllä: { coefficient: 1.8 },
      },
    },
    {
      title: "Ilmoitukset",
      question: "Tarvitseeko sovellus ilmoituksia?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 3 },
      },
    },
    {
      title: "Maksujärjestelmä",
      question: "Vaatiiko sovellus maksujärjestelmää?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 2 },
      },
    },
    {
      title: "Käyttö",
      question:
        "Onko sovellus yrityksen sisäiseen käyttöön vai julkiseen käyttöön?",
      answers: {
        Sisäiseen: { cost: 0 },
        Julkiseen: { cost: 2 },
      },
    },
    {
      title: "Kielisyys",
      question: "Onko sovellus monikielinen?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 1 },
      },
    },
    {
      title: "Viestintä",
      question: "Tarvitseeko sovellus viestintä/chat -ominaisuuden?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 4 },
      },
    },
    {
      title: "Alustat",
      question: "Mihin alustoihin tämä julkaistaan?",
      answers: {
        "Kyseessä on ladattava sovellu": { coefficient: 1.2 },
        "Kyseessä on selaimella käytettävä": { coefficient: 1 },
        Kumpikin: { coefficient: 1.3 },
      },
    },
    {
      title: "Identtinen nettisivu",
      question:
        "Vaatiiko sovellus identtisen nettisivun (WebAppin) mobiilisovelluksen rinnalle?",
      answers: {
        Ei: { insta_coef: 1 },
        Kyllä: { insta_coef: 1.8 },
      },
    },
    {
      title: "Käyttöehdot",
      question: "Onko tarvetta sille, että kirjoitamme käyttöehdot, jne?",
      answers: {
        Ei: { cost: 0 },
        Kyllä: { cost: 1 },
      },
    },
    {
      title: "Aikataulu",
      question: "Mikä on projektin aikataulu?",
      answers: {
        "2-3 kuukautta": { coefficient: 2 },
        "4-6 kuukautta": { coefficient: 1.5 },
        "6+ kuukautta": { coefficient: 1 },
      },
    },
  ];

  /*
- Tekoälyohjelma
- Mille alustalle tekoälyohjelma pitää kehittää?
    - Mobiili [+ 10 000 €]
    - Nettisivu [+ 1 000€]
    - Tietokonesovellus [+ 11 000 €]
    - Liitetään valmiiseen ohjelmistoon [+ 2 500 €]
- Mihin tarkoituksiin tekoäly tarvitaan?
    - Asiakaspalvelu [+ 1000 €]
    - Yleinen keskustelu [+ 1000 €]
    - Digiassistenttina toimiminen (esim. Siri tai Alexa) [10 000 €]
    - Kuvien/videoiden käsittely [5 000 €]
    - Kuvien/videoiden lukeminen [5 000 €]
    - Tekstin käsittely / kirjoittaminen [2 500€]
    - Datan analysointi / ennustaminen [5 000€]
    - Laitteiston hallinnointi (esim. Led valot tai tehdas laitteisto) [4 000€]
    - Äänen / musiikin tuottaminen [10 000€]
- Pitääkö tekoälyn pystyä lukea internettiä?
    - Kyllä [10 000€]
    - Ei
- Mikä on projektin aikataulu?
    - 2-3 kk [* 2]
    - 4-6 kk [*1,5]
    - 6+ kk [* 1]
*/

  let tekoalyData = [
    {
      title: "Alustat",
      question: "Mille alustalle tekoälyohjelma pitää kehittää?",
      answers: {
        Mobiili: { cost: 10 },
        Nettisivu: { cost: 1 },
        Tietokonesovellus: { cost: 11 },
        "Liitetään valmiiseen ohjelmistoon": { cost: 2.5 },
      },
    },
    {
      title: "Tarkoitus",
      question: "Mihin tarkoituksiin tekoäly tarvitaan?",
      answers: {
        Asiakaspalvelu: { cost: 1 },
        "Yleinen keskustelu": { cost: 1 },
        "Digiassistenttina toimiminen (esim. Siri tai Alexa)": { cost: 10 },
        "Kuvien/videoiden käsittely": { cost: 5 },
        "Kuvien/videoiden lukeminen": { cost: 5 },
        "Tekstin käsittely / kirjoittaminen": { cost: 2.5 },
        "Datan analysointi / ennustaminen": { cost: 5 },
        "Laitteiston hallinnointi (esim. Led valot tai tehdas laitteisto)": {
          cost: 4,
        },
        "Äänen / musiikin tuottaminen": { cost: 10 },
      },
      settings: {
        multipleChoice: true,
      },
    },
    {
      title: "Internetti",
      question: "Pitääkö tekoälyn pystyä lukea internettiä?",
      answers: {
        Kyllä: { cost: 10 },
        Ei: { cost: 0 },
      },
    },
    {
      title: "Aikataulu",
      question: "Mikä on projektin aikataulu?",
      answers: {
        "2-3 kk": { coefficient: 2 },
        "4-6 kk": { coefficient: 1.5 },
        "6+ kk": { coefficient: 1 },
      },
    },
  ];

  let index = 0;
  const progressBar = cardData.map(() => {
    const i = index;
    index++;
    return (
      <div
        onClick={() => {
          currentCard = i;
          changeCard(0);
        }}
        className="hover:cursor-pointer 2xl:h-[0.75vw] lg:h-[1vw] md:h-[1.5vw] sm:h-[2vw] h-[3vw] w-full rounded-lg transition-all duration-[250ms]"
      ></div>
    );
  });

  let chosenOptions = [];
  let [currentCard, setCurrentCard] = useState(-1);
  let currentCardObject = undefined;
  let lastOptionSelected = undefined;
  let tranition = false;
  let completedStages = {};
  let locked = false;

  let [pathSelected, setpathSelected] = useState(false);
  let [selectingPath, setSelectingPath] = useState(false);

  let isMobile = window.innerWidth < 640;

  const slideDiv = useRef(null);
  const barDiv = useRef(null);
  const report = useRef(null);
  const mobileBtn = useRef(null);
  let writtenSummary = undefined;

  let cardId = -1;

  useEffect(() => {
    changeCard(0);
  }, [cardData]);

  const mergeObjects = (obj1, obj2) => {
    let merged = {};
    Object.keys(obj1).forEach((key) => {
      merged[key] = obj1[key];
    });
    Object.keys(obj2).forEach((key) => {
      merged[key] = obj2[key];
    });
    return merged;
  };

  const getCardOption = (option, cardId = currentCard) => {
    if (cardData[cardId] == undefined) return undefined;

    const card = cardData[cardId];
    const settings =
      card.settings == undefined
        ? decaultSettings
        : mergeObjects(decaultSettings, card.settings);

    return settings[option] ? settings[option] : false;
  };

  let answersObj = {};
  let finalPrice = 0;

  const finalPriceFunc = () => {
    const finalAttributes = {
      coefficient: 1,
    };

    finalPrice = 0;

    chosenOptions.forEach((card, index) => {
      if (card == undefined) return;

      const cardAttributes = Object.values(card);
      cardAttributes.forEach((attribute) => {
        if (attribute == undefined) return;

        const attributeKeys = Object.keys(attribute);
        attributeKeys.forEach((key) => {
          if (finalAttributes[key] == undefined) finalAttributes[key] = 0;

          if (key == "coefficient") {
            finalAttributes[key] *= attribute[key];
          } else if (key == "cost") {
            finalPrice += attribute[key];
          } else if (key == "insta_coef") {
            finalPrice *= attribute[key];
            attribute[key] = 0;
          }
        });
      });
    });
    /*cardAttributes.forEach((attribute) => {
            if (attribute == undefined) return;

            const attributeKeys = Object.keys(attribute);
            attributeKeys.forEach((key) => {
                if (finalAttributes[key] == undefined) finalAttributes[key] = 0;
                if (key == "coefficient") {
                    finalAttributes[key] *= attribute[key];
                } else {
                    finalAttributes[key] += attribute[key];
                }
            });
        });
    });*/

    /*
    for (const [key, value] of Object.entries(finalAttributes)) {
        if (attributeCost[key] != undefined) {
            finalPrice += attributeCost[key] * value;
        }
    }*/

    finalPrice *= finalAttributes["coefficient"];

    answersObj = {};
    let i = 0;

    console.log(finalAttributes);

    Object.entries(cardData).map(([option, value]) => {
      if (answersObj[value.title] == undefined) answersObj[value.title] = {};
      if (chosenOptions[i] != undefined) {
        const options = chosenOptions[i];
        answersObj[value.title][value.question] = [];
        Object.entries(options).map(([option, v]) => {
          let x = 0;
          Object.entries(cardData[i].answers).map(([o, val]) => {
            console.log(v == option);
            if (x == option) {
              answersObj[value.title][value.question].push(o);
            }
            x++;
          });
          //answersObj[value.title].push(cardData[i].answers[option]);
        });
      }
      i++;
    });

    i = -1;
    const answerElements = Object.entries(answersObj).map(([option, value]) => {
      i++;
      return (
        <div className="flex flex-col mx-auto w-[95%] bg-card2 rounded-lg md:px-[1vw] px-[3vw] md:my-[1.5vw] my-[3vw] md:pb-[1vw] pb-[2vw]">
          <h1 className="text-[#FCA311] md:text-2xl text-[5vw] mt-[1vw] mb-0">
            {option}:
          </h1>
          <div className="w-[95%] mx-auto">
            {Object.entries(value).map(([option, value]) => {
              return (
                <div className="flex flex-col md:mb-[0.5vw] mb-[2vw]">
                  <h1 className="text-card md:text-2xl text-[3.75vw] w-[100%] font-semibold">
                    {option}
                  </h1>
                  {Object.entries(value).map(([option, value]) => {
                    return (
                      <h2 className="md:text-xl text-[3.5vw] w-[75%]">
                        - {value}
                      </h2>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      );
    });

    const writtenFeedback = (
      <h2 className="md:text-xl text-[4vw]">
        Kustannusarvio laskuri pyrkii antamaan mahdollisimman hyvän kuvan
        projektin vaativuudesta ja hinnasta. Kuitenkin lopullinen hinta
        määräytyy yksityiskohtien ja lisätietojen mukaan. Jos hinta-arvio ei
        vastaa odotuksiasi, ota yhteyttä ja neuvotellaan!
      </h2>
    );

    return (
      <div className="text-white md:mt-0 mt-[-2vh] font-poppins mx-auto md:w-[70vw] w-[90vw]">
        <h1 className="text-[#FCA311] md:text-4xl text-[7vw] font-extrabold mt-28">
          Kustannusarvion yhteenveto:
        </h1>
        <h2 className="md:text-2xl text-[4vw] w-[75%] md:mb-[1vw] mb-[5vw]">
          Hinta-arvio on suuntaa-antava ja lopullinen hinta määräytyy projektin
          vaativuuden mukaan.
        </h2>
        <div className="md:flex w-[100%]">
          <div className="md:w-[32.5vw] w-[100%]" id="choicesSummary">
            <h1 className="text-[#FCA311] md:text-2xl md:font-normal font-semibold text-[6vw] mt-[1vw]">
              Valintasi:
            </h1>
            <div className="mx-auto md:w-auto w-[80vw]">{answerElements}</div>
          </div>
          <div
            className="md:w-[34vw] w-[90vw] md:mt-0 mt-[6vw] mx-auto relative"
            id="writtenSummary"
          >
            <div className="md:w-[34vw] md:px-[5vw] w-[100%]">
              <h1 className="text-[#FCA311] md:text-2xl text-[6vw] mt-[1vw] md:font-normal font-semibold">
                Kustannusarvio laskuri:
              </h1>
              <text className="md:text-xl text-[2vw]">{writtenFeedback}</text>

              <h1 className="text-[#FCA311] md:text-2xl text-[6vw] md:mt-[1vw] mt-[4vw] md:font-normal font-semibold">
                Hinta:
              </h1>
              <h2 className="md:text-[1.25vw] text-[4vw] md:mb-0 mb-[3vw]">
                alk. {Math.ceil(finalPrice) * 1000}€ + alv
              </h2>
              <button
                className={`xl:text-xl text-[1vw] font-semibold bg-[#FCA311] text-whit mt-[20px] px-[1vw] py-[0.25vw] rounded-lg font-poppins`}
              >
                Ota yhteyttä <i className="fa fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
        <h1 className="md:text-[1.5vw] text-[4vw] md:pt-[1vw] pt-[5vw] md:mb-0 mb-[10vw] text-center md:w-[75%] w-[100%] mx-auto">
          Eikö hinta ollut mitä ajattelit? Ei hätää, neuvotellaan!
          <br />
          <strong className="text-[#FCA311]">Ota yhteyttä!</strong>
        </h1>
      </div>
    ); // Eikö hinta ollut mitä ajattelit? Ei hätää, neuvotellaan! Ota yhteyttä!
  };

  const choosePath = () => {
    const pathMap = {
      Verkkokauppa: verkkokauppaData,
      Kotisivut: kotisivutData,
      Mobiilisovellus: mobiilisovellusData,
      Tietokonesovellus: tietokonesovellusData,
      Tekoälyohjelma: tekoalyData,
    };

    setSelectingPath(true);

    slideDiv.current.innerHTML = "";

    const onClickFunc = (mapId) => {
      console.log(cardData);
      setCardData(pathMap[mapId]);
      setpathSelected(true);
      setSelectingPath(false);
      mobileBtn.current.click();
    };

    const elemRender = (
      <div
        questionid={cardId}
        className="text-white min-h-full mx-auto transition-all duration-[500ms] sm:w-[85%] w-[95%] 2xl:px-[4vw] px-[2vw] md:pt-[1vw] pt-[3vw]"
      >
        <h1 className="text-[#FCA311] md:text-2xl sm:text-[8wv] text-[10vw] w-4/5 font-poppins font-extrabold">
          Projektin tyyppi
        </h1>
        <h2 className="md:text-xl sm:text-[4vw] text-[5vw] sm:w-4/5 w-[90%] font-poppins my-0">
          Valitse alla olevista vaihtoehdoista se, joka parhaiten kuvaa
          tarpeitasi.
        </h2>
        <div className="flex flex-col md:py-[1vw] md:mt-[0] mt-[5vw] w-full">
          {Object.entries(pathMap).map(([option, value]) => (
            <div
              id={option}
              className="flex justify-between min-w-[200px] w-full hover:text-[#FCA311] my-3 md:py-[0.75vw] sm:py-[1.5vw] py-[2vw] md:px-[2vw] px-[5vw] bg-card2 rounded-lg hover:cursor-pointer select-none"
            >
              <h1 className="transition-all duration-200 font-poppins md:text-xl sm:text-[4vw] sm:font-normal md:text-left md:w-auto w-full text-[5vw]">
                {option}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-6 h-6 my-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          ))}
          <div className="flex justify-between min-w-[200px] w-full hover:text-[#FCA311] sm:my-[1vw] my-[3vw] md:py-[0.75vw] sm:py-[1.5vw] py-[2vw] md:px-[2vw] px-[5vw] bg-card2 rounded-lg hover:cursor-pointer select-none">
            <h1 className="transition-all duration-200 font-poppins md:text-xl sm:text-[4vw] sm:font-normal md:text-left md:w-auto w-full text-[5vw]">
              Muu, mikä?
            </h1>
          </div>
        </div>
      </div>
    );

    slideDiv.current.innerHTML = renderToString(elemRender);

    const children = slideDiv.current.children[0].children[2].children;
    console.log(children);
    for (let i = 0; i < children.length - 1; i++) {
      console.log(i);
      children[i].addEventListener("click", () => {
        setCardData(pathMap[children[i].id]);
        onClickFunc(children[i].id);
      });
    }

    children[children.length - 1].addEventListener("click", () => {
      window.location.href = "/contact";
    });

    console.log("path selected");
  };

  const updateStages = () => {
    let stages = barDiv.current.children;
    completedStages = {};
    console.log(locked);
    for (let i = 0; i < stages.length; i++) {
      if (currentCard == i) stages[i].style["background-color"] = "#ffd366";
      else if (chosenOptions[i] == undefined) {
        if (currentCard < i && locked == false) {
          stages[i].style["background-color"] = "#c6d0d8";
        } else if (currentCard > i || locked == true) {
          stages[i].style["background-color"] = "#fe3839";
        }
      } else {
        const options = Object.values(chosenOptions[i]);
        let hasValue = false;
        options.forEach((option) => {
          if (option != undefined) hasValue = true;
        });

        if (hasValue) {
          stages[i].style["background-color"] = "#1eb82a";
          completedStages[i] = true;
        } else stages[i].style["background-color"] = "#fe3839";
      }
    }
  };

  const chooseOption = (optionValues) => {
    if (chosenOptions[currentCard] == undefined)
      chosenOptions[currentCard] = {};
    let currentValues = chosenOptions[currentCard];

    const isMultipleChoice = getCardOption("multipleChoice");

    if (isMultipleChoice == false && lastOptionSelected != undefined) {
      if (lastOptionSelected.questionId != optionValues.questionId) {
        lastOptionSelected.self.children[1].style["background-color"] =
          "#c6d0d8";
        currentValues[`${lastOptionSelected.questionId}`] = undefined;
      }

      lastOptionSelected = undefined;
    }

    if (currentValues[`${optionValues.questionId}`] == optionValues.value) {
      currentValues[`${optionValues.questionId}`] = undefined;
      chosenOptions[currentCard] = currentValues;

      let hasValue = false;
      Object.values(currentValues).forEach((option) => {
        if (option != undefined) hasValue = true;
      });

      if (!hasValue) {
        mobileBtn.current.style["background-color"] = "#c6d0d8";
      } else if (!isMultipleChoice) {
        mobileBtn.current.style["background-color"] = "#c6d0d8";
      }

      return false;
    } else {
      currentValues[`${optionValues.questionId}`] = optionValues.value;
      chosenOptions[currentCard] = currentValues;

      mobileBtn.current.style["background-color"] = "#1eb82a";

      return true;
    }
  };

  const renderCard = (cardId) => {
    const cardIdBefore = cardId;

    const FormElements = cardData.map((card) => {
      cardId++;
      let optionId = -1;
      let getId = () => {
        optionId++;
        return optionId;
      };

      return (
        <div
          key={cardId}
          questionid={cardId}
          className="text-white min-h-full mx-auto transition-all duration-[500ms] sm:w-[85%] w-[95%] 2xl:px-[4vw] px-[2vw] md:pt-[1vw] pt-[3vw]"
        >
          <h1 className="text-[#FCA311] md:text-2xl sm:text-[8wv] text-[10vw] w-4/5 font-poppins font-extrabold">
            {card.title}
          </h1>
          <h2 className="md:text-xl sm:text-[4vw] text-[5vw] sm:w-4/5 w-[90%] font-poppins my-0">
            {card.question}
          </h2>
          <div className="flex flex-col md:py-[1vw] md:mt-[0] mt-[5vw] w-full">
            {Object.entries(card.answers).map(([option, value]) => (
              <div className="flex justify-between w-full hover:text-[#FCA311] my-3 md:py-[0.75vw] sm:py-[1.5vw] py-[2vw] md:px-[2vw] px-[5vw] bg-card2 rounded-lg hover:cursor-pointer select-none">
                <h1 className="transition-all duration-200 font-poppins md:text-xl sm:text-[4vw] sm:font-normal md:text-left md:w-auto w-full text-[5vw]">
                  {option}
                </h1>
                <div className="bg-white h-5 w-5 my-auto transition-all duration-[250ms] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      );
    });

    cardId = cardIdBefore;

    if (FormElements[cardId] == undefined) return;

    slideDiv.current.innerHTML = "";
    lastOptionSelected = undefined;

    let card = FormElements[cardId];
    currentCardObject = cardData[cardId];

    slideDiv.current.innerHTML = renderToString(card);

    const answers =
      slideDiv.current.firstChild.children[
        slideDiv.current.firstChild.children.length - 1
      ].children;

    if (chosenOptions[cardId] == undefined)
      mobileBtn.current.style["background-color"] = "#c6d0d8";
    else if (Object.keys(chosenOptions[cardId]).length == 0)
      mobileBtn.current.style["background-color"] = "#c6d0d8";
    else mobileBtn.current.style["background-color"] = "#1eb82a";

    for (let i = 0; i < answers.length; i++) {
      if (
        chosenOptions[cardId] != undefined &&
        chosenOptions[cardId][`${i}`] != undefined
      ) {
        answers[i].children[1].style["background-color"] = "#1eb82a";
        lastOptionSelected = { questionId: i, self: answers[i] };
      }

      answers[i].addEventListener("click", () => {
        const self = answers[i];
        const ownId = i;

        const answerValue = Object.values(cardData[cardId].answers)[i];
        const state = chooseOption({ questionId: ownId, value: answerValue });

        self.children[1].style["background-color"] = state
          ? "#1eb82a"
          : "#c6d0d8";
        lastOptionSelected = state ? { questionId: ownId, self } : undefined;
      });
    }

    updateStages();
  };

  const changeCard = (change) => {
    if (tranition) return;

    currentCard += change;

    console.log("Current card: " + currentCard);

    if (currentCard < 0) setCurrentCard(0);

    if (false) {
      slideDiv.current.parentElement.style.display = "none";

      barDiv.current.style.display = "none";

      report.current.innerHTML = renderToString(finalPrice());
      report.current.style.display = "block";

      report.current.children[0].children[2].children[1].children[0].children[4].addEventListener(
        "click",
        () => {
          const cookieData = {
            finalPrice: Math.ceil(finalPrice) * 1000,
            //"answers": answersObj,
            chosenOptions: chosenOptions,
            finalAttributes: finalAttributes,
          };

          document.cookie = `priceCalculator=${JSON.stringify(
            cookieData
          )}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;

          window.location.href = "/contact";
        }
      );

      resizeUpdate();
      return;
    }

    if (currentCard == cardData.length) {
      for (let i = 0; i < cardData.length; i++) {
        if (chosenOptions[i] == undefined) {
          currentCard = i;
          locked = true;
          updateStages();
          changeCard(0);
          return;
        }
      }

      updateStages();

      slideDiv.current.parentElement.style.display = "none";

      barDiv.current.style.display = "none";

      report.current.innerHTML = renderToString(finalPriceFunc());
      report.current.style.display = "block";

      report.current.children[0].children[2].children[1].children[0].children[4].addEventListener(
        "click",
        () => {
          const cookieData = {
            finalPrice: Math.ceil(finalPrice) * 1000,
            answers: answersObj,
            chosenOptions: chosenOptions,
            //"finalAttributes": finalAttributes,
          };

          console.log(cookieData);

          document.cookie = `priceCalculator=${JSON.stringify(
            cookieData
          )}; path=/`;

          window.location.href = "/contact";
        }
      );

      resizeUpdate();
    } else {
      console.log("rendering");
      console.log(currentCard);
      renderCard(currentCard);
      slideDiv.current.parentElement.style.display = "block";
      report.current.style.display = "none";
    }
  };

  let writtenSummaryHeight = 0;
  let writtenSummaryTop = 0;
  let writtenSummaryBottom = 0;
  let choicesSummaryHeight = 0;

  const resizeUpdate = () => {
    isMobile = window.innerWidth < 640;

    writtenSummary = document.getElementById("writtenSummary");
    console.log("updated");

    if (writtenSummary != undefined && !isMobile) {
      const choicesSummary = document.getElementById("choicesSummary");
      const childDiv = writtenSummary.children[0];

      childDiv.style.position = "relative";
      childDiv.style.top = "auto";
      childDiv.style.bottom = "auto";

      writtenSummary.style.height = "auto";
      writtenSummaryHeight = childDiv.getBoundingClientRect().height;
      writtenSummary.style.height = `${
        choicesSummary.getBoundingClientRect().height
      }px`;
    }
  };

  const onScroll = () => {
    writtenSummary = document.getElementById("writtenSummary");
    if (writtenSummary != undefined) {
      const childDiv = writtenSummary.children[0];
      if (isMobile) {
        childDiv.style.position = "relative";
        childDiv.style.top = "auto";
        childDiv.style.bottom = "auto";
        return;
      }
      const scroll = window.scrollY;

      writtenSummaryTop = writtenSummary.getBoundingClientRect().top;
      writtenSummaryBottom = writtenSummary.getBoundingClientRect().bottom;

      //console.log(writtenSummaryBottom, writtenSummaryHeight, window.innerHeight*0.92);

      if (window.innerHeight * 0.92 > writtenSummaryHeight) {
        if (
          writtenSummaryBottom - window.innerHeight * 0.1 <
          writtenSummaryHeight
        ) {
          childDiv.style.position = "absolute";
          childDiv.style.bottom = `0px`;
          childDiv.style.top = "auto";
        } else if (writtenSummaryTop < window.innerHeight * 0.08) {
          childDiv.style.position = "fixed";
          childDiv.style.bottom = "auto";
          childDiv.style.top = "8vh";
        } else {
          childDiv.style.position = "relative";
          childDiv.style.top = "auto";
          childDiv.style.bottom = "auto";
        }
      }
    }
  };

  useEffect(() => {
    //changeCard(0);
    //window.addEventListener("load", changeCard(0));
    resizeUpdate();
    window.addEventListener("resize", resizeUpdate);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", resizeUpdate);
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className="flex flex-col justify-center w-screen min-h-screen bg-primary">
      <Helmet>
        <title>Kustannusarviolaskuri</title>
        <meta
          name="description"
          content="Täytä Kustannusarvio kysely, jotta voimme kartoittaa tarpeesi
          sekä antaa sinulle välittömästi suuntaa-antava hinta-arvio tarjouksesta!"
        />
        <meta property="og:title" content="Kustannusarviolaskuri" />
        <meta
          property="og:description"
          content="Täytä Kustannusarvio kysely, jotta voimme kartoittaa tarpeesi
          sekä antaa sinulle välittömästi suuntaa-antava hinta-arvio tarjouksesta!"
        />
        <meta
          name="keywords"
          content="nettisivut, ohjelmointi, sovellus, applikaatio, ohjelmistokehitys, työnohjaus, automatisointi, järjestelmä, ohjelmisto, kehityskustannukset, budjetti, arviointi, kustannusarvio, tuntihinta, projektin laajuus, kustannustehokkuus, lisäkustannukset, muutokset, palvelupaketit, ylläpitokustannukset, konsultointi, räätälöinti, integrointikustannukset, käyttöönottokustannukset, jatkokehitys, maksuehdot, tarjous, kilpailutus, hinnoittelu"
        />
        <meta
          property="og:url"
          content="https://sunnyharbor.fi/price-estimate"
        />
        <link rel="canonical" href="https://sunnyharbor.fi/price-estimate" />
      </Helmet>
      <div className="2xl:w-[75vw] sm:w-[80vw] w-[90%] mx-auto">
        <div className="mx-auto">
          <div className="w-[70vw] mx-auto">
            <div
              className={`grid sm:gap-4 gap-1 mx-auto w-[85%] 2xl:px-[4vw] mt-28`}
              style={{
                placeItems: "center",
                gridTemplateColumns: `repeat(${
                  cardData.length % 9 == 0 || cardData.length < 9
                    ? cardData.length
                    : Math.ceil(cardData.length / 2)
                }, minmax(0, 1fr))`,
              }}
              ref={barDiv}
            >
              {progressBar}
            </div>
          </div>

          <div
            ref={slideDiv}
            className="lg:w-[70vw] md:w-[75vw] w-[90vw] mx-auto font-poppins"
          >
            <div className="lg:w-[51vw] mx-auto text-[#FCA311] md:b-[3vw]">
              <h1 className="text-4xl font-semibold">Kustannusarvio laskuri</h1>
              <p className="text-white md:text-2xl sm:text-[4vw] text-[6vw] font-light">
                Täytä Kustannusarvio kysely, jotta voimme kartoittaa tarpeesi
                sekä antaa sinulle välittömästi{" "}
                <strong className="text-[#FCA311]">suuntaa-antava</strong>{" "}
                hinta-arvio tarjouksesta!
              </p>
            </div>
          </div>
          <div className="lg:w-[70vw] md:w-[75vw] w-[90vw] mx-auto lg:block hidden">
            <div className="sm:w-[85%] w-[95%] mx-auto 2xl:px-[4vw] px-[2vw]">
              <button
                onClick={() => (pathSelected ? changeCard(1) : choosePath())}
                className={`text-xl mt-5 font-semibold bg-[#FCA311] text-white px-[1vw] py-[0.25vw] rounded-lg font-poppins ${
                  selectingPath ? "" : ""
                }`}
              >
                Seuraava <i className="fa fa-angle-right"></i>
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center pt-[2vh] pb-[3vh]">
            <button
              onClick={() =>
                window.innerWidth < 762 && pathSelected
                  ? changeCard(2)
                  : choosePath()
              }
              ref={mobileBtn}
              className="lg:hidden relative top-0 transition-colors duration-[250ms] bg-[#FCA311] text-white font-poppins font-bold md:text-[2vw] sm:text-[3.5vw] text-[5vw] md:px-[0] px-[2vw] py-[1vw] rounded-lg md:w-[17vw] sm:w-[30vw] w-[35vw] left-0"
            >
              Seuraava
            </button>
          </div>
        </div>
        <div
          ref={report}
          className="hidden w-[100%] min-h-[40vw] mx-auto pb-[4vw]"
        ></div>
      </div>
    </div>
  );
}
