/*
 * check all rendered DOM elements
 * to find spans that match username regex
 */
const isUsername = /^@\w+$/;
const usernames = [];

// disable check for defining "document" since this runs in browser
// eslint-disable-next-line no-undef
for (const span of document.querySelectorAll("span")) {
  // if span content is a username, add to spans array
  if (isUsername.test(span.innerHTML)) {
    usernames.push(span.innerHTML);
  }
}
