// Injected JS is wrapped in an IIFE to eliminate 
// possiblity of contaminating any scope.

(() => {
  // This variable holds the last element that the user
  // triggered the context menu on.
  let targetElement;
  
  const contextMenuHandler = (event) => {
    targetElement = event.target;
  };

  const normalizeElement = (element) => {
    if (getComputedStyle(element, null).display === "inline") {
      element.style.display = "inline-block";
    }
  }

  const flipHorizontally = (element) => {
    normalizeElement(element);
    element.classList.toggle("horizontalFlip");
  }

  const flipVertically = (element) => {
    normalizeElement(element);
    element.classList.toggle("verticalFlip");
  }

  document.addEventListener("contextmenu", contextMenuHandler);
  chrome.runtime.onMessage.addListener((message) => {
    switch(message) {
      case "horizontalFlip":
        flipHorizontally(targetElement);
        break;
      case "verticalFlip":
        flipVertically(targetElement);
        break;
    }
  });
})()
