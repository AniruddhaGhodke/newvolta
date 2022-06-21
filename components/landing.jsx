import React, { useEffect, useState } from "react";
import styles from "./landing.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [modalShow, setModalShow] = useState(true);

  return (
    <React.Fragment>
      <style jsx>{`
        .card-body {
          box-shadow: 3px 4px 11px -2px rgba(0, 0, 0, 0.75);
        }
      `}</style>

      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}

      <section
        data-aos="fade"
        data-aos-duration="500"
        className={`container-fluid  ${styles.landing_main_img}`}
      >
        <div className="container text-start">
          <h2 className={styles.heading}>EXERGI</h2>
          <div className={`${styles.para_div} text-start`}>
            <h3>Transforming Energy Storage</h3>
          </div>
          <a href="#catDiv" className={styles.main_button}>
            Know More
          </a>
        </div>
      </section>

      <section
        id="catDiv"
        className={`container-fluid`}
        style={{ paddingTop: "90px" }}
      >
        <div className="container">
          <h1 className="text-center mb-4">Categories</h1>
          <div className="row">
            <div
              data-aos="fade-in"
              className={`col-lg-4`}
              style={{ marginBottom: "10px" }}
            >
              <div className="card" style={{ height: "300px", border: "none" }}>
                <div className="card-body p-0">
                  <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        aria-current="true"
                        aria-label="Slide 1"
                        className={`active ${styles.carousel_ind_btn}`}
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        className={styles.carousel_ind_btn}
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        className={styles.carousel_ind_btn}
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div
                        className={`carousel-item active ${styles.carousel_item}`}
                        data-bs-interval="5000"
                      >
                        <div className={`${styles.overlay}`}></div>
                        <img
                          src="elMob1.jpg"
                          className="d-block w-100"
                          alt="first"
                        />
                        <div
                          className={`carousel-caption d-md-block ${styles.carousel_content}`}
                        >
                          <h5>Electric Mobility</h5>
                          <a className={styles.card_btn} href="products">
                            Know More
                          </a>
                        </div>
                      </div>
                      <div
                        className={`carousel-item ${styles.carousel_item}`}
                        data-bs-interval="5000"
                      >
                        <div className={`${styles.overlay}`}></div>
                        <img
                          src="elMob2.jpg"
                          className="d-block w-100"
                          alt="first"
                        />
                        <div
                          className={`carousel-caption d-md-block ${styles.carousel_content}`}
                        >
                          <h5>Electric Mobility</h5>
                          <a className={styles.card_btn} href="products">
                            Know More
                          </a>
                        </div>
                      </div>
                      <div
                        className={`carousel-item ${styles.carousel_item}`}
                        data-bs-interval="5000"
                      >
                        <div className={`${styles.overlay}`}></div>
                        <img
                          src="elMob3.jpg"
                          className="d-block w-100"
                          alt="first"
                        />
                        <div
                          className={`carousel-caption d-md-block ${styles.carousel_content}`}
                        >
                          <h5>Electric Mobility</h5>
                          <a className={styles.card_btn} href="products">
                            Know More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-in"
              className={`col-lg-4`}
              style={{ marginBottom: "10px" }}
            >
              <div className={`card ${styles.sec_2_card} ${styles.str}`}>
                <div className="card-body text-white">
                  <div
                    className={`carousel-caption d-md-block ${styles.carousel_content}`}
                  >
                    <h5>Energy Storage</h5>
                    <a className={styles.card_btn} href="products#resId">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-in"
              className={`col-lg-4`}
              style={{ marginBottom: "10px" }}
            >
              <div className={`card ${styles.sec_2_card} ${styles.infra}`}>
                <div className="card-body text-white">
                  <div
                    className={`carousel-caption d-md-block ${styles.carousel_content}`}
                  >
                    <h5>Charging Infrastructure</h5>
                    <a className={styles.coming_soon} href="#">
                      Coming Soon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.course} id="about-us">
        <h1>About Us</h1>
        <p
          className={styles.grey_text}
          style={{ fontSize: "17px", textAlign: "justify" }}
        >
          New Volta is a subsidiary of a parent firm Nath Engineering Works. At
          New Volta, we believe that sustainable energy storage can solve major
          energy and climate issues which the world is facing right now. <br />
          <br />
          We are a technology agnostic company when it comes to finding best
          solutions for energy storage. We are laser focused on tackling the
          major energy storage issues and promote the decentralization of energy
          assets across the world. We are also committed towards creating clean
          energy-based EV infrastructure across the country. Our product serve
          multiple domains like electric two & three wheeler, solar storage,
          residential & commercial power backup.
        </p>

        <div data-aos="flip-up" className={styles.row}>
          <div className={styles.course_col}>
            <h3>Vision</h3>
            <p className={styles.grey_text} style={{ fontSize: "18px" }}>
              To be recognized as global leader in carbon reduction technologies
              by the end of this decade.
            </p>
          </div>

          <div data-aos="flip-down" className={styles.course_col}>
            <h3>Mission</h3>
            <p className={styles.grey_text} style={{ fontSize: "17px" }}>
              To fulfill the expectations of customers with greater efficiency
              and more starkness in our services.
              <br />
              <br />
              Best performance in Quality/Delivery / Cost
              <br />
              <br />
              To work tenaciously for the betterment and well-being of employees
              and society.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h1>Let's Get In Touch</h1>
        <a href="/contact" className={styles.main_button}>
          CONTACT US
        </a>
      </section>
    </React.Fragment>
  );
};

export default Landing;
