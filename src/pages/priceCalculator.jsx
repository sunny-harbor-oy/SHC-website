import { useEffect, useRef } from "react";
import {renderToString} from "react-dom/server";

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
}

export default function PriceEstimation() {
const cardData = [  
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
];

let index = 0;
const progressBar = cardData.map(() => {
    const i = index;
    index++;
    return <div onClick={() => {
        currentCard = i;
        changeCard(0);
    }} className="hover:cursor-pointer 2xl:h-[0.75vw] md:h-[1.5vw] sm:h-[2vw] h-[3vw] w-full rounded-lg transition-all duration-[250ms]"></div>;
});

let chosenOptions = [];
let currentCard = -1;
let currentCardObject = undefined;
let lastOptionSelected = undefined;
let tranition = false;
let completedStages = {};
let locked = false;

let isMobile = window.innerWidth < 640;

const slideDiv = useRef(null);
const barDiv = useRef(null);
const report = useRef(null);
const mobileBtn = useRef(null);
let writtenSummary = undefined;

let cardId = -1;
const FormElements = cardData.map((card) => {
    cardId++;
    let optionId = -1;
    let getId = () => {
        optionId++;
        return optionId;
    }

    return (
        <div questionid={cardId} className="text-white min-h-full mx-auto transition-all duration-[500ms] sm:w-[85%] w-[95%] 2xl:px-[4vw] px-[2vw] md:pt-[1vw] pt-[3vw]">
            <h1 className="text-[#FCA311] 2xl:text-[3vw] lg:text-[3vw] md:text-[2vw] sm:text-[8wv] text-[10vw] w-4/5 font-poppins font-extrabold">{card.title}</h1>
            <h2 className="2xl:text-[1.5vw] md:text-[2vw] sm:text-[4vw] text-[5vw] sm:w-4/5 w-[90%] font-poppins my-0">{card.question}</h2>
            <div className="flex flex-col md:py-[1vw] md:mt-[0] mt-[5vw] w-full">
                {Object.entries(card.answers).map(([option, value]) => (
                    <div className="flex justify-between w-full hover:text-[#FCA311] sm:my-[1vw] my-[3vw] md:py-[0.75vw] sm:py-[1.5vw] py-[2vw] md:px-[2vw] px-[5vw] bg-[#1b2843] rounded-lg hover:cursor-pointer select-none">
                        <h1 className="transition-all duration-200 font-poppins 2xl:text-[2vw] md:text-[2.5vw] sm:text-[4vw] sm:font-normal md:text-left md:w-auto w-full text-[5vw]">
                            {option}
                        </h1>
                        <div className="bg-white md:w-[1.25vw] sm:w-[2vw] w-[3vw] md:h-[1.25vw] sm:h-[2vw] h-[3vw] my-auto transition-all duration-[250ms] sm:rounded-sm rounded-full" />
                    </div>
                ))}
            </div>
        </div>
    );
});

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

const finalPrice = () => {
    const finalAttributes = {
        "coefficient": 1
    };

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
                } else {
                    finalAttributes[key] += attribute[key];
                }
            });
        });
    });

    let finalPrice = 0;

    for (const [key, value] of Object.entries(finalAttributes)) {
        if (attributeCost[key] != undefined) {
            finalPrice += attributeCost[key] * value;
        }
    }

    finalPrice *= finalAttributes["coefficient"];

    let answersObj = {};
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
            <div className="flex flex-col mx-auto w-[95%] bg-card2 rounded-lg md:px-[1vw] px-[3vw] md:my-[1.5vw] my-[3vw] md:pb-[1vw] pb-[2vw]">
                <h1 className="text-[#FCA311] md:text-[1.75vw] text-[5vw] mt-[1vw] mb-0">{option}:</h1>
                <div className="w-[95%] mx-auto">{Object.entries(value).map(([option, value]) => {
                    return (
                        <div className="flex flex-col md:mb-[0.5vw] mb-[2vw]">
                            <h1 className="text-card md:text-[1.25vw] text-[3.75vw] w-[100%] font-semibold">{option}</h1>
                            {Object.entries(value).map(([option, value]) => {
                                return (
                                    <h2 className="md:text-[1vw] text-[3.5vw] w-[75%]">- {value}</h2>
                                );
                            })}
                        </div>
                    );
                })}</div>
            </div>
        );
    });

    const writtenFeedback = <h2 className="md:text-[1.25vw] text-[4vw]">
        {`Vastaamasi perusteella tuote olisi laajuudeltaan ${finalAttributes.laajuusAikataulu == 3 ? "erittäin laaja" : (finalAttributes.laajuusAikataulu == 2 ? "laaja" : "pieni")} ja sen kehitys ${finalAttributes.kiireellisyys == 1 ? "ei olisi kiireellistä" : (finalAttributes.kiireellisyys == 2 ? "olisi melko kiireellistä" : "olisi kiireellistä")}.
        Se tulisi kehittää ${finalAttributes.laajuusAlustat > 1 ? "useimmalle alustalle" : "yhdelle alustalle"} ja sen ulkonäkö ${finalAttributes.räätälöityUlkonakö == 1 ? "räätälöity juuri sinulle" : "valmiin pohjan päältä tehty"}.`}<br/><br/>{`
        Ominaisuuksia olisi ${finalAttributes.laajuusOminaisuudet > 1 ? (finalAttributes.laajuusOminaisuudet > 4 ? "erittäin kattavasti" : "useita") : "muutamia"} ja olisivat 
        ${finalAttributes.räätälöityOminaisuudet == 1 ? "meidän kehittämiä sekä avoimen lähdekoodin tuotoksia" : "jo olemassa olevia avoimeen lähdekoodiin perustuvia"}.`}<br/><br/>{`
        Tuote on suunnattu ${finalAttributes.käyttäjät == 0 ? "yksityishenkilöille" : (finalAttributes.käyttäjät == 1 ? "yrityksille" : "sekä yksityishenkilöille että yrityksille")}
        ${finalAttributes.integraatio == 0 ? "eikä sitä tarvitse integroida olemassa oleviin järjestelmiin" : "ja tulisi integroida jo olemassa oleviin järjestelmiin"}.`}<br/><br/>{`
        ${finalAttributes.ylläpito == 0 ? " Et nähnyt kehityksen jälkeistä ylläpitoa tarpeellisena." : "Tulisimme ylläpitämään tuotettasi kehityksen jälkeenkin."}`}
    </h2>

    return (
        <div className="text-white md:mt-0 mt-[-2vh] font-poppins mx-auto md:w-[70vw] w-[90vw]">
            <h1 className="text-[#FCA311] md:text-[3vw] text-[7vw] font-extrabold">Kustannusarvion yhteenveto:</h1>
            <h2 className="md:text-[1.5vw] text-[4vw] w-[75%] md:mb-[1vw] mb-[5vw]">Hinta-arvio on suuntaa-antava ja lopullinen hinta määräytyy projektin vaativuuden mukaan.</h2>
            <div className="md:flex w-[100%]">
                <div className="md:w-[32.5vw] w-[100%]" id="choicesSummary">
                    <h1 className="text-[#FCA311] md:text-[2vw] md:font-normal font-semibold text-[6vw] mt-[1vw]">Valintasi:</h1>
                    <div className="mx-auto md:w-auto w-[80vw]">{answerElements}</div>
                </div>
                <div className="md:w-[34vw] w-[90vw] md:mt-0 mt-[6vw] mx-auto relative" id="writtenSummary">
                <div className="md:w-[34vw] md:px-[5vw] w-[100%]">
                    <h1 className="text-[#FCA311] md:text-[1.75vw] text-[6vw] mt-[1vw] md:font-normal font-semibold">Kirjallinen yhteenveto:</h1>
                    {writtenFeedback}
                    <h1 className="text-[#FCA311] md:text-[1.75vw] text-[6vw] md:mt-[1vw] mt-[4vw] md:font-normal font-semibold">Hinta:</h1>
                    <h2 className="md:text-[1.25vw] text-[4vw] md:mb-0 mb-[3vw]">alk. {Math.ceil(finalPrice)*1000}€ + alv 24%</h2>
                </div>
                </div>
            </div>
            <h1 className="md:text-[1.5vw] text-[4vw] md:pt-[1vw] pt-[5vw] md:mb-0 mb-[10vw] text-center md:w-[75%] w-[100%] mx-auto">Eikö hinta ollut mitä ajattelit? Ei hätää, neuvotellaan!<br/><strong className="text-[#FCA311]">Ota yhteyttä!</strong></h1>
        </div>
    ); // Eikö hinta ollut mitä ajattelit? Ei hätää, neuvotellaan! Ota yhteyttä!
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
        });        
    }

    updateStages();
}

const changeCard = (change) => {
    if (tranition) return;

    currentCard += change;

    if (currentCard < 0) currentCard = 0;

    if (false) {
        slideDiv.current.parentElement.style.display = "none";

        barDiv.current.style.display = "none";

        report.current.innerHTML = renderToString(finalPrice());
        report.current.style.display = "block";

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

        report.current.innerHTML = renderToString(finalPrice());
        report.current.style.display = "block";

        resizeUpdate();

        return;
    } else {
        renderCard(currentCard);
        slideDiv.current.parentElement.style.display = "block";
        report.current.style.display = "none";
    }
    
}

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

        console.log(writtenSummaryBottom, writtenSummaryHeight, window.innerHeight*0.92);

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
    <div className="bg-[#14213D] w-screen">
    <div className="min-h-screen 2xl:w-[75vw] sm::w-[80vw] w-[90%] xl:pt-32 lg:pt-[10vh] sm:pt-32 pt-24 mx-auto">
        <div className="2xl:1/2 md:w-2/3 mx-auto pt-[2vw]">
            <div className={`grid sm:gap-4 gap-1 mx-auto w-full`} style={{ placeItems: 'center', gridTemplateColumns: `repeat(${cardData.length < 9 ? cardData.length : 9}, minmax(0, 1fr))`}} ref={barDiv}>
                {progressBar}
            </div>
        </div>
        <div className="w-[100%] min-h-[40vw] mx-auto">
            <div ref={slideDiv} className="lg:w-[70vw] md:w-[75vw] w-[90vw] mx-auto font-poppins md:min-h-auto min-h-[50vh]">
                <div className="lg:w-[51vw] mx-auto text-[#FCA311] md:b-[3vw]">
                    <h1 className="xl:text-[3.5vw] lg:text-[3vw] md:text-[6vw] sm:text-[7vw] text-[10vw] font-semibold">Kustannusarvio laskuri</h1>
                    <p className="text-white lg:text-[2.5vw] md:text-[3vw] sm:text-[4vw] text-[6vw] font-light">Täytä Kustannusarvio kysely, jotta voimme kartoittaa tarpeesi sekä antaa sinulle välittömästi <strong className="text-[#FCA311]">suuntaa antava</strong> hinta-arvio tarjouksesta!</p>
                </div>
            </div> 
            <div className="lg:w-[70vw] md:w-[75vw] w-[90vw] mx-auto md:block hidden">
                <div className="sm:w-[85%] w-[95%] mx-auto 2xl:px-[4vw] px-[2vw]">
                <button onClick={() => changeCard(1)} className="xl:text-[1.5vw] text-[2vw] font-semibold bg-[#FCA311] text-[#1b2843] px-[1vw] py-[0.25vw] rounded-lg font-poppins">Seuraava <i className="fa fa-angle-right"></i></button>
                </div>
            </div>
            <div className="w-full flex justify-center pt-[2vh] pb-[3vh]">
                <button onClick={() => changeCard(1)} ref={mobileBtn} className="md:hidden relative top-0 transition-colors duration-[250ms] bg-[#FCA311] text-white font-poppins font-bold sm:text-[3.5vw] text-[5vw] px-[2vw] py-[1vw] rounded-lg sm:w-[30vw] w-[35vw] left-0">Seuraava</button>
            </div>
        </div>
        <div ref={report} className="hidden w-[100%] min-h-[40vw] mx-auto pb-[4vw]">
        </div>
    </div>
    </div>
);
}
