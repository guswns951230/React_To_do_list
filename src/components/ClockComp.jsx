import { useState, useMemo, useEffect } from "react";

const ClockComp = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const hours = useMemo(() => {
    let stringHours = String(time.getHours());
    return stringHours.padStart(2, "0");
  }, [time]);
  const minutes = useMemo(() => {
    let stringMinutes = String(time.getMinutes());
    return stringMinutes.padStart(2, "0");
  }, [time]);
  const seconds = useMemo(() => {
    let stringSeconds = String(time.getSeconds());
    return stringSeconds.padStart(2, "0");
  }, [time]);

  return (
    <div>
      <h1>
        {hours}:{minutes}:{seconds}
      </h1>
    </div>
  );
};

export default ClockComp;
