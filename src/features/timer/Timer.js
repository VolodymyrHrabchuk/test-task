import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  startTimer,
  pauseTimer,
  resetTimer,
  incrementTime,
} from "./timerSlice";

const Timer = () => {
  const time = useSelector((state) => state.timer.time);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const dispatch = useDispatch();

  const intervalRef = useRef(null);

  useEffect(() => {
    const storedTime = parseInt(localStorage.getItem("timerTime"));
    if (!isNaN(storedTime) && localStorage.getItem("isRunning") === "true") {
      dispatch(startTimer());
      dispatch(incrementTime(storedTime));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, dispatch]);

  useEffect(() => {
    localStorage.setItem("timerTime", time);
    localStorage.setItem("isRunning", isRunning);
  }, [time, isRunning]);

  const handleStart = () => dispatch(startTimer());
  const handlePause = () => dispatch(pauseTimer());
  const handleReset = () => dispatch(resetTimer());

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
