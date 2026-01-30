const API_KEY = "5H7WX8T7S7HP5NMQVG2DXXA2S";

export default async function getData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${API_KEY}&unitGroup=metric`;
    try {
        document.querySelector(".loader").style.display = "block";


        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        document.querySelector(".loader").style.display = "none";

        return data;

    } catch (error) {
        console.log(error.message)
    }
}
