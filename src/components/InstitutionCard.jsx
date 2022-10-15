import React from 'react';
import '../styles/Card.css';

export default function InstitutionCard({ institution, setCurrentInstitution }) {
    function handleClick(e) {
        setCurrentInstitution(institution);
    }

    return (
        <div onClick={handleClick} className="card institution-card">
            <img src={institution.logo} alt={`${institution.name} logo`} />
            <h4 className='institution-name'>{institution.name}</h4>
            <h4 className='institution-balance'>${institution.current_balance || "0.00"}</h4>
        </div>
    );
}
