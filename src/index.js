import { cardsDataBlue } from "./js/blue-cards";
import { cardsDataBrown } from "./js/brown-cards";
import { cardsDataGreen } from "./js/green-cards";
import { shuffle } from "./js/shuffle";
import {
  count,
  currAncient,
  ALL_ANCIENTS,
  ANCIENT,
  LEVEL_BTNS,
  SHUFFLE_BTN,
  TABLE,
  CARD_DECK,
  LEVEL,
  chooseAncient,
  chooseLevel,
  startGame,
} from "./js/start-the-game";

import { CARD_DECK_FACE, cardNumber, openCard, endDeck } from "./js/open-card";
import { showScore, countScore, getCount } from "./js/score-table";

ALL_ANCIENTS.addEventListener("click", chooseAncient);

LEVEL_BTNS.addEventListener("click", chooseLevel);

SHUFFLE_BTN.addEventListener("click", () => {
  startGame();
  // console.log(count);
});

CARD_DECK.addEventListener("click", () => {
  openCard();
  showScore();
});
