import React, { useContext, useEffect, useState } from 'react';
import { UrlContext } from '../context/UrlContext';
import AccountDropdown from './AccountDropdown';
import TransactionTypeDropdown from './TransactionTypeDropdown';

export default function TransactionCreateForm({ getTransactions, setFormVisibility }) {
    const { BASE_URL } = useContext(UrlContext);

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
    const [transTypeDropdownValue, setTransTypeDropdownValue] = useState('Expense');
    const [creditedDropdownValue, setCreditedDropdownValue] = useState(null);
    const [debitedDropdownValue, setDebitedDropdownValue] = useState(null);

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    function handleClick() {
        setFormState({...formState, ['transType']: transTypeDropdownValue, ['creditedAccountId']: creditedDropdownValue, ['debitedAccountId']: debitedDropdownValue });
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
            const newTransaction = await fetch(`${BASE_URL}/transactions`, options);

            getTransactions();

            setFormVisibility(false);

        } catch (error) {
            console.error(error.message);
        }
    }

    async function getAccounts() {
        try {
            const response = await fetch(`${BASE_URL}/accounts`);
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
                <TransactionTypeDropdown dropdownValue={transTypeDropdownValue} setDropdownValue={setTransTypeDropdownValue} />
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
                <AccountDropdown accounts={accounts} accountAction={'Credited'} dropdownValue={creditedDropdownValue} setDropdownValue={setCreditedDropdownValue} />
                <AccountDropdown accounts={accounts} accountAction={'Debited'} dropdownValue={debitedDropdownValue} setDropdownValue={setDebitedDropdownValue} />
                
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
                <button type="submit" onClick={handleClick}>Add New Transaction</button>
            </form>
        </>
    );
}
