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

export function BarChart({ labels, balanceData }) {
    const options = {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: 'Your Institution Balances',
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
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Balance',
                data: balanceData.map((balance, index) => {
                    return balanceData[index];
                }),
                backgroundColor: balanceData.map((balance, index) => {
                    if (balance > 0) {
                        return 'rgba(5, 186, 35, 1.0)';
                    } else {
                        return 'rgba(230, 57, 70, 1.0)';
                    }
                    // return balanceData[index];
                }),
                // backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return <Bar options={options} data={data} />;
}
