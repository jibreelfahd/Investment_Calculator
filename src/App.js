import React, { useState } from "react";

import InvestmentHeader from "./components/InvestmentHeader/InvestmentHeader";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";

const App = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["currentSavings"];
    const yearlyContribution = userInput["yearlyContributions"];
    const expectedReturn = userInput["expectedReturn"] / 100;
    const duration = userInput["duration"];

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
  }

  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          No investment to be calculated
        </p>
      )}
      {userInput && (
        <InvestmentTable
          investmentData={yearlyData}
          initialInvestment={userInput['currentSavings']}
        />
      )}
    </div>
  );
};

export default App;
