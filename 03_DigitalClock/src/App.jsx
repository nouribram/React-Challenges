import React, { useState, useEffect } from "react";
import "./App.css";


function App() {

//stores the current data object
  const [time, setTime] = useState(new Date());

  //update clock

  useEffect(() => {

    //setinterval runs the callback every 1000ms
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    //clear the interval when compnents unmounts
    return () => clearInterval(timer);
  }, []);

  //converts date object to string
  const formatTime = (date) => {

    
    //get hours, minutes, seconds

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return(
    <div className="clock-container">
      <div className="clock">{formatTime(time)}</div>
    </div>
  );
}

export default App;