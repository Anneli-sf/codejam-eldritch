import { showScore } from "./score-table";
import { CARD_DECK_FACE } from "./open-card";


const LEVEL = document.querySelector(".header");
const ANCIENT = document.querySelector("#card4");
const LEVEL_BTN_MIDDLE = document.querySelector(".level-buttons");
const LEVEL_BTN = document.querySelectorAll(".level-button");
const MIDDLE_BTN = document.querySelector(".middle-btn");
const SHUFFLE_BTN = document.querySelector(".card-deck-button");
const TABLE = document.querySelector(".table");
const FIRST_LEVEL_TITLE = document.querySelector('#first-level-title')
const SECOND_LEVEL_TITLE = document.querySelector('#second-level-title')
const THIRD_LEVEL_TITLE = document.querySelector('#third-level-title')
const CARD_DECK = document.querySelector(".card-deck-start");

// LEVEL_BTN.forEach(el => el.classList.add('disabled'));
// SHUFFLE_BTN.classList.add('disabled');
CARD_DECK.classList.add('disabled');

function chooseAncient() {
  ANCIENT.classList.add("active");
  LEVEL.classList.add("visible");
  // LEVEL_BTN.forEach(el => el.classList.remove('disabled'));
}

function chooseLevel(e) {
  if (e.target.classList.contains("level-button")) {
    e.target.classList.add("active");
    SHUFFLE_BTN.classList.add("visible");
    
  }
}

function startGame() {
  TABLE.classList.add("visible");
  showScore();
  CARD_DECK.classList.add("visible");
  SHUFFLE_BTN.classList.remove("visible");
}


export {
  ANCIENT,
  LEVEL_BTN_MIDDLE,
  SHUFFLE_BTN,
  TABLE,
  CARD_DECK,
  LEVEL,
  FIRST_LEVEL_TITLE,
  SECOND_LEVEL_TITLE,
  THIRD_LEVEL_TITLE,
  chooseAncient,
  chooseLevel,
  startGame,
};
