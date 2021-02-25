import React from "react";

function PersonCard({ name, gender, dob, bio }) {
  const truncate = (input) =>
    input.length > 100 ? `${input.substring(0, 100)}...` : input;
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 my-2">
      <div className="card h-100 bg-secondary text-dark">
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
                <strong>Bio :</strong> {truncate(bio) ?? "-"}
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
