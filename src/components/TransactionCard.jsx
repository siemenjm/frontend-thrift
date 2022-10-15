import React, { useContext, useEffect, useState } from 'react';
import { UrlContext } from '../context/UrlContext';

export default function TransactionCard({ transaction, setCurrentTransaction }) {
    const { BASE_URL } = useContext(UrlContext);
    
    const [institution, setInsitution] = useState(null);
    const [account, setAccount] = useState(null);
    
    function handleClick(e) {
        setCurrentTransaction(transaction);
    }

    function formatDate(date) {
        const tIndex = date.indexOf('T');
        const formattedDate = date.slice(0, tIndex);

        return formattedDate;
    }

    async function getAccount() {
        try {
            const accountId = transaction.credited_account_id || transaction.debited_account_id;

            const response = await fetch(`${BASE_URL}/accounts/${accountId}`);
            const data = await response.json();

            setAccount(data.account);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function getInstitution() {
        try {
            const response = await fetch(`${BASE_URL}/institutions/${account.ins_id}`);
            const data = await response.json();

            setInsitution(data.institution);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getAccount();
    }, []);

    if (!account) {
        return <h2>Loading data...</h2>
    }
    
    if (!institution) {
        getInstitution();
        return <h2>Loading data...</h2>
    }

    return (
        <div onClick={handleClick} className="card transaction-card">
            <img src={institution.logo} alt={`${institution.name} logo`} />
            <div className="transaction-details-container">
                <h4>{transaction.description}</h4>
                <h4>{transaction.category} - {formatDate(transaction.date)}</h4>
            </div>
            <h4>${transaction.amount}</h4>
        </div>
    );
}
