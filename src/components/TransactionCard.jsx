import React, { useContext, useEffect, useState } from 'react';
import { UrlContext } from '../context/UrlContext';

export default function TransactionCard({ transaction, isDetail, setCurrentTransaction }) {
    const { BASE_URL } = useContext(UrlContext);
    
    const [institution, setInsitution] = useState(null);
    const [account, setAccount] = useState(null);

    let detailStyle;
    if (isDetail) {
        detailStyle = 'detail-card';
    } else {
        detailStyle = '';
    }

    let backgroundStyle;
    if (transaction.trans_type === 'Expense') {
        backgroundStyle = 'expense-card';
    } else if (transaction.trans_type === 'Income') {
        backgroundStyle = 'income-card';
    } else {
        backgroundStyle = 'transfer-card';
    }
    
    function formatDate(date) {
        const tIndex = date.indexOf('T');
        const simpleDate = date.slice(0, tIndex);
        const dateArray = simpleDate.split('-');
        
        let reverseArray = [];
        reverseArray.push(dateArray[1]);
        reverseArray.push(dateArray[2]);
        reverseArray.push(dateArray[0]);
        
        const formattedDate = reverseArray.join('/');
        
        return formattedDate;
    }
    
    function handleClick(e) {
        setCurrentTransaction(transaction);
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
        <div onClick={handleClick} className={`card transaction-card ${backgroundStyle} ${detailStyle}`}>
            <img src={institution.logo} alt={`${institution.name} logo`} />
            <div className="transaction-details-container">
                <h4>{transaction.description}</h4>
                <p>{transaction.trans_type} - {transaction.category} - {formatDate(transaction.date)}</p>
            </div>
            <h4 className='transaction-balance'>${transaction.amount}</h4>
        </div>
    );
}
