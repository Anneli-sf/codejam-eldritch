import {
  shuffledArrayBlue,
  shuffledArrayBrown,
  shuffledArrayGreen,
} from "./open-card";

function getArrayAzathoth() {
  let arrayGreen = shuffledArrayGreen();
  let arrayBlue = shuffledArrayBlue();
  let arrayBrown = shuffledArrayBrown();

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
  let arrayGreen = shuffledArrayGreen();
  let arrayBlue = shuffledArrayBlue();
  let arrayBrown = shuffledArrayBrown();

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
  let arrayGreen = shuffledArrayGreen();
  let arrayBlue = shuffledArrayBlue();
  let arrayBrown = shuffledArrayBrown();

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
  let arrayGreen = shuffledArrayGreen();
  let arrayBlue = shuffledArrayBlue();
  let arrayBrown = shuffledArrayBrown();

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
