const usernameUI = document.querySelector(".dashboard__greeting__username");

export const username = () => {
  getUserName();
  usernameUI.addEventListener("keypress", setUserName);
  usernameUI.addEventListener("blur", setUserName);
};

const getUserName = () => {
  if (localStorage.getItem("username") === null) {
    usernameUI.textContent = "USER";
  } else {
    usernameUI.textContent = localStorage.getItem("username");
  }
};

const setUserName = e => {
  if (e.type === "keypress") {
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("username", e.target.innerText);
      usernameUI.blur();
    }
  } else {
    localStorage.setItem("username", e.target.innerText);
  }
};
