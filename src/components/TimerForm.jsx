/* eslint-disable react/prop-types */
import React, { useState } from "react";

const TimerForm = ({ addTimer }) => {
  const [seconds, setSeconds] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (seconds > 0) {
      addTimer(seconds);
      setSeconds("");
    }
  };

  return (
    <div className="timer-form">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          placeholder="Enter seconds"
        />
        <button type="submit">Add Timer</button>
      </form>
    </div>
  );
};

export default TimerForm;
