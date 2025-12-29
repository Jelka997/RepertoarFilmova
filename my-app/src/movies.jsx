import React from "react";
import { useState, useEffect } from "react";
import { getAllMovies, getMovieById } from "./services/movieService";
import { useNavigate } from "react-router-dom";
import { deleteMovie } from "./services/movieService";
import { addMovieLike, addMovieDislike } from "./services/movieService";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const date = new Date();
    const today = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    async function loadMovies() {
        try {
            setLoading(true);
            const data = await getAllMovies();
            setMovies(data);
            setError('');
        } catch (err) {
            setError("Greska pri ucitavanju filmova");
        }
        finally {
            setLoading(false);
        }
    }

    async function deleteOneMovie(id) {
        try {
            if (id) {
                await deleteMovie(id);
                setError('');
                loadMovies();
            }
        }
        catch (errorMessage) {
            setError("Greska sa servera - " + errorMessage);
        }

    }

    const feedbacks = (id, type) => {
        setMovies(prev =>
            prev.map(movie =>
                movie.id === id
                    ? {
                        ...movie,
                        likes: type === "Like" ? movie.likes + 1 : movie.likes,
                        dislikes: type === "Dislike" ? movie.dislikes + 1 : movie.dislikes
                    }
                    : movie
            )
        );

        try {
            if (type === "Like") {
                addMovieLike(id);

            } else if (type === "Dislike") {
                addMovieDislike(id);
            }
        } catch (errorMessage) {
            setError("Greska sa servera - " + errorMessage);
        }
    }

    useEffect(() => { loadMovies(); }, []);

    useEffect(() => {
        console.log("Postavka filmova");
        return () => {
            console.log("Sklanjanje filmova");
        };
    }, []);

    useEffect(() => {
        if (movies.length === 0)
            return;
        const sorted = [...movies].sort((a, b) => (b.likes - b.dislikes) - (a.likes - a.dislikes));
        if (sorted[0].id !== movies[0].id) {
            setMovies(sorted);
        }
    }, [movies]);

    return (
        <div className="container">
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {loading ? (
                <div className="spinner"></div>
            ) : (
                <>
                    <h1>Repertoar filmova za danas ({today})</h1>

                    {movies.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <div className="image">
                                <img alt={movie.title} src={movie.poster} />
                            </div>

                            <div className="movie">
                                {movie.name},
                                {" Hall: " + movie.hall},
                                {" Price: " + movie.price}
                            </div>

                            <div className="buttons">
                                <button onClick={() => feedbacks(movie.id, "Like")}>Like</button>
                                <p>{movie.likes}</p>

                                <button onClick={() => feedbacks(movie.id, "Dislike")}>Dislike</button>
                                <p>{movie.dislikes}</p>

                                <button onClick={() => navigate(`/edit-movie/${movie.id}`)}>Edit</button>
                                <button type="button" onClick={() => deleteOneMovie(movie.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}


export default Movies;