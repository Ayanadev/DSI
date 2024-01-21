import React from 'react'
import img1 from "./image/2.svg";

const SectionProduct = () => {
  return (
    <div className="product">
    <div>
      <img src={img1} alt="image" />
      <h1>Our Product</h1>
      <p>
        Our product is made on the base of our <br /> team’s careful
        research and analyses, <br />
        ranging from internet based <br /> application.
      </p>
      <button>Read More</button>
    </div>
    <div>
      <img src={img1} alt="image" />
      <h1>Our Service</h1>
      <p>
        DSI’s shared service solutions focus on <br /> the front-end based
        software <br />
        development, designed specifically for <br /> the banking and
        financial sectors.
      </p>
      <button>Read More</button>
    </div>
    <div>
      <img src={img1} alt="image" />
      <h1>Our Technology</h1>
      <p>
        First JAVA, runs on more than 850 <br /> million personal computers
        worldwide, <br />
        and on billions of devices worldwide, <br /> including mobile and TV
        devices.
      </p>
      <button>Read More</button>
    </div>
  </div>
  )
}

export default SectionProduct