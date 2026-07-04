import { generateChatResponse } from "../services/chat.service.js";

async function chat(req, res) {
    try {
        const { personaId, messages } = req.body;
    
        if(!personaId) {
            return res.status(400).json({
                success: false,
                message: "personaId required"
            });
        }

        if (!Array.isArray(messages)) {
            return res.status(400).json({
                success: false,
                message: "messages must be an array"
            });
        }

        const reply = await generateChatResponse({
            personaId,
            messages
        });

        return res.status(200).json({
            success: true,
            reply
        });
    
    }
    catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }

}
















export { chat }



