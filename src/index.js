import { fetchWeather } from "./weatherApi.js";

fetchWeather("Helsinki").catch(console.error);