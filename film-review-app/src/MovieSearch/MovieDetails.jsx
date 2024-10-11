import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { movieIdApi } from "../services/searchMovieAPI";
import { Link } from "react-router-dom";

const MovieDetails = () => {
    const { movieId  } = useParams();

    const [movie, setMovie] = useState([]);

    const location = useLocation()

    useEffect(() => {
            movieIdApi(movieId )
                .then(data => setMovie(data))
                .catch(error => console.error('Error fetching movie details:', error));
    }, [movieId ]);

    return (
        <div>
            <h1>Movie Details</h1>
            <Link to={location.state}>Go back</Link>

            <div>
                {movie && (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                )}
            </div>

            <div>
                <h2>{movie.title}</h2>
                <p>User Score: {(movie.vote_average*10).toFixed()}%</p>
                <p>Overview</p>
                <p>{movie.overview}</p>
                <p>Genres</p>
                <ul>
                    {movie.genres?.map(({id, name}) => (
                        <li key={id}>{name}</li>
                    ))}
                </ul>
            </div>

            <div>
                <p>Additional information</p>

                <ul>
                    <li>
                        <Link to='cast'>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews'>Reviews</Link>
                    </li>
                </ul>
                <Outlet/>
            </div>
        </div>
    );
};

export default MovieDetails;
