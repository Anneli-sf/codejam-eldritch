import { TABLE } from "./start-the-game";
import { ancientsData } from "./ancients";

const greenCircle_1 = document.querySelector("#green1");
const greenCircle_2 = document.querySelector("#green2");
const greenCircle_3 = document.querySelector("#green3");
const brownCircle_1 = document.querySelector("#brown1");
const brownCircle_2 = document.querySelector("#brown2");
const brownCircle_3 = document.querySelector("#brown3");
const blueCircle_1 = document.querySelector("#blue1");
const blueCircle_2 = document.querySelector("#blue2");
const blueCircle_3 = document.querySelector("#blue3");

function showScore() {
  greenCircle_1.textContent = ancientsData[0].firstStage.greenCards;
  greenCircle_2.textContent = ancientsData[0].secondStage.greenCards;
  greenCircle_3.textContent = ancientsData[0].thirdStage.greenCards;

  brownCircle_1.textContent = ancientsData[0].firstStage.greenCards;
  brownCircle_2.textContent = ancientsData[0].secondStage.greenCards;
  brownCircle_3.textContent = ancientsData[0].thirdStage.greenCards;

  blueCircle_1.textContent = ancientsData[0].firstStage.greenCards;
  blueCircle_2.textContent = ancientsData[0].secondStage.greenCards;
  blueCircle_3.textContent = ancientsData[0].thirdStage.greenCards;
}

export { showScore };
