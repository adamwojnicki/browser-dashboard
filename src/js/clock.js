export const clock = () => {
  const clockElement = document.querySelector(".dashboard__time");
  setInterval(() => {
    const now = new Date();
    let hours = "" + now.getHours();
    let minutes = "" + now.getMinutes();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    return (clockElement.textContent = `${hours} : ${minutes}`);
  }, 1000);
};
