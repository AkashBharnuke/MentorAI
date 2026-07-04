

let messages = [];

let selectedPersona = "hitesh";

function getMessages(){
    return messages;
}

function addMessage(message){
    messages.push(message);
}

function clearMessages(){
    messages = [];
}

function getPersona(){
    return selectedPersona;
}

function setPersona(persona){
    selectedPersona = persona;
}

export { getMessages, addMessage, clearMessages, getPersona, setPersona };