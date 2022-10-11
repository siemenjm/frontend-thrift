import React from 'react';

export default function PageHeader({ page, institutions }) {
    function loadInstitutionCount() {
        return institutions.length;
    }

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
