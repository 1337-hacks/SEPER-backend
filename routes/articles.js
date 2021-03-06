// articles.js - Middleware that will take care of requests for the database.

const express = require('express');
const router = express.Router();

const Article = require('../models/articleModel');

// Route testing
router.get('/test', (req, res) => res.send('Article route testing!'));

// Get all articles
router.get('/', (req, res) => {
  Article.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});


module.exports = router;