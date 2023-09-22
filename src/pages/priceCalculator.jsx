import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";


export default function PriceEstimation() {
  const cardData = [
    {
      title: "Suuruusluokka",
      question: "Minkä kokoinen projekti on",
      options: {
        "Pieni": {scale: 3},
        "Keskikokoinen": {scale: 6},
        "Suuri": {scale: 10},
      },
    },
    {
      title: "Alusta",
      question: "Millä alustoilla ohjelmiston pitäisi toimia?",
      options: {
        "Selain": {complexity: 5},
        "Mobiili": {complexity: 8},
        "Tietokone": {complexity: 10},
      },
    },
  ];


const progressBar = cardData.map((card) => {
    return <div className="opacity-100 transition-all duration-200"></div>;
});

let chosenOptions = [];
let currentCard = 0;
let lastOptionSelected = undefined;
const slideDiv = useRef(null);

let cardId = -1;
const FormElements = cardData.map((card) => {
    cardId++;
    let optionId = -1;
    return (
        <div questionid={cardId} className="opacity-0 transition-all duration-200">
            <h1 className="text-2xl font-bold">{card.title}</h1>
            <div className="flex flex-col">
                {Object.entries(card.options).map(([option, value]) => (
                    <div optionid={optionId++ + ":" + cardId} className="" onClick={ () => {
                            if (lastOptionSelected) lastOptionSelected.classList.remove("color-calculatorSelected");
                            this.classList.add("color-calculatorSelected");
                            chosenOptions.join(value);
                        }
                        }>
                    </div>
                ))}
            </div>
        </div>
    );
});

const finalPrice = () => {
    return (
        <div>
            
        </div>
    );
}

const nextCard = () => {
    slideDiv.current.innerHTML = "";

    if (currentCard == cardData.length) {
        finalPrice();
        return;
    }

    console.log(slideDiv.current);

    let test = FormElements[currentCard];

    ReactDOM.render(test, slideDiv.current, () => {
        const firstChild = slideDiv.current.firstChild;
        console.log(firstChild);  
        firstChild.style["opacity"] = "100";
        currentCard++;
    })

}

useEffect(() => {
    nextCard();
});

return (
    <div className="h-full w-full">
        <div className="w-1/2">
            {progressBar}
        </div>
        <div ref={slideDiv}>

        </div>
    </div>
);
}
