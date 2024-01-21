import React from "react";
import images1 from "./image/1.png";

const Footer = () => {
  return (
<div>
<div className="footer">
      <div className="footers">
        <img src={images1} alt="hhkhl" />
        <span>PT Dwidasa Samsara Indonesia</span>
        <p>
          Ruko Jalur Sutera 29A No. 53 <br />
          Alam Sutera Serpong, Tangerang 15323
        </p>
      </div>
      <div className="footers2">
        <h2>Contact</h2>
        <p>Phone : +62.21.5314.1135 </p>
        <p> Fax : +62.21.5314.1135 </p>
        <p> Email : community@dwidasa.com </p>
      </div>
    </div>
    <div className="footer-end">Copyright © 2015 - Dwidasa Samsara Indonesia</div>
</div>
    
  );
};

export default Footer;
