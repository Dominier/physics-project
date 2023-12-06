"use client";

import { Line } from "react-chartjs-2";
import { useState } from "react";

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

import Calculations from "@/components/calculations";
import DisplayParse from "@/components/displayParse";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

function LineChart() {
   /* TABLE INPUT CODE */
  const [formData, setFormData] = useState({
    object: '',
    description: '',
    
    x_axis: '',
    x_1: '',
    x_2: '',
    x_3: '',
    x_4: '',
    x_5: '',
    x_6: '',

    y_axis: '',
    y_1: '',
    y_2: '',
    y_3: '',
    y_4: '',
    y_5: '',
    y_6: '',
  });
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(JSON.stringify(formData)); // Convert formData to JSON for display
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /* GRAPH CODE */
  const experimentData = [
    { trial: parseFloat(formData.x_1), time: parseFloat(formData.y_1) },
    { trial: parseFloat(formData.x_2), time: parseFloat(formData.y_2) },
    { trial: parseFloat(formData.x_3), time: parseFloat(formData.y_3) },
    { trial: parseFloat(formData.x_4), time: parseFloat(formData.y_4) },
    { trial: parseFloat(formData.x_5), time: parseFloat(formData.y_5) },
    { trial: parseFloat(formData.x_6), time: parseFloat(formData.y_6) },
  ];

  const data = {
    labels: experimentData.map((data) => data.trial),
    datasets: [
      {
        label: formData.object,
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
            text: formData.y_axis,
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
            text: formData.x_axis,
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
            Data Visualizer & Summary + Calculator
        </h1>

        {/* Chart */}
        <div
            className="w-[900px] h-[400px] p-[20px] cursor-pointer border border-black ml-auto mr-auto mt-10"
        >
        <Line data={data} options={options}></Line>
        </div>

        {/* Table */}
        <div className="p-5 ml-auto mr-auto">
                <div>
                  <h1 className="font-bold text-lg text-center">Input Data</h1>
                  <form onSubmit={handleSubmit} className="text-center">
                      {/* Get information */}
                      <div className="pb-4">
                        <label>
                          <input
                              type="text"
                              name="object"
                              value={formData.object}
                              onChange={handleChange}
                              placeholder="Name of Object"
                              className="border border-black w-[25%] mr-4 text-center"
                          />
                        </label>
                        <label>
                          <input
                              type="text"
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              placeholder="Short Description"
                              className="border border-black w-[25%] text-center"
                          />
                        </label>
                      </div>
                      
                      {/* X-Axis Inputs */}
                      <div className="">
                          <label>
                          <input
                              type="text"
                              name="x_axis"
                              value={formData.x_axis}
                              onChange={handleChange}
                              placeholder="Enter X axis"
                              className="border border-black w-[10%] text-center"
                          />
                          </label>
                          <label>
                          <input
                              type="number"
                              name="x_1"
                              value={formData.x_1}
                              onChange={handleChange}
                              placeholder="Enter X1"
                              className="border border-black w-[10%] text-center"
                          />
                          <input
                              type="number"
                              name="x_2"
                              value={formData.x_2}
                              onChange={handleChange}
                              placeholder="Enter X2"
                              className="border border-black w-[10%] text-center"
                          />
                          <input
                              type="number"
                              name="x_3"
                              value={formData.x_3}
                              onChange={handleChange}
                              placeholder="Enter X3"
                              className="border border-black w-[10%] text-center"
                          />
                          <input
                              type="number"
                              name="x_4"
                              value={formData.x_4}
                              onChange={handleChange}
                              placeholder="Enter X4"
                              className="border border-black w-[10%] text-center"
                          />
                          <input
                              type="number"
                              name="x_5"
                              value={formData.x_5}
                              onChange={handleChange}
                              placeholder="Enter X5"
                              className="border border-black w-[10%] text-center"
                          />
                          <input
                              type="number"
                              name="x_6"
                              value={formData.x_6}
                              onChange={handleChange}
                              placeholder="Enter X6"
                              className="border border-black w-[10%] text-center"
                          />
                          </label>
                      </div>
                      
                      {/* Y-Axis Inputs */}
                      <div className="block">
                          <label>
                          <input
                              type="text"
                              name="y_axis"
                              value={formData.y_axis}
                              onChange={handleChange}
                              placeholder="Enter Y axis"
                              className="border border-black w-[10%] text-center"
                          />
                          </label>
                          <label>
                          <input
                              type="number"
                              name="y_1"
                              value={formData.y_1}
                              onChange={handleChange}
                              placeholder="Enter Y1"
                              className="border border-black w-[10%] text-center"
                          />
                          </label>
                          <label>
                          <input
                              type="number"
                              name="y_2"
                              value={formData.y_2}
                              onChange={handleChange}
                              placeholder="Enter Y2"
                              className="border border-black w-[10%] text-center"
                          />
                          </label>
                          <label>
                          <input
                              type="number"
                              name="y_3"
                              value={formData.y_3}
                              onChange={handleChange}
                              placeholder="Enter Y3"
                              className="border border-black w-[10%] text-center"
                          />
                          </label>
                          <label>
                          <input
                              type="number"
                              name="y_4"
                              value={formData.y_4}
                              onChange={handleChange}
                              placeholder="Enter Y4"
                              className="border border-black w-[10%] text-center"
                          />
                          </label>
                          <label>
                          <input
                              type="number"
                              name="y_5"
                              value={formData.y_5}
                              onChange={handleChange}
                              placeholder="Enter Y5"
                              className="border border-black w-[10%] text-center"
                          />
                          </label>
                          <label>
                          <input
                              type="number"
                              name="y_6"
                              value={formData.y_6}
                              onChange={handleChange}
                              placeholder="Enter Y6"
                              className="border border-black w-[10%] text-center"
                          />
                          </label>
                      </div>

                      {/* Submit Button */}
                      <button type="submit" className="border border-black p-2 ml-auto mr-auto rounded-xl block mt-5">
                          Calculate!
                      </button>

                  </form>
              {/* Testing component that sends submittedValue to get parsed then display it! */}
              <DisplayParse submittedValue={submittedValue} />
            </div>
        </div>
        <div className="text-center">
          <Calculations submittedValue={submittedValue} />
        </div>
    </div>
  );
}

export default LineChart;