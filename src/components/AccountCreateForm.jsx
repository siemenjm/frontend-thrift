import React, { useContext, useEffect, useState } from 'react';
import { UrlContext } from '../context/UrlContext';
import { FaWindowClose } from 'react-icons/fa';
import AccountTypeDropdown from './AccountTypeDropdown';
import InstitutionDropdown from './InstitutionDropdown';

export default function AccountCreateForm({ getAccounts, setFormVisibility }) {
    const { BASE_URL } = useContext(UrlContext);
    
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

    function handleCloseClick(e) {
        setFormVisibility(false);
    }
    
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    function handleClick() {
        setFormState({...formState, ['accountType']: accountTypeDropdownValue, ['insId']: institutionDropdownValue });
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

            const newAccount = await fetch(`${BASE_URL}/accounts`, options);

            getAccounts();

            setFormVisibility(false);

        } catch (error) {
            console.error(error.message);
        }
    }

    async function getInstitutions() {
        try {
            const response = await fetch(`${BASE_URL}/institutions`);
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
                <h3>Add an Account</h3>
                <div className="form-inputs">
                    <label htmlFor="name">
                        <p>Account name:</p>
                        <input
                            type='text'
                            name='name'
                            onChange={handleChange}
                            value={formState.name}
                            placeholder='Enter account name...'
                            required
                        />
                    </label>
                    <label htmlFor="startingBalance">
                        <p>Starting balance ($):</p>
                        <input
                            type="number"
                            name='startingBalance'
                            onChange={handleChange}
                            value={formState.startingBalance}
                            placeholder='Enter account starting balance...'
                            required
                        />
                    </label>
                    <AccountTypeDropdown dropdownValue={accountTypeDropdownValue} setDropdownValue={setAccountTypeDropdownValue} />
                    <InstitutionDropdown institutions={institutions} dropdownValue={institutionDropdownValue} setDropdownValue={setInstitutionDropdownValue} />

                    {/* REMOVE THIS ONCE AUTH IS ADDED (USE CURRENT USER AS HIDDEN INPUT) */}
                    <label htmlFor="userId">
                        <p>User ID:</p>
                        <input
                            type="number"
                            name='userId'
                            onChange={handleChange}
                            value={formState.userId}
                            placeholder='Enter user ID...'
                            required
                        />
                    </label>
                </div>
                <button type="submit" onClick={handleClick}>Add Account</button>
                <FaWindowClose onClick={handleCloseClick}/>
            </form>
        </>
    );
}
