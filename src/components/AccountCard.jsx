import React from 'react';

export default function AccountCard({ account }) {
    return (
        <div className="card account-card">
            <img src="" alt={`${account.ins_id} logo`} />
            <h2>{account.name} - {account.ins_id}</h2>
            <h2>{account.balance_current}</h2>
        </div>
    );
}
