import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="overflow-x-auto mt-8 bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="py-2 px-4">{transaction.description}</td>
              <td className="py-2 px-4">${transaction.amount}</td>
              <td className="py-2 px-4">{transaction.category}</td>
              <td className="py-2 px-4">{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
