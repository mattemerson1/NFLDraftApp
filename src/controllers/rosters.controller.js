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
        const { user, team_name } = req.body;
        await userService.postRoster(user, team_name);
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


module.exports = {
    getRoster,
    getRosters,
    postRoster,
    deleteRoster
}