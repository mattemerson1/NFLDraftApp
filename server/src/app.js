const express = require('express');
const app = express();
const routes = require('./routes')
const bodyParser = require('body-parser');
const cors = require('cors');
// const { Client } = require('pg');


// const client = new Client({
//     user: 'matthew.emersonibm.com',
//     host: 'localhost',
//     database: 'nfldraftdb',
//     password: 'password',
//     port: 5432,
//   })
//   client.connect()


//   client.query('SELECT * FROM users', (err, res) => {
//     console.log(err, res)
//     client.end()
//   })

//   client.query('ALTER TABLE users ALTER COLUMN created_on SET DEFAULT now()', (err, res) => {
    //     console.log(err, res)
    //     client.end()
    //   })
    
// client.query('INSERT INTO users(team_name, name) VALUES($1,$2)',['Matt team','Matt'] , (err, res) => {
//     console.log(err, res)
//     client.end()
// })
        
        // app.get('/', function (req, res) {
            //     res.send('Hello World')
            //   })
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', routes)
app.listen(3000)

  module.exports = app