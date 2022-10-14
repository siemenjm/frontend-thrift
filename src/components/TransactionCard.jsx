import React from 'react';

export default function TransactionCard({ transaction, setCurrentTransaction }) {
    function handleClick(e) {
        setCurrentTransaction(transaction);
    }

    function formatDate(date) {
        const tIndex = date.indexOf('T');
        const formattedDate = date.slice(0, tIndex);

        return formattedDate;
    }

    return (
        <div onClick={handleClick} className="card transaction-card">
            <h2>{transaction.description}</h2>
            <h2>{transaction.category} - {formatDate(transaction.date)}</h2>
            <h2>${transaction.amount}</h2>
        </div>
    );
}
