import React from 'react';

export default function PageHeader({ page, institutions, accounts, transactions }) {
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
            <div className="page-header">
                <h2 className="page-title">{`${page}s`}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>{`Total ${page}s`}</th>
                            <th>{`Total Balance`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{institutions ? institutions.length : <h2>Loading...</h2>}</td>
                            <td>${sumBalances(institutions)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    if (accounts) {
        return (
            <div className="page-header">
                <h2 className="page-title">{`${page}s`}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>{`Total ${page}s`}</th>
                            <th>{`Total Balance`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{accounts ? accounts.length : <h2>Loading...</h2>}</td>
                            <td>${sumBalances(accounts)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    
    if (transactions) {
        return (
            <div className="page-header">
                <h2 className="page-title">{`${page}s`}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>{`Total ${page}s`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{transactions ? transactions.length : <h2>Loading...</h2>}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
