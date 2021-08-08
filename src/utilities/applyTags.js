import { possibleUsernames as possibleUsernamesSelector } from '../constants/selectors'

/*
 * compare list of usernames on screen
 * to user-set tags, then add tags next to usernames
 */
const applyTags = (tags, usernames) => {
    for (const username of usernames) {
        if (tags[username]) {
            for (const span of document.querySelectorAll(possibleUsernamesSelector)) {
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

export { applyTags }; 