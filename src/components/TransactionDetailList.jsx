import React from 'react'

export default function TransactionDetailList({ transaction }) {
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
                <p>{transaction.credited_account_id}</p>
            </div>
            <div className='transaction-detail'>
                <p>Debited Account</p>
                <p>{transaction.debited_account_id}</p>
            </div>
        </div>
    );
}
