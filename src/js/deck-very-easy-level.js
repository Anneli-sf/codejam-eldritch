import { shuffle } from "./shuffle";
import { cardsDataBlue } from "./blue-cards";
import { cardsDataBrown } from "./brown-cards";
import { cardsDataGreen } from "./green-cards";
import { currLevel } from "./start-the-game";

// console.log('curr value', currLevel.value)

function getArray(array) {
  array = array.reduce((total, el, index, array) => {
    if (el.difficulty == "easy") total.push(el);
    return total;
  }, []);
  console.log('array.length', array.length)
  return array;
}

let arrayGreen = getArray(cardsDataGreen);
let arrayBrown = getArray(cardsDataBlue);
let arrayBlue = getArray(cardsDataBrown);

let shuffledArrayGreen = shuffle(arrayGreen);
let shuffledArrayBlue = shuffle(arrayBlue);
let shuffledArrayBrown = shuffle(arrayBrown);

const SHUFFLED_DECK_VERY_EASY = [
  shuffledArrayGreen[0].cardFace,
  shuffledArrayBrown[0].cardFace,
  shuffledArrayBlue[0].cardFace,
  shuffledArrayBlue[1].cardFace,

  shuffledArrayGreen[1].cardFace,
  shuffledArrayGreen[2].cardFace,
  shuffledArrayBrown[1].cardFace,
  shuffledArrayBlue[2].cardFace,
  shuffledArrayBlue[3].cardFace,
  shuffledArrayBlue[4].cardFace,

  shuffledArrayGreen[3].cardFace,
  shuffledArrayGreen[4].cardFace,
  shuffledArrayBlue[5].cardFace,
  shuffledArrayBlue[6].cardFace,
  shuffledArrayBlue[7].cardFace,
  shuffledArrayBlue[8].cardFace,
];

export { SHUFFLED_DECK_VERY_EASY };
