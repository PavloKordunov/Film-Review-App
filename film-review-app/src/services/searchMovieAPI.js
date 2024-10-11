const  API_KEY = 'c8d6282afec20d9bb4c80872ffc07416'

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGU1ZTVkOWZkZGEzZTIyY2M5M2QyMjg5MjZjNTFmZiIsInN1YiI6IjY0N2ExNWZkY2FlZjJkMDBhYTQxZmVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5G2EkElJ2f_RzxEQ3AS1qf-lpG7nb_E8xcXIDPA30pw'
	}
};

export function searchFilm(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&append_to_response=videos`,options)
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

export function trendMovieApi() {
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options)
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

export function movieIdApi(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
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
