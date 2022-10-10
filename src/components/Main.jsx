import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InstitutionPage from '../pages/InstitutionPage';

export default function Main() {
    return (
        <div className="main">
            <Routes>
                <Route path='/institutions' element={<InstitutionPage />} />
            </Routes>
        </div>
    );
}
