import React from "react";

import styles from "./InvestmentTable.module.css";

const InvestmentTable = (props) => {
  //formatting the recieved values and rounding them up
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // formatter.format(props.)
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
        {props.investmentData.map((dataValues) => {
          return (
            <tr key={dataValues.year}>
              <td>{dataValues.year}</td>
              <td>{formatter.format(dataValues.savingsEndOfYear)}</td>
              <td>{formatter.format(dataValues.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  dataValues.savingsEndOfYear -
                    props.initialInvestment -
                    dataValues.yearlyContribution * dataValues.year
                )}
              </td>
              <td>
                {formatter.format(props.initialInvestment +
                  dataValues.yearlyContribution * dataValues.year)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvestmentTable;
