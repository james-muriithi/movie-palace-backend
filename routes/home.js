const express = require('express');

const router = express.Router();
const homeData = require('../helpers/trending');


router.get('/', async(req, res) => {
    res.json(await homeData);
});

module.exports = router;