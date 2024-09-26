// Weather App

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "d44858dde2398fd4521b95de6b501aeb"

weatherForm.addEventListener("submit", async event => {

    // Prevents form from refreshing
    event.preventDefault();

    // Grab the city
    let city = cityInput.value;

    if(city) {
        try {

            const weatherData = await getWeatherData(city);
            displayWeather(weatherData);

        } catch(error) {
            console.error(error);
            displayError(error);

        }

    } else {
        displayError("Please enter a city");
    }

})

async function getWeatherData(city) {

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    let response = await fetch(apiURL);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();

}

function displayWeather(data) {

    console.log(data);

    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const temperatureDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    temperatureDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    temperatureDisplay.classList.add("temperatureDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");


    card.appendChild(cityDisplay);
    card.appendChild(temperatureDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

}

function getWeatherEmoji(weatherId) {

    switch(true){
        case(weatherId >= 200 && weatherId < 300):
            return "🌧️";
        case(weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case(weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case(weatherId >= 600 && weatherId < 700):
            return "❄️";
        case(weatherId >= 700 && weatherId < 800):
            return "💨";
        case(weatherId === 800):
            return "☀️";
        case(weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓"; 
    }

}

function displayError(message) {

    let errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}