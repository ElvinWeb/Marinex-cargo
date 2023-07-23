const password = document.querySelector(".form-control");
const passwordAgain = document.querySelector(".confirm");
const form = document.getElementById("form");
const message = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
  CheckPassword();

  if (FormValid() == true) {
    form.submit();
  } else {
    e.preventDefault();
  }
});

function FormValid() {
  let result = false;

  if (message.classList.contains("success")) {
    result = true;
  } else if (message.classList.contains("error")) {
    result = false;
  }

  return result;
}

function CheckPassword() {
  let pass = password.value;
  let passAgain = passwordAgain.value;

  if (pass.length != 0) {
    if (pass == passAgain) {
      message.textContent = "password match";
      message.classList.add("success");
      message.classList.remove("warn");
      message.classList.remove("error");
    } else {
      message.textContent = "password don't match";
      message.classList.add("error");
      message.classList.remove("warn");
      message.classList.remove("success");
    }
  } else {
    message.textContent = "enter the passwords";
    message.classList.add("warn");
    message.classList.remove("success");
    message.classList.remove("error");
  }
}
