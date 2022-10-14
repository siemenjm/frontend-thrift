import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function AccountCard({ account, isDetail, setCurrentAccount}) {
    function handleClick(e) {
        if (!isDetail) {
            setCurrentAccount(account);
        }
    }
    
    function handleSubmit() {
        deleteAccount();
    }

    async function deleteAccount() {
        try {
            const options = {
                method: 'DELETE'
            };

            const response = await fetch(`http://localhost:4000/accounts/${account.account_id}`, options);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div onClick={handleClick} className="card account-card">
            <img src="" alt={`${account.ins_id} logo`} />
            <h2>{account.name} - {account.ins_id}</h2>
            <h2>${account.current_balance}</h2>
            <form onSubmit={handleSubmit} className='delete-form account-delete-form'>
                <button type="submit">
                    <FaTrash />
                </button>
            </form>
        </div>
    );
}
