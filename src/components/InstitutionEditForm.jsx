import React, { useState } from 'react'

export default function InstitutionEditForm({ institution, setFormVisibility }) {
    const [formState, setFormState] = useState(institution);
    console.log(institution);

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        editInstitution(formState);
        setFormVisibility(false);
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

            const response = await fetch(`http://localhost:4000/institutions/${institution.ins_id}`, options);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='edit-form institution-edit-form'>
                <label htmlFor="name">Bank or Institution Name:</label>
                <input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    value={formState.name}
                    placeholder='Enter institution name...'
                    required
                />
                <label htmlFor="logo">Bank or Institution logo:</label>
                <input
                    type="url"
                    name='logo'
                    onChange={handleChange}
                    value={formState.logo}
                    placeholder='Enter logo URL...'
                />
                <button type="submit">Edit Institution</button>
            </form>
        </>
    );
}
