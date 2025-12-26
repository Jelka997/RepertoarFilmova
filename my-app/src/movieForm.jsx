import React from "react";
import "./styles/movieForm.scss";
import { useForm } from 'react-hook-form';


const MovieForm = ({ onAddMovie }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submitForm = (data) => {
        data.likes = 0;
        data.dislikes = 0;
        onAddMovie(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} className="forma">
            <label>
                Titile:
                <input {...register('title', { required: "Name is required." })} type="text" />
                {errors.title && <span>{errors.title.message}</span>}
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
                <input type="number" {...register('price', { required: "Price is required." })} />
                {errors.price && <span>{errors.price.message}</span>}
            </label>
            <br />

            <label>
                Poster:
                <input type="text" {...register('poster')}></input>
            </label>
            <br />

            <button type="submit">Add movie</button>
        </form>
    );
}

export default MovieForm;