import React from "react";
import logo from "../imgs/imgi_1_avataaars.svg";
import Star from "../StarDesign/Star";
function Home() {
  return (
    <>
      <div className="homeContent p-5">
        <div className="logo d-flex justify-content-center p-5">
          <img src={logo} alt="logo" className="w-25 " />
        </div>
        <div className="logoContent text-center">
          <h1 className="text-uppercase text-white fw-bolder ">
            start Framework
          </h1>
          <Star />
          <p className="text-white p-3">
            dasdasdasdasdasdasdsa
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
