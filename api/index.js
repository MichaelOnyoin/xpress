    // api/index.js
    const express = require("express");
    const app = express();

    app.get("/", (req, res) => {
        res.send("Hello from Express on Vercel!");
    });

    module.exports = app; // Export the app for Vercel