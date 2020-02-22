import "../scss/main.scss";
import { clock } from "./clock";
import { weather } from "./weather";
import { username } from "./username";

document.addEventListener("DOMContentLoaded", () => {
  clock();
  weather();
  username();
});
