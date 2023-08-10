import React, { Component, useState } from "react";

const defaultUserInput = {
  currentSavings: 10000,
  yearlyContribution: 1000,
  expectedReturn: 7,
  duration: 10,
};

const UserInput = (props) => {

    const [userInput, setUserInput] = useState(defaultUserInput);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    //...
    console.log("Submit");
    
  };

  const onResetHandler = () => {
      console.log("Reset");
      setUserInput(defaultUserInput);
  };

  const inputChangeHandler = (input, value) => {
    console.log(input, value);
    setUserInput((prev) => {
        return {
            ...prev,
            [input]: value
        };
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("currentSavings", event.target.value)
            }
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearlyContribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expectedReturn", event.target.value)
            }
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            type="number"
            id="duration"
            value={userInput.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={onResetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
