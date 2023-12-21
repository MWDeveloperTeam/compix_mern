import { useEffect } from "react";

const Timer = ({ timer, setTimer, total, setTottal, setShowResult }) => {
  useEffect(() => {
    const timerr = setInterval(() => {
      if (timer <= 0) {
        setTimer(60);
        setTottal(total - 1);
      } else {
        setTimer(timer - 1);
      }
    }, 1000);

    if (total === 0 && timer === 0) {
      setShowResult(true);
      return clearInterval(timerr);
    }

    return () => {
      clearInterval(timerr);
    };
  }, [timer]);
  return (
    <p className="heading-txt timer_wrapper">
      {total} : {timer}
    </p>
  );
};

export default Timer;
