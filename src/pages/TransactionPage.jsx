import React, { useContext, useEffect, useState } from 'react';
import CreateBtn from '../components/CreateBtn';
import TransactionCreateForm from '../components/TransactionCreateForm';
import TransactionDetails from '../components/TransactionDetails';
import TransactionList from '../components/TransactionList';
import PageHeader from '../components/PageHeader';
import { UrlContext } from '../context/UrlContext';

export default function TransactionPage() {
    const { BASE_URL } = useContext(UrlContext);

    const [transactions, setTransactions] = useState(null);
    const [currentTransaction, setCurrentTransaction] = useState(null);
    const [formVisibility, setFormVisibility] = useState(false);

    async function getTransactions() {
        try {
            const response = await fetch(`${BASE_URL}/transactions`);
            const data = await response.json();

            setTransactions(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <>
            <div className="center-content">
                <PageHeader page={'Transaction'} setFormVisibility={setFormVisibility} transactions={transactions}/>
                <TransactionList transactions={transactions} setCurrentTransaction={setCurrentTransaction} />
                {formVisibility ? <TransactionCreateForm getTransactions={getTransactions} setFormVisibility={setFormVisibility} /> : <CreateBtn setFormVisibility={setFormVisibility} />}     
            </div>
            <div className="right-content">
                {currentTransaction ? <TransactionDetails transaction={currentTransaction} setCurrentTransaction={setCurrentTransaction} getTransactions={getTransactions} /> : <></>}
            </div>
        </>
    );
}
