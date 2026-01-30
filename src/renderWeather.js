export default function renderWeather(weatherData) {
    const today = document.getElementById("today-temperature-show");
    const description = document.getElementById("description-show");

    today.textContent = weatherData.currentConditions.temp;
    description.textContent = weatherData.currentConditions.conditions;
}