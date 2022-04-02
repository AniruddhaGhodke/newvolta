import React from "react";
import styles from './landingAlt.module.css';

function LandingAlt() {
  return (
    <React.Fragment>
      <section
        className={`container-fluid d-flex justify-content-center align-items-center flex-column ${styles.landing_main_img}`}
      >
        <h2>New Volta Battery</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          minima quisquam, doloremque ut nihil nesciunt totam, eligendi
          accusamus repellat modi cum nisi facilis. Optio quo minima a, ab quod
          laudantium.
        </p>
        <button className={styles.main_button}>Know More</button>
      </section>
      <section>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
      </section>
    </React.Fragment>
  );
}

export default LandingAlt;
