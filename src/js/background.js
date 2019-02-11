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

const rotateRightMenu = chrome.contextMenus.create({
  "id": "rotateRight",
  "title": "Rotate Right (90° Clockwise)",
  "parentId" : topLevelMenu,
  "contexts": ["all"]
})

const rotateLeftMenu = chrome.contextMenus.create({
  "id": "rotateLeft",
  "title": "Rotate Left (90° Counterclockwise)",
  "parentId" : topLevelMenu,
  "contexts": ["all"]
})

chrome.contextMenus.onClicked.addListener((data, tab)=>{
  chrome.tabs.sendMessage(tab.id, data.menuItemId);
});