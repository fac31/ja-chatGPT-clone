const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the HTML file when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ChatGPT.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
