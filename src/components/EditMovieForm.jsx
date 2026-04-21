import React from "react";
import { useForm } from "react-hook-form";

const EditMovieForm = ({onUpdate, movie}) => {

    const {register, handleSubmit, formState: {errors}, reset } = useForm({
        defaultValues: movie });

    const onSubmit = (data) => {
            onUpdate(data);
        }
    

    return (
        <div className="movie-form-wrapper">
            <h2>Izmeni film</h2>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div>
                    <label htmlFor="title">Naziv filma:</label>
                    <input type="text" id="title" {...register("title", {required: "Movie name is required"})} />
                    {errors.title && <p className="error">{errors.title.message}</p>}
                </div>
                <div>
                    <label htmlFor="hall">Sala:</label>
                    <input type="number" id="hall" {...register("hall",
                        {required: "Hall number is required",
                         valueAsNumber: true,
                         min: { value: 1, message: "Hall number must be greater than 0"},
                         max: { value: 12, message: "Hall number must be less than 13"}})} />
                    {errors.hall && <p className="error">{errors.hall.message}</p>}
                </div>
                <div>
                    <label htmlFor="price">Cena(rsd): </label>
                    <input type="number" id="price" {...register("price", {
                        required: "Price is required",
                        valueAsNumber: true,
                        min: { value: 300, message: "Price must be greater than 300"}, })} />
                    {errors.price && <p className="error">{errors.price.message}</p>}
                </div>
                <div>
                    <label htmlFor="poster">Poster:</label>
                    <input type="text" id="poster" {...register("poster")} placeholder="https://example.com/img.jpg" />
                </div>
                <button type="submit">Azuriraj</button>
            </form>
        </div>
    )
}

export default EditMovieForm;