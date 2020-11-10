import Carousel from 'react-bootstrap/Carousel'  ;
import React, { useState } from 'react';
import firstSlider from "./images/hero-image 1.png";
import nextButton from "./images/next-btn.png";
import prevButton from "./images/prev-btn.png";
import secondSlider from "./images/slider3.png";
import './Slidebar.css';

const Slidebar = () => {
    
        const [index, setIndex] = useState(0);
    
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        }
    return (
<div className="slide-container">
    <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={false} prevIcon={false} indicators={false} interval={7000} > 
      <Carousel.Item className="slide-item">
      <div className="row">
            <div className="col-md-7 left-item">
                <h1>Learn from anywhere, <br/> anytime</h1>
                <p className="text-slide">Learn your favorite subject, build your skills. <br/>
                Enroll online assignment for world-class instructors.</p>
                <br/>
                <br/>
                <button className="browse"> Browse All Subject</button>
                <br/>
                <br/>
                <button activeIndex={index} onSelect={handleSelect} className="next-btn">
                    <img src={prevButton} alt=""/>
                </button>
                
                <button activeIndex={index} onSelect={handleSelect} className="next-btn">
                    <img src={nextButton} alt=""/>
                </button>
            </div>
            <div className="col-md-5">
                <img
                className="d-block w-100 slide-image"
                src={firstSlider}
                alt="First slide"
                />
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slide-item">
      <div className="row">
            <div className="col-md-7 left-item">
                <h1>Learn from anywhere, <br/> anytime</h1>
                <p className="text-slide">Learn your favorite subject, build your skills. <br/>
                Enroll online assignment for world-class instructors.</p>
                <br/>
                <br/>
                <button className="browse"> Browse All Subject</button>
                <br/>
                <br/>
                <button activeIndex={index} onSelect={handleSelect} className="next-btn">
                    <img src={prevButton} alt=""/>
                </button>
                
                <button activeIndex={index} onSelect={handleSelect} className="next-btn">
                    <img src={nextButton} alt=""/>
                </button>
            </div>
            <div className="col-md-5">
                <img
                className="d-block w-100 slide-image"
                src={secondSlider}
                alt="First slide"
                />
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
            
</div>
    );
};

export default Slidebar;
