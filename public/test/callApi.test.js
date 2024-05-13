import { test, equal, notEqual, greaterThan } from "./test-helpers.js";
import { callApi } from "../main.js";

await test("Reply is responding with a string", async () => {
  let aiReply = await callApi("Hello");
  if (
    aiReply &&
    aiReply.choices &&
    aiReply.choices.length > 0 &&
    aiReply.choices[0].message
  ) {
    let content = aiReply.choices[0].message.content;
    equal(content, "Hello! How can I assist you today?");
    greaterThan(content.length, 0);
  } else {
    console.error(
      "AI reply not structured as expected: ",
      JSON.stringify(aiReply)
    );
  }
});

// await test("API-KEY is fetched correctly", async () => {
//   equal(API_KEY.length, 51);
// });

// await test("Website loads correctly", () => {
//   equal(document.readyState, "complete");
// });
