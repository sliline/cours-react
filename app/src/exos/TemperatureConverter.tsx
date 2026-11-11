import { useState } from "react";
import { toFahrenheit } from "../lib/temperature";
export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const fahrenheit = toFahrenheit(Number(celsius));

  return (
    <div>
      <input value={celsius} onChange={(e) => setCelsius(e.target.value)} />
      {celsius !== "" && <p>{fahrenheit} °F</p>}
    </div>
  );
}
