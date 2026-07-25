import { CONFIG } from "./config.js";
import { imgOrPlaceholder } from "./utils.js";

const state = { current: 0, results: [] };
const stage = document.getElementById("stage");

function renderIntro() {
  stage.innerHTML = `
    <div class="intro">
      <div class="eyebrow">Um teste sobre nós dois</div>
      <h1>Quanto você me conhece?</h1>
      <p>${CONFIG.questions.length} perguntas. Acerte 90% ou mais e algo especial aparece no final.</p>
      <button class="btn solid" id="start">Começar</button>
    </div>`;

  document.getElementById("start").onclick = () => {
    state.current = 0;
    state.results = [];
    renderQuestion();
  };
}

function renderFilmstrip() {
  let html = '<div class="filmstrip">';
  CONFIG.questions.forEach((_, i) => {
    let cls = "frame-dot";
    if (state.results[i] === true) cls += " correct";
    else if (state.results[i] === false) cls += " wrong";
    else if (i === state.current) cls += " current";
    html += `<div class="${cls}">${i + 1}</div>`;
  });
  html += "</div>";
  return html;
}

function renderQuestion() {
  const q = CONFIG.questions[state.current];
  stage.innerHTML = `
    ${renderFilmstrip()}
    <div class="card">
      <div class="polaroid"><div class="tape"></div>${imgOrPlaceholder(q.image, "foto " + (state.current + 1))}</div>
      <div class="q-counter">Pergunta ${state.current + 1} de ${CONFIG.questions.length}</div>
      <div class="q-text">${q.question}</div>
      <div class="options">
        ${q.options.map((opt, i) => `<button class="opt" data-i="${i}">${opt}</button>`).join("")}
      </div>
    </div>`;

  document.querySelectorAll(".opt").forEach((btn) => {
    btn.onclick = () => {
      const chosen = parseInt(btn.dataset.i, 10);
      const correct = q.correctIndex;
      document.querySelectorAll(".opt").forEach((b) => b.classList.add("disabled"));
      btn.classList.add(chosen === correct ? "correct" : "wrong");
      if (chosen !== correct) {
        document.querySelector(`.opt[data-i="${correct}"]`).classList.add("correct");
      }
      state.results[state.current] = chosen === correct;
      setTimeout(() => {
        if (state.current < CONFIG.questions.length - 1) {
          state.current++;
          renderQuestion();
        } else {
          renderResult();
        }
      }, 900);
    };
  });
}

function renderResult() {
  const total = CONFIG.questions.length;
  const acertos = state.results.filter((r) => r === true).length;
  const pct = acertos / total;
  const passed = pct >= CONFIG.passThreshold;

  stage.innerHTML = `
    ${renderFilmstrip()}
    <div class="result">
      <div class="score-ring">
        <b>${acertos}/${total}</b>
        <span>acertos</span>
      </div>
      ${passed ? renderRevealIntro() : renderRetry()}
    </div>`;

  if (passed) {
    document.getElementById("openEnv").onclick = () => {
      document.getElementById("envelope").classList.add("open");
      setTimeout(() => {
        sessionStorage.setItem("quizPassed", "true");
        window.location.href = "imagens/index.html";
      }, 550);
    };
  } else {
    document.getElementById("retryBtn").onclick = () => {
      state.current = 0;
      state.results = [];
      renderQuestion();
    };
  }
}

function renderRevealIntro() {
  return `
    <p style="opacity:.85;margin-bottom:18px;">Você me conhece muito bem. Tem uma coisa esperando por você.</p>
    <div class="envelope-wrap">
      <div class="envelope" id="envelope">
        <div class="env-body"></div>
        <div class="env-flap"></div>
        <div class="env-seal">27</div>
      </div>
    </div>
    <button class="btn solid" id="openEnv">Abrir</button>`;
}

function renderRetry() {
  return `
    <div class="retry-msg">
      <p>Quase! Você precisa de pelo menos 90% para desbloquear a surpresa. Bora tentar de novo?</p>
    </div>
    <button class="btn solid" id="retryBtn" style="margin-top:6px;">Tentar de novo</button>`;
}

renderIntro();
