# Context Management

```
Frontend

↓

messages[]

↓

Backend

↓

OpenAI
```

---

- Backend is stateless
- Conversation state lives on client
- No DB setup yet
- Entire conversation history sent for each request (I know not the best approach, but had limited time + working product was the first thought, this is an MVP, not the final product we could say.)
