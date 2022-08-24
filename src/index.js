import { cardsDataBlue } from "./js/blue-cards";
import { cardsDataBrown } from "./js/brown-cards";
import { cardsDataGreen } from "./js/green-cards";

const LEVEL_BTN_MIDDLE = document.querySelector(".level-buttons");
const SHUFFLE_BTN = document.querySelector(".card-deck-button");
const TABLE = document.querySelector(".table");
const CARD_DECK = document.querySelector(".card-deck-start");
const CARD_DECK_FACE = document.querySelector(".card-deck-open");

LEVEL_BTN_MIDDLE.addEventListener("click", () => {
  SHUFFLE_BTN.classList.add("visible");
});

SHUFFLE_BTN.addEventListener("click", () => {
  TABLE.classList.add("visible");
  CARD_DECK.classList.add("visible");
  SHUFFLE_BTN.classList.remove("visible");
});

CARD_DECK.addEventListener("click", openCard);

function openCard() {
  CARD_DECK_FACE.innerHTML = "";
  const CARD_FACE = document.createElement("img");
  CARD_FACE.src = shuffle(cardsDataBlue);
  CARD_DECK_FACE.style.borderColor = "grey";
  CARD_DECK_FACE.style.borderWidth = "1px";
  CARD_DECK_FACE.style.borderStyle = "solid";
  CARD_DECK_FACE.append(CARD_FACE);
}

function shuffle(array) {
  const shuffleArray = [...array];
  for (let i = shuffleArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
  }

  array.shift(shuffleArray[0]);
  console.log('array', array);
  return shuffleArray[0].cardFace;
}

// console.log(shuffle(cardsDataBlue));

let SHUFFLED_DECK = {
    'firstStage': [shuffle(cardsDataGreen), shuffle(cardsDataBrown), shuffle(cardsDataBlue), shuffle(cardsDataBlue)],
    'secondStage': [shuffle(cardsDataGreen), shuffle(cardsDataGreen), shuffle(cardsDataBrown), shuffle(cardsDataBlue), shuffle(cardsDataBlue), shuffle(cardsDataBlue)],
    'thirdStage': [shuffle(cardsDataGreen), shuffle(cardsDataGreen), shuffle(cardsDataBlue), shuffle(cardsDataBlue), shuffle(cardsDataBlue), shuffle(cardsDataBlue)]
}

console.log(SHUFFLED_DECK)