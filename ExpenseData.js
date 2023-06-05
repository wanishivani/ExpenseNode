import { useState } from "react";
import  './ExpenseData .css';
import AddTransaction from "./Expense";
import TransactionHistory from "./TransactionHistory";
import TotalExpenses from "./Total";
export default function ExpenseData() {
  const [transactions, setTransactions] = useState([]);
  const [showAddBox, setShowAddBox] = useState(false);
  const [plus, setPlus] = useState(true);

  return (
    <div className="App">
      <div className="App-Title"> EXPENSE TRACKER APP</div>
      <TotalExpenses
        transactions={transactions}
        setPlus={setPlus}
        setShowAddBox={setShowAddBox}
        />
        {showAddBox && (
          <AddTransaction
            plus={plus}
            setTransactions={setTransactions}
            setShowAddBox={setShowAddBox}
          />
        )}
        <TransactionHistory
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
    );
  }
  
  
  