import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
);

export default function DoughnutChart({ resource, resourceData}) {
    function getLabels() {
        const labels = resourceData.map((thisResource) => {
            return thisResource.trans_type;
        });

        return labels;
    }

    function getAmountData() {
        const balanceData = resourceData.map((thisResource) => {
            return thisResource.amount;
        });

        return balanceData;
    }

    const labels = getLabels();
    const amountData = getBalanceData();

    const data = {
        labels,
        datasets: [
            {
                label: '',
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
}