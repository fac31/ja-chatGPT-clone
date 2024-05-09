const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
require("dotenv").config();

const app = express();
const API_KEY = process.env.OPEN_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the HTML file when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ChatGPT.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
