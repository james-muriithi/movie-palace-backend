const express = require('express');

const router = express.Router();
const upcoming = require('../helpers/movies/upcoming-movies');
const nowplaying = require('../helpers/movies/now-playing');
// const toprated = require('../helpers/movies/top-rated');
const popular = require('../helpers/movies/popular');


router.get('/', async(req, res) => {
    res.json({ data: await nowplaying, popular: await popular, toprated: await upcoming });
});


module.exports = router;