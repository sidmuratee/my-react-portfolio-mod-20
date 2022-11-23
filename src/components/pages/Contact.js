import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Contact() {
  return (
    // <section className="benefit">
    // </section>

    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/robotContactEdit1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>
            <center>Git in touch with me</center>
          </h1>
          <p>E-Mail: loremipsum@dolor.com</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/robotResume.jpg")}
          alt="Second slide"
          height= "20%"
          width= "20%"
          />

        <Carousel.Caption>
          <h3>Social Links</h3>
          <p>
          <img
                src={require("../../assets/robotgiphy.gif")}
                className="float-right"
                alt=""
                width="20%"
                height="20%"
              />
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
