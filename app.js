import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch"; // This is now perfectly valid
import("dotenv").then((dotenv) => {
  dotenv.config();
});

const app = express();
const API_KEY = process.env.OPEN_API_KEY;
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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
