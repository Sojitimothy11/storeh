import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Footer/Footer.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li>
              <Link to="Home" href="/Home/">
                Home
              </Link>
            </li>
            <li>
              <Link to="Services" href="/Services/">
                Services
              </Link>
            </li>
            <li>
              <Link to="Partner" href="/Partner/">
                Partnership
              </Link>
            </li>
            <li>
              <Link to="Updates" href="/Updates/">
                Updates
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="link">
        <a href="http://https://twitter.com/StoreHarmony?t=zc9pDjCgwa0C2MmMTf-c0w&s=08">
          <i className="bi bi-twitter"></i>
        </a>
        {"   "}
        <a href="https://www.instagram.com/storeharmonytech/">
          <i className="bi bi-instagram"></i>
        </a>{" "}
        <a href="https://www.youtube.com/@storeharmony4687">
          <i className="bi bi-youtube"></i>
        </a>
        {"   "}
        <a href="https://web.facebook.com/storeharmony">
          <i className="bi bi-facebook"></i>
        </a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} StoreHarmony Ltd. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
