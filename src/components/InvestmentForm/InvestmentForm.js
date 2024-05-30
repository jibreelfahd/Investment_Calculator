import React from "react";

import "./InvestmentForm.css";

const InvestmentForm = () => {
  return (
    <form className="investment__form">
      <div className="input-group">
        <p>
          <label htmlFor="current savings">Current Savings ($)</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="yearly savings">Yearly Savings ($)</label>
          <input type="text" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected interest">
            Expected Interest (%, Per Year)
          </label>
          <input type="number" />
        </p>
        <p>
          <label htmlFor="investment duration">
            Investment Duration (Years)
          </label>
          <input type="text" />
        </p>
      </div>
      <div className="actions">
        <button type="reset" className="buttonAlt">Reset</button>
        <button type="submit" className="button">Calculate</button>
      </div>
    </form>
  );
};

export default InvestmentForm;
