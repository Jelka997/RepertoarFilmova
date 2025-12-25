import movie from "./assets/movie.jpg"
import React from "react";
import { useState } from "react";

const Movies = () => {

    const movies = [
        {
            title: "Captain America - The First Avenger",
            hall: 2,
            price: 350,
            poster: "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg",
            likes: 0,
            dislikes: 0
        },
        {
            title: "The Papillon",
            hall: 1,
            price: 300,
            poster: "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg",
            likes: 0,
            dislikes: 0
        },
        {
            title: "The Lost City of Z",
            hall: 5,
            price: 350,
            poster: "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            likes: 0,
            dislikes: 0
        },
        {
            title: "Klaus",
            hall: 3,
            poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg",
            likes: 0,
            dislikes: 0
        },
        {
            title: "Bullet Train",
            poster: "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg",
            likes: 0,
            dislikes: 0
        }
    ];
    const [moviesState, setMoviesState] = useState(movies);

    const date = new Date();
    const today = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`


    const likeMovie = (title) => {
        setMoviesState(prev => prev.map(movie => movie.title === title ? { ...movie, likes: movie.likes + 1 } : movie));
    }

    const dislikeMovie = (title) => {
        setMoviesState(prev => prev.map(movie => movie.title === title ? { ...movie, dislikes: movie.dislikes + 1 } : movie));
    }

    return (
        <div className="container">
            <h1>Repertoar filmova za danas ({today})</h1>
            {moviesState.map((movie) => (
                <div key={movie.title} className="movie-card">
                    <div className="image">
                        <img alt={movie.title} src={movie.poster} />
                    </div>
                    <div className="movie">
                        {movie.title},
                        {movie.hall ? " sala: " + movie.hall : " Film još uvek nije u ponudi"},
                        {movie.price ? " cena: " + movie.price + "din" : " 300din"}
                    </div>
                    <div className="buttons">
                        <button onClick={() => likeMovie(movie.title)}>Like</button>
                        <p>{movie.likes}</p>
                        <button onClick={() => dislikeMovie(movie.title)}>Dislike</button>
                        <p>{movie.dislikes}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Movies;