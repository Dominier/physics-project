/* Parses submitted value from input-table component into object! YAY */

export const parseSubmittedValue = (submittedValue) => {
    try {
        return JSON.parse(submittedValue);
    } catch (error) {
        console.error('Error parsing submitted value.', error)
        return {};
    }
};