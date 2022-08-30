import { showScore, getCount } from "./score-table";
import { CARD_DECK_FACE } from "./open-card";

const ALL_ANCIENTS = document.querySelector(".cards");
const ANCIENT = document.querySelectorAll(".card");
const LEVEL = document.querySelector(".header");
const LEVEL_BTNS = document.querySelector(".level-buttons");
const LEVEL_BTN = document.querySelectorAll(".level-button");
const SHUFFLE_BTN = document.querySelector(".card-deck-button");
const TABLE = document.querySelector(".table");
const FIRST_LEVEL_TITLE = document.querySelector("#first-level-title");
const SECOND_LEVEL_TITLE = document.querySelector("#second-level-title");
const THIRD_LEVEL_TITLE = document.querySelector("#third-level-title");
const CARD_DECK = document.querySelector(".card-deck-start");

CARD_DECK.classList.add("disabled");

//----------------------------choose Ancient
let currAncient = {};
let count = {};

function chooseAncient(person) {
  ANCIENT.forEach((el) => el.classList.add("disabled"));
  ANCIENT.forEach((el) => el.classList.remove("active"));
  ALL_ANCIENTS.removeEventListener("click", chooseAncient);

  currAncient.id = person.target.id;
  person.target.closest(".card").classList.add("active");
  person.target.closest(".card").classList.remove("disabled");
  // console.log("currAncient.id", currAncient.id);

  LEVEL.classList.add("visible");
  TABLE.classList.remove("visible");
  CARD_DECK_FACE.innerHTML = "";
}

//----------------------------choose level
let currLevel = {};
function chooseLevel(button) {
  CARD_DECK_FACE.innerHTML = "";
  TABLE.classList.remove("visible");

  LEVEL_BTN.forEach((el) => el.setAttribute("disabled", true));
  currLevel.value = button.target.id;
  // console.log(currLevel.value);

  button.target.classList.add("active");
  button.target.removeAttribute("disabled", true);

  SHUFFLE_BTN.classList.add("visible");
  ANCIENT.forEach((el) => {
    if (!el.classList.contains("active")) el.classList.add("disabled");
  });
  ALL_ANCIENTS.removeEventListener("click", chooseAncient);

  count = getCount(currAncient.id);
}

//----------------------------start game/show deck
function startGame() {
  TABLE.classList.add("visible");
  showScore();
  CARD_DECK.classList.add("visible");
  SHUFFLE_BTN.classList.remove("visible");
}

export {
  count,
  currAncient,
  currLevel,
  ALL_ANCIENTS,
  ANCIENT,
  LEVEL_BTN,
  LEVEL_BTNS,
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
