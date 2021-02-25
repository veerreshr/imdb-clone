import React from "react";
import { Link } from "react-router-dom";

function MovieCard({
  id,
  title,
  yearofrelease,
  producers,
  actors,
  poster,
  history,
}) {
  const editHandler = () => {
    history.push(`/editMovie/${id}`);
  };
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 my-2">
      <div className="card h-100">
        <img
          className="card-img-top w-100 d-block"
          src={poster}
          alt="Movie Poster"
          style={{ height: "150px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <Link to={`/movie/${id}`}>
            <h4 className="card-title">{title || "Title"}</h4>
          </Link>

          <ul className="list-group mb-2">
            <li className="list-group-item">
              <span>
                <strong>Year of Release : </strong>
                {yearofrelease || "2020"}
              </span>
            </li>
            <li className="list-group-item ellipsis">
              <span>
                <strong>Producer : </strong>{" "}
                {producers
                  ? producers.map((producer) => producer + " ")
                  : "Producer 1, Producer 2"}
              </span>
            </li>
            <li className="list-group-item ellipsis">
              <span>
                <strong>Actors :</strong>{" "}
                {actors
                  ? actors.map((actor) => actor + " ")
                  : "Actor 1, Actor 2"}
              </span>
            </li>
          </ul>
          <button
            className="btn btn-primary mt-auto"
            type="button"
            onClick={editHandler}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
