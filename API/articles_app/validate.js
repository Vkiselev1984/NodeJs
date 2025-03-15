// validate.js
const articleSchema = require("./scheme");

const validateArticle = (data) => {
    return articleSchema.validate(data); // Validate data using schema
};

module.exports = validateArticle; // Export validation function