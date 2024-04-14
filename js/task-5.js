function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const colorTextSpanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

const widgetEl = document.querySelector(".widget");
widgetEl.classList.add("to-middle");

const changeColor = () => {
  const newColor = getRandomHexColor();

  colorTextSpanEl.textContent = newColor;
  bodyEl.style.backgroundColor = newColor;
};

changeColorBtnEl.addEventListener("click", changeColor);
