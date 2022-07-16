import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api';

import './movie.css'


function Movie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "4dad27f56bc0ab44a245fdda814ee578",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    console.log(response.data)
                    setMovie(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log('Movie not found!')
                    navigate('/', { replace: true})
                    return
                })
        }

        loadMovie();

        return() => {
            console.log('Componente foi desmontado.')
        }
    }, [navigate, id])

        function saveMovie(){
            toast.success(`Filme ${movie.title} salvo na lista de favoritos.`)
            const myFavorite = localStorage.getItem('@moviehouse');
            let movieSaved = JSON.parse(myFavorite) || [];

            const hasMovie = movieSaved.some((movieSaved) => movieSaved.id === movie.id)

            if(hasMovie){
                toast.warning('This movies is already in favorites')
                return
            }

            movieSaved.push(movie);
            localStorage.setItem('@moviehouse', JSON.stringify(movieSaved));
            toast.success('Movie saved successfully');
        }


    if(loading){
        return(
            <div className='movie-info'>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className='movie-info'>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
            <h3>Sinopse</h3>
            <span>{movie.overview}</span>
            <strong>Avaliação: {movie.vote_average} / 10</strong>

            <div className='btn-area'>
                <button onClick={saveMovie}>Salvar</button>
                <button>
                <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                    Trailer
                </a>
                </button>
            </div>
        </div>
    )
}

export default Movie;