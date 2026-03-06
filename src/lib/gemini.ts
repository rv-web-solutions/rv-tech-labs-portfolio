import { GoogleGenerativeAI } from "@google/generative-ai";
import { getFormattedKnowledge } from "../data/chatbotKnowledge";

// Initialize the Gemini AI
// Next.js uses process.env instead of import.meta.env
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// Get the generative model
const model = genAI?.getGenerativeModel({
    model: "gemini-1.5-flash", // Updated to a stable, widely available version
    generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
    }
});

// System prompt with knowledge base
const systemPrompt = getFormattedKnowledge();

/**
 * Send a message to the Gemini AI chatbot
 * @param {string} userMessage - The user's message
 * @param {Array} chatHistory - Previous chat messages for context
 * @returns {Promise<string>} - The AI's response
 */
export const sendMessage = async (userMessage: string, chatHistory: { role: string; content: string }[] = []) => {
    if (!genAI || !model || !apiKey || apiKey === "your_api_key_here") {
        return "DEMO_MODE_ACTIVE";
    }

    try {
        // Build the conversation context
        const conversationContext = chatHistory
            .map(msg => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
            .join("\n");

        // Combine system prompt, conversation history, and new message
        const fullPrompt = `${systemPrompt}

${conversationContext ? `Previous conversation:\n${conversationContext}\n` : ""}
User: ${userMessage}

Assistant:`;

        // Generate response from Gemini AI
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();

        return text;
    } catch (error) {
        console.error("Error sending message to Gemini AI:", error);
        throw new Error("Failed to get response from AI. Please try again.");
    }
};
