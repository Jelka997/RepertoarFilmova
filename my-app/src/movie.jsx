import movie from "./assets/movie.jpg"
import React from "react";

const Movie = (props) => {
    return (
        < div className="container" >
            < div className="image" >
                <img alt="movie" src={movie} />
            </div >
            <div className="movie">
                {props.movieTitle}, {props.hall}, {props.price}
            </div>
        </div >
    )
}

export default Movie;