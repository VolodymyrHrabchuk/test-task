import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: parseInt(localStorage.getItem("timerTime")) || 0,
  isRunning: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    pauseTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.time = 0;
      state.isRunning = false;
    },
    incrementTime: (state) => {
      if (state.isRunning) {
        state.time += 1;
      }
    },
  },
});

export const { startTimer, pauseTimer, resetTimer, incrementTime } =
  timerSlice.actions;

export default timerSlice.reducer;
