import React, { useEffect, useState } from 'react';
import AccountTypeDropdown from './AccountTypeDropdown';
import InstitutionDropdown from './InstitutionDropdown';

export default function AccountCreateForm({ getAccounts, setFormVisibility }) {
    const initialFormState = {
        name: '',
        startingBalance: '',
        accountType: '',
        insId: '',
        userId: ''
    }
    const [formState, setFormState] = useState(initialFormState);
    const [institutions, setIntitutions] = useState(null);
    const [accountTypeDropdownValue, setAccountTypeDropdownValue] = useState('Depository');
    const [institutionDropdownValue, setInstitutionDropdownValue] = useState('null');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    function handleClick() {
        setFormState({...formState, ['accountType']: accountTypeDropdownValue, ['insId']: institutionDropdownValue });
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formState);
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

    async function getInstitutions() {
        try {
            const response = await fetch('http://localhost:4000/institutions');
            const data = await response.json();


            setIntitutions(data);
            setInstitutionDropdownValue(data[0].ins_id);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getInstitutions();
    }, []);

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
                <InstitutionDropdown institutions={institutions} dropdownValue={institutionDropdownValue} setDropdownValue={setInstitutionDropdownValue} />

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
