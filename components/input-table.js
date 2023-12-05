"use client";
import { useState } from "react";

const InputTable = () => {
  const [formData, setFormData] = useState({
    trial: '',
    time: '',
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
      <h1 className="text-center">Next.js User Input Example</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <label>
          Enter a trial (string):
          <input
            type="text"
            name="trial"
            value={formData.trial}
            onChange={handleChange}
            className="border border-black mr-5 ml-2"
          />
        </label>

        <label>
          Enter a time (integer):
          <input
            type="number"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border border-black mr-5 ml-2"
          />
        </label>

        <button type="submit" className="border border-black p-2 rounded-xl">
          Submit
        </button>
      </form>

      <p>{submittedValue}</p>
    </div>
  );
};

export default InputTable;
