import React from 'react';

export default function TransactionCard({ transaction, setCurrentTransaction }) {
    function handleClick(e) {
        setCurrentTransaction(transaction);
    }

    return (
        <div onClick={handleClick} className="card transaction-card">
            <h2>{transaction.description}</h2>
            <h2>{transaction.category} - {transaction.date}</h2>
            <h2>${transaction.amount}</h2>
        </div>
    );
}
