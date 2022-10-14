import React, { useEffect, useState } from 'react';
import AccountDropdown from './AccountDropdown';
import TransactionTypeDropdown from './TransactionTypeDropdown';

export default function TransactionEditForm({ transaction, setCurrentTransaction, setFormVisibility, getTransactions }) {
    const [formState, setFormState] = useState(transaction);
    const [accounts, setAccounts] = useState(null);
    const [transTypeDropdownValue, setTransTypeDropdownValue] = useState(transaction.trans_type);
    const [creditedDropdownValue, setCreditedDropdownValue] = useState(transaction.credited_account_id);
    const [debitedDropdownValue, setDebitedDropdownValue] = useState(transaction.debited_account_id);

    function formatDate(date) {
        const tIndex = date.indexOf('T');
        const formattedDate = date.slice(0, tIndex);

        setFormState({...formState, ['date']: formattedDate});
    }


    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    function handleClick() {
        setFormState({...formState, ['credited_account_id']: creditedDropdownValue, ['debited_account_id']: debitedDropdownValue });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await editTransaction(formState);
        setFormVisibility(false);
        setCurrentTransaction(formState);

        await getTransactions();
    }

    async function editTransaction(data) {
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            const newTransaction = await fetch(`http://localhost:4000/transactions/${transaction.trans_id}`, options);

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
        formatDate(transaction.date);
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit} className='edit-form transaction-edit-form'>
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
                <label htmlFor="sub_category">Transaction Sub-category:</label>
                <input
                    type="text"
                    name='sub_category'
                    onChange={handleChange}
                    value={formState.sub_category}
                    placeholder='Enter account sub-category...'
                />
                <AccountDropdown accounts={accounts} accountAction={'Credited'} dropdownValue={creditedDropdownValue} setDropdownValue={setCreditedDropdownValue} />
                <AccountDropdown accounts={accounts} accountAction={'Debited'} dropdownValue={debitedDropdownValue} setDropdownValue={setDebitedDropdownValue} />
                <button type="submit" onClick={handleClick}>Edit Transaction</button>
            </form>
        </>
    );
}
