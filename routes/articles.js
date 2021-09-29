// articles.js - Middleware that will take care of requests for the database.

const express = require('express');

const router = express.Router();

// Load Article model
const Article = require('../models/articleModel');

// @route GET api/article/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('Article route testing!'));

// @route GET articles
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});

module.exports = router;