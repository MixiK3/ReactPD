import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <h3 className="footer-h3">СДБИЗ</h3>
      <p className="footer-want">Хотите узнать больше?</p>
      <a href="#">
        {" "}
        <p className="footer-together">Связаться с нами</p>
      </a>
      <h4 className="copyright">
        Copyright © Moscow Polytechnic University 2024
      </h4>
    </div>
  );
}

export default Footer;
