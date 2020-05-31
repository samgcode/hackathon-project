const express = require('express');

const router = express.Router();

const repository = require('./tweetRepository');

router.get('/', function (req, res) {
    return res.send({ error: true, message: 'The api seems to be up and running! go to /reviews or /items to see more.' })
});

router.get('/get', repository.getTweet);

module.exports = router;
