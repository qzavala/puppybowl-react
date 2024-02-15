import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer } from '../api/ajaxHelpers';


export default function SinglePlayer() {
    const [player, setPlayer] = useState({});
    let { id } = useParams();

// example comment

function renderSinglePlayer() {
    console.log("player: ", player);
    return (
        <div key={player.id} className="players" >
          <h2>{player.name}</h2>
          <h4>{player.breed}</h4>
          <h4>{player.status}</h4>
          <img src={player.imageUrl} />
        </div>
      )
}

useEffect(() => {
    async function singlePlayersHandler() {
      const result = await fetchSinglePlayer(id);
      console.log("result: ", result);
      setPlayer(result);
    }
    singlePlayersHandler();
  }, [])
  
  return (
    <div>
      {renderSinglePlayer()}
    </div>
  )
}
