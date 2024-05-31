import React from "react";

import styles from "./InvestmentTable.module.css";

const InvestmentTable = ({
  year,
  yearlyInterest,
  savingsEndOfYear,
  yearlyContribution,
}) => {
  return (
    <table className={styles.investment__result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{year}</td>
          <td>{savingsEndOfYear}</td>
          <td>{yearlyInterest}</td>
          <td>{year}</td>
          <td>{yearlyContribution}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvestmentTable;
