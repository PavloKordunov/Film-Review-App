import { useState } from "react"

const MovieForm = ({onSubmit}) => {

    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(query.toLowerCase().trim() === ''){
            return alert('Enter film name')
        }

        onSubmit(query)
        setQuery('')
    }

    return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text"  placeholder="Search movie" name='searchQuery' value={query}/>
        <button type="submit">Search</button>
    </form>
    )
}

export default MovieForm