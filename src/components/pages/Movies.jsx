import React, { useState } from "react";
import Screening from "../Screening";
import MovieForm from "../MovieForm";
import EditMovieForm from "../EditMovieForm";

const Movies = () => {

  const [editingMovie, setEditingMovie] = useState(null);
  

    const [movies, setMovies] = useState([{
    title: "Captain America - The First Avenger",
    hall: 2,
    price: 350,
    poster: "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg"
  },
  {
    title: "The Papillon",
    hall: 1,
    price: 300,
    poster: "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg"
  },
  {
    title: "The Lost City of Z",
    hall: 5,
    price: 350,
    poster: "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Klaus",
    hall: 3,
    poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg"
  },
  {
    title: "Bullet Train",
    poster: "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg"
  }])

  const handleAddMovie = (newMovieData) => {
    setMovies(prevMovies => [...prevMovies, newMovieData]);
  }
  const editMovie = (data) => {
    setMovies(prev => prev.map(element => (element.title === editingMovie.title ? data : element)))
    setEditingMovie(null);
  }

const dateTime = new Date().toLocaleDateString("sr-RS");


    return (
        <div>
          {editingMovie === null && (
          <MovieForm onAddMovie={handleAddMovie} />
          )}
          <h1>Repertoar filmova za danas ({dateTime})</h1>
          <div>
            { editingMovie ? (
              <EditMovieForm movie={editingMovie} onUpdate={editMovie}/>
            ): (movies?.length > 0 ? (
            movies.map(movie => (
            <Screening key={movie.title} movie={movie} onEdit={() => setEditingMovie(movie)} />
            ))
            ): (
            <p>Nema dostupnih filmova.</p>
            ))
            }
          </div>
        </div>
    )
}

export default Movies;