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

export function BarChart({ incomingData }) {
    function getLabels() {
        const labels = incomingData.map((institution) => {
            return institution.name;
        });

        return labels;
    }

    function getBalanceData() {
        const balanceData = incomingData.map((institution) => {
            return institution.current_balance;
        });

        return balanceData;
    }

    const options = {
        responsive: true,
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
