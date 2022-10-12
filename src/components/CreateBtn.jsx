import React from 'react';

export default function CreateBtn({ page }) {
    return (
        <div className="create-btn-container">
                <button className='create-btn'>Add New {page}</button>
        </div>
    );
}
