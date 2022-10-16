import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function BarChartTransactionType({ resourceData }) {
    
    
    // function getLabels() {
    //     const labels = resourceData.map((thisResource) => {
    //         return thisResource.name;
    //     });

    //     return labels;
    // }

    function sumAmounts() {
        let summedExpenses = 0;
        let summedIncome = 0;
        let summedTransfers = 0;
        resourceData.forEach((transaction) => {
            if (transaction.trans_type === 'Expense') {
                summedExpenses += parseFloat(transaction.amount);
            } else if (transaction.trans_type === 'Income') {
                summedIncome += parseFloat(transaction.amount);
            } else if (transaction.trans_type === 'Transfer') {
                summedTransfers += parseFloat(transaction.amount);
            }
        });

        return [summedExpenses, summedIncome, summedTransfers];
    }

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                font: {
                    family: "'Poppins', sans-serif",
                    size: 1.6 * 16,
                },
                color: '#1D3557',
                text: `Transactions By Type`,
            },
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        family: "'Poppins', sans-serif",
                        size: 12,
                        weight: 'bold',
                    },
                    color: '#1D3557',
                },
            },
        },
    };

    const labels = ['Expense', 'Income', 'Transfer'];
    const amountData = sumAmounts();

    const data = {
        labels,
        datasets: [
            {
                label: 'Amount',
                data: amountData.map((amount, index) => {
                    return amountData[index];
                }),
                backgroundColor: amountData.map((amount, index) => {
                    if (index === 0) {
                        return 'rgba(230, 57, 70, 1.0)';
                    } else if (index === 1) {
                        return 'rgba(5, 186, 35, 1.0)';
                    } else if (index === 2) {
                        return 'rgba(35, 5, 186, 1.0)';
                    }
                }),
            },
        ],
    };

    return (
        <div className="chart-container">
            <Bar options={options} data={data} />
        </div>
    );
}
