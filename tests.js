import { test, equal, notEqual, greaterThan } from "/test-helpers.js";

import { fetchKey, getAIReply, callApi } from "./api-requests.js";



await test("Reply is responding with a string", async () => {
  await fetchKey("Hello");
  let aiReply = getAIReply();
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
    )
  }
});

await test("Website loads correctly",() => {
  //  If Website hasn't loaded completely after 5 seconds something is wrong
  setTimeout(() => equal(document.readyState,"complete"),5000);
})