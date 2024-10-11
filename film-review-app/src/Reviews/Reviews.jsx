import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { movieReviewsApi } from "../services/searchMovieAPI"

const Reviews = () => {

    const {movieId} = useParams()

    const [movieReview, setMovieReview] = useState([]);

    useEffect(() => {
        movieReviewsApi(movieId)
        .then(data => setMovieReview(data.results))
        .catch(error => console.error('Error fetching movie details:', error))
    }, [movieId])

    return (
        <div>
            {movieReview.length ? (
                <ul>
                    {movieReview.map(review => (
                        <li key={review.id}>
                            <p>Author: {review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don`t have any reviews for this movie!</p>
            )}
        </div>
    )
}

export default Reviews