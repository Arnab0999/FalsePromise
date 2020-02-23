import React from "react";
import classes from "./Home.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Particles from 'react-particles-js';
const Home = () => {
  document.body.className = classes.bcg;
  return (
    <div>
      <div className="jumbotron" style={{opacity:0.55}}>
        <h1>Home</h1>
        <p className="lead">Blood Bank donation system can collect blood from many donators in 
        short from various sources and distribute that blood to needy people who require blood.  
        Online Blood Bank management system is to provide services for the people who are in need
        of blood by getting help from the donors who are interested in donating blood 
        for the people.</p>
      </div>
      <Row>
        <Col>
          <Card style={{opacity:0.55}}>
            <Card.Body>
            <Card.Title>Donate Blood</Card.Title>
            <Card.Text>
              Click here to donate blood.
            </Card.Text>
            <Button variant="primary">SIGN UP</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{opacity:0.55}}>
            <Card.Body>
            <Card.Title>Need Blood?</Card.Title>
            <Card.Text>
              Click here to accept blood.
            </Card.Text>
            <Button variant="primary">SIGN UP</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{opacity:0.55}}>
            <Card.Body>
            <Card.Title>Delivery Agent</Card.Title>
            <Card.Text>
              Click here if you want to deliver blood.
            </Card.Text>
            <Button variant="primary">SIGN UP</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Particles
        params={{
	        "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
    </div>
  )
};
export default Home;