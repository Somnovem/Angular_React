import {useState} from "react";

export default function CityWeather() {
    const [city, setCity] = useState('Kyiv');
    const [weatherData, setWeatherData] = useState(null);
    const [displayCityName, setDisplayCityName] = useState('');
    const [error, setError] = useState('');
    const getApiUrl = () => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b516c4c8bfaeec744fc11e31d05803a7`;

    const getWeatherData = () => {
        fetch(getApiUrl()).then((response) => response.json()).then((data) => {
            setWeatherData(data);
            setDisplayCityName(city);
        }).catch(error => setError(error));
    }

    return (
        <div>
            <input type="text" value={city} onChange={(event) => setCity(event.target.value)}/>
            <button onClick={getWeatherData}>Get Weather</button>
            {
            weatherData != null &&
                <div style={{border:'1px solid black',padding:'20px',margin:'20px'}}>
                    <h2 style={{textAlign:'center'}}>City: {displayCityName}</h2>
                    <hr/>
                    <h3>Coordinates: {weatherData.coord.lon} lon , {weatherData.coord.lat} lat</h3>
                    <h3>Overall: {weatherData.weather[0].main}</h3>
                    <h3>Temperature: {weatherData.main.temp}</h3>
                    <h3>Feels like: {weatherData.main.feels_like}</h3>
                    <h3>Pressure: {weatherData.main.pressure}</h3>
                    <h3>Humidity: {weatherData.main.humidity}</h3>
                    <h3>Wind Speed: {weatherData.wind.speed}</h3>
                </div>
            }
            {
                error && <h3>Something went wrong!</h3>
            }
        </div>
    );

}