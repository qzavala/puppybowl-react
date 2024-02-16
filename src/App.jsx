// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import PlayerSearch from "./components/PlayerSearch";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Puppy Bowl React</h1>
        <div id="Container">
          <NavBar />
          <div id="Main-Section">
            <Routes>
              <Route path="/" element={<AllPlayers />} />
              <Route path="/player/:id" element={<SinglePlayer />} />
              <Route path='/NewPlayerForm' element={<NewPlayerForm />}/>
              <Route path='PlayerSearch' element={<PlayerSearch />}/>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
