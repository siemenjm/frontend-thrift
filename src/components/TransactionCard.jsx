import React from 'react';

export default function TransactionCard({ transaction }) {
    return (
        <div className="card transaction-card">
            <h2>{transaction.description}</h2>
            <h2>{transaction.category} - {transaction.date}</h2>
            <h2>${transaction.amount}</h2>
        </div>
    );
}
