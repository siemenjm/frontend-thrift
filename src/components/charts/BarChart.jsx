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
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['Ally Bank', 'Chase Bank'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Balance',
            data: labels.map(() => faker.datatype.number({ min: -10000, max: 10000})),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export function BarChart() {
    return <Bar options={options} data={data} />;
}
