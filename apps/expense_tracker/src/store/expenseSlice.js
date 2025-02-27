import { createSlice } from "@reduxjs/toolkit";

const loadExpenses = () => {
  const saved = localStorage.getItem("expenses");
  return saved ? JSON.parse(saved) : [];
};

const savedExpenses = (expenses) => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState: loadExpenses(),
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
      savedExpenses(state);
    },
    deleteExpense: (state, action) => {
      const filtered = state.filter((exp) => exp.id !== action.payload);
      savedExpenses(filtered);
      return filtered;
    },
  },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
