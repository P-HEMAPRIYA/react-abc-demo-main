import { useState, useEffect } from "react";

import { Movie } from "./Movie";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();
  function getmovies() {
    fetch("https://64c3962467cfdca3b65fef89.mockapi.io/Movie/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setmovielist(data));
  }

  useEffect(() => getmovies(), []);

  const deletemovie = (id) => {
    console.log("deleting...", id);
    fetch("https://64c3962467cfdca3b65fef89.mockapi.io/Movie/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())

      .then(() => getmovies());
  };

  const editmovie = (id) => {
    console.log("editing.....", id);
    fetch("https://64c3962467cfdca3b65fef89.mockapi.io/Movie/" + id, {
      method: "PUT",
    }).then((res) => res.json());
  };

  const Addmovie = () => {
    const new_Movie = {
      name,
      poster,
      summary,
      rating,
      trailer,
    };
    fetch("https://64cc7dce2eafdcdc8519e155.mockapi.io/movies/", {
      method: "POST",
      body: JSON.stringify(new_Movie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };

  useEffect(() => {
    fetch("https://64c3962467cfdca3b65fef89.mockapi.io/Movie")
      .then((res) => res.json())
      .then((data) => setmovielist(data));
  }, []);

  return (
    <div className="Movies">
      {movielist.map((movie, index) => (
        <Movie
          key={index}
          id={movie.id}
          name={movie.name}
          poster={movie.poster}
          summary={movie.summary}
          rating={movie.rating}
          deleteButton={
            <button onClick={() => deletemovie(movie.id)}>delete</button>
          }
          editbutton={<button onClick={() => editmovie(movie.id)}>edit</button>}
        />
      ))}
    </div>
  );
}
