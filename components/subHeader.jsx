import React from "react";

const subHeader = ({ img, text }) => {
  return (
    <section className="sub_header">
      <style jsx>{`
        .sub_header {
          height: 60vh;
          width: 100%;
          background-image: linear-gradient(
              rgba(4, 9, 30, 0.7),
              rgba(4, 9, 30, 0.7)
            ),
            url("/${img}");
          background-position: center;
          background-size: cover;
          text-align: center;
          color: white;
          position: relative;
        }

        .sub_header h1 {
          transform: translate(-50%);
          top: 50%;
          left: 50%;
          position: absolute;
        }
      `}</style>
      <h1>{text}</h1>
    </section>
  );
};

export default subHeader;
