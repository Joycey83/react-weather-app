import React from "react";
import FormattedDate from "./FormattedDate";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.infoData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.infoData.date} />
        </li>
        <li className="text-capitalize">{props.infoData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.infoData.iconUrl} alt={props.infoData.description} />
          <span className="temperature">
            {Math.round(props.infoData.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.infoData.humidity} %</li>
            <li>Wind: {Math.round(props.infoData.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
