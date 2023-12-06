import { useState } from "react";

const API_KEY = "API KEY HERE"

const TestingAI = () => {
    const [description, setDescription] = useState("");
    const [report, setReport] = useState(""); // some words

    async function callOpenAIAPI() {
        console.log("Calling the OpenAI API");

        const APIBody = {
            "model": "gpt-4-1106-preview",
            "messages": [
                {"role": "system", "content": "You are a helpful assistant that generate lab reports based on the information you are given."},
                {"role": "user", "content": `Generate a lab report with the following short description: ${description}. Create a title, objective, and conclusion.`},
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
        <div className="pt-5">
            <h1 className="font-bold">TESTING</h1>
            <div>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}    
                    placeholder="Paste your short summary here"
                    cols={30} 
                    rows={10} 
                    className="border border-black" 
                />
            </div>
            <div>
                <button onClick={callOpenAIAPI} className="border border-black p-2" >Generate from AI</button>
            </div>
            {report !== "" ? 
                <h3>lab report: {report}</h3>
                : null    
            }
        </div>
    );
};

export default TestingAI;
