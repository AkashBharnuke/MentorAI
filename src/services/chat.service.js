import { getPersonaProfile } from "./persona.service.js";
import { buildMessages } from "./prompt.service.js";
import { generateResponse } from "./llm.service.js"

export async function generateChatResponse({ personaId, messages }) {

    // console.log(personaId);
    // console.log(messages);

    const personaProfile = await getPersonaProfile(personaId);

    const prompt = await buildMessages({
        personaProfile,
        conversation: messages
    });

    const reply = await generateResponse(prompt);

    return reply;

}