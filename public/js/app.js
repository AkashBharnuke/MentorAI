import { elements } from "./dom.js";
import { setPersona, getPersona, addMessage, getMessages, clearMessages } from "./chat.js";
import { renderMessage, scrollToBottom, updateMentorUI, showThinking, hideThinking, clearChat } from "./ui.js";
import { sendChatrequest } from "./api.js";

console.log("App Loaded 🚀");

elements.mentor.addEventListener("change", (event) => {
    // console.log("Dropdown changed:", event.target.value);
    
    const persona = event.target.value;
    
    clearChat();
    clearMessages();
    
    setPersona(persona);
    updateMentorUI(persona);

    

    // console.log("Current Persona:", getPersona());
});

async function handleSendMessage() {

    const text = elements.message.value.trim();

    if (!text) return;

    const userMessage = {
        role: "user",
        content: text
    };

    addMessage(userMessage);

    renderMessage(userMessage);
    
    showThinking();
    
    elements.message.value = "";

    try {

        elements.sendButton.disabled = true;
        elements.message.disabled = true;

        const response = await sendChatrequest({ personaId: getPersona(), messages: getMessages()});
        
        hideThinking();
        
        const assistantMessage = response.reply;

        addMessage(assistantMessage);
        renderMessage(assistantMessage);

        elements.sendButton.disabled = false;
        elements.message.disabled = false;
        elements.message.focus();
    }
    catch(error) {
        hideThinking();
        elements.sendButton.disabled = false;
        elements.message.disabled = false;
        elements.message.focus();
        console.error(error);

        renderMessage({
            role: "assistant",
            content: "⚠️ Sorry, something went wrong. Please try again."
        });
    }
    

}



elements.sendButton.addEventListener("click", handleSendMessage);

elements.message.addEventListener("keydown", (event) => {
    if(event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();

        handleSendMessage();
    }
});


