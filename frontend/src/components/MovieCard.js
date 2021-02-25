import React from "react";

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
    <div className="col-md-3 col-sm-6 my-2">
      <div className="card">
        <img
          className="card-img-top w-100 d-block"
          src={poster}
          alt="Movie Poster"
        />
        <div className="card-body">
          <h4 className="card-title">{title || "Title"}</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span>
                <strong>Year of Release : </strong>
                {yearofrelease || "2020"}
              </span>
            </li>
            <li className="list-group-item">
              <span>
                <strong>Producer : </strong>{" "}
                {producers
                  ? producers.map((producer) => producer + " ")
                  : "Producer 1, Producer 2"}
              </span>
            </li>
            <li className="list-group-item">
              <span>
                <strong>Actors :</strong>{" "}
                {actors
                  ? actors.map((actor) => actor + " ")
                  : "Actor 1, Actor 2"}
              </span>
            </li>
          </ul>
          <button
            className="btn btn-primary mt-3"
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
