//get
//https://pokeapi.co/api/v2/pokemon-color/{id}
//https://pokeapi.co/api/v2/pokemon-color/{name}
// create a complete axios example using above comments
// Path: pokedex\src\api\colorAPI.js
import axios from 'axios';

export const colorAPI = async () => {
    const resp = await axios.get({
        baseURL: 'https://pokeapi.co/api/v2/pokemon-color/',
        params: {},
    })
    .catch((err) => {
        console.log('Error: ', err);
    })
}