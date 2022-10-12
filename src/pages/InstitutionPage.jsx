import React, { useEffect, useState } from 'react';
import CreateBtn from '../components/CreateBtn';
import InstitutionCreateForm from '../components/InstitutionCreateForm';
import InstitutionDetails from '../components/InstitutionDetails';
import InstitutionList from '../components/InstitutionList';
import PageHeader from '../components/PageHeader';

export default function InstitutionPage() {
    const [institutions, setInstitutions] = useState(null);
    const [formVisibility, setFormVisibility] = useState(false);

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
            {formVisibility ? <InstitutionCreateForm getInstitutions={getInstitutions} setFormVisibility={setFormVisibility} /> : <CreateBtn page={'Institution'} setFormVisibility={setFormVisibility} />}
            <InstitutionDetails />
        </>
    );
}
