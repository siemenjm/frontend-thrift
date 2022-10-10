import React from 'react';
import InstitutionDetails from '../components/InstitutionDetails';
import InstitutionList from '../components/InstitutionList';
import PageHeader from '../components/PageHeader';

export default function InstitutionPage() {
    return (
        <>
            <PageHeader page={'Institution'}/>
            <InstitutionList />
            <InstitutionDetails />
        </>
    );
}
