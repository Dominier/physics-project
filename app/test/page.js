"use client";

import { useState } from "react";

import DisplayParse from "@/components/displayParse";
import Calculations from "@/components/calculations";
import TestingAI from "@/components/testingai";

const TestPage = () => {
    const [formData, setFormData] = useState({
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

  return (
        <div>
            <h1 className="">Form</h1>
            <form onSubmit={handleSubmit} className="">
                <label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Short Description"
                        className="border border-black w-[25%]"
                    />
                </label>

                {/* Submit Button */}
                <button type="submit" className="border border-black p-2 ml-auto mr-auto rounded-xl block">
                    Submit
                </button>

            </form>
        {/* Testing component that sends submittedValue to get parsed then display it! */}
        <DisplayParse submittedValue={submittedValue} />
        <Calculations submittedValue={submittedValue} />
        <TestingAI />
    </div>
  )
}

export default TestPage;
