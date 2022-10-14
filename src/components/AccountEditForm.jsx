import React, { useEffect, useState } from 'react';
import AccountTypeDropdown from './AccountTypeDropdown';
import InstitutionDropdown from './InstitutionDropdown';

export default function AccountEditForm({ account, setCurrentAccount, setFormVisibility, getAccounts }) {
    const [formState, setFormState] = useState(account);
    const [institutions, setIntitutions] = useState(null);
    const [accountTypeDropdownValue, setAccountTypeDropdownValue] = useState(account.account_type);
    const [institutionDropdownValue, setInstitutionDropdownValue] = useState(account.ins_id);

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    function handleClick() {
        setFormState({...formState, ['account_type']: accountTypeDropdownValue, ['ins_id']: institutionDropdownValue });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await editAccount(formState);
        setFormVisibility(false);
        setCurrentAccount(formState);

        await getAccounts();
    }

    async function editAccount(data) {
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };

            const response = await fetch(`http://localhost:4000/accounts/${account.account_id}`, options);

        } catch (error) {
            console.error(error.message);
        }
    }

    async function getInstitutions() {
        try {
            const response = await fetch('http://localhost:4000/institutions');
            const data = await response.json();

            setIntitutions(data);
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
                <label htmlFor="starting_balance">Starting balance ($):</label>
                <input
                    type="number"
                    name='starting_balance'
                    onChange={handleChange}
                    value={formState.starting_balance}
                    placeholder='Enter account starting balance...'
                    required
                />
                <AccountTypeDropdown dropdownValue={accountTypeDropdownValue} setDropdownValue={setAccountTypeDropdownValue} />
                <InstitutionDropdown institutions={institutions} dropdownValue={institutionDropdownValue} setDropdownValue={setInstitutionDropdownValue} />
                <button type="submit" onClick={handleClick}>Edit Account</button>
            </form>
        </>
    );
}
