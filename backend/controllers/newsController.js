// There are 5 functions in this file that relate to adding, deleting, and editing records from the news section in
// the MDB database. We use a controller to handle these functions. The controller is then referenced inside the routes
// file.

const NewsArticle = require('../models/newsModel');
const mongoose = require('mongoose');

const getAllArticles = async (req, res) => {
    // Returns all articles stored in the database.
    const articles = await NewsArticle.find({}).sort({createdAt: -1});
    res.status(200).json(articles);
}

const getArticle = async (req, res) => {
    // Returns a single article from the database, given a valid ID.
    const { id } = req.params;

    // Check if ID is valid.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Article does not exist."});
    }

    // Find the article in the database. If it doesn't exist, return a 404 status code, otherwise return the JSON for
    // that article.
    const article = await NewsArticle.findById(id);

    if (!article) {
        return res.status(404).json({error: "Article does not exist."});
    }

    res.status(200).json(article);
}

const createArticle = async (req, res) => {
    // Creates a new article in the database.
    const { newsType, newsTitle, newsContent, newsImage } = req.body;

    try {
        // Create the article and insert into database, then return the new article as a JSON object.
        const newArticle = await NewsArticle.create({ newsType, newsTitle, newsContent, newsImage });
        res.status(200).json(newArticle);
    } catch (error) {
        // If this didn't work for any reason, return an error object containing the reason for said error.
        res.status(400).json({error: error.message});
    }
}

const deleteArticle = async (req, res) => {
    // Deletes an article from the database, given a valid ID.
    const { id } = req.params;

    // Test for valid ID.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Article does not exist."});
    }

    // Delete article.
    const deletedArticle = await NewsArticle.findOneAndDelete(id);

    // Check if article exists.
    if (!deletedArticle) {
        return res.status(404).json({error: "Article does not exist."});
    }

    // Return deleted article.
    res.status(200).json(deletedArticle);
}

const updateArticle = async (req, res) => {
    // Given an article ID, updates the database with relevant information.

    const { id } = req.params;

    // Test for valid ID.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Article does not exist."});
    }

    // Use spread operator to get all fields from request body.
    const updatedArticle = await NewsArticle.findOneAndUpdate({"_id": id}, {...req.body});

    // Check if article exists.
    if (!updatedArticle) {
        return res.status(404).json({error: "Article does not exist."});
    }

    // Return updated article.
    res.status(200).json(updatedArticle);
}

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    deleteArticle,
    updateArticle
}