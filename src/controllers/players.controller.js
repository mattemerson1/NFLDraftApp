const playersService = require('../services/players.service');

const getPlayers = async function(req, res) {
    try {
        
        res.status(200).send(await playersService.getPlayers());
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
};


module.exports = {
    getPlayers
}