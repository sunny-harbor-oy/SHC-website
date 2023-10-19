import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {renderToString} from "react-dom/server";

const decaultSettings = {
    multipleChoice: false,
}

const attributeCost = {
    scale: 0.75,
    complexity: 1.25,
    urgency: 1.25,
    cost: 1,
    coefficient: 0
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
    "Selain": {coefficient: 1},
    "Mobiili (Android & iOS)": {coefficient: 1.2},
    "Tietokone": {coefficient: 1.2},
    },
},
{
    title: "Ulkonäkö",
    question: "Tarvitsetko täysin yksilöidyn ulkonäön?",
    answers: {
    "Kyllä": {coefficient: 1.2},
    "Ei": {coefficient: 1},
    }
},
{
    title: "Ominaisuudet",
    question: "Mitkä ovat hankkeen toivotut ominaisuudet? (Valitse kaikki soveltuvat)",
    settings: {
        multipleChoice: true,
    },
    answers: {
    "Sähköisen kaupankäynnin toiminnallisuus": {cost: 1},
    "Mukautettu suunnittelu": {cost: 1},
    "Analytiikka": {cost: 2},
    "Tietokanta (esim. SQL)": {cost: 2},
    "Muu...": {cost: 2},
    }
},
{
    title: "Ominaisuudet",
    question: "Ominaisuudet olisivat...",
    answers: {
    "Avoimen lähdekoodin": {coefficient: 1},
    "Juuri sinulle kehitetty": {coefficient: 1.1},
    "Kummatkin": {coefficient: 1.1},
    }
},
{
    title: "Käyttäjät",
    question: "Ketä käyttäjät/asiakkaat ovat?",
    settings: {
        multipleChoice: false,
    },
    answers: {
    "Yksityishenkilöt": {coefficient: 1.1},
    "Yritykset": {coefficient: 1.2},
    "Kummatkin": {coefficient: 1.1},
    }
},
{
    title: "Integraatio",
    question: "Pitääkö ohjelmisto integroida jo jonkin valmiin järjestelmän kanssa?",
    answers: {
    "Kyllä": {coefficient: 1.1},
    "Ei": {coefficient: 1},
    }
},
{
    title: "Aikataulu",
    question: "Kuinka kauan uskot ohjelmiston kehityksen kestävän?",
    answers: {
    "Alle 3 kuukautta": {coefficient: 1},
    "3 - 6  kuukautta": {coefficient: 1.5},
    "6 - 12 kuukautta": {coefficient: 2},
    }
},
{
    title: "Aikataulu",
    question: "Millä aikataululla ohjelmiston pitäisi olla valmis?",
    answers: {
    "1 - 3  kuukautta": {coefficient: 1},
    "3 - 6  kuukautta": {coefficient: 1},
    "6 - 12 kuukautta": {coefficient: 1},
    }
},
{
    title: "Ylläpito",
    question: "Tarvitsetko ylläpitoa?",
    answers: {
    "Kyllä": {coefficient: 1},
    "Ei": {coefficient: 1.05},
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

let cardId = -1;
const FormElements = cardData.map((card) => {
    cardId++;
    let optionId = -1;
    let getId = () => {
        optionId++;
        return optionId;
    }

    return (
        <div questionid={cardId} className="text-white min-h-full mx-auto transition-all duration-[500ms] sm:w-[85%] w-[95%] 2xl:px-[4vw] px-[2vw] pt-[3vw]">
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

    Object.entries(cardData).map(([option, value]) => {
        if (answersObj[value.title] == undefined) answersObj[value.title] = {};
        if (chosenOptions[i] != undefined) {
            const options = chosenOptions[i];
            console.log(value);
            answersObj[value.title][value.question] = [];
            Object.entries(options).map(([option, v]) => {
                let x = 0;
                Object.entries(cardData[i].answers).map(([o, val]) => {
                    console.log(o);
                    console.log(v);
                    console.log(x);
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
            <div className="flex flex-col">
                <h1 className="text-[#FCA311] text-[2.5vw] mt-[1vw]">{option}:</h1>
                <h2 className="text-[2vw] w-3/4">{Object.entries(value).map(([option, value]) => {
                    return (
                        <div className="flex flex-col">
                            <h1 className="text-[#FCA311] text-[2.5vw] mt-[1vw]">{option}:</h1>
                            <h2 className="text-[2vw] w-3/4">{value}</h2>
                        </div>
                    );
                })}</h2>
            </div>
        );
    });

    console.log(answersObj);

    return (
        <div className="text-white top-[14vh] w-full font-poppins mx-auto">
            <h1 className="text-[#FCA311] text-[3.5vw] font-extrabold">Alustava kustannusarvio:</h1>
            <h2 className="text-[2vw] w-3/4">Hinta-arvio on suuntaa antava ja lopullinen hinta määräytyy projektin vaativuuden mukaan.</h2>
            <h1 className="text-[#FCA311] text-[2.5vw] mt-[1vw]">Valintasi:</h1>
            <div className="grid grid-cols-2">{answerElements}</div>
            <h1 className="text-[#FCA311] text-[2.5vw] mt-[1vw]">Hinta:</h1>
            <h2 className="text-[2vw]">alk. {Math.ceil(finalPrice)*1000}€ + alv 24%</h2>

            <div className="flex flex-col mt-[5vw]">
                {}
            </div>
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

        //Check if all options are empty
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

        return;
    } else {
        renderCard(currentCard);
        slideDiv.current.parentElement.style.display = "block";
        report.current.style.display = "none";
    }
    
}

const resizeUpdate = () => {
    isMobile = window.innerWidth < 640;
}

useEffect(() => {
    //changeCard(0);
    //window.addEventListener("load", changeCard(0));
    window.addEventListener("resize", resizeUpdate);
    return () => {
        window.removeEventListener("resize", resizeUpdate);
    }
});

return (
    <div className="bg-[#14213D] w-screen">
    <div className="min-h-screen 2xl:w-[75vw] sm::w-[80vw] w-[90%] xl:pt-32 lg:pt-[10vh] sm:pt-32 pt-24 mx-auto">
        <div className="2xl:1/2 md:w-2/3 mx-auto pt-[2vw]">
            <div className={`grid sm:gap-4 gap-1 mx-auto w-full`} style={{ placeItems: 'center', gridTemplateColumns: `repeat(${cardData.length < 8 ? cardData.length : 8}, minmax(0, 1fr))`}} ref={barDiv}>
                {progressBar}
            </div>
        </div>
        <div className="w-[100%] min-h-[40vw] mx-auto">
            <div ref={slideDiv} className="lg:w-[70vw] md:w-[75vw] w-[90vw] mx-auto font-poppins md:min-h-auto min-h-[61vh]">
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
        <div ref={report} className="hidden w-[100%] min-h-[40vw] mx-auto py-[4vw]">
        </div>
    </div>
    </div>
);
}
