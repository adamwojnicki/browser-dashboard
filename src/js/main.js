import "../scss/main.scss";
import { clock } from "./clock";
import { weather } from "./weather";

document.addEventListener("DOMContentLoaded", () => {
  clock();
  weather();
});
