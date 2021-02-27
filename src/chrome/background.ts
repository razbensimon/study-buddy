export {};

chrome.contextMenus.onClicked.addListener((info: chrome.contextMenus.OnClickData) => {
    if (info.menuItemId !== "STUDY_BUDDY") {
        return;
    }

    // import { createPopper } from '@popperjs/core';
    // createPopper(?????, tooltip, {
    //   placement: 'left',
    // });

    chrome.tabs.create({url: "https://en.wikipedia.org/w/index.php?search=" + info.selectionText});
});

chrome.contextMenus.create({
    title: "Search with StudyBuddy",
    contexts: ["selection"],
    id: "STUDY_BUDDY"
});