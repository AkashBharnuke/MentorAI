import clinet from "../config/openai.js";

export async function generateResponse(messages) {
    const response = await clinet.chat.completions.create({
        model: "openai/gpt-4o",
        messages,
        temperature: 0.8
    });

    return response.choices[0].message;
}