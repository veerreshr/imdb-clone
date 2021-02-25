import React, { useEffect } from "react";
import PersonCard from "../components/PersonCard";
import { useDispatch, useSelector } from "react-redux";
import { listProducers } from "./../actions/producerActions";

function ProducersListScreen({ history, match }) {
  const dispatch = useDispatch();

  const producersList = useSelector((state) => state.producers.producersList);

  useEffect(() => {
    dispatch(listProducers(""));
  }, [dispatch, history]);
  return (
    <div>
      <div className="container my-3">
        <div className="row">
          {producersList.map((producer) => {
            return (
              <PersonCard
                key={producer._key}
                name={producer.name}
                gender={producer.gender}
                dob={producer.dob}
                bio={producer.bio}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProducersListScreen;
