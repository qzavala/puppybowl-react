import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAllPlayers, removePlayer } from '../api/ajaxHelpers'




export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();
  
    function renderAllPlayers() {
      console.log("players: ", players);
      return players.map((player) => {
        return (
          <div key={player.id} className="players" >
            <h2>{player.name}</h2>
            <h4>{player.breed}</h4>
            <h4>{player.status}</h4>
            <div className="img-bttn-div">
              <img src={player.imageUrl} />
              <button onClick = {() => navigate(`/players/${player.id}`)} >See Details</button>
              <button onClick={() => handleDelete(player.id)} >Remove</button>
            </div>
          </div>
        )
      })
  
    }
    
    useEffect(() => {
      async function allPlayersHandler() {
        const result = await fetchAllPlayers();
        console.log("results: ", result);
        setPlayers(result);
      }
      allPlayersHandler();
    }, [])
    
    const handleDelete = async (playerId) => {
      await removePlayer(playerId);
      const returnPlayers = await fetchAllPlayers();
      setPlayers(returnPlayers);
    }
  
    return (
      <div>
        {renderAllPlayers()}
      </div>
    )
  }