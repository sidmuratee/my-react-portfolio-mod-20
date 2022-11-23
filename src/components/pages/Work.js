import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Work() {
  return (
    <Carousel variant="" fade>
      {/* <div> */}
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={require("../../assets/robotEquations.jpg")}
          alt="github img"
          width="30px"
          height="max"
        />
        <Carousel.Caption>
          {/* <section idName="my-work" className="content2"> */}
          <h3>My Work</h3>
          <p>
            <a href="https://github.com/sidmuratee?tab=repositories">
              <img
                src={require("../../assets/gitrip.png")}
                alt="git-hub-cat"
                className="float-right"
                width="20%"
                height="20%"
              />
            </a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            recusandae temporibus unde praesentium esse sunt totam. Distinctio
            quas, illo dolore, minima placeat aperiam, minus tempore quis odio
            assumenda reiciendis ea.
          </p>
          {/* </section> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/androidRobotWork.jpg")}
          alt="github img"
          width="30px"
          height="max"
        />
        <Carousel.Caption>
          {/* <section idName="Resume" className="content2">
            <img src="./android-resumepic.jpg" alt="android-reboot" className="float-left" /> */}
          <h3>My Resume</h3>

          <ul>
            <li>Project 1: https://fe011001.github.io/Doomed-Drinks/</li>
            <li>Project 2: https://stark-ridge-23340.herokuapp.com/</li>
          </ul>
          {/* </section> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* </div> */}
    </Carousel>
  );
}
// export default
//  function Resume() {
//   return (
//   );
// }
