// Injected JS is wrapped in an IIFE to eliminate 
// any possiblity of contaminating the global scope
(() => {
  const contextMenuHandler = (event) => {
    const target = event.target;
    chrome.runtime.sendMessage("contextSelected", target);
  }
  document.addEventListener("contextmenu", contextMenuHandler);
})()
