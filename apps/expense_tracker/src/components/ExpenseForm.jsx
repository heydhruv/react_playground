import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/expenseSlice";

const ExpenseForm = () => {
  const [form, setForm] = useState({ category: "", amount: "", date: "" });
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.category || !form.date) return;
    dispatch(addExpense({ id: Date.now(), ...form }));
    setForm({ category: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleFormChange}
        placeholder="Category"
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        name="amount"
        value={form.amount}
        onChange={handleFormChange}
        placeholder="Amount"
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        name="date"
        value={form.date}
        onChange={handleFormChange}
        className="border p-2 w-full mb-2"
        placeholder="date"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
