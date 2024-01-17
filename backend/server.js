require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const leagueRoute = require('./routes/league');

// Setup Express.JS app
const app = express();

// Setup CORS middleware - **EXTREMELY IMPORTANT** - do NOT modify this section. This prevents access to the backend
// unless the request is coming from one of the following URLs.
const whitelist = [
    'https://stmacharthistle.onrender.com/',
    'https://stmacharthistle.onrender.com'
];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (whitelist.indexOf(origin) === -1) {
            const message = `Attempted access from ${origin}, cannot access DB due to not being whitelisted on CORS.`;
            return callback(new Error(message), false);
        }
        return callback(null, true);
    }
}));

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
// TODO: Fill in these routes.
app.use("/api/league", leagueRoute);

// Connect to MongoDB and start server. We don't start the server unless we successfully connect to db.
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         // Listen for requests
//         app.listen(process.env.PORT, () => {
//             console.log('Connected to MongoDB & listening on port', process.env.PORT);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
})