import { test, equal, notEqual, greaterThan } from "./test-helpers.js";
import { formSubmit } from "../main.js";

const userInput = document.getElementById("input");
const answer = document.getElementById("answer");

await test("Form submits", async () => {
    userInput.value = "Hello";
    await formSubmit();
    equal(answer.textContent, "Hello! How can I assist you today?")
});