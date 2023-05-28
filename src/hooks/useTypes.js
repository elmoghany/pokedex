import { useState, useEffect } from "react";
import getTypesAPI from "../api/getTypesAPI";

const useTypes = ({nameURL}) => {
    const [types, setTypes] = useState([]);

    let allPokemonTypes = [];
    useEffect( () => {
        const fetchData = async () => {
            try{
                if(nameURL && nameURL.length > 0) {
                    const typesCollected = await Promise.all(
                        nameURL.map(async (item) => {
                            // console.log("types item url: ", item.url)
                            const resp = await getTypesAPI.get('', { 
                                baseURL: item.url,
                                params: { fields: 'types' } 
                            });
                            if (!resp.data) {
                                throw new Error('Something went wrong');
                            }
                            else {
                                // console.log(resp.data.types)
                                let typesOfSinglePokemon = resp.data.types.map(item => item.type.name)
                                // console.log("single types collected: ",typesOfSinglePokemon)
                                allPokemonTypes.push(typesOfSinglePokemon)
                                // console.log("all types collected: ",allPokemonTypes)
                                // console.log("----------")
                                // return allPokemonTypes
                            }
                        }
                        )
                    )
                    setTypes(allPokemonTypes)
                }
            } catch (err) {
                console.log('Error: ', err.message);
            }
        }
        if(nameURL.length > 0) {
            fetchData();
        }
    }, [nameURL] )

    return types;
}

export default useTypes;