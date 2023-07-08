import "./App.css";
import Timer from "./components/Timer";
import TimerInput from "./components/TimerInput";

function App() {
  return (
    <div className="App">
      <TimerInput></TimerInput>
      <Timer></Timer>
    </div>
  );
}

export default App;
