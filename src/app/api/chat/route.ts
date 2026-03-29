import { NextResponse } from 'next/server';
import { getFormattedKnowledge } from '@/data/chatbotKnowledge';

const apiKey = process.env.OPENROUTER_API_KEY;
const modelId = "google/gemini-2.0-flash-001";

export async function POST(req: Request) {
    if (!apiKey) {
        return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    try {
        const { message, history } = await req.json();

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://rv-tech-labs.com",
                "X-Title": "RV Tech Labs Portfolio",
            },
            body: JSON.stringify({
                model: modelId,
                messages: [
                    { role: "system", content: getFormattedKnowledge() },
                    ...history.map((msg: any) => ({
                        role: msg.role === "user" ? "user" : "assistant",
                        content: msg.content
                    })),
                    { role: "user", content: message }
                ],
                temperature: 0.7,
                max_tokens: 1024,
                stream: true, // Enable streaming
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("OpenRouter API error:", errorData);
            return NextResponse.json({ error: "External API error" }, { status: response.status });
        }

        const encoder = new TextEncoder();
        const decoder = new TextDecoder();

        const stream = new ReadableStream({
            async start(controller) {
                const reader = response.body?.getReader();
                if (!reader) {
                    controller.close();
                    return;
                }

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value);
                    const lines = chunk.split("\n").filter(line => line.trim() !== "");

                    for (const line of lines) {
                        if (line === "data: [DONE]") {
                            controller.close();
                            return;
                        }

                        if (line.startsWith("data: ")) {
                            try {
                                const data = JSON.parse(line.substring(6));
                                const text = data.choices[0]?.delta?.content || "";
                                if (text) {
                                    controller.enqueue(encoder.encode(text));
                                }
                            } catch (e) {
                                console.error("Error parsing stream chunk:", e);
                            }
                        }
                    }
                }
                controller.close();
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
            },
        });

    } catch (error) {
        console.error("Chat API Route error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
