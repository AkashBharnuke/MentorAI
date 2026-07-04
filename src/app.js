import express from "express";

import chatRoutes from "./routes/chat.routes.js"

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api/v1/chat", chatRoutes);

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Mentor AI API is running..."
    });
});
 
export default app;

