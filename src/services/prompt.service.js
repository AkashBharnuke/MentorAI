import fs from "fs/promises";
import path from "path"

const PROMPT_DIRECTORY = path.join(process.cwd(), "src", "prompts");

export async function readPrompt(filename) {
    const filePath = path.join(PROMPT_DIRECTORY, filename);
    return await fs.readFile(filePath, "utf-8");
}

export async function buildMessages({personaProfile, conversation}) {
    const mentorRules = await readPrompt("mentor-ai-rules.md");
    const responseGuidelines = await readPrompt("response-guidelines.md");

    const systemPrompt = `
${mentorRules}

${responseGuidelines}

${personaProfile}
    `;

    return [
        {
            role: "system",
            content: systemPrompt
        },
        ...conversation
    ];
}