import CharacterCard from "../CharacterCard/CharacterCard";
import './CharacterList.css';

export const CharacterList = ({ characters }) => {
    
    // Lista de personagens com card

    return (
        <div className="listCards">

            {characters.map((characters, index) => (
                <CharacterCard 
                    key={`characters_list_${index}`}
                    characters={characters}>
                </CharacterCard> 
      
            ))}
        </div>
    )
    
}