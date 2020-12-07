import "./styles/style.scss";

import "./../node_modules/slick-carousel/slick/slick-theme.scss";
import "./../node_modules/slick-carousel/slick/slick.scss";
import "./../node_modules/reset-css/reset.css";

import SlickCarousel from "slick-carousel";

import menu from "./js/menu";
import slickSettings from "./js/slickSettings";
import scrollRevealSettings from "./js/scrollRevealSettings";


window.addEventListener("load", () => {
  let loader = document.querySelector(".loader__wrapper");
  loader.style.display = "none";
});
