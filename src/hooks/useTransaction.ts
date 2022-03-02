import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useTransaction() {
  const { transactions, createTransaction } = useContext(TransactionsContext);

  return { transactions, createTransaction };
}