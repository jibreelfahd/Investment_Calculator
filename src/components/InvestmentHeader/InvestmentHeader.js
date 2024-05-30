import React from "react";

import "./InvestmentHeader.css";
import logo from "../../assets/investment-calculator-logo.png";

const InvestmentHeader = () => {
  return(
    <header className="investment__head">
      <img src={logo} alt={logo} />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default InvestmentHeader;
