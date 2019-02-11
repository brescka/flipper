const topLevelMenu = chrome.contextMenus.create({
  "id": "topLevel",
  "title": "flipper",
  "contexts": ["all"]
})

const flipHorizontallyMenu = chrome.contextMenus.create({
  "id": "horizontalFlip",
  "title": "Flip Horizontally (Mirror)",
  "parentId" : topLevelMenu,
  "contexts": ["all"]
})

const flipVerticallyMenu = chrome.contextMenus.create({
  "id": "verticalFlip",
  "title": "Flip Vertically",
  "parentId" : topLevelMenu,
  "contexts": ["all"]
})

chrome.contextMenus.onClicked.addListener((data, tab)=>{
  chrome.tabs.sendMessage(tab.id, data.menuItemId);
});