import axios from 'axios';

import { origin } from '../config'


    const getPerson = async (id) => {
        try {
        const response = await axios.get(`${origin}/api/v1/persons/${id}`);
        return response;
        } catch (err) {
        throw err;
        }
    };

  const getRoster = async () => {
      try {
          const response = await axios.get(`${origin}/api/v1/rosters`);
          return response
      } catch(err) {
          console.error(err)
      }
  };

  const getRosterPlayers = async (id) => {
      try {
          const response = await axios.get(`${origin}/api/v1/rosters/${id}/players`);
          return response
      } catch(err) {
          console.error(err)
      }
  };


  async function fetchRosters() {
    try {
      const response = await axios.get(`${origin}/api/v1/rosters`);
      setTeams(response.data.rows[1].team_name)
    } catch(err) {
      console.error(err) 
    }
  };

export default {
    getRoster,
    getRosterPlayers,
    fetchRosters,
    getPerson
}