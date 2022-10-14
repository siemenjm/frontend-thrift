import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function AccountDetailsHeader({ account, transactions }) {
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
        <div className='header details-header account-details-header'>
            <h2 className="details-title">{`${account.name} Details`}</h2>
            <form onSubmit={handleSubmit} className='delete-form account-delete-form'>
                <button type="submit">
                    <FaTrash />
                </button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Total Transactions</th>
                        <th>Total Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{transactions ? transactions.length : <h2>Loading...</h2>}</td>
                        <td>${account.current_balance}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
