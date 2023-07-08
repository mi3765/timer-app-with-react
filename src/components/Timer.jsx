import React, { useEffect, useRef, useState } from "react";
import "./Timer.css";
import { useNavigate } from "react-router-dom";

function Timer() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const navigate = useNavigate();

  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date().getTime();

    interval = setInterval(() => {
      const nowDate = new Date().getTime();
      const diffTime = countDownDate - nowDate;

      const day = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000)
      );
      const minute = Math.floor((diffTime % (1000 * 60 * 60)) / (60 * 1000));
      const second = Math.floor((diffTime % (1000 * 60)) / 1000);

      if (diffTime < 0) {
        clearInterval(interval.current);
      } else {
        setDays(day);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div>
      <div>
        <h2>Countdown Timer</h2>
      </div>
      {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
        <div>時間切れです</div>
      ) : (
        <div className="timer-contents">
          <section>
            <p className="timer-num">{days < 10 ? "0" + days : days}</p>
            <p className="timer-content">
              <small>Days</small>
            </p>
          </section>
          <section>
            <p className="timer-num">{hours < 10 ? "0" + hours : hours}</p>
            <p className="timer-content">
              <small>Hours</small>
            </p>
          </section>
          <section>
            <p className="timer-num">
              {minutes < 10 ? "0" + minutes : minutes}
            </p>
            <p className="timer-content">
              <small>Minutes</small>
            </p>
          </section>
          <section>
            <p className="timer-num">
              {seconds < 10 ? "0" + seconds : seconds}
            </p>
            <p className="timer-content">
              <small>Seconds</small>
            </p>
          </section>
        </div>
      )}
      <button onClick={() => navigate("/")}>return setTime</button>
    </div>
  );
}

export default Timer;
