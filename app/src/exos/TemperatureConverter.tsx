import { useState } from "react";
import { toFahrenheit } from "../lib/temperature";
export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  return <input value={celsius} onChange={(e) => setCelsius(e.target.value)} />;
}
