import {useDispatch, useSelector} from "react-redux";
import {getWeather} from "../redux/actions";
import {useEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faLocationDot,faWater,faWind,faSun,faMoon} from "@fortawesome/free-solid-svg-icons";

import './weather.css'
export const Weather = () => {

    const getCookie = (name) =>  {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    const minHeight = 180;
    const maxHeight = 900;
    const [city,setCity] = useState('Kyiv');

    const [country,setCountry] = useState('');
    const [containerHeight,setContainerHeight] = useState(minHeight);
    const [isThemeLight,setIsThemeLight] = useState(false);

    const data = useSelector((state) => {
        return state.weatherData;
    });

    const dispatch = useDispatch();
    const weather = data.weatherData;
    const setupCookies = () => {
        let cookieCity = getCookie('city');
        if( cookieCity != null) setCity(cookieCity);
        let cookieTheme = getCookie('theme');
        if( cookieTheme != null) setIsThemeLight(cookieTheme === 'light');
    }

    useEffect(() => {
        setupCookies();
    }, [minHeight]);


    const getImageSrc = () => {
        let res = '';
        switch (weather.weather[0].main) {
            case 'Clear':
                res = ('images/clear.png');
                break;
            case 'Rain':
                res = 'images/rain.png';
                break;
            case 'Snow':
                res = 'images/snow.png';
                break;
            case 'Clouds':
                res = 'images/cloud.png';
                break;
            case 'Haze':
                res = 'images/mist.png';
                break;
            default:
                res = 'images/404.png';
        }
        return res;
    }

    const changeTheme = () => {
        setIsThemeLight(!isThemeLight);
        document.cookie = `theme=${isThemeLight ? 'light' : 'dark'}; expires=${new Date().getFullYear()+1};`;
    }

    const unixTo24Hour = (unixTimestamp) => {
        const unixDate = new Date(parseInt(unixTimestamp) * 1000);
        const hours = unixDate.getUTCHours();
        const minutes = unixDate.getUTCMinutes();
        const seconds = unixDate.getUTCSeconds();
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    const kelvinToCelsius = (kelvin) => {
        return (parseFloat(kelvin) - 273.15).toFixed(2);
    }

    const showIcon = (unixTimestamp) => {
        const [hours, minutes, seconds] = unixTo24Hour(unixTimestamp).split(':');
        const today = new Date();
        today.setHours(hours, minutes, seconds, 0);
        return today < new Date();
    }

    const searchWeather = () => {
        setContainerHeight(minHeight);
        setTimeout(() => {dispatch(getWeather(city,country));},300);
        document.cookie = `city=${city}; expires=${new Date().getFullYear()+1};`;
        setTimeout(()=> {setContainerHeight(maxHeight);},600);
    }

    return  (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap"
                rel="stylesheet"/>
            <div className="container" style={{height:`${containerHeight}px`,
                                               background: isThemeLight ? 'white' : 'black',
                                               color: isThemeLight ? 'inherit' : 'whitesmoke'}}>
                <div className="search-box">
                    <div style={{display:'flex',flexDirection:'row-reverse',marginBottom:'30px'}}>
                        <button onClick={changeTheme}>
                            <FontAwesomeIcon icon={isThemeLight ? faMoon : faSun}/>
                        </button>
                    </div>
                    <div style={{margin:0,padding:0}}>
                        <FontAwesomeIcon icon={faLocationDot} style={{transform: 'scale(2)',margin:'0 10px'}}/>
                        <input type="text" placeholder="Enter your city" value={city}
                               onChange={event => {
                                   if(/^[A-Za-z ]*$/.test(event.target.value))setCity(event.target.value);
                               }} style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}/>
                        <input type="text" placeholder="Country(opt)" value={country} style={{paddingLeft:'0',color: isThemeLight ? 'inherit' : 'whitesmoke'}}
                               onChange={event => {
                                   if(/^[A-Za-z ]*$/.test(event.target.value))setCountry(event.target.value);
                               }}
                        />
                        <button onClick={searchWeather} style={{position:'absolute',right:'32px'}}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{transform: 'scale(1.2)'}}/>
                        </button>
                    </div>
                </div>
                {
                    (weather.main !== undefined) && <>
                        <div className="weather-box">
                            <img src={getImageSrc()} alt={weather.weather[0].main}/>
                            <p className="temperature" style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}>{kelvinToCelsius(weather.main.temp)}°C</p>
                            <p className="description" style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}>{weather.weather[0].description}</p>
                        </div>

                        <div className="weather-details">
                            <div className="humidity">
                                <FontAwesomeIcon icon={faWater} style={{transform: 'scale(2)',marginRight:'20px'}}/>
                                <div className="text" >
                                    <span style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}>{weather.main.humidity}</span>
                                    <p style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}>Humidity</p>
                                </div>
                            </div>

                            <div className="wind">
                                <FontAwesomeIcon icon={faWind} style={{transform: 'scale(2)',marginRight:'20px'}}/>
                                <div className="text">
                                    <span style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}>{weather.wind.speed}</span>
                                    <p style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}>Wind Speed</p>
                                </div>
                            </div>
                        </div>
                        <div className="weather-details">
                            <div className="humidity">
                                {showIcon(weather.sys.sunrise) && <FontAwesomeIcon icon={faSun} style={{transform: 'scale(2)',marginRight:'20px'}}/>}
                                <div className="text">
                                    <span style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}>{unixTo24Hour(weather.sys.sunrise)}</span>
                                    <p style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}>Sunrise</p>
                                </div>
                            </div>

                            <div className="wind">
                                {showIcon(weather.sys.sunset) && <FontAwesomeIcon icon={faMoon} style={{transform: 'scale(2)',marginRight:'20px'}}/>}
                                <div className="text">
                                    <span style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}>{unixTo24Hour(weather.sys.sunset)}</span>
                                    <p style={{color: isThemeLight ? 'inherit' : 'whitesmoke'}}>Sunset</p>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {
                    (weather.main === undefined) && <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:'25%'}}>
                        <img src='images/404.png' alt='404'/>
                        <p className="temperature" style={{textAlign:'center',marginLeft:'0'}}>City not found</p>
                    </div>
                }
            </div>
        </div>
    );
}