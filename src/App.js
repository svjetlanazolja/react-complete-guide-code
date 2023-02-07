import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance1",
    amount: 294.61,
    date: new Date(2021, 2, 1),
  },
  {
    id: "e2",
    title: "Car Insurance2",
    amount: 294.62,
    date: new Date(2019, 2, 2),
  },
  {
    id: "e3",
    title: "Car Insurance3",
    amount: 294.63,
    date: new Date(2020, 2, 3),
  },
  {
    id: "e4",
    title: "Car Insurance55",
    amount: 294.64,
    date: new Date(2019, 2, 4),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
