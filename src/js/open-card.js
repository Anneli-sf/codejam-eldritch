import {
  currLevel,
  currAncient,
  CARD_DECK,
  THIRD_LEVEL_TITLE,
  LEVEL_BTN,
  ALL_ANCIENTS,
  chooseAncient,
  ANCIENT,
} from "./start-the-game";
import {
  getArrayVeryEasy,
  getArrayEasy,
  getArrayHard,
  getArrayVeryHard,
} from "./get-level-array";
import { cardsDataBlue } from "./blue-cards";
import { cardsDataGreen } from "./green-cards";
import { cardsDataBrown } from "./brown-cards";
import { shuffle } from "./shuffle";
import {
  getArrayAzathoth,
  getArrayCthulhu,
  getArrayIogSothoth,
  getArrayShubNiggurath,
} from "./ancients-arrays";
import { ancientsData } from "./ancients";

const CARD_DECK_FACE = document.querySelector(".card-deck-open");

let cardNumber = 0;
let CURR_DECK;

function getDeck() {
  if (currAncient.id == 0) CURR_DECK = getArrayAzathoth();
  if (currAncient.id == 1) CURR_DECK = getArrayCthulhu();
  if (currAncient.id == 2) CURR_DECK = getArrayIogSothoth();
  if (currAncient.id == 3) CURR_DECK = getArrayShubNiggurath();
  console.log("curr DECK", CURR_DECK);
  console.log("curr level", currLevel.value);
  console.log("curr ancient id", currAncient.id);
}

function openCard() {
  // console.log("curr array", CURR_DECK);
  CARD_DECK_FACE.innerHTML = "";
  const CARD_FACE = document.createElement("img"); //picture of the card
  CARD_DECK_FACE.classList.add("border");
  CARD_FACE.src = CURR_DECK[cardNumber];
  CARD_DECK_FACE.append(CARD_FACE);
  if (cardNumber == CURR_DECK.length - 1) endDeck();
  cardNumber++;
}

function endDeck() {
  CARD_DECK.classList.remove("visible");
  CARD_DECK.removeEventListener("click", openCard);
  CARD_DECK_FACE.classList.remove("border");

  THIRD_LEVEL_TITLE.classList.remove("active");
  LEVEL_BTN.forEach((el) => el.removeAttribute("disabled", true));
  LEVEL_BTN.forEach((el) => el.classList.remove("active"));

  ALL_ANCIENTS.addEventListener("click", chooseAncient);
  ANCIENT.forEach((el) => el.classList.remove("disabled"));

  cardNumber = -1;
}

function shuffledArray(colored) {
  let sumOfCards = {
    cardsGreen:
      ancientsData[currAncient.id].firstStage.greenCards +
      ancientsData[currAncient.id].secondStage.greenCards +
      ancientsData[currAncient.id].thirdStage.greenCards,
    cardsBrown:
      ancientsData[currAncient.id].firstStage.brownCards +
      ancientsData[currAncient.id].secondStage.brownCards +
      ancientsData[currAncient.id].thirdStage.brownCards,
    cardsBlue:
      ancientsData[currAncient.id].firstStage.blueCards +
      ancientsData[currAncient.id].secondStage.blueCards +
      ancientsData[currAncient.id].thirdStage.blueCards,
  };
  console.log("sumOfCards", sumOfCards);

  let arrayCurr;
  let color;

  if (colored == cardsDataGreen) color = sumOfCards.cardsGreen;
  if (colored == cardsDataBrown) color = sumOfCards.cardsBrown;
  if (colored == cardsDataBlue) color = sumOfCards.cardsBlue;
  console.log("number of colored cards", color);

  if (currLevel.value == "very-easy") {
    arrayCurr = getArrayVeryEasy(colored);
    let n = arrayCurr.length;
    console.log("number of easy-cards", arrayCurr.length);

    if (n < color) {
      for (let i = 0; i < colored.length; i++) {
        colored = shuffle(colored);
        if (arrayCurr.length >= color) arrayCurr = shuffle(arrayCurr);
        else if (
          colored[i].difficulty == "normal" &&
          !arrayCurr.includes(colored[i])
        )
          arrayCurr.push(colored[i]);
        // console.log(arrayCurr);
      }
    }
  }

  if (currLevel.value == "easy") {
    arrayCurr = getArrayEasy(colored);
  } else if (currLevel.value == "normal") {
    arrayCurr = colored;
  } else if (currLevel.value == "hard") {
    arrayCurr = getArrayHard(colored);
  }

  if (currLevel.value == "very-hard") {
    arrayCurr = getArrayVeryHard(colored);
    let n = arrayCurr.length;
    console.log("number of hard cards", arrayCurr.length);

    if (n < color) {
      for (let i = 0; i < colored.length; i++) {
        colored = shuffle(colored);
        if (arrayCurr.length >= color) arrayCurr = shuffle(arrayCurr);
        else if (
          colored[i].difficulty == "normal" &&
          !arrayCurr.includes(colored[i])
        )
          arrayCurr.push(colored[i]);
        // console.log(arrayCurr);
      }
    }
  }
  return shuffle(arrayCurr);
}

export {
  CARD_DECK_FACE,
  cardNumber,
  openCard,
  endDeck,
  getDeck,
  shuffledArray,
};
