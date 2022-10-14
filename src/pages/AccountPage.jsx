import React, { useEffect, useState } from 'react';
import AccountCreateForm from '../components/AccountCreateForm';
import AccountDetails from '../components/AccountDetails';
import AccountList from '../components/AccountList';
import CreateBtn from '../components/CreateBtn';
import PageHeader from '../components/PageHeader';

export default function AccountPage() {
    const [accounts, setAccounts] = useState(null);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [formVisibility, setFormVisibility] = useState(false);

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
            <AccountList accounts={accounts} setCurrentAccount={setCurrentAccount} isDetail={false} />
            {formVisibility ? <AccountCreateForm getAccounts={getAccounts} setFormVisibility={setFormVisibility} /> : <CreateBtn page={'Account'} setFormVisibility={setFormVisibility} />}
            {currentAccount ? <AccountDetails account={currentAccount} setCurrentAccount={setCurrentAccount} accounts={accounts} setAccounts={setAccounts} /> : <></>}
        </>
    );
}
