import React, { useEffect, useState } from 'react';
import AccountDropdown from './AccountDropdown';

export default function TransactionCreateForm({ getTransactions, setFormVisibility }) {
    const initialFormState = {
        date: '',
        description: '',
        amount: '',
        transType: '',
        category: '',
        subCategory: '',
        creditedAccountId: '',
        debitedAccountId: '',
        userId: ''
    }
    const [formState, setFormState] = useState(initialFormState);
    const [accounts, setAccounts] = useState(null);
    const [creditedDropdownValue, setCreditedDropdownValue] = useState(null);

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    function handleClick() {
        setFormState({...formState, ['creditedAccountId']: creditedDropdownValue});
    }

    function handleSubmit(e) {
        e.preventDefault();

        createTransaction(formState);

        setFormState(initialFormState);
    }

    async function createTransaction(data) {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            const newTransaction = await fetch('http://localhost:4000/transactions', options);

            getTransactions();

            setFormVisibility(false);

        } catch (error) {
            console.error(error.message);
        }
    }

    async function getAccounts() {
        try {
            const response = await fetch('http://localhost:4000/accounts');
            const data = await response.json();

            setAccounts(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getAccounts();
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit} className='create-form transaction-create-form'>
                <label htmlFor="date">Transaction Date:</label>
                <input
                    type='date'
                    name='date'
                    onChange={handleChange}
                    value={formState.date}
                    placeholder='Enter transaction date...'
                    required
                />
                <label htmlFor="description">Transaction Description:</label>
                <input
                    type='text'
                    name='description'
                    onChange={handleChange}
                    value={formState.description}
                    placeholder='Enter transaction description...'
                    required
                />
                <label htmlFor="amount">Amount ($):</label>
                <input
                    type='number'
                    name='amount'
                    onChange={handleChange}
                    value={formState.amount}
                    placeholder='Enter transaction amount...'
                    required
                />
                <label htmlFor="transType">Transaction Type:</label>
                <input
                    type="text"
                    name='transType'
                    onChange={handleChange}
                    value={formState.transType}
                    placeholder='Enter transaction type...'
                    required
                />
                <label htmlFor="category">Transaction Category:</label>
                <input
                    type="text"
                    name='category'
                    onChange={handleChange}
                    value={formState.category}
                    placeholder='Enter account category...'
                    required
                />
                <label htmlFor="subCategory">Transaction Sub-category:</label>
                <input
                    type="text"
                    name='subCategory'
                    onChange={handleChange}
                    value={formState.subCategory}
                    placeholder='Enter account sub-category...'
                />
                <AccountDropdown accounts={accounts} accountAction={'Credited'} creditedDropdownValue={creditedDropdownValue} setCreditedDropdownValue={setCreditedDropdownValue} />
                {/* <label htmlFor="creditedAccountId">Credited Account ID:</label>
                <input
                    type="number"
                    name='creditedAccountId'
                    onChange={handleChange}
                    value={formState.creditedAccountId}
                    placeholder='Enter credited account ID...'
                /> */}
                <label htmlFor="debitedAccountId">Debited Account ID:</label>
                <input
                    type="number"
                    name='debitedAccountId'
                    onChange={handleChange}
                    value={formState.debitedAccountId}
                    placeholder='Enter debited account ID...'
                />
                {/* REMOVE THIS ONCE AUTH IS ADDED (USE CURRENT USER AS HIDDEN INPUT) */}
                <label htmlFor="userId">User ID:</label>
                <input
                    type="number"
                    name='userId'
                    onChange={handleChange}
                    value={formState.userId}
                    placeholder='Enter user ID...'
                    required
                />
                <button type="submit" onClick={handleClick}>Add New Account</button>
            </form>
        </>
    );
}
