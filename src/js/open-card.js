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
import { getArrayEasy, getArrayHard } from "./get-level-array";
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

const CARD_DECK_FACE = document.querySelector(".card-deck-open");

let cardNumber = 0;

function openCard() {
  console.log("curr level", currLevel.value);
  console.log("curr ancient id", currAncient.id);
  let CURR_DECK;
  // if (currLevel.value == "normal")
  if (currAncient.id == 0) CURR_DECK = getArrayAzathoth();
  if (currAncient.id == 1) CURR_DECK = getArrayCthulhu();
  if (currAncient.id == 2) CURR_DECK = getArrayIogSothoth();
  if (currAncient.id == 3) CURR_DECK = getArrayShubNiggurath();

  // if (currLevel.value == "easy") CURR_DECK = SHUFFLED_DECK_EASY;
  // if (currLevel.value == 'very-easy') CURR_DECK = SHUFFLED_DECK_VERY_EASY;
  // if (currLevel.value == "hard") CURR_DECK = SHUFFLED_DECK_HARD;
  // if (currLevel.value == 'very-hard') CURR_DECK = SHUFFLED_DECK_VERY_HARD;

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

function shuffledArrayGreen() {
  let array;
  if (currLevel.value == "easy") {
    array = getArrayEasy(cardsDataGreen);
  } else if (currLevel.value == "middle") {
    array = cardsDataGreen;
  } else if (currLevel.value == "hard") {
    array = getArrayHard(cardsDataGreen);
  }
  // let shuffledArray = shuffle(array);

  return shuffle(array);
}

function shuffledArrayBrown() {
  let array;
  if (currLevel.value == "easy") {
    array = getArrayEasy(cardsDataBrown);
  } else if (currLevel.value == "middle") {
    array = cardsDataBrown;
  } else if (currLevel.value == "hard") {
    array = getArrayHard(cardsDataBrown);
  }
  // let shuffledArray = shuffle(array);

  return shuffle(array);
}

function shuffledArrayBlue() {
  let array;
  if (currLevel.value == "easy") {
    array = getArrayEasy(cardsDataBlue);
  } else if (currLevel.value == "middle") {
    array = cardsDataBlue;
  } else if (currLevel.value == "hard") {
    array = getArrayHard(cardsDataBlue);
  }
  // let shuffledArray = shuffle(array);

  return shuffle(array);
}

export {
  CARD_DECK_FACE,
  cardNumber,
  openCard,
  endDeck,
  shuffledArrayBlue,
  shuffledArrayGreen,
  shuffledArrayBrown,
};
