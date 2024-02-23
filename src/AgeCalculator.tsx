import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AgeCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const calculateAge = () => {
    if (!birthDate) {
      alert("Please select a valid date");
      return;
    }

    const today = new Date();
    const diff = today.getTime() - birthDate.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
    );
    const days = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
    );

    setAge({ years, months, days });
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <label htmlFor="birthDate">Select or Enter your birthdate:</label>
      <DatePicker
        showIcon
        isClearable
        id="birthDate"
        selected={birthDate}
        onChange={(date: Date | null) => setBirthDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
      />
      <button className="button" onClick={calculateAge}>
        Calculate Age
      </button>
      {age !== null && (
        <p>
          Your age is: {age.years} years, {age.months} months, and {age.days}{" "}
          days
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;
