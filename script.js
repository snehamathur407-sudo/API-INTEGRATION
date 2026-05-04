async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const apiKey = "eb3b850b05f36f9d009736a706a573b9";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // debug

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡 Temp: ${data.main.temp} °C</p>
        <p>🌥 ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById("weatherResult").innerHTML = "❌ City not found";
    }

  } catch (error) {
    console.error(error);
    document.getElementById("weatherResult").innerHTML = "❌ Error fetching data";
  }
}

