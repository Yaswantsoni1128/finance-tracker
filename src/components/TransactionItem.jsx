function TransactionItem({ transaction, onDelete, onEdit }) {
  return (
    <li className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
      <div>
        <p className="font-semibold">{transaction.description}</p>
        <small className="text-gray-500">
          {new Date(transaction.date).toLocaleDateString()} — ₹{transaction.amount}
        </small>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="bg-yellow-400 text-white p-1 px-3 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white p-1 px-3 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
