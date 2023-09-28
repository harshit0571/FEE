import React from "react";
import Header from "./component/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "yellow",
          padding: "10px",
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>Services</h1>
      </div>
    </div>
  );
};

export default About;
