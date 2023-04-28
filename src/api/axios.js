import axios from 'axios';

export default axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    params: {
        // _offset: 20,
        _limit: 20,
    },
});
