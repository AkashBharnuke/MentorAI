# Simple backend Flow

```
                 Browser
                     │
                     ▼
          HTML / CSS / JavaScript
                     │
                     ▼
          POST /api/v1/chat
                     │
                     ▼
          Express Controller
                     │
                     ▼
             Chat Service
                     │
       ┌─────────────┴─────────────┐
       ▼                           ▼
 Persona Service             Prompt Service
       │                           │
       └─────────────┬─────────────┘
                     ▼
               LLM Service
                     │
                     ▼
                 OpenAI API
                     │
                     ▼
              Assistant Response

```