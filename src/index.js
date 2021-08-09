import { applyTags, findUsernames } from './utilities'
import { tweets as tweetsSelector } from './constants/selectors'
import tags from './constants/tags.json'; // TODO: make a storage thingy for this

/*
 * disable undefined checks since a document object will
 * always be present in testing or in the browser
 */
/* eslint-disable no-undef */
let usernames = new Set();
let runCount = 0;

function handleDOMUpdate(){
  // TODO: Remove console log
  console.log('handling Subtree Modification #', runCount++);
  // briefly remove the DOM Subtree Modification listener, since we are about to modify the DOM subtree.
  // this avoids infinite loops.
  if (document.querySelector(tweetsSelector)){
    document.querySelector(tweetsSelector).removeEventListener('DOMSubtreeModified', handleDOMUpdate);
  }
  // On next tick, modify the DOM
  setTimeout(function(){
    const newUsernames = findUsernames();
    const mergedSets = new Set([...usernames, ...newUsernames]) // merge the two sets
    usernames = mergedSets; // update state
    applyTags(tags, usernames);
    if (document.querySelector(tweetsSelector)){
      // add a listener for DOMSubtreeModified events to update tags again
      document.querySelector(tweetsSelector).addEventListener('DOMSubtreeModified', handleDOMUpdate);
    }
  }, 10);
}


// Set an interval on page load to check if the timeline exists
const timelineCheckInterval = setInterval(() => {
  if (document.querySelector(tweetsSelector)){
    handleDOMUpdate()
    clearInterval(timelineCheckInterval);
  }
}, 200);
