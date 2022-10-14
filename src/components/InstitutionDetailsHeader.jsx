import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import InstitutionEditForm from './InstitutionEditForm';

export default function InstitutionDetailsHeader({ institution, setCurrentInstitution, institutions, setInstitutions, getInstitutions, accounts }) {
    const [formVisibility, setFormVisibility] = useState(false);

    function handleClick(e) {
        if (formVisibility) {
            setFormVisibility(false);
        } else {
            setFormVisibility(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        let prevInstitutions = institutions;
        const index = prevInstitutions.indexOf(institution);
        prevInstitutions.splice(index, 1)

        deleteInstitution();
        setCurrentInstitution(null);
        setInstitutions(prevInstitutions);
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
    
    function sumBalances(resource) {
        let sum = 0;
        for (let i = 0; i < resource.length; i++) {
            if (resource[i].current_balance) {
                sum += parseFloat(resource[i].current_balance);
            }
        }

        return sum.toFixed(2);
    }
    
    return (
        <div className='header details-header institution-details-header'>
            <h2 className="details-title">{`${institution.name} Details`}</h2>
            <button onClick={handleClick} className='edit-btn institution-edit-btn'>
                <FaEdit />
            </button>
            <form onSubmit={handleSubmit} className='delete-form institution-delete-form'>
                <button type="submit">
                    <FaTrash />
                </button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Total Accounts</th>
                        <th>Total Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{accounts ? accounts.length : <h2>Loading...</h2>}</td>
                        <td>${accounts ? sumBalances(accounts) : <h2>Loading...</h2>}</td>
                    </tr>
                </tbody>
            </table>
            {formVisibility ? <InstitutionEditForm institution={institution} setCurrentInstitution={setCurrentInstitution} setFormVisibility={setFormVisibility} getInstitutions={getInstitutions} /> : <></>}
        </div>
    );
}
