import getData from "./weatherAPI.js";
import renderWeather from "./renderWeather.js";


const form = document.getElementById("location-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inp = document.getElementById('location-input').value.trim();
    const weatherData = await getData(inp);
    renderWeather(weatherData);
})