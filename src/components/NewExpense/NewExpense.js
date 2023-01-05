import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseData = (target) => {
    const expenseData = {
      ...target,
      id: Math.random().toString()
    }
    props.onAddExpenseHandler(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
