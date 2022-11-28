import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf, getFilmStats } from "../helpers/films.helpers.";
import { Link } from "react-router-dom";


export default function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setList(result);
      })
      .catch((err) => console.err(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");
  let { avg_score, latest, total } = getFilmStats(filmsByDirector);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <label htmlFor="searchDirector">Filter By Director</label>
        <select
          name="searchDirector"
          id="searchDirector"
          value={searchDirector}
          onChange={(e) => setSearchDirector(e.target.value)}
        >
          <option value="">All</option>
          {directors.map((director, idx) => {
            return (
              <option key={director + idx} value={director}>
                {director}
              </option>
            );
          })}
        </select>
      </form>
      <div>
        <div>
          <span># Of Films: </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating: </span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film: </span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`film/${film.id}`}>{film.title}</Link>
              <img src={film.image} alt="Movie Poster" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
