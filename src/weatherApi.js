const API_KEY = "5H7WX8T7S7HP5NMQVG2DXXA2S";
const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export async function fetchWeather(location) {
    const loc = location.trim();
    if (!loc) throw new Error("Empty location");

    const url = `${BASE_URL}/${encodeURIComponent(loc)}` + `?unitGroup=metric&include=current&contentType=json&key=${API_KEY}`;

    const res = await fetch(url, { mode: "cors" });

    if (!res.ok) {
        const errorText = await res.text().catch(() => "");
        throw new Error(`Weather API error ${res.status}: ${errorText}`);
    }

    const data = await res.json();

    console.log("RAW weather data:", data);
    console.log("currentConditions:", data.currentConditions);

    return data;
}