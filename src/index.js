import getData from "./weatherAPI.js";


const form = document.getElementById("location-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inp = document.getElementById('location-input').value.trim();
    getData(inp);
})