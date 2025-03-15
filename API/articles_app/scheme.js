const Joi = require("joi");

const articleSchema = Joi.object({
    title: Joi.string().min(1).required(), // Title must be a string and is required
    content: Joi.string().min(1).required() // Content must be a string and is required
});

module.exports = articleSchema; // Export the schema for use in other files