// Injected JS is wrapped in an IIFE to eliminate 
// possiblity of contaminating any scope.
(() => {
  // This variable holds the last element that the user
  // triggered the context menu on.
  let targetElement;
  
  // Data structure that allows us to keep track of different
  // elements's own rotation angles in an easy way.
  let angleMap = new Map([]);

  const contextMenuHandler = (event) => {
    targetElement = event.target;
  };

  const rotate = (element, rotationAngle) => {
    normalizeElement(element);
    let currentAngle;
    if (!angleMap.has(element)) {
      angleMap.set(element, 0);
      currentAngle = 0;
    } else {
      currentAngle = angleMap.get(element);
    }
    const newAngle = currentAngle + rotationAngle;
    element.setAttribute("style", `transform: rotate(${newAngle}deg)`);
    angleMap.set(element, newAngle);
  };

  const normalizeElement = (element) => {
    if (getComputedStyle(element, null).display === "inline") {
      element.classList.add("flipperNormalized");
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
      case "rotateRight":
        rotate(targetElement, 90);
        break;
      case "rotateLeft":
        rotate(targetElement, -90);
        break;
    }
  });
})()
