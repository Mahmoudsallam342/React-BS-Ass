import React, { useState } from "react";
import DarkStar from "../StarDesign/DarkStar";
import Pic1 from "../imgs/imgi_1_poert1.png";
import Pic2 from "../imgs/imgi_2_port2.png";
import Pic3 from "../imgs/imgi_3_port3.png";
function Portfolio() {
  const imgs = [Pic1, Pic2, Pic3, Pic1, Pic2, Pic3];
  const [selectedPic, setSelectedPic] = useState(null);
  return (
    <>
      <div className="portfollioSection text-center ">
        <h1 className="pt-5 text-uppercase">portfolio component</h1>
        <h2> this is portfilo</h2>
        <DarkStar />
        <div className="container position-relative">
          <div className="row g-3 p-5">
            {imgs.map((img, idx) => (
              <div
                key={idx}
                className="portfolioPic rounded-4 col-md-4 position-relative"
                onClick={() => setSelectedPic(img)}
              >
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0 rounded-4 d-flex justify-content-center align-items-center fw-bolder text-white">
                  +
                </div>
                <img
                  src={img}
                  className=" rounded-4 img-fluid "
                  alt={`pic ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =============overlay======= */}
      {selectedPic && (
        <div
          className="overLay   position-fixed top-0  start-0 w-100 h-100  d-flex justify-content-center align-items-center"
          onClick={() => setSelectedPic(null)}
        >
          <img
            src={selectedPic}
            alt="pic"
            className="img-fluid rounded-4"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default Portfolio;
