import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { UrlContext } from '../context/UrlContext';
import AccountDetailsHeader from './AccountDetailsHeader';
import CreateBtn from './CreateBtn';
import TransactionCreateForm from './TransactionCreateForm';
import TransactionList from './TransactionList';

export default function AccountDetails({ account, setCurrentAccount, getAccounts }) {
    const { BASE_URL } = useContext(UrlContext);

    const [transactions, setTransactions] = useState(null);
    const [formVisibility, setFormVisibility] = useState(false);

    async function getTransactions() {
        try {
            const response = await fetch(`${BASE_URL}/accounts/${account.account_id}`);
            const data = await response.json();

            setTransactions(data.transactions);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTransactions();
    }, [account]);

    return (
        <div className="details account-details">
            <AccountDetailsHeader account={account} setCurrentAccount={setCurrentAccount} getAccounts={getAccounts} transactions={transactions} />
            <TransactionList transactions={transactions}/>
            {formVisibility ? <TransactionCreateForm getTransactions={getTransactions} setFormVisibility={setFormVisibility} /> : <CreateBtn page={'Transaction'} setFormVisibility={setFormVisibility} />}
        </div>
    );
}
