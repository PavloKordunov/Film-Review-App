import { useEffect, useState } from "react";
import { searchFilm } from '../services/searchMovieAPI';
import { NavLink } from "react-router-dom"

const MovieSearch = ({ query }) => {
    const [movies, setMovies] = useState([]);

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
                         <NavLink to={`${movie.id}`}>{movie.title}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieSearch;
