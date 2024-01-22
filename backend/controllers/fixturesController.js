// Manipulates fixture data on the database based on the function selected from the fixtures routes.

const Fixture = require('../models/fixturesModel');
const mongoose = require('mongoose');

const getAllFixtures = async (req, res) => {
    // Returns all fixtures stored in the database.
    const fixtures = await Fixture.find({}).sort({createdAt: -1});
    res.status(200).json(fixtures);
}

const getFixture = async (req, res) => {
    // Returns a single fixture from the database, given a valid ID.
    const { id } = req.params;

    // Check if ID is valid.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Fixture does not exist."});
    }

    // Find the fixture in the database. If it doesn't exist, return a 404 status code, otherwise return the JSON for
    // that fixture.
    const fixture = await Fixture.findById(id);

    if (!fixture) {
        return res.status(404).json({error: "Fixture does not exist."});
    }

    res.status(200).json(fixture);
}

const createFixture = async (req, res) => {
    // Creates a new fixture in the database.
    const { date, kickoff, status, venue, competition, homeTeam, awayTeam, homeScore, awayScore } = req.body;

    try {
        // Create the fixture and insert into database, then return the new fixture as a JSON object.
        const newFixture = await Fixture.create({ date, kickoff, status, venue, competition, homeTeam, awayTeam, homeScore, awayScore });
        res.status(200).json(newFixture);
    } catch (error) {
        // If this didn't work for any reason, return an error object containing the reason for said error.
        res.status(400).json({error: error.message});
    }
}

const deleteFixture = async (req, res) => {
    // Deletes a fixture from the database, given a valid ID.
    const { id } = req.params;

    // Test for valid ID.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Fixture does not exist."});
    }

    // Delete fixture.
    const deletedFixture = await Fixture.findOneAndDelete(id);

    // Check if fixture exists.
    if (!deletedFixture) {
        return res.status(404).json({error: "Fixture does not exist."});
    }

    res.status(200).json(deletedFixture);
}

const updateFixture = async (req, res) => {
    // Updates a fixture in the database, given a valid ID.
    const { id } = req.params;
    const { date, kickoff, status, venue, competition, homeTeam, awayTeam, homeScore, awayScore } = req.body;

    // Test for valid ID.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Fixture does not exist."});
    }

    // Update fixture.
    const updatedFixture = await Fixture.findByIdAndUpdate(id, { date, kickoff, status, venue, competition, homeTeam, awayTeam, homeScore, awayScore }, {new: true});

    // Check if fixture exists.
    if (!updatedFixture) {
        return res.status(404).json({error: "Fixture does not exist."});
    }

    res.status(200).json(updatedFixture);
}

module.exports = {
    getAllFixtures,
    getFixture,
    createFixture,
    deleteFixture,
    updateFixture
}