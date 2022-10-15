import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';

export default function CreateBtn({setFormVisibility }) {
    function handleClick() {
        setFormVisibility(true);
    }
    
    return (
        <FaPlusSquare onClick={handleClick} className='create-btn' />
    );
}
