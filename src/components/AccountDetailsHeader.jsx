import React, { useContext, useState } from 'react';
import { FaEdit, FaTrash, FaWindowClose } from 'react-icons/fa';
import { UrlContext } from '../context/UrlContext';
import AccountEditForm from './AccountEditForm';

export default function AccountDetailsHeader({ account, setCurrentAccount, getAccounts, transactions }) {
    const { BASE_URL } = useContext(UrlContext);

    const [formVisibility, setFormVisibility] = useState(false);

    function handleCloseClick(e) {
        setCurrentAccount(null);
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

        await deleteAccount();
        setCurrentAccount(null);
        await getAccounts();
    }

    async function deleteAccount() {
        try {
            const options = {
                method: 'DELETE'
            };

            const response = await fetch(`${BASE_URL}/accounts/${account.account_id}`, options);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className='header details-header account-details-header'>
            <div className="title-section">
                <h2 className="details-title">{`${account.name} Details`}</h2>
                <FaWindowClose onClick={handleCloseClick}/>
            </div>
            <div className="pen-trash-container">
                <div className="pen-container">
                    <p>Edit Account</p>
                    <button onClick={handleClick} className='edit-btn account-edit-btn'>
                        <FaEdit />
                    </button>
                </div>
                <div className="trash-container">
                    <p>Delete Account</p>
                    <form onSubmit={handleSubmit} className='delete-form account-delete-form'>
                        <button type="submit">
                            <FaTrash />
                        </button>
                    </form>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className='left-column'>Total Transactions</th>
                        <th className='right-column'>Total Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='left-column'>{transactions ? transactions.length : <h2>Loading...</h2>}</td>
                        <td className='right-column'>${account.current_balance}</td>
                    </tr>
                </tbody>
            </table>
            {formVisibility ? <AccountEditForm account={account} setCurrentAccount={setCurrentAccount} setFormVisibility={setFormVisibility} getAccounts={getAccounts} /> : <></>}
        </div>
    );
}
