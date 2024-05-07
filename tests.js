import { test, equal, notEqual, greaterThan } from "/test-helpers.js";

import { fetchKey, getAIReply, callApi, API_KEY } from "./api-requests.js";

await test("Reply is responding with a string", async () => {
  await fetchKey();
  await callApi("Hello");
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

await test("Fetch-Key gets API-KEY", async () =>{
  await fetchKey();
  equal(API_KEY.length, 51);
});

await test("Website loads correctly",() => {
   equal(document.readyState,"complete");
});