/*
 * check all rendered DOM elements
 * to find spans that match username regex
 */
const isUsername = /^@\w+$/;
const usernames = new Set();
const tags = {}; // TODO: make a storage thingy for this

/*
 * find usernames in main element of page
 * and add to usernames set
 */
const findUsernames = () => {
  // disable check for defining "document" since this runs in browser
  // eslint-disable-next-line no-undef
  for (const span of document.querySelectorAll("main span")) {
    // if span content is a username, add to spans array
    if (isUsername.test(span.innerHTML)) {
      usernames.add(span.innerHTML);
    }
  }
};

/*
 * compare list of usernames on screen
 * to user-set tags, then add tags next to usernames
 */
const applyTags = () => {
  for (const username of usernames) {
    if (Object.keys(tags).find((tag) => tag === username)) {
      // disable check for defining "document" since this runs in browser
      // eslint-disable-next-line no-undef
      for (const span of document.querySelectorAll("main span")) {
        if (span.innerHTML === username) {
          span.innerHTML += ` <span style="position: relative; top: 2px"  title="${tags[username]}">
          <svg width="32" height="16" viewBox="0 0 50 26">
            <path d="M49,0 L13,0 C12.7347835,0 12.4804296,0.10535684 12.2928932,0.292893219 L0.292893219,12.2928932 C-0.0976310729,12.6834175 -0.0976310729,13.3165825 0.292893219,13.7071068 L12.2928932,25.7071068 C12.4804296,25.8946432 12.7347835,26 13,26 L49,26 C49.5522847,26 50,25.5522847 50,25 L50,1 C50,0.44771525 49.5522847,0 49,0 Z" fill="#FFAD1F" fill-rule="nonzero" />
          </svg>
        </span>`;
        }
      }
    }
  }
};

/*
 * run defined functions on each instance
 * of document state refresh
 */
// disable checks for defining "document" since this runs in browser
// eslint-disable-next-line no-undef
document.onreadystatechange = () => {
  // eslint-disable-next-line no-undef
  if (document.readyState === "interactive") {
    findUsernames();
    if (usernames.length) {
      applyTags();
    }
  }
};

export default { findUsernames, applyTags };
