import React, { useEffect, useState } from 'react';
import AccountDetails from '../components/AccountDetails';
import AccountList from '../components/AccountList';
import PageHeader from '../components/PageHeader';

export default function AccountPage() {
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

    return (
        <>
            <PageHeader page={'Account'} accounts={accounts}/>
            <AccountList accounts={accounts}/>
            <AccountDetails />
        </>
    );
}
