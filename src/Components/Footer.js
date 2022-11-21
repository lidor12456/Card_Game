import Timer from "./Timer";
import { useState, useEffect } from "react";

function Footer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleTimeIncrement = () => {
    setSeconds((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevState) => prevState + 1);
    } else if (minutes === 2) {
      setSeconds(0);
    }
  }, [seconds]);

  return (
    <div>
      <h4>
        <Timer
          minutes={minutes}
          seconds={seconds}
          incrementTime={handleTimeIncrement}
        />
      </h4>
    </div>
  );
}

export default Footer;
