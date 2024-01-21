import React from "react";
import imgs from "./image/pana.png";
import SectionAbout from "./SectionAbout";
import SectionProduct from "./SectionProduct";

const Section = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text">
          <h1>
            Making the most of the <br /> ever-growing <br />
            <span>Information Technology</span>
          </h1>
          <p>
            Managed by a team of professional experts with extensive <br />
            experience and impressive track records
          </p>
          <button>Read More</button>
        </div>
        <img src={imgs} alt="image" />
      </div>
      <SectionAbout />

      <SectionProduct />
    </div>
  );
};

export default Section;
