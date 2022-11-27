import { useState, useEffect } from "react";

export default function FilmsList(props) {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setList(result);
      })
      .catch((err) => console.err(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <ul>
      {list.map((film, index) => {
        return (
          <div>
            <li key={`${film.id + index}`}>{film.title}</li>
            <img src={film.image} alt="Movie Poster" />
          </div>
        );
      })}
    </ul>
  );
}
