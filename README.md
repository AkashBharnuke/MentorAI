# MentorAI

# MentorAI

An AI-powered chatbot that simulates conversations with **Hitesh Choudhary** and **Piyush Garg** using OpenAI, persona engineering, and contextual prompting.

![Persona AI](https://img.shields.io/badge/Project-Persona%20AI-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-Backend-000000?logo=express&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?logo=openai&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker&logoColor=white)
![ChaiCode](https://img.shields.io/badge/ChaiCode-GenAI%20Cohort-orange)


![Live Demo](https://img.shields.io/badge/Live-Demo-success)
<!-- ![License](https://img.shields.io/badge/License-MIT-blue) -->
---

## Overview

MentorAI is a persona-driven LLM chat application built as part of the ChaiCode Generative AI Cohort assignment.

The application allows users to interact with AI versions of two well-known software engineering educators—**Hitesh Choudhary** and **Piyush Garg**—while preserving their unique communication style, teaching philosophy, and personality.

Unlike traditional AI chat applications, MentorAI focuses on recreating each mentor's teaching approach through carefully engineered persona prompts and contextual conversations.

---


---

## Features

* 🤖 AI-powered conversations using OpenAI
* 👨‍🏫 Switch between Hitesh Choudhary and Piyush Garg
* 💬 Multi-turn contextual conversations
* 📝 Persona-driven prompt engineering
* 📄 Markdown response rendering
* 🎨 Syntax-highlighted code blocks
* ⏳ Thinking indicator while generating responses
* ⌨️ Enter to send (Shift + Enter for new line)
* 📱 Responsive user interface
* 🐳 Docker & Docker Compose support

---

## Tech Stack

### Frontend

* HTML5
* Tailwind CSS
* Vanilla JavaScript (ES Modules)
* Marked.js
* Highlight.js

### Backend

* Node.js
* Express.js

### AI

* OpenAI API

### Deployment

* Docker
* Docker Compose
* Nginx (Reverse Proxy)
* VPS

---

## Project Structure

```text
mentor-ai/

├── docs/
│   ├── 01-persona-research.md
│   ├── 02-prompt-engineering.md
│   ├── 03-context-management.md
│   ├── 04-system-architecture.md
│   └── 06-engineering-decisions.md
│
├── public/
│   ├── index.html
│   └── js/
│       ├── app.js
│       ├── api.js
│       ├── chat.js
│       ├── dom.js
│       └── ui.js
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── personas/
│   └── prompts/
│
├── server.js
├── package.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## Architecture

The application follows a simple layered architecture.

```text
Browser
      │
      ▼
Frontend (HTML + JS)
      │
      ▼
Express API
      │
      ▼
Chat Service
      │
      ├────────► Persona Service
      │
      ├────────► Prompt Builder
      │
      ▼
OpenAI API
      │
      ▼
Assistant Response
```

A detailed explanation is available in:

`docs/04-system-architecture.md`

---

## Documentation

Detailed documentation for each implementation aspect is available inside the `docs/` directory.

| Document                      | Description                                        |
| ----------------------------- | -------------------------------------------------- |
| `01-persona-research.md`      | How persona information was collected and prepared |
| `02-prompt-engineering.md`    | Prompt design strategy                             |
| `03-context-management.md`    | Conversation history and context management        |
| `04-system-architecture.md`   | Overall system architecture                        |
| `06-engineering-decisions.md` | Key architectural and engineering decisions        |

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>

cd mentor-ai
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file.

```env
PORT=3000

OPENAI_API_KEY=your_openai_api_key
```

---

### 4. Start the Application

```bash
npm run dev
```

or

```bash
npm start
```

Visit:

```
http://localhost:3000
```

---

## Docker

Build and run using Docker Compose.

```bash
docker compose up --build
```

---

## Assignment Requirements

* ✅ Live deployed website
* ✅ Public GitHub repository
* ✅ LLM-powered chat interface
* ✅ Switch between Hitesh Choudhary and Piyush Garg
* ✅ Persona-based responses
* ✅ Prompt engineering
* ✅ Context management
* ✅ Sample conversations
* ✅ Documentation
* ✅ Setup instructions

---

## Future Improvements

* Conversation persistence
* Streaming AI responses
* Authentication
* Conversation history
* Additional mentor personas
* Response regeneration
* Voice interaction

---

## Acknowledgements

This project was developed as part of the **ChaiCode Generative AI Cohort** assignment.

The mentor personas are inspired by the publicly available educational content of **Hitesh Choudhary** and **Piyush Garg**. The chatbot is intended solely as an educational demonstration and is not affiliated with or endorsed by either individual.

---

## License

This project is intended for educational and demonstration purposes.
