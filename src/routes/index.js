const express = require('express');

const users = require('./users.route');
const players = require('./players.route');

const router = express.Router();

router.use('/users', users);
router.use('/players', players);

module.exports = router;