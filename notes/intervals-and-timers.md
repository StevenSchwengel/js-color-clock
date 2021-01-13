## JavaScript Timers

It is possible to do things over time with JavaScript. To do something just once, later, use `setTimeout`. To do something over and over, use `setInterval`.

**setTimeout(callback, ms)**

This means that the function should be run no less than, but possibly great than x milliseconds from now (1000ms = 1s)
```
setTimeout(function() {
  alert('Your banking session has ended for your security!');
}, 36000);
```
**setInterval(callback, ms)**

This means that this function will be repeated every x milliseconds. Use `clearInterval` to stop the call.
```
setInterval(function() {
  document.querySelector('.time').textContent = Date.now();
}, 36000);
```
If you want to clear an interval, you must save a reference to that interval.
```
const time = setInterval(function() {
  document.querySelector('.time').textContent = Date.now();
}, 36000);

clearInterval(everySecond);
```
You can pass a function by reference as the callback.
```
const setTime = () => {
  document.querySelector('.time').textContent = Date.now();
}

const time = setInterval(setTime, ms);
```
Another example!
```
function destroy() {
  document.body.innerHTML = `Kablewey! Mwahahahaha!`
}

const bombTimer = setTimeout(destroy, 5000);

window.addEventListener('click', function() {
  clearTimeout(bombTimer);
  document.body.innerHTML = `Drats! No go boom!`
});
```
Another example!
```
function motivate() {
  const sayings = ['You are awesome!', 'You can do it!', 'Way to go!', 'You are doing great!'];

  const randomIndex = Math.floor(Math.random() * sayings.length);
  const text = sayings[randomIndex];

  console.log(`Hey, you! ${text}`);
}

const motivationTimer = setInterval(motivate, 1000);

setTimeout(function() {
  console.log('Ok. Pull it together! Get back to work! ;-)');
  clearInterval(motivationTimer);
}, 5000);
```
