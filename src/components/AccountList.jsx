import React, { useState, useEffect } from 'react';

export default function AccountList() {
    const [accounts, setAccounts] = useState(null);

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
    }, []);

    function loaded() {
        const allAccounts = accounts.map((account) => {
            return (
                <div className="account" key={account.account_id}>
                    <h2>{account.name}</h2>
                </div>
            );
        });

        return allAccounts;
    }

    return (
        <div className="account-list">
            {accounts ? loaded() : <h2>Loading Account list...</h2>}
        </div>
    );
}
