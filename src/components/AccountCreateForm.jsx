import React, { useState } from 'react';
import AccountTypeDropdown from './AccountTypeDropdown';

export default function AccountCreateForm({ getAccounts, setFormVisibility }) {
    const initialFormState = {
        name: '',
        startingBalance: '',
        accountType: '',
        insId: '',
        userId: ''
    }
    const [formState, setFormState] = useState(initialFormState);
    const [accountTypeDropdownValue, setAccountTypeDropdownValue] = useState('Depository');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        createAccount(formState);

        setFormState(initialFormState);
    }

    async function createAccount(data) {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            const newAccount = await fetch('http://localhost:4000/accounts', options);

            getAccounts();

            setFormVisibility(false);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='create-form account-create-form'>
                <label htmlFor="name">Account name:</label>
                <input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    value={formState.name}
                    placeholder='Enter account name...'
                    required
                />
                <label htmlFor="startingBalance">Starting balance ($):</label>
                <input
                    type="number"
                    name='startingBalance'
                    onChange={handleChange}
                    value={formState.startingBalance}
                    placeholder='Enter account starting balance...'
                    required
                />
                <AccountTypeDropdown dropdownValue={accountTypeDropdownValue} setDropdownValue={setAccountTypeDropdownValue} />
                <label htmlFor="insId">Institution ID:</label>
                <input
                    type="number"
                    name='insId'
                    onChange={handleChange}
                    value={formState.insId}
                    placeholder='Enter institution ID...'
                    required
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
                <button type="submit">Add New Account</button>
            </form>
        </>
    );
}
