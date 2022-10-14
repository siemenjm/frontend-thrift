import React from 'react'
import TransactionDetail from './TransactionDetail';

export default function TransactionDetailList({ transaction }) {
    const transactionKeys = Object.keys(transaction);
    transactionKeys.shift();
    transactionKeys.pop();
    console.log(transactionKeys) // pass these keys to TransactionDetail

    return (
        <div className='transaction-detail-list'>
            <TransactionDetail />
        </div>
    );
}
