import React from "react";
import "./TimerInput.css";

function TimerInput() {
  return (
    <div>
      <div>
        <section>
          <p>Days </p>
          <input type="text" placeholder="May 5" />
        </section>
        <section>
          <p>Hours</p>
          <input type="text" placeholder="12" />
        </section>
        <section>
          <p>Minutes</p>
          <input type="text" placeholder="35" />
        </section>
        <section>
          <p>Seconds</p>
          <input type="text" placeholder="45" />
        </section>
      </div>
    </div>
  );
}

export default TimerInput;
