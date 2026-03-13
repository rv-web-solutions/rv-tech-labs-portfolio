import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyB0JyCTcTLOwY_JlbFJ1AWMVyrnEw8svQw";
const genAI = new GoogleGenerativeAI(apiKey);

const modelsToTry = [
    "gemini-2.0-flash-lite",
    "gemini-1.5-flash-latest",
    "gemini-1.5-flash-8b",
    "gemini-1.0-pro",
];

for (const modelName of modelsToTry) {
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: "Say: works" }] }]
        });
        console.log(`✅ ${modelName}:`, result.response.text().trim());
        break; // stop at first working model
    } catch (error) {
        console.log(`❌ ${modelName}: ${error.status} - ${error.message?.split('\n')[0]}`);
    }
}
