function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  width: 30,
  haight: 30,
  arrayBoxes: [],
};

const controlsBtnEl = document.querySelectorAll("#controls button");
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");

const controlsEl = document.querySelector("#controls");
controlsEl.classList.add("div-supstyle");
boxesEl.classList.add("div-supstyle");

function createBoxes(amount) {
  for (let index = 1; index <= amount; index++) {
    refs.arrayBoxes.push(createNewEL());
  }
}

function destroyBoxes() {
  refs.width = 30;
  refs.haight = 30;
  boxesEl.innerHTML = "";
}

function createNewEL() {
  const divBoxEl = document.createElement("div");
  divBoxEl.style.minWidth = `${refs.width}px`;
  divBoxEl.style.minHeight = `${refs.haight}px`;
  divBoxEl.style.backgroundColor = getRandomHexColor();

  refs.width += 10;
  refs.haight += 10;

  return divBoxEl;
}

const onBtnClick = (event) => {
  const currentBtn = event.currentTarget;
  if (currentBtn.dataset.destroy !== undefined) {
    destroyBoxes();
    return;
  }

  if (inputEl.value >= 1 && inputEl.value <= 100) {
    destroyBoxes();
    createBoxes(inputEl.value);
    boxesEl.append(...refs.arrayBoxes);
    refs.arrayBoxes = [];
  }
};

controlsBtnEl.forEach((btnEl) => {
  btnEl.addEventListener("click", onBtnClick);
});
