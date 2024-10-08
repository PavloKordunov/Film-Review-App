import Louout from "./Loyout/Loyout";
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Louout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="movies" element={<MoviesPage/>}/>
      </Route>
    </Routes>
  )
}

export default App;
