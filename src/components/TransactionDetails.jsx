import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import TransactionDetailList from './TransactionDetailList';
import TransactionEditForm from './TransactionEditForm';

export default function TransactionDetails({ transaction, setCurrentTransaction, getTransactions }) {
    const [formVisibility, setFormVisibility] = useState(false);

    function handleClick(e) {
        if (formVisibility) {
            setFormVisibility(false);
        } else {
            setFormVisibility(true);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await deleteTransaction();
        setCurrentTransaction(null);
        await getTransactions();
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
            <button onClick={handleClick} className='edit-btn transaction-edit-btn'>
                <FaEdit />
            </button>
            <form onSubmit={handleSubmit} className='delete-form transaction-delete-form'>
                <button type="submit">
                    <FaTrash />
                </button>
            </form>
            {formVisibility ? <TransactionEditForm transaction={transaction} setCurrentTransaction={setCurrentTransaction} setFormVisibility={setFormVisibility} getTransactions={getTransactions} /> : <></>}
            {formVisibility ? <></> : <TransactionDetailList transaction={transaction}/>}
        </div>
    );
}
