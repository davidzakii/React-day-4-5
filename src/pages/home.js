import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axioscongig";
import { Link } from "react-router-dom";

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/3/movie/popular")
      .then((res) => {
        console.log(res.data);
        setMoviesList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const sendData = (e)=>{
      setMovies(e);
  }
  return (
    <>
      <div className="row row-cols-4 row-cols-md-4 g-4">
        {moviesList.map((movie, index) => {
          return (
            <div key={index} className="col-2 m-5">
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title text-center"> {movie.title} </h5>
                  <p className="card-text text-center">{movie.vote_average}</p>
                  <Link
                    onClick={() => sendData(movie)}
                    className="btn btn-success text-center"
                    to={`/movies/${movie.id}`}
                    key={movie.original_title}
                  >
                    Go to movie
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
