// Injected JS is wrapped in an IIFE to eliminate
// possiblity of contaminating any scope.
(() => {
  // This variable holds the last element that the user
  // triggered the context menu on.
  let targetElement

  // Data structure that allows us to keep track of different
  // elements's own rotation angles in an easy way.
  let angleMap = new Map([])

  const contextMenuHandler = (event) => {
    targetElement = event.target
  }

  // The following three functions maniuplate the DOM
  // in relatively naive ways, overwriting style attributes.
  // This can be made much smarter in the future.
  const rotate = (element, rotationAngle) => {
    normalizeElement(element)
    let currentAngle
    if (!angleMap.has(element)) {
      const defaultAngle = 0
      angleMap.set(element, defaultAngle)
      currentAngle = defaultAngle
    } else {
      currentAngle = angleMap.get(element)
    }
    const newAngle = currentAngle + rotationAngle
    element.style.transform = `rotate(${newAngle}deg)`
    angleMap.set(element, newAngle)
  }

  const zoom = (element, originArray) => {
    normalizeElement(element)
    const transformOrigin = originArray.join(' ')
    element.style.transform = 'scale(1.75)'
    element.style.transformOrigin = transformOrigin
  }

  const unzoom = (element) => {
    element.style.transform = ''
  }

  const flipHorizontally = (element) => {
    normalizeElement(element)
    element.classList.toggle('horizontalFlip')
  }

  const flipVertically = (element) => {
    normalizeElement(element)
    element.classList.toggle('verticalFlip')
  }

  // Because inline elements cannot be transformed, we have to convert them
  // to inline-blocks.
  const normalizeElement = (element) => {
    if (window.getComputedStyle(element, null).display === 'inline') {
      element.classList.add('flipperNormalized')
    }
  }

  // Ugly pattern that is the result of the limitations of communication
  // between content and background JS. This function is a giant handler
  // that translates messages sent from the background to match functionality
  // to specific context menu selections.
  document.addEventListener('contextmenu', contextMenuHandler)
  chrome.runtime.onMessage.addListener((message) => {
    switch (message) {
      case 'horizontalFlip':
        flipHorizontally(targetElement)
        break
      case 'verticalFlip':
        flipVertically(targetElement)
        break
      case 'rotateRight':
        rotate(targetElement, 90)
        break
      case 'rotateLeft':
        rotate(targetElement, -90)
        break
      case 'zoomCenter':
        zoom(targetElement, ['center'])
        break
      case 'zoomTopLeft':
        zoom(targetElement, ['top', 'left'])
        break
      case 'zoomBottomLeft':
        zoom(targetElement, ['bottom', 'left'])
        break
      case 'zoomTopRight':
        zoom(targetElement, ['top', 'right'])
        break
      case 'zoomBottomRight':
        zoom(targetElement, ['bottom', 'right'])
        break
      case 'unzoom':
        unzoom(targetElement)
        break
    }
  })
})()
