import React from 'react';
import '../styles/Card.css';
import '../styles/DetailsHeader.css';
import '../styles/Form.css';
import '../styles/List.css';
import '../styles/Main.css';
import '../styles/PageHeader.css';
import '../styles/TransactionDetailList.css';
import { Route, Routes } from 'react-router-dom';
import AccountPage from '../pages/AccountPage';
import InstitutionPage from '../pages/InstitutionPage';
import TransactionPage from '../pages/TransactionPage';

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path='/institutions/' element={<InstitutionPage />} />
                <Route path='/accounts/' element={<AccountPage />} />
                <Route path='/transactions/' element={<TransactionPage />} />
            </Routes>
        </main>
    );
}
