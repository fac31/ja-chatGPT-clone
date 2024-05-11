//import { callApi, fetchKey, getAIReply } from "../api-requests.js";

const answer = document.getElementById("answer");

const question = document.getElementById("question");

async function formSubmit() {
  const userInput = document.getElementById("input").value;
  question.innerHTML = userInput;
  try {
    const aiResponse = await callApi(userInput);
    if (aiResponse && aiResponse.choices && aiResponse.choices.length > 0) {
      answer.innerHTML = aiResponse.choices[0].message.content;
    } else {
      answer.innerHTML = "No response or unexpeted structure from API";
    }
  } catch (error) {
    answer.innerHTML = "Failed to get resposne: " + error.message;
  }
}

// call API via server side code
async function callApi(userInput) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userInput }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", formSubmit);
});
