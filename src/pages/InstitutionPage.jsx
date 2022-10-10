import React from 'react';
import InstitutionDetails from '../components/InstitutionDetails';
import InstitutionList from '../components/InstitutionList';

export default function InstitutionPage() {
    return (
        <>
            <InstitutionList />
            <InstitutionDetails />
        </>
    );
}
