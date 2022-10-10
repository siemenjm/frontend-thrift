import React, { useState, useEffect } from 'react';

export default function TransactionList() {
    const [transactions, setTransactions] = useState(null);

    async function getTransactions() {
        try {
            const response = await fetch('http://localhost:4000/transactions');
            const data = await response.json();

            setTransactions(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTransactions();
    }, []);

    function loaded() {
        const allTransactions = transactions.map((transaction) => {
            return (
                <div className="transaction" key={transaction.trans_id}>
                    <h2>{transaction.description}</h2>
                </div>
            );
        });

        return allTransactions;
    }

    return (
        <div className="transaction-list">
            {transactions ? loaded() : <h2>Loading Transaction list...</h2>}
        </div>
    );
}
