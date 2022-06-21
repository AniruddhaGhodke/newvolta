import React from "react";
import LoadIcons from "./loadIcons";

import {
  faMapMarker,
  faPhone,
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src="/logo3.PNG" />

        <p className="footer-links">
          <a href="#">Home</a>|<a href="#">Blog</a>|<a href="#">About</a>|
          <a href="#">Contact</a>
        </p>

        <p className="footer-company-name">
          Copyright © 2021, all rights are reserved.
        </p>
      </div>

      <div className="footer-center">
        <div className="center-content">
          <LoadIcons icon={faMapMarker} impStyle={{ margin: "5px" }} />
          <p>
            <span>Plot No M-20, M.I.D.C. Nagapur, Ahmednagar-414111</span>
          </p>
        </div>

        <div className="center-content">
          <LoadIcons icon={faPhone} impStyle={{ margin: "5px" }} />
          <p>(2021) 2779176</p>
        </div>
        <div className="center-content">
          <LoadIcons icon={faEnvelope} impStyle={{ margin: "5px" }} />
          <p>
            <a href="support@.com">nathengganr@rediffmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-company-about">
          <span>About us</span>
          <p style={{ color: "white" }}>
            Exergi is a subsidiary of a parent firm Nath Engineering Works. At
            Exergi, we believe that sustainable energy storage can solve major
            energy and climate issues which the world is facing right now.
            <br />
            We are a technology agnostic company when it comes to finding best
            solutions for energy storage. We are laser focused on tackling the
            major energy storage issues and promote the decentralization of
            energy assets across the world.
          </p>
        </div>
      </div>

      <div className="footer-icons">
        <LoadIcons
          icon={faEnvelopeOpen}
          impStyle={{ margin: "5px" }}
          link="mailto:webmaster@example.com"
        />
        <LoadIcons
          icon={faLinkedin}
          impStyle={{ margin: "5px" }}
          link="https://www.linkedin.com/company/new-volta"
        />
        <LoadIcons icon={faFacebook} impStyle={{ margin: "5px" }} />
        <LoadIcons icon={faInstagram} impStyle={{ margin: "5px" }} />
        <LoadIcons icon={faTwitter} impStyle={{ margin: "5px" }} />
      </div>
      <style jsx>
        {`
          footer {
            bottom: 0;
          }

          @media (max-height: 800px) {
            footer {
              position: static;
            }
            header {
              padding-top: 40px;
            }
          }

          .footer-distributed {
            background-color: #2c292f;
            box-sizing: border-box;
            width: 100%;
            text-align: left;
            font: bold 16px sans-serif;
            padding: 50px 50px 60px 50px;
            margin-top: 80px;
          }

          .footer-distributed .footer-left,
          .footer-distributed .footer-center,
          .footer-distributed .footer-right {
            display: inline-block;
            vertical-align: top;
          }

          /* Footer left */

          .footer-distributed .footer-left {
            width: 30%;
          }

          .footer-distributed h3 {
            color: #ffffff;
            font: normal 36px "Cookie", cursive;
            margin: 0;
          }

          /* The company logo */

          .footer-distributed .footer-left img {
            width: 30%;
          }

          .footer-distributed h3 span {
            color: #e0ac1c;
          }

          /* Footer links */

          .footer-distributed .footer-links {
            color: #ffffff;
            margin: 20px 0 12px;
          }
          .footer-distributed .footer-links a:hover {
            color: rgb(124, 130, 133);
            border-bottom: 2px solid rgb(248, 248, 252);
          }

          .footer-distributed .footer-links a {
            display: inline-block;
            line-height: 1.8;
            text-decoration: none;
            color: inherit;
            margin: 3px;
          }

          .footer-distributed .footer-company-name {
            color: #8f9296;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
          }

          /* Footer Center */

          .footer-distributed .footer-center {
            width: 35%;
          }

          .footer-distributed .footer-center i s {
            background-color: #33383b;
            color: #ffffff;
            font-size: 25px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            text-align: center;
            line-height: 42px;
            margin: 10px 15px;
            vertical-align: middle;
          }

          .footer-distributed .footer-center i.fa-envelope {
            font-size: 17px;
            line-height: 38px;
          }

          .footer-distributed .footer-center p {
            display: inline-block;
            color: #ffffff;
            vertical-align: middle;
            margin: 0;
          }

          .footer-distributed .footer-center p span {
            display: block;
            font-weight: normal;
            font-size: 14px;
            line-height: 2;
          }

          .footer-distributed .footer-center p a {
            color: #e0ac1c;
            text-decoration: none;
          }

          .footer-distributed .footer-center .center-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          /* Footer Right */

          .footer-distributed .footer-right {
            width: 30%;
          }

          .footer-distributed .footer-company-about {
            line-height: 20px;
            color: #92999f;
            font-size: 13px;
            font-weight: normal;
            margin: 0;
          }

          .footer-distributed .footer-company-about span {
            display: block;
            color: #ffffff;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .footer-right p {
            font-size: small;
          }

          .footer-distributed .footer-icons {
            display: flex;
            justify-content: center;
            margin-top: 25px;
            width: 35%;
            position: relative;
            left: 50%;
            transform: translateX(-57%);
          }

          .footer-distributed .footer-icons a {
            display: inline-block;
            width: 35px;
            height: 35px;
            cursor: pointer;
            background-color: #33383b;
            border-radius: 2px;

            font-size: 20px;
            color: #ffffff;
            text-align: center;
            line-height: 35px;

            margin-right: 3px;
          }
          .footer-links a:hover {
            color: rgb(218, 211, 211);
          }
          /* Here is the code for Responsive Footer */
          /* You can remove below code if you don't want Footer to be responsive */

          @media (max-width: 880px) {
            .footer-distributed .footer-left,
            .footer-distributed .footer-center,
            .footer-distributed .footer-right {
              display: block;
              width: 100%;
              margin-bottom: 40px;
              text-align: center;
            }

            .footer-distributed .footer-center i {
              margin-left: 0;
            }
          }

          @media screen and (max-width: 880px) {
            .footer-distributed .footer-left,
            .footer-distributed .footer-center,
            .footer-distributed .footer-right {
              display: block;
              width: 100%;
              margin-bottom: 40px;
              text-align: center;
            }

            .footer-distributed .footer-center i {
              margin-left: 0;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default footer;
