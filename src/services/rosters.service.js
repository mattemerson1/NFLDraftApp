const { query } = require('./database.service')

const getRoster = (id) => query(`SELECT * FROM rosters WHERE id = ${id}`);

const getRosters = () => query('SELECT * FROM rosters');

const postRoster = (user, team_name) => query({
    text: 'INSERT INTO users(team_name, name) VALUES($1,$2)',
    values: [user,team_name],
});

const deleteRoster = (id) => query(`DELETE FROM rosters WHERE id = ${id}`);


module.exports = {
    getRoster,
    getRosters,
    postRoster,
    deleteRoster
}
