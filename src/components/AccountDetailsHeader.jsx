import React from 'react';

export default function AccountDetailsHeader({ account, transactions }) {
    return (
        <div className='header details-header account-details-header'>
            <h2 className="details-title">{`${account.name} Details`}</h2>
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
