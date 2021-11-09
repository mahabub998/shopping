import React from "react";
import "./Follow.css";

const Follow = () => {
  return (
    <section>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 d-flex ">
            <div>
              <img src="https://i.ibb.co/y8rY4wm/download.png" alt="" />
              <p className="ms-5 mt-2">lorem ipsum dolor sit</p>
            </div>
            <h3 className="ms-5"> blogs</h3>
          </div>
          <div className="col-md-4 d-flex">
            <div>
              <img src="https://i.ibb.co/ngJL29Q/instagarm.jpg" alt="" />
              <p className="ms-5 mt-2">lorem ipsum dolor sit</p>
            </div>
            <h3 className="ms-2 ">Instagram</h3>
          </div>
          <div className="col-md-4 d-flex">
            <div>
              <img src="https://i.ibb.co/HYN1n6z/youtube.png" alt="" />
              <p className="ms-5 mt-2">lorem ipsum dolor sit</p>
            </div>
            <h3 className="ms-5">youtube</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
