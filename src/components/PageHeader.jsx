import React from 'react';

export default function PageHeader({ page, institutions, accounts, transactions }) {
    function loadInstitutionCount() {
        return institutions.length;
    }

    function loadAccountCount() {
        return accounts.length;
    }

    function loadTransactionCount() {
        return transactions.length;
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
                            <td>{institutions ? loadInstitutionCount() : <h2>Loading...</h2>}</td>
                            <td>$XX,XXX.XX</td>
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
                            <td>{accounts ? loadAccountCount() : <h2>Loading...</h2>}</td>
                            <td>$XX,XXX.XX</td>
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
                            <td>{transactions ? loadTransactionCount() : <h2>Loading...</h2>}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}