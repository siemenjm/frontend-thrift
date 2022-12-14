import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChartBalance } from '../components/charts/BarChartBalance';
import { BarChartTransactionType } from '../components/charts/BarChartTransactionType';
import { UrlContext } from '../context/UrlContext';

export default function HomePage() {
    const { BASE_URL } = useContext(UrlContext);

    const [institutionData, setInstitutionData] = useState(null);
    const [accountData, setAccountData] = useState(null);
    const [transactionData, setTransactionData] = useState(null);

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

            setInstitutionData(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function getAccountData() {
        try {
            const response = await fetch(`${BASE_URL}/accounts`);
            const data = await response.json();

            setAccountData(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function getTransactionData() {
        try {
            const response = await fetch(`${BASE_URL}/transactions`);
            const data = await response.json();

            setTransactionData(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getInstitutionData();
        getAccountData();
        getTransactionData();
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
                        {institutionData ? <BarChartBalance resource={'Institution'} resourceData={institutionData} /> : <h2>Loading chart...</h2>}
                    </Link>
                    <Link to='/accounts'>
                        {accountData ? <BarChartBalance resource={'Account'} resourceData={accountData} /> : <h2>Loading chart...</h2>}
                    </Link>
                    <Link to='/transactions'>
                        {transactionData ? <BarChartTransactionType resourceData={transactionData}/> : <h2>Loading chart...</h2>}
                    </Link>
                </div>
            </div>
        </>
    );
}
