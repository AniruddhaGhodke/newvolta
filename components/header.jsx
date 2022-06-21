import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

function header({ page }) {
  return (
    <React.Fragment>
      <style jsx>
        {`
          .navbar-light .navbar-nav .nav-link {
            display: inline-flex;
            flex-direction: column;
            color: #444444;
            font-size: 1rem;
          }

          .navbar-light .navbar-nav .nav-link.active:after {
            content: " ";
            border: 2px solid #006c31;
            margin: auto;
            border-radius: 10px;
            opacity: 1;
            width: 80%;
            top: 0;
            transition: 0.4s all;
          }

          .navbar-light .navbar-nav .nav-link:after {
            content: " ";
            width: 0%;
            border: 2px solid #006c31;
            margin: auto;
            border-radius: 10px;
            opacity: 0;
            top: -20px;
            transition: 0.4s all;
          }

          .navbar-light .navbar-nav .nav-link:hover:after {
            opacity: 1;
            width: 80%;
            top: 0;
          }

          .navbar-light .navbar-nav .nav-link.disabled:hover:after {
            opacity: 0;
          }
        `}
      </style>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-light ${styles.navbar}`}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="./logo3.PNG" alt="logo" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{ justifyContent: "flex-end" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className={`nav-link ${page == "/" && "active"}`}>Home</a>
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="products">
                  Products
                </a> */}
                <Link href="products">
                  <a className={`nav-link ${page == "/products" && "active"}`}>
                    Products
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="contact">
                  Contact Us
                </a> */}
                <Link href="contact">
                  <a className={`nav-link ${page == "/contact" && "active"}`}>
                    Contact Us
                  </a>
                </Link>
              </li>
              <li className="nav-item" title="Coming Soon">
                <a
                  className={`nav-link disabled ${
                    page == "dashboard" && "active"
                  }`}
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default header;
