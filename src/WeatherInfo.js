import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherIcon code={props.infoData.icon} size={55} />
          <WeatherTemperature celsius={props.infoData.temperature} />
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
