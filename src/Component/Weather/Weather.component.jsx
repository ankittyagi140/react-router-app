import React from 'react';
import './Weather.component.css';

const WeatherComp = ({ wData ,changeHandler}) => {
    return (
        <div className="weather-chart">
            <div className="navbar">
                <h1>Weather Data</h1>
               

            </div>

            <div className="weather-display">
                <div className="temp">
                    <h1>{wData.temp}<sup>o</sup>C  ,  {wData.description}</h1>
                    <h3>{wData.location}</h3>
                    <p>{wData.region} , {wData.country}</p>
                </div>
                <div className="img">
                    <img src={wData.img} />
                </div>
            </div>

            <div className="weather-info">
                <div className="wind">
                    <p><b>Wind speed</b>(Km/hrs)</p>
                    <h2>{wData.wind}</h2>

                </div>
                <div className="pressure">
                    <p><b>Pressure</b>(millibar)</p>
                    <h2>{wData.press}</h2>

                </div>
                <div className="humidity">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{wData.humid}</h2>

                </div>
            </div>



        </div>
    )
}
export default WeatherComp;