<p align="center">
  <img width="400" src="assets/icons/flipper.svg">
</p>

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Flipper
Flipper is an open source web extension that allows you to mirror, zoom, and rotate images, text and more. To install it from the Chrome store, [click here](https://chrome.google.com/webstore/detail/flipper/ndbojakfkagkdhnfjdkannpehpfdnaan).

# User Guide
Flipper has two functions: **flipping** and **zooming**. Both are accessed from the right-click context menu.

### Flipping
Flipping allows you rotate an object in place. This is most useful in cases where a video or image has been uploaded mirrored or "reversed".

Right click and access the Flip sub-menu, then choose the Flip Horizontal (Mirror) option.
![Youtube's context menu replacement](assets/examples/default-step-1.png?raw=true)

The result will reverse your selection. This works on images, videos, and even text!
![Youtube's context menu replacement](assets/examples/default-step-2.png?raw=true)

### Zooming
Zooming allows you to focus on a particular area of a video, image, or text.

Right click and access the Zoom sub-menu, then choose the direction you want to focus.
![Youtube's context menu replacement](assets/examples/default-step-3.png?raw=true)

Your element should now be zoomed into the area you've selected.
![Youtube's context menu replacement](assets/examples/default-step-4.png?raw=true)

To reverse the zoom, right click, navigate to the zoom sub-menu, and choose Unzoom.
![Youtube's context menu replacement](assets/examples/default-step-5.png?raw=true)

### Special Cases
Some websites, like Youtube, alter the default behavior of right-clicking:
![Youtube's context menu replacement](assets/examples/youtube-step-1.png?raw=true)
Right-click one more time and the context menu will appear like normal:
![The default context menu reappears](assets/examples/youtube-step-2.png?raw=true)

# Building from Source
Building from source is as straightforward as cloning the project. Although the repo does hold a package.json, it contains only dev-depenedencies. 

Once the repository is cloned, follow instructions for [loading an unpacked extension](https://developer.chrome.com/extensions/getstarted#manifest) or [packing the app yourself](https://support.google.com/chrome/a/answer/2714278?hl=en).

# About
This extension is released under the Mozilla Public License Version 2.0. Feel free to share, distribute, or edit as you see fit.

All instances of the dolphin icon belong to [icons8](https://icons8.com/) and are licensed under [Creative Commons Attribution-NoDerivs 3.0 Unported](https://icons8.com/license).
