import React from "react";
import Screening from "../Screening";

const Movies = () => {

    const movies = [
  {
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
  }
];

const dateTime = new Date().toLocaleDateString("sr-RS");

const handleReaction = (movie, action) => {
  alert(`Dodelili ste "${action}" za film "${movie.title}"!`)
}

    return (
        <div>
        <h1>Repertoar filmova za danas ({dateTime})</h1>
        <div>
    {movies?.length > 0 ? (
      movies.map(movie => (
        <Screening movie={movie} onReaction={handleReaction} />
      ))
    ): (
      <p>Nema dostupnih filmova.</p>
    )}
  </div>
  </div>
    )
}

export default Movies;