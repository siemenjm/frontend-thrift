import React, { useContext, useEffect, useState } from 'react';
import { BarChart } from '../components/charts/BarChart';
import { UrlContext } from '../context/UrlContext';

export default function HomePage() {
    const { BASE_URL } = useContext(UrlContext);

    const [instiutionData, setInstutionData] = useState(null);
    
    async function getInstitutionData() {
        try {
            const response = await fetch(`${BASE_URL}/institutions`);
            const data = await response.json();

            setInstutionData(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getInstitutionData();
    }, []);

    return (
        <>
            <div className='home-page'>
                <div className="charts-container">
                    {instiutionData ? <BarChart incomingData={instiutionData} /> : <h2>Loading chart...</h2>}
                    {instiutionData ? <BarChart incomingData={instiutionData} /> : <h2>Loading chart...</h2>}
                    {instiutionData ? <BarChart incomingData={instiutionData} /> : <h2>Loading chart...</h2>}
                </div>
            </div>
        </>
    );
}
