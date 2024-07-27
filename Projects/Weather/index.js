document.addEventListener('DOMContentLoaded', function() {
    const getTemperatureBtn = document.getElementById('getTemperatureBtn');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    getTemperatureBtn.addEventListener('click', async function() {
        const city = cityInput.value.trim();
        if (city === '') {
            alert('Please enter a city name.');
            return;
        }

        const apiKey = '03bc5bd3d6fdddb2de5a89c3bfb6168d';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if(data.cord === 404){
                weatherInfo.innerHTML = `Cannot found the city`
            }
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                weatherInfo.innerHTML = `<p>Temperature in ${city}: ${temperature} &#8451;</p>
                                         <p>Weather: ${weatherDescription}</p>`;
            } else {
                weatherInfo.innerHTML = `<p>Could not retrieve weather data for ${city}. Please try again.</p>`;
            }
        } catch(error){
            console.error("Some Error Has occured")
            weatherInfo.innerHTML = `<p>Could not retrieve weather data. Please try again later.</p>`;
        }
    });
});
