const { v4: uuidv4 } = require('uuid');
const id = uuidv4();

const math = require("./math.js");

console.log(math.add(1, 2));
console.log(math.subtract(1, 2));
console.log(id);