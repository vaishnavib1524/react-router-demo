import React from "react";
import { Carousel, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Home(){
    const navigate=useNavigate();
    const goToAbout=()=>{
        navigate('/about');
    }
    return(
        <div>
            <h2>
                Home Page
            </h2>
            <button onClick={goToAbout}>Go to About Page</button>
        </div>
    )
}
export default Home;

const HomeCourasal = () => {
  return (
    <Carousel fade interval={6000}>
      
      {/* Slide 1 */}
      <Carousel.Item>
        <div className="carousel-slide slide1">
          <Carousel.Caption>
            <h1>This is Home Page!!</h1>
            <p>We are committed to providing the best services.</p>
            <Button variant="primary">Get Started</Button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="carousel-slide slide2">
          <Carousel.Caption>
            <h1>About Our Company</h1>
            <p>Trusted solutions built with quality and care.</p>
            <Button variant="light">Learn More</Button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div className="carousel-slide slide3">
          <Carousel.Caption>
            <h1>Contact Us Today</h1>
            <p>We are here to help you grow.</p>
            <Button variant="success">Contact</Button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

    </Carousel>
  );
};

export { HomeCourasal };