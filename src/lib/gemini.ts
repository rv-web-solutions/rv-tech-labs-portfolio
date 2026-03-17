// Error sentinel values — caught and shown gracefully in the UI
export const DEMO_MODE = "DEMO_MODE_ACTIVE";
export const QUOTA_EXCEEDED = "QUOTA_EXCEEDED";
export const API_ERROR = "API_ERROR";

export const sendMessage = async (
    userMessage: string,
    chatHistory: { role: string; content: string }[] = []
): Promise<string> => {
    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: userMessage,
                history: chatHistory,
            })
        });

        if (!response.ok) {
            if (response.status === 429) return QUOTA_EXCEEDED;
            if (response.status === 500) {
                const data = await response.json();
                if (data.error === "API key not configured") return DEMO_MODE;
            }
            return API_ERROR;
        }

        const data = await response.json();
        return data.text || "";

    } catch (error: unknown) {
        console.error("Chat client error:", error);
        return API_ERROR;
    }
};
