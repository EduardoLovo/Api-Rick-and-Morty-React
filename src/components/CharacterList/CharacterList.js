import CharacterCard from "../CharacterCard/CharacterCard";

export const CharacterList = ({ characters }) => {
    
    // Lista de personagens com card

    return (
        <div >
            {characters.map((characters, index) => (
                <CharacterCard 
                    key={`characters_list_${index}`}
                    characters={characters}>
                </CharacterCard> 
      
            ))}
        </div>
    )
    
}