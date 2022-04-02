import React from "react";
import styles from "../components/landing.module.css";
import SubHeader from "../components/subHeader";

export default function Contact() {
  return (
    <React.Fragment>
      <style jsx>{`
        .location {
          width: 80%;
          margin: auto;
          padding: 80px 0;
        }

        .location iframe {
          width: 100%;
        }

        .contact-us {
          width: 80%;
          margin: auto;
        }

        .contact-col {
          flex-basis: 48%;
          margin-bottom: 30px;
        }

        .contact-col div {
          display: flex;
          align-items: center;
          margin-bottom: 40px;
        }

        .contact-col div .fa {
          font-size: 28px;
          color: #f44336;
          margin: 10px;
          margin-right: 30px;
        }

        .contact-col div p {
          padding: 0;
        }

        .contact-col div h5 {
          font-size: 20px;
          margin-bottom: 5px;
          color: #555;
          font-weight: 400;
        }

        .contact-col input,
        .contact-col textarea {
          width: 100%;
          padding: 15px;
          margin-bottom: 17px;
          outline: none;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }
      `}</style>

      <SubHeader img="battery_landing.jpg" text="Contact Us" />

      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.276005862418!2d74.6993063149021!3d19.139391987051592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMTnCsDA4JzIxLjgiTiA3NMKwNDInMDUuNCJF!5e0!3m2!1sen!2sin!4v1625824394730!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="contact-us">
        <div className={styles.cust_row}>
          <div className="contact-col">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>Plot No M-20, M.I.D.C. Nagapur</h5>
                <p>Ahmednagar-414111</p>
              </span>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>(2021) 2779176</h5>
                <p>Contact Number</p>
              </span>
            </div>

            <div>
              <i className="fa fa-envelope-o"></i>
              <span>
                <h5>nathengganr@rediffmail.com</h5>
                <p>Email us your query</p>
              </span>
            </div>
          </div>

          <div className="contact-col">
            <form action="">
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter email address" required />
              <input type="text" placeholder="Enter your subject" required />
              <textarea rows="8" placeholder="Message" required></textarea>
              <button className={styles.main_button}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
