import "dotenv";
export const weather = () => {
  const apiKey = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw,PL&appid=${apiKey}`;
  fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data));
};
