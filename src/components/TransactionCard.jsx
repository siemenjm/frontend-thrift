import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function TransactionCard({ transaction }) {
    function handleSubmit() {
        deleteTransaction();
    }

    async function deleteTransaction() {
        try {
            const options = {
                method: 'DELETE'
            };

            const response = await fetch(`http://localhost:4000/transactions/${transaction.trans_id}`, options);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="card transaction-card">
            <h2>{transaction.description}</h2>
            <h2>{transaction.category} - {transaction.date}</h2>
            <h2>${transaction.amount}</h2>
            <form onSubmit={handleSubmit} className='delete-form transaction-delete-form'>
                <button type="submit">
                    <FaTrash />
                </button>
            </form>
        </div>
    );
}
