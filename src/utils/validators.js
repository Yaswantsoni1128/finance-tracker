export function validateTransaction(transaction) {
  if (!transaction.amount || !transaction.description || !transaction.date) {
    return "All fields are required.";
  }
  if (transaction.amount <= 0) {
    return "Amount must be greater than zero.";
  }
  return null;
}
