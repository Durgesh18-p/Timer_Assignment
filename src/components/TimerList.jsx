/* eslint-disable react/prop-types */
import React from "react";
import TimerItem from "./TimerItem";

const TimerList = ({ timers, removeTimer }) => {
  return (
    <div className="timer-list">
      {timers.map((timer) => (
        <TimerItem key={timer.id} timer={timer} removeTimer={removeTimer} />
      ))}
    </div>
  );
};

export default TimerList;
