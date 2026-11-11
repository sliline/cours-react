import { useState } from "react";
import { toFahrenheit } from "../lib/temperature";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  const value = Number(celsius);
  const fahrenheit =
    celsius.trim() === "" || Number.isNaN(value) ? null : toFahrenheit(value);

  return (
    <div>
      <label>
        Température en °C :{" "}
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
      </label>
      {fahrenheit !== null && <p>{fahrenheit} °F</p>}
    </div>
  );
}
