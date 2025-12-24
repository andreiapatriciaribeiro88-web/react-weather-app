import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      <h1>Porto</h1>
      <ul>
        <li>Wednesday 09:57</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
              alt="Partly Cloudy"
            />
            <div className="ms-2">
              <span className="temperature">8</span>
              <span className="unit">ºC</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 78%</li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
