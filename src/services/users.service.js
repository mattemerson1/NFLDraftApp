const { query } = require('./database.service')

  
//   const getUsers = await client.query('SELECT * FROM users', (err, res) => {
//       console.log(err, res)
//       client.end()
//     })
  
const getUsers = () => query('SELECT * FROM users');

const getUser = (id) => query(`SELECT * FROM users WHERE id = ${id}`);

const postUser = (user, team_name) => query('INSERT INTO users(team_name, name) VALUES($1,$2)',[`${team_name}`,`${user}`])
    
    // await client.query('SELECT * FROM users', (err, res) => {
    //   console.log(err, res)
    //   client.end()
    // })
  

module.exports = {
    getUsers,
    getUser,
    postUser
}

// we have 1 generic function in database.service - query
// However we could make more specific ones for actions we want to do many times in different files e.g. SELECT * FROM ___
// So in database.service we could have a function like so
// const selectAll = table => query(`SELECT * FROM ${table}`)
// This adds another layer of abstraction so can be good or bad