import React from 'react';
import TransactionDetailList from './TransactionDetailList';

export default function TransactionDetails({ transaction }) {
    return (
        <div className="details transaction-details">
            <h2 className="details-title">Transaction Details</h2>
            <TransactionDetailList transaction={transaction}/>
        </div>
    );
}
