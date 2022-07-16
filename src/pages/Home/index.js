import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './home.css';

//URL da api: https://api.themoviedb.org/3/movie/now_playing?api_key=4dad27f56bc0ab44a245fdda814ee578&language=pt-BR

function Home() {
    const [movies, setMovies] = useState([]);

    async function loadMovies() {
        const response = await api.get("movie/now_playing", {
            params: {
                api_key: "4dad27f56bc0ab44a245fdda814ee578",
                language: "pt-BR",
                page: 1,
            }
        })
        // console.log(response.data.results.slice(0, 10));
        setMovies(response.data.results.slice(0, 10));
    }

    useEffect(() => {
        loadMovies();
    }, [])


    return (
        <div className="container">
            <div className="moviesList">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;