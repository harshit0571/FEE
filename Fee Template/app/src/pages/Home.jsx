import React from "react";
import Fotter from "../components/Fotter";

const Home = () => {
  return (
    <div class="container">
      <div class="section1">
        <header className="">
          <div class="col-lg-2 logo">
            <div class="first">Dicet</div>
            <div class="second">Tv</div>
          </div>
          <nav class="col-lg-6">
            <ul class="nav_link">
              <li>
                <a href="/home">home</a>
              </li>
              <li>
                <a href="/about">about</a>
              </li>
              <li>
                <a href="/product">products</a>
              </li>
              <li>
                <a href="/blog">blog</a>
              </li>
              <li>
                <a href="/contact">contact us</a>
              </li>
              <button id="btn1">
                <li>
                  <a href="/login">Get Started</a>
                </li>
              </button>
            </ul>
          </nav>
          <div class="col-lg-2 icon">
            <i class="fa fa-user-o"></i>
            <i class="fa fa-shopping-bag"></i>
            <i class="fa fa-search"></i>
          </div>
        </header>

        <div class="row2">
          <div class="col-lg-1 col1">
            <i class="fa fa-arrow-circle-o-left"></i>
            <i class="fa fa-arrow-circle-o-right"></i>
          </div>
          <div class="col-lg-5 col2" id="home">
            <div class="head1">Your Favorite</div>
            <div class="head2">Shows And Movies</div>
            <p>
              There are many variations of passage of Lorem Ipsum available,but
              the majority have suffered alteration in some form,by injected
              humour,or
            </p>

            <div class="btn2">
              <button id="btn2-1">Start Now</button>
              <button id="btn2-2">Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col3">
            <h2>Dicet Tv</h2>
            <img src="./section1-col3.png" alt="" srcset="" />
          </div>
        </div>

        <div class="col-lg-10 box">
          <div class="box1">
            <img src="./icon-2.png" alt="" srcset="" />
            <h3>Broadband</h3>
            <p>
              There are many variations of passages of Lorem ipsum available,but
              the majority have suffered alteration in some form,m lpsum,you
              need to be
            </p>
          </div>
          <div class="box2">
            <img src="./icon-1.png" alt="" srcset="" />
            <h3>Satelite TV</h3>
            <p>
              There are many variations of passages of Lorem ipsum available,but
              the majority have suffered alteration in some form,m lpsum,you
              need to be
            </p>
          </div>
          <div class="box3">
            <img src="./icon-3.png" alt="" srcset="" />
            <h3>Mobility</h3>
            <p>
              There are many variations of passages of Lorem ipsum available,but
              the majority have suffered alteration in some form,m lpsum,you
              need to be
            </p>
          </div>
        </div>
      </div>
      <div class="section2" id="about">
        <div class="sec2-col1">
          <img src="./section2-img.png" alt="" srcset="" />
        </div>
        <div class="sec2-col2">
          <div class="sec2-content">
            <div class="head3">Live Sport and TV-shows for best</div>
            <div class="head3">friends</div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.The
              point of Using Lorem lpsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <div class="sec2-box">
              <div class="secbox1">4K Ultra HD Quality</div>
              <div class="secbox2">200+ Online Channels</div>
            </div>
            <div id="btn4">read more</div>
          </div>
        </div>
      </div>

      <div class="section3" id="product">
        <div class="sec3-content">
          <h4>Tariffs</h4>
          <h1>Choose your plan</h1>
          <p>
            Lorem ipsum dolar sit amet,consectetur adipiscing elit.Proin
            bibendum,est ac faucibus hendrerit,mauris ante viverra urna,in
            elementum urna est ut ligula
          </p>
        </div>
        <div class="sec3-box">
          <div class="sec3-boxes">
            <div class="sec3-box-content">
              <div class="sec3-one">Easy Surfing</div>
              <div class="sec3-two" style={{ backgroundColor: "red" }}>
                Internet
              </div>
              <div class="sec3-three">
                <h2>$24.99</h2>
                <h5>Month</h5>
                <p>It is a long established fact distracement</p>
              </div>
              <button id="btn5">See More</button>
            </div>
          </div>
          <div class="sec3-boxes">
            <div class="sec3-box-content">
              <div class="sec3-one">Impression</div>
              <div class="sec3-two" style={{ backgroundColor: "red" }}>
                Tv
              </div>
              <div class="sec3-three">
                <h2>$24.99</h2>
                <h5>Month</h5>
                <p>It is a long established fact distracement</p>
              </div>
              <button id="btn5">See More</button>
            </div>
          </div>
          <div class="sec3-boxes">
            <div class="sec3-box-content">
              <div class="sec3-one">Premium Plan</div>
              <div class="sec3-two" style={{ backgroundColor: "red" }}>
                Internet + Tv +phone
              </div>
              <div class="sec3-three">
                <h2>$24.99</h2>
                <h5>Month</h5>
                <p>It is a long established fact distracement</p>
              </div>
              <button id="btn5">See More</button>
            </div>
          </div>
        </div>
      </div>

      <div class="section4" id="blog">
        <div class="head5">
          Check availability to connect our services in your area
        </div>
        <img
          src="./section4-bg.jpg"
          alt=""
          srcset=""
          style={{ borderBottom: "1px solid black" }}
        />
        <div class="section4-1">
          <img src="./section4-img.png" alt="" srcset="" />
          <div class="section4-2">
            <p>it's a long established fact that a reader will be distracted</p>
            <div class="inp-btn">
              <input type="text" placeholder="Enter your address" />
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div class="section5">
        <div class="col-lg-3 sec5-col1">
          <img src="./section5.jpg" alt="" srcset="" />
        </div>
        <div class="col-lg-7 sec5-col2">
          <div class="head6">What our clients say</div>
          <div class="sec5-row2">
            <div class="miller-group">
              <img src="./section5.jpg" class="miller" alt="" srcset="" />
              Miller
            </div>

            <img src="./quote.png" class="quote" alt="" srcset="" />
          </div>
          <p>
            ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod
            tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim
            veniam,quis nostrud exercitation ullamco laborisnisi ut aliquip ex a
            commodo consequat. Duis artue dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fuigat nulla pariatur.Excepteur sint
            occaecat cupidatat non proident,sunt in culpa qui officia deserunt
            molit anim id
          </p>
        </div>
      </div>

      <div class="section6" id="contact">
        <div class="col-lg-3 sec6-col1">
          <p>Subscribe Now</p>
        </div>
        <div class="col-lg-7 sec6-col2">
          <input type="search" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <hr />

      <Fotter />
    </div>
  );
};

export default Home;
