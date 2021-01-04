
function getword(info,tab) {
  if (info.menuItemId !== "STUDY_BUDDY") {
    return;
  }
  chrome.tabs.create({url: "https://en.wikipedia.org/w/index.php?search=" + info.selectionText});
}

chrome.contextMenus.create({
  title: "Search with StudyBuddy", 
  contexts:["selection"], 
  id: "STUDY_BUDDY"
});

chrome.contextMenus.onClicked.addListener(getword)
