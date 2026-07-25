import { CONFIG } from "./config.js";
import { imgOrPlaceholder } from "./utils.js";

const stage = document.getElementById("stage");

if (sessionStorage.getItem("quizPassed") !== "true") {
  window.location.href = "../index.html";
} else {
  renderLetter();
}

function renderLetter() {
  const imgs = CONFIG.finalImages;
  stage.innerHTML = `
    <div class="letter">
      <h2>Para você</h2>
      <p>${CONFIG.finalText}</p>
      <div class="gallery">
        ${imgs.map((src, i) => `<div class="polaroid">${imgOrPlaceholder(src, "foto final " + (i + 1), "./")}</div>`).join("")}
      </div>
    </div>`;
}
