import { TABLE } from "./start-the-game";
import { ancientsData } from "./ancients";
import {
  FIRST_LEVEL_TITLE,
  SECOND_LEVEL_TITLE,
  THIRD_LEVEL_TITLE,
} from "./start-the-game";
import { SHUFFLED_DECK_MIDDLE } from "./deck-middle-level";
import { currAncient } from "./start-the-game";

const greenCircle_1 = document.querySelector("#green1");
const greenCircle_2 = document.querySelector("#green2");
const greenCircle_3 = document.querySelector("#green3");
const brownCircle_1 = document.querySelector("#brown1");
const brownCircle_2 = document.querySelector("#brown2");
const brownCircle_3 = document.querySelector("#brown3");
const blueCircle_1 = document.querySelector("#blue1");
const blueCircle_2 = document.querySelector("#blue2");
const blueCircle_3 = document.querySelector("#blue3");

// let listAncient = {
//   azathoth: ancientsData[0],
//   cthulhu: ancientsData[1],
//   iogSothoth: ancientsData[2],
//   shubNiggurath: ancientsData[3],
// };

let count = {
  level_1: [
    ancientsData[0].firstStage.greenCards,
    ancientsData[0].firstStage.brownCards,
    ancientsData[0].firstStage.blueCards,
  ],
  level_2: [
    ancientsData[0].secondStage.greenCards,
    ancientsData[0].secondStage.brownCards,
    ancientsData[0].secondStage.blueCards,
  ],
  level_3: [
    ancientsData[0].thirdStage.greenCards,
    ancientsData[0].thirdStage.brownCards,
    ancientsData[0].thirdStage.blueCards,
  ],
};

// function getScore() {
//   return (count = {});
// }

function showScore() {
  greenCircle_1.textContent = count.level_1[0];
  greenCircle_2.textContent = count.level_2[0];
  greenCircle_3.textContent = count.level_3[0];

  brownCircle_1.textContent = count.level_1[1];
  brownCircle_2.textContent = count.level_2[1];
  brownCircle_3.textContent = count.level_3[1];

  blueCircle_1.textContent = count.level_1[2];
  blueCircle_2.textContent = count.level_2[2];
  blueCircle_3.textContent = count.level_3[2];

  countScore();
}

function countScore() {
  if (count.level_1[0]) {
    FIRST_LEVEL_TITLE.classList.add("active");
    count.level_1[0]--;
  } else if (count.level_1[1]) count.level_1[1]--;
  else if (count.level_1[2]) count.level_1[2]--;
  else if (count.level_2[0]) {
    FIRST_LEVEL_TITLE.classList.remove("active");
    SECOND_LEVEL_TITLE.classList.add("active");
    count.level_2[0]--;
  } else if (count.level_2[1]) count.level_2[1]--;
  else if (count.level_2[2]) count.level_2[2]--;
  else if (count.level_3[0]) {
    count.level_3[0]--;
    SECOND_LEVEL_TITLE.classList.remove("active");
    THIRD_LEVEL_TITLE.classList.add("active");
  } else if (count.level_3[1]) count.level_3[1]--;
  else if (count.level_3[2]) count.level_3[2]--;
}

function clearScore() {
  greenCircle_1.textContent = '';
  greenCircle_2.textContent = '';
  greenCircle_3.textContent = '';

  brownCircle_1.textContent = '';
  brownCircle_2.textContent = '';
  brownCircle_3.textContent = '';

  blueCircle_1.textContent = '';
  blueCircle_2.textContent = '';
  blueCircle_3.textContent = '';

}

export { showScore, clearScore };
