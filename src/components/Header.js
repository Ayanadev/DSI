import React from "react";
import img from "./image/1.png";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={img} alt="image" />
        <div className="header-nav">
          <a href="">Servces</a>
          <a href="">Product</a>
          <a href="">Technology</a>
          <a href="">About</a>
          <a href="">Clint</a>
          <a href="">Partner</a>
        </div>
        <div className="header-icon">
          <h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 9.58579H0L9.29289 0.292893C9.68342 -0.0976315 10.3166 -0.0976306 10.7071 0.292894L20 9.58579H18V17.5858C18 18.1381 17.5523 18.5858 17 18.5858H3C2.44772 18.5858 2 18.1381 2 17.5858V9.58579ZM4 16.5858H8V11.5858H12V16.5858H16V8.41421L10 2.41421L4 8.41421V16.5858Z"
                fill="#1F2E35"
                fill-opacity="0.8"
              />
            </svg>
          </h4>
          <h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H2C0.895431 16 0 15.1046 0 14V2ZM18 3.8685V14H2V3.86851L10 9.20184L18 3.8685ZM17.1972 2H2.80279L10 6.79814L17.1972 2Z"
                fill="#1F2E35"
                fill-opacity="0.8"
              />
            </svg>
          </h4>
          <h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.59 5.17L1.41 0L0 1.41L5.17 6.58L6.59 5.17ZM10.5 0L12.54 2.04L0 14.59L1.41 16L13.96 3.46L16 5.5V0H10.5ZM9.42 10.82L10.83 9.41L13.96 12.54L16 10.5V16H10.5L12.55 13.95L9.42 10.82Z"
                fill="#1F2E35"
                fill-opacity="0.8"
              />
            </svg>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
