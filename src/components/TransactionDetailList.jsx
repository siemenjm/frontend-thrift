import React, { useContext, useEffect, useState } from 'react'
import { UrlContext } from '../context/UrlContext';

export default function TransactionDetailList({ transaction }) {
    const { BASE_URL } = useContext(UrlContext);

    const [creditedAccount, setCreditedAccount] = useState(null);
    const [debitedAccount, setDebitedAccount] = useState(null);

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

    async function getCreditedAccount() {
        try {
            const response = await fetch(`${BASE_URL}/accounts/${transaction.credited_account_id}`);
            const data = await response.json();

            setCreditedAccount(data.account);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function getDebitedAccount() {
        try {
            const response = await fetch(`${BASE_URL}/accounts/${transaction.debited_account_id}`);
            const data = await response.json();

            setDebitedAccount(data.account);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        if (transaction.credited_account_id) {
            getCreditedAccount();
        }

        if (transaction.debited_account_id) {
            getDebitedAccount();
        }
    }, []);
    
    return (
        <div className='transaction-detail-list'>
            <div className='transaction-detail'>
                <p>Description</p>
                <p>{transaction.description}</p>
            </div>
            <div className='transaction-detail'>
                <p>Date</p>
                <p>{formatDate(transaction.date)}</p>
            </div>
            <div className='transaction-detail'>
                <p>Amount</p>
                <p>${transaction.amount}</p>
            </div>
            <div className='transaction-detail'>
                <p>Type</p>
                <p>{transaction.trans_type}</p>
            </div>
            <div className='transaction-detail'>
                <p>Category</p>
                <p>{transaction.category}</p>
            </div>
            <div className='transaction-detail'>
                <p>Sub-category</p>
                <p>{transaction.sub_category}</p>
            </div>
            <div className='transaction-detail'>
                <p>Credited Account</p>
                <p>{creditedAccount ? creditedAccount.name : ''}</p>
            </div>
            <div className='transaction-detail'>
                <p>Debited Account</p>
                <p>{debitedAccount ? debitedAccount.name : ''}</p>
            </div>
        </div>
    );
}
