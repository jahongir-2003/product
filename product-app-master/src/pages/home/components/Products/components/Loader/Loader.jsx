import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="custom-spinner custom-spinner-1 mx-4 bg-primary">
        <span className="ripple bg-primary"></span>
      </div>
      <div className="custom-spinner custom-spinner-2 mx-4 bg-secondary ">
        <span className="ripple bg-secondary "></span>
      </div>
      <div className="custom-spinner custom-spinner-3 mx-4 bg-success ">
        <span className="ripple bg-success "></span>
      </div>
      <div className="custom-spinner custom-spinner-4 mx-4 bg-danger ">
        <span className="ripple bg-danger "></span>
      </div>
      <div className="custom-spinner custom-spinner-5 mx-4 bg-warning">
        <span className="ripple bg-warning "></span>
      </div>
    </div>
  );
};

export default Loader;
