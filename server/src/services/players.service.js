const request = require('request');
const { promisify } = require('util');

const request_promisify = promisify(request);


const getPlayers = (fields) => request_promisify(`https://fantasyfootballcalculator.com/api/v1/adp/standard?year=2019&${fields}`);


module.exports = {
    getPlayers
}