import React, { useState, useEffect } from 'react';

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
            return (
                <div className="institution" key={institution.ins_id}>
                    <h2>{institution.name}</h2>
                </div>
            );
        });

        return allInstitutions;
    }

    return (
        <div className="list institution-list">
            {institutions ? loaded() : <h2>Loading Institution list...</h2>}
        </div>
    );
}
