import React from "react";

import InvestmentHeader from "./components/InvestmentHeader/InvestmentHeader";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";

const App = () => {
  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm />
      <InvestmentTable />
    </div>
  );
};

export default App;
