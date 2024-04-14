const refs = {
  inputEl: document.querySelector("#name-input"),
  titleSpanEl: document.querySelector("#name-output"),
};

const nameInput = (event) => {
  const userName = event.currentTarget.value;

  refs.titleSpanEl.textContent = userName === "" ? "Anonymous" : userName;
};

refs.inputEl.addEventListener("input", nameInput);
