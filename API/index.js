const fs = require("fs");
const path = require("path");
const express = require("express");
const handlebars = require("handlebars");
const app = express();

const items = [
    { title: "First title", description: "Some text" },
    { title: "Second title", description: "Some text" },
];

app.get("/", (req, res) => {
    const pathToTample = path.join(__dirname, "templates/home.handlebars");

    fs.readFile(pathToTample, "UTF8", (err, data) => {
        if (err) {
            res.status(500);
            res.send(err.message);
        } else {
            const template = handlebars.compile(data);
            res.send(template({ items }));
        }
    });
});

app.listen(3000);