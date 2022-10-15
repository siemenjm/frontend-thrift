import React, { useContext, useEffect, useState } from 'react';
import { UrlContext } from '../context/UrlContext';
import CreateBtn from '../components/CreateBtn';
import InstitutionCreateForm from '../components/InstitutionCreateForm';
import InstitutionDetails from '../components/InstitutionDetails';
import InstitutionList from '../components/InstitutionList';
import PageHeader from '../components/PageHeader';

export default function InstitutionPage() {
    const { BASE_URL } = useContext(UrlContext);

    const [institutions, setInstitutions] = useState(null);
    const [currentInstitution, setCurrentInstitution] = useState(null);
    const [formVisibility, setFormVisibility] = useState(false);

    async function getInstitutions() {
        try {
            const response = await fetch(`${BASE_URL}/institutions`);
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
            <InstitutionList institutions={institutions} setCurrentInstitution={setCurrentInstitution} />
            {formVisibility ? <InstitutionCreateForm getInstitutions={getInstitutions} setFormVisibility={setFormVisibility} /> : <CreateBtn page={'Institution'} setFormVisibility={setFormVisibility} />}
            {currentInstitution ? <InstitutionDetails institution={currentInstitution} setCurrentInstitution={setCurrentInstitution} getInstitutions={getInstitutions} /> : <></>}
        </>
    );
}
