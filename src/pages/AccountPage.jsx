import React, { useContext, useEffect, useState } from 'react';
import AccountCreateForm from '../components/AccountCreateForm';
import AccountDetails from '../components/AccountDetails';
import AccountList from '../components/AccountList';
import CreateBtn from '../components/CreateBtn';
import PageHeader from '../components/PageHeader';
import { UrlContext } from '../context/UrlContext';

export default function AccountPage() {
    const { BASE_URL } = useContext(UrlContext);

    const [accounts, setAccounts] = useState(null);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [formVisibility, setFormVisibility] = useState(false);

    async function getAccounts() {
        try {
            const response = await fetch(`${BASE_URL}/accounts`);
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
            <div className="center-content">
                <PageHeader page={'Account'} setFormVisibility={setFormVisibility} accounts={accounts}/>
                <AccountList accounts={accounts} setCurrentAccount={setCurrentAccount} isDetail={false} />
                {formVisibility ? <AccountCreateForm getAccounts={getAccounts} setFormVisibility={setFormVisibility} /> : <CreateBtn setFormVisibility={setFormVisibility} />}
            </div>
            <div className="right-content">
                {currentAccount ? <AccountDetails account={currentAccount} setCurrentAccount={setCurrentAccount} getAccounts={getAccounts} /> : <></>}
            </div>
        </>
    );
}
