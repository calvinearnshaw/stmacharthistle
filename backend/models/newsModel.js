// A model is a schema for a collection in the database. This specific model structures how we will store a news article
// that the Club wish to display on their site.

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const newsSchema = new schema({
    newsType: {
        type: String,
        required: true,
    },
    newsTitle: {
        type: String,
        required: true,
    },
    newsContent: {
        type: String,
        required: true,
    },
    newsImage: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);