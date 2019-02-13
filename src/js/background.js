// This script's only responsibility
// is to generate the context menu and
// communicate to the injected JS which
// option was selected.
chrome.runtime.onInstalled.addListener(() => {
  const topLevelMenu = chrome.contextMenus.create({
    'id': 'topLevel',
    'title': 'Flipper',
    'contexts': ['all']
  })

  const flipMenu = chrome.contextMenus.create({
    'id': 'flipMenu',
    'parentId': topLevelMenu,
    'title': 'Flip',
    'contexts': ['all']
  })

  const zoomMenu = chrome.contextMenus.create({
    'id': 'zoomMenu',
    'parentId': topLevelMenu,
    'title': 'Zoom',
    'contexts': ['all']
  })

  chrome.contextMenus.create({
    'id': 'horizontalFlip',
    'title': 'Flip Horizontally (Mirror)',
    'parentId': flipMenu,
    'contexts': ['all']
  })

  chrome.contextMenus.create({
    'id': 'verticalFlip',
    'title': 'Flip Vertically',
    'parentId': flipMenu,
    'contexts': ['all']
  })

  chrome.contextMenus.create({
    'id': 'rotateRight',
    'title': 'Rotate Right (90° Clockwise)',
    'parentId': flipMenu,
    'contexts': ['all']
  })

  chrome.contextMenus.create({
    'id': 'rotateLeft',
    'title': 'Rotate Left (90° Counterclockwise)',
    'parentId': flipMenu,
    'contexts': ['all']
  })

  chrome.contextMenus.create({
    'id': 'zoomCenter',
    'title': 'Zoom Center',
    'parentId': zoomMenu,
    'contexts': ['all']
  })

  chrome.contextMenus.create({
    'id': 'zoomTopLeft',
    'title': 'Zoom Top Left',
    'parentId': zoomMenu,
    'contexts': ['all']
  })

  chrome.contextMenus.create({
    'id': 'zoomBottomLeft',
    'title': 'Zoom Bottom Left',
    'parentId': zoomMenu,
    'contexts': ['all']
  })

  chrome.contextMenus.create({
    'id': 'zoomTopRight',
    'title': 'Zoom Top Right',
    'parentId': zoomMenu,
    'contexts': ['all']
  })

  chrome.contextMenus.create({
    'id': 'zoomBottomRight',
    'title': 'Zoom Bottom Right',
    'parentId': zoomMenu,
    'contexts': ['all']
  })

  chrome.contextMenus.create({
    'id': 'unzoom',
    'title': 'Unzoom',
    'parentId': zoomMenu,
    'contexts': ['all']
  })
})

chrome.contextMenus.onClicked.addListener((data, tab) => {
  chrome.tabs.sendMessage(tab.id, data.menuItemId)
})
