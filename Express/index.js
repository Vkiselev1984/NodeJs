const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(Path.join(__dirname + "/index.html"));
});

app.listen(3000, () => {
    console.log("Server is running");
});
