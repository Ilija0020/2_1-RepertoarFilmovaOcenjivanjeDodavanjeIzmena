import React from "react";
import { useForm } from "react-hook-form";

const MovieForm = ({onAddMovie}) => {

    const {register, handleSubmit, formState: {errors}, reset } = useForm();

    const onSubmit = (data) => {
            onAddMovie(data);
            reset();
        }
    

    return (
        <div className="movie-form-wrapper">
            <h2>Dodaj novi film</h2>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div>
                    <label htmlFor="title">Naziv filma:</label>
                    <input type="text" id="title" {...register("title", {required: "Movie name is required"})}
                     placeholder="Pera Peric" />
                    {errors.title && <p className="error">{errors.title.message}</p>}
                </div>
                <div>
                    <label htmlFor="hall">Sala:</label>
                    <input type="number" id="hall" {...register("hall",
                        {required: "Hall number is required",
                         valueAsNumber: true,
                         min: { value: 1, message: "Hall number must be greater than 0"},
                         max: { value: 12, message: "Hall number must be less than 13"}})}
                         placeholder="1-12" />
                    {errors.hall && <p className="error">{errors.hall.message}</p>}
                </div>
                <div>
                    <label htmlFor="price">Cena(rsd): </label>
                    <input type="number" id="price" {...register("price", {
                        required: "Price is required",
                        valueAsNumber: true,
                        min: { value: 300, message: "Price must be greater than 300"}, })} 
                        placeholder=">300" />
                    {errors.price && <p className="error">{errors.price.message}</p>}
                </div>
                <div>
                    <label htmlFor="poster">Poster:</label>
                    <input type="text" id="poster" {...register("poster")} placeholder="https://example.com/img.jpg" />
                </div>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    )
}

export default MovieForm;