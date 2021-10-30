import { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import { CharacterList } from "../../components/CharacterList/CharacterList";
import { Pagination } from "../../components/Pagination/Pagination";

function Home() {
    const[characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});


    // metodo para mostrar proxima lista de personagens
    const fetchCharacters = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
                setInfo(data.info);

            })
            .catch((error) => console.log(error));
    };

    const onPrevious = () => {
        fetchCharacters(info.prev);
        window.scrollTo(0, 0);
    }
    
    const onNext = () => {
        fetchCharacters(info.next);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        fetchCharacters(Api.baseUrl + "/character");
      }, []);
    

    return (
        <div >
            <h1 className="title">Character List</h1>
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
            <CharacterList characters={characters} /> 
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />

        </div>
    )
}

export default Home