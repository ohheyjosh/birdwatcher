const isUsername = /^@\w+$/;
/*
 * find usernames in main element of page
 * and add to usernames set
 */
const findUsernames = () => {
    const usernames = new Set()
    for (const span of document.querySelectorAll("main span")) {
        // if span content is a username, add to spans array
        if (isUsername.test(span.innerHTML)) {
            usernames.add(span.innerHTML);
        }
    }
    return usernames;
};

export { findUsernames };