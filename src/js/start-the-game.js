const LEVEL = document.querySelector(".header");
const ANCIENT = document.querySelector("#card4");
const LEVEL_BTN_MIDDLE = document.querySelector(".level-button");
const SHUFFLE_BTN = document.querySelector(".card-deck-button");
const TABLE = document.querySelector(".table");
const CARD_DECK = document.querySelector(".card-deck-start");

function chooseAncient() {
  ANCIENT.classList.add("active");
  LEVEL.classList.add("visible");
}

function chooseLevel() {
  LEVEL_BTN_MIDDLE.classList.add("active");
  SHUFFLE_BTN.classList.add("visible");
}

function startGame() {
  TABLE.classList.add("visible");
  CARD_DECK.classList.add("visible");
  SHUFFLE_BTN.classList.remove("visible");
}

export { ANCIENT, LEVEL_BTN_MIDDLE, SHUFFLE_BTN, TABLE, CARD_DECK, LEVEL, chooseAncient, chooseLevel, startGame };
