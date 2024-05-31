import { useEffect, useRef, useState } from "react";
import {renderToString} from "react-dom/server";
import { Helmet } from "react-helmet"

const decaultSettings = {
    multipleChoice: false,
}

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
}

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
            "Kyllä": { cost: 1 },
        },
    },
    {
        title: "Monikielisyys",
        question: "Onko kotisivu monikielinen?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 0.4 },
        },
    },
    {
        title: "Näkymien määrä",
        question: "Kuinka monta näkymää sivulla pitäisi olla?",
        answers: {
            "1": { insta_coef: 0 },
            "2-4": { insta_coef: 1.5 },
            "5+": { insta_coef: 1.8 },
        },
    },
    {
        title: "Järjestelmät",
        question: "Onko sivuilla tarve blogisysteemille tai muille samankaltaisille järjestelmille?",
        answers: {
            "Blogi järjestelmälle on tarvetta": { cost: 0.5 },
            "Muulle järjestelmälle on tarvetta (kuten tämä hintalaskuri)": { cost: 1 },
            "Ei ole tarvetta": { cost: 0 },
        },
    },
    {
        title: "Uutiskirje",
        question: "Onko tarvetta uutiskirjeelle?",
        answers: {
            "Kyllä": { cost: 0.2 },
            "Ei": { cost: 0 },
        },
    },
    {
        title: "Käyttöehdot ja muu",
        question: "Onko tarvetta sille, että kirjoitamme eväsehdät, jne?",
        answers: {
            "Kyllä": { cost: 0.2 },
            "Ei": { cost: 0 },
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
        question: "Pitääkö verkkokaupalle suunnitella oma ulkonäkö/käyttöliittymä?",
        answers: {
            "Kyllä, pitää suunnitella": {cost: 2.5},
            "EI, ulkonäkö on jo suunniteltu": {cost: 2},
        }
    },
    {
        title: "Tuotteet",
        question: "Onko kyseessä digitaalinen vai fyysinen tuote?",
        answers: {
            "Digitaalinen": {cost: 0},
            "Fyysinen": {cost: 1.5},
            "Kumpaakin": {cost: 1.5},
        }
    },
    {
        title: "Monikielisyys",
        question: "Ovatko sivut monikieliset?",
        answers: {
            "Vain yksi kieli": {cost: 0},
            "Useampi kieli": {cost: 0.4},
        }
    },
    {
        title: "Tuotteiden räätälöinti",
        question: "Voiko tuotteita/palveluja räätälöidä verkkokaupassa?",
        answers: {
            "Ei, tuotteita ei voi räätälöidä": {cost: 0},
            "Kyllä, tuotteita voi räätälöidä": {cost: 1.5},
        }
    },
    {
        title: "Integraatio",
        question: "Tuleeko tuotteiden tiedot toisesta verkkopalvelusta?",
        answers: {
            "Ei": {cost: 0},
            "Osittain": {cost: 0.5},
            "Kyllä": {cost: 0.3},
        }
    },
    {
        title: "Olemassa olevat nettisivut",
        question: "Onko palvelusta tai tuotteesta olemassa jo omat nettisivut?",
        answers: {
            "Ei, joten nettisivut pitää luoda verkkokaupan yhteydessä": {cost: 1},
            "On, joten vain verkkokaupalle on tarvetta": {cost: 0},
        }
    },
    {
        title: "Uutiskirje",
        question: "Onko tarvetta uutiskirjeelle asiakkaalle?",
        answers: {
            "Kyllä": {cost: 0.2},
            "Ei": {cost: 0},
        }
    },
    {
        title: "Käyttöehdot ja cookie policy",
        question: "Onko tarvetta sillä, että kirjoitamme nettikaupalle käyttöehdot, cookie policy:n, jne?",
        answers: {
            "Kyllä": {cost: 0.4},
            "Ei": {cost: 0},
        }
    },
    {
        title: "Tuotteiden hallinnointi",
        question: "Pysyvätkö myytävät tuotteet/palvelut samoina?",
        answers: {
            "Ei, minun pitää pystyä muuttamaan niitä helposti": {cost: 0.1},
            "Ei, ne muuttuvat aina välillä": {cost: 0.2},
            "Kyllä": {cost: 0},
        }
    },
    {
        title: "Käyttäjäkirjautuminen",
        question: "Pitääkö kuluttajien pystyä kirjautumaan verkkokauppaan?",
        answers: {
            "Kyllä": {cost: 1},
            "Ei": {cost: 0},
        }
    },
    {
        title: "Projektin aikataulu",
        question: "Projektin aikataulu on:",
        answers: {
            "3-4 viikkoa": {coefficient: 1.75},
            "1-2 kk": {coefficient: 1.30},
            "3+ kk": {coefficient: 1},
        }
    }
]

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
        question: "Pitääkö sovellukselle suunnitella oma ulkonäkö/käyttöliittymä?",
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
            "Bluetooth": { cost: 2 },
            "AR": { cost: 5 },
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
            "Ei": { cost: 0 },
            "Kyllä": { cost: 4 },
        },
    },
    {
        title: "Hallintapaneeli",
        question: "Vaatiiko sovellus sovellusta hallitsevan nettisivun (hallintapaneelin)?",
        answers: {
            "Ei": { coefficient: 1 },
            "Kyllä": { coefficient: 1.8 },
        },
    },
    {
        title: "Ilmoitukset",
        question: "Tarvitseeko sovellus ilmoituksia?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 3 },
        },
    },
    {
        title: "Maksujärjestelmä",
        question: "Vaatiiko sovellus maksujärjestelmää?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 2 },
        },
    },
    {
        title: "Käyttö",
        question: "Onko sovellus yrityksen sisäiseen käyttöön vai julkiseen käyttöön?",
        answers: {
            "Sisäiseen": { cost: 0 },
            "Julkiseen": { cost: 2 },
        },
    },
    {
        title: "Kielisyys",
        question: "Onko sovellus monikielinen?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 1 },
        },
    },
    {
        title: "Viestintä",
        question: "Tarvitseeko sovellus viestintä/chat -ominaisuuden?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 4 },
        },
    },
    {
        title: "Alustat",
        question: "Mihin alustoihin tämä julkaistaan?",
        answers: {
            "iOS": { cost: 0.2 },
            "Android": { cost: 0.250 },
            "Molemmat": { cost: 0.4 },
        },
    },
    {
        title: "Identtinen nettisivu",
        question: "Vaatiiko sovellus identtisen nettisivun (WebAppin) mobiilisovelluksen rinnalle?",
        answers: {
            "Ei": { insta_coef: 1 },
            "Kyllä": { insta_coef: 1.8 },
        },
    },
    {
        title: "Käyttöehdot",
        question: "Onko tarvetta sille, että kirjoitamme käyttöehdot, jne?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 1 },
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
        question: "Pitääkö sovellukselle suunnitella oma ulkonäkö/käyttöliittymä?",
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
            "Bluetooth": { cost: 2 },
            "AR": { cost: 5 },
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
            "Ei": { cost: 0 },
            "Kyllä": { cost: 4 },
        },
    },
    {
        title: "Hallintapaneeli",
        question: "Vaatiiko sovellus sovellusta hallitsevan nettisivun (hallintapaneelin)?",
        answers: {
            "Ei": { coefficient: 1 },
            "Kyllä": { coefficient: 1.8 },
        },
    },
    {
        title: "Ilmoitukset",
        question: "Tarvitseeko sovellus ilmoituksia?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 3 },
        },
    },
    {
        title: "Maksujärjestelmä",
        question: "Vaatiiko sovellus maksujärjestelmää?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 2 },
        },
    },
    {
        title: "Käyttö",
        question: "Onko sovellus yrityksen sisäiseen käyttöön vai julkiseen käyttöön?",
        answers: {
            "Sisäiseen": { cost: 0 },
            "Julkiseen": { cost: 2 },
        },
    },
    {
        title: "Kielisyys",
        question: "Onko sovellus monikielinen?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 1 },
        },
    },
    {
        title: "Viestintä",
        question: "Tarvitseeko sovellus viestintä/chat -ominaisuuden?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 4 },
        },
    },
    {
        title: "Alustat",
        question: "Mihin alustoihin tämä julkaistaan?",
        answers: {
            "Kyseessä on ladattava sovellu": { coefficient: 1.2 },
            "Kyseessä on selaimella käytettävä": { coefficient: 1 },
            "Kumpikin": { coefficient: 1.3 },
        },
    },
    {
        title: "Identtinen nettisivu",
        question: "Vaatiiko sovellus identtisen nettisivun (WebAppin) mobiilisovelluksen rinnalle?",
        answers: {
            "Ei": { insta_coef: 1 },
            "Kyllä": { insta_coef: 1.8 },
        },
    },
    {
        title: "Käyttöehdot",
        question: "Onko tarvetta sille, että kirjoitamme käyttöehdot, jne?",
        answers: {
            "Ei": { cost: 0 },
            "Kyllä": { cost: 1 },
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
            "Mobiili": { cost: 10 },
            "Nettisivu": { cost: 1 },
            "Tietokonesovellus": { cost: 11 },
            "Liitetään valmiiseen ohjelmistoon": { cost: 2.5 },
        },
    },
    {
        title: "Tarkoitus",
        question: "Mihin tarkoituksiin tekoäly tarvitaan?",
        answers: {
            "Asiakaspalvelu": { cost: 1 },
            "Yleinen keskustelu": { cost: 1 },
            "Digiassistenttina toimiminen (esim. Siri tai Alexa)": { cost: 10 },
            "Kuvien/videoiden käsittely": { cost: 5 },
            "Kuvien/videoiden lukeminen": { cost: 5 },
            "Tekstin käsittely / kirjoittaminen": { cost: 2.5 },
            "Datan analysointi / ennustaminen": { cost: 5 },
            "Laitteiston hallinnointi (esim. Led valot tai tehdas laitteisto)": { cost: 4 },
            "Äänen / musiikin tuottaminen": { cost: 10 },
        },
        settings: {
            multipleChoice: true,
        }
    },
    {
        title: "Internetti",
        question: "Pitääkö tekoälyn pystyä lukea internettiä?",
        answers: {
            "Kyllä": { cost: 10 },
            "Ei": { cost: 0 },
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
    return <div onClick={() => {
        currentCard = i;
        changeCard(0);
    }} className="hover:cursor-pointer lg:h-[17px] md:h-[15px] sm:h-[15px] h-3 w-full rounded-lg transition-all duration-[250ms]"></div>;
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

let isMobile = window.innerWidth < 768;

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
}

const getCardOption = (option, cardId = currentCard) => {
    if (cardData[cardId] == undefined) return undefined;

    const card = cardData[cardId];
    const settings = card.settings == undefined ? decaultSettings : mergeObjects(decaultSettings, card.settings);

    return settings[option] ? settings[option] : false;
}

let answersObj = {};
let finalPrice = 0;

const finalPriceFunc = () => {
    const finalAttributes = {
        "coefficient": 1
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
    })

    i = -1;
    const answerElements = Object.entries(answersObj).map(([option, value]) => {
        i++;
        return (
            <div className="flex flex-col xl:mx-auto bg-card2 rounded-lg xl:my-5 lg:my-3 my-3 xl:py-5 lg:py-3 py-2 xl:px-5 lg:px-3 px-3 max-lg:w-[90%] max-sm:w-full">
                <h1 className="text-[#FCA311] xl:text-xl lg:text-lg max-sm:text-lg font-bold">{option}:</h1>
                <div className="">{Object.entries(value).map(([option, value]) => {
                    return (
                        <div className="px-3">
                            <h1 className="text-card xl:text-lg lg:text-base w-[85%] font-semibold">{option}</h1>
                            {Object.entries(value).map(([option, value]) => {
                                return (
                                    <h2 className="xl:text-lg lg:text-sm w-[85%]">- {value}</h2>
                                );
                            })}
                        </div>
                    );
                })}</div>
            </div>
        );
    });

    const writtenFeedback = <h2 className="xl:text-xl xl:w-[380px] lg:w-[300px] max-md:w-[90%]">
        Kustannusarvio laskuri pyrkii antamaan mahdollisimman hyvän kuvan projektin vaativuudesta ja hinnasta. Kuitenkin lopullinen hinta määräytyy yksityiskohtien ja lisätietojen selkeentyessä. Jos hinta-arvio ei vastaa odotuksiasi, ota yhteyttä ja neuvotellaan!
    </h2>

    return (
        <div className="text-white font-poppins mx-auto">
            <h1 className="text-[#FCA311] xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-extrabold">Kustannusarvion yhteenveto:</h1>
            <h2 className="xl:text-2xl lg:text-xl md:text-lg xl:w-[800px] lg:w-[750px]">Hinta-arvio on suuntaa-antava ja lopullinen hinta määräytyy projektin vaativuuden mukaan.</h2>
            <div className="md:flex w-[100%] lg:mt-5 mt-3">
                <div className="md:w-[50%] w-[100%]" id="choicesSummary">
                    <h1 className="text-[#FCA311] xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-xl font-bold">Valintasi:</h1>
                    <div className="mx-auto">{answerElements}</div>
                </div>
                <div className="md:w-[34%] sm:w-[90vw] mx-auto relative" id="writtenSummary">
                <div className="w-full mx-auto">
                    <h1 className="text-[#FCA311] xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-xl font-bold max-sm:mt-5">Kustannusarvio laskuri:</h1>
                    {writtenFeedback}
                    <h1 className="text-[#FCA311] xl:text-2xl lg:text-xl sm:text-xl text-xl mt-5 font-semibold">Hinta:</h1>
                    <h2 className="xl:text-xl">alk. <span className="text-[#FCA311] font-semibold">{Math.ceil(finalPrice)*1000}€</span> + alv</h2>
                    <button className={`xl:text-lg max-md:text-sm lg:mt-5 md:mt-3 my-3 xl:px-3 lg:px-2 md:px-3 px-3 py-1 max-md:mx-auto font-semibold bg-[#FCA311] lg:rounded-lg rounded font-poppins`}>Ota yhteyttä <i className="fa fa-angle-right"></i></button>
                </div>
                </div>
            </div>
            <h1 className="text-center md:w-[75%] w-[100%] mx-auto">Eikö hinta ollut mitä ajattelit? Ei hätää, neuvotellaan!<br/><strong className="text-[#FCA311] max-md:hidden">Ota yhteyttä!</strong></h1>
        </div>
    ); // Eikö hinta ollut mitä ajattelit? Ei hätää, neuvotellaan! Ota yhteyttä!
}

const choosePath = () => {
    const pathMap = {
        "Verkkokauppa": verkkokauppaData,
        "Kotisivut": kotisivutData,
        "Mobiilisovellus": mobiilisovellusData,
        "Tietokonesovellus": tietokonesovellusData,
        "Tekoälyohjelma": tekoalyData,
    }

    setSelectingPath(true);

    slideDiv.current.innerHTML = "";

    const onClickFunc = (mapId) => {
        console.log(cardData)
        setCardData(pathMap[mapId]);
        setSelectingPath(false);
        setpathSelected(true);
        mobileBtn.current.click();
    }

    const elemRender = 
    <div questionid={cardId} className="text-white min-h-full mx-auto transition-all duration-[500ms] lg:w-[85%] 2xl:px-[4vw] md:px-[2vw]">
        <h1 className="text-[#FCA311] 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl sm:w-4/5 font-poppins font-extrabold">Projektin tyyppi</h1>
        <h2 className="xl:mt-[10px] 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-lg sm:w-4/5 w-[90%] font-poppins my-0">Valitse alla olevista vaihtoehdoista se, joka parhaiten kuvaa tarpeitasi.</h2>
        <div className="flex flex-col mt-[10px] w-full">
            {Object.entries(pathMap).map(([option, value]) => (
                <div id={option} className="flex justify-between min-w-[200px] lg:w-full 2xl:py-[20px] xl:py-[12.5px] lg:py-[10px] md:py-[7px] py-[5px] 2xl:px-[20px] xl:px-[15px] lg:px-[10px] md:px-[10px] px-[10px] 2xl:my-[10px] xl:my-[10px] lg:my-[7.5px] md:my-[5px] my-[5px] md:hover:text-[#FCA311] bg-card2 rounded-lg hover:cursor-pointer select-none">
                    <h1 className="transition-all duration-200 font-poppins 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg text-lg sm:font-normal md:text-left md:w-auto w-full text-[5vw]">
                        {option} 
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 my-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            ))}
            <div className="flex justify-between min-w-[200px] lg:w-full 2xl:py-[20px] xl:py-[12.5px] lg:py-[10px] md:py-[7px] py-[5px] 2xl:px-[20px] xl:px-[15px] lg:px-[10px] md:px-[10px] px-[10px] 2xl:my-[10px] xl:my-[10px] lg:my-[7.5px] md:my-[5px] my-[5px] md:hover:text-[#FCA311] bg-card2 rounded-lg hover:cursor-pointer select-none">
                <h1 className="transition-all duration-200 font-poppins 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg text-lg sm:font-normal md:text-left md:w-auto w-full text-[5vw]">
                    Muu, mikä?
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 my-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </div>
    </div>

    slideDiv.current.innerHTML = renderToString(elemRender);

    const children = slideDiv.current.children[0].children[2].children
    console.log(children)
    for (let i = 0; i < children.length - 1; i++) {
        console.log(i)
        children[i].addEventListener("click", () => {
            window.dispatchEvent(new Event("test"));
            setCardData(pathMap[children[i].id]);
            onClickFunc(children[i].id);
        });
    }

    children[children.length - 1].addEventListener("click", () => {
        window.location.href = "/ota-yhteytta";
    });
}

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
        }
        else {
            const options = Object.values(chosenOptions[i]);
            let hasValue = false;
            options.forEach((option) => {
                if (option != undefined) hasValue = true;
            });

            if (hasValue) {
                stages[i].style["background-color"] = "#1eb82a";
                completedStages[i] = true;
            }
            else stages[i].style["background-color"] = "#fe3839";
        }
    }
}

const chooseOption = (optionValues) => {
    if (chosenOptions[currentCard] == undefined) chosenOptions[currentCard] = {};
    let currentValues = chosenOptions[currentCard];

    const isMultipleChoice = getCardOption("multipleChoice");

    if (isMultipleChoice == false && lastOptionSelected != undefined) {
        if (lastOptionSelected.questionId != optionValues.questionId) {
            lastOptionSelected.self.children[1].style["background-color"] = "#c6d0d8";
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
    }
    else {
        currentValues[`${optionValues.questionId}`] = optionValues.value;
        chosenOptions[currentCard] = currentValues;

        mobileBtn.current.style["background-color"] = "#1eb82a";

        return true;
    }
}

const renderCard = (cardId) => {
    const cardIdBefore = cardId;

    const FormElements = cardData.map((card) => {
        cardId++;
        let optionId = -1;
        let getId = () => {
            optionId++;
            return optionId;
        }
    
        return (
            <div key={cardId} questionid={cardId} className="text-white min-h-full mx-auto transition-all duration-[500ms] 2xl:w-[65%] w-[90%] mt-[20px]">
                <h1 className="text-[#FCA311] lg:text-4xl md:text-3xl sm:text-2xl text-xl sm:w-4/5 font-poppins font-extrabold">{card.title}</h1>
                <h2 className="lg:text-2xl md:text-xl sm:text-lg text-lg md:w-4/5 w-[100%] font-poppins my-0">{card.question}</h2>
                <div className="flex flex-col md:py-[1vw] md:mt-[0] mt-[10px] w-full">
                    {Object.entries(card.answers).map(([option, value]) => (
                        <div className="flex justify-between w-full md:hover:text-[#FCA311] bg-card2 rounded-lg hover:cursor-pointer select-none lg:py-3 py-2 px-5 mt-3">
                            <h1 className="transition-all duration-200 font-poppins lg:text-xl md:text-lg sm:text-lg text-base sm:font-normal md:text-left md:w-auto w-full">
                                {option}
                            </h1>
                            <div className="bg-white md:w-[1.25vw] sm:w-[2vw] w-[3vw] md:h-[1.25vw] sm:h-[2vw] h-[3vw] my-auto transition-all duration-[250ms] rounded-sm" />
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

    const answers = slideDiv.current.firstChild.children[slideDiv.current.firstChild.children.length - 1].children;

    if (chosenOptions[cardId] == undefined) mobileBtn.current.style["background-color"] = "#c6d0d8";
    else if (Object.keys(chosenOptions[cardId]).length == 0) mobileBtn.current.style["background-color"] = "#c6d0d8";
    else mobileBtn.current.style["background-color"] = "#1eb82a";

    for (let i = 0; i < answers.length; i++) {
        if (chosenOptions[cardId] != undefined && chosenOptions[cardId][`${i}`] != undefined) {
            answers[i].children[1].style["background-color"] = "#1eb82a";
            lastOptionSelected = {questionId: i, self: answers[i]};
        }

        answers[i].addEventListener("click", () => {
            const self = answers[i];
            const ownId = i;

            const answerValue = Object.values(cardData[cardId].answers)[i];
            const state = chooseOption({questionId: ownId, value: answerValue});

            self.children[1].style["background-color"] = state ? "#1eb82a" : "#c6d0d8";
            lastOptionSelected = state ? {questionId: ownId, self} : undefined;

            if (cardData[cardId]['settings'] && state) {
                if (cardData[cardId]['settings']['multipleChoice'] == false && lastOptionSelected != undefined) {
                    changeCard(1);
                }
            } else if (state) {
                changeCard(1);
            }
        });        
    }

    updateStages();
}

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

        report.current.children[0].children[2].children[1].children[0].children[4].addEventListener("click", () => {
            const cookieData = {
                "finalPrice": Math.ceil(finalPrice)*1000,
                //"answers": answersObj,
                "chosenOptions": chosenOptions,
                "finalAttributes": finalAttributes,
            }

            document.cookie = `priceCalculator=${JSON.stringify(cookieData)}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;

            window.location.href = "/ota-yhteytta";
        });

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

        report.current.children[0].children[2].children[1].children[0].children[4].addEventListener("click", () => {
            const cookieData = {
                "finalPrice": Math.ceil(finalPrice)*1000,
                "answers": answersObj,
                "chosenOptions": chosenOptions,
                //"finalAttributes": finalAttributes,
            }

            console.log(cookieData);

            document.cookie = `priceCalculator=${JSON.stringify(cookieData)}; path=/`;

            window.location.href = "/ota-yhteytta";
        });

        resizeUpdate();
    } else {
        console.log("rendering");
        console.log(currentCard);
        renderCard(currentCard);
        slideDiv.current.parentElement.style.display = "block";
        report.current.style.display = "none";
    }
    
    // Reset scroll
    window.scrollTo(0, 0);
}

let writtenSummaryHeight = 0;
let writtenSummaryTop = 0;
let writtenSummaryBottom = 0;
let choicesSummaryHeight = 0;

const resizeUpdate = () => {
    isMobile = window.innerWidth < 768;

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
        writtenSummary.style.height = `${choicesSummary.getBoundingClientRect().height}px`;
    }
}

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

        if (window.innerHeight*0.92 > writtenSummaryHeight) {
            if (writtenSummaryBottom - window.innerHeight*0.1 < writtenSummaryHeight) {
                childDiv.style.position = "absolute";
                childDiv.style.bottom = `0px`;
                childDiv.style.top = "auto";
            } else if (writtenSummaryTop < window.innerHeight*0.08) {
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
}

useEffect(() => {
    //changeCard(0);
    //window.addEventListener("load", changeCard(0));
    resizeUpdate();
    window.addEventListener("resize", resizeUpdate);
    window.addEventListener("scroll", onScroll);

    return () => {
        window.removeEventListener("resize", resizeUpdate);
        window.removeEventListener("scroll", onScroll);
    }
});

return (
    <div className="flex justify-center w-screen min-h-[85vh] bg-primary md:pt-[13vh] pt-[9vh]">
          <Helmet>
          <title>Kustannusarviolaskuri</title>
          <meta 
          property="og:title"
          content="Kustannusarviolaskuri"
          />
        <meta
          property="og:description"
          content="Kustannusarvio laskuri pyrkii antamaan mahdollisimman hyvän kuvan projektin vaativuudesta ja hinnasta. Kuitenkin lopullinen hinta määräytyy yksityiskohtien ja lisätietojen selkeentyessä. Jos hinta-arvio ei vastaa odotuksiasi, ota yhteyttä ja neuvotellaan!"
        />
               <meta property="og:image" content={teamImg} />
               <meta name="keywords" content="nettisivut, ohjelmointi, sovellus, applikaatio, ohjelmistokehitys, työnohjaus, automatisointi, järjestelmä, ohjelmisto"/>
        <meta
          property="og:url"
          content="https://sunnyharbor.fi/kustannusarviolaskuri"
        />
        <meta name="author" content="Sisu Eriksson" />
        <link rel="canonical" href="https://sunnyharbor.fi/kustannusarviolaskuri" />
      </Helmet>
    <div className="2xl:w-[1500px] lg:w-[1000px] md:w-[750px] sm:w-[640px] w-[95%]">
        <div className="2xl:w-[1000px] lg:w-[900px] md:w-[690px] sm:w-[600px] mx-auto">
            <div className={`grid gap-1 mx-auto w-full`} style={{ placeItems: 'center', gridTemplateColumns: `repeat(${(cardData.length % 9 == 0 || cardData.length < 9) ? cardData.length : Math.ceil(cardData.length / 2) }, minmax(0, 1fr))`}} ref={barDiv}>
                {progressBar}
            </div>
        </div>
        <div className="min-h-[40vw] mx-auto w-full">
            <div ref={slideDiv} className="w-full font-poppins md:min-h-auto min-h-[35vh] flex justify-center mx-auto">
                <div className="lg:max-w-[700px] md:max-w-[525px] sm:max-w-[450px] text-[#FCA311] md:b-[3vw] max-md:px-[20px]">
                    <h1 className="xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-semibold">Kustannusarvio laskuri</h1>
                    <p className="text-white xl:text-3xl lg:text-2xl md:text-2xl text-xl md:font-light">Täytä Kustannusarvio kysely, jotta voimme kartoittaa tarpeesi sekä antaa sinulle välittömästi <strong className="text-[#FCA311]">suuntaa antava</strong> hinta-arvio tarjouksesta!</p>
                    <button hidden={pathSelected} onClick={() => pathSelected ? changeCard(1) : choosePath()} className={`lg:text-xl md:mt-[50px] font-semibold bg-[#FCA311] text-white px-[3%] py-[0.75%] rounded-lg font-poppins max-lg:hidden`}>Seuraava <i className="fa fa-angle-right"></i></button>
                </div>
            </div> 
            <div className="2xl:w-[980px] lg:w-[900px] mx-auto lg:block hidde mt-5">
                <button hidden={!pathSelected} onClick={() => pathSelected ? changeCard(1) : choosePath()} className={`xl:text-xl lg:text-lg font-semibold bg-[#FCA311] text-white px-4 py-1 rounded-lg font-poppins max-lg:hidden`}>Seuraava <i className="fa fa-angle-right"></i></button>
            </div>
            <div className="w-full flex justify-center pt-[2vh] pb-[3vh]">
                <button hidden={selectingPath ? !pathSelected : false} onClick={() => pathSelected ? changeCard(1) : choosePath()} ref={mobileBtn} className={`lg:hidden relative top-0 transition-colors duration-[250ms] bg-[#FCA311] text-white font-poppins font-bold md:text-xl sm:text-lg text-lg px-[20px] py-[3px] rounded-lg left-0`}>Seuraava</button>
            </div>
        </div>
        <div ref={report} className="hidden w-[100%] min-h-[40vw] mx-auto pb-[4vw]">
        </div>
    </div>
    </div>
);
}