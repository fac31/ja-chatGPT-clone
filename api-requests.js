const API_URL = "https://api.openai.com/v1/chat/completions";

export let API_KEY = "";

let aiReply = "";

export function fetchKey(userInput) {
  return new Promise((resolve, reject) => {
    fetch("../config.json")
      .then((response) => response.json())
      .then((data) => {
        API_KEY = data.OPEN_AI_KEY;
      })
      .then(() => resolve())
      .catch((e) => {
        console.log("error ", e);
        reject(e);
      });
  });
}

export function callApi(userInput) {
  return new Promise((resolve, reject) => {
    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userInput }],
      max_tokens: 500,
    };
    fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        aiReply = data;
        resolve(data); // Resolve the promise with the data
      })
      .catch((error) => {
        console.log("Error making API request:", error);
        reject(error); // Reject the promise if there's an error
      });
  });
}

export function getAIReply() {
  return aiReply;
}
