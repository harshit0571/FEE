import React from "react";

const Header = () => {
  return (
    <header className="header-comp">
      <div class="col-lg-2 logo">
        <div class="first">Dicet</div>
        <div class="second">Tv</div>
      </div>
      <nav class="col-lg-6">
        <ul class="nav_link">
          <li>
            <a href="/">home</a>
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
  );
};

export default Header;
