// index.js

/**
* Creates a new HTML element as a string.
* @param {string} tag - The element's tag name.
* @param {Object} attributes - The attributes object for the element.
* @param {string} innerHTML - The inner HTML for the element.
* @returns {string} - The string with the HTML code of the element.
*/
function createElement(tag, attributes = {}, innerHTML = '') {
    let attrString = '';
    for (const key in attributes) {
        attrString += ` ${key}="${attributes[key]}"`; // Generate the attributes string
    }
    return `<${tag}${attrString}>${innerHTML}</${tag}>`;
}

/**
* Adds a class to the element (as a string).
* @param {string} element - HTML element as a string.
* @param {string} className - Class name.
* @returns {string} - Updated HTML element.
*/
function addClass(element, className) {
    return element.replace(/class="([^"]*)"/, (match, classes) => `class="${classes} ${className}"`);
}

/**
* Removes a class from an element (as a string).
* @param {string} element - The HTML element as a string.
* @param {string} className - The class name.
* @returns {string} - The updated HTML element.
*/
function removeClass(element, className) {
    return element.replace(new RegExp(`\\s?${className}`, 'g'), '').trim();
}

/**
* Sets an attribute of an element (as a string).
* @param {string} element - The HTML element as a string.
* @param {string} attribute - The attribute name.
* @param {string} value - Attribute value.
* @returns {string} - Updated HTML element.
*/
function setAttribute(element, attribute, value) {
    return element.replace(/(.*?)(>)/, `$1 ${attribute}="${value}"$2`);
}

/**
* Removes an element from a string (as a string).
* @param {string} element - HTML element as a string.
* @returns {string} - Empty string.
*/
function removeElement() {
    return '';
}

// Export functions
module.exports = {
    createElement,
    addClass,
    removeClass,
    setAttribute,
    removeElement
};