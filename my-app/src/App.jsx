import React from "react";
import "./styles/main.scss"
import Movie from "./movie"
import Header from "./header";

const movies = [
  {
    title: "Captain America - The First Avenger",
    hall: 2,
    price: 350
  },
  {
    title: "The Papillon",
    hall: 1,
    price: 300
  },
  {
    title: "The Lost City of Z",
    hall: 5,
    price: 350
  }
];

export default () => (
  <>
    <Header />
    {
      movies.map(movie => (
        <Movie movieTitle={movie.title} hall={movie.hall} price={movie.price} />
      ))
    }
  </>
);
