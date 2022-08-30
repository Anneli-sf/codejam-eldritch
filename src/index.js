import {
  ALL_ANCIENTS,
  LEVEL_BTNS,
  SHUFFLE_BTN,
  CARD_DECK,
  chooseAncient,
  chooseLevel,
  startGame  
} from "./js/start-the-game";
import { openCard, getDeck, currCardColor } from "./js/open-card";
import { showScore } from "./js/score-table";

ALL_ANCIENTS.addEventListener("click", chooseAncient);

LEVEL_BTNS.addEventListener("click", chooseLevel);

SHUFFLE_BTN.addEventListener("click", () => {
  startGame();
  getDeck();
  // console.log("curr ancient id", currAncient.id);
});

CARD_DECK.addEventListener("click", () => {
 
  openCard();
  // countScore(currCardColor);
  showScore(currCardColor);

  
});
