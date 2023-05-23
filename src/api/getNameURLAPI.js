import axios from 'axios';

const getNameURLAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    params: {
        _offset: 20,
        _limit: 20,
    },
});

export default getNameURLAPI;