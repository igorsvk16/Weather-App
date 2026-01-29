# Project code (src only)

Included files:
- `src/index.js`
- `src/plan.md`
- `src/renderWeather.js`
- `src/styles.css`
- `src/template.html`
- `src/weatherAPI.js`

## src/index.js

```javascript
import getData from "./weatherAPI.js";
import renderWeather from "./renderWeather.js";


const form = document.getElementById("location-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inp = document.getElementById('location-input').value.trim();
    const weatherData = await getData(inp);
    renderWeather(weatherData);
})
```

## src/plan.md

```markdown
План:
1. Функция для обращения к апи (console.log)
2. Обработчики функций возвращающие объект с нужными данными только
3. Форма для ввода своей локации и получать инфу (только с консоль лог)
4. Отобразить это всё (со значками погоды (почитать про импорт по ссылке))
5. Добавить загрузку компонент

В зависимости от погоды менять внешний вид страницы (менять фон или гифки)
```

## src/renderWeather.js

```javascript
export default function renderWeather(weatherData) {

    let today = document.getElementById("today-temperature");
    let tomorrow = document.getElementById("tomorrow-temperature");

    today.innerHTML = weatherData.currentConditions.temp;
    tomorrow.innerHTML = weatherData.currentConditions.temp;
}
```

## src/styles.css

```css

```

## src/template.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather app</title>
    <script type="text/javascript" src="./index.js"></script>
</head>
<body>
    <form id="location-form">
        <div>
            <label for="location-input">Where you want to check weather</label>
            <input id="location-input" type="text" name="text" />
        </div>
        <div>
            <input type="submit" value="Send" />
        </div>
        <div id="today-temperature">
        </div>
        <div id="tomorrow-temperature"></div>
    </form>
</body>
</html>
```

## src/weatherAPI.js

```javascript
const API_KEY = "5H7WX8T7S7HP5NMQVG2DXXA2S";

export default async function getData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${API_KEY}&unitGroup=metric`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error.message)
    }
}
```

