chrome.runtime.onInstalled.addListener(() => {
  console.log("I have been installed");
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log("I just bookmarked an page.");
});
