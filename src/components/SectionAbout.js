import React from "react";
import imgs2 from "./image/2.png";

const SectionAbout = () => {
  return (
    <div className="containers">
      <div className="about">
        <img src={imgs2} alt="image" />

        <div className="about-text">
          <h1>
            Welcome to{" "}
            <span>
              Dwidasa Samsara <br />
              Indonesia (DSI)
            </span>
          </h1>
          <p>
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010{" "}
            <br /> by the founders, who each of them has a common end objective{" "}
            <br /> to innovate new creations by making the most of the <br />{" "}
            ever-growing information technology through DSI’s distinct <br />{" "}
            front-end based application concept. <br />
            <br /> Managed by a team of professional experts with extensive{" "}
            <br />
            experience and impressive track records, DSI believes that <br />
            continuous improvements and innovations assure your business <br />{" "}
            to run effectively and efficiently.
          </p>
        </div>
      </div>
      <h1 className="d">Product and Service</h1>
    </div>
  );
};

export default SectionAbout;
