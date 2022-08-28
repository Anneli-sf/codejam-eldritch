import { cardsDataBlue } from "./blue-cards";
import { cardsDataBrown } from "./brown-cards";
import { cardsDataGreen } from "./green-cards";
import {
  shuffledArray,
} from "./open-card";
import { ancientsData } from "./ancients";
import { currAncient } from "./start-the-game";



function getArrayAzathoth() {
  let arrayGreen = shuffledArray(cardsDataGreen);
  let arrayBlue = shuffledArray(cardsDataBlue);
  let arrayBrown = shuffledArray(cardsDataBrown);

  let arrayAzathoth = [
    arrayGreen[0].cardFace,
    arrayBrown[0].cardFace,
    arrayBrown[1].cardFace,
    arrayBlue[0].cardFace,

    arrayGreen[1].cardFace,
    arrayGreen[2].cardFace,
    arrayBrown[2].cardFace,
    arrayBrown[3].cardFace,
    arrayBrown[4].cardFace,
    arrayBlue[1].cardFace,

    arrayGreen[3].cardFace,
    arrayGreen[4].cardFace,
    arrayBrown[5].cardFace,
    arrayBrown[6].cardFace,
    arrayBrown[7].cardFace,
    arrayBrown[8].cardFace,
  ];

  return arrayAzathoth;
}

function getArrayCthulhu() {
  let arrayGreen = shuffledArray(cardsDataGreen);
  let arrayBlue = shuffledArray(cardsDataBlue);
  let arrayBrown = shuffledArray(cardsDataBrown);

  let arrayCthulhu = [
    arrayBrown[0].cardFace,
    arrayBrown[1].cardFace,
    arrayBlue[0].cardFace,
    arrayBlue[1].cardFace,

    arrayGreen[0].cardFace,
    arrayBrown[2].cardFace,
    arrayBrown[3].cardFace,
    arrayBrown[4].cardFace,

    arrayGreen[1].cardFace,
    arrayGreen[2].cardFace,
    arrayGreen[3].cardFace,
    arrayBrown[5].cardFace,
    arrayBrown[6].cardFace,
    arrayBrown[7].cardFace,
    arrayBrown[8].cardFace,
  ];

  return arrayCthulhu;
}

function getArrayIogSothoth() {
  let arrayGreen = shuffledArray(cardsDataGreen);
  let arrayBlue = shuffledArray(cardsDataBlue);
  let arrayBrown = shuffledArray(cardsDataBrown);

  let arrayIogSothoth = [
    arrayBrown[0].cardFace,
    arrayBrown[1].cardFace,
    arrayBlue[0].cardFace,

    arrayGreen[0].cardFace,
    arrayGreen[1].cardFace,
    arrayBrown[2].cardFace,
    arrayBrown[3].cardFace,
    arrayBrown[4].cardFace,
    arrayBlue[1].cardFace,

    arrayGreen[2].cardFace,
    arrayGreen[3].cardFace,
    arrayGreen[4].cardFace,
    arrayBrown[5].cardFace,
    arrayBrown[6].cardFace,
    arrayBrown[7].cardFace,
    arrayBrown[8].cardFace,
  ];

  return arrayIogSothoth;
}

function getArrayShubNiggurath() {
  let arrayGreen = shuffledArray(cardsDataGreen);
  let arrayBlue = shuffledArray(cardsDataBlue);
  let arrayBrown = shuffledArray(cardsDataBrown);

  let arrayShubNiggurath = [
    arrayGreen[0].cardFace,
    arrayBrown[0].cardFace,
    arrayBrown[1].cardFace,
    arrayBlue[0].cardFace,

    arrayGreen[1].cardFace,
    arrayGreen[2].cardFace,
    arrayGreen[3].cardFace,
    arrayBrown[2].cardFace,
    arrayBrown[3].cardFace,
    arrayBlue[1].cardFace,

    arrayGreen[4].cardFace,
    arrayGreen[5].cardFace,
    arrayBrown[4].cardFace,
    arrayBrown[5].cardFace,
    arrayBrown[6].cardFace,
    arrayBrown[7].cardFace,
  ];

  return arrayShubNiggurath;
}

export {
  getArrayAzathoth,
  getArrayCthulhu,
  getArrayIogSothoth,
  getArrayShubNiggurath,
  
};
