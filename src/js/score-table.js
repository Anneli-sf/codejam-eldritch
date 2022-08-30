import { ancientsData } from "./ancients";
import {
  FIRST_LEVEL_TITLE,
  SECOND_LEVEL_TITLE,
  THIRD_LEVEL_TITLE,
} from "./start-the-game";
import { count } from "./start-the-game";

const greenCircle_1 = document.querySelector("#green1");
const greenCircle_2 = document.querySelector("#green2");
const greenCircle_3 = document.querySelector("#green3");
const brownCircle_1 = document.querySelector("#brown1");
const brownCircle_2 = document.querySelector("#brown2");
const brownCircle_3 = document.querySelector("#brown3");
const blueCircle_1 = document.querySelector("#blue1");
const blueCircle_2 = document.querySelector("#blue2");
const blueCircle_3 = document.querySelector("#blue3");

function getCount(el) {
  return {
    level_1: [
      ancientsData[el].firstStage.greenCards,
      ancientsData[el].firstStage.brownCards,
      ancientsData[el].firstStage.blueCards,
    ],
    level_2: [
      ancientsData[el].secondStage.greenCards,
      ancientsData[el].secondStage.brownCards,
      ancientsData[el].secondStage.blueCards,
    ],
    level_3: [
      ancientsData[el].thirdStage.greenCards,
      ancientsData[el].thirdStage.brownCards,
      ancientsData[el].thirdStage.blueCards,
    ],
  };
}

function showScore(currCardColor) {
  countScore(currCardColor);
  greenCircle_1.textContent = count.level_1[0];
  greenCircle_2.textContent = count.level_2[0];
  greenCircle_3.textContent = count.level_3[0];

  brownCircle_1.textContent = count.level_1[1];
  brownCircle_2.textContent = count.level_2[1];
  brownCircle_3.textContent = count.level_3[1];

  blueCircle_1.textContent = count.level_1[2];
  blueCircle_2.textContent = count.level_2[2];
  blueCircle_3.textContent = count.level_3[2];
}

function countScore(currCardColor) {
  if (Math.max(count.level_1[0], count.level_1[1], count.level_1[2])) {
    FIRST_LEVEL_TITLE.classList.add("active");
    if (currCardColor == "reen" && count.level_1[0]) count.level_1[0]--;
    else if (currCardColor == "rown" && count.level_1[1]) count.level_1[1]--;
    else if (currCardColor == "blue" && count.level_1[2]) count.level_1[2]--;
  } else if (Math.max(count.level_2[0], count.level_2[1], count.level_2[2])) {
    FIRST_LEVEL_TITLE.classList.remove("active");
    SECOND_LEVEL_TITLE.classList.add("active");
    if (currCardColor == "reen" && count.level_2[0]) count.level_2[0]--;
    else if (currCardColor == "rown" && count.level_2[1]) count.level_2[1]--;
    else if (currCardColor == "blue" && count.level_2[2]) count.level_2[2]--;
  } else if (Math.max(count.level_3[0], count.level_3[1], count.level_3[2])) {
    SECOND_LEVEL_TITLE.classList.remove("active");
    THIRD_LEVEL_TITLE.classList.add("active");
    if (currCardColor == "reen" && count.level_3[0]) count.level_3[0]--;
    else if (currCardColor == "rown" && count.level_3[1]) count.level_3[1]--;
    else if (currCardColor == "blue" && count.level_3[2]) count.level_3[2]--;
  }
}

export { showScore, countScore, getCount };
