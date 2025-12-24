import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon({ code }) {
  let state = "cloudy";

  if (code.includes("clear-sky")) state = "sunny";
  else if (code.includes("few-clouds")) state = "partlycloudy";
  else if (code.includes("scattered-clouds")) state = "cloudy";
  else if (code.includes("broken-clouds")) state = "cloudy";
  else if (code.includes("shower-rain")) state = "rainy";
  else if (code.includes("rain")) state = "pouring";
  else if (code.includes("thunderstorm")) state = "lightning";
  else if (code.includes("snow")) state = "snowy";
  else if (code.includes("mist")) state = "fog";

  return (
    <WeatherSvg
      state={state}
      night={code.includes("night")}
      width={65}
      height={65}
    />
  );
}
