const rosterService = require('../services/rosters.service');

const getRosters = async function(req, res) {
    try {
        res.status(200).send(await rosterService.getRosters());
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
};

const postRoster = async function (req, res) {
    try {
        const { team_name } = req.body;
        await rosterService.postRoster(team_name);
        res.status(201).send();
    } catch(err) {
        res.status(500).send(err.message);
    }
};

const getRoster = async function(req, res) {
    try {
        const id = req.params.id;
        const roster = await rosterService.getRoster(id);
        if (!roster) {
            res.status(400).send(`user ${id} not found`);
        } else {
            res.status(200).send(roster);
        }
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
};

const deleteRoster = async function (req, res) {
    try {
        const id = req.params.id;
        await rosterService.deleteRoster(id);
        res.status(204).send();
    } catch(err) {
        res.status(500).send(err.message);
    }
};

const postPlayerToRoster = async function(req, res) {
    try {
        const { player_id } = req.body
        const { id: roster_id } = req.params
        res.status(200).send(await rosterService.postPlayers(roster_id, player_id));
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
}

const getPlayersInRoster = async function(req, res) {
    try {
        const { id } = req.params
        res.status(200).send(await rosterService.getPlayers(id));
    } catch(err) {
        res.status(err.statscode).send(err.message);
    }
}


module.exports = {
    getRoster,
    getRosters,
    postRoster,
    deleteRoster,
    postPlayerToRoster,
    getPlayersInRoster
}