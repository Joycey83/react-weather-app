import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

function WeatherForecast(props) {
  const [loaded, setLoad] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleDataResponse(response) {
    setForecast(response.data.daily);
    setLoad(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyforecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyforecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "8cac06f7ab6c10287cd06a316ff84a57";
    let units = "metric";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiURL).then(handleDataResponse);
    return null;
  }
}

export default WeatherForecast;
