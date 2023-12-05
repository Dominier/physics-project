/* CALCULATIONS */
import { parseSubmittedValue } from "../utils/parseSubmittedValue";

const Calculations = ({ submittedValue }) => {
  const parsedData = parseSubmittedValue(submittedValue);

  const values = ["y_1", "y_2", "y_3", "y_4", "y_5", "y_6"];
  const distances = values.map((key) => parseFloat(parsedData[key]));

  const timeValues = ["x_1", "x_2", "x_3", "x_4", "x_5", "x_6"];
  const times = timeValues.map((key) => parseFloat(parsedData[key]));

  const totalDisplacement = distances[distances.length - 1] - distances[0];
  const totalTime = times[times.length - 1] - times[0];

  // Calculate average velocity
  const velocity = totalDisplacement / totalTime;

  return (
    <div className="pt-5">
      <h2 className="font-bold">Calculations</h2>
      <p>Average Velocity: {velocity} m/s</p>
    </div>
  );
};

export default Calculations;
