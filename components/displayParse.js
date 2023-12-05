/* A test-use component that displays the parsed data from parseSubmittedValue.js from utils! YAYYYYYY */

import { parseSubmittedValue } from "../utils/parseSubmittedValue";

const DisplayParse = ({ submittedValue }) => {
    const parsedData = parseSubmittedValue(submittedValue);

    return (
        <div className="pt-5">
            <h2>Display Parse Component</h2>
            <p>Parsed x-axis: {parsedData.x_axis}</p>
            <p>Parsed y-axis: {parsedData.y_axis}</p>

            <p>Parsed X1 Value: {parsedData.x_1}</p>
            <p>Parsed X2 Value: {parsedData.x_2}</p>
            <p>Parsed X3 Value: {parsedData.x_3}</p>
            <p>Parsed X4 Value: {parsedData.x_4}</p>
            <p>Parsed X5 Value: {parsedData.x_5}</p>
            <p>Parsed X6 Value: {parsedData.x_6}</p>

            <p>Parsed Y1 Value: {parsedData.y_1}</p>
            <p>Parsed Y2 Value: {parsedData.y_2}</p>
            <p>Parsed Y3 Value: {parsedData.y_3}</p>
            <p>Parsed Y4 Value: {parsedData.y_4}</p>
            <p>Parsed Y5 Value: {parsedData.y_5}</p>
            <p>Parsed Y6 Value: {parsedData.y_6}</p>
        </div>
    );
};

export default DisplayParse;