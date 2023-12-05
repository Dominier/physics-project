// Connection to OpenAI API for Conversation
// Connection to custom API Limit library

import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(
    req: Request
) {
    try {
        const body = await req.json();
        const { messages } = body;


        if (!configuration.apiKey) {
            return new NextResponse("OpenAI API Key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const response = await openai.createChatCompletion({
            model: "gpt-4-1106-preview",
            messages
        });

        return NextResponse.json(response.data.choices[0].message);
    } catch (error) {
        console.log("[CONVERSATION_ERROR]", error)
        return new NextResponse("Internal Error", { status: 500 });
    }
}