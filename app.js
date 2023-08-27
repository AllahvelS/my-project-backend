// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
const loginController = require('./controllers/loginController');

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Your Favorite Note Taking app");
});

// Login ROUTE
app.post("/login", loginController.login); 

// Notes ROUTES
const notesController = require("./controllers/notesController.js");
app.use("/notes", notesController);


// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
