import movie from "./assets/movie.jpg"
import React from "react";

const Movie = (props) => {

    const handleMesagge = (type) => {
        props.onMessage(props.movie, type)
    }

    return (
        < div className="container" >
            < div className="image" >
                <img alt="movie" src={props.movie.poster} />
            </div >
            <div className="movie">
                {props.movie.title},
                {props.movie.hall ? " sala: " + props.movie.hall : " Film još uvek nije u ponudi"},
                {props.movie.price ? " cena: " + props.movie.price + "din" : " 300din"}
            </div>
            <div className="buttons">
                <button onClick={() => handleMesagge("Like")}>Like</button>
                <button onClick={() => handleMesagge("Dislike")}>Dislike</button>
            </div>
        </div >
    )
}

export default Movie;