import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import ExpensesChart from "../components/ExpensesChart";
import useTransactions from "../hooks/useTransactions";

function Home() {
  const {
    transactions,
    addTransaction,
    deleteTransaction,
    editTransaction,
    editingTransaction,
    setEditingTransaction,
  } = useTransactions();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Personal Finance Visualizer</h1>

      <TransactionForm
        addTransaction={addTransaction}
        editTransaction={editTransaction}
        editingTransaction={editingTransaction}
        setEditingTransaction={setEditingTransaction}
      />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        setEditingTransaction={setEditingTransaction}
      />

      <ExpensesChart transactions={transactions} />
    </div>
  );
}

export default Home;
