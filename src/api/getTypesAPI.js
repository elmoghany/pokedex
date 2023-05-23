import axios from 'axios';

export default getTypesAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    URL: '/types/type/name',
});
