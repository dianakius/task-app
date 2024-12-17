const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
