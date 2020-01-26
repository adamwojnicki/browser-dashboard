import "dotenv";

export const weather = () => {
  const apiKey = "bc00e5048c4952dbd95841202e785eab";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw,PL&appid=${apiKey}`;
  fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data));
};
