import { elements } from "./dom.js";

const mentorDetails = {
    hitesh: {
        name: "Hitesh Choudhary",
        role: "AI Software Engineering Mentor",
        description:
            "You're currently learning with <span class='font-medium text-violet-300'>Hitesh Choudhary</span>. Ask anything about backend development, Docker, APIs, DevOps, databases, system design or software engineering."
    },

    piyush: {
        name: "Piyush Garg",
        role: "AI Software Engineering Mentor",
        description:
            "You're currently learning with <span class='font-medium text-violet-300'>Piyush Garg</span>. Ask anything about scalable backend systems, architecture, Node.js, microservices, cloud infrastructure or software engineering."
    }
};


function renderMessage(message) {

    removeWelcomeCard();

    
    const wrapper = document.createElement("div");
    
    wrapper.className = message.role === "user" ? "flex justify-end mb-6" : "flex justify-start mb-6";
    
    const bubble = document.createElement("div");
    
    bubble.className = message.role === "user" ? "max-w-[75%] rounded-2xl bg-violet-600 px-5 py-3 text-white" : "max-w-[75%] rounded-2xl border border-white/10 bg-slate-800 px-5 py-3";
    bubble.classList.add("prose", "prose-invert", "max-w-none");

    if (message.role === "assistant") {
        bubble.innerHTML = marked.parse(message.content);

        bubble.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightElement(block);
        });
    } else {
        bubble.textContent = message.content;
    }

    wrapper.appendChild(bubble);

    elements.chatWindow.appendChild(wrapper);

    elements.chatWindow.scrollTop = elements.chatWindow.scrollHeight;

}



function scrollToBottom() {
    elements.chatWindow.scrollTop =
        elements.chatWindow.scrollHeight;
}

function removeWelcomeCard() {
    document.getElementById("welcome-card")?.remove();
}

function updateMentorUI(persona) {

    const mentor = mentorDetails[persona];

    elements.mentorName.textContent = mentor.name;

    elements.mentorRole.textContent = mentor.role;

    elements.welcomeDescription.innerHTML =
        mentor.description;

}


function showThinking() {
    console.log("Thinking...");
    const wrapper = document.createElement("div");

    wrapper.id = "thinking-indicator";
    wrapper.className = "flex justify-start mb-6";

    wrapper.innerHTML = `
    <div class="max-w-[75%] rounded-2xl border border-white/10 bg-slate-800 px-5 py-4">

        <div class="flex items-center gap-3">

            <i data-lucide="bot" class="h-5 w-5 text-violet-300"></i>

            <span class="text-slate-300">
                Thinking...
            </span>

        </div>

    </div>
`;

    elements.chatWindow.appendChild(wrapper);

    lucide.createIcons();

    scrollToBottom();
}

function clearChat() {
    elements.chatWindow.innerHTML = "";
}


function hideThinking() {
    document.getElementById("thinking-indicator")?.remove();
}


export { 
    renderMessage, 
    scrollToBottom, 
    updateMentorUI, 
    showThinking, 
    hideThinking,
    clearChat
};