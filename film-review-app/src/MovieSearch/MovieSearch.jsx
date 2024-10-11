import { useEffect, useState } from "react";
import { searchFilm } from '../services/searchMovieAPI';
import { NavLink, useLocation } from "react-router-dom"

const MovieSearch = ({ query }) => {
    const [movies, setMovies] = useState([]);

    const location = useLocation()

    useEffect(() => {
        if (query.trim() === '') return;

        searchFilm(query)
            .then(data => setMovies(data.results))
            .catch(error => console.error('Error fetching movies:', error));
    }, [query]);

    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                         <NavLink to={`${movie.id}`} state={location}>{movie.title}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieSearch;
