import React from 'react';

export default function InstitutionCard({ institution }) {
    return (
        <div className="card institution-card">
            <img src="" alt={`${institution.name} logo`} />
            <h2>{institution.name}</h2>
            <h2>${institution.current_balance}</h2>
        </div>
    );
}
