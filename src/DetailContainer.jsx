import './DetailContainer.css';
import { useContext } from 'react';
import { dataContext } from './Context';


function DetailContainer(){    
        const data=useContext(dataContext);
        const weatherData = data.data;
        if(weatherData === undefined){
                return(
                        <div className = "Title-Container">
                                Enter a valid city name
                        </div>
                )
        }
        return(
                <div className = "Detail-page">
                        <div className = "Title-Container">Weather Details</div>
                        <div className = "Image-Container">
                                <h4><span><img src = "https://cdn-icons-png.flaticon.com/128/450/450016.png" alt = ""/></span>{weatherData.name}</h4>
                                <img src = {`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt = "icon"></img>
                                <p>{weatherData.weather[0].description}</p>
                                <h1> {(weatherData.main.temp - 273).toFixed(1)}°C</h1>
                        </div>
                        <div className = "Detail-Container">
                                <div className = "Detail-Item">
                                        <img src = "https://cdn-icons-png.flaticon.com/128/1843/1843544.png" alt= ""></img>
                                        <h4>Feels Like</h4>
                                        <h3>{`${(weatherData.main.feels_like - 273).toFixed(1)}`}°C</h3>
                                </div>
                                <div className = "Detail-Item">
                                        <img src = "https://cdn-icons-png.flaticon.com/128/1594/1594775.png" alt= ""></img>
                                        <h4>Humidity</h4>
                                        <h3>{weatherData.main.humidity}%</h3>
                                </div>
                                <div className = "Detail-Item">
                                        <img src = "https://static.thenounproject.com/png/1928050-200.png" alt= ""></img>
                                        <h4>Pressure</h4>
                                        <h3>{weatherData.main.pressure} hPa</h3>
                                </div>
                                <div className = "Detail-Item">
                                        <img src = "https://cdn-icons-png.flaticon.com/128/11742/11742598.png" alt= ""></img>
                                        <h4>Wind Speed</h4>
                                        <h3>{weatherData.wind.speed} m/s</h3>
                                </div>
                                <div className = "Detail-Item">
                                        <img src = "https://cdn-icons-png.flaticon.com/128/3920/3920848.png" alt= ""></img>
                                        <h4>Wind Direction</h4>
                                        <h3>{weatherData.wind.deg}°</h3>
                                </div>
                                <div className='Detail-Item'>
                                        <img src = "https://cdn-icons-png.flaticon.com/128/2210/2210317.png" alt= ""></img>
                                        <h4>Visibility</h4>
                                        <h3>{(weatherData.visibility/1000).toFixed(1)} km</h3>
                                </div>
                                
                        </div>
                </div>
        )
}

export default DetailContainer;