# HTML Helper

A simple library for working with HTML elements.

## Installation

```bash
npm install html_works_with_elem
```

## Usage

```javascript
const {
  createElement,
  addClass,
  removeClass,
  setAttribute,
  removeElement,
} = require("html_works_with_elem");

// Create a new element
const newDiv = createElement(
  "div",
  { class: "my-class", id: "my-div" },
  "Hello, world!"
);
document.body.appendChild(newDiv);

// Add a class
addClass(newDiv, "another-class");

// Remove a class
removeClass(newDiv, "my-class");

// Set an attribute
setAttribute(newDiv, "data-info", "some data");

// Remove an element
removeElement(newDiv);
```
