import fs from "fs/promises";
import path from "path"

const PERSONA_DIRECTORY = path.join(process.cwd(), "src", "personas");

export async function getPersonaProfile(personaId) {
    const filePath = path.join(PERSONA_DIRECTORY, `${personaId}.profile.md`);

    return await fs.readFile(filePath, "utf-8");
}
