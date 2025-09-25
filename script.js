const apiKey = "46baffe9db5a9aaf89a6c88592b2edfa"; // 🔑 coloque sua chave da API do OpenWeather
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", getWeather);

function getWeather() {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Por favor, digite uma cidade.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Cidade não encontrada");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temperature").textContent = `${data.main.temp}°C`;
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById("weather").style.display = "block";
    })
    .catch(error => {
      alert(error.message);
    });
}
