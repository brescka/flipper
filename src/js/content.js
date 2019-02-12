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
    element.setAttribute('style', `transform: rotate(${newAngle}deg)`)
    angleMap.set(element, newAngle)
  }

  const zoom = (element, originArray) => {
    normalizeElement(element)
    const transformOrigin = originArray.join(' ')
    const currentStyle = element.style
    element.style.transform = 'scale(1.75)'
    element.style.transformOrigin = transformOrigin
    // element.setAttribute('style', `${currentStyle} transform: scale(1.75); transform-origin: ${transformOrigin}`)
  }

  const unzoom = (element) => {
    element.style.transform = ''
  }

  // Because inline elements cannot be transformed, we have to convert them
  // to inline-blocks.
  const normalizeElement = (element) => {
    if (window.getComputedStyle(element, null).display === 'inline') {
      element.classList.add('flipperNormalized')
    }
  }

  const flipHorizontally = (element) => {
    normalizeElement(element)
    element.classList.toggle('horizontalFlip')
  }

  const flipVertically = (element) => {
    normalizeElement(element)
    element.classList.toggle('verticalFlip')
  }

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
