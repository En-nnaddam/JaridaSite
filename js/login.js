const login = document.getElementById("login");
const register = document.getElementById("register");

login.style.display = "none";
// register.style.display = "none";

function switchTo(block) {
  if (block === "login") {
    togglePlay(login,register);
  } else {
    togglePlay(register,login);
  }
}

function togglePlay(toShow, toHide) {
  toShow.style.display = "flex";
  toHide.style.display = "none";
}