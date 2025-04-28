import { useState, useEffect } from "react";
import { validateTransaction } from "../utils/validators";

const predefinedDescriptions = [
  "Grocery",
  "Rent",
  "Transport",
  "Coffee",
  "Recharge",
  "Subscriptions",
  "Other",
];

function TransactionForm({ addTransaction, editTransaction, editingTransaction, setEditingTransaction }) {
  const [form, setForm] = useState({ amount: "", description: "", date: "", predefined: "" });

  useEffect(() => {
    if (editingTransaction) {
      setForm({ ...editingTransaction, predefined: editingTransaction.predefined || "" });
    }
  }, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let transactionData = {
      ...form,
      description: form.predefined !== "Other" ? form.predefined : form.description,
    };

    const error = validateTransaction(transactionData);
    if (error) {
      alert(error);
      return;
    }

    if (editingTransaction) {
      editTransaction(transactionData);
    } else {
      addTransaction(transactionData);
    }

    setForm({ amount: "", description: "", date: "", predefined: "" });
    setEditingTransaction(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
      
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="border p-2 rounded-md"
      />
      
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="border p-2 rounded-md"
      />

      <select
        value={form.predefined}
        onChange={(e) => setForm({ ...form, predefined: e.target.value })}
        className="border p-2 rounded-md"
      >
        <option value="">Select Category</option>
        {predefinedDescriptions.map((desc, idx) => (
          <option key={idx} value={desc}>
            {desc}
          </option>
        ))}
      </select>

      {/* Show manual description field ONLY if "Other" is selected */}
      {form.predefined === "Other" && (
        <input
          type="text"
          placeholder="Enter Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 rounded-md"
        />
      )}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        {editingTransaction ? "Update" : "Add"} Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
