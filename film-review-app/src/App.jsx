import Louout from "./Loyout/Loyout";
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import MovieDetails from "./MovieSearch/MovieDetails";
import Reviews from "./Reviews/Reviews";
import Cast from "./Cast/Cast";

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Louout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="movies" element={<MoviesPage/>}/>
        <Route path='movies/:movieId' element={<MovieDetails/>}>
          <Route path="reviews" element={<Reviews/>}/>
          <Route path="cast" element={<Cast/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
