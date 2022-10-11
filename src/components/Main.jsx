import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountPage from '../pages/AccountPage';
import InstitutionPage from '../pages/InstitutionPage';
import TransactionPage from '../pages/TransactionPage';

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path='/institutions/' element={<InstitutionPage />} >
                    {/* <Route path='new' element={InstitutionCreate} /> */}
                </Route>
                <Route path='/accounts/' element={<AccountPage />} />
                <Route path='/transactions/' element={<TransactionPage />} />
            </Routes>
        </main>
    );
}
