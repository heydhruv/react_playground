import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const ExpenseChart = () => {
  const expenses = useSelector((state) => state.expenses);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const data = expenses.map((exp) => ({
    name: exp.category,
    value: Number(exp.amount),
  }));

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-lg font-bold mb-2">Expense Chart</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
