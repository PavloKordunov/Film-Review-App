import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieIdApi } from "../services/searchMovieAPI";

const MovieDetails = () => {
    const { movieId  } = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
            movieIdApi(movieId )
                .then(data => {
                    console.log(data);
                    setMovie(data)})
                .catch(error => console.error('Error fetching movie details:', error));
    }, [movieId ]);

    return (
        <div>
            
        </div>
    );
};

export default MovieDetails;
