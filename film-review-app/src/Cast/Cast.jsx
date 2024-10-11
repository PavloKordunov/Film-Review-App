import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { movieCastApi } from "../services/searchMovieAPI"

const Cast = () => {

    const {movieId} = useParams()

    const [movieCast, setMovieCast] = useState([]);

    useEffect(() => {
        movieCastApi(movieId)
        .then(data => setMovieCast(data.cast))
        .catch(error => console.error('Error fetching movie details:', error))
    }, [movieId])

    return (
        <div>
            <h2>Cast:</h2>
            
            <ul>
                {movieCast.map(actor => (
                    <li key={actor.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />

                        <div>
                            <p>{actor.name}</p>
                            <p>Role:</p>
                            <p>{actor.character}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cast