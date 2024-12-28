import './style.css'; 
import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import FinancialOverview from './components/FinancialOverview';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Freelancer Financial Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <FinancialOverview transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
