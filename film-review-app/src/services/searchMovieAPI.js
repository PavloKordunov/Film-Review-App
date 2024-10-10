const  API_KEY = 'c8d6282afec20d9bb4c80872ffc07416'

export function searchFilm(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&append_to_response=videos`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
