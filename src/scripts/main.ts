import "../styles/main.scss";
import { addAnimationClasses, scrollTo } from "./utils";
// import Snake from "./Snake";

const proceedButton: HTMLElement = document.querySelector(".intro__button");
const introSection: HTMLElement = document.querySelector(".intro");
const gameSection: HTMLElement = document.querySelector(".game");

async function handleProceedButtonClick(_e: Event) {
  const pageScrollAmount = document.documentElement.scrollTop || document.body.scrollTop;
  if (pageScrollAmount > 0) await scrollTo(0);
  await addAnimationClasses(introSection, "fadeOut", 350);
  await addAnimationClasses(gameSection, "fadeIn", 350);
}

proceedButton.addEventListener("click", handleProceedButtonClick, false);
