import React, { useState } from "react";
import TimerList from "./components/TimerList";
import TimerForm from "./components/TimerForm";
import "./App.css";

const App = () => {
  const [timers, setTimers] = useState([]);

  const addTimer = (seconds) => {
    const newTimer = {
      id: Date.now(),
      createdTime: new Date().toLocaleString(),
      remainingTime: parseFloat(seconds),
    };
    setTimers([...timers, newTimer]);
  };

  const removeTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div className="app">
      <div className="left-side">
        <h2>Timers</h2>
        <TimerList timers={timers} removeTimer={removeTimer} />
      </div>
      <div className="right-side">
        <h2>Add Timer</h2>
        <TimerForm addTimer={addTimer} />
      </div>
    </div>
  );
};

export default App;
