const { isMetaProperty } = require("typescript");
const Carrot_size = 80;
const Carrot_count = 5;
const Bug_count = 5;

const field = document.querySelector(".game_field");
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector(".game_button");
const gameTimer = document.querySelector(".game_timer");
const gameScore = document.querySelector(".game_score");

const popUp = document.querySelector("pop-up");
const popUpText = document.querySelector("pop-up_message");
const popRefresh = document.querySelector("pop-up_refresh");

let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
  started = !started;
});

function startGame() {
  initgame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
}
function stopGame() {
  stopGameTimer();
  hideGameButton();
  showPopUpwithText("Replay?");
}

function hideGameButton() {
  gameBtn.style.visibility = "hidden";
}

function showStopButton() {
  const icon = gameBtn.querySelector(".fa-play");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function startGameTimer() {
  let remainingTimeSec = game_Duration_Sec;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function updateTimerText(sec) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = "${minutes}:${seconds}";
}

function showPopUpwithText(text) {
  popUpText.innerText = text;
  popUp.classList.remove("pop-up--hide");
}

function initgame() {
  //bug+carrot spawn and place them into the field
  field.innerHTML = "";
  gameScore.innerText = Carrot_count;
  addItem("carrot", 5, "img/carrot.png");
  addItem("bug", 5, "img/bug.png");
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - Carrot_size;
  const y2 = fieldRect.height - Carrot_size;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    isMetaProperty.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = "${x}px";
    item.style.top = "${y}px";
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

initgame();
