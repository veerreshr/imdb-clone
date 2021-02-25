import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createActor, getAllActorsNames } from "../actions/actorActions";
import {
  createProducer,
  getAllProducersNames,
} from "../actions/producerActions";
import Alert from "./Alert";

function Modal({ show = false, title, random }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [gender, setGender] = useState(null);
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState();
  const [formErrors, setFormErrors] = useState({});
  const buttonRef = React.useRef(null);
  useEffect(() => {
    if (show) {
      buttonRef.current.click();
    }
  }, [show, title, random]);
  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;
    let dateRegex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
    //Name
    if (!name) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    } else {
      if (typeof name !== "undefined") {
        if (!name.match(/^[a-zA-Z\s\.]+$/)) {
          formIsValid = false;
          errors["name"] = "Only letters";
        }
      }
    }

    if (!gender) {
      formIsValid = false;
      errors["gender"] = "Gender cannot be empty";
    }

    if (!bio) {
      formIsValid = false;
      errors["bio"] = "Cannot be empty";
    }

    if (!dob) {
      formIsValid = false;
      errors["dob"] = "Cannot be empty";
    } else {
      if (typeof dob !== "undefined") {
        if (!dob.match(dateRegex)) {
          formIsValid = false;
          errors["dob"] = "Invalid date entry";
        }
      }
    }
    setFormErrors(errors);
    return formIsValid;
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const data = { name, gender, dob, bio };
      if (title == "Actor") {
        dispatch(createActor(data));
        setName("");
        setGender(null);
        setBio("");
        setDob();
        buttonRef.current.click();
      }
      if (title == "Producer") {
        dispatch(createProducer(data));
        setName("");
        setGender(null);
        setBio("");
        setDob();
        buttonRef.current.click();
      }
    }
  };
  return (
    <>
      <div
        id="myModal"
        className="modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{"Enter " + title + " Details"}</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={formSubmit}>
                <div className="form-group">
                  <label>
                    <strong>{"Name of " + title} </strong>
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
                    <strong>Gender</strong>
                  </label>
                  <select
                    className="form-select form-control"
                    aria-label="Default select example"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option></option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                  </select>
                  <Alert message={formErrors["gender"]} />
                </div>
                <div className="form-group">
                  <label>
                    <strong>Date of Birth</strong>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                  <small className="form-text text-muted">
                    format : dd/mm/yyyy
                  </small>
                  <Alert message={formErrors["dob"]} />
                </div>
                <div className="form-group">
                  <label>
                    <strong>Bio</strong>
                  </label>
                  <textarea
                    className="form-control"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                  <Alert message={formErrors["bio"]} />
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-light"
                    type="button"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#myModal"
        ref={buttonRef}
      >
        open
      </div>
    </>
  );
}

export default Modal;
