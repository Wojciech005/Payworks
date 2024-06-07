'use client'

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["", "Sales", "Expenses", "Profit"],
  ["03.2024", 1000, 400, 200],
  ["04.2024", 1170, 460, 250],
  ["05.2024", 660, 1120, 300],
  ["06.2025", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Payworks - Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2022-2024",
  },
  colors: ['#1b493d', 'fbbf24', '#6c1d38'],
  padding: ['20px']
};

export default function DashboardChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
