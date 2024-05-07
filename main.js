import { callApi, fetchKey, getAIReply } from "./api-requests.js";

const answer = document.getElementById("answer");

const question = document.getElementById("question");

async function formSubmit() {
  const userInput = document.getElementById("input").value;
  await fetchKey();//userInput); // Ensure fetchKey resolves before proceeding
  await callApi(userInput);
  question.innerHTML = userInput; // Move this line here if you want to display the question immediately
  let aiResponse = getAIReply();
  if (aiResponse && aiResponse.choices && aiResponse.choices.length > 0) {
    answer.innerHTML = aiResponse.choices[0].message.content; // Ensure this updates only after the response is received
  } else {
    answer.innerHTML = "No response or unexpected structure from API";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", formSubmit);
});
