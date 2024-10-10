import MovieSearch from "../MovieSearch/MovieSearch"
import MovieForm from "../MovieSearch/MovieForm"
import { useState } from "react"

const MoviesPage = () => {

    const [query, setQuery] = useState('')

    const handleFormSubmit = query => {
        setQuery(query)
    }

    return(
        <div>
            <MovieForm onSubmit= {handleFormSubmit}/>
            <MovieSearch query = {query}/>
        </div>
    )
}

export default MoviesPage