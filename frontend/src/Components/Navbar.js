import React from "react";
import image from "./img/logo_dark.png";
import "./Style.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container-fluid container-xxl d-flex align-items-center">
          <div id="logo" className="me-auto">
            {/* <h1>
            <a href="index.html">
              The<span>Event</span>
            </a>
          </h1> */}
            <a href="#hero" className="scrollto">
              <img src={image} alt="" title="" />
            </a>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="#hero">
                  Home
                </Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Sponsors
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="Team.html">
                  Team
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="Gallery.html">
                  Gallery
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="Contact.html">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <button className="sweet-alert-test buy-tickets">Register</button>
          {/* <form action="https://forms.gle/PLCuYH97ZegfuTbM6">
          <button className=" buy-tickets"></button>
          <a href="register.html"></a>Register
        </form> */}
          {/* <a href="https://forms.gle/5GGc9YbWCowd6aQZ7" target="_blank">
          {" "}
          <button className="buy-tickets"> Register </button>
        </a> */}
        </div>
      </header>
    </>
  );
}

export default Navbar;
