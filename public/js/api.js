const API_BASE_URL = "/api/v1/chat";

export async function sendChatrequest({ personaId, messages}) {
    const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            personaId,
            messages
        })
    });

    if(!response.ok) {
        throw new Error("Failed to fetch response from MentorAI.");
    }
    return await response.json();
}