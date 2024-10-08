const  API_KEY = 'c8d6282afec20d9bb4c80872ffc07416'

const searchFilm = (query) => {
    fetch(`https://api.themoviedb.org/3/movie/157336?query=${query}&api_key=${API_KEY}&append_to_response=videos`)
    .then(res => res.json())
    
}