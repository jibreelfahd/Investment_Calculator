import React from "react";

import InvestmentHeader from "./components/InvestmentHeader/InvestmentHeader";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";

const App = () => {
  const yearlyData = []; // per-year results

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = userInput.currentSavings;
    const yearlyContribution = userInput.yearlyContribution;
    const expectedReturn = userInput.expectedReturn / 100;
    const duration = userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    return yearlyData;
  };
  console.log(yearlyData)

  let content = (
    <p style={{ textAlign: "center", fontWeight: "bold" }}>
      No investment to be calculated
    </p>
  );

  if (yearlyData.length > 0) {
    content = <InvestmentTable investmentData={yearlyData}/>;
  }

  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm onCalculate={calculateHandler} />
      {content}
    </div>
  );
};

export default App;
