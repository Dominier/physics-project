/* CALCULATIONS AND AI */
import { useState } from "react";
import ReactMarkdown from "react-markdown";

import { parseSubmittedValue } from "../utils/parseSubmittedValue";

const API_KEY = "API KEY"
const gravity = 9.8; // value of gravity

const Calculations = ({ submittedValue }) => {
  const parsedData = parseSubmittedValue(submittedValue);

  const time1 = parseFloat(parsedData.x_1);
  const time2 = parseFloat(parsedData.x_2);
  const time3 = parseFloat(parsedData.x_3);
  const time4 = parseFloat(parsedData.x_4);
  const time5 = parseFloat(parsedData.x_5);
  const time6 = parseFloat(parsedData.x_6);
  const time7 = parseFloat(parsedData.x_7);

  const height1 = parseFloat(parsedData.y_1);
  const height2 = parseFloat(parsedData.y_2);
  const height3 = parseFloat(parsedData.y_3);
  const height4 = parseFloat(parsedData.y_4);
  const height5 = parseFloat(parsedData.y_5);
  const height6 = parseFloat(parsedData.y_6);
  const height7 = parseFloat(parsedData.y_7);
  const description = parsedData.description;

  const mass = parsedData.mass;

  const findHighestHeight = (parsedData, count) => {
    const heights = [];
  
    for (let i = 1; i <= count; i++) {
      const heightKey = `y_${i}`;
      const height = parsedData[heightKey];
  
      if (height !== undefined) {
        heights.push(height);
      }
    }
  
    return Math.max(...heights);
  };

  const calculateDeltaHeight = (parsedData) => {
    const heights = [
      parseFloat(parsedData.y_1),
      parseFloat(parsedData.y_2),
      parseFloat(parsedData.y_3),
      parseFloat(parsedData.y_4),
      parseFloat(parsedData.y_5),
      parseFloat(parsedData.y_6),
      parseFloat(parsedData.y_7),
    ];
  
    const maxIndex = heights.indexOf(Math.max(...heights));
  
    // Check if maxIndex is not at the beginning or end
    if (maxIndex > 0 && maxIndex < heights.length - 1) {
      const delta_height = heights[maxIndex + 1] - heights[maxIndex - 1];
      return delta_height;
    }
  
    // Return null if maxIndex is at the beginning or end
    return null;
  };
  
  const calculateDeltaHeightTime = (parsedData) => {
    const heights = [
      parseFloat(parsedData.y_1),
      parseFloat(parsedData.y_2),
      parseFloat(parsedData.y_3),
      parseFloat(parsedData.y_4),
      parseFloat(parsedData.y_5),
      parseFloat(parsedData.y_6),
      parseFloat(parsedData.y_7),
    ];
  
    const maxIndex = heights.indexOf(Math.max(...heights));
  
    // Check if maxIndex is not at the beginning or end
    if (maxIndex > 0 && maxIndex < heights.length - 1) {
      const times = [
        parseFloat(parsedData.x_1),
        parseFloat(parsedData.x_2),
        parseFloat(parsedData.x_3),
        parseFloat(parsedData.x_4),
        parseFloat(parsedData.x_5),
        parseFloat(parsedData.x_6),
        parseFloat(parsedData.x_7),
      ];
  
      const time1 = times[maxIndex - 1];
      const time2 = times[maxIndex + 1];
  
      const delta_time = time2 - time1;
      return delta_time;
    }
  
    // Return null if maxIndex is at the beginning or end
    return null;
  };

  const velocityOfPeak = (delta_height, delta_time) => {
    const velocity = delta_height / delta_time
    return velocity
  }

  let mechanical_energy = (mass, height, velocity) => {
    const potential_energy = mass * height * gravity;
    const kinetic_energy = 0.5 * mass * (velocity ** 2);
    const mechanical_energy = potential_energy + kinetic_energy;
    return mechanical_energy;
  }

  // Call functions
  const peak = findHighestHeight(parsedData, 7);
  const delta_height = calculateDeltaHeight(parsedData);
  const delta_time = calculateDeltaHeightTime(parsedData);
  const velocity_peak = velocityOfPeak(delta_height, delta_time).toFixed(4)
  const peak_ME = mechanical_energy(mass, peak, velocity_peak).toFixed(4)

  // AI STUFF BELOW
  const [report, setReport] = useState(""); // some words

  async function callOpenAIAPI() {
    console.log("Calling the OpenAI API");

    const APIBody = {
        "model": "gpt-4-1106-preview",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant, do the best with the information you are given."},
            {"role": "user", "content": `Generate a lab report with the following short description: ${parsedData.description}. Create a title, objective, and conclusion.`},
        ],
        "temperature": 0.8,
        "top_p": 1
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify(APIBody)
        });

        const data = await response.json();
        console.log(data);

        // Update state with the generated report
        setReport(data.choices[0].message.content);
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
    }
}


  return (
    <div className="pt-3">
      <h2 className="font-bold">Calculations</h2>
      <p>Mechanical energy of peak: {peak_ME}</p>
      <p>Velocity of peak: {velocity_peak}</p>

      <div>
          <button onClick={callOpenAIAPI} className="border border-black rounded-lg p-2 mt-2 hover:bg-slate-200" >Generate Summary</button>
      </div>

      {report !== "" ? 
          <div className="pt-2">
            <h3 className="font-bold">Lab report: <br /> </h3>
            <ReactMarkdown children={report} />
          </div>
          : null    
      }

    </div>
  );
};

export default Calculations;
