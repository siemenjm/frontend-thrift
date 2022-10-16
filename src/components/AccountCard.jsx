import React, { useContext, useEffect, useState } from 'react';
import { UrlContext } from '../context/UrlContext';

export default function AccountCard({ account, isDetail, setCurrentAccount}) {
    const { BASE_URL } = useContext(UrlContext);
    
    const [institution, setInsitution] = useState(null);
    
    let style;
    if (isDetail) {
        style = 'detail-card';
    } else {
        style = '';
    }
    
    function handleClick(e) {
        if (!isDetail) {
            setCurrentAccount(account);
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
        getInstitution();
    }, []);

    if (!institution) {
        return <h2>Loading data...</h2>
    }

    return (
        <div onClick={handleClick} className={`card account-card ${style}`}>
            <img src={institution.logo} alt={`${institution.name} logo`} />
            <div className="account-details-container">
                <h4>{account.name}</h4>
                <p>{institution.name}</p>
            </div>
            <h4 className='account-balance'>${account.current_balance}</h4>
        </div>
    );
}
