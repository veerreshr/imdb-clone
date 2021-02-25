import React, { useEffect } from "react";
import PersonCard from "../components/PersonCard";
import { useDispatch, useSelector } from "react-redux";
import { listActors } from "./../actions/actorActions";

function ActorsListScreen({ history, match }) {
  const dispatch = useDispatch();

  const actorsList = useSelector((state) => state.actors.actorsList);

  useEffect(() => {
    dispatch(listActors(""));
  }, [dispatch, history]);
  return (
    <div>
      <div className="container">
        <div className="row">
          {actorsList.map((actor) => {
            return (
              <PersonCard
                key={actor._id}
                name={actor.name}
                gender={actor.gender}
                dob={actor.dob}
                bio={actor.bio}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ActorsListScreen;
