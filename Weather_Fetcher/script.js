async function getRealWeather() {
    console.log("Fetching local weather data...");
    const url = "https://api.open-meteo.com/v1/forecast?latitude=29.8833&longitude=-97.9414&current_weather=true";

    try {
        const response = await fetch(url);
        const data = await response.json();

        // This line dumps the entire incoming API object 
        // console.log("RAW API DATA:", data);

        let current = data.current_weather;
        let temp = current.temperature;
        let wind = current.windspeed;
        let windDir = current.winddirection;
        let weatherCode = current.weathercode;

        console.log(`Current Temperature: ${temp}°C`);
        console.log(`Current Wind Speed: ${wind} km/h`);
        console.log(`Current Wind Direction: ${windDir}°`);
        console.log(`Current Weather Code: ${weatherCode}`);

    } catch (error) {
        console.log("X Network Error:", error);
    }
}

getRealWeather();