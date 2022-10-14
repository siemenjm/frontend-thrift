import React from 'react';
import { FaTrash } from 'react-icons/fa';
import TransactionDetailList from './TransactionDetailList';

export default function TransactionDetails({ transaction, setCurrentTransaction, transactions, setTransactions }) {
    function handleSubmit(e) {
        e.preventDefault();

        let prevTransactions = transactions;
        const index = prevTransactions.indexOf(transaction);
        prevTransactions.splice(index, 1);

        deleteTransaction();
        setCurrentTransaction(null);
        setTransactions(prevTransactions);
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
        <div className="details transaction-details">
            <h2 className="details-title">Transaction Details</h2>
            <form onSubmit={handleSubmit} className='delete-form transaction-delete-form'>
                <button type="submit">
                    <FaTrash />
                </button>
            </form>
            <TransactionDetailList transaction={transaction}/>
        </div>
    );
}
