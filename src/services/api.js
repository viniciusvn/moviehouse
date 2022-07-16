import axios from 'axios';

//Base da url: https://api.themoviedb.org/3/
//URL da api: https://api.themoviedb.org/3/movie/now_playing?api_key=4dad27f56bc0ab44a245fdda814ee578&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;