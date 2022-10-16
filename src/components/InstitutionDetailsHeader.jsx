import React, { useContext, useState } from 'react';
import { FaEdit, FaTrash, FaWindowClose } from 'react-icons/fa';
import { UrlContext } from '../context/UrlContext';
import InstitutionEditForm from './InstitutionEditForm';

export default function InstitutionDetailsHeader({ institution, setCurrentInstitution, getInstitutions, accounts }) {
    const { BASE_URL } = useContext(UrlContext);
    
    const [formVisibility, setFormVisibility] = useState(false);
    
    function handleCloseClick(e) {
        setCurrentInstitution(null);
    }
    
    function handleClick(e) {
        if (formVisibility) {
            setFormVisibility(false);
        } else {
            setFormVisibility(true);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await deleteInstitution();
        setCurrentInstitution(null);
        await getInstitutions();
    }

    async function deleteInstitution() {
        try {
            const options = {
                method: 'DELETE'
            };

            const response = await fetch(`${BASE_URL}/institutions/${institution.ins_id}`, options);

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
            <div className="title-section">
                <h2 className="details-title">{`${institution.name} Details`}</h2>
                <FaWindowClose onClick={handleCloseClick}/>
            </div>
            <div className="pen-trash-container">
                <div className="pen-container">
                    <p>Edit Insitution</p>
                    <button onClick={handleClick} className='edit-btn institution-edit-btn'>
                        <FaEdit />
                    </button>
                </div>
                <div className="trash-container">
                    <p>Delete Institution</p>
                    <form onSubmit={handleSubmit} className='delete-form institution-delete-form'>
                        <button type="submit">
                            <FaTrash />
                        </button>
                    </form>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className='left-column'>Total Accounts</th>
                        <th className='right-column'>Total Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='left-column'>{accounts ? accounts.length : <h2>Loading...</h2>}</td>
                        <td className='right-column'>${accounts ? sumBalances(accounts) : <h2>Loading...</h2>}</td>
                    </tr>
                </tbody>
            </table>
            {formVisibility ? <InstitutionEditForm institution={institution} setCurrentInstitution={setCurrentInstitution} setFormVisibility={setFormVisibility} getInstitutions={getInstitutions} /> : <></>}
        </div>
    );
}
