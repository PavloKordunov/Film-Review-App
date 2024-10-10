import { useEffect, useState } from "react";
import { searchFilm } from '../services/searchMovieAPI';
import { nanoid } from 'nanoid';

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
                    <li key={nanoid()}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieSearch;
