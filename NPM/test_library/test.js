const { createElement, addClass, removeClass, setAttribute, removeElement } = require('html_works_with_elem'); // Make sure the library path is correct

// Create a new element
const newDiv = createElement('div', { class: 'my-class', id: 'my-div' }, 'Hello, world!');
console.log(newDiv); // Outputs: <div class="my-class" id="my-div">Hello, world!</div>

// Add a class
const updatedDiv = addClass(newDiv, 'another-class');
console.log(updatedDiv); // Outputs: <div class="my-class another-class" id="my-div">Hello, world!</div>

// Remove a class
const withoutClass = removeClass(updatedDiv, 'my-class');
console.log(withoutClass); // Outputs: <div class="another-class" id="my-div">Hello, world!</div>

// Set the attribute
const elementWithAttr = setAttribute(withoutClass, 'data-info', 'some data');
console.log(elementWithAttr); // Outputs: <div class="another-class" id="my-div" data-info="some data">Hello, world!</div>

// Remove the element
const removedElement = removeElement();
console.log(removedElement); // Outputs: ''