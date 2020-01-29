const { query } = require('./database.service')

const getRoster = id => query(`SELECT * FROM rosters WHERE roster_id = ${id}`);

const getRosters = () => query('SELECT * FROM rosters');

const postRoster = (team_name) => query({
    text: 'INSERT INTO rosters(team_name) VALUES($1)',
    values: [team_name],
});

const postPlayers = (roster_id, player_id) => query({
    text: 'INSERT INTO roster_players(roster_id, player_id) VALUES($1, $2)',
    values: [roster_id, player_id]
});

const getPlayers = id => query(`SELECT * FROM roster_players WHERE roster_id = ${id}`);

const deleteRoster = (id) => query(`DELETE FROM rosters WHERE roster_id = ${id}`);


module.exports = {
    getRoster,
    getRosters,
    postRoster,
    deleteRoster,
    postPlayers,
    getPlayers
}
