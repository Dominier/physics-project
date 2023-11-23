"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const experimentData = [
  { trial: "1", time: 2.41 },
  { trial: "2", time: 2.88 },
  { trial: "3", time: 2.56 },
  { trial: "4", time: 2.53 },
  { trial: "5", time: 2.36 },
  { trial: "6", time: 2.81 },
];

function LineChart() {
  const data = {
    labels: experimentData.map((data) => data.trial),
    datasets: [
      {
        label: "Revenue",
        data: experimentData.map((data) => data.time),
        borderColor: "#cb0c9f",
        borderWidth: 3,
        pointBorderColor: "#cb0c9f",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#f797e1");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Sales",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
        min: 0,
      },
      x: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Month",
          padding: {
            top: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-10">
        Data Visualizer + Calculator
      </h1>
      <div
        className="w-[900px] h-[400px] p-[20px] cursor-pointer border border-black ml-auto mr-auto"
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default LineChart;