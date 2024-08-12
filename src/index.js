if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

import { hello } from "./hello";
import "./style.css";
import cosmic from "./cosmic expression.jpg";

const imageContainer = document.querySelector(".img-container");

const img = document.createElement("img");
img.src = cosmic;
img.classList.add("img-style");

imageContainer.append(img);

console.log(hello());
