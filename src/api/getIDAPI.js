import axios from 'axios';

export default getIDAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    URL: '/id',
});
