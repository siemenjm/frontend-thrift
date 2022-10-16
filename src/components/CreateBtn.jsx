import React from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';

export default function CreateBtn({setFormVisibility }) {
    function handleClick() {
        setFormVisibility(true);
    }
    
    return (
        <FaRegPlusSquare onClick={handleClick} className='create-btn' />
    );
}
