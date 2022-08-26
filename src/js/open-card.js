import {SHUFFLED_DECK_MIDDLE} from "./deck-middle-level";
import { SHUFFLED_DECK_EASY } from "./deck-easy-level";
import { SHUFFLED_DECK_HARD } from "./deck-hard-level";
import { SHUFFLED_DECK_VERY_EASY } from "./deck-very-easy-level";
import { currLevel, CARD_DECK, THIRD_LEVEL_TITLE, LEVEL_BTN, ALL_ANCIENTS, chooseAncient, ANCIENT } from "./start-the-game";


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
    ALL_ANCIENTS.addEventListener("click", chooseAncient);
    ANCIENT.forEach(el => el.classList.remove('disabled'));

    cardNumber = -1;
  }

  export {CARD_DECK_FACE, cardNumber, openCard, endDeck};