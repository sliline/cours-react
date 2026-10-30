import TemperatureConverter from "./exos/TemperatureConverter";

export default function App() {
  return <TemperatureConverter />;
}
const [text, setText] = useState("");

<input value={text} onChange={(e) => setText(e.target.value)} />;
