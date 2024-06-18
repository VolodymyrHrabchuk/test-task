import React from "react";
import Timer from "../features/timer/Timer";
import { Provider } from "react-redux";
import store from "./store"; 

const App = () => {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
};

export default App;
