const express = require('express');

const users = require('./users.route');
const rosters = require('./rosters.route');
const players = require('./players.route');

const router = express.Router();

router.use('/users', users);
router.use('/players', players);
router.use('/rosters', rosters)

module.exports = router;