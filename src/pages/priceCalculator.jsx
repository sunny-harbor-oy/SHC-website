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
    "Mobiili": {coefficient: 1.25},
    "Tietokone": {coefficient: 1.25},
    },
},
{
    title: "Ulkonäkö",
    question: "Pitääkö ulkonäkö suunnitella alusta asti?",
    answers: {
    "Kyllä": {coefficient: 1.5},
    "Ei": {coefficient: 1},
    }
},
{
    title: "Ominaisuudet",
    question: "Monta ominaisuutta ohjelmistossa olisi?",
    answers: {
    "x < 3": {cost: 1},
    "3 - 6": {cost: 20},
    "6 < x": {cost: 30},
    }
},
{
    title: "Käyttäjät",
    question: "Kenen käyttöön ohjelmisto on?",
    settings: {
        multipleChoice: true,
    },
    answers: {
    "Yksityishenkilöt": {coefficient: 1.1},
    "Yritykset": {coefficient: 1.1},
    }
},
{
    title: "Integraatio",
    question: "Pitääkö ohjelmisto integroida jo jonkin valmiin järjestelmän kanssa?",
    answers: {
    "Kyllä": {coefficient: 1.3},
    "Ei": {coefficient: 1},
    }
},
{
    title: "Aikataulu",
    question: "Millä aikataululla ohjelmiston pitäisi olla valmis?",
    answers: {
    "viikko - kuukausi": {coefficient: 1.25},
    "2 - 6 kuukautta": {coefficient: 1.15},
    "6 - 12 kuukautta": {coefficient: 1},
    }
},
];

const progressBar = cardData.map(() => {
    return <div className="h-[0.75vw] w-full rounded-lg transition-all duration-[250ms]"></div>;
});

let chosenOptions = [];
let currentCard = 0;
let currentCardObject = undefined;
let lastOptionSelected = undefined;
let tranition = false;
let completedStages = {};
let locked = false;

const slideDiv = useRef(null);
const barDiv = useRef(null);
const report = useRef(null);

let cardId = -1;
const FormElements = cardData.map((card) => {
    cardId++;
    let optionId = -1;
    let getId = () => {
        optionId++;
        return optionId;
    }

    return (
        <div questionid={cardId} className="h-full transition-all duration-[500ms] w-full px-[4vw] pt-[3vw]">
            <h1 className="text-[3vw] w-4/5 font-poppins font-extrabold">{card.title}</h1>
            <h2 className="text-[1.5vw] w-4/5 font-poppins my-0">{card.question}</h2>
            <div className="flex flex-col px-[2vw] py-[1vw]">
                {Object.entries(card.answers).map(([option, value]) => (
                    <div className="flex justify-between w-3/4 text-white my-[1vw] mx-[2vw] py-[0.75vw] px-[2vw] bg-[#2b2d42] rounded-lg hover:cursor-pointer select-none">
                        <h1 className="font-poppins text-[2vw]">
                            {option}
                        </h1>
                        <div className="bg-white w-[1.25vw] h-[1.25vw] my-auto transition-all duration-[250ms] rounded-sm" />
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

    console.log(finalAttributes);

    let finalPrice = 0;

    for (const [key, value] of Object.entries(finalAttributes)) {
        if (attributeCost[key] != undefined) {
            finalPrice += attributeCost[key] * value;
        }
    }

    finalPrice *= finalAttributes["coefficient"];

    return (
        <div>
            <h1 className="text-center font-poppins text-[6vw] font-extrabold">Onneksi olkoon!</h1>
            <h2 className="text-center font-poppins text-[3vw]">alk. {Math.ceil(finalPrice)*1000}€</h2>
        </div>
    );
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

    if (getCardOption("multipleChoice") == false && lastOptionSelected != undefined) {
        if (lastOptionSelected.questionId != optionValues.questionId) {
            lastOptionSelected.self.children[1].style["background-color"] = "#c6d0d8";
            currentValues[`${lastOptionSelected.questionId}`] = undefined;
        }

        lastOptionSelected = undefined;
    }

    if (currentValues[`${optionValues.questionId}`] == optionValues.value) {
        currentValues[`${optionValues.questionId}`] = undefined;
        chosenOptions[currentCard] = currentValues;

        return false;
    }
    else {
        currentValues[`${optionValues.questionId}`] = optionValues.value;
        chosenOptions[currentCard] = currentValues;

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

        report.current.innerHTML = renderToString(finalPrice());
        report.current.style.display = "block";

        return;
    } else {
        renderCard(currentCard);
        slideDiv.current.parentElement.style.display = "flex";
        report.current.style.display = "none";
    }
    
}

useEffect(() => {
    changeCard(0);
    window.addEventListener("load", changeCard(0));
    return () => {
        window.removeEventListener("load", changeCard(0));
    }
});

return (
    <div className="min-h-screen w-[75vw] pt-32 mx-auto">
        <div className="w-1/2 mx-auto pt-[2vw]">
            <div className={`grid gap-4 mx-auto w-full`} style={{ placeItems: 'center', gridTemplateColumns: `repeat(${cardData.length < 6 ? cardData.length : 6}, minmax(0, 1fr))`}} ref={barDiv}>
                {progressBar}
            </div>
        </div>
        <div className="flex w-[70vw] justify-between mx-auto h-[40vw]]">
            <button onClick={() => changeCard(-1)}><i className="fa fa-angle-left text-[6vw]"></i></button>
            <div ref={slideDiv} className="w-[70vw]"></div>
            <button onClick={() => changeCard(1)}><i className="fa fa-angle-right text-[6vw]"></i></button>
        </div>
        <div ref={report} className="w-[70vw] h-[40vw] mx-auto py-[4vw]">
        </div>
    </div>
);
}
