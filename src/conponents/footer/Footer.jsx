import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div id="sectionId" className="footer-image">
        <div className="FG1">
          <div>
            <h1>Stormy Genius</h1>
            <p>
              The most powerful digital <br /> guidance platform
            </p>
          </div>

          <div>
            <h1>UseFull Link</h1>
            <li>YouTube</li>
            <li>Instagram</li>
            <li>Whatsapp</li>
          </div>

          <div>
            <h1>About us</h1>
            <p>
              Mob:-<a href="tel:- +918895745521">8895745521</a>
            </p>
            <p>
              Address:- XYZ Business Park <br /> Plot No. 45 , Sector 59 <br />{" "}
              Noida Uttar Pradesh 201301 <br /> India
            </p>
          </div>
        </div>

        <div className="FG2">
          
          <p>
            copyright &copy; 2025 www.StormyGenuis.com <br /> Privacy | term of
            service
          </p>
          <h1>Stormy Genius</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
