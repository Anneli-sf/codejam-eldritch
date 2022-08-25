import { TABLE } from "./start-the-game";
import { ancientsData } from "./ancients";
import {
  FIRST_LEVEL_TITLE,
  SECOND_LEVEL_TITLE,
  THIRD_LEVEL_TITLE,
} from "./start-the-game";

const greenCircle_1 = document.querySelector("#green1");
const greenCircle_2 = document.querySelector("#green2");
const greenCircle_3 = document.querySelector("#green3");
const brownCircle_1 = document.querySelector("#brown1");
const brownCircle_2 = document.querySelector("#brown2");
const brownCircle_3 = document.querySelector("#brown3");
const blueCircle_1 = document.querySelector("#blue1");
const blueCircle_2 = document.querySelector("#blue2");
const blueCircle_3 = document.querySelector("#blue3");

let count = {
  greenCircle_1Value: ancientsData[0].firstStage.greenCards,
  brownCircle_1Value: ancientsData[0].firstStage.brownCards,
  blueCircle_1Value: ancientsData[0].firstStage.blueCards,
};

function showScore() {
  greenCircle_1.textContent = count.greenCircle_1Value;
  greenCircle_2.textContent = ancientsData[0].secondStage.greenCards;
  greenCircle_3.textContent = ancientsData[0].thirdStage.greenCards;

  brownCircle_1.textContent = count.brownCircle_1Value;
  brownCircle_2.textContent = ancientsData[0].secondStage.brownCards;
  brownCircle_3.textContent = ancientsData[0].thirdStage.brownCards;

  blueCircle_1.textContent = count.blueCircle_1Value;
  blueCircle_2.textContent = ancientsData[0].secondStage.blueCards;
  blueCircle_3.textContent = ancientsData[0].thirdStage.blueCards;

  countScore();
}

function countScore() {
   
  if (count.greenCircle_1Value) {FIRST_LEVEL_TITLE.classList.add('active'); count.greenCircle_1Value--;}
  else if (count.brownCircle_1Value) count.brownCircle_1Value--;
  else if (count.blueCircle_1Value) count.blueCircle_1Value--;
 
  
}

export { showScore };
