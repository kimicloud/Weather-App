document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("weatherForm");
  const button = document.getElementById("btn");
  const city = document.getElementById("city");
  const temperature = document.getElementById("temperature");
  const humidity = document.getElementById("humidity");
  const API_KEY = "8c7d1cc05af54248a4b90328240303";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("weatherInput").value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputValue}&aqi=no`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        city.textContent = `City: ${inputValue}`;
        temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
        humidity.textContent = `Humidity: ${data.current.humidity}%`;

        const weatherDisplay = document.querySelector(".weather-display");
        weatherDisplay.classList.remove("hidden");
      } else {
        console.error("Error:", data.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
