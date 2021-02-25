import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import MultiSelectComponent from "../components/MultiSelectComponent";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../actions/movieActions";
import { getAllActorsNames } from "../actions/actorActions";
import { getAllProducersNames } from "../actions/producerActions";
import Alert from "../components/Alert";

function EditScreen({ history, match }) {
  const dispatch = useDispatch();

  const currentMovie = useSelector((state) => state.movies.currentMovie) ?? "1";

  // const newlyCreatedActor =
  //   useSelector((state) => state.actors.newlyCreatedActor.updatedActor) ?? {};
  // const newlyCreatedProducer =
  //   useSelector(
  //     (state) => state.producers.newlyCreatedProducer.updatedProducer
  //   ) ?? {};

  const completeActorsNames = useSelector(
    (state) => state.actors.actorsNameList
  );
  const completeProducersNames = useSelector(
    (state) => state.producers.producersNameList
  );

  const [name, setName] = useState("");
  const [yearofrelease, setYearofrelease] = useState("");
  const [plot, setPlot] = useState("");
  const [poster, setPoster] = useState("");
  const [actors, setActors] = useState([]);
  const [producers, setProducers] = useState([]);

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [random, setRandom] = useState(1);

  const [formErrors, setFormErrors] = useState({});
  const modalClickHandler = (type) => {
    setRandom(Math.random());
    setShow(true);
    setTitle(type);
  };
  useEffect(() => {
    dispatch(getAllActorsNames("../"));
    dispatch(getAllProducersNames("../"));
    if (currentMovie._id != match.params.id) {
      dispatch(getMovieById(match.params.id));
    }
    if (currentMovie && currentMovie._id == match.params.id) {
      setName(currentMovie.name);
      setYearofrelease(currentMovie.yearofrelease);
      setPlot(currentMovie.plot);
      setPoster(currentMovie.poster);
      setActors(currentMovie.actors);
      setProducers(currentMovie.producers);
    }
  }, [dispatch, match.params.id, currentMovie]);

  const handleActorsChange = (data) => {
    const list = data.map((d) => d.label);
    setActors(list);
  };
  const handleProducersChange = (data) => {
    const list = data.map((d) => d.label);
    setProducers(list);
  };
  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;
    //Name
    if (!name) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    } else {
      if (typeof name !== "undefined") {
        if (!name.match(/^[a-z][a-z\s]*$/)) {
          formIsValid = false;
          errors["name"] = "Only letters";
        }
      }
    }

    if (!actors) {
      formIsValid = false;
      errors["actors"] = "Cannot be empty";
    }

    if (!producers) {
      formIsValid = false;
      errors["producers"] = "Cannot be empty";
    }

    if (!yearofrelease) {
      formIsValid = false;
      errors["yearofrelease"] = "Cannot be empty";
    } else {
      if (typeof yearofrelease !== "undefined") {
        if (!yearofrelease.match(/^\d{4}$/)) {
          formIsValid = false;
          errors["yearofrelease"] = "Enter Valid Year";
        }
      }
    }

    if (!plot) {
      formIsValid = false;
      errors["plot"] = "Cannot be empty";
    }
    if (!poster) {
      formIsValid = false;
      errors["poster"] = "Cannot be empty";
    }

    setFormErrors(errors);
    return formIsValid;
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  };

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    const objectUrl = URL.createObjectURL(selectedFile);
    setPoster(objectUrl);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={formSubmit}>
          <h1>Edit/Add movie </h1>
          <div className="form-group">
            <label>
              <strong>Name of Movie</strong>
            </label>
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Alert message={formErrors["name"]} />
          </div>
          <div className="form-group">
            <label>
              <strong>Year of Release</strong>
            </label>
            <input
              className="form-control"
              type="text"
              value={yearofrelease}
              onChange={(e) => setYearofrelease(e.target.value)}
            />
            <small className="form-text text-muted">format : dd/mm/yyyy</small>
            <Alert message={formErrors["yearofrelease"]} />
          </div>
          <div className="form-group">
            <label>
              <strong>Plot</strong>
            </label>
            <textarea
              className="form-control"
              value={plot}
              onChange={(e) => setPlot(e.target.value)}
            ></textarea>
            <Alert message={formErrors["plot"]} />
          </div>
          <div className="form-group">
            <label>
              <strong>Upload Poster Image</strong>
            </label>
            <br />
            {/* {poster} */}
            <div className="row">
              <img className="col-md-3" src={poster} />
              <div className="col-md-9 custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  onChange={handleImageUpload}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
            </div>
            <Alert message={formErrors["poster"]} />
          </div>
          <div className="form-group">
            <label>
              <strong>Select Actors</strong>
            </label>
            <MultiSelectComponent
              key="1"
              options={completeActorsNames || []}
              selectedData={actors}
              handleChange={handleActorsChange}
            />
            <small className="form-text text-muted">
              Want to add new Actor ? click &nbsp;
              <div
                className="btn btn-outline-light btn-sm"
                onClick={() => {
                  modalClickHandler("Actor");
                }}
              >
                Add Actor
              </div>
            </small>
            <Alert message={formErrors["actors"]} />
          </div>
          <div className="form-group">
            <label>
              <strong>Select Producers</strong>
            </label>
            <MultiSelectComponent
              key="2"
              options={completeProducersNames || []}
              selectedData={producers}
              handleChange={handleProducersChange}
            />
            <small className="form-text text-muted">
              Want to add new Producer? click &nbsp;
              <div
                className="btn btn-outline-light btn-sm"
                onClick={() => {
                  modalClickHandler("Producer");
                }}
              >
                Add Producer
              </div>
            </small>
            <Alert message={formErrors["producers"]} />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Save Changes
          </button>
        </form>
      </div>
      <Modal title={title} show={show} random={random} />
    </>
  );
}

export default EditScreen;
