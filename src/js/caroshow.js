import React from 'react'
import img from './../profile.jpg'
import bird from './../twitterbird.png'
import Flappy from './../flapbird.png'
import teddy from './../teddygame.png'
import ReactBootstrap, {Carousel} from 'react-bootstrap'
import { Component } from 'react'

function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={teddy}
            alt="First slide"
          />
            <Carousel.Caption>
            <h7>Zelda Clone</h7>

                <div className="social-icons">
                  <a href="https://github.com/tigerj2/Zelda-Clone">
                    <i className="fa fa-github" ></i>
                  </a>
                </div>
                <p>Clone of the original "Legend of Zelda", written in Java utilising the Swing library. The game is playable by downloading the Finding_Teddy.jar file and running it via double clicking it.</p>
                </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bird}
            alt="Second slide"
          />
  
            <Carousel.Caption>
                <h7>Twitter Clone</h7>
                <div className="social-icons">
                  <a href="https://github.com/tigerj2/Python-Cherrypy-TwitterClone">
                    <i className="fa fa-github" ></i>
                  </a>
                </div>
                <p>A Twitter clone which allows private messaging among a group of friends when a central server is hosted. Leverages SQLite databases, the Cherrypy Python library and other API's.</p>
                </Carousel.Caption>
            </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Flappy}
            alt="Third slide"
          />
  
            <Carousel.Caption>
            <h7>FlappyBird Clone</h7>

                <div className="social-icons">
                  <a href="https://github.com/tigerj2/cs305_flappybird">
                    <i className="fa fa-github" ></i>
                  </a>
                </div>
                <p>Flappy bird clone created in VHDL. Uses an Altera DE0 board for GPIO/Connector pins for input/output. The game is played using a PS2 connection mouse.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
export default ControlledCarousel