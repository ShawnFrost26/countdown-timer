import { useState } from "react";
import "./SelectDate.css";

const SelectDate = ({ selectedDate, onCancel, isCountDownActive }) => {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedDate(date);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container">
        <input
          type="datetime-local"
          name="input-datetime"
          id="input-datetime"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        {!isCountDownActive && (
          <button type="submit" className="button">
            Start Timer
          </button>
        )}
        {isCountDownActive && (
          <button type="button" onClick={onCancel} className="button">
            Cancel Timer
          </button>
        )}
      </div>
    </form>
  );
};

export default SelectDate;