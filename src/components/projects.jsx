
import React from 'react'
import img from './../profile.jpg'
import ReactBootstrap, {Carousel} from 'react-bootstrap'
import { Component } from 'react'

class projectpage extends Component{
    render(){
        return(
        <div className=".carousel">
       	<Carousel showarrows="true">
            <Carousel.Item>
                <img
                    className=".carousel-item"
                    src="https://picsum.photos/800/400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=".carousel-item"
                    src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=".carousel-item"
                    src="https://picsum.photos/800/400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>

        )
    }
}

export default projectpage