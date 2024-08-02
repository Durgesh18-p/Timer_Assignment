/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

const TimerItem = ({ timer, removeTimer }) => {
  const [remainingTime, setRemainingTime] = useState(timer.remainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0.01) {
          clearInterval(interval);
          removeTimer(timer.id);
          return 0;
        }
        return prev - 0.01;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [timer.id, removeTimer]);

  return (
    <div className="timer-item">
      <div>
        <p className="remaining-time">{remainingTime.toFixed(2)}s</p>
        <p> {timer.createdTime}</p>
      </div>
      <MdCancel className="delete-icon" onClick={() => removeTimer(timer.id)} />
    </div>
  );
};

export default TimerItem;
