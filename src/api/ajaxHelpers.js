const BASE_URL =
"https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players";
// previous mistake fetchAllPlayer 
export async function fetchAllPlayers() {
  try {
    const fetchAllPlayerUrl = `${BASE_URL}`;
    const response = await fetch(fetchAllPlayerUrl);
    // const response = await fetch(BASE_URL);
    const result = await response.json();
    // console.log("fetch", result);
    return result.data.players;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function fetchSinglePlayer(playerId) {
  try {
    const fetchSinglePlayerUrl = `${BASE_URL}/${playerId}`;
    const response = await fetch(fetchSinglePlayerUrl);
    const result = await response.json();
    // console.log("fetch ", result);
    return result.data.player;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function removePlayer(playerId) {
  try {
    console.log("Deleting Player: ", playerId);
    const deletePlayer = `${BASE_URL}/players/${playerId}`;
    const response = await fetch(deletePlayer, {
      method: "DELETE",
    });
    console.log("removed response: ", response);
    const result = await response.json();
    console.log("removed Player :", result);
    return result.data.player;
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
}

export async function addNewPlayer(playerObj) {
  try {
    const addNewPlayerUrl = `${BASE_URL}/players`;
    const response = await fetch(addNewPlayerUrl, {
      method: "POST",
      headers: {
       'Accept': "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playerObj),
    });
    const result = await response.json();
    console.log("submit response: ", result);
  } catch (error) {
    console.log(error);
    return error;
  }
}

