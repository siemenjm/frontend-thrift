import React, { useContext, useState } from 'react';
import { FaEdit, FaTrash, FaWindowClose } from 'react-icons/fa';
import { UrlContext } from '../context/UrlContext';
import TransactionDetailList from './TransactionDetailList';
import TransactionEditForm from './TransactionEditForm';

export default function TransactionDetails({ transaction, setCurrentTransaction, getTransactions }) {
    const { BASE_URL } = useContext(UrlContext);

    const [formVisibility, setFormVisibility] = useState(false);

    function handleCloseClick(e) {
        setCurrentTransaction(null);
    }
    
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

            const response = await fetch(`${BASE_URL}/transactions/${transaction.trans_id}`, options);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="details transaction-details">
            <div className="header details-header transaction-details-header">
                <div className="title-section">
                    <h2 className="details-title">Transaction Details</h2>
                    <FaWindowClose onClick={handleCloseClick}/>
                </div>
                <div className="pen-trash-container">
                    <div className="pen-container">
                        <p>Edit Transaction</p>
                        <button onClick={handleClick} className='edit-btn transaction-edit-btn'>
                            <FaEdit />
                        </button>
                    </div>
                    <div className="trash-container">
                        <p>Delete Transaction</p>
                        <form onSubmit={handleSubmit} className='delete-form transaction-delete-form'>
                            <button type="submit">
                                <FaTrash />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {formVisibility ? <TransactionEditForm transaction={transaction} setCurrentTransaction={setCurrentTransaction} setFormVisibility={setFormVisibility} getTransactions={getTransactions} /> : <></>}
            {formVisibility ? <></> : <TransactionDetailList transaction={transaction}/>}
        </div>
    );
}
