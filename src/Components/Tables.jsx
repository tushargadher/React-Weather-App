import React from "react";
import Loader from "./Loader";
const Table = ({ data }) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let date = new Date();
    let hour = date.getHours();
    let temp = Math.floor(data.main.temp - 273.15);

    return (
        <>

            {console.log(data)}
            <div className="weather ">
                <div className="weatherCity">
                    <span className="city">{data.name}&nbsp; Weather</span>
                    <span className="time">At &nbsp;{date.toLocaleTimeString()}</span>
                    <div className="tempBox">
                        <span className="temp"> {Math.floor(data.main.temp - 273.15)}<sup>o</sup>c</span>
                        <span className="weatherBox">
                            <img src={`https://openweathermap.org/img/wn/${data.cod !== 404 ? data.weather[0].icon : null}.png`} className="cloudName" />
                            <span className="cloud">{data.weather[0].main}</span>
                        </span>
                    </div>
                    <span className="cloudDes">{data.weather[0].description}</span>
                </div>
                <div className="greeting">

                    <span>
                        {hour >= 5 && hour < 12 ? 'Good Morning 🍵' : ''}
                        {hour >= 12 && hour < 18 ? 'Good Afternoon 😊' : ''}
                        {hour >= 18 && hour < 22 ? 'Good Evening 😊' : ''}
                        {hour >= 22 || hour <= 4 ? 'Good Night 😴' : ''}


                    </span>
                    <span className="date">{date.getDate()} {monthNames[date.getMonth()]} {date.getFullYear()}</span>
                </div>
            </div>
            <div className="details">

                <h1>Weather Details of {data.name}</h1>
                <div className="tables">


                    <table border="1">
                        <tbody>
                            <tr id="tr">
                                <th>High/Low</th>
                                <th id="Wspeed" className="text-end">{Math.floor(data.main.temp_max - 273.15)} / {Math.floor(data.main.temp_min - 273.15)}</th>
                            </tr>
                            <tr>
                                <th>Humidity</th>
                                <th id="humidity" className="text-end">{data.main.humidity} % </th>
                            </tr>
                            <tr>
                                <th>Pressure</th>
                                <th id="cloudy" className="text-end">{data.main.pressure} hPa</th>
                            </tr>
                            <tr>
                                <th>Visibility</th>
                                {/* data visibility is in meter */}
                                <th id="cloudy" className="text-end">{data.visibility / 1000} Km</th>
                            </tr>
                        </tbody>
                    </table>
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>Wind Speed</th>
                                <th id="Wspeed" className="text-end">{data.wind.speed} Km</th>
                            </tr>
                            <tr>
                                <th>Wind Direction</th>
                                <th id="humidity" className="text-end">{data.wind.deg} <sup>o</sup> deg</th>
                            </tr>
                            <tr>
                                <th>Sunrise</th>
                                <th id="cloudy" className="text-end">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</th>
                            </tr>
                            <tr>
                                <th>Sunset</th>
                                <th id="cloudy" className="text-end">{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</th>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Table;