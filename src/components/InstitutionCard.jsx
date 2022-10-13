import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function InstitutionCard({ institution, setCurrentInstitution }) {
    function handleClick(e) {
        setCurrentInstitution(institution);
    }

    function handleSubmit() {
        deleteInstitution();
    }

    async function deleteInstitution() {
        try {
            const options = {
                method: 'DELETE'
            };

            const response = await fetch(`http://localhost:4000/institutions/${institution.ins_id}`, options);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div onClick={handleClick} className="card institution-card">
            <img src="" alt={`${institution.name} logo`} />
            <h2>{institution.name}</h2>
            <h2>${institution.current_balance || "0.00"}</h2>
            <form onSubmit={handleSubmit} className='delete-form institution-delete-form'>
                <button type="submit">
                    <FaTrash />
                </button>
            </form>
        </div>
    );
}
