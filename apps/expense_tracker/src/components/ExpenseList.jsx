import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../store/expenseSlice";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-lg font-bold mb-2">Expense List</h2>
      {expenses.map((expenses) => (
        <div
          key={expenses.id}
          className="flex justify-between items-center border-b py-2"
        >
          <span>
            {expenses.category} - ₹{expenses.amount} - {expenses.date}
          </span>
          <button
            onClick={() => dispatch(deleteExpense(expenses.id))}
            className="bg-red-500 texxt-white px-2 py-1 rounded"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
