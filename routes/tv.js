const express = require('express');

const router = express.Router();
const tvData = require('../helpers/get-tvshow');
const movieRecommendations = require('../helpers/get-tv-recommendations');
const tvcredits = require('../helpers/get-tv-credits');


router.get('/:id', async(req, res, next) => {
    const id = req.params.id
    const data = await tvData(id)
    const cast = await tvcredits(id)
    const recommendations = await movieRecommendations(id)
    res.json({ data, recommendations, cast: cast.cast });
});

module.exports = router;