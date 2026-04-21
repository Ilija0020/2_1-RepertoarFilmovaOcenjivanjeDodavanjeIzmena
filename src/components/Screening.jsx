import React from "react";

const Screening = (props) => {
    const handleLike = () => {
        props.onReaction(props.movie, "Like")
    }
    const handleDislike = () => {
        props.onReaction(props.movie, "Dislike")
    }
  return (
    <div className="movie-card">
        <div className="movie-left">
            <img  src={props.movie.poster} alt={props.movie.title} />
            <div className="movie-actions">
                <button onClick={handleLike}>Like</button>
                <button onClick={handleDislike}>Dislike</button>
            </div>
        </div>
        <div className="movie-right">
            <p>
                {props.movie.title}
                {props.movie.hall ? `, sala: ${props.movie.hall}, cena: ${props.movie.price || 300}din`
                : " - Film jos uvek nije u ponudi"}
            </p>
        </div>
    </div>
  );
}


export default Screening;