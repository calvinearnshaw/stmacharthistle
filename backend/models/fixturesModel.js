// Schema for each fixture in the database.

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const fixtureSchema = new schema({
    date: {
        // Date of match fixture.
        type: String,
        required: true
    },
    kickoff: {
        // Kick off time in 24hr format.
        type: String,
        required: true
    },
    status: {
        // Can be "PENDING", "COMPLETED", "POSTPONED".
        type: String,
        required: true
    },
    venue: {
        // Stadium location
        type: String,
        required: true
    },
    competition: {
        type: String,
        required: true
    },
    homeTeam: {
        // Home team name.
        type: String,
        required: true
    },
    awayTeam: {
        // Away team name.
        type: String,
        required: true
    },
    homeScore: {
        // Home team score. Default '-'.
        type: String,
        required: true
    },
    awayScore: {
        // Away team score. Default '-'.
        type: String,
        required: true
    }
}, {
    timestamps: true
})

// Export the model.
module.exports = mongoose.model('Fixture', fixtureSchema);