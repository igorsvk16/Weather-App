const API_KEY = "5H7WX8T7S7HP5NMQVG2DXXA2S";
const location = "Saint Petersburg";

export default async function getData() {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/?key=${API_KEY}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error.message)
    }
}

