import React, { useState } from "react";
import "./TimerInput.css";

const TimerInput = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const addTime = () => {
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
  };
  return (
    <div>
      <div>
        <section>
          <p>Days </p>
          <input
            type="text"
            placeholder="May 5"
            onChange={(e) => setDays(e.target.value)}
          />
        </section>
        <section>
          <p>Hours</p>
          <input
            type="text"
            placeholder="12"
            onChange={(e) => setHours(e.target.value)}
          />
        </section>
        <section>
          <p>Minutes</p>
          <input
            type="text"
            placeholder="35"
            onChange={(e) => setMinutes(e.target.value)}
          />
        </section>
        <section>
          <p>Seconds</p>
          <input
            type="text"
            placeholder="45"
            onChange={(e) => setSeconds(e.target.value)}
          />
        </section>
        <button onClick={addTime}>setTime</button>
      </div>
    </div>
  );
};

export default TimerInput;
