import React from 'react';

export default function InstitutionCard({ institution }) {
    return (
        <div className="card institution-card">
            <img src="" alt={`${institution.name} logo`} />
            <h2>{institution.name}</h2>
            <h2>$XX,XXX.XX</h2>
        </div>
    );
}
