// import React, { useState, useEffect } from 'react';
// import './main-screen.css';
// import apiRequests from '../utils/apiRequests';

// const MainAppScreen = () => {

//     const [teams, setTeams] = useState("");
//     // const [team, setTeam] = useState("");

//     console.log(teams);

//     useEffect(() => {
//         async function fetchRoster() {
//             try {
//                 const response = await apiRequests.getRoster();
//                 console.log(response)
//                 // for (var i = 0; i < rows.length; i++)
//                 setTeams(response.data.rows.map(team => team.team_name))
//                 // setTeams(response.data.rows[2].team_name)
//             } catch(err) {
//                 console.error(err)
//             }
//         }
//     fetchRoster()
//     });


//     // useEffect(() => {
//     //     async function fetchRosterPlayers() {
//     //         try {
//     //             const response = await apiRequests.getRosterPlayers(2);
//     //             console.log(response)
//     //             // for (var i = 0; i < rows.length; i++)
//     //             setTeam(response.data.rows.map(team => team.player_id))
//     //             // setTeams(response.data.rows[2].team_name)
//     //         } catch(err) {
//     //             console.error(err)
//     //         }
//     //     }
//     // fetchRosterPlayers()
//     // });

//     const playerPanel = team ? team.map(team => {
//         return <div className="player-id"> {team} </div>
//     })
//     : null

//     const teamPanel = teams ? teams.map(team => {
//         return <button onClick={fetchRosterPlayers}> {team} </button>
//         // return <button className="team-names"> {team} </button>
//         // return <div className="team-names"> {team} </div>
//     })
//     : null

//     return (
//         <div className="rosters">
//         {/* {teams} */}
//         {/* {playerPanel} */}
//         {teamPanel}
//         </div>
//     );
// }

// export default MainAppScreen;