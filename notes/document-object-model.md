## The DOM

#### Is the HTML you write the DOM?

Is the HTML you write the DOM? Nope! The HTML you write is parsed by the browser and turned into the DOM.

#### Is the view source the DOM?

Is the view source the DOM? Nope! View Source just shows you the HTML that makes up that page. It's probably the exact HTML that you wrote.

* view -> developer -> view source

#### Is the code in dev tools the DOM?

Is the code in dev tools the DOM? Kinda! When you're looking at the panel (in whatever DevTools you are using), the panel that shows you stuff that looks like HTML, that is a visual representation of the DOM.

The closest representation you have of the DOM is what you see when you inspect elements.

* Inspect a webpage

It was created directly from your HTML - that's why it kinda looks like it. In most simple cases, the visual representation of the DOM will be just like your simple HTML.

But it's often not the same...

When is the DOM different than the HTML?

* There are mistakes in your HTML and the browser has fixed them for you
* Most likely case, JavaScript can manipulate the DOM (e.g. insert text into an element)
* AJAX and templating

What does the DOM look like?

* The DOM is represented as a tree
* The document is everything from the doctype to the closing html tag (type document into the console)
* https://css-tricks.com/dom/

#### Supplemental Information

Things that are device specific live on the Navigator

* Type navigator in the console
* navigator.online
* navigator.userAgent
```
const ua = window.navigator.userAgent;
const isIE = ua.indexOf(`MSIE `);

if(isIE > 0) {
  alert(`You're using IE!`);
} else {
  alert(`You're not using IE!`)
}
```
```
const ua = window.navigator.userAgent;
const isChrome = ua.indexOf(`Chrome`);

if(isChrome > 0) {
  alert(`You're using Chrome!`);
} else {
  alert(`You're not using Chrome!`)
}
```
The window object contains information about the browser
```
window.screen
```
The document contains information about the current webpage
```
document.querySelector('div');
```
