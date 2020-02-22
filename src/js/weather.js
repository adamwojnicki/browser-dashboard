export const weather = () => {
  const apiKey = "bc00e5048c4952dbd95841202e785eab";
  const city = "Warsaw";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(resp => resp.json())
    .then(data => weatherUI(data))
    .catch(e => {
      const dashboardWeather = document.querySelector(".dashboard__weather");
      dashboardWeather.innerHTML = e;
      console.log(`Something went wrong with fetching data: ${e}`);
    });
};

const weatherUI = data => {
  const weatherData = data;

  const cityUI = document.querySelector(".dashboard__weather__city");
  const iconUI = document.querySelector(".dashboard__weather__icon");
  const tempUI = document.querySelector(".dashboard__weather__temp");
  const descUI = document.querySelector(".dashboard__weather__desc");

  const roundTemp = Math.floor(weatherData.main.temp);

  cityUI.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
  iconUI.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  tempUI.innerHTML = `${roundTemp}&deg C`;
  descUI.innerHTML = weatherData.weather[0].main;
};
