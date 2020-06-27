const express = require('express');

const router = express.Router();
const homeData = require('../helpers/trending');
const urls = require('../helpers/urls');
const searchData = require('../helpers/search-data');


router.get('/:query', async(req, res) => {
    const query = req.params.query
    const url = `${urls.API_URL}search/multi?&language=en-US&page=1&include_adult=false&api_key=${urls.API_KEY}&query=${query}`

    res.json(await searchData(url));
});

router.get('/', async(req, res) => {
    res.json([]);
});

module.exports = router;