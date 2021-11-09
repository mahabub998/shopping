import React from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <h1 className="style_Filter"> Filter category</h1>

            <ul>
              <li>Jaket</li>
              <li>T-shirt</li>
              <li>Jeans</li>
              <li> Trousers</li>
              <li>Sari</li>
              <li>Wo man </li>
              <li>Wo man </li>
            </ul>
          </div>
          <div className="col-md-9">
            <Product />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
