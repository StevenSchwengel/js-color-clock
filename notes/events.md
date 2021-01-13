## DOM events

DOM elements emit events when they are interacted with - hovered, clicked, scrolled, etc. You can attach events to all elements as well as the `window` object.
```
button.addEventListener('click', callback);
```
```
button.removeEventListener(functionName);
```
You cannot remove an eventListener if you added it as an anonymous function. It can't be referenced for removal.
```
 const buttons = document.querySelectorAll('button');
```
## Event Object
```
function handleButtonClick() {
  console.log('You clicked a button!');
}

buttons.forEach(function(button){
  button.addEventListener('click', handleButtonClick);
});
```
```
function handleButtonClick(event) {
  /* The event object is the first argument passed when an event fires */
  console.log(event);

  /* event.isTrusted -> true if it's a mouse event; false if mouse event is faked with JS */
  /* event.pressure -> newer iPads have pressure sensitivity values */

  console.log(event.target);

  /* event.target vs. event.currentTarget */
  /* The difference comes in when you have nested elements */
  /* event.target is what the user clicks, e.g. a strong tag inside a button */
  /* event.currentTarget is the element that fires the eventListener, e.g. the button */

  console.log(event.target === event.currentTarget)
}

buttons.forEach(function(button){
  button.addEventListener('click', handleButtonClick);
});
```
## Event Propagation

Event propagation is a way to describe how events fire and are handled in the DOM.

Events bubble up!
```
function handleButtonClick() {
  console.log('You clicked a button!');
}

buttons.forEach(function(button){
  button.addEventListener('click', handleButtonClick);
});

window.addEventListener('click', function(){
  console.log('You clicked the window!');
});
```
You can stop propagation if you need to.
```
function handleButtonClick() {
  console.log('You clicked a button!');

  // Stop this event from bubbling up
  event.stopPropagation();
}

buttons.forEach(function(button){
  button.addEventListener('click', handleButtonClick);
});

window.addEventListener('click', function(){
  console.log('You clicked the window!');
});
```
## Event Capture Phase vs Event Bubbling Phase

**Capture Phase**
The process by which an event can be handled by one of the target’s ancestors before being handled by the event target.

**Bubbling Phase**
The process by which an event can be handled by one of the target’s ancestors after being handled by the event target.

https://www.w3.org/TR/uievents/#event-flow

When you listen for any event, you have the option to listen on the capture phase. To listen on the capture phase, pass an optional options object as the third argument to `addEventListener`.
```
function handleButtonClick() {
  console.log('You clicked a button!');
}

buttons.forEach(function(button){
  button.addEventListener('click', handleButtonClick);
});

/* event is dispatched from the target moving from the root of the tree to the target node */
window.addEventListener('click', function(){ // 1. "regular" click event on the window
  console.log('You clicked the window!');
  event.stopPropagation(); // 3. add event.stopPropagation; stop this event from propagating down
}, {capture: true}); // 2. add {capture: true}
```
*This is probably more of an interview question than code you'll actually write.*

## Value of `this` inside eventListeners
```
function handleButtonClick() {
  /* This is the element the event was called against, a.k.a `event.currentTarget`
  console.log(this);
}

buttons.forEach(function(button){
  button.addEventListener('click', handleButtonClick);
});
```
If you change your function declaration to an arrow function, `this` keyword is no longer scoped to the element.

It's recommended that you use `event.target` or `currentTarget` inside your event listeners.
```
buttons.forEach(function(button){
  button.addEventListener('click', () => console.log(this));
});
```
## event.preventDefault()

* Demo to cancel out anchor tag click event
* Demo to cancel out submit button on a form

* Demo confirmation inside callback to confirm if user wants to navigate to next package
  * If yes, let it run
  * If no, `preventDefault()`
```
form.addEventListener('submit', function(e){
  console.log(e.currentTarget.name.value);
  console.log(e.currentTarget.email.value);
});
```
## Resources

* https://developer.mozilla.org/en-US/docs/Web/API/Document#Keyboard_events
* https://developer.mozilla.org/en-US/docs/Web/API/Document#Event_handlers

* https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
* https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
* https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
* https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event

## Misc

* How to preserve your log?
  * Gear icon
  * Select preserve log
