import React, { Component } from "react";

export default class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  getFilms() {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        this.setState({ 
          list: result });
      })
      .catch((err) => console.err(err));
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return <ul>{this.state.list.map((film) =>{
      return <>
      <li key={film.id}>{film.title}</li>
      <img src={film.image}/>
      </>
    })}</ul>;
  }
}
