const Handlebars = require("handlebars");

// Helper for extending templates
Handlebars.registerHelper("extend", function (name, options) {
    // Save content in a variable
    const content = options.fn(this);

    // Return content for the layout
    return content;
});