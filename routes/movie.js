const express = require('express');

const router = express.Router();
const movieData = require('../helpers/get-movie');
const movieRecommendations = require('../helpers/get-movie-recommendations');


router.get('/:id', async(req, res, next) => {
    const id = req.params.id
    const data = await movieData(id)
    const recommendations = await movieRecommendations(id)
    res.json({ data, recommendations, cast: data.credits.cast });
});

module.exports = router;