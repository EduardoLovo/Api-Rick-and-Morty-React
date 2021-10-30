import React from "react";
import { useHistory } from "react-router";
import './CharacterCard.css'

export default function CharacterCard( props ) {
    const characters = props.characters
    
    
    const history = useHistory();

    const handleClick = () => {
        history.push(`/view/${characters.id}`);
    };


    // Card de persongens

    return (
        <div className="card" onClick={handleClick}>
            
            <img src={characters.image} alt="characters"/>
            <h2>{characters.name}</h2>
            <p>{characters.status}</p>
            
        </div>
    )
}