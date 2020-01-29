const { query } = require('./database.service')

  
//   const getUsers = await client.query('SELECT * FROM users', (err, res) => {
//       console.log(err, res)
//       client.end()
//     })
  
const getUsers = () => query(`SELECT * FROM users`);

const getUser = (id) => query(`SELECT * FROM users WHERE id = ${id}`);

const postUser = (user_name, roster_id) => query({
    text: 'INSERT INTO users(user_name, roster_id) VALUES($1,$2)',
    values: [user_name,roster_id]
});

const deleteUser = (id) => query(`DELETE FROM users WHERE id = ${id}`);

// const putUser = (id, user) => query(``)
  

module.exports = {
    getUsers,
    getUser,
    postUser,
    deleteUser
    // putUser
}

// we have 1 generic function in database.service - query
// However we could make more specific ones for actions we want to do many times in different files e.g. SELECT * FROM ___
// So in database.service we could have a function like so
// const selectAll = table => query(`SELECT * FROM ${table}`)
// This adds another layer of abstraction so can be good or bad