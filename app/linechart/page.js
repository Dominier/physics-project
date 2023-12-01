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
        label: "Car A",
        data: experimentData.map((data) => data.time),
        borderColor: "#cb0c9f",
        borderWidth: 3,
        pointBorderColor: "#cb0c9f",
        pointBorderWidth: 3,
        tension: 0,
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
          text: "Time (s)",
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
          text: "Trial",
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

    var generatedSummary = [
        { summary: "The provided data represents the time it takes for Car A to travel down a ramp in six different trials. Each trial is conducted independently, and the time (in seconds) for the car to complete its descent is recorded. The data is organized in a table, with each row corresponding to a specific trial, and each column representing a different run of the experiment. The trials are numbered from 1 to 6."},
    ]
  return (
    <div>
        <h1 className="font-bold text-3xl text-center mt-10">
            Data Visualizer & Summary + Calculator
        </h1>

        {/* Chart */}
        <div
            className="w-[900px] h-[400px] p-[20px] cursor-pointer border border-black ml-auto mr-auto mt-10"
        >
        <Line data={data} options={options}></Line>
        </div>

        <div className="flex col-auto p-5">
            <div className="border w-[45%]">
                <table className="table-fixed border-collapse w-[80%] m-[20px] text-center">
                    <thead>
                      <tr className="border border-black">
                          <td className="border border-black">Trial</td>
                          <td className="border border-black">1</td>
                          <td className="border border-black">2</td>
                          <td className="border border-black">3</td>
                          <td className="border border-black">4</td>
                          <td className="border border-black">5</td>
                          <td className="border border-black">6</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-black">
                          <td className="border border-black">Time (s)</td>
                          <td className="border border-black">2.5</td>
                          <td className="border border-black">3.6</td>
                          <td className="border border-black">2.1</td>
                          <td className="border border-black">2.2</td>
                          <td className="border border-black">2.36</td>
                          <td className="border border-black">2.81</td>
                      </tr>
                  </tbody>
                </table>
                <button className="border bg-green-700 text-white w-[70%]">Generate</button>
            </div>

            <div className="border w-[45%] ml-auto">
                <h3 className="font-bold">Generated Summary</h3>
                <p>{generatedSummary[0].summary}</p>
            </div>

        </div>
        <div className="text-center">
            <h3 className="font-bold">Calculations</h3>
            <p>Velocity:</p>
            <p>Acceleration:</p>
        </div>

    </div>
  );
}

export default LineChart;