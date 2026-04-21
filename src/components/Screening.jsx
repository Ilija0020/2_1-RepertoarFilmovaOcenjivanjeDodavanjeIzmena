import React, { useState } from "react";

const Screening = (props) => {

    const [likes , setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => {
        setLikes(prev => prev + 1)
    }
    const handleDislike = () => {
        setDislikes(prev => prev + 1)
    }
  return (
    <div className="movie-card">
        <div className="movie-left">
            <img  src={props.movie.poster} alt={props.movie.title} />
            <div className="movie-actions">
                <button onClick={handleLike}>Like</button>
                <button onClick={handleDislike}>Dislike</button>
            </div>
            <p className="movie-stats">👍: {likes} | 👎: {dislikes}</p>
        </div>
        <div className="movie-right">
            <p>
                {props.movie.title}
                {props.movie.hall ? `, sala: ${props.movie.hall}, cena: ${props.movie.price || 300}din`
                : " - Film jos uvek nije u ponudi"}
            </p>
        </div>
            <button className="edit-btn" onClick={props.onEdit}>Izmeni</button>
    </div>
  );
}


export default Screening;