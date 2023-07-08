import React, { useState } from "react";
import "./TimerInput.css";
import { useNavigate } from "react-router-dom";

const TimerInput = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const navigate = useNavigate();

  const addTime = () => {
    console.log(timerDays);
    console.log(timerHours);
    console.log(timerMinutes);
    console.log(timerSeconds);
    navigate("/timer");
  };
  return (
    <div>
      <div>
        <section>
          <p>Days </p>
          <input
            type="text"
            placeholder="May 5"
            onChange={(e) => setTimerDays(e.target.value)}
          />
        </section>
        <section>
          <p>Hours</p>
          <input
            type="text"
            placeholder="12"
            onChange={(e) => setTimerHours(e.target.value)}
          />
        </section>
        <section>
          <p>Minutes</p>
          <input
            type="text"
            placeholder="35"
            onChange={(e) => setTimerMinutes(e.target.value)}
          />
        </section>
        <section>
          <p>Seconds</p>
          <input
            type="text"
            placeholder="45"
            onChange={(e) => setTimerSeconds(e.target.value)}
          />
        </section>
        <button onClick={addTime}>setTime</button>
      </div>
    </div>
  );
};

export default TimerInput;
