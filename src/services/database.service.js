const { Client } = require('pg');

const client = new Client({
    user: 'matthew.emersonibm.com',
    host: 'localhost',
    database: 'nfldraftdb',
    password: 'password',
    port: 5432,
  })
  client.connect()


const query = q => client.query(q); 

module.exports = {
    query
}