import axios from 'axios';

export default getBGColorAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    url: 'species/url'
    //using the return url from the getSpeciesAPI
    //get('new url') = color/name
});
