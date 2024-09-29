function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value; 
        const apiKey = '65764a4eed9d02d94b2697c7a000ebf0'; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const waetherInfo = document.getElementById('weatherInfo');
            waetherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })

    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);


// Do not forgot use another Key. 
// https://home.openweathermap.org/api_keys
// 5642CDA@
