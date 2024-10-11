import { useEffect, useState } from 'react'
import {trendMovieApi} from '../services/searchMovieAPI'
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [trendMovie, setTrendMovie] = useState([])

    useEffect(() => {
        trendMovieApi()
        .then(data => setTrendMovie(data.results))
        .catch(error => console.error('Error fetching movies:', error))
    },[])
    return(
        <>
            <h1>Trending Movies</h1>

            <ul>
                {trendMovie?.map(movie => (
                    <li key={movie.id}>
                    <Link to={`movies/${movie.id}`}>{movie.title}</Link>
               </li>
                ))}
            </ul>
        </>
    )
}

export default HomePage