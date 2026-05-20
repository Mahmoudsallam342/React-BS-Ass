import React from "react";

function darkStar() {
  return (
    <>
      <div className="starDesign d-flex justify-content-center align-items-center p-3">
        <div className="line me-3 bg-dark"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-3 bg-dark"></div>
      </div>
    </>
  );
}

export default darkStar;
