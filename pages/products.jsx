import React from "react";
import Link from "next/link";
import SubHeader from "../components/subHeader";
import styles from "../components/landing.module.css";

const products = () => {
  return (
    <React.Fragment>
      <style jsx>{`
        .about-us {
          width: 80%;
          margin: auto;
          padding-top: 80px;
          padding-bottom: 50px;
        }

        .about-col {
          flex-basis: 48%;
          padding: 30px 2px;
        }

        .about-col img {
          width: 100%;
        }

        .about-col h1 {
          padding-top: 0;
        }

        .about-col p {
          padding: 15px 0 25px;
        }

        .hero-btn {
          display: inline-block;
          text-decoration: none;
          color: white;
          border: 1px solid white;
          padding: 12px 34px;
          background: transparent;
          position: relative;
          cursor: pointer;
          border-radius: 5px;
        }

        .hero-btn:hover {
          border: 1px solid #f44336;
          background: #f44336;
          transition: 0.5s;
        }

        .red-btn {
          border: 1px solid #f44336;
          background: transparent;
          color: #f44336;
        }

        .red-btn:hover {
          color: white;
        }

        .disabled-btn {
          cursor: default;
          pointer-events: none;
          border: 1px solid white;
          padding: 0;
        }

        .grey_text {
          color: #777;
          font-size: 14px;
          font-weight: 300;
          line-height: 22px;
          padding: 10px;
        }
      `}</style>
      <SubHeader img="battery_landing.jpg" text="Battery Categories" />
      <section className="about-us">
        <div className={styles.cust_row}>
          <div className="about-col">
            <h1>Electric Vehicles</h1>
            <p className="grey_text">
              Lithium batteries designed specifically for improved vehicle
              performance in terms of range and charging time. Our innovative
              battery design supports every EV OEM with their battery form
              factors. These batteries can also be used for the swapping model
              as they are backed by the telematics platform.
              <br />E Rickshaw 51.2 V / 60 V / 72 V E Scooter 48 V / 60 V / 72 V
              E Bike 48 V / 36 V
            </p>

            <Link href="/productDetails">
              <a className="hero-btn red-btn">EXPLORE NOW</a>
            </Link>
          </div>

          <div className="about-col">
            <img src="electric-vehicle-1.jpg" alt="about" />
          </div>
        </div>

        <div id="resId" className={`${styles.cust_row} ${styles.col_min_rev}`}>
          <div className="about-col">
            <img src="1.jpg" alt="about" />
          </div>
          <div className="about-col">
            <h1>Residential</h1>
            <p className="grey_text">
              Lithium based batteries are quite useful as Home and Office backup
              supply. Tier 2 and tier 3 cities in India still face some amount
              of load shading. Our efficient battery solutions provide customers
              with more reliable and cost-efficient solutions as compared to
              existing Lead Acid batteries. <br />
              Upto 10 kW
            </p>
            <Link href="/productDetails">
              <a className="hero-btn red-btn">EXPLORE NOW</a>
            </Link>
          </div>
        </div>

        <div className={`${styles.cust_row}`}>
          <div className="about-col">
            <h1>Solar Coupled Batteries</h1>
            <p className="grey_text">
              Batteries are the essential component of the path towards India’s
              energy sufficiency. Solar off-grid solutions require intelligent
              batteries to provide enough backup power. Our smart batteries are
              coupled with a whole range of solar applications like roof-top
              solar, solar lamps etc.
            </p>
            <a href="" className="hero-btn red-btn disabled-btn">
              Coming Soon
            </a>
          </div>

          <div className="about-col">
            <img src="solar-bat-1.jpg" alt="about" />
          </div>
        </div>

        <div className={`${styles.cust_row} ${styles.col_min_rev}`}>
          <div className="about-col">
            <img src="ind-2.jpg" alt="about" />
          </div>

          <div className="about-col">
            <h1>Commercial & Industrial</h1>
            <p className="grey_text">
              Our highly powered, high efficiency batteries help C&I customers
              to achieve their clean energy targets by reducing their carbon
              footprint. Plus, batteries provide energy reliability for critical
              applications like hospitals, chemical industries, data centers,
              telecommunication towers etc. <br />
              50 to 500 kW
            </p>
            <a href="" className="hero-btn red-btn disabled-btn">
              Coming Soon
            </a>
          </div>
        </div>

        <div className={styles.cust_row}>
          <div className="about-col">
            <h1>Utility Scale Storage</h1>
            <p className="grey_text">
              Large scale battery solutions are provided for peak electricity
              load supply and to satisfy the ancillary service demand. As
              renewable capacity increases in India, batteries will be very
              important in supplying the evening peak supply due to their quick
              ramp up ability. <br />5 – 20 MWh
            </p>
            <a href="" className="hero-btn red-btn disabled-btn">
              Coming Soon
            </a>
          </div>

          <div className="about-col">
            <img src="utility-1.jpg" alt="about" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default products;
