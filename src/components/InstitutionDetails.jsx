import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { UrlContext } from '../context/UrlContext';
import AccountCreateForm from './AccountCreateForm';
import AccountList from './AccountList';
import CreateBtn from './CreateBtn';
import InstitutionDetailsHeader from './InstitutionDetailsHeader';

export default function InstitutionDetails({ institution, setCurrentInstitution, getInstitutions }) {
    const { BASE_URL } = useContext(UrlContext);

    const [accounts, setAccounts] = useState(null);
    const [formVisibility, setFormVisibility] = useState(false);

    async function getAccounts() {
        try {
            const response = await fetch(`${BASE_URL}/institutions/${institution.ins_id}`);
            const data = await response.json();

            setAccounts(data.accounts);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getAccounts();
    }, [institution]);

    return (
        <div className="details institution-details">
            <InstitutionDetailsHeader institution={institution} setCurrentInstitution={setCurrentInstitution} getInstitutions={getInstitutions} accounts={accounts} />
            <AccountList accounts={accounts} isDetail={true}/>
            {formVisibility ? <AccountCreateForm getAccounts={getAccounts} setFormVisibility={setFormVisibility} /> : <CreateBtn page={'Account'} setFormVisibility={setFormVisibility} />}
        </div>
    );
}
