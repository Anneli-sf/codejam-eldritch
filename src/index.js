import { cardsDataBlue } from "./js/blue-cards";
import { cardsDataBrown } from "./js/brown-cards";
import { cardsDataGreen } from "./js/green-cards";
import { shuffle } from "./js/shuffle";
import {
  ANCIENT,
  LEVEL_BTN_MIDDLE,
  SHUFFLE_BTN,
  TABLE,
  CARD_DECK,
  LEVEL,
  chooseAncient,
  chooseLevel,
  startGame,
} from "./js/start-the-game";

const CARD_DECK_FACE = document.querySelector(".card-deck-open");

ANCIENT.addEventListener("click", chooseAncient);

LEVEL_BTN_MIDDLE.addEventListener("click", chooseLevel);

SHUFFLE_BTN.addEventListener("click", startGame);

CARD_DECK.addEventListener("click", openCard);

let cardNumber = 0;
function openCard() {
  if (cardNumber == SHUFFLED_DECK_MIDDLE.length - 1) {
    CARD_DECK.classList.remove("visible");
    CARD_DECK.removeEventListener("click", openCard);
  }

  CARD_DECK_FACE.innerHTML = "";
  const CARD_FACE = document.createElement("img");
  CARD_FACE.src = SHUFFLED_DECK_MIDDLE[cardNumber];
  CARD_DECK_FACE.style.borderColor = "grey";
  CARD_DECK_FACE.style.borderWidth = "1px";
  CARD_DECK_FACE.style.borderStyle = "solid";
  CARD_DECK_FACE.append(CARD_FACE);
  cardNumber++;
}

let shuffledArrayGreen = shuffle(cardsDataGreen);
let shuffledArrayBlue = shuffle(cardsDataBlue);
let shuffledArrayBrown = shuffle(cardsDataBrown);

let SHUFFLED_DECK_MIDDLE = [
  shuffledArrayGreen[0].cardFace,
  shuffledArrayBrown[0].cardFace,
  shuffledArrayBlue[0].cardFace,
  shuffledArrayBlue[1].cardFace,

  shuffledArrayGreen[1].cardFace,
  shuffledArrayGreen[2].cardFace,
  shuffledArrayBrown[1].cardFace,
  shuffledArrayBlue[2].cardFace,
  shuffledArrayBlue[3].cardFace,
  shuffledArrayBlue[4].cardFace,

  shuffledArrayGreen[3].cardFace,
  shuffledArrayGreen[4].cardFace,
  shuffledArrayBlue[5].cardFace,
  shuffledArrayBlue[6].cardFace,
  shuffledArrayBlue[7].cardFace,
  shuffledArrayBlue[8].cardFace,
];

console.log(SHUFFLED_DECK_MIDDLE);
