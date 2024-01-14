require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// Setup Express.JS app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
// TODO: Fill in these routes.

// Connect to MongoDB and start server. We don't start the server unless we successfully connect to db.
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to MongoDB & listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });