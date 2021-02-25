import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { listMovies } from "./../actions/movieActions";

function MovieListScreen({ history, match }) {
  const dispatch = useDispatch();

  const moviesList = useSelector((state) => state.movies.moviesList);

  useEffect(() => {
    dispatch(listMovies(""));
  }, [dispatch, history]);
  return (
    <div className="my-3">
      <div className="container">
        <div className="row">
          {moviesList.map((movie) => {
            return (
              <MovieCard
                key={movie._id}
                id={movie._id}
                title={movie.name}
                yearofrelease={movie.yearofrelease}
                producers={movie.producers}
                actors={movie.actors}
                poster={movie.poster}
                history={history}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieListScreen;
