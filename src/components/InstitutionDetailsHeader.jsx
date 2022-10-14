import React from 'react';

export default function InstitutionDetailsHeader({ institution }) {
    function sumBalances(resource) {
        let sum = 0;
        for (let i = 0; i < resource.length; i++) {
            if (resource[i].current_balance) {
                sum += parseFloat(resource[i].current_balance);
            }
        }

        return sum.toFixed(2);
    }
    
    return (
        <div className='header details-header'>
            <h2 className="details-title">{`${institution.name} Details`}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Total Accounts</th>
                        <th>Total Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
