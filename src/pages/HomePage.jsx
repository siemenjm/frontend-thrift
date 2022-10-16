import React, { useContext, useEffect, useState } from 'react';
import { BarChart } from '../components/charts/BarChart';
import { UrlContext } from '../context/UrlContext';

export default function HomePage() {
    const { BASE_URL } = useContext(UrlContext);

    const [instiutionData, setInstutionData] = useState(null);

    function getLabels() {
        const labels = instiutionData.map((institution) => {
            return institution.name;
        });

        return labels;
    }

    function getBalanceData() {
        const balanceData = instiutionData.map((institution) => {
            return institution.current_balance;
        });

        return balanceData;
    }
    
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
            <div>HomePage</div>
            {instiutionData ? <BarChart labels={getLabels()} balanceData={getBalanceData()} /> : <h2>Loading chart...</h2>}
        </>
    );
}
