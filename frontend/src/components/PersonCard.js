import React from "react";

function PersonCard({ name, gender, dob, bio }) {
  return (
    <div className="col-md-3 col-sm-6 my-2">
      <div className="card bg-secondary text-dark">
        <div className="card-body">
          <h4 className="card-title">{name || "Name"}</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span>
                <strong>Gender : </strong>
                {gender || "-"}
              </span>
            </li>
            <li className="list-group-item">
              <span>
                <strong>Date of Birth : </strong> {dob ?? "-"}
              </span>
            </li>
            <li className="list-group-item">
              <span>
                <strong>Bio :</strong>{" "}
                <div className="ellipsis">{bio ?? "-"}</div>
              </span>
            </li>
          </ul>
          {/* <button className="btn btn-primary mt-3" type="button">
        Edit
      </button> */}
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
