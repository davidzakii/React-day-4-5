import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../network/axioscongig";
import {LanguageContext} from "../context/languge";
import { getMoviesDetail,getMoviesList } from "../store/action/movies";

export default function Movies() {
  const dispatch = useDispatch();
  const params = useParams();
  const {lang} = useContext(LanguageContext)  
  const movieDetails = useSelector((state)=>state.Movies.oneMovie)  
  const moviesList = useSelector((state)=>state.Movies.moviesList)  
  useEffect(async () => {
      dispatch(getMoviesDetail(params.id,{language:lang}))
      dispatch(getMoviesList({language:lang}))  
  }, [params.id]);

  // const addFavMovie = (movie) => {
  //   dispatch(
  //     addFavHandler({
  //       id: movie.id,
  //       poster_path: movie.poster_path,
  //       title: movie.title,
  //       vote_average: movie.vote_average,
  //     })
  //   );
  // };
  return (
    <>
      {moviesList.map((movie, index) => {
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
