const form = document.querySelector(".login-form");
const onFormSubmit = (event) => {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  const email = formEl.email.value.trim();
  const password = formEl.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const info = {
    email,
    password,
  };

  console.log(info);

  event.currentTarget.reset();
};

form.addEventListener("submit", onFormSubmit);
