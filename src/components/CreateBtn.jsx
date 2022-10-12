import React from 'react';

export default function CreateBtn({ page, setFormVisibility }) {
    function handleClick() {
        setFormVisibility(true);
    }
    
    return (
        <div className="create-btn-container">
                <button onClick={handleClick} className='create-btn'>Add New {page}</button>
        </div>
    );
}
