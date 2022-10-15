import React, { useContext, useState } from 'react';
import { UrlContext } from '../context/UrlContext';
import { FaWindowClose } from 'react-icons/fa';

export default function InstitutionCreateForm({ getInstitutions, setFormVisibility }) {
    const { BASE_URL } = useContext(UrlContext);

    const initialFormState = {
        name: '',
        logo: '',
        currentBalance: null,
        userId: ''
    }
    const [formState, setFormState] = useState(initialFormState);

    function handleClick(e) {
        setFormVisibility(false);
    }
    
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

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
            const newInstitution = await fetch(`${BASE_URL}/institutions`, options);

            getInstitutions();

            setFormVisibility(false);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='create-form institution-create-form'>
                <h2>Add an Institution</h2>
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
                {/* REMOVE THIS ONCE AUTH IS ADDED (USE CURRENT USER AS HIDDEN INPUT) */}
                <label htmlFor="userId">
                    <p>User ID:</p>
                    <input
                        type="number"
                        name='userId'
                        onChange={handleChange}
                        value={formState.userId}
                        placeholder='Enter user ID...'
                        required
                    />
                </label>
                <button type="submit">Add New Institution</button>
                <FaWindowClose onClick={handleClick}/>
            </form>
        </>
    );
}
