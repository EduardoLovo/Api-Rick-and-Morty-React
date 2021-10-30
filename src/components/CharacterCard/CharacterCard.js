import React from "react";

export default function CharacterCard( props ) {
    const characters = props.characters
    
    // Card de persongens

    return (
        <div className="card" >
            
            <img src={characters.image} alt="characters"/>
            <h2>{characters.name}</h2>
            <p>{characters.status}</p>
            
        </div>
    )
}