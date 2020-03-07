const playersService = require('../services/players.service');

const getPlayers = async function(req, res) {
    try {
        const fields = req._parsedUrl.query
        const players = await playersService.getPlayers(fields);
        res.status(200).send(players);
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
};

// const postPlayersToRoster = async function(req, res) {
//     try {
//         const { name, team, player_id, position } = req.body
//         res.status(200).send(await playersService.getPlayers(name, team, player_id, position));
//     } catch(err) {
//         res.status(err.statuscode).send(err.message);
//     }
// }

module.exports = {
    getPlayers
}