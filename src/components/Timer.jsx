import "./Timer.css";

const Timer = ({ data }) => {
  return (
    <div className="timer-container">
      <div className="box-timer">
        <h1 className="timer">{data.days}</h1>
        <h4 className="timer">Days</h4>
      </div>
      <div className="box-timer">
        <h1 className="timer">{data.hours}</h1>
        <h4 className="timer">Hours</h4>
      </div>
      <div className="box-timer">
        <h1 className="timer">{data.minutes}</h1>
        <h4 className="timer">Minutes</h4>
      </div>
      <div className="box-timer">
        <h1 className="timer">{data.seconds}</h1>
        <h4 className="timer">Seconds</h4>
      </div>
    </div>
  );
};


export default Timer;
