import { useEffect, useState } from "react"
import searchFilm from '../services/searchMovieAPI'

const MovieSearch = () => {

    const [query, setQuery] = useState()

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    useEffect(()=> {
        searchFilm(query)
        .then(console.log)
    }, [query])

    const handleSubmit = (e) => {
        e.preventDefault()

        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text"  placeholder="Search movie" name='searchQuery' value={query}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default MovieSearch