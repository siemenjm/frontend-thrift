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

export function BarChart({ resource, resourceData }) {
    function getLabels() {
        const labels = resourceData.map((thisResource) => {
            return thisResource.name;
        });

        return labels;
    }

    function getBalanceData() {
        const balanceData = resourceData.map((thisResource) => {
            return thisResource.current_balance;
        });

        return balanceData;
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
                text: `${resource} Balances`,
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

    const labels = getLabels();
    const balanceData = getBalanceData();

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
