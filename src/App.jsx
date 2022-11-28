import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import FilmsPage from "./pages/films.page";
import SingleFilmPage from "./pages/singlefilm.page";

export default function App(props) {
  
  
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films" element={<FilmsPage />} />
        <Route path="films/film/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}
