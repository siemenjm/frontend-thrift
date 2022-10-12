import React, { useEffect, useState } from 'react';
import InstitutionCreateForm from '../components/InstitutionCreateForm';
import InstitutionDetails from '../components/InstitutionDetails';
import InstitutionList from '../components/InstitutionList';
import PageHeader from '../components/PageHeader';

export default function InstitutionPage() {
    const [institutions, setInstitutions] = useState(null);

    async function getInstitutions() {
        try {
            const response = await fetch('http://localhost:4000/institutions');
            const data = await response.json();

            setInstitutions(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getInstitutions();
    }, []);

    return (
        <>
            <PageHeader page={'Institution'} institutions={institutions}/>
            <InstitutionList institutions={institutions}/>
            <InstitutionCreateForm />
            <InstitutionDetails />
        </>
    );
}
