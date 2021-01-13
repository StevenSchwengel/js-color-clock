## Selecting Elements

Why do we add the script tag at the bottom of `body` element?

*Demo putting the script tag at the top of the `body` element and selecting an element. Demo putting the script tag at the bottom of the `body` element and selecting the same element.*

What about document ready?
https://www.sitepoint.com/jquery-document-read-plain-javascript
```
jQuery(function($) {
  // Document ready isn't necessary if you add the script tag at the bottom of the `body` element
})
```
```
const element = document.querySelector('div');
console.log(element);
```
```
/* elements is a NodeList, not an array, and it does not have all array methods */
const elements = document.querySelectorAll('div'); //
console.log(elements);
```
```
const item1 = document.querySelector('div');
const item2 = item1.querySelector('img');
```
## Element Properties and Methods
```
const element = document.querySelector('h2');

/* It may look like just an element, but it's actually an object that has a lot of properties and methods inside of it */
console.log(element)
console.dir(element);
```
```
/* Getter */
console.log(element.textContent)
```
```
/* Setter */
element.textContent = 'Hello, World!';
console.log(element.textContent)
console.log(element.innerText)
```
* `textContent` is newer than `innerText`
* `textContent` gets the content of all elements, including script and style elements
* `innerText` only targets 'human-readable' elements
* `textContent` returns the element in the node
* `innerText` is aware of styling and won't return the text of 'hidden' elements that have `display: none` set

`Element` is the most general base class from which all elements in a `Document` inherit. https://developer.mozilla.org/en-US/docs/Web/Api/Element
```
element.classList

/* Can't chain classes like you can in jQuery */
element.classList.add('new-class-name');
element.classList.add('new-class-name').add('another-class-name');

element.classList.remove('new-class-name');
element.classList.toggle('new-class-name');
```
```
function toggleRound(event) {
  event.target.classList.toggle('round');
}

const element = document.querySelector('img');
element.addEventListener('click', toggleRound);
```
### Element Attributes
```
/* Do not use `image of cute pup` or `photo of cute pup` because people with screen readers will know it's an image. */
pic.alt = 'cute pup'

pic.width = 200;
```
```
/* The callback will fire after all images, css, and elements have loaded */
window.addEventListener('load', callback);

/* The callback will fire after the element has loaded */
/* For images downloaded from an url, the callback fires after image is returned */
element.addEventListener('load', callback);
```
What about putting the `script` tag at the bottom of the page? Why have a `load` event on an `img` tag? Won't any JS that targets that image, e.g. grabbing the image size, run after the image loads? No!

The HTML will load, but if the HTML then makes additional requests, e.g. downloading images, the `script` may fire before those requests complete.

If you're getting or setting a non-standard attribute (a made-up attribute), you have to use `element.setAttribute(<attribute>, <value>)`. This can lead to issues if your attribute name is later adopted as part of the standard.

Instead, you should use `data-attribute`.
```
<img data-name='Charlie' ... />
```
`Element.dataset` will access the data attributes on an element. It will return an object that has the data properties listed.

Use case, you could grab information from the element to use in a DOM event, e.g. `click` event.

## Creating Elements
```
const div = document.createElement('div');
div.textContent = 'Hello, World!';
div.classList.add('uppercase');

/* Use `appendChild` instead of append due to browser support */
document.querySelector('body').appendChild(div);
```
```
const image = document.createElement('img');
image.src = '....';
image.alt = 'Cute pup'

/* The `Document` gives us reference to `body` element */
/* Not all elements are accessible this way */
document.body.appendChild(image);
```
```
const heading = document.createElement('h1');
heading.textContent = 'Awesomely Ugly Website';
document.body.insertAdjacentElement('afterbegin', heading);
```
## Creating HTML with Strings
An alternative to `document.create` and `append`
```
const myHTML = `
<heading>
  <h1>heading here</h1>
  <p>Lorem ipsum dolor sit amet.</p>
  <img src="${src}" alt="${desc}"/>
</heading>
`
```
Here we're working with a `String`, so we can't do things like like `myHTML.classList.add('some-new-class');`

`classList` is not accessible on a `String`, and the `String` is only converted into a DOM element after we put in to the DOM. The browser reads the `String` and creates the element(s).

In order to target the `String` as an element, you would have to select it after it was added to the DOM. Then you could access attributes.

-OR-

You can use `createRange` and `createContextualFragment` to create a document fragment (some HTML) prior to dumping it into the DOM.
```
const myFragment = document.createRange().createContextualFragment(myHTML);
myFragment.querySelector('img');
```
### Cross Site Scripting (XSS)

Creating HTML using strings can cause a security vulnerability if the strings depend on user input. A user could introduce a `script` tag, for example, into the HTML if strings are not sanitized.

Example 1
```
`I <3 Pink! <style>* {background: pink}</style>`
```
Example 2
```
`Taco Monster <img src="./images/duck.png" onload="alert('I am here to steal all the tacos!')"/>`
```
This can happen anytime you take un-sanitized user input and inject it into the DOM.

## Traversing the DOM

What is the difference between a `node` and an `element`? An `element` is an opening and closing tag, each part contained in the `element`, including the element: the tag, the text, the attributes, etc. are `nodes`.
```
document.querySelector('body').children;
document.querySelector('body').childNodes;
```
These getters target elements:

* `element.firstElementChild``
* `element.lastElementChild`
* `element.previousElementSibling`
* `element.nextElementSibling`
* `element.parentElement`
* `element.parentElement.parentElement.firstElementChild`

These getters target nodes:

* `el.childNodes`
* `el.firstChild`
* `el.lastChild`
* `el.previousSibling`
* `el.nextSibling`
* `el.parentNode`

How do we remove an element?

* `element.remove();`
