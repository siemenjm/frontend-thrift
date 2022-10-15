import React from 'react';
import '../styles/Card.css';

export default function InstitutionCard({ institution, setCurrentInstitution }) {
    function handleClick(e) {
        setCurrentInstitution(institution);
    }

    return (
        <div onClick={handleClick} className="card institution-card">
            <img src="" alt={`${institution.name} logo`} />
            <h2>{institution.name}</h2>
            <h2>${institution.current_balance || "0.00"}</h2>
        </div>
    );
}
