const mongoose = require('mongoose');
const connection = require('../db/connection');
const Category = require('../constants/category');
const ContentType = require('../constants/content-types');

const cardSchema = new mongoose.Schema({
    quote: {
        type: String,
        minlength: 3,
        maxlength: 1000
    },
    author: {
       type: String,
       maxlength: 1000
    },
    url: {
        type: String,
        validate: function() {
            return this.url.startsWith('http');
        }
    },
    contentType: {
      type: String,
      required: true,
      enum: ContentType.ALL_CONTENT_TYPES
    },
    category: {
        type: String,
        required: true,
        enum: Category.ALL_CATEGORIES
    },
})

module.exports = connection.model('Card', cardSchema);

