import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../network/axioscongig";

export default function Movies() {
  const params = useParams();
  console.log(params.id);
  const [movieList, setMovie] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/3/movie/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setMovie([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {movieList.map((movie, index) => {
        return (
            <div
              key={index}
              className="card mx-auto my-5"
              style={{ maxWidth: "1000px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body ">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <p className="card-text text-center">
                      <small className="bg-success p-2 rounded-circle text-center">
                        {movie.vote_count} vote
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
    </>
  );
}
