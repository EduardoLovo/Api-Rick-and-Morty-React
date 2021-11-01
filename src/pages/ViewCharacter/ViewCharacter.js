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


    
    //================================================
    
    // Nome dos episodios
    const [episode, setEpisode] = useState([]);
    const idEpisode = character.episode;
  
    const list = []
    
    for (var prop in idEpisode)
        list.push(idEpisode[prop].substr(40));

        const urlEpi = "https://rickandmortyapi.com/api/episode/" + list;

    useEffect(() => {

        fetch(urlEpi)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log(data);
                setEpisode(data);
            })
            .catch(function(error) {
                console.log(error);
            });

        
    }, []);
    

    //===============================================



    return (
        <div>
            <div className="view">
                <h2>{character.name}</h2>
                <img src={character.image} alt="personagem"/>
                <h2>Epsiodes:</h2><br/>
                <div className="divEpi">
                    <p className="listEpisodes" >{episode.name}</p><br/>
                    
                </div>
            </div>
            <button onClick={handleClick}>
                Back
            </button>

        </div>
    )
}