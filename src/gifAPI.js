const API_KEY = "llHrgv7dzNEjR6AtdD9f3QcItbvZKSyY";


export default async function getGif(description) {
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${encodeURIComponent(description)}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const receivedGif = await response.json();

        const gifPlace = document.createElement("img");
        gifPlace.src = receivedGif.data.images.original.url;
        document.body.appendChild(gifPlace);

    } catch (error) {
        console.log(error.message)
    }
}