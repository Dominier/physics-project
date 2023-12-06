"use client";
import { useState } from "react";
import DisplayParse from "./displayParse";

const InputTable = () => {
  const [formData, setFormData] = useState({
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
      <h1 className="">Table</h1>
      <form onSubmit={handleSubmit} className="">
        {/* X-Axis Inputs */}
        <div className="">
            <label>
            <input
                type="text"
                name="x_axis"
                value={formData.x_axis}
                onChange={handleChange}
                placeholder="Enter X axis"
                className="border border-black w-[10%]"
            />
            </label>
            <label>
            <input
                type="number"
                name="x_1"
                value={formData.x_1}
                onChange={handleChange}
                placeholder="Enter X1 here"
                className="border border-black w-[10%]"
            />
            <input
                type="number"
                name="x_2"
                value={formData.x_2}
                onChange={handleChange}
                placeholder="Enter X2 here"
                className="border border-black w-[10%]"
            />
            <input
                type="number"
                name="x_3"
                value={formData.x_3}
                onChange={handleChange}
                placeholder="Enter X3 here"
                className="border border-black w-[10%]"
            />
            <input
                type="number"
                name="x_4"
                value={formData.x_4}
                onChange={handleChange}
                placeholder="Enter X4 here"
                className="border border-black w-[10%]"
            />
            <input
                type="number"
                name="x_5"
                value={formData.x_5}
                onChange={handleChange}
                placeholder="Enter X5 here"
                className="border border-black w-[10%]"
            />
            <input
                type="number"
                name="x_6"
                value={formData.x_6}
                onChange={handleChange}
                placeholder="Enter X6 here"
                className="border border-black w-[10%]"
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
                className="border border-black w-[10%]"
            />
            </label>
            <label>
            <input
                type="number"
                name="y_1"
                value={formData.y_1}
                onChange={handleChange}
                placeholder="Enter Y1 here"
                className="border border-black w-[10%]"
            />
            </label>
            <label>
            <input
                type="number"
                name="y_2"
                value={formData.y_2}
                onChange={handleChange}
                placeholder="Enter Y2 here"
                className="border border-black w-[10%]"
            />
            </label>
            <label>
            <input
                type="number"
                name="y_3"
                value={formData.y_3}
                onChange={handleChange}
                placeholder="Enter Y3 here"
                className="border border-black w-[10%]"
            />
            </label>
            <label>
            <input
                type="number"
                name="y_4"
                value={formData.y_4}
                onChange={handleChange}
                placeholder="Enter Y4 here"
                className="border border-black w-[10%]"
            />
            </label>
            <label>
            <input
                type="number"
                name="y_5"
                value={formData.y_5}
                onChange={handleChange}
                placeholder="Enter Y5 here"
                className="border border-black w-[10%]"
            />
            </label>
            <label>
            <input
                type="number"
                name="y_6"
                value={formData.y_6}
                onChange={handleChange}
                placeholder="Enter Y6 here"
                className="border border-black w-[10%]"
            />
            </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="border border-black p-2 ml-auto mr-auto rounded-xl block">
          Submit
        </button>

      </form>
      {/* Testing component that sends submittedValue to get parsed then display it! */}
      <DisplayParse submittedValue={submittedValue} />
    </div>
  );
};

export default InputTable;
