import React from "react";
import "./bottom-style.css";
import instagram from "./insta.jpg"
import Fb from "./facebook.jpeg"
import tweet from "./twitter.png"

function BottomFTN() {
  return (
    <div>
      <div className="main_container">
        <div className="upper_footer">
          <div className="Explore">
            <h2>Explore</h2>
            <ul>
              <li>Home</li>
              <li>Questions</li>
              <li>Articles</li>
              <li>Tutorials</li>
            </ul>
          </div>
          <div className="Support">
            <h2>Support</h2>
            <ul>
              <li>FAQ'S</li>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="logo">
            <h2>Stay Connected</h2>
            <ul>
              <li>
                <img src={instagram} alt="" className="logo" />
              </li>
              <li>
                <img src={Fb} alt="" className="logo" />
              </li>
              <li>
                <img src={tweet} alt="" className="logo" />
              </li>
            </ul>
          </div>
        </div>
        <div className="lower_footer">
          <h2>Dev@Dekin 2022</h2>
          <div className="content_lower">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Code Of Conduct</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomFTN;