import { useState } from "react";

function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const editTransaction = (updatedTransaction) => {
    const updatedList = [...transactions];
    updatedList[updatedTransaction.index] = updatedTransaction;
    delete updatedTransaction.index;
    setTransactions(updatedList);
  };

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    editTransaction,
    editingTransaction,
    setEditingTransaction,
  };
}

export default useTransactions;
