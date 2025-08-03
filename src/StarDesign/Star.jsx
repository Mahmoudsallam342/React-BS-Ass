import React from "react";

function Star() {
  return (
    <>
      <div className="starDesign d-flex justify-content-center align-items-center p-3">
        <div className="line me-3 bg-white"></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className="line ms-3 bg-white"></div>
      </div>
    </>
  );
}

export default Star;
