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

import { CARD_DECK_FACE, cardNumber, openCard, endDeck } from "./js/open-card";
import { showScore } from "./js/score-table";

ANCIENT.addEventListener("click", chooseAncient);

LEVEL_BTN_MIDDLE.addEventListener("click", chooseLevel);

SHUFFLE_BTN.addEventListener("click", () => {
  startGame();
});

CARD_DECK.addEventListener("click", () => {
  openCard();
  showScore();
});
