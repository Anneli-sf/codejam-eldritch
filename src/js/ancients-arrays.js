import { cardsDataBlue } from "./blue-cards";
import { cardsDataBrown } from "./brown-cards";
import { cardsDataGreen } from "./green-cards";
import { shuffledArray } from "./open-card";
import { shuffle } from "./shuffle";

function getArrayAzathoth() {
  let arrayGreen = shuffledArray(cardsDataGreen);
  let arrayBlue = shuffledArray(cardsDataBlue);
  let arrayBrown = shuffledArray(cardsDataBrown);

  let arrayAzathoth_level1 = [
    arrayGreen[0].cardFace,
    arrayBrown[0].cardFace,
    arrayBrown[1].cardFace,
    arrayBlue[0].cardFace,
  ];

  let arrayAzathoth_level2 = [
    arrayGreen[1].cardFace,
    arrayGreen[2].cardFace,
    arrayBrown[2].cardFace,
    arrayBrown[3].cardFace,
    arrayBrown[4].cardFace,
    arrayBlue[1].cardFace,
  ];

  let arrayAzathoth_level3 = [
    arrayGreen[3].cardFace,
    arrayGreen[4].cardFace,
    arrayBrown[5].cardFace,
    arrayBrown[6].cardFace,
    arrayBrown[7].cardFace,
    arrayBrown[8].cardFace,
  ];

  let arrayAzathoth = [
    shuffle(arrayAzathoth_level1),
    shuffle(arrayAzathoth_level2),
    shuffle(arrayAzathoth_level3),
  ];
  // let arrayAzathoth = [
  //   arrayGreen[0].cardFace,
  //   arrayBrown[0].cardFace,
  //   arrayBrown[1].cardFace,
  //   arrayBlue[0].cardFace,

  //   arrayGreen[1].cardFace,
  //   arrayGreen[2].cardFace,
  //   arrayBrown[2].cardFace,
  //   arrayBrown[3].cardFace,
  //   arrayBrown[4].cardFace,
  //   arrayBlue[1].cardFace,

  //   arrayGreen[3].cardFace,
  //   arrayGreen[4].cardFace,
  //   arrayBrown[5].cardFace,
  //   arrayBrown[6].cardFace,
  //   arrayBrown[7].cardFace,
  //   arrayBrown[8].cardFace,
  // ];

  return arrayAzathoth.flat();
}

function getArrayCthulhu() {
  let arrayGreen = shuffledArray(cardsDataGreen);
  let arrayBlue = shuffledArray(cardsDataBlue);
  let arrayBrown = shuffledArray(cardsDataBrown);

  let arrayCthulhu_level1 = [
    arrayBrown[0].cardFace,
    arrayBrown[1].cardFace,
    arrayBlue[0].cardFace,
    arrayBlue[1].cardFace,
  ];

  let arrayCthulhu_level2 = [
    arrayGreen[0].cardFace,
    arrayBrown[2].cardFace,
    arrayBrown[3].cardFace,
    arrayBrown[4].cardFace,
  ];

  let arrayCthulhu_level3 = [
    arrayGreen[1].cardFace,
    arrayGreen[2].cardFace,
    arrayGreen[3].cardFace,
    arrayBrown[5].cardFace,
    arrayBrown[6].cardFace,
    arrayBrown[7].cardFace,
    arrayBrown[8].cardFace,
  ];

  let arrayCthulhu = [
    shuffle(arrayCthulhu_level1),
    shuffle(arrayCthulhu_level2),
    shuffle(arrayCthulhu_level3),
  ];

  return arrayCthulhu.flat();
}

function getArrayIogSothoth() {
  let arrayGreen = shuffledArray(cardsDataGreen);
  let arrayBlue = shuffledArray(cardsDataBlue);
  let arrayBrown = shuffledArray(cardsDataBrown);

  let arrayIogSothoth_level1 = [
    arrayBrown[0].cardFace,
    arrayBrown[1].cardFace,
    arrayBlue[0].cardFace,
  ];

  let arrayIogSothoth_level2 = [
    arrayGreen[0].cardFace,
    arrayGreen[1].cardFace,
    arrayBrown[2].cardFace,
    arrayBrown[3].cardFace,
    arrayBrown[4].cardFace,
    arrayBlue[1].cardFace,
  ];

  let arrayIogSothoth_level3 = [
    arrayGreen[2].cardFace,
    arrayGreen[3].cardFace,
    arrayGreen[4].cardFace,
    arrayBrown[5].cardFace,
    arrayBrown[6].cardFace,
    arrayBrown[7].cardFace,
    arrayBrown[8].cardFace,
  ];

  let arrayIogSothoth = [
    shuffle(arrayIogSothoth_level1),
    shuffle(arrayIogSothoth_level2),
    shuffle(arrayIogSothoth_level3),
  ];

  return arrayIogSothoth.flat();
}

function getArrayShubNiggurath() {
  let arrayGreen = shuffledArray(cardsDataGreen);
  let arrayBlue = shuffledArray(cardsDataBlue);
  let arrayBrown = shuffledArray(cardsDataBrown);

  let arrayShubNiggurath_level1 = [
    arrayGreen[0].cardFace,
    arrayBrown[0].cardFace,
    arrayBrown[1].cardFace,
    arrayBlue[0].cardFace,
  ];

  let arrayShubNiggurath_level2 = [
    arrayGreen[1].cardFace,
    arrayGreen[2].cardFace,
    arrayGreen[3].cardFace,
    arrayBrown[2].cardFace,
    arrayBrown[3].cardFace,
    arrayBlue[1].cardFace,
  ];

  let arrayShubNiggurath_level3 = [
    arrayGreen[4].cardFace,
    arrayGreen[5].cardFace,
    arrayBrown[4].cardFace,
    arrayBrown[5].cardFace,
    arrayBrown[6].cardFace,
    arrayBrown[7].cardFace,
  ];

  let arrayShubNiggurath = [
    shuffle(arrayShubNiggurath_level1),
    shuffle(arrayShubNiggurath_level2),
    shuffle(arrayShubNiggurath_level3),
  ];

  return arrayShubNiggurath.flat();
}

export {
  getArrayAzathoth,
  getArrayCthulhu,
  getArrayIogSothoth,
  getArrayShubNiggurath,
};
