import {SHUFFLED_DECK_MIDDLE} from "./deck-middle-level";
import { SHUFFLED_DECK_EASY } from "./deck-easy-level";
import { SHUFFLED_DECK_HARD } from "./deck-hard-level";
import { SHUFFLED_DECK_VERY_EASY } from "./deck-very-easy-level";
import { CARD_DECK } from "./start-the-game";
import { THIRD_LEVEL_TITLE } from "./start-the-game";
import { currLevel } from "./start-the-game";
import { LEVEL_BTN } from "./start-the-game";

const CARD_DECK_FACE = document.querySelector(".card-deck-open");

let cardNumber = 0;
function openCard() {
    console.log('curr level', currLevel.value)
    let CURR_DECK;
    if (currLevel.value == 'normal') CURR_DECK = SHUFFLED_DECK_MIDDLE;
    if (currLevel.value == 'easy') CURR_DECK = SHUFFLED_DECK_EASY;
    // if (currLevel.value == 'very-easy') CURR_DECK = SHUFFLED_DECK_VERY_EASY;
    if (currLevel.value == 'hard') CURR_DECK = SHUFFLED_DECK_HARD;
    // if (currLevel.value == 'very-hard') CURR_DECK = SHUFFLED_DECK_VERY_HARD;
    
    // console.log('curr array', CURR_DECK)

  CARD_DECK_FACE.innerHTML = "";
  const CARD_FACE = document.createElement("img");
  CARD_DECK_FACE.classList.add('border');
  CARD_FACE.src = CURR_DECK[cardNumber];
  CARD_DECK_FACE.append(CARD_FACE);
  if (cardNumber == CURR_DECK.length - 1) endDeck();
  cardNumber++;
}

function endDeck() {
    CARD_DECK.classList.remove("visible");
    CARD_DECK.removeEventListener("click", openCard);
    THIRD_LEVEL_TITLE.classList.remove("active");
    LEVEL_BTN.forEach((el) => el.removeAttribute('disabled', true));
    LEVEL_BTN.forEach((el) => el.classList.remove('active'));
    CARD_DECK_FACE.classList.remove('border');
    cardNumber = -1;
  }

  export {CARD_DECK_FACE, cardNumber, openCard, endDeck};