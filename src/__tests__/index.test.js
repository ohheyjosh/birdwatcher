import { expect, test } from "@jest/globals";
import { usernames, findUsernames, applyTags } from "../index";

beforeEach(() => {
  // set up document body
  document.body.innerHTML = `
    <main>
      <span>@testusername</span>
    </main>
  `;
})

test("find test username and add to set", () => {
  findUsernames(document);
  expect(usernames).toContain("@testusername");
});

test("add tag to username span", () => {
  const tags = {
    "@testusername": "test tag"
  };
  applyTags(document, { tags }); // applyTags() doesn't actually need the tags arg, i just wanted prettier to stfu
  expect(document.querySelector("span[title='test tag']"));
})
