import { shuffle } from "./shuffle";
import { cardsDataBlue } from "./blue-cards";
import { cardsDataBrown } from "./brown-cards";
import { cardsDataGreen } from "./green-cards";

let shuffledArrayGreen = shuffle(cardsDataGreen);
let shuffledArrayBlue = shuffle(cardsDataBlue);
let shuffledArrayBrown = shuffle(cardsDataBrown);

const SHUFFLED_DECK_MIDDLE = [
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

const TABLE_MIDDLE = {
    firstStage: [shuffledArrayGreen[0].cardFace],
    
}

export { SHUFFLED_DECK_MIDDLE };
