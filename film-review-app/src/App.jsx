import {Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from "react";

import Louout from "./Loyout/Loyout";
import HomePage from "./pages/HomePage";

const MovieDetails = lazy(() => import("./MovieSearch/MovieDetails"))
const MoviesPage = lazy(() => import("./pages/MoviesPage"))
const Reviews = lazy(() => import("./Reviews/Reviews"))
const Cast = lazy(() => import("./Cast/Cast"))

function App() {
  return (
    <Suspense>
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
    </Suspense>
  )
}

export default App;
