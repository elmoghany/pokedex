import { useState, useEffect } from "react";

const usePokemon = ({nameURL, ID}) => {

    const [pokemon, setPokemon] = useState([]);

    console.log("iam setting pokemons!!!")
    const createPokemonObjects = () => {
        const newPokemonList = [];
        for (let i=0; i<ID.length; i++) {
            newPokemonList.push({
                name: nameURL[i].name,
                url: nameURL[i].url,
                id: ID[i],
            })
            console.log("newPokemonList: ",newPokemonList)
        }
        setPokemon(newPokemonList)
    }

}

export default usePokemon;
