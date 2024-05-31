import React, { useState } from "react";

import styles from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };

  const expectedInterestHandler = (event) => {
    setExpectedInterest(event.target.value);
  };

  const investmentDurationHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const investmentData = {
      currentSavings: +currentSavings,
      yearlyContributions: +yearlySavings,
      expectedReturn: +expectedInterest,
      duration: +investmentDuration,
    };

    props.onCalculate(investmentData);
  };

  return (
    <form className={styles.investment__form} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current savings">Current Savings ($)</label>
          <input type="text" onChange={currentSavingsHandler} />
        </p>
        <p>
          <label htmlFor="yearly savings">Yearly Savings ($)</label>
          <input type="text" onChange={yearlySavingsHandler} />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected interest">
            Expected Interest (%, Per Year)
          </label>
          <input type="number" onChange={expectedInterestHandler} />
        </p>
        <p>
          <label htmlFor="investment duration">
            Investment Duration (Years)
          </label>
          <input type="text" onChange={investmentDurationHandler} />
        </p>
      </div>
      <div className={styles.actions}>
        <button type="reset" className={styles.buttonAlt}>
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
