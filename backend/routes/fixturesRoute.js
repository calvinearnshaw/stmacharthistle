// Handles individual endpoints related to the fixtures section of the backend.

const express = require('express');
const {
    getAllFixtures,
    getFixture,
    createFixture,
    deleteFixture,
    updateFixture
} = require('../controllers/fixturesController');
const router = express.Router();

// GET all fixtures.
router.get('/', getAllFixtures);

// GET single fixture.
router.get('/:id', getFixture);

// POST new fixture.
router.post('/', async (req, res) => { createFixture(req, res) });

// DELETE fixture.
router.delete("/:id", deleteFixture);

// PATCH fixture.
router.patch("/:id", updateFixture);

module.exports = router;