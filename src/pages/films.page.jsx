import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/films.helpers.";

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
      <ul>
        {filmsByDirector.map((film) => {
          return <li key={film.id}>
            <p>{film.title}</p>
            <img src={film.image} alt="Movie Poster" />
          </li>;
        })}
      </ul>
    </div>
  );
}
