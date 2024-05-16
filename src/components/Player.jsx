import React from "react";
import { useState } from "react";
const Player = ({ name, symbol }) => {
    const [playerName, setPlayerName]=useState(name);
    const [isEditing, setIsEditing]=useState(false);
    const handleClick=()=>{
        setIsEditing((editing)=>!editing)
    }
    const handleChange=(event)=>{
       setPlayerName(event.target.value)
    }
    let editablePlayerName=<span className="player-name">{playerName}</span>;
if(isEditing){
    editablePlayerName=<input type="text" placeholder="enter name" value={playerName} onChange={handleChange}/>;
}
  return (
    <li>
      <span className="player">
       {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
    </li>
  );
};

export default Player;