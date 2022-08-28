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
} from "./get-level-array";
import { cardsDataBlue } from "./blue-cards";
import { cardsDataGreen } from "./green-cards";
import { cardsDataBrown } from "./brown-cards";
import { shuffle } from "./shuffle";
import {
  getArrayAzathoth,
  getArrayCthulhu,
  getArrayIogSothoth,
  getArrayShubNiggurath

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
  // console.log("curr array", CURR_DECK);
}

function openCard() {
  console.log("curr level", currLevel.value);
  // console.log("curr ancient id", currAncient.id);
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
  // let sumOfCards = {
  //   greenCards:
  //     ancientsData[currAncient.id].firstStage.greenCards +
  //     ancientsData[currAncient.id].secondStage.greenCards +
  //     ancientsData[currAncient.id].thirdStage.greenCards,
  //   brownCards:
  //     ancientsData[currAncient.id].firstStage.brownCards +
  //     ancientsData[currAncient.id].secondStage.brownCards +
  //     ancientsData[currAncient.id].thirdStage.brownCards,
  //   blueCards:
  //     ancientsData[currAncient.id].firstStage.blueCards +
  //     ancientsData[currAncient.id].secondStage.blueCards +
  //     ancientsData[currAncient.id].thirdStage.blueCards,
  // };

  let array;
  // if (currLevel.value == "very-easy") {
  //   array = getArrayVeryEasy(colored);
  //   let n = array.length; console.log('array.length', array.length)
  //   if (array.length < sumOfCards.brownCards) {
  //     for (let i=0; i< (sumOfCards.brownCards - n); i++ )
  //     if (colored[i].difficulty == 'normal')
  //     array.push(colored[i])
  //   }
  // }
  if (currLevel.value == "easy") {
    array = getArrayEasy(colored);
  } else if (currLevel.value == "normal") {
    array = colored;
  } else if (currLevel.value == "hard") {
    array = getArrayHard(colored);
  }

  return shuffle(array);
};


export {
  CARD_DECK_FACE,
  cardNumber,
  openCard,
  endDeck,
  getDeck,
  shuffledArray };
