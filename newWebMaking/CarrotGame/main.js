const { isMetaProperty } = require("typescript");
const Carrot_size = 80;
const field = document.querySelector(".game_field");
const fieldRect = field.getBoundingClientRect();
//size position

function initgame() {
  //bug+carrot spawn and place them into the field
  console.log(fieldRect);
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
