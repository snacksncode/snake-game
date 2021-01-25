import "../styles/main.scss";
import Snake from "./Snake";

new Snake({
  boardSize: 20,
  wrapperElement: document.querySelector(".intro__wrapper"),
});
