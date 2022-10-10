import React, { useState, useEffect } from 'react';
import InstitutionCard from './InstitutionCard';

export default function InstitutionList() {
    const [institutions, setInstitutions] = useState(null);

    async function getInstitutions() {
        try {
            const response = await fetch('http://localhost:4000/institutions');
            const data = await response.json();

            setInstitutions(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getInstitutions();
    }, []);

    function loaded() {
        const allInstitutions = institutions.map((institution) => {
            return <InstitutionCard institution={institution} key={institution.ins_id} />;
        });

        return allInstitutions;
    }

    return (
        <div className="list institution-list">
            {institutions ? loaded() : <h2>Loading Institution list...</h2>}
        </div>
    );
}
