const express = require('express');

const rosterController = require('../controllers/rosters.controller');
const router = express.Router();

router.route('/') 
    .get(rosterController.getRosters)
    .post(rosterController.postRoster)

router.route('/:id')
    .get(rosterController.getRoster)
    .delete(rosterController.deleteRoster)

router.route('/:id/players')
    .post(rosterController.postPlayerToRoster)
    .get(rosterController.getPlayersInRoster)



 
module.exports = router;
