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
   const [formData, setFormData] = useState(() => {
    const initialState = {
      object: '',
      description: '',
      mass: '',
      x_axis: '',
      y_axis: '',
    };
  
    // Generate keys for x_1 to x_28 and y_1 to y_28
    for (let i = 1; i <= 28; i++) {
      initialState[`x_${i}`] = '';
      initialState[`y_${i}`] = '';
    }
  
    return initialState;
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
  const experimentData = Array.from({ length: 7 }, (_, index) => ({
    trial: parseFloat(formData[`x_${index + 1}`]),
    time: parseFloat(formData[`y_${index + 1}`]),
  }));

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

    const generateInputs = (prefix) => {
      const inputs = [];
  
      for (let i = 1; i <= 7; i++) {
        inputs.push(
          <label key={i}>
            <input
              type={prefix === "x" ? "text" : "number"}
              name={`${prefix}_${i}`}
              value={formData[`${prefix}_${i}`]}
              onChange={handleChange}
              placeholder={`Enter ${prefix.toUpperCase()}${i}`}
              className="border border-black w-[10%] text-center"
            />
          </label>
        );
      }
  
      return inputs;
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
                        <label>
                          <input
                              type="text"
                              name="mass"
                              value={formData.mass}
                              onChange={handleChange}
                              placeholder="Mass of Object"
                              className="border border-black w-[25%] ml-4 text-center"
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
                          {generateInputs("x")}
                      </div>
                      
                      {/* Y-Axis Inputs */}
                      <div className="block mt-3">
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
                          {generateInputs("y")}
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