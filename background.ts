import { createPopper } from '@popperjs/core';
const tooltip = document.createElement('div');
tooltip.id = 'sb-tooltip';
tooltip.innerHTML = 'Hellooooooo';


window.addEventListener('mouseup', (event)=>{
  let selection = window.getSelection();
  if(!selection){
    return;
  }

  console.log(selection);
});


function getword(info: chrome.contextMenus.OnClickData, tab) {
  if (info.menuItemId !== "STUDY_BUDDY") {
    return;
  }

  // createPopper(?????, tooltip, {
  //   placement: 'left',
  // });

  chrome.tabs.create({url: "https://en.wikipedia.org/w/index.php?search=" + info.selectionText});
}

chrome.contextMenus.create({
  title: "Search with StudyBuddy", 
  contexts:["selection"], 
  id: "STUDY_BUDDY"
});

chrome.contextMenus.onClicked.addListener(getword)
