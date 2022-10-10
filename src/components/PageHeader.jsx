import React from 'react';

export default function PageHeader({ page }) {
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
                        <td>XX</td>
                        <td>$XX,XXX.XX</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
