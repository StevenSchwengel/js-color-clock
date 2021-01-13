## Accessibility

[Events - Accessiblity Gotchas and Keyboard Codes](https://courses.wesbos.com/account/access/5e094f03154f523154480587/view/375561845)

1. Use the correct element in your html, anchors are links and buttons are buttons; anchors are not buttons, but you may style them to look like buttons
2. Elements that are not keyboard accessible (not accessible without the cursor) should not have events registered on them, e.g. click events on images

What if you really want a click event on an image? What can you do?

* Give the image a `role` of `button`
* Wrap the `img` in a `button` and let the click event bubble up
* Add `tabindex='0'` to the `img` (indicates that the element can be focused) and add a `keyup eventListener` that checks for `event.key === 'Enter'`

**Resource**

* http://keycode.info/
