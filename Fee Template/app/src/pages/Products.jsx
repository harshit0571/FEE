import React from "react";
import Header from "../components/Header";
import Fotter from "../components/Fotter";

const Products = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <div class="product-card">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
          </div>
          <div class="product-details">
            <span class="product-catagory">Women,bag</span>
            <h4>
              <a href="">Women leather bag</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>$96.00</small>$230.99
              </div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
          </div>
          <div class="product-details">
            <span class="product-catagory">Women,bag</span>
            <h4>
              <a href="">Women leather bag</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>$96.00</small>$230.99
              </div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
          </div>
          <div class="product-details">
            <span class="product-catagory">Women,bag</span>
            <h4>
              <a href="">Women leather bag</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>$96.00</small>$230.99
              </div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Products;
