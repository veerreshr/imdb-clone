import React from "react";

function Alert({ message }) {
  return (
    <>
      {message && (
        <div className="alert alert-warning p-1 my-1" role="alert">
          {message}
        </div>
      )}
    </>
  );
}

export default Alert;
