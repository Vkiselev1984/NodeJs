const express = require("express");
const fs = require("fs");
const path = require("path");
const validateArticle = require("./validate"); // Import the validation function
const exphbs = require("express-handlebars").engine; // Import Handlebars

const app = express();
const articlesFilePath = path.join(__dirname, "articles.json"); // Path to the file for storing articles
let articles = []; // Array for storing articles

// Middleware for processing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For processing form data

app.use(express.static(path.join(__dirname, "public")));

// Handlebars setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views")); // Specify the directory for templates

// Function for loading articles from a file
const loadArticles = () => {
    if (fs.existsSync(articlesFilePath)) {
        try {
            const data = fs.readFileSync(articlesFilePath);
            articles = JSON.parse(data); // Load articles from a file
        } catch (err) {
            console.error("Error loading articles:", err.message);
            articles = []; // If an error occurred, initialize an empty array
        }
    }
};

// Function for saving articles to a file
const saveArticles = () => {
    fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2)); // Save articles to a file
};

let uniqueID = articles.length > 0 ? Math.max(...articles.map(article => article.id)) : 0; // Set a unique ID

// Load articles when the server starts
loadArticles();

// Home page displaying all articles
app.get("/", (req, res) => {
    res.render("home", { articles }); // Render the home.handlebars template with article data
});

// Handler for POST request to create an article
app.post("/articles", (req, res) => {
    const { error } = validateArticle(req.body); // Validate data

    if (error) {
        return res.status(400).send({ error: error.details[0].message }); // Return validation error
    }

    uniqueID += 1;
    const newArticle = {
        id: uniqueID,
        ...req.body,
    };
    articles.push(newArticle); // Add a new article to the array
    saveArticles(); // Save articles to file

    res.redirect("/"); // Redirect to the main page
});

// Handler for GET request to get specific article by ID
app.get("/articles/:id", (req, res) => {
    const { id } = req.params; // Get ID from URL parameters
    const article = articles.find(article => article.id == id); // Search for article by ID

    if (!article) {
        return res.status(404).send({ error: "Article not found" }); // Return 404 if not found
    }

    res.render("article", { article }); // Render article.handlebars template with article data
});

// Handler for GET request to get article edit page
app.get("/articles/:id/edit", (req, res) => {
    const { id } = req.params; // Get ID from URL parameters
    const article = articles.find(article => article.id == id); // Search for article by ID

    if (!article) {
        return res.status(404).send({ error: "Article not found" }); // Return 404 if not found
    }

    res.render("edit", { article }); // Render edit.handlebars template with article data
});

// Handler for POST request to update article
app.post("/articles/:id/update", (req, res) => {
    const { id } = req.params; // Get ID from URL parameters
    const articleIndex = articles.findIndex(article => article.id == id); // Find article index in array

    if (articleIndex === -1) {
        return res.status(404).send({ error: "Article not found" }); // Return 404 if not found
    }

    const { error } = validateArticle(req.body); // Validate data

    if (error) {
        return res.status(400).send({ error: error.details[0].message }); // Return validation error
    }

    // Update article with new data
    articles[articleIndex] = {
        ...articles[articleIndex], // Save existing data
        ...req.body, // Update with data from the request body
    };

    saveArticles(); // Save updated articles to file
    res.redirect("/"); // Redirect to the main page
});

// Handler for POST request to delete an article
app.post("/articles/:id/delete", (req, res) => {
    const { id } = req.params; // Get ID from URL parameters
    const articleIndex = articles.findIndex(article => article.id == id); // Find article index in array

    if (articleIndex === -1) {
        return res.status(404).send({ error: "Article not found" }); // Return 404 if not found
    }

    articles.splice(articleIndex, 1); // Delete article from array
    saveArticles(); // Save updated articles to file
    res.redirect("/"); // Redirect to main page
});

// Start the server
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});