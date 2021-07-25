/*
 * check all rendered DOM elements
 * to find spans that match username regex
 */
const isUsername = /^@\w+$/;
const usernames = [];
const tags = {}; // TODO: make a storage thingy for this

// disable check for defining "document" since this runs in browser
// eslint-disable-next-line no-undef
for (const span of document.querySelectorAll("span")) {
  // if span content is a username, add to spans array
  if (isUsername.test(span.innerHTML)) {
    usernames.push(span.innerHTML);
  }
}

/*
 * compare list of usernames on screen
 * to user-set tags, then add tags next to usernames
 */
for (const username of usernames) {
  if (Object.keys(tags).find((tag) => tag === username)) {
    // TODO: find every instance of username, then insert tag
  }
}
