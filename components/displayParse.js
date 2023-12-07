/* A test-use component that displays the parsed data from parseSubmittedValue.js from utils! YAYYYYYY */

import { parseSubmittedValue } from "../utils/parseSubmittedValue";

const DisplayParse = ({ submittedValue }) => {
    const parsedData = parseSubmittedValue(submittedValue);

    return (
        <div className="pt-5 text-center">
            <div>
                <h2 className="font-bold">Description Entered</h2>
                
                <p>{parsedData.description}</p>
            </div>
        </div>
    );
};

export default DisplayParse;