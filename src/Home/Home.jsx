import React from "react";
import logo from "../imgs/imgi_1_avataaars.svg";
import Star from "../StarDesign/Star";
function Home() {
  return (
    <>
      <div className="homeContent p-5">
        <div className="logo d-flex justify-content-center p-5">
          <img src="https://upload.wikimedia.org/wikipedia/ar/7/7e/Haitham_Dabbour_Character.jpg" alt="logo" className="w-25 " />
        </div>
        <div className="logoContent text-center">
          <h1 className="text-uppercase text-white fw-bolder ">
            Sallam Dabour🐱‍🏍🐱‍👤
          </h1>
          <Star />
          <p className="text-white p-3">
            Ashraf beh🐱‍🐉
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
