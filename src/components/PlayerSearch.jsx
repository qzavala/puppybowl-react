import { useEffect, useState } from "react"
import { fetchAllPlayers } from "../api/ajaxHelpers"

export default function PlayerSearch() {
  const [players, setPlayers] = useState([]);
  const [state, setstate] = useState({
    query: '',
    list: []
  })

  const handleChange = async (e) => {
    const results = players.filter(player => {
        if (e.target.value === "") return players
        return player.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setstate({
        query: e.target.value,
        list: results
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
  return (
  <>
    <div>
        <form>
          <label>Search
            <input onChange={handleChange} value={state.query} type="search"/>
          </label>
        </form>
        <ul>
          {(state.query === '' ? "" : state.list.map(player => {
            return <li key={player.name}>{player.name}</li>
          }))}
        </ul>
    </div>
  </>
  )
}