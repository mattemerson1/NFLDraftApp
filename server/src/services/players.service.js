const request = require('request');
const { promisify } = require('util');

const request_promisify = promisify(request);


const getPlayers = async (fields) => {
    const response = await request_promisify(`https://fantasyfootballcalculator.com/api/v1/adp/standard?year=2019&${fields}`);
    response.body = JSON.parse(response.body);
    return response.body.players;
}


module.exports = {
    getPlayers
}