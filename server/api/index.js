const express = require('express');
const router = express.Router();

const { youtubeTrends } = require('./youtube');

router.get('/youtube_trends', youtubeTrends);

module.exports = router;
