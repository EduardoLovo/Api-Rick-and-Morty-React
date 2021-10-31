import { Api } from "../../Api/Api";
import React, { useEffect, useState } from 'react'
import "./ViewCharacter.css";
import { useHistory } from "react-router";

export default function ViewCharacter(props) {
    const id = props.match.params.id;

    const [character, setCharacter] = useState([]);
    


    useEffect(() => {
        const loadCharacterList = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdUrl(id), true);

            const results = await response.json();
            
            setCharacter(results);
        };
        
        loadCharacterList();
    }, [id]);


    const history = useHistory();

    const handleClick = () => {
        history.push(`/`);
    };


    //==============================================

    // var epi = character.episode;

    // for (var prop in epi)
    //     console.log("i." + prop + "=" + epi[prop]);
        
    //==============================================

    
    return (
        <div>
            <div className="view">
                <h2>{character.name}</h2>
                <img src={character.image} alt="personagem"/>
                <h2>Episodes:</h2><br/>
                <div className="divEpi">
                    <p className="listEpisodes">{character.episode}</p><br/>
                </div>
            </div>
            <button onClick={handleClick}>
                Back
            </button>

        </div>
    )
}