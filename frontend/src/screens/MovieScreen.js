import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../actions/movieActions";

function MovieScreen({ history, match }) {
  const dispatch = useDispatch();
  const currentMovie = useSelector((state) => state.movies.currentMovie) ?? {};
  useEffect(() => {
    const id = match.params.id;
    dispatch(getMovieById(id));
  }, [dispatch, history]);
  return (
    <div>
      <div className="row">
        <img
          className="col p-0"
          src={currentMovie.poster}
          style={{
            height: "20vh",
            objectFit: "cover",
            position: "absolute",
            zIndex: "-10",
            left: 0,
          }}
        />
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img
          className=""
          src={currentMovie.poster}
          style={{
            width: "max(20vw , 300px)",
            border: "5px solid white",
            marginTop: "10vh",
          }}
        />
        <h1 className="p-2"> {currentMovie.name}</h1>
      </div>
      <div className="container">
        <p className="m-2 p-2 ">
          <h4>Year of Release :</h4> {currentMovie.yearofrelease}
        </p>
        <p className="m-2 p-2">
          <h4>Actors : </h4>
          {currentMovie.actors && currentMovie.actors.map((a) => a + " ")}
        </p>
        <p className="m-2 p-2">
          <h4>Producers : </h4>{" "}
          {currentMovie.producers && currentMovie.producers.map((a) => a + " ")}
        </p>
        <p className="m-2 p-2">
          <h4>Plot : </h4>
          {currentMovie.plot}
        </p>
      </div>
    </div>
  );
}

export default MovieScreen;
