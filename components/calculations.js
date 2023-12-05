/* Calculations including velocity, acceleration, and more? */

import { parseSubmittedValue } from "../utils/parseSubmittedValue";

const Calculations = ({ submittedValue }) => {
    const parsedData = parseSubmittedValue(submittedValue);

    const values = ["y_1", "y_2", "y_3", "y_4", "y_5", "y_6"];
    const sum = values.reduce((acc, key) => acc + parseFloat(parsedData[key]), 0);
    const velocity = sum / values.length;




    return (
        <div className="pt-5">
            <h2 className=" font-bold">Calculations</h2>
            <p>Average Velocity: {velocity} m/s</p>
        </div>
    );
};

export default Calculations;