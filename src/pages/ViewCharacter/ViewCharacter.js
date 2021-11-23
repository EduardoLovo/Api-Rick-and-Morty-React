import { Api } from "../../Api/Api";
import React, { useEffect, useState } from 'react'
import "./ViewCharacter.css";
import { useHistory } from "react-router";

export default function ViewCharacter(props) {
    const id = props.match.params.id;

    const [character, setCharacter] = useState([]);


    console.log(character);
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


    //================================================================

    

   
    
    //================================================================
    
    



    return (
        <div>
            <div className="view">
                <h2>{character.name}</h2>
                <img src={character.image} alt="personagem"/>
                <h2>Species:</h2><br/>
                <div className="divEpi">
                    <p className="listEpisodes" >{character.species}</p><br/>
                    
                </div>
            </div>
            <button onClick={handleClick}>
                Back
            </button>

        </div>
    )
}