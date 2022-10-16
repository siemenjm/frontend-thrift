import React, { useContext, useEffect, useState } from 'react';
import { UrlContext } from '../context/UrlContext';
import { FaWindowClose } from 'react-icons/fa';
import AccountTypeDropdown from './AccountTypeDropdown';
import InstitutionDropdown from './InstitutionDropdown';

export default function AccountEditForm({ account, setCurrentAccount, setFormVisibility, getAccounts }) {
    const { BASE_URL } = useContext(UrlContext);

    const [formState, setFormState] = useState(account);
    const [institutions, setIntitutions] = useState(null);
    const [accountTypeDropdownValue, setAccountTypeDropdownValue] = useState(account.account_type);
    const [institutionDropdownValue, setInstitutionDropdownValue] = useState(account.ins_id);

    function handleCloseClick(e) {
        setFormVisibility(false);
    }
    
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

            const response = await fetch(`${BASE_URL}/accounts/${account.account_id}`, options);

        } catch (error) {
            console.error(error.message);
        }
    }

    async function getInstitutions() {
        try {
            const response = await fetch(`${BASE_URL}/institutions`);
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
                <h3>Edit Account</h3>
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
                    <label htmlFor="starting_balance">
                        <p>Starting balance ($):</p>
                        <input
                            type="number"
                            name='starting_balance'
                            onChange={handleChange}
                            value={formState.starting_balance}
                            placeholder='Enter account starting balance...'
                            required
                        />
                    </label>
                    <AccountTypeDropdown dropdownValue={accountTypeDropdownValue} setDropdownValue={setAccountTypeDropdownValue} />
                    <InstitutionDropdown institutions={institutions} dropdownValue={institutionDropdownValue} setDropdownValue={setInstitutionDropdownValue} />
                </div>
                <button type="submit" onClick={handleClick}>Edit Account</button>
                <FaWindowClose onClick={handleCloseClick}/>
            </form>
        </>
    );
}
