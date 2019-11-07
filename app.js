const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("salut les aliens")
})

const port = 4000;

app.listen(port);