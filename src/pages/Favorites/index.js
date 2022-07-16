import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import './favorites.css'


function Favorites(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const myMovies = localStorage.getItem('@moviehouse');
        setMovies(JSON.parse(myMovies) || [])
    }, [])

    function removeMovie(id){
        let filterMovies = movies.filter((movie) => {
            return (movie.id !== id)
        })

        setMovies(filterMovies);
        localStorage.setItem('@moviehouse', JSON.stringify(filterMovies))
        toast.success('Movie removed with successfully')
    }

    return(
        <div className='my-movies'>
            <h1>Meus filmes favoritos</h1>
            {movies.length === 0 && <span> Você não tem nenhum filme salvo em sua lista de favoritos😢 </span>}
            <ul>
                {movies.map((movie)=>{
                    return(
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}> Ver detalhes </Link>
                                <button onClick={() => removeMovie(movie.id)}>Excluir</button>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;