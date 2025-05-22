// Weather Module - Dummy Implementation
console.log("Weather module loaded!");

function getWeather(city) {
    console.log(`Getting weather for ${city}...`);
    // TODO: Implement actual weather API call
    return {
        city: city,
        temperature: "22°C",
        condition: "Sunny",
        humidity: "65%"
    };
}

function displayWeather(weatherData) {
    console.log(`Weather in ${weatherData.city}:`);
    console.log(`Temperature: ${weatherData.temperature}`);
    console.log(`Condition: ${weatherData.condition}`);
    console.log(`Humidity: ${weatherData.humidity}`);
}

// Export functions for use in other files
module.exports = {
    getWeather,
    displayWeather
};