import React from 'react';

export default function AccountCard({ account, isDetail, setCurrentAccount}) {
    function handleClick(e) {
        if (!isDetail) {
            setCurrentAccount(account);
        }
    }

    return (
        <div onClick={handleClick} className="card account-card">
            <img src="" alt={`${account.ins_id} logo`} />
            <h2>{account.name} - {account.ins_id}</h2>
            <h2>${account.current_balance}</h2>
        </div>
    );
}
