import React from "react";
import { useState, useEffect } from "react";
import { getAllMovies, getMovieById } from "./services/movieService";
import { useNavigate } from "react-router-dom";

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
        finally{
            setLoading(false);
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

    const feedback = (id, type) => {
        if (type === "Like") {
            setMovies(prev => prev.map(movie => movie.id === id ? { ...movie, likes: movie.likes + 1 } : movie));
        } else if (type === "Dislike") {
            setMovies(prev => prev.map(movie => movie.id === id ? { ...movie, dislikes: movie.dislikes + 1 } : movie));
        }
    }

    return (
        <div className="container">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading ? <h1>Repertoar filmova za danas ({today})</h1> : <div className="spinner"></div>}
            {!loading && movies.map((movie) => (
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
                        <button onClick={() => feedback(movie.id, "Like")}>Like</button>
                        <p>{movie.likes}</p>
                        <button onClick={() => feedback(movie.id, "Dislike")}>Dislike</button>
                        <p>{movie.dislikes}</p>
                        <button onClick={() => navigate(`/edit-movie/${movie.id}`)}>Edit</button>
                    </div>
                </div>
            ))}


        </div>
    );
}


export default Movies;