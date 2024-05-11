import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch"; // This is now perfectly valid

const app = express();
const API_KEY = process.env.OPEN_AI_KEY;
console.log("API Key :", API_KEY);
const API_URL = "https://api.openai.com/v1/chat/completions";

app.use(express.json());

// Convert import.meta.url to a directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the HTML file when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ChatGPT.html"));
});

// POST route for the API request
// takes user input as request and responds with new rss
//@Jack this is new and replaces our callAPI Fn from api-req file
app.post("/api/chat", async (req, res) => {
  // get user input from frontent
  const userInput = req.body.userInput;
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userInput }],
        max_tokens: 500,
      }),
    });
    const data = await response.json();
    // send response to client
    res.json(data);
  } catch (error) {
    console.log("Error making API request: ", error);
    res.status(500).send("Failed to fetch response from OpenAI");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
