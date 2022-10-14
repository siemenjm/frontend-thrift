import React from 'react'
import TransactionDetail from './TransactionDetail';

export default function TransactionDetailList({ transaction }) {
    const transactionKeys = Object.keys(transaction);
    transactionKeys.shift();
    transactionKeys.pop();

    const allDetails = transactionKeys.map((transKey) => {
        return <TransactionDetail transKey={transKey} transaction={transaction} key={`${transaction.trans_id}-${transKey}`} />
    });

    return (
        <div className='transaction-detail-list'>
            {allDetails}
        </div>
    );
}
