const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

const items = [
    { title: "First title!", description: "Some text" },
    { title: "Second title!", description: "Some text" },
];

app.get("/", (req, res) => {
    res.render("home", { title: "Home", items });
});

app.listen(3000);