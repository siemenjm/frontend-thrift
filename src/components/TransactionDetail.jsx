import React from 'react'

export default function TransactionDetail({ transKey, transaction }) {
    console.log(transaction)
    return (
        <div className='transaction-detail'>
            <p>{transKey}</p>
            <p>{transaction[transKey]}</p>
        </div>
    )
}
