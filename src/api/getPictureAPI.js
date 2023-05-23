import axios from 'axios';

export default getPictureAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    URL: '/sprites/home/front_default',
});
