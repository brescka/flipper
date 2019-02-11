const topLevel = chrome.contextMenus.create({
  "title": "flipper" 
})

const mirrorHorizontally = chrome.contextMenus.create({
  "title": "Mirror Horizontally",
  "parentId" : topLevel,
  "onClicked": mirrorHorizontally
})

const mirrorHorizontally = (data) => {
  
}