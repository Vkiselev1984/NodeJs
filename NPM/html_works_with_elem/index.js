// index.js

/**
 * Создает новый HTML элемент в виде строки.
 * @param {string} tag - Название тега элемента.
 * @param {Object} attributes - Объект атрибутов для элемента.
 * @param {string} innerHTML - Внутренний HTML для элемента.
 * @returns {string} - Строка с HTML-кодом элемента.
 */
function createElement(tag, attributes = {}, innerHTML = '') {
    let attrString = '';
    for (const key in attributes) {
        attrString += ` ${key}="${attributes[key]}"`; // Формируем строку атрибутов
    }
    return `<${tag}${attrString}>${innerHTML}</${tag}>`;
}

/**
 * Добавляет класс к элементу (в виде строки).
 * @param {string} element - HTML элемент в виде строки.
 * @param {string} className - Название класса.
 * @returns {string} - Обновленный HTML элемент.
 */
function addClass(element, className) {
    return element.replace(/class="([^"]*)"/, (match, classes) => `class="${classes} ${className}"`);
}

/**
 * Удаляет класс из элемента (в виде строки).
 * @param {string} element - HTML элемент в виде строки.
 * @param {string} className - Название класса.
 * @returns {string} - Обновленный HTML элемент.
 */
function removeClass(element, className) {
    return element.replace(new RegExp(`\\s?${className}`, 'g'), '').trim();
}

/**
 * Устанавливает атрибут элемента (в виде строки).
 * @param {string} element - HTML элемент в виде строки.
 * @param {string} attribute - Название атрибута.
 * @param {string} value - Значение атрибута.
 * @returns {string} - Обновленный HTML элемент.
 */
function setAttribute(element, attribute, value) {
    return element.replace(/(.*?)(>)/, `$1 ${attribute}="${value}"$2`);
}

/**
 * Удаляет элемент из строки (в виде строки).
 * @param {string} element - HTML элемент в виде строки.
 * @returns {string} - Пустая строка.
 */
function removeElement() {
    return '';
}

// Экспортируем функции
module.exports = {
    createElement,
    addClass,
    removeClass,
    setAttribute,
    removeElement
};