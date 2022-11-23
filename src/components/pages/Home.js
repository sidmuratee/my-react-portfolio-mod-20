import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import background from "../../assets/bluematrixbinary";

export default function Home() {
  return (
   
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../../assets/bluematrixbinary.png")} alt="github img" width="30px" height="max" 

      />
      <Carousel.Caption>
      <h1>
        <center>Welcome to my Home(page)</center>
      </h1>        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../../assets/bluematrixbinary.png")} alt="github img" width="30px" 
        // alt="Second slide"
      />

      <Carousel.Caption>
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  );
}
