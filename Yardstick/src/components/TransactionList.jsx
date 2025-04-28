import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, deleteTransaction, setEditingTransaction }) {
  return (
    <ul className="space-y-4 mb-8">
      {transactions.map((tx, index) => (
        <TransactionItem
          key={index}
          transaction={tx}
          onDelete={() => deleteTransaction(index)}
          onEdit={() => setEditingTransaction({ ...tx, index })}
        />
      ))}
    </ul>
  );
}

export default TransactionList;
