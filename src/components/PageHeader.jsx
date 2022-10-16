import React from 'react';
import { BarChartBalance } from './charts/BarChartBalance';
import CreateBtn from './CreateBtn';

export default function PageHeader({ page, setFormVisibility, institutions, accounts, transactions }) {
    function sumBalances(resource) {
        let sum = 0;
        for (let i = 0; i < resource.length; i++) {
            if (resource[i].current_balance) {
                sum += parseFloat(resource[i].current_balance);
            }
        }

        return sum.toFixed(2);
    }
    
    if (institutions) {
        return (
            <div className="header page-header">
                <div className="title-section">
                    <h2 className="page-title">{`${page}s`}</h2>
                    <CreateBtn setFormVisibility={setFormVisibility} />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className='left-column'>{`Total ${page}s`}</th>
                            <th className='right-column'>{`Total Balance`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='left-column'>{institutions ? institutions.length : <h2>Loading...</h2>}</td>
                            <td className='right-column'>${sumBalances(institutions)}</td>
                        </tr>
                    </tbody>
                </table>
                <BarChartBalance resource={'Institution'} resourceData={institutions} />
            </div>
        );
    }

    if (accounts) {
        return (
            <div className="page-header">
                <div className="title-section">
                    <h2 className="page-title">{`${page}s`}</h2>
                    <CreateBtn setFormVisibility={setFormVisibility} />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className='left-column'>{`Total ${page}s`}</th>
                            <th className='right-column'>{`Total Balance`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='left-column'>{accounts ? accounts.length : <h2>Loading...</h2>}</td>
                            <td className='right-column'>${sumBalances(accounts)}</td>
                        </tr>
                    </tbody>
                </table>
                <BarChartBalance resource={'Account'} resourceData={accounts} />
            </div>
        );
    }
    
    if (transactions) {
        return (
            <div className="page-header">
                <div className="title-section">
                    <h2 className="page-title">{`${page}s`}</h2>
                    <CreateBtn setFormVisibility={setFormVisibility} />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className='left-column'>{`Total ${page}s`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='left-column'>{transactions ? transactions.length : <h2>Loading...</h2>}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
