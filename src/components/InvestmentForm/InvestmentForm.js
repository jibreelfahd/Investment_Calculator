import React, { useState } from "react";

import styles from "./InvestmentForm.module.css";

const INITIAL_INVESTMENTS = {
    currentSavings: 10000,
    yearlyContributions: 1200,
    expectedReturn: 7,
    duration: 10,
  }

const InvestmentForm = (props) => {
  // const [currentSavings, setCurrentSavings] = useState("");
  // const [yearlySavings, setYearlySavings] = useState("");
  // const [expectedInterest, setExpectedInterest] = useState("");
  // const [investmentDuration, setInvestmentDuration] = useState("");

  const [userInput, setUserInput] = useState(INITIAL_INVESTMENTS);

  // const currentSavingsHandler = (event) => {
  //   setCurrentSavings(event.target.value);
  // };

  // const yearlySavingsHandler = (event) => {
  //   setYearlySavings(event.target.value);
  // };

  // const expectedInterestHandler = (event) => {
  //   setExpectedInterest(event.target.value);
  // };

  // const investmentDurationHandler = (event) => {
  //   setInvestmentDuration(event.target.value);
  // };

  //having one function that serves for all instead of individual functions like the ones above
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: +value };
    });
  };

  const resetHandler = () => {
    setUserInput(INITIAL_INVESTMENTS);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);
  };

  return (
    <form className={styles.investment__form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current savings">Current Savings (₦)</label>
          <input
            type="text" value={userInput['currentSavings']}
            onChange={(event) => {
              inputChangeHandler('currentSavings', event.target.value)
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly savings">Yearly Savings (₦)</label>
          <input
            type="text" value={userInput['yearlyContributions']}
            onChange={(event) => {
              inputChangeHandler('yearlyContributions', event.target.value)
            }}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected interest">
            Expected Interest (%, Per Year)
          </label>
          <input
            type="number" value={userInput['expectedReturn']}
            onChange={(event) => {
              inputChangeHandler('expectedReturn', event.target.value)
            }}
          />
        </p>
        <p>
          <label htmlFor="investment duration">
            Investment Duration (Years)
          </label>
          <input
            type="text" value={userInput['duration']}
            onChange={(event) => {
              inputChangeHandler('duration', event.target.value)
            }}
          />
        </p>
      </div>
      <div className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onChange={resetHandler}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </div>
    </form>
  );
};

export default InvestmentForm;
