// Handles individual endpoints related to the news section of the backend.

const express = require('express');
const {
    getAllArticles,
    getArticle,
    createArticle,
    deleteArticle,
    updateArticle
} = require('../controllers/newsController');
const router = express.Router();

// GET all news.
router.get('/', getAllArticles);

// GET single news.
router.get('/:id', getArticle);

// POST new news.
router.post('/', async (req, res) => { createArticle(req, res) });

// DELETE news.
router.delete("/:id", deleteArticle);

// PATCH news.
router.patch("/:id", updateArticle);

module.exports = router;