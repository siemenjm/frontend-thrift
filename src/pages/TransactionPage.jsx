import React, { useEffect, useState } from 'react';
import TransactionDetails from '../components/TransactionDetails';
import TransactionList from '../components/TransactionList';
import PageHeader from '../components/PageHeader';

export default function TransactionPage() {
    const [transactions, setTransactions] = useState(null);

    async function getTransactions() {
        try {
            const response = await fetch('http://localhost:4000/transactions');
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
            <PageHeader page={'Transaction'} transactions={transactions}/>
            <TransactionList transactions={transactions}/>
            <TransactionDetails />
        </>
    );
}
