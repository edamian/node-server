const express = require('express');

const router = express.Router();
const nitRouter = require('./nitRouter');

router.use('/nits', nitRouter);

module.exports = router;
