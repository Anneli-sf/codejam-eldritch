import {SHUFFLED_DECK_MIDDLE} from "./deck-middle-level";
import { CARD_DECK } from "./start-the-game";

const CARD_DECK_FACE = document.querySelector(".card-deck-open");

let cardNumber = 0;
function openCard() {
    if (cardNumber == SHUFFLED_DECK_MIDDLE.length - 1) endDeck();

  CARD_DECK_FACE.innerHTML = "";
  const CARD_FACE = document.createElement("img");
  CARD_FACE.src = SHUFFLED_DECK_MIDDLE[cardNumber];
  CARD_DECK_FACE.style.borderColor = "grey";
  CARD_DECK_FACE.style.borderWidth = "1px";
  CARD_DECK_FACE.style.borderStyle = "solid";
  CARD_DECK_FACE.append(CARD_FACE);
  cardNumber++;
}

function endDeck() {
    CARD_DECK.classList.remove("visible");
    CARD_DECK.removeEventListener("click", openCard);
  }

  export {CARD_DECK_FACE, cardNumber, openCard, endDeck};