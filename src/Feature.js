import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import touchIcon from "./images/icon-1.png";
import  learnIcon from "./images/icon-2.png";
import expertIcon from "./images/icon-3.png";
import './Feature.css';

const Feature = () => {
    return (
        <div className='feature-container'>
            <Container className="feature">
            <Row className="justify-content-md-center main-feature">
                <Col xs lg="4">
                    <img src={touchIcon} alt=""/>
                    <br/>
                    <h4>Unlimited Access</h4>
                    <p>One subscription unlimited access.</p>
                </Col>
                <Col xs lg="4">
                    <img className="learn-icon" src={learnIcon} alt=""/>
                    <br/>
                    <h4>Learn Anywhere</h4>
                    <p>Switch between your computer,<br/>
                        tablet or mobile device.</p>
                </Col>
                <Col xs lg="4">
                    <img src={expertIcon} alt=""/>
                    <br/>
                    <h4>Expert Teachers</h4>
                    <p>Learn from industry experts who <br/>
                        passionate about teaching.
                    </p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Feature;