const express = require('express');

const playerController = require('../controllers/players.controller');
const router = express.Router();

router.route('/')
    .get(playerController.getPlayers)


module.exports = router