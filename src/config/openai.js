
import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config();


const token = process.env.OPENAI_API_KEY;
const endpoint = "https://models.github.ai/inference";

const client = new OpenAI({
    baseURL:endpoint,
    apiKey:token,
});

export default client;