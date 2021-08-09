import { expect, test } from "@jest/globals";
import { findUsernames, applyTags } from "../utilities";

let usernames = new Set();

beforeEach(() => {
  // set up document body
  document.body.innerHTML = `
    <main>
      <span id="test-username-element">@testusername</span>
    </main>
  `;
})

test("find test username and add to set", () => {
  const newUsernames = findUsernames();
  const mergedSets = new Set([...usernames, ...newUsernames]) // merge the two sets
  usernames = mergedSets; // update state
  expect(usernames).toContain("@testusername");
});

test("add tag to username span", () => {
  const tags = {
    "@testusername": "an awesome person"
  };
  applyTags(tags, usernames);
  expect(document.querySelector("#test-username-element span[title='an awesome person']"));
})
