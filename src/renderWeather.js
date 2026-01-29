export default function renderWeather(weatherData) {

    let today = document.getElementById("today-temperature");
    let tomorrow = document.getElementById("tomorrow-temperature");

    today.innerHTML = weatherData.currentConditions.temp;
    tomorrow.innerHTML = weatherData.currentConditions.temp;
}