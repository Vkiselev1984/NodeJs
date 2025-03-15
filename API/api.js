const express = require("express");

const app = express();

app.use(express.json());

app.post("/articles", (req, res) => {
    console.log(req.body);
    res.send("<h1>Post</h1>");
});

app.put("/articles", (req, res) => {
    console.log(req.body);
    res.send("<h1>Put</h1>");
});

app.listen(3000);