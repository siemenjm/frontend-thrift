import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart } from '../components/charts/BarChart';
import { UrlContext } from '../context/UrlContext';

export default function HomePage() {
    const { BASE_URL } = useContext(UrlContext);

    const [institutionData, setInstutionData] = useState(null);

    function sumBalances(resource) {
        let sum = 0;
        for (let i = 0; i < resource.length; i++) {
            if (resource[i].current_balance) {
                sum += parseFloat(resource[i].current_balance);
            }
        }

        return sum.toFixed(2);
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
            <div className='home-page'>
                <div className="header page-header home-page-header">
                    <div className='home-page-title-section'>
                        <h1>Thrift</h1>
                        <h2>Your Financial Summary</h2>
                    </div>
                    <table className='home-page-table'>
                        <thead>
                            <tr>
                                <th className='right-column'>Net Worth</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='right-column'>{institutionData ? `$${sumBalances(institutionData)}` : <h2>Loading...</h2>}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="charts-container">
                    <Link to='/institutions'>
                        {institutionData ? <BarChart incomingData={institutionData} /> : <h2>Loading chart...</h2>}
                    </Link>
                    {institutionData ? <BarChart incomingData={institutionData} /> : <h2>Loading chart...</h2>}
                    {institutionData ? <BarChart incomingData={institutionData} /> : <h2>Loading chart...</h2>}
                </div>
            </div>
        </>
    );
}
