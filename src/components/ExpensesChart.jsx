import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function ExpensesChart({ transactions }) {
  const groupedData = transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString("default", { month: "short" });
    acc[month] = (acc[month] || 0) + parseFloat(transaction.amount);
    return acc;
  }, {});

  const chartData = Object.keys(groupedData).map((month) => ({
    month,
    amount: groupedData[month],
  }));

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensesChart;
