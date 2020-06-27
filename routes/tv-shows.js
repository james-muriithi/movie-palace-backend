const express = require('express');

const router = express.Router();

const nowplaying = require('../helpers/tv-shows/now-playing');
const toprated = require('../helpers/tv-shows/top-rated');
const popular = require('../helpers/tv-shows/popular');


router.get('/', async(req, res) => {
    res.json({ data: await nowplaying, popular: await popular, toprated: await toprated });
});


module.exports = router;