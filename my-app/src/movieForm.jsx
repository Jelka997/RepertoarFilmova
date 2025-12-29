import React, { useEffect } from "react";
import "./styles/movieForm.scss";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { createMovie } from "./services/movieService";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { getMovieById } from "./services/movieService";
import { updateMovie } from "./services/movieService";

const MovieForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [err, setError] = useState('');

    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        if (!id) return;

        async function editMovie(id) {
            try {
                const movie = await getMovieById(id);
                reset({
                    id: id,
                    name: movie.name,
                    hall: movie.hall,
                    price: movie.price,
                    likes: movie.likes,
                    dislikes: movie.dislikes,
                    poster: movie.poster
                });
            } catch (err) {
                setError("Greska pri ucitavanju filma: " + err);
            }
        }
        editMovie(id);
    }, [id, reset]);

    async function submitForm(data) {
        try {
            data.likes = Math.floor(Math.random() * 5) + 1;
            data.dislikes = Math.floor(Math.random() * 5) + 1;
            if (id) {
                console.log(data);
                await updateMovie(id, data);
            } else {
                await createMovie(data);
            }
            reset();
            navigate('/movies');
        } catch (errorMessage) {
            setError("Greska sa servera - " + errorMessage);
        }
    }

   
    return (
        <div>
            {err && <p style={{ color: 'red' }}>{err}</p>}

            <form onSubmit={handleSubmit(submitForm)} className="forma">
                <label>
                    Title:
                    <input {...register('name', { required: "Name is required." })} type="text" />
                    {errors.name && <span>{errors.name.message}</span>}
                </label>
                <br />

                <label>
                    Hall:
                    <input type="number" {...register('hall', {
                        required: "Hall is required.",
                        valueAsNumber: true,
                        min:
                        {
                            value: 1,
                            message: "Hall must be between 1 and 12."
                        }
                        , max: {
                            value: 12,
                            message: "Hall must be between 1 and 12."
                        }
                    })} />
                    {errors.hall && <span>{errors.hall.message}</span>}
                </label>
                <br />

                <label>
                    Price:
                    <input type="number" step="0.01" {...register('price', { required: "Price is required." })} />
                    {errors.price && <span>{errors.price.message}</span>}
                </label>
                <br />

                <label>
                    Poster:
                    <input type="text" {...register('poster')}></input>
                </label>
                <br />

                <button type="submit">{ id ? "Edit movie" : "Add movie"}</button>
            </form>
        </div>
    );
}

export default MovieForm;