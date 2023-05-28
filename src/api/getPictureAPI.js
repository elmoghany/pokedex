import axios from 'axios';

export default getPictureAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    // URL: '/sprites/other/home/front_default',
    // params: 'front_default'
});
