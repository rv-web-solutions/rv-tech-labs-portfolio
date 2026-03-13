import { GoogleGenerativeAI } from "@google/generative-ai";
import { getFormattedKnowledge } from "../data/chatbotKnowledge";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// System prompt with knowledge base
const systemPrompt = getFormattedKnowledge();

// Get the generative model with system instructions
const model = genAI?.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: systemPrompt,
    generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
    }
});

// Error sentinel values — caught and shown gracefully in the UI
export const DEMO_MODE = "DEMO_MODE_ACTIVE";
export const QUOTA_EXCEEDED = "QUOTA_EXCEEDED";
export const API_ERROR = "API_ERROR";

export const sendMessage = async (
    userMessage: string,
    chatHistory: { role: string; content: string }[] = []
): Promise<string> => {
    // No API key configured
    if (!genAI || !model || !apiKey || apiKey === "your_api_key_here") {
        return DEMO_MODE;
    }

    try {
        // Gemini requires conversation to START with a "user" turn.
        // Skip any leading bot/model messages (e.g. the initial greeting).
        const firstUserIndex = chatHistory.findIndex(msg => msg.role === "user");
        const validHistory = firstUserIndex >= 0 ? chatHistory.slice(firstUserIndex) : [];

        const contents = [
            ...validHistory.map(msg => ({
                role: msg.role === "user" ? "user" : "model",
                parts: [{ text: msg.content }]
            })),
            { role: "user", parts: [{ text: userMessage }] }
        ];

        const result = await model.generateContent({ contents });
        const text = result.response.text();
        return text;

    } catch (error: unknown) {
        console.error("Gemini API error:", error);

        // Detect quota / rate-limit errors (429)
        const isQuota =
            (error instanceof Error && error.message.includes("429")) ||
            (typeof error === "object" && error !== null && (error as { status?: number }).status === 429);

        if (isQuota) return QUOTA_EXCEEDED;
        return API_ERROR;
    }
};
