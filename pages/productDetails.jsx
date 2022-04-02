import React from "react";
import styles from "../components/landing.module.css";

const productDetails = () => {
  return (
    <React.Fragment>
      <style jsx>{`
      .battery {
        text-align: center;
        font-size: 30px;
        margin: 1rem;
        border-radius: 2rem;
      }
      .battery .course-col {
        margin-top: 5%;
        padding: 2rem;
        height: 250px;
      }
      .explore-heading {
        text-align: center;
        color: black;
        margin-top: 3rem;
      }
      .battery .explore-box {
        margin: 2rem;
      }

      .explore-box p:nth-child(5),
      .explore-box p:nth-child(2) {
        letter-spacing: 1px;
      }

      .battery-col .explore-box .large-heading {
        font-size: 50px;
      }
      .battery-col {
        flex-basis: 48%;
        background: linear-gradient(#80FFDB, #5390D9);
        background: #e4f5fc;
        background: -moz-linear-gradient(
          -45deg,
          #e4f5fc 0%,
          #bfe8f9 50%,
          #9fd8ef 69%,
          #2ab0ed 100%
        );
        background: -webkit-linear-gradient(
          -45deg,
          #e4f5fc 0%,
          #bfe8f9 50%,
          #9fd8ef 69%,
          #2ab0ed 100%
        );
        background: linear-gradient(
          135deg,
          #e4f5fc 0%,
          #bfe8f9 50%,
          #9fd8ef 69%,
          #2ab0ed 100%
        );
        border-radius: 10px;
        margin-bottom: 5%;
        padding-top: 10px;
        box-sizing: border-box;
        transition: 1s all;
        font-size: 40px;
      }

      .download-btn {
        display: inline-block;
        text-decoration: none;
        color: black;
        border: 1px solid white;
        padding: 12px 34px;
        background: white;
        position: relative;
        cursor: pointer;
        transition: 0.3s;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 14px;
        margin-bottom: 10px;
      }
      .download-btn:hover {
        /* background: #b4b8ee; */
        background: #2ab0ed;
        /* color: rgb(58, 5, 250); */
        color: rgb(255, 255, 255);
        /* border: 1px solid rgb(154, 135, 226); */
      }
      .battery-col .explore-box1 {
        width: 50%;
        border: 2px solid black;
      }
      .battery p {
        font-size: 22px;
        color: black;
      }
      .battery .p-heading {
        font-size: 30px;
        font-weight: bold;
      }

      .battery-col1:hover {
        background: rgb(205, 195, 240);
        color: rgba(255, 255, 255, 0.938);
        box-shadow: 0 0 20px 0 rgb(134, 132, 132);
      }
      `}</style>
      <section className={styles.sub_header}>
      
        <h1>About Batteries</h1>
      </section>
      {/* 2-wheeler lithium battery start  */}
      <h1 className="explore-heading">2-Wheeler Lithium Batteries</h1>
      <div className={`${styles.cust_row} battery`}>
        <div className="battery-col explore-box">
          <p className="p-heading">48 volt</p>
          <p>NMC- 26Ah/28Ah/32Ah</p>
          <a
            title="Download Sheet"
            href="/sheets/Volta_2W48V_NMC.pdf"
            download
            className="download-btn"
          >
            Download
          </a>
          <p
            style={{
              borderBottom: "2px solid ghostwhite",
              marginBottom: "0.7rem",
            }}
          ></p>
          <p>LFP- 24Ah/30Ah/36Ah</p>
          <a
            title="Download Sheet"
            href="/sheets/Volta_2W48V_NMC.pdf"
            download
            className="download-btn"
          >
            Download
          </a>
        </div>
        <div className="battery-col explore-box">
          <p className="p-heading">60 volt</p>
          <p>NMC- 26Ah/28Ah/35Ah</p>
          <a
            title="Download Sheet"
            href="/sheets/Volta_2W60V_NMC.pdf"
            download
            className="download-btn"
          >
            Download
          </a>
          <p
            style={{
              borderBottom: "2px solid ghostwhite",
              marginBottom: "0.7rem",
            }}
          ></p>
          <p>LFP- 24Ah/30Ah/36Ah</p>
          <a
            title="Download Sheet"
            href="/sheets/Volta_2W60V.pdf"
            download
            className="download-btn"
          >
            Download
          </a>
        </div>
        <div className="battery-col explore-box">
          <p className="p-heading">72 volt</p>
          <p>NMC- 26Ah/35Ah/45Ah</p>
          <a
            title="Download Sheet"
            href="/sheets/Volta_2W72V.pdf"
            download
            className="download-btn"
          >
            Download
          </a>
          <p
            style={{
              borderBottom: "2px solid ghostwhite",
              marginBottom: "0.7rem",
            }}
          ></p>
          <p>LFP- 30Ah/36Ah/48Ah</p>
          <a
            title="Download Sheet"
            href="/sheets/Volta_2W72V.pdf"
            download
            className="download-btn"
          >
            Download
          </a>
        </div>
      </div>
      {/* end of 2-wheeler  */}
      <div>
        <h1 className="explore-heading">3-Wheeler Lithium Batteries</h1>
        {/* Start of 3-wheeler lithium batteries  */}
        <div className={`${styles.cust_row} battery`}>
          <div className="battery-col explore-box">
            <p className="p-heading">51.2 volt</p>
            <p>LFP/NMC-80/100/120/200Ah</p>
            <a
              title="Download Sheet"
              href="/sheets/Volta_3W51V.pdf"
              download
              className="download-btn"
            >
              Download
            </a>
          </div>
          <div className="battery-col explore-box">
            <p className="p-heading">60 volt</p>
            <p>LFP/NMC-100/120/160/200Ah</p>
            <a
              title="Download Sheet"
              href="/sheets/Volta_3W60V.pdf"
              download
              className="download-btn"
            >
              Download
            </a>
          </div>
          <div className="battery-col explore-box">
            <p className="p-heading">72 volt</p>
            <p>LFP/NMC-100/160/200/250Ah</p>
            <a
              title="Download Sheet"
              href="/sheets/Volta_3W72V.pdf"
              download
              className="download-btn"
            >
              Download
            </a>
          </div>
        </div>
      </div>
      {/* End of 3-wheeler lithium batteries  */}
      <h1 className="explore-heading">E-Cycle Lithium Batteries</h1>
      {/* start of e-cycle lithium batteries  */}
      <div className={`${styles.cust_row} battery e-cycle`}>
        <div className="battery-col explore-box b1">
          <p className="p-heading">36 volt</p>
          <p>LFP/NMC-6/9/12Ah</p>
          <a
            title="Download Sheet"
            href="/sheets/Volta_EBike_36V.pdf"
            download
            className="download-btn"
          >
            Download
          </a>
        </div>
        <div className="battery-col explore-box b1">
          <p className="p-heading">48 volt</p>
          <p>LFP/NMC-9/12/15Ah</p>
          <a
            title="Download Sheet"
            href="/sheets/Volta_EBike_48V.pdf"
            download
            className="download-btn"
          >
            Download
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default productDetails;
