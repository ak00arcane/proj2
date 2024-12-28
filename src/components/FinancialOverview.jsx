import React from 'react';

const FinancialOverview = ({ transactions }) => {
  const income = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = income - expense;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Financial Overview</h2>
      <div className="mb-4">
        <div className="text-gray-700">Total Income: ${income}</div>
        <div className="text-gray-700">Total Expenses: ${expense}</div>
        <div className="font-bold text-lg mt-2">Balance: ${balance}</div>
      </div>
    </div>
  );
};

export default FinancialOverview;
