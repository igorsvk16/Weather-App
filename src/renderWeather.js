export default function renderWeather(weatherData) {

    let today = document.getElementById("today-temperature");
    let description = document.getElementById("description");

    today.innerHTML = weatherData.currentConditions.temp;
    description.innerHTML = weatherData.currentConditions.conditions;
}