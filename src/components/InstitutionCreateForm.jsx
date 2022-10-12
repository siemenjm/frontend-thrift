import React, { useState } from 'react';
import CreateBtn from './CreateBtn';

export default function InstitutionCreateForm() {
    const initialFormState = {
        name: '',
        logo: '',
        currentBalance: null,
        userId: ''
    }
    const [formState, setFormState] = useState(initialFormState);

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formState);
        createInstitution(formState);

        setFormState(initialFormState);
    }

    async function createInstitution(data) {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            const newInstitution = await fetch('http://localhost:4000/institutions', options);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <CreateBtn page={'Institution'} />
            <form onSubmit={handleSubmit} className='create-form institution-create-form'>
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
                {/* REMOVE THIS ONCE AUTH IS ADDED (USE CURRENT USER AS HIDDEN INPUT) */}
                <label htmlFor="userId">User ID:</label>
                <input
                    type="number"
                    name='userId'
                    onChange={handleChange}
                    value={formState.userId}
                    placeholder='Enter user ID...'
                    required
                />
                <button type="submit">Add New Institution</button>
            </form>
        </>
    );
}
