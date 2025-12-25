import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "a9taa49fcab393c9d77od70f76b07b85";
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="d-flex justify-content-center">
            <WeatherIcon code="clear-sky-day" size="small" />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">11º</span>{" "}
            <span className="WeatherForecast-temperatures-min">5º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
