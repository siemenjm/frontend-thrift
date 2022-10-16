import React, { useContext, useState } from 'react'
import { UrlContext } from '../context/UrlContext';
import { FaWindowClose } from 'react-icons/fa';

export default function InstitutionEditForm({ institution, setCurrentInstitution, setFormVisibility, getInstitutions }) {
    const { BASE_URL } = useContext(UrlContext);
    
    const [formState, setFormState] = useState(institution);

    function handleClick(e) {
        setFormVisibility(false);
    }
    
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await editInstitution(formState);
        setFormVisibility(false);
        setCurrentInstitution(formState);

        await getInstitutions();
    }

    async function editInstitution() {
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            };

            const response = await fetch(`${BASE_URL}/institutions/${institution.ins_id}`, options);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='edit-form institution-edit-form'>
                <h3>Edit Institution</h3>
                <div className="form-inputs">
                    <label htmlFor="name">
                        <p>Bank or Institution Name:</p>
                        <input
                            type='text'
                            name='name'
                            onChange={handleChange}
                            value={formState.name}
                            placeholder='Enter institution name...'
                            required
                        />
                    </label>
                    <label htmlFor="logo">
                        <p>Bank or Institution logo:</p>
                        <input
                            type="url"
                            name='logo'
                            onChange={handleChange}
                            value={formState.logo}
                            placeholder='Enter logo URL...'
                        />
                    </label>
                </div>
                <button type="submit">Edit Institution</button>
                <FaWindowClose onClick={handleClick}/>
            </form>
        </>
    );
}
